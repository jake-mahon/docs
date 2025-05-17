---
sidebar_position: 4843
title: Nutanix Appliance Access & Sensitive Data Auditing Configuration
---

# Nutanix Appliance Access & Sensitive Data Auditing Configuration

The credentials used to run Access Analyzer scans on Nutanix appliances must have the **Backup Admin: Backup Access only** role assigned.

## Nutanix Prism Central Interface

Follow the steps to configure the required account in the Nutanix Prism Central Interface.

**Step 1 –** Select the **Home** dropdown and select **File Server**.

**Step 2 –** On the file server page, under actions select **Launch Files Console**.

**Step 3 –** On the new files URL page, locate the **Configuration** dropdown and select **Manage Roles**.

![Nutanix Backup Admin: Backup Access only role](../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/Config/NutanixBackupAdminRole.png "Nutanix Backup Admin: Backup Access only role")

**Step 4 –** On the Manage Roles window, add an account with the **Backup Admin: Backup Access only** role.

This account must be used for running the Access Analyzer scans on Nutanix appliances.