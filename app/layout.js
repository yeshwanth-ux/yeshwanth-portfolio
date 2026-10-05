import localFont from "next/font/local";
import "./globals.css";
import { profile } from "@/data/profile";

const cabinetGrotesk = localFont({
  src: [
    { path: "../public/fonts/CabinetGrotesk-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/CabinetGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/CabinetGrotesk-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/CabinetGrotesk-Extrabold.woff2", weight: "800", style: "normal" }
  ],
  variable: "--font-display",
  display: "swap"
});

const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" }
  ],
  variable: "--font-body",
  display: "swap"
});

export const metadata = {
  title: `${profile.name} — ${profile.displayRole}`,
  description: `${profile.primaryRole} specializing in ${profile.domain}. Building validated analytical datasets, cloud data workflows, predictive analysis, KPIs, and decision-ready reporting.`,
  keywords: [
    "Yeshwanth Reddy Bujula",
    "Data Scientist",
    "Data Analyst",
    "Python",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "SQL",
    "AWS Glue",
    "Amazon Redshift",
    "Amazon Athena",
    "Azure Data Factory",
    "Azure Synapse Analytics",
    "Power BI",
    "Tableau",
    "Data Quality"
  ],
  authors: [{ name: profile.name }],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: `${profile.name} — ${profile.displayRole}`,
    description: profile.positioning,
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cabinetGrotesk.variable} ${satoshi.variable}`}>
      <body>{children}</body>
    </html>
  );
}
