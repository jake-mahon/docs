---
sidebar_position: 6763
title: Right-Click Menus
---

# Right-Click Menus

In the Navigation pane, the Policies node, Templates node, folders, policies, and templates have different right-click commands available.

Alerts Node

From the Agents node, the right-click menu can be used to install the Agent.

![Agents node - Right-click Menu](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Navigation/AgentsMenu.png "Agents node - Right-click Menu")

| Right-Click Command | Description |
| --- | --- |
| Install Agent | Opens the [Deploy Agents Wizard](../Agents/Deploy/Overview#Deploy "Deploy Agents Wizard") |

Saved ‘Filtered Investigate’ Nodes

From the node of a saved ‘Filtered Investigate’ view, the right-click menu allows you to delete the saved view.

![Saved ‘Filtered Investigate’ Nodes - Right-click Menu](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Navigation/SavedInvestigateViewNode.png "Saved ‘Filtered Investigate’ Nodes - Right-click Menu")

| Right-Click Command | Description |
| --- | --- |
| Delete | Deletes the saved ‘Filtered Investigate’ view |

Policies and Templates Nodes

From the Policies and Templates nodes, the right-click menu is limited to adding new folders to the selected section.

![Policies and Templates Nodes - Right-click Menu](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Navigation/PoliciesTemplatesNodes.png "Policies and Templates Nodes - Right-click Menu")

| Right-Click Command | Description |
| --- | --- |
| New — Folder (Crtl+F) | Creates a new folder in the selected location |

Folder Node

From a Folder node, the right-click menu contains these commands.

![Folder Node - Right-click Menu](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Navigation/FolderMenu.png "Folder Node - Right-click Menu")

| Right-Click Command | Description |
| --- | --- |
| New — Policy (Crtl+P) | Creates a new policy in the selected location. Only available for folders under the Policies node. |
| New — Template (Crtl+T) | Creates a new template in the selected location. Only available for folders under the Templates node. |
| New — Folder (Crtl+F) | Creates a new folder in the selected location |
| Rename | Opens a textbox to rename the selected folder |
| Remove | Deletes the selected folder |
| Paste | Pastes a copied policy/template into the selected folder |

**NOTE:** If the logged in user does not have the **Manage Policies** permissions for a protected policy, these options are grayed-out. See the [Policies Interface](../Policies/Overview "Navigates to the Policies Interface section") topic for additional information on protection.

 and  Nodes

From the node for a specific policy or template, the right-click menu contains these commands.

![ and  Nodes - Right-click Menu](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Navigation/IndividualPolicyTemplateNode.png " and  Nodes - Right-click Menu")

| Right-Click Command | Description |
| --- | --- |
| Rename | Opens a textbox to rename the selected policy/template |
| Remove | Deletes the selected policy/template |
| Enable | Enables the selected policy. Only available for policies. |
| Disable | Disables the selected policy. Only available for policies. |
| Copy | Copies the selected policy/template |
| Cut | Copies the selected policy/template. Then it deletes the selected policy/template when the copy is pasted to a new folder. |

**NOTE:** If the logged in user does not have the Manage Policies permissions for a protected policy, these options are grayed-out. See the [Policies Interface](../Policies/Overview "Navigates to the Policies Interface section") topic for additional information on protection.

Tags Node

From the Tags node, the right-click menu contains these commands.

![Tags Node - Right-click menu](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Navigation/TagsNode.png "Tags Node - Right-click menu")

| Right-Click Command | Description |
| --- | --- |
| Refresh | Refreshes the tag folders to display any new tags or any templates newly associated with an existing tag |

 Node under Tags

From the template within a folder under the Tags node, the right-click menu contains these commands.

![ Node under Tags - Right-click menu](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Navigation/TemplateNodeUnderTags.png " Node under Tags - Right-click menu")

| Right-Click Command | Description |
| --- | --- |
| Copy | Copies the selected template |

## Data Grid Right-Click Menu

A right-click menu is also available from the column headers of a data grid.

![Displays the data grid right-click menu. ](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Navigation/HeaderRightClickMenu.png)

It contains the following selections:

| Right-Click Command | Description |
| --- | --- |
| Full Expand | Expands all sections within the data grid. Only available from a grouped column header. |
| Full Collapse | Collapses all sections within the data grid. Only available from a grouped column header. |
| Sort Ascending | Sorts data by the selected column in ascending alphanumeric order (A-Z) |
| Sort Descending | Sorts data by the selected column in descending alphanumeric order (Z-A) |
| Clear Sorting / Clear All Sorting | Removes sorting from the selected column or removes sorting from all columns |
| Sort by Summary (Count by [column] – Sort Ascending/Descending) | Sorts ‘grouped’ data by severity count in ascending or descending order. Only available from a grouped column header. |
| Group by This Column / UnGroup/Clear Grouping | Groups data or clears grouping of data by the selected column |
| Hide/Show Group by Box | Hides or shows the Group By box where headers can be dragged-and-dropped to group the data |
| Group Interval | If grouped by the Time column, use this option to group by time intervals (Day, Month, Year, Smart). Only available from a grouped column header. |
| Hide This Column | Hides the selected column from the data grid. Hidden columns can be returned to the data grid through the Column Chooser option. |
| Column Chooser | Opens the [Customization Window](DataGrid#Column "Customization Window") where you can add and remove columns from the data grid |
| Best Fit | Changes column width to fit the data within the selected column |
| Best Fit (all columns) | Changes column width for all columns to fit the data |
| Filter Editor | Opens the Filter Editor window (see the [Filter Data](DataGrid#_Filter_Data "Filter Data") topic) |
| Show / Hide Find Panel | Shows or hides the Find Panel, which is the search feature (see the [Search Data](DataGrid#_Searching_Data "Search Data") topic) |
| Hide / Show Auto Filter Row | Hides or shows the Auto Filter Row between the column headers and the first row of event data |