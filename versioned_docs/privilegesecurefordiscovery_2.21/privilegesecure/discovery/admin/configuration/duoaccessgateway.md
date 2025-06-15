# SSO: Duo Access Gateway (DAG)

SSO: Duo Access Gateway (DAG)

# SSO: Duo Access Gateway (DAG)

## Overview

This topic covers integrating Privilege Secure with Duo using a Duo on-premise Duo Access Gateway (DAG) SSO. Please find an article detailing the Privilege Secure terms here: [SSO Configuration](/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/ssoconfiguration.md)

## Prerequisites

Duo service plan with the following:

- Duo Access Gateway (DAG)
- Active Directory (AD) sync configured and synced
- Single Sign-On enabled
- Duo Active Directory Authentication Proxy Agent Installed and configured for AD sync and SSO
- Single Sign-On Authentication Source configured and tested

## Duo:  Duo Access Gateway Configuration

__Step 1 –__ Login to __Duo Access Gateway Admin Console__.

__Step 2 –__ Navigate to the page for authentication source, and add the attribute that corresponds to the DUO user name attribute in the attributes field.

__Step 3 –__ Select __Applications__ in the left side bar.

__Step 4 –__ Locate the metadata section. This is the information you need to provide to the DUO Network Gateway when configuring the DAG IDP.

__Step 5 –__ Select the __Download certificate__.

## Due: Create the DUO Application for Privilege Secure

__Step 1 –__ Open a new tab and log into the __Duo Admin Panel__

__Step 2 –__ In the left side bar, select __Applications__ > __Protect an application__.

__Step 3 –__ Type in SAML, select SAML Duo Network Gateway.

__Step 4 –__ At the top of this, enter the FQDN of the new server and select save configuration.

__Step 5 –__ At the top of the new application’s property page, click ‘Download your configuration file’ to get the file in JSON format.

__Step 6 –__ Return to the __DAG Admin Console__.

__Step 7 –__ Add application, select choose file.

__Step 8 –__ Locate the file you just downloaded and click ‘open’, then upload.

__Step 9 –__ Return to the __Duo Admin Panel.__

DAG Parameters:

__NOTE:__  ```\{\{base_url\}\}```= URL used to reach Privilege Secure internally.

- __Configure SAML Service Provider__
  - Use -PROD and -DEV or -STG to differential environments
  - Can be selected by client, must match entry in Privilege Secure
  - Use different Entity IDs for PROD and non-PROD
  - Example: \{\{base_url\}\}-PROD

- __Service provider name:__ Privilege Secure-PROD
- __Entity ID:__```\{\{base_url\}\}```
- __Assertion Consumer Service:__```\{\{base_url\}\}/api/login```
- __Single Logout URL__ (Optional)__:__ `<leave blank>`
- __Default Relay State__ (Optional): `<leave blank>`

SAML Response:

- __NameID:__ ```urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified```
- __NameID attribute:__ ```<Username>```
- __Send attributes:__ `<select NameID radial>`
- __Signature algorithm:__ `<select SHA-256>`
- __Sign response:__ `<checked>`
- __Sign assertion:__ `<checked>`
- __Map attributes:__

- __idP Attribute:__```distinguishedName```
- __SAML Response Attribute:__```dn```

- __Create attributes (Optional)__:

- __Name:__ `<leave blank>`
- __Value:__ `<leave blank>`

__Step 10 –__ Duo: Retrieve SAML/SSO information for Privilege Secure.

__Step 11 –__ Privilege Secure: Enter SAML/SSO information.

__Step 12 –__ Privilege Secure: EEnable SSO in Privilege Secure and Login Example.

__Step 13 –__ At the bottom of the __Configure__ > __Server__ > __SAML Configuration Panel__, enable or disable SSO when appropriate:

- Privilege Secure SSO Login Screen
- Click the __SSO Login__ button to log in via Duo.

## Troubleshooting

If you are using ADFS as an authentication source and receive a "SAML Assertion Not Yet Valid" while trying to log in, please see:  [Configure ADFS (Active Directory Federation Services) SSO](/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/admin/configuration/configureadfs.md)

## Additional Information

[https://duo.com/docs/authproxy-reference](https://duo.com/docs/authproxy-reference)

[https://duo.com/docs/sso-generic](https://duo.com/docs/sso-generic)

[https://duo.com/docs/sso](https://duo.com/docs/sso)
