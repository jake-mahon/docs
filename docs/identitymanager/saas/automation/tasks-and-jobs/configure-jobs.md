# Configure Jobs

This guide shows how to define the permissions for creating and using jobs thanks to scaffoldings.

There are two important jobs in Identity Manager. The Complete Job and the Incremental
Synchronization. This two Job Synchronize and fill are using to Synchronize and fill Connectors. See
the [Set up Complete Synchronization](/docs/identitymanager/saas/automation/tasks-and-jobs/job-daily.md) and
[ Set Up Incremental Synchronization ](/docs/identitymanager/saas/automation/tasks-and-jobs/job-fast.md) topics for additional information.

## Job Scaffoldings

There are six scaffoldings in Identity Manager to automatically create jobs in the configuration:

- A job for all connectors on an Agent (Complete/Incremental mode); See the
  [Create Agent Synchro Complete](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
  and
  [Create Agent Synchro Incremental](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
  topics for additional information.
- A job for a specific connector (Complete/Incremental mode).
- [Create Initialization Job](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
- [Create Access Certification Job](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
