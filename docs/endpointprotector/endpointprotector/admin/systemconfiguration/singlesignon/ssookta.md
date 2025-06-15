# Single Sign On (SSO) Conﬁguration with Okta

Single Sign On (SSO) is a powerful authentication process that enhances security and improves user experience by allowing users to access multiple applications with a single set of login credentials. In this guide, we focus on configuring SSO using Okta, a leading identity management service, to streamline user access and secure your system effectively.

## Configuring SSO with Okta

Configuring Single Sign-On with Okta involves several key steps that integrate your server with Okta’s authentication framework. Begin by activating SSO within your system’s configuration settings, selecting a failover user, and preparing for provider selection. This section will guide you through the precise steps required to establish a secure and efficient SSO connection, including application integration in Okta, SAML settings configuration, and the necessary data synchronization between your server and Okta. Follow the steps below to ensure a successful setup.

__Step 1 –__ To activate Single Sign-On, navigate to __System Configuration__ > __System Settings__ > __Single Sign-On__. Once activated, select a Failover Login User from the drop-down menu. The Root user is selected by default.

![Single Sign On Conﬁguration with OKTA](../../../../../../static/img/product_docs/endpointprotector/endpointprotector/admin/systemconfiguration/singlesignon/ssookta.png)

After completing the above steps, a Single Sign-On subsection will appear in the System Configuration section.

__Step 2 –__ Select the __Provider__ in order for Single Sign On subsection to be displayed.

![ssoprovider](../../../../../../static/img/product_docs/endpointprotector/endpointprotector/admin/systemconfiguration/singlesignon/ssoprovider.png)

__Step 3 –__ Go to yourcompany.okta.com, select __Applications__, and then click __Create App Integration__.

![Create App Integration.](../../../../../../static/img/product_docs/endpointprotector/endpointprotector/admin/systemconfiguration/singlesignon/oktaapplications.png)

__Step 4 –__ On the next screen, select __SAML 2.0__ and click __Next__.

![Create App Integration](../../../../../../static/img/product_docs/endpointprotector/endpointprotector/admin/systemconfiguration/singlesignon/oktanewappintergration.png)

__Step 5 –__ Set a __Name__ for the Application and click __Next__.

![Create SAML Intergration](../../../../../../static/img/product_docs/endpointprotector/endpointprotector/admin/systemconfiguration/singlesignon/oktacreatesamlintergration.png)

__Step 6 –__ Open the __Conﬁgure SAML__ tab.

__Step 7 –__ Go to your Endpoint Protector __Server__, __System Conﬁguration__, Single Sign On.

![Endpoint Protector Server Single Sign On coffiguration ](../../../../../../static/img/product_docs/endpointprotector/endpointprotector/admin/systemconfiguration/singlesignon/ssoconfiguration.png)

__Step 8 –__ Copy the information from:

- Audience URI (SP Entity ID) and paste it on the ﬁeld with the same name from OKTA, Conﬁgure SAML.
- Login URL OKTA and paste it on the ﬁeld Single sign on URL from OKTA page, Conﬁgure SAML.

![Copy Audience URI (SP Entity ID) and paste it on the ﬁeld with the same name from OKTA, Conﬁgure SAML](../../../../../../static/img/product_docs/endpointprotector/endpointprotector/admin/systemconfiguration/singlesignon/audienceuriokta.png)

__Step 9 –__ On the OKTA page, click __Show Advanced Settings__.

![Show Advanced Setting](../../../../../../static/img/product_docs/endpointprotector/endpointprotector/admin/systemconfiguration/singlesignon/oktaadvancedsetting.png)

__Step 10 –__ Edit the following ﬁelds:

- Signature Algorithm, select __RSA-SHA1__
- Digest Algorithm, select __SHA1__

![Edit Signature Algorithm](../../../../../../static/img/product_docs/endpointprotector/endpointprotector/admin/systemconfiguration/singlesignon/oktaeditsignaturealgorithm.png)

__Step 11 –__ Hide Advanced Settings and click __Next__.

__Step 12 –__ At step 3, select an answer for each question and click __Finish__.

![Select an answer for each question](../../../../../../static/img/product_docs/endpointprotector/endpointprotector/admin/systemconfiguration/singlesignon/oktacreatesamlintergrationtwo.png)

__Step 13 –__ Navigate to __Applications__, select the Endpoint Protector application, go to Assignments, and assign people to the application.

![Assign Application to People](../../../../../../static/img/product_docs/endpointprotector/endpointprotector/admin/systemconfiguration/singlesignon/oktaassignapplication.png)

__Step 14 –__ After assigning the accounts, click __Done__.

![Assign Application to People](../../../../../../static/img/product_docs/endpointprotector/endpointprotector/admin/systemconfiguration/singlesignon/oktaassignapplicationtwo.png)

__Step 15 –__ Navigate to Applications, open the created app and click __Sign On__, __View Setup Instructions__.

![View Setup Instructions](../../../../../../static/img/product_docs/endpointprotector/endpointprotector/admin/systemconfiguration/singlesignon/oktaviewsetupinstructions.png)

__Step 16 –__ From the new opened section, copy the needed information and paste it on your Endpoint Protector Server:

- Identity Provider Single Sign-On URL to Endpoint Protector Server, System conﬁguration, Single Sign On, Identity Provider Single Sign-on URL
- Identity Provider Issuer to Endpoint Protector Server, System conﬁguration, Single Sign On, Identity Provider Issuer
- X.509 Certiﬁcate to Endpoint Protector Server, System conﬁguration, Single Sign On, X.509 Certiﬁcate

![Copy the needed information and paste it on your Endpoint Protector Server](../../../../../../static/img/product_docs/endpointprotector/endpointprotector/admin/systemconfiguration/singlesignon/ssoconfigurationtwo.png)

__Step 17 –__ __Save__ the settings on your Endpoint Protector Server and click __Test__ to conﬁrm conﬁguration settings are correct.
