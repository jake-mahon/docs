# EWSPublicFolder FW: Folder Conditions

The Folder Conditions page is where folder-related filter criteria can be applied to the search.

![Filter Wizard Folder Conditions page](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/ewsmailbox/filterwizard/folderconditions.png)

Customize folder search conditions using the following options:

- Select conditions – To add it to the search, select any of the following conditions:

  - with specific folder type
  - with search terms in the folder name
- Edit Conditions – Click an underlined value, if present, in the Edit Conditions box to modify any of the template conditions

  __NOTE:__ The values present depends on the selections made in the Select conditions box.

  - Click __specific__ in the Edit conditions box to open the Folder Type Window. See the [Folder Type Window](#folder-type-window)topic for additional information
  - Click __search terms__ to open the Search Terms Window. See the [Search Terms Window](#search-terms-window) topic for additional information

## Folder Type Window

Use the Folder Type window to determine folder types to search for. The Folder Type window opens if __specific__ is selected in the Edit Conditions box on the Folder Conditions page.

![Folder Type window](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/ewsmailbox/filterwizard/foldertypewindow.png)

Select the checkbox next to any folder type to include it in the search filter.

## Search Terms Window

Use the Search Terms window to determine terms for the search. The Search Terms window opens if __search terms__ is selected in the Edit Conditions box.

![Search Terms window](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/ewsmailbox/filterwizard/searchtermswindow.png)

Determine terms for the search using the following options:

- Type the desired term into the upper text box and click __Add__ to add the term to the lower text box, which adds the term to the search
- Select a term in the lower text box, and click __Remove__ to remove the term from the search
- Click __Clear__ to clear all terms from the lower box
- Select the desired qualifier option:

  - Contains ALL of the following search terms (And) – Search only returns results containing all of the search terms
  - Contains ANY of the following search terms (Or) – Search returns results containing any one or more of the search terms
- Click __Import CSV__ to open a file explorer window to select an appropriate CSV file containing search terms
