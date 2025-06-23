---
title: Initial Setup and Scanner Configuration
sidebar_label: Initial Setup
description: Configure Platform Governance scanners, set up automated scans, and run the getting started wizard to complete your initial implementation.
---

# Set Up the Initial Scan

The Metadata Scanner form is displayed.

![getting_started_wizard5](/img/product_docs/platgovsalesforce/installing_strongpoint/getting_started_wizard5.webp)

## Sandbox Options

If you are installing in a sandbox, there is an option for **Change Log Creation**. If **Enabled**,
change logs are created in the sandbox. Due to Salesforce space limits on different
[sandbox accounts](https://help.salesforce.com/articleView?id=data_sandbox_environments.htmandtype=5),
you may want to disable change logs to save space. This option can also be accessed on the
[Configuration and Stats](/docs/platgovsalesforce/administration/platform-configuration.md) page for the sandbox.

Here are the options for a Sandbox installation. Be sure to **Save** each setting you change. Scroll
down to find the Scanner options.

![Sandbox installation options](/img/product_docs/platgovsalesforce/installing_strongpoint/getting_started_wizard5_sandbox.webp)

## Start Initial Scan

Scroll down to the Metadata Scanner section.

![Scroll to the Scanner section](/img/product_docs/platgovsalesforce/installing_strongpoint/getting_started_wizard5_scan.webp)

1. Click the + by **Name** to select all types for the initial scan.
2. Click **Run Scanner**. A notification message displays when the scan starts.
3. Click **Next**.

## Schedule Automatic Scans

You can schedule the scanners to auto-scan your environment:

1. Toggle **Enabled** to activate a scan. Hover over the **?** for details on the scan.
2. Select the **Frequency** and **Day**. If you do not specify a time Platform Governance for
   Salesforce rescans at midnight.

   ![getting_started_wizard6](/img/product_docs/platgovsalesforce/installing_strongpoint/getting_started_wizard6.webp)

   Netwrix recommends you schedule at least the following items:

   - **Automated Scan**: Daily
   - **Field Usage & DLU**: Weekly
   - **Standard Fields Scan**: Weekly
   - **PermissionSet Assignment**: Weekly (Production orgs)
   - **Subscriber Users Scan**: Weekly (Production orgs)

3. Click **Next**.

The final screen is displayed. Click **Done** to close the wizard.

![getting_started_wizard8](/img/product_docs/platgovsalesforce/installing_strongpoint/getting_started_wizard8.webp)

If you open the home page, you see the **Scanner Status** is **In Progress**.

![Scanner status on home page](/img/product_docs/platgovsalesforce/installing_strongpoint/getting_started_wizard11.webp)

**Next Step:** [Run the Scanner](/docs/platgovsalesforce/administration/scanners-and-automation.md)

# Run the Getting Started Wizard

The Getting Started Wizard helps you set up Platform Governance for Salesforce after you have done
the [basic installation](/docs/platgovsalesforce/getting-started/installation.md) and configuration.

To use the Getting Started Wizard:

1. Open **Netwrix Dashboard**.
2. Open **Settings**> **Getting Started Wizard**

The **Getting Started Wizard** opens to help you finish the configuration and set up.

## Choose Your License Type

On the Initial Setup Wizard page, choose the package type you have purchased. If you have an
Intelligent Change Management or Enterprise Compliance License, enter the **Input Authorization
Token** sent to you. Click **Next**.

![getting_started_wizard2](/img/product_docs/platgovsalesforce/installing_strongpoint/getting_started_wizard2.webp)

## Add your Credentials

Once you have chosen your license type, you need to add your credentials. If your credentials
change, an alert is sent to update the saved credentials. Expired credentials can cause auto
scanners to fail. Use **Netwrix Dashboard** > **Settings**> **SP Credentials** to update your
credentials.

![getting_started_wizard3](/img/product_docs/platgovsalesforce/installing_strongpoint/getting_started_wizard3.webp)

1. On the Credentials page, add the following values:

- **Salesforce Username**
- **Salesforce Password**
- **Salesforce Security Token**
- **Salesforce Consumer Key** Extracted when you created the Strongpoint Connected App
- **Salesforce Consumer Secret** Extracted when you created the Strongpoint Connected App

2. Click **Next**

## Test Your Connection

Once you have set up your credentials, you need to configure the remote site settings.

![Testing the connection](/img/product_docs/platgovsalesforce/installing_strongpoint/getting_started_wizard10.webp)

1. Open Salesforce **Setup** > **Security** > **Remote Site Settings**.
2. Click **New Remote Site**.

   ![New Remote Site](/img/product_docs/platgovsalesforce/installing_strongpoint/getting_started_new_rss.webp)

3. Copy/paste the information from the wizard to create the remote sites.
4. Click on **Test Connection**. **Test connection was Successful** is displayed if the connection
   succeeds. If the connection fails, the wizard suggests troubleshooting steps to resolve the
   issue.
5. Click **Next**.

**Next Step:** [Set Up the Initial Scan](/docs/platgovsalesforce/getting-started/initial-setup.md)

# Validate the Data

Accurate documentation is critical to support your change management and clean up processes.
Platform Governance for Salesforce has automated tools to enable you to ensure that your
customizations are documented properly.

## Status Report

You can validate data by checking the status report. The status report is available to download as a
PDF.

From the Netwrix Dashboard: click **Configuration and Stats** in the **Resources** section, or open
**Settings** > **Configuration and Stats**.

![statusreport](/img/product_docs/platgovsalesforce/installing_strongpoint/statusreport.webp)

## Dependency Relationship Diagram

You can check data by navigating through the Dependency Relationship Diagram (DRD) and selecting
object(s) types.

To validate data with the DRD:

1. Open **Netwrix Dashboard** > **Tools** > **Dependency Relationship Diagram**.
2. Select an **Object(s) Type** from the pull-down menu.
3. Click on a field and validate the data.

![entity_diagram](/img/product_docs/platgovsalesforce/tools/entity_diagram.webp)

## Customization Quick Search

The Customization Quick Search opens a report with all customizations. From this report, you can add
filters to find specific customizations that you need to validate the data.

To validate data with the Customization Quick Search:

1. Open **Netwrix Dashboard** > **Reports** > **Customizations** > **All Customizations**
2. Scroll, **Search** or add **Filter(s)** to locate the customization.
3. Click on the **Customization** and validate the data.

![custquicksearch](/img/product_docs/platgovnetsuite/customizations/custquicksearch.webp)
