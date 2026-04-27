"use client";
import Timeline from '@/app/components/Timeline';
import WorkPageLayout from '@/app/components/WorkPageLayout';
import { eventHospitalityEvents } from '@/app/utils/timelineData';

export default function EventHospitalityPage() {
  return (
    <WorkPageLayout
      title="Event Hospitality & Entertainment (ASX: EVT)"
      role="Head of Data Platforms & Engineering"
      companyImage="/EVT.jpg"
      timeline={<Timeline events={eventHospitalityEvents} />}
      overview={[
        "At Event Hospitality & Entertainment I owned the full data remit: Data Strategy, Data Platforms, Engineering & Operations, ITSM practices (Change, Incident, Problem, Request), Operational Continuity, SteerCo communications, vendor management, and CapEx/OpEx budgets across 75+ hotels, 74+ cinemas, and Thredbo Ski Resort spanning Australia and New Zealand. I evaluated Deloitte's five-year IT Roadmap and developed an Enterprise Data Strategy aligned with business goals — focusing on risk reduction (retiring a 12-year-old on-prem EDW running SQL-2000), enablement (greenfield cloud EDW and BI platform), and customer growth (NPS improvement and Single Customer View via a new CDP).",
        "Over four years, the successful execution of this strategy transformed EVT into a data-driven organisation with 250+ daily active self-service business users. I delivered this including navigating pandemic uncertainties around funding, attrition, and scope changes — within the approved budget. All CapEx requests were prepared as formal memos to the CFO and CEO. I was recognised with the CEO 'HQ Rising Star' award in 2020 and as Business Transformation Runner-Up in 2022.",
      ]}
      achievements={[
        "Developed and executed Enterprise Data Strategy — transformed EVT into a data-driven organisation with 250+ daily active self-service business users over four years",
        "Led migration of 18+ data sources (on-prem HQ, private cloud 5GN, AWS) to a unified Snowflake platform using Kimball methodology; reduced data ingestion and processing times by 80%",
        "Deployed Enterprise BI platform with 36+ Tableau dashboards (Hotels, Cinemas, Thredbo); drove a 29% reduction in lost sales opportunities through transparent daily KPI tracking",
        "Achieved $1.7M in documented cost savings through outsourcing and end-to-end Matillion CI/CD automation",
        "Negotiated 10% Tableau discount, 8% Snowflake discount, and reduced vendor costs by 30% by challenging work estimates; finalised MSAs (with legal) and SOWs for on-shore and off-shore vendors",
        "Enabled EVT–Telstra marketing partnership: data ingestion, processing and Tableau metrics reporting for movie ticket and F&B offer via Telstra points — enabling SLT to plan cross-sell and up-sell opportunities",
        "Built Data Center of Excellence (CoE): Power BI training, AWS certification prep sessions, Snowflake and Informatica vendor training, Datathons, and data lineage/quality knowledge base",
        "Ensured enterprise security via IAAA: RBAC, SAML, OpenID, MFA, password rotation, IP whitelisting, PI data masking, Azure AD SSO across all platforms",
        "Won CEO 'HQ Rising Star' award [2020] and Business Transformation of the Year Runner-Up [2022]",
      ]}
      technologies="Snowflake, Matillion (CI/CD), Tableau Online, PowerBI, AWS (S3, Lambda, Glue, SageMaker), Informatica, Azure Active Directory (SSO/MFA), SAML, OpenID, RBAC, ServiceNow (ITSM), Jira, Confluence, Kimball data modelling, Agile/Scrum"
      results="A trusted single source of truth integrating Finance, Sales, Marketing, Customer, and Operational data spanning seven years enabled data-driven decision-making across the enterprise. The BI platform gave business users near real-time visibility via drill-down Tableau dashboards, driving a 29% reduction in lost sales opportunities. Data ingestion times fell 80% and $1.7M was saved through automation and strategic outsourcing. The Telstra partnership data capability helped shape future cross-selling strategy at the SLT level. The CoE raised internal capability across the data function through structured training and knowledge sharing."
      ctaTitle="Interested in Similar Solutions?"
      ctaDescription="Looking to transform your data landscape with a clear strategy, modern cloud platform, and measurable business outcomes? I can help you go from a legacy EDW to a trusted, self-service data organisation — within budget, and built to last."
    />
  );
}
