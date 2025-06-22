# InternalWorkflow

This connector triggers workflows in Identity Manager for a system's provisioning orders.

This page is about Identity Manager Internal Workflow. See the
[ Workflow ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) topic for additional information.

![Package: Usercube/Workflow](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/internalworkflow/packages_workflow_v603.webp)

## Overview

This connector is singular because it does not connect Identity Manager to an external system.

Instead, it is made to read the provisioning orders of a given connector or resource type, and
launch specific workflows still within Identity Manager, depending on each order's type (creation,
update, deletion).

It works via a JSON file used to set the workflow to launch along with its arguments such as its
message and body.

## Prerequisites

Implementing this connector requires:

- Knowledge of the basic principles of Identity Manager's workflows. See the
  [ Workflow ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md) topic for additional information.
- Configuring in Identity Manager the workflows for the arrival of a new user, the update of a
  pre-existing user, and for the departure of a user

## Export

There are no export capabilities for this connector.

## Fulfill

This connector retrieves the files containing provisioning orders that correspond to a given list of
connectors or resource types, and then starts workflows according to the type of the provisioning
orders (Added, Modified, Deleted) found in the JSON files.

### Configuration

This process is configured through a connection in the UI and/or the XML configuration, and in the
appsettings.agent.json > **Connections** section:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

**NOTE:** The identifier of the connection and thus the name of the subsection must:

- be unique
- not begin with a digit
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "HR_Person_To_Directory_UserRecord": {
        "WorkflowJsonPath": "<C:/UsercubeOrganization/Conf/FulfillInternalWorkflow.json>"
    }
  }
}
```

The configuration setting must have the following attributes:

| Name                      | Type   | Description                                             |
| ------------------------- | ------ | ------------------------------------------------------- |
| WorkflowJsonPath required | String | Path of the JSON file used to configure this connector. |

WorkflowJsonPath

The file specified in WorkflowJsonPath must have a specific structure.

For example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
FulfillInternalWorkflow.json
{
  "SourceEntityIdentifier": "Directory_UserRecord",
  "NavigationToTargetEntity": "User",
  "NavigationTargetToSource": "Records",
  "TargetEntityTypeIdentifier": "Directory_User",
  "FulfillInternalWorkflowConfigurations": [
    {
      "ChangeType": "Added",
      "Model": {
        "WorkflowIdentifier": "Directory_User_StartInternal",
        "TransitionIdentifier": "ActionWithRefine-ActionPending-Execute",
        "Message": "workflow start: $Changes:LastName$ - $Changes:FirstName$, EmployeeId: $Changes:EmployeeId$",
        "Body": "body of workflow $Changes:EmployeeId$ - $Changes:Site.Label$"
      },
      "ScalarProperties": [
        "LastName",
        "FirstName",
        "ContractStartDate",
        "ContractEndDate"
      ],
      "NavigationProperties": [
        "Category",
        "Service",
        "Site"
      ]
    },
    {
      "ChangeType": "Modified",
      "Model": {
        "WorkflowIdentifier": "Directory_User_ChangeName",
        "TransitionIdentifier": "ActionWithRefine-ActionPending-Execute",
        "Message": "workflow Update: $Resource:LastName$ - $Resource:FirstName$, EmployeeId: $Resource:EmployeeId$",
        "Body": "body of workflow Update for $Resource:EmployeeId$ "
      },
      "ScalarProperties": [
        "FirstName",
        "LastName"
      ]
    },
    {
      "ChangeType": "Deleted",
      "Model": {
        "WorkflowIdentifier": "Directory_User_End",
        "TransitionIdentifier": "ActionWithRefine-ActionPending-Execute",
        "Message": "workflow end Directory_Person for $Resource:LastName$ - $Resource:FirstName$",
        "Body": "body if workflow end for $Resource:LastName$ - $Resource:FirstName$"
      },
      "DateProperties": [
        "ContractEndDate"
      ]
    }
  ]
}

```

_Remember,_ as workflows' aspects are computed during the fulfill process, all the required
properties must be present in the provisioning order and in this JSON file.

Setting attributes

The table below summarizes the setting attributes.

