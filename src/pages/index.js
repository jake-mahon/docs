import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  // Netwrix product logo URLs
  const productLogos = {
    secure: 'https://helpcenter.netwrix.com/bundle/Products-NS/media/icons_001.png',
    accessAnalyzer: 'https://helpcenter.netwrix.com/bundle/Products-NAA/media/icons_002.png',
    activityMonitor: 'https://helpcenter.netwrix.com/bundle/Products-NAM/media/icons_007.png',
    auditor: 'https://helpcenter.netwrix.com/bundle/Products-NA/media/icons_006.png'
  };

  // Feature icons (using emoji as a simple alternative)
  const featureIcons = {
    search: '🔍',
    speed: '⚡',
    data: '📊',
    identity: '🔐',
    shield: '🛡️',
    integration: '🔄'
  };
  
  return (
    <Layout
      title={siteConfig.title}
      description="Comprehensive documentation for Netwrix security products">
      
      {/* Hero Section */}
      <header className="homepage-header">
        <div className="container">
          <h1>Documentation that Empowers Security</h1>
          <p>
            Everything you need to configure, manage, and maximize your Netwrix security products
          </p>
          <div>
            <Link to="/docs/products/1secure" className="homepage-cta cta-primary">
              Get Started
            </Link>
            <Link to="/docs/products" className="homepage-cta">
              Browse Products
            </Link>
          </div>
        </div>
      </header>
      
      {/* Featured Products Section */}
      <section className="section">
        <div className="container">
          <Heading as="h2" className="section-title">
            Popular Products
          </Heading>
          <p className="section-subtitle">
            Explore our most widely used security solutions
          </p>
          
          <div className="row">
            <div className="col col--3 margin-bottom--lg">
              <div className="product-card">
                <img src={productLogos.secure} alt="1Secure" className="product-logo" />
                <h3>1Secure</h3>
                <p>Comprehensive security platform that integrates all Netwrix solutions.</p>
                <Link to="/docs/products/1secure" className="button button--primary button--outline button--block">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="col col--3 margin-bottom--lg">
              <div className="product-card">
                <img src={productLogos.accessAnalyzer} alt="Access Analyzer" className="product-logo" />
                <h3>Access Analyzer</h3>
                <p>Identify and reduce risks around sensitive data.</p>
                <Link to="/docs/products/access-analyzer" className="button button--primary button--outline button--block">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="col col--3 margin-bottom--lg">
              <div className="product-card">
                <img src={productLogos.activityMonitor} alt="Activity Monitor" className="product-logo" />
                <h3>Activity Monitor</h3>
                <p>Track user behavior and detect suspicious activities in real-time.</p>
                <Link to="/docs/products/activity-monitor" className="button button--primary button--outline button--block">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="col col--3 margin-bottom--lg">
              <div className="product-card">
                <img src={productLogos.auditor} alt="Auditor" className="product-logo" />
                <h3>Auditor</h3>
                <p>Identify IT risks, detect suspicious activity, and investigate security incidents.</p>
                <Link to="/docs/products/auditor" className="button button--primary button--outline button--block">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text--center margin-top--lg">
            <Link to="/docs/products" className="button button--primary button--lg">
              View All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section section-alternate">
        <div className="container">
          <Heading as="h2" className="section-title">
            Why Our Documentation Rocks
          </Heading>
          <p className="section-subtitle">
            We've built our docs with the same care and attention that goes into our products
          </p>
          
          <div className="features-container">
            <div className="feature-item">
              <span className="feature-icon">{featureIcons.search}</span>
              <div className="feature-text">
                <h3>Powerful Search</h3>
                <p>Find exactly what you need with our lightning-fast search capabilities</p>
              </div>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">{featureIcons.speed}</span>
              <div className="feature-text">
                <h3>Quick Implementation</h3>
                <p>Step-by-step guides to get you up and running in no time</p>
              </div>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">{featureIcons.data}</span>
              <div className="feature-text">
                <h3>Data Protection Focus</h3>
                <p>Learn how to secure your most critical assets with our products</p>
              </div>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">{featureIcons.identity}</span>
              <div className="feature-text">
                <h3>Identity Security</h3>
                <p>Comprehensive identity protection documentation and best practices</p>
              </div>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">{featureIcons.shield}</span>
              <div className="feature-text">
                <h3>Security Intelligence</h3>
                <p>Stay ahead of threats with our deep expertise in security documentation</p>
              </div>
            </div>
            
            <div className="feature-item">
              <span className="feature-icon">{featureIcons.integration}</span>
              <div className="feature-text">
                <h3>Integration Guides</h3>
                <p>Seamlessly connect with other security tools in your ecosystem</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <Heading as="h2" className="section-title">
            What Security Pros Say
          </Heading>
          
          <div className="row">
            <div className="col col--4">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "The documentation made deploying Netwrix across our enterprise so much easier than expected. Everything was clear and actionable."
                </p>
                <p className="testimonial-author">— CISO, Fortune 500 Financial Company</p>
              </div>
            </div>
            
            <div className="col col--4">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "I was able to set up threat detection in under an hour thanks to these excellent docs. The screenshots and examples are incredibly helpful."
                </p>
                <p className="testimonial-author">— Security Architect, Healthcare Provider</p>
              </div>
            </div>
            
            <div className="col col--4">
              <div className="testimonial-card">
                <p className="testimonial-text">
                  "As someone new to Netwrix, the documentation guided me step by step. Now I'm considered the Netwrix expert at my company!"
                </p>
                <p className="testimonial-author">— IT Security Manager, Educational Institution</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col col--4 text--center">
              <div className="stat-number">13,000+</div>
              <div className="stat-label">Organizations Protected</div>
            </div>
            
            <div className="col col--4 text--center">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Documentation Support</div>
            </div>
            
            <div className="col col--4 text--center">
              <div className="stat-number">100+</div>
              <div className="stat-label">Product Guides</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section section-alternate">
        <div className="container">
          <div className="row">
            <div className="col col--6 col--offset-3 text--center">
              <Heading as="h2" className="section-title">
                Ready to Get Started?
              </Heading>
              <p className="section-subtitle">
                Our documentation will help you maximize the power of your security solutions
              </p>
              <div className="margin-top--lg">
                <Link to="/docs/products/1secure" className="button button--primary button--lg">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
