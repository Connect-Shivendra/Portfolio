import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../../utils/animations'; // Adjusted path

const AiMlSolutionsPage = () => {
  const serviceTitle = "AI & Machine Learning Solutions";

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
        <motion.header className="mb-12 text-center" variants={fadeIn}>
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">{serviceTitle}: Transform Your Business with Intelligent Automation</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            In an era of unprecedented data growth, Artificial Intelligence (AI) and Machine Learning (ML) offer transformative potential for businesses. Our AI & ML Solutions are designed to help you harness this power, turning complex data into actionable insights, automating processes, and creating innovative products and services.
          </p>
        </motion.header>

        <motion.section className="mb-12" variants={slideUp}>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Our Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            We offer end-to-end AI and ML services, from strategy and development to deployment and management. Our key areas of expertise include:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 leading-relaxed space-y-3 pl-4">
            {[{
              title: "Custom AI/ML Model Development:",
              text: "We design and build bespoke AI/ML models tailored to your specific business needs and data. Whether it's predictive maintenance, fraud detection, natural language processing, or computer vision, we create solutions that deliver measurable results."
            }, {
              title: "Machine Learning Operations (MLOps):",
              text: "We help you implement robust MLOps practices to streamline the deployment, monitoring, and management of your machine learning models. This ensures your models remain accurate, reliable, and scalable over time."
            }, {
              title: "Data Annotation and Preparation:",
              text: "High-quality data is the foundation of any successful AI/ML initiative. We provide data annotation and preparation services to ensure your data is clean, labeled, and ready for model training."
            }, {
              title: "AI-Powered Automation:",
              text: "We identify opportunities to automate manual processes using AI and ML, freeing up your team to focus on strategic initiatives. This can range from customer service chatbots to automated quality control in manufacturing."
            }, {
              title: "Generative AI Solutions:",
              text: "Explore the possibilities of generative AI with our expertise in building and fine-tuning large language models (LLMs) and diffusion models. We can help you create applications for content generation, code development, and creative design."
            }].map((item, index) => (
              <motion.li key={index} variants={fadeIn}>
                <strong>{item.title}</strong> {item.text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section className="mb-12" variants={slideUp}>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Our Approach</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            We believe in a collaborative and iterative approach to AI and ML development. We work closely with your team to understand your business challenges, identify potential use cases, and develop solutions that deliver tangible value. Our process typically involves:
          </p>
          <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 leading-relaxed space-y-3 pl-4">
            {[{
              text: "Discovery and Use Case Definition: We start by understanding your business objectives and identifying areas where AI/ML can make a significant impact."
            }, {
              text: "Data Collection and Preparation: We assist in gathering, cleaning, and preparing your data for model training."
            }, {
              text: "Model Development and Training: Our data scientists and ML engineers develop and train custom models using the latest techniques and frameworks."
            }, {
              text: "Evaluation and Validation: We rigorously test and validate the models to ensure accuracy, fairness, and robustness."
            }, {
              text: "Deployment and Integration: We help you deploy the models into your existing systems and workflows."
            }, {
              text: "Monitoring and Optimization: We provide ongoing support to monitor model performance and make necessary adjustments to ensure continued effectiveness."
            }].map((item, index) => (
              <motion.li key={index} variants={fadeIn}>
                {item.text}
              </motion.li>
            ))}
          </ol>
        </motion.section>

        <motion.section className="mb-12" variants={slideUp}>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 leading-relaxed space-y-3 pl-4">
            {[{
              text: "Deep Technical Expertise: Our team comprises experienced data scientists, machine learning engineers, and AI specialists with a proven track record of delivering successful AI/ML solutions."
            }, {
              text: "Focus on Business Value: We prioritize projects that deliver measurable business outcomes, such as increased efficiency, reduced costs, improved customer satisfaction, and new revenue streams."
            }, {
              text: "Ethical and Responsible AI: We are committed to developing and deploying AI solutions that are fair, transparent, and accountable."
            }].map((item, index) => (
              <motion.li key={index} variants={fadeIn}>
                {item.text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section className="text-center py-8 bg-gray-100 dark:bg-gray-700 rounded-lg" variants={fadeIn}>
          <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Ready to Unlock the Power of AI & ML?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
            Contact us today to learn more about how we can help you innovate and grow your business with our AI and Machine Learning solutions.
          </p>
          <motion.button 
            className="bg-[var(--accent-color)] text-[var(--background)] font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:brightness-95 dark:hover:brightness-110"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your AI/ML Project
          </motion.button>
        </motion.section>
      </motion.div>
      <Footer />
    </>
  );
};

export default AiMlSolutionsPage;

