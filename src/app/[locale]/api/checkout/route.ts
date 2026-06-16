import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const BRAND_NAME = "nexorithm.com.mx";
const BRAND_URL = "https://nexorithm.com.mx";
const SUPPORT_EMAIL = "clientes@nexorithm.com.mx";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(value);
}

function escapeHtml(value: string) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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
            radial-gradient(circle at top left, rgba(205,239,36,0.12), transparent 26%),
            radial-gradient(circle at top right, rgba(0,94,80,0.24), transparent 32%),
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
                  max-width:720px;
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

function topBanner(
  badge: string,
  title: string,
  subtitle: string,
  showMark = true
) {
  return `
    <tr>
      <td
        style="
          border-radius:30px 30px 0 0;
          overflow:hidden;
          background:
            linear-gradient(135deg, rgba(0,94,80,0.98) 0%, rgba(2,4,3,0.98) 52%, rgba(205,239,36,0.16) 100%);
          border:1px solid rgba(255,255,255,0.08);
          border-bottom:none;
        "
      >
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td style="padding:34px 34px 28px 34px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
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
                      ${escapeHtml(badge)}
                    </div>

                    <h1
                      style="
                        margin:0;
                        font-size:34px;
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
                        max-width:540px;
                        font-size:15px;
                        line-height:1.8;
                        color:rgba(255,255,255,0.78);
                      "
                    >
                      ${escapeHtml(subtitle)}
                    </p>
                  </td>

                  ${
                    showMark
                      ? `
                  <td align="right" valign="top" style="padding-left:18px;">
                    <div
                      style="
                        width:82px;
                        height:82px;
                        border-radius:26px;
                        background:
                          radial-gradient(circle at 30% 30%, rgba(205,239,36,1) 0%, rgba(0,94,80,1) 100%);
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        box-shadow:0 18px 42px rgba(0,0,0,0.32);
                      "
                    >
                      <div
                        style="
                          width:42px;
                          height:42px;
                          border-radius:14px;
                          border:2px solid rgba(255,255,255,0.95);
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
                  `
                      : ""
                  }
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 34px 34px 34px;">
              <div
                style="
                  width:100%;
                  height:1px;
                  background:linear-gradient(90deg, transparent, rgba(205,239,36,0.55), rgba(0,94,80,0.55), transparent);
                "
              ></div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function bodyCardStart() {
  return `
    <tr>
      <td
        style="
          background:#08100c;
          border-left:1px solid rgba(255,255,255,0.08);
          border-right:1px solid rgba(255,255,255,0.08);
        "
      >
  `;
}

function bodyCardEnd() {
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
          border-radius:0 0 30px 30px;
          overflow:hidden;
          background:
            linear-gradient(180deg, rgba(8,16,12,1) 0%, rgba(3,6,5,1) 100%);
          border:1px solid rgba(255,255,255,0.08);
          border-top:none;
        "
      >
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td style="padding:22px 34px 30px 34px;">
              <div
                style="
                  width:100%;
                  height:1px;
                  margin-bottom:18px;
                  background:linear-gradient(90deg, transparent, rgba(205,239,36,0.45), rgba(0,94,80,0.45), transparent);
                "
              ></div>

              <p
                style="
                  margin:0;
                  font-size:12px;
                  line-height:1.8;
                  color:rgba(255,255,255,0.60);
                  text-align:center;
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
                  text-align:center;
                "
              >
                © 2026 · ${BRAND_NAME}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function infoGrid(items: { label: string; value: string; href?: string }[]) {
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

function productCardHTML(item: any) {
  const product = item.product || {};
  const qty = Number(item.quantity || 1);
  const unitPrice = Number(product.price || 0);
  const total = unitPrice * qty;

  const productName = escapeHtml(product.name || "Producto");
  const productDescription = escapeHtml(
    product.description || "Premium digital infrastructure service."
  );
  const productIcon = String(product.icon || "");

  return `
    <table
      width="100%"
      border="0"
      cellspacing="0"
      cellpadding="0"
      style="
        margin-bottom:22px;
        border:1px solid rgba(255,255,255,0.08);
        border-radius:24px;
        overflow:hidden;
        background:linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02));
      "
    >
      <tr>
        <td>
          <img
            src="${escapeHtml(productIcon)}"
            alt="${productName}"
            width="100%"
            height="220"
            style="
              width:100%;
              height:220px;
              object-fit:cover;
              display:block;
            "
          />
        </td>
      </tr>

      <tr>
        <td style="padding:24px 24px 22px 24px;">
          <div
            style="
              display:inline-block;
              margin-bottom:14px;
              padding:7px 12px;
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
            Paquete adquirido
          </div>

          <h3
            style="
              margin:0 0 10px 0;
              font-size:22px;
              line-height:1.12;
              color:#ffffff;
              font-weight:800;
              letter-spacing:-0.03em;
            "
          >
            ${productName}
          </h3>

          <p
            style="
              margin:0 0 18px 0;
              font-size:14px;
              line-height:1.8;
              color:rgba(255,255,255,0.70);
            "
          >
            ${productDescription}
          </p>

          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td valign="top">
                <p
                  style="
                    margin:0 0 4px 0;
                    font-size:11px;
                    color:rgba(255,255,255,0.48);
                    text-transform:uppercase;
                    letter-spacing:0.08em;
                    font-weight:700;
                  "
                >
                  Cantidad
                </p>

                <p
                  style="
                    margin:0;
                    font-size:18px;
                    color:#ffffff;
                    font-weight:800;
                  "
                >
                  ${qty}
                </p>
              </td>

              <td align="right" valign="top">
                <p
                  style="
                    margin:0 0 4px 0;
                    font-size:11px;
                    color:rgba(255,255,255,0.48);
                    text-transform:uppercase;
                    letter-spacing:0.08em;
                    font-weight:700;
                  "
                >
                  Total
                </p>

                <p
                  style="
                    margin:0;
                    font-size:22px;
                    color:#cdef24;
                    font-weight:900;
                    letter-spacing:-0.03em;
                  "
                >
                  ${formatCurrency(total)}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { orderId, amount, customer, items, metadata } = body;

    if (!orderId || !amount || !customer || !items || !items.length) {
      return NextResponse.json(
        { error: "Información de orden incompleta." },
        { status: 400 }
      );
    }

    const customerName = escapeHtml(customer.nombre || "");
    const customerLastName = escapeHtml(customer.apellido || "");
    const customerEmail = escapeHtml(customer.email || "");
    const customerPhone = escapeHtml(customer.telefono || "");
    const customerAddress = escapeHtml(customer.direccion || "");
    const customerAddress2 = customer.direccion2
      ? `, ${escapeHtml(customer.direccion2)}`
      : "";
    const customerCity = escapeHtml(customer.ciudad || "");
    const customerState = escapeHtml(customer.estado || "");
    const customerZip = escapeHtml(customer.cp || "");
    const orderNote = escapeHtml(metadata?.notes || "Sin notas");

    const productsHTML = items.map(productCardHTML).join("");

    const htmlCliente = shell(`
      ${topBanner(
        `Orden #${escapeHtml(String(orderId))}`,
        "Compra confirmada",
        "Tu pago fue aprobado correctamente. Ya estamos procesando tu orden y preparando los siguientes pasos."
      )}

      ${bodyCardStart()}
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="padding:34px;"
        >
          <tr>
            <td>
              <h2
                style="
                  margin:0 0 10px 0;
                  font-size:30px;
                  line-height:1.08;
                  letter-spacing:-0.04em;
                  color:#ffffff;
                "
              >
                Gracias por tu compra, ${customerName}
              </h2>

              <p
                style="
                  margin:0;
                  font-size:15px;
                  line-height:1.85;
                  color:rgba(255,255,255,0.74);
                "
              >
                Hemos recibido y verificado tu pago con éxito. Tu pedido ya está registrado en el sistema de nexorithm.com.mx.
              </p>

              ${infoGrid([
                { label: "Orden", value: `#${String(orderId)}` },
                { label: "Estado", value: "Pago confirmado" },
              ])}
            </td>
          </tr>

          <tr>
            <td style="padding-top:24px;">
              ${productsHTML}
            </td>
          </tr>

          <tr>
            <td>
              <table
                role="presentation"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
                style="
                  margin-top:8px;
                  border-radius:26px;
                  overflow:hidden;
                  border:1px solid rgba(205,239,36,0.18);
                  background:
                    linear-gradient(180deg, rgba(205,239,36,0.08), rgba(0,94,80,0.08));
                "
              >
                <tr>
                  <td style="padding:24px;">
                    <p
                      style="
                        margin:0 0 8px 0;
                        font-size:11px;
                        color:#cdef24;
                        font-weight:700;
                        letter-spacing:0.12em;
                        text-transform:uppercase;
                      "
                    >
                      Total pagado
                    </p>

                    <p
                      style="
                        margin:0;
                        font-size:40px;
                        line-height:1;
                        color:#ffffff;
                        font-weight:900;
                        letter-spacing:-0.05em;
                      "
                    >
                      ${formatCurrency(Number(amount))}
                    </p>
                  </td>
                </tr>
              </table>
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
                style="
                  border-radius:24px;
                  overflow:hidden;
                  border:1px solid rgba(255,255,255,0.08);
                  background:rgba(255,255,255,0.03);
                "
              >
                <tr>
                  <td style="padding:22px;">
                    <p
                      style="
                        margin:0 0 10px 0;
                        font-size:11px;
                        font-weight:700;
                        color:#cdef24;
                        text-transform:uppercase;
                        letter-spacing:0.12em;
                      "
                    >
                      Dirección asignada
                    </p>

                    <p
                      style="
                        margin:0;
                        font-size:14px;
                        line-height:1.9;
                        color:rgba(255,255,255,0.80);
                      "
                    >
                      ${customerAddress}${customerAddress2}<br>
                      ${customerCity}, ${customerState}, CP ${customerZip}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      ${bodyCardEnd()}

      ${footerBlock()}
    `);

    const htmlNegocio = shell(`
      ${topBanner(
        `Orden #${escapeHtml(String(orderId))}`,
        "Nueva compra procesada",
        "Una orden nueva fue confirmada desde el sitio. Revisa los datos del cliente y el detalle del pago abajo."
      )}

      ${bodyCardStart()}
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="padding:34px;"
        >
          <tr>
            <td>
              <div
                style="
                  display:inline-block;
                  margin-bottom:18px;
                  padding:8px 14px;
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
                Ecommerce order
              </div>

              <h2
                style="
                  margin:0 0 12px 0;
                  font-size:32px;
                  line-height:1.08;
                  letter-spacing:-0.04em;
                  color:#ffffff;
                "
              >
                ${formatCurrency(Number(amount))} procesados con éxito
              </h2>

              <p
                style="
                  margin:0;
                  font-size:15px;
                  line-height:1.85;
                  color:rgba(255,255,255,0.74);
                "
              >
                La compra quedó registrada correctamente. Este correo resume al cliente, la orden y el importe pagado.
              </p>

              ${infoGrid([
                { label: "Cliente", value: `${customerName} ${customerLastName}`.trim() },
                { label: "Correo", value: customerEmail, href: `mailto:${customer.email}` },
                { label: "Teléfono", value: customerPhone },
              ])}
            </td>
          </tr>

          <tr>
            <td style="padding-top:24px;">
              ${productsHTML}
            </td>
          </tr>

          <tr>
            <td>
              <table
                role="presentation"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
                style="
                  margin-top:6px;
                  border-radius:24px;
                  overflow:hidden;
                  border:1px solid rgba(255,255,255,0.08);
                  background:rgba(255,255,255,0.03);
                "
              >
                <tr>
                  <td style="padding:22px;">
                    <p
                      style="
                        margin:0 0 10px 0;
                        font-size:11px;
                        font-weight:700;
                        color:#cdef24;
                        text-transform:uppercase;
                        letter-spacing:0.12em;
                      "
                    >
                      Notas de la orden
                    </p>

                    <p
                      style="
                        margin:0;
                        font-size:14px;
                        line-height:1.9;
                        color:rgba(255,255,255,0.80);
                      "
                    >
                      ${orderNote}
                    </p>
                  </td>
                </tr>
              </table>
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
                style="
                  border-radius:24px;
                  overflow:hidden;
                  border:1px solid rgba(205,239,36,0.16);
                  background:
                    linear-gradient(180deg, rgba(205,239,36,0.08), rgba(0,94,80,0.06));
                "
              >
                <tr>
                  <td style="padding:22px;">
                    <p
                      style="
                        margin:0 0 8px 0;
                        font-size:11px;
                        font-weight:700;
                        color:#cdef24;
                        text-transform:uppercase;
                        letter-spacing:0.12em;
                      "
                    >
                      Monto total
                    </p>

                    <p
                      style="
                        margin:0;
                        font-size:38px;
                        line-height:1;
                        color:#ffffff;
                        font-weight:900;
                        letter-spacing:-0.05em;
                      "
                    >
                      ${formatCurrency(Number(amount))}
                    </p>
                  </td>
                </tr>
              </table>
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
                style="
                  border-radius:24px;
                  overflow:hidden;
                  border:1px solid rgba(255,255,255,0.08);
                  background:rgba(255,255,255,0.03);
                "
              >
                <tr>
                  <td style="padding:22px;">
                    <p
                      style="
                        margin:0 0 10px 0;
                        font-size:11px;
                        font-weight:700;
                        color:#cdef24;
                        text-transform:uppercase;
                        letter-spacing:0.12em;
                      "
                    >
                      Dirección del cliente
                    </p>

                    <p
                      style="
                        margin:0;
                        font-size:14px;
                        line-height:1.9;
                        color:rgba(255,255,255,0.80);
                      "
                    >
                      ${customerAddress}${customerAddress2}<br>
                      ${customerCity}, ${customerState}, CP ${customerZip}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      ${bodyCardEnd()}

      ${footerBlock()}
    `);

    await Promise.all([
      resend.emails.send({
        from: `nexorithm.com.mx <${SUPPORT_EMAIL}>`,
        to: [customer.email],
        subject: `Confirmación de compra #${orderId} - nexorithm.com.mx`,
        html: htmlCliente,
      }),
      resend.emails.send({
        from: `nexorithm.com.mx <${SUPPORT_EMAIL}>`,
        to: [SUPPORT_EMAIL],
        replyTo: customer.email,
        subject: `NUEVA COMPRA #${orderId}`,
        html: htmlNegocio,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Error enviando correos:", error);

    return NextResponse.json(
      { error: error?.message || "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}