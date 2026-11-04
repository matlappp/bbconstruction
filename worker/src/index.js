// Formulaire de contact bbconstruction.ca → Turnstile → Resend → Gmail de Martin

const BUDGETS = {
  'moins-5000': 'Moins de 5 000 $',
  '5000-15000': '5 000 $ – 15 000 $',
  '15000-30000': '15 000 $ – 30 000 $',
  '30000-50000': '30 000 $ – 50 000 $',
  'plus-50000': 'Plus de 50 000 $',
};

const LIMITS = { nom: 100, telephone: 40, email: 200, travaux: 5000 };

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const allowed = env.ALLOWED_ORIGINS.split(',').map(s => s.trim());
    const cors = {
      'Access-Control-Allow-Origin': allowed.includes(origin) ? origin : allowed[0],
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept',
      'Vary': 'Origin',
    };
    const reply = (status, body) => new Response(JSON.stringify(body), {
      status, headers: { ...cors, 'Content-Type': 'application/json' },
    });

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') return reply(405, { ok: false, error: 'method' });
    if (!allowed.includes(origin)) return reply(403, { ok: false, error: 'origin' });

    let form;
    try { form = await request.formData(); } catch { return reply(400, { ok: false, error: 'body' }); }
    const field = name => String(form.get(name) || '').trim();

    // Champ piège : invisible pour les humains, rempli par les robots
    if (field('site_web')) return reply(200, { ok: true });

    const data = {
      nom: field('nom'),
      telephone: field('telephone'),
      email: field('email'),
      travaux: field('travaux'),
      budget: BUDGETS[field('budget')] || 'Non précisé',
      langue: field('langue') === 'en' ? 'Anglais' : 'Français',
    };
    if (!data.nom || !data.telephone || !data.travaux || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return reply(400, { ok: false, error: 'fields' });
    }
    for (const [key, max] of Object.entries(LIMITS)) {
      if (data[key].length > max) return reply(400, { ok: false, error: 'fields' });
    }

    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: field('cf-turnstile-response'),
        remoteip: request.headers.get('CF-Connecting-IP') || '',
      }),
    }).then(r => r.json()).catch(() => ({ success: false }));
    if (!verify.success) return reply(403, { ok: false, error: 'captcha' });

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.FROM_EMAIL,
        to: [env.TO_EMAIL],
        reply_to: data.email,
        subject: `Nouvelle demande de soumission — ${data.nom}`,
        html: emailHtml(data),
        text: emailText(data),
      }),
    });
    if (!res.ok) {
      console.error('Resend', res.status, await res.text());
      return reply(502, { ok: false, error: 'send' });
    }
    return reply(200, { ok: true });
  },
};

const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function emailText(d) {
  return [
    'Nouvelle demande de soumission reçue sur bbconstruction.ca',
    '',
    `Nom : ${d.nom}`,
    `Téléphone : ${d.telephone}`,
    `Courriel : ${d.email}`,
    `Budget estimé : ${d.budget}`,
    `Langue : ${d.langue}`,
    '',
    'Description des travaux :',
    d.travaux,
    '',
    'Pour répondre au client, cliquez simplement sur « Répondre ».',
  ].join('\n');
}

function emailHtml(d) {
  const tel = d.telephone.replace(/[^\d+]/g, '');
  const row = (label, value) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #E5E5E5;color:#6B6B6B;font-size:13px;text-transform:uppercase;letter-spacing:.5px;width:140px;vertical-align:top">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #E5E5E5;color:#1A1A1A;font-size:15px">${value}</td>
    </tr>`;
  return `<!doctype html>
<html lang="fr"><body style="margin:0;padding:24px;background:#F2F2F2;font-family:Arial,Helvetica,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#FFFFFF;border-radius:8px;overflow:hidden">
    <tr><td style="background:#1A1A1A;padding:20px 28px;color:#FFFFFF;font-size:18px;font-weight:bold">
      <span style="color:#E8740C">B&amp;B</span> Construction — Nouvelle demande
    </td></tr>
    <tr><td style="padding:24px 28px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
        ${row('Nom', esc(d.nom))}
        ${row('Téléphone', `<a href="tel:${esc(tel)}" style="color:#E8740C">${esc(d.telephone)}</a>`)}
        ${row('Courriel', `<a href="mailto:${esc(d.email)}" style="color:#E8740C">${esc(d.email)}</a>`)}
        ${row('Budget estimé', esc(d.budget))}
        ${row('Langue', esc(d.langue))}
      </table>
      <p style="margin:24px 0 8px;color:#6B6B6B;font-size:13px;text-transform:uppercase;letter-spacing:.5px">Description des travaux</p>
      <p style="margin:0;color:#1A1A1A;font-size:15px;line-height:1.6;white-space:pre-wrap">${esc(d.travaux)}</p>
      <p style="margin:28px 0 0;color:#6B6B6B;font-size:13px">Pour répondre au client, cliquez simplement sur « Répondre ».</p>
    </td></tr>
  </table>
</body></html>`;
}
