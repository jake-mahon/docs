---
sidebar_position: 6273
title: Enable Single Sign-On
---

# Enable Single Sign-On

Single sign-on using Windows authentication allows users to be automatically log into the Web Console according to the user’s current login session. When opening a session from a different domain, the user will be prompted for credentials from a pop-up windows. After authenticating, the user will be automatically logged in the Web Console.

**NOTE:** The Web Console also supports using Microsoft Entra ID single sign-on. See the [Microsoft Entra ID Single Sign-On](EntraIDSSO "Microsoft Entra ID Single Sign-On") topic for additional information.

Follow the steps to enable single sign-on for the Web Console.

**Step 1 –** Open the **WebServer.exe.config** file with a text editor, for example Notepad. It is located within the Web folder of the Access Analyzer installation directory.

![WebServer.exe.config file in Notepad](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/Reports/WebServerExeConfigSSO.png "WebServer.exe.config file in Notepad")

**Step 2 –** Change the value for the `WindowsAuthentication` parameter to:

```

```
**Step 3 –** Save and close the file.

**Step 4 –** Navigate to Services (`services.msc`). Restart the Netwrix Access Analyzer (formerly Enterprise Auditor) Web Server service.

The Web Console has been enabled for single sign-on.

## Local Intranet Settings

Next, configure local intranet settings to enable SSO. This enables users to have authentication pass through Windows Authentication and bypass SSO configuration Prompts for credentials via Browser pop-up.

Follow the steps to configure local intranet settings.

**Step 1 –** Open Windows Internet Properties (**Control Panel** > **Network and Internet** > **Internet Options**).

![ConfigureLocalIntranetSettingsforSSO - 1](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/SSO/InternetProperties.png "ConfigureLocalIntranetSettingsforSSO - 1")

**Step 2 –** Go to the Security tab, and select the **Local Intranet** option. Then, click the **Sites** button.

![](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/SSO/LocalIntranet.png)

**Step 3 –** Click the **Advanced** button.

![](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/SSO/LocalIntranetAdvanced.png)

**Step 4 –** Enter a domain in the **Add this website in the zone** field. Ensure the fully qualified domain name is in the following format: `https://..com`

**Step 5 –** Click the **Add** button. Close the Local intranet window.

**Step 6 –** On the Internet Properties window, click the **Apply** button.

Authentication will now pass through Windows Authentication and bypass SSO configuration Prompts for credentials via Browser pop-up

**NOTE:** A list of allowed authentication servers can also be configured using the AuthServerAllowList policy.