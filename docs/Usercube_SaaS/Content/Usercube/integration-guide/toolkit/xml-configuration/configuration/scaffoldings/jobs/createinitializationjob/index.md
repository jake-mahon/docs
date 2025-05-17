---
sidebar_position: 244
title: Create Initialization Job
---

# Create Initialization Job

Creates the Initialization Job for the given agent.

## Examples

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```

```
## Properties

| Property | Type | Description |
| --- | --- | --- |
| Agent optional | String | For job scaffoldings, identifier of the agent on which the job to be generated will be launched. |
| DisplayName\_L1 optional | String | Display name of the scaffolding in language 1 (up to 16). |
| JobIdentifier optional | String | For job scaffoldings, identifier of the job to be generated. If not defined, the job identifier is calculated. |
| OldAlgorithm optional | Boolean | Internal use. |

## Child Elements

The list of child elements includes the following:

* AddTask (optional) — Add a task before or after another in the job
* Configuration (optional) — Add the path of the configuration folder if a configuration task is in the job
* FormatPropertiesInResource (optional) — Converts string properties to their corresponding types in the 'Resource' section of the provisioning order
* NoConnectorProvisioning (optional) — Avoid provisioning for a connector
* NoConnectorSynchronization (optional) — Avoid collect for a connector
* NotUsed (optional) — Avoid collect and provisioning for a connector
* OpenIdIdentifier (optional) — Add a OpenID to the job and the tasks
* PrincipalDataConnector (optional) — Specifies the connector that contains the data for the fulfillment of external systems.

### AddTask

| Property | Type | Description |
| --- | --- | --- |
| Task required | String | Identifier of the task to add. |
| TaskToCompareWith required | String | The identifier of the task before or after which the new task will be inserted |
| After default value: false | Boolean | For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith. |
| Before default value: false | Boolean | For the Argument AddTask the property before define the place of the task to add with the TaskCompareWith. |
| CopyOccurence default value: 0 | Int32 | For Argument AddTask, Specify the Occurence to copy and add the Task in a specify Job. |
| Occurence default value: 0 | Int32 | Occurence of the TaskToCompare after or before which the task will be added |

### Configuration

| Property | Type | Description |
| --- | --- | --- |
| Path required | String | Represents the argument value. |

### NoConnectorProvisioning

| Property | Type | Description |
| --- | --- | --- |
| ConnectorIdentifier required | String | Identifier of the connector involved in the following arguments: `NoConnectorSynchronization`; `NoConnectorProvisioning`; `NotUsed`; `FulfillInternalWorkflowsPath`; `PrincipalDataConnector`. |

### NoConnectorSynchronization

| Property | Type | Description |
| --- | --- | --- |
| ConnectorIdentifier required | String | Identifier of the connector involved in the following arguments: `NoConnectorSynchronization`; `NoConnectorProvisioning`; `NotUsed`; `FulfillInternalWorkflowsPath`; `PrincipalDataConnector`. |

### NotUsed

| Property | Type | Description |
| --- | --- | --- |
| ConnectorIdentifier required | String | Identifier of the connector involved in the following arguments: `NoConnectorSynchronization`; `NoConnectorProvisioning`; `NotUsed`; `FulfillInternalWorkflowsPath`; `PrincipalDataConnector`. |

### OpenIdIdentifier

| Property | Type | Description |
| --- | --- | --- |
| Identifier required | String | Identifier of the OpenId |

### PrincipalDataConnector

| Property | Type | Description |
| --- | --- | --- |
| ConnectorIdentifier required | String | Identifier of the connector involved in the following arguments: `NoConnectorSynchronization`; `NoConnectorProvisioning`; `NotUsed`; `FulfillInternalWorkflowsPath`; `PrincipalDataConnector`. |

## Generated XML

Our example generates the following configuration:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
      
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    
    
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    
    
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    
    
    
    
    
    
    
      
      
      
      
      
      
      
      
      
    
    
      
      
    
    
      
      
    
    
    
    
    
  
  

```