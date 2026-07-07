import type { Metadata } from "next";
import { Container } from "@/components/shared/container";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Aviso de Cookies",
  description:
    "Cómo Charlo usa cookies y tecnologías similares. Tipos de cookies, terceros y cómo gestionarlas.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Aviso de Cookies — Charlo",
    description: "Cómo Charlo usa cookies y tecnologías similares.",
    url: `${siteConfig.url}/cookies`,
  },
};

const LAST_UPDATED = "Julio 2026";

export default function CookiesPage() {
  return (
    <SectionWrapper spacing="lg">
      <Container size="md">
        <Breadcrumb items={[{ label: "Cookies" }]} className="mb-6" />

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h1>Aviso de Cookies</h1>
          <p className="text-muted-foreground">Última actualización: {LAST_UPDATED}</p>

          <p>
            Este sitio web utiliza cookies y tecnologías similares. Al continuar navegando, aceptas
            el uso de cookies según se describe en este aviso. Si no estás de acuerdo, puedes
            rechazar las cookies no esenciales desde el banner o configurar tu navegador.
          </p>

          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que un sitio web almacena en tu dispositivo
            cuando lo visitas. Sirven para que el sitio recuerde tus acciones y preferencias durante
            un período determinado.
          </p>

          <h2>¿Qué tipos de cookies usamos?</h2>

          <h3>1. Cookies estrictamente necesarias</h3>
          <p>Estas cookies son esenciales para que el sitio funcione correctamente. Incluyen:</p>
          <ul>
            <li>Preferencias de tema (claro/oscuro).</li>
            <li>Estado del cookie banner (aceptar/rechazar).</li>
            <li>Tokens de seguridad y sesión.</li>
          </ul>
          <p>
            <strong>Base legal:</strong> Interés legítimo (no requieren consentimiento).
            <br />
            <strong>Duración:</strong> Sesión o persistente (hasta 1 año).
          </p>

          <h3>2. Cookies de análisis y rendimiento</h3>
          <p>
            Nos permiten medir el tráfico y entender cómo los usuarios interactúan con el sitio.
            Usamos:
          </p>
          <ul>
            <li>
              <strong>Google Analytics 4:</strong> métricas de uso agregadas y anónimas.
            </li>
            <li>
              <strong>Microsoft Clarity:</strong> grabación de sesiones (mapas de calor y replays)
              para detectar problemas de UX.
            </li>
          </ul>
          <p>
            <strong>Base legal:</strong> Consentimiento.
            <br />
            <strong>Duración:</strong> Hasta 2 años.
            <br />
            <strong>Opt-out:</strong>{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics opt-out
            </a>
            .
          </p>

          <h3>3. Cookies de marketing</h3>
          <p>
            Eventualmente podríamos usar cookies para mostrarte anuncios relevantes en otros sitios
            web. Por el momento <strong>no usamos cookies de marketing</strong>.
          </p>

          <h2>Cookies de terceros</h2>
          <p>Algunos terceros colocan cookies cuando visitas nuestro sitio. Los principales son:</p>
          <ul>
            <li>
              <strong>Vercel:</strong> hosting y CDN (privacidad:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com/legal/privacy-policy
              </a>
              ).
            </li>
            <li>
              <strong>Google Analytics:</strong> análisis web (privacidad:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
              ).
            </li>
            <li>
              <strong>Microsoft Clarity:</strong> grabación de sesiones (privacidad:{" "}
              <a
                href="https://privacy.microsoft.com/privacystatement"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy.microsoft.com
              </a>
              ).
            </li>
          </ul>

          <h2>¿Cómo gestionar las cookies?</h2>
          <p>Puedes controlar y gestionar las cookies de varias formas:</p>
          <ol>
            <li>
              <strong>Desde el banner de cookies:</strong> al entrar al sitio, aceptas o rechazas
              las cookies no esenciales.
            </li>
            <li>
              <strong>Desde tu navegador:</strong> todos los navegadores modernos te permiten ver,
              bloquear o eliminar cookies. Consulta la ayuda de tu navegador (Chrome, Firefox,
              Safari, Edge).
            </li>
            <li>
              <strong>Opt-out de Google Analytics:</strong> instala el complemento oficial:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
              >
                tools.google.com/dlpage/gaoptout
              </a>
              .
            </li>
            <li>
              <strong>Opt-out de Microsoft Clarity:</strong>{" "}
              <a
                href="https://choice.microsoft.com/es-mx/opt-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                choice.microsoft.com
              </a>
              .
            </li>
          </ol>

          <h2>Consecuencias de rechazar cookies</h2>
          <p>
            Si rechazas las cookies no esenciales, el sitio seguirá funcionando correctamente. Las
            únicas funcionalidades afectadas serán:
          </p>
          <ul>
            <li>No tendremos datos para mejorar el sitio basándonos en tu uso.</li>
            <li>Los videos de demostración de productos pueden no funcionar.</li>
            <li>El remarketing (cuando esté activo) no funcionará.</li>
          </ul>

          <h2>Cambios a este aviso</h2>
          <p>
            Podemos actualizar este aviso para reflejar cambios en las cookies que utilizamos. Te
            recomendamos revisarlo periódicamente. La fecha de última actualización aparece al
            inicio de este documento.
          </p>

          <h2>Contacto</h2>
          <p>
            Si tienes preguntas sobre nuestro uso de cookies, escríbenos a: <br />
            <strong>Email:</strong> {siteConfig.email}
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
