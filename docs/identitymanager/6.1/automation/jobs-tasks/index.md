---
title: Jobs and Tasks Automation
sidebar_label: Jobs & Tasks
description: Comprehensive guide to orchestrating IGA tasks and jobs including complete/incremental synchronization, fulfillment tasks, and job configuration.
---

# Configure Jobs

This guide shows how to define the permissions for creating and using jobs thanks to scaffoldings.

There are two important jobs in Usercube. The
[**Complete Job**](/docs/identitymanager/6.1/automation/jobs-tasks/index.md)
and the
[**Incremental Job**](/docs/identitymanager/6.1/automation/jobs-tasks/index.md).
This two Job Synchronize and fill are using to Synchronize and fill Connectors.

## Job Scaffoldings

There are six scaffoldings in Usercube to automatically create jobs in the configuration:

- A job for all connectors on an Agent
  ([Complete](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)/[Incremental](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  mode).
- A job for a specific connector
  ([Complete](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)/[Incremental](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
  mode).
- [Initialization Job](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
- [AccessCertification Job](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

# Configure the Fulfill Task for a Connector

This guide shows how to create the adequate configuration to add the fulfill task of a given system
(here LDAP) in a job.

For Usercube fill an LDAP somme configuration element are necessary.

## [ResourceTypeMapping](/docs/identitymanager/6.1/configuration-reference/xml-configuration/connector-config.md)

This configuration is to use the fill for the LDAP and configure the Reset Password.

```

<PasswordResetSettings Identifier="default" BeneficiaryEmailBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Mail"
                      BeneficiaryFullNameBinding="AssignedResourceType:Owner.Directory_User:MainRecord.InternalDisplayName"
                      NotifiedEmailBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Organization.Manager.MainRecord.Mail"
                      NotifiedFullNameBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Organization.Manager.MainRecord.InternalDisplayName"
                      Mode="1" DefaultPassword="Usercube@2019" MustChange="true"
                      AutoGenerate="false" DisableNotifications="false" GeneratedLength="12" /> <LDAPResourceTypeMapping Identifier="AD_Entry_NominativeUser" Connection="ADExportFulfillment" PasswordResetSetting="default" DefaultObjectClass="user" RDNAttributeIdentifier="CN" UsePermissiveModify="true" UseTreeDelete="false"> <Property Property="dn" IsDNProperty="true" /> <Property Property="parentdn" IsParentProperty="true" /> <Property Property="cn" IsRDNProperty="true" /> <Property Property="userAccountControl" IsUserAccountControlProperty="true" /> <Property Property="memberOf" DataSourceBacklinkColumnName="member" /> </LDAPResourceTypeMapping>

```

## Add connection information to AD Connect

In the
[Connection Information](/docs/identitymanager/6.1/connectors-integration/connector-packages/ldap.md)
define this section to add all information to use the AD Fulfillment.

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "ADFulfillment": {
      "Servers": [
        {
          "Server": "paris.contoso.com",
          "BaseDN": "DC=paris,DC=com"
        }
      ],
      "AuthType": "Basic",
      "Login": "CN=exampleCn,DC=exampleDc1,DC=exampleDc2",
      "Password": "Password",
      "AsAdLds": "true"
    }
  }
}
```

After defining this settings, encrypt this JSON file with
[Usercube-Protect-X509JsonFile](/docs/identitymanager/6.1/tools-utilities/cli-reference/security-tools.md).

## Configure The FulfillTask

Configure The task with the same ResourceType using in ResourceTypeMapping. It's possible to use a
connector instead of ResourceType.

```

  <FulfillTask Agent="Local" DisplayName_L1="Fulfill LDAP" Identifier="Fulfill_LDAP" OpenIdClient="Job"> <TaskResourceType ResourceType="AD_Entry_NominativeUser"/> </FulfillTask>

```

Integrate this Task in the job that provisions the AD connector.

```

<Job Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning" DisplayName_L2="AD - Provisioning" Agent="Local"> ...
  <FulfillTask Agent="Local" DisplayName_L1="Fulfill LDAP" Identifier="Fulfill_LDAP" OpenIdClient="Job"> <TaskResourceType ResourceType="AD_Entry_NominativeUser"/> </FulfillTask> ...
</Job>

```

# How-Tos

These guides will help you configure tasks and jobs with practical step-by-step procedures.

- #### [Build Efficient Jobs](/docs/identitymanager/6.1/automation/jobs-tasks/job-optimization.md)
  Build efficient jobs by minimizing their costs.- ####
  [Configure Jobs](/docs/identitymanager/6.1/automation/jobs-tasks/index.md)
  Define the permissions for creating and using jobs thanks to scaffoldings.- ####
  [Troubleshoot Connector Jobs](/docs/identitymanager/6.1/troubleshooting-support/common-issues/connector-troubleshooting.md)
  Understand the behavior of synchronization and provisioning tasks in order to spot and fix
  errors.- ####
  [Configure an Incremental Job](/docs/identitymanager/6.1/automation/jobs-tasks/incremental-jobs.md)
  Configure the relevant tasks to make a job incremental.- ####
  [Set up Complete Synchronization](/docs/identitymanager/6.1/automation/jobs-tasks/index.md)
  Build the job that will synchronize the appropriate connectors in complete mode.- ####
  [Set Up Incremental Synchronization](/docs/identitymanager/6.1/automation/jobs-tasks/index.md)
  Build the job that will synchronize the appropriate connectors in incremental mode.- ####
  [Configure the Fulfill Task for a Connector](/docs/identitymanager/6.1/automation/jobs-tasks/index.md)
  Create the adequate configuration to add the fulfill task of a given system (here LDAP) in a
  job.

# Set up Complete Synchronization

This guide shows how to build the job that will synchronize the appropriate connectors in complete
mode.

### 1. Objective

Create a Synchronization Job in complete mode. This job is used to check for and fix differences in
the resources data after the incremental synchronizations.

The synchronization Job can be created automatically by a scaffolding. It can create either a job
for each connector and for each agent (see :
[CreateConnectorSynchroComplete](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md))
or a job for all connectors for each agent (see :
[CreateAgentSynchroComplete](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md))

In the following example the Synchronization job for the Connector "AD" will be created.

```

<Connector Identifier="AD" DisplayName_L1="AD" Agent="Local" />

```

### 2. Create the Export task

If a pre-treatment is needed, you must create an
[Export Task](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md).
Otherwise it is unnecessary. Choose the Export task corresponding to the connector. If the Export
uses the incremental mode, set IgnoreCookieFile to true.

All Export task have the ContinueOnError property. It is advisable to begin with the value of True
so that the task is not blocking for the Job.

Example :

```

<ExportTask Identifier="AD_Export_Complete" Agent="Local" Connection="AD_Export" OpenIdClient="Job" DisplayName_L1="Export AD" DisplayName_L2="Export AD" ContinueOnError="1" IgnoreCookieFile="1"/>

```

### 3. Create the Prepare Synchronization task

Create the PrepareSynchronizationTask with the connector. Set `SynchronizationMode="Complete"` ,
except for
[PrepareSynchronizationChangesTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
which doesn't need this parameter. If it is a Synchronization Changes, or ActiveDirectory, you must
precise it with the `Type` attribute.

If the job contain Exports for the same connector add the a link between the PrepareSynchronization
and the Export to check the final state of exports.

Example :

```

<PrepareSynchronizationTask Type="ActiveDirectory" DisplayName_L1="AD - Prepare Synchronization (complete Mode)" DisplayName_L2="AD - Pr�paration de la synchronisation (mode complet)" Connector="AD" SynchronizationMode="Complete" Agent="Local" OpenIdClient="Job"> <TaskDependsOnTask ParentTask="AD_Export_Complete"/></PrepareSynchronizationTask>

```

For more information on PrepareSynchronization task configuration :
[PrepareSynchronization Task](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 4. Create the Synchronization task

Create the SynchronizeTask with the same `Type` attribute as the PrepareSynchronizationTask. For the
complete mode the parameter DoNotDeleteChanges must not be present in the task configuration.

If the job contain Exports for the same connector add the a link between the Synchronization and the
Export to check the final state of exports.

Example :

```

<SynchronizeTask Type="ActiveDirectory" Identifier="AD_Synchronization" DisplayName_L1="AD - Synchronization" DisplayName_L2="AD - Synchronisation" Connector="AD"> <TaskDependsOnTask ParentTask="AD_Export_Complete"/></SynchronizeTask>

```

The Synchronization Validation Task is not needed , since it is managed by the
[state machine](/docs/identitymanager/6.1/automation/jobs-tasks/job-configuration.md).

For more information on Synchronization task configuration :
[Synchronization Task](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

For more details on the Synchronization job configuration : Synchronization Job Configuration

### 5. Create the UpdateEntityPropertyExpressions task

Create the UpdateEntityPropertyExpressionsTask to compute expression properties of the given
entityTypes or all entityTypes.

Example :

```

<UpdateEntityPropertyExpressionsTask Identifier="All_ComputeAllProperties" DisplayName_L1="Overall - Computed Properties Refresh" DisplayName_L2="Global - Mise � jour des propri�t�s calcul�es"> <TaskEntityType Identifier="AD_Entry"/></UpdateEntityPropertyExpressionsTask>

```

For more information on UpdateEntityPropertyExpressions Task configuration :
[UpdateEntityPropertyExpressionsTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 6. Create the ComputeCorrelationKey task

Create the ComputeCorrelationKey Task to compute correlation keys of the given entityTypes or all
entityTypes.

Example :

```

<ComputeCorrelationKeysTask Identifier="All_CorrelationKeys" DisplayName_L1="All Correlation Keys" > <TaskEntityType Identifier="AD_Entry"/></ComputeCorrelationKeysTask>

```

For more information about the ComputeCorrelationKey task configuration:
[ComputeCorrelationKeysTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 7. Create the ComputeRoleModel task

Create the ComputeRoleModel Task to create the provisioning order.

Example :

```

<ComputeRoleModelTask Identifier="Directory_ComputeRoleModel" DisplayName_L1="Directory - Provisioning Orders Generation" DisplayName_L2="R�f�rentiel - Pr�paration des ordres de provisioning"> <TaskEntityType EntityType="Directory_User"/> <TaskEntityType EntityType="Directory_Guest"/></ComputeRoleModelTask>

```

The TaskEntityType elements correspond to the sourceEntityTypes in the
[ResourceTypes](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md)
which have TargetEntityTypes that are part of the connector to provide.

For more information on Compute Role Model task configuration:
[ComputeRoleModelTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 8. Create the GenerateProvisioningOrder task

Create the GenerateProvisioningOrder task. The GenerateProvisioningOrder task will recover all
resources whose provisioningState is at 1 to build a list of JSON files containing all provisioning
orders. The Connector is the same as the connector set in the PrepareSynchronization. The
ForceProvisioning parameter must not be set to true. It's the job state machine who launch this mode
if necessary.

Example :

```

<GenerateProvisioningOrdersTask Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning Orders Fetching" DisplayName_L2="AD - R�cup�ration des ordres de provisioning" Connector="AD"/>

```

For more information on GenerateProvisioningOrder task configuration:
[GenerateProvisioningOrdersTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 9. Create the Fulfill task

Create the Fulfill task.

You must specify the right connection to fulfill the desired system.

All fulfillment task have the ContinueOnError property. It is advisable to begin with the value of
True so that the task is not blocking for the Job. The fulfill Tasks are directly depanding of
GenerateProvisioningOrdersTask. If this task has not create a new provisioning order. The
fulfillment must be not launch in the job.

```

<FulfillTask Identifier="AD_Fulfill" DisplayName_L1="AD - Automated Provisioning" DisplayName_L2="AD - Alimentation automatique" Connector="AD" OpenIdClient="Job" Connection="AD_Fulfillment" Agent="Local" ContinueOnError="1"> <TaskDependsOnTask ParentTask="AD_Provisioning"/></FulfillTask>

```

### 10. Create the UpdateClassification task

Create the Update Classification Task. The resource Classification is needed if one or more
[resource classification rules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md)
are configured for the connector.

```

<UpdateClassificationTask Identifier="AD_Update_Classification" DisplayName_L1="AD - Update Users Classification" DisplayName_L2="AD - Mise � jour de la classification des comptes" > <TaskEntityType EntityType="AD_Entry"/></UpdateClassificationTask>

```

For more information on Update Classification Task :
[UpdateClassificationTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 11. Create the SetInternalUserProfiles task

Create the Set Internal User Profiles Task. The Profile Assignment is needed if one ore more
[profile rules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/access-control-config.md)
are configured.

This Task is directly linked to a Fulfill parent. if the fulfillment has been completed with the
state warning or if it was not started or no processing has been performed, launching this task
becomes useless.

```

<SetInternalUserProfilesTask Identifier="All_SetAllInternalUserProfiles" DisplayName_L1="Overall - Profiles Update" DisplayName_L2="Global - Mise � jour des profils"> <TaskEntityType EntityType="AD_Entry"/> <TaskResourceType ResourceType="AD_Entry_NominativeUser"/> <TaskDependsOnTask ParentTask="AD_Fulfill"/></SetInternalUserProfilesTask>

```

For more information on SetInternalUserProfiles Task configuration :
[SetInternalUserProfilesTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 12. Create the all-tasks job

Once the tasks created. You must create the job to launch all tasks.

```

<Job Identifier="Job_AD_Complete" DisplayName_L1="AD Job's (Complete mode)" DisplayName_L2="Job de l'AD (mode complet)" Agent="Local"> <ExportTask Identifier="AD_Export_Complete" Agent="Local" Connection="AD_Export_Delta" OpenIdClient="Job" DisplayName_L1="Export AD" DisplayName_L2="Export AD"/> <PrepareSynchronizationTask Type="ActiveDirectory" DisplayName_L1="AD - Prepare Synchronization (complete Mode)" DisplayName_L2="AD - Pr�paration de la synchronisation (mode complet)" Connector="AD" SynchronizationMode="Complete" Agent="Local" OpenIdClient="Job"> <TaskDependsOnTask ParentTask="AD_Export_Complete"/> </PrepareSynchronizationTask> <SynchronizeTask Type="ActiveDirectory" Identifier="AD_Synchronization" DisplayName_L1="AD - Synchronization" DisplayName_L2="AD - Synchronisation" Connector="AD"> <TaskDependsOnTask ParentTask="AD_Export_Complete"/> </SynchronizeTask> <UpdateEntityPropertyExpressionsTask Identifier="All_ComputeAllProperties" DisplayName_L1="Overall - Computed Properties Refresh" DisplayName_L2="Global - Mise � jour des propri�t�s calcul�es"> <TaskEntityType Identifier="AD_Entry"/> </UpdateEntityPropertyExpressionsTask> <ComputeCorrelationKeysTask Identifier="All_CorrelationKeys" DisplayName_L1="All Correlation Keys" > <TaskEntityType Identifier="AD_Entry"/> </ComputeCorrelationKeysTask> <ComputeRoleModelTask Identifier="Directory_ComputeRoleModel" DisplayName_L1="Directory - Provisioning Orders Generation" DisplayName_L2="R�f�rentiel - Pr�paration des ordres de provisioning"> <TaskEntityType EntityType="Directory_User"/> <TaskEntityType EntityType="Directory_Guest"/> </ComputeRoleModelTask> <GenerateProvisioningOrdersTask Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning Orders Fetching" DisplayName_L2="AD - R�cup�ration des ordres de provisioning" Connector="AD"/> <FulfillTask Identifier="AD_Fulfill" DisplayName_L1="AD - Automated Provisioning" DisplayName_L2="AD - Alimentation automatique" Connector="AD" OpenIdClient="Job" Connection="AD_Fulfillment" Agent="Local" ContinueOnError="1"> <TaskDependsOnTask ParentTask="AD_Provisioning"/> </FulfillTask> <UpdateClassificationTask Identifier="AD_Update_Classification" DisplayName_L1="AD - Update Users Classification" DisplayName_L2="AD - Mise � jour de la classification des comptes" > <TaskEntityType EntityType="AD_Entry"/> </UpdateClassificationTask> <SetInternalUserProfilesTask Identifier="All_SetAllInternalUserProfiles" DisplayName_L1="Overall - Profiles Update" DisplayName_L2="Global - Mise � jour des profils"> <TaskEntityType EntityType="AD_Entry"/> <TaskResourceType ResourceType="AD_Entry_NominativeUser"/> <TaskDependsOnTask ParentTask="AD_Fulfill"/> </SetInternalUserProfilesTask> <SendRoleModelNotificationsTask DisplayName_L1="Send Notification" DisplayName_L2="Envoie des Notifications"> <TaskEntityType EntityType="AD_Entry"/> </SendRoleModelNotificationsTask></Job>

```

The job can be scheduled with the `CrontabExpression` attribute

For more information on job configuration :
[Jobs](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

# Set Up Incremental Synchronization

This guide shows how to build the job that will synchronize the appropriate connectors in
incremental mode.

### 1. Objective

Create a Synchronization job in incremental mode.

The synchronization Job can be created automatically by a scaffolding. It can create either a job
for each connector and for each agent (see :
[CreateConnectorSynchroIncremental](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md))
or a job for all connector for each agent (see :
[CreateAgentSynchroIncremental](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md))

In the following example the Synchronization job for the Connector "AD" will be created.

```

<Connector Identifier="AD" DisplayName_L1="AD" Agent="Local" />

```

### 2. Create the Export task

If a pre-treatment is needed, you must create an
[Export Task](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md).
Otherwise it is unnecessary. Choose the Export task corresponding to the connector.

All Export task have the ContinueOnError property. It is advisable to begin with the value of True
so that the task is not blocking for the Job.

Example :

```

<ExportTask Identifier="Export_AD_Delta" Agent="Local" Connection="AD_Export" OpenIdClient="Job" DisplayName_L1="AD - Extraction (delta)" DisplayName_L2="AD - Extraction (delta)" ContinueOnError="1"/>

```

### 3. Create the Prepare Synchronization task

Create the PrepareSynchronizationTask with the connector. Set `SynchronizationMode="Incremental"` ,
except for
[PrepareSynchronizationChangesTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
which doesn't need this parameter and LDAP connector who need complete mode.

If the job contain Exports for the same connector add the a link between the PrepareSynchronization
and the Export to check the final state of exports.

Example :

```

<PrepareSynchronizationTask Identifier="PrepareSynchronization_AD_Delta" Type="ActiveDirectory" DisplayName_L1="AD - Data Collect (incremental mode)" DisplayName_L2="AD - Collecte de donn�es (mode incr�mental)" Connector="AD" SynchronizationMode="Incremental" Agent="Local" OpenIdClient="Job"> <TaskDependsOnTask ParentTask="Export_AD_Delta"/></PrepareSynchronizationTask>

```

For more information on PrepareSynchronization task configuration :
[PrepareSynchronization Task](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 4. Create the Synchronization task

Create the SynchronizeTask corresponding to the PrepareSynchronization Task. If the
PrepareSynchronization Task is a
[PrepareSynchronizationChangesTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md),
then choose the
[Synchronization Change](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md),
else if it is
[PrepareSynchronizationActiveDirectoryTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)
choose
[SynchronizationADDirSync](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md),
else choose
[SynchronizeTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md).

In Incremental mode, you must set the attribute `DoNotDeleteChanges="true"`

For the Incremental mode add link between PrepareSynchronization and Synchronization task for the
same connector. If the job contain Exports for the same connector add the a link between the
Synchronization and the Export to check the final state of exports.

Example :

```

<SynchronizeTask Identifier="Synchronization_AD_Incremental" Type="ActiveDirectory" Identifier="AD_Synchronization" DisplayName_L1="AD - Synchronization" DisplayName_L2="AD - Synchronisation" Connector="AD"> <TaskDependsOnTask ParentTask="AD_Export_Complete"/> <TaskDependsOnTask ParentTask="PrepareSynchronization_AD_Delta"/></SynchronizeTask>

```

The Synchronization Validation Task is not needed , since it is managed by the
[state machine](/docs/identitymanager/6.1/automation/jobs-tasks/job-configuration.md).

For more information on Synchronization task configuration :
[Synchronization Task](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 5. Create the SetRecentlyModifiedFlag task

Create the Set Recently Modified Flag task.

Launching this is required only if at least one of the Synchronization in the job has made a change
in the database.

```

<SetRecentlyModifiedFlagTask Identifier="MarkDirty" DisplayName_L1="Set Recently Modified Flag" DisplayName_L2="Mise � jour du dirty"> <TaskDependsOnTask ParentTask="Synchronization_AD_Incremental"/></SetRecentlyModifiedFlagTask>

```

For more information on SetRecentlyModifiedFlag Task :
[SetRecentlyModifiedFlag Task](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 6. Create the UpdateEntityPropertyExpressions task

Create the UpdateEntityPropertyExpressionsTask to compute expression properties of the given
entityTypes or all entitytypes. Set the attribute Dirty : `Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the
Task SetRecentlyModifiedFlag has been started.

Example :

```

<UpdateEntityPropertyExpressionsTask Identifier="All_ComputeAllPropertiesWithDirty" DisplayName_L1="Overall - Computed Properties Refresh (With dirty)" DisplayName_L2="Global - Mise � jour des propri�t�s calcul�es (avec dirty)" Dirty="true"> <TaskDependsOnTask ParentTask="MarkDirty"/> <TaskEntityType Identifier="AD_Entry"/></UpdateEntityPropertyExpressionsTask>

```

For more information on UpdateEntityPropertyExpressions Task configuration :
[UpdateEntityPropertyExpressionsTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 7. Create the ComputeCorrelationKey task

Create the ComputeCorrelationKey Task to compute correlation keys of the given entityTypes or all
entityTypes. Set the attribute Dirty : `Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the
Task SetRecentlyModifiedFlag has been started.

Example :

```

<ComputeCorrelationKeysTask Identifier="All_CorrelationKeysWithDirty" DisplayName_L1="All Correlation Keys (With dirty)" Dirty="true"> <TaskEntityType Identifier="AD_Entry"/> <TaskDependsOnTask ParentTask="MarkDirty"/></ComputeCorrelationKeysTask>

```

For more information about the Compute Role Model correlation keys task configuration:
[ComputeCorrelationKeysTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 8. Create the ComputeRoleModel task

Create the ComputeRoleModely Task to create the provisioning order. Set the attribute Dirty :
`Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the
Task SetRecentlyModifiedFlag has been started.

Example :

```

<ComputeRoleModelTask Identifier="Directory_ComputeRoleModel_WithDirty" DisplayName_L1="Directory - Provisioning Orders Generation (with dirty)" DisplayName_L2="R�f�rentiel - Pr�paration des ordres de provisioning (avec dirty)" Dirty="true"> <TaskEntityType EntityType="Directory_User"/> <TaskEntityType EntityType="Directory_Guest"/> <TaskDependsOnTask ParentTask="MarkDirty"/></ComputeRoleModelTask>

```

The TaskEntityType elements correspond to the sourceEntityTypes in the
[ResourceTypes](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md)
which have TargetEntityTypes that are part of the connector to provide.

For more information on Compute Role Model task configuration:
[ComputeRoleModelTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 9. Create the GenerateProvisioningOrder task

Create the GenerateProvisioningOrder task. The GenerateProvisioningOrder task will recover all
resources whose provisioningState is at 1 to build a list of JSON files containing all provisioning
orders. The Connector is the same as the connector set in the PrepareSynchronization.

Example :

```

<GenerateProvisioningOrdersTask Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning Orders Fetching" DisplayName_L2="AD - R�cup�ration des ordres de provisioning" Connector="AD"/>

```

For more information on provisioning task configuration:
[GenerateProvisioningOrdersTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 10. Create the Fulfill task

Create the Fulfill task.

You must specify the right connection to fulfill the desired system.

All fulfillment task have the ContinueOnError property. It is advisable to begin with the value of
True so that the task is not blocking for the Job. The fulfill Tasks are directly depanding of
GenerateProvisioningOrdersTask. If this task has not create a new provisioning order. The
fulfillment must be not launch in the job.

```

<FulfillTask Identifier="AD_Fulfill" DisplayName_L1="AD - Automated Provisioning" DisplayName_L2="AD - Alimentation automatique" Connector="AD" OpenIdClient="Job" Connection="AD_Fulfillment" Agent="Local" ContinueOnError="1"> <TaskDependsOnTask ParentTask="AD_Provisioning"/></FulfillTask>

```

### 11. Create the UpdateClassification task

Create the Update Classification Task. The resource Classification is needed if one or more
[resource classification rules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/index.md)
are configured for the connector. Set the attribute Dirty : `Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the
Task SetRecentlyModifiedFlag has been started.

```

<UpdateClassificationTask Identifier="AD_Update_ClassificationWithDirty" DisplayName_L1="AD - Update Users Classification (With Dirty)" DisplayName_L2="AD - Mise � jour de la classification des comptes (avec Dirty)" Dirty="1"> <TaskEntityType EntityType="AD_Entry"/> <TaskDependsOnTask ParentTask="MarkDirty"/></UpdateClassificationTask>

```

For more information on Update Classification Task :
[UpdateClassificationTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 12. Create the SetInternalUserProfiles task

Create the Set Internal User Profiles Task. The Profile Assignment is needed if one ore more
[profile rules](/docs/identitymanager/6.1/configuration-reference/xml-configuration/access-control-config.md)
are configured.

This Task is directly linked to a Fulfill parent. if the fulfillment has been completed with the
state warning or if it was not started or no processing has been performed, launching this task
becomes useless.

```

<SetInternalUserProfilesTask Identifier="All_SetAllInternalUserProfiles" DisplayName_L1="Overall - Profiles Update" DisplayName_L2="Global - Mise � jour des profils"> <TaskEntityType EntityType="AD_Entry"/> <TaskResourceType ResourceType="AD_Entry_NominativeUser"/> <TaskDependsOnTask ParentTask="AD_Fulfill"/></SetInternalUserProfilesTask>

```

For more information on SetInternalUserProfiles Task configuration :
[SetInternalUserProfilesTask](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

### 13. Create the all-tasks job

Once the tasks created. You must create the job to launch all tasks.

```

<Job Identifier="Job_AD_Incremental" DisplayName_L1="AD Job's (Incremental mode)" DisplayName_L2="Job de l'AD (mode incremental)"
Agent="Local"> <ExportTask Identifier="Export_AD_Delta" Agent="Local" Connection="AD_Export" OpenIdClient="Job" DisplayName_L1="AD - Extraction (delta)" DisplayName_L2="AD - Extraction (delta)" ContinueOnError="1"/> <SynchronizeTask Identifier="Synchronization_AD_Incremental" Type="ActiveDirectory" Identifier="AD_Synchronization" DisplayName_L1="AD - Synchronization" DisplayName_L2="AD - Synchronisation" Connector="AD"> <TaskDependsOnTask ParentTask="AD_Export_Complete"/> <TaskDependsOnTask ParentTask="PrepareSynchronization_AD_Delta"/> </SynchronizeTask> <SetRecentlyModifiedFlagTask Identifier="MarkDirty" DisplayName_L1="Set Recently Modified Flag" DisplayName_L2="Mise � jour du dirty"> <TaskDependsOnTask ParentTask="Synchronization_AD_Incremental"/> </SetRecentlyModifiedFlagTask> <UpdateEntityPropertyExpressionsTask Identifier="All_ComputeAllPropertiesWithDirty" DisplayName_L1="Overall - Computed Properties Refresh (With dirty)" DisplayName_L2="Global - Mise � jour des propri�t�s calcul�es (avec dirty)" Dirty="true"> <TaskDependsOnTask ParentTask="MarkDirty"/> <TaskEntityType Identifier="AD_Entry"/> </UpdateEntityPropertyExpressionsTask> <ComputeCorrelationKeysTask Identifier="All_CorrelationKeysWithDirty" DisplayName_L1="All Correlation Keys (With dirty)" Dirty="true"> <TaskEntityType Identifier="AD_Entry"/> <TaskDependsOnTask ParentTask="MarkDirty"/> </ComputeCorrelationKeysTask> <ComputeRoleModelTask Identifier="Directory_ComputeRoleModel_WithDirty" DisplayName_L1="Directory - Provisioning Orders Generation (with dirty)" DisplayName_L2="R�f�rentiel - Pr�paration des ordres de provisioning (avec dirty)" Dirty="true"> <TaskEntityType EntityType="Directory_User"/> <TaskEntityType EntityType="Directory_Guest"/> <TaskDependsOnTask ParentTask="MarkDirty"/> </ComputeRoleModelTask> <GenerateProvisioningOrdersTask Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning Orders Fetching" DisplayName_L2="AD - R�cup�ration des ordres de provisioning" Connector="AD"/> <FulfillTask Identifier="AD_Fulfill" DisplayName_L1="AD - Automated Provisioning" DisplayName_L2="AD - Alimentation automatique" Connector="AD" OpenIdClient="Job" Connection="AD_Fulfillment" Agent="Local" ContinueOnError="1"> <TaskDependsOnTask ParentTask="AD_Provisioning"/> </FulfillTask> <UpdateClassificationTask Identifier="AD_Update_ClassificationWithDirty" DisplayName_L1="AD - Update Users Classification (With Dirty)" DisplayName_L2="AD - Mise � jour de la classification des comptes (avec Dirty)" Dirty="1"> <TaskEntityType EntityType="AD_Entry"/> <TaskDependsOnTask ParentTask="MarkDirty"/> </UpdateClassificationTask> <SetInternalUserProfilesTask Identifier="All_SetAllInternalUserProfiles" DisplayName_L1="Overall - Profiles Update" DisplayName_L2="Global - Mise � jour des profils"> <TaskEntityType EntityType="AD_Entry"/> <TaskResourceType ResourceType="AD_Entry_NominativeUser"/> <TaskDependsOnTask ParentTask="AD_Fulfill"/> </SetInternalUserProfilesTask></Job>

```

The job can be scheduled with the `CrontabExpression` attribute

For more information on job configuration :
[Jobs](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md)

# Tasks & Jobs

Usercube provides tasks to orchestrate together the executable files that perform IGA actions, and
jobs to orchestrate the tasks together.

[See more information about tasks](/docs/identitymanager/6.1/automation/jobs-tasks/task-management.md).

[See more information about jobs](/docs/identitymanager/6.1/automation/jobs-tasks/job-configuration.md).

[See the list of available tasks](/docs/identitymanager/6.1/configuration-reference/xml-configuration/jobs-config.md).

Make sure to read
[how to build efficient jobs](/docs/identitymanager/6.1/automation/jobs-tasks/job-optimization.md).

## Overview

NETWRIX' vision for the IGA software is a customizable solution.

The main idea of Usercube is to offer a software solution that you can tailor to your needs by
selecting IGA "blocks" and executing them in a specific order.

This is why Usercube is not built as a monolithic software. It is made of a mosaic of small
[specialized services](https://en.wikipedia.org/wiki/Microservices), cohesive independent functions,
each one materialized into a building block of your Usercube solution. Each building block serves a
specific and well delimited IGA function.

These building blocks are called
[tasks](/docs/identitymanager/6.1/automation/jobs-tasks/task-management.md), and can
be easily organized together and scheduled in
[jobs](/docs/identitymanager/6.1/automation/jobs-tasks/job-configuration.md).

This approach makes for a perfectly customizable product. It also tremendously helps our users to
ease into Usercube by allowing them to understand it piece by piece.
