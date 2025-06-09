# Enable Single Sign-On

Single sign-on using Windows authentication allows users to be automatically log into the Web Console according to the user’s current login session. When opening a session from a different domain, the user will be prompted for credentials from a pop-up windows. After authenticating, the user will be automatically logged in the Web Console.

__NOTE:__ The Web Console also supports using Microsoft Entra ID single sign-on. See the [Microsoft Entra ID Single Sign-On](/docs/accessanalyzer/enterpriseauditor/install/application/reports/entraidsso.md) topic for additional information.

Follow the steps to enable single sign-on for the Web Console.

__Step 1 –__ Open the __WebServer.exe.config__ file with a text editor, for example Notepad. It is located within the Web folder of the Access Analyzer installation directory.

![WebServer.exe.config file in Notepad](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/webserverexeconfigsso.png)

__Step 2 –__ Change the value for the ```WindowsAuthentication``` parameter to:

```
<add key="WindowsAuthentication" value="true" />
```

__Step 3 –__ Save and close the file.

__Step 4 –__ Navigate to Services (```services.msc```). Restart the Netwrix Access Analyzer (formerly Enterprise Auditor) Web Server service.

The Web Console has been enabled for single sign-on.

## Local Intranet Settings

Next, configure local intranet settings to enable SSO. This enables users to have authentication pass through Windows Authentication and bypass SSO configuration Prompts for credentials via Browser pop-up.

Follow the steps to configure local intranet settings.

__Step 1 –__ Open Windows Internet Properties (__Control Panel__ > __Network and Internet__ > __Internet Options__).

![ConfigureLocalIntranetSettingsforSSO - 1](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/internetproperties.png)

__Step 2 –__ Go to the Security tab, and select the __Local Intranet__ option. Then, click the __Sites__ button.

![localintranet](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/localintranet.png)

__Step 3 –__ Click the __Advanced__ button.

![localintranetadvanced](/img/product_docs/accessanalyzer/enterpriseauditor/install/application/reports/localintranetadvanced.png)

__Step 4 –__ Enter a domain in the __Add this website in the zone__ field. Ensure the fully qualified domain name is in the following format: ```https://<server>.<domain>.com```

__Step 5 –__ Click the __Add__ button. Close the Local intranet window.

__Step 6 –__ On the Internet Properties window, click the __Apply__ button.

Authentication will now pass through Windows Authentication and bypass SSO configuration Prompts for credentials via Browser pop-up

__NOTE:__ A list of allowed authentication servers can also be configured using the AuthServerAllowList policy.
