export const projects = [
  {
    id: "banking-financial-analytics",
    slug: "banking-financial-analytics",
    number: "01",
    title: "Banking Financial Data & Predictive Analytics",
    tagline: "Cloud analytical datasets, financial KPIs, data quality controls, and predictive analysis for banking and wealth management.",
    clientOrContext: "Key Bank — Data Science & Financial Analytics",
    role: "Data Scientist",
    period: "09/2024 - Present",
    problem: "Banking, wealth management, risk, and reporting teams required reliable analytical datasets assembled from distributed databases, APIs, and streaming sources.",
    solution: "Built AWS ingestion and transformation workflows, normalized Oracle and PostgreSQL data, developed financial KPI logic, and applied Python-based analysis and machine learning techniques.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Amazon Redshift",
      "Amazon Athena",
      "AWS Glue",
      "Amazon S3",
      "AWS Lambda",
      "Amazon Kinesis"
    ],
    results: [
      "Improved data-processing performance by 30% through Redshift query and join optimization",
      "Supported deposits, lending, portfolio performance, risk, and regulatory KPI reporting",
      "Improved financial data quality through validation, reconciliation, null handling, and duplicate checks",
      "Applied preprocessing, feature preparation, predictive analysis, and output evaluation to selected financial datasets"
    ],
    architectureType: "RESUME-VERIFIED EXPERIENCE FLOW",
    architectureStages: [
      { id: "sources", label: "Financial Source Systems", tech: "Oracle / PostgreSQL / REST APIs / Kinesis", description: "Banking and financial data from operational, API, and streaming sources." },
      { id: "ingestion", label: "AWS Ingestion & Transformation", tech: "AWS Glue / Amazon S3 / AWS Lambda", description: "Cloud workflows for ingestion, normalization, and transformation." },
      { id: "warehouse", label: "Analytical Data Platform", tech: "Amazon Redshift / Amazon Athena / SQL", description: "Validated analytical datasets and optimized financial queries." },
      { id: "analysis", label: "Python Analysis & ML", tech: "Python / Pandas / NumPy / Machine Learning", description: "Exploration, feature preparation, predictive analysis, and evaluation." },
      { id: "reporting", label: "Financial KPI Outputs", tech: "Deposits / Lending / Portfolio / Risk Reporting", description: "Decision-ready metrics for banking, wealth, risk, and regulatory reporting." }
    ]
  },
  {
    id: "insurance-claims-analytics",
    slug: "insurance-claims-analytics",
    number: "02",
    title: "Insurance Claims & Policy Analytics",
    tagline: "Validated claims, policy, billing, premium, and customer data for operational analysis and management reporting.",
    clientOrContext: "MetLife — Insurance Data Analytics",
    role: "Data Analyst",
    period: "02/2024 - 09/2024",
    problem: "Claims, policy, billing, premium, and customer data required consistent extraction, validation, reconciliation, and KPI definitions across multiple enterprise sources.",
    solution: "Built Azure Data Factory pipelines, optimized Azure Synapse and SQL workflows, resolved data-quality issues, and partnered with stakeholders on KPIs and UAT.",
    technologies: [
      "SQL",
      "Azure Data Factory",
      "Azure Synapse Analytics",
      "Data Profiling",
      "Data Cleansing",
      "Data Validation",
      "Data Reconciliation",
      "UAT"
    ],
    results: [
      "Improved data-processing efficiency by 30% through optimized Azure Synapse and SQL workflows",
      "Improved the accuracy and consistency of insurance data through profiling, cleansing, validation, reconciliation, and anomaly analysis",
      "Developed KPI logic for claims, policies, premiums, billing, and operational performance",
      "Supported requirements, user stories, acceptance criteria, UAT, and data-validation issue resolution"
    ],
    architectureType: "RESUME-VERIFIED EXPERIENCE FLOW",
    architectureStages: [
      { id: "sources", label: "Insurance Data Sources", tech: "Claims / Policy / Billing / Premium / Customer", description: "Operational insurance and enterprise source data." },
      { id: "pipelines", label: "Azure Data Integration", tech: "Azure Data Factory", description: "Multi-source ingestion, transformation, and analytical dataset preparation." },
      { id: "analytics", label: "Cloud SQL Analytics", tech: "Azure Synapse Analytics / SQL", description: "Large-scale analysis and optimized complex queries." },
      { id: "quality", label: "Data Quality Controls", tech: "Profiling / Cleansing / Validation / Reconciliation", description: "Issue detection, anomaly analysis, and reliable data outputs." },
      { id: "reporting", label: "Insurance KPI Reporting", tech: "Claims / Policies / Premiums / Billing", description: "Analytical and management reporting for insurance decisions." }
    ]
  },
  {
    id: "supply-chain-operations-analytics",
    slug: "supply-chain-operations-analytics",
    number: "03",
    title: "Supply Chain Operations & KPI Reporting",
    tagline: "SQL analysis, integrated datasets, and Power BI reporting across orders, inventory, purchasing, products, and fulfillment.",
    clientOrContext: "Trigent Software — Supply Chain Analytics",
    role: "Data Analyst / Supply Chain",
    period: "06/2020 - 07/2023",
    problem: "Operational teams required consistent visibility across orders, inventory, products, purchasing, fulfillment, and related supply-chain records.",
    solution: "Developed SQL analysis, SSIS ETL workflows, Power BI dashboards, and repeatable data-quality checks while collaborating on requirements and UAT.",
    technologies: [
      "SQL",
      "SQL Server",
      "Power BI",
      "SSIS",
      "ETL",
      "Data Profiling",
      "Data Validation",
      "Data Reconciliation"
    ],
    results: [
      "Delivered KPI reporting for order volume, inventory levels, fulfillment performance, and product activity",
      "Prepared reliable analytical datasets through multi-source SSIS integration",
      "Identified missing, duplicate, inconsistent, and mismatched supply-chain records",
      "Supported stakeholder requirements, report validation, UAT, and data-issue investigation"
    ],
    architectureType: "RESUME-VERIFIED EXPERIENCE FLOW",
    architectureStages: [
      { id: "operations", label: "Operational Data", tech: "Orders / Inventory / Products / Purchasing", description: "Core supply-chain and operational records." },
      { id: "database", label: "SQL Server Analysis", tech: "SQL Server / Optimized SQL", description: "Extraction, transformation, and ad-hoc business analysis." },
      { id: "integration", label: "SSIS Data Integration", tech: "SSIS / ETL", description: "Multi-source integration and analytical dataset preparation." },
      { id: "quality", label: "Quality & Reconciliation", tech: "Profiling / Cleansing / Validation", description: "Detection and resolution of unreliable supply-chain records." },
      { id: "reporting", label: "Supply Chain KPI Dashboards", tech: "Power BI", description: "Reporting for inventory, orders, fulfillment, and product activity." }
    ]
  },
  {
    id: "retail-sales-analytics-dashboard",
    slug: "retail-sales-analytics-dashboard",
    number: "04",
    title: "Sales Analytics Dashboard for Retail Client",
    tagline: "Standardized sales, revenue, product, and customer data translated into interactive performance analysis and business KPIs.",
    clientOrContext: "Software Project — Retail Analytics",
    role: "Data Analyst",
    period: "Software Project",
    problem: "Sales, product, revenue, and customer data from multiple sources required consolidation and consistent analytical metrics.",
    solution: "Used SQL and Power Query to integrate, transform, cleanse, and standardize data before developing interactive visualizations and KPI analysis.",
    technologies: [
      "SQL",
      "Power Query",
      "Data Cleansing",
      "Data Transformation",
      "Data Visualization",
      "KPI Reporting"
    ],
    results: [
      "Identified sales trends, performance patterns, and business insights through SQL analysis",
      "Consolidated multiple sources into standardized analytical datasets",
      "Developed analytical metrics and interactive visualizations for sales, product, and business KPIs"
    ],
    architectureType: "SOFTWARE PROJECT FLOW",
    architectureStages: [
      { id: "sources", label: "Retail Data Sources", tech: "Sales / Revenue / Product / Customer", description: "Raw retail and customer performance data." },
      { id: "analysis", label: "SQL Analysis", tech: "SQL", description: "Trend analysis, performance patterns, and business insight discovery." },
      { id: "transform", label: "Data Preparation", tech: "SQL / Power Query", description: "Integration, transformation, cleansing, and standardization." },
      { id: "reporting", label: "Retail Analytics Dashboard", tech: "Interactive Visualizations / KPIs", description: "Decision-ready sales, product, and business performance reporting." }
    ]
  },
  {
    id: "financial-performance-monitoring",
    slug: "financial-performance-monitoring",
    number: "05",
    title: "Financial Performance Monitoring System",
    tagline: "Integrated revenue, expense, profit-margin, and budget data for consistent financial analysis and performance monitoring.",
    clientOrContext: "Software Project — Financial Analytics",
    role: "Data Analyst",
    period: "Software Project",
    problem: "On-premises and cloud-based financial data required consistent integration, validation, modeling, and analytical measures.",
    solution: "Used Azure Data Factory and Power Query to integrate and validate data, then designed star-schema models and standardized analytical measures.",
    technologies: [
      "Azure Data Factory",
      "Power Query",
      "SQL",
      "Star Schema",
      "Data Validation",
      "Analytical Measures"
    ],
    results: [
      "Identified financial trends, performance gaps, and business insights across revenue, expenses, profit margins, and budgets",
      "Integrated, transformed, and validated on-premises and cloud-based data",
      "Designed star-schema models and standardized measures for consistent financial reporting"
    ],
    architectureType: "SOFTWARE PROJECT FLOW",
    architectureStages: [
      { id: "sources", label: "Financial Data Sources", tech: "Revenue / Expenses / Profit / Budget", description: "On-premises and cloud-based financial data." },
      { id: "integration", label: "Cloud Data Integration", tech: "Azure Data Factory / Power Query", description: "Data integration, transformation, and validation." },
      { id: "model", label: "Analytical Data Model", tech: "Star Schema / SQL", description: "Consistent dimensional structures for financial analysis." },
      { id: "reporting", label: "Financial Performance Monitoring", tech: "Standardized Metrics / Analytical Measures", description: "Trend, gap, margin, and budget performance reporting." }
    ]
  }
];
