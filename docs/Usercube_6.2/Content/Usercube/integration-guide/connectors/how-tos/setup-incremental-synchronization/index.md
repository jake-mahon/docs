---
sidebar_position: 1168
title: Set Up Incremental Synchronization
---

# Set Up Incremental Synchronization

How to implement an incremental synchronization [Job](../../../toolkit/xml-configuration/jobs/job/index "Job") for a given [Connector](../../../toolkit/xml-configuration/connectors/connector/index "Connector") via XML, to upload the related system's resources to Identity Manager.

See an example on [For Microsoft Entra ID](azuread/index "For Microsoft Entra ID") (formerly Microsoft Azure AD).

Netwrix Identity Manager (formerly Usercube) strongly recommends configuring as much as possible via the UI instead of XML files. See how to [Synchronize Data](../../../../user-guide/set-up/synchronization/index "Synchronize Data")via the UI.

## Prerequisites

First read how to [Create a Connector](../create-connector/index "Create a Connector").

## Build the Incremental Synchronization Job

Identity Manager provides a fully-written standardized job to perform incremental synchronization through the UI. See here:

See how to launch incremental [Synchronize Data](../../../../user-guide/set-up/synchronization/index "Synchronize Data")via the UI.

:::tip
Any IGA action is configured through
Job
.
:::

Synchronization jobs contain tasks that are to be executed on agent side.

### Components

Any synchronization job should include:

1. export;
2. synchronization preparation;
3. synchronization.

:::tip
The export is configured and performed by the
Export Task
, the synchronization preparation by the
Prepare Synchronization Task
and the synchronization by the
Synchronize Task
.
:::

See the [Upward Data Synchronization](../../../synchronization/upward-data-sync/index "Upward Data Synchronization") topic for additional information.

Identity Manager provides a scaffolding that generates the configuration for these steps, named [Create Connector Synchro Incremental](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchroincremental/index "Create Connector Synchro Incremental").

This guide is about incremental synchronization, but complete synchronization can be configured with the [Create Connector Synchro Complete](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchrocomplete/index "Create Connector Synchro Complete") scaffolding.

### Permissions for the agent

In order to launch a job via the [Usercube-Invoke-Job](../../../executables/references/invoke-job/index "Identity Manager-Invoke-Job") tool, the agent must use a profile with the right permissions for each task.

:::tip
Permissions within Identity Manager are configured through Access Control Rule.
:::

> For example:
>
> ```
>
>                         
>                             Conf/Profile AgentJob.xml
>
> 
>
>                     
> ```
Netwrix Identity Manager (formerly Usercube) recommends the creation of a profile for synchronization jobs, and another for provisioning jobs, in order to comply with the principle of least privilege.

In order to run a synchronization job, the agent requires the permissions to:

* view the tasks via `/Jobs/Task/Query`;
* access progress reports via `/Jobs/JobInstance/Query`, `/Jobs/JobInstance/Update`, `/Jobs/TaskInstance/Query` and `/Jobs/TaskInstance/Update`;
* prepare the synchronization and synchronize via `/Connectors/Connector/Query` and `/Connectors/SynchronizeSession`.

Identity Manager provides scaffoldings that generate the configuration for granting these permissions: [Synchronization Access Control Rules](../../../toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/jobs/synchronizationaccesscontrolrules/index "SynchronizationAccessControlRules") and [Job View Access Control Rules](../../../toolkit/xml-configuration/configuration/scaffoldings/templates/jobviewaccesscontrolrules/index "JobViewAccessControlRules").

> The following example permits the `AgentSynchro` profile to run any synchronization job:
>
> ```
>
>                         
>                             Conf/Profile AgentSynchro.xml
>
> 
>
>                     
> ```
### Agent's authentication to the server

Every request from agent to server within the execution of a job needs to be authenticated with an [OpenIdClient](../../../toolkit/xml-configuration/access-control/openidclient/index "OpenIdClient") Connect ClientId/Secret pair.

So first, the configuration must contain a `ClientId/Secret` pair.

:::tip
Usable ClientId/Secret pairs are configured through an
OpenIdClient
.
:::

> The following example uses a secret hashed by[Usercube-New-OpenIDSecret](../../../executables/references/new-openidsecret/index "Identity Manager-New-OpenIDSecret"):
>
> ```
>
>                         
>                             Conf/OpenIdClients.xml
>
> 
>
>                     
> ```
Then, the agent's profile must be linked to one of the `ClientId/Secret` pairs.

:::tip
Agents' settings are configured in their appsettings.agent.json file.
:::

> The following example sets the `Job/secret` pair to be used by tasks and jobs:
>
> ```
>
>                         
>                             appsettings.agent.json
>  {
>     ...
>     "OpenId":{
>         "OpenIdClients": {
>             "Job": "secret"
>          },
>          "DefaultOpenIdClient": "Job"
>     }
>  }
>
>                     
> ```
### Permissions for users

In order to launch the job, a user must have the right permissions.

:::tip
Permissions within Identity Manager are configured through Access Control Rule.
:::

In order to launch a synchronization job, a user requires the appropriate permission: `/Jobs/RunJob/Launch`.

Identity Manager provides a [Job Execution Access Control Rules](../../../toolkit/xml-configuration/configuration/scaffoldings/templates/jobexecutionaccesscontrolrules/index "JobExecutionAccessControlRules")that generates the configuration for granting this permission.

> For example:
>
> ```
>
>                         
>                             Conf/Profile AgentSynchro.xml
>
> 
>
>                     
> ```
## Schedule the Job

Scheduling the job execution can rely either on Identity Manager's scheduler or on an external scheduler.

### Using scheduler

:::tip
Identity Manager's scheduler is configured through the
Job
's CronTabExpression property.
:::

[See Crontab documentationfor more details](https://crontab.guru/every-15-minutes "Crontab documentation") .

### Using an external scheduler

An external scheduler relies on using an external mechanism to schedule the[Usercube-Invoke-Job](../../../executables/references/invoke-job/index "Identity Manager-Invoke-Job").exe.

## Validate the Job

Validate the job's execution by proceeding as follows:

1. Deploy the XML configuration to the database, by using the[Deploy Configuration Task](../../../toolkit/xml-configuration/jobs/tasks/server/deployconfigurationtask/index "DeployConfigurationTask").
2. In the UI, access the **Job Execution** page from the dashboard's **Administration** section.
3. Find the job named with the string specified in the XML configuration in the job's `DisplayName` property, and launch it.
4. Once the job is completed, the system's objects should be synchronized to the database's `UR_Resources` table.