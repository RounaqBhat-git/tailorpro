import Link from "next/link";

const lookbookImages = [
  {
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4e78?w=800&q=85",
    caption: "Crimson Bridal Lehenga with hand-embroidered zari work",
    tall: true,
  },
  {
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=85",
    caption: "Golden Anarkali — bridal reception look",
    tall: false,
  },
  {
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=85",
    caption: "Kashmiri tilla embroidery on silk dupatta",
    tall: false,
  },
];

const experience = [
  {
    title: "Personal Bridal Consultation",
    body: "A dedicated session with our lead designer to understand your vision, preferences, and the story behind your big day.",
    icon: "◈",
  },
  {
    title: "3 Rounds of Fitting",
    body: "We don't stop at one fitting. Your bridal outfit goes through at least three rounds of adjustments to ensure a flawless silhouette.",
    icon: "✦",
  },
  {
    title: "Custom Embroidery",
    body: "Your initials, a date, or a motif of significance — our artisans can weave it into the design.",
    icon: "❋",
  },
  {
    title: "Ceremony to Reception",
    body: "We coordinate your entire bridal wardrobe — from the wedding look to mehendi, sangeet, and reception outfits.",
    icon: "◇",
  },
];

export default function BridalPage() {
  return (
    <>
      {/* Full-bleed hero */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 640,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1594938298603-c8148c4b4e78?w=1600&q=90)",
            backgroundSize: "cover",
            backgroundPosition: "center 15%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10,6,4,0.62)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 32px",
            maxWidth: 760,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.25em",
              color: "#c9a84c",
              marginBottom: 24,
            }}
          >
            ✦ &nbsp; BRIDAL COLLECTION &nbsp; ✦
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(40px, 7vw, 88px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: 24,
            }}
          >
            Made for the
            <br />
            <span style={{ color: "#c9a84c", fontStyle: "italic" }}>
              Most Important Day
            </span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.85,
              maxWidth: 520,
              margin: "0 auto 48px",
            }}
          >
            Every bride deserves a garment that fits her story perfectly.
            Our master tailors work with you personally — from the first sketch to the final fitting.
          </p>
          <Link href="/download" className="btn-gold">
            Book Your Bridal Consultation
          </Link>
        </div>
      </section>

      {/* Brand promise */}
      <section style={{ background: "#fff" }}>
        <div
          className="section"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#c9a84c",
                marginBottom: 16,
              }}
            >
              THE TAILOR PRO PROMISE
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(26px, 3.5vw, 42px)",
                fontWeight: 700,
                color: "#2c2c2c",
                lineHeight: 1.25,
                marginBottom: 20,
              }}
            >
              A Bridal Experience
              <br />as Special as You
            </h2>
            <div className="gold-rule" style={{ marginBottom: 28 }} />
            <p
              style={{
                fontSize: 15,
                color: "#666",
                lineHeight: 1.9,
                marginBottom: 16,
              }}
            >
              Bridal wear at Tailor Pro is not a transaction — it&apos;s a collaboration. We take time
              to understand you: your family traditions, your aesthetic, your comfort level, and the
              emotions you want to carry on your wedding day.
            </p>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.9, marginBottom: 36 }}>
              The result is a garment that doesn&apos;t just look beautiful in photographs. It feels
              like a second skin.
            </p>
            <Link href="/download" className="btn-gold">
              Start On The App
            </Link>
          </div>

          {/* Image */}
          <div
            style={{
              height: 560,
              borderRadius: 24,
              overflow: "hidden",
              backgroundImage:
                "url(https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700&q=85)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </section>

      {/* The bridal experience steps */}
      <section style={{ background: "var(--bg)" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#c9a84c",
                marginBottom: 12,
              }}
            >
              YOUR JOURNEY
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#2c2c2c" }}
            >
              The Bridal Experience
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {experience.map((e) => (
              <div
                key={e.title}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "36px 28px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    color: "#c9a84c",
                    marginBottom: 16,
                    lineHeight: 1,
                  }}
                >
                  {e.icon}
                </div>
                <h3
                  className="font-serif"
                  style={{ fontSize: 18, fontWeight: 700, color: "#2c2c2c", marginBottom: 10 }}
                >
                  {e.title}
                </h3>
                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.75 }}>{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook — editorial, not a product grid */}
      <section style={{ background: "#fff" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#c9a84c",
                marginBottom: 12,
              }}
            >
              LOOKBOOK
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#2c2c2c" }}
            >
              A Few Pieces from Our Bridal Archive
            </h2>
            <p style={{ fontSize: 14, color: "#aaa", marginTop: 10 }}>
              Every piece shown was crafted for a real bride. Yours awaits in the app.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridTemplateRows: "auto auto",
              gap: 16,
            }}
          >
            {/* Large left item */}
            <div
              style={{
                gridRow: "span 2",
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
                minHeight: 560,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${lookbookImages[0].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "24px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
                }}
              >
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>
                  Bridal Lehenga
                </div>
                <div
                  className="font-serif"
                  style={{ fontSize: 16, color: "#fff", fontWeight: 600 }}
                >
                  {lookbookImages[0].caption}
                </div>
              </div>
            </div>

            {/* Top right */}
            <div
              style={{
                gridColumn: "span 2",
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
                height: 280,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${lookbookImages[1].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center 30%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px 24px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                }}
              >
                <div
                  className="font-serif"
                  style={{ fontSize: 16, color: "#fff", fontWeight: 600 }}
                >
                  {lookbookImages[1].caption}
                </div>
              </div>
            </div>

            {/* Bottom right */}
            <div
              style={{
                gridColumn: "span 2",
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
                height: 264,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${lookbookImages[2].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px 24px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                }}
              >
                <div
                  className="font-serif"
                  style={{ fontSize: 16, color: "#fff", fontWeight: 600 }}
                >
                  {lookbookImages[2].caption}
                </div>
              </div>
            </div>
          </div>

          {/* App CTA */}
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <p
              style={{
                fontSize: 15,
                color: "#888",
                marginBottom: 24,
              }}
            >
              These are just a glimpse. The full bridal catalog lives in the app.
            </p>
            <Link href="/download" className="btn-gold">
              Explore Full Bridal Catalog in App
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e1a16 0%, #2c2018 100%)",
          borderTop: "1px solid rgba(201,168,76,0.15)",
        }}
      >
        <div className="section" style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#c9a84c",
              marginBottom: 20,
            }}
          >
            ✦ YOUR STORY BEGINS HERE ✦
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 20,
            }}
          >
            Ready to Design Your Bridal Look?
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 440,
              margin: "0 auto 40px",
              lineHeight: 1.8,
            }}
          >
            Download the app, browse the bridal catalog, and book your free consultation with our
            senior designer.
          </p>
          <Link href="/download" className="btn-gold">
            Download Tailor Pro
          </Link>
        </div>
      </section>
    </>
  );
}
