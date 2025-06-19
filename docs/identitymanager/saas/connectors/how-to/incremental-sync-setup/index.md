# Set Up Incremental Synchronization

How to implement an incremental synchronization
[ Job ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/jobs/job/index.md) for a given
[ Connector ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md) via XML, to upload
the related system's resources to Identity Manager.

See an example on [For Microsoft Entra ID](/docs/identitymanager/saas/connectors/how-to/incremental-sync-setup/azure-ad.md) (formerly Microsoft Azure AD).

Netwrix Identity Manager (formerly Usercube) strongly recommends configuring as much as possible via
the UI instead of XML files. See how to
[ Synchronize Data ](/docs/identitymanager/saas/synchronization/index.md) via the UI.

## Prerequisites

First read how to [Create a Connector](/docs/identitymanager/saas/connectors/how-to/create-connectors/index.md).

## Build the Incremental Synchronization Job

Identity Manager provides a fully-written standardized job to perform incremental synchronization
through the UI. See here:

See how to launch incremental
[ Synchronize Data ](/docs/identitymanager/saas/synchronization/index.md)via the UI.

Any IGA action is configured through [ Job ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/jobs/job/index.md).

Synchronization jobs contain tasks that are to be executed on agent side.

### Components

Any synchronization job should include:

1. export;
2. synchronization preparation;
3. synchronization.

The export is configured and performed by the
[ Export Task ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/exporttask/index.md), the
synchronization preparation by the
[ Prepare Synchronization Task ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/preparesynchronizationtask/index.md)
and the synchronization by the
[ Synchronize Task ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md).

See the [ Upward Data Synchronization ](/docs/identitymanager/saas/synchronization/upward-data-sync.md) topic
for additional information.

Identity Manager provides a scaffolding that generates the configuration for these steps, named
[Create Connector Synchro Incremental](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md).

This guide is about incremental synchronization, but complete synchronization can be configured with
the
[Create Connector Synchro Complete](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
scaffolding.

### Permissions for the agent

In order to launch a job via the
[ Usercube-Invoke-Job ](/docs/identitymanager/saas/automation/executables/invoke-job.md) tool, the agent must
use a profile with the right permissions for each task.

Permissions within Identity Manager are configured through
[Access Control Rule](/docs/identitymanager/saas/configuration/xml-configuration/access-control.md).

> For example:
>
>                         ```
>
>                             Conf/Profile AgentJob.xml
>
> <Profile Identifier="AgentSynchro" DisplayName_L1="Agent Synchro" />
>
> ```
>
> ```

Netwrix Identity Manager (formerly Usercube) recommends the creation of a profile for
synchronization jobs, and another for provisioning jobs, in order to comply with the principle of
least privilege.

In order to run a synchronization job, the agent requires the permissions to:

- view the tasks via `/Jobs/Task/Query`;
- access progress reports via `/Jobs/JobInstance/Query`, `/Jobs/JobInstance/Update`,
  `/Jobs/TaskInstance/Query` and `/Jobs/TaskInstance/Update`;
- prepare the synchronization and synchronize via `/Connectors/Connector/Query` and
  `/Connectors/SynchronizeSession`.

Identity Manager provides scaffoldings that generate the configuration for granting these
permissions:
[ SynchronizationAccessControlRules ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
and
[ Job View Access Control Rules ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md).

> The following example permits the `AgentSynchro` profile to run any synchronization job:
>
>                         ```
>
>                             Conf/Profile AgentSynchro.xml
>
> <SynchronizationAccessControlRules Profile="AgentSynchro"><JobViewAccessControlRules Profile="AgentSynchro">
>
> ```
>
> ```

### Agent's authentication to the server

Every request from agent to server within the execution of a job needs to be authenticated with an
[ OpenIdClient ](/docs/identitymanager/saas/configuration/xml-configuration/access-control.md) Connect
ClientId/Secret pair.

So first, the configuration must contain a `ClientId/Secret` pair.

Usable `ClientId/Secret` pairs are configured through an
[ OpenIdClient ](/docs/identitymanager/saas/configuration/xml-configuration/access-control.md).

> The following example uses a secret hashed
> by[ Usercube-New-OpenIDSecret ](/docs/identitymanager/saas/automation/executables/new-openid-secret.md):
>
>                         ```
>
>                             Conf/OpenIdClients.xml
>
> <OpenIdClient Identifier="Job" HashedSecret="K7gNU3sdo+Op8wNhqoVWhr5v6s1xYv72ol/pe/Unols=" DisplayName_L1="ClientId for Jobs" Profile="Administrator" />
>
> ```
>
> ```

Then, the agent's profile must be linked to one of the `ClientId/Secret` pairs.

Agents' settings are configured in their
[appsettings.agent](/docs/identitymanager/saas/configuration/network/agent-settings/appsettings.md).json
file.

> The following example sets the `Job/secret` pair to be used by tasks and jobs:
>
>                         ```
>
>                             appsettings.agent.json
>
> { ... "OpenId":{ "OpenIdClients": { "Job": "secret" }, "DefaultOpenIdClient": "Job" } }
>
> ```
>
> ```

### Permissions for users

In order to launch the job, a user must have the right permissions.

Permissions within Identity Manager are configured through
[Access Control Rule](/docs/identitymanager/saas/configuration/xml-configuration/access-control.md).

In order to launch a synchronization job, a user requires the appropriate permission:
`/Jobs/RunJob/Launch`.

Identity Manager provides a
[ Job Execution Access Control Rules ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
that generates the configuration for granting this permission.

> For example:
>
>                         ```
>
>                             Conf/Profile AgentSynchro.xml
>
> <JobExecutionAccessControlRules Profile="AgentSynchro">
>
> ```
>
> ```

## Schedule the Job

Scheduling the job execution can rely either on Identity Manager's scheduler or on an external
scheduler.

### Using scheduler

Identity Manager's scheduler is configured through the
[ Job ](/docs/identitymanager/saas/identitymanager/integration-guide/toolkit/xml-configuration/jobs/job/index.md)'s `CronTabExpression` property.

[See Crontab documentationfor more details ](https://crontab.guru/every-15-minutes).

### Using an external scheduler

An external scheduler relies on using an external mechanism to schedule
the[ Usercube-Invoke-Job ](/docs/identitymanager/saas/automation/executables/invoke-job.md).exe.

## Validate the Job

Validate the job's execution by proceeding as follows:

1. Deploy the XML configuration to the database, by using the
   [ Deploy Configuration Task ](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md).
2. In the UI, access the **Job Execution** page from the dashboard's **Administration** section.
3. Find the job named with the string specified in the XML configuration in the job's `DisplayName`
   property, and launch it.
4. Once the job is completed, the system's objects should be synchronized to the database's
   `UR_Resources` table.
