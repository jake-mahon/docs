import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { ReactTyped } from 'react-typed';
import { useState } from 'react';

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
 * Product categories with version support
 */
const ProductCategories = [
  {
    title: 'Identity Management',
    description: 'Comprehensive identity and user management solutions',
    icon: '👤',
    products: [
      {
        name: 'Identity Manager',
        description: 'User provisioning and management',
        link: '/docs/identitymanager/6.2',
        versions: [
          { version: '6.2', link: '/docs/identitymanager/6.2', isLatest: true },
          { version: '6.1', link: '/docs/identitymanager/6.1', isLatest: false },
          { version: 'SaaS', link: '/docs/identitymanager/saas', isLatest: false },
        ],
      },
      {
        name: 'Directory Manager',
        description: 'Active Directory group management',
        link: '/docs/directorymanager/11.1',
        versions: [
          { version: '11.1', link: '/docs/directorymanager/11.1', isLatest: true },
          { version: '11.0', link: '/docs/directorymanager/11.0', isLatest: false },
        ],
      },
      {
        name: 'Platform Governance for NetSuite',
        description: 'NetSuite governance and compliance',
        link: '/docs/platgovnetsuite',
      },
      {
        name: 'Platform Governance for Salesforce',
        description: 'Salesforce governance and compliance',
        link: '/docs/platgovsalesforce',
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
        link: '/docs/privilegesecure/4.2',
        versions: [
          { version: '4.2', link: '/docs/privilegesecure/4.2', isLatest: true },
          { version: '4.1', link: '/docs/privilegesecure/4.1', isLatest: false },
        ],
      },
      {
        name: 'Endpoint Privilege Manager',
        description: 'Endpoint privilege management',
        link: '/',
      },
      {
        name: 'Password Secure',
        description: 'Secure password management',
        link: '/docs/passwordsecure/9.2',
        versions: [
          { version: '9.2', link: '/docs/passwordsecure/9.2', isLatest: true },
          { version: '9.1', link: '/docs/passwordsecure/9.1', isLatest: false },
        ],
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
        link: '/docs/auditor/10.7',
        versions: [
          { version: '10.7', link: '/docs/auditor/10.7', isLatest: true },
          { version: '10.6', link: '/docs/auditor/10.6', isLatest: false },
        ],
      },
      {
        name: 'Directory Manager',
        description: 'Active Directory group management',
        link: '/docs/directorymanager/11.1',
        versions: [
          { version: '11.1', link: '/docs/directorymanager/11.1', isLatest: true },
          { version: '11.0', link: '/docs/directorymanager/11.0', isLatest: false },
        ],
      },
      {
        name: 'Password Policy Enforcer',
        description: 'Enforce strong password policies',
        link: '/docs/passwordpolicyenforcer/11.0',
        versions: [
          { version: '11.0', link: '/docs/passwordpolicyenforcer/11.0', isLatest: true },
          { version: '10.2', link: '/docs/passwordpolicyenforcer/10.2', isLatest: false },
        ],
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
        link: '/docs/endpointprotector/5.9.4.2',
        versions: [
          { version: '5.9.4.2', link: '/docs/endpointprotector/5.9.4.2', isLatest: true },
          { version: '5.9.4', link: '/docs/endpointprotector/5.9.4', isLatest: false },
        ],
      },
      {
        name: 'Endpoint Policy Manager',
        description: 'Group Policy management and enforcement',
        link: '/docs/endpointpolicymanager',
      },
      {
        name: 'Change Tracker',
        description: 'Real-time change monitoring and alerts',
        link: '/docs/changetracker/8.1',
        versions: [
          { version: '8.1', link: '/docs/changetracker/8.1', isLatest: true },
          { version: '8.0', link: '/docs/changetracker/8.0', isLatest: false },
        ],
      },
    ],
  },
  {
    title: 'Data Security Posture Management (DSPM)',
    description: "Protect and classify your organization's sensitive data",
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
        link: '/docs/auditor/10.7',
        versions: [
          { version: '10.7', link: '/docs/auditor/10.7', isLatest: true },
          { version: '10.6', link: '/docs/auditor/10.6', isLatest: false },
        ],
      },
      {
        name: 'Access Analyzer',
        description: 'Analyze and audit file system permissions',
        link: '/docs/accessanalyzer/12.0',
        versions: [
          { version: '12.0', link: '/docs/accessanalyzer/12.0', isLatest: true },
          { version: '11.6', link: '/docs/accessanalyzer/11.6', isLatest: false },
        ],
      },
      {
        name: 'Data Classification',
        description: 'Classify and protect sensitive data',
        link: '/docs/dataclassification/5.7',
        versions: [
          { version: '5.7', link: '/docs/dataclassification/5.7', isLatest: true },
          { version: '5.6.2', link: '/docs/dataclassification/5.6.2', isLatest: false },
        ],
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
        link: '/docs/accessanalyzer/12.0',
        versions: [
          { version: '12.0', link: '/docs/accessanalyzer/12.0', isLatest: true },
          { version: '11.6', link: '/docs/accessanalyzer/11.6', isLatest: false },
        ],
      },
      {
        name: 'Threat Manager',
        description: 'Advanced threat detection and response',
        link: '/docs/threatmanager/3.0',
        versions: [{ version: '3.0', link: '/docs/threatmanager/3.0', isLatest: true }],
      },
      {
        name: 'Threat Prevention',
        description: 'Proactive threat prevention',
        link: '/docs/threatprevention/7.5',
        versions: [
          { version: '7.5', link: '/docs/threatprevention/7.5', isLatest: true },
          { version: '7.4', link: '/docs/threatprevention/7.4', isLatest: false },
        ],
      },
      {
        name: 'Recovery for Active Directory',
        description: 'Active Directory backup and recovery',
        link: '/docs/recoveryforactivedirectory/2.6',
        versions: [
          { version: '2.6', link: '/docs/recoveryforactivedirectory/2.6', isLatest: true },
        ],
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
        link: '/docs/accessinformationcenter/12.0',
        versions: [
          { version: '12.0', link: '/docs/accessinformationcenter/12.0', isLatest: true },
          { version: '11.6', link: '/docs/accessinformationcenter/11.6', isLatest: false },
        ],
      },
      {
        name: 'Activity Monitor',
        description: 'Track user activities across IT infrastructure',
        link: '/docs/activitymonitor/8.0',
        versions: [
          { version: '8.0', link: '/docs/activitymonitor/8.0', isLatest: true },
          { version: '7.1', link: '/docs/activitymonitor/7.1', isLatest: false },
        ],
      },
      {
        name: 'Password Reset',
        description: 'Self-service password reset solution',
        link: '/docs/passwordreset/3.3',
        versions: [
          { version: '3.3', link: '/docs/passwordreset/3.3', isLatest: true },
          { version: '3.23', link: '/docs/passwordreset/3.23', isLatest: false },
        ],
      },
      {
        name: 'Platform Governance for NetSuite Flashlight',
        description: 'Lightweight NetSuite documentation and analysis',
        link: '/docs/platgovnetsuiteflashlight',
      },
      {
        name: 'Platform Governance for Salesforce Flashlight',
        description: 'Lightweight Salesforce documentation and analysis',
        link: '/docs/platgovsalesforceflashlight',
      },
    ],
  },
];

