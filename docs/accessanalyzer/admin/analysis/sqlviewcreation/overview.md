# SQLViewCreation Analysis Module

The SQLViewCreation analysis module provides the ability to create new views or tables that are used
in Access Analyzer actions and reports. These views or tables are re-created during job execution.

**CAUTION:** Consider the impact on storage and performance when choosing to create views versus
tables. Tables require more storage space in the database.

## Configuration

This analysis module provides the View and Table Creation Analysis Module wizard to assist in
configuring the module. Before the wizard, collect the desired data for manipulation.

The wizard contains the following pages:

- Welcome
- [SQLViewCreation: Input Scope](inputscope.md)
- [SQLViewCreation: Input Source](input.md)
- [SQLViewCreations: Join Columns](joincolumns.md)
- [SQLViewCreations: Columns](columns.md)
- [SQLViewCreation: Filter](filter.md)
- [SQLViewCreation: Time Window](timewindow.md)
- [SQLViewCreation: Result Constraints](resultconstraints.md)
- [SQLViewCreation: Result Type](result.md)
- [SQLViewCreation: Result Sample](resultsample.md)
- [SQLViewCreation: Export](export.md)
- [SQLViewCreation: Summary](summary.md)

The Welcome page provides an overview of the analysis module.

![View and Table Creation Analysis Module wizard Welcome page](../../../../../static/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

There are no configurable settings on the Welcome page. Click **Next** to begin configuring a custom
table or view using two formatted data sources, or use the Steps navigation pane to open another
page in the wizard.
