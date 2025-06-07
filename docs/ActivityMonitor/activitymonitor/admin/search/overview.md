# Search Feature

The search feature consolidates and compartmentalizes search results based on events, time, objects, users, hosts, etc. Search results populate based on which query filters are chosen. Results may then be sorted, filtered, and/or exported into a CSV file or JSON file, depending on the type data.

![Search Tab](/static/img/product_docs/dataclassification/ndc/admin/taxonomies/searchtab.png)

__NOTE:__ Search results are pulled from the File output of the monitored host or domain.

To open the search feature, click the magnifying glass icon and select from the following options:

- File – Search for monitored file activity on Windows servers and NAS devices. See the File Search Query topic for additional information.
- Active Directory – Search for monitored domain activity. See the Active Directory Search Query topic for additional information.
- Azure AD / Entra ID – Search for monitored tenant activity in Microsoft Entra ID (formerly Azure AD). See the Microsoft Entra ID Search Query topic for additional information.
- SharePoint – Search for monitored SharePoint activity. See the SharePoint Search Query topic for additional information.
- SharePoint Online – Search for monitored SharePoint Online activity. See the SharePoint Online Search Query topic for additional information.
- Exchange Online – Search for monitored Exchange Online activity. See the Exchange Online Search Query topic for additional information.
- SQL Server – Search for monitored SQL Server activity. See the SQL Server Search Query topic for additional information.
- Linux – Search for monitored file activity on Linux servers. See the Linux Search Query topic for additional information.

Queries that may be useful to an organization include the following:

- Who accessed a particular folder/file on X day or during Y date range?
- Who renamed a particular folder/file on X day or during Y date range?
- Who deleted a particular folder/file on X day or during Y date range?
- Who created a particular folder/file?
- What did user X do on day Y?
- What did user X do between days Y and Z?
- Administrator activity details?

Follow the steps to use the search feature.

__Step 1 –__ Click the magnifying glass icon and select the source type.

__Step 2 –__ Set the desired filters and click __Search__.

__Step 3 –__ Filter and Sort the results in the table as desired.

__Step 4 –__ Export the results table if desired.

## Filter

The drop-down menu for a column header in the search results data grid provides the option to filter the search results further.

![Operations Filter Dropdown Menu](/static/img/product_docs/activitymonitor/activitymonitor/admin/search/operationssdropdownfiltermenu.png)

Choose between checking/unchecking the desired field values from the list of available values and typing in the search textbox. The Clear filter option removes all filters from the selected column. A filter icon appears on the header where filters have been applied. Multiple columns can be filtered in the search results data grid.

__NOTE:__ The columns that can be filtered will vary depending on what results are.

## Sort

Clicking on any column header in the search results data grid sorts the results alphanumerically for that column, and an arrow shows next to the column name indicating the sort to be ascending or descending order.

![Sort Options](/static/img/product_docs/activitymonitor/activitymonitor/admin/search/sort.png)

The drop-down menu on the column header has options to Sort A to Z or Sort Z to A for the selected column. Sorting can only occur for one column at a time.

__NOTE:__ The columns that can be sorted will vary depending on what results are.

## Export

The search results data grid can be exported to a CSV/JSON file.

![Export Button](/static/img/product_docs/activitymonitor/activitymonitor/admin/search/exportbutton.png)

Once the search results are configured as desired, click the Export button located at the top left corner of the window. Set the name and location of the CSV/JSON file.