| Name                                | Type          | Description                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Body required                       | String        | Body of the message transmitted by the workflow.                                                                                                                                                                                                                                                                                                                        |
| ChangeType required                 | String        | Type of the provisioning order: Added; Modified; Deleted.                                                                                                                                                                                                                                                                                                               |
| DateProperties optional             | DateTime List | List of the properties corresponding to the dates that the workflow is to fill in. **NOTE:** When not specified and ChangeType is set to Deleted, then the dates are filled with the workflow's execution date.                                                                                                                                                         |
| Message required                    | String        | Message sent to the accounts impacted by the workflow.                                                                                                                                                                                                                                                                                                                  |
| NavigationProperties optional       | String List   | List of the navigation properties to get from the provisioning orders in order to complete the workflow.                                                                                                                                                                                                                                                                |
| NavigationTargetToSource optional   | String        | Navigation property that makes the link from the target entity type to the source entity type. **NOTE:** Required when using records. For example, it's not required when working with departments or sites. See the[ Position Change via Records ](/docs/identitymanager/6.2/identity-management/user-lifecycle/position-changes.md) topic for additional information. |
| NavigationToTargetEntity optional   | String        | Navigation property that makes the link from the source entity type to the target entity type. **NOTE:** Required when using records. For example, it's not required when working with departments or sites. See the[ Position Change via Records ](/docs/identitymanager/6.2/identity-management/user-lifecycle/position-changes.md) topic for additional information. |
| ScalarProperties optional           | String List   | List of the scalar properties to get from the provisioning orders in order to complete the workflow.                                                                                                                                                                                                                                                                    |
| SourceEntityIdentifier required     | String        | Identifier of the source entity type of the workflow.                                                                                                                                                                                                                                                                                                                   |
| TransitionIdentifier required       | String        | Identifier of the workflow's transition after execution.                                                                                                                                                                                                                                                                                                                |
| TargetEntityTypeIdentifier required | String        | Identifier of the target entity type of the workflow.                                                                                                                                                                                                                                                                                                                   |
| WorkflowIdentifier optional         | String        | Identifier of the workflow to be started. **NOTE:** Optional but recommended because it acts as default value when there is no related ArgumentsExpression or it does not return a valid identifier. See the[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information.                         |

The table below summarizes the variables for messages and bodies.

| Name     | Type        | Description                                                                                                                                                                             |
| -------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Changes  | String List | Prefix used to get data from the **Changes** section of the provisioning order. Example **Changes:LastName** retrieves the value of the **LastName** property from the order's changes. |
| Resource | String List | Prefix used to get data from Identity Manager's database. Example **Resource:LastName** retrieves the value of the **LastName** property from the database.                             |

### Output details

All three types of workflows (onboarding, update and off-boarding) can be completed with the fulfill
Internal Workflow.

## Authentication

See the following to figure out authentication.

Password reset

This connector does not reset passwords.

Credential protection

This connector has no credential attributes, and therefore does not use RSA encryption, nor a
CyberArk Vault. See the
[ RSA Encryption ](/docs/identitymanager/6.2/reference/index.md) and
[CyberArk's AAM Credential Providers ](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md)
topics for additional information.

Still, data protection can be ensured through an Azure Key Vault safe. See the
[Azure Key Vault](/docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md)topic
for additional information.

# Workflow Fulfillment Control Rules

Generates the execution rights to launch Fulfillment workflow for a given profile.

## Examples

```

  <WorkflowFulfillmentControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_[ActivityTemplateTransition, /Workflows/ActivityTemplateTransition/Query]" DisplayName_L1="Administrator_ActivityTemplateTransition" DisplayName_L2="Administrator_ActivityTemplateTransition" EntityType="ActivityTemplateTransition" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/ActivityTemplateTransition/Query" /></AccessControlRule><AccessControlRule Identifier="Administrator_[Workflow, /Workflows/Workflow/Query]" DisplayName_L1="Administrator_Workflow" DisplayName_L2="Administrator_Workflow" EntityType="Workflow" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/Workflow/Query" /></AccessControlRule>

```

# Create Update Delete Access Control Rules

Generates execution rights for the create, update, delete workflows.

Some prerequisites are necessary to be able to launch this scaffolding. A entity type must be
created with the following naming convention: "Worfklow\_" + idenfitier type entity. Three workflows
must be created with the following names:

- entity type identifier + "\_Create";
- entity type identifier + "\_Update";
- entity type identifier + "\_Delete";

The scaffolding generates the following scaffoldings:

- [ View Access Control Rules ](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md): Generates the
  permissions to view an entity type's resources.

## Examples

```

  <CreateUpdateDeleteAccessControlRules Profile="Administrator" EntityType="Directory_UserType"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Directory_UserType_Custom_Workflows_Directory_UserType" DisplayName_L1="Administrator_Directory_UserType_Custom_Workflows_Directory_UserType" EntityType="Workflow_Directory_UserType" Profile="Administrator"> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_UserType_Create/Request/ActionPending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_UserType_Delete/Request/ActionPending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_UserType_Update/Request/ActionPending" /></AccessControlRule>

```

# Workflows

- [ Create Update Delete Access Control Rules ](/docs/identitymanager/6.2/integration/workflows/index.md)

  Generates execution rights for the create, update, delete workflows.

- [ Update Resources Access Control Rules ](/docs/identitymanager/6.2/integration/workflows/index.md)
- [ Workflow Access Control Rules ](/docs/identitymanager/6.2/integration/workflows/index.md)

  Generates the permissions to access the task page and visualize the workflows to be executed for
  a given entity type and profile.

- [ Workflow Configuration Control Rules ](/docs/identitymanager/6.2/integration/workflows/index.md)
- [ Workflow Overview Control Rules ](/docs/identitymanager/6.2/integration/workflows/index.md)

  Generates the permissions to access the workflow supervision page.

# Update Resources Access Control Rules

## Examples

```

  <UpdateResourcesAccessControlRules EntityType="HR_Person" Profile="Administrator"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_HR_Person_Custom_Workflows_HR_Person" DisplayName_L1="Administrator_HR_Person_Custom_Workflows_HR_Person" EntityType="Workflow_HR_Person" Profile="Administrator"> <Entry CanExecute="true" Permission="/Custom/Workflows/HR_Person_UpdateResources/Request/ActionPending" /></AccessControlRule>

```

# Workflow Access Control Rules

Generates the rights to access the task page and visualize the different workflows to be executed
for a given entity type and profile.

Gives access to a shortcut on the dashboard and on the top bar to access this page.

Top bar shortcut:

![Tasks in Top Bar](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_topbar_v601.webp)

DashBoard shortcut:

![Task in Dashboard](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/workflows/workflowaccesscontrolrules/home_mytasks_v523.webp)

## Examples

```

  <WorkflowAccessControlRules Profile="Administrator" EntityType="Workflow_Directory_User"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/ReviewWorkflowDelegate_AccessControlRules_Workflow_Directory_User" DisplayName_L1="Workforce/Self/Update My Permissions (review) - WorkflowDelegate_AccessControl - Workflow for User" DisplayName_L2="Administrator - Droit_Transfert_WorkflowsWorkflow_Directory_User" EntityType="Workflow_Directory_User" Profile="Administrator"> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_Guest_AdvancedStart/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_Guest_AdvancedStart/Review/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ComputerRequest/Execution/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ComputerRequest/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ComputerRequest/Review/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManageContracts/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_MobileRequest/Execution/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_MobileRequest/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_MobileRequest/Review/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_VehiculeRequest/Execution/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_VehiculeRequest/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_VehiculeRequest/Review/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/RefinePending" /> <Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/RefinePending" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/ReviewWorkflow_AccessControlRules_Workflow_Directory_User" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Workflow_AccessControl - Workflow for User" DisplayName_L2="Administrator - Droit_Global_WorkflowsWorkflow_Directory_User" EntityType="Workflow_Directory_User" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_ActivityTemplateState" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Workflow Supervision" DisplayName_L2="Administrator - Supervision des Workflows" EntityType="ActivityTemplateState" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/ActivityTemplateState/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Directory_Application_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Application" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Directory_Bot_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Bot" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Directory_Guest_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Guest" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Directory_Organization_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Organization" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Directory_PresenceState_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_PresenceState" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Directory_UserRecord_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_UserRecord" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Directory_User_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_User" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_UserActivityInstance_ActivityInstance" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Workflow_AccessControl - " DisplayName_L2="Administrator - Droit_Global_Workflows" EntityType="ActivityInstance" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_UserActivityInstance_Resource" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Workflow_AccessControl - " DisplayName_L2="Administrator - Droit_Global_Workflows" EntityType="Resource" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_UserActivityInstance_WorkflowInstance" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Workflow_AccessControl - " DisplayName_L2="Administrator - Droit_Global_Workflows" EntityType="WorkflowInstance" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Workflow_Directory_User_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_User" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule>

```

# Workflow Configuration Control Rules

## Examples

```

  <WorkflowConfigurationControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Workflow_CreateUpdateDelete" DisplayName_L1="Administrator_Workflow" DisplayName_L2="Administrator_Workflow" EntityType="Workflow" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/Workflow/Create" /> <Entry CanExecute="true" Permission="/Workflows/Workflow/Delete" /> <Entry CanExecute="true" Permission="/Workflows/Workflow/Update" /></AccessControlRule>

```

# Workflow Overview Control Rules

Generates the rights to access the workflow supervision page.

Gives access to a shortcut on the dashboard to access this page.

![Workflow Overview](/img/product_docs/identitymanager/identitymanager/user-guide/administrate/reporting/home_workflowoverview_v602.webp)

## Examples

```

  <WorkflowOverviewControlRules Profile="Administrator" EntityType="Directory_User"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="HR_ActivityTemplateState" DisplayName_L1="Main/Administrator - Workflow Supervision" DisplayName_L2="M�tier/RH - Supervision des Workflows" EntityType="ActivityTemplateState" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/ActivityTemplateState/Query" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_Application_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_Application" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_Bot_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_Bot" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_Guest_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_Guest" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_Organization_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_Organization" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_PresenceState_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_PresenceState" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_UserRecord_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_UserRecord" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedCompositeRole" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedCompositeRole" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedCompositeRole" EntityType="AssignedCompositeRole" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedResourceNavigation" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedResourceNavigation" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedResourceNavigation" EntityType="AssignedResourceNavigation" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedResourceScalar" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedResourceScalar" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedResourceScalar" EntityType="AssignedResourceScalar" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedResourceType" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedResourceType" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedResourceType" EntityType="AssignedResourceType" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedSingleRole" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedSingleRole" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedSingleRole" EntityType="AssignedSingleRole" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_Category" DisplayName_L1="Main/Administrator - Workflow SupervisionCategory" DisplayName_L2="M�tier/RH - Supervision des WorkflowsCategory" EntityType="Category" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_Workflow_Directory_User" DisplayName_L1="Main/Administrator - Workflow Supervision" DisplayName_L2="M�tier/RH - Supervision des Workflows" EntityType="Workflow_Directory_User" Profile="Administrator"> <Entry CanExecute="true" Permission="/Custom/Workflows/Supervise/Workflow_Directory_User" /> <Entry CanExecute="true" Permission="/Workflows/HistorizedResourceFileByWorkflowInstanceIdQuery/Query" /> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Workflow_Directory_User_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Workflow_Directory_User" Profile="Administrator"> <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule>

```

# Create Update Delete Menus

Creates creation, update and delete menus for an entity. Read these menuItems again on the main
menuItems of the entity with the following naming rule: "Search\_" + Identifier of entity type. if
this menuItem does not exist, create it in the database.

The workflows for adding, deleting and modifying the entity must be created beforehand. For this
scaffolding, the names of these 3 workflows must comply with the following standard:

- entity type identifier + "\_Create"
- entity type identifier + "\_Update"
- entity type identifier + "\_Delete"

## Examples

```

  <CreateUpdateDeleteMenus EntityType="Directory_Country"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<MenuItem Identifier="Search_Directory_Country" DisplayName_L1="Country" DisplayName_L2="Pays"> <MenuItem Identifier="Search_Directory_Country_Create" DisplayName_L1="New" DisplayName_L2="Cr�er" IconCode="Add" Workflow="Directory_Country_Create" /></MenuItem><MenuItem Identifier="View_Directory_Country" DisplayName_L1="Country" DisplayName_L2="Pays"> <MenuItem Identifier="View_Directory_Country_Update" DisplayName_L1="Update" DisplayName_L2="Modifier" IconCode="Edit" Workflow="Directory_Country_Update" /> <MenuItem Identifier="View_Directory_Country_Delete" DisplayName_L1="Delete" DisplayName_L2="Supprimer" IconCode="Cancel" Workflow="Directory_Country_Delete" /></MenuItem>

```

# Create Update Delete Workflows

## Examples

```

  <CreateUpdateDeleteWorkflows EntityType="Directory_Country"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<Workflow Identifier="Directory_Country_Create" DisplayName_L1="Country - New" DisplayName_L2="Pays - Cr�er" VariablesType="Workflow_Directory_Country"> <Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="Action" /> <Activity Identifier="Persist" DisplayName_L1="Persist" DisplayName_L2="Enregistrement" Template="Persist" /></Workflow><Workflow Identifier="Directory_Country_Delete" DisplayName_L1="Country - Delete" DisplayName_L2="Pays - Supprimer" VariablesType="Workflow_Directory_Country"> <Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="Action" /> <Activity Identifier="Persist" DisplayName_L1="Persist" DisplayName_L2="Enregistrement" Template="Persist" /></Workflow><Workflow Identifier="Directory_Country_Update" DisplayName_L1="Country - Update" DisplayName_L2="Pays - Modifier" VariablesType="Workflow_Directory_Country"> <Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="Action" /> <Activity Identifier="Persist" DisplayName_L1="Persist" DisplayName_L2="Enregistrement" Template="Persist" /></Workflow>

```

# Workflows

- [ Create Update Delete Menus ](/docs/identitymanager/6.2/integration/workflows/index.md)

  Creates updates and deletes menus for an entity.

- [ Create Update Delete Workflows ](/docs/identitymanager/6.2/integration/workflows/index.md)
- [ Update Resources Menus ](/docs/identitymanager/6.2/integration/workflows/index.md)
- [ Update Resources Workflows ](/docs/identitymanager/6.2/integration/workflows/index.md)
- [ Workflow Actors Notification ](/docs/identitymanager/6.2/integration/workflows/index.md)
- [ Workflow Entity Type ](/docs/identitymanager/6.2/integration/workflows/index.md)

  Creates an entity that will be the source of all workflows that manipulate the given entity.

- [ Workflow Entity Type Display Entity Type ](/docs/identitymanager/6.2/integration/workflows/index.md)
- [ Workflow Entity Type Display Table ](/docs/identitymanager/6.2/integration/workflows/index.md)

  Creates the display table of the workflow entity of the starting entity.

- [ Workflow Entity Type Search Bar ](/docs/identitymanager/6.2/integration/workflows/index.md)

  Creates the search bar of the workflow entity of the starting entity.

- [ Workflow Performer Notification ](/docs/identitymanager/6.2/integration/workflows/index.md)

# Update Resources Menus

## Examples

```

  <UpdateResourcesMenus EntityType="HR_Person"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<MenuItem Identifier="View_HR_Person" DisplayName_L1="HR - User" DisplayName_L2="RH - Collaborateur"> <MenuItem Identifier="View_HR_Person_UpdateResources" DisplayName_L1="Modify Permissions" DisplayName_L2="Demander des droits" IconCode="Edit" Workflow="HR_Person_UpdateResources" /></MenuItem>

```

# Update Resources Workflows

## Examples

```

  <UpdateResourcesWorkflows EntityType="HR_Person"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<Workflow Identifier="HR_Person_UpdateResources" DisplayName_L1="HR - User - Modify Permissions" DisplayName_L2="RH - Collaborateur - Demander des droits" VariablesType="Workflow_HR_Person"> <Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="Action" /> <Activity Identifier="Persist" DisplayName_L1="Persist" DisplayName_L2="Ecriture" Template="Persist" /></Workflow>

```

# Workflow Actors Notification

## Examples

```

  <WorkflowActorsNotification Workflow="Directory_User_StartInternal"/>

```

## Properties

| Property          | Details                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------- |
| Workflow optional | **Type** String **Description** Identifier of the workflow involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<NotificationAspect Identifier="ActorsNotification_Directory_User_StartInternal" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="<div><div style="font-family:'Segoe UI','-apple-system','BlinkMacSystemFont','Roboto','Arial',sans-serif; color:#212121; font-size:14px; background:#f8f8f8"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px"> </td> <td class="x_content" width="640" style="padding:0px; max-width:640px; background-color:white; border-bottom:solid #eaeaea 1px"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td style="padding:20px 24px 25px 24px; background:white"> <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table"> <tbody> <tr> <td> <table border="0" cellpadding="0" cellspacing="0" class="x_logo" width="100%"> <tbody> <tr> <td valign="middle" style="vertical-align:middle"> <img data-imagetype="External" src="@(new System.Uri(Html.Context.ApplicationUri, "logo.webp").AbsoluteUri)" height="34" width="133"> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> <tr> <td class="x_hero" style="padding:0px 24px"> <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table" style="max-width:592px"> <tbody> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td> <!-- HEADER START --> <table> <tbody> <tr> <td class="x_title" style="padding:0 0 24px 0; color:#212121; font-size:28px; font-weight:bold; letter-spacing:-0.04em; line-height:40px; word-break:break-word"> @(Html.Context.MessageSubject ?? "Request summary")
                                        </td> </tr> <tr> <td class="x_message" style="padding:0 0 24px 0"> <div> <p>Hello,</p> <p>You have a new pending item that requires your attention</p> </div> </td> </tr> <tr> <td style="padding:0 0 24px 0"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td> <table border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center" bgcolor="#007acc" style="padding:8px 12px; border-radius:2px"> <a href="@(new System.Uri(Html.Context.ApplicationUri, $"workflow-management/review/{Html.Context.WorkflowInstanceIdentifier}").AbsoluteUri)" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" class="x_mobile-button x_btn-primary" style="font-weight:500; font-size:14px; text-decoration:none; padding:0px; display:inline-block; color:#ffffff"> View task
                                                          </a> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <!-- HEADER END --> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px"> </td> </tr> <tr> <td class="x_mobile-hide" style="background:#f8f8f8"></td> <td class="x_content" width="640" style="padding:0px; max-width:640px; background:#f8f8f8"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td style="padding:24px 24px 8px 24px; max-width:592px"> <table border="0" width="100%" cellpadding="0" cellspacing="0" class="x_responsive-table" style="vertical-align:middle; background-color:white"> <tbody> <tr> <td style="padding:16px 24px 24px 24px"> @Html.WorkflowSummary(string.Empty, Model.InternalDisplayName)
                          @Html.MessageBody(new { style = "box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;" })
                        </td> </tr> </tbody> </table> </td> </tr> <tr> <td style="padding:24px 24px 24px 24px"> <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table"> <tbody> <tr> <td style="color:#666666; font-size:12px; line-height:18px"> This email is automatically generated by usercube. Please do not reply.
                        </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> <td class="x_mobile-hide" style="background:#f8f8f8"></td> </tr> </tbody> </table></div></div>" RazorFile_L2="<div><div style="font-family:'Segoe UI','-apple-system','BlinkMacSystemFont','Roboto','Arial',sans-serif; color:#212121; font-size:14px; background:#f8f8f8"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px"> </td> <td class="x_content" width="640" style="padding:0px; max-width:640px; background-color:white; border-bottom:solid #eaeaea 1px"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td style="padding:20px 24px 25px 24px; background:white"> <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table"> <tbody> <tr> <td> <table border="0" cellpadding="0" cellspacing="0" class="x_logo" width="100%"> <tbody> <tr> <td valign="middle" style="vertical-align:middle"> <img data-imagetype="External" src="@(new System.Uri(Html.Context.ApplicationUri, "logo.webp").AbsoluteUri)" height="34" width="133"> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> <tr> <td class="x_hero" style="padding:0px 24px"> <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table" style="max-width:592px"> <tbody> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td> <!-- HEADER START --> <table> <tbody> <tr> <td class="x_title" style="padding:0 0 24px 0; color:#212121; font-size:28px; font-weight:bold; letter-spacing:-0.04em; line-height:40px; word-break:break-word"> @(Html.Context.MessageSubject ?? "R�sum� de la demande")
                                        </td> </tr> <tr> <td class="x_message" style="padding:0 0 24px 0"> <div> <p>Bonjour,</p> <p>Vous avez un nouvel �l�ment en attente qui n�cessite votre attention</p> </div> </td> </tr> <tr> <td style="padding:0 0 24px 0"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td> <table border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center" bgcolor="#007acc" style="padding:8px 12px; border-radius:2px"> <a href="@(new System.Uri(Html.Context.ApplicationUri, $"workflow-management/review/{Html.Context.WorkflowInstanceIdentifier}").AbsoluteUri)" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" class="x_mobile-button x_btn-primary" style="font-weight:500; font-size:14px; text-decoration:none; padding:0px; display:inline-block; color:#ffffff"> Consulter la t�che
                                                          </a> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <!-- HEADER END --> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px"> </td> </tr> <tr> <td class="x_mobile-hide" style="background:#f8f8f8"></td> <td class="x_content" width="640" style="padding:0px; max-width:640px; background:#f8f8f8"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td style="padding:24px 24px 8px 24px; max-width:592px"> <table border="0" width="100%" cellpadding="0" cellspacing="0" class="x_responsive-table" style="vertical-align:middle; background-color:white"> <tbody> <tr> <td style="padding:16px 24px 24px 24px"> @Html.WorkflowSummaryFR(string.Empty, Model.InternalDisplayName)
                          @Html.MessageBody(new { style = "box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;" })
                        </td> </tr> </tbody> </table> </td> </tr> <tr> <td style="padding:24px 24px 24px 24px"> <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table"> <tbody> <tr> <td style="color:#666666; font-size:12px; line-height:18px"> This email is automatically generated by usercube. Please do not reply.
                        </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> <td class="x_mobile-hide" style="background:#f8f8f8"></td> </tr> </tbody> </table></div></div>" CssFile="@media only screen and (max-width: 620px) {
  table[class=body] h1 {
      font-size: 28px !important;
      margin-bottom: 10px !important;
  }

  table[class=body] p,
  table[class=body] ul,
  table[class=body] ol,
  table[class=body] td,
  table[class=body] span,
  table[class=body] a {
      font-size: 16px !important;
  }

  table[class=body] .wrapper,
  table[class=body] .article {
      padding: 10px !important;
  }

  table[class=body] .content {
      padding: 0 !important;
  }

  table[class=body] .container {
      padding: 0 !important;
      width: 100% !important;
  }

  table[class=body] .main {
      border-left-width: 0 !important;
      border-radius: 0 !important;
      border-right-width: 0 !important;
  }

  table[class=body] .btn table {
      width: 100% !important;
  }

  table[class=body] .btn a {
      width: 100% !important;
  }

  table[class=body] .img-responsive {
      height: auto !important;
      max-width: 100% !important;
      width: auto !important;
  }
}
/* -------------------------------------
      PRESERVE THESE STYLES IN THE HEAD
  ------------------------------------- */
@media all {
  .ExternalClass {
      width: 100%;
  }

      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
          line-height: 100%;
      }

  .apple-link a {
      color: inherit !important;
      font-family: inherit !important;
      font-size: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
      text-decoration: none !important;
  }

  .btn-primary table td:hover {
      background-color: #34495e !important;
  }

  .btn-primary a:hover {
      background-color: #34495e !important;
      border-color: #34495e !important;
  }
}

body {
  background-color: #f6f6f6;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
  padding: 0;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
"> <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" /> <Recipient Type="Actor" /></NotificationAspect>

```

# Workflow Entity Type

Creates an entity that will be the source of all workflows that manipulate the given entity. Also
create the association between this new entity and the starting entity.

## Examples

```

  <WorkflowEntityType EntityType="Directory_Country"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<EntityType Identifier="Directory_Country" DisplayName_L1="Country" DisplayName_L2="Pays"> <Property Identifier="Workflows" DisplayName_L1="Workflows" DisplayName_L2="Workflows" Type="ForeignKey" /></EntityType><EntityType Identifier="Workflow_Directory_Country" DisplayName_L1="Workflow for Country" DisplayName_L2="Pays"> <Property Identifier="Directory_Country" DisplayName_L1="Country" DisplayName_L10="Country" DisplayName_L11="Country" DisplayName_L12="Country" DisplayName_L13="Country" DisplayName_L14="Country" DisplayName_L15="Country" DisplayName_L16="Country" DisplayName_L2="Pays" DisplayName_L3="Country" DisplayName_L4="Country" DisplayName_L5="Country" DisplayName_L6="Country" DisplayName_L7="Country" DisplayName_L8="Country" DisplayName_L9="Country" TargetColumnIndex="128" Type="ForeignKey" /></EntityType><EntityAssociation Identifier="Workflow_Directory_Country_Directory_Country" IsProperty2Collection="true" Property1="Workflow_Directory_Country:Directory_Country" Property2="Directory_Country:Workflows" /><WorkflowEntityTypeDisplayEntityType Id="29" EntityType="Directory_Country" />

```

# Workflow Entity Type Display Entity Type

## Examples

```

  <WorkflowEntityTypeDisplayEntityType EntityType="Directory_Country"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<DisplayEntityType Identifier="Workflow_Directory_Country" />

```

# Workflow Entity Type Display Table

Creates the display table of the workflow entity of the starting entity.

The starting entity must have a Display table and create the workflow entity type to be able to
launch this scaffolding.

## Examples

```

  <WorkflowEntityTypeDisplayTable EntityType="Directory_User"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<Tile Identifier="Workflow_Directory_User_Tile1" DisplayName_L1="User: first/last name" EntityType="Workflow_Directory_User" TileDesignElement="picture-text"> <Item Binding="Directory_User.MainRecord.FirstName" LineDisplayOrderIndicator="1" LineNumber="2" /> <Item Binding="Directory_User.MainRecord.LastName" LineDisplayOrderIndicator="2" LineNumber="2" /> <Item Binding="Directory_User.MainRecord.Title.DisplayName" LineNumber="3" /> <Item Binding="Directory_User.Id" LineNumber="5" /> <Item Binding="Directory_User.PhotoTag" LineNumber="6" /></Tile><Tile Identifier="Workflow_Directory_User_Tile2" DisplayName_L1="User: dep/loc" EntityType="Workflow_Directory_User" TileDesignElement="inline data-icon"> <Item Binding="Directory_User.MainRecord.Organization.DisplayName" LineNumber="1" /> <Item Binding="Directory_User.MainRecord.Site.DisplayName" LineNumber="2" /></Tile><DisplayTable Identifier="Workflow_Directory_User" DisplayTableDesignElement="list" EntityType="Workflow_Directory_User" IsEntityTypeDefault="true"> <Column ColumnSize="6" DefaultSortPriority="1" IsDisplayInSummaryView="true" SortBinding="Directory_User.MainRecord.LastName" Tile="Workflow_Directory_User_Tile1" /> <Column ColumnSize="3" IsDisplayInSummaryView="true" SortBinding="Directory_User.MainRecord.FirstName" Tile="Workflow_Directory_User_Tile2" /></DisplayTable>

```

# Workflow Entity Type Search Bar

Creates the search bar of the workflow entity of the starting entity.

The starting entity must have a search bar and create the workflow entity type to be able to launch
this scaffolding.

## Examples

```

  <WorkflowEntityTypeSearchBar EntityType="Directory_User"/>

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<SearchBar EntityType="Workflow_Directory_User" SearchBarDesignElement="Inline"> <Criterion Binding1="Directory_User.Identifier" ColumnSize="2" InputType="Auto" PlaceHolderText_L1="Identifier" PlaceHolderText_L2="Identifier" /> <Criterion Binding1="Directory_User.PhoneticFirstLastName" Binding2="Directory_User.PhoneticLastFirstName" Binding3="Directory_User.MainRecord.LastName" ColumnSize="2" InputType="Auto" Operator="FlexibleStartWith" PlaceHolderText_L1="Name" PlaceHolderText_L2="Nom" /> <Criterion Binding1="Directory_User.MainRecord.Organization" ColumnSize="2" InputType="Auto" PlaceHolderText_L1="Department" PlaceHolderText_L2="D�partement" /> <Criterion Binding1="Directory_User.PresenceState" ColumnSize="2" DefaultValue="-101;-102" InputType="ComboboxMultiSelection" Operator="Equal" /> <Criterion Binding1="Directory_User.MainRecord.Site" ColumnSize="2" InputType="Auto" IsVisibleInAdvancedView="true" PlaceHolderText_L1="Site" PlaceHolderText_L2="Site" /> <Criterion Binding1="Directory_User.MainRecord.Subsidiary" ColumnSize="2" InputType="Auto" IsVisibleInAdvancedView="true" PlaceHolderText_L1="Subsidiary" PlaceHolderText_L2="Filiale" /> <Criterion Binding1="Directory_User.MainRecord.Title" ColumnSize="2" InputType="Auto" IsVisibleInAdvancedView="true" PlaceHolderText_L1="Title" PlaceHolderText_L2="Fonction" /> <Criterion Binding1="Directory_User.MainRecord.UserType" ColumnSize="2" InputType="Auto" IsVisibleInAdvancedView="true" PlaceHolderText_L1="User Type" PlaceHolderText_L2="Type de collaborateur" /></SearchBar>

```

# Workflow Performer Notification

## Examples

```

  <WorkflowPerformerNotification Workflow="Directory_User_ChangeName"/>

```

## Properties

| Property          | Details                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------- |
| Workflow optional | **Type** String **Description** Identifier of the workflow involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<NotificationAspect Identifier="PerformerNotification_Directory_User_ChangeName" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="<div> <div style="font-family:'Segoe UI','-apple-system','BlinkMacSystemFont','Roboto','Arial',sans-serif; color:#212121; font-size:14px; background:#f8f8f8"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px"> </td> <td class="x_content" width="640" style="padding:0px; max-width:640px; background-color:white; border-bottom:solid #eaeaea 1px"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td style="padding:20px 24px 25px 24px; background:white"> <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table"> <tbody> <tr> <td> <table border="0" cellpadding="0" cellspacing="0" class="x_logo" width="100%"> <tbody> <tr> <td valign="middle" style="vertical-align:middle"> <img data-imagetype="External" src="@(new System.Uri(Html.Context.ApplicationUri, "logo.webp").AbsoluteUri)" height="34" width="133"> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> <tr> <td class="x_hero" style="padding:0px 24px"> <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table" style="max-width:592px"> <tbody> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td> <!-- HEADER START --> <table> <tbody> <tr> <td class="x_title" style="padding:0 0 24px 0; color:#212121; font-size:28px; font-weight:bold; letter-spacing:-0.04em; line-height:40px; word-break:break-word"> @(Html.Context.MessageSubject ?? "Request summary")
                                          </td> </tr> <tr> <td class="x_message" style="padding:0 0 24px 0"> <div> <p>Hello,</p> <p>Your request has been taken into account</p> </div> </td> </tr> <tr> <td style="padding:0 0 24px 0"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td> <table border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center" bgcolor="#007acc" style="padding:8px 12px; border-radius:2px"> <a href="@(Html.Context.ApplicationUri.AbsoluteUri)" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" class="x_mobile-button x_btn-primary" style="font-weight:500; font-size:14px; text-decoration:none; padding:0px; display:inline-block; color:#ffffff"> Connect to Usercube
                                                            </a> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <!-- HEADER END --> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px"> </td> </tr> <tr> <td class="x_mobile-hide" style="background:#f8f8f8"></td> <td class="x_content" width="640" style="padding:0px; max-width:640px; background:#f8f8f8"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td style="padding:24px 24px 8px 24px; max-width:592px"> <table border="0" width="100%" cellpadding="0" cellspacing="0" class="x_responsive-table" style="vertical-align:middle; background-color:white"> <tbody> <tr> <td style="padding:16px 24px 24px 24px"> @Html.WorkflowSummary(string.Empty, Model.InternalDisplayName)
                          </td> </tr> </tbody> </table> </td> </tr> <tr> <td style="padding:24px 24px 24px 24px"> <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table"> <tbody> <tr> <td style="color:#666666; font-size:12px; line-height:18px"> This email is automatically generated by usercube. Please do not reply.
                          </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> <td class="x_mobile-hide" style="background:#f8f8f8"></td> </tr> </tbody> </table> </div></div>" RazorFile_L2="<div> <div style="font-family:'Segoe UI','-apple-system','BlinkMacSystemFont','Roboto','Arial',sans-serif; color:#212121; font-size:14px; background:#f8f8f8"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px"> </td> <td class="x_content" width="640" style="padding:0px; max-width:640px; background-color:white; border-bottom:solid #eaeaea 1px"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td style="padding:20px 24px 25px 24px; background:white"> <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table"> <tbody> <tr> <td> <table border="0" cellpadding="0" cellspacing="0" class="x_logo" width="100%"> <tbody> <tr> <td valign="middle" style="vertical-align:middle"> <img data-imagetype="External" src="@(new System.Uri(Html.Context.ApplicationUri, "logo.webp").AbsoluteUri)" height="34" width="133"> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> <tr> <td class="x_hero" style="padding:0px 24px"> <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table" style="max-width:592px"> <tbody> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td> <!-- HEADER START --> <table> <tbody> <tr> <td class="x_title" style="padding:0 0 24px 0; color:#212121; font-size:28px; font-weight:bold; letter-spacing:-0.04em; line-height:40px; word-break:break-word"> @(Html.Context.MessageSubject ?? "Request summary")
                                          </td> </tr> <tr> <td class="x_message" style="padding:0 0 24px 0"> <div> <p>Bonjour,</p> <p>Votre demande a bien �t� prise en compte</p> </div> </td> </tr> <tr> <td style="padding:0 0 24px 0"> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td> <table border="0" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center" bgcolor="#007acc" style="padding:8px 12px; border-radius:2px"> <a href="@(Html.Context.ApplicationUri.AbsoluteUri)" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" class="x_mobile-button x_btn-primary" style="font-weight:500; font-size:14px; text-decoration:none; padding:0px; display:inline-block; color:#ffffff"> Je me connecte a Usercube
                                                            </a> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <!-- HEADER END --> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px"> </td> </tr> <tr> <td class="x_mobile-hide" style="background:#f8f8f8"></td> <td class="x_content" width="640" style="padding:0px; max-width:640px; background:#f8f8f8"> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tbody> <tr> <td style="padding:24px 24px 8px 24px; max-width:592px"> <table border="0" width="100%" cellpadding="0" cellspacing="0" class="x_responsive-table" style="vertical-align:middle; background-color:white"> <tbody> <tr> <td style="padding:16px 24px 24px 24px"> @Html.WorkflowSummaryFR(string.Empty, Model.InternalDisplayName)
                          </td> </tr> </tbody> </table> </td> </tr> <tr> <td style="padding:24px 24px 24px 24px"> <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table"> <tbody> <tr> <td style="color:#666666; font-size:12px; line-height:18px"> This email is automatically generated by usercube. Please do not reply.
                          </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> <td class="x_mobile-hide" style="background:#f8f8f8"></td> </tr> </tbody> </table> </div></div>" CssFile="@media only screen and (max-width: 620px) {
    table[class=body] h1 {
        font-size: 28px !important;
        margin-bottom: 10px !important;
    }

    table[class=body] p,
    table[class=body] ul,
    table[class=body] ol,
    table[class=body] td,
    table[class=body] span,
    table[class=body] a {
        font-size: 16px !important;
    }

    table[class=body] .wrapper,
    table[class=body] .article {
        padding: 10px !important;
    }

    table[class=body] .content {
        padding: 0 !important;
    }

    table[class=body] .container {
        padding: 0 !important;
        width: 100% !important;
    }

    table[class=body] .main {
        border-left-width: 0 !important;
        border-radius: 0 !important;
        border-right-width: 0 !important;
    }

    table[class=body] .btn table {
        width: 100% !important;
    }

    table[class=body] .btn a {
        width: 100% !important;
    }

    table[class=body] .img-responsive {
        height: auto !important;
        max-width: 100% !important;
        width: auto !important;
    }
}
/* -------------------------------------
        PRESERVE THESE STYLES IN THE HEAD
    ------------------------------------- */
@media all {
    .ExternalClass {
        width: 100%;
    }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }

    .apple-link a {
        color: inherit !important;
        font-family: inherit !important;
        font-size: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
        text-decoration: none !important;
    }

    .btn-primary table td:hover {
        background-color: #34495e !important;
    }

    .btn-primary a:hover {
        background-color: #34495e !important;
        border-color: #34495e !important;
    }
}

body {
    background-color: #f6f6f6;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    padding: 0;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
"> <PointCut Activity="Directory_User_ChangeName:Request" ActivityState="ActionWithRefine-Executed" /> <Recipient Activity="Directory_User_ChangeName:Request" ActivityState="ActionWithRefine-Executed" Type="Performer" /> </NotificationAspect>

```

# Activity Templates

This section describes the activities that constitute and model a
[ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md). Each activity is assigned
a template, made of states and transitions.

## Overview

Going through an activity means going through states and transitions.

![Activity Template - Example](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/activity-templates/activitytemplates_example.webp)

By default, Identity Manager's workflow engine implements the following activity templates:

- `Action`
- `Action With Refine`
- `Review`
- `Review With Feedback`
- `Continue With`
- `Persist`
- `Persist OnlyResources`

## Activity Templates

### Action

Awaits user modifications without another user's intervention.

![Activity Template - Action](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/activity-templates/activitytemplates_action.webp)

### ActionWithRefine

Awaits user modifications with the possibility to delegate the action to another user.

![Activity Template - ActionWithRefine](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/activity-templates/activitytemplates_actionwithrefine.webp)

The `ActionWithRefine` activity can be translated into the following form:

![ActionWithRefine in the UI](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/activity-templates/activity_actionwithrefine_v602.webp)

### Review

Awaits user approval without another user's intervention.

![Activity Template - Review](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/activity-templates/activitytemplates_review.webp)

### ReviewWithFeedback

Awaits user approval with the possiblity of getting feedback from another user before taking the
action.

![Activity Template - ReviewWithFeedback](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/activity-templates/activitytemplates_reviewwithfeedback.webp)

The `ReviewWithFeedback` activity can be translated into the following form:

![ReviewWithFeedback in the UI](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/activity-templates/activity_reviewwithfeedback_v602.webp)

### Persist

Saves the workflow's collected data to the repository and triggers dependent processes (i.e.
computation of the role model and provisioning). This activity has only the transition
`Persist-Invoked-Invoke` and the state `Persist-Invoked`. It has no user interaction, and hence no
need for permissions.

### PersistOnlyResources

Saves the workflow's collected data to the repository without triggering the dependent processes
(i.e. computation of the role model and provisioning). This activity has only the transition
`PersistOnlyResources-Invoked-Invoke` and the state `PersistOnlyResources-Invoked`. It has no user
interaction, and hence no need for permissions.

> For example, `PersistOnlyResources` can be used in a workflow to add a new user, as we first
> create a user sheet but without any account, etc.

## States

By default, Identity Manager's workflow engine implements the following state templates:

- `Action-ActionPending`
- `Action-Executed`
- `Action-Aborted`
- `Action-Purged`
- `ActionWithRefine-ActionPending`
- `ActionWithRefine-Executed`
- `ActionWithRefine-RefinePending`
- `ActionWithRefine-Aborted`
- `ActionWithRefine-Purged`
- `Review-ReviewPending`
- `Review-Declined`
- `Review-Approved`
- `Review-Aborted`
- `Review-Purged`
- `ReviewWithFeedback-ReviewPending`
- `ReviewWithFeedback-Approved`
- `ReviewWithFeedback-Declined`
- `ReviewWithFeedback-RefinePending`
- `ReviewWithFeedback-Aborted`
- `ReviewWithFeedback-Purged`
- `ContinueWith-Invoked`
- `Persist-Invoked`
- `PersistOnlyResources-Invoked`

## Transitions

By default, Identity Manager's workflow engine implements the following transition templates:

- `Action-ActionPending-Save`
- `Action-ActionPending-Execute`
- `Action-ActionPending-Abort`
- `Action-Aborted-Purge`
- `ActionWithRefine-ActionPending-Save`
- `ActionWithRefine-ActionPending-Execute`
- `ActionWithRefine-ActionPending-Delegate`
- `ActionWithRefine-ActionPending-Abort`
- `ActionWithRefine-RefinePending-Save`
- `ActionWithRefine-RefinePending-Delegate`
- `ActionWithRefine-RefinePending-Execute`
- `ActionWithRefine-RefinePending-Abort`
- `ActionWithRefine-Aborted-Purge`
- `Review-ReviewPending-Save`
- `Review-ReviewPending-Approve`
- `Review-ReviewPending-Decline`
- `Review-ReviewPending-Abort`
- `Review-Aborted-Purge`
- `ReviewWithFeedback-ReviewPending-Save`
- `ReviewWithFeedback-ReviewPending-Approve`
- `ReviewWithFeedback-ReviewPending-Decline`
- `ReviewWithFeedback-ReviewPending-Refine`
- `ReviewWithFeedback-ReviewPending-Abort`
- `ReviewWithFeedback-Aborted-Purge`
- `ReviewWithFeedback-RefinePending-Save`
- `ReviewWithFeedback-RefinePending-Delegate`
- `ReviewWithFeedback-RefinePending-Execute`
- `ContinueWith-Invoked-Invoke`
- `Persist-Invoked-Invoke`
- `PersistOnlyResources-Invoked-Invoke`

# Configure a Homonym Detection

In this section we configure the homonym search that checks if a resource already exists in the
system, preventing duplicates.

## Process

1. Create a homonym entity link, either with a default filter or customized filters
2. Create a display table to display the homonym result _(optional)_
3. Define the part of the workflow form where homonyms must be checked

## Create a Homonym Entity Link

A [ Homonym Entity Link ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)
defines a new homonym search to be performed in a workflow form. It can be defined in different
ways.

### With a default filter

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym" />

```

When no filter is defined for the homonym entity link, the search for homonyms is performed
according to the homonym control form. See the Configure a Homonym Detection topic for additional
information.

### With customized filters

[ Homonym Entity Link ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)filters
allow to define customized filters for a homonym search.

#### Simple filter

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym"> <Filter
        Property1="LastName"
        Property2="FirstName"
    /></HomonymEntityLink>

```

Here, since the default operator is `Equal`, the search for homonyms is performed by comparing the
values of the `LastName` and `FirstName` properties with an exact spelling.

_NB: This example matches the default filter that would be computed based on the homonym control
example in the section below._

#### Flexible filter

A filter can be defined to compare the values in an approximate way.

- A flexible operator must be used, such as `FlexibleEqual`, `FlexibleStartWith`, etc.
- A flexible expression must be defined on the comparison property.

1. When the input search value is retrieved directly from the property value

   ```
   <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym"> <Filter
           Property1="LastName" ComparisonProperty1="PhoneticLastName" Operator1="FlexibleEqual"
           Property2="FirstName" ComparisonProperty2="PhoneticFirstName" Operator2="FlexibleEqual"
       /></HomonymEntityLink>

   ```

Here, `Property1` is set, so the search for homonyms is performed by comparing the `LastName` value,
entered by the user in the workflow form, with the phonetic value of existing resources stored as
the `PhoneticLastName` property in the database.

Before performing the comparison, the flexible expression of the comparison property is applied to
the input value.

2. When the input search value is deducted

   ```
   <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym"> <Filter
           ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual"
       /> <Filter
           ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual" Expression1="C#:record:(record.LastName + ' ' + record.FirstName).Appproximate()"
       /></HomonymEntityLink>

   ```

Here:

- In the first filter, `Property1` and `Expression1` are not set, so the search value is computed by
  applying the expression defined for `ComparisonProperty1` from the input values, eg.
  `(record.FirstName + &#x27; &#x27; + record.LastName).Appproximate()`.
- In the second filter, `Expression1` is set, so the search value is computed by applying the
  `Expression1` from the input values. This filter allows checking the homonyms on the reversed full
  name (to manage the case where the user reverses the first and last name for example).

The search for homonyms is performed by comparing the search values computed based on each filter
with the values stored in the database and retrieves all resources that match any of the filters.

#### Filter on a language property

If a filter is set on a language property, the search for homonyms is performed on the property
associated to the main language.

```
<HomonymEntityLink FormEntityType="Directory_Organization" Identifier="Directory_Organization_Homonym"> <Filter Property1="Name" /></HomonymEntityLink>

```

Here, the `Name` property is a neutral property associated with two localized properties `Name_en`
and `Name_fr`.

If English is the main language, the search for homonyms is performed on the `Name_en` value.

## Create a Display Table _(optional)_

A [Display Table](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) is used
to define how a list of the same entity type should be displayed.

By default, the homonyms are displayed using the default display table of the related entity type.

To display homonyms in a different way than the default, a specific display table must be created
where the `HomonymEntityLink` attribute is the identifier of the homonym entity link created above.

```
<DisplayTable Identifier="Directory_UserRecord_Homonym" EntityType="Directory_UserRecord" DisplayTableDesignElement="table" HomonymEntityLink="Directory_UserRecord">
    <Column DefaultSortPriority="1" DisplayBinding="LastName" IsDisplayInSummaryView="true" IsResizable="true" ColumnSize="1" /> <Column DisplayBinding="FirstName" IsDisplayInSummaryView="true" IsResizable="true" ColumnSize="1" /> <Column DisplayBinding="Login" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" /> <Column DisplayBinding="Mail" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" /> <Column DisplayBinding="BirthDate" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" /></DisplayTable>

```

See the [Customize Display Tables](/docs/identitymanager/6.2/troubleshooting/common-issues.md) for additional
information.

## Define the Homonym Control in the Workflow Form

The [Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) where the homonyms are
to be checked must contain a layout fieldset control where:

- the properties to check are represented;
- the `HomonymEntityLink` attribute is the identifier of the homonym entity link created above.

When the homonym entity link has no filter set and therefore the filter is calculated automatically,
the homonym control form must only contain up to 5 controls where `Binding` attribute is defined.
Indeed, a filter can only be defined on up to 5 properties.

```
<Form Identifier="Workflow_Directory_User_AdvancedStartInternal_Base" EntityType="Directory_UserRecord"> <Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" OutputType="LayoutFieldset" HomonymEntityLink="Directory_UserRecord">
        <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" OutputType="LayoutRowset"> <Control Binding="LastName" IsRequired="true" /> <Control Binding="FirstName" IsRequired="true" /> </Control> </Control></Form>

```

# How To Create a Workflow

This guide shows how to create a
[ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md) through the XML
configuration.

## Process

1. Declare a new [ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md) with
   given activities following Identity Manager's activity templates.
2. Configure the input [Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) with the
   right output type according to the purpose of the workflow.
3. Assign the adequate permissions via an
   [Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).
4. Add [ Menu Item ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).
5. Add [Aspects](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md), according to the
   purpose of the workflow.
6. Add optional elements if needed: [Workflows](/docs/identitymanager/6.2/integration/workflows/index.md); a
   [ Configure a Homonym Detection ](/docs/identitymanager/6.2/integration/workflows/index.md); a
   [Customize Display Tables](/docs/identitymanager/6.2/troubleshooting/common-issues.md)different from Identity
   Manager's default one.

## Examples

You can also find configuration examples for several types of workflow:

- [ For Resource Creation (Mono Record) ](/docs/identitymanager/6.2/integration/workflows/index.md)

  How to create a workflow to create a new resource with a unique record.

- [ For Resource Creation (Multi Records) ](/docs/identitymanager/6.2/integration/workflows/index.md)

  How to create a workflow to create a new resource with several records.

- [ For Resource Update (No Record) ](/docs/identitymanager/6.2/integration/workflows/index.md)

  How to create a workflow to update an existing simple resource, i.e. to update, within a given
  existing resource, properties that do not involve records.

- [ For Resource Update (Mono Record) ](/docs/identitymanager/6.2/integration/workflows/index.md)

  How to create a workflow to schedule the replacement of the unique record of an existing
  resource with a new one.

- [ For Resource Update (Multi Records) ](/docs/identitymanager/6.2/integration/workflows/index.md)

  Create a workflow to update an existing resource through its several records.

- [ Configure a Homonym Detection ](/docs/identitymanager/6.2/integration/workflows/index.md)

  How to configure the homonym search that checks if a resource already exists in the system,
  preventing duplicates.

# For Resource Creation (Mono Record)

This section guides you through the procedure for the creation of a
[ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md) to create a new
resource with a unique record.

## Declare a Workflow

This [ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md) is made of four
activities:

1. `Action With Refine`: sends the creation request with a possibility of delegation.
2. `Persist Only Resources`: saves the collected data to the repository without triggering
   provisioning.
3. `Review With Feedback`: reviews the creation request with the possibility of getting feedback
   from another user.
4. `Persist`: saves the collected data and triggers provisioning.

See the [ Activity Templates ](/docs/identitymanager/6.2/integration/workflows/index.md) topic for additional information.

The example below creates a workflow to create a new worker.

```

<Workflow Identifier="Directory_User_NewInternal" DisplayName_L1="User - New Employee" VariablesType="Workflow_Directory_User"> <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" /> <Activity Identifier="PersistDraft" DisplayName_L1="Draft Creation" Template="PersistOnlyResources" /> <Activity Identifier="Review" DisplayName_L1="Review" Template="ReviewWithFeedback" /> <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

## Create Forms

The XML configuration below represents the creation of a
[Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) that defines the elements to
display in the workflow.

Here we create two structured forms: the preliminary one is called inside the main one, and the main
one is to be called in our final workflow form.

```

Preliminary form for user data:
<Form Identifier="Workflow_Directory_User_NewInternal_PersonalData" EntityType="Directory_UserRecord"> <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset"> <Control DisplayName_L1="Full Name" OutputType="LayoutRowset"> <Control Binding="LastName" IsRequired="true" /> <Control Binding="FirstName" IsRequired="true" /> </Control> <Control DisplayName_L1="Phone Numbers" OutputType="LayoutRowset"> <Control Binding="PhoneNumber" /> <Control Binding="MobileNumber" /> </Control> <Control DisplayName_L1="Photo" OutputType="LayoutRowset"> <Control Binding="User.Photo" InputType="Image" /> </Control> </Control>

Preliminary form for user's contract data:
<Form Identifier="Workflow_Directory_UserRecord_NewInternal_Contract" EntityType="Directory_UserRecord"> <Control DisplayName_L1="Contract" OutputType="LayoutFieldset"> <Control Binding="UserType" IsRequired="true" /> <Control Binding="ContractStartDate" IsRequired="true" /> <Control Binding="ContractEndDate" InputType="Date" AddedMinutes="1440" /> </Control></Form>

Preliminary form for user's position data:
<Form Identifier="Workflow_Directory_UserRecord_NewInternal_Position" EntityType="Directory_UserRecord"> <Control DisplayName_L1="Position" OutputType="LayoutFieldset"> <Control Binding="Title" /> <Control Binding="Organization" /> <Control Binding="Site" /> <Control Binding="PositionStartDate" /> <Control Binding="PositionEndDate" /> </Control></Form>

Main form for all data:
<Form Identifier="Workflow_Directory_User_NewInternal" EntityType="Directory_UserRecord">
  Section calling the preliminary form for user data:
  <Control OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_NewInternal_PersonalData" />
  Section calling the preliminary form for contract data:
  <Control OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_NewInternal_Contract" />
  Section calling the preliminary form for position data:
  <Control OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_NewInternal_Position" /></Form>

```

## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed
when launching the workflow. It has the type corresponding to a resource's creation with one record,
i.e. `WorkflowCreateRecordEntityForm` and it must specify the workflow's context (the entity type of
the involved resources, the main property, the activity when the form is called, etc):

```

<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewInternal" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_NewInternal:Request" FormTitle_L1="New Employee"/>

```

A `WorkflowCreateRecordEntityForm` requires the following child elements:

- `MainControl` that defines user's data;

```

<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewInternal" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_NewInternal:Request" FormTitle_L1="New Employee"/>
  <MainControl OutputType="LayoutContainer"></MainControl>
</WorkflowCreateRecordEntityForm>

```

The `MainControl` attribute is here an empty container because we configure all personal data,
contracts and positions as records to be able to anticipate changes for example. The line with the
empty `MainControl` is not mandatory. See the
[ Position Change via Records ](/docs/identitymanager/6.2/identity-management/user-lifecycle/position-changes.md)topic
for additional information.

- `RecordControl` that defines record data, and calls the form created previously. See the For
  Resource Creation (Mono Record) topic for additional information.

```

<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewInternal" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_NewInternal:Request" FormTitle_L1="New Employee"> <MainControl OutputType="LayoutContainer" />
  <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_NewInternal" />
</WorkflowCreateRecordEntityForm>

```

![UI Form](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-create-mono/howto_resourcecreationmono_form_v602.webp)

### Add a summary (Optional)

Another child element `RecordSummaryControl` can be added to insert a summary part, i.e. the form
used after the workflow execution to show some values, most of the time those affected by the
workflow, typically the properties editable in the workflow or generated properties. So in our
situation, it displays the `EmployeeId` and `Mail` attributes that the workflow just computed:

```

Summary form:
<Form Identifier="Workflow_Directory_User_New_Summary" EntityType="Directory_UserRecord"> <Control DisplayName_L1="Important Information" OutputType="LayoutFieldset"> <Control Binding="UserIdentifier" /> <Control Binding="Email" /> <Control Binding="Login" /> </Control></Form><WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_NewInternal" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_NewInternal:Request" FormTitle_L1="New Employee"> <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_NewInternal_Base" />
  <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_New_Summary">
</WorkflowCreateRecordEntityForm>

```

![UI Summary](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-create-mono/howto_resourcecreationmono_summary_v602.webp)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right
users. See the [Workflows](/docs/identitymanager/6.2/integration/workflows/index.md) topic for additional information.

Below is an example of an access control rule where the `Administrator` profile gets the permissions
for the whole creation request and review from the previously created workflow:

```

<AccessControlRule Profile="Administrator" EntityType="Workflow_Directory_User" Identifier="Administrator_Workflows_Directory_User_Internal*" DisplayName_L1="Administrator_Workflows_Directory_User_Internal*">

  Permissions for the Request activity:
  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request/ActionPending" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Aborted" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Request/Purged" CanExecute="true" />

  Permissions for the Review activity:
  <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review/ReviewPending" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review/RefinePending" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Aborted" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_NewInternal/Review/Purged" CanExecute="true" /></AccessControlRule>

```

## Create Menu Items in the UI

[ Menu Item ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)must be defined to
make the workflow accessible in the UI.

Creating a new resource, an interesting location for this workflow could be the users list page.

![Workflow Menu Items - Users List](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-create-multi/menuitems_userslist_v603.webp)

To create a menu item here for the new workflow, you can add the following XML configuration to the
existing menu items list:

```

<MenuItem Identifier="Menu_Search_Directory_User" DisplayName_L1="Menu"> ...
  <MenuItem Identifier="Menu_Search_Directory_User_NewInternal" DisplayName_L1="New Employee" IconCode="AddFriend" Workflow="Directory_User_NewInternal" /></MenuItem Identifier="Menu_Search_Directory_User" DisplayName_L1="Menu">

```

## Add Aspects

For each workflow, it is possible to add aspects according to the workflow's purpose.

## Homonym Detection (Optional)

To perform a homonymy check on a workflow and thus prevent user duplicates see the
[ Configure a Homonym Detection ](/docs/identitymanager/6.2/integration/workflows/index.md)topic for additional
information.

When using records, the homonym detection displays the list of records and not just the list of
users.

Below is an example where a homonym entity link, based on the user's name, is called in the workflow
form:

```

Homonym detection:
<HomonymEntityLink Identifier="Homonym_Directory_UserRecord" FormEntityType="Directory_UserRecord">
  <Filter
    Property1="FirstName"
    Property2="LastName"
  /> <Filter
    Property1="FirstName" ComparisonProperty1="LastName"
    Property2="LastName" ComparisonProperty2="FirstName"
  /> <Filter
    Property1="FirstName"
    Property2="LastName" ComparisonProperty2="BirthName"
  /></HomonymEntityLink>

Partial form for user data:
...
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" OutputType="LayoutFieldset" HomonymEntityLink="Homonym_Directory_UserRecord"> <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" OutputType="LayoutRowset"> <Control Binding="LastName" IsRequired="true" /> <Control Binding="FirstName" IsRequired="true" /> </Control></Control>...

```

![UI Homonym Detection](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-create-multi/howto_resourcecreationmono_homonym_v603.webp)

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Identity Manager, see the
[Customize Display Tables](/docs/identitymanager/6.2/troubleshooting/common-issues.md) topic for additional
information.

# For Resource Creation (Multi Records)

This section guides you through the procedure for the creation of a workflow to create a new
resource with several records.

## Declare a Workflow

This [ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md) is made of four
activities:

1. `Action With Refine`: sends the creation request with a possibility of delegation.
2. `Persist Only Resources`: saves the collected data to the repository without triggering
   provisioning.
3. `Review With Feedback`: reviews the creation request with the possibility of getting feedback
   from another user.
4. `Persist`: saves the collected data and triggers provisioning.

See the [ Activity Templates ](/docs/identitymanager/6.2/integration/workflows/index.md) topic for additional information.

The example below creates a workflow to create a new helpdesk worker, with the possibility to create
several records at once for said worker.

```

<Workflow Identifier="Helpdesk_Directory_User_New" DisplayName_L1="User - New Employee (multi record)" VariablesType="Workflow_Directory_User"> <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" /> <Activity Identifier="PersistDraft" DisplayName_L1="Draft Creation" Template="PersistOnlyResources" /> <Activity Identifier="Review" DisplayName_L1="Review" Template="ReviewWithFeedback" /> <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

## Create Forms

The XML configuration below represents the creation of a
[Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) that defines the elements to
display in the workflow.

Here we create three structured forms, all to be called in our final workflow form.

```

First form for the user's identification data:
<Form Identifier="Workflow_Helpdesk_Directory_User_Base" EntityType="Directory_User"> <Control DisplayName_L1="User Information" OutputType="LayoutFieldset"> <Control Binding="Identifier" /> <Control Binding="EmployeeId" /> <Control Binding="IsDraft" /> </Control></Form>

Second form for the user's data shared with all records:
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Shared" EntityType="Directory_UserRecord">

  Section for user's personal data, here their name and phone numbers:
  <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset"> <Control DisplayName_L1="Full Name" OutputType="LayoutRowset"> <Control Binding="LastName" IsRequired="true" /> <Control Binding="FirstName" IsRequired="true" /> </Control> <Control DisplayName_L1="Phone Numbers" OutputType="LayoutRowset"> <Control Binding="PhoneNumber" /> <Control Binding="MobileNumber" /> </Control> </Control>

  Section for user's contract data, here their contract's type, start and end dates:
  <Control DisplayName_L1="Contract" OutputType="LayoutFieldset"> <Control Binding="UserType" IsRequired="true" /> <Control Binding="ContractStartDate" IsRequired="true" /> <Control Binding="ContractEndDate" InputType="Date" AddedMinutes="1440" /> </Control></Form>

Third form for the user's data specific to each record individually, so here position information:
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Unique" EntityType="Directory_UserRecord"> <Control DisplayName_L1="Position" OutputType="LayoutFieldset"> <Control Binding="Title" /> <Control Binding="Organization" /> <Control Binding="Site" /> <Control Binding="StartDate"/> <Control Binding="EndDate" InputType="Date" AddedMinutes="1440" /> </Control></Form>

```

## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed
when launching the workflow. It has the type corresponding to a resource's creation with several
records, i.e. `WorkflowCreateSeveralRecordEntityForm` and it must specify the workflow's context
(the entity type of the involved resources, the main property, the activity when the form is called,
etc):

```

<WorkflowCreateSeveralRecordsEntityForm Identifier="Workflow_Helpdesk_Directory_User_New" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_Helpdesk" WorkflowRequestType="Helpdesk" Activity="Helpdesk_Directory_User_New:Request" FormTitle_L1="New User (helpdesk)"/>

```

A `WorkflowCreateSeveralRecordEntityForm` requires the following child elements:

- `MainControl` that defines the user's data that never changes so identification data, and calls
  the firstform created previously;

```

<WorkflowCreateSeveralRecordsEntityForm Identifier="Workflow_Helpdesk_Directory_User_New" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_Helpdesk" WorkflowRequestType="Helpdesk" Activity="Helpdesk_Directory_User_New:Request" FormTitle_L1="New User (helpdesk)">
  <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_User_Base"/>
</WorkflowCreateSeveralRecordsEntityForm>

```

- `RecordControl` that defines the record data shared with all records, and calls the secondform
  created previously;

```

<WorkflowCreateSeveralRecordsEntityForm Identifier="Workflow_Helpdesk_Directory_User_New" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_Helpdesk" WorkflowRequestType="Helpdesk" Activity="Helpdesk_Directory_User_New:Request" FormTitle_L1="New User (helpdesk)"> <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_User_Base"/>
  <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Shared"/>
</WorkflowCreateSeveralRecordsEntityForm>

```

In a situation where users can have several positions but also several contracts, then contract data
would be part of the form called by `RecordUniqueItemControl` instead of `RecordControl`.

In a situation where positions, contracts and personal data are all configured as records because we
want to be able to anticipate changes for example, then there would not be any data shared by all
records. Then `RecordControl` would be empty. See the
[ Position Change via Records ](/docs/identitymanager/6.2/identity-management/user-lifecycle/position-changes.md)
topic for additional information.

> ```
>
> <WorkflowCreateSeveralRecordsEntityForm ... > ...
> <RecordControl OutputType="LayoutContainer"> <Control OutputType="LayoutContainer" /> </RecordControl>
> ...
> </WorkflowCreateSeveralRecordsEntityForm>
>
> ```

- `RecordUniqueItemControl` (optional but recommended) that defines the record data specific to each
  record individually, and calls the thirdform created previously.

```

<WorkflowCreateSeveralRecordsEntityForm Identifier="Workflow_Helpdesk_Directory_User_New" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_Helpdesk" WorkflowRequestType="Helpdesk" Activity="Helpdesk_Directory_User_New:Request" FormTitle_L1="New User (helpdesk)"> <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_User_Base"/> <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Shared"/>
  <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Unique"/>
</WorkflowCreateSeveralRecordsEntityForm>

```

![UI Form](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-create-multi/howto_resourcecreationmulti_form_v603.webp)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right
users. Read about [ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)s
permissions.

Below is an example of an access control rule where the `Administrator` profile gets the permissions
for the whole creation request and review from the previously created workflow:

```

<AccessControlRule Profile="Administrator" EntityType="Workflow_Directory_User" Identifier="Administrator_Workflows_Helpdesk_Directory_User_New*" DisplayName_L1="Administrator_Workflows_Helpdesk_Directory_User_New*">

  Permissions for the Request activity:
  <Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/ActionPending" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Aborted" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/Purged" CanExecute="true" />

  Permissions for the Review activity:
  <Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Review/ReviewPending" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Review/RefinePending" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Review/Aborted" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Review/Purged" CanExecute="true" /></AccessControlRule>

```

## Create Menu Items in the UI

[ Menu Item ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) must be defined
to make the workflow accessible in the UI.

Creating a new resource, an interesting location for this workflow could be the users list page.

![Workflow Menu Items - Users List](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-create-multi/menuitems_userslist_v603.webp)

To create a menu item here for the new workflow, you can add the following XML configuration to the
existing menu items list:

```

<MenuItem Identifier="Menu_Search_Directory_User" DisplayName_L1="Menu"> ...
  <MenuItem Identifier="Menu_Search_Directory_User_Helpdesk_New" DisplayName_L1="New User (helpdesk)" IconCode="AddFriend" Workflow="Helpdesk_Directory_User_New" />
</MenuItem Identifier="Menu_Search_Directory_User" DisplayName_L1="Menu">

```

## Add Aspects

For each workflow, it is possible to add aspects according to the workflow's purpose.

## Homonym Detection (Optional)

To perform a homonymy check on a workflow and thus prevent user duplicates see the
[ Configure a Homonym Detection ](/docs/identitymanager/6.2/integration/workflows/index.md) topic for additional
information.

When using records, the homonym detection displays the list of records and not just the list of
users.

Below is an example where a homonym entity link, based on the user's name, is called in the workflow
form:

```

Homonym detection:
<HomonymEntityLink Identifier="Homonym_Directory_UserRecord" FormEntityType="Directory_UserRecord">
  <Filter
    Property1="FirstName"
    Property2="LastName"
  /> <Filter
    Property1="FirstName" ComparisonProperty1="LastName"
    Property2="LastName" ComparisonProperty2="FirstName"
  /> <Filter
    Property1="FirstName"
    Property2="LastName" ComparisonProperty2="BirthName"
  /></HomonymEntityLink>

Partial form for user data:
...
<Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" OutputType="LayoutFieldset" HomonymEntityLink="Homonym_Directory_UserRecord"> <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" OutputType="LayoutRowset"> <Control Binding="LastName" IsRequired="true" /> <Control Binding="FirstName" IsRequired="true" /> </Control></Control>...

```

![UI Homonym Detection](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-create-multi/howto_resourcecreationmono_homonym_v603.webp)

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Identity Manager, see the
[Customize Display Tables](/docs/identitymanager/6.2/troubleshooting/common-issues.md) topic for additional
information.

Below is an example of a display table for our situation:

```

<DisplayTable Identifier="Directory_UserRecord_SeveralRecords" EntityType="Directory_UserRecord" DisplayTableDesignElement="table"> <Column DisplayBinding="Title.InternalDisplayName" DisplayName_L1="Title" IsDisplayInSummaryView="true" ColumnSize="1" /> <Column DisplayBinding="Organization.InternalDisplayName" DisplayName_L1="Department" IsDisplayInSummaryView="true" ColumnSize="1" /> <Column DisplayBinding="Location.InternalDisplayName" DisplayName_L1="Site" IsDisplayInSummaryView="true" ColumnSize="1" /> <Column DisplayBinding="StartDate" DisplayName_L1="Start Date" IsDisplayInSummaryView="true" ColumnSize="1" /> <Column DisplayBinding="EndDate" DisplayName_L1="End Date" IsDisplayInSummaryView="true" ColumnSize="1" /></DisplayTable>

```

# For Resource Update (Mono Record)

This section guides you through the procedure for the creation of a workflow to schedule the
replacement of the unique record of an existing resource with a new one.

## Declare a Workflow

This [ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md) is made of two
activities:

1. `Action With Refine`: sends the resource's record update request with a possibility of
   delegation.
2. `Persist`: saves the collected data and triggers provisioning.

See the [ Activity Templates ](/docs/identitymanager/6.2/integration/workflows/index.md) topic for additional information.

The example below creates a workflow to update only the user's name.

```

  <Workflow Identifier="Directory_User_ChangeName" DisplayName_L1="User - Update Name" VariablesType="Workflow_Directory_User"> <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" /> <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /> </Workflow>

```

For now, our workflow works with an immediate validation and an immediate effect.

## Create Forms

The XML configuration below represents the creation of a
[Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) that defines the elements to
display in the workflow.

Here we just have the full name field to update the corresponding attributes for a given user:

```

<Form Identifier="Workflow_Directory_User_ChangeName_Base" EntityType="Workflow_Directory_User"> <Control DisplayName_L1="Full Name" OutputType="LayoutRowset" EntityType="Directory_UserRecord"> <Control Binding="LastName" /> <Control Binding="FirstName" /> </Control></Form>

```

## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed
when launching the workflow. It has the type corresponding to a (unique) record's replacement, i.e.
`WorkflowAddAndEndRecordEntityForm` and it must specify the workflow's context (the entity type of
the involved resources, the main property, the activity when the form is called, etc):

