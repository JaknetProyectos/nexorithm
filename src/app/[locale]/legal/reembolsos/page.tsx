"use client";

import { useLocale } from "next-intl";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

function LegalEs() {
    return (
        <div className="legal-container">
            <style
  dangerouslySetInnerHTML={{
    __html: `
      .legal-container {
        background-color: #000000;
        color: #ffffff;
        line-height: 1.7;
        font-family: sans-serif;
        padding: 2rem;
      }

      .legal-container section {
        margin-bottom: 3rem;
      }

      .legal-container h1 {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid #1aff8c;
        color: #7dffb3;
        text-shadow: 0 0 8px rgba(26, 255, 140, 0.6);
      }

      .legal-container h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 2.5rem;
        margin-bottom: 1rem;
        color: #39ff9c;
        text-shadow: 0 0 6px rgba(57, 255, 156, 0.5);
      }

      .legal-container h3 {
        font-size: 1.1rem;
        font-weight: 700;
        margin-top: 1.5rem;
        margin-bottom: 0.8rem;
        color: #72ffbf;
      }

      .legal-container p {
        margin-bottom: 1.2rem;
        text-align: justify;
        color: #eaeaea;
      }

      .legal-container ul {
        margin-bottom: 1.2rem;
        padding-left: 1.5rem;
        list-style-type: disc;
      }

      .legal-container li {
        margin-bottom: 0.5rem;
        color: #d8d8d8;
      }

      .legal-container a {
        color: #39ff9c;
        text-decoration: none;
        transition: color 0.2s ease;
      }

      .legal-container a:hover {
        color: #7dffb3;
        text-decoration: underline;
      }
    `,
  }}
/>

            <section>
                <h1>POLÍTICA DE DEVOLUCIONES Y REEMBOLSO</h1>

                <p>
                    Nexorithm, administrado por la sociedad mexicana ZISMATIC SOLUCIONES TECNOLÓGICAS S.A. DE C.V., es una empresa comprometida por ofrecer a sus clientes servicios de alta calidad bajos los mejores estándares de calidad posibles, bajo la comprensión de que pueden surgir situaciones fuera de sus parámetros que lleguen a interrumpir esta condición, para lo cual establece las condiciones, procedimientos y métodos para la solicitud y procesamiento de devoluciones y reembolsos, además de delinear las excepciones y medidas antifraude, garantizando la transparencia y la protección tanto para la empresa como para sus clientes.
                </p>

                <p>
                    En caso de que surjan situaciones que requieran la devolución o el reembolso de pagos, se aplicaran las siguientes políticas:
                </p>

                <h2>Requisitos para Devoluciones y Reembolsos</h2>
                <p>
                    Las solicitudes de devolución y reembolso deben realizarse dentro de los 30 días naturales siguientes a la adquisición del servicio. No se aceptarán solicitudes fuera de este periodo.
                </p>

                <h2>Proceso de Solicitud</h2>
                <p>
                    Para solicitar una devolución o reembolso, el cliente debe enviar un correo electrónico a clientes@nexorithm.com.mx con la siguiente información:
                </p>

                <ul>
                    <li>Nombre completo del cliente</li>
                    <li>Número de pedido</li>
                    <li>Detalle del servicio contratado</li>
                    <li>Motivo de la solicitud</li>
                </ul>

                <h2>Políticas Específicas de Reembolso</h2>

                <h3>Servicios de Desarrollo de Aplicaciones y Soporte Técnico</h3>
                <ul>
                    <li>Si el servicio no ha sido iniciado, se reembolsará el 100% del pago realizado.</li>
                    <li>Si el servicio ha sido parcialmente completado, se reembolsará el monto proporcional al trabajo no realizado, menos una tarifa administrativa del 10%.</li>
                </ul>

                <h3>Servicios de Hosting Web</h3>
                <ul>
                    <li>Los reembolsos para servicios de hosting web contratados por un periodo mensual se realizarán proporcionalmente al tiempo no utilizado del servicio.</li>
                    <li>No se realizarán reembolsos para servicios de hosting web contratados por un periodo anual después de 30 días de la contratación.</li>
                </ul>

                <h2>Métodos de Reembolso</h2>

                <h3>Tarjetas de Crédito</h3>
                <p>
                    Los reembolsos para pagos realizados con tarjeta de crédito se procesarán a la misma tarjeta utilizada en la transacción inicial. El tiempo de procesamiento puede variar entre 10 y 15 días hábiles.
                </p>

                <h3>Transferencias Bancarias</h3>
                <p>
                    Única y exclusivamente para los casos excepcionales en donde el usuario ya no cuente con el método de pago original de su compra, se generará un instrucción para liquidar el reembolso mediante transferencia bancaria a la cuenta bancaria especificada y acreditada por el cliente. Este proceso puede tardar hasta 15 días hábiles.
                </p>

                <h2>Excepciones</h2>

                <h3>Proyectos Completados y Entregados</h3>
                <p>
                    No se realizarán reembolsos para servicios que hayan sido completados y entregados satisfactoriamente al cliente.
                </p>

                <h3>Promociones y Descuentos</h3>
                <p>
                    Los servicios adquiridos bajo promociones especiales o descuentos no son elegibles para reembolsos.
                </p>

                <h2>Procedimiento Antifraude</h2>

                <h3>Verificación de Pago</h3>
                <p>
                    Todas las solicitudes de reembolso estarán sujetas a un proceso de verificación para prevenir fraudes. Esto puede incluir la validación del método de pago y la confirmación de la identidad del solicitante.
                </p>

                <h3>Tiempo de Proceso</h3>
                <p>
                    El tiempo de proceso para verificar y completar un reembolso puede variar, pero no excederá de 30 días hábiles a partir de la recepción de la solicitud.
                </p>

                <h2>Disposiciones Finales</h2>

                <h3>Modificaciones a la Política</h3>
                <p>
                    Nexorithm se reserva el derecho de modificar esta política en cualquier momento. Cualquier cambio será comunicado a través de nuestro sitio web en la sección de:
                    {' '}<a href="https://digitalfrontier.com.mx/politica-de-devoluciones-y-reembolsos/" target="_blank" rel="noopener noreferrer">
                        digitalfrontier.com.mx/politica-de-devoluciones-y-reembolsos/
                    </a>
                </p>

                <p>
                    Para cualquier consulta relacionada con nuestra política de devoluciones y reembolsos, por favor contacte a Nexorithm en clientes@nexorithm.com.mx
                </p>
            </section>
        </div>
    );
}

