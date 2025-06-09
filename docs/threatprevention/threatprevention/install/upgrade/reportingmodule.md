# Upgrade the Reporting Module

This topic provides the steps needed to upgrade the Netwrix Threat Manager Reporting Module from v2.8 to 3.0.

The upgrade process involves the following steps:

- Upgrade PostgreSQL

- Upgrade the Netwrix Threat Manager Reporting Module

## Upgrade PostgreSQL

Threat Manager Reporting v2.8 used PostgreSQL v14.8.x while v3.0 uses PostgreSQL v14.13.x.

Follow the steps to upgrade from PostgreSQL 14.8.x to 14.13.x.

__Step 1 –__ Run ```Netwrix_Setup.exe``` as an administrator. The Netwrix Setup Launcher window is displayed.

![Netwrix Threat Manager Setup window](/img/product_docs/threatprevention/threatprevention/install/upgrade/tm3installation.png)

__Step 2 –__ Click __PostgreSQL Setup__ to upgrade the PostgreSQL version. The following message is displayed, indicating the currently installed version:

![Threat Manager Reporting - Upgrade DB Confirmation dialog box](/img/product_docs/threatprevention/threatprevention/install/upgrade/upgradedbprompt.png)

__Step 3 –__ Click __OK__ to upgrade. The Netwrix PostgreSQL Setup wizard opens.

![Netwrix PostgreSQL Setup wizard](/img/product_docs/threatprevention/threatprevention/install/upgrade/install.png)

__Step 4 –__ Click __Install__.

![Netwrix PostgreSQL Setup wizard on the EULA page](/img/product_docs/activitymonitor/activitymonitor/install/eula.png)

__Step 5 –__ Read the End User License Agreement and select the I accept the license agreement checkbox. Click Next.

__Step 6 –__ The installation begins and the installer displays a Setup Progress window. Click Exit when the installation is successful to close the wizard.

PostgreSQL has been upgraded.

## Upgrade Threat Manager Reporting from 2.8 to 3.0

Follow the steps to upgrade from Threat Manager Reporting 2.8 to 3.0.

__Step 1 –__ Run ```Netwrix_Setup.exe``` as an administrator. The Netwrix Setup Launcher window is displayed.

![Netwrix Threat Manager Setup window](/img/product_docs/threatprevention/threatprevention/install/upgrade/tm3installation.png)

__Step 2 –__ Click __Netwrix Threat Manager Setup__ to upgrade to version 3.0 of the Netwrix Threat Manager Reporting Module. The following message is displayed:

![Threat Manager Reporting - Upgrade Application Confirmation dialog box](/img/product_docs/threatprevention/threatprevention/install/upgrade/upgradeappprompt.png)

__Step 3 –__ Click __OK__ to upgrade. The Netwrix Threat Manager Reporting Setup wizard opens.

![Netwrix Threat Mannager Reporting Setup wizard - Install page](/img/product_docs/threatprevention/threatprevention/install/upgrade/install.png)

__Step 4 –__ To follow through the steps of the wizard for upgrade, see the [Install the Netwrix Threat Manager Reporting Module](/docs/threatprevention/threatprevention/install/reportingmodule/application.md) topic, starting at Step 2.

Threat Manager Reporting is upgraded from 2.8 to 3.0. Remember to clear your web browser's cache after the upgrade.
