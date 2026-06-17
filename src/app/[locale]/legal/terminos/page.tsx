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
                <h1>TÉRMINOS Y CONDICIONES</h1>

                <p>
                    Bienvenido a Nexorithm, un nombre comercial administrado por la sociedad mexicana denominada ZISMATIC SOLUCIONES TECNOLÓGICAS S.A. DE C.V. Al acceder y utilizar nuestro sitio web nexorithm.com.mx, así como al contratar nuestros servicios, usted acepta cumplir y estar sujeto a los siguientes Términos y Condiciones. Le recomendamos leer atentamente este documento antes de utilizar nuestros servicios.
                </p>

                <p>
                    El uso de nuestros servicios implica que usted ha leído, entendido y aceptado estos Términos y Condiciones. Si no está de acuerdo con ellos, debe abstenerse de utilizar nuestros servicios.
                </p>

                <h2>Servicios Ofrecidos</h2>
                <p>
                    Nexorithm ofrece soporte técnico 24/7, desarrollo de aplicaciones, hosting web confiable y otros servicios relacionados. Todos nuestros servicios están sujetos a estos Términos y Condiciones.
                </p>

                <h2>Registro de Usuario</h2>
                <p>
                    Para acceder a ciertos servicios, es posible que se requiera un registro previo, proporcionando datos personales veraces y actualizados. El usuario es responsable de mantener la confidencialidad de su contraseña y cuenta, y de todas las actividades que ocurran bajo su cuenta.
                </p>

                <h2>Proceso de Compra y Confirmación</h2>
                <p>
                    Todas las compras y transacciones realizadas a través de nuestro sitio web están sujetas a un proceso de confirmación y verificación, que puede incluir la verificación de disponibilidad, validación del método de pago, y otras condiciones establecidas por Nexorithm así como por sus proveedores de servicio de procesamiento de cobros.
                </p>

                <h2>Precios y Promociones</h2>
                <p>
                    Los precios de los servicios ofrecidos en este sitio web son válidos únicamente para las compras realizadas a través del mismo. Nos reservamos el derecho de cambiar los precios y promociones sin previo aviso.
                </p>

                <h2>Licencia de Uso</h2>
                <p>
                    Nexorithm concede al usuario una licencia limitada para utilizar los servicios ofrecidos en el sitio web, conforme a estos Términos y Condiciones. Esta licencia no permite la reventa ni la distribución de nuestros servicios sin autorización expresa.
                </p>

                <h2>Uso No Autorizado</h2>
                <p>
                    Está prohibido modificar, reproducir, distribuir o utilizar nuestros servicios para fines comerciales sin permiso. Cualquier uso no autorizado podrá resultar en la cancelación de los servicios y acciones legales correspondientes.
                </p>

                <h2>Propiedad Intelectual</h2>
                <p>
                    Los servicios, incluyendo el contenido y software, son propiedad de ZISMATIC SOLUCIONES TECNOLÓGICAS S.A. DE C.V. y están protegidos por leyes de propiedad intelectual. Usted no puede reclamar derechos de propiedad sobre ellos.
                </p>

                <h2>Facturación</h2>
                <p>
                    Para solicitar una factura, debe hacerlo dentro de los 15 días siguientes a la realización del pago. Las facturas se emiten en un plazo máximo de 48 horas hábiles.
                </p>

                <h2>Comprobación Antifraude</h2>
                <p>
                    Las compras pueden ser aplazadas o suspendidas para una comprobación antifraude. Nexorithm puede realizar investigaciones adicionales para evitar transacciones fraudulentas.
                </p>

                <h2>Política de Privacidad</h2>
                <p>
                    Nexorithm asegura que la información personal proporcionada por el usuario se manejará de manera confidencial y segura. Los datos no se compartirán con terceros, salvo por requerimiento legal o judicial. Consulte nuestra Aviso de Privacidad para más información:
                    {' '}{' '}<a href="https://digitalfrontier.com.mx/politica-privacidad/" target="_blank" rel="noopener noreferrer">
                        digitalfrontier.com.mx/politica-privacidad/
                    </a>
                </p>

                <h2>Política de Cookies</h2>
                <p>
                    Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. Las cookies permiten personalizar contenido y publicidad, y analizar el tráfico del sitio web. Al usar nuestro sitio, usted acepta el uso de cookies. Puede gestionar las preferencias de cookies a través de la configuración de su navegador. Consulte nuestra Aviso de Privacidad para más información:
                    {' '}{' '}<a href="https://digitalfrontier.com.mx/politica-privacidad/" target="_blank" rel="noopener noreferrer">
                        digitalfrontier.com.mx/politica-privacidad/
                    </a>
                </p>

                <h2>Modificaciones de los Términos y Condiciones</h2>
                <p>
                    Nexorithm se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán publicadas en nuestro sitio web y entrarán en vigor al momento de su publicación, disponibles para su consulta en la siguiente liga:
                    {' '}<a href="https://digitalfrontier.com.mx/terminos-y-condiciones/" target="_blank" rel="noopener noreferrer">
                        digitalfrontier.com.mx/terminos-y-condiciones/
                    </a>
                </p>

                <h2>Legislación Aplicable</h2>
                <p>
                    Estos Términos y Condiciones se rigen por las leyes de México. Para la interpretación y cumplimiento de estos términos, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de México.
                </p>

                <p>
                    Para cualquier duda o consulta sobre estos Términos y Condiciones, puede contactarnos en clientes@nexorithm.com.mx.
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
                <h1>TERMS AND CONDITIONS</h1>

                <p>
                    Welcome to Nexorithm, a trade name managed by the Mexican company ZISMATIC SOLUCIONES TECNOLÓGICAS S.A. DE C.V. By accessing and using our website nexorithm.com.mx, as well as contracting our services, you agree to comply with and be bound by the following Terms and Conditions. We recommend that you carefully read this document before using our services.
                </p>

                <p>
                    The use of our services implies that you have read, understood, and accepted these Terms and Conditions. If you do not agree with them, you must refrain from using our services.
                </p>

                <h2>Services Offered</h2>
                <p>
                    Nexorithm offers 24/7 technical support, application development, reliable web hosting, and other related services. All our services are subject to these Terms and Conditions.
                </p>

                <h2>User Registration</h2>
                <p>
                    To access certain services, prior registration may be required by providing truthful and updated personal information. The user is responsible for maintaining the confidentiality of their password and account, as well as for all activities that occur under their account.
                </p>

                <h2>Purchase and Confirmation Process</h2>
                <p>
                    All purchases and transactions made through our website are subject to a confirmation and verification process, which may include verification of availability, validation of the payment method, and other conditions established by Nexorithm and its payment processing service providers.
                </p>

                <h2>Prices and Promotions</h2>
                <p>
                    The prices of the services offered on this website are valid only for purchases made through it. We reserve the right to change prices and promotions without prior notice.
                </p>

                <h2>License of Use</h2>
                <p>
                    Nexorithm grants the user a limited license to use the services offered on the website in accordance with these Terms and Conditions. This license does not allow the resale or distribution of our services without express authorization.
                </p>

                <h2>Unauthorized Use</h2>
                <p>
                    It is prohibited to modify, reproduce, distribute, or use our services for commercial purposes without permission. Any unauthorized use may result in the cancellation of services and corresponding legal actions.
                </p>

                <h2>Intellectual Property</h2>
                <p>
                    The services, including content and software, are the property of ZISMATIC SOLUCIONES TECNOLÓGICAS S.A. DE C.V. and are protected by intellectual property laws. You may not claim ownership rights over them.
                </p>

                <h2>Billing</h2>
                <p>
                    To request an invoice, you must do so within 15 days following the payment date. Invoices are issued within a maximum period of 48 business hours.
                </p>

                <h2>Anti-Fraud Verification</h2>
                <p>
                    Purchases may be delayed or suspended for anti-fraud verification. Nexorithm may conduct additional investigations to prevent fraudulent transactions.
                </p>

                <h2>Privacy Policy</h2>
                <p>
                    Nexorithm ensures that the personal information provided by the user will be handled confidentially and securely. Data will not be shared with third parties except when required by law or court order. Please refer to our Privacy Notice for more information:
                    {' '}<a href="https://digitalfrontier.com.mx/politica-privacidad/" target="_blank" rel="noopener noreferrer">
                        digitalfrontier.com.mx/politica-privacidad/
                    </a>
                </p>

                <h2>Cookies Policy</h2>
                <p>
                    Our website uses cookies to improve the user experience. Cookies allow us to personalize content and advertising and analyze website traffic. By using our website, you accept the use of cookies. You may manage cookie preferences through your browser settings. Please refer to our Privacy Notice for more information:
                    {' '}<a href="https://digitalfrontier.com.mx/politica-privacidad/" target="_blank" rel="noopener noreferrer">
                        digitalfrontier.com.mx/politica-privacidad/
                    </a>
                </p>

                <h2>Modifications to the Terms and Conditions</h2>
                <p>
                    Nexorithm reserves the right to modify these Terms and Conditions at any time. Modifications will be published on our website and will become effective upon publication, available for consultation at the following link:
                    {' '}{' '}<a href="https://digitalfrontier.com.mx/terminos-y-condiciones/" target="_blank" rel="noopener noreferrer">
                        digitalfrontier.com.mx/terminos-y-condiciones/
                    </a>
                </p>

                <h2>Applicable Law</h2>
                <p>
                    These Terms and Conditions are governed by the laws of Mexico. For the interpretation and enforcement of these terms, the parties submit to the jurisdiction of the competent courts of Mexico City.
                </p>

                <p>
                    For any questions or inquiries regarding these Terms and Conditions, you may contact us at clientes@nexorithm.com.mx.
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