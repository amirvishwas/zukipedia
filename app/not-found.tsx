import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — Zukipedia",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="no-results" style={{ paddingTop: "80px" }}>
      <div className="no-results-emoji" style={{ color: "var(--blue-500)", fontWeight: "bold" }}>404</div>
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
          background: "var(--blue-600)",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "14px",
          transition: "background 0.2s ease",
        }}
      >
        Return to Main Page
      </Link>
    </div>
  );
}
