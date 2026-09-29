import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — Zukipedia",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="no-results" style={{ paddingTop: "80px" }}>
      <div className="no-results-emoji">🐡</div>
      <h3 style={{ fontSize: "28px", marginBottom: "12px" }}>
        404 — Species Not Found
      </h3>
      <p style={{ fontSize: "15px", marginBottom: "24px" }}>
        This fish seems to have swum away! The page you&apos;re looking for
        doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 24px",
          background: "linear-gradient(135deg, var(--ocean-500), var(--deep-500))",
          color: "white",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "14px",
          boxShadow: "0 4px 16px rgba(14, 165, 233, 0.3)",
          transition: "transform 0.2s ease",
        }}
      >
        🏠 Return to Main Page
      </Link>
    </div>
  );
}
