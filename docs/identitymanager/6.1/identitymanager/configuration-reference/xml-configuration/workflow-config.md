# CreateUpdateDeleteAccessControlRules

Generates execution rights for the create, update, delete workflows.

Some prerequisites are necessary to be able to launch this scaffolding. A entity type must be
created with the following naming convention: "Worfklow\_" + idenfitier type entity. Three workflows
must be created with the following names:

- entity type identifier + "\_Create";
- entity type identifier + "\_Update";
- entity type identifier + "\_Delete";

The scaffolding generates the following scaffoldings:

- [ViewAccessControlRules](/docs/identitymanager/6.1/identitymanager/configuration-reference/scaffoldings/scaffolding-reference.md):
  Generates the permissions to view an entity type's resources.

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

<AccessControlRule Identifier="Administrator_Directory_UserType_Custom_Workflows_Directory_UserType" DisplayName_L1="Administrator_Directory_UserType_Custom_Workflows_Directory_UserType" EntityType="Workflow_Directory_UserType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_UserType_Create/Request/ActionPending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_UserType_Delete/Request/ActionPending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_UserType_Update/Request/ActionPending" /></AccessControlRule>

```

# Workflows

- #### [CreateUpdateDeleteAccessControlRules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Generates execution rights for the create, update, delete workflows.- ####
  [UpdateResourcesAccessControlRules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
- #### [WorkflowAccessControlRules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Generates the permissions to access the task page and visualize the workflows to be executed for
  a given entity type and profile.- ####
  [WorkflowConfigurationControlRules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
- #### [WorkflowOverviewControlRules](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Generates the permissions to access the workflow supervision page.

# UpdateResourcesAccessControlRules

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

<AccessControlRule Identifier="Administrator_HR_Person_Custom_Workflows_HR_Person" DisplayName_L1="Administrator_HR_Person_Custom_Workflows_HR_Person" EntityType="Workflow_HR_Person" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/Workflows/HR_Person_UpdateResources/Request/ActionPending" /></AccessControlRule>

```

# WorkflowAccessControlRules

Generates the rights to access the task page and visualize the different workflows to be executed
for a given entity type and profile.

Gives access to a shortcut on the dashboard and on the top bar to access this page.

Top bar shortcut:

![Tasks in Top Bar](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/set-up/configure-workflows/home_topbar_v601.webp)

DashBoard shortcut:

![Task in Dashboard](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/workflows/workflowaccesscontrolrules/home_mytasks_v523.webp)

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

<AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/ReviewWorkflowDelegate_AccessControlRules_Workflow_Directory_User" DisplayName_L1="Workforce/Self/Update My Permissions (review) - WorkflowDelegate_AccessControl - Workflow for User" DisplayName_L2="Administrator - Droit_Transfert_WorkflowsWorkflow_Directory_User" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_Guest_AdvancedStart/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_Guest_AdvancedStart/Review/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ComputerRequest/Execution/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ComputerRequest/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ComputerRequest/Review/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManageContracts/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_ManagePositions/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_MobileRequest/Execution/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_MobileRequest/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_MobileRequest/Review/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewExternal/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_NewInternal/Review/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Reactivate/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_Suspend/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdatePersonalData/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_UpdateResources/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_VehiculeRequest/Execution/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_VehiculeRequest/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_User_VehiculeRequest/Review/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_Delete/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_FixRecord/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Helpdesk_Directory_User_New/Request/RefinePending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Self_ResourcesUpdate/Review/RefinePending" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/ReviewWorkflow_AccessControlRules_Workflow_Directory_User" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Workflow_AccessControl - Workflow for User" DisplayName_L2="Administrator - Droit_Global_WorkflowsWorkflow_Directory_User" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" />  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_ActivityTemplateState" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Workflow Supervision" DisplayName_L2="Administrator - Supervision des Workflows" EntityType="ActivityTemplateState" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/ActivityTemplateState/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Directory_Application_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Application" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" />  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Directory_Bot_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Bot" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" />  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Directory_Guest_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Guest" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" />  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Directory_Organization_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_Organization" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" />  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Directory_PresenceState_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_PresenceState" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" />  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Directory_UserRecord_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_UserRecord" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" />  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Directory_User_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" />  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_UserActivityInstance_ActivityInstance" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Workflow_AccessControl - " DisplayName_L2="Administrator - Droit_Global_Workflows" EntityType="ActivityInstance" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_UserActivityInstance_Resource" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Workflow_AccessControl - " DisplayName_L2="Administrator - Droit_Global_Workflows" EntityType="Resource" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_UserActivityInstance_WorkflowInstance" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Workflow_AccessControl - " DisplayName_L2="Administrator - Droit_Global_Workflows" EntityType="WorkflowInstance" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" /></AccessControlRule><AccessControlRule Identifier="Workforce/Self/Self_ResourcesUpdate/Review_Workflow_Directory_User_Workflow_AccessControlRules" DisplayName_L1="Workforce/Self/Update My Permissions (review) - Review Provisioning" DisplayName_L2="Administrator - Revue du Provisioning" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/UserActivityInstance/Query" />  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Query" /></AccessControlRule>

```

# WorkflowConfigurationControlRules

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

<AccessControlRule Identifier="Administrator_Workflow_CreateUpdateDelete" DisplayName_L1="Administrator_Workflow" DisplayName_L2="Administrator_Workflow" EntityType="Workflow" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/Workflow/Create" />  <Entry CanExecute="true" Permission="/Workflows/Workflow/Delete" />  <Entry CanExecute="true" Permission="/Workflows/Workflow/Update" /></AccessControlRule>

```

# WorkflowOverviewControlRules

Generates the rights to access the workflow supervision page.

Gives access to a shortcut on the dashboard to access this page.

![Workflow Overview](/img/versioned_docs/identitymanager_6.1/identitymanager/user-guide/administrate/reporting/home_workflowoverview_v602.webp)

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

<AccessControlRule Identifier="HR_ActivityTemplateState" DisplayName_L1="Main/Administrator - Workflow Supervision" DisplayName_L2="M�tier/RH - Supervision des Workflows" EntityType="ActivityTemplateState" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/ActivityTemplateState/Query" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_Application_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_Application" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_Bot_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_Bot" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_Guest_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_Guest" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_Organization_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_Organization" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_PresenceState_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_PresenceState" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Directory_UserRecord_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Directory_UserRecord" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedCompositeRole" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedCompositeRole" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedCompositeRole" EntityType="AssignedCompositeRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedResourceNavigation" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedResourceNavigation" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedResourceNavigation" EntityType="AssignedResourceNavigation" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedResourceScalar" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedResourceScalar" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedResourceScalar" EntityType="AssignedResourceScalar" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedResourceType" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedResourceType" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedResourceType" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_AssignedSingleRole" DisplayName_L1="Main/Administrator - Workflow SupervisionAssignedSingleRole" DisplayName_L2="M�tier/RH - Supervision des WorkflowsAssignedSingleRole" EntityType="AssignedSingleRole" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_Category" DisplayName_L1="Main/Administrator - Workflow SupervisionCategory" DisplayName_L2="M�tier/RH - Supervision des WorkflowsCategory" EntityType="Category" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_WorkflowSuperVision_Workflow_Directory_User" DisplayName_L1="Main/Administrator - Workflow Supervision" DisplayName_L2="M�tier/RH - Supervision des Workflows" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/Workflows/Supervise/Workflow_Directory_User" />  <Entry CanExecute="true" Permission="/Workflows/HistorizedResourceFileByWorkflowInstanceIdQuery/Query" />  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule><AccessControlRule Identifier="HR_Workflow_Directory_User_Workflows_WorkflowInstance_Supervise" DisplayName_L1="Main/Administrator - Review Provisioning" DisplayName_L2="M�tier/RH - Revue du Provisioning" EntityType="Workflow_Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Workflows/WorkflowInstance/Supervise" /></AccessControlRule>

```

# CreateUpdateDeleteMenus

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

<MenuItem Identifier="Search_Directory_Country" DisplayName_L1="Country" DisplayName_L2="Pays">  <MenuItem Identifier="Search_Directory_Country_Create" DisplayName_L1="New" DisplayName_L2="Cr�er" IconCode="Add" Workflow="Directory_Country_Create" /></MenuItem><MenuItem Identifier="View_Directory_Country" DisplayName_L1="Country" DisplayName_L2="Pays">  <MenuItem Identifier="View_Directory_Country_Update" DisplayName_L1="Update" DisplayName_L2="Modifier" IconCode="Edit" Workflow="Directory_Country_Update" />  <MenuItem Identifier="View_Directory_Country_Delete" DisplayName_L1="Delete" DisplayName_L2="Supprimer" IconCode="Cancel" Workflow="Directory_Country_Delete" /></MenuItem>

```

# CreateUpdateDeleteWorkflows

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

<Workflow Identifier="Directory_Country_Create" DisplayName_L1="Country - New" DisplayName_L2="Pays - Cr�er" VariablesType="Workflow_Directory_Country">  <Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="Action" />  <Activity Identifier="Persist" DisplayName_L1="Persist" DisplayName_L2="Enregistrement" Template="Persist" /></Workflow><Workflow Identifier="Directory_Country_Delete" DisplayName_L1="Country - Delete" DisplayName_L2="Pays - Supprimer" VariablesType="Workflow_Directory_Country">  <Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="Action" />  <Activity Identifier="Persist" DisplayName_L1="Persist" DisplayName_L2="Enregistrement" Template="Persist" /></Workflow><Workflow Identifier="Directory_Country_Update" DisplayName_L1="Country - Update" DisplayName_L2="Pays - Modifier" VariablesType="Workflow_Directory_Country">  <Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="Action" />  <Activity Identifier="Persist" DisplayName_L1="Persist" DisplayName_L2="Enregistrement" Template="Persist" /></Workflow>

```

# Workflows

- #### [CreateUpdateDeleteMenus](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Creates creation, update and delete menus for an entity.- ####
  [CreateUpdateDeleteWorkflows](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
- #### [UpdateResourcesMenus](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
- #### [UpdateResourcesWorkflows](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
- #### [WorkflowActorsNotification](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
- #### [WorkflowEntityType](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Creates an entity that will be the source of all workflows that manipulate the given
  entity.- ####
  [WorkflowEntityTypeDisplayEntityType](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
- #### [WorkflowEntityTypeDisplayTable](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Creates the display table of the workflow entity of the starting entity.- ####
  [WorkflowEntityTypeSearchBar](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Creates the search bar of the workflow entity of the starting entity.- ####
  [WorkflowPerformerNotification](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)

# UpdateResourcesMenus

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

<MenuItem Identifier="View_HR_Person" DisplayName_L1="HR - User" DisplayName_L2="RH - Collaborateur">  <MenuItem Identifier="View_HR_Person_UpdateResources" DisplayName_L1="Modify Permissions" DisplayName_L2="Demander des droits" IconCode="Edit" Workflow="HR_Person_UpdateResources" /></MenuItem>

```

# UpdateResourcesWorkflows

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

<Workflow Identifier="HR_Person_UpdateResources" DisplayName_L1="HR - User - Modify Permissions" DisplayName_L2="RH - Collaborateur - Demander des droits" VariablesType="Workflow_HR_Person">  <Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="Action" />  <Activity Identifier="Persist" DisplayName_L1="Persist" DisplayName_L2="Ecriture" Template="Persist" /></Workflow>

