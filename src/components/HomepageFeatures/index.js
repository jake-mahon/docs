import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { ReactTyped } from 'react-typed';

/**
 * Rotating section titles with typewriter effect
 *
 * To customize the titles:
 * 1. Add/remove/edit titles in this array
 * 2. Mix professional and fun IT/gamer terminology as desired
 * 3. Animation settings: 60ms type speed, 30ms backspace, 2s pause
 */
const SECTION_TITLES = [
  'Explore Security Solutions',
  'Your Security Adventure Starts Here',
  'Initialize Your Security Journey',
  'Level Up Your Security Game',
  'Spawn the Perfect Security Setup',
  'Craft Your Security Loadout',
  'Queue Up Better Security',
  'Respawn with Stronger Defenses',
];

/**
 * Product categories and their associated products for the homepage
 *
 * To add a new product:
 * 1. Find the appropriate category or create a new one
 * 2. Add the product object with: name, description, link
 * 3. Link should match the docs URL structure: '/docs/productname'
 *
 * To add a new category:
 * 1. Add a new object with: title, description, icon, products[]
 * 2. Choose an appropriate emoji icon
 * 3. Add products following the same structure
 */
const ProductCategories = [
  {
    title: 'Identity Management',
    description: 'Comprehensive identity and user management solutions',
    icon: '👤',
    products: [
      {
        name: 'Identity Manager 6.1',
        description: 'User provisioning and management',
        link: '/docs/identitymanager/6.1',
      },
      {
        name: 'Identity Manager 6.2',
        description: 'User provisioning and management',
        link: '/docs/identitymanager/6.2',
      },
      {
        name: 'Identity Manager SaaS',
        description: 'Cloud-based user management',
        link: '/docs/identitymanager/saas',
      },
      {
        name: 'GroupID',
        description: 'Active Directory group management',
        link: '/docs/groupid',
      },
      {
        name: 'StrongPoint',
        description: 'Platform governance and compliance',
        link: '/docs/strongpointfornetsuite',
      },
    ],
  },
  {
    title: 'Privileged Access Management (PAM)',
    description: 'Control and monitor privileged access to critical systems',
    icon: '🔐',
    products: [
      {
        name: 'Privilege Secure',
        description: 'Privileged access management',
        link: '/docs/privilegesecure',
      },
      {
        name: 'Endpoint Privilege Manager',
        description: 'Endpoint privilege management',
        link: '/docs/policypak',
      },
      {
        name: 'Password Secure',
        description: 'Secure password management',
        link: '/docs/passwordsecure',
      },
    ],
  },
  {
    title: 'Directory Management',
    description: 'Active Directory management and password policy enforcement',
    icon: '📁',
    products: [
      {
        name: 'Auditor',
        description: 'Comprehensive IT infrastructure auditing',
        link: '/docs/auditor',
      },
      {
        name: 'GroupID',
        description: 'Active Directory group management',
        link: '/docs/groupid',
      },
      {
        name: 'Password Policy Enforcer',
        description: 'Enforce strong password policies',
        link: '/docs/passwordpolicyenforcer',
      },
    ],
  },
  {
    title: 'Endpoint Management',
    description: 'Comprehensive endpoint protection and policy management',
    icon: '💻',
    products: [
      {
        name: 'Endpoint Protector',
        description: 'Comprehensive endpoint security',
        link: '/docs/endpointprotector',
      },
      {
        name: 'PolicyPak',
        description: 'Group Policy management and enforcement',
        link: '/docs/policypak',
      },
      {
        name: 'Change Tracker',
        description: 'Real-time change monitoring and alerts',
        link: '/docs/changetracker',
      },
    ],
  },
  {
    title: 'Data Security Posture Management (DSPM)',
    description: 'Protect and classify your organization\'s sensitive data',
    icon: '🛡️',
    products: [
      {
        name: '1Secure',
        description: 'Cloud-based security monitoring and compliance',
        link: '/docs/1secure',
      },
      {
        name: 'Auditor',
        description: 'Comprehensive IT infrastructure auditing',
        link: '/docs/auditor',
      },
      {
        name: 'Access Analyzer',
        description: 'Analyze and audit file system permissions',
        link: '/docs/accessanalyzer',
      },
      {
        name: 'Data Classification',
        description: 'Classify and protect sensitive data',
        link: '/docs/dataclassification',
      },
    ],
  },
  {
    title: 'Identity Threat Detection & Response (ITDR)',
    description: 'Advanced threat detection and incident response capabilities',
    icon: '🚨',
    products: [
      {
        name: 'PingCastle',
        description: 'Active Directory security assessment',
        link: '/docs/pingcastle',
      },
      {
        name: 'Access Analyzer',
        description: 'Analyze and audit file system permissions',
        link: '/docs/accessanalyzer',
      },
      {
        name: 'Threat Manager',
        description: 'Advanced threat detection and response',
        link: '/docs/threatmanager',
      },
      {
        name: 'Threat Prevention',
        description: 'Proactive threat prevention',
        link: '/docs/threatprevention',
      },
      {
        name: 'Recovery for Active Directory',
        description: 'Active Directory backup and recovery',
        link: '/docs/recoveryforactivedirectory',
      },
    ],
  },
  {
    title: 'Other',
    description: 'Additional security and management tools',
    icon: '🔧',
    products: [
      {
        name: 'Access Information Center',
        description: 'Centralized access information management',
        link: '/docs/accessinformationcenter',
      },
      {
        name: 'Activity Monitor',
        description: 'Track user activities across IT infrastructure',
        link: '/docs/activitymonitor',
      },
      {
        name: 'Password Reset',
        description: 'Self-service password reset solution',
        link: '/docs/passwordreset',
      },
      {
        name: 'StrongPoint for NetSuite',
        description: 'NetSuite change management and compliance',
        link: '/docs/strongpointfornetsuite',
      },
      {
        name: 'StrongPoint for Salesforce',
        description: 'Salesforce change management platform',
        link: '/docs/strongpointforsalesforce',
      },
      {
        name: 'StrongPoint NetSuite Flashlight',
        description: 'Lightweight NetSuite documentation and analysis',
        link: '/docs/strongpointnetsuiteflashlight',
      },
      {
        name: 'StrongPoint Salesforce Flashlight',
        description: 'Lightweight Salesforce documentation and analysis',
        link: '/docs/strongpointsalesforceflashlight',
      },
    ],
  },
];

/**
 * Renders a single product category with its products
 * Displays category info and a grid of product cards
 */
function ProductCategory({ title, description, icon, products }) {
  return (
    <div className={styles.categorySection}>
      <div className={styles.categoryHeader}>
        <span className={styles.categoryIcon}>{icon}</span>
        <div>
          <Heading as="h3" className={styles.categoryTitle}>
            {title}
          </Heading>
          <p className={styles.categoryDescription}>{description}</p>
        </div>
      </div>
      <div className={styles.productsGrid}>
        {products.map((product, idx) => (
          <Link key={idx} to={product.link} className={styles.productCard}>
            <h4 className={styles.productName}>{product.name}</h4>
            <p className={styles.productDescription}>{product.description}</p>
            <span className={styles.learnMore}>Learn more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * Main homepage features section
 * Displays animated title and all product categories
 */
export default function HomepageFeatures() {
  return (
    <section id="products" className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            <ReactTyped
              strings={SECTION_TITLES}
              typeSpeed={60}
              backSpeed={30}
              backDelay={2000}
              loop
              showCursor={true}
              cursorChar="|"
            />
          </Heading>
          <p className={styles.sectionSubtitle}>
            Explore our comprehensive security products organized by your specific needs and use
            cases.
          </p>
        </div>
        <div className={styles.categoriesContainer}>
          {ProductCategories.map((category, idx) => (
            <ProductCategory key={idx} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
