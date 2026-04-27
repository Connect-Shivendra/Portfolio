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
        "After winning the 'HQ Rising Star' award from the CEO, I was promoted to Head of Data Platforms and Engineering at Event Hospitality & Entertainment, responsible for implementing the enterprise data strategy and leading data transformation initiatives across 75+ hotels, 74+ cinemas, and Thredbo Ski Resort in Australia and New Zealand.",
        "My role involved evaluating Deloitte's five-year IT Roadmap and developing an Enterprise Data Strategy aligned with business goals, focusing on risk reduction, enablement, and customer growth. I led the migration from a 12-year-old on-premise EDW to a modern cloud-based platform, while also transforming the organisation's business intelligence capabilities.",
      ]}
      achievements={[
        "Developed and executed Enterprise Data Strategy that transformed EVT into a data-driven organisation with 250+ daily active self-service business users",
        "Led migration of 18+ data sources to a unified Snowflake platform, reducing data ingestion and processing times by 80%",
        "Deployed Enterprise BI platform with 36+ dashboards, driving a 29% reduction in lost sales opportunities through transparent KPI tracking",
        "Achieved $1.7M in cost savings through outsourcing and end-to-end automation",
        "Received Business Transformation of the Year Runner-Up award for the Hotels Dashboard Project (2022)",
      ]}
      technologies="Snowflake, AWS (S3, Lambda, SFTP, Glue), Tableau, Matillion, Azure AD, SAML, OpenID, RBAC, Business Objects, Crystal Reports, InforPM, ITSM, Agile methodologies, data quality tools, data governance frameworks"
      results="The successful execution of the data strategy through multiple projects transformed EVT into a data-driven organisation. The implementation of a trusted single source of truth with integrated views on Finance, Sales, Marketing, Customer, and Operational data enabled better decision-making across the business. The Enterprise BI platform provided near real-time data visualisation, fostering productivity and competition within sales teams."
      ctaTitle="Interested in Similar Solutions?"
      ctaDescription="Looking to transform your organisation's data landscape? I can help you develop and implement comprehensive data strategies, build robust data platforms, and create insightful visualisations that drive better decision-making and business growth."
    />
  );
}
