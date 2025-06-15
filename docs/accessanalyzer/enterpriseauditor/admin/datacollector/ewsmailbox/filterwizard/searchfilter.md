# EWSMailbox FW: Search Filter

Use the Search Filter page to choose a filter template for the search.

![Filter Wizard Search Filter page](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/ewsmailbox/searchfilter.webp)

Customize folder search conditions using the following options:

- Select template – Select any of the following template options:

  - Blank
  - All non-archived items over 90 days ago
  - All calendar items that contains attachment that occurred over 90 days ago
- Edit Conditions – Click an underlined value, if present, in the Edit Conditions box to modify any of the template conditions

  __NOTE:__ The values present depends on the selections made in the Select conditions box.

  - Click either __IPM.Note__ or __IPM.Appointment__, to open the MessageClasses Window with IPM.Note or IPM.Appointment class populated, respectively. See the [MessageClasses Window ](#messageclasses-window) topic for additional information.
  - Click __over 90 Day ago__ to open the Date Range Selection Window. See the [Date Range Selection Window](#date-range-selection-window) topic for additional information.
  - Click __has attachment(s)__ to convert the condition to __has no attachment(s)__ and vice versa

## MessageClasses Window

Use the MessageClasses window to alter criteria related to message class. The Message Classes window opens if __Ipm.Note__ or __Ipm.Appointment__ is clicked in the Edit Conditions box on the Search Filter page.

![MessagesClasses window](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/ewsmailbox/filterwizard/messageclassessearchfilter.webp)

Determine MessageClass-related criteria using the following options:

- To add a class, click __Add__
- Enter the desired Message Class in the corresponding textbox
- Click __Exact Match__ to reveal a dropdown menu of other search criteria under Matching Strategy and select the preferred option:

  - Exact Match
  - Starts With
  - Contains
- To remove a message class, select it and click __Remove__
- Click __Import CSV__ to open a file explorer window to select an appropriate CSV file containing search terms

## Date Range Selection Window

Use the Date Range Selection window to select a time period or range for the search. The Date Range Selection window opens if __over 90 Day ago__ is clicked in the Edit Conditions box on the Search Filter page.

![Date Range Selection window](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/ewsmailbox/filterwizard/daterangeselectionsearchfilter.webp)

Determine the time period or range of the search using the following options:

- Over [Number] [Time Period] ago
- Last [Number] [Time Period]
- Before [Date]
- After [Date]
- Between [Date] and [Date]
