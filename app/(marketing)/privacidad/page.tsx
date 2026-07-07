import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { buildBreadcrumbJsonLd } from "@/lib/breadcrumb-jsonld";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Cómo Charlo protege tus datos personales. Cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
  alternates: {
    canonical: "/privacidad",
  },
  openGraph: {
    title: "Aviso de Privacidad — Charlo",
    description: "Cómo Charlo protege tus datos personales.",
    url: `${siteConfig.url}/privacidad`,
  },
};

const LAST_UPDATED = "Julio 2026";

export default function PrivacidadPage() {
  const breadcrumbSchema = buildBreadcrumbJsonLd([{ label: "Privacidad", href: "/privacidad" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <SectionWrapper spacing="lg">
        <Container size="md">
          <Breadcrumb items={[{ label: "Privacidad" }]} className="mb-6" />

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h1>Aviso de Privacidad</h1>
            <p className="text-muted-foreground">Última actualización: {LAST_UPDATED}</p>

            <p>
              En <strong>Charlo</strong> (en adelante &ldquo;Charlo&rdquo;, &ldquo;nosotros&rdquo;),
              respetamos tu derecho a la autodeterminación informativa y estamos comprometidos con
              la protección de tus datos personales de acuerdo con la{" "}
              <strong>
                Ley Federal de Protección de Datos Personales en Posesión de los Particulares
                (LFPDPPP)
              </strong>{" "}
              y su Reglamento.
            </p>

            <h2>1. Identidad y domicilio del responsable</h2>
            <p>
              Charlo es responsable del tratamiento de tus datos personales. Para cualquier asunto
              relacionado con este aviso de privacidad, puedes contactarnos en:
              <br />
              <strong>Correo:</strong> {siteConfig.email}
              <br />
              <strong>Domicilio:</strong> México (100% remoto)
            </p>

            <h2>2. Datos personales que recabamos</h2>
            <p>
              Para cumplir con las finalidades descritas en el presente aviso, recabamos las
              siguientes categorías de datos personales:
            </p>
            <ul>
              <li>
                <strong>De identificación y contacto:</strong> nombre, correo electrónico, teléfono,
                empresa.
              </li>
              <li>
                <strong>De uso y navegación:</strong> dirección IP, tipo de navegador, páginas
                visitadas, tiempo en el sitio.
              </li>
              <li>
                <strong>De facturación:</strong> en caso de contratar un plan, datos fiscales y de
                pago.
              </li>
              <li>
                <strong>De comunicación:</strong> mensajes que nos envías por formularios, WhatsApp
                o email.
              </li>
            </ul>

            <h2>3. Datos personales sensibles</h2>
            <p>
              Charlo no recaba datos personales sensibles (origen racial, salud, ideología, etc.) a
              través de este sitio web. Si en el futuro llegamos a requerir este tipo de datos, te
              lo informaremos y solicitaremos tu consentimiento expreso por escrito.
            </p>

            <h2>4. Finalidades del tratamiento</h2>
            <p>
              <strong>Finalidades primarias</strong> (necesarias para la relación jurídica):
            </p>
            <ul>
              <li>Proveer los servicios contratados de Charlo Platform.</li>
              <li>Atender tus solicitudes de información, demostración o soporte.</li>
              <li>Gestionar el pago y la facturación de los servicios.</li>
              <li>Cumplir con obligaciones legales y regulatorias.</li>
            </ul>
            <p>
              <strong>Finalidades secundarias</strong> (no necesarias para la relación jurídica):
            </p>
            <ul>
              <li>Enviarte comunicaciones de marketing, newsletters y promociones.</li>
              <li>Realizar encuestas de satisfacción y estudios de mercado.</li>
              <li>Analizar el uso del sitio web para mejorar nuestros servicios.</li>
            </ul>
            <p>
              Si no deseas que tus datos sean tratados para las finalidades secundarias, puedes
              manifestarlo enviando una solicitud a <strong>{siteConfig.email}</strong>. Tu negativa
              no será motivo para negarte los servicios que solicitas.
            </p>

            <h2>5. Transferencias</h2>
            <p>
              Charlo comparte tus datos personales con los siguientes terceros, únicamente para las
              finalidades señaladas:
            </p>
            <ul>
              <li>
                <strong>Proveedores de servicios:</strong> Vercel (hosting), Resend (email), Google
                Analytics, Microsoft Clarity, WhatsApp Business API, Stripe/Mercado Pago (pagos).
              </li>
              <li>
                <strong>Autoridades:</strong> cuando sea requerido por ley.
              </li>
            </ul>
            <p>
              En todos los casos, exigimos a los terceros suscribir cláusulas de confidencialidad y
              tratamiento conforme a la LFPDPPP.
            </p>

            <h2>6. Mecanismos para limitar el uso o divulgación de los datos</h2>
            <p>
              Puedes limitar el uso o divulgación de tus datos personales en los siguientes medios:
            </p>
            <ul>
              <li>
                Solicitud por email a <strong>{siteConfig.email}</strong>.
              </li>
              <li>Uso del cookie banner (puedes rechazar cookies no esenciales).</li>
              <li>
                Configuración de &ldquo;opt-out&rdquo; en Google Analytics:{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tools.google.com/dlpage/gaoptout
                </a>
                .
              </li>
            </ul>

            <h2>7. Derechos ARCO</h2>
            <p>
              Tienes derecho a conocer qué datos personales tenemos de ti, para qué los utilizamos y
              las condiciones del uso que les damos (<strong>Acceso</strong>). Asimismo, es tu
              derecho solicitar la corrección de tu información personal en caso de que esté
              desactualizada, sea inexacta o incompleta (<strong>Rectificación</strong>); que la
              eliminemos de nuestros registros o bases de datos cuando consideres que la misma no
              está siendo utilizada conforme a los principios, deberes y obligaciones previstas en
              la normativa (<strong>Cancelación</strong>); así como oponerte al uso de tus datos
              personales para fines específicos (<strong>Oposición</strong>).
            </p>
            <p>
              Para ejercer cualquiera de estos derechos, debes enviar una solicitud a{" "}
              <strong>{siteConfig.email}</strong> que contenga:
            </p>
            <ul>
              <li>Nombre del titular y medio para recibir respuesta.</li>
              <li>Documento que acredite identidad (INE/IFE, pasaporte).</li>
              <li>Descripción clara y precisa del derecho a ejercer.</li>
            </ul>
            <p>
              Daremos respuesta a tu solicitud en un plazo no mayor a{" "}
              <strong>20 días hábiles</strong> contados a partir de su recepción, y en caso de
              resultar procedente, se hará efectiva dentro de los <strong>15 días hábiles</strong>{" "}
              siguientes a la fecha de comunicación.
            </p>

            <h2>8. Revocación del consentimiento</h2>
            <p>
              Puedes revocar el consentimiento que nos hayas otorgado para el tratamiento de tus
              datos personales enviando una solicitud a <strong>{siteConfig.email}</strong>. Sin
              embargo, es importante que consideres que no en todos los casos podremos atender tu
              solicitud de forma inmediata, ya que es posible que por alguna obligación legal
              requiramos seguir tratando tus datos.
            </p>

            <h2>9. Modificaciones al Aviso de Privacidad</h2>
            <p>
              Nos reservamos el derecho de modificar el presente aviso de privacidad. Cualquier
              cambio sustancial será notificado mediante correo electrónico a los usuarios que nos
              hayan proporcionado sus datos, o mediante un aviso visible en nuestro sitio web.
            </p>

            <h2>10. Cookies y tecnologías similares</h2>
            <p>
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia. Para más
              información, consulta nuestro <a href="/cookies">Aviso de Cookies</a>.
            </p>

            <h2>11. Transferencias internacionales</h2>
            <p>
              Tus datos pueden ser transferidos y tratados en servidores ubicados fuera de México
              (principalmente en Estados Unidos y Europa), por los proveedores de servicios
              enumerados en la sección 5. Garantizamos que estos proveedores cumplen con estándares
              internacionales de protección de datos.
            </p>

            <h2>12. Autoridad reguladora</h2>
            <p>
              Si consideras que tus derechos de protección de datos personales han sido vulnerados o
              presumes alguna violación a las disposiciones previstas en la Ley, podrás interponer
              una denuncia o queja ante el{" "}
              <strong>
                Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos
                Personales (INAI)
              </strong>
              . Para más información visita:{" "}
              <a href="https://home.inai.org.mx" target="_blank" rel="noopener noreferrer">
                home.inai.org.mx
              </a>
              .
            </p>

            <p className="text-muted-foreground text-sm">
              Este aviso se rige por la legislación federal mexicana. Cualquier controversia será
              resuelta por los tribunales competentes de la Ciudad de México.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
