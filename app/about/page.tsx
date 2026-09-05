import Link from "next/link";

const team = [
  {
    name: "Gulzar Ahmed",
    role: "Founder & Master Tailor",
    bio: "35+ years crafting garments in Srinagar. Gulzar founded Tailor Pro to preserve Kashmiri artisanship for the next generation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Noor Fatima",
    role: "Lead Fashion Designer",
    bio: "Trained in Mumbai, rooted in Kashmir. Noor blends contemporary silhouettes with traditional Kashmiri motifs.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Iqbal Dar",
    role: "Embroidery Specialist",
    bio: "Third-generation artisan. Iqbal's sozni and tilla work has featured in international fashion exhibitions.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

const values = [
  {
    title: "Authenticity",
    body: "We use only genuine Kashmiri materials and authentic embroidery techniques. No shortcuts, no substitutes.",
  },
  {
    title: "Precision",
    body: "Every garment is measured, cut, and fitted multiple times. A perfect fit is not optional — it is the minimum.",
  },
  {
    title: "Community",
    body: "We employ artisans from Kashmir's weaving and embroidery communities, preserving livelihoods and traditions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: 72,
          position: "relative",
          overflow: "hidden",
          background: "#1e1a16",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
          }}
        />
        <div
          className="section"
          style={{ position: "relative", zIndex: 1, paddingBottom: 80 }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#c9a84c",
              marginBottom: 20,
            }}
          >
            OUR STORY
          </div>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              maxWidth: 700,
              marginBottom: 24,
            }}
          >
            Rooted in Kashmir,
            <br />
            <span style={{ color: "#c9a84c" }}>Made for the World</span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 520,
              lineHeight: 1.85,
            }}
          >
            For over three decades, we have been turning Kashmir&apos;s rich textile heritage into
            garments that people wear on their most meaningful days.
          </p>
        </div>
      </section>

      {/* Brand story — long-form editorial */}
      <section style={{ background: "#fff" }}>
        <div
          className="section"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Left: story */}
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
              SINCE 1992
            </div>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 700,
                color: "#2c2c2c",
                marginBottom: 20,
              }}
            >
              A Workshop in Srinagar,
              <br />A Vision for the Valley
            </h2>
            <div className="gold-rule" style={{ marginBottom: 28 }} />
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.95, marginBottom: 20 }}>
              Gulzar Ahmed opened his first workshop on Residency Road, Srinagar, in 1992. There
              were no apps, no websites — just a measuring tape, a sewing machine, and a reputation
              for getting the fit exactly right.
            </p>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.95, marginBottom: 20 }}>
              Over the following decades, word spread. Brides came from Delhi. Families from Jammu
              sent their daughters for bridal consultations. The workshop grew, but the philosophy
              never changed: every garment is made for one person, fitted to one body, finished by hand.
            </p>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.95 }}>
              Today, Tailor Pro has over 50 artisans, a design studio, and an app that brings this
              experience to anyone across India. The workshop on Residency Road still runs. The measuring
              tape still matters most.
            </p>
          </div>

          {/* Right: stats + image */}
          <div>
            <div
              style={{
                height: 400,
                borderRadius: 24,
                overflow: "hidden",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=85)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginBottom: 32,
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 24,
                padding: "24px",
                background: "var(--bg)",
                borderRadius: 16,
              }}
            >
              {[
                { n: "1992", l: "Founded" },
                { n: "50+", l: "Artisans" },
                { n: "10K+", l: "Garments" },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <div
                    className="font-serif"
                    style={{ fontSize: 28, fontWeight: 800, color: "#c9a84c" }}
                  >
                    {s.n}
                  </div>
                  <div style={{ fontSize: 12, color: "#999", marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              WHAT WE STAND FOR
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#2c2c2c" }}
            >
              Our Values
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  padding: "40px 32px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="font-serif"
                  style={{
                    fontSize: 52,
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
                  {v.title}
                </h3>
                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.8 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: "#fff" }}>
        <div className="section">
          <div style={{ marginBottom: 48 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#c9a84c",
                marginBottom: 12,
              }}
            >
              THE PEOPLE
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#2c2c2c" }}
            >
              Meet the Artisans
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {team.map((member) => (
              <div key={member.name}>
                <div
                  style={{
                    height: 360,
                    borderRadius: 20,
                    overflow: "hidden",
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    marginBottom: 20,
                  }}
                />
                <div
                  className="font-serif"
                  style={{ fontSize: 20, fontWeight: 700, color: "#2c2c2c", marginBottom: 4 }}
                >
                  {member.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#c9a84c",
                    marginBottom: 10,
                  }}
                >
                  {member.role.toUpperCase()}
                </div>
                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.75 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#1e1a16" }}>
        <div className="section" style={{ textAlign: "center" }}>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Experience it for Yourself
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 400,
              margin: "0 auto 36px",
              lineHeight: 1.8,
            }}
          >
            Download the app and connect with our artisans directly.
          </p>
          <Link href="/download" className="btn-gold">
            Download Tailor Pro
          </Link>
        </div>
      </section>
    </>
  );
}
