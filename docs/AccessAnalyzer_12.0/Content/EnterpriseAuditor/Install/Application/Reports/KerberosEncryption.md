---
sidebar_position: 6265
title: Manage Kerberos Encryption Warning for the Web Console
---

# Manage Kerberos Encryption Warning for the Web Console

If a computer's Local Security Policy, or applicable Group Policy, enforces certain encryption methods for Kerberos authentication, then the service account running the Access Analyzer Web Server must support the same encryption methods.

If encryption methods have been configured for Kerberos on the Access Analyzer server but not on the service account running the Access Analyzer Web Server service, then users will not be able to log-in to the Web Console and will receive the below error message.

![Kerberos Error Message](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/Reports/KerberosErrorMessage.png "Kerberos Error Message")

When this occurs, the following error will be logged:

*ERROR - Unhandled server error: Nancy.RequestExecutionException: Oh noes! ---> System.Security.SecurityException: The encryption type requested is not supported by the KDC*.

This error will be logged in the following location:

%SAINSTALLDIR%\SADatabase\Logs\Web\service.log

While it is not required to configure these settings, this section provides the locations and steps necessary to configure encryption methods in Local and Group policies to allow Kerberos for the Report Index if an error does occur.

## Local Security Policies

Follow the steps to configure a Local Security Policy to allow Kerberos.

**Step 1 –** Open the Local Security Policy window.

![Local Security Policy Window](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/Reports/LocalSecurityPolicyWindow.png "Local Security Policy Window")

**Step 2 –** From the Security Settings list, navigate to **Local Policies** > **Security Options**.

**Step 3 –** Right-click the **Network Security: Configure encryption types allows for Kerberos** policy > click **Properties**.

![Configure Local Security Setting Window](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/Reports/ConfigureLocalSecuritySettingWindow.png "Configure Local Security Setting Window")

**Step 4 –** Configure necessary settings by checking each applicable box.

**Step 5 –** Click **Apply**, then click **OK**.

A Local Security Policy has been configured to allow encryption methods for Kerberos. Proceed to the [Configure Active Directory Users and Computers Settings to allow Kerberos](#Configur2 "Configure Active Directory Users and Computers Settings to allow Kerberos") section of this topic to ensure Active Directory Users and Computer settings are configured to allow the encryption methods for Kerberos.

## Group Security Policy

Follow the steps to configure a Local Group Security Policy to allow Kerberos.

**Step 1 –** Open the Local Group Policy Editor window.

![Local Group Policy Editor window](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/Reports/LocalGroupPolicyWindow.png "Local Group Policy Editor window")

**Step 2 –** From the Local Computer Policy list, navigate to **Computer Configuration** > **Windows Settings** > **Security Settings** > **Local Policies** > **Security Options** folder .

**Step 3 –** Right-click the **Network Security: Configure encryption types allows for Kerberos** policy, then click **Properties**.

![Configure Local Security Setting Window](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/Reports/ConfigureLocalSecuritySettingWindow.png "Configure Local Security Setting Window")

**Step 4 –** Configure necessary settings by checking each applicable box.

**Step 5 –** Click **Apply**, then click **OK**.

A Local Group Security Policy has been configured to allow encryption methods for Kerberos. Proceed to the [Configure Active Directory Users and Computers Settings to allow Kerberos](#Configur2 "Configure Active Directory Users and Computers Settings to allow Kerberos") section of this topic to ensure Active Directory Users and Computer settings are configured to allow the encryption methods for Kerberos.

## Configure Active Directory Users and Computers Settings to allow Kerberos

Follow the steps to ensure the settings for Active Directory Users and Computers are configured to allow the encryption methods to allow Kerberos. Configurations selected in this section should reflect the configuration options selected in the two sections above. See the [Local Security Policies](#Local "Local Security Policies") and [Group Security Policy](#Group "Group Security Policy") topics for additional information.

**Step 1 –** Open the Active Directory Users and Computers window.

![Active Directory Users and Computers Window](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/Reports/ActiveDirectoryUsersandComputersWindows.png "Active Directory Users and Computers Window")

**Step 2 –** Click and expand the Domain from the left-hand menu and click **Users**.

**Step 3 –** Right-click a **User** from the list of available users, then click **Properties**.

![User Properties Window](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/Reports/UserPropertesWindow.png "User Properties Window")

**Step 4 –** Click the **Account** tab.

**Step 5 –** Locate the appropriate Account options and check the corresponding boxes.

**Step 6 –** Click **Apply**, then click **OK**.

Active Directory Users and Computer settings have been configured to allow the encryption methods for Kerberos. These settings should match the configuration options for Local Security Policies and Local Group Policies.