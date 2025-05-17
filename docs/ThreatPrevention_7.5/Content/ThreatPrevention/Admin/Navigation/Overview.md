---
sidebar_position: 6762
title: Navigation
---

# Navigation

The Threat Prevention Administration Console is used to:

* Create and configure policies and policy templates
* Configure analytics
* Deploy and manage Agents
* Import and export Threat Prevention policies and policy templates
* Configure alerts

Policies control the real-time event monitoring/blocking of files and directories, users, groups, Active Directory objects, and Microsoft Exchange objects. These policies enable Threat Prevention to detect and report changes as well as send notification when changes occur.

## Administration Console Components

The Administration Console has the following components:

* Menu
* Policy Center
* Status Bar

![Threat Prevention Administration Console – Components](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Navigation/AdminConsole.png "Threat Prevention Administration Console – Components")

There are also right-click commands available within different sections of the [Policy Center](#Policy "Policy Center").

If the Administration Console user interface or windows do not display properly, see the [Troubleshooting FAQs](../../Troubleshooting/Overview#Troubles "Troubleshooting FAQs") topic for information.

## Menu

The Menu contains the following selections:

![Administration Console - Menu](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Navigation/Menu.png "Administration Console - Menu")

| Menu Item | Option | Description |
| --- | --- | --- |
| File | New | Create new policies (Ctrl+P), new templates (Ctrl+T), or new folders (Ctrl+F) in the selected location of the [Policy Center](#Policy "Policy Center") |
|  | Rename | Opens a textbox to rename the selected policy, template, or folder in the [Policy Center](#Policy "Policy Center") |
|  | Remove | Removes the selected policy, template, or folder from the [Policy Center](#Policy "Policy Center") |
|  | Exit | Exit the Administration Console |
| Tools | Export … | Export (Alt+X) policies and templates through the [Export Policies and Templates Window](../Tools/ExportPoliciesTemplates "Export Policies and Templates Window") |
|  | Import … | Import (Alt+I) policies/templates, collections, and event consumers/alerts from an exported file through the [Import Window](../Tools/Import "Import Window") |
| Configuration | Alerts | Configure and manage all email, event log, and SEIM alerts in the [System Alerting Window](../Configuration/SystemAlerting/Overview "System Alerting Window") |
|  | Users | A security feature for configuring access to the Administration Console. Users are added and assigned rights through the [Users and Roles Window](../Configuration/UserRoles/Overview "Users and Roles Window"). |
|  | Database > Server | Manage the events database in the [Events Database Configuration Window](../Configuration/EventsDatabaseConfiguration "Events Database Configuration Window"). You can view the information, but cannot make changes. |
|  | Database > Maintenance | Use database maintenance to automatically groom the database to optimize performance by archiving and/or deleting data aged beyond a specified threshold. This can be configured to run by Event Type, Analytic, or Policy. It is configured in the [Database Maintenance Window](../Configuration/DatabaseMaintenance/Overview "Database Maintenance Window"). |
|  | Collections | Manage all Microsoft Collections in the [Collection Manager Window](../Configuration/CollectionManager/Overview "Collection Manager Window") |
|  | Event Filtering | Filters Active Directory events to remove “noise” from collected event data and/or exclude logins from machine accounts. Both settings are ON by default. It also allows authentication events from selected hosts or from selected accounts to be excluded, which require configuration before being enabled. A latency threshold can be set to generate alerts when the delivery of AD Events are delayed beyond the threshold. These options are configured in the [Event Filtering Configuration Window](../Configuration/EventFilteringConfiguration "Event Filtering Configuration Window"). |
|  | Netwrix Threat Manager Configuration | Enables integration between Threat Prevention and Threat Manager in a global setting. The Threat Manager URI is set in the [Netwrix Threat Manager Configuration Window](../Configuration/ThreatManagerConfiguration "Netwrix Threat Manager Configuration Window"). Choose policies through the Policy checkboxes in this window or the Actions tab of each policy for sending event data to Threat Manager. |
|  | File Monitor Settings | Manages the log retention, inherited permissions filtering, disables office file filtering, and the ability to exclude AD accounts and processes for Threat Prevention file monitoring and blocking policies in a global setting. These options are set in the [File Monitor Settings Window](../Configuration/FileMonitorSettings "File Monitor Settings Window"). |
|  | EPE Settings | Manages the Have I Been Pwned password hash database configuration and update options as well as global Password Rules filter configurations. These options are configured in the [EPE Settings Window](../Configuration/EPESettings "EPE Settings Window"). |
| Help | Administration Console Help | Opens the internal help documentation |
|  | License Manager | Opens the Threat Prevention [License Manager Window](LicenseManager "License Manager Window") where the customer name, license expiry date, and licensed modules are displayed |
|  | About Netwrix Threat Prevention Administration Console | Opens the Administration Console window where the product version, copyright, and the Netwrix website link are displayed |

## Policy Center

The Policy Center is the primary interface of the Administration Console. It is divided into two sections: the Navigation pane and the Display area.

![Administration Console – Policy Center](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Navigation/PolicyCenter.png "Administration Console – Policy Center")

The Navigation pane provides interface options while the Display area displays the selected interface. The following interface options are available:

* [Agents Interface](../Agents/Overview "Navigates to the Agents Interface section")
* [Alerts Interface](../Alerts/Overview "Navigates to the Alerts Interface section")
* [Investigate Interface](../Investigate/Overview "Navigates to the Investigate Interface section")
* [Analytics Interface](../Analytics/Overview "Navigates to the Analytics Interface section")
* [Policies Interface](../Policies/Overview "Navigates to the Policies Interface section")
* [Templates Interface](../Templates/Overview "Navigates to the Templates Interface section")
* [Tags Node](../Tags/Overview "Tags Node")

Several right-click menus and additional features are available within these interfaces.

*Remember,*  the Investigate, Analytics, Policies, Templates, and TAGS nodes in the Navigation pane can be expanded and collapsed.

Agents

The Agents interface provides data about the Agents within the environment. This includes what domain the Agent is in, what machine it is deployed on, its current status, and other details. This interface also indicates if a domain controller does NOT have an Agent deployed on it. Through this interface, Agents can be deployed, updated, and managed; logging levels can be configured; logs can be accessed; and Agent information can be exported.

Alerts

The Alerts interface provides information on the Threat Prevention Security events, Operations events, and Configuration events. All events are displayed by default. However, they can be filtered, sorted, and searched.

Investigate

The Investigate interface is a reporting tool for the Administration Console. It provides information on recent events monitored or blocked by any enabled policy. By default, all events recently monitored or blocked are available. However, they can be filtered to particular policies, perpetrators, time frames, domains, servers, computers, events, etc.

Analytics

The Analytics interface is a front-line warning tool for detecting incidents in real-time based on patterns within collected event data indicative of potential security risk. It provides information on incidents identified by the analytic policies.

Policies

The Policies interface provides a central location for creating and configuring all policies. On selecting the Policy node, the policies are listed in the Display area. In the Navigation pane, the policies are organized into folders. By default, the folder structure is comprised of but not limited to three folders: Auditing, Blocking, and Notifications, representing the most common types of policies enabled by users. Policies can be configured to monitor or block Windows Active Directory events, Windows Exchange Server 2010, 2013, 2016 and 2019 events, Windows File System events, NetApp File System events, EMC File System events, and Group Policy Objects events.

A folder can be protected, which controls access to any policy within the folder. A protected policy cannot be viewed, edited, or deleted by other Administration Console users without explicit permissions being granted.

Templates

The Templates interface provides a central location for creating and configuring all policy templates. On selecting the Templates node, a list of all policy templates available is displayed in the Display area. Policy templates must also be stored within a folder. There are pre-created policy templates which can be imported.

TAGS

The TAGS node provides an organizational feature for templates. Many preconfigured templates have tags which enable users to quickly find a desired template though various groupings. Tags do not create a duplicate template, but rather display the template in different folders under the TAGS node.

## Status Bar

The Status Bar is located at the bottom of the Administration Console.

![](../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Navigation/StatusBar.png)

It displays the current user account logged into Threat Prevention and current session details.