```

# WorkflowActorsNotification

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

<NotificationAspect Identifier="ActorsNotification_Directory_User_StartInternal" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="<div><div style="font-family:'Segoe UI','-apple-system','BlinkMacSystemFont','Roboto','Arial',sans-serif; color:#212121; font-size:14px; background:#f8f8f8">  <table border="0" cellpadding="0" cellspacing="0" width="100%">    <tbody>      <tr>        <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px">        </td>        <td class="x_content" width="640" style="padding:0px; max-width:640px; background-color:white; border-bottom:solid #eaeaea 1px">          <table border="0" cellpadding="0" cellspacing="0" width="100%">            <tbody>              <tr>                <td style="padding:20px 24px 25px 24px; background:white">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table">                    <tbody>                      <tr>                        <td>                          <table border="0" cellpadding="0" cellspacing="0" class="x_logo" width="100%">                            <tbody>                              <tr>                                <td valign="middle" style="vertical-align:middle">                                  <img data-imagetype="External" src="@(new System.Uri(Html.Context.ApplicationUri, "logo.webp").AbsoluteUri)" height="34" width="133">                                </td>                              </tr>                            </tbody>                          </table>                        </td>                      </tr>                    </tbody>                  </table>                </td>              </tr>              <tr>                <td class="x_hero" style="padding:0px 24px">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table" style="max-width:592px">                    <tbody>                      <tr>                        <td>                          <table width="100%" border="0" cellspacing="0" cellpadding="0">                            <tbody>                              <tr>                                <td>                                  <!-- HEADER START -->                                  <table>                                    <tbody>                                      <tr>                                        <td class="x_title" style="padding:0 0 24px 0; color:#212121; font-size:28px; font-weight:bold; letter-spacing:-0.04em; line-height:40px; word-break:break-word">                                          @(Html.Context.MessageSubject ?? "Request summary")
                                        </td>                                      </tr>                                      <tr>                                        <td class="x_message" style="padding:0 0 24px 0">                                          <div>                                            <p>Hello,</p>                                            <p>You have a new pending item that requires your attention</p>                                          </div>                                        </td>                                      </tr>                                      <tr>                                        <td style="padding:0 0 24px 0">                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">                                            <tbody>                                              <tr>                                                <td>                                                  <table border="0" cellspacing="0" cellpadding="0">                                                    <tbody>                                                      <tr>                                                        <td align="center" bgcolor="#007acc" style="padding:8px 12px; border-radius:2px">                                                          <a href="@(new System.Uri(Html.Context.ApplicationUri, $"workflow-management/review/{Html.Context.WorkflowInstanceIdentifier}").AbsoluteUri)" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" class="x_mobile-button x_btn-primary" style="font-weight:500; font-size:14px; text-decoration:none; padding:0px; display:inline-block; color:#ffffff">                                                          View task
                                                          </a>                                                        </td>                                                      </tr>                                                    </tbody>                                                  </table>                                                </td>                                              </tr>                                            </tbody>                                          </table>                                        </td>                                      </tr>                                    </tbody>                                  </table>                                  <!-- HEADER END -->                                </td>                              </tr>                            </tbody>                          </table>                        </td>                      </tr>                    </tbody>                  </table>                </td>              </tr>            </tbody>          </table>        </td>        <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px">        </td>      </tr>      <tr>        <td class="x_mobile-hide" style="background:#f8f8f8"></td>        <td class="x_content" width="640" style="padding:0px; max-width:640px; background:#f8f8f8">          <table border="0" cellpadding="0" cellspacing="0" width="100%">            <tbody>              <tr>                <td style="padding:24px 24px 8px 24px; max-width:592px">                  <table border="0" width="100%" cellpadding="0" cellspacing="0" class="x_responsive-table" style="vertical-align:middle; background-color:white">                    <tbody>                      <tr>                        <td style="padding:16px 24px 24px 24px">                          @Html.WorkflowSummary(string.Empty, Model.InternalDisplayName)
                          @Html.MessageBody(new { style = "box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;" })
                        </td>                      </tr>                    </tbody>                  </table>                </td>              </tr>              <tr>                <td style="padding:24px 24px 24px 24px">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table">                    <tbody>                      <tr>                        <td style="color:#666666; font-size:12px; line-height:18px">                          This email is automatically generated by usercube. Please do not reply.
                        </td>                      </tr>                    </tbody>                  </table>                </td>              </tr>            </tbody>          </table>        </td>        <td class="x_mobile-hide" style="background:#f8f8f8"></td>      </tr>    </tbody>  </table></div></div>" RazorFile_L2="<div><div style="font-family:'Segoe UI','-apple-system','BlinkMacSystemFont','Roboto','Arial',sans-serif; color:#212121; font-size:14px; background:#f8f8f8">  <table border="0" cellpadding="0" cellspacing="0" width="100%">    <tbody>      <tr>        <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px">        </td>        <td class="x_content" width="640" style="padding:0px; max-width:640px; background-color:white; border-bottom:solid #eaeaea 1px">          <table border="0" cellpadding="0" cellspacing="0" width="100%">            <tbody>              <tr>                <td style="padding:20px 24px 25px 24px; background:white">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table">                    <tbody>                      <tr>                        <td>                          <table border="0" cellpadding="0" cellspacing="0" class="x_logo" width="100%">                            <tbody>                              <tr>                                <td valign="middle" style="vertical-align:middle">                                  <img data-imagetype="External" src="@(new System.Uri(Html.Context.ApplicationUri, "logo.webp").AbsoluteUri)" height="34" width="133">                                </td>                              </tr>                            </tbody>                          </table>                        </td>                      </tr>                    </tbody>                  </table>                </td>              </tr>              <tr>                <td class="x_hero" style="padding:0px 24px">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table" style="max-width:592px">                    <tbody>                      <tr>                        <td>                          <table width="100%" border="0" cellspacing="0" cellpadding="0">                            <tbody>                              <tr>                                <td>                                  <!-- HEADER START -->                                  <table>                                    <tbody>                                      <tr>                                        <td class="x_title" style="padding:0 0 24px 0; color:#212121; font-size:28px; font-weight:bold; letter-spacing:-0.04em; line-height:40px; word-break:break-word">                                          @(Html.Context.MessageSubject ?? "R�sum� de la demande")
                                        </td>                                      </tr>                                      <tr>                                        <td class="x_message" style="padding:0 0 24px 0">                                          <div>                                            <p>Bonjour,</p>                                            <p>Vous avez un nouvel �l�ment en attente qui n�cessite votre attention</p>                                          </div>                                        </td>                                      </tr>                                      <tr>                                        <td style="padding:0 0 24px 0">                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">                                            <tbody>                                              <tr>                                                <td>                                                  <table border="0" cellspacing="0" cellpadding="0">                                                    <tbody>                                                      <tr>                                                        <td align="center" bgcolor="#007acc" style="padding:8px 12px; border-radius:2px">                                                          <a href="@(new System.Uri(Html.Context.ApplicationUri, $"workflow-management/review/{Html.Context.WorkflowInstanceIdentifier}").AbsoluteUri)" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" class="x_mobile-button x_btn-primary" style="font-weight:500; font-size:14px; text-decoration:none; padding:0px; display:inline-block; color:#ffffff">                                                          Consulter la t�che
                                                          </a>                                                        </td>                                                      </tr>                                                    </tbody>                                                  </table>                                                </td>                                              </tr>                                            </tbody>                                          </table>                                        </td>                                      </tr>                                    </tbody>                                  </table>                                  <!-- HEADER END -->                                </td>                              </tr>                            </tbody>                          </table>                        </td>                      </tr>                    </tbody>                  </table>                </td>              </tr>            </tbody>          </table>        </td>        <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px">        </td>      </tr>      <tr>        <td class="x_mobile-hide" style="background:#f8f8f8"></td>        <td class="x_content" width="640" style="padding:0px; max-width:640px; background:#f8f8f8">          <table border="0" cellpadding="0" cellspacing="0" width="100%">            <tbody>              <tr>                <td style="padding:24px 24px 8px 24px; max-width:592px">                  <table border="0" width="100%" cellpadding="0" cellspacing="0" class="x_responsive-table" style="vertical-align:middle; background-color:white">                    <tbody>                      <tr>                        <td style="padding:16px 24px 24px 24px">                          @Html.WorkflowSummaryFR(string.Empty, Model.InternalDisplayName)
                          @Html.MessageBody(new { style = "box-sizing: border-box; color: #74787E; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;" })
                        </td>                      </tr>                    </tbody>                  </table>                </td>              </tr>              <tr>                <td style="padding:24px 24px 24px 24px">                  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table">                    <tbody>                      <tr>                        <td style="color:#666666; font-size:12px; line-height:18px">                          This email is automatically generated by usercube. Please do not reply.
                        </td>                      </tr>                    </tbody>                  </table>                </td>              </tr>            </tbody>          </table>        </td>        <td class="x_mobile-hide" style="background:#f8f8f8"></td>      </tr>    </tbody>  </table></div></div>" CssFile="@media only screen and (max-width: 620px) {
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
">  <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" />  <Recipient Type="Actor" /></NotificationAspect>

```

# WorkflowEntityType

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

<EntityType Identifier="Directory_Country" DisplayName_L1="Country" DisplayName_L2="Pays">  <Property Identifier="Workflows" DisplayName_L1="Workflows" DisplayName_L2="Workflows" Type="ForeignKey" /></EntityType><EntityType Identifier="Workflow_Directory_Country" DisplayName_L1="Workflow for Country" DisplayName_L2="Pays">  <Property Identifier="Directory_Country" DisplayName_L1="Country" DisplayName_L10="Country" DisplayName_L11="Country" DisplayName_L12="Country" DisplayName_L13="Country" DisplayName_L14="Country" DisplayName_L15="Country" DisplayName_L16="Country" DisplayName_L2="Pays" DisplayName_L3="Country" DisplayName_L4="Country" DisplayName_L5="Country" DisplayName_L6="Country" DisplayName_L7="Country" DisplayName_L8="Country" DisplayName_L9="Country" TargetColumnIndex="128" Type="ForeignKey" /></EntityType><EntityAssociation Identifier="Workflow_Directory_Country_Directory_Country" IsProperty2Collection="true" Property1="Workflow_Directory_Country:Directory_Country" Property2="Directory_Country:Workflows" /><WorkflowEntityTypeDisplayEntityType Id="29" EntityType="Directory_Country" />

```

# WorkflowEntityTypeDisplayEntityType

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

# WorkflowEntityTypeDisplayTable

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

<Tile Identifier="Workflow_Directory_User_Tile1" DisplayName_L1="User: first/last name" EntityType="Workflow_Directory_User" TileDesignElement="picture-text">  <Item Binding="Directory_User.MainRecord.FirstName" LineDisplayOrderIndicator="1" LineNumber="2" />  <Item Binding="Directory_User.MainRecord.LastName" LineDisplayOrderIndicator="2" LineNumber="2" />  <Item Binding="Directory_User.MainRecord.Title.DisplayName" LineNumber="3" />  <Item Binding="Directory_User.Id" LineNumber="5" />  <Item Binding="Directory_User.PhotoTag" LineNumber="6" /></Tile><Tile Identifier="Workflow_Directory_User_Tile2" DisplayName_L1="User: dep/loc" EntityType="Workflow_Directory_User" TileDesignElement="inline data-icon">  <Item Binding="Directory_User.MainRecord.Organization.DisplayName" LineNumber="1" />  <Item Binding="Directory_User.MainRecord.Site.DisplayName" LineNumber="2" /></Tile><DisplayTable Identifier="Workflow_Directory_User" DisplayTableDesignElement="list" EntityType="Workflow_Directory_User" IsEntityTypeDefault="true">  <Column ColumnSize="6" DefaultSortPriority="1" IsDisplayInSummaryView="true" SortBinding="Directory_User.MainRecord.LastName" Tile="Workflow_Directory_User_Tile1" />  <Column ColumnSize="3" IsDisplayInSummaryView="true" SortBinding="Directory_User.MainRecord.FirstName" Tile="Workflow_Directory_User_Tile2" /></DisplayTable>

```

# WorkflowEntityTypeSearchBar

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

