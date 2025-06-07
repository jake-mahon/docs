# Manage Kerberos Encryption Warning for the Web Console

If a computer's Local Security Policy, or applicable Group Policy, enforces certain encryption methods for Kerberos authentication, then the service account running the Access Analyzer Web Server must support the same encryption methods.

If encryption methods have been configured for Kerberos on the Access Analyzer server but not on the service account running the Access Analyzer Web Server service, then users will not be able to log-in to the Web Console and will receive the below error message.

![Kerberos Error Message](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/kerberoserrormessage.png)

When this occurs, the following error will be logged:

_ERROR - Unhandled server error: Nancy.RequestExecutionException: Oh noes! ---> System.Security.SecurityException: The encryption type requested is not supported by the KDC_.

This error will be logged in the following location:

%SAINSTALLDIR%\SADatabase\Logs\Web\service.log

While it is not required to configure these settings, this section provides the locations and steps necessary to configure encryption methods in Local and Group policies to allow Kerberos for the Report Index if an error does occur.

## Local Security Policies

Follow the steps to configure a Local Security Policy to allow Kerberos.

__Step 1 –__ Open the Local Security Policy window.

![Local Security Policy Window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/localsecuritypolicywindow.png)

__Step 2 –__ From the Security Settings list, navigate to __Local Policies__ > __Security Options__.

__Step 3 –__ Right-click the __Network Security: Configure encryption types allows for Kerberos__ policy > click __Properties__.

![Configure Local Security Setting Window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/configurelocalsecuritysettingwindow.png)

__Step 4 –__ Configure necessary settings by checking each applicable box.

__Step 5 –__ Click __Apply__, then click __OK__.

A Local Security Policy has been configured to allow encryption methods for Kerberos. Proceed to the [Configure Active Directory Users and Computers Settings to allow Kerberos](#Configure-Active-Directory-Users-and-Computers-Settings-to-allow-Kerberos) section of this topic to ensure Active Directory Users and Computer settings are configured to allow the encryption methods for Kerberos.

## Group Security Policy

Follow the steps to configure a Local Group Security Policy to allow Kerberos.

__Step 1 –__ Open the Local Group Policy Editor window.

![Local Group Policy Editor window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/localgrouppolicywindow.png)

__Step 2 –__ From the Local Computer Policy list, navigate to __Computer Configuration__ > __Windows Settings__ > __Security Settings__ > __Local Policies__ > __Security Options__ folder .

__Step 3 –__ Right-click the __Network Security: Configure encryption types allows for Kerberos__ policy, then click __Properties__.

![Configure Local Security Setting Window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/configurelocalsecuritysettingwindow.png)

__Step 4 –__ Configure necessary settings by checking each applicable box.

__Step 5 –__ Click __Apply__, then click __OK__.

A Local Group Security Policy has been configured to allow encryption methods for Kerberos. Proceed to the [Configure Active Directory Users and Computers Settings to allow Kerberos](#Configure-Active-Directory-Users-and-Computers-Settings-to-allow-Kerberos) section of this topic to ensure Active Directory Users and Computer settings are configured to allow the encryption methods for Kerberos.

## Configure Active Directory Users and Computers Settings to allow Kerberos

Follow the steps to ensure the settings for Active Directory Users and Computers are configured to allow the encryption methods to allow Kerberos. Configurations selected in this section should reflect the configuration options selected in the two sections above. See the [Local Security Policies](#Local-Security-Policies) and [Group Security Policy](#Group-Security-Policy) topics for additional information.

__Step 1 –__ Open the Active Directory Users and Computers window.

![Active Directory Users and Computers Window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/activedirectoryusersandcomputerswindows.png)

__Step 2 –__ Click and expand the Domain from the left-hand menu and click __Users__.

__Step 3 –__ Right-click a __User__ from the list of available users, then click __Properties__.

![User Properties Window](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/reports/userproperteswindow.png)

__Step 4 –__ Click the __Account__ tab.

__Step 5 –__ Locate the appropriate Account options and check the corresponding boxes.

__Step 6 –__ Click __Apply__, then click __OK__.

Active Directory Users and Computer settings have been configured to allow the encryption methods for Kerberos. These settings should match the configuration options for Local Security Policies and Local Group Policies.
