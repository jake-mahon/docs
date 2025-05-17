---
sidebar_position: 1048
title: Set up Complete Synchronization
---

# Set up Complete Synchronization

This guide shows how to build the job that will synchronize the appropriate connectors in complete mode.

### 1. Objective

Create a Synchronization Job in complete mode.
This job is used to check for and fix differences in the resources data after the incremental synchronizations.

The synchronization Job can be created automatically by a scaffolding.
It can create either a job for each connector and for each agent (see : [Create Connector Synchro Complete](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchrocomplete/index "Create Connector Synchro Complete")) or a job for all connectors for each agent (see : [Create Agent Synchro Complete](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/createagentsynchrocomplete/index "Create Agent Synchro Complete"))

In the following example the Synchronization job for the Connector "AD" will be created.

```


```
### 2. Create the Export task

If a pre-treatment is needed, you must create an [Export Task](../../../toolkit/xml-configuration/jobs/tasks/agent/exporttask/index "ExportTask"). Otherwise it is unnecessary.
Choose the Export task corresponding to the connector.
If the Export uses the incremental mode, set IgnoreCookieFile to true.

All Export task have the ContinueOnError property.
It is advisable to begin with the value of True so that the task is not blocking for the Job.

Example :

```


```
### 3. Create the Prepare Synchronization task

Create the Prepare Synchronization Task with the connector. Set `SynchronizationMode="Complete"` , except for [Prepare Synchronization Task](../../../toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index "PrepareSynchronizationTask") which doesn't need this parameter. If it is a Synchronization Changes, or ActiveDirectory, you must precise it with the `Type` attribute.

If the job contain Exports for the same connector add the a link between the PrepareSynchronization and the Export to check the final state of exports.

Example :

```
  

```
For more information on PrepareSynchronization task configuration : [Prepare Synchronization Task](../../../toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index "PrepareSynchronizationTask").

### 4. Create the Synchronization task

Create the SynchronizeTask with the same `Type` attribute as the PrepareSynchronizationTask.
For the complete mode the parameter DoNotDeleteChanges must not be present in the task configuration.

If the job contain Exports for the same connector add the a link between the Synchronization and the Export to check the final state of exports.

Example :

```
  

```
The Synchronization Validation Task is not needed , since it is managed by the [Jobs](../../jobs/index).

For more information on Synchronization task configuration : [Synchronize Task](../../../toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index "SynchronizeTask")

For more details on the Synchronization job configuration : [Set up Complete Synchronization](#) Job Configuration

### 5. Create the UpdateEntityPropertyExpressions task

Create the UpdateEntityPropertyExpressionsTask to compute expression properties of the given entityTypes or all entityTypes.

Example :

```
    

```
For more information on UpdateEntityPropertyExpressions Task configuration : [UpdateEntityPropertyExpressionsTask](../../../toolkit/xml-configuration/jobs/tasks/server/updateentitypropertyexpressionstask/index)

### 6. Create the ComputeCorrelationKey task

Create the ComputeCorrelationKey Task to compute correlation keys of the given entityTypes or all entityTypes.

Example :

```
	

```
For more information about the ComputeCorrelationKey task configuration: [Compute Correlation Keys Task](../../../toolkit/xml-configuration/jobs/tasks/server/computecorrelationkeystask/index)

### 7. Create the ComputeRoleModel task

Create the ComputeRoleModel Task to create the provisioning order.

Example :

```
    

```
The TaskEntityType elements correspond to the sourceEntityTypes in the [Resource Type](../../../toolkit/xml-configuration/provisioning/resourcetype/index "Resource Type") which have TargetEntityTypes that are part of the connector to provide.

For more information on Compute Role Model task configuration: [Compute Role Model Task](../../../toolkit/xml-configuration/jobs/tasks/server/computerolemodeltask/index)

### 8. Create the GenerateProvisioningOrder task

Create the GenerateProvisioningOrder task. The GenerateProvisioningOrder task will recover all resources whose provisioningState is at 1 to build a list of JSON files containing all provisioning orders. The Connector is the same as the connector set in the PrepareSynchronization.
The ForceProvisioning parameter must not be set to true. It's the job state machine who launch this mode if necessary.

Example :

```


```
For more information on GenerateProvisioningOrder task configuration: [Generate Provisioning Orders Task](../../../toolkit/xml-configuration/jobs/tasks/server/generateprovisioningorderstask/index).

### 9. Create the Fulfill task

Create the Fulfill task.

You must specify the right connection to fulfill the desired system.

All fulfillment task have the ContinueOnError property.
It is advisable to begin with the value of True so that the task is not blocking for the Job.
The fulfill Tasks are directly depanding of GenerateProvisioningOrdersTask. If this task has not create a new provisioning order. The fulfillment must be not launch in the job.

```
  

```
### 10. Create the UpdateClassification task

Create the Update Classification Task. The resource Classification is needed if one or more [Resource Classification Rule](../../../toolkit/xml-configuration/provisioning/resourceclassificationrule/index "ResourceClassificationRule") are configured for the connector.

```
  

```
For more information on Update Classification Task : [Update Classification Task](../../../toolkit/xml-configuration/jobs/tasks/server/updateclassificationtask/index "UpdateClassificationTask")

### 11. Create the SetInternalUserProfiles task

Create the Set Internal User Profiles Task. The Profile Assignment is needed if one ore more [Profile Rule Context](../../../toolkit/xml-configuration/access-control/profilerulecontext/index "ProfileRuleContext") are configured.

This Task is directly linked to a Fulfill parent. if the fulfillment has been completed with the state warning or if it was not started or no processing has been performed, launching this task becomes useless.

```
      

```
For more information on SetInternalUserProfiles Task configuration : [Set Internal User Profiles Task](../../../toolkit/xml-configuration/jobs/tasks/server/setinternaluserprofilestask/index "SetInternalUserProfilesTask")

### 12. Create the all-tasks job

Once the tasks created. You must create the job to launch all tasks.

```
                            	                                                        

```
The job can be scheduled with the `CrontabExpression` attribute

For more information on job configuration : [Job](../../../toolkit/xml-configuration/jobs/job/index "Job")