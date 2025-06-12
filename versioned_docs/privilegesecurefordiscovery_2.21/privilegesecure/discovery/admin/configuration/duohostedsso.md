# Duo Hosted SSO

Duo Hosted SSO

# Duo Hosted SSO

## Overview

This topic covers integrating Privilege Secure with Duo using a Duo hosted SSO. Please find an article detailing the Privilege Secure SSO terms here: [SSO Configuration](/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/ssoconfiguration.md)

## Preqrequisites

Duo service plan with the following:

- Active Directory (AD) sync configured and synced
- Single Sign-On enabled
- Duo Active Directory Authentication Proxy Agent Installed and configured for AD sync and SSO
- Single Sign-On Authentication Source configured and tested

## Duo: Create the DUO Application for Privilege Secure

- ![mceclip0.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360049850994_mceclip0.png)

Scroll down to the __Service Provider Section__; notes:

- The information below is for example purpose only.  Enter the appropriate information for your environment.

- [https://10.100.11.192](https://10.100.11.192) should be replace with your Privilege Secure URL.
- Entity ID can by any unique string.  We recommend using your Privilege Secure URL.

![mceclip0.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360049850994_mceclip0.png)

__SAML Response Section__ Notes:

- The NameID can also be:  
  ```urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified```
- The 'idP Attribute' and 'SAML Response Attribute' will need to be manually entered.
- idP Attribute: ```distinguishedName```
- SAML Response Attribute: ```dn```

![image.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360049850994_image.png)

![image__1_.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360049850994_image__1_.png)

- The remaining __SAML Response__ section fields can be left blank.
- The __Policy__ section requires no settings from Privilege Secure, tailor to suit your environment.
- In the __Settings__ section, we recommend setting an appropriate name, tailor the rest to suit your environment.

![mceclip4.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360049850994_mceclip4.png)

- The __Host Whitelisting__ section requires no settings from Privilege Secure, tailor to suit your environment.
- Click the [Save] button at the bottom of the page.

## Duo: Retrieve SAML/SSO Information for Privilege Secure

![mceclip6.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360049850994_mceclip6.png)

![mceclip7.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360049850994_mceclip7.png)

## Enter SAML/SSO Information

![mceclip8.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360049850994_mceclip8.png)

## Enable SSO in Privilege Secure and Login Example

At the bottom of the __Configure__ > __Server__ > __SAML Configuration Panel__, enable or disable SSO when appropriate:

![mceclip9.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360049850994_mceclip9_192x74.png)

__Step 1 –__ Click __SSO Login__ button to log in via Duo.

__Step 2 –__ \*Optional:  To login from Duo first (IdP-initiated), use the Single Sign-On URL provided by Duo.  This is found in the application's "Metadata" section.

![mceclip0.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/360049850994_mceclip0_650x254.png)

## Troubleshooting

If you are using ADFS as an authentication source and receive a "SAML Assertion Not Yet Valid" while trying to log in, please see:  [Configure ADFS (Active Directory Federation Services) SSO](/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/configureadfs.md)

## Additional Information

[https://duo.com/docs/authproxy-reference](https://duo.com/docs/authproxy-reference)

[https://duo.com/docs/sso-generic](https://duo.com/docs/sso-generic)

[https://duo.com/docs/sso](https://duo.com/docs/sso)
