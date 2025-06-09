# Summary Folders

The EPE Summary and LDAP Summary folders under Investigate in the navigation pane are pre-defined reports that allow you to view consolidated recent event activity for EPE or LDAP which spans all EPE or LDAP policies. The reports include default grouping(s) that best show the consolidated data.

![EPE Summary and LDAP Summary folders](/img/product_docs/threatprevention/threatprevention/admin/investigate/summaryfolders.png)

The investigate summary folders have the following reports:

- EPE Summary
  - Last 10,000 Failed passwords by Policy and Rule
  - Number of Failed passwords by Policy Name
  - Number of Failed passwords by Rule Name
  - Number of Failed passwords by Policy and Rule
- LDAP Summary
  - Top 10,000 Most frequently run queries by User Accounts
  - Top 10,000 Most frequently run queries by Computer Accounts
  - Top 10,000 Most frequently run queries by IP
  - Most frequently run queries by Account for TOP 5 User Accounts
  - Most frequently run queries by Account for TOP 5 Computer Accounts
  - Most frequently run queries by IP for TOP 5 IPs
  - Run Time by Account
  - Run Time by IP
  - Run Time by Domain Controller
  - Number of Searches by Domain Controller

Click a report to view it.

![Summary Report](/img/product_docs/threatprevention/threatprevention/admin/investigate/summaryreport.png)

By default, the data grid is blank. Select __Refresh__ to display results on the data grid.

The grid view displays columns associated with the scope of the report. If there is no data available, the grid does not populate but the columns display on the grid. The following buttons are available below the report name:

- Refresh – Repopulates the data grid with the current information for the selected report
- Configure – Opens the Parameters window. Set the optional time range as well as the type of policies.
- Export – Export the selected report to an Excel, PDF, HTML, RTF, or CSV output. The Save As window displays when an export option is selected. Provide a name for the report and save to a specified location.

Parameter Window

![Parameter Window](/img/product_docs/threatprevention/threatprevention/admin/investigate/parameter.png)

The Parameters window displays the following options. Select the desired options and click __OK__ to display data in the report accordingly.

- Range From/To –If left unchecked, the report displays all policy data. When enabled, set a data range for the data to be displayed in the report using the To and From dropdown calendars. By default, the calendar displays today's date. Click __OK__ to set the date and time.

  For faster navigation on the calendar, select the month to display all twelve months to choose from. Once showing the months, select the year to display a range of years to choose from.
- Policies – Choose __All__ or __Enabled Only__ to display all policies or enabled only policies in the report
- Events – Select __All__, __Blocking__ and/or __Monitoring__ event(s) to display in the report
