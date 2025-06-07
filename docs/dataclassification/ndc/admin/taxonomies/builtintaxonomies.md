# Built-in Taxonomies Overview

Netwrix Data Classification comes with eight taxonomies with hundreds of classification rules out-of-the-box.

The four core taxonomies cover a broad range of sensitive personal, financial, and health-related information. The remaining four taxonomies derive from the core set. They are tailored to meet the requirements of specific data protection regulations:

- Personally identifiable information covering GDPR scope.
- Medical records covering HIPAA scope.
- Financial records and payment cards information covering GLBA and PCI DSS scope.

This section contains the full list of built-in taxonomies supported by Netwrix Data Classification.

__NOTE:__ Netwrix Data Classification users can see only the taxonomies they have permissions to use. See the [User Management](/docs/product_docs/dataclassification/ndc/security/usermanagement.md) section for more information on users' permissions.

## Core Taxonomies

##### Financial Records

- ABA routing numbers
- IBAN/SWIFT codes
- Bank account numbers

##### Personally Identifiable Information (PII)

- Personal information (full name, home address, date of birth) in the following languages:
  - Danish
  - Dutch
  - English
  - French
  - German
  - Greek
  - Icelandic
  - Italian
  - Slovenian
  - Spanish
  - Swedish
- National IDs, passport numbers, driver licenses, taxpayer IDs, etc. for the following countries:
  - Australia
  - Austria
  - Belgium
  - Brazil
  - Bulgaria
  - Canada
  - Croatia
  - Cyprus
  - Czech Republic and Slovakia
  - Denmark
  - Estonia
  - Finland
  - France
  - Germany
  - Greece
  - Hong Kong
  - Hungary
  - Iceland
  - India
  - Ireland
  - Italy
  - Latvia
  - Lithuania
  - Luxemburg
  - Malta
  - Netherlands
  - Norway
  - Poland
  - Portugal
  - Romania
  - Russia
  - Singapore
  - Slovenia
  - South Africa
  - Spain
  - Sweden
  - United Kingdom
  - USA

##### Payment Card Industry Data Security Standard (PCI DSS)

Cardholder data (holder name, card number, expiration and security code) for the major payment systems:

- American Express
- Diners Club
- Discover
- JCB
- Mastercard
- UnionPay
- Visa

##### Patient Health Information (PHI)

Medical forms, treatment records, prescription drugs, decease names/codes, allergies, social and insurance numbers.

## Derived Taxonomies

##### General Data Protection Regulation (GDPR)

A subset of the PII taxonomy relating to the personal information of EU residents:

- Austria
- Belgium
- Bulgaria
- Croatia
- Czech Republic
- Denmark
- Estonia
- Finland
- France
- Germany
- Greece
- Hungary
- Ireland
- Italy
- Latvia
- Lithuania
- Luxemburg
- Malta
- The Netherlands
- Poland
- Portugal
- Romania
- Slovakia
- Slovenia
- Spain
- Sweden
- United Kingdom

##### GDPR Restricted

Personal data (same as in PII) accompanied by the following special categories of personal information (GDPR Article 9):

- Ethnicity
- Political views
- Religious beliefs

##### Gramm-Leach-Bliley Act (GLBA)

Combines the Financial Records, PCI DSS and PII (US social security numbers) taxonomies.

##### Health Insurance Portability and Accountability Act (HIPAA)

Combines the PHI and PII (US social security numbers) taxonomies.

##### Credentials

Includes sensitive credentials data, such as tokens, private or public keys, passwords, generic certificates, and others.

##### Cybersecurity Maturity Model Certification (CMMC)

Includes data provided within the cybersecurity framework, such as password requirements, encryption, applying labels, and other security policies.

##### California Consumer Protection Act (CCPA)

Includes personal and security information (identity, geolocation, biometric data), necessary for consumers and businesses.

## Sensitive and Non-Sensitive Taxonomies

While creating your own reports, you can specify whether a taxonomy is sensitive (finance, сredentials) or non-sensitive (file size, language).

__NOTE:__ This applies only to customized taxonomies, which you add by yourself. You cannot change the sensitivity settings for the pre-defined taxonomies.

Follow the steps to specify sensitive taxonomy.

__Step 1 –__ Add a new taxonomy. See the [Add a Taxonomy](/docs/product_docs/dataclassification/ndc/admin/taxonomies/add.md) topic for additional information.

__Step 2 –__ Navigate to Taxonomies > Global Settings > Edit. The __Edit__ panel displays.

__Step 3 –__ Select Sensitive Taxonomy.

![standalonetaxonomies_sensitive](/static/img/product_docs/dataclassification/ndc/admin/taxonomies/standalonetaxonomies_sensitive.png)

__Step 4 –__ Click __Save__.

To view the results of the classification and generate sensitivity reports, go to Analysis > Reports >  Classification Reports >  Sensitive Documents. See the [Classification Reports](/docs/product_docs/dataclassification/ndc/admin/reporting/classificationreports.md) topic for additional information.
