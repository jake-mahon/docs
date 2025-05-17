---
sidebar_position: 318
title: Job View Access Control Rules
---

# Job View Access Control Rules

Scaffolding to generate a set of rights to view all JobInstances, TaskInstances and logs.
This Scaffolding performs a set of scaffolding rights for Jobs and Tasks.

The scaffolding generates the following scaffoldings:

* [GetJobLogAdministrationAccessControlRules](../../accesscontrolrules/jobs/getjoblogadministrationaccesscontrolrules/index "Get Job Log Administration Access Control Rules"): Generates the permissions to read task and job instances logs in UI for a given profile.
* [JobAdministrationAccessControlRules](../../accesscontrolrules/jobs/jobadministrationaccesscontrolrules/index "Job Administration Access Control Rules"): Scaffolding to access the job administration page.
* [PendingAssignedResourceTypesAccessControlRules](../../accesscontrolrules/jobs/pendingassignedresourcetypesaccesscontrolrules/index "Pending Assigned Resource Types Access Control Rules"): Generates the access control rules which give to a profile the permissions to call the API Pending AssignedResourceTypes.
* [ResourceChangesViewAccessControlRules](../../accesscontrolrules/jobs/resourcechangesviewaccesscontrolrules/index "Resource Changes View Access Control Rules"): Generates the access control rules which gives to a profile the permissions to call the API ResourceChange, ResourceFileChange and ResourceLinkChange.

## Properties

| Property | Details |
| --- | --- |
| Profile required | **Type**  String  **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```
                

```