<SearchBar EntityType="Workflow_Directory_User" SearchBarDesignElement="Inline">  <Criterion Binding1="Directory_User.Identifier" ColumnSize="2" InputType="Auto" PlaceHolderText_L1="Identifier" PlaceHolderText_L2="Identifier" />  <Criterion Binding1="Directory_User.PhoneticFirstLastName" Binding2="Directory_User.PhoneticLastFirstName" Binding3="Directory_User.MainRecord.LastName" ColumnSize="2" InputType="Auto" Operator="FlexibleStartWith" PlaceHolderText_L1="Name" PlaceHolderText_L2="Nom" />  <Criterion Binding1="Directory_User.MainRecord.Organization" ColumnSize="2" InputType="Auto" PlaceHolderText_L1="Department" PlaceHolderText_L2="D�partement" />  <Criterion Binding1="Directory_User.PresenceState" ColumnSize="2" DefaultValue="-101;-102" InputType="ComboboxMultiSelection" Operator="Equal" />  <Criterion Binding1="Directory_User.MainRecord.Site" ColumnSize="2" InputType="Auto" IsVisibleInAdvancedView="true" PlaceHolderText_L1="Site" PlaceHolderText_L2="Site" />  <Criterion Binding1="Directory_User.MainRecord.Subsidiary" ColumnSize="2" InputType="Auto" IsVisibleInAdvancedView="true" PlaceHolderText_L1="Subsidiary" PlaceHolderText_L2="Filiale" />  <Criterion Binding1="Directory_User.MainRecord.Title" ColumnSize="2" InputType="Auto" IsVisibleInAdvancedView="true" PlaceHolderText_L1="Title" PlaceHolderText_L2="Fonction" />  <Criterion Binding1="Directory_User.MainRecord.UserType" ColumnSize="2" InputType="Auto" IsVisibleInAdvancedView="true" PlaceHolderText_L1="User Type" PlaceHolderText_L2="Type de collaborateur" /></SearchBar>

```

# WorkflowPerformerNotification

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

<NotificationAspect Identifier="PerformerNotification_Directory_User_ChangeName" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="<div>  <div style="font-family:'Segoe UI','-apple-system','BlinkMacSystemFont','Roboto','Arial',sans-serif; color:#212121; font-size:14px; background:#f8f8f8">    <table border="0" cellpadding="0" cellspacing="0" width="100%">      <tbody>        <tr>          <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px">          </td>          <td class="x_content" width="640" style="padding:0px; max-width:640px; background-color:white; border-bottom:solid #eaeaea 1px">            <table border="0" cellpadding="0" cellspacing="0" width="100%">              <tbody>                <tr>                  <td style="padding:20px 24px 25px 24px; background:white">                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table">                      <tbody>                        <tr>                          <td>                            <table border="0" cellpadding="0" cellspacing="0" class="x_logo" width="100%">                              <tbody>                                <tr>                                  <td valign="middle" style="vertical-align:middle">                                    <img data-imagetype="External" src="@(new System.Uri(Html.Context.ApplicationUri, "logo.webp").AbsoluteUri)" height="34" width="133">                                  </td>                                </tr>                              </tbody>                            </table>                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>                <tr>                  <td class="x_hero" style="padding:0px 24px">                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table" style="max-width:592px">                      <tbody>                        <tr>                          <td>                            <table width="100%" border="0" cellspacing="0" cellpadding="0">                              <tbody>                                <tr>                                  <td>                                    <!-- HEADER START -->                                    <table>                                      <tbody>                                        <tr>                                          <td class="x_title" style="padding:0 0 24px 0; color:#212121; font-size:28px; font-weight:bold; letter-spacing:-0.04em; line-height:40px; word-break:break-word">                                            @(Html.Context.MessageSubject ?? "Request summary")
                                          </td>                                        </tr>                                        <tr>                                          <td class="x_message" style="padding:0 0 24px 0">                                            <div>                                              <p>Hello,</p>                                              <p>Your request has been taken into account</p>                                            </div>                                          </td>                                        </tr>                                        <tr>                                          <td style="padding:0 0 24px 0">                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">                                              <tbody>                                                <tr>                                                  <td>                                                    <table border="0" cellspacing="0" cellpadding="0">                                                      <tbody>                                                        <tr>                                                          <td align="center" bgcolor="#007acc" style="padding:8px 12px; border-radius:2px">                                                            <a href="@(Html.Context.ApplicationUri.AbsoluteUri)" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" class="x_mobile-button x_btn-primary" style="font-weight:500; font-size:14px; text-decoration:none; padding:0px; display:inline-block; color:#ffffff">                                                              Connect to Usercube
                                                            </a>                                                          </td>                                                        </tr>                                                      </tbody>                                                    </table>                                                  </td>                                                </tr>                                              </tbody>                                            </table>                                          </td>                                        </tr>                                      </tbody>                                    </table>                                    <!-- HEADER END -->                                  </td>                                </tr>                              </tbody>                            </table>                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>              </tbody>            </table>          </td>          <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px">          </td>        </tr>        <tr>          <td class="x_mobile-hide" style="background:#f8f8f8"></td>          <td class="x_content" width="640" style="padding:0px; max-width:640px; background:#f8f8f8">            <table border="0" cellpadding="0" cellspacing="0" width="100%">              <tbody>                <tr>                  <td style="padding:24px 24px 8px 24px; max-width:592px">                    <table border="0" width="100%" cellpadding="0" cellspacing="0" class="x_responsive-table" style="vertical-align:middle; background-color:white">                      <tbody>                        <tr>                          <td style="padding:16px 24px 24px 24px">                            @Html.WorkflowSummary(string.Empty, Model.InternalDisplayName)
                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>                <tr>                  <td style="padding:24px 24px 24px 24px">                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table">                      <tbody>                        <tr>                          <td style="color:#666666; font-size:12px; line-height:18px">                            This email is automatically generated by usercube. Please do not reply.
                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>              </tbody>            </table>          </td>          <td class="x_mobile-hide" style="background:#f8f8f8"></td>        </tr>      </tbody>    </table>  </div></div>" RazorFile_L2="<div>  <div style="font-family:'Segoe UI','-apple-system','BlinkMacSystemFont','Roboto','Arial',sans-serif; color:#212121; font-size:14px; background:#f8f8f8">    <table border="0" cellpadding="0" cellspacing="0" width="100%">      <tbody>        <tr>          <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px">          </td>          <td class="x_content" width="640" style="padding:0px; max-width:640px; background-color:white; border-bottom:solid #eaeaea 1px">            <table border="0" cellpadding="0" cellspacing="0" width="100%">              <tbody>                <tr>                  <td style="padding:20px 24px 25px 24px; background:white">                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table">                      <tbody>                        <tr>                          <td>                            <table border="0" cellpadding="0" cellspacing="0" class="x_logo" width="100%">                              <tbody>                                <tr>                                  <td valign="middle" style="vertical-align:middle">                                    <img data-imagetype="External" src="@(new System.Uri(Html.Context.ApplicationUri, "logo.webp").AbsoluteUri)" height="34" width="133">                                  </td>                                </tr>                              </tbody>                            </table>                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>                <tr>                  <td class="x_hero" style="padding:0px 24px">                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table" style="max-width:592px">                      <tbody>                        <tr>                          <td>                            <table width="100%" border="0" cellspacing="0" cellpadding="0">                              <tbody>                                <tr>                                  <td>                                    <!-- HEADER START -->                                    <table>                                      <tbody>                                        <tr>                                          <td class="x_title" style="padding:0 0 24px 0; color:#212121; font-size:28px; font-weight:bold; letter-spacing:-0.04em; line-height:40px; word-break:break-word">                                            @(Html.Context.MessageSubject ?? "Request summary")
                                          </td>                                        </tr>                                        <tr>                                          <td class="x_message" style="padding:0 0 24px 0">                                            <div>                                              <p>Bonjour,</p>                                              <p>Votre demande a bien �t� prise en compte</p>                                            </div>                                          </td>                                        </tr>                                        <tr>                                          <td style="padding:0 0 24px 0">                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">                                              <tbody>                                                <tr>                                                  <td>                                                    <table border="0" cellspacing="0" cellpadding="0">                                                      <tbody>                                                        <tr>                                                          <td align="center" bgcolor="#007acc" style="padding:8px 12px; border-radius:2px">                                                            <a href="@(Html.Context.ApplicationUri.AbsoluteUri)" target="_blank" rel="noopener noreferrer" data-auth="NotApplicable" class="x_mobile-button x_btn-primary" style="font-weight:500; font-size:14px; text-decoration:none; padding:0px; display:inline-block; color:#ffffff">                                                              Je me connecte � Usercube
                                                            </a>                                                          </td>                                                        </tr>                                                      </tbody>                                                    </table>                                                  </td>                                                </tr>                                              </tbody>                                            </table>                                          </td>                                        </tr>                                      </tbody>                                    </table>                                    <!-- HEADER END -->                                  </td>                                </tr>                              </tbody>                            </table>                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>              </tbody>            </table>          </td>          <td class="x_mobile-hide" style="background-color:white; border-bottom:solid #eaeaea 1px">          </td>        </tr>        <tr>          <td class="x_mobile-hide" style="background:#f8f8f8"></td>          <td class="x_content" width="640" style="padding:0px; max-width:640px; background:#f8f8f8">            <table border="0" cellpadding="0" cellspacing="0" width="100%">              <tbody>                <tr>                  <td style="padding:24px 24px 8px 24px; max-width:592px">                    <table border="0" width="100%" cellpadding="0" cellspacing="0" class="x_responsive-table" style="vertical-align:middle; background-color:white">                      <tbody>                        <tr>                          <td style="padding:16px 24px 24px 24px">                            @Html.WorkflowSummaryFR(string.Empty, Model.InternalDisplayName)
                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>                <tr>                  <td style="padding:24px 24px 24px 24px">                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="x_responsive-table">                      <tbody>                        <tr>                          <td style="color:#666666; font-size:12px; line-height:18px">                            This email is automatically generated by usercube. Please do not reply.
                          </td>                        </tr>                      </tbody>                    </table>                  </td>                </tr>              </tbody>            </table>          </td>          <td class="x_mobile-hide" style="background:#f8f8f8"></td>        </tr>      </tbody>    </table>  </div></div>" CssFile="@media only screen and (max-width: 620px) {
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
">    <PointCut Activity="Directory_User_ChangeName:Request" ActivityState="ActionWithRefine-Executed" />    <Recipient Activity="Directory_User_ChangeName:Request" ActivityState="ActionWithRefine-Executed" Type="Performer" />  </NotificationAspect>

```

# AddChangeAspect

Modifies a given property value.

## Examples

The following example computes a new value for the property `IsDraft` from the `Directory_User`
entity type. The new value is always `true`. The pointcuts define when the value change must happen.

```

<AddChangeAspect Identifier="Directory_UserRecord_AddChange_IsDraft" Binding="Workflow_Directory_User:Directory_User.IsDraft" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:record:return true;">
    <PointCut Activity="Directory_User_NewInternal:PersistDraft" ActivityState="PersistOnlyResources-Invoked" Mode="Before" TemplateTransformation="NewInternalWorkflowIsReviewRequired" />    <PointCut Activity="Directory_User_NewExternal:PersistDraft" ActivityState="PersistOnlyResources-Invoked" Mode="Before" TemplateTransformation="NewExternalWorkflowIsReviewRequired" /></AddChangeAspect>

```

### Accept Null Value

The following example computes a new value for the `Card` property in users' records, considering
`null` as a value. Instead of being ignored, a `null` value returned by `Expression` will replace
the old value.

```

<AddChangeAspect Identifier="AddChangeAspect_Self_PersonRecord_Card" Binding="Workflow_Person:Person.PersonRecords.Card" AcceptNullValueExpression="C#:record:return true;" ExpressionBinding="Workflow_Person:Person.PersonRecords" Expression="C#:record:
        if(!string.IsNullOrEmpty(record.Card))
        {
            return record.Card;
        }
        return null;" >    <PointCut Activity="Self_DataUpdate:Request" ActivityState="Action-Executed" Mode="After" /></AddChangeAspect>

```

## Properties

