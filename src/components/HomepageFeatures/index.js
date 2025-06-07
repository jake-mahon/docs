import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Activity Monitor',
    description: (
      <>
        Track and audit user activities across your IT infrastructure. 
        Monitor Active Directory, file servers, Exchange, and more.
      </>
    ),
    link: '/docs/activitymonitor',
    Svg: require('@site/static/img/branding/logo.svg').default,
  },
  {
    title: 'Change Tracker',
    description: (
      <>
        Detect and alert on critical changes in your IT environment. 
        Ensure compliance and security with real-time change monitoring.
      </>
    ),
    link: '/docs/changetracker',
    Svg: require('@site/static/img/branding/logo.svg').default,
  },
  {
    title: 'Password Reset',
    description: (
      <>
        Enable secure self-service password resets for your users. 
        Reduce helpdesk load while maintaining security.
      </>
    ),
    link: '/docs/passwordreset',
    Svg: require('@site/static/img/branding/logo.svg').default,
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link
          className="button button--primary"
          to={link}>
          View Documentation
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 