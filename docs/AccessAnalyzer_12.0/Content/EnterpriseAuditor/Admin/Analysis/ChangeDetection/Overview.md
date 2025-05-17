---
sidebar_position: 5869
title: Change Detection Analysis Module
---

# Change Detection Analysis Module

Use the Change Detection analysis module to track changes within a specific Access Analyzer view or table for use in reporting and notifications. This module tracks additional, changed, or missing selected data items and compares result rows from previous collection activity with rows from the most recent collection.

This module compares values collected for two different query instances. Therefore, as change detection depends on the existence of a **JobRunTimeKey**, history must be enabled and data collected at least twice to produce the desired results. Configure History settings under the job’s **Settings** > **History** node. See the [History](../../Settings/History "History") topic for additional information.

## Configuration

The Change Detection Data Analysis Module wizard has the following pages:

* Welcome
* [Change Detection: Input Scope](InputScope "Change Detection: Input Scope")
* [Change Detection: Input](Input "Change Detection: Input")
* [Change Detection: Unique Key](UniqueKey "Change Detection: Unique Key")
* [Change Detection: Fields](Fields "Change Detection: Fields")
* [Change Detection: Additional Fields](AdditionalFields "Change Detection: Additional Fields")
* [Change Detection: Options](Options "Change Detection: Options")
* [Change Detection: Result Sample](ResultSample "Change Detection: Result Sample")
* [Change Detection: Summary](Summary "Change Detection: Summary")

The Welcome page gives an overview of the action module. The navigation pane contains links to the pages in the wizard.

![Change Detection Data Analysis Module wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Analysis/ChangeDetection/Welcome.png "Change Detection Data Analysis Module wizard Welcome page")

There are no configurable settings on the Welcome page. To proceed, click **Next** or use the Steps navigation pane to open another page in the wizard.