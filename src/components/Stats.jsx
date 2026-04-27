"use client";

import { useEffect, useRef, useState } from "react";
import { FiUsers, FiMonitor, FiTrendingUp } from "react-icons/fi";

const stats = [
  {
    icon: FiUsers,
    value: 10000,
    suffix: "+",
    label: "Professionals Trained",
    description: "Across leading enterprises worldwide",
    color: "from-primary-500 to-blue-600",
    bg: "bg-primary-50",
  },
  {
    icon: FiMonitor,
    value: 200,
    suffix: "+",
    label: "Sessions Delivered",
    description: "Interactive, expert-led training modules",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
  },
  {
    icon: FiTrendingUp,
    value: 5000,
    suffix: "+",
    label: "Active Learners",
    description: "Currently enrolled in our programs",
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
  },
];

function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(eased * target);
            setCount(current);
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  const formatNumber = (num) => {
    if (num >= 1000) return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
    return num.toString();
  };

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1a73e8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-500 text-sm font-semibold mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-900 mb-4">
            The Numbers Behind Our{" "}
            <span className="text-gradient">Success</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Proven track record of transforming enterprises through strategic
            training and development programs.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl p-8 card-shadow hover-lift border border-gray-100 text-center"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl ${stat.bg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 bg-gradient-to-br ${stat.color} bg-clip-text`} style={{ color: 'inherit' }} />
              </div>

              {/* Number */}
              <div className={`text-5xl lg:text-6xl font-extrabold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <h3 className="text-lg font-bold text-dark-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-400">{stat.description}</p>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-t-full bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
