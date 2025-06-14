# Mailbox: Folder Conditions

Use the Folder Conditions page to customize folder search filter conditions. It is a wizard page for the __No, the query results do not contain a mailbox identification__ column option on the Folder Identification page.

![New Mailbox Action Wizard Folder Conditions page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/filterwizard/folderconditions.png)

Customize folder search conditions using the following options:

- Select conditions – Select the checkbox next to any of the following filter conditions to apply them to the search and add them to the Edit conditions box. Folder Conditions include:

  - With specific folder type
  - With search terms in the folder name
  - With specific folder(s) to include/exclude
- Edit conditions – Any selected conditions populate here. To modify filter conditions, click the underlined portion of the condition, which opens a corresponding window.

## Folder Type Window

Use the Folder Type window to select which folder types to run the action against. The Folder Type window opens if __specific__ in __with specific folder type__ is selected in the Edit Conditions box. .

![Folder Type Window](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/filterwizard/foldertypewindow.png)

Select the checkbox next to any desired folder type to include it in the search criteria, including:

- Calendar
- Contact
- Journal
- Mail
- Notes
- Task
- Reminder
- RSS Feed

## Search Terms Window

Use the Search Terms window to select terms contained in folder names to run the action against.The Search Terms window opens if __search terms__ is selected in the Edit Conditions box.

![Search Terms Window](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/ewsmailbox/filterwizard/searchtermswindow.png)

Edit the search terms using the following options:

- To add a term to the search, enter the desired term into the upper text box and click __Add__
- To remove a term from the search, select a term in the lower text box and click __Remove__
- Click __Clear__ to clear all terms from the lower box
- Select a qualifier option:

  - Contains ALL of the following search terms (And) – Search only returns results containing all of the search terms
  - Contains ANY of the following search terms (Or) – Search returns results containing one or more of the search terms
- Click __Import CSV__ to open a file explorer and select a CSV file to import

## Folder Inclusion/Exclusion Window

Use the Folder Inclusion/Exclusion window to select individual folders to add to or remove from the action. The Folder Inclusion/Exclusion window opens if __specific__ in __with specific folder(s) to include/exclude__ is selected in the Edit Conditions box.

![Folder Inclusion/Exclusion Window](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/mailbox/folderinclusionexclusionwindow.png)

Include/Exclude folders using the following options:

- Click __Add__ to populate a field to add a folder path

  ![New field added on Folder Inclusion/Exclusion window](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/mailbox/folderinclusionexclusionwindownew.png)
- Click the ellipsis (__…__) or enter the path to the desired folder in the text box
- Scope auto-populates with __This folder__. Click __This folder__ to reveal a drop-down menu to select from the following scope options:

  - This folder
  - This folder and subfolders
  - Subfolders only
- The Remove button becomes enabled once a folder is added to either section. To remove a folder from the scope, select it and click __Remove__.
