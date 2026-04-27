"use client";
import Timeline from '@/app/components/Timeline';
import WorkPageLayout from '@/app/components/WorkPageLayout';
import { fidelityEvents } from '@/app/utils/timelineData';

export default function FidelityInternationalPage() {
  return (
    <WorkPageLayout
      title="Fidelity International"
      role="Data Analyst · Enterprise Data Warehouse"
      companyImage="/Fidelity.jpg"
      timeline={<Timeline events={fidelityEvents} />}
      overview={[
        "At Fidelity Investments, I served as a Data Analyst for the Enterprise Data Warehouse team, responsible for development and operations on the EDW and Financial datamart of Fidelity UK (mutual funds) and implementation of FATCA (US) compliance requirements.",
        "My primary focus was on the FIL LIFE project, a standalone module developed to cater to the auditing needs of Fidelity Insurance for UK and Ireland — generating comprehensive reports from relational databases and flat files, containing rolled-up and aggregated client assets and holdings data.",
      ]}
      achievements={[
        "Successfully designed and implemented ETL processes for the Enterprise Data Warehouse using Informatica PowerCenter",
        "Designed efficient architecture for staging environments to process transactional data from various sources",
        "Implemented the Kimball methodology for data warehouse design, optimising for financial reporting needs",
        "Completed implementation of FATCA (US) compliance requirements for the financial datamart",
        "Delivered auditing reports for Fidelity Insurance UK and Ireland with improved data aggregation capabilities",
      ]}
      technologies="Informatica PowerCenter, SQL, Kimball methodology for data warehouse design, financial data modelling tools, compliance reporting frameworks, ETL process optimisation techniques, database optimisation tools"
      results="The implementation of the FIL LIFE project significantly enhanced Fidelity Insurance's auditing capabilities for UK and Ireland operations. The improved data aggregation and reporting system provided better tracking of capital flows for compliance purposes, while the implementation of FATCA requirements ensured regulatory compliance. The optimised data warehouse design using the Kimball methodology improved query performance and reporting efficiency."
      ctaTitle="Interested in Similar Solutions?"
      ctaDescription="Need help with financial data warehousing or compliance reporting? I can design and implement solutions that ensure data accuracy, regulatory compliance, and efficient reporting for your financial operations."
    />
  );
}
