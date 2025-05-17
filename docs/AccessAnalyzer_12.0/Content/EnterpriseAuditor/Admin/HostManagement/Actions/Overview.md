---
sidebar_position: 5724
title: Host Management Activities
---

# Host Management Activities

The Activities pane available at the Host Management node and at the individual host list nodes provides the tools needed to manage hosts and host lists.

| Activities pane in Host Management node | Activities pane in individual host list node |
| --- | --- |
| Host Management Node | Individual Host List Nodes |

The available actions are:

* [Add Hosts](Add "Add Hosts") – Create a new host list by manually entering hosts or importing a host list (only available in the Host Management node)
* [View/Edit Host](ViewHost "View/Edit Host") – Open the Host Details View, which displays the collected host inventory information for the selected host in an easier-to-read format and allows you to manually edit the host inventory information
* [Delete Host(s)](DeleteHost)") – Delete host from the selected list (permanently deletes host from the host master table if used in the Host Management node)
* [Import Location](ImportLocation "Import Location") – Import the physical location data for hosts from a CSV file or database without creating a new host list. Location column is in the [Host Inventory Data Grid](../DataGrid "Host Inventory Data Grid").
* [Refresh Hosts](Refresh "Refresh Hosts") – Manually executes the host inventory query for the selection
* [Save Current View](SaveView "Save Current View") – Create a dynamic host list from the current (filtered) data grid view
* [Save Selected To List](SaveToList "Save Selected To List") – Create a static host list from the selected hosts within the current data grid
* [Schedule (Activities Pane Option)](Schedule)") – Opens a customized Schedule Properties window to schedule a host inventory query
* [Export Data](Export "Export Data") – Export the current data grid to a HTML, XML, or CSV file
* [Suspend/Resume Host Inventory](Suspend "Suspend/Resume Host Inventory") – Pause an **In progress** host inventory or resume a paused **In queue** host inventory
* External commands – Sub-header (not activity) that separates the Activities above which occur within the Access Analyzer Console from the Activities below which open external processes:

  * Manage Host – Opens the Microsoft Management Console interface for the selected host if it has that feature enabled
  * Explore Host – Opens Windows Explorer, displaying the shares on the selected host
  * Ping Host – Opens a Command Prompt to run a ping command targeting the selected host
  * Trace Route to Host – Opens a Command Prompt to run the `TraceRoute` command, locating a path to the selected machine in less than 30 hops

Activities available only at the individual host list nodes are:

* [Edit List](EditList "Edit List") – Edit the selected host list in the Host List Wizard
* [Edit Query](EditQuery "Edit Query") – Edit the Host Discovery query settings for the selected query-created host list
* [Rename List](Rename "Rename List") – Rename the selected host list (should not be used if the host list has already been assigned to a job for execution)
* [Delete List](DeleteList "Delete List") – Delete the selected host list
* [View Query](ViewQuery "View Query") – Opens the Host Discovery Queries window