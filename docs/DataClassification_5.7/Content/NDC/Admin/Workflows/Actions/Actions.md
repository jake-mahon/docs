---
sidebar_position: 3030
title: Workflow Actions
---

Filter: 

* All Files

Submit Search

# Workflow Actions

Actions are automated operation to be performed with the documents when rule conditions are triggered. There are two types of workflow actions:

* Generic actions available for any type of document. These are:

  * [Email Alert](EmailAlert)
  * Migration
  * [Apply Additional Classification](../AdvancedWindow/Classification)
* Source-specific actions

Workflow actions are executed at the final stage of the document processing.

## Available Actions by Source

This table lists workflow actions available for the certain content source types.

| Content source type | Available actions |
| --- | --- |
| Exchange | [Email Alert](EmailAlert)  [Migrate Document](MigrateDocument)  [Apply Additional Classification](../AdvancedWindow/Classification)  [Advanced Actions for Exchange](../AdvancedWindow/Exchange)\*: delete email, move email |
| File System | [Email Alert](EmailAlert)  [Migrate Document](MigrateDocument)  [Apply Additional Classification](../AdvancedWindow/Classification)  [Advanced Actions for File System](../AdvancedWindow/Files)\*: update permissions, add/remove MIP label |
| Google Drive | [Email Alert](EmailAlert)  [Migrate Document](MigrateDocument)  [Apply Additional Classification](../AdvancedWindow/Classification) |
| SharePoint | [Email Alert](EmailAlert)  [Migrate Document](MigrateDocument)  [Apply Additional Classification](../AdvancedWindow/Classification)  [Advanced Actions for SharePoint](../AdvancedWindow/SharePoint)\*: send classification value, filtered targeted meta update, write/remove O365 label, copy/move document |
| SQL and other databases | [Email Alert](EmailAlert)  [Migrate Document](MigrateDocument)  [Apply Additional Classification](../AdvancedWindow/Classification) |

\* — these actions can be only configured using the Advanced UI dialog window.