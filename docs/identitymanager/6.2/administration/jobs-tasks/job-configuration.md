# Build Efficient Jobs

This topic shows how to build efficient jobs by minimizing their costs.

**NOTE:** The rules below must be followed when creating a new job, otherwise the frequent launch of
this scheduled job will trigger errors in a SaaS environment.

### Prerequisites

In order to successfully launch a frequent job (defined as a job called more than once an hour) the
following requirements need to be met:

- Synchronize / Export Task in incremental mode
- The UpdateEntityPropertyExpressions /ComputeCorrelationKeys/ComputeRoleModel tasks do have the
  SetRecentlyModifiedFlag set to true
- The ComputeCorrelationKeys/UpdateEntityPropertyExpressions tasks are computed on a subset of
  Entity Types (not all Entity Types at once)
- UpdateEntityPropertyExpressions/ComputeCorrelationKeys/ComputeRole tasks are not duplicated
- SetInternalUserProfiles/ActivityInstanceActor tasks are not configured to launch

## Rule 1: Use Scaffoldings

Identity Manager provides scaffoldings to simplify XML configuration by generating complex XML
fragments. See the
[Scaffoldings](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md) topic for
additional information.

Most jobs are included in job scaffoldings, thus configured in the most optimal way. So start by
using scaffoldings to build jobs. See the
[ Jobs ](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md) topic for
additional information.

For example, the creation from scratch of a job to perform a complete synchronization for a
connector will be tedious. Instead, use Identity Manager's scaffolding, like in the following
example concerning the Microsoft Entra ID (formerly Microsoft Azure AD) connector. Instead of a few
dozens of lines, write only the following:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
                      
<CreateConnectorSynchroComplete DisplayName_L1="10: Microsoft Entra ID - Synchronization Complete (scaffolding)" Connector="AzureAD" JobIdentifier="AzureAD_Synchronize_Complete_Scaffolding"/>
                   
```

See
the[Create Connector Synchro Complete](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)for
additional information.

## Rule 2: Compute Only What's Necessary

Execute the tasks on the right entity types

Many tasks can be executed either on all entity types, or on a given list of entity types.

Make sure to configure the tasks so that they are executed only on the relevant entity types, not
all of them by default.

For example, instead of using AllEntityType set to true, write the following:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
                        
<ComputeCorrelationKeysTask DisplayName_L1="Directory User - Update the correlation keys" >
  <TaskEntityType EntityType="Directory_UserRecord"/>  <TaskEntityType EntityType="Directory_User"/>  <TaskEntityType EntityType="HR_Person"/>
</ComputeCorrelationKeysTask>
                    
```

Launch incremental tasks rather than complete

When a task is supposed to be executed on changes only, then there is no use executing the task in
complete mode.

Make the relevant tasks incremental by flagging the resources that were recently modified. See the
[ Configure an Incremental Job ](/docs/identitymanager/6.2/identity-management/synchronization/incremental-sync.md) topic for additional
information.

For example, instead of computing the role model as if it had never been computed before, apply only
the changes by writing the following:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
                        
<ComputeRoleModelTask Identifier="AzureAD_Synchronize_Incremental_ComputeRoleModel_WithDirty" DisplayName_L1="Apply the Role Model" Level="6" Dirty="true">  <TaskEntityType EntityType="Directory_User" /></ComputeRoleModelTask>
                    
```

Launch only the relevant tasks according to the logical chain

Identity Manager's tasks are all linked together by a logical chain that implies that some tasks are
supposed to be executed after some others.

Make sure to understand the tasks' logical chain to launch only the relevant tasks. See the
[ Troubleshoot Connector Jobs ](/docs/identitymanager/6.2/administration/jobs-tasks/job-configuration.md) topic for additional
information.

For example, there is no use computing expressions or correlations if there was beforehand no change
in the database. Thus, there should not be UpdateEntityPropertyExpressionsTask or
ComputeCorrelationKeysTask without first SynchronizeTask or FulfillTask.

## Rule 3: Wait for Recurring Tasks

Inside a recurring job, there is no need including some tasks twice in order to have the whole
cycle, because the next execution will complete what has been started.

For example, Identity Manager's feedback loop uses the tasks for synchronization, computation of the
role model, provisioning, then once more synchronization and computation of the role model.

Instead of including any task twice, rather write a job with each task once, schedule a periodic
execution of the job, and wait for the next execution to get the whole cycle. For example for the
AD:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
                     
<Job Identifier="Synchronization_RoleModelComputation_Provisioning" DisplayName_L1="91: Synchronization / RoleModelComputation / Provisioning" Agent="Local">  <ExportTask Identifier="Export_AD" DisplayName_L1="AD - Extract Changes" Agent="Local" Connector="AD" Level="0" OpenIdClient="Job" Connection="ADExportFulfillment" ContinueOnError="true" />  <PrepareSynchronizationTask Identifier="PrepareSynchronization_AD" DisplayName_L1="Synchronization (agent side)" Agent="Local" Connector="AD" Level="1" OpenIdClient="Job" SynchronizationMode="Incremental" Type="ActiveDirectory">      <TaskDependsOnTask ParentTask="Export_AD" />  </PrepareSynchronizationTask>  <SynchronizeTask Identifier="Synchronization_AD" DisplayName_L1="Synchronization (server side)" Connector="AD" Level="2" Type="ActiveDirectory">  <TaskDependsOnTask ParentTask="PrepareSynchronization_AD" />  </SynchronizeTask>  <UpdateEntityPropertyExpressionsTask Identifier="UpdateEntityPropertyExpressions_AD" DisplayName_L1="Update Computed Properties" Level="4">      <TaskEntityType EntityType="AD_Entry" />      ...
  </UpdateEntityPropertyExpressionsTask>  <ComputeCorrelationKeysTask Identifier="ComputeCorrelationKeys_AD" DisplayName_L1="Compute all Correlations" Level="5">      <TaskEntityType EntityType="AD_Entry" />      ...
 </ComputeCorrelationKeysTask>  <ComputeRoleModelTask Identifier="ComputeRoleModel_AD" DisplayName_L1="Apply the Role Model" Level="6">      <TaskEntityType EntityType="Directory_User" />      ...
  </ComputeRoleModelTask>  <GenerateProvisioningOrdersTask Identifier="GenerateProvisioningOrders_AD" DisplayName_L1="Generate Provisioning Orders" Level="7">    <TaskResourceType ResourceType="AD_Entry_NominativeUser" />    ...
  </GenerateProvisioningOrdersTask>  <FulfillTask Identifier="Fulfill_AD" DisplayName_L1="Provisioning" Agent="Local" Level="8" OpenIdClient="Job" ContinueOnError="true">    <TaskDependsOnTask ParentTask="GenerateProvisioningOrders_AD" />    <TaskResourceType ResourceType="AD_Entry_NominativeUser" />    ...
  </FulfillTask></Job>
```

