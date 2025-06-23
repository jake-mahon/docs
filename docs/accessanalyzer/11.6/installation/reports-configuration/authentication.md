---
title: Installation: authentication
sidebar_label: authentication
description: Installation guide for authentication including system requirements, setup procedures, and configuration options.
---

# Enable Multiple Domain Access

When the `AuthenticationDomains` parameter in the **WebServer.exe.config** file is blank, only
domain users from the domain where the Enterprise Auditor Console resides can access the Web
Console. Access can be granted from other domains when specified within this parameter.

**NOTE:** Once another domain is added, then it is necessary to also add the domain where the
Enterprise Auditor Console resides.

All domains provided or enumerated must have a trust relationship with the domain where Enterprise
Auditor resides. Follow the steps to allow access to the Web Console from other domains.

**Step 1 –** Open the **WebServer.exe.config** file with a text editor, for example Notepad. It is
located within the Web folder of the Enterprise Auditor installation directory.

![WebServer.exe.config file in Notepad](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/webserverexeconfigmultipledomains.webp)

**Step 2 –** Add the desired domains to the value for the `AuthenticationDomains` parameter:

```
<add key="AuthenticationDomains" value="" />
```

Use domain name in a comma-separated list. For example:

```
<add key="AuthenticationDomains" value="Sherwood.com, Nottingham.com" />
```

**Step 3 –** Save and close the file.

**Step 4 –** Navigate to Services (`services.msc`). Restart the Enterprise Auditor Web Server
service.

The Web Console can now be accessed from multiple domains.

**NOTE:** In order for the AIC to be accessed from these domains, this must also be configured for
the AIC. See the Multiple Domains topic in the
[Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
for additional information.

# Manage Kerberos Encryption Warning for the Web Console

If a computer's Local Security Policy, or applicable Group Policy, enforces certain encryption
methods for Kerberos authentication, then the service account running the Enterprise Auditor Web
Server must support the same encryption methods.

If encryption methods have been configured for Kerberos on the Enterprise Auditor server but not on
the service account running the Enterprise Auditor Web Server service, then users will not be able
to log-in to the Web Console and will receive the below error message.

![Kerberos Error Message](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/kerberoserrormessage.webp)

When this occurs, the following error will be logged:

_ERROR - Unhandled server error: Nancy.RequestExecutionException: Oh noes! --->
System.Security.SecurityException: The encryption type requested is not supported by the KDC_.

This error will be logged in the following location:

%SAINSTALLDIR%\SADatabase\Logs\Web\service.log

While it is not required to configure these settings, this section provides the locations and steps
necessary to configure encryption methods in Local and Group policies to allow Kerberos for the
Report Index if an error does occur.

## Local Security Policies

Follow the steps to configure a Local Security Policy to allow Kerberos.

**Step 1 –** Open the Local Security Policy window.

![Local Security Policy Window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/localsecuritypolicywindow.webp)

**Step 2 –** From the Security Settings list, navigate to **Local Policies** > **Security Options**.

**Step 3 –** Right-click the **Network Security: Configure encryption types allows for Kerberos**
policy > click **Properties**.

![Configure Local Security Setting Window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/configurelocalsecuritysettingwindow.webp)

**Step 4 –** Configure necessary settings by checking each applicable box.

**Step 5 –** Click **Apply**, then click **OK**.

A Local Security Policy has been configured to allow encryption methods for Kerberos. Proceed to the
[Configure Active Directory Users and Computers Settings to allow Kerberos](#configure-active-directory-users-and-computers-settings-to-allow-kerberos)
section of this topic to ensure Active Directory Users and Computer settings are configured to allow
the encryption methods for Kerberos.

## Group Security Policy

Follow the steps to configure a Local Group Security Policy to allow Kerberos.

**Step 1 –** Open the Local Group Policy Editor window.

![Local Group Policy Editor window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/localgrouppolicywindow.webp)

**Step 2 –** From the Local Computer Policy list, navigate to **Computer Configuration** > **Windows
Settings** > **Security Settings** > **Local Policies** > **Security Options** folder .

**Step 3 –** Right-click the **Network Security: Configure encryption types allows for Kerberos**
policy, then click **Properties**.

![Configure Local Security Setting Window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/configurelocalsecuritysettingwindow.webp)

**Step 4 –** Configure necessary settings by checking each applicable box.

**Step 5 –** Click **Apply**, then click **OK**.

A Local Group Security Policy has been configured to allow encryption methods for Kerberos. Proceed
to the
[Configure Active Directory Users and Computers Settings to allow Kerberos](#configure-active-directory-users-and-computers-settings-to-allow-kerberos)
section of this topic to ensure Active Directory Users and Computer settings are configured to allow
the encryption methods for Kerberos.

## Configure Active Directory Users and Computers Settings to allow Kerberos

Follow the steps to ensure the settings for Active Directory Users and Computers are configured to
allow the encryption methods to allow Kerberos. Configurations selected in this section should
reflect the configuration options selected in the two sections above. See the
[Local Security Policies](#local-security-policies) and
[Group Security Policy](#group-security-policy) topics for additional information.

**Step 1 –** Open the Active Directory Users and Computers window.

![Active Directory Users and Computers Window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/activedirectoryusersandcomputerswindows.webp)

**Step 2 –** Click and expand the Domain from the left-hand menu and click **Users**.

**Step 3 –** Right-click a **User** from the list of available users, then click **Properties**.

![User Properties Window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/reports/userproperteswindow.webp)

**Step 4 –** Click the **Account** tab.

**Step 5 –** Locate the appropriate Account options and check the corresponding boxes.

**Step 6 –** Click **Apply**, then click **OK**.

Active Directory Users and Computer settings have been configured to allow the encryption methods
for Kerberos. These settings should match the configuration options for Local Security Policies and
Local Group Policies.
