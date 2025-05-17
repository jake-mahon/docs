---
sidebar_position: 133
title: Invoke Aspects Task
---

# Invoke Aspects Task

Call specific api in Identity Manager.

## Properties

| Property | Details |
| --- | --- |
| Agent required | **Type**  String  **Description** Identifier of the agent on which the job will be launched.  **Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| DisplayName\_L1 required | **Type**  String  **Description** Display name of the task in language 1 (up to 16). |
| OpenIdClient required | **Type**  String  **Description** Connection client for the task. |
| Identifier optional | **Type**  String  **Description** Unique identifier of the task. |
| OutputPath optional | **Type**  String  **Description** Path to save file. *Alternative definition*: If *TaskType* is: - ProvisioningPolicyTask: Path to save the LDIF file, - CollectorTask: Path of the working directory, - CollectorChangesTask: Path of the working directory, - CollectorADDirSyncTask: Path of the working directory, - ProvisionerDownloadTask: Path of the destination directory, |