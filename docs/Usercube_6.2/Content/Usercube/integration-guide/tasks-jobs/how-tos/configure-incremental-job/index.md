---
sidebar_position: 1053
title: Configure an Incremental Job
---

# Configure an Incremental Job

This guide shows how to configure the relevant tasks to make a job incremental.

## Overview

When configured as such, Identity Manager is able to remember after synchronization which resources were modified, i.e. created, updated and/or deleted.

It allows future tasks to be executed only on modified resources, in order to minimize jobs' execution times and costs.

See an example of a full [Set Up Incremental Synchronization](../jobfast/index "Incremental") job.

## Configure a Job to Be Incremental

Configure a job to be incremental by proceeding as follows:

1. Configure the synchronization task ([Synchronize Task](../../../toolkit/xml-configuration/jobs/tasks/server/synchronizetask/index "SynchronizeTask")) with `DoNotDeleteChanges` set to `true`.

   This way, Identity Manager keeps the list of all changed resources.

   > For example, to synchronize incrementally the Active Directory:
   >
   > ```
>
   >   ...
   > 
   >
   > ```
2. Tag all changed resources by running [Set Recently Modified Flag Task](../../../toolkit/xml-configuration/jobs/tasks/server/setrecentlymodifiedflagtask/index "SetRecentlyModifiedFlagTask") after SynchronizeTask.

   > For example, following the synchronization task for the Active Directory:
   >
   > ```
>
   >   
   >
   > ```
3. Configure the next tasks with `Dirty` set to `true` to apply them only to resources flagged as "dirty", i.e. recently modified.

   > For example, to compute correlation keys incrementally:
   >
   > ```
>
   >       ...
   > 
   >
   > ```