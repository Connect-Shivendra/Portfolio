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
        "As Data Team Lead at WooliesX Everyday Rewards, I led architectural and technical development of big data solutions, working alongside business and marketing teams to improve customer engagement and drive data-driven decision making across multiple retail verticals including Woolworths retail, BWS, Dan Murphy, and Big-W.",
        "My role involved designing and implementing cloud-based data solutions on AWS, processing billions of transactions from both online and brick-and-mortar stores to enable sophisticated customer segmentation and targeted marketing initiatives.",
      ]}
      achievements={[
        "Led development of Tequila Decision Engine, transforming marketing from campaign-focused to customer-focused targeting, achieving 18% higher email clicks and 3% higher conversion",
        "Implemented security remediation following KPMG audit, refactoring 6% of code across GitHub repositories to enhance data protection",
        "Reduced AWS Redshift cluster cost from $200k/month to $80k/month through optimization and data pipeline redesign",
        "Developed location-based intelligence system (Proximity) for competitive advantage in customer targeting",
        "Enabled Apple Wallet integration for Everyday Rewards program, improving customer convenience and engagement",
      ]}
      technologies="Apache Spark on EMR, Informatica Cloud, Kinesis, ICRT, Python/PySpark, Jenkins, AWS services (Aurora, Redshift, DynamoDB, S3, Lambda, ECS), PostgreSQL, MySQL, Hive, Salesforce Marketing Cloud, GitHub, CI/CD pipelines"
      results="The implementation of advanced data solutions transformed WooliesX's marketing capabilities, enabling more personalized customer engagement and driving higher conversion rates. The optimization of AWS infrastructure significantly reduced operational costs while maintaining performance. Enhanced security measures protected sensitive customer data, while the development of location-based intelligence provided a competitive edge in the retail market."
      ctaTitle="Interested in Similar Solutions?"
      ctaDescription="Looking to enhance your customer targeting and marketing effectiveness through data? I can help you implement cloud-based big data solutions that drive personalization, optimize costs, and improve conversion rates across your digital channels."
    />
  );
}
