import Link from "next/link";

const looks = [
  {
    label: "Bridal Lehenga",
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4e78?w=700&q=80",
    wide: true,
  },
  {
    label: "Kashmiri Pheran",
    category: "Pherans",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=80",
    wide: false,
  },
  {
    label: "Anarkali Set",
    category: "Women's Wear",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=700&q=80",
    wide: false,
  },
  {
    label: "Embroidered Sherwani",
    category: "Men's Wear",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80",
    wide: false,
  },
  {
    label: "Silk Occasion Wear",
    category: "Women's Wear",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=700&q=80",
    wide: true,
  },
  {
    label: "Pashmina Collection",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=700&q=80",
    wide: false,
  },
];

const pillars = [
  {
    title: "Custom Fit, Always",
    body: "Nothing leaves our ateliers without going through multiple fittings. Every garment is adjusted until it's perfect — because your body is unique and your clothes should be too.",
  },
  {
    title: "Sourced from Kashmir",
    body: "We use only the finest fabrics from Kashmir's renowned mills — pure pashmina, hand-woven silk, and premium cotton. Sourcing locally means supporting artisan communities.",
  },
  {
    title: "Generational Craftsmanship",
    body: "Our embroidery specialists are second and third-generation artisans. Techniques like sozni, tilla, and kasida are not just skills — they are living traditions.",
  },
];

export default function CollectionsPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: 72,
          background: "#1e1a16",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1400&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: 0.3,
          }}
        />
        <div
          className="section"
          style={{ position: "relative", zIndex: 1, textAlign: "center", paddingBottom: 72 }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#c9a84c",
              marginBottom: 16,
            }}
          >
            OUR COLLECTIONS
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            A Glimpse of
            <br />What We Create
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
              maxWidth: 480,
              margin: "0 auto 40px",
              lineHeight: 1.8,
            }}
          >
            These are just a few pieces from our ever-growing catalog. The full range of 500+ designs,
            fabrics, and customisation options lives in the Tailor Pro app.
          </p>
          <Link href="/download" className="btn-gold">
            See All 500+ Designs in App
          </Link>
        </div>
      </section>

      {/* Editorial grid */}
      <section style={{ background: "#fff" }}>
        <div className="section">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridAutoRows: 340,
              gap: 16,
            }}
          >
            {looks.map((look, i) => (
              <div
                key={look.label}
                className="lift"
                style={{
                  position: "relative",
                  borderRadius: 18,
                  overflow: "hidden",
                  gridColumn: look.wide ? "span 2" : "span 1",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${look.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 55%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "24px 24px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: "#c9a84c",
                      marginBottom: 4,
                    }}
                  >
                    {look.category.toUpperCase()}
                  </div>
                  <div
                    className="font-serif"
                    style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}
                  >
                    {look.label}
                  </div>
                </div>
                {/* "View in App" badge */}
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                  }}
                >
                  <Link
                    href="/download"
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#fff",
                      background: "rgba(201,168,76,0.9)",
                      padding: "6px 12px",
                      borderRadius: 20,
                      textDecoration: "none",
                      letterSpacing: "0.04em",
                    }}
                  >
                    View in App
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* The "rest is in the app" nudge */}
          <div
            style={{
              marginTop: 56,
              padding: "48px",
              borderRadius: 20,
              background: "var(--bg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#c9a84c",
                  marginBottom: 8,
                }}
              >
                THAT&apos;S JUST THE BEGINNING
              </div>
              <h3
                className="font-serif"
                style={{ fontSize: 28, fontWeight: 700, color: "#2c2c2c", marginBottom: 8 }}
              >
                500+ More Designs Await
              </h3>
              <p style={{ fontSize: 14, color: "#888", maxWidth: 480, lineHeight: 1.7 }}>
                Filter by category, fabric, occasion, and budget. Save your favourites, share measurements,
                and order custom — all inside the app.
              </p>
            </div>
            <Link href="/download" className="btn-gold" style={{ flexShrink: 0 }}>
              Download the App
            </Link>
          </div>
        </div>
      </section>

      {/* Craft pillars */}
      <section style={{ background: "var(--bg)" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#c9a84c",
                marginBottom: 12,
              }}
            >
              OUR STANDARDS
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#2c2c2c" }}
            >
              Why Tailor Pro is Different
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {pillars.map((p, i) => (
              <div
                key={p.title}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "36px 32px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="font-serif"
                  style={{
                    fontSize: 48,
                    fontWeight: 800,
                    color: "#f0e8d8",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  0{i + 1}
                </div>
                <h3
                  className="font-serif"
                  style={{ fontSize: 20, fontWeight: 700, color: "#2c2c2c", marginBottom: 12 }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