| Property                           | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding required                   | **Type** String **Description** Binding whose difference with `ExpressionBinding` defines the property to be changed.                                                                                                                                                                                                                                                                   |
| Identifier required                | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                        |
| AcceptNullValueExpression optional | **Type** String **Description** C# expression returning a boolean, `true` to consider `null` for the new value returned by `Expression`. By default, `null` values are ignored.                                                                                                                                                                                                         |
| Expression optional                | **Type** String **Description** C# expression returning a new value for the property to be changed. **Note:** this property can also be defined by a binding via `ExpressionBinding`.                                                                                                                                                                                                   |
| ExpressionBinding optional         | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional              | **Type** String **Description** Expression that conditions the aspect execution. [See more details on C# expressions](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).                                                                                                                                                                                |
| Priority default value: 0          | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                           |

## Child Element: PointCut

A pointcut is a mechanism telling Usercube when to execute the linked
[aspect](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

# AssertValueAspect

Checks whether the value of a given property satisfies a given condition.

## Examples

The following example makes sure that, when creating a new employee, the contract end date is after
the contract start date. The pointcuts define when the value assertion must happen.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AssertValueAspect Identifier="Directory_User_NewInternal_CheckDates" Binding="Workflow_Directory_User:Directory_User.Records.ContractEndDate" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Expression="C#:record: return ( ((Nullable&lt;DateTime&gt;) record.ContractStartDate).HasValue && ((Nullable&lt;DateTime&gt;) record.ContractEndDate).HasValue) ?  record.ContractStartDate &lt; record.ContractEndDate : true;" Message_L1="Contract's end date must be after contract's start date.">    <PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="Before" />    <PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" Mode="Before" /></AssertValueAspect>
```

### Assert a multi-valued object

When asserting a multi-valued object, said object must not be called through a binding that goes
back and forth between entities.

For example, to manage records, using the ExpressionBinding set to
`<Workflow_Directory_User:Directory_User>`. Records and the Expression using C#:record:return
record.Directory_User.Records... will not work.

Instead, the ExpressionBinding should be set to `<Workflow_Directory_User:Directory_User>` and the
Expression should use C#:user:return user.Records.

The following example makes sure that a user's positions do not overlap.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AssertValueAspect Identifier="RecordsOverlapCheck" Binding="Workflow_Directory_User:Directory_User.Records.Organization" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:user:for (int i = 0; i &lt; user.Records.Count; i++)
{
    for (int j = 0; j &lt; user.Records.Count &amp;&amp; i != j ; j++)
    {
        if (user.Records[i].StartDate != default
            &amp;&amp; user.Records[j].StartDate != default)
        {
            if ((user.Records[i].EndDate == null) &amp;&amp; (user.Records[j].EndDate == null))
              || ((user.Records[i].EndDate == null) &amp;&amp; (user.Records[j].EndDate != null) &amp;&amp; (user.Records[j].EndDate &gt; user.Records[i].StartDate))
              || ((user.Records[j].EndDate == null) &amp;&amp; (user.Records[i].EndDate != null) &amp;&amp; (user.Records[i].EndDate &gt;= user.Records[j].StartDate))
              || ((user.Records[i].EndDate != null) &amp;&amp; (user.Records[j].EndDate != null) &amp;&amp; (user.Records[i].StartDate &lt;= user.Records[j].EndDate) &amp;&amp; (user.Records[i].EndDate &gt;= user.Records[j].StartDate))
            {
                return false;
            }
        }
    }
}
return true;" Message_L1="A user cannot have more than one position simultaneously.">    <PointCut Activity=... ></AssertValueAspect>
```

## Properties

| Property                   | Type   | Description                                                                                                                                                                                                                                                                                                                                     |
| -------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding required           | String | Binding whose difference with ExpressionBinding defines the property to be validated by the aspect.                                                                                                                                                                                                                                             |
| Identifier required        | String | Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                |
| Expression optional        | String | C# expression returning a boolean, false to invalidate the property value.                                                                                                                                                                                                                                                                      |
| ExpressionBinding optional | String | Binding: - Defines the variable type used in the potential expressions specified in the aspect; - Whose difference with Binding defines the property involved in the aspect **NOTE:** Required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional      | String | Expression that conditions the aspect execution. See the [ Expressions ](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md) topic for additional information.                                                                                                                                                    |
| Message_L1 optional        | String | Message in language 1 (up to 16) to be displayed when the property is invalidated by the condition specified in Expression.                                                                                                                                                                                                                     |
| Priority default value: 0  | Int32  | Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **NOTE:** The priority can be a negative value.                                                                                                                                                                  |

## Child Element: PointCut

A pointcut is a mechanism telling Usercube when to execute the linked aspect. See the
[ Aspects ](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
topic for additional information.

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Type         | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | Int64        | Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                          |
| ActivityState required | Enumeration  | Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                     |
| Mode default value: 0  | PointCutMode | Mode defining when exactly the aspect is triggered around the specified workflow's activity state. 0 - Before — the aspect will be executed on entry to the specified activity state, regardless of the transition used. 1 - After — the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

# AssertValueRequiredAspect

Checks whether a given property has a non-null value.

## Examples

The following example makes sure that the contract start date is specified for any new worker. The
pointcuts define when the value assertion must happen.

```

<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_ContractStartDate" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Binding="Workflow_Directory_User:Directory_User.Records.ContractStartDate" Message_L1="The contract start date is required">
    <PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" />    <PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" TemplateTransformation="NewInternalWorkflowIsReviewRequired" />    <PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />    <PointCut Activity="Directory_User_NewExternal:Review" ActivityState="ReviewWithFeedback-Approved" TemplateTransformation="NewExternalWorkflowIsReviewRequired" />  </AssertValueRequiredAspect>

```

## Properties

| Property                   | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding required           | **Type** String **Description** Binding whose difference with `ExpressionBinding` defines the property to be validated by the aspect.                                                                                                                                                                                                                                                   |
| Identifier required        | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                        |
| ExpressionBinding optional | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional      | **Type** String **Description** Expression that conditions the aspect execution. [See more details on C# expressions](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).                                                                                                                                                                                |
| Message_L1 optional        | **Type** String **Description** Message in language 1 (up to 16) to be displayed when the property is empty.                                                                                                                                                                                                                                                                            |
| Priority default value: 0  | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                           |

## Child Element: PointCut

A pointcut is a mechanism telling Usercube when to execute the linked
[aspect](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

# BuildUniqueValueAspect

Computes a unique value for a given property.

## Examples

The following example generates bots' logins during their creation.

```

<BuildUniqueValueAspect Identifier="Directory_Bot_UniqueValue_Login" Binding="Workflow_Directory_Bot:Directory_Bot.Login" ExpressionBinding="Workflow_Directory_Bot:Directory_Bot" Expression="C#:wkf:return 'B' + string.Format(&quot;{0:D5}&quot;, new Random().Next(99000, 99999));" SqlCheckExpression="SELECT TOP 1 login FROM zz_directory_bot WHERE login=@VALUE" Priority="10" IterationsCount="10" SimulationExpression="C#:wkf:return &quot;99999&quot;;">
    <PointCut Activity="Directory_Bot_Create:Request" ActivityState="Action-Executed" Mode="After" /></BuildUniqueValueAspect>

```

## Properties

| Property                            | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Binding required                    | **Type** String **Description** Binding whose difference with `ExpressionBinding` defines the property to be computed.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Identifier required                 | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Expression optional                 | **Type** String **Description** C# expression that computes the unique value. **Note:** the computation can be configured in SQL instead of C# via `SqlBuildExpression`. Decide whether to use either `Expression` or `SqlBuildExpression`, not both.                                                                                                                                                                                                                                                                                                                                |
| ExpressionBinding optional          | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one.                                                                                                                                                                                              |
| HistorizeBinding optional           | **Type** String **Description** Binding that stores all the old values computed by the aspect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| HistorizeSeparator default value: � | **Type** String **Description** Defines the character used as a separator in the `HistorizeBinding` property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| IfExpression optional               | **Type** String **Description** Expression that conditions the aspect execution. [See more details on C# expressions](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).                                                                                                                                                                                                                                                                                                                                                                             |
| IterationsCount default value: 0    | **Type** String **Description** Maximum number of computation attempts without finding a unique value. **Note:** a variable named `iteration` is available to use the attempt number in the expressions of the aspect and/or of the potential unicity check rules, for example to help manage homonyms. Hence, a custom variable cannot be declared with the name `iteration`.                                                                                                                                                                                                       |
| Message_L1 default value:           | **Type** String **Description** Message in language 1 (up to 16) to be displayed when the value generation failed, i.e. when `IterationsCount` is exceeded.                                                                                                                                                                                                                                                                                                                                                                                                                          |
| OnlyIfNew default value: false      | **Type** String **Description** `true` to trigger the aspect only for the creation of new resources.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Priority default value: 0           | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                                                                                                                                                                                                                        |
| SimulationExpression optional       | **Type** String **Description** Expression used instead of the `Expression` parameter when previewing the workflow result before its implementation.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| SqlBuildExpression optional         | **Type** String **Description** SQL command that computes the unique value. **Note:** the computation can be configured in C# instead of SQL via `Expression`. Decide whether to use either `SqlBuildExpression` or `Expression`, not both.                                                                                                                                                                                                                                                                                                                                          |
| SqlCheckExpression optional         | **Type** String **Description** SQL request that checks whether the value computed with the binding/expression is unique, i.e. not yet used by another resource.**Note:** required if zero unicity check rules are linked to the aspect.**Warning:** the SQL request must be efficient because a potential timeout may block the progress of the workflow. For example, when the database's state and indexes are not well known, prefer to use views rather than the whole tables, because views store way fewer elements than tables, which makes them faster to use in a request. |

## Child Element: PointCut

A pointcut is a mechanism telling Usercube when to execute the linked
[aspect](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

## Child Element: UnicityCheckRule

A unicity check rule ensures that the expression computed by a `BuildUniqueValue`aspect for a given
property is unique, i.e. not yet used by another resource, in a given entity type.

The comparison performed by these rules to check unicity can be configured in SQL instead of C# via
the `SqlCheckExpression` property of the aspect.

The value of the source binding/expression is computed based on the properties of the source
resource which is the resource whose property we compute via the `BuildUniqueValue` aspect.

The rule compares the return value of the source binding/expression with the existing values of the
target binding/expression in the target entity type.

![Schema: Unicity Check](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/builduniquevalueaspect/aspects_unicitycheck.webp)

> For example, we need to generate an email address for any new user joining the company. We
> configure in a `BuildUniqueValue` aspect that users' emails are computed with
> `{firstName}.{lastName}@{EmailDomain}`.
>
> Consider a new user called John Doe. We need to link to the aspect a unicity check rule that is
> going to compare the email core `john.doe` with the email cores of existing resources in a given
> entity type. Thus Usercube can ensure that the email core is unique, and finally build the unique
> email address.

Both source and target bindings/expressions must be consistent with the binding/expression used in
the corresponding aspect which must not use a `SqlCheckExpression`.

One `BuildUniqueValue` aspect can be linked to many unicity check rules, but should not be linked to
more than one rule per target entity type.

The unicity check rules linked to a same aspect are combined with the AND operator. It means that
the aspect's iteration goes up when at least one of the rules detects non-unicity.

When creating or updating a unicity check rule, launch the
[`ComputeCorrelationKeysTask`](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md)before
applying the role model and launching workflows.

**For information:** Usercube needs to store the correlation keys linked to the expressions defined
in the unicity check rule, such as the return value, the entity type, etc. That's why the task
mentioned above must be launched before launching any workflow using a unicity check rule.

### Examples

#### Basic example

The following example checks the unicity of the login of a new user.

> In order to be able to write the source and target bindings/expressions of the unicity check rule,
> you must understand the binding/expression of the corresponding `BuildUniqueValue` aspect:
>
> ```
>
> <BuildUniqueValueAspect Identifier="Directory_UserRecord_UniqueValue_Login" Binding="Workflow_Directory_User:Directory_User.Records.Login" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Expression="C#:record:return (record.UserType?.LoginPrefix ?? &quot;U&quot;) + record.UserIdentifier;" IterationsCount="10" Priority="70" >  <PointCut ... /></ BuildUniqueValueAspect >
>
> ```

We want to check the unicity of the new user's login, compared with the logins of existing users:

```

<UnicityCheck Aspect="Directory_UserRecord_UniqueValue_Login" TargetEntityType="Directory_UserRecord" TargetBinding="Login" />

```

Here the source binding and expression are those from the aspect.

#### Multiple unicity checks

With the same aspect as the previous example, we might want to compare the login of the new user
with the list of reserved logins too:

```

<UnicityCheck Aspect="Directory_UserRecord_UniqueValue_Login" TargetEntityType="Directory_UserRecord" TargetBinding="Login" /><UnicityCheck Aspect="Directory_UserRecord_UniqueValue_Login" TargetEntityType="Directory_ReservedLogin" TargetBinding="Value" />

```

#### Sophisticated example

The following example checks the unicity of the email address of a new user.

> In order to be able to write the source and target bindings/expressions of the unicity check rule,
> you must understand the binding/expression of the corresponding `BuildUniqueValue` aspect:
>
> ```
>
> <BuildUniqueValueAspect Identifier="Directory_UserRecord_UniqueValue_Email" Binding="Workflow_Directory_User:Directory_User.Records.Email" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Priority="80"
>
> // We want an email address such as {firstName}.{lastName}@{EmailDomain}.
>
> Expression="C#:record:var firstName = record.FirstName.Simplify()?.ToLowerInvariant();
> var lastName = record.LastName.Simplify()?.ToLowerInvariant();
> if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
> {
>   // Missing data
>   return null;
> }
>
> var result = firstName + &quot;.&quot; + lastName;
>
> // If the email core, i.e. {firstName}.{lastName}, is already used, then we try with {firstName}.{lastName}2, etc.
> if (iteration &gt; 0)
> {
>   result += iteration.ToString();
> }
>
> result = result + '@' + record.Subsidiary?.EmailDomain;
> return result;" IterationsCount="10" />
>
> ```

We want to include in the unicity check only the email's core `firstName.lastName` without the
`@EmailDomain` part. This is why the source expression starts like the aspect's expression but does
not add the domain part, and the target expression removes the domain part from existing values:

```

<UnicityCheck Aspect="Directory_UserRecord_UniqueValue_Email"

    SourceBinding="Workflow_Directory_User:Directory_User.Records"

    // The source expression is similar to the one from the aspect, but we check the unicity of the email core only, not the whole email address.

    SourceExpression="C#:record:var firstName = record.FirstName.Simplify()?.ToLowerInvariant();
var lastName = record.LastName.Simplify()?.ToLowerInvariant();
if (string.IsNullOrEmpty(firstName) || string.IsNullOrEmpty(lastName))
{
    // Missing data
    return null;
}

var result = firstName + &quot;.&quot; + lastName;
if (iteration &gt; 0)
{
    result += iteration.ToString();
}

return result;"

    TargetEntityType="Directory_UserRecord"
    TargetExpression="C#:record:
if(string.IsNullOrEmpty(record.Email))
{
    return null;
}

var result = record.Email;

// Delete the domain to keep only the email core
var index = result.IndexOf('@');
if(index &gt;= 0)
{
    result = result.Substring(0, index);
}
return result;" />

```

| Property                  | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SourceBinding optional    | **Type** Int64 **Description** Binding property (from the source entity type specified in the corresponding workflow) whose value is to be compared with the existing values of the target binding/expression. **Note:** when not specified, the unicity check rule uses the binding from the aspect.                                                                                                                                                   |
| SourceExpression optional | **Type** String **Description** Binding expression (based on properties from the source entity type specified in the corresponding workflow) whose value is to be compared with the existing values of the target binding/expression. [See more details on C# expressions](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md). **Note:** when not specified, the unicity check rule uses the expression from the aspect. |
| TargetBinding optional    | **Type** Int64 **Description** Binding property (from the target entity type) whose values corresponding to existing resources are to be compared with the value of the source binding/expression.                                                                                                                                                                                                                                                      |
| TargetEntityType required | **Type** Int64 **Description** Identifier of the entity type for which the rule checks the property's unicity.                                                                                                                                                                                                                                                                                                                                          |
| TargetExpression optional | **Type** String **Description** Binding expression (based on properties from the target entity type) whose values corresponding to existing resources are to be compared with the value of the source binding/expression. [See more details on C# expressions](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).                                                                                                       |

# Aspects

An aspect is a modularization of a concern that cuts across multiple workflows. Usercube uses
aspects to perform some specific actions at given workflow steps.

> For example, an aspect can assert a given user's input is valid.

- #### [AddChangeAspect](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Modifies a given property value.- ####
  [AssertValueAspect](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Checks whether the value of a given property satisfies a given condition.- ####
  [AssertValueRequiredAspect](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Checks whether a given property has a non-null value.- ####
  [BuildUniqueValueAspect](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Computes a unique value for a given property.- ####
  [InvokeScriptAspect](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Executes a customized script.- ####
  [InvokeWorkflowAspect](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Launches a workflow.- ####
  [NotificationAspect](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Sends a notification email to one or several users.

# InvokeScriptAspect

Executes a customized script.

## Examples

The following example executes the script `aspect.ps1` on the local agent, when creating a new user.

```

<InvokeScriptAspect Identifier="Directory_User_InvokeScript" Agent="Local" ScriptFile="C:/identitymanager/Conf/InvokeAspects/aspect.ps1">
    <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />    <PointCut Activity="Directory_User_StartExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" /></InvokeScriptAspect>

```

## Properties

| Property                   | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required        | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                        |
| Agent optional             | **Type** String **Description** Agent on which the script will be launched.                                                                                                                                                                                                                                                                                                             |
| ExpressionBinding optional | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional      | **Type** String **Description** Expression that conditions the aspect execution. [See more details on C# expressions](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).                                                                                                                                                                                |
| Priority default value: 0  | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                           |
| ScriptFile optional        | **Type** String **Description** Path of the script file to be executed by the aspect.                                                                                                                                                                                                                                                                                                   |

## Child Element: PointCut

A pointcut is a mechanism telling Usercube when to execute the linked
[aspect](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

# InvokeWorkflowAspect

Launches a workflow.

## Examples

The following example launches the workflow `Directory_User_VehicleRequest` when a vehicle is
requested for a new internal user.

```

<InvokeWorkflowAspect Identifier="Directory_User_VehicleRequest" ExpressionBinding="Workflow_Directory_User:Directory_User" IfExpression="C#:person:return person.Vehicle_Requested;" Workflow="Directory_User_VehicleRequest">
    <PointCut Activity="Directory_User_NewInternal:Persist" ActivityState="Persist-Invoked" Mode="After" /></InvokeWorkflowAspect>

```

## Properties

| Property                   | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required        | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                        |
| Workflow required          | **Type** String **Description** Identifier of the workflow to be launched.                                                                                                                                                                                                                                                                                                              |
| ExpressionBinding optional | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional      | **Type** String **Description** Expression that conditions the aspect execution. [See more details on C# expressions](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).                                                                                                                                                                                |
| Priority default value: 0  | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                           |

## Child Element: PointCut

A pointcut is a mechanism telling Usercube when to execute the linked
[aspect](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

# NotificationAspect

Sends a notification email to one or several users.

## Examples

The following example sends a notification email based on the template
`Notification_Directory_Guest.cshtml` and the subject computed by `SubjectExpression_L1`, which both
use data from `Workflow_Directory_Guest:Directory_Guest`, and on the styles from
`Notification_Directory_Guest.css`.

```

<NotificationAspect Identifier="Notification_Directory_Guest" ExpressionBinding="Workflow_Directory_Guest:Directory_Guest" RazorFile_L1="./Templates/Notification_Directory_Guest.cshtml" CssFile="./Templates/Notification_Directory_Guest.css" SubjectExpression_L1="C#:guest:return &quot;Validating data for guest: &quot; + guest.FirstName + guest.LastName;">
    <PointCut Activity="Directory_Guest_AdvancedStart:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />    <Recipient Type="Binding" Binding="Directory_Guest:Mail" /></NotificationAspect>

```

The notification will be sent after the `Request` activity of the `Directory_Guest_AdvancedStart`
workflow is executed. See pointcuts for more details.

The notification will be sent to all email addresses defined by `Directory_Guest:Mail`. See
recipients for more details.

## Properties

| Property                      | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required           | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                        |
| Binding optional              | **Type** String **Description** Binding whose difference with `ExpressionBinding` defines the property that corresponds to identities' email addresses, when `Type` is set to `Binding`.                                                                                                                                                                                                |
| CssFile optional              | **Type** String **Description** Path to the css file that defines the styles for the email. **Note:** the path must be relative to the configuration folder, and the file must be inside it.                                                                                                                                                                                            |
| ExpressionBinding optional    | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| Priority default value: 0     | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                           |
| RazorFile_L1 optional         | **Type** String **Description** Path to the Razor cshtml file that defines the email's body template in language 1 (up to 16). **Note:** the path must be relative to the configuration folder, and the file must be inside it.                                                                                                                                                         |
| SubjectExpression_L1 optional | **Type** String **Description** C# expression that defines the email's subject in language 1 (up to 16). The expression's variable type is defined in `ExpressionBinding`.                                                                                                                                                                                                              |

## Child Element: PointCut

A pointcut is a mechanism telling Usercube when to execute the linked
[aspect](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |

## Child Element: Recipient

A recipient defines one or several identities who will receive a notification from
`NotificationAspect`.

### Examples

The following example sends a notification email to the actors of the next step of the workflow.

```

<NotificationAspect Identifier="Notification_Directory_User" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Template/Notification_Directory_User.cshtml" CssFile="Template/Notification_Directory_User.css">  <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
  <Recipient Type="Actor" />
</NotificationAspect>

```

The following example sends a notification email to the performers of the `Request` activity of the
`Directory_User_StartInternal` workflow when the state is `Executed`.

```

<NotificationAspect Identifier="Notification_Directory_User" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Template/Notification_Directory_User.cshtml" CssFile="Template/Notification_Directory_User.css">  <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
  <Recipient Type="Performer" Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" />
</NotificationAspect>

```

The following example sends a notification email to the email address, stored in `Mail`, of the
user(s) from `Directory_User` targeted by the workflow, so here the new user created by the
`Directory_User_StartInternal` workflow.

```

<NotificationAspect Identifier="Notification_Directory_User" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Template/Notification_Directory_User.cshtml" CssFile="Template/Notification_Directory_User.css">  <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
  <Recipient Type="Binding" Binding="Directory_User:Mail" />
</NotificationAspect>

```

The following example sends a notification email to all identities whose email addresses are defined
as `{lastName}@company.com`.

```

<NotificationAspect Identifier="Notification_Directory_User" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Template/Notification_Directory_User.cshtml" CssFile="Template/Notification_Directory_User.css">  <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
  <Recipient Type="Expression" Expression="C#:user:return user.LastName+"@company.com";" />
</NotificationAspect>

```

The following example sends a notification to all identities with a profile that includes the right
permission.

```

<NotificationAspect Identifier="Directory_User_New" ExpressionBinding="Workflow_Directory_User:Directory_User" RazorFile_L1="Directory/User/Directory-User-Notification-New.cshtml" CssFile="Notifications.css">  <PointCut Activity="Directory_User_NewInternal:Persist" ActivityState="Persist-Invoked" Mode="After" />  <PointCut Activity="Directory_User_NewExternal:Persist" ActivityState="Persist-Invoked" Mode="After" />
  <Recipient Type="Profile" />
</NotificationAspect>

Knowing that we also have:
<Profile Identifier="Workforce/Notifications/Directory_User_New" DisplayName_L1="Workforce/Notifications/New User" IsComponent="true" /><AccessControlRule Profile="Workforce/Notifications/Directory_User_New" EntityType="Directory_User" Identifier="Composite_Notifications_Directory_User_New*" DisplayName_L1="Composite_Notifications_Directory_User_New*">
  <Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewInternal/Persist/Invoked" />  <Entry Permission="/Custom/WorkflowsNotifications/Directory_User_NewExternal/Persist/Invoked" />
</AccessControlRule>

```

| Property                  | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity optional         | **Type** Int64 **Description** Identifier of the activity whose last performers are to be notified, when `Type` is set to `Performer`. **Note:** must be set together with `ActivityState`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ActivityState optional    | **Type** Enumeration **Description** Identifier of the activity state whose last performers are to be notified, when `Type` is set to `Performer`. **Note:** must be set together with `Activity`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Binding optional          | **Type** Int64 **Description** Binding of the property that represents the notification's recipients, when `Type` is set to `Binding`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| EmailAddresses optional   | **Type** String **Description** Email addresses of the notification's recipients, when `Type` is set to `Hardcoded`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Expression optional       | **Type** String **Description** C# expression that returns the email addresses of the notification's recipients, as strings or `IEnumerable<string>`, when `Type` is set to `Expression`. The expression's variable type is defined in `ExpressionBinding` in the associated `NotificationAspect`. [See more details on C# expressions](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).                                                                                                                                                                                                                                                                                                                                                                         |
| IsCC default value: false | **Type** Boolean **Description** `true` to send the notification email to the recipient(s) as a carbon copy (CC).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Type required             | **Type** RecipientType **Description** Type of recipients for the email notification. **Actor**: the identities with the permissions to act on the next step of the workflow specified in the pointcut. **Performer**: the actors of a past workflow step specified in `Activity` and `ActivityState`. **Binding**: the identities whose email addresses are designated by the property specified in `Binding`. **Hardcoded**: the identities whose email addresses are specified explicitly in `EmailAddresses`. **Expression**: the identities whose email addresses match the C# expression specified in `Expression`. **Profile**: the identities with the permission `/Custom/WorkflowsNotifications/{workflow_identifier}/` `{activity_identifier}/{activityTemplateState_shortIdentifier}`. |

# Forms

Workflows use forms to collect input data through the UI. A form is a set of fields, configured with
controls. A control can define a field to fill, a fields set, call an existing form, etc. depending
on its output type.

- #### [WorkflowAddAndEndRecordEntityForm](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Displays a form to define the end date of an existing record, and replace it with a new record
  at said date, by duplicating and adjusting the old record.- ####
  [WorkflowAddRecordEntityForm](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Displays a form to add a new record for an existing resource, by duplicating and adjusting an
  existing record.- ####
  [WorkflowCreateEntityForm](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Displays a form to create a new resource, without a record.- ####
  [WorkflowCreateRecordEntityForm](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Displays a form to create a new resource with a record.- ####
  [WorkflowCreateSeveralRecordsEntityForm](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Displays a form to create a new resource with one or several records.- ####
  [WorkflowEditEntityForm](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Displays a form to update or delete an existing resource, without a record.- ####
  [WorkflowUpdateRecordEntitiesForm](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Displays a form to update data for several resources simultaneously.- ####
  [WorkflowUpdateRecordEntityForm](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Displays a form to select an existing record and update it.- ####
  [WorkflowUpdateSeveralRecordsEntityForm](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
  Displays a form to create, update or delete one or several records.

# WorkflowAddAndEndRecordEntityForm

Displays a form to define the end date of an existing record, and replace it with a new record at
said date, by duplicating and adjusting the old record.

## Examples

The following example is a form to update a position.

```

<WorkflowAddAndEndRecordEntityForm Identifier="Workflow_Directory_User_ChangePosition" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_ChangePosition:Request" FormTitle_L1="Schedule a Job Change">    <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Main"/>    <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_ChangePosition_Base" />    <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_ChangePosition_Base" />    <MainSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Main" />    <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_ChangePosition_Base" /></WorkflowAddAndEndRecordEntityForm>

With the following form for the resource data's content and summary:
<Form Identifier="Workflow_Directory_User_Main" EntityType="Directory_User">    <Control Binding="Identifier" />    <Control Binding="IsDraft" /></Form>

And with the following form for the record data's content and summary, and for the data that groups records together:
<Form Identifier="Workflow_Directory_User_ChangePosition_Base" EntityType="Directory_UserRecord">    <Control DisplayName_L1="New Position Dates" OutputType="LayoutFieldset">        <Control Binding="StartDate" />        <Control Binding="EndDate" InputType="Date" />    </Control>    <Control DisplayName_L1="New Position" OutputType="LayoutFieldset">        <Control Binding="Title" />        <Control Binding="Organization" />        <Control Binding="Manager" DefaultValueBinding="Organization.Manager" />        <Control Binding="Site" DefaultValueBinding="Organization.Manager.MainRecord.Site" />    </Control></Form>

```

The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:

![Form Example - Update Position](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowaddandendrecordentityform/formexample_workflowaddandendrecordentityform_v603.webp)

The content of `RecordUniqueItemControl` is not visible. The user's records that have the same
values for all the properties in `RecordUniqueItemControl` will be displayed, and potentially
modified, as one.

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's
execution:

![Summary Form Example - Update Position](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowaddandendrecordentityform/formexample_workflowaddandendrecordentityform_summary_v603.webp)

## Properties

| Property | Details |
| -------- | ------- |

## Child Element: MainControl

Set of fields to collect data about the main resource.

| Property | Details |
| -------- | ------- |

## Child Element: RecordControl

Set of fields to collect data about the resource's record.

| Property | Details |
| -------- | ------- |

## Child Element: RecordUniqueItemControl

Set of fields that group records together. All records with the same data in
`RecordUniqueItemControl` are displayed in the workflow as only one record, and they will
potentially be modified together. When not specified, records will be grouped by the data from
`RecordControl`.

| Property | Details |
| -------- | ------- |

## Child Element: MainSummaryControl

Set of fields to sum up the data collected by `MainControl` after the workflow's execution.

| Property | Details |
| -------- | ------- |

## Child Element: RecordSummaryControl

Set of fields to sum up the data collected by `RecordControl` after the workflow's execution.

| Property | Details |
| -------- | ------- |

# WorkflowAddRecordEntityForm

Displays a form to add a new record for an existing resource, by duplicating and adjusting an
existing record.

## Examples

The following example is a form to request a computer.

```

<WorkflowAddRecordEntityForm Identifier="Workflow_Directory_User_AddPosition" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_AddPosition:Request" FormTitle_L1="New Position" >    <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Main"/>    <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_AddPosition_Base" />    <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_AddPosition_Unique" />    <MainSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Main" />    <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_AddPosition_Base" /></WorkflowAddRecordEntityForm>

With the following form for the resource data's content and summary:
<Form Identifier="Workflow_Directory_User_Main" EntityType="Directory_User">    <Control Binding="Identifier" />    <Control Binding="IsDraft" /></Form>

And with the following form for the record data's content and summary:
<Form Identifier="Workflow_Directory_User_AddPosition_Base" EntityType="Directory_UserRecord">    <Control DisplayName_L1="Position Dates" OutputType="LayoutFieldset">        <Control Binding="StartDate" />        <Control Binding="EndDate" InputType="Date" />    </Control>    <Control DisplayName_L1="Position" OutputType="LayoutFieldset">        <Control Binding="Title" />        <Control Binding="Organization" />        <Control Binding="Manager" DefaultValueBinding="Organization.Manager" />        <Control Binding="Site" DefaultValueBinding="Organization.Manager.MainRecord.Site" />    </Control></Form>

And with the following form for the data that groups records together:
<Form Identifier="Workflow_Directory_User_AddPosition_Unique" EntityType="Directory_UserRecord">    <Control Binding="PositionIdentifier" /></Form>

```

The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:

![Form Example - Computer Request](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowaddrecordentityform/formexample_workflowaddrecordentityform_v603.webp)

The content of `RecordUniqueItemControl` is not visible. The user's records that have the same
values for all the properties in `RecordUniqueItemControl` will be displayed, and potentially
modified, as one.

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's
execution:

![Summary Form Example - Computer Request](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowaddrecordentityform/formexample_workflowaddrecordentityform_summary_v603.webp)

## Properties

| Property | Details |
| -------- | ------- |

## Child Element: MainControl

Set of fields to collect data about the main resource.

| Property | Details |
| -------- | ------- |

## Child Element: RecordControl

Set of fields to collect data about the resource's record.

| Property | Details |
| -------- | ------- |

## Child Element: RecordUniqueItemControl

Set of fields that group records together. All records with the same data in
`RecordUniqueItemControl` are displayed in the workflow as only one record, and they will
potentially be modified together. When not specified, records will be grouped by the data from
`RecordControl`.

| Property | Details |
| -------- | ------- |

## Child Element: MainSummaryControl

Set of fields to sum up the data collected by `MainControl` after the workflow's execution.

| Property | Details |
| -------- | ------- |

## Child Element: RecordSummaryControl

Set of fields to sum up the data collected by `RecordControl` after the workflow's execution.

| Property | Details |
| -------- | ------- |

# Workflow Create Entity Form

Displays a form to create a new resource, without a record.

## Examples

The following example is a form to create a new site.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<WorkflowCreateEntityForm Identifier="Workflow_Directory_Site_Create" EntityType="Workflow_Directory_Site" MainProperty="Workflow_Directory_Site:Directory_Site" WorkflowRequestType="Self" Activity="Directory_Site_Create:Request" FormTitle_L1="New Site">    <MainControl OutputType="TransformImport" EmbeddedForm="Base_Directory_Site" />    <SummaryControl OutputType="TransformImport" EmbeddedForm="Summary_Directory_Site"/></WorkflowCreateEntityForm>
With the following form for the workflow's content:
<Form Identifier="Base_Directory_Site" EntityType="Directory_Site">    <Control DisplayName_L1="Address" OutputType="LayoutFieldset" Name="Address">        <Control Binding="Name" />        <Control Binding="StreetNumber" />        <Control Binding="StreetName" />        <Control Binding="StreetType" />        <Control Binding="Floor" />        <Control Binding="PostalCode" />        <Control Binding="City" />        <Control Binding="Region" />        <Control Binding="Region.Country" IsReadOnly="true" />        <Control Binding="Photo" OutputType="Image" />    </Control>    <Control DisplayName_L1="Additional Data" OutputType="LayoutFieldset" Name="Additional Data">        <Control Binding="Identifier" />        <Control Binding="DisplayName" />        <Control Binding="TimeZone" />    </Control></Form>
And with the following form for the workflow's summary:
<Form Identifier="Summary_Directory_Site" EntityType="Directory_Site">    <Control DisplayName_L1="Address" OutputType="LayoutFieldset" Name="Address">        <Control Binding="Name" />        <Control Binding="StreetNumber" />        <Control Binding="StreetName" />        <Control Binding="StreetType" />    </Control>    <Control DisplayName_L1="Additional Data" OutputType="LayoutFieldset" Name="Additional Data">        <Control Binding="Identifier" />        <Control Binding="DisplayName" />    </Control></Form>

```

The content of `MainControl` is visible during the workflow's execution:

![Form Example - Site Creation](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowcreateentityform/formexample_workflowcreateentityform_v603.webp)

The content of `SummaryControl` is visible after the workflow's execution:

![Summary Form Example - Site Creation](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowcreateentityform/formexample_workflowcreateentityform_summary_v603.webp)

## Properties

| Property                      | Description                                                                |
| ----------------------------- | -------------------------------------------------------------------------- |
| Child Element: MainControl    | Set of fields to collect data about the main resource.                     |
| Child Element: SummaryControl | Set of fields to sum up the collected data after the workflow's execution. |

# WorkflowCreateRecordEntityForm

Displays a form to create a new resource with a record.

## Examples

The following example is a form to create a new user from HR.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<WorkflowCreateRecordEntityForm Identifier="Workflow_Directory_User_CreateFromHR" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_CreateFromHR:Request" FormTitle_L1="New Employee (from HR)">
    <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Main"/>
    <MainSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Main"/>
    <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_HR_Base" />
    <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Summary_Directory_User_HR_Base"/>
</WorkflowCreateRecordEntityForm>
With the following form for the workflow's content and summary about resource data:
<Form Identifier="Workflow_Directory_User_Main" EntityType="Directory_User">
    <Control DisplayName_L1="Resource Data" OutputType="LayoutFieldset" Name="ResourceData">
        <Control Binding="Identifier" />
    </Control>
</Form>
And with the following form for the workflow's content about record data:
<Form Identifier="Workflow_Directory_User_HR_Base" EntityType="Directory_UserRecord">
    <Control Binding="LastName" />
    <Control Binding="FirstName" />
    <Control Binding="BirthDate" />
    <Control Binding="ContractStartDate"/>
    <Control Binding="ContractEndDate" />
    <Control Binding="Title" />
    <Control Binding="UserType" />
    <Control Binding="Organization" />
    <Control Binding="Site" />
</Form>
And with the following form for the workflow's summary on record data:
<Form Identifier="Summary_Directory_User_HR_Base" EntityType="Directory_UserRecord">
    <Control DisplayName_L1="Record Data" OutputType="LayoutFieldset" Name="RecordData">
        <Control Binding="LastName" />
        <Control Binding="FirstName" />
        <Control Binding="ContractStartDate"/>
        <Control Binding="ContractEndDate" />
        <Control Binding="UserType" />
    </Control>
</Form>

```

The content of `MainControl` is visible during the workflow's execution:

![Form Example - New User from HR](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowcreaterecordentityform/formexample_workflowcreaterecordentityform_v603.webp)

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's
execution.

## Properties

| Property                            | Description                                                                                   |
| ----------------------------------- | --------------------------------------------------------------------------------------------- |
| Child Element: MainControl          | Set of fields to collect data about the main resource.                                        |
| Child Element: RecordControl        | Set of fields to collect data about the resource's record.                                    |
| Child Element: MainSummaryControl   | Set of fields to sum up the data collected by `MainControl` after the workflow's execution.   |
| Child Element: RecordSummaryControl | Set of fields to sum up the data collected by `RecordControl` after the workflow's execution. |

# WorkflowCreateSeveralRecordsEntityForm

Displays a form to create a new resource with one or several records.

## Examples

The following example is a form to request a computer.

```

<WorkflowCreateSeveralRecordsEntityForm Identifier="Workflow_Helpdesk_Directory_User_New" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_Helpdesk" WorkflowRequestType="Helpdesk" Activity="Helpdesk_Directory_User_New:Request" FormTitle_L1="New User (helpdesk)" TableTitle_L1="Records" AddRowLabel_L1="Add Record" RemoveRowLabel_L1="Remove Record">    <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_User_Base" />    <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Shared"/>    <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" /></WorkflowCreateSeveralRecordsEntityForm>

With the following form for the resource's data:
<Form Identifier="Workflow_Helpdesk_Directory_User_Base" EntityType="Directory_User">    <Control Binding="Identifier" />    <Control Binding="IsDraft" />    <Control Binding="Photo" />    <Control Binding="ConsentPhotoUsage" /></Form>

And with the following form for the data shared with all records:
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Shared" EntityType="Directory_UserRecord">    <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset" Name="Personal Data">        <Control DisplayName_L1="Full Name" OutputType="LayoutRowset" Name="Full Name">        <Control Binding="LastName" />        <Control Binding="FirstName" />        </Control>        <Control Binding="BirthName" ColumnSize="4" />        <Control Binding="BirthDate" />        <Control Binding="Gender" ColumnSize="3" />        <Control Binding="PersonalTitle" ColumnSize="3" />    </Control></Form>

And with the following form for the data specific to each record:
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Base" EntityType="Directory_UserRecord">    <Control DisplayName_L1="Identifiers" OutputType="LayoutFieldset" Name="Identifiers">        <Control Binding="RecordIdentifier" ColumnSize="4" />        <Control Binding="UserIdentifier" ColumnSize="4" />    </Control>    <Control DisplayName_L1="Contract" OutputType="LayoutFieldset" Name="Contract">        <Control Binding="EmployeeId" ColumnSize="4" />        <Control Binding="ContractIdentifier" ColumnSize="4" />        <Control Binding="UserType" />        <Control Binding="ExternalCompany" />        <Control Binding="ContractStartDate" />        <Control Binding="ContractEndDate" />    </Control>    <Control DisplayName_L1="Position" OutputType="LayoutFieldset" Name="Position">        <Control Binding="PositionIdentifier" ColumnSize="4" />        <Control Binding="JobTitle" />        <Control Binding="Manager" />        <Control Binding="Site" />        <Control Binding="PositionStartDate" />        <Control Binding="PositionEndDate" InputType="Date" />        <Control Binding="IsMainPosition" />    </Control></Form>

```

The contents of `MainControl`, `RecordControl` and `RecordUniqueItemControl` are visible during the
workflow's execution:

![Form Example - New User from Helpdesk](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowcreateseveralrecordsentityform/formexample_workflowcreateseveralrecordsentityform_v603.webp)

## Properties

| Property | Details |
| -------- | ------- |

## Child Element: MainControl

Set of fields to collect data about the main resource.

| Property | Details |
| -------- | ------- |

## Child Element: RecordControl

Set of fields to collect data shared between all the resource's records.

| Property | Details |
| -------- | ------- |

## Child Element: RecordUniqueItemControl

Set of fields to collect data specific to each record.

| Property | Details |
| -------- | ------- |

# WorkflowEditEntityForm

Displays a form to update or delete an existing resource, without a record.

## Examples

The following example is a form to request a computer.

```

<WorkflowEditEntityForm Identifier="Workflow_Directory_User_ComputerRequest" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" WorkflowRequestType="Self" Activity="Directory_User_ComputerRequest:Request" FormTitle_L1="Computer Request" RecordProperty="Directory_User:PC_Requested" HideRoles="true">    <MainControl OutputType="TransformImport" EmbeddedForm="PC_Request" />    <SummaryControl OutputType="TransformImport" EmbeddedForm="PC_Request" /></WorkflowEditEntityForm>

With the following form for the workflow's content and summary:
<Form Identifier="PC_Request" EntityType="Directory_User">    <Control Binding="PC_Modele" DisplayName_L1="Model if already known" /></Form>

```

The content of `MainControl` is visible during the workflow's execution:

![Form Example - Computer Request](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workfloweditentityform/formexample_workfloweditentityform_v603.webp)

The content of `SummaryControl` is visible after the workflow's execution:

![Summary Form Example - Computer Request](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workfloweditentityform/formexample_workfloweditentityform_summary_v603.webp)

## Properties

| Property | Details |
| -------- | ------- |

## Child Element: MainControl

Set of fields to collect data about the main resource.

| Property | Details |
| -------- | ------- |

## Child Element: SummaryControl

Set of fields to sum up the collected data after the workflow's execution.

| Property | Details |
| -------- | ------- |

# WorkflowUpdateRecordEntitiesForm

Displays a form to update data for several resources simultaneously.

## Examples

The following example is a form to update users' positions in bulk.

```

<WorkflowUpdateRecordEntitiesForm Identifier="Workflow_Directory_User_MassUpdate" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Self" Activity="Directory_User_MassUpdate:Request" HideRoles="false" FormTitle_L1="Update Users" >    <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_MassUpdate_Main" />    <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_MassUpdate_Base" />    <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_AddPosition_Unique" />    <MainSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_MassUpdate_Main" />    <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_MassUpdate_Base" /></WorkflowUpdateRecordEntitiesForm>

With the following form for the workflow's content and summary about resource data:
<Form Identifier="Workflow_Directory_UserRecord_MassUpdate_Main" EntityType="Directory_User">    <Control Binding="IsDraft" /></Form>

And with the following form for the workflow's content and summary about record data:
<Form Identifier="Workflow_Directory_UserRecord_MassUpdate_Base" EntityType="Directory_UserRecord">        <Control Binding="ContractEndDate" InputType="Date" />    <Control DisplayName_L1="Position" OutputType="LayoutFieldset" Name="Position">        <Control Binding="PositionIdentifier" ColumnSize="4" />        <Control Binding="Title" />        <Control Binding="Manager" />        <Control Binding="Organization" />        <Control Binding="Site" />        <Control Binding="PositionStartDate" />        <Control Binding="PositionEndDate" InputType="Date" />    </Control></Form>

And with the following form for the data that groups records together:
<Form Identifier="Workflow_Directory_User_AddPosition_Unique" EntityType="Directory_UserRecord">    <Control Binding="PositionIdentifier" /></Form>

```

The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:

![Form Example - Mass Update](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowupdaterecordentitiesform/formexample_workflowupdaterecordentitiesform_v603.webp)

The content of `RecordUniqueItemControl` is not visible. The user's records that have the same
values for all the properties in `RecordUniqueItemControl` will be modified as one.

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's
execution:

## Properties

| Property | Details |
| -------- | ------- |

## Child Element: MainControl

Set of fields to collect data about the main resource.

| Property | Details |
| -------- | ------- |

## Child Element: RecordControl

Set of fields to collect data about the resource's record.

| Property | Details |
| -------- | ------- |

## Child Element: RecordUniqueItemControl

Set of fields that group records together. All records with the same data in
`RecordUniqueItemControl` are displayed in the workflow as only one record, and they will
potentially be modified together. When not specified, records will be grouped by the data from
`RecordControl`.

| Property | Details |
| -------- | ------- |

## Child Element: MainSummaryControl

Set of fields to sum up the data collected by `MainControl` after the workflow's execution.

| Property | Details |
| -------- | ------- |

## Child Element: RecordSummaryControl

Set of fields to sum up the data collected by `RecordControl` after the workflow's execution.

| Property | Details |
| -------- | ------- |

# WorkflowUpdateRecordEntityForm

Displays a form to select an existing record and update it.

## Examples

The following example is a form to update a user's record from helpdesk.

```

<WorkflowUpdateRecordEntityForm Identifier="Workflow_Helpdesk_Directory_User_FixRecord" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" WorkflowRequestType="Helpdesk" Activity="Helpdesk_Directory_User_FixRecord:Request" FormTitle_L1="Repair Data (helpdesk)" >  <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_User_Base" />  <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" />  <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Unique" />  <MainSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_User_Base" />  <RecordSummaryControl OutputType="TransformImport" EmbeddedForm="Workflow_Helpdesk_Directory_UserRecord_Base" /></WorkflowUpdateRecordEntityForm>

With the following form for the resource's data and summary:
<Form Identifier="Workflow_Helpdesk_Directory_User_Base" EntityType="Directory_User">  <Control Binding="Identifier" />  <Control Binding="IsDraft" /></Form>

And with the following form for the data shared with all records and for the summary:
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Base" EntityType="Directory_UserRecord">  <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset" Name="Personal Data">    <Control DisplayName_L1="Full Name" OutputType="LayoutRowset" Name="Full Name">      <Control Binding="LastName" />      <Control Binding="FirstName" />    </Control>    <Control Binding="BirthDate" />    <Control Binding="Gender" ColumnSize="3" />    <Control Binding="Email" ColumnSize="6" />    <Control DisplayName_L1="Phone Numbers" OutputType="LayoutRowset" Name="Phone Numbers">      <Control Binding="PhoneNumber" />      <Control Binding="MobileNumber" />    </Control>    <Control Binding="Login" ColumnSize="4" />    <Control Binding="StartDate" />    <Control Binding="EndDate" InputType="Date" />  </Control>  <Control DisplayName_L1="Contract" OutputType="LayoutFieldset" Name="Contract">    <Control Binding="EmployeeId" ColumnSize="4" />    <Control Binding="ContractIdentifier" ColumnSize="4" />    <Control Binding="UserType" />    <Control Binding="ContractStartDate" />    <Control Binding="ContractEndDate" />  </Control>  <Control DisplayName_L1="Position" OutputType="LayoutFieldset" Name="Position">    <Control Binding="PositionIdentifier" ColumnSize="4" />    <Control Binding="JobTitle" />    <Control Binding="Manager" />    <Control Binding="IGAManager" />    <Control Binding="Organization" />    <Control Binding="PositionStartDate" />    <Control Binding="PositionEndDate" InputType="Date" />  </Control></Form>

And with the following form for the data that groups records together:
<Form Identifier="Workflow_Helpdesk_Directory_UserRecord_Unique" EntityType="Directory_UserRecord">  <Control Binding="Id" /></Form>

```

The contents of `MainControl` and `RecordControl` are visible during the workflow's execution:

![Form Example - Update Data](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowupdaterecordentityform/formexample_workflowupdaterecordentityform_v603.webp)

The content of `RecordUniqueItemControl` is not visible. The user's records that have the same
values for all the properties in `RecordUniqueItemControl` will be displayed, and potentially
modified, as one.

The contents of `MainSummaryControl` and `RecordSummaryControl` are visible after the workflow's
execution:

![Summary Form Example - Update Data](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowupdaterecordentityform/formexample_workflowupdaterecordentityform_summary_v603.webp)

## Properties

| Property | Details |
| -------- | ------- |

## Child Element: MainControl

Set of fields to collect data about the main resource.

| Property | Details |
| -------- | ------- |

## Child Element: RecordControl

Set of fields to collect data about the resource's record.

| Property | Details |
| -------- | ------- |

## Child Element: RecordUniqueItemControl

Set of fields that group records together. All records with the same data in
`RecordUniqueItemControl` are displayed in the workflow as only one record, and they will
potentially be modified together. When not specified, records will be grouped by the data from
`RecordControl`.

| Property | Details |
| -------- | ------- |

## Child Element: MainSummaryControl

Set of fields to sum up the data collected by `MainControl` after the workflow's execution.

| Property | Details |
| -------- | ------- |

## Child Element: RecordSummaryControl

Set of fields to sum up the data collected by `RecordControl` after the workflow's execution.

| Property | Details |
| -------- | ------- |

# WorkflowUpdateSeveralRecordsEntityForm

Displays a form to create, update or delete one or several records.

## Examples

The following example is a form to create, update and/or delete one or several positions for a given
user.

```

<WorkflowUpdateSeveralRecordsEntityForm Identifier="Workflow_Directory_User_ManagePositions" EntityType="Workflow_Directory_User" MainProperty="Workflow_Directory_User:Directory_User" RecordProperty="Directory_User:Records" RecordTable="Directory_UserRecord_ManagePositions" WorkflowRequestType="Self" Activity="Directory_User_ManagePositions:Request" FormTitle_L1="Manage Positions" TableTitle_L1="Positions" AddRowLabel_L1="Add Position" RemoveRowLabel_L1="Remove Position" RecordStartProperty="Directory_UserRecord:PositionStartDate" RecordEndProperty="Directory_UserRecord:PositionEndDate">    <MainControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_User_Position_Main" />    <RecordControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_Position_Base_New" />    <RecordUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_Position_Unique" />    <RecordSlaveUniqueItemControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_Position_Contract" />    <RecordSlaveControl OutputType="TransformImport" EmbeddedForm="Workflow_Directory_UserRecord_Position_Base_Existing" /></WorkflowUpdateSeveralRecordsEntityForm>

With the following form for the resource's data:
<Form Identifier="Workflow_Directory_User_Position_Main" EntityType="Directory_User">    <Control Binding="Identifier" />    <Control Binding="IsDraft" /></Form>

And with the following form for the data shared with all records:
<Form Identifier="Workflow_Directory_UserRecord_Position_Contract" EntityType="Directory_UserRecord">    <Control Binding="EmployeeId" ColumnSize="4" />    <Control Binding="ContractIdentifier" ColumnSize="4" />    <Control Binding="UserType" />    <Control Binding="ContractStartDate" />    <Control Binding="ContractEndDate" /></Form>

And with the following form for the data used to update existing records:
<Form Identifier="Workflow_Directory_UserRecord_Position_Base_Existing" EntityType="Directory_UserRecord">    <Control DisplayName_L1="Position" OutputType="LayoutFieldset" Name="Position">        <Control Binding="PositionIdentifier" ColumnSize="4" />        <Control Binding="Manager" />        <Control Binding="IGAManager" />        <Control Binding="Organization" />        <Control Binding="Site" />        <Control Binding="PositionStartDate" />        <Control Binding="PositionEndDate" InputType="Date" />    </Control></Form>

And with the following form for the data used to add new records:
<Form Identifier="Workflow_Directory_UserRecord_Position_Base_New" EntityType="Directory_UserRecord">    <Control DisplayName_L1="Position" OutputType="LayoutFieldset" Name="Position">        <Control Binding="PositionIdentifier" ColumnSize="4" />
        <Control Binding="Title" />
        <Control Binding="Manager" />        <Control Binding="IGAManager" />        <Control Binding="Organization" />        <Control Binding="Site" />        <Control Binding="PositionStartDate" />        <Control Binding="PositionEndDate" InputType="Date" />    </Control></Form>

And with the following form for the data that groups records together:
<Form Identifier="Workflow_Directory_UserRecord_Position_Unique" EntityType="Directory_UserRecord">    <Control Binding="PositionIdentifier" /></Form>

```

The contents of `MainControl`, `RecordControl`, `RecordSlaveUniqueItemControl` and
`RecordSlaveControl` are visible during the workflow's execution:

![Form Example - Manage a User's Positions](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowupdateseveralrecordsentityform/formexample_workflowupdateseveralrecordsentityform_v603.webp)

When adding a new position, we decide to make `Title` available, in addition to the fields used to
update existing records:

![Form Example - Manage a User's Positions - New Record](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/toolkit/xml-configuration/workflows/forms/workflowupdateseveralrecordsentityform/formexample_workflowupdateseveralrecordsentityform_newrecord_v603.webp)

The content of `RecordUniqueItemControl` is not visible. The user's records that have the same
values for all the properties in `RecordUniqueItemControl` will be displayed, and potentially
modified, as one.

## Properties

| Property | Details |
| -------- | ------- |

## Child Element: MainControl

Set of fields to collect data about the main resource.

| Property | Details |
| -------- | ------- |

## Child Element: RecordControl

Set of fields to collect data when adding new records.

| Property | Details |
| -------- | ------- |

## Child Element: RecordUniqueItemControl

Set of fields that group records together. All records with the same data in
`RecordUniqueItemControl` are displayed in the workflow as only one record, and they will
potentially be modified together. When not specified, records will be grouped by the data from
`RecordControl`.

| Property | Details |
| -------- | ------- |

## Child Element: RecordSlaveUniqueItemControl

Set of fields to collect the data shared with all the resource's records, for example contract
information when managing positions.

| Property | Details |
| -------- | ------- |

## Child Element: RecordSlaveControl

Set of fields to collect data when updating existing records.

| Property | Details |
| -------- | ------- |

# HomonymEntityLink

This entity is used to configure the homonym workflow.

## Examples

```

<HomonymEntityLink FormEntityType="Referentiel_UserRecord" Identifier="Homonym_Referentiel_UserRecord"/>

```

In this example the homonym is linked to a
[Control](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
and it will be applied for the
[Binding](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
included in the
[Control](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md)
where the homonym is located. Read more about
[how to configure homonym filters](/docs/identitymanager/6.1/identitymanager/index.md).

```

<Form Identifier="Workflow_Referentiel_User_AdvancedStartInternal_Base" EntityType="Referentiel_UserRecord">    <Control DisplayName_L1="Personal Data" OutputType="LayoutFieldset" HomonymEntityLink="Homonym_Referentiel_UserRecord">        <Control DisplayName_L1="Full Name" OutputType="LayoutRowset">            <Control Binding="LastName" IsRequired="true" />            <Control Binding="FirstName" IsRequired="true" />        </Control>    </Control></Form>

```

## Properties

| Property                | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FormEntityType required | **Type** Int64 **Description** In a [Form](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md), an [EntityType](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md) is defined and the [Binding](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md) of this Form will be loaded from this EntityType. The FormEntityType property represents this EntityType. |
| Identifier required     | **Type** String **Description** Unique identifier of the HomonymEntityLink.                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Child Element: Filter

Defines combination of property comparison to use to find homonyms.

### Properties

| Property                     | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ComparisonProperty1 optional | **Type** Int64 **Description** Defines the property used to compare with the form control `Property`. It should not be defined if it the same as the property in the attribute `Property`. Going from 1 to 5.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Expression1 optional         | **Type** String **Description** Defines the C# expression to apply on the homonymy form controls. The result of the expression evaluation will be compared with the corresponding `ComparisonProperty` using the defined `Operator`. If the `ComparisonProperty` is a computed property, no need to define the expression if it is the same as the one for the computed property. It will be automatically used when finding homonyms. Going from 1 to 5. [See more details on C# expressions](/docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Operator1 default value: 2   | **Type** QueryComparisonOperator **Description** Defines the operator to use to compare between the `ComparisonProperty` and the `Property` or the `Expression` evaluation result. By default the `Equal` operator is used. Going from 1 to 5. All possible values: `0` - Auto: The `Operator` is calculated by the engine according to the type of element. `1` - NotEqual: finds the elements that are not equal to the desired value. `2` - Equal: finds the elements that are strictly equal to the desired value. `3` - Contain: finds the elements that contain the desired value. `4` - StartWith: finds the elements that start with the desired value. `5` - EndWith: finds the elements that end with the desired value. `6` - NotContain: finds the elements that do not contain the desired value. `7` - NotStartWith: finds the elements that do not start with the desired value. `8` - NotEndWith: finds the elements that do not end with the desired value. `9` - GreaterThan: finds the elements that are greater than the desired value. `10` - LessThan: finds the elements that are less than the desired value. `11` - GreaterThanOrEqual: finds the elements that are greater than or equal to the desired value. `12` - LessThanOrEqual: finds the elements that are less than or equal to the desired value. `*`- Flexible: The `Flexible` operators transform the desired value according to the `FlexibleComparisonExpression` defined in the `EntityProperty` then search. The flexible operators are: `13` - FlexibleEqual `14` - FlexibleContain `15` - FlexibleStartWith `16` - FlexibleEndWith |
| Property1 optional           | **Type** Int64 **Description** Defines the form control property to use to compare with `ComparisonOperator` using the defined `Operator`. Going from 1 to 5.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

# Workflows

- #### [Aspects](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
- #### [Forms](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
- #### [HomonymEntityLink](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)
- #### [Workflow](/docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md)

# Workflow

In Usercube, a workflow is a set of elemental units called activities that are stored as a model to
describe a real-world process. A workflow provides a mechanism for automating multi-step processes
across the application. It can be depicted as a sequence of operations, declared as work of a person
or group, an organization of staff, or one or more simple or complex mechanisms.

## Examples

The following example declares a simple workflow called `Directory_User_StartInternal` that involves
resources from the entity type `Directory_User`.

```

    <Workflow Identifier="Directory_User_StartInternal" DisplayName_L1="User - New Employee" VariablesType="Workflow_Directory_User">
        <Activity ... />        ...
    </Workflow>

```

## Properties

| Property                  | Details                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| DisplayName_L1 required   | **Type** String **Description** Workflow' name displayed in the UI. This column is used for the first language.                                  |
| Identifier required       | **Type** String **Description** Unique identifier of the workflow.                                                                               |
| IdentifierPrefix optional | **Type** String **Description** Workflow's identifier prefix, used to prefix the workflow's activity instances.                                  |
| VariablesType required    | **Type** Int64 **Description** Entity type of the resources involved by the workflow. Must follow the naming convention `Workflow_<EntityType>`. |

## Child Element: Activity

In Usercube, an activity is a elemental unit used to model a workflow's steps, such as the request
of new records, the mailing of notifications to users about pending approvals, or the
approval/decline of modifications. A workflow is made of a series of successive activities.

### Examples

The following workflow is made of four activities to add a new worker in the system.

```

<Workflow Identifier="Directory_User_StartInternal" DisplayName_L1="User - New Employee" VariablesType="Workflow_Directory_User">
    <Activity Identifier="Request"  DisplayName_L1="Request" Template="ActionWithRefine" />
    <Activity Identifier="PersistDraft"  DisplayName_L1="Draft Creation" Template="PersistOnlyResources" WorkflowOverviewDisable="1"/>
    <Activity Identifier="Review"  DisplayName_L1="Review" Template="ReviewWithFeedback" />
    <Activity Identifier="Persist"  DisplayName_L1="Commit" Template="Persist" WorkflowOverviewDisable="1"/>  </Workflow>

```

### Properties

| Property                                       | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ArgumentBlockProvisioning default value: false | **Type** Boolean **Description** `true` to block provisioning orders (argument used only for an activity following the template `Persist` or `PersistOnlyResources`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ArgumentCalledWorkflow optional                | **Type** Int64 **Description** Workflow to call (argument used only for an activity following the template `ContinueWith`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| DisplayName_L1 required                        | **Type** String **Description** Activity's name to display in the UI. This column is used for the first language.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Identifier required                            | **Type** String **Description** Unique identifier of the activity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Template required                              | **Type** Enumeration **Description** Identifier of the activity template. All possible values: - `Action`: awaits user modifications without another user's intervention. - `ActionWithRefine`: awaits user modifications with the possibility to delegate the action to another user. - `Review`: awaits user approval without another user's intervention. - `ReviewWithFeedback`: awaits user approval with the possibility of getting feedback from another user before taking the action. - `Persist`: saves the workflow's collected data to the repository and triggers dependant processes (i.e. provisioning). - `PersistOnlyResources`: saves the workflow's collected data to the repository and without triggering dependant processes (i.e. provisioning). - `ContinueWith`: Gets the previous activities of the workflow and continues starting from a given activity of another workflow. |
| WorkflowOverviewDisable default value: false   | **Type** Boolean **Description** `true` to disable the activity's appearance on the **Workflow Overview** screen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
