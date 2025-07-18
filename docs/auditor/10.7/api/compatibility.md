---
title: "Compatibility Notice"
description: "Compatibility Notice"
sidebar_position: 130
---

# Compatibility Notice

Make sure to check your product version, and then review and update your add-ons and scripts
leveraging Netwrix Auditor Integration API. Download the latest add-on version in the Add-on Store.

| Property in 8.0 – 8.5                                                                    | New property in 9.0 and above                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <ul><li>XML: `<AuditedSystem></AuditedSystem>`</li><li>JSON: `"AuditedSystem"`</li></ul> | <ul><li>XML: `<DataSource></DataSource>`</li><li>JSON: `"DataSource"`</li></ul>                                                                                                                                                                                                                                                                               |
| <ul><li>XML: `<ManagedObject></ManagedObject>`</li><li>JSON: `"ManagedObject"`</li></ul> | <ul><li>XML: `<MonitoringPlan> `````` <Name>Name</Name> `````` <ID>Unique ID</ID> `````` </MonitoringPlan>`</li><li>JSON: `"MonitoringPlan" : { `````` "ID": "{Unique ID}", `````` "Name": "Name" `````` }` Now the MonitoringPlan contains two sub-entries: ID and Name. The ID property is optional and is assigned automatically by the product.</li></ul> |
| —                                                                                        | <ul><li>XML: `<Item> `````` <Name>Item name</Name> `````` </Item>`</li><li>JSON: `"Item": {"Name": "Item name"}`</li></ul>                                                                                                                                                                                                                                    |


To learn more about input and output Activity Record structure, refer to
[Activity Records](/docs/auditor/10.7/api/postdata/activityrecords.md).
