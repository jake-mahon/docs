---
sidebar_position: 402
title: Set Up Incremental Synchronization
---

# Set Up Incremental Synchronization

This guide shows how to build the job that will synchronize the appropriate connectors in incremental mode.

### 1. Objective

Create a Synchronization job in incremental mode.

The synchronization Job can be created automatically by a scaffolding.
It can create either a job for each connector and for each agent (see : [Create Connector Synchro Incremental](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchroincremental/index "Create Connector Synchro Incremental")) or a job for all connector for each agent (see : [Create Agent Synchro Incremental](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/createagentsynchroincremental/index "Create Agent Synchro Incremental"))

In the following example the Synchronization job for the Connector "AD" will be created.

```


```
### 2. Create the Export task

If a pre-treatment is needed, you must create an [Export Task](../../../toolkit/xml-configuration/jobs/tasks/agent/exporttask/index "ExportTask"). Otherwise it is unnecessary.
Choose the Export task corresponding to the connector.

All Export task have the ContinueOnError property.
It is advisable to begin with the value of True so that the task is not blocking for the Job.

Example :

```


```
### 3. Create the Prepare Synchronization task

Create the PrepareSynchronizationTask with the connector. Set `SynchronizationMode="Incremental"` , except for [Prepare Synchronization Task](../../../toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index "PrepareSynchronizationTask") which doesn't need this parameter and LDAP connector who need complete mode.

If the job contain Exports for the same connector add the a link between the Prepare Synchronization and the Export to check the final state of exports.

Example :

```
    

```
For more information on PrepareSynchronization task configuration : [Prepare Synchronization Task](../../../toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index "PrepareSynchronizationTask")

### 4. Create the Synchronization task

Create the SynchronizeTask corresponding to the Prepare Synchronization Task.
If the Prepare Synchronization Task is a [Prepare Synchronization Task](../../../toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index "PrepareSynchronizationTask"), then choose the [Synchronize Task](../../../toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index "SynchronizeTask"), else if it is Prepare Synchronization Active Directory Task choose Synchronization ADDir Sync, else choose [Synchronize Task](../../../toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index "SynchronizeTask").

In Incremental mode, you must set the attribute `DoNotDeleteChanges="true"`

For the Incremental mode add link between PrepareSynchronization and Synchronization task for the same connector.
If the job contain Exports for the same connector add the a link between the Synchronization and the Export to check the final state of exports.

Example :

```
    

```
The Synchronization Validation Task is not needed , since it is managed by the [Jobs](../../jobs/index).

For more information on Synchronization task configuration : [Synchronize Task](../../../toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index "SynchronizeTask")

### 5. Create the SetRecentlyModifiedFlag task

Create the Set Recently Modified Flag task.

Launching this is required only if at least one of the Synchronization in the job has made a change in the database.

```
  

```
For more information on SetRecentlyModifiedFlag Task : [Set Recently Modified Flag Task](../../../toolkit/xml-configuration/jobs/tasks/server/setrecentlymodifiedflagtask/index "SetRecentlyModifiedFlagTask")

### 6. Create the UpdateEntityPropertyExpressions task

Create the UpdateEntityPropertyExpressionsTask to compute expression properties of the given entityTypes or all entitytypes.
Set the attribute Dirty : `Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the Task SetRecentlyModifiedFlag has been started.

Example :

```
    

```
For more information on UpdateEntityPropertyExpressions Task configuration : [Update Entity Property Expressions Task](../../../toolkit/xml-configuration/jobs/tasks/server/updateentitypropertyexpressionstask/index "UpdateEntityPropertyExpressionsTask")

### 7. Create the ComputeCorrelationKey task

Create the ComputeCorrelationKey Task to compute correlation keys of the given entityTypes or all entityTypes.
Set the attribute Dirty : `Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the Task SetRecentlyModifiedFlag has been started.

Example :

```
    

```
For more information about the Compute Role Model correlation keys task configuration: [Compute Correlation Keys Task](../../../toolkit/xml-configuration/jobs/tasks/server/computecorrelationkeystask/index "ComputeCorrelationKeysTask")

### 8. Create the ComputeRoleModel task

Create the ComputeRoleModely Task to create the provisioning order.
Set the attribute Dirty : `Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the Task SetRecentlyModifiedFlag has been started.

Example :

```
      

```
The TaskEntityType elements correspond to the sourceEntityTypes in the [Resource Type](../../../toolkit/xml-configuration/provisioning/resourcetype/index "Resource Type") which have TargetEntityTypes that are part of the connector to provide.

For more information on Compute Role Model task configuration: [Compute Role Model Task](../../../toolkit/xml-configuration/jobs/tasks/server/computerolemodeltask/index "ComputeRoleModelTask")

### 9. Create the GenerateProvisioningOrder task

Create the GenerateProvisioningOrder task. The GenerateProvisioningOrder task will recover all resources whose provisioningState is at 1 to build a list of JSON files containing all provisioning orders. The Connector is the same as the connector set in the PrepareSynchronization.

Example :

```


```
For more information on provisioning task configuration: [Generate Provisioning Orders Task](../../../toolkit/xml-configuration/jobs/tasks/server/generateprovisioningorderstask/index "Generate Provisioning Orders Task").

### 10. Create the Fulfill task

Create the Fulfill task.

You must specify the right connection to fulfill the desired system.

All fulfillment task have the ContinueOnError property.
It is advisable to begin with the value of True so that the task is not blocking for the Job.
The fulfill Tasks are directly depanding of GenerateProvisioningOrdersTask. If this task has not create a new provisioning order. The fulfillment must be not launch in the job.

```
  

```
### 11. Create the UpdateClassification task

Create the Update Classification Task. The resource Classification is needed if one or more [Resource Classification Rule](../../../toolkit/xml-configuration/provisioning/resourceclassificationrule/index "Resource Classification Rule") are configured for the connector.
Set the attribute Dirty : `Dirty="true"`.

Since dirty mode is enabled, a dependency is only needed to run the expression computation if the Task SetRecentlyModifiedFlag has been started.

```
    

```
For more information on Update Classification Task : [Update Classification Task](../../../toolkit/xml-configuration/jobs/tasks/server/updateclassificationtask/index "UpdateClassificationTask")

### 12. Create the SetInternalUserProfiles task

Create the Set Internal User Profiles Task. The Profile Assignment is needed if one ore more [Profile Rule Context](../../../toolkit/xml-configuration/access-control/profilerulecontext/index "ProfileRuleContext")are configured.

This Task is directly linked to a Fulfill parent. if the fulfillment has been completed with the state warning or if it was not started or no processing has been performed, launching this task becomes useless.

```
      

```
For more information on SetInternalUserProfiles Task configuration : [Set Internal User Profiles Task](../../../toolkit/xml-configuration/jobs/tasks/server/setinternaluserprofilestask/index "SetInternalUserProfilesTask")

### 13. Create the all-tasks job

Once the tasks created. You must create the job to launch all tasks.

```
                                                                                                    

```
The job can be scheduled with the `CrontabExpression` attribute

For more information on job configuration : [Job](../../../toolkit/xml-configuration/jobs/job/index "Job")