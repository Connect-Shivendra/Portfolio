"use client";
import Timeline from '@/app/components/Timeline';
import WorkPageLayout from '@/app/components/WorkPageLayout';

const timelineEvents = [
  { date: "June 2024", title: "Role Commencement", description: "Started as Head of Information & BI Services, taking ownership of Data & Insights (D&I), Enterprise Information Management (EIM / EDMS / Records Management), and Spatial Information Services (SIS — GIS/mapping) within the DTI branch." },
  { date: "July 2024", title: "Enterprise Data Strategy Approved", description: "Developed and received ELG approval for a comprehensive data strategy centred on a greenfield Azure Databricks-based Enterprise Data Lakehouse, 18 priority PowerBI use cases, and a DAMA-aligned governance framework — with 54 additional high-value use cases identified across six directorates." },
  { date: "August 2024", title: "Enterprise BI Dashboards Live", description: "Launched operational PowerBI dashboards covering Sustainability (renewable energy, waste, IoT water quality), Customer Planning & Performance (KPIs across all directorates), Employee Satisfaction (eNPS trends), Enterprise Risk reporting, and Cybersecurity incident monitoring via MS Defender and Upguard." },
  { date: "September 2024", title: "Data Lakehouse Architecture Finalised", description: "Interviewed local government data leaders across Australia (City of Melbourne, City of Greater Geelong, etc.) to benchmark use cases, tech stacks, and costs. Finalised Azure Databricks through a rigorous ROI exercise. Engaged Microsoft Gold Partners to accelerate delivery and reduce time-to-outcomes." },
  { date: "October 2024", title: "Open Data Initiatives Launched", description: "Launched Australia's first council mowing schedule visualised on a Camden LGA boundary map on the public open data portal. Also delivered Hook, Line & Capture — a community fish-tracking platform for the Nepean waterways, being extended to other Sydney Parkland Councils via NSW state funding." },
  { date: "November 2024", title: "Governance & Compliance Programs", description: "Implemented NSW Information Classification, Labelling & Handling via MS Purview across M365 products. Commenced PI Audit & Remediation under the NSW PPIP Act. ELG-endorsed Record Destruction program underway, prioritising HR and Family Daycare data in EDMS. EDMS upgrade planning (OpenText Content Manager 9.x → 10.x) and GDA2020 QGIS datum upgrade initiated." },
];

export default function CamdenCouncilPage() {
  return (
    <WorkPageLayout
      title="Local Government: Camden Council"
      role="Head of Information & BI Services"
      companyImage="/Camden-Council.jpg"
      timeline={<Timeline events={timelineEvents} />}
      overview={[
        "As Head of Information & BI Services at Camden Council, I lead three cross-functional teams within the DTI branch: Data & Insights (D&I), Enterprise Information Management (EIM — EDMS and Records Management), and Spatial Information Services (SIS — GIS and mapping). My mandate is to empower the organisation with data-driven insights, deliver trusted enterprise information assets, and build the data foundations that underpin Council's strategic objectives.",
        "A flagship achievement has been developing and securing ELG approval for a comprehensive Enterprise Data Strategy — anchored by a greenfield Azure Databricks-based Data Lakehouse as the organisation's Single Source of Truth. The strategy maps 18 priority use cases and a further 54 high-value use cases across six directorates, to be delivered via a hybrid operating model with Microsoft Gold Partners over 18 months. I also manage vendor relationships and procurement across Australia, New Zealand, Germany, and India, including buy NSW, Core& and PSPA frameworks.",
      ]}
      achievements={[
        "Developed and secured ELG approval for Enterprise Data Strategy — 18 priority PowerBI use cases approved, with 54 additional high-value use cases identified across 6 directorates",
        "Launched operational PowerBI dashboards: Sustainability (renewable energy, waste, IoT water quality), KPI performance reporting, eNPS employee surveys, Enterprise Risk, and Cybersecurity incident tracking via MS Defender and Upguard",
        "Finalised Azure Databricks as target lakehouse architecture after interviewing data leaders at City of Melbourne, City of Greater Geelong, and other Australian councils — selected through rigorous ROI benchmarking",
        "Launched Australia's first council mowing schedule open data map on a public portal; delivered Hook, Line & Capture community fish-tracking platform (expanding to other Sydney Parkland Councils via NSW state funding)",
        "Implemented NSW Information Classification, Labelling & Handling via MS Purview across M365; commenced PI Audit & Remediation under NSW PPIP Act",
        "Led ELG-endorsed Record Destruction program — destruction of high-risk PI data (HR and Family Daycare) underway in EDMS",
        "Initiated EDMS upgrade (OpenText Content Manager 9.x → 10.x), cloud EDMS evaluation, and GDA2020 QGIS datum upgrade to reduce manual intervention in NSW Spatial Services Cadastre processing",
        "Managing vendor relationships across Australia, New Zealand, Germany, and India — negotiations via buy NSW, Core& and PSPA procurement frameworks",
      ]}
      technologies="Azure Databricks, PowerBI, Microsoft Purview, Microsoft 365, OpenText Content Manager (EDMS), QGIS (GDA2020), Azure Cloud Services, IoT sensors, MS Defender, Upguard, DAMA governance framework, NSW PPIP Act compliance tooling"
      results="The approved Enterprise Data Strategy has set a clear path to eliminating Camden Council's fragmented point-to-point reporting in favour of a trusted Single Source of Truth. Operational PowerBI dashboards are already enabling data-driven decisions across sustainability, risk, and performance. Open data initiatives have positioned Camden as a transparency leader — including a national first — while governance programs have materially reduced PI data risk and improved regulatory compliance. The hybrid lakehouse delivery model with Microsoft Gold Partners is designed to deliver 18 priority use cases within 18 months."
      ctaTitle="Want to Discuss This Further?"
      ctaDescription="Happy to detail the data strategy, platforms delivered, and lessons learned from leading data, records, and spatial teams in local government."
    />
  );
}
