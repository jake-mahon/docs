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
    title: 'Identity',
    description: 'Comprehensive identity and user management solutions',
    icon: '👤',
    products: [
      {
        name: 'Access Analyzer',
        description: 'Analyze and audit file system permissions',
        link: '/docs/accessanalyzer/12.0',
        versions: ['12.0', '11.6'],
        displayType: 'badge'
      },
      {
        name: 'Access Information Center',
        description: 'Centralized access information management',
        link: '/docs/accessinformationcenter/12.0',
        versions: ['12.0', '11.6'],
        displayType: 'badge'
      },
      {
        name: 'Group ID',
        description: 'Active Directory group management',
        link: '/docs/groupid/11.1',
        versions: ['11.1', '11.0'],
        displayType: 'badge'
      },
      {
        name: 'UserCube',
        description: 'User provisioning and management',
        link: '/docs/usercube/6.2',
        versions: ['6.2', '6.1'],
        displayType: 'badge'
      },
    ],
  },
  {
    title: 'Privilege',
    description: 'Control and monitor privileged access to critical systems',
    icon: '🔐',
    products: [
      {
        name: 'Password Policy Enforcer',
        description: 'Enforce strong password policies',
        link: '/docs/passwordpolicyenforcer/11.0',
        versions: ['11.0', '10.2'],
        displayType: 'badge'
      },
      {
        name: 'Password Reset',
        description: 'Self-service password reset solution',
        link: '/docs/passwordreset/3.3',
        versions: ['3.3', '3.23'],
        displayType: 'badge'
      },
      {
        name: 'Password Secure',
        description: 'Secure password management',
        link: '/docs/passwordsecure/9.2',
        versions: ['9.2', '9.1'],
        displayType: 'badge'
      },
      {
        name: 'Privilege Secure',
        description: 'Privileged access management',
        link: '/docs/privilegesecure/4.2',
        versions: ['4.2', '4.1'],
        displayType: 'badge'
      },
    ],
  },
  {
    title: 'Directory',
    description: 'Active Directory management and password policy enforcement',
    icon: '📁',
    products: [
      {
        name: 'Activity Monitor',
        description: 'Track user activities across IT infrastructure',
        link: '/docs/activitymonitor/8.0',
        versions: ['8.0', '7.1'],
        displayType: 'badge'
      },
      {
        name: 'Auditor',
        description: 'Comprehensive IT infrastructure auditing',
        link: '/docs/auditor/10.7',
        versions: ['10.7', '10.6'],
        displayType: 'badge'
      },
      {
        name: 'Recovery for Active Directory',
        description: 'Active Directory backup and recovery',
        link: '/docs/recoveryforactivedirectory/2.6',
      },
      {
        name: 'PolicyPak',
        description: 'Group Policy management and enforcement',
        link: '/docs/policypak',
      },
    ],
  },
  {
    title: 'Endpoint',
    description: 'Comprehensive endpoint protection and policy management',
    icon: '💻',
    products: [
      {
        name: 'Endpoint Protector',
        description: 'Comprehensive endpoint security',
        link: '/docs/endpointprotector/5.9.4.2',
        versions: ['5.9.4.2', '5.9.4'],
        displayType: 'badge'
      },
      {
        name: 'Change Tracker',
        description: 'Real-time change monitoring and alerts',
        link: '/docs/changetracker/8.1',
        versions: ['8.1', '8.0'],
        displayType: 'badge'
      },
      {
        name: 'UserCube SaaS',
        description: 'Cloud-based user management',
        link: '/docs/usercube_saas',
      },
      {
        name: 'Product Name',
        description: 'Product description placeholder',
        link: '#',
      },
    ],
  },
  {
    title: 'DSPM',
    description: 'Protect and classify your organization\'s sensitive data',
    icon: '🛡️',
    products: [
      {
        name: 'Data Classification',
        description: 'Classify and protect sensitive data',
        link: '/docs/dataclassification/5.7',
        versions: ['5.7', '5.6.2'],
        displayType: 'badge'
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
    ],
  },
  {
    title: 'ITDR',
    description: 'Advanced threat detection and incident response capabilities',
    icon: '🚨',
    products: [
      {
        name: 'Threat Prevention',
        description: 'Proactive threat prevention',
        link: '/docs/threatprevention/7.5',
        versions: ['7.5', '7.4'],
        displayType: 'badge'
      },
      {
        name: 'Threat Manager',
        description: 'Advanced threat detection and response',
        link: '/docs/threatmanager/3.0',
      },
      {
        name: '1Secure',
        description: 'Cloud-based security monitoring and compliance',
        link: '/docs/1secure',
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
 * Renders a product card with version display based on displayType
 */
function ProductCard({ product, idx }) {
  const hasVersions = product.versions && product.versions.length > 0;
  
  if (!hasVersions) {
    // Standard product card without versions
    return (
      <Link key={idx} to={product.link} className={styles.productCard}>
        <h4 className={styles.productName}>{product.name}</h4>
        <p className={styles.productDescription}>{product.description}</p>
        <span className={styles.learnMore}>Learn more →</span>
      </Link>
    );
  }

  const renderVersionDisplay = () => {
    switch (product.displayType) {
      case 'diagonal':
        return (
          <div className={styles.versionDiagonal}>
            <div className={styles.versionTop}>{product.versions[0]}</div>
            <div className={styles.versionBottom}>{product.versions[1]}</div>
          </div>
        );
      
      case 'stacked':
        return (
          <div className={styles.versionStacked}>
            {product.versions.map((version, i) => (
              <div key={i} className={styles.versionStackedItem}>v{version}</div>
            ))}
          </div>
        );
      
      case 'badge':
        return (
          <div className={styles.versionBadges}>
            {product.versions.map((version, i) => (
              <span key={i} className={styles.versionBadge}>v{version}</span>
            ))}
          </div>
        );
      
      case 'badge-classic':
        return (
          <div className={styles.versionBadgesClassic}>
            {product.versions.map((version, i) => (
              <span key={i} className={styles.versionBadgeClassic}>v{version}</span>
            ))}
          </div>
        );
      
      case 'badge-modern':
        return (
          <div className={styles.versionBadgesModern}>
            {product.versions.map((version, i) => (
              <span key={i} className={styles.versionBadgeModern}>v{version}</span>
            ))}
          </div>
        );
      
      case 'badge-minimal':
        return (
          <div className={styles.versionBadgesMinimal}>
            {product.versions.map((version, i) => (
              <span key={i} className={styles.versionBadgeMinimal}>{version}</span>
            ))}
          </div>
        );
      
      case 'badge-gradient':
        return (
          <div className={styles.versionBadgesGradient}>
            {product.versions.map((version, i) => (
              <span key={i} className={styles.versionBadgeGradient}>v{version}</span>
            ))}
          </div>
        );
      
      case 'tabs':
        return (
          <div className={styles.versionTabs}>
            {product.versions.map((version, i) => (
              <div key={i} className={styles.versionTab}>v{version}</div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Link key={idx} to={product.link} className={clsx(styles.productCard, styles[`productCard--${product.displayType}`])}>
      {renderVersionDisplay()}
      <div className={styles.productContent}>
        <h4 className={styles.productName}>{product.name}</h4>
        <p className={styles.productDescription}>{product.description}</p>
        <span className={styles.learnMore}>Learn more →</span>
      </div>
    </Link>
  );
}

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
          <ProductCard key={idx} product={product} idx={idx} />
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
