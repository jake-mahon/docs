# Upgrade the Reporting Module

This topic provides the steps needed to upgrade the Netwrix Threat Manager Reporting Module from
v2.8 to 3.0.

The upgrade process involves the following steps:

- Upgrade PostgreSQL

- Upgrade the Netwrix Threat Manager Reporting Module

## Upgrade PostgreSQL

Threat Manager Reporting v2.8 used PostgreSQL v14.8.x while v3.0 uses PostgreSQL v14.13.x.

Follow the steps to upgrade from PostgreSQL 14.8.x to 14.13.x.

**Step 1 –** Run `Netwrix_Setup.exe` as an administrator. The Netwrix Setup Launcher window is
displayed.

![Netwrix Threat Manager Setup window](../../../../../static/img/product_docs/threatprevention/threatprevention/install/upgrade/tm3installation.webp)

**Step 2 –** Click **PostgreSQL Setup** to upgrade the PostgreSQL version. The following message is
displayed, indicating the currently installed version:

![Threat Manager Reporting - Upgrade DB Confirmation dialog box](../../../../../static/img/product_docs/threatprevention/threatprevention/install/upgrade/upgradedbprompt.webp)

**Step 3 –** Click **OK** to upgrade. The Netwrix PostgreSQL Setup wizard opens.

![Netwrix PostgreSQL Setup wizard](../../../../../static/img/product_docs/threatprevention/threatprevention/install/upgrade/install.webp)

**Step 4 –** Click **Install**.

![Netwrix PostgreSQL Setup wizard on the EULA page](../../../../../static/img/product_docs/activitymonitor/activitymonitor/install/eula.webp)

**Step 5 –** Read the End User License Agreement and select the I accept the license agreement
checkbox. Click Next.

**Step 6 –** The installation begins and the installer displays a Setup Progress window. Click Exit
when the installation is successful to close the wizard.

PostgreSQL has been upgraded.

## Upgrade Threat Manager Reporting from 2.8 to 3.0

Follow the steps to upgrade from Threat Manager Reporting 2.8 to 3.0.

**Step 1 –** Run `Netwrix_Setup.exe` as an administrator. The Netwrix Setup Launcher window is
displayed.

![Netwrix Threat Manager Setup window](../../../../../static/img/product_docs/threatprevention/threatprevention/install/upgrade/tm3installation.webp)

**Step 2 –** Click **Netwrix Threat Manager Setup** to upgrade to version 3.0 of the Netwrix Threat
Manager Reporting Module. The following message is displayed:

![Threat Manager Reporting - Upgrade Application Confirmation dialog box](../../../../../static/img/product_docs/threatprevention/threatprevention/install/upgrade/upgradeappprompt.webp)

**Step 3 –** Click **OK** to upgrade. The Netwrix Threat Manager Reporting Setup wizard opens.

![Netwrix Threat Mannager Reporting Setup wizard - Install page](../../../../../static/img/product_docs/threatprevention/threatprevention/install/upgrade/install.webp)

**Step 4 –** To follow through the steps of the wizard for upgrade, see the
[Install the Netwrix Threat Manager Reporting Module](../reportingmodule/application.md) topic,
starting at Step 2.

Threat Manager Reporting is upgraded from 2.8 to 3.0. Remember to clear your web browser's cache
after the upgrade.