function LegalEn() {
    return (
        <div className="legal-container">
            <style
  dangerouslySetInnerHTML={{
    __html: `
      .legal-container {
        background-color: #000000;
        color: #ffffff;
        line-height: 1.7;
        font-family: sans-serif;
        padding: 2rem;
      }

      .legal-container section {
        margin-bottom: 3rem;
      }

      .legal-container h1 {
        font-size: 2.5rem;
        font-weight: 800;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid #1aff8c;
        color: #7dffb3;
        text-shadow: 0 0 8px rgba(26, 255, 140, 0.6);
      }

      .legal-container h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 2.5rem;
        margin-bottom: 1rem;
        color: #39ff9c;
        text-shadow: 0 0 6px rgba(57, 255, 156, 0.5);
      }

      .legal-container h3 {
        font-size: 1.1rem;
        font-weight: 700;
        margin-top: 1.5rem;
        margin-bottom: 0.8rem;
        color: #72ffbf;
      }

      .legal-container p {
        margin-bottom: 1.2rem;
        text-align: justify;
        color: #eaeaea;
      }

      .legal-container ul {
        margin-bottom: 1.2rem;
        padding-left: 1.5rem;
        list-style-type: disc;
      }

      .legal-container li {
        margin-bottom: 0.5rem;
        color: #d8d8d8;
      }

      .legal-container a {
        color: #39ff9c;
        text-decoration: none;
        transition: color 0.2s ease;
      }

      .legal-container a:hover {
        color: #7dffb3;
        text-decoration: underline;
      }
    `,
  }}
/>

            <section>
                <h1>RETURN AND REFUND POLICY</h1>

                <p>
                    Nexorithm, managed by the Mexican company ZISMATIC SOLUCIONES TECNOLÓGICAS S.A. DE C.V., is a company committed to offering its clients high-quality services under the best possible quality standards, understanding that situations outside its parameters may arise and interrupt this condition. Therefore, it establishes the conditions, procedures, and methods for requesting and processing returns and refunds, as well as outlining exceptions and anti-fraud measures, guaranteeing transparency and protection for both the company and its clients.
                </p>

                <p>
                    In the event that situations arise requiring the return or refund of payments, the following policies will apply:
                </p>

                <h2>Requirements for Returns and Refunds</h2>
                <p>
                    Return and refund requests must be made within 30 calendar days following the purchase of the service. Requests made outside this period will not be accepted.
                </p>

                <h2>Request Process</h2>
                <p>
                    To request a return or refund, the client must send an email to clientes@nexorithm.com.mx with the following information:
                </p>

                <ul>
                    <li>Client’s full name</li>
                    <li>Order number</li>
                    <li>Details of the contracted service</li>
                    <li>Reason for the request</li>
                </ul>

                <h2>Specific Refund Policies</h2>

                <h3>Application Development and Technical Support Services</h3>
                <ul>
                    <li>If the service has not been started, 100% of the payment made will be refunded.</li>
                    <li>If the service has been partially completed, the amount corresponding to the unfinished work will be refunded, minus a 10% administrative fee.</li>
                </ul>

                <h3>Web Hosting Services</h3>
                <ul>
                    <li>Refunds for web hosting services contracted on a monthly basis will be made proportionally to the unused service time.</li>
                    <li>No refunds will be issued for web hosting services contracted on an annual basis after 30 days from the date of contracting.</li>
                </ul>

                <h2>Refund Methods</h2>

                <h3>Credit Cards</h3>
                <p>
                    Refunds for payments made with a credit card will be processed to the same card used in the initial transaction. Processing time may vary between 10 and 15 business days.
                </p>

                <h3>Bank Transfers</h3>
                <p>
                    Solely and exclusively in exceptional cases where the user no longer has access to the original payment method used for the purchase, instructions will be generated to settle the refund via bank transfer to the bank account specified and validated by the client. This process may take up to 15 business days.
                </p>

                <h2>Exceptions</h2>

                <h3>Completed and Delivered Projects</h3>
                <p>
                    No refunds will be issued for services that have been completed and satisfactorily delivered to the client.
                </p>

                <h3>Promotions and Discounts</h3>
                <p>
                    Services acquired under special promotions or discounts are not eligible for refunds.
                </p>

                <h2>Anti-Fraud Procedure</h2>

                <h3>Payment Verification</h3>
                <p>
                    All refund requests will be subject to a verification process to prevent fraud. This may include validation of the payment method and confirmation of the requester’s identity.
                </p>

                <h3>Processing Time</h3>
                <p>
                    The processing time to verify and complete a refund may vary, but will not exceed 30 business days from the receipt of the request.
                </p>

                <h2>Final Provisions</h2>

                <h3>Policy Modifications</h3>
                <p>
                    Nexorithm reserves the right to modify this policy at any time. Any changes will be communicated through our website in the section:
                    {' '}<a href="https://digitalfrontier.com.mx/politica-de-devoluciones-y-reembolsos/" target="_blank" rel="noopener noreferrer">
                        digitalfrontier.com.mx/politica-de-devoluciones-y-reembolsos/
                    </a>
                </p>

                <p>
                    For any inquiries related to our return and refund policy, please contact Nexorithm at clientes@nexorithm.com.mx
                </p>
            </section>
        </div>
    );
}

export default function LegalPage() {
    const locale = useLocale();

    return (
        <div className="min-h-screen flex flex-col bg-black">
            <Header />
            <main className="flex-grow container mx-auto px-6 py-20 max-w-4xl">
                {locale === "es" ? <LegalEs /> : <LegalEn />}
            </main>
            <Footer />
        </div>
    );
}