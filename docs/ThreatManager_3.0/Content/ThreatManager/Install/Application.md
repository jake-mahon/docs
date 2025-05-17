---
sidebar_position: 2436
title: Install the Threat Manager Application
---

# Install the Threat Manager Application

The application can be installed on the same server as the PostgreSQL databases or a different server. If installed on a different server, the location of the database server must be provided while installing the application.

Follow the steps to install the application.

**CAUTION:** The PostgreSQL database application must be installed before the application is installed.

**NOTE:**  These steps assume you have launched the installer through the Netwrix Setup Launcher (`Netwrix_Setup.exe`). If you are not using it, right-click on `NetwrixThreatManager.exe` and select Run as administrator. Then skip to Step 2.

![Netwrix Setup Launcher showing PostgreSQL Setup completed](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Setup/PostgreSQLCheck.png "Netwrix Setup Launcher showing PostgreSQL Setup completed")

**Step 1 –** Click **Netwrix Threat Manager Setup**. The Netwrix Threat Manager Setup wizard opens.

![Netwrix Threat Manager Setup wizard ](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Application/InstallTM3.0.png "Netwrix Threat Manager Setup wizard")

**Step 2 –** Click **Install**.

![Netwrix Threat Manager Setup wizard EULA page](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Application/TM3EULA.png "Netwrix Threat Manager Setup wizard EULA page")

**Step 3 –** Read the End User License Agreement and select the I accept the license agreement checkbox. Click **Next**.

![Netwrix Threat Manager Setup wizard Install Folder page](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Application/Folder.png "Netwrix Threat Manager Setup wizard Install Folder page")

**Step 4 –** By default, the installation directory is set to:

* Install Folder – C:\Program Files\STEALTHbits\StealthDEFEND

Optionally, enter a new path or use the **Browse** button to modify as desired. Click Next.

![Netwrix Threat Manager Setup wizard Connect to the Database page](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Application/Database.png "Netwrix Threat Manager Setup wizard Connect to the Database page")

**Step 5 –** On the Database page, ensure the host and port are set correctly. If installing on the same server where the PostgreSQL database application was installed, this information will be accurate by default. The default database name is stealthdefend; however, it can be modified as desired. Click **Test** to validate the connection information.

For example, if you change the default database name from stealthdefend to threatmanager and click **Test**.

![Warning message that the database does not exist, Create?](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Application/DatabaseCreateMessage.png "Warning message that the database does not exist, Create?")

**Step 6 –** If a successful connection is made, a message window displays confirming the database does not exist and you want to create it. Click **OK** and the window closes.

**Step 7 –** A "Ready for installation" message appears on the Database page of the wizard and the Next button is enabled. Click **Next**.

**NOTE:** If PostgreSQL is installed on a different host, then the connection details should be updated accordingly.

![Netwrix Threat Manager Setup wizard Firewall Rules page](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Application/FirewallRules.png "Netwrix Threat Manager Setup wizard Firewall Rules page")

**Step 8 –** By default, the **Create Inbound Windows Firewall Rules** checkbox is selected, indicating that the installer will create these. Deselect the checkbox if you do not want the installer to automatically create these rules because you have already created them. Click **Next**.

![Netwrix Threat Manager Setup wizard Completed Successfully page](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Application/Completed.png "Netwrix Threat Manager Setup wizard Completed Successfully page")

**Step 9 –** The installation process will begin and the Setup wizard will display the progress. Click Exit when the installation completes successfully. The Netwrix Threat Manager Setup wizard closes.

![Netwrix Setup Launcher with Threat Manager Setup check](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Setup/ApplicationCheck.png "Netwrix Setup Launcher with Threat Manager Setup check")

**Step 10 –** Now that both components have been installed, close the Netwrix Setup Launcher.

The Threat Manager application is now installed and the database has been created. There are several post-installation tasks that you may need to complete, depending on your environment. See the following topics for additional information:

* [Optionally Install the Action Service on Additional Servers](ActionService "Optionally Install the Action Service on Additional Servers")
* [Secure the Threat Manager Console](Secure "Secure the StealthDEFEND Console")
* During the first launch, you will set up the built-in Administrator account. See the [First Launch](FirstLaunch "First Launch") topic for additional information.