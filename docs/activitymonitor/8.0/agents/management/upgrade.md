---
title: Update AD Agent Installer
sidebar_label: Agent Upgrade
description: Update and upgrade Activity Monitor AD agent installers including downloading updates from Customer Portal and installation procedures.
---

# Update AD Agent Installer

Netwrix periodically releases updated AD Agent installation packages. Typically these updates are
associated with Microsoft KB’s (hot-fixes) which alter the LSASS components interfering with AD
Agent instrumentation.

Current customers can log in to the Netwrix Customer Portal to download software binaries and
license keys for purchased products. See the
[Customer Portal Access](https://helpcenter.netwrix.com/bundle/NetwrixCustomerPortalAccess/page/Customer_Portal_Access.html)
topic for information on how to register for a Customer Portal account. Navigate to the Netwrix
Threat Prevention Download section for the 7.5. Download the Threat Prevention Agent binary.

Then follow the steps to update the AD Agent installer used by the Activity Monitor Console.

**Step 1 –** On the Agents tab, select **Update Installer**. The Select Active Directory Module
installer package (SI Agent.exe) windowSelect Active Directory Module installer package (SI
Agent.exe) window opens.

![Update Agent Installer](/img/product_docs/activitymonitor/activitymonitor/install/updateagentinstaller.webp)

**Step 2 –** Navigate to the location of the latest AD Agent installation package. Select the
installer and click **Open**.

![Confirmation Window](/img/product_docs/activitymonitor/activitymonitor/install/updateagentinstallerpopup.webp)

**Step 3 –** A confirmation window opens displaying the version information for the selected
installer. Click **Yes** to update to this version or **No** to cancel the operation. A confirmation
window opens displaying the version information for the selected installer. Click **Yes** to update
to this version or **No** to cancel the operation.

The AD agent installer is update. Use the Install button on the Agents tab to upgrade the deployed
AD agents to the new version.

# Upgrade Procedure

The purpose of this chapter is to provide the basic steps needed for upgrading Activity Monitor. See
the [Software Compatibility & Versions](/docs/activitymonitor/8.0/getting-started/installation.md) section for information on integration with
other Netwrix products.

## Considerations

While it is strongly recommended to match the versions of both the console and the activity agent,
activity agent(s) V3.1+ can be managed by Activity Monitor Console V4.0+. Older versions of activity
agents will be limited in monitoring capability until upgraded.

The installation and configuration paths for Netwrix Activity Monitor 8.0 have been updated from
Activity Monitor 7.1. See the
[Netwrix Activity Monitor Paths](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u00000111AOCAY.html) article
for additional information.

## Activity Monitor Upgrade Procedure

Follow the steps to upgrade from the Netwrix Activity Monitor V7.1 to Netwrix Activity Monitor 8.0.

_Prerequisite_ – Ensure console and agent servers have .NET Framework 4.7.2 installed.

**Step 1 –** Install the Activity Monitor 8.0 on the same machine where the V7.1 console resides
following the instructions in the [Install Application](/docs/activitymonitor/8.0/getting-started/installation.md) section.

**CAUTION:** Launch the Activity Monitor Console and navigate to the Agents tab.

**_RECOMMENDED:_** Update the activity agents in batches to ensure continuity of monitoring.

**Step 2 –** Select the activity agent(s) to be upgraded. The Windows Ctrl-select option can be used
to select multiple activity agents. Then click Upgrade.

**Step 3 –** (_Optional_) Deploy AD agents to monitor domains.

**NOTE:** Upgraded licenses are required to monitor SharePoint and Active Directory search events
when upgrading to Activity Monitor 8.0.

The selected activity agents are updated to V8.0. If a Threat Prevention Agent is also installed on
the Windows server for monitoring file systems, the Monitored Hosts tab identifies the host as being
“Managed by Threat Prevention”, and that ‘monitored host’ is not editable. However, multiple outputs
can be configured for hosts. Add the Windows host to the Monitored Hosts tab to monitor file system
for outputs to Access Analyzer, Threat Manager, and/or SIEM products.
