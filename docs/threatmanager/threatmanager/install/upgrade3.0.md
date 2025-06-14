# Upgrade Threat Manager from 2.8 to 3.0

The upgrade process from Threat Manager 2.8 to 3.0 involves the following steps:

- Upgrade PostgreSQL 

- Install Threat Manager 3.0

## Upgrade PostgreSQL

Follow the steps to upgrade from PostgreSQL 14.8.x to 14.13.x.

__Step 1 –__ Run ```Netwrix_Setup.exe``` as an administrator. The Netwrix Setup Launcher window is displayed.

![Netwrix Threat Manager Setup window](/img/product_docs/threatprevention/threatprevention/install/upgrade/tm3installation.webp)

__Step 2 –__ Click __PostgreSQL Setup__ to upgrade the PostgreSQL version. The following message is displayed, indicating the currently installed version:

![Threat Manager Reporting - Upgrade DB Confirmation dialog box](/img/product_docs/threatprevention/threatprevention/install/upgrade/upgradedbprompt.webp)

__Step 3 –__ Click __OK__ to upgrade. The Netwrix PostgreSQL Setup wizard opens.

![Netwrix PostgreSQL Setup wizard](/img/product_docs/threatprevention/threatprevention/install/upgrade/install.webp)

__Step 4 –__ Click __Install__.

![Netwrix PostgreSQL Setup wizard on the EULA page](/img/product_docs/activitymonitor/activitymonitor/install/eula.webp)

__Step 5 –__ Read the End User License Agreement and select the I accept the license agreement checkbox. Click Next.

__Step 6 –__ The installation begins and the installer displays a Setup Progress window. Click Exit when the installation is successful to close the wizard.

PostgreSQL has been upgraded.

__NOTE:__ If you have any antivirus or Endpoint Detection and Response (EDR) software installed on your machine, make sure you have excluded all of the files from the following directories from all antivirus scans:

- \Program Files\Stealthbits\PostgreSQL14
- \ProgramData\Stealthbits\PostgreSQL14
- \Program Files\Stealthbits\StealthDEFEND

PostgreSQL may fail to start or behave unexpectedly when monitored by any tool.

## Install Threat Manager 3.0

__Step 1 –__ Click the Netwrix Threat Manager __Setup__ button on the Netwrix Threat Manager setup window. The following message displays:

![Existing Threat Manager version message](/img/product_docs/threatmanager/threatmanager/install/existingtmvver.webp)

__Step 2 –__  Click __OK__. The following window is displayed:

![Install Threat Manager 3.0 Page](/img/product_docs/threatmanager/threatmanager/install/installtm3.0.webp)

__Step 3 –__ Click __Install__.

![Install Netwrix Threat Manager 3.0 page](/img/product_docs/threatmanager/threatmanager/install/tm3eula.webp)

__Step 4 –__ On the End User License Agreement page, review and accept the licensing agreement and then click __Next__.

![Threat Manager 3.0 Defalt Setup Folder](/img/product_docs/threatmanager/threatmanager/install/tm3defaultfolder.webp)

__Step 5 –__ By default, the installation directory is set to:

C:\Program Files\STEALTHbits\StealthDEFEND\

Enter a new path or use the Browse button to modify as desired. Click __Next__.

![Connect to a Threat Manager Database page](/img/product_docs/threatmanager/threatmanager/install/tmdatababse.webp)

__Step 6 –__ On the database page, ensure the host and port are set correctly.

__NOTE:__ If installing on the same server where the PostgreSQL database application was installed, this information will be accurate by default. The default database name is stealthdefend; however, it can be modified as desired.

__Step 7 –__ Click __Test__ to validate the connection information.

__Step 8 –__ After successful validation, click __Next__.

![Firewall Rules Page of Threat Manager Installation wizard](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/firewallrules.webp)

__Step 9 –__ By default, the installer will Create Inbound Windows Firewall Rules. Deselect the checkbox if you do not want the installer to automatically create these rules, because you have already created them. Click __Next__.

![Threat Manager Installation Progress page](/img/product_docs/threatmanager/threatmanager/install/installprogress.webp)

__Step 10 –__ The installation process will begin and the Setup wizard will display the progress.

![Threat Manager 3.0 Installed Successfully page](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.webp)

__Step 11 –__ Click __Exit__ when the installation completes successfully. The Netwrix Threat Manager Setup wizard closes.

__Step 12 –__  Now that both components have been installed, close the Netwrix Threat Manager Setup Launcher.

Threat Manager 3.0 is now installed, and the database has been upgraded.

___RECOMMENDED:___ After successfully upgrading to the latest Threat Manager version, clear your browser cache for better performance and user experience.
