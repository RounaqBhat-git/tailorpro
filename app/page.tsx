import Link from "next/link";
import Image from "next/image";
import TestimonialsScroll from "@/components/TestimonialsScroll";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  {
    label: "Women's Wear",
    sub: "Anarkalis, Suits & Sarees",
    image: "/cat-womens-wear.jpg",
    position: "center 15%",
  },
  {
    label: "Bridal",
    sub: "Crafted for your biggest day",
    image: "/cat-bridal.jpg",
    position: "center 10%",
  },
  {
    label: "Pherans",
    sub: "Kashmir's signature garment",
    image: "/cat-pheran.jpg",
    position: "center top",
  },
  {
    label: "Men's Wear",
    sub: "Sherwanis & Pathani Sets",
    image: "/cat-mens-wear.jpg",
    position: "center 20%",
  },
];


const processSteps = [
  {
    n: "01",
    title: "Choose Your Design",
    body: "Browse our curated catalog inside the app — 500+ designs across every category.",
  },
  {
    n: "02",
    title: "Share Measurements",
    body: "Enter your measurements yourself or schedule a free home visit with our tailor.",
  },
  {
    n: "03",
    title: "Expert Stitching",
    body: "Master artisans with decades of experience bring your garment to life.",
  },
  {
    n: "04",
    title: "Delivered To You",
    body: "Your outfit arrives at your doorstep in 7–10 days, perfectly finished.",
  },
];


// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 600,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1594938298603-c8148c4b4e78?w=1600&q=90)",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
          }}
        />
        {/* Overlay — dark left, transparent right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, rgba(15,10,5,0.82) 0%, rgba(15,10,5,0.45) 55%, rgba(15,10,5,0.1) 100%)",
          }}
        />

        {/* ── Fabric image: absolutely fills the right 50% of the section ── */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "52%",
            height: "100%",
            zIndex: 1,
            /* Fade the left edge so it dissolves into the dark overlay;
               fade the bottom edge to avoid a hard clip */
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, black 50%), " +
              "linear-gradient(to top, transparent 0%, black 12%)",
            maskComposite: "intersect",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 22%, black 50%), " +
              "linear-gradient(to top, transparent 0%, black 12%)",
            WebkitMaskComposite: "destination-in",
            mixBlendMode: "luminosity",
            opacity: 0.92,
          }}
        >
          <Image
            src="/hero-fabric.jpg"
            alt="Intricate golden embroidered fabric"
            fill
            sizes="52vw"
            style={{
              objectFit: "cover",
              objectPosition: "center top",
            }}
            priority
          />
        </div>

        {/* ── Text content — left half ── */}
        <div
          className="px-8 md:px-12 pt-24 md:pt-0"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1200,
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div style={{ width: 32, height: 1, background: "#c9a84c" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#c9a84c",
                textTransform: "uppercase",
              }}
            >
              ✦ &nbsp; Welcome to Tailor Pro &nbsp; ✦
            </span>
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(42px, 6vw, 88px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.05,
              maxWidth: 560,
              marginBottom: 24,
            }}
          >
            Wear the Art
            <br />
            <span style={{ color: "#c9a84c" }}>of Kashmir</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 1.5vw, 18px)",
              color: "rgba(255,255,255,0.75)",
              maxWidth: 460,
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Custom-stitched Pherans, bridal wear &amp; ethnic outfits — crafted by
            master artisans with 30+ years of tradition.
          </p>

          {/* Proof points */}
          <div style={{ display: "flex", gap: "16px 24px", marginBottom: 48, flexWrap: "wrap" }}>
            {[
              { icon: "✦", text: "Custom Stitching" },
              { icon: "◈", text: "Made to Measure" },
              { icon: "★", text: "5★ Rated · 10K+ Customers" },
            ].map((p) => (
              <div
                key={p.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                <span style={{ color: "#c9a84c", fontSize: 12 }}>{p.icon}</span>
                {p.text}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/download" className="btn-gold">
              Download The App
            </Link>
            <Link href="/collections" className="btn-ghost">
              See Collections
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRAND STATEMENT
      ══════════════════════════════════════════ */}
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
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#c9a84c", marginBottom: 16 }}>
              ✦ &nbsp; SINCE 1992 &nbsp; ✦
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, color: "#2c2c2c", lineHeight: 1.25, marginBottom: 20 }}
            >
              Every Stitch Tells
              <br />a Story
            </h2>
            <div className="gold-rule" style={{ marginBottom: 28 }} />
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.9, marginBottom: 20 }}>
              Founded in the heart of Srinagar, Tailor Pro was built on a single belief — that
              clothing should be crafted precisely for the person who wears it. Not off a rack,
              not in bulk. Just for you.
            </p>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.9, marginBottom: 36 }}>
              Our artisans draw on generations of Kashmiri craftsmanship — sozni needlework,
              tilla embroidery, hand-woven pashmina — to create garments that carry the soul
              of the valley.
            </p>
            <div style={{ display: "flex", gap: 40 }}>
              {[
                { n: "30+", l: "Years of tradition" },
                { n: "10K+", l: "Garments crafted" },
                { n: "50+", l: "Master artisans" },
              ].map((s) => (
                <div key={s.l}>
                  <div
                    className="font-serif"
                    style={{ fontSize: 32, fontWeight: 800, color: "#c9a84c", lineHeight: 1 }}
                  >
                    {s.n}
                  </div>
                  <div style={{ fontSize: 12, color: "#999", marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div style={{ position: "relative", height: 500 }}>
            {/* Top-left: tailor stitching — hands doing gold embroidery */}
            <div
              className="lift"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "60%",
                height: "65%",
                borderRadius: 24,
                overflow: "hidden",
                backgroundImage: "url(/stitching-craft.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center 30%",
              }}
            />
            {/* Bottom-right: ethnic Kashmiri anarkali portrait */}
            <div
              className="lift"
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "60%",
                height: "65%",
                borderRadius: 24,
                overflow: "hidden",
                backgroundImage: "url(/ethnic-wear.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center 15%",
              }}
            />

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CATEGORIES — TEASER (not a catalog)
      ══════════════════════════════════════════ */}
      <section style={{ background: "var(--bg)" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#c9a84c", marginBottom: 12 }}>
              ✦ &nbsp; WHAT WE MAKE &nbsp; ✦
            </div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, color: "#2c2c2c" }}
            >
              Something for Every Occasion
            </h2>
            <p style={{ fontSize: 14, color: "#888", marginTop: 12, maxWidth: 440, margin: "12px auto 0" }}>
              From everyday elegance to once-in-a-lifetime moments — explore the full range inside the app.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="lift"
                style={{
                  position: "relative",
                  height: 380,
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${cat.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: cat.position,
                    transition: "transform 0.4s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, rgba(0,0,0,0) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "28px 24px",
                  }}
                >
                  <div
                    className="font-serif"
                    style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 4 }}
                  >
                    {cat.label}
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>{cat.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/download" className="btn-gold">
              Explore All In App
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BRIDAL FEATURE — full-bleed editorial
      ══════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1600&q=85)",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(20,12,8,0.68)",
          }}
        />
        <div
          className="section"
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
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
            ✦ &nbsp; BRIDAL COLLECTION &nbsp; ✦
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              maxWidth: 700,
              marginBottom: 20,
            }}
          >
            Your Dream Bridal Look, Made to Measure
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 520,
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            Every bride deserves a garment that fits her story. Our master tailors work with you
            personally — from the first sketch to the final fitting.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/bridal" className="btn-gold">
              See Bridal Lookbook
            </Link>
            <Link href="/download" className="btn-ghost">
              Book Consultation on App
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section style={{ background: "#fff", position: "relative", overflow: "hidden" }}>

        <div className="section">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#c9a84c", marginBottom: 16 }}>
              ✦ &nbsp; THE PROCESS &nbsp; ✦
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, color: "#2c2c2c", lineHeight: 1.2, marginBottom: 16 }}>
              From Idea to <span style={{ color: "#c9a84c" }}>Doorstep</span>
            </h2>
            <p style={{ fontSize: 15, color: "#888", maxWidth: 480, margin: "0 auto" }}>
              A seamless experience — designed around you, from the first tap to the final stitch.
            </p>
          </div>

          {/* Steps */}
          <div style={{ position: "relative" }}>
            {/* Connecting line — desktop only */}
            <div
              className="hidden lg:block"
              style={{
                position: "absolute",
                top: 44,
                left: "8%",
                right: "8%",
                height: 1,
                background: "repeating-linear-gradient(90deg, rgba(201,168,76,0.4) 0px, rgba(201,168,76,0.4) 8px, transparent 8px, transparent 18px)",
                zIndex: 0,
              }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5" style={{ position: "relative", zIndex: 1 }}>
              {[
                { n: "01", icon: "👗", title: "Select & Book", body: "Choose your garment type (Suit, Saree, Salwar, Pheran) & book on the app." },
                { n: "02", icon: "🏠", title: "Doorstep Visit", body: "Our expert tailor visits your home to take precise measurements." },
                { n: "03", icon: "🔐", title: "OTP & Pickup", body: "Secure digital OTP verification as we collect your fabric for stitching." },
                { n: "04", icon: "🪡", title: "Master Tailoring", body: "Fabric is taken to our warehouse where master artisans stitch your outfit." },
                { n: "05", icon: "⚡", title: "48-Hr Delivery", body: "Guaranteed delivery of your custom-fitted garment within 48 hours." },
              ].map((step, i) => (
                <div
                  key={step.n}
                  className="lift"
                  style={{
                    background: "#faf7f3",
                    border: "1px solid #ede8e0",
                    borderTop: "2px solid #c9a84c",
                    borderRadius: 20,
                    padding: "28px 20px 24px",
                    position: "relative",
                    cursor: "default",
                  }}
                >
                  {/* Step number bubble */}
                  <div style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #c9a84c, #b8860b)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                    boxShadow: "0 4px 16px rgba(201,168,76,0.3)",
                    position: "relative",
                    zIndex: 1,
                  }}>
                    <span className="font-serif" style={{ fontSize: 14, fontWeight: 800, color: "#fff", letterSpacing: "0.05em" }}>{step.n}</span>
                  </div>

                  {/* Icon */}
                  <div style={{ fontSize: 26, marginBottom: 12, lineHeight: 1 }}>{step.icon}</div>

                  {/* Title */}
                  <div className="font-serif" style={{ fontSize: 16, fontWeight: 700, color: "#2c2c2c", marginBottom: 8, lineHeight: 1.3 }}>
                    {step.title}
                  </div>

                  {/* Body */}
                  <div style={{ fontSize: 12.5, color: "#777", lineHeight: 1.65 }}>
                    {step.body}
                  </div>

                  {/* Step connector arrow — desktop only */}
                  {i < 4 && (
                    <div
                      className="hidden lg:flex"
                      style={{
                        position: "absolute",
                        top: 40,
                        right: -11,
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "#fff",
                        border: "1.5px solid rgba(201,168,76,0.4)",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                      }}
                    >
                      <span style={{ color: "#c9a84c", fontSize: 10, lineHeight: 1 }}>›</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee banner */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: 44, padding: "0 12px" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(201,168,76,0.08)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: 24,
              padding: "12px 20px",
              fontSize: 13,
              color: "#2c2c2c",
              fontWeight: 600,
              flexWrap: "wrap",
              justifyContent: "center",
              textAlign: "center",
            }}>
              <span>✂️ You Provide The Fabric</span>
              <span className="hidden sm:inline" style={{ color: "#c9a84c" }}>•</span>
              <span>🏠 Doorstep Measurements</span>
              <span className="hidden sm:inline" style={{ color: "#c9a84c" }}>•</span>
              <span>⚡ 48-Hour Guaranteed Delivery</span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/download" className="btn-gold">
              Start On The App
            </Link>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          TESTIMONIALS — auto-scrolling
      ══════════════════════════════════════════ */}
      <TestimonialsScroll />

      {/* ══════════════════════════════════════════
          APP DOWNLOAD — THE MAIN CTA
      ══════════════════════════════════════════ */}
      <section className="grain-overlay" style={{ background: "#1e1a16", overflow: "hidden", position: "relative" }}>

        {/* Decorative rings */}
        <div style={{ position: "absolute", top: -120, right: -120, width: 500, height: 500, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.12)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(201,168,76,0.08)", pointerEvents: "none" }} />

        {/* Ambient gold glow orb behind the phone */}
        <div style={{ position: "absolute", top: "50%", right: "18%", transform: "translate(50%,-50%)", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none", zIndex: 0 }} />

        <div
          className="section"
          style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 64, alignItems: "center", position: "relative", zIndex: 1 }}
        >
          {/* ── Left ── */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#c9a84c", marginBottom: 20 }}>
              ✦ &nbsp; THE FULL EXPERIENCE &nbsp; ✦
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(22px, 2.8vw, 36px)", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              500+ Designs.
              <br />
              <span style={{ color: "#c9a84c" }}>One App.</span>
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.9, maxWidth: 440, marginBottom: 40 }}>
              The website gives you a taste. The app gives you everything — full catalog, custom measurements,
              live chat with artisans, order tracking, and home consultations.
            </p>

            {/* App store badges — glass style */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
              <a href="#" className="badge-glass">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", letterSpacing: "0.05em" }}>Download on the</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>App Store</div>
                </div>
              </a>
              <a href="#" className="badge-glass">
                <svg width="22" height="22" viewBox="0 0 24 24">
                  <path fill="rgba(255,255,255,0.9)" d="M1.22 0C.847 0 .5.325.5.77v22.46c0 .445.347.77.72.77l.13-.022L12.54 12.5 1.35.022A.714.714 0 001.22 0z" />
                  <path fill="#fff" d="M23.25 11.5l-2.78-1.61-3.13 3.13L20.47 16l2.78-1.61A1.4 1.4 0 0024 13.2a1.4 1.4 0 00-.75-1.7z" />
                  <path fill="rgba(255,255,255,0.7)" d="M1.35.022L13.01 11.68l3.33-3.33L2.76.155A.75.75 0 001.35.022z" />
                  <path fill="rgba(255,255,255,0.9)" d="M1.35 23.978l11.66-11.498-3.33-3.33L1.35 23.978z" />
                </svg>
                <div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", letterSpacing: "0.05em" }}>Get it on</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>Google Play</div>
                </div>
              </a>
            </div>

            {/* Feature chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                { icon: "✦", label: "500+ curated designs" },
                { icon: "💬", label: "Live tailor chat" },
                { icon: "📐", label: "Custom measurements" },
                { icon: "📦", label: "Order tracking" },
                { icon: "🏠", label: "Home visit booking" },
                { icon: "👰", label: "Bridal consultations" },
              ].map((f) => (
                <div key={f.label} className="feature-chip">
                  <span style={{ fontSize: 13 }}>{f.icon}</span>
                  {f.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: animated phone mockup ── */}
          <div style={{ flexShrink: 0 }} className="hidden lg:block">
            <div className="phone-float" style={{ position: "relative" }}>
              {/* Phone frame */}
              <div style={{ width: 240, height: 480, borderRadius: 40, background: "#0d0d0d", border: "6px solid #2a2a2a", position: "relative", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.07)" }}>
                {/* Screen image */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "url(/cat-womens-wear.jpg)", backgroundSize: "cover", backgroundPosition: "center top" }} />
                {/* Screen overlay gradient */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)" }} />
                {/* Dynamic island notch */}
                <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 100, height: 28, borderRadius: 20, background: "#0d0d0d", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1a1a1a", border: "1px solid #333" }} />
                  <div style={{ width: 44, height: 12, borderRadius: 8, background: "#1a1a1a" }} />
                </div>
                {/* App UI elements */}
                <div style={{ position: "absolute", top: 56, left: 16, right: 16, zIndex: 5 }}>
                  <div style={{ fontSize: 8, letterSpacing: "0.15em", color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>TAILOR PRO</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Kashmir&apos;s Finest</div>
                </div>
                {/* Bottom app label */}
                <div style={{ position: "absolute", bottom: 20, left: 0, right: 0, textAlign: "center", zIndex: 5, padding: "0 16px" }}>
                  <div style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", borderRadius: 10, padding: "8px 12px", backdropFilter: "blur(8px)" }}>
                    <div style={{ fontSize: 9, letterSpacing: "0.1em", color: "#c9a84c", fontWeight: 700 }}>FEATURED DESIGN</div>
                    <div className="font-serif" style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginTop: 2 }}>Crafted Just For You</div>
                  </div>
                </div>
              </div>
              {/* Reflection */}
              <div style={{ position: "absolute", bottom: -48, left: "50%", transform: "translateX(-50%)", width: 160, height: 24, background: "radial-gradient(ellipse, rgba(201,168,76,0.2) 0%, transparent 70%)", filter: "blur(8px)" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
