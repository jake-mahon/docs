---
sidebar_position: 399
title: Build Efficient Jobs
---

# Build Efficient Jobs

This topic shows how to build efficient jobs by minimizing their costs.

**NOTE:** The rules below must be followed when creating a new job, otherwise the frequent launch of this scheduled job will trigger errors in a SaaS environment.

### Prerequisites

In order to successfully launch a frequent job (defined as a job called more than once an hour) the following requirements need to be met:

* Synchronize / Export Task in incremental mode
* The UpdateEntityPropertyExpressions /ComputeCorrelationKeys/ComputeRoleModel tasks do have the SetRecentlyModifiedFlag set to true
* The ComputeCorrelationKeys/UpdateEntityPropertyExpressions tasks are computed on a subset of Entity Types (not all Entity Types at once)
* UpdateEntityPropertyExpressions/ComputeCorrelationKeys/ComputeRole tasks are not duplicated
* SetInternalUserProfiles/ActivityInstanceActor tasks are not configured to launch

## Rule 1: Use Scaffoldings

Identity Manager provides scaffoldings to simplify XML configuration by generating complex XML fragments. See the [Scaffoldings](../../../toolkit/xml-configuration/configuration/scaffoldings/index "Scaffoldings") topic for additional information.

Most jobs are included in job scaffoldings, thus configured in the most optimal way. So start by using scaffoldings to build jobs. See the [Jobs](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/index "Jobs") topic for additional information.

For example, the creation from scratch of a job to perform a complete synchronization for a connector will be tedious. Instead, use Identity Manager's scaffolding, like in the following example concerning the Microsoft Entra ID (formerly Microsoft Azure AD) connector. Instead of a few dozens of lines, write only the following:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
                   
```
See the[Create Connector Synchro Complete](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchrocomplete/index "Create Connector Synchro Complete")for additional information.

## Rule 2: Compute Only What's Necessary

Execute the tasks on the right entity types

Many tasks can be executed either on all entity types, or on a given list of entity types.

Make sure to configure the tasks so that they are executed only on the relevant entity types, not all of them by default.

For example, instead of using AllEntityType set to true, write the following:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
  
        
  
  
                    
```
Launch incremental tasks rather than complete

When a task is supposed to be executed on changes only, then there is no use executing the task in complete mode.

Make the relevant tasks incremental by flagging the resources that were recently modified. See the [Configure an Incremental Job](../configure-incremental-job/index "Configure an Incremental Job") topic for additional information.

For example, instead of computing the role model as if it had never been computed before, apply only the changes by writing the following:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
    
  
                    
```
Launch only the relevant tasks according to the logical chain

Identity Manager's tasks are all linked together by a logical chain that implies that some tasks are supposed to be executed after some others.

Make sure to understand the tasks' logical chain to launch only the relevant tasks. See the [Troubleshoot Connector Jobs](../troubleshoot-connector-jobs/index "Troubleshoot Connector Jobs") topic for additional information.

For example, there is no use computing expressions or correlations if there was beforehand no change in the database. Thus, there should not be UpdateEntityPropertyExpressionsTask or ComputeCorrelationKeysTask without first SynchronizeTask or FulfillTask.

## Rule 3: Wait for Recurring Tasks

Inside a recurring job, there is no need including some tasks twice in order to have the whole cycle, because the next execution will complete what has been started.

For example, Identity Manager's feedback loop uses the tasks for synchronization, computation of the role model, provisioning, then once more synchronization and computation of the role model.

Instead of including any task twice, rather write a job with each task once, schedule a periodic execution of the job, and wait for the next execution to get the whole cycle. For example for the AD:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
                                ...  
                ...  
               ...  
            ...  
                ...  
  
```
```
  
                   
```
```
  
        
  
  
                    
```
```
    
  
                    
```
```
                                ...  
                ...  
               ...  
            ...  
                ...  
  
```