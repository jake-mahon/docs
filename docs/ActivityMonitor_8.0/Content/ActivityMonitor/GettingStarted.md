---
sidebar_position: 2576
title: Getting Started
---

# Getting Started

Once Netwrix Activity Monitor is installed, the following workflow enables organizations to quickly and easily get started with activity monitoring.

## Requirements

The Activity Monitor console needs to be installed on a server. After that agents are deployed to the target environment and configured to monitor activity. It is necessary to prepare the target environment and configure the credentials used by the agents. Each supported environment has different requirements. See the following topics for additional information:

* Console server [Requirements](Requirements/Overview "Requirements")
* [Activity Agent Server Requirements](Requirements/ActivityAgent "Activity Agent Server Requirements") for monitoring:

  * Exchange Online
  * Microsoft Entra ID
  * NAS devices
  * SharePoint farms
  * SharePoint Online
  * SQL Servers
  * Windows File servers
* [AD Agent Server Requirements](Requirements/ADAgent "AD Agent Server Requirements") for monitoring Active Directory
* [Linux Agent Server Requirements](Requirements/LinuxAgent "Linux Agent Server Requirements") for monitoring Linux file servers

## Install & Deploy Agents

Once the prerequisites are accomplished, you are ready to install the application and deploy agents. See the following topics for additional information:

* [Install Application](Install/Application "Install Application")
* [Agent Information](Install/Agents "Agent Information")
* [Import License Key](Install/ImportLicenseKey "Import License Key")

## Configure Monitoring

After the agents have been deployed, you can configure the monitoring of the target environment. For Windows File Servers, this can be done at the same time as the agent is deployed, but for all other target environments it is done after the agent is deployed. You will configure what will be monitored as well as where the collected data will go (outputs). See the following topics for additional information:

* [Monitored Domains Tab](Admin/MonitoredDomains/Overview "Monitored Domains Tab") for Active Directory monitoring
* [Monitored Hosts Tab](Admin/MonitoredHosts/Overview "Monitored Hosts Tab") for all other target environments.

## Search Activity Event Data

You can query the activity logs created by the activity agents from within the console. Using the search feature, set filters for the query to view monitored events. See the [Search Feature](Admin/Search/Overview "Search Features") topic for additional information.