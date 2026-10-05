export const roleTheme = {
  roleId: "data-scientist-analyst",
  primaryRole: "Data Scientist & Data Analyst",
  secondaryRole: "Cloud Data Integration & Business Intelligence",
  domain: "Banking, Insurance, Supply Chain & Retail Analytics",
  palette: {
    bg: "#080B0A",
    bgSubtle: "#0D1311",
    bgSurface: "#121A16",
    text: "#F3F5F4",
    textMuted: "#82948B",
    accent: "#34D399",
    accentGlow: "rgba(52, 211, 153, 0.28)",
    system: "#2EE59D",
    systemGlow: "rgba(46, 229, 157, 0.22)",
    line: "rgba(255, 255, 255, 0.08)",
    lineBright: "rgba(52, 211, 153, 0.25)"
  },
  typography: {
    displayFamily: "var(--font-display)",
    bodyFamily: "var(--font-body)",
    mood: "Analytical, precise, evidence-led, and operationally grounded"
  },
  visualMetaphor: {
    name: "Validated Data-to-Decision Flow",
    summary: "Operational data is integrated, profiled, validated, analyzed, and translated into reliable KPIs, predictive outputs, and decision-ready reporting.",
    phases: [
      { id: "source", title: "SOURCE SYSTEMS", subtitle: "Oracle / PostgreSQL / SQL Server / APIs", meaning: "Operational and enterprise data" },
      { id: "integrate", title: "CLOUD INGESTION", subtitle: "AWS Glue / S3 / Lambda / ADF / SSIS", meaning: "Reliable multi-source integration" },
      { id: "quality", title: "QUALITY GATES", subtitle: "Profiling / Cleansing / Reconciliation", meaning: "Validated and consistent datasets" },
      { id: "analyze", title: "ANALYTICAL MODEL", subtitle: "Python / Pandas / SQL / Machine Learning", meaning: "Exploration, metrics, and prediction" },
      { id: "deliver", title: "DECISION OUTPUT", subtitle: "Power BI / Tableau / KPI Reporting", meaning: "Clear business and operational insight" }
    ]
  },
  particles: {
    semantics: "Source Records, Features & Analytical Signals",
    baseCountDesktop: 78,
    baseCountMobile: 48,
    flowDirection: "horizontal-convergent",
    speed: 0.65,
    interactionRadius: 120,
    attractionStrength: 0.08,
    connectionDistance: 75,
    accentRatio: 0.18,
    systemRatio: 0.32
  },
  motion: {
    easing: [0.16, 1, 0.3, 1], // Custom cinematic spring
    timing: {
      micro: 180,
      component: 450,
      section: 850,
      cinematic: 1200
    }
  },
  architectureStyle: {
    format: "pipeline-matrix",
    gridSubdivision: "hairline-technical",
    cornerStyle: "sharp-subtle-2px",
    nodeShape: "structured-cardinal"
  }
};
