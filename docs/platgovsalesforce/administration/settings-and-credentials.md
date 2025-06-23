---
title: Settings and Credentials Management
sidebar_label: Settings & Credentials
description: Manage Platform Governance settings, configure credentials for connected apps, test connections, and access configuration tools and wizards.
---

# Settings Overview

The Settings menu is located on the Netwrix Dashboard page.

The Settings tab accesses:

- **Getting Started Wizard** guides you through the installation process.
- **Configuration and Stats** is a live report of your Automated Documentation system.
- **Platform Governor Status** is a live status update of the Usage of SFDC Governor Limit.
- **Netwrix Knowledge Center**: opens the Netwrix Knowledge Center.
- **SP Credentials/Test Connection** sets up the credentials for the connected app. Required to run
  Scanners. Tests the connection to help troubleshoot connectivity issues.
- **Upgrade / Downgrade Package** modifies your license.

# Credentials

Credentials organizes your user credentials across all environments It is available from **Netwrix
Dashboard** > **Settings** > **SP Credentials**

![credentials_handler](/img/product_docs/platgovsalesforce/settings/credentials_handler.webp)

You must create a Connected App to run the scanner. Refer to
[Install Platform Governance for Salesforce](/docs/platgovsalesforce/getting-started/installation.md)
for instructions.

Click **New** to add a new credential or **Edit** and existing credential. **Search** finds and
filters information from the current credentials list.

Use the **Test Connection** to verify your credentials.

Click **Save** when complete.

## Credentials for Environment Comparison

When you follow the **Click here to proceed** link on the Environment Comparison tool, it opens the
Credentials Handler where you can add, edit and sync your credentials.

![Credentials Handler](/img/product_docs/platgovsalesforce/settings/credentials_list.webp)

Click **New** to add a new credential or **Edit** and existing credential. **Search** finds and
filters information from the current credentials list.

![credentials_handler_edit](/img/product_docs/platgovsalesforce/settings/credentials_handler_edit.webp)

1. Enter or edit the environment and credential information. Check **Sandbox** if applicable.
2. Click **Save**.
3. Click **Test Connection**. A banner is displayed indicating either success or an error with the
   credentials.
