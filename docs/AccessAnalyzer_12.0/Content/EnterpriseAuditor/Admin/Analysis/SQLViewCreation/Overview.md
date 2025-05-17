---
sidebar_position: 5857
title: SQLViewCreation Analysis Module
---

# SQLViewCreation Analysis Module

The SQLViewCreation analysis module provides the ability to create new views or tables that are used in Access Analyzer actions and reports. These views or tables are re-created during job execution.

**CAUTION:** Consider the impact on storage and performance when choosing to create views versus tables. Tables require more storage space in the database.

## Configuration

This analysis module provides the View and Table Creation Analysis Module wizard to assist in configuring the module. Before the wizard, collect the desired data for manipulation.

The wizard contains the following pages:

* Welcome
* [SQLViewCreation: Input Scope](InputScope "SQLViewCreation: Input Scope")
* [SQLViewCreation: Input Source](Input "SQLViewCreation: Input Source")
* [SQLViewCreations: Join Columns](JoinColumns "SQLViewCreations: Join Columns")
* [SQLViewCreations: Columns](Columns "SQLViewCreations: Columns")
* [SQLViewCreation: Filter](Filter "SQLViewCreation: Filter")
* [SQLViewCreation: Time Window](TimeWindow "SQLViewCreation: Time Window")
* [SQLViewCreation: Result Constraints](ResultConstraints "SQLViewCreation: Result Constraints")
* [SQLViewCreation: Result Type](Result "SQLViewCreation: Result Type")
* [SQLViewCreation: Result Sample](ResultSample "SQLViewCreation: Result Sample")
* [SQLViewCreation: Export](Export "SQLViewCreation: Export")
* [SQLViewCreation: Summary](Summary "SQLViewCreation: Summary")

The Welcome page provides an overview of the analysis module.

![View and Table Creation Analysis Module wizard Welcome page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Analysis/SQLViewCreation/Welcome.png "View and Table Creation Analysis Module wizard Welcome page")

There are no configurable settings on the Welcome page. Click **Next** to begin configuring a custom table or view using two formatted data sources, or use the Steps navigation pane to open another page in the wizard.