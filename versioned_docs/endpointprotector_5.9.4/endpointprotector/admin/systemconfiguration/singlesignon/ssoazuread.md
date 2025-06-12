# Single Sign On (SSO) Conﬁguration with Azure AD

Single Sign On (SSO) streamlines user authentication by enabling access to multiple applications with a single set of credentials. This guide explains how to configure SSO with Azure Active Directory (AD), enhancing security and improving user access across your organization’s applications.

## Configuring SSO with Azure AD

Setting up Single Sign-On (SSO) with Azure AD integrates your server with Azure's authentication services. By configuring system settings, activating SSO, and choosing a login user, you prepare your server for seamless integration. This guide covers setting up a new enterprise application in Azure, configuring SAML settings, and syncing data between your server and Azure AD. Follow the steps below to activate Single Sign-On with Azure AD.

__Step 1 –__ Navigate to __System Conﬁguration__ > __System Settings__ > __Single Sign On__.

__Step 2 –__ Upon the activation, select a __Failover Login User__ from the drop-down; root user will be selected by default.

![Single Sign On Conﬁguration with Microsoft Entra ID ](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/ssomicrosoftentraid.png)

After the above steps have been completed, a Single Sign On subsection is displayed in the System Conﬁguration section.

__NOTE:__ The Failover Login User you selected cannot be deleted from Endpoint Protector Server while it is selected. Single Sign On cannot be activated without a Failover Login User.

__Step 3 –__ Select the __Provider__ to view Single Sign On subsections.

![Single Sign On Conﬁguration with Microsoft Entra ID](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/ssomicrosoftentraidtwo.png)

__Step 4 –__ Navigate to portal.azure.com and login.

__Step 5 –__ Navigate to __Azure Active Directory__.

__Step 6 –__ Create a __New Enterprise Application__:

![Microsoft Entra ID](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidenterpriseapplication.png)

- Click __Create your own application__ to add an new application.

![Create Your Own Application](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidcreateapplication.png)

- Give the application a name.
- Select __Integrate any other application you don’t ﬁnd in the gallery__.
- Click __Create__.

![Integrate any other application you don’t ﬁnd in the gallery](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidintergrateapplication.png)

__Step 7 –__ From the left-hand menu Navigate to Single sign-on and then select the __SAML__ method.

![Entra ID  Single Sign On](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidsso.png)

__Step 8 –__ To edit Basic SAML Conﬁguration, open the Single Sign On page from the Endpoint Protector Server and copy/paste the data from the Single Sign On page on the __Basic SAML Conﬁguration__ page.

![Entra ID SAML](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidsaml.png)

__Step 9 –__ On the Basic SAML Conﬁguration page, delete the data that is by default completed for Identiﬁer (Entity Edit).

![Basic SAML Conﬁguration page](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidbasicsamlconf.png)

__Step 10 –__ From the Single Sign On page on the Endpoint Protector Server:

- Copy the data from the Service Provider's Entity ID field and paste it into both the Identifier (Entity ID) and Reply URL (Assertion Consumer Service URL) fields on the Basic SAML Configuration page in Microsoft Azure. Finally, set it as Default.

![On the Endpoint Protector Server Copy the data from Endpoint Protector Service Provider](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidbasicsamlconftwo.png)

- Copy the Login URL from the Single Sign-On and paste it into the Sign-On URL field on the Basic SAML Configuration page in Microsoft Azure.

![On the Endpoint Protector Server Copy the data from Endpoint Protector Service Provider](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidbasicsamlconfthree.png)

- Copy the Logout URL from the Single Sign-On and paste it into the Logout URL field on the Basic SAML Configuration page in Microsoft Azure.

![On the Endpoint Protector Server Copy the data from Endpoint Protector Service Provider](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidbasicsamlconffour.png)

__Step 11 –__ Click __Save__ to save the settings without testing Single Sign On yet.

__Step 12 –__ Navigate to Step 3 on the SAML Signing Certificate page and click __Edit__.

![Edit SAML Signing Certiﬁcate](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/editsamlsigningcert.png)

__Step 13 –__ Change the Signing Algorithm to SHA-1 and click __Save__.

![Edit SAML Signing Certiﬁcate](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/editsamlsigningcerttwo.png)

__Step 14 –__ In Step 3 of the SAML Signing Certificate, download the __Certificate (Base64)__.

![Download Certiﬁcate (Base64).](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidownloadcert.png)

__Step 15 –__ Open the downloaded certiﬁcate with a text editor and copy the content inside it.

__Step 16 –__ Paste the content into the __Security Certificate__ field under the Single Sign-On section in the System Configuration of the Endpoint Protector Server.

![Open the downloaded certiﬁcate with a text editor and copy the content inside it](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/pastesecuritycert.png)

__Step 17 –__ Return to the Azure __SAML-based Sign-On__ page, proceed to Step 4 ("Set up your application"), and copy the Azure AD Identifier.

__Step 18 –__ Navigate to the Endpoint Protector Server __System Conﬁguration > Single Sign On > Identity Provider, Azure AD Identiﬁer__ and paste the data from the previous step.

![Microsoft Entra ID Identifier](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidindetifier.png)

__Step 19 –__ Return to Azure SAML-based Sign On page and reach Step 4, Set up “your application” and copy Login URL.

__Step 20 –__ Switch to the Endpoint Protector Server, __System Conﬁguration__ > __Single Sign On__ >  __Identity Provider__ > Login URL and paste the data from the previous step.

![ Login URL](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidloginurl.png)

![Logout URL](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidlogouturl.png)

__Step 21 –__ Generate the Failover Login URL from Endpoint Protector Server __System Configuration__ > __Single Sign-On__ > __Failover Login URL__ and __Save__ it.

![Failover Login URL](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/failoverloginurl.png)

__Step 22 –__ __Save__ the settings on the Single Sign On page from the Endpoint Protector Server.

__Step 23 –__ Switch to Azure, Select __Users and groups__ from the left menu.

![Users and groups](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidusergroups.png)

__Step 24 –__ Go to __Add user/group__ > __none Selected__, search for the Azure User, then __Select__, and __Assign__.

![Add user/group](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidaddusergroup.png)

![Add user/group](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidusergroupstwo.png)

![Add user/group](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidusergroupsthree.png)

![Add user/group](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/singlesignon/entraidusergroupsfour.png)

__Step 25 –__ The user is assigned to the application, and logging into Endpoint Protector with Azure is now possible.

__Step 26 –__ Log out of the Endpoint Protector Server and log back in. The administrator should be redirected to http://login.microsoftonline.com/ for the Azure login process.
