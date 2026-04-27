"use client";
import Timeline from '@/app/components/Timeline';
import WorkPageLayout from '@/app/components/WorkPageLayout';
import { woolworthsEvents } from '@/app/utils/timelineData';

export default function WoolworthsGroupPage() {
  return (
    <WorkPageLayout
      title="Woolworths Group (ASX: WOW)"
      role="Data Team Lead · WooliesX Everyday Rewards"
      companyImage="/Woolworths.jpg"
      timeline={<Timeline events={woolworthsEvents} />}
      overview={[
        "As Data Team Lead (Contract) on the WooliesX Everyday Rewards team, I led architectural and technical development of big data solutions — coaching the team and collaborating with cross-functional partners across Woolworths retail, BWS, Dan Murphy, and Big-W. On the technical side I designed and developed data solutions on AWS, processing billions of transactions from online and brick-and-mortar stores to enable sophisticated customer segmentation and targeted marketing.",
        "My primary project, Tequila (Decision Engine Phase 1), used Salesforce Marketing Cloud and behavioural personalisation algorithms to transform WooliesX from campaign-focused to customer-focused targeted marketing. I also led security remediation following a KPMG audit, significantly reduced AWS infrastructure costs, and delivered location intelligence and digital wallet capabilities that extended the Everyday Rewards programme.",
      ]}
      achievements={[
        "Led Tequila Decision Engine — PySpark customer segmentation on EMR processing billions of transactions; achieved 18% higher email click-through and 3% higher conversion, shifting WooliesX to customer-focused targeted marketing",
        "Reduced AWS Redshift cluster cost from $200k/month to $80k/month through data pipeline redesign, Informatica IICS optimisation, sort/distribution key tuning, and Parquet conversion to S3",
        "Led security remediation following KPMG audit: refactored 6% of code across GitHub repos, replaced exposed credentials and unsecured GPG keys with IAM roles and Credstash — received green light from auditors",
        "Delivered Proximity — location intelligence system providing competitive advantage through better, location-aware customer offers",
        "Delivered Everyday Rewards Apple Wallet integration, improving digital convenience and engagement for millions of Rewards members",
      ]}
      technologies="Apache Spark / PySpark on EMR, Informatica IICS, AWS (Kinesis, S3, Lambda, Aurora, DynamoDB, Redshift, ECS), Python, Jenkins, Salesforce Marketing Cloud, PostgreSQL, MySQL, Hive, Credstash, IAM, GitHub, CI/CD pipelines"
      results="The Tequila Decision Engine transformed WooliesX's marketing from broadcast campaigns to precision customer targeting — delivering measurably higher engagement and conversion. Redshift cost optimisation saved $120k per month in AWS infrastructure spend. The KPMG remediation secured the Rewards platform from known vulnerabilities and passed audit. Proximity and Apple Wallet extended the programme's digital reach and competitive positioning."
      ctaTitle="Interested in Similar Solutions?"
      ctaDescription="Looking to enhance customer targeting and marketing effectiveness through big data? I can help implement cloud-native decision engines that drive personalisation, cut infrastructure costs, and improve conversion across your digital channels."
    />
  );
}
