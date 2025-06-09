# Host Discovery Queries

The Host Discovery Queries Pane contains a list of previously-configured queries.

![Host Discovery Queries Pane](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/queries.png)

The list of previously configured queries is provided in a table format with the following columns:

- Name – Displays the name assigned to the query during creation
- Query Source – Identifies where the query searches for hosts
- Query State – Displays the query’s current status (active or idle)
- Last count – Identifies the number of hosts found from the last scan
- Last Queried – Displays the date and time stamp for the last running of the query
- Connection Profile – Identifies the Connection Profile assigned to the query for access to the Query Source
- ID – GUID of the query task
- SANode – Name of the Access Analyzer Console server
- Snapshot mode – Identifies the type of discovery query:

  - Cumulative – Grows the host list by appending newly discovered hosts with each query execution
  - Snapshot – Only shows host found during the most recent query execution

  __NOTE:__ The Snapshot mode is configured on the Options page of the Host Discovery Wizard.

## View Hidden Columns

Follow the steps to view the hidden columns in the table:

__Step 1 –__ Right-click a header in the table, which opens a context menu.

![Field Chooser option on context menu](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/queriesfieldchooser.png)

__Step 2 –__ Select __Field Chooser__, which opens the Customization window.

![Customization window](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/queriescustomizationwindow.png)

__Step 3 –__ Select the __Columns__ tab.

![Drag hidden colum into table](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/queriesaddhiddencolumn.png)

__Step 4 –__ Drag and drop the desired column between any header of the table.

![Host Discovery Queries table with column added](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/querieshiddencolumnadded.png)

The header is now present in the table.
