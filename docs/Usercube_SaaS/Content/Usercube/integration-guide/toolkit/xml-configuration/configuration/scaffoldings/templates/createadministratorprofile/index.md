---
sidebar_position: 315
title: Create Administrator Profile
---

# Create Administrator Profile

This scaffolding creates the administrator profile with a predefined set of rights.

To create the rights for this profile, a scaffolding list is launched inside the creation of the administrator profile.

The scaffolding generates the following scaffoldings:

* [Access Review Administration Access Control Rules](../../accesscontrolrules/accessreviews/accessreviewadministrationaccesscontrolrules/index): Generates the permissions to administrate campaign creation.
* [Assign Profile Access Control Rules](../../accesscontrolrules/profiles/assignprofileaccesscontrolrules/index): Gives to a given profile the rights to create, update, delete and query any assigned profile.
* [Basket Rules Control Rules](../../accesscontrolrules/rolemodels/basketrulescontrolrules/index): Generates the permissions to execute the different requests to display the information in the rights basket.
* [Connector Resource Type Access Control](../../accesscontrolrules/connectors/connectorresourcetypeaccesscontrol/index): Gives the rights to create and update resource types, generate provisioning orders and fulfill from the connector screen.
* [Connectors Access Control Rules](../connectorsaccesscontrolrules/index): Gives the permissions to manage the connector pages.
* [Create Connectors Jobs](../../jobs/createconnectorsjobs/index): Creates all jobs by connector to launched task in the connector page.
* [Create Resource Incremental Access Control Rules](../../accesscontrolrules/resources/createresourceincrementalaccesscontrolrules/index): Generates the access control rule which gives to a profile the permission to query the resources modified incrementally
* [Job Execution Access Control Rules](../jobexecutionaccesscontrolrules/index "Job Execution Access Control Rules"): Assigns a set of rights to a given profile to execute any job, and view all job instances, task instances and logs.
* [Manage Accounts](../../accesscontrolrules/userinterfaces/manageaccounts/index "Manage Accounts"):
* [Manage Setting Access Control Rule](../../accesscontrolrules/queries/managesettingaccesscontrolrule/index "Manage Setting Access Control Rule"): Generates the access control rule which gives to a profile the permission to query, create, update and delete settings from the UM\_Settings table.
* [MonitoringAdministrationAccessControlRules](../../accesscontrolrules/monitoring/monitoringadministrationaccesscontrolrules/index "Monitoring Administration Access Control Rules"): Generates the access control rule which gives to a profile the permission to query the monitoring screen.
* [Perform Manual Provisioning Access Control Rules](../../accesscontrolrules/rolemodels/performmanualprovisioningaccesscontrolrules/index "Perform Manual Provisioning Access Control Rules"): Generates the permissions to access the manual provisioning pages for a given entity type and profile.
* [Profile Administration Access Control Rules](../../accesscontrolrules/profiles/profileadministrationaccesscontrolrules/index): Gives to a given profile the rights to create, update and delete profiles.
* [ProvisioningAccessControlRules](../../accesscontrolrules/jobs/provisioningaccesscontrolrules/index "Provisioning Access Control Rules"): Generates the execution rights for Provisioning and Fulfillment tasks for a given profile.
* [Reconciliate Roles Access Control Rules](../../accesscontrolrules/rolemodels/reconciliaterolesaccesscontrolrules/index "Reconciliate Roles Access Control Rules"): Generates the permissions to access the resource reconciliation pages for a given entity type and profile.
* [Reconciliate Roles Access Control Rules](../../accesscontrolrules/rolemodels/reconciliaterolesaccesscontrolrules/index "Reconciliate Roles Access Control Rules"): Generates the permissions to access the role reconciliation pages for a given entity type and profile.
* [Redundant Assignment Access Control Rule](../../accesscontrolrules/rolemodels/redundantassignmentaccesscontrolrule/index "Redundant Assignment Access Control Rule"): Generates the permissions to access the **Redundant Assignment** page, to analyze and remove redundant assignments.
* [Report Access Control Rules](../../accesscontrolrules/queries/reportaccesscontrolrules/index "Report Access Control Rules"): Generates the permissions to access the report view.
* [Resource Api Administration](../../accesscontrolrules/resources/resourceapiadministration/index "Resource Api Administration"): Generates the permissions to create/update/delete/query resources from a given entity type, for a given profile.
* [Resource Picker Control Rules](../../accesscontrolrules/resources/resourcepickercontrolrules/index "Resource Picker Control Rules"): Creates the reading right of the resource picker.
* [ResourceTypeMappingControlRules](../../accesscontrolrules/jobs/resourcetypemappingcontrolrules/index "ResourceTypeMappingControlRules"): Generate rights to launch agent fulfillment.
* [Review Provisioning Access Control Rules](../../accesscontrolrules/rolemodels/reviewprovisioningaccesscontrolrules/index "Review Provisioning Access Control Rules"): Generates the permissions to access the provisioning review pages for a given entity type and profile.
* [Review Roles Access Control Rules](../../accesscontrolrules/rolemodels/reviewrolesaccesscontrolrules/index "Review Roles Access Control Rules"): Generates the permissions to access the role review pages for a given entity type and profile.
* [Risks Administration Access Control Rules](../../accesscontrolrules/rolemodels/risksadministrationaccesscontrolrules/index "Risks Administration Access Control Rules"):
* [Role Administration Access Control Rules](../../accesscontrolrules/rolemodels/roleadministrationaccesscontrolrules/index "Role Administration Access Control Rules"): Generates the permissions to access the configuration pages and create, update, delete the elements of the role model.
* [Role Naming Access Control Rules](../../accesscontrolrules/rolemodels/rolenamingaccesscontrolrules/index "Role Naming Access Control Rules"): Generates the permissions to configure and launch the automatic creation of roles and rules based on naming conventions.
* [Settings Access Control Rules](../../accesscontrolrules/connectors/settingsaccesscontrolrules/index "SettingsAccessControlRules"): Generates the permissions to configure the Workforce Core Solution module and connector settings.
* [Simulation Access Control Rules](../simulationaccesscontrolrules/index "SimulationAccessControlRules"): Generates the permissions to configure and launch simulations.
* [SynchronizationAccessControlRules](../../accesscontrolrules/jobs/synchronizationaccesscontrolrules/index "Synchronization Access Control Rules"): Generates rights to launch synchronization task.
* [TaskAdministrationAccessControlRules](../../accesscontrolrules/jobs/taskadministrationaccesscontrolrules/index "Task Administration Access Control Rules"): Generates all rights to have the access to job administration page.
* [Universe Access Control Rules](../../accesscontrolrules/queries/universeaccesscontrolrules/index "UniverseAccessControlRules"): Generates an access control rule which gives a profile the permission to access the query page and run queries.
* [View History Resource Template](../../accesscontrolrules/resources/viewhistoryresourcetemplate/index "View History Resource Template"): Generates an access control rule giving to the specified profile the permission to browse the resources history of the specified entity type.
* [Workflow Configuration Control Rules](../../accesscontrolrules/workflows/workflowconfigurationcontrolrules/index "Workflow Configuration Control Rules"):
* [WorkflowFulfillmentControlRules](../../accesscontrolrules/jobs/workflowfulfillmentcontrolrules/index "Workflow Fulfillment Control Rules"): Generates the execution rights to launch Fulfillment workflow for a given profile.
* [Workflow Overview Control Rules](../../accesscontrolrules/workflows/workflowoverviewcontrolrules/index "Workflow Overview Control Rules"): Generates the permissions to access the workflow supervision page.

## Examples

```
                    

```
## Properties

| Property | Details |
| --- | --- |
| EntityType optional | **Type**  String  **Description** Identifier of the entity type involved in the scaffolding. |

## Child Elements

* Display Name Profile (optional) defines a display name for the administrator profile for a given language.

### Display Name Profile

| Property | Details |
| --- | --- |
| DisplayName required | **Type**  String  **Description** Display name of the profile in the related language. |
| Identifier required | **Type**  String  **Description** Code of the language for the display name. |

## Generated XML

Our example generates the following configuration:

```


```