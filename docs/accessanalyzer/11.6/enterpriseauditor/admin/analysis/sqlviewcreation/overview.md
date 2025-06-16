# SQLViewCreation Analysis Module

The SQLViewCreation analysis module provides the ability to create new views or tables that are used
in Enterprise Auditor actions and reports. These views or tables are re-created during job
execution.

**CAUTION:** Consider the impact on storage and performance when choosing to create views versus
tables. Tables require more storage space in the database.

## Configuration

This analysis module provides the View and Table Creation Analysis Module wizard to assist in
configuring the module. Before the wizard, collect the desired data for manipulation.

The wizard contains the following pages:

- Welcome
- [SQLViewCreation: Input Scope](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/inputscope.md)
- [SQLViewCreation: Input Source](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/input.md)
- [SQLViewCreations: Join Columns](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/joincolumns.md)
- [SQLViewCreations: Columns](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/columns.md)
- [SQLViewCreation: Filter](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/filter.md)
- [SQLViewCreation: Time Window](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/timewindow.md)
- [SQLViewCreation: Result Constraints](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/resultconstraints.md)
- [SQLViewCreation: Result Type](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/result.md)
- [SQLViewCreation: Result Sample](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/resultsample.md)
- [SQLViewCreation: Export](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/export.md)
- [SQLViewCreation: Summary](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/analysis/sqlviewcreation/summary.md)

The Welcome page provides an overview of the analysis module.

![View and Table Creation Analysis Module wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

There are no configurable settings on the Welcome page. Click **Next** to begin configuring a custom
table or view using two formatted data sources, or use the Steps navigation pane to open another
page in the wizard.
