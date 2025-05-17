---
sidebar_position: 1047
title: Configure Jobs
---

# Configure Jobs

This guide shows how to define the permissions for creating and using jobs thanks to scaffoldings.

There are two important jobs in Identity Manager. The [Set up Complete Synchronization](../jobdaily/index) and the [Set Up Incremental Synchronization](../jobfast/index).
This two Job Synchronize and fill are using to Synchronize and fill Connectors.

## Job Scaffoldings

There are six scaffoldings in Identity Manager to automatically create jobs in the configuration:

* A job for all connectors on an Agent ([Create Agent Synchro Complete](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/createagentsynchrocomplete/index)/[Create Agent Synchro Incremental](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/createagentsynchroincremental/index) mode).
* A job for a specific connector ([Create Connector Synchro Complete](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/createconnectorsynchrocomplete/index)/[Create Agent Synchro Incremental](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/createagentsynchroincremental/index) mode).
* [Create Initialization Job](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/createinitializationjob/index "Create Initialization Job")
* [Create Access Certification Job](../../../toolkit/xml-configuration/configuration/scaffoldings/jobs/createaccesscertificationjob/index "Create Access Certification Job")