/**
 * Product Card with Rectangular Version Badges
 */
function ProductCard({ product }) {
  const [showVersions, setShowVersions] = useState(false);
  const hasVersions = product.versions && product.versions.length > 0;

  if (!hasVersions) {
    return (
      <Link to={product.link} className={styles.productCard}>
        <h4 className={styles.productName}>{product.name}</h4>
        <p className={styles.productDescription}>{product.description}</p>
        <span className={styles.learnMore}>Learn more →</span>
      </Link>
    );
  }

  return (
    <div className={`${styles.productCard} ${styles.versionedCard}`}>
      {/* Version badges in top-right corner */}
      <div className={styles.versionBadgesContainer}>
        {product.versions.map((version, idx) => (
          <Link
            key={idx}
            to={version.link}
            className={`${styles.versionBadge} ${version.isLatest ? styles.latestBadge : ''}`}
          >
            v{version.version}
          </Link>
        ))}
      </div>

      <h4 className={styles.productName}>{product.name}</h4>
      <p className={styles.productDescription}>{product.description}</p>
      <Link to={product.link} className={styles.learnMore}>
        Learn more →
      </Link>
    </div>
  );
}

/**
 * Renders a single product category with its products
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
          <ProductCard key={idx} product={product} />
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
            Explore our comprehensive security products with individual version tags for easy
            access.
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
