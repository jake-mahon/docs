---
sidebar_position: 6253
title: Installing the SharePoint Agent
---

# Installing the SharePoint Agent

The installer will prompt for credentials which are used to set the identity that the SharePoint Access Auditor Agent service runs as. The agent service does no additional impersonation, so this is the account used to connect to and enumerate SharePoint. The service account credentials provided need to be a member of the Log on as a service local policy. Additionally, the credentials provided for Step 5 should also be a part of the Connection Profile used by the SharePoint Solution within the Access Analyzer Console. See the [SharePoint Scan Options](../../Requirements/Solutions/SharePoint/ScanOptions "SharePoint Scan Options") topic for detailed permission information.

Follow the steps to install the SharePoint Agent on the application server which hosts the Central Administration component of the targeted SharePoint farms.

**Step 1 –** Run the `SharePointAgent.exe` executable to open the Netwrix Access Analyzer (formerly Enterprise Auditor) SharePoint Agent Setup Wizard.

![SharePoint Agent Setup Wizard Welcome page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/SharePointAgent/Welcome.png "SharePoint Agent Setup Wizard Welcome page")

**Step 2 –** On the Welcome page, click **Next** to begin the installation.

![SharePoint Agent Setup Wizard End-User License Agreement page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/SharePointAgent/EULA.png "SharePoint Agent Setup Wizard End-User License Agreement page")

**Step 3 –** On the End-User License Agreement page, select the **I accept the terms in the License Agreement** checkbox and click **Next**.

![SharePoint Agent Setup Wizard Destination Folder page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/SharePointAgent/Destination.png "SharePoint Agent Setup Wizard Destination Folder page")

**Step 4 –** On the Destination Folder page, click **Next** to install to the default folder or click **Change** to select a different location.

![SharePoint Agent Setup Wizard Configure Service Security page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/SharePointAgent/ConfigureService.png "SharePoint Agent Setup Wizard Configure Service Security page")

**Step 5 –** On the Configure Service Security page, enter the **User Name** and **Password** for the SharePoint Service Account. Click **Next**.

![SharePoint Agent Setup Wizard Ready to install page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/SharePointAgent/Ready.png "SharePoint Agent Setup Wizard Ready to install page")

**Step 6 –** On the Ready to install Netwrix Access Analyzer (formerly Enterprise Auditor) SharePoint Agent page, click **Install** to start the installation.

![SharePoint Agent Setup Wizard Completed page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Install/SharePointAgent/Completed.png "SharePoint Agent Setup Wizard Completed page")

**Step 7 –** When the installation has completed, click **Finish** to exit the wizard.

Now that the SharePoint Agent has been installed on the appropriate application server, it can be used by the SharePoint Solution. See the [SharePoint Solution](../../Solutions/SharePoint/Overview "SharePoint Solution") topic for instructions on enabling agent service scans on the Agent Settings page.