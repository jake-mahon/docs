---
sidebar_position: 6913
title: Install the Netwrix Threat Manager Reporting Module
---

# Install the Netwrix Threat Manager Reporting Module

The application can be installed on the same server as the PostgreSQL databases or a different server. If installed on a different server, the location of the database server must be provided while installing the application.

Follow the steps to install the application.

**CAUTION:** The PostgreSQL database application must be installed before the application is installed.

**NOTE:** These steps assume you have launched the installer through the Netwrix Setup Launcher (`Netwrix_Setup.exe`). If you are not using it, right-click on `NetwrixThreatManagerReporting.exe` and select Run as administrator. Then skip to Step 2.

![](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Install/ReportingSetup/PostgreSQLCheck.png)

**Step 1 –** Click **Netwrix Threat Manager Reporting**. The Netwrix Threat Manager Reporting Setup wizard opens.

![Netwrix Threat Mannager Reporting Setup wizard on the Install page](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Install/ReportingInstall/Install.png "Netwrix Threat Mannager Reporting Setup wizard on the Install page")

**Step 2 –** Click **Install**.

![Netwrix Threat Mannager Reporting Setup wizard on the End User License Agreement page](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Install/ReportingInstall/EULA.png "Netwrix Threat Mannager Reporting Setup wizard on the End User License Agreement page")

**Step 3 –** Read the End User License Agreement and select the I accept the license agreement checkbox. Click **Next**.

![Netwrix Threat Mannager Reporting Setup wizard on the Install Folder page](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Install/ReportingInstall/Folder.png "Netwrix Threat Mannager Reporting Setup wizard on the Install Folder page")

**Step 4 –** By default, the installation directory is set to:

* Install Folder – C:\Program Files\STEALTHbits\StealthDEFEND

Optionally, enter a new path or use the **Browse** button to modify as desired. Click Next.

![Netwrix Threat Mannager Reporting Setup wizard on the Database page](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Install/ReportingInstall/Database.png "Netwrix Threat Mannager Reporting Setup wizard on the Database page")

**Step 5 –** On the Database page, ensure the host and port are set correctly. If installing on the same server where the PostgreSQL database application was installed, this information will be accurate by default. The default database name is stealthdefend; however, it can be modified as desired. Click **Test** to validate the connection information.

![Warning message that the database does not exist, Create?](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Install/ReportingInstall/DatabaseCreateMessage.png "Warning message that the database does not exist, Create?")

**Step 6 –** If a successful connection is made, a message window displays confirming the database does not exist and you want to create it. Click **OK** and the window closes.

![Netwrix Threat Mannager Reporting Setup wizard on the Database page showing Ready for installation message](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Install/ReportingInstall/DatabaseReady.png "Netwrix Threat Mannager Reporting Setup wizard on the Database page showing Ready for installation message")

**Step 7 –** A "Ready for installation" message appears on the Database page of the wizard and the Next button is enabled. Click **Next**.

![Netwrix Threat Mannager Reporting Setup wizard on the Firewall Rules page](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Install/ReportingInstall/FirewallRules.png "Netwrix Threat Mannager Reporting Setup wizard on the Firewall Rules page")

**Step 8 –** By default, the **Create Inbound Windows Firewall Rules** checkbox is selected, indicating that the installer will create these. Deselect the checkbox if you do not want the installer to automatically create these rules because you have already created them. Click **Next**.

![Netwrix Threat Mannager Reporting Setup wizard on the Completed page](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Install/ReportingInstall/Completed.png "Netwrix Threat Mannager Reporting Setup wizard on the Completed page")

**Step 9 –** The installation process will begin and the Setup wizard will display the progress. Click Exit when the installation completes successfully. The Netwrix Threat Manager Reporting Setup wizard closes.

![Netwrix Setup Launcher showingThreat Manager Reporting Setup completed](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Install/ReportingSetup/ApplicationCheck.png "Netwrix Setup Launcher showingThreat Manager Reporting Setup completed")

**Step 10 –** Now that both components have been installed, close the Netwrix Setup Launcher.

The Netwrix Threat Manager Reporting Module application is now installed and the database has been created. There are several post-installation tasks that you may need to complete, depending on your environment.

* [Secure the Reporting Module Console](Secure "Secure the Reporting Module Console")
* During the first launch, you will set up the built-in Administrator account. See the [First Launch](FirstLaunch "First Launch") topic for additional information.