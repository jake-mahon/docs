---
sidebar_position: 245
title: Create Connector Synchro Complete
---

# Create Connector Synchro Complete

This scaffolding generates a synchronization job (in Complete mode) for the given connector.

The tasks created in the Scaffoldings are sorted by level. The levels are visible via the tools: Usercube-Get-JobSteps.exe

## Examples

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```

```
## Properties

| Property | Type | Description |
| --- | --- | --- |
| Connector required | String | Identifier of the connector involved in the job to be generated. |
| DisplayName\_L1 optional | String | Display name of the scaffolding in language 1 (up to 16). |
| JobIdentifier optional | String | For job scaffoldings, identifier of the job to be generated. If not defined, the job identifier is calculated. |

## Child Elements

* AddTask (optional) — Add a task before or after another in the job
* CronTabExpression (optional) — Schedule the job
* FormatPropertiesInResource (optional) — Converts string properties to their corresponding types in the 'Resource' section of the provisioning order
* FulfillInternalWorkflowsPath (optional) — Add the path of the json configuration for a connector with IsWorkflowProvisioning set to true
* LinkDependTask (optional) — Link a child Task with a parent to not launch the child if the parent has finish with state warning
* NoProvisioning (optional) — Avoid provisioning
* NoSynchronization (optional) — Avoid collect
* OpenIdIdentifier (required) — Add a OpenID to the job and the tasks

### AddTask

**NOTE:** The old algorithm is no longer supported, so manual task addition is no longer required. If an exceptional situation requres the creation of a task note that the CopyOccurence must be deleted from the code.

Example

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
ComputeRoleModelTask Dirty="1" DisplayName_L1="dfedf" Identifier="AddedTask">  
  
  
  
  
  
  

```
The property list for the AddTask is the following:

| Property | Type | Description |
| --- | --- | --- |
| Task required | String | Identifier of the task to add. |
| TaskToCompareWith required | String | The identifier of the task before or after which the new task will be inserted |
| After default value: false | Boolean | For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith. |
| Before default value: false | Boolean | For the Argument AddTask the property before define the place of the task to add with the TaskCompareWith. |

### CronTabExpression

| Property | Type | Description |
| --- | --- | --- |
| CronTab required | String | Represents the argument value. |
| CronTimeZone optional | CronTimeZone | For Argument AddTask, Occurence of the TaskToCompare after or before which the task will be added. |

### FulfillInternalWorkflowsPath

| Property | Type | Description |
| --- | --- | --- |
| ConnectorIdentifier required | String | Identifier of the connector involved in the following arguments: `NoConnectorSynchronization`; `NoConnectorProvisioning`; `NotUsed`; `FulfillInternalWorkflowsPath`; `PrincipalDataConnector`. |
| Path required | String | Represents the argument value. |

### LinkDependTask

| Property | Type | Description |
| --- | --- | --- |
| DependOn required | String | Identifier of parent Task. |
| Task required | String | Identifier of child Task. |
| ChildOccurence default value: 0 | Int32 | Search the occurrence x to link with the parent. |
| ParentOccurence default value: 0 | Int32 | Occurrence of the parentTask which the task will be linked |

### OpenIdIdentifier

| Property | Type | Description |
| --- | --- | --- |
| Identifier required | String | Identifier of the OpenId. |

## Generated XML

Our example generates the following configuration:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
    
    
      
    
    
      
    
    
      
      
      
    
    
      
      
      
    
    
      
      
    
    
      
      
    
    
      
      
    
    
      
      
      
    
    
    
      
      
      
    
    

```