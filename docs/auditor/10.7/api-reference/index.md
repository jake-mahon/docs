---
title: Netwrix Auditor Integration API Reference
sidebar_label: API Reference
description: REST API endpoints for accessing audit data, writing activity records, and integrating Netwrix Auditor with third-party applications.
---

# Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts
leveraging Netwrix Auditor Integration API. Download the latest add-on version in the Add-on Store.

| Property in 8.0 – 8.5                                              | New property in 9.0 and above                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - XML: `<AuditedSystem></AuditedSystem>` - JSON: `"AuditedSystem"` | - XML: `<DataSource></DataSource>` - JSON: `"DataSource"`                                                                                                                                                                                                                                                                               |
| - XML: `<ManagedObject></ManagedObject>` - JSON: `"ManagedObject"` | - XML: `<MonitoringPlan> `````` <Name>Name</Name> `````` <ID>Unique ID</ID> `````` </MonitoringPlan>` - JSON: `"MonitoringPlan" : { `````` "ID": "{Unique ID}", `````` "Name": "Name" `````` }` Now the MonitoringPlan contains two sub-entries: ID and Name. The ID property is optional and is assigned automatically by the product. |
| —                                                                  | - XML: `<Item> `````` <Name>Item name</Name> `````` </Item>` - JSON: `"Item": {"Name": "Item name"}`                                                                                                                                                                                                                                    |

To learn more about input and output Activity Record structure, refer to
[Activity Records](/docs/auditor/10.7/api-reference/activity-records/writing-records.md).

# Integration API

Netwrix Auditor Netwrix Risk Insights leverages Netwrix Auditor Integration API. Although you can
always use the add-on as is, but Netwrix encourages customers to create their own integration
add-ons. The add-ons created based on Netwrix Auditor Integration API capabilities are easily
tailored to your specific environment and business requirements.

Netwrix Auditor Integration API—endless integration, auditing and reporting capabilities.

The Netwrix Auditor Integration API provides access to audit data collected by Netwrix Auditor
through REST API endpoints. According to the RESTful model, each operation is associated with a URL.
Integration API provides the following capabilities:

- Data in: Solidify security and meet regulatory compliance standards by enabling visibility into
  what is going on in any third-party application.
- Data out: Further automate your business processes, IT security and operations workflows by
  enriching third-party solutions with actionable audit data.

![diagram_thumb_0_0](/img/product_docs/auditor/auditor/addon/cyberark/diagram_thumb_0_0.webp)

Netwrix Auditor Integration API operates with XML- and JSON-formatted Activity Records—minimal
chunks of audit data containing information on _who_ changed _what_, _when_ and _where_ this change
was made. XML format is set as default.

With Integration API you can write Activity Records to the SQL Server-based Audit Database and
access audit data from remote computers. Also, Netwrix prepares add-ons—sample scripts—to help you
integrate your SIEM solutions with Netwrix Auditor.

Netwrix Auditor Integration API Service is responsible for processing API requests. This component
is installed along with Netwrix Auditor Server and is enabled automatically. By default, Netwrix
Auditor Integration API works over HTTPS protocol using an automatically generated certificate.
Default communication port is 9699.

Netwrix does not limit you with applications that can be used with Integration API. You can write
RESTful requests using any tool or application you prefer—cURL, Telerik Fiddler, various Google
Chrome or Mozilla FireFox plug-ins, etc.

## Integration Option

Integration is a custom item type that helps diversify activity records coming from custom sources
and integrations (e.g., Amazon Web Services, Cisco devices) within Netwrix API data source. It is
optional to add this item to your monitoring plan.

Complete the following fields:

| Option                              | Description                                                                                                                                                                    |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Specify a name for your integration | Specify the add-on name or provide any other name that distinguishes this custom source from any other. This name will be listed in the Item filter in the interactive search. |

Make sure Integration API is enabled. To check it, navigate to Settings → Integrations tab. See
[Integrations](/docs/auditor/10.7/administration/system-settings/index.md) for more information.

Make sure to provide a monitoring plan name and item name in activity records before importing data.
