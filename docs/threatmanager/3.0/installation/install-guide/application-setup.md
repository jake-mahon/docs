---
title: Threat Manager Application Installation
sidebar_label: Application Setup
description: Step-by-step installation guide for Threat Manager application including database connection, service configuration, and setup completion.
---

# Install the Threat Manager Application

The application can be installed on the same server as the PostgreSQL databases or a different
server. If installed on a different server, the location of the database server must be provided
while installing the application.

Follow the steps to install the application.

**CAUTION:** The PostgreSQL database application must be installed before the application is
installed.

**NOTE:** These steps assume you have launched the installer through the Netwrix Setup Launcher
(`Netwrix_Setup.exe`). If you are not using it, right-click on `NetwrixThreatManager.exe` and select
Run as administrator. Then skip to Step 2.

![Netwrix Setup Launcher showing PostgreSQL Setup completed](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/postgresqlcheck.webp)

**Step 1 –** Click **Netwrix Threat Manager Setup**. The Netwrix Threat Manager Setup wizard opens.

![Netwrix Threat Manager Setup wizard ](/img/product_docs/threatmanager/threatmanager/install/installtm3.0.webp)

**Step 2 –** Click **Install**.

![Netwrix Threat Manager Setup wizard EULA page](/img/product_docs/threatmanager/threatmanager/install/tm3eula.webp)

**Step 3 –** Read the End User License Agreement and select the I accept the license agreement
checkbox. Click **Next**.

![Netwrix Threat Manager Setup wizard Install Folder page](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/folder.webp)

**Step 4 –** By default, the installation directory is set to:

- Install Folder – C:\Program Files\STEALTHbits\StealthDEFEND

Optionally, enter a new path or use the **Browse** button to modify as desired. Click Next.

![Netwrix Threat Manager Setup wizard Connect to the Database page](/img/product_docs/threatprevention/threatprevention/install/database.webp)

**Step 5 –** On the Database page, ensure the host and port are set correctly. If installing on the
same server where the PostgreSQL database application was installed, this information will be
accurate by default. The default database name is stealthdefend; however, it can be modified as
desired. Click **Test** to validate the connection information.

For example, if you change the default database name from stealthdefend to threatmanager and click
**Test**.

![Warning message that the database does not exist, Create?](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/databasecreatemessage.webp)

**Step 6 –** If a successful connection is made, a message window displays confirming the database
does not exist and you want to create it. Click **OK** and the window closes.

**Step 7 –** A "Ready for installation" message appears on the Database page of the wizard and the
Next button is enabled. Click **Next**.

**NOTE:** If PostgreSQL is installed on a different host, then the connection details should be
updated accordingly.

![Netwrix Threat Manager Setup wizard Firewall Rules page](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/firewallrules.webp)

**Step 8 –** By default, the **Create Inbound Windows Firewall Rules** checkbox is selected,
indicating that the installer will create these. Deselect the checkbox if you do not want the
installer to automatically create these rules because you have already created them. Click **Next**.

![Netwrix Threat Manager Setup wizard Completed Successfully page](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.webp)

**Step 9 –** The installation process will begin and the Setup wizard will display the progress.
Click Exit when the installation completes successfully. The Netwrix Threat Manager Setup wizard
closes.

![Netwrix Setup Launcher with Threat Manager Setup check](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/applicationcheck.webp)

**Step 10 –** Now that both components have been installed, close the Netwrix Setup Launcher.

The Threat Manager application is now installed and the database has been created. There are several
post-installation tasks that you may need to complete, depending on your environment. See the
following topics for additional information:

- [Optionally Install the Action Service on Additional Servers](/docs/threatmanager/3.0/installation/install-guide/action-service-setup.md)
- [Secure the Threat Manager Console](/docs/threatmanager/3.0/installation/security/secure-deployment.md)
- During the first launch, you will set up the built-in Administrator account. See the
  [First Launch](/docs/threatmanager/3.0/installation/install-guide/first-launch.md) topic for additional information.
