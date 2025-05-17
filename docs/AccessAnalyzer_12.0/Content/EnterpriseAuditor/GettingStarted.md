---
sidebar_position: 4831
title: Getting Started
---

# Getting Started

Once Access Analyzer is installed, the following workflow will quickly enable users to begin auditing the organization’s IT infrastructure. See the [Navigating the Console](Admin/Navigate/Overview "Navigating the Console") topic for additional information and data grid functionality.

## Initial Configuration During First Launch

During the initial Access Analyzer Configuration Wizard, users are walked through configuring several key global settings:

* Storage

  * Mandatory configuration during the first launch
  * Requires credential on the SQL® Server database which is used to create and modify the Access Analyzer database
  * Option to either create a new database or point to an existing database
  * If using Windows Authentication, the Schedule node must be configured also
  * See the [Storage](Admin/Settings/Storage/Overview "Navigates to the Storage section") topic for additional information
* Schedule

  * Only appears if the Storage Profile is configured to use Windows Authentication
  * If the Storage Profile is configured to use SQL Authentication, the setting is configured later
  * See the [Schedule](Admin/Settings/Schedule "Navigates to the Schedule section") topic for additional information
* Instant Job

  * Install the pre-configured solutions for which the organization is licensed
  * See the [Instant Job Wizard](Admin/Jobs/InstantJobs/Overview "Navigates to the Instant Job Wizard section") topic for additional information

## Global Settings Configured

The global Settings have an overall impact on the running of Access Analyzer jobs. They are managed through the Settings node at the top of the Navigation pane. The following global Settings require configuration from the start:

* [Connection](Admin/Settings/Connection/Overview "Navigates to the Connection section") – Configure the Default Connection Profile and additional Connection Profiles as needed for intended data collection
* [Schedule](Admin/Settings/Schedule "Navigates to the Schedule section") – Configure the Default Scheduled Service Account for scheduling Access Analyzer job execution, if not configured via the initial configuration wizard
* [Notification](Admin/Settings/Notification "Navigates to the Notification section") – Configure an SMTP server for Access Analyzer to use for sending email notifications

The other global Settings provide additional options for impacting how Access Analyzer functions:

* [Access](Admin/Settings/Access/Overview "Navigates to the Access section") – Enable and configure Role Based Access for a least privileged application of Access Analyzer and report viewing or the enable the REST API

  **NOTE:** If Role Based Access is enabled by accident, contact [Netwrix Support](https://www.netwrix.com/support.html "Netwrix Support") for assistance in disabling it.
* [Application](Admin/Settings/Application/Overview "Navigates to the Application section") – Configure additional settings not included in the other nodes
* [Exchange](Admin/Settings/Exchange "Navigates to the Exchange section") – Configure Microsoft® Exchange Server connections

**CAUTION:** Do not configure data retention at the global level without ensuring History is supported by ALL solutions to be run.

* [History](Admin/Settings/History "Navigates to the History section") – Configure data retention and log retention settings
* [Host Discovery](Admin/Settings/HostDiscovery "Navigates to the Host Discovery section") – Configure Host Discovery task settings
* [Host Inventory](Admin/Settings/HostInventory "Navigates to the Host Inventory section") – Configure Host Inventory settings
* [Reporting](Admin/Settings/Reporting "Navigates to the Reporting section") – Configure reporting options, if necessary
* [Sensitive Data](Admin/Settings/SensitiveData/Overview "Navigates to the Sensitive Data section") – Flag false positive within discovered potential sensitive data files
* [ServiceNow](Admin/Settings/ServiceNow "Navigates to the ServiceNow section") – Configure the ServiceNow Action Module authentication credentials
* [Storage](Admin/Settings/Storage/Overview "Navigates to the Storage section") – Configure additional SQL Server database Storage Profiles

See the [Global Settings](Admin/Settings/Overview "Navigates to the Global Settings section") topic for additional information.

## Discover Hosts

Within the terminology of Access Analyzer, hosts are the machines being targeted during data collection. Hosts can be discovered or manually introduced to Access Analyzer. Known hosts are then inventoried to populate dynamic host lists. Host discovery is done at the Host Discovery  node. Hosts are manually introduced at the Host Management node.

Host management consists of maintaining up-to-date host inventories and host lists which can be assigned to job groups or jobs as targeted hosts. See the [Host Management](Admin/HostManagement/Overview "Navigates to the Host Management section") topic for additional information.

## Job Workflow

Once the global Settings are configured and hosts have been introduced to Access Analyzer, it is time to begin auditing. This requires an understanding of the relationship between solutions, job groups, jobs, queries, analysis, actions, and reports.

The Access Analyzer job is the fundamental unit. Jobs are responsible for all data collection queries, analysis tasks, notification tasks, action tasks, and report generation. When Jobs are designed to work together, they are housed within job groups to control the order of job execution. Solutions are pre-configured job groups which have been designed to target specific types of environments to audit for specific data sets, typically the most common types of information desired.

See the [Jobs Tree](Admin/Jobs/Overview "Jobs Tree") topic for additional information.