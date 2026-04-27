"use client";

const clients = [
  { name: "Reliance", color: "#0044AA" },
  { name: "HCL Tech", color: "#0073E7" },
  { name: "IBM", color: "#054ADA" },
  { name: "CRIF", color: "#E63946" },
  { name: "ADP", color: "#D0271D" },
  { name: "BAYER", color: "#10857F" },
  { name: "TCS", color: "#2962FF" },
  { name: "Wipro", color: "#431C80" },
];

function ClientLogo({ name, color }) {
  return (
    <div className="flex-shrink-0 mx-8 group cursor-default">
      <div className="px-8 py-5 rounded-2xl bg-white border border-gray-100 card-shadow hover-lift transition-all duration-300 group-hover:border-primary-200">
        <span
          className="text-xl font-bold tracking-wide opacity-40 group-hover:opacity-80 transition-opacity duration-300"
          style={{ color }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="container-custom mb-10">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gray-50 text-gray-500 text-sm font-semibold mb-3">
            Trusted Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900">
            Empowering Teams at{" "}
            <span className="text-gradient">Leading Enterprises</span>
          </h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...clients, ...clients].map((client, i) => (
            <ClientLogo key={i} name={client.name} color={client.color} />
          ))}
        </div>
      </div>
    </section>
  );
}
