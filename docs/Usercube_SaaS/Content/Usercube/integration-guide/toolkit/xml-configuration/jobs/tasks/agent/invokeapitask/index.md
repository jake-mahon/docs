---
sidebar_position: 137
title: Invoke Api Task
---

# Invoke Api Task

Tool to launch any Identity Manager API.

## Examples

```


```
## Properties

| Property | Details |
| --- | --- |
| Agent required | **Type**  String  **Description** Identifier of the agent on which the job will be launched.  **Warning:** all jobs containing the task must be launched on the same agent or on the server. |
| ApiUrl required | **Type**  String  **Description** The Identity Manager Api relative url. *Alternative definition*: If *TaskType* is: - SqlCmdTask: Connection string to the Database |
| DisplayName\_L1 required | **Type**  String  **Description** Display name of the task in language 1 (up to 16). |
| HttpCommand required | **Type**  HttpCommand  **Description** Defines the ApiCommand (*Get*, *Put*, *Post*, or *Delete*) |
| OpenIdClient required | **Type**  String  **Description** Connection client for the task. |
| Body optional | **Type**  String  **Description** Path of the SQL file |
| Identifier optional | **Type**  String  **Description** Unique identifier of the task. |