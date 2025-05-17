---
sidebar_position: 4921
title: Target Oracle Requirements, Permissions, and Ports
---

# Target Oracle Requirements, Permissions, and Ports

The Access Analyzer for Databases Solution provides the ability to audit and monitor Oracle database environments to collect permissions, sensitive data, and activity events. It scans:

* Oracle Database 12c
* Oracle Database 18c
* Oracle Database 19c

Data Collectors

This solution employs the following data collector to scan the target environment:

* [ADInventory Data Collector](../../Admin/DataCollector/ADInventory/Overview "ADInventory Data Collector")
* [PowerShell Data Collector](../../Admin/DataCollector/PowerShell/Overview "PowerShell Data Collector")
* [SQL Data Collector](../../Admin/DataCollector/SQL/Overview "SQL Data Collector")

## Permissions

For .Active Directory Inventory Prerequisite

* Read access to directory tree
* List Contents & Read Property on the Deleted Objects Container

  **NOTE:** See the Microsoft [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx "Opens the Searching for Deleted Objects article in a new window") article and the Microsoft [Dsacls](https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx "Opens the Dsacls article in a new window") article for additional information.

For PowerShell Data Collection

* Member of the Local Administrators group

For Oracle Data Collection

* User with SYSDBA role
* Local Administrator on the target servers – Only applies to Windows Servers and not on Linux or Unix operating systems

There is a least privilege model for scanning your domain. See the [Oracle Target Least Privilege Model](Config/DatabaseOracle "Oracle Target Least Privilege Model") topic for additional information.

## Ports

The following firewall ports are needed:

For ADInventory Data Collector

* TCP 389
* TCP 135-139
* Randomly allocated high TCP ports

For PowerShell Data Collector

* Randomly allocated high TCP ports

For SQL Data Collector

* Specified by Instances table (default is 1521)