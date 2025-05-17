---
sidebar_position: 5621
title: Global Settings
---

# Global Settings

The global settings have an overall impact on the running ofAccess Analyzer jobs. Settings are inherited through a parent-child structure from the Settings node through the Jobs tree to the individual jobs unless inheritance is broken by direct assignment at either the job group or the individual job level.

![Configuration Settings](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/GlobalSettings.png "Configuration Settings")

Some of these settings are configured during the initial launching of theAccess Analyzer Console. Others are configured as desired by the end-user. Expand the Settings node in the Navigation pane to select a global setting to configure:

* [Access](Access/Overview "Access")
  * Configure what applications users, and groups have access to Access Analyzer
  * Configure Role Based Access control of Access Analyzer and the Web Console
  * Configure REST API
* [Application](Application/Overview "Application")
  * Configure the Access Analyzer application logging level
  * Configure profile security
  * Configure options to connecting to host targets
  * Configure grid view parameters for data tables and views
  * Configure database cleanup options
  * Configure the Access Analyzer application’s exit options
* [Connection](Connection/Overview "Application")
  * Optional configuration during the initial launch, but required for host inventory query execution and job execution
  * Provide credential sets with adequate permissions to remotely contact and gather information from target hosts
  * Creating a Connection Profile requires credentials with appropriate levels of permissions according to the data collector being used
* [Exchange](Exchange "Exchange")
  * Required for auditing an organization’s Exchange environment
  * Only enabled for configuration once the Access Analyzer for Exchange Solution prerequisites are installed
  * Configure Microsoft Exchange server connections and requires Exchange server versions and names
  * The ExchangeMailbox, Exchange2K, ExchangePS, and ExchangePublicFolder Data Collectors utilize these global settings
* [History](History "History")
  * Configure job data retention period settings
  * Configure diagnostics retention period settings
* [Host Discovery](HostDiscovery "Host Discovery")
  * Configure host discovery settings
  * Configure discovery log settings
* [Host Inventory](HostInventory "Host Inventory")
  * Configure inventory items, performance tuning, and desired host list views
* [Notification](Notification "Notification")
  * Required for the Access Analyzer application to send email
  * Provide SMTP server information and sender information
  * Configuration requires an organization’s SMTP server name and authentication credentials (if applicable)
  * Encryption Options can be configured
* [Reporting](Reporting "Reporting")
  * Required for report publishing
  * Configure settings for publishing reports outside of the Access Analyzer Console (e.g. distribution via email, posting to an internal share, or posting to the Report Index)
  * Use information to configure accessing published reports via the Web Console
* [Schedule](Schedule "Schedule")
  * Optional configuration during the initial launch if Windows authentication is used with the Storage Profile
  * Required in order to schedule host inventory, job, analysis task, and action task execution
  * Provide credentials used against the Access Analyzer Console server to execute scheduled jobs with the Windows Task Scheduler
  * Creating a Schedule Service Account requires credentials on the Access Analyzer Console server
  * Multiple Schedule Service Accounts can be configured
* [Sensitive Data](SensitiveData/Overview "Sensitive Data")
  * Flag locations which are known to contain false positive criteria matches to be filtered out of Sensitive Data Discovery reports
* [ServiceNow](ServiceNow "ServiceNow")
  * Required for integration between Access Analyzer and ServiceNow®
  * Configure the ServiceNow Action Module authentication credentials
  * Configuration requires an organization’s ServiceNow instance name and authentication credentials
* [Storage](Storage/Overview "Storage")
  * Required configuration during the initial launch
  * Create profiles for storing output data from queries
  * Creating a Storage Profiles requires Microsoft® SQL® Server information

See the [Getting Started](../../GettingStarted#GettingStartedWithStealthAUDIT "Getting Started") topic for additional information.