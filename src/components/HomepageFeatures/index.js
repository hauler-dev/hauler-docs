import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fully Compliant OCI Artifacts',
    Svg: require('@site/static/img/registry.svg').default,
    description: (
      <>
        Hauler represents every asset as a fully compliant OCI Artifact, allowing for seamless integration with existing tooling and workflows.
      </>
    ),
  },
  {
    title: 'Simplifying the Airgap Experience',
    Svg: require('@site/static/img/airgap-lock-icon.svg').default,
    description: (
      <>
        Hauler was tactically designed and built to solve the challenges of collecting, packaging, and distributing assets in airgapped environments.
      </>
    ),
  },
  {
    title: 'Powered by Carbide',
    Svg: require('@site/static/img/rgs-carbide-shield-black.svg').default,
    description: (
      <>
        Hauler was created for the open-source community, but is fully integrated with the hardened features of <a href="http://docs.ranchercarbide.dev">Rancher Government Carbide</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