```

<WorkflowAddAndEndRecordEntityForm Identifier="Workflow_Directory_User_ChangeName" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_ChangeName:Request" HideRoles="true" FormTitle_L1="Change Name"></WorkflowAddAndEndRecordEntityForm>

```

A `WorkflowAddAndEndRecordEntityForm` requires the following child elements:

- `MainControl` that defines user's data;

```

<WorkflowAddAndEndRecordEntityForm Identifier="Workflow_Directory_User_ChangeName_Base" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_ChangeName:Request" HideRoles="true" FormTitle_L1="Change Name">
  <MainControl OutputType="LayoutContainer"/>
</WorkflowAddAndEndRecordEntityForm>

```

The `MainControl` attribute is here an empty container, because it is a mandatory attribute that is
not involved in the changes of this workflow.

- `RecordControl` that defines record data, and call the form created previously.

```

<WorkflowAddAndEndRecordEntityForm Identifier="Workflow_Directory_User_ChangeName" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_ChangeName:Request" HideRoles="true" FormTitle_L1="Change Name" > <MainControl OutputType="LayoutContainer"/>
  <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_ChangeName_Base" />
</WorkflowAddAndEndRecordEntityForm>

```

![UI Form](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-update-mono/howto_resourceupdatemono_form_v603.webp)

