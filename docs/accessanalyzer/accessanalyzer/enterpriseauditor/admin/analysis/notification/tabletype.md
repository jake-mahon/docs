# Notification: Table Type

Use the Source Table Selection page to choose the type of table to use as the data source for notifications.

![Notification Data Analysis Module wizard Source Table Selection page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/analysis/notification/tabletype.png)

The following options are available:

- Change Detection Table – Sends notifications when changes are detected in the data. When selected, the option of __Show only tables for this job__ becomes the default selection on the Select Table page. This option targets only change detection tables within the current job. Possible tables (if any) display on the Select Table page. See the [Notification: Select Table](/docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/analysis/notification/selecttable.md) topic for additional information.

  __NOTE:__ Change Detection Table also locks selections to tables on the Select Table page that are selected through Other. To select tables outside of __Show only tables for this job__, select Other on the Table Type page, then select either __Show All Tables__ or __Show All SA Tables__, then click back to return to the Table Type page. Now selecting Change Detection Table and proceeding defaults the selection on the Select Table page to whichever was previously selected through Other.
- Other – Sends a notification based on a value within a selected table. Selecting this option enables the following options on the Select Table page, each of which lists a specific set of tables available for selection:

  - Show All Tables
  - Show All SA Tables
  - Show only tables for this job
