"use client";
import Timeline from '@/app/components/Timeline';
import WorkPageLayout from '@/app/components/WorkPageLayout';
import { optusEvents } from '@/app/utils/timelineData';

export default function OptusPage() {
  return (
    <WorkPageLayout
      title="Optus Pty Ltd (Singtel Group)"
      role="Solution Designer · Data Migration"
      companyImage="/Optus.jpg"
      timeline={<Timeline events={optusEvents} />}
      overview={[
        "At Optus, I served as a Solution Designer for Data Migration, focusing on Project Spring — a large-scale initiative to consolidate 12 legacy systems into a single integrated platform provided by Amdocs. This ambitious project targeted the migration of 10 million subscribers across mobile (prepaid and post-paid), fixed line telephony, and enterprise customers.",
        "My role involved designing and developing comprehensive data migration solutions, from requirement gathering and analysis to implementation and quality assurance, ensuring seamless transition with minimal disruption to business operations.",
      ]}
      achievements={[
        "Successfully migrated 10 million subscribers from legacy systems to the Amdocs billing platform",
        "Designed and implemented staging environments and error handling procedures for legacy data extraction",
        "Developed Informatica flows to integrate multiple systems using PowerCentre 9.5.1 HF 2",
        "Created data masking flows to distribute data to off-shore teams without privacy risks",
        "Improved data quality and consistency across systems through comprehensive profiling and assessment",
      ]}
      technologies="Informatica PowerCenter, Data profiling and quality assessment tools, Data masking and privacy protection solutions, Amdocs Billing and Customer Care (BCC) platform, Net-cracker OSS platform, Staging environment design and management tools"
      results="The successful migration of customer data from legacy systems to the Amdocs billing platform streamlined Optus's billing operations by consolidating multiple legacy systems. This transformation improved data quality and consistency across systems, enhanced data security through proper masking and privacy controls, and provided a more integrated view of customer information."
      ctaTitle="Want to Discuss This Further?"
      ctaDescription="Happy to walk through the 10-million-subscriber migration, data masking approach, and Informatica architecture used in Project Spring."
    />
  );
}
