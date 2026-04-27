"use client";
import Timeline from '@/app/components/Timeline';
import WorkPageLayout from '@/app/components/WorkPageLayout';

const timelineEvents = [
  { date: "June 2024", title: "Role Commencement", description: "Started as Head of Information & BI Services, overseeing Data & Insights, Enterprise Information Management, and Spatial Information Services." },
  { date: "July 2024", title: "Enterprise Data Strategy", description: "Developed and received ELG approval for comprehensive data strategy focusing on data foundations, capabilities, and governance." },
  { date: "August 2024", title: "Enterprise BI Implementation", description: "Launched operational dashboards for Sustainability, Customer Planning & Performance, Employee Surveys, and Risk Management." },
  { date: "September 2024", title: "Data Lakehouse Planning", description: "Interviewed local government data leaders across Australia to finalise Azure Databricks architecture for the Enterprise Data Lakehouse." },
  { date: "October 2024", title: "Open Data Initiatives", description: "Launched innovative open data projects including Mowing Schedule visualisation and Hook, Line & Capture for community engagement." },
  { date: "November 2024", title: "EDMS Upgrade Planning", description: "Initiated planning for Opentext Content Manager upgrade and evaluation of cloud-based alternatives." },
];

export default function CamdenCouncilPage() {
  return (
    <WorkPageLayout
      title="Local Government: Camden Council"
      role="Head of Data, Information & AI"
      companyImage="/Camden-Council.jpg"
      timeline={<Timeline events={timelineEvents} />}
      overview={[
        "As Head of Information & BI Services at Camden Council, I spearhead Data & Insights (D&I), Enterprise Information Management (EIM — EDMS), and Spatial Information Services (SIS — QGIS) functions within the DTI branch. My role focuses on implementing data-driven strategies and solutions to enhance decision-making across the organisation.",
        "A key achievement has been the development and approval of the Enterprise Data Strategy, which outlines a comprehensive approach to improving data maturity, delivering high-value use cases, and implementing robust governance frameworks.",
      ]}
      achievements={[
        "Developed and received approval for comprehensive Enterprise Data Strategy aligned with organisational goals",
        "Designed and implemented operational dashboards in PowerBI covering Sustainability, Performance, Employee Satisfaction, and Risk Management",
        "Led the planning and architecture selection for a greenfield Azure Databricks-based Enterprise Data Lakehouse",
        "Launched innovative open data initiatives to foster transparency and community engagement",
        "Implemented NSW Information Classification and Labelling using MS Purview on M365 products",
      ]}
      technologies="Azure Databricks, PowerBI, Microsoft Purview, Opentext Content Manager, QGIS, Azure Cloud Services, IoT sensors, M365 products, DAMA framework for data governance"
      results="The implementation of the Enterprise Data Strategy and associated initiatives has positioned Camden Council to make more informed, data-driven decisions. The planned Enterprise Data Lakehouse will create a single source of truth, eliminating siloed information and enabling cross-functional insights. Open data initiatives have enhanced community engagement and transparency, while improved governance frameworks have strengthened data security and compliance."
      ctaTitle="Interested in Similar Solutions?"
      ctaDescription="Looking to transform your organisation's data landscape? I can help you develop and implement comprehensive data strategies, build robust data platforms, and create insightful visualisations that drive better decision-making."
    />
  );
}
