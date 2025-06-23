# Change Detection: Additional Fields

Use the Additional Fields page to choose any additional fields to include with the change analysis.
These fields do not detect change, but may provide additional information to help diagnose and
analyze the changes reported.

![Change Detection Data Analysis Module wizard Additional Fields page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/changedetection/additionalfields.webp)

Choose any additional fields to be collected with change analysis using the following options:

- Select the checkbox of any desired fields
- Check All – Select all fields in the table
- Uncheck All – Clear all fields in the table
- Hide system columns – Hide columns
- Checked – Order the list by selected items
- Column Name – Name of the field

# Change Detection: Fields

Use the Change Detection Fields page to select the columns on which to report changes.

![Change Detection Data Analysis Module wizard Fields page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/changedetection/fields.webp)

Choose which fields change detection analyzes using the following options:

- Select the checkbox next to any desired fields
- Check All – Select all fields in the table
- Uncheck All – Clear all fields in the table
- Hide system columns – Hide columns
- Checked – Order the list by selected items
- Column Name – Name of the field
- Combine multiple changes into a single change record – Select to combine multiple changes into a
  single change record

# Change Detection: Input

Use the Input Data Source page to choose a data source to analyze for changes.

![Change Detection Data Analysis Module wizard Input Data Source page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/unix/input.webp)

The configurable option is:

- Please select a data source – Select a data source table from the list

  **NOTE:** The selectable data sources change based on which option is selected on the Input
  Scope page.

# Change Detection: Input Scope

Use the Input Scope page to specify the input scope of the data source.

![Change Detection Data Analysis Module wizard Input Scope page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/sqlviewcreation/inputscope.webp)

Identify the scope of the data source from the following options:

- Tables from Current Job – Select tables from only the currently selected job
- All Enterprise Auditor Tables – Select from all Enterprise Auditor tables within the SQL Server
  database
- All tables in the database – Select all tables within the SQL Server database

**NOTE:** This selection affects the tables that are available for selection on the Input page.

# Change Detection: Options

Use the Options page to specify whether to save history, including a running tally of all changes
made within a certain time period, or only changes between the last two runs of the source set.

![Change Detection Data Analysis Module wizard Options page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/options.webp)

Configure the additional options using the following:

- Save change detection results for xx days – Modify the number of days that results for the Change
  Detection task are saved for
- Only save most recent change (per unique key) – Select the checkbox to only save changes between
  the last two runs of the source set

# Change Detection Analysis Module

Use the Change Detection analysis module to track changes within a specific Enterprise Auditor view
or table for use in reporting and notifications. This module tracks additional, changed, or missing
selected data items and compares result rows from previous collection activity with rows from the
most recent collection.

This module compares values collected for two different query instances. Therefore, as change
detection depends on the existence of a **JobRunTimeKey**, history must be enabled and data
collected at least twice to produce the desired results. Configure History settings under the job’s
**Settings** > **History** node. See the
[History](/docs/accessanalyzer/11.6/accessanalyzer/admin/settings/history.md) topic
for additional information.

## Configuration

The Change Detection Data Analysis Module wizard has the following pages:

- Welcome
- [Change Detection: Input Scope](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/change-detection.md)
- [Change Detection: Input](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/change-detection.md)
- [Change Detection: Unique Key](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/change-detection.md)
- [Change Detection: Fields](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/change-detection.md)
- [Change Detection: Additional Fields](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/change-detection.md)
- [Change Detection: Options](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/change-detection.md)
- [Change Detection: Result Sample](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/change-detection.md)
- [Change Detection: Summary](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/change-detection.md)

The Welcome page gives an overview of the action module. The navigation pane contains links to the
pages in the wizard.

![Change Detection Data Analysis Module wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

There are no configurable settings on the Welcome page. To proceed, click **Next** or use the Steps
navigation pane to open another page in the wizard.

# Change Detection: Result Sample

The Result Sample page generates a preview of the output based on the configurations selected on the
previous pages.

![Change Detection Data Analysis Module wizard Result Sample page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/sqlviewcreation/resultsample.webp)

Click **Show Preview** to generate a preview of the results, which may take several minutes to
populate.

# Change Detection: Summary

The Summary page summarizes the configuration of the action.

![Change Detection Data Analysis Module wizard Summary page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

Click **Finish** to save configuration changes. If no changes were made, click **Cancel** to close
the Change Detection Data Analysis Module wizard to ensure no accidental configurations are saved.

# Change Detection: Unique Key

Use the Unique Key page to select one or more columns that, when put together as a ROWKEY, uniquely
identify each row of data in the source table. Available fields vary based on data source selected
on the Input page. See the
[Change Detection: Input](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/change-detection.md) topic
for additional information.

![Change Detection Data Analysis Module wizard Unique Key page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/changedetection/uniquekey.webp)

Select one or more fields to form a unique key for the selected table and its columns.
