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
                <h1>POLÍTICA DE PRIVACIDAD</h1>

                <h2>Introducción</h2>
                <p>
                    En Nexorithm, nombre comercial administrado por la sociedad mexicana denominada ZISMATIC SOLUCIONES TECNOLÓGICAS S.A. DE C.V., con domicilio comercial en la Ciudad de México, valoramos la privacidad y la seguridad de su información personal. Por ello, ponemos a su disposición el siguiente aviso de privacidad (“Aviso de Privacidad”) para informarle sobre cómo recabamos, utilizamos y protegemos sus datos personales. El uso de nuestro sitio web nexorithm.com.mx implica la aceptación de este Aviso de Privacidad.
                </p>

                <h2>Responsable del Tratamiento de Datos Personales</h2>
                <p>
                    ZISMATIC SOLUCIONES TECNOLÓGICAS S.A. DE C.V., con domicilio en la Ciudad de México, es responsable de recabar, utilizar y proteger sus datos personales conforme a lo dispuesto en este Aviso de Privacidad.
                </p>

                <h2>Datos Personales Recabados</h2>
                <p>
                    Recabamos datos personales a través de nuestro sitio web, aplicaciones y servicios asociados, incluyendo:
                </p>
                <ul>
                    <li>Datos Generales: Nombre y correo electrónico.</li>
                    <li>Datos Financieros o de Pago: Información de tarjetas de crédito o débito, y otros métodos de pago.</li>
                    <li>Datos Técnicos: Dirección IP, datos de ubicación, y cookies.</li>
                </ul>

                <h2>Finalidades del Tratamiento de Datos</h2>
                <p>
                    Sus datos personales serán utilizados para las siguientes finalidades:
                </p>
                <ul>
                    <li>Identificación y Verificación: Verificar la identidad de los usuarios y clientes.</li>
                    <li>Prestación de Servicios: Ofrecer soporte técnico 24/7, desarrollo de aplicaciones, hosting web confiable, y otros servicios contratados.</li>
                    <li>Promociones y Comunicación: Informar sobre nuevos productos, servicios, promociones y eventos.</li>
                    <li>Análisis de Mercado: Realizar estudios y análisis para mejorar nuestros servicios y productos.</li>
                    <li>Atención al Cliente: Gestionar dudas, quejas y sugerencias relacionadas con nuestros servicios.</li>
                    <li>Facturación: Procesar pagos y emitir facturas correspondientes.</li>
                    <li>Cumplimiento Legal: Cumplir con las obligaciones legales aplicables y requerimientos de autoridades competentes.</li>
                </ul>

                <h2>Limitaciones al Uso de Datos Personales</h2>
                <p>
                    Si no desea que sus datos personales sean utilizados para algunas de las finalidades mencionadas, puede comunicarlo a través de nuestro correo electrónico clientes@nexorithm.com.mx.
                </p>

                <h2>Transferencia de Datos Personales</h2>
                <p>
                    Nos comprometemos a no transferir sus datos personales a terceros sin su consentimiento, salvo en los siguientes casos:
                </p>
                <ul>
                    <li>Transferencias Internas: Entre nuestras subsidiarias o afiliadas.</li>
                    <li>Obligaciones Legales: Cuando sea requerido por autoridad competente.</li>
                    <li>Mejora de Servicios: Para mejorar la experiencia de nuestros usuarios.</li>
                    <li>Finalidades Específicas: Cuando sea necesario para cumplir con las finalidades descritas en este Aviso de Privacidad.</li>
                </ul>

                <h2>Seguridad de los Datos Personales</h2>
                <p>
                    Sus datos personales serán protegidos bajo estrictos estándares de seguridad para evitar el acceso no autorizado y garantizar la confidencialidad de los mismos.
                </p>

                <h2>Derechos ARCO</h2>
                <p>
                    Usted tiene el derecho de acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales (Derechos ARCO). Para ejercer estos derechos, puede enviar una solicitud a nuestro correo electrónico clientes@nexorithm.com.mx, acompañada de una copia de su identificación oficial. Nos comprometemos a responder a su solicitud dentro de los 5 días hábiles siguientes a la recepción.
                </p>

                <h2>Cambios en el Aviso de Privacidad</h2>
                <p>
                    Nos reservamos el derecho de realizar modificaciones o actualizaciones al presente Aviso de Privacidad en cualquier momento, mismas que serán publicadas en nuestro sitio web nexorithm.com.mx.
                </p>

                <p>
                    El uso de nuestros servicios implica su consentimiento expreso para el tratamiento de sus datos personales conforme a las finalidades y términos establecidos en este Aviso de Privacidad.
                </p>

                <p>
                    Para cualquier consulta o información adicional sobre esta Política de Privacidad, puede ponerse en contacto con nosotros a través del correo electrónico clientes@nexorithm.com.mx.
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
                <h1>PRIVACY POLICY</h1>

                <h2>Introduction</h2>
                <p>
                    At Nexorithm, a trade name managed by the Mexican company ZISMATIC SOLUCIONES TECNOLÓGICAS S.A. DE C.V., with a business address in Mexico City, we value the privacy and security of your personal information. Therefore, we provide you with the following privacy notice (“Privacy Notice”) to inform you about how we collect, use, and protect your personal data. The use of our website nexorithm.com.mx implies acceptance of this Privacy Notice.
                </p>

                <h2>Responsible Party for the Processing of Personal Data</h2>
                <p>
                    ZISMATIC SOLUCIONES TECNOLÓGICAS S.A. DE C.V., with an address in Mexico City, is responsible for collecting, using, and protecting your personal data in accordance with the provisions of this Privacy Notice.
                </p>

                <h2>Personal Data Collected</h2>
                <p>
                    We collect personal data through our website, applications, and associated services, including:
                </p>
                <ul>
                    <li>General Data: Name and email address.</li>
                    <li>Financial or Payment Data: Credit or debit card information and other payment methods.</li>
                    <li>Technical Data: IP address, location data, and cookies.</li>
                </ul>

                <h2>Purposes of Data Processing</h2>
                <p>
                    Your personal data will be used for the following purposes:
                </p>
                <ul>
                    <li>Identification and Verification: To verify the identity of users and clients.</li>
                    <li>Provision of Services: To offer 24/7 technical support, application development, reliable web hosting, and other contracted services.</li>
                    <li>Promotions and Communication: To inform you about new products, services, promotions, and events.</li>
                    <li>Market Analysis: To conduct studies and analyses to improve our services and products.</li>
                    <li>Customer Support: To manage questions, complaints, and suggestions related to our services.</li>
                    <li>Billing: To process payments and issue corresponding invoices.</li>
                    <li>Legal Compliance: To comply with applicable legal obligations and requirements from competent authorities.</li>
                </ul>

                <h2>Limitations on the Use of Personal Data</h2>
                <p>
                    If you do not wish for your personal data to be used for some of the purposes mentioned above, you may notify us through our email address clientes@nexorithm.com.mx.
                </p>

                <h2>Transfer of Personal Data</h2>
                <p>
                    We undertake not to transfer your personal data to third parties without your consent, except in the following cases:
                </p>
                <ul>
                    <li>Internal Transfers: Between our subsidiaries or affiliates.</li>
                    <li>Legal Obligations: When required by a competent authority.</li>
                    <li>Service Improvement: To improve the experience of our users.</li>
                    <li>Specific Purposes: When necessary to fulfill the purposes described in this Privacy Notice.</li>
                </ul>

                <h2>Security of Personal Data</h2>
                <p>
                    Your personal data will be protected under strict security standards to prevent unauthorized access and ensure their confidentiality.
                </p>

                <h2>ARCO Rights</h2>
                <p>
                    You have the right to access, rectify, cancel, or object to the processing of your personal data (ARCO Rights). To exercise these rights, you may send a request to our email address clientes@nexorithm.com.mx, accompanied by a copy of your official identification. We undertake to respond to your request within 5 business days following receipt.
                </p>

                <h2>Changes to the Privacy Notice</h2>
                <p>
                    We reserve the right to make modifications or updates to this Privacy Notice at any time, which will be published on our website nexorithm.com.mx.
                </p>

                <p>
                    The use of our services implies your express consent for the processing of your personal data in accordance with the purposes and terms established in this Privacy Notice.
                </p>

                <p>
                    For any questions or additional information regarding this Privacy Policy, you may contact us through the email address clientes@nexorithm.com.mx.
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