```
                      
<CreateConnectorSynchroComplete DisplayName_L1="10: Microsoft Entra ID - Synchronization Complete (scaffolding)" Connector="AzureAD" JobIdentifier="AzureAD_Synchronize_Complete_Scaffolding"/>
                   
```

```
                        
<ComputeCorrelationKeysTask DisplayName_L1="Directory User - Update the correlation keys" >
  <TaskEntityType EntityType="Directory_UserRecord"/>  <TaskEntityType EntityType="Directory_User"/>  <TaskEntityType EntityType="HR_Person"/>
</ComputeCorrelationKeysTask>
                    
```

```
                        
<ComputeRoleModelTask Identifier="AzureAD_Synchronize_Incremental_ComputeRoleModel_WithDirty" DisplayName_L1="Apply the Role Model" Level="6" Dirty="true">  <TaskEntityType EntityType="Directory_User" /></ComputeRoleModelTask>
                    
```

```
                     
<Job Identifier="Synchronization_RoleModelComputation_Provisioning" DisplayName_L1="91: Synchronization / RoleModelComputation / Provisioning" Agent="Local">  <ExportTask Identifier="Export_AD" DisplayName_L1="AD - Extract Changes" Agent="Local" Connector="AD" Level="0" OpenIdClient="Job" Connection="ADExportFulfillment" ContinueOnError="true" />  <PrepareSynchronizationTask Identifier="PrepareSynchronization_AD" DisplayName_L1="Synchronization (agent side)" Agent="Local" Connector="AD" Level="1" OpenIdClient="Job" SynchronizationMode="Incremental" Type="ActiveDirectory">      <TaskDependsOnTask ParentTask="Export_AD" />  </PrepareSynchronizationTask>  <SynchronizeTask Identifier="Synchronization_AD" DisplayName_L1="Synchronization (server side)" Connector="AD" Level="2" Type="ActiveDirectory">  <TaskDependsOnTask ParentTask="PrepareSynchronization_AD" />  </SynchronizeTask>  <UpdateEntityPropertyExpressionsTask Identifier="UpdateEntityPropertyExpressions_AD" DisplayName_L1="Update Computed Properties" Level="4">      <TaskEntityType EntityType="AD_Entry" />      ...
  </UpdateEntityPropertyExpressionsTask>  <ComputeCorrelationKeysTask Identifier="ComputeCorrelationKeys_AD" DisplayName_L1="Compute all Correlations" Level="5">      <TaskEntityType EntityType="AD_Entry" />      ...
 </ComputeCorrelationKeysTask>  <ComputeRoleModelTask Identifier="ComputeRoleModel_AD" DisplayName_L1="Apply the Role Model" Level="6">      <TaskEntityType EntityType="Directory_User" />      ...
  </ComputeRoleModelTask>  <GenerateProvisioningOrdersTask Identifier="GenerateProvisioningOrders_AD" DisplayName_L1="Generate Provisioning Orders" Level="7">    <TaskResourceType ResourceType="AD_Entry_NominativeUser" />    ...
  </GenerateProvisioningOrdersTask>  <FulfillTask Identifier="Fulfill_AD" DisplayName_L1="Provisioning" Agent="Local" Level="8" OpenIdClient="Job" ContinueOnError="true">    <TaskDependsOnTask ParentTask="GenerateProvisioningOrders_AD" />    <TaskResourceType ResourceType="AD_Entry_NominativeUser" />    ...
  </FulfillTask></Job>
```

# Configure Jobs

This guide shows how to define the permissions for creating and using jobs thanks to scaffoldings.

There are two important jobs in Identity Manager. The
[ Set up Complete Synchronization ](/docs/identitymanager/6.2/administration/jobs-tasks/job-configuration.md) and the
[ Set Up Incremental Synchronization ](/docs/identitymanager/6.2/administration/jobs-tasks/job-configuration.md). This two Job Synchronize and fill are
using to Synchronize and fill Connectors.

## Job Scaffoldings

There are six scaffoldings in Identity Manager to automatically create jobs in the configuration:

- A job for all connectors on an Agent
  ([Create Agent Synchro Complete](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)/[Create Agent Synchro Incremental](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)
  mode).
- A job for a specific connector
  ([Create Connector Synchro Complete](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)/[Create Agent Synchro Incremental](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)
  mode).
- [Create Initialization Job](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)
- [Create Access Certification Job](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md)

# Configure the Fulfill Task for a Connector

This guide shows how to create the adequate configuration to add the fulfill task of a given system
(here LDAP) in a job.

For Identity Manager fill an LDAP some configuration element are necessary.

## Resource Type Mapping

This configuration is to use the fill for the LDAP and configure the Reset Password.

```

<PasswordResetSettings Identifier="default" BeneficiaryEmailBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Mail"
                      BeneficiaryFullNameBinding="AssignedResourceType:Owner.Directory_User:MainRecord.InternalDisplayName"
                      NotifiedEmailBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Organization.Manager.MainRecord.Mail"
                      NotifiedFullNameBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Organization.Manager.MainRecord.InternalDisplayName"
                      Mode="1" DefaultPassword="Usercube@2019" MustChange="true"
                      AutoGenerate="false" DisableNotifications="false" GeneratedLength="12" />  <LDAPResourceTypeMapping Identifier="AD_Entry_NominativeUser" Connection="ADExportFulfillment" PasswordResetSetting="default" DefaultObjectClass="user" RDNAttributeIdentifier="CN" UsePermissiveModify="true" UseTreeDelete="false">    <Property Property="dn" IsDNProperty="true" />    <Property Property="parentdn" IsParentProperty="true" />    <Property Property="cn" IsRDNProperty="true" />    <Property Property="userAccountControl" IsUserAccountControlProperty="true" />    <Property Property="memberOf" DataSourceBacklinkColumnName="member" />  </LDAPResourceTypeMapping>

```

## Add connection information to AD Connect

In the [ LDAP ](/docs/identitymanager/6.2/integration/connectors/connector-catalog/ldap.md) define this section to add
all information to use the AD Fulfillment.

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
[ Usercube-Protect-X509JsonFile ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md).

## Configure The FulfillTask

Configure The task with the same ResourceType using in ResourceTypeMapping. It's possible to use a
connector instead of ResourceType.

```

  <FulfillTask Agent="Local" DisplayName_L1="Fulfill LDAP" Identifier="Fulfill_LDAP" OpenIdClient="Job">    <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>  </FulfillTask>

```

Integrate this Task in the job that provisions the AD connector.

```

<Job Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning" DisplayName_L2="AD - Provisioning" Agent="Local">  ...
  <FulfillTask Agent="Local" DisplayName_L1="Fulfill LDAP" Identifier="Fulfill_LDAP" OpenIdClient="Job">    <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>  </FulfillTask>  ...
</Job>

```

# Set up Complete Synchronization

This guide shows how to build the job that will synchronize the appropriate connectors in complete
mode.

### 1. Objective

Create a Synchronization Job in complete mode. This job is used to check for and fix differences in
the resources data after the incremental synchronizations.

The synchronization Job can be created automatically by a scaffolding. It can create either a job
for each connector and for each agent (see :
[Create Connector Synchro Complete](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md))
or a job for all connectors for each agent (see :
[Create Agent Synchro Complete](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md))

In the following example the Synchronization job for the Connector "AD" will be created.

```

<Connector Identifier="AD" DisplayName_L1="AD" Agent="Local" />

```

### 2. Create the Export task

If a pre-treatment is needed, you must create an
[ Export Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md). Otherwise
it is unnecessary. Choose the Export task corresponding to the connector. If the Export uses the
incremental mode, set IgnoreCookieFile to true.

All Export task have the ContinueOnError property. It is advisable to begin with the value of True
so that the task is not blocking for the Job.

Example :

```

<ExportTask Identifier="AD_Export_Complete" Agent="Local" Connection="AD_Export" OpenIdClient="Job" DisplayName_L1="Export AD" DisplayName_L2="Export AD" ContinueOnError="1" IgnoreCookieFile="1"/>

```

### 3. Create the Prepare Synchronization task

Create the Prepare Synchronization Task with the connector. Set `SynchronizationMode="Complete"` ,
except for
[ Prepare Synchronization Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
which doesn't need this parameter. If it is a Synchronization Changes, or ActiveDirectory, you must
precise it with the `Type` attribute.

If the job contain Exports for the same connector add the a link between the PrepareSynchronization
and the Export to check the final state of exports.

Example :

```

<PrepareSynchronizationTask Type="ActiveDirectory" DisplayName_L1="AD - Prepare Synchronization (complete Mode)" DisplayName_L2="AD - Pr�paration de la synchronisation (mode complet)" Connector="AD" SynchronizationMode="Complete" Agent="Local" OpenIdClient="Job">  <TaskDependsOnTask ParentTask="AD_Export_Complete"/></PrepareSynchronizationTask>

```

For more information on PrepareSynchronization task configuration :
[ Prepare Synchronization Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

### 4. Create the Synchronization task

Create the SynchronizeTask with the same `Type` attribute as the PrepareSynchronizationTask. For the
complete mode the parameter DoNotDeleteChanges must not be present in the task configuration.

If the job contain Exports for the same connector add the a link between the Synchronization and the
Export to check the final state of exports.

Example :

```

<SynchronizeTask Type="ActiveDirectory" Identifier="AD_Synchronization" DisplayName_L1="AD - Synchronization" DisplayName_L2="AD - Synchronisation" Connector="AD">  <TaskDependsOnTask ParentTask="AD_Export_Complete"/></SynchronizeTask>

```

The Synchronization Validation Task is not needed , since it is managed by the
[ Jobs ](/docs/identitymanager/6.2/administration/jobs-tasks/job-configuration.md).

For more information on Synchronization task configuration :
[ Synchronize Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

For more details on the Synchronization job configuration : Set up Complete Synchronization Job
Configuration

### 5. Create the UpdateEntityPropertyExpressions task

Create the UpdateEntityPropertyExpressionsTask to compute expression properties of the given
entityTypes or all entityTypes.

Example :

```

<UpdateEntityPropertyExpressionsTask Identifier="All_ComputeAllProperties" DisplayName_L1="Overall - Computed Properties Refresh" DisplayName_L2="Global - Mise � jour des propri�t�s calcul�es">    <TaskEntityType Identifier="AD_Entry"/></UpdateEntityPropertyExpressionsTask>

```

For more information on UpdateEntityPropertyExpressions Task configuration :
[UpdateEntityPropertyExpressionsTask](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

### 6. Create the ComputeCorrelationKey task

Create the ComputeCorrelationKey Task to compute correlation keys of the given entityTypes or all
entityTypes.

Example :

```

<ComputeCorrelationKeysTask Identifier="All_CorrelationKeys" DisplayName_L1="All Correlation Keys" >	<TaskEntityType Identifier="AD_Entry"/></ComputeCorrelationKeysTask>

```

For more information about the ComputeCorrelationKey task configuration:
[ Compute Correlation Keys Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

### 7. Create the ComputeRoleModel task

Create the ComputeRoleModel Task to create the provisioning order.

Example :

```

<ComputeRoleModelTask Identifier="Directory_ComputeRoleModel" DisplayName_L1="Directory - Provisioning Orders Generation" DisplayName_L2="R�f�rentiel - Pr�paration des ordres de provisioning">  <TaskEntityType EntityType="Directory_User"/>  <TaskEntityType EntityType="Directory_Guest"/></ComputeRoleModelTask>

```

The TaskEntityType elements correspond to the sourceEntityTypes in the
[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) which have
TargetEntityTypes that are part of the connector to provide.

For more information on Compute Role Model task configuration:
[ Compute Role Model Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

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
[Generate Provisioning Orders Task](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

### 9. Create the Fulfill task

Create the Fulfill task.

You must specify the right connection to fulfill the desired system.

All fulfillment task have the ContinueOnError property. It is advisable to begin with the value of
True so that the task is not blocking for the Job. The fulfill Tasks are directly depanding of
GenerateProvisioningOrdersTask. If this task has not create a new provisioning order. The
fulfillment must be not launch in the job.

```

<FulfillTask Identifier="AD_Fulfill" DisplayName_L1="AD - Automated Provisioning" DisplayName_L2="AD - Alimentation automatique" Connector="AD" OpenIdClient="Job" Connection="AD_Fulfillment" Agent="Local" ContinueOnError="1">  <TaskDependsOnTask ParentTask="AD_Provisioning"/></FulfillTask>

```

### 10. Create the UpdateClassification task

Create the Update Classification Task. The resource Classification is needed if one or more
[ Resource Classification Rule ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
are configured for the connector.

```

<UpdateClassificationTask Identifier="AD_Update_Classification" DisplayName_L1="AD - Update Users Classification" DisplayName_L2="AD - Mise � jour de la classification des comptes" >  <TaskEntityType EntityType="AD_Entry"/></UpdateClassificationTask>

```

For more information on Update Classification Task :
[ Update Classification Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

### 11. Create the SetInternalUserProfiles task

Create the Set Internal User Profiles Task. The Profile Assignment is needed if one ore more
[Profile Rule Context](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
are configured.

This Task is directly linked to a Fulfill parent. if the fulfillment has been completed with the
state warning or if it was not started or no processing has been performed, launching this task
becomes useless.

```

<SetInternalUserProfilesTask Identifier="All_SetAllInternalUserProfiles" DisplayName_L1="Overall - Profiles Update" DisplayName_L2="Global - Mise � jour des profils">  <TaskEntityType EntityType="AD_Entry"/>  <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>  <TaskDependsOnTask ParentTask="AD_Fulfill"/></SetInternalUserProfilesTask>

```

For more information on SetInternalUserProfiles Task configuration :
[ Set Internal User Profiles Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

### 12. Create the all-tasks job

Once the tasks created. You must create the job to launch all tasks.

```

<Job Identifier="Job_AD_Complete" DisplayName_L1="AD Job's (Complete mode)" DisplayName_L2="Job de l'AD (mode complet)" Agent="Local">  <ExportTask Identifier="AD_Export_Complete" Agent="Local" Connection="AD_Export_Delta" OpenIdClient="Job" DisplayName_L1="Export AD" DisplayName_L2="Export AD"/>  <PrepareSynchronizationTask Type="ActiveDirectory" DisplayName_L1="AD - Prepare Synchronization (complete Mode)" DisplayName_L2="AD - Pr�paration de la synchronisation (mode complet)" Connector="AD" SynchronizationMode="Complete" Agent="Local" OpenIdClient="Job">    <TaskDependsOnTask ParentTask="AD_Export_Complete"/>  </PrepareSynchronizationTask>  <SynchronizeTask Type="ActiveDirectory" Identifier="AD_Synchronization" DisplayName_L1="AD - Synchronization" DisplayName_L2="AD - Synchronisation" Connector="AD">    <TaskDependsOnTask ParentTask="AD_Export_Complete"/>  </SynchronizeTask>  <UpdateEntityPropertyExpressionsTask Identifier="All_ComputeAllProperties" DisplayName_L1="Overall - Computed Properties Refresh" DisplayName_L2="Global - Mise � jour des propri�t�s calcul�es">    <TaskEntityType Identifier="AD_Entry"/>  </UpdateEntityPropertyExpressionsTask>  <ComputeCorrelationKeysTask Identifier="All_CorrelationKeys" DisplayName_L1="All Correlation Keys" >	<TaskEntityType Identifier="AD_Entry"/>  </ComputeCorrelationKeysTask>  <ComputeRoleModelTask Identifier="Directory_ComputeRoleModel" DisplayName_L1="Directory - Provisioning Orders Generation" DisplayName_L2="R�f�rentiel - Pr�paration des ordres de provisioning">    <TaskEntityType EntityType="Directory_User"/>    <TaskEntityType EntityType="Directory_Guest"/>  </ComputeRoleModelTask>  <GenerateProvisioningOrdersTask Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning Orders Fetching" DisplayName_L2="AD - R�cup�ration des ordres de provisioning" Connector="AD"/>  <FulfillTask Identifier="AD_Fulfill" DisplayName_L1="AD - Automated Provisioning" DisplayName_L2="AD - Alimentation automatique" Connector="AD" OpenIdClient="Job" Connection="AD_Fulfillment" Agent="Local"  ContinueOnError="1">    <TaskDependsOnTask ParentTask="AD_Provisioning"/>  </FulfillTask>  <UpdateClassificationTask Identifier="AD_Update_Classification" DisplayName_L1="AD - Update Users Classification" DisplayName_L2="AD - Mise � jour de la classification des comptes" >    <TaskEntityType EntityType="AD_Entry"/>  </UpdateClassificationTask>  <SetInternalUserProfilesTask Identifier="All_SetAllInternalUserProfiles" DisplayName_L1="Overall - Profiles Update" DisplayName_L2="Global - Mise � jour des profils">    <TaskEntityType EntityType="AD_Entry"/>    <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>    <TaskDependsOnTask ParentTask="AD_Fulfill"/>  </SetInternalUserProfilesTask>  <SendRoleModelNotificationsTask DisplayName_L1="Send Notification" DisplayName_L2="Envoie des Notifications">    <TaskEntityType EntityType="AD_Entry"/>  </SendRoleModelNotificationsTask></Job>

```

The job can be scheduled with the `CrontabExpression` attribute

For more information on job configuration :
[ Job ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

# Set Up Incremental Synchronization

This guide shows how to build the job that will synchronize the appropriate connectors in
incremental mode.

### 1. Objective

Create a Synchronization job in incremental mode.

The synchronization Job can be created automatically by a scaffolding. It can create either a job
for each connector and for each agent (see :
[Create Connector Synchro Incremental](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md))
or a job for all connector for each agent (see :
[Create Agent Synchro Incremental](/docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md))

In the following example the Synchronization job for the Connector "AD" will be created.

```

<Connector Identifier="AD" DisplayName_L1="AD" Agent="Local" />

```

### 2. Create the Export task

If a pre-treatment is needed, you must create an
[ Export Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md). Otherwise
it is unnecessary. Choose the Export task corresponding to the connector.

All Export task have the ContinueOnError property. It is advisable to begin with the value of True
so that the task is not blocking for the Job.

Example :

```

<ExportTask Identifier="Export_AD_Delta" Agent="Local" Connection="AD_Export" OpenIdClient="Job" DisplayName_L1="AD - Extraction (delta)" DisplayName_L2="AD - Extraction (delta)" ContinueOnError="1"/>

```

### 3. Create the Prepare Synchronization task

Create the PrepareSynchronizationTask with the connector. Set `SynchronizationMode="Incremental"` ,
except for
[ Prepare Synchronization Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
which doesn't need this parameter and LDAP connector who need complete mode.

If the job contain Exports for the same connector add the a link between the Prepare Synchronization
and the Export to check the final state of exports.

Example :

```

<PrepareSynchronizationTask Identifier="PrepareSynchronization_AD_Delta" Type="ActiveDirectory" DisplayName_L1="AD - Data Collect (incremental mode)" DisplayName_L2="AD - Collecte de donn�es (mode incr�mental)" Connector="AD" SynchronizationMode="Incremental" Agent="Local" OpenIdClient="Job">    <TaskDependsOnTask ParentTask="Export_AD_Delta"/></PrepareSynchronizationTask>

```

For more information on PrepareSynchronization task configuration :
[ Prepare Synchronization Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

### 4. Create the Synchronization task

Create the SynchronizeTask corresponding to the Prepare Synchronization Task. If the Prepare
Synchronization Task is a
[ Prepare Synchronization Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md),
then choose the
[ Synchronize Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md),
else if it is Prepare Synchronization Active Directory Task choose Synchronization ADDir Sync, else
choose
[ Synchronize Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

In Incremental mode, you must set the attribute `DoNotDeleteChanges="true"`

For the Incremental mode add link between PrepareSynchronization and Synchronization task for the
same connector. If the job contain Exports for the same connector add the a link between the
Synchronization and the Export to check the final state of exports.

Example :

```

<SynchronizeTask Identifier="Synchronization_AD_Incremental" Type="ActiveDirectory" Identifier="AD_Synchronization" DisplayName_L1="AD - Synchronization" DisplayName_L2="AD - Synchronisation" Connector="AD">  <TaskDependsOnTask ParentTask="AD_Export_Complete"/>  <TaskDependsOnTask ParentTask="PrepareSynchronization_AD_Delta"/></SynchronizeTask>

```

The Synchronization Validation Task is not needed , since it is managed by the
[ Jobs ](/docs/identitymanager/6.2/administration/jobs-tasks/job-configuration.md).

For more information on Synchronization task configuration :
[ Synchronize Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

### 5. Create the SetRecentlyModifiedFlag task

Create the Set Recently Modified Flag task.

Launching this is required only if at least one of the Synchronization in the job has made a change
in the database.

```

<SetRecentlyModifiedFlagTask Identifier="MarkDirty" DisplayName_L1="Set Recently Modified Flag" DisplayName_L2="Mise � jour du dirty">  <TaskDependsOnTask ParentTask="Synchronization_AD_Incremental"/></SetRecentlyModifiedFlagTask>

```

For more information on SetRecentlyModifiedFlag Task :
[ Set Recently Modified Flag Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

### 6. Create the UpdateEntityPropertyExpressions task

Create the UpdateEntityPropertyExpressionsTask to compute expression properties of the given
entityTypes or all entitytypes. Set the attribute Dirty : `Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the
Task SetRecentlyModifiedFlag has been started.

Example :

```

<UpdateEntityPropertyExpressionsTask Identifier="All_ComputeAllPropertiesWithDirty" DisplayName_L1="Overall - Computed Properties Refresh (With dirty)" DisplayName_L2="Global - Mise � jour des propri�t�s calcul�es (avec dirty)" Dirty="true">  <TaskDependsOnTask ParentTask="MarkDirty"/>  <TaskEntityType Identifier="AD_Entry"/></UpdateEntityPropertyExpressionsTask>

```

For more information on UpdateEntityPropertyExpressions Task configuration :
[ Update Entity Property Expressions Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

### 7. Create the ComputeCorrelationKey task

Create the ComputeCorrelationKey Task to compute correlation keys of the given entityTypes or all
entityTypes. Set the attribute Dirty : `Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the
Task SetRecentlyModifiedFlag has been started.

Example :

```

<ComputeCorrelationKeysTask Identifier="All_CorrelationKeysWithDirty" DisplayName_L1="All Correlation Keys (With dirty)" Dirty="true">  <TaskEntityType Identifier="AD_Entry"/>  <TaskDependsOnTask ParentTask="MarkDirty"/></ComputeCorrelationKeysTask>

```

For more information about the Compute Role Model correlation keys task configuration:
[ Compute Correlation Keys Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

### 8. Create the ComputeRoleModel task

Create the ComputeRoleModely Task to create the provisioning order. Set the attribute Dirty :
`Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the
Task SetRecentlyModifiedFlag has been started.

Example :

```

<ComputeRoleModelTask Identifier="Directory_ComputeRoleModel_WithDirty" DisplayName_L1="Directory - Provisioning Orders Generation (with dirty)" DisplayName_L2="R�f�rentiel - Pr�paration des ordres de provisioning (avec dirty)" Dirty="true">  <TaskEntityType EntityType="Directory_User"/>  <TaskEntityType EntityType="Directory_Guest"/>  <TaskDependsOnTask ParentTask="MarkDirty"/></ComputeRoleModelTask>

```

The TaskEntityType elements correspond to the sourceEntityTypes in the
[Resource Type](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) which have
TargetEntityTypes that are part of the connector to provide.

For more information on Compute Role Model task configuration:
[ Compute Role Model Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

### 9. Create the GenerateProvisioningOrder task

Create the GenerateProvisioningOrder task. The GenerateProvisioningOrder task will recover all
resources whose provisioningState is at 1 to build a list of JSON files containing all provisioning
orders. The Connector is the same as the connector set in the PrepareSynchronization.

Example :

```

<GenerateProvisioningOrdersTask Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning Orders Fetching" DisplayName_L2="AD - R�cup�ration des ordres de provisioning" Connector="AD"/>

```

For more information on provisioning task configuration:
[Generate Provisioning Orders Task](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

### 10. Create the Fulfill task

Create the Fulfill task.

You must specify the right connection to fulfill the desired system.

All fulfillment task have the ContinueOnError property. It is advisable to begin with the value of
True so that the task is not blocking for the Job. The fulfill Tasks are directly depanding of
GenerateProvisioningOrdersTask. If this task has not create a new provisioning order. The
fulfillment must be not launch in the job.

```

<FulfillTask Identifier="AD_Fulfill" DisplayName_L1="AD - Automated Provisioning" DisplayName_L2="AD - Alimentation automatique" Connector="AD" OpenIdClient="Job" Connection="AD_Fulfillment" Agent="Local" ContinueOnError="1">  <TaskDependsOnTask ParentTask="AD_Provisioning"/></FulfillTask>

```

### 11. Create the UpdateClassification task

Create the Update Classification Task. The resource Classification is needed if one or more
[ Resource Classification Rule ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
are configured for the connector. Set the attribute Dirty : `Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the
Task SetRecentlyModifiedFlag has been started.

```

<UpdateClassificationTask Identifier="AD_Update_ClassificationWithDirty" DisplayName_L1="AD - Update Users Classification (With Dirty)" DisplayName_L2="AD - Mise � jour de la classification des comptes (avec Dirty)" Dirty="1">  <TaskEntityType EntityType="AD_Entry"/>  <TaskDependsOnTask ParentTask="MarkDirty"/></UpdateClassificationTask>

```

For more information on Update Classification Task :
[ Update Classification Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

### 12. Create the SetInternalUserProfiles task

Create the Set Internal User Profiles Task. The Profile Assignment is needed if one ore more
[Profile Rule Context](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)are
configured.

This Task is directly linked to a Fulfill parent. if the fulfillment has been completed with the
state warning or if it was not started or no processing has been performed, launching this task
becomes useless.

```

<SetInternalUserProfilesTask Identifier="All_SetAllInternalUserProfiles" DisplayName_L1="Overall - Profiles Update" DisplayName_L2="Global - Mise � jour des profils">  <TaskEntityType EntityType="AD_Entry"/>  <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>  <TaskDependsOnTask ParentTask="AD_Fulfill"/></SetInternalUserProfilesTask>

```

For more information on SetInternalUserProfiles Task configuration :
[ Set Internal User Profiles Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

### 13. Create the all-tasks job

Once the tasks created. You must create the job to launch all tasks.

```

<Job Identifier="Job_AD_Incremental" DisplayName_L1="AD Job's (Incremental mode)" DisplayName_L2="Job de l'AD (mode incremental)"
Agent="Local">  <ExportTask Identifier="Export_AD_Delta" Agent="Local" Connection="AD_Export" OpenIdClient="Job" DisplayName_L1="AD - Extraction (delta)" DisplayName_L2="AD - Extraction (delta)" ContinueOnError="1"/>  <SynchronizeTask Identifier="Synchronization_AD_Incremental" Type="ActiveDirectory" Identifier="AD_Synchronization" DisplayName_L1="AD - Synchronization" DisplayName_L2="AD - Synchronisation" Connector="AD">    <TaskDependsOnTask ParentTask="AD_Export_Complete"/>    <TaskDependsOnTask ParentTask="PrepareSynchronization_AD_Delta"/>  </SynchronizeTask>  <SetRecentlyModifiedFlagTask Identifier="MarkDirty" DisplayName_L1="Set Recently Modified Flag" DisplayName_L2="Mise � jour du dirty">    <TaskDependsOnTask ParentTask="Synchronization_AD_Incremental"/>  </SetRecentlyModifiedFlagTask>  <UpdateEntityPropertyExpressionsTask Identifier="All_ComputeAllPropertiesWithDirty" DisplayName_L1="Overall - Computed Properties Refresh (With dirty)" DisplayName_L2="Global - Mise � jour des propri�t�s calcul�es (avec dirty)" Dirty="true">    <TaskDependsOnTask ParentTask="MarkDirty"/>    <TaskEntityType Identifier="AD_Entry"/>  </UpdateEntityPropertyExpressionsTask>  <ComputeCorrelationKeysTask Identifier="All_CorrelationKeysWithDirty" DisplayName_L1="All Correlation Keys (With dirty)" Dirty="true">    <TaskEntityType Identifier="AD_Entry"/>    <TaskDependsOnTask ParentTask="MarkDirty"/>  </ComputeCorrelationKeysTask>  <ComputeRoleModelTask Identifier="Directory_ComputeRoleModel_WithDirty" DisplayName_L1="Directory - Provisioning Orders Generation (with dirty)" DisplayName_L2="R�f�rentiel - Pr�paration des ordres de provisioning (avec dirty)" Dirty="true">    <TaskEntityType EntityType="Directory_User"/>    <TaskEntityType EntityType="Directory_Guest"/>    <TaskDependsOnTask ParentTask="MarkDirty"/>  </ComputeRoleModelTask>  <GenerateProvisioningOrdersTask Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning Orders Fetching" DisplayName_L2="AD - R�cup�ration des ordres de provisioning" Connector="AD"/>  <FulfillTask Identifier="AD_Fulfill" DisplayName_L1="AD - Automated Provisioning" DisplayName_L2="AD - Alimentation automatique" Connector="AD" OpenIdClient="Job" Connection="AD_Fulfillment" Agent="Local" ContinueOnError="1">    <TaskDependsOnTask ParentTask="AD_Provisioning"/>  </FulfillTask>  <UpdateClassificationTask Identifier="AD_Update_ClassificationWithDirty" DisplayName_L1="AD - Update Users Classification (With Dirty)" DisplayName_L2="AD - Mise � jour de la classification des comptes (avec Dirty)" Dirty="1">    <TaskEntityType EntityType="AD_Entry"/>    <TaskDependsOnTask ParentTask="MarkDirty"/>  </UpdateClassificationTask>  <SetInternalUserProfilesTask Identifier="All_SetAllInternalUserProfiles" DisplayName_L1="Overall - Profiles Update" DisplayName_L2="Global - Mise � jour des profils">    <TaskEntityType EntityType="AD_Entry"/>    <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>    <TaskDependsOnTask ParentTask="AD_Fulfill"/>  </SetInternalUserProfilesTask></Job>

```

The job can be scheduled with the `CrontabExpression` attribute

For more information on job configuration :
[ Job ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)

# Troubleshoot Connector Jobs

This guide helps understand the behavior of synchronization and provisioning tasks in order to spot
and fix errors.

## Overview

A managed system is synchronized and provisioned to/from Identity Manager with the following task
sequence:

![Synchronization/Provisioning Schema](/img/product_docs/identitymanager/identitymanager/integration-guide/tasks-jobs/how-tos/troubleshoot-connector-jobs/troubleshoot_synchroprovschema.webp)

### Export data

Exporting means that the agent reads the system's data and takes it out to one or several external
files, as tables.

The output is stored in `Temp/ExportOutput`.

In order to spot what was exported or not for the next incremental export, cookie files are stored
in `Temp/ExportCookies`.

See the
[ Usercube-Export-Configuration ](/docs/identitymanager/6.2/reference/command-line-tools/deployment-tools.md)
topic for additional information.

### Prepare synchronization

Preparing the synchronization means that the agent reads the tables, output of the export step, and
produces one file for each association (also named multi-valued navigation property), where the data
is prepared for synchronization.

> For example, the data is sorted according to their primary keys, in order to optimize the
> comparison with the database.

The output is stored in `Work/Collect`, and sent to the server to queue in `Work/Synchronization`.

See the
[ Usercube-Export-Configuration ](/docs/identitymanager/6.2/reference/command-line-tools/deployment-tools.md)
topic for additional information on how to prepare the synchronization executable
`Usercube-Prepare-Synchronization`.

### Synchronize

Synchronizing means reading the data of the external file, output of the preparation step, and
taking it to Identity Manager.

This is done by the synchronization executable Identity Manager-Synchronize.

#### Synchronization: build the difference

The server compares the exported files, output of the preparation step, with the previous data of
the system, and with the data contained in the database. Based on this comparison, the changes are
stored in the database.

The output is stored in `UR_ResourceChanges`.

#### Synchronization: finalize

When at least one synchronization
[ Thresholds ](/docs/identitymanager/6.2/identity-management/synchronization/sync-thresholds.md) is exceeded, the change list
can be seen in the **Synchronization Changes** tab, accessible from the job progress screen.

When the synchronization thresholds are not exceeded, or they are bypassed, the potential
preparatory files are consumed and the changes are applied.

The server updates the values of the properties computed via expressions. A user's history can be
used to view the impact of this step on the properties.

### Apply the policy

Applying the policy means that the server prepares the correlation keys and computes the role model.

Preparing the correlation keys means that the server recomputes the keys that will later link
accounts to their owners. The output is stored in `UP_ResourceCorrelationKeys`.

This is done by the correlation key computation executable `Usercube-Compute-CorrelationKeys`.

Computing the role model means that the server applies all the rules in order to assign accounts and
entitlements to identities.

The assigned accounts and entitlements are stored in `UP_Assigned*`, and can be seen in users'
**View Permissions** tab.

This is done by the role model computation executable `Usercube-Compute-RoleModel`.

### Generate provisioning orders

Generating the provisioning orders means that the server builds JSON files to prepare the execution
of provisioning.

The output is stored in `Work/ProvisioningOrders`.

This is done by the order generation executable `Usercube-Generate-ProvisioningOrders`.

### Provision

Provisioning means that the agent asks the server to send the provisioning orders, in order to read
the orders and actually make modifications to the managed system.

Once consumed, the files are moved to the subfolder `Downloaded`.

This is done by the provisioning executables `Usercube-Fulfill-*`.

In order to test the provisioning step, there is no need relaunching the whole task sequence. You
can, for example, keep a provisioning order from the previous step, and adjusting it before
launching provisioning.

## Troubleshoot

Troubleshoot an error in a connector job by running each step individually until you see something
that you did not expect.

# Jobs

A job is a succession of tasks, to be launched and potentially scheduled, which orchestrate together
the executable files that perform IGA actions.

## Anatomy of a Job

Jobs are used to write sets of successive tasks, and schedule their execution.

See how to configure [ Job ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).

A job can contain tasks explicitly, or contain steps used to call existing tasks in order to use a
single task in several jobs.

## Execution

Jobs are executed by agents.

The agent initiates the job and executes the agent-side tasks. Hence, the agent must have access to
the relevant managed systems. The agent orders the execution of the server-side tasks, complying
with the one-way data flow principle.

A job can be triggered:

- Once manually, through the **Job Execution** screen;
- Once manually, using Usercube-Invoke-Job.exe;
- Periodically, with Identity Manager's internal scheduler `CronTabExpression`;
- Periodically, with an external Scheduler such as
  [Windows Task Scheduler](https://docs.microsoft.com/en-us/windows/win32/taskschd/task-scheduler-start-page).

## Monitoring

Any job execution is logged into the UJ_JobInstances table.

They can be monitored through the UI, via the **Job Execution** page.
