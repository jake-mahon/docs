---
title: Netwrix File Activity Monitor App for QRadar
sidebar_label: QRadar
description: Integrate Activity Monitor with IBM QRadar using the File Activity Monitor App for comprehensive security information and event management.
---

# Netwrix File Activity Monitor App for QRadar

Netwrix File Activity monitoring solutions enable organizations to successfully, efficiently, and
affordably monitor file access and permission changes across Windows and Network Attached Storage
(NAS) file systems in real-time. Using the preconfigured  Netwrix File Activity Monitor App for
QRadar, users can quickly understand all file activities as a whole, for specific resources or
users, as well as patterns of activity indicative of threats such as crypto ransomware or data
exfiltration attempts. With full control over the data, users can create custom searches, all while
enabling QRadar to correlate file system activity with any log source.

This document describes how to integrate Netwrix products with the Netwrix File Activity Monitor App
for QRadar found in the IBM X-Force Exchange. Any Netwrix products can be configured to monitor file
system activity and send the monitored events to QRadar. After installing this app, ensure that
either the Activity Monitor, Threat Prevention, or Enterprise Auditor has been configured to send
events to QRadar. See the [Netwrix Technical Knowledge Center](https://helpcenter.netwrix.com/) on
the Netwrix website for additional information.

## App Installation in QRadar

Download the [Stealthbits File Activity Monitor App for
QRadar](https://exchange.xforce.ibmcloud.com/hub/extension/STEALTHbits Technologies:STEALTHbits File
Activity Monitor) from the [IBM X-Force App Exchange](https://exchange.xforce.ibmcloud.com/hub).
After downloading the Stealthbits File Activity Monitor App for QRadar, follow the steps to install
it within QRadar.

**Step 1 –** Click on the Admin tab within QRadar.

**Step 2 –** Under System Configuration, click Extensions Management.

**Step 3 –** Click **Add** in the top-right corner of the window. Navigate to the location where you
downloaded the app, and select it. Check the Install Immediately checkbox, and then click Add.

**Step 4 –** When the Validating Install window is finished processing, check the Overwrite option.
Then click **Install**.

**Step 5 –** Close the Extensions Management window, and then select the File Activity Monitor tab
within QRadar.

The File Activity Monitor tab will appear within QRadar. It is necessary for the QRadar SEC token to
be saved to the Settings interface of the **File Activity Monitor** App. See the
[Settings](/docs/activitymonitor/7.1/integrations/siem/qradar.md) topic for
additional information.

## Initial Configuration of the QRadar App

Follow the steps to configure QRadar to receive data from Stealthbitsproducts.

**Step 1 –** Determine the IP Address of the QRadar Console, e.g. run the _ifconfig_ command. This
information is required for the following sections:

- See the Syslog Tab section of the Stealthbits File Activity Monitor User Guide for information on
  how to configure the Stealthbits Activity Monitor to send data to QRadar.
- See the SIEM Tab section of the StealthINTERCEPT Admin Console User Guide for information on how
  to configure StealthINTERCEPT to send data to QRadar.

**Step 2 –** Navigate to the **Admin** tab in the QRadar web interface and click Data Sources.

**Step 3 –** Select Log Sources.

**Step 4 –** View the Log Sources list. If the data source was not automatically created, click Add
and enter the following information:

- Log Source Name – Enter a descriptive name to identify the data source
- Log Source Description – Enter a description of the data source
- Log Source Type – Stealthbits StealthINTERCEPT
  - Use this source type for both the Stealthbits Activity Monitor and StealthINTERCEPT.

**Step 5 –** Test that the configuration is working correctly. Check the Log Activity page inside of
the web console for QRadar. There should be logs of events that are generated as soon as QRadar
starts receiving data. If there are no events, use a packet sniffer to ensure that packets are being
sent correctly between the hosts, and diagnose any possible network issues.

- Protocol Configuration – Select Syslog
- Log Source Identifier – Enter the host name or IP Address of the host where the Stealthbits
  Activity Monitor Console OR StealthINTERCEPT is installed
- Then click Save. Remember, prior to using the StealthbitsFile Activity Monitor App for QRadar, the
  related Stealthbits product must be configured to send data to QRadar.

The  Stealthbits File Activity Monitor App for QRadar can now display activity data from either the
 Stealthbits Activity Monitor or StealthINTERCEPT.

# File Activity Monitor App for QRadar

Stealthbits File Activity Monitor App for QRadar (File Activity Monitor tab) contains several
predefined dashboards: File Activity (Home), Ransomware, Permission Changes, Deletions, User
Investigation, and Host Investigation. There is also an About dashboard with additional information
and a Settings interface for configuring the QRadar SEC token.

![file_activity_monitor_app](/img/versioned_docs/activitymonitor_7.1/activitymonitor/siem/qradar/file_activity_monitor_app.webp)

The User Investigation and Host Investigation dashboards only appear when a search is conducted.
This can be done by clicking a hyperlink within the Username or Destination IP columns of a table
card. Alternatively, type the complete user name or host IP Address in the Search box on the right
side of the navigation bar.

## Table Card Features

Within the dashboards are several cards with a tabular format. Each of these cards have the
following features:

- Only five pages of data will be loaded at a time. Applying the Search or Sort features or moving
  beyond the five ‘loaded’ pages will result in a “Processing” banner being temporarily displayed
  over the table while the server is directly queried for the necessary data.
- Search data entries for the Username, Destination IP, and File Path columns by typing in the
  Search box in the upper-right corner of the card:

  - Any entries with a match will remain in the table, all non-matching entries will be filtered
    out.
  - Total number of entries “Showing” will adjust for the filtered total.
  - Search can also apply to the Operation column, but only for exact matches.

- Sort can be applied to one column at a time by clicking on the desired column header.
- Show 10, 25, 100, or All entries in the table. Only visible entries can be exported.
- Result data currently visible within the table page displayed can be exported from the dashboard:

  - Copy – Copy to clipboard in order to paste to another application
  - CSV – Export to a Comma Separated Value file
  - Excel – Export to an Excel Workbook file
  - Print – Send currently displayed table to printer

# Offenses

The Activity Monitor App for QRadar feeds a couple of QRadar Offenses.

![Stealthbits Offenses in QRadar](/img/versioned_docs/activitymonitor_7.1/activitymonitor/siem/qradar/stealthbitsoffenses.webp)

While the
[Ransomware Dashboard](/docs/activitymonitor/7.1/integrations/siem/qradar.md)
reports on incidents of Ransomware attacks monitored by StealthINTERCEPT, the following offenses may
be generated by the Stealthbits File Activity Monitor App.

| QRadar Offense                           | Definition                                                                   |
| ---------------------------------------- | ---------------------------------------------------------------------------- |
| INTERCEPT: File System Attacks (By User) | Significant number of file changes made by an account in a short time period |
| Stealthbits: Ransomware Detected         | Threshold-based Ransomware Rule                                              |

# Settings

Use the gear icon next to the **Search** box to open the **Settings** interface. It is necessary for
the QRadar SEC token to be saved to the **Settings** interface.

![Settings for Stealthbits Activivty Monitor App for QRadar](/img/versioned_docs/activitymonitor_7.1/config/dellpowerscale/settings.webp)

The **More information** link will open the IBM Knowledge Center with information on generating the
QRadar SEC token. Once the token is generated, copy and paste it here and click Save.

# About Dashboard

The About dashboard provides information about the application.

![About Dashboard for Stealthbits Activity Monitor App for QRadar](/img/versioned_docs/activitymonitor_7.1/activitymonitor/siem/qradar/dashboard/aboutdashboard.webp)

Information on how to obtain a license for the applicable Stealthbits software is included.

# Deletions Dashboard

The Deletions dashboard contains the following cards:

![Deletions Dashboard for Stealthbits Activivty Monitor App for QRadar](/img/versioned_docs/activitymonitor_7.1/activitymonitor/siem/qradar/dashboard/deletionsdashboard.webp)

- Activity – Timeline of all deletion events over the specified time interval
- Top Users – Displays up-to the top five users associated with deletion events over the specified
  time interval
- Latest Events – Tabular format of all deletion events which occurred over the specified time
  interval

  - See the
    [Table Card Features ](/docs/activitymonitor/7.1/integrations/siem/qradar.md#table-card-features)
    topic for additional information.

The time interval is identified in the upper-right corner with the Start and End boxes. This is set
by default to the “past day,” or 24 hours. To search within a different interval, either manually
type the desired date and time or use the calendar buttons to set the desired date and time
interval. Then click Search to refresh the card data.

# Home Dashboard

The File System Activity Home dashboard contains the following cards:

![Home Dashboard for Stealthbits Activivty Monitor App for QRadar](/img/versioned_docs/activitymonitor_7.1/activitymonitor/siem/qradar/dashboard/homedashboard.webp)

- Active Users – Number of distinct users recorded performing any type of file activity to/from any
  host over the specified time interval
- Active Servers – Number of distinct servers accessed (destination IP Addresses) with any type of
  file activity recorded over the specified time interval
- Open Offenses – Number of ransomware offenses detected within QRadar from the file activity event
  data

  - The value for this card is a hyperlink to the
    [Ransomware Dashboard](/docs/activitymonitor/7.1/integrations/siem/qradar.md).

- File Activity – Timeline of all file activity over the specified time interval
- Top Users – Displays up-to the top five users associated with file activity over the specified
  time interval
- Top Servers – Displays up-to the top five servers (destination IP Addresses) associated with file
  activity over the specified time interval
- Latest Events – Tabular format of all file activity events which occurred over the specified time
  interval

  - See the
    [Table Card Features ](/docs/activitymonitor/7.1/integrations/siem/qradar.md#table-card-features)
    topic for additional information.

The time interval is identified in the upper-right corner with the Start and End boxes. This is set
by default to the “past day,” or 24 hours. To search within a different interval, either manually
type the desired date and time or use the calendar buttons to set the desired date and time
interval. Then click Search to refresh the card data.

# Host Investigation Dashboard

The Host Investigation dashboard only appears when a search is conducted. This can be done by
clicking a hyperlink within the Destination IP column of a table card. Alternatively, type the
complete host IP Address in the Search box on the right side of the navigation bar.

![Home Investigation Dashboard for Stealthbits Activivty Monitor App for QRadar](/img/versioned_docs/activitymonitor_7.1/activitymonitor/siem/qradar/dashboard/userinvestigationdashboard.webp)

The Host Investigation dashboard contains the following cards:

- Total Actions – Number of all file activity events associated with the host over the specified
  time interval
- Users – Number of usernames associated with the host over the specified time interval
- Resources – Number of distinct files associated with the host over the specified time interval
- File Activity – Timeline of all events associated with the host over the specified time interval

  - The graph values can be toggled on an off by clicking on individual elements in the legend.

- Details of File Activity – Tabular format of all file activity events associated with the host
  which occurred over the specified time interval

  - See the
    [Table Card Features ](/docs/activitymonitor/7.1/integrations/siem/qradar.md#table-card-features)
    topic for additional information.

- Destination Host Offenses – QRadar offenses associated with the host which occurred over the
  specified time interval

  - See the
    [Table Card Features ](/docs/activitymonitor/7.1/integrations/siem/qradar.md#table-card-features)
    topic for additional information.

The time interval is identified in the upper-right corner with the Start and End boxes. This is set
by default to the “past day,” or 24 hours. To search within a different interval, either manually
type the desired date and time or use the calendar buttons to set the desired date and time
interval. Then click Search to refresh the card data.

# Permission Changes Dashboard

The Permission Changes Dashboard for QRadar shows information on changes made to permissions using
various metrics.

![Permission Changes Dashboard for Stealthbits Activivty Monitor App for QRadar](/img/versioned_docs/activitymonitor_7.1/activitymonitor/siem/qradar/dashboard/permissionchangesdashboard.webp)

The Permission Changes dashboard contains the following cards:

- Activity – Timeline of all permission change events over the specified time interval
- Top Users – Displays up-to the top five users associated with permission change events over the
  specified time interval
- Latest Events – Tabular format of all permission change events which occurred over the specified
  time interval

  - See the
    [Table Card Features ](/docs/activitymonitor/7.1/integrations/siem/qradar.md#table-card-features)
    topic for additional information.

The time interval is identified in the upper-right corner with the Start and End boxes. This is set
by default to the “past day,” or 24 hours. To search within a different interval, either manually
type the desired date and time or use the calendar buttons to set the desired date and time
interval. Then click Search to refresh the card data.

# Ransomware Dashboard

The Ransomware Dashboard for QRadar shows a list of suspected ransomware events.

![Ransomware Dashboard for Stealthbits Activivty Monitor App for QRadar](/img/versioned_docs/activitymonitor_7.1/activitymonitor/siem/qradar/dashboard/ransomwaredashboard.webp)

The Ransomware dashboard contains the following cards:

- Offenses – List of offenses detected within QRadar from the file activity data as a potential
  ransomware attack

  - See the
    [Table Card Features ](/docs/activitymonitor/7.1/integrations/siem/qradar.md#table-card-features)
    topic for additional information.

- Details of Ransomware Attack – Tabular format of all file activity events for the selected offense
  which occurred over the specified time interval

  - Only visible after clicking Search on an offense
  - See the
    [Table Card Features ](/docs/activitymonitor/7.1/integrations/siem/qradar.md#table-card-features)
    topic for additional information.

- Breakdown of File Types – Pie chart of the top eight file extensions of the affected files for the
  selected offense

  - Only visible after clicking Search on an offense

The offenses generated within QRadar are based upon the Stealthbits: Ransomware Detected rule that
is packaged with this application. In order to adjust this rule to better suit an organization’s
needs, please refer to the IBM QRadar
[Rule management](https://www.ibm.com/support/knowledgecenter/SS42VS_7.2.6/com.ibm.qradar.doc/c_qradar_rul_mgt.html)
article on how to modify rules.

# User Investigation Dashboard

The User Investigation dashboard only appears when a search is conducted. This can be done by
clicking a hyperlink within the Username column of a table card. Alternatively, type the complete
user name in the Search box on the right side of the navigation bar.

![User Investigation Dashboard for Stealthbits Activivty Monitor App for QRadar](/img/versioned_docs/activitymonitor_7.1/activitymonitor/siem/qradar/dashboard/userinvestigationdashboard.webp)

The User Investigation dashboard contains the following cards:

- Total Actions – Number of all file activity events associated with the user over the specified
  time interval
- File Servers – Number of destination IP Addresses associated with the user over the specified time
  interval
- Resources – Number of distinct files associated with the user over the specified time interval
- File Activity – Timeline of all events associated with the user over the specified time interval
  - The graph values can be toggled on an off by clicking on individual elements in the legend.
- Details of File Activity – Tabular format of all file activity events associated with the user
  which occurred over the specified time interval
  - See the
    [Table Card Features ](/docs/activitymonitor/7.1/integrations/siem/qradar.md#table-card-features)
    topic for additional information.
- Destination Host Offenses – QRadar offenses associated with the destination IP Addresses accessed
  by the user during the specified time interval
  - See the
    [Table Card Features ](/docs/activitymonitor/7.1/integrations/siem/qradar.md#table-card-features)
    topic for additional information.

The time interval is identified in the upper-right corner with the Start and End boxes. This is set
by default to the “past day,” or 24 hours. To search within a different interval, either manually
type the desired date and time or use the calendar buttons to set the desired date and time
interval. Then click Search to refresh the card data.
