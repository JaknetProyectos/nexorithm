import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SUPPORT_EMAIL = "hello@centromedicoavanza.com";
const BRAND_NAME = "nexorithm.com.mx";
const BRAND_URL = "https://nexorithm.com.mx";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatMessage(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

function shell(content: string) {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>${BRAND_NAME}</title>
      </head>
      <body
        style="
          margin:0;
          padding:0;
          background:
            radial-gradient(circle at top left, rgba(205,239,36,0.10), transparent 28%),
            radial-gradient(circle at top right, rgba(0,94,80,0.22), transparent 30%),
            #020403;
          font-family: Arial, Helvetica, sans-serif;
          color:#ffffff;
        "
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="background:#020403; padding:32px 14px;"
        >
          <tr>
            <td align="center">
              <table
                role="presentation"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
                style="
                  max-width:680px;
                  width:100%;
                  border-collapse:separate;
                  border-spacing:0;
                "
              >
                ${content}
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function topBanner(pretitle: string, title: string, subtitle: string) {
  return `
    <tr>
      <td
        style="
          padding:0;
          border-radius:28px 28px 0 0;
          overflow:hidden;
          background:
            linear-gradient(135deg, rgba(0,94,80,0.98) 0%, rgba(2,4,3,0.98) 50%, rgba(205,239,36,0.18) 100%);
          border:1px solid rgba(255,255,255,0.08);
          border-bottom:none;
        "
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <tr>
            <td style="padding:34px 34px 24px 34px;">
              <table
                role="presentation"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
              >
                <tr>
                  <td valign="top">
                    <div
                      style="
                        display:inline-block;
                        margin-bottom:14px;
                        padding:8px 14px;
                        border-radius:999px;
                        background:rgba(205,239,36,0.14);
                        border:1px solid rgba(205,239,36,0.25);
                        color:#cdef24;
                        font-size:11px;
                        font-weight:700;
                        letter-spacing:0.12em;
                        text-transform:uppercase;
                      "
                    >
                      ${escapeHtml(pretitle)}
                    </div>

                    <h1
                      style="
                        margin:0;
                        font-size:32px;
                        line-height:1.05;
                        letter-spacing:-0.04em;
                        color:#ffffff;
                        font-weight:800;
                      "
                    >
                      ${escapeHtml(title)}
                    </h1>

                    <p
                      style="
                        margin:14px 0 0 0;
                        max-width:520px;
                        font-size:15px;
                        line-height:1.75;
                        color:rgba(255,255,255,0.78);
                      "
                    >
                      ${escapeHtml(subtitle)}
                    </p>
                  </td>

                  <td align="right" valign="top" style="padding-left:18px;">
                    <div
                      style="
                        width:78px;
                        height:78px;
                        border-radius:24px;
                        background:
                          linear-gradient(135deg, rgba(205,239,36,1) 0%, rgba(0,94,80,1) 100%);
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        box-shadow:0 18px 40px rgba(0,0,0,0.30);
                      "
                    >
                      <div
                        style="
                          width:42px;
                          height:42px;
                          border-radius:14px;
                          border:2px solid rgba(255,255,255,0.9);
                          position:relative;
                          box-sizing:border-box;
                        "
                      >
                        <div
                          style="
                            position:absolute;
                            left:10px;
                            top:18px;
                            width:18px;
                            height:6px;
                            border-left:3px solid #ffffff;
                            border-bottom:3px solid #ffffff;
                            transform:rotate(-45deg);
                            box-sizing:border-box;
                          "
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 34px 34px 34px;">
              <table
                role="presentation"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
              >
                <tr>
                  <td
                    style="
                      height:1px;
                      background:linear-gradient(90deg, transparent, rgba(205,239,36,0.6), rgba(0,94,80,0.55), transparent);
                    "
                  ></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function cardStart() {
  return `
    <tr>
      <td
        style="
          padding:0;
          background:#08100c;
          border-left:1px solid rgba(255,255,255,0.08);
          border-right:1px solid rgba(255,255,255,0.08);
        "
      >
  `;
}

function cardEnd() {
  return `
      </td>
    </tr>
  `;
}

function footerBlock() {
  return `
    <tr>
      <td
        style="
          padding:0;
          border-radius:0 0 28px 28px;
          overflow:hidden;
          background:
            linear-gradient(180deg, rgba(8,16,12,1) 0%, rgba(3,6,5,1) 100%);
          border:1px solid rgba(255,255,255,0.08);
          border-top:none;
        "
      >
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <tr>
            <td style="padding:22px 34px 30px 34px;">
              <table
                role="presentation"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
              >
                <tr>
                  <td style="padding-bottom:14px;">
                    <div
                      style="
                        width:100%;
                        height:1px;
                        background:linear-gradient(90deg, transparent, rgba(205,239,36,0.5), rgba(0,94,80,0.5), transparent);
                      "
                    ></div>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <p
                      style="
                        margin:0;
                        font-size:12px;
                        line-height:1.7;
                        color:rgba(255,255,255,0.60);
                      "
                    >
                      ${BRAND_NAME} · hosting web y soluciones digitales.
                    </p>
                    <p
                      style="
                        margin:8px 0 0 0;
                        font-size:11px;
                        line-height:1.7;
                        color:rgba(255,255,255,0.42);
                      "
                    >
                      © 2026 · ${BRAND_NAME}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function metaGrid(items: { label: string; value: string; href?: string }[]) {
  const cells = items
    .map(
      (item) => `
      <td valign="top" style="padding:0 8px 0 0;">
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="
            background:linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.025));
            border:1px solid rgba(255,255,255,0.08);
            border-radius:20px;
            overflow:hidden;
          "
        >
          <tr>
            <td style="padding:18px 18px 16px 18px;">
              <p
                style="
                  margin:0 0 7px 0;
                  font-size:11px;
                  line-height:1;
                  letter-spacing:0.12em;
                  text-transform:uppercase;
                  font-weight:700;
                  color:rgba(205,239,36,0.95);
                "
              >
                ${escapeHtml(item.label)}
              </p>
              ${
                item.href
                  ? `<a href="${escapeHtml(item.href)}" style="font-size:15px; line-height:1.6; color:#ffffff; text-decoration:none; font-weight:700;">${escapeHtml(item.value)}</a>`
                  : `<p style="margin:0; font-size:15px; line-height:1.6; color:#ffffff; font-weight:700;">${escapeHtml(item.value)}</p>`
              }
            </td>
          </tr>
        </table>
      </td>
    `
    )
    .join("");

  return `
    <table
      role="presentation"
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="margin-top:22px; table-layout:fixed;"
    >
      <tr>
        ${cells}
      </tr>
    </table>
  `;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, email, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos (nombre, email, mensaje)" },
        { status: 400 }
      );
    }

    const safeNombre = escapeHtml(String(nombre).trim());
    const safeEmail = escapeHtml(String(email).trim());
    const safeMessage = formatMessage(String(mensaje).trim());

    const htmlNegocio = shell(`
      ${topBanner(
        "Nuevo contacto",
        "Tienes una nueva solicitud desde el sitio",
        "Se recibió un mensaje desde el formulario de contacto de nexorithm.com.mx. Abre los detalles abajo para responder con rapidez."
      )}

      ${cardStart()}
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="padding:30px 34px 8px 34px;"
        >
          <tr>
            <td>
              <div
                style="
                  display:inline-block;
                  margin-bottom:18px;
                  padding:7px 13px;
                  border-radius:999px;
                  background:rgba(0,94,80,0.22);
                  border:1px solid rgba(0,94,80,0.35);
                  color:#8ff0d7;
                  font-size:11px;
                  font-weight:700;
                  letter-spacing:0.12em;
                  text-transform:uppercase;
                "
              >
                Lead entrante
              </div>

              <h2
                style="
                  margin:0 0 12px 0;
                  font-size:26px;
                  line-height:1.15;
                  letter-spacing:-0.03em;
                  color:#ffffff;
                "
              >
                ${safeNombre}
              </h2>

              <p
                style="
                  margin:0;
                  font-size:15px;
                  line-height:1.8;
                  color:rgba(255,255,255,0.70);
                "
              >
                El usuario completó el formulario de contacto. Revisa el correo y el mensaje para continuar la conversación.
              </p>

              ${metaGrid([
                { label: "Nombre", value: String(nombre).trim() },
                { label: "Correo", value: String(email).trim(), href: `mailto:${String(email).trim()}` },
              ])}
            </td>
          </tr>

          <tr>
            <td style="padding-top:22px;">
              <div
                style="
                  padding:22px;
                  border-radius:24px;
                  background:
                    linear-gradient(180deg, rgba(205,239,36,0.08), rgba(0,94,80,0.06));
                  border:1px solid rgba(205,239,36,0.18);
                "
              >
                <p
                  style="
                    margin:0 0 12px 0;
                    font-size:11px;
                    line-height:1;
                    letter-spacing:0.12em;
                    text-transform:uppercase;
                    font-weight:700;
                    color:#cdef24;
                  "
                >
                  Mensaje
                </p>

                <p
                  style="
                    margin:0;
                    font-size:15px;
                    line-height:1.9;
                    color:rgba(255,255,255,0.84);
                    white-space:normal;
                  "
                >
                  ${safeMessage}
                </p>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:22px 0 30px 0;">
              <table
                role="presentation"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
              >
                <tr>
                  <td
                    style="
                      padding:16px 18px;
                      border-radius:18px;
                      background:rgba(255,255,255,0.03);
                      border:1px solid rgba(255,255,255,0.07);
                      color:rgba(255,255,255,0.56);
                      font-size:12px;
                      line-height:1.75;
                    "
                  >
                    Respuesta sugerida: revisar la intención del proyecto, confirmar alcance y contestar desde <strong style="color:#ffffff;">${escapeHtml(SUPPORT_EMAIL)}</strong>.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      ${cardEnd()}

      ${footerBlock()}
    `);

    const htmlUsuario = shell(`
      ${topBanner(
        "Mensaje recibido",
        "Gracias, hemos recibido tu mensaje",
        "Tu solicitud ya entró al sistema. El equipo de nexorithm.com.mx la revisará y dará seguimiento por correo."
      )}

      ${cardStart()}
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="padding:34px;"
        >
          <tr>
            <td align="center">
              <div
                style="
                  width:96px;
                  height:96px;
                  border-radius:30px;
                  background:
                    radial-gradient(circle at 30% 30%, rgba(205,239,36,1) 0%, rgba(0,94,80,1) 100%);
                  display:flex;
                  align-items:center;
                  justify-content:center;
                  box-shadow:0 24px 50px rgba(0,0,0,0.35);
                  margin:0 auto 22px auto;
                "
              >
                <div
                  style="
                    width:46px;
                    height:26px;
                    border-left:6px solid #ffffff;
                    border-bottom:6px solid #ffffff;
                    transform:rotate(-45deg) translate(3px, -2px);
                    box-sizing:border-box;
                  "
                ></div>
              </div>

              <h2
                style="
                  margin:0;
                  font-size:30px;
                  line-height:1.08;
                  letter-spacing:-0.04em;
                  color:#ffffff;
                "
              >
                Hola, ${safeNombre}
              </h2>

              <p
                style="
                  margin:14px auto 0 auto;
                  max-width:520px;
                  font-size:15px;
                  line-height:1.85;
                  color:rgba(255,255,255,0.74);
                "
              >
                Recibimos tu mensaje correctamente. En breve revisaremos lo que necesitas y te responderemos al correo que compartiste.
              </p>

              ${metaGrid([
                { label: "Correo registrado", value: String(email).trim(), href: `mailto:${String(email).trim()}` },
                { label: "Sitio", value: BRAND_NAME, href: BRAND_URL },
              ])}
            </td>
          </tr>

          <tr>
            <td style="padding-top:22px;">
              <table
                role="presentation"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
              >
                <tr>
                  <td
                    style="
                      padding:0;
                    "
                  >
                    <table
                      role="presentation"
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      style="
                        border-radius:24px;
                        overflow:hidden;
                        border:1px solid rgba(205,239,36,0.16);
                        background:
                          linear-gradient(180deg, rgba(0,94,80,0.18), rgba(205,239,36,0.06));
                      "
                    >
                      <tr>
                        <td style="padding:22px;">
                          <p
                            style="
                              margin:0 0 10px 0;
                              font-size:11px;
                              line-height:1;
                              letter-spacing:0.12em;
                              text-transform:uppercase;
                              font-weight:700;
                              color:#cdef24;
                            "
                          >
                            Tu mensaje
                          </p>
                          <p
                            style="
                              margin:0;
                              font-size:14px;
                              line-height:1.9;
                              color:rgba(255,255,255,0.86);
                              font-style:normal;
                              white-space:normal;
                            "
                          >
                            ${safeMessage}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:28px 0 8px 0;">
              <a
                href="${BRAND_URL}"
                style="
                  display:inline-block;
                  padding:14px 22px;
                  border-radius:16px;
                  background:linear-gradient(135deg, #cdef24 0%, #9cc91b 100%);
                  color:#031008;
                  text-decoration:none;
                  font-size:14px;
                  font-weight:800;
                  letter-spacing:0.01em;
                  box-shadow:0 12px 24px rgba(205,239,36,0.18);
                "
              >
                Volver a nexorithm.com.mx
              </a>
            </td>
          </tr>
        </table>
      ${cardEnd()}

      ${footerBlock()}
    `);

    await Promise.all([
      resend.emails.send({
        from: `Nexorithm <${SUPPORT_EMAIL}>`,
        to: [SUPPORT_EMAIL],
        replyTo: String(email).trim(),
        subject: `Nuevo mensaje web: ${String(nombre).trim()}`,
        html: htmlNegocio,
      }),

      resend.emails.send({
        from: `Nexorithm <${SUPPORT_EMAIL}>`,
        to: [String(email).trim()],
        subject: "Hemos recibido tu mensaje - Nexorithm",
        html: htmlUsuario,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Error enviando correos:", error);

    return NextResponse.json(
      {
        error: error?.message || "Error al procesar la solicitud",
      },
      { status: 500 }
    );
  }
}