"use client";
import Timeline from '@/app/components/Timeline';
import WorkPageLayout from '@/app/components/WorkPageLayout';
import { amdocsEvents } from '@/app/utils/timelineData';

export default function AmdocsLimitedPage() {
  return (
    <WorkPageLayout
      title="Amdocs Limited (NASDAQ: DOX)"
      role="Senior Subject Matter Expert · Data Services"
      companyImage="/Amdocs.jpg"
      timeline={<Timeline events={amdocsEvents} />}
      overview={[
        "At Amdocs Limited, I served as a Senior Subject Matter Expert for Data Services, focusing on data migration and ETL processes for major telecommunications clients. My role involved managing large-scale data transformation projects and system integrations for telecom providers across Asia.",
        "I led two major projects: TKS CRM PHASE-2 for Telkomsel, an Indonesian telecom with 250 million active subscribers, and GLOBE SWEDEN PHASE-2 for Globe Telecommunications, a Singtel group company with over 40 million prepaid subscribers.",
      ]}
      achievements={[
        "Successfully migrated and transformed data for Telkomsel, one of Indonesia's largest telecom providers with 250 million subscribers",
        "Led migration of over 40 million prepaid subscribers for Globe Telecommunications to the Amdocs BSS platform",
        "Designed transformation logic and coded business logic into optimally tuned and defect-free code",
        "Developed UNIX shell scripts to load data into target systems with high efficiency",
        "Managed end-to-end SDLC of designing, coding, testing, and supporting systems for telecom clients",
      ]}
      technologies="Informatica PowerCenter, UNIX shell scripting, Oracle database management, Amdocs BSS products (CRM, OMS, SRM), data mapping and transformation tools, system integration frameworks, waterfall methodology implementation"
      results="The successful migration of telecom data for both Telkomsel and Globe Telecommunications streamlined their operations by consolidating legacy systems into modern Amdocs platforms. These transformations ensured data consistency and integrity throughout the migration process, optimized ETL processes for large-scale data volumes, and delivered high-quality data transformation with strict adherence to project timelines."
      ctaTitle="Want to Discuss This Further?"
      ctaDescription="Happy to discuss the large-scale telecom data migrations, ETL complexity, and technical decisions behind these projects."
    />
  );
}
