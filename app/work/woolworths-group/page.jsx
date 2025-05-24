"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Timeline from '@/app/components/Timeline';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/app/utils/animations';
import { woolworthsEvents } from '@/app/utils/timelineData';

const WoolworthsGroupPage = () => {
  const router = useRouter();
  const workTitle = "Woolworths Group (ASX: WOW)";
  const workDescription = "Data Team Lead at WooliesX Everyday Rewards, developing big data solutions on AWS cloud platform";

  useEffect(() => {
    // Handle back button press
    const handleBackButton = (e) => {
      e.preventDefault();
      router.push('/#work');
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [router]);

  return (
    <>
      <Navbar />
      <motion.div
        className="container mx-auto px-4 py-8 pt-24 lg:pt-32 bg-[var(--background)] text-[var(--foreground)]"
        variants={staggerContainer(0.1, 0.1)}
        initial="initial"
        animate="whileInView"
        viewport={{ once: false, amount: 0.1 }}
      >
        {/* Back to Work button */}
        <motion.div 
          className="mb-8"
          variants={fadeIn}
        >
          <Link href="/#work">
            <button className="flex items-center text-[var(--accent-color)] hover:underline transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Work
            </button>
          </Link>
        </motion.div>

        <motion.header
          className="mb-12 text-center"
          variants={fadeIn}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">{workTitle}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {workDescription}
          </p>
        </motion.header>

        {/* Timeline Section */}
        <Timeline events={woolworthsEvents} />

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Project Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            As Data Team Lead at WooliesX Everyday Rewards, I led architectural and technical development of big data solutions, working alongside business and marketing teams to improve customer engagement and drive data-driven decision making across multiple retail verticals including Woolworths retail, BWS, Dan Murphy, and Big-W.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            My role involved designing and implementing cloud-based data solutions on AWS, processing billions of transactions from both online and brick-and-mortar stores to enable sophisticated customer segmentation and targeted marketing initiatives.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Key Achievements</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
            <motion.li variants={fadeIn}>
              Led development of Tequila Decision Engine, transforming marketing from campaign-focused to customer-focused targeting, achieving 18% higher email clicks and 3% higher conversion
            </motion.li>
            <motion.li variants={fadeIn}>
              Implemented security remediation following KPMG audit, refactoring 6% of code across GitHub repositories to enhance data protection
            </motion.li>
            <motion.li variants={fadeIn}>
              Reduced AWS Redshift cluster cost from $200k/month to $80k/month through optimization and data pipeline redesign
            </motion.li>
            <motion.li variants={fadeIn}>
              Developed location-based intelligence system (Proximity) for competitive advantage in customer targeting
            </motion.li>
            <motion.li variants={fadeIn}>
              Enabled Apple Wallet integration for Everyday Rewards program, improving customer convenience and engagement
            </motion.li>
          </ul>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Technologies Used</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Apache Spark on EMR, Informatica Cloud, Kinesis, ICRT, Python/PySpark, Jenkins, AWS services (Aurora, Redshift, DynamoDB, S3, Lambda, ECS), PostgreSQL, MySQL, Hive, Salesforce Marketing Cloud, GitHub, CI/CD pipelines.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          variants={slideUp}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Results & Impact</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            The implementation of advanced data solutions transformed WooliesX's marketing capabilities, enabling more personalized customer engagement and driving higher conversion rates. The optimization of AWS infrastructure significantly reduced operational costs while maintaining performance. Enhanced security measures protected sensitive customer data, while the development of location-based intelligence provided a competitive edge in the retail market. These initiatives collectively supported WooliesX's journey toward becoming a more data-driven organization with improved customer targeting capabilities.
          </p>
        </motion.section>

        <motion.section
          className="text-center py-8 bg-gray-100 dark:bg-gray-700 rounded-lg"
          variants={fadeIn}
        >
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Interested in Similar Solutions?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            Looking to enhance your customer targeting and marketing effectiveness through data? I can help you implement cloud-based big data solutions that drive personalization, optimize costs, and improve conversion rates across your digital channels.
          </p>
          <motion.button
            className="bg-[var(--accent-color)] text-[var(--background)] font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:brightness-95 dark:hover:brightness-110"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me Today
          </motion.button>
        </motion.section>
      </motion.div>
      <Footer />
    </>
  );
};

export default WoolworthsGroupPage;
