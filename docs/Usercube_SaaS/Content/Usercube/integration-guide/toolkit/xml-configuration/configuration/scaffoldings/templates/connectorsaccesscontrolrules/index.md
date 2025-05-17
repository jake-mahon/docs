---
sidebar_position: 310
title: Connectors Access Control Rules
---

# Connectors Access Control Rules

Gives the permissions to manage the connector pages.

Generates the permissions to access the connectors pages, the policies page, the access roles page, the access rules page and the job execution page.

Gives access to shortcuts on the dashboard to access these pages.

![Connectors](../../../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/Home_connectors_V602.png)

The scaffolding generates the following scaffoldings:

* [Connector Resource Type Access Control](../../accesscontrolrules/connectors/connectorresourcetypeaccesscontrol/index "Connector Resource Type Access Control"): Gives the rights to create and update resource types, generate provisioning orders and fulfill from the connector screen.
* [Job View Access Control Rules](../jobviewaccesscontrolrules/index "JobViewAccessControlRules"): Scaffolding to generate a set of rights to view all JobInstances, TaskInstances and logs.
* [ResourceTypeMappingControlRules](../../accesscontrolrules/jobs/resourcetypemappingcontrolrules/index): Generate rights to launch agent fulfillment.
* [Role Administration Access Control Rules](../../accesscontrolrules/rolemodels/roleadministrationaccesscontrolrules/index): Generates the permissions to access the configuration pages and create, update, delete the elements of the role model.
* [RunJobRepairAdministrationAccessControlRules](../../accesscontrolrules/jobs/runjobrepairadministrationaccesscontrolrules/index "Run Job Repair Administration Access Control Rules"): Generates the permissions to launch from UI jobs that are in state blocked after a Provisioning or a synchronization for a given profile.
* [TaskAdministrationAccessControlRules](../../accesscontrolrules/jobs/taskadministrationaccesscontrolrules/index): Generates all rights to have the access to job administration page.

## Examples

```


```
## Properties

| Property | Details |
| --- | --- |
| Profile required | **Type**  String  **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```
                                                                                                                                                                                                                

```