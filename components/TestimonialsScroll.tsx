"use client";

const reviews = [
  {
    text: "The pheran I ordered was absolutely stunning. The embroidery detail was beyond my expectations. Will definitely order again!",
    name: "Aisha Khan",
    location: "Srinagar",
    initials: "AK",
    rating: 5,
  },
  {
    text: "Tailor Pro transformed my bridal experience. Each outfit was crafted with such love and precision. Truly royal.",
    name: "Ruhi Bhat",
    location: "Delhi",
    initials: "RB",
    rating: 5,
  },
  {
    text: "The measurement visit was so professional and the final fit was perfect. Kashmiri craftsmanship at its finest.",
    name: "Farida Mir",
    location: "Jammu",
    initials: "FM",
    rating: 5,
  },
  {
    text: "I ordered a sherwani for my brother's wedding. The tilla embroidery was exquisite and the delivery was on time.",
    name: "Tariq Ahmed",
    location: "Mumbai",
    initials: "TA",
    rating: 5,
  },
  {
    text: "My bridal lehenga was a dream come true. The team understood my vision perfectly and executed it flawlessly.",
    name: "Saba Wani",
    location: "Srinagar",
    initials: "SW",
    rating: 5,
  },
  {
    text: "Ordered a kashmiri pheran for my mother. She was moved to tears — it reminded her of her childhood. Thank you.",
    name: "Imran Qadri",
    location: "Bangalore",
    initials: "IQ",
    rating: 5,
  },
  {
    text: "Three outfits for three ceremonies and every single one was perfect. The sozni work on my dupatta was breathtaking.",
    name: "Nadia Lone",
    location: "Hyderabad",
    initials: "NL",
    rating: 5,
  },
  {
    text: "Fast delivery, premium quality, and the fit was like it was made exactly for me — because it was. Highly recommend.",
    name: "Zubair Shah",
    location: "Pune",
    initials: "ZS",
    rating: 5,
  },
  {
    text: "The anarkali set I received is so beautifully stitched. I have gotten compliments every time I wear it.",
    name: "Huma Dar",
    location: "Chandigarh",
    initials: "HD",
    rating: 5,
  },
  {
    text: "Worth every rupee. The pashmina shawl I ordered is the softest thing I have ever worn. Real Kashmiri quality.",
    name: "Priya Raina",
    location: "Delhi",
    initials: "PR",
    rating: 5,
  },
];

// All reviews in one row

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f5a623">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 320,
        background: "#fff",
        borderRadius: 18,
        padding: "24px 28px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        marginRight: 20,
      }}
    >
      <Stars count={review.rating} />
      <p
        style={{
          fontSize: 14,
          color: "#444",
          lineHeight: 1.75,
          fontStyle: "italic",
          flex: 1,
          margin: 0,
        }}
      >
        &ldquo;{review.text}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#c9a84c,#b8860b)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            fontWeight: 700,
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {review.initials}
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#2c2c2c" }}>{review.name}</div>
          <div style={{ fontSize: 11, color: "#bbb" }}>{review.location}</div>
        </div>
      </div>
    </div>
  );
}

function ScrollRow({
  items,
  direction = "left",
  speed = 40,
}: {
  items: (typeof reviews)[0][];
  direction?: "left" | "right";
  speed?: number;
}) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  const duration = items.length * speed;

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: `scroll-${direction} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} review={r} />
        ))}
      </div>

      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default function TestimonialsScroll() {
  return (
    <section style={{ background: "var(--bg)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 0" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56, padding: "0 32px" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#c9a84c",
              marginBottom: 12,
            }}
          >
            ✦ &nbsp; CLIENT STORIES &nbsp; ✦
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 700,
              color: "#2c2c2c",
              marginBottom: 12,
            }}
          >
            What Our Clients Say
          </h2>
          <p style={{ fontSize: 14, color: "#aaa", maxWidth: 400, margin: "0 auto" }}>
            10,000+ happy customers across India. Here are a few of their stories.
          </p>
        </div>

        {/* Single row — scrolls left */}
        <ScrollRow items={reviews} direction="left" speed={38} />
      </div>
    </section>
  );
}
