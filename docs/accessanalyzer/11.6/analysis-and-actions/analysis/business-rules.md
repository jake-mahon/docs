# Applies To Tab

Use the Applies To tab to specify the scope for application of the analysis rules. Rules are applied
to data collected from all hosts, from specific hosts, or from the specific host running the job
(local data). Data is filtered based on a specified time window.

![Edit Rules window Applies To tab](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/businessrules/appliesto.webp)

The Applies To tab provides the following options:

- Source and Time Window – Specify whether to exclude data from outside of the Enterprise Auditor
  console and apply a filter to the time window of the data

  - All Source Data – Select this option to run the action using all data
  - Source Data from this Console only – Select this option to run the action specifically using
    data from only this Enterprise Auditor console
  - Time Window for source table – Use the drop-down menu to specify a time window from the
    following options:

    - Most recent data – Use only the most recently collected data
    - Cumulative data for offline hosts – Use data collected from offline hosts
    - Most recent data filtering duplicate and offline hosts – Use most recent data excluding
      duplicate and offline hosts
    - Do not filter data – Use unfiltered data

- Hosts Filtering – Specify source hosts

  - Apply to All Hosts – Select this checkbox to use all hosts to query
  - Host List – Select any desired hosts to query. If **Apply to All Hosts** is selected, the list
    is unavailable.

# Logic Tab

Use the Logic tab to specify conditions and actions for the Business Rule.

![Edit Rules window Logic tab](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/businessrules/logic.webp)

The Logic tab contains the following sections and options:

- Rule Details – Create a title for the rule and select a source table:

  - Rule Name – The field defaults with the name on the Analysis Properties page and is manually
    editable
  - Table – Select a table from the drop-down menu containing the baseline values to evaluate

    - To view data from a selected table, click the ellipsis (**…**) to open the Sample Data
      Viewer window, or select a table within the viewer. See the
      [Sample Data Viewer Window](#sample-data-viewer-window) topic for additional information.

- Conditions – Apply conditions to the table

  - Click **Add Condition** to open the EditConditionsForm window and add a condition to the
    Conditions list. See the [EditConditionsForm Window](#editconditionsform-window) topic for
    additional information.
  - Exceptions textbox – Lists added conditions. By default, it says `Add Exception to Scorecard`
    but updates with any conditions selected.
  - To check the SQL statement executed, click the green checkmark SQL symbol. This opens the SQL
    Extract Preview window. See the
    [SQL Extract Preview Window](#sql-extract-preview-window) topic for additional information.

- Actions – Add exceptions to the scorecard action

  - Select **Edit Action** or double click **Add Exception To Scorecard** to open the Configure
    Scorecard Action window. See the
    [Configure Scorecard Action Window](#configure-scorecard-action-window) topic for additional
    information.

## Sample Data Viewer Window

Use the Sample Data Viewer window to examine data in a selected table.

![Sample Data Viewer Window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/businessrules/sampledataviewer.webp)

The Sample Data Viewer window provides the following options:

- Use the drop-down menu to select a table to view the table’s data. The field defaults with the
  table selected in the Logic tab if previously selected.
- Show First [Number] rows – Adjusts the presentation of the number of rows of the selected table.
  The default value is 50. It can be manually adjusted with values between 0 and all.

## EditConditionsForm Window

Use the EditConditionsForm to configure conditions to be applied to the table.

![EditConditionsForm Window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/businessrules/editconditionsform.webp)

The EditConditionsForm contains the following options:

- Column – Use the drop-down menu to select a column from the table selected in the Logic tab
- Operator – Use the dropdown to select an operator:

  - `<` – Search for items in the selected column with values less than a selected value
  - `>` – Search for items in the selected column with values greater than a selected value
  - `=` – Search for items in the selected column of equal value to the selected value
  - `!=` – Search for items in the selected column not equal to the selected value
  - `like` – Search for items in the selected column of similar or value to the selected value

- Value – Manually set a comparator value. The default is 0.

## SQL Extract Preview Window

The SQL Extract Preview window previews results of the conditions added to the table in the
Conditions section.

![SQL Extract Preview Window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/businessrules/sqlextractpreviewwindow.webp)

The SQL script requires the table have these columns: `HOST`, `SA_Host`, and `JobRunTimeKey`. If
there is a mismatch between table and SQL script, a SQL Syntax Check window describes any detected
issue.

![SQL Syntax Check window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/businessrules/sqlsyntaxcheck.webp)

For example, this SQL Syntax Check window is reporting an error of missing information of an object
or column.

## Configure Scorecard Action Window

Use this window to add exceptions to the scorecard.

![Configure Scorecard Action Window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/businessrules/configurescorecardaction.webp)

The Configure Scorecard Options window provides the following options:

- Scorecard Action Description – Use this section to label the scorecard action

  - Action Name – Enter a name for the action
  - Description – Enter a description for the action

- Action Classification – This section allows you to group scorecard action results for reporting
  purposes

  - Category – Enter a desired category name in the field or use the dropdown to select from
    previously titled categories
  - Index – Enter a desired index value for the scorecard action

- Action Score – This section allows you to rank the action’s importance relative to other scorecard
  actions

  - Score – Enter a desired score value for the scorecard action
  - Severity – Enter a desired severity value or use the dropdown to select from previously
    selected values

- Knowledge – This section provides information that may assist with resolving this issue

  - Knowledge – Enter information to assist issue resolution, for example a website URL

- Captured Values – This section allows you to select up to five optional properties whose values
  will be captured and stored with the scorecard entry. For each property selected, a name column
  and value column appear in the scorecard.

  - Property [1-5] – Select a property from the selected table using the drop-down menu to capture
    and store its values with the scorecard

# Business Rules Analysis Module

The Business Rules analysis module measures and evaluates a configured value from an object (the
baseline value) and compares it against a stated value (the business rule) to find an exception or
deviation. Any deviations or differences found the execution of a business rule appear in a
resultant table called a scorecard.

Create one or more jobs to collect the data to be analyzed. Then configure one or business rules to
analyze the data. Examine the scoreboard to determine how an object is performing with regard to its
original baseline expectations.

## Scorecard

Business Rules analysis module results are displayed in a table called a scorecard. The scorecard
determines which of the rules are applied, and in what order. A scorecard table contains only
exceptions and deviations from the business rule criteria when compared to a baseline value. The
table does not include matches to the criteria. All scorecard table names are suffixed with
`_SCORECARD` for easy identification.

## Edit Rules Window

To access and modify the Business Rules analysis module, navigate to the Job's **Configure** >
**Analysis** node and click **Configure Analysis** to open the Edit Rules window. The Edit Rules
window has the following tabs:

- [Logic Tab](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/business-rules.md)
- [Variables Tab](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/business-rules.md)
- [Applies To Tab](/docs/accessanalyzer/11.6/analysis-and-actions/analysis/business-rules.md)

# Variables Tab

Use the Variables tab to specify values to substitute in the rule logic at run time.

![Edit Rules window Variables tab](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/businessrules/variables.webp)

This tab contains the following options:

- Sort by Variable or Value in descending order by clicking the preferred column header. To sort by
  ascending Value, click the column header again. The default is by ascending Value.
- To delete a variable, select it and click **Delete**

  ![JobVariables TSV file](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/analysis/businessrules/jobvariablestsv.webp)

- Click **View all variables for this job** to open the `JobVariables.TSV` file containing any
  variables for the current job
