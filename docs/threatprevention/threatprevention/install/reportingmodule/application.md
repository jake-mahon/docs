# Install the Netwrix Threat Manager Reporting Module

The application can be installed on the same server as the PostgreSQL databases or a different server. If installed on a different server, the location of the database server must be provided while installing the application.

Follow the steps to install the application.

__CAUTION:__ The PostgreSQL database application must be installed before the application is installed.

__NOTE:__ These steps assume you have launched the installer through the Netwrix Setup Launcher (```Netwrix_Setup.exe```). If you are not using it, right-click on ```NetwrixThreatManagerReporting.exe``` and select Run as administrator. Then skip to Step 2.

![postgresqlcheck](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/postgresqlcheck.png)

__Step 1 –__ Click __Netwrix Threat Manager Reporting__. The Netwrix Threat Manager Reporting Setup wizard opens.

![Netwrix Threat Mannager Reporting Setup wizard on the Install page](/img/product_docs/threatprevention/threatprevention/install/upgrade/install.png)

__Step 2 –__ Click __Install__.

![Netwrix Threat Mannager Reporting Setup wizard on the End User License Agreement page](/img/product_docs/activitymonitor/activitymonitor/install/eula.png)

__Step 3 –__ Read the End User License Agreement and select the I accept the license agreement checkbox. Click __Next__.

![Netwrix Threat Mannager Reporting Setup wizard on the Install Folder page](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/folder.png)

__Step 4 –__ By default, the installation directory is set to:

- Install Folder – C:\Program Files\STEALTHbits\StealthDEFEND

Optionally, enter a new path or use the __Browse__ button to modify as desired. Click Next.

![Netwrix Threat Mannager Reporting Setup wizard on the Database page](/img/product_docs/threatprevention/threatprevention/install/database.png)

__Step 5 –__ On the Database page, ensure the host and port are set correctly. If installing on the same server where the PostgreSQL database application was installed, this information will be accurate by default. The default database name is stealthdefend; however, it can be modified as desired. Click __Test__ to validate the connection information.

![Warning message that the database does not exist, Create?](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/databasecreatemessage.png)

__Step 6 –__ If a successful connection is made, a message window displays confirming the database does not exist and you want to create it. Click __OK__ and the window closes.

![Netwrix Threat Mannager Reporting Setup wizard on the Database page showing Ready for installation message](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/databaseready.png)

__Step 7 –__ A "Ready for installation" message appears on the Database page of the wizard and the Next button is enabled. Click __Next__.

![Netwrix Threat Mannager Reporting Setup wizard on the Firewall Rules page](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/firewallrules.png)

__Step 8 –__ By default, the __Create Inbound Windows Firewall Rules__ checkbox is selected, indicating that the installer will create these. Deselect the checkbox if you do not want the installer to automatically create these rules because you have already created them. Click __Next__.

![Netwrix Threat Mannager Reporting Setup wizard on the Completed page](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.png)

__Step 9 –__ The installation process will begin and the Setup wizard will display the progress. Click Exit when the installation completes successfully. The Netwrix Threat Manager Reporting Setup wizard closes.

![Netwrix Setup Launcher showingThreat Manager Reporting Setup completed](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/applicationcheck.png)

__Step 10 –__ Now that both components have been installed, close the Netwrix Setup Launcher.

The Netwrix Threat Manager Reporting Module application is now installed and the database has been created. There are several post-installation tasks that you may need to complete, depending on your environment.

- [Secure the Reporting Module Console](/docs/threatprevention/threatprevention/install/reportingmodule/secure.md)
- During the first launch, you will set up the built-in Administrator account. See the [First Launch](/docs/threatprevention/threatprevention/install/reportingmodule/firstlaunch.md) topic for additional information.
