export const skillCategories = [
  {
    id: "python-data-science",
    title: "Python & Data Science",
    roleFocus: "Analysis, Statistics & Predictive Work",
    skills: [
      { name: "Python", core: true, highlight: "Data analysis, transformation, validation, and investigation" },
      { name: "Pandas", core: true, highlight: "Analytical datasets, cleansing, and feature preparation" },
      { name: "NumPy", core: true, highlight: "Numerical analysis and array-based transformation" },
      { name: "Exploratory Data Analysis", core: true, highlight: "Patterns, anomalies, distributions, and root causes" },
      { name: "Statistical Analysis", core: true, highlight: "Evaluation and interpretation of analytical outputs" },
      { name: "Feature Engineering & Machine Learning", core: true, highlight: "Preprocessing, predictive analysis, and model evaluation" }
    ]
  },
  {
    id: "sql-cloud-analytics",
    title: "SQL, Databases & Cloud Analytics",
    roleFocus: "Querying, Warehousing & Analytical Storage",
    skills: [
      { name: "SQL", core: true, highlight: "Extraction, transformation, validation, reconciliation, and optimization" },
      { name: "SQL Server", core: true, highlight: "Operational reporting and analytical queries" },
      { name: "Oracle", core: true, highlight: "Enterprise source-system integration" },
      { name: "PostgreSQL", core: true, highlight: "Financial data integration and normalization" },
      { name: "Amazon Redshift & Athena", core: true, highlight: "Cloud analytical datasets and complex query optimization" },
      { name: "Azure Synapse Analytics", core: true, highlight: "Large-scale insurance data analysis" }
    ]
  },
  {
    id: "data-engineering-cloud",
    title: "Data Engineering & Cloud",
    roleFocus: "Pipelines, Integration & Transformation",
    skills: [
      { name: "ETL & SSIS", core: true, highlight: "Multi-source data integration and transformation" },
      { name: "Azure Data Factory", core: true, highlight: "Cloud pipeline orchestration and dataset preparation" },
      { name: "AWS Glue", core: true, highlight: "Data ingestion and transformation workflows" },
      { name: "Amazon S3 & Lambda", core: true, highlight: "Cloud storage and serverless processing" },
      { name: "Amazon Kinesis", core: true, highlight: "Streaming pipeline monitoring into Redshift" },
      { name: "REST APIs & JSON", core: true, highlight: "External source integration and normalization" },
      { name: "AWS & Microsoft Azure", core: true, highlight: "Cloud analytics and data engineering platforms" }
    ]
  },
  {
    id: "visualization-quality-delivery",
    title: "Visualization, Quality & Delivery",
    roleFocus: "KPIs, Trusted Data & Stakeholder Outcomes",
    skills: [
      { name: "Power BI & DAX", core: true, highlight: "Interactive dashboards, analytical metrics, and KPI reporting" },
      { name: "Tableau", core: true, highlight: "Certified desktop visualization" },
      { name: "Excel & Power Query", core: true, highlight: "Analysis, transformation, and standardized datasets" },
      { name: "Data Profiling & Cleansing", core: true, highlight: "Missing, duplicate, inconsistent, and mismatched records" },
      { name: "Validation & Reconciliation", core: true, highlight: "Reliable outputs and data integrity" },
      { name: "Business Requirements & UAT", core: true, highlight: "KPIs, user stories, acceptance criteria, and production validation" },
      { name: "Agile, Scrum & Git", core: true, highlight: "Collaborative delivery and version control" }
    ]
  }
];

export const skillGraphRelations = [
  { source: "Oracle", target: "AWS Glue", type: "ingestion" },
  { source: "AWS Glue", target: "Amazon Redshift & Athena", type: "transformation" },
  { source: "Amazon Redshift & Athena", target: "Python", type: "analysis" },
  { source: "Python", target: "Feature Engineering & Machine Learning", type: "prediction" },
  { source: "Azure Data Factory", target: "Azure Synapse Analytics", type: "pipeline" },
  { source: "SQL", target: "Power BI & DAX", type: "reporting" },
  { source: "Validation & Reconciliation", target: "Business Requirements & UAT", type: "delivery" }
];