`End of transition` sets the date for the change of records scheduled by this form.

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right
users. Read about [ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)s
permissions.

Below is an example of an access control rule where the `Administrator` profile gets the permissions
for the whole update request from the previously created workflow:

```

<AccessControlRule Profile="Administrator" EntityType="Workflow_Directory_User" Identifier="Administrator_Workflows_Directory_User_*" DisplayName_L1="Administrator_Workflows_Directory_User_*"> <Entry Permission="/Custom/Workflows/Directory_User_ChangeName/Request/ActionPending" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_ChangeName/Request/RefinePending" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_ChangeName/Request/Aborted" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_ChangeName/Request/Purged" CanExecute="true" /></AccessControlRule>

```

## Create Menu Items in the UI

[ Menu Item ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) must be defined
to make the workflow accessible in the UI.

Updating an existing resource, this workflow manages one given resource at a time. Hence an
interesting location for this workflow could be the individual view page of users.

![Workflow Menu Items - User's Page](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-update-mono/menuitems_userview_v603.webp)

To create a menu item here for the new workflow, you can add the following XML configuration to the
existing menu items list:

```

<MenuItem Identifier="Menu_Directory_User" DisplayName_L1="Menu"> <MenuItem Identifier="Menu_Directory_User_Changes" DisplayName_L1="Actions"> <MenuItem Identifier="Menu_Directory_User_Changes_Update" DisplayName_L1="Section"> ...
      <MenuItem Identifier="Menu_Directory_User_Changes_ChangeName" DisplayName_L1="Update Name" IconCode="Edit" Workflow="Directory_User_ChangeName" />
    </MenuItem> </MenuItem></MenuItem>

```

## Add Aspects

For each workflow, it is possible to add aspects according to the workflow's purpose.

## Homonym Detection (Optional)

To perform a homonymy check on a workflow and thus prevent user duplicates, see the
[ Configure a Homonym Detection ](/docs/identitymanager/6.2/integration/workflows/index.md) topic for additional
information.

When using records, the homonym detection displays the list of records and not just the list of
users.

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Identity Manager, see the
[Customize Display Tables](/docs/identitymanager/6.2/troubleshooting/common-issues.md) topic for additional
information.

# For Resource Update (Multi Records)

This section guides you through the procedure for the creation of a workflow to update an existing
resource through its several records.

## Declare a Workflow

This [ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md) is made of three
activities:

1. `Action With Refine`: sends the resource's records update request with a possibility of
   delegation.
2. `Review With Feedback`: reviews the update request with the possibility of getting feedback from
   another user.
3. `Persist`: saves the collected data and triggers provisioning.

See the [ Activity Templates ](/docs/identitymanager/6.2/integration/workflows/index.md) topic for additional information.

The example below creates a workflow to update the records of an existing user:

```

<Workflow Identifier="Directory_User_UpdateSeveralRecords" DisplayName_L1="User - Manage positions" VariablesType="Workflow_Directory_User"> <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" /> <Activity Identifier="Review" DisplayName_L1="Review" Template="ReviewWithFeedback" /> <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

## Create Forms

The XML configuration below represents the creation of a
[Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) that defines the elements to
display in the workflow.

Here we create three structured forms, all to be called in our final workflow form:

```

First form for the user's record data, shared with all records:
<Form Identifier="Directory_User_UpdateSeveralRecords_Shared" EntityType="Directory_UserRecord"> <Control DisplayName_L1="Contract" OutputType="LayoutFieldset"> <Control Binding="ContractStartDate" /> <Control Binding="ContractEndDate" AddedMinutes="1440" /> </Control></Form>

Second form for the user's record data, specific to each record individually:
<Form Identifier="Directory_User_UpdateSeveralRecords_Base" EntityType="Workflow_Directory_User"> <Control OutputType="LayoutContainer" EntityType="Directory_UserRecord"> <Control DisplayName_L1="Position" OutputType="LayoutFieldset"> <Control Binding="Title" IsRequired="true" /> <Control Binding="Department" /> <Control Binding="Site" DefaultValueBinding="Department.Manager.MainRecord.Site" /> <Control Binding="StartDate" /> <Control Binding="EndDate" /> </Control> </Control></Form>

```

## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed
when launching the workflow. It has the type corresponding to a resource's update with several
records, i.e. `WorkflowUpdateSeveralRecordEntityForm` and it must specify the workflow's context
(the entity type of the involved resources, the main property, the activity when the form is called,
etc):

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords"></WorkflowUpdateSeveralRecordsEntityForm>

```

`WorkflowUpdateSeveralRecordEntityForm` displays a date picker for the end of transition, to
schedule the record replacement.

A `WorkflowUpdateSeveralRecordEntityForm` requires the following child elements:

- `MainControl` that defines user's data;

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords">
  <MainControl OutputType="LayoutContainer" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

The `MainControl` attribute is here an empty container, because it is a mandatory attribute that is
not involved in the changes of this workflow.

- `RecordControl` that defines the record data shared with all records and calls the firstform
  created previously;

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords"> <MainControl OutputType="LayoutContainer"/>
  <RecordControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

- `RecordUniqueItemControl` that defines the record data specific to each record individually, and
  calls the secondform created previously;

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords"> <MainControl OutputType="LayoutContainer"/> <RecordControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared"/>
  <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

- `RecordSlaveControl` that copies an existing record to be the base, i.e. pre-fill the fields, for
  the update of record data specific to each record individually. Thus it calls the same form as
  `RecordUniqueItemControl`.

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords"> <MainControl OutputType="LayoutContainer"/> <RecordControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared"/> <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" />
  <RecordSlaveControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

- `RecordSlaveUniqueItemControl` that copies an existing record to be the base, i.e. pre-fill the
  fields, for the update of record data shared with all records. Thus it calls the same form as
  `RecordControl`.

```

<WorkflowUpdateSeveralRecordsEntityForm RecordFilter="CurrentAndFuture" Identifier="Directory_User_UpdateSeveralRecords" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_UpdateSeveralRecords:Request" FormTitle_L1="Manage positions" RecordTable="Directory_User_UpdateSeveralRecords"> <MainControl OutputType="LayoutContainer"/> <RecordControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared"/> <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" /> <RecordSlaveControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Base" />
  <RecordSlaveUniqueItemControl OutputType="TransformImport" EmbeddedForm="Directory_User_UpdateSeveralRecords_Shared" />
</WorkflowUpdateSeveralRecordsEntityForm>

```

The `RecordSlaveControl` attribute calls here the same form as `RecordUniqueControl`, because it
copies part of the main record to pre-fill the fields of `RecordUniqueControl`.

![UI Form](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-update-multi/howto_resourceupdatemulti_form_v603.webp)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right
users. Read about [ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)s
permissions.

Below is an example of an access control rule where the `Administrator` profile gets the permissions
for the whole update request from the previously created workflow:

```

<AccessControlRule Profile="Administrator" EntityType="Workflow_Directory_User" Identifier="Administrator_Workflows_Directory_User_*" DisplayName_L1="Administrator_Workflows_Directory_User_*"> <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Request/ActionPending" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Request/RefinePending" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Request/Aborted" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Request/Purged" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Review/ReviewPending" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Review/RefinePending" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Review/Aborted" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_UpdateSeveralRecords/Review/Purged" CanExecute="true" /></AccessControlRule>

```

## Create Menu Items in the UI

[ Menu Item ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) must be defined
to make the workflow accessible in the UI.

Updating an existing resource, this workflow manages one given resource at a time. Hence an
interesting location for this workflow could be the individual view page of users.

![Workflow Menu Items - User's Page](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-update-mono/menuitems_userview_v603.webp)

To create a menu item here for the new workflow, you can add the following XML configuration to the
existing menu items list:

```

<MenuItem Identifier="Menu_Directory_User" DisplayName_L1="Menu"> <MenuItem Identifier="Menu_Directory_User_Changes" DisplayName_L1="Actions"> <MenuItem Identifier="Menu_Directory_User_Changes_Update" DisplayName_L1="Section"> ...
      <MenuItem Identifier="Menu_Directory_User_Changes_ManagePositions" DisplayName_L1="Manage Positions" IconCode="Edit" Workflow="Directory_User_UpdateSeveralRecords" />
    </MenuItem> </MenuItem></MenuItem>

```

## Add Aspects

For each workflow, it is possible to add aspects according to the workflow's purpose.

## Homonym Detection (Optional)

To perform a homonymy check on a workflow and thus prevent user duplicates,see the
[ Configure a Homonym Detection ](/docs/identitymanager/6.2/integration/workflows/index.md) topic for additional
information.

When using records, the homonym detection displays the list of records and not just the list of
users.

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Identity Manager, see the
[Customize Display Tables](/docs/identitymanager/6.2/troubleshooting/common-issues.md) topic for additional
information.

# For Resource Update (No Record)

This section guides you through the procedure for the creation of a workflow to update a simple
resource, i.e. to update, within a given resource, properties that do not involve records.

## Declare a Workflow

This [ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md) is made of two
activities:

1. `Action With Refine`: sends the resource's update request with a possibility of delegation.
2. `Persist`: saves the collected data and triggers provisioning.

See the [ Activity Templates ](/docs/identitymanager/6.2/integration/workflows/index.md) topic for additional information.

The example below creates a workflow to update only the user's `IsDraft` attribute.

```

<Workflow Identifier="Directory_User_ChangeIsDraft" DisplayName_L1="User - Update IsDraft" VariablesType="Workflow_Directory_User"> <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" /> <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

## Create Forms

The XML configuration below represents the creation of a
[Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) that defines the elements to
display in the workflow.

Here we just have one field called `IsDraft` to update the corresponding boolean attribute for a
given user:

```

<Form Identifier="Workflow_Directory_User_ChangeIsDraft_Base" EntityType="Workflow_Directory_User"> <Control DisplayName_L1="IsDraft" OutputType="LayoutRowset" EntityType="Directory_User"> <Control Binding="IsDraft" /> </Control></Form>

```

## Link the Forms to the Workflow

After creating a workflow with given activities, it is necessary to create the form to be displayed
when launching the workflow. It has the type corresponding to a resource's update, i.e.
`WorkflowEditEntityForm` and it must specify the workflow's context (the entity type of the involved
resources, the main property, the activity when the form is called, etc):

```

<WorkflowEditEntityForm Identifier="Workflow_Directory_User_ChangeIsDraft" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" WorkflowRequestType="Self" Activity="Directory_User_ChangeIsDraft:Request" HideRoles="true" FormTitle_L1="Change IsDraft"/>

```

A `WorkflowEditEntityForm` requires one child element `MainControl` that defines the actual content
of the workflow's form and calls the form created previously:

```

<WorkflowEditEntityForm Identifier="Workflow_Directory_User_ChangeIsDraft" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" WorkflowRequestType="Self" Activity="Directory_User_ChangeIsDraft:Request" HideRoles="true" FormTitle_L1="Change IsDraft">
  <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_ChangeIsDraft_Base" />
</WorkflowEditEntityForm>

```

![UI Form](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-update-resource/howto_resourceupdateno_form_v603.webp)

### Add a summary (Optional)

Another child element `SummaryControl` can be added to insert a summary part, i.e. the form used
after the workflow execution to show some values, most of the time those affected by the workflow,
typically the properties editable in the workflow or generated properties. So in our situation, it
displays the `IsDraft` attribute that the user just changed:

```

<WorkflowEditEntityForm Identifier="Workflow_Directory_User_ChangeIsDraft" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" WorkflowRequestType="Self" Activity="Directory_User_ChangeIsDraft:Request" HideRoles="true" FormTitle_L1="Change IsDraft"> <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_ChangeIsDraft_Base" />
  <SummaryControl OutputType="LayoutContainer" EntityType="Directory_User"> <Control Binding="IsDraft" /> </SummaryControl>
</WorkflowEditEntityForm>

```

![UI Summary](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-update-resource/howto_resourceupdateno_summary_v603.webp)

## Assign the Right Permissions

Some profiles must get specific permissions so that the workflow is visible and usable by the right
users. Read about [ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)s
permissions.

Below is an example of an access control rule where the `Administrator` profile gets the permissions
for the whole update request from the previously created workflow:

```

<AccessControlRule Profile="Administrator" EntityType="Workflow_Directory_User" Identifier="Administrator_Workflows_Directory_User_Internal*" DisplayName_L1="Administrator_Workflows_Directory_User_Internal*"> <Entry Permission="/Custom/Workflows/Directory_User_ChangeIsDraft/Request/ActionPending" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_ChangeIsDraft/Request/RefinePending" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_ChangeIsDraft/Request/Aborted" CanExecute="true" /> <Entry Permission="/Custom/Workflows/Directory_User_ChangeIsDraft/Request/Purged" CanExecute="true" /></AccessControlRule>

```

## Create Menu Items in the UI

[ Menu Item ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) must be defined
to make the workflow accessible in the UI.

Updating an existing resource, this workflow manages one given resource at a time. Hence an
interesting location for this workflow could be the individual view page of users.

![Workflow Menu Items - User's Page](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-update-mono/menuitems_userview_v603.webp)

To create a menu item here for the new workflow, you can add the following XML configuration to the
existing menu items list:

```

<MenuItem Identifier="Menu_Directory_User" DisplayName_L1="Menu"> <MenuItem Identifier="Menu_Directory_User_Changes" DisplayName_L1="Actions"> <MenuItem Identifier="Menu_Directory_User_Changes_Update" DisplayName_L1="Section"> ...
      <MenuItem Identifier="Menu_Directory_User_Changes_ChangeIsDraft" DisplayName_L1="Change IsDraft" IconCode="Edit" Workflow="Directory_User_ChangeIsDraft" />
    </MenuItem> </MenuItem></MenuItem>

```

## Add Aspects

For each workflow, it is possible to add aspects according to the workflow's purpose.

## Customize the Display Table (Optional)

To configure a display table different from the default one provided by Identity Manager, see the
[Customize Display Tables](/docs/identitymanager/6.2/troubleshooting/common-issues.md) topic for additional
information.

# Workflows

In software business, a [ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md) is a
series of specific actions taken by specific people to accomplish specific tasks. For Identity
Manager, workflows are models of business workflows, processes or procedures.

## Overview

Workflows model business processes and update data within Identity Manager, they handle managed
systems only indirectly through Identity Manager. They are engaged in order to complete a task,
assigning rights for instance. It is a way of getting work done, a series of steps that are required
to be completed sequentially. Most of the time, Identity Manager's workflows are made for:

1. manual entitlement requests = request / send notification(s) / approve / assign entitlement.
2. addition/update/deletion of resources (used in practice for identities) = create / give basic
   entitlements / review / apply changes.

Workflows are very configurable objects with many available options. However, the most efficient way
to use workflows in IGA is to keep them simple. Identity Manager's demo workflows constitute
effective examples.

A workflow is made of several elements:

- a series of activities that constitutes the workflow;
- a form that collects input data;
- permissions required to realize the workflow's activities;
- menu items that make the workflow and its activities accessible;
- aspects that allow specific actions to be performed;
- a summary (optional) of the workflow's results;
- a homonym detection (optional) that prevents duplicates in resources;
- a display table (optional) that replaces Identity Manager's default table displaying the data of
  the created/modified resource.

### Technical principles

- A workflow is linked to
  one[ Entity Type ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and concerns only
  resources from said entity type. For example, a workflow can be linked to `Directory_User` or
  `Directory_Department` according to the workflow's purpose, but not both together.
- The aim of a workflow is to get input data (either a form or just an approval) from users involved
  in the workflow, then build a change set, and finally apply said change set to the relevant
  resource.
- Starting a workflow means starting its first activity.

## Activities

A workflow is made of successive activities, each of which is assigned an
[ Activity Templates ](/docs/identitymanager/6.2/integration/workflows/index.md)that defines how transitions occur from a
workflow step to another.

Activities never run in parallel in a workflow. Each activity can start once the previous one
reached its final state.

## Forms

Workflows use [Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) to collect input
data through the UI.

A form is a set of fields, configured with controls. A control can define a field to fill, a fields
set, call an existing form, etc. depending on its output type. To be displayed in the UI, and
potentially filled by a given user with the appropriate data, a form must have a type.

Forms without a type can be created in order to be called in other forms with a type. It can be
useful to structure your forms, and to avoid rewriting a part of form that is needed in most forms
for example.

### Form types

Identity Manager provides a few form types. Each form type implies the necessity of specific
controls as child elements with specific purposes.

The following table presents the required child controls required for each form type applicable to a
workflow's input form:

- **M** for `MainControl`(required) groups resource data apart from record data;
- **Su** for `SummaryControl`(optional when no/mono record) sums up resource data, mostly computed
  properties, after the workflow's execution;
- **R** for `RecordControl`(required when handling records) groups the record data shared with all
  records;
- **RUI** for `RecordUniqueItemControl`(recommended when handling records) groups the record data
  specific to each record individually;
- **RSUI** for `RecordSlaveUniqueItemControl`(optional when updating multi records) appoints an
  existing record to be the base of the fields' pre-filling, before the update of the record data
  shared with all records;
- **RS** for `RecordSlaveControl`(recommended when updating multi records) appoints an existing
  record to be the base of the fields' pre-filling, before the update of the record data specific to
  each record individually;
- **RSu** for `RecordSummaryControl`(optional when handling mono record) sums up record data, mostly
  computed properties, after the workflow's execution.

| Form Type                                  | M    | Su   | R    | RUI   | RSUI  | RS   | RSu  |
| ------------------------------------------ | ---- | ---- | ---- | ----- | ----- | ---- | ---- |
| Workflow**Create**Entity Form              | Req. | Opt. |      |       |       |      |      |
| Workflow**Edit**Entity Form                | Req. | Opt. |      |       |       |      |      |
| Workflow**UpdateRecord**Entity Form        | Req. | Opt. | Req. | Reco. |       |      | Opt. |
| Workflow**AddRecord**Entity Form           | Req. | Opt. | Req. | Reco. |       |      | Opt. |
| Workflow**AddAndEndRecord**Entity Form     | Req. | Opt. | Req. | Reco. |       |      | Opt. |
| Workflow**CreateRecord**Entity Form        | Req. | Opt. | Req. |       |       |      | Opt. |
| Workflow**CreateSeveralRecord**Entity Form | Req. |      | Req. | Reco. |       |      |      |
| Workflow**UpdateSeveralRecord**Entity Form | Req. |      | Req. | Reco. | Reco. | Opt. |      |
| Workflow**UpdateRecord**Entities Form      | Req. | Opt. | Req. | Reco. |       |      | Opt. |

## Permissions

For each workflow, some permissions must be assigned to specific
[ Profile ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) so that said profiles are
entitled to realize the workflow's actions.

While assigning the specific permissions of a workflow, it is necessary to assign the involved
profiles a few essential rights via the
[ Workflow Access Control Rules ](/docs/identitymanager/6.2/integration/workflows/index.md)
scaffolding.

A workflow needs a permission for each of all its activity states involving user interaction. This
means that, for example, the activities following the templates `Persist` and
`Persist Only Resources` do not require any permission. This also means that, in the example of the
`Action` template, a workflow would need permissions for the states `ActionPending`, `Aborted` and
`Purged` (because deletion requires an authorization), but not for the state `Executed` that does
not involve user interaction or special authorization. See the
[ Activity Templates ](/docs/identitymanager/6.2/integration/workflows/index.md) topic for additional information.

All these permissions can be shared and distributed among several profiles, according to the purpose
of the workflow.

Identity Manager's permissions are assigned through
[Access Control Rule](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) and
follow the naming rule:
`/Custom/workflows/{workflow_identifier}/{activity_identifier}/{activityTemplateState_shortIdentifier}`.

> For example: `Permission="/Custom/Workflows/Directory_User_StartInternal/Request/ActionPending"`
> gives the right to act from the state `ActionPending` (so save, execute, etc.), inside a
> previously created activity `Request`, inside the workflow `Directory_User_StartInternal`.

A permission specifying the activity without the activity state gives the permissions for all
activity states in this activity.

For example: `Permission="/Custom/Workflows/Directory_User_StartInternal/Request"`
**Caution**: this way of writing permissions is unsafe in case of a modification in the activity. So
use it only for a "super admin" kind of profile if you are certain you want to give all rights.

## Menu Items

[ Menu Item ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) make workflows
accessible from the UI.

Identity Manager's UI is configured so that workflows are accesible from:

- the list of users accessible from the **Directory** section on the home page;
  ![Workflow Menu Items - Users List](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-create-multi/menuitems_userslist_v603.webp)
- the view page of a given user. In this case, the workflows manipulate the selected user.
  ![Workflow Menu Items - User's Page](/img/product_docs/identitymanager/identitymanager/integration-guide/workflows/how-to/workflow-update-mono/menuitems_userview_v603.webp)

## Aspects

An [Aspects](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md) definition allows an action to
be performed at a specific point in a workflow. Identity Manager provides a few
[Aspects](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md) templates that give the
opportunity to delegate administration, to notify people of a request's progress and to compute
special values like unique logins or email addresses.

## Summaries (Optional)

A summary can be displayed at the end of a workflow to sum up the collected information. The
displayed data is configured through the `SummaryControl` or `RecordSummaryControl` introduced
previously. A summary is particularly useful for workflows that compute properties like the
`EmployeeId` or the email address. Thus calculated fields can be displayed after the workflow's
execution.

## Homonym Detections (Optional)

A homonym search checks if a resource already exists in the system before creating/modifying it,
preventing duplicates. It is configured through a
[ Homonym Entity Link ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md).

See the [ Configure a Homonym Detection ](/docs/identitymanager/6.2/integration/workflows/index.md)topic for
additional information.

## Display Tables (Optional)

Identity Manager provides a default display table to show the created/modified resource's data, but
you can configure your own.

See the [Display Table](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for
additional informatrion.

# Workflow Uses

An Identity Manager [ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md) is the
sequence of processes that a company has established to manage identities across the organization.
Workflows makes an approval business process more efficient by managing and tracking all of the
human tasks involved with the process and by providing a record of the process after it is
completed.

The identity management [ Workflow ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)
can be broken into four key areas:

## 1. Onboarding

The initial creation of the user. This can occur manually within the identity management system or
it could be triggered from an HR system. Here is the xml configuration to create the user onboarding
Workflow in Identity Manager :

```

<Workflow Identifier="User_Onboarding" DisplayName_L1="User - New Employee" VariablesType="Workflow_User"> <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" /> <Activity Identifier="PersistDraft" DisplayName_L1="Draft Creation" Template="PersistOnlyResources" /> <Activity Identifier="Review" DisplayName_L1="Review" Template="ReviewWithFeedback" /> <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

The _"User_Onboarding"_ Workflow is composed of the following activities:

- _"Request"_ to initialize the creation of an user in Identity Manager.
- _"PersistDraft"_ to save a preliminary version of the user object.
- _"Review"_ to validate or not the requested item.
- _"Persist"_ to take into account the requested item.

## 2. User Modifications

After the initial setup of access, there are ongoing changes. Those changes can center in on a
user's rights. These rights may need to be expanded or contracted. The user's information may need
to be modified. Here is an example to create the user change name Workflow in Identity Manager :

```

<Workflow Identifier="User_ChangeName" DisplayName_L1="Collaborateur - Changement du nom" VariablesType="Workflow_User"> <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" /> <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

## 3. IT Resource Modifications

The other area of on-going changes is the addition and removal of various IT resources. These
resources can include devices, applications, and networks. Here is the xml configuration to create
the resource modifications Workflow in Identity Manager :

```

<Workflow Identifier="User_ResourcesUpdate" DisplayName_L1="Collaborateur - Gerer les droits" VariablesType="Workflow_Directory_User"> <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" /> <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

## 4. Offboarding

The end of the identity lifecycle is the offboarding of a user. Credentials are terminated and the
user's account access is terminated everywhere. Here is the xml configuration to create the user
offboarding Workflow in Identity Manager:

```

<Workflow Identifier="User_Offboarding" DisplayName_L1="Depart d'un collaborateur" VariablesType="Workflow_User"> <Activity Identifier="Request" DisplayName_L1="Request" Template="ActionWithRefine" /> <Activity Identifier="Persist" DisplayName_L1="Commit" Template="Persist" /></Workflow>

```

# Workflow Homonym

In this section we configure the homonym detection that checks if a resource already exists in the
system, preventing duplicates.

## Process

1. Create a homonym entity link, either with a default filter or customized filters
2. Create a display table to display the homonym result _(optional)_
3. Define the part of the workflow form where homonyms must be checked

## Create a Homonym Entity Link

A [ Homonym Entity Link ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)
defines a new homonym detection to be performed in a workflow form. It can be defined in different
ways.

### With a default filter

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym" />

```

When no filter is defined for the homonym entity link, the detection for homonyms is performed
according to the homonym control form. See section below.

### With customized filters

[ Homonym Entity Link ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md)filters
allow to define customized filters for a homonym detection.

#### Simple filter

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym"> <Filter
        Property1="LastName"
        Property2="FirstName"
    /></HomonymEntityLink>

```

Here, since the default operator is `Equal`, the detection for homonyms is performed by comparing
the values of the `LastName` and `FirstName` properties with an exact spelling.

_NB: This example matches the default filter that would be computed based on the homonym control
example in the section below._

#### Filters on several entities

A homonym entity link can contain filters on the properties from several distinct entity types.

> The following example searches for homonyms among usual workers (from `Directory_UserRecord`) but
> also the guests (from `Directory_Guest`):
>
> ```
>
> <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord"> <Filter
> Property1="LastName"
> Property2="FirstName"
> />
> <Filter
> Property1="LastName" ComparisonProperty1="Directory_Guest:LastName"
> Property2="FirstName" ComparisonProperty2="Directory_Guest:FirstName"
> />
> </HomonymEntityLink>
>
> ```

In this case, a display table is required for the additional entity.

#### Flexible filter

A filter can be defined to compare the values in an approximate way.

- A flexible operator must be used, such as `FlexibleEqual`, `FlexibleStartWith`, etc.
- A flexible expression must be defined on the comparison property.

1. When the input detection value is retrieved directly from the property value

   ```
   <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym"> <Filter
           Property1="LastName" ComparisonProperty1="PhoneticLastName" Operator1="FlexibleEqual"
           Property2="FirstName" ComparisonProperty2="PhoneticFirstName" Operator2="FlexibleEqual"
       /></HomonymEntityLink>

   ```

Here, `Property1` is set, so the detection for homonyms is performed by comparing the `LastName`
value, entered by the user in the workflow form, with the phonetic value of existing resources
stored as the `PhoneticLastName` property in the database.

Before performing the comparison, the flexible expression of the comparison property is applied to
the input value.

2. When the input detection value is deducted

   ```
   <HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym"> <Filter
           ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual"
       /> <Filter
           ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual" Expression1="C#:record:(record.LastName + ' ' + record.FirstName).Appproximate()"
       /></HomonymEntityLink>

   ```

Here:

- In the first filter, `Property1` and `Expression1` are not set, so the detection value is computed
  by applying the expression defined for `ComparisonProperty1` from the input values, eg.
  `(record.FirstName + ' ' + record.LastName).Appproximate()`.
- In the second filter, `Expression1` is set, so the detection value is computed by applying the
  `Expression1` from the input values. This filter allows checking the homonyms on the reversed full
  name (to manage the case where the user reverses the first and last name for example).

The detection for homonyms is performed by comparing the detection values computed based on each
filter with the values stored in the database and retrieves all resources that match any of the
filters.

#### Filter on a language property

If a filter is set on a language property, the detection for homonyms is performed on the property
associated to the main language.

```
<HomonymEntityLink FormEntityType="Directory_Organization" Identifier="Directory_Organization_Homonym"> <Filter Property1="Name" /></HomonymEntityLink>

```

Here, the `Name` property is a neutral property associated with two localized properties `Name_en`
and `Name_fr`.

If English is the main language, the detection for homonyms is performed on the `Name_en` value.

## Create a Display Table _(optional)_

A [Display Table](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) is used to
define how a list of the same entity type should be displayed.

By default, the homonyms are displayed using the default display table of the related entity type.

To display homonyms in a different way than the default, a specific display table must be created
where the `HomonymEntityLink` attribute is the identifier of the homonym entity link created above.

```
<DisplayTable Identifier="Directory_UserRecord_Homonym" EntityType="Directory_UserRecord" DisplayTableDesignElement="table" HomonymEntityLink="Directory_UserRecord">
    <Column DefaultSortPriority="1" DisplayBinding="LastName" IsDisplayInSummaryView="true" IsResizable="true" ColumnSize="1" /> <Column DisplayBinding="FirstName" IsDisplayInSummaryView="true" IsResizable="true" ColumnSize="1" /> <Column DisplayBinding="Login" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" /> <Column DisplayBinding="Mail" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="2" /> <Column DisplayBinding="BirthDate" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" CanBeFiltered="true" ColumnSize="4" /></DisplayTable>

```

## Define the Homonym Control in the Workflow Form

The [Form](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) where the homonyms are to
be checked must contain a layout fieldset control where:

- the `HomonymEntityLink` attribute is the identifier of the homonym entity link created above.
- the properties to check (defined in the homonym filters) are represented in the control bindings.
- the bindings are all represented in the homonym filters.

When the homonym entity link has no filter set and therefore the filter is calculated automatically,
the homonym control form must only contain up to 5 controls where `Binding` attribute is defined.
Indeed, a filter can only be defined on up to 5 properties, see filter definition in
[ Homonym Entity Link ](/docs/identitymanager/6.2/integration/workflows/workflow-configuration.md).

```
<Form Identifier="Workflow_Directory_User_AdvancedStartInternal_Base" EntityType="Directory_UserRecord"> <Control DisplayName_L1="Personal Data" DisplayName_L2="Informations personnelles" OutputType="LayoutFieldset" HomonymEntityLink="Directory_UserRecord">
        <Control DisplayName_L1="Full Name" DisplayName_L2="Nom complet" OutputType="LayoutRowset"> <Control Binding="LastName" IsRequired="true" /> <Control Binding="FirstName" IsRequired="true" /> </Control> </Control></Form>

```

If a filter is declared with a `ComparisonProperty` attribute (and so without a `Property`), then
the properties used in the `Expression` (whether defined in the filter or elsewhere in the
configuration) to compute the `ComparisonProperty` must also be represented in the control bindings.

In the example below, the properties used in the `Expression1` attribute that must be represented in
the control bindings are `LastName` and `FirstName`.

```
<HomonymEntityLink FormEntityType="Directory_UserRecord" Identifier="Directory_UserRecord_Homonym"> <Filter
        ComparisonProperty1="PhoneticFirstLastName" Operator1="FlexibleEqual" Expression1="C#:record:(record.LastName + ' ' + record.FirstName).Appproximate()"
    /></HomonymEntityLink>

```

# Configure Onboarding Workflows

How to adjust the validation process and homonym detection of onboarding
[Workflows](/docs/identitymanager/6.2/integration/workflows/index.md).

## Overview

Onboarding workflows are the processes that users follow in order to add in Identity Manager a new
user, as a new employee has arrived in the company.

The most common situation consists in having two onboarding workflows: one for employees and one for
contractors. The Workforce Core Solution module provides these two workflows.

Usually, using one of these workflows means:

1. filling a form containing the new user's information, such as their name, first name, contract
   type, job title, etc;
2. if needed, sending the request of user creation for review by a knowledgeable user.

See how to
[ Update an Individual Identity ](/docs/identitymanager/6.2/reference/index.md)in
Identity Manager.

### User Creation Review

Identity Manager provides the review step as optional, for its necessity depends on the situation.

To perform the review of a user creation, one should have the right permissions.

![Review Permissions](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/workflows_reviewpermissions_v601.webp)

When a review is needed, a notification appears on the **MY TASKS** tab at the top.

![My Tasks Tab](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_topbar_v601.webp)

The reviewer can then complete the creation request and finally approve it.

### Homonym Detection

User creation often benefits from a homonym detection that checks if the resource already exists in
the system, preventing duplicates.

Identity Manager provides a homonym detection, whose parameters can be adjusted.

See the [Workflows](/docs/identitymanager/6.2/integration/workflows/index.md) topic for additional information.

## Participants and Artifacts

Integrators must have the knowledge of the organization strategy towards the expected validation
process and homonym detection during users' onboarding.

| Input                          | Output                        |
| ------------------------------ | ----------------------------- |
| Identity repository (required) | Adjusted Onboarding Workflows |

See the [ Create the Workforce Repository ](/docs/identitymanager/6.2/reference/index.md) topic for
additional information.

## Configure Onboarding Workflows

Configure onboarding workflows by proceeding as follows:

1. On the home page, click on **Settings** in the **Configuration** section, then on **Workforce** >
   **Onboarding Workflows** in the left menu.

   ![Home - Settings](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/home_settings_v523.webp)

2. For each workflow, choose whether a review step is required.

   ![Workflows Review Steps](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/workflows_reviewsteps_v601.webp)

   Netwrix Identity Manager (formerly Usercube) recommends enabling the review for the onboarding
   of employees, and disabling the review for contractors.

   From experience, in most use cases, the onboarding of new workers is done by their managers, and
   HR people review the creation of employees and not contractors. It also happens that HR people
   are in full charge of employees, in which case they do the onboarding and don't need a review.

3. Configure the homonym detection.

   ![Workflows Homonym Detection](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/workflows_homonyms_v601.webp)

   Netwrix Identity Manager (formerly Usercube) recommends enabling the birth name comparison to
   detect user duplicates due to name changes, when the GDPR supports it.

   The other parameters for homonym detection should be enabled/disabled according to your needs.

4. Click on **Save** at the top of the page.

   ![Save Icon](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/user-profile-configuration/iconsave_v602.svg)

## Verify Workflow Configuration

Validate the process by proceeding as follows:

1. Access the user directory from the home page.

   ![Home Page - Directory User](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/home_directoryuser_v523.webp)

2. Execute the workflows for a new employee and a new contractor.
3. Make sure that the homonym detection works in accordance with the specified options.

   > For example, if the inversion comparison is enabled between the first and last names:
   >
   > ![Workflows Homonym Detection](/img/product_docs/identitymanager/identitymanager/user-guide/set-up/configure-workflows/workflows_verifyhomonyms_v601.webp)

4. Make sure that the potential validation steps are in accordance with the specified options.

## Next Steps

Once onboarding workflows are configured, integrators can start configuring a connector.
