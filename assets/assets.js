import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import snowflake_logo from './snowflake-logo.png';
import matillion_logo from './matillion-logo.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    git,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    snowflake_logo,
    matillion_logo
};

export const workData = [
    {
        title: 'Camden Council',
        description: 'Head of Information & BI Services',
        bgImage: '/work-1.png',
        link: '/work/local-government-camden-council'
    },
    {
        title: 'Event Hospitality & Entertainment (ASX: EVT)',
        description: 'Head of Data Platforms & Engineering',
        bgImage: '/work-1.png',
        link: '/work/event-hospitality-entertainment'
    },
    {
        title: 'Woolworths Group (ASX: WOW)',
        description: 'Data Lead (Consultant)',
        bgImage: '/work-2.png',
        link: '/work/woolworths-group'
    },
    {
        title: 'Optus Pty Ltd (Singtel Group)',
        description: 'Solution Designer',
        bgImage: '/work-3.png',
        link: '/work/optus-pty-ltd'
    },
    {
        title: 'Fidelity International (FIL)',
        description: 'Data Warehouse Analyst',
        bgImage: '/work-4.png',
        link: '/work/fidelity-international'
    },
    {
        title: 'Amdocs Limited (NASDAQ: DOX)',
        description: 'Senior Subject Matter Expert',
        bgImage: '/work-4.png',
        link: '/work/amdocs-limited'
    },
];

export const serviceData = [
    { 
      icon: assets.mobile_icon, 
      title: 'Data Strategy & Roadmap Development', 
      description: 'Crafting a clear data strategy aligned with your business goals. We\'ll help you define your data vision, identify key data assets, and create a roadmap for data-driven success', 
      link: '/services/data-strategy',
      bgImage: '/images/DataStrategy.jpg'
    },
    { 
      icon: assets.mobile_icon, 
      title: 'Data Governance & Compliance', 
      description: 'Establishing robust data governance frameworks and ensuring compliance with relevant regulations (e.g., GDPR, CCPA). We help you manage data quality, security, and ethical use', 
      link: '/services/data-governance',
      bgImage: '/images/Governance.jpg'
    },
    { 
      icon: assets.web_icon, 
      title: 'Advanced Analytics & Insights', 
      description: 'Leveraging advanced analytics and machine learning to uncover hidden patterns and generate actionable insights from your data. We help you make smarter decisions and predict future trends', 
      link: '/services/advanced-analytics',
      bgImage: '/images/Advanced Analytics.png'
    },
    { 
      icon: assets.ui_icon, 
      title: 'Data Platform, Security & Infrastructure Modernization', 
      description: 'Designing and implementing modern data platforms (cloud, on-prem, or hybrid) that are scalable, reliable, and cost-effective. We help you migrate from legacy systems and embrace new technologies', 
      link: '/services/data-platform',
      bgImage: '/images/AI-ML.jpg'
    },
    { 
      icon: assets.graphics_icon, 
      title: 'Business Intelligence & Reporting', 
      description: 'Developing interactive dashboards and reports that provide a clear view of your business performance. We empower your teams with self-service analytics capabilities', 
      link: '/services/business-intelligence',
      bgImage: '/images/data-literacy.jpg'
    },
    { 
      icon: assets.graphics_icon, 
      title: 'Data-Driven Product Development', 
      description: 'Incorporating data analytics into your product development lifecycle to create innovative, customer-centric products and services', 
      link: '/services/data-driven-product-dev',
      bgImage: '/images/data-driven-product.webp'
    },
    { 
      icon: assets.graphics_icon, 
      title: 'AI & Machine Learning Solutions', 
      description: 'Building and deploying custom AI and machine learning models to solve complex business problems, from predictive maintenance to personalized customer experiences', 
      link: '/services/ai-ml-solutions',
      bgImage: '/images/AI-ML.jpg'
    },
    { 
      icon: assets.graphics_icon, 
      title: 'Data Literacy & Upskilling Programs', 
      description: 'Empowering your workforce with the data literacy and skills needed to thrive in a data-driven world. We offer tailored training programs and workshops', 
      link: '/services/data-literacy',
      bgImage: '/images/data-literacy.jpg'
    },
];

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Tools & Platforms', description: 'Azure, AWS, Databricks, Snowflake, Informatica, Tableau, PowerBI, Matillion, & more' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education & Certis', description: 'B.Tech in Computer Science; Certifications in AWS, Togaf, Azure, CDMP' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Programs', description: 'Led and delivered programs of significant capital' },
];

export const BlogsList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, name: 'All'},
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, name: 'Enterprise Data Strategy & Architecture' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, name: 'Business Intelligence & Analytics' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, name: 'Data Warehouse & Lakehouse' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, name: 'Data Engineering & Integration' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, name: 'Information Governance' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, name: 'Data Security' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, name: 'AI & Machine Learning Solutions' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, name: 'Data Analytics' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, name: 'Data Architecture' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, name: 'Data Literacy & Upskilling Programs' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, name: 'Data Related Frameworks' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, name: 'Data Strategy' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, name: 'Policies, Procedures, Guidelines' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, name: 'Cyber Security' },
];

export const toolsData = [
  { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', url: 'https://www.python.org/' },
  { name: 'SQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png', url: 'https://www.mysql.com/' },
  { name: 'Tableau', logo: 'https://www.tableau.com/sites/default/files/pages/tableaulogo_highres.png', url: 'https://www.tableau.com/' },
  { name: 'Power BI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', url: 'https://powerbi.microsoft.com/' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', url: 'https://aws.amazon.com/' },
  { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg', url: 'https://azure.microsoft.com/' },
  { name: 'Git', logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', url: 'https://git-scm.com/' },
  { name: 'Snowflake', logo: assets.snowflake_logo, url: 'https://www.snowflake.com/' },
  { name: 'Databricks', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png', url: 'https://databricks.com/' },
  { name: 'Matillion', logo: assets.matillion_logo, url: 'https://www.matillion.com/' }
];
