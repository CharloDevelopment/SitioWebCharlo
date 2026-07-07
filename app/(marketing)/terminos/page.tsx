import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso de Charlo. Reglas, obligaciones y derechos al usar nuestro sitio y servicios.",
  alternates: {
    canonical: "/terminos",
  },
  openGraph: {
    title: "Términos y Condiciones — Charlo",
    description: "Reglas y condiciones de uso de Charlo.",
    url: `${siteConfig.url}/terminos`,
  },
};

const LAST_UPDATED = "Julio 2026";

export default function TerminosPage() {
  return (
    <SectionWrapper spacing="lg">
      <Container size="md">
        <Breadcrumb items={[{ label: "Términos" }]} className="mb-6" />

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h1>Términos y Condiciones</h1>
          <p className="text-muted-foreground">Última actualización: {LAST_UPDATED}</p>

          <p>
            Bienvenido a <strong>Charlo</strong>. Al acceder y utilizar nuestro sitio web{" "}
            <strong>{siteConfig.url}</strong> y los servicios de <strong>Charlo Platform</strong>,
            aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo, te
            pedimos no utilizar el sitio.
          </p>

          <h2>1. Aceptación de los términos</h2>
          <p>
            El uso de este sitio web y de los servicios de Charlo implica la aceptación plena de los
            presentes Términos y Condiciones, así como de nuestra{" "}
            <a href="/privacidad">Política de Privacidad</a> y{" "}
            <a href="/cookies">Aviso de Cookies</a>. Estos documentos constituyen un acuerdo legal
            entre tú y Charlo.
          </p>

          <h2>2. Descripción del servicio</h2>
          <p>
            Charlo es una plataforma de software como servicio (SaaS) que ofrece herramientas de
            automatización e inteligencia artificial para pequeñas y medianas empresas (PYMES),
            incluyendo:
          </p>
          <ul>
            <li>
              <strong>Charlo Atención:</strong> agente de atención al cliente con IA.
            </li>
            <li>
              <strong>Charlo Cobranza:</strong> automatización de recordatorios de pago.
            </li>
            <li>
              <strong>Charlo Agenda:</strong> gestión automatizada de citas.
            </li>
          </ul>
          <p>
            La disponibilidad y funcionalidad específica dependen del plan contratado según se
            describe en nuestra página de <a href="/precios">Precios</a>.
          </p>

          <h2>3. Registro y cuenta</h2>
          <p>
            Para acceder a ciertos servicios, deberás crear una cuenta proporcionando información
            veraz, completa y actualizada. Eres responsable de:
          </p>
          <ul>
            <li>Mantener la confidencialidad de tus credenciales.</li>
            <li>Todas las actividades que ocurran bajo tu cuenta.</li>
            <li>Notificarnos inmediatamente sobre cualquier uso no autorizado.</li>
          </ul>

          <h2>4. Uso aceptable</h2>
          <p>Al usar Charlo, te comprometes a NO:</p>
          <ul>
            <li>Utilizar el servicio para actividades ilegales, fraudulentas o dañinas.</li>
            <li>Enviar spam, contenido ofensivo, acosador o que viole derechos de terceros.</li>
            <li>
              Intentar acceder a áreas restringidas, hacer ingeniería inversa o comprometer la
              seguridad del servicio.
            </li>
            <li>Revender, sublicenciar o redistribuir el servicio sin autorización escrita.</li>
            <li>
              Usar el servicio para actividades que violen la LFPDPPP u otras leyes aplicables.
            </li>
            <li>Cargar contenido que contenga virus, malware o cualquier código dañino.</li>
          </ul>

          <h2>5. Planes y pagos</h2>
          <h3>5.1 Setup único</h3>
          <p>
            Al contratar cualquier plan, se cobra un setup único de <strong>$499 MXN</strong> que
            cubre la configuración inicial, entrenamiento del agente y onboarding.
          </p>
          <h3>5.2 Suscripción mensual</h3>
          <p>
            Los planes se cobran mensualmente según la tarifa vigente al momento de la contratación.
            Los precios pueden actualizarse con previo aviso de 30 días.
          </p>
          <h3>5.3 Cancelación</h3>
          <p>
            Puedes cancelar tu suscripción en cualquier momento. No hay penalizaciones por
            cancelación. El servicio seguirá activo hasta el final del período pagado.
          </p>
          <h3>5.4 Reembolsos</h3>
          <p>
            El setup no es reembolsable una vez iniciado el proceso de configuración. Las
            suscripciones mensuales se reembolsan proporcionalmente solo en caso de incumplimiento
            demostrable por parte de Charlo.
          </p>

          <h2>6. Propiedad intelectual</h2>
          <p>
            Todo el contenido de este sitio web (textos, gráficos, logos, iconos, imágenes,
            software) es propiedad de Charlo o de sus licenciantes y está protegido por las leyes de
            propiedad intelectual. No está permitida la reproducción, distribución o modificación
            sin autorización previa por escrito.
          </p>
          <p>
            Las marcas, logos y nombres de productos de terceros son propiedad de sus respectivos
            dueños y se usan solo con fines informativos.
          </p>

          <h2>7. Confidencialidad y datos personales</h2>
          <p>
            El tratamiento de tus datos personales se rige por nuestra{" "}
            <a href="/privacidad">Política de Privacidad</a>. Al usar nuestros servicios, aceptas
            dicho tratamiento.
          </p>

          <h2>8. Limitación de responsabilidad</h2>
          <p>Charlo no será responsable por:</p>
          <ul>
            <li>Daños indirectos, incidentales, especiales o consecuentes.</li>
            <li>
              Pérdida de datos, ingresos, clientes o reputación derivada del uso del servicio.
            </li>
            <li>
              Interrupciones del servicio por mantenimiento, actualizaciones o causas fuera de
              nuestro control.
            </li>
            <li>Acciones de terceros (proveedores de internet, plataformas de pago, etc.).</li>
          </ul>
          <p>
            Nuestra responsabilidad total agregada no excederá el monto total pagado por ti a Charlo
            en los 12 meses anteriores al evento que originó la responsabilidad.
          </p>

          <h2>9. Niveles de servicio (SLA)</h2>
          <p>
            Para clientes del plan Empresa ofrecemos un SLA con disponibilidad del 99.5%. Para otros
            planes, haremos nuestros mejores esfuerzos por mantener el servicio disponible, sin
            garantías formales de uptime.
          </p>

          <h2>10. Modificaciones al servicio y los términos</h2>
          <p>
            Charlo se reserva el derecho de modificar o descontinuar cualquier aspecto del servicio
            en cualquier momento. También podemos actualizar estos términos; los cambios serán
            efectivos al publicarse en esta página. El uso continuado del servicio después de los
            cambios constituye aceptación de los mismos.
          </p>

          <h2>11. Terminación</h2>
          <p>
            Podemos suspender o terminar tu acceso a Charlo en cualquier momento, con o sin causa,
            con aviso previo de 30 días cuando sea posible. Causales de terminación inmediata
            incluyen:
          </p>
          <ul>
            <li>Incumplimiento de estos Términos.</li>
            <li>Uso fraudulento o ilegal del servicio.</li>
            <li>Falta de pago después de 30 días de mora.</li>
            <li>Conducta que dañe a Charlo o a otros usuarios.</li>
          </ul>

          <h2>12. Ley aplicable y jurisdicción</h2>
          <p>
            Estos términos se rigen por las leyes federales de los Estados Unidos Mexicanos.
            Cualquier controversia será resuelta por los tribunales competentes de la Ciudad de
            México, renunciando expresamente a cualquier otro fuero que pudiera corresponder.
          </p>

          <h2>13. Disposiciones generales</h2>
          <ul>
            <li>
              Si alguna disposición de estos términos es declarada inválida, las demás permanecen
              vigentes.
            </li>
            <li>El hecho de no ejercer un derecho no constituye renuncia al mismo.</li>
            <li>Estos términos constituyen el acuerdo completo entre tú y Charlo.</li>
          </ul>

          <h2>14. Contacto</h2>
          <p>
            Para cualquier duda sobre estos Términos y Condiciones:
            <br />
            <strong>Email:</strong> {siteConfig.email}
            <br />
            <strong>Sitio web:</strong> <a href="/contacto">charlo.mx/contacto</a>
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
