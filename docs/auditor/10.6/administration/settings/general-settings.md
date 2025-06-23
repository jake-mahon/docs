---
title: settings general settings
sidebar_label: general-settings
description: Auditor 10.6 administration guide for settings general settings configuration and management.
---

# About Netwrix Auditor

The About Netwrix Auditor tab contains complete information on the product:

| Option                                                                            | Description                                                                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Netwrix Auditor                                                                   | Review current version of Netwrix Auditor.                                                                                        |
| Check for updates                                                                 | Select to check for available updates now. ﻿                                                                                      |
| Check for updates automatically and show notifications about new product versions | Netwrix Auditor periodically checks for updates so you don’t have to. When an update is available, a user is immediately noticed. |
| Getting Help                                                                      | Click the link to visit Netwrix Auditor Help Center and access configuration guidelines and step-by-step instructions online.     |

# General

On the General tab you can configure global Netwrix Auditor settings, e.g., self-audit, tags,
accounts and passwords.

Review the following for additional information:

| Option                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Self-audit                        | Select to enable data collection for product self-auditing. Self-audit allows tracking every change to monitoring plan, data source, and audit scope and details about it (before-after values) so that you know that scope of data to be audited is complete and changed only in line with workflows adopted by our organization. Review the following for additional information: - [Netwrix Auditor Operations and Health](/docs/auditor/10.6/features/health-monitoring/index.md)                                                                                                                                                          |
| Netwrix Auditor  usage statistics | It is optional on your part to help Netwrix improve the quality, reliability, and performance of Netwrix products and services. If selected, Netwrix collects statistical information on how the Licensee uses the product in accordance with applicable law. Visit [Netwrix Corporation Software License Agreement](https://www.netwrix.com/eula.html) for additional information about the program. You can review a sample piece of data if you are interested in data acquired by Netwrix.                                                                                                                                                 |
| Tags                              | Netwrix Auditor  allows you to apply tags when creating an alert. With alerts, you can distinguish one alert from another, create groups of similar alerts, etc. The Tags page contains a complete list of alerts that were ever created in the product. See the [Alerts](/docs/auditor/10.6/features/alerts/index.md) topic for additional information. Currently, you cannot assign or create tags on this page. To apply tags to an alert, navigate to alert settings and locate the Apply tags section on the General tab. See the [Create Alerts](/docs/auditor/10.6/features/alerts/alert-settings.md) topic for additional information. |
| Account and passwords             | Netwrix Auditor  allows you to assign different accounts for monitoring plans. Click **Manage** to review the full list of accounts and associated auditing scope. You can also change accounts' password if necessary.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Access Reviews                    | Netwrix Auditor supports integration with Netwrix Auditor Access Reviews, which enables business owners to conduct resource and group reviews and recommend changes. See the [Access Reviews](/docs/auditor/10.6/features/access-reviews/index.md) topic for additional information.                                                                                                                                                                                                                                                                                                                                                           |

# Sensitive Data Discovery

Sensitive Data Discovery is an integration module between Auditor and Netwrix Data Classification.
It allows Auditor users to generate reports and configure alerts and search for the sensitive data
collected and classified with Netwrix Data Classification (NDC). Refer to the following
documentation to learn more about NDC:

- [ ](https://helpcenter.netwrix.com/bundle/DataClassification_5.6.2/page/NDC_Overview.html)[Netwrix Data Classification Documentation](https://helpcenter.netwrix.com/category/dataclassification)

The integration can be configured for the following Auditor data sources:

SharePoint

- SharePoint
- SharePoint Online

File Storage Systems

- Windows File Servers
- Dell
- Netapp
- Nutanix Files
- Qumulo
- Synology

Databases

- SQL Server

The following integration options are available:

- NDC SQL Database Provider – This integration allows users to generate State-in-Time reports
  showing data categories for the sensitive data classified with Netwrix Data Classification.
  Available for File storage systems, SharePoint, and SharePoint Online.
- NDC Endpoint Provider – This integration allows users to receive alerts triggered by specific
  events related to the sensitive data classified with Netwrix Data Classification. When enabled,
  Netwrix users can also browse sensitive data with the search. Available for File storage systems
  (including Windows file server, Dell, NetApp, Nutanix File server, Synology, and Qumulo),
  SharePoint Online, and SQL Server.

This section lists all requirements for monitoring plans configuration and required versions of
Netwrix Auditor and Netwrix Data Classification. Also, it lists requirements for the accounts used
by Sensitive Data Discovery .

## Permissions for Integration with Netwrix Data Classification

The account must be granted the following rights and permissions:

- The Database datareader server role must be assigned to the account on the SQL Server instance
  where the NDC SQL database resides.

Netwrix recommends using different accounts to connect to the SQL Server instances where NDC SQL
database and Categories database reside.

**NOTE:** Netwrix Data Classification and Netwrix Auditor integration (NDC Provider) currently does
not support Single Sign-On. Single Sign-on needs to be disabled in Netwrix Data Classification in
order for the account used by the NDC Provider to authenticate.

The account you are using for integration should have Rest API access in the Netwrix Data
Classification. You can add it in **NDC console > Settings > Users**. Refer to the
[Netwrix Data Classification documentation](https://helpcenter.netwrix.com/category/dataclassification)
for additional information.

## Requirements for Monitoring Plans in Netwrix Auditor

For File Storage Systems:

- Monitoring plan for File Servers data source with activity audit enabled in Netwrix Auditor;
- Netwrix Data Classification instance configured to crawl from the same source (naming must exactly
  match)

For SharePoint:

- Monitoring plan for SharePoint data source with activity audit enabled in Netwrix Auditor
- Netwrix Data Classification  instance configured to crawl from the same source;

For SharePoint Online:

- Monitoring plan for SharePoint Online data source with activity audit enabled in Netwrix Auditor
- Netwrix Data Classification instance configured to crawl from the same source

For SQL Server:

- Monitoring plan for SQL Server data source with activity audit enabled in Netwrix Auditor
- Netwrix Data Classification instance configured to crawl from the same source;

## Software Requirements

| Component                   | Version |
| --------------------------- | ------- |
| Netwrix Auditor             | 10.0+   |
| Netwrix Data Classification | 5.6.1+  |

## Enable and configure Sensitive Data Discovery

This section contains instructions on how to enable and configure Sensitive Data Discovery to
include sensitive data in Netwrix Auditor reports, search, and alerts.

Ensure that your account meets the requirements and has all server roles assigned. Follow these
steps to enable and configure Sensitive Data Discovery:

**Step 1 –** In Netwrix Auditor, navigate to Setting in the upper right corner.

![sensitivedatadiscovery](/img/versioned_docs/auditor_10.6/auditor/admin/settings/sensitivedatadiscovery.webp)

**Step 2 –** Select **Sensitive Data Discovery**.

**Step 3 –** Configure the following settings:

- Connect to NDC SQL database– Select Enable in the Connect to NDC SQL database field and then click
  Configure to specify NDC SQL database connection settings.
- SQL Server instance – Specify the name of the SQL Server instance where the NDC SQL database
  resides
- Database – Specify the name of the database (NDC SQL database by default)
- Authentication – Select the authentication type you want to use to connect to the SQL Server
  instance:

  - Windows authentication
  - SQL Server authentication

- User name – Specify the account to be used to connect to the SQL Server instance. For example,
  _WORKSTATIONNDC/integrator_.
- Password – Provide a password for that account
- Connect to the NDC via API – Select Enable in the Connect to NDC via API field and then click
  Configure to specify NDC endpoint connection settings.

  - NDC Web Console address – Provide the URL of your Netwrix Data Classification web console. For
    example: _http://workstationndc/conceptQS_.
  - User name – Provide the name of account that will be used to connect to NDC web console. For
    example, _WORKSTATIONNDC/integrator_. A user must be granted both: the 'REST API User' and
    'Superuser' permissions in NDC. See the User Management topic in the
    [Netwrix Data Classification Documentation](https://helpcenter.netwrix.com/category/dataclassification)
    for additional information.
  - Password – Provide a password for that account

## What is Next

Follow the steps to run a data collection and review sensitive data.

**Step 1 –** Navigate to your File storage system, SharePoint, SharePoint Online, or SQL Server
monitoring plan.

**Step 2 –** Run data collection.

**Step 3 –** Consider that data collection for SharePoint Online may take a while.

**Step 4 –** Perform some changes and run data collection again.

**Step 5 –** Review sensitive data.

Netwrix suggests the following integration scenarios:

For NDC SQL Database Provider:

Review your sensitive data in Data Discovery and Classification reports. Refer to the following
Netwrix Auditor help center article for more information about these reports:
[Data Discovery and Classification Reports](/docs/auditor/10.6/features/reporting/report-types.md).

ForNDC Endpoint Provider:

- Browse your data with Netwrix search.
- **NOTE:** Shortly after the data collection, changes related to sensitive content are reported
  without data categories. For example, if a user adds some sensitive data to the SharePoint Online
  document that initially does not contain sensitive data; this will be reported as document
  modification with empty "_data categories_" field. Another example: a user creates a new document
  containing sensitive data on a file server; this will be reported as a file add with empty "data
  categories" field. In this case, you have to wait until Netwrix Auditor processes information
  collected by NDC. It takes a while depending on a number of processed objects in your
  infrastructure and reindexing settings configured in Netwrix Data Classification. See the Manage
  Sources and Control Data Processing topic in the
  [Netwrix Data Classification Documentation](https://helpcenter.netwrix.com/category/dataclassification)
  for additional information.
- Click the **Select** column in the Tools menu and review data categories (taxonomies) of your
  sensitive documents.
- Use filtering capabilities to narrow your search results. See the
  [Use Filters in Advanced Mode](/docs/auditor/10.6/features/search-and-filter/advanced-search.md)
  topic for additional information.
- Create an alert triggered by specific actions with your sensitive data.

**_RECOMMENDED:_** Netwrix recommends enable threshold to trigger the new alert. In this case, a
single alert will be sent instead of many alerts. This can be helpful when Netwrix Auditor detects
many activity records matching the filters you specified. See the
[Alerts](/docs/auditor/10.6/features/alerts/index.md) topic for additional
information.
