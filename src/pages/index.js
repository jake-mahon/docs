import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.heroTitle}>Documentation that Empowers Security</h1>
        <p className={styles.heroSubtitle}>
          Everything you need to configure, manage, and maximize your Netwrix security products
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/1Secure">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/1Secure">
            Browse Products
          </Link>
        </div>
      </div>
    </header>
  );
}

const ProductList = [
  {
    title: '1Secure',
    description: 'Comprehensive security platform that integrates all Netwrix solutions.',
    link: '/1Secure',
    icon: '🔒',
  },
  {
    title: 'Access Analyzer',
    description: 'Identify and reduce risks around sensitive data.',
    link: '#',
    icon: '🔍',
  },
  {
    title: 'Activity Monitor',
    description: 'Track user behavior and detect suspicious activities in real-time.',
    link: '#',
    icon: '⚡',
  },
  {
    title: 'Auditor',
    description: 'Identify IT risks, detect suspicious activity, and investigate security incidents.',
    link: '#',
    icon: '📊',
  },
];

function ProductCard({title, description, link, icon}) {
  return (
    <div className={clsx('col col--3', styles.productCard)}>
      <Link to={link} className={styles.productLink}>
        <div className={styles.productIcon}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className={styles.learnMore}>Learn More →</span>
      </Link>
    </div>
  );
}

const FeatureList = [
  {
    title: 'Powerful Search',
    icon: '🔍',
    description: 'Find exactly what you need with our lightning-fast search capabilities',
  },
  {
    title: 'Quick Implementation',
    icon: '⚡',
    description: 'Step-by-step guides to get you up and running in no time',
  },
  {
    title: 'Data Protection Focus',
    icon: '📊',
    description: 'Learn how to secure your most critical assets with our products',
  },
  {
    title: 'Identity Security',
    icon: '🔐',
    description: 'Comprehensive identity protection documentation and best practices',
  },
  {
    title: 'Security Intelligence',
    icon: '🛡️',
    description: 'Stay ahead of threats with our deep expertise in security documentation',
  },
  {
    title: 'Integration Guides',
    icon: '🔄',
    description: 'Seamlessly connect with other security tools in your ecosystem',
  },
];

function FeatureCard({title, icon, description}) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className={styles.featureContent}>
        <div className={styles.featureIcon}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

const Testimonials = [
  {
    quote: "The documentation made deploying Netwrix across our enterprise so much easier than expected. Everything was clear and actionable.",
    author: "CISO, Fortune 500 Financial Company",
  },
  {
    quote: "I was able to set up threat detection in under an hour thanks to these excellent docs. The screenshots and examples are incredibly helpful.",
    author: "Security Architect, Healthcare Provider",
  },
  {
    quote: "As someone new to Netwrix, the documentation guided me step by step. Now I'm considered the Netwrix expert at my company!",
    author: "IT Security Manager, Educational Institution",
  },
];

function TestimonialCard({quote, author}) {
  return (
    <div className={clsx('col col--4', styles.testimonialCard)}>
      <div className={styles.testimonialContent}>
        <p className={styles.quote}>"{quote}"</p>
        <p className={styles.author}>— {author}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation"
      description="Documentation for Netwrix security products">
      <HomepageHeader />
      
      <main>
        {/* Popular Products Section */}
        <section className={styles.products}>
          <div className="container">
            <div className="text--center">
              <h2 className={styles.sectionTitle}>Popular Products</h2>
              <p className={styles.sectionSubtitle}>
                Explore our most widely used security solutions
              </p>
            </div>
            <div className="row margin-top--lg">
              {ProductList.map((props, idx) => (
                <ProductCard key={idx} {...props} />
              ))}
            </div>
            <div className="text--center margin-top--lg">
              <Link className="button button--outline button--primary" to="/1Secure">
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className="container">
            <div className="text--center">
              <h2 className={styles.sectionTitle}>Why Our Documentation Rocks</h2>
              <p className={styles.sectionSubtitle}>
                We've built our docs with the same care and attention that goes into our products
              </p>
            </div>
            <div className="row margin-top--lg">
              {FeatureList.map((props, idx) => (
                <FeatureCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className="container">
            <div className="text--center">
              <h2 className={styles.sectionTitle}>What Security Pros Say</h2>
            </div>
            <div className="row margin-top--lg">
              {Testimonials.map((props, idx) => (
                <TestimonialCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.stats}>
          <div className="container">
            <div className="row">
              <div className="col col--4 text--center">
                <h2 className={styles.statNumber}>13,000+</h2>
                <p className={styles.statLabel}>Organizations Protected</p>
              </div>
              <div className="col col--4 text--center">
                <h2 className={styles.statNumber}>24/7</h2>
                <p className={styles.statLabel}>Documentation Support</p>
              </div>
              <div className="col col--4 text--center">
                <h2 className={styles.statNumber}>100+</h2>
                <p className={styles.statLabel}>Product Guides</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className="container text--center">
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaSubtitle}>
              Our documentation will help you maximize the power of your security solutions
            </p>
            <Link
              className="button button--primary button--lg margin-top--lg"
              to="/1Secure">
              Get Started Now
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
} 