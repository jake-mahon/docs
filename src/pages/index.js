import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import CommunityHighlights from '@site/src/components/CommunityHighlights';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>Netwrix Product Documentation</h1>
        <p className={styles.heroSubtitle}>
          Read more about the security solutions from Netwrix. Comprehensive guides, product
          knowledge, and references for all Netwrix products.
        </p>
        <div className={styles.buttons}>
          <a className="button button--secondary button--lg" href="#products">
            Browse the docs
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Documentation for Netwrix security products"
    >
      <HomepageHeader />
      <main>
        <CommunityHighlights />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
