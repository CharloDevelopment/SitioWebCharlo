import { ImageResponse } from "next/og";

export const alt = "Charlo — La inteligencia artificial, hecha simple.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "linear-gradient(135deg, #0030F0 0%, #103050 50%, #0a0a0a 100%)",
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: "white",
            color: "#0030F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            fontWeight: 700,
          }}
        >
          C
        </div>
        Charlo
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          maxWidth: 900,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          La inteligencia artificial,
          <br />
          hecha simple.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            opacity: 0.92,
            lineHeight: 1.4,
            maxWidth: 820,
          }}
        >
          Automatiza tu atención, cobranza y agenda. Para PYMES de 2 a 50 empleados.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 24,
          opacity: 0.85,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 6,
            background: "white",
          }}
        />
        charlo.mx
      </div>
    </div>,
    { ...size },
  );
}
