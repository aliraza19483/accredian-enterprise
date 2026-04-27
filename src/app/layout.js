import "./globals.css";

export const metadata = {
  title: "Accredian Enterprise | Next-Gen Corporate Training Solutions",
  description:
    "Cultivate high-performance teams through expert-led corporate training. Tailored solutions, industry insights, and proven frameworks for enterprise growth.",
  keywords:
    "corporate training, enterprise learning, professional development, Accredian, upskilling",
  openGraph: {
    title: "Accredian Enterprise | Next-Gen Corporate Training Solutions",
    description:
      "Cultivate high-performance teams through expert-led corporate training.",
    url: "https://enterprise.accredian.com",
    siteName: "Accredian Enterprise",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
