---
sidebar_position: 4917
title: Target Box Requirements, Permissions, and Ports
---

# Target Box Requirements, Permissions, and Ports

The Access Analyzer for Box scans:

* Box for Business

Box Requirements

The following are requirements from the target environment:

* Enterprise\_ID of the target Box environment

Data Collectors

This solution employs the following data collector to scan the target environment:

* [ADInventory Data Collector](../../Admin/DataCollector/ADInventory/Overview "ADInventory Data Collector")
* [Box Data Collector](../../Admin/DataCollector/Box/Overview "Box Data Collector")

## Permissions

For .Active Directory Inventory Prerequisite

* Read access to directory tree
* List Contents & Read Property on the Deleted Objects Container

  **NOTE:** See the Microsoft [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx "Opens the Searching for Deleted Objects article in a new window") article and the Microsoft [Dsacls](https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx "Opens the Dsacls article in a new window") article for additional information.

For Box Data Collection

Box scans require the Enterprise Admin or Co-Admin account credentials to generate an authorization code. The following can be used as a least privilege model:

* Enterprise Admin account
* Co-Admin account with the permission to **Run new reports and access existing reports** enabled

  * See the Box [Co-Admin Permissions Required to Run Reports](https://support.box.com/hc/en-us/articles/15518640907283-Co-Admin-Permissions-Required-to-Run-Reports "Co-Admin Permissions Required to Run Reports") article for details on enabling this permission

**NOTE:** Scans run with Co-Admin account credentials will complete. However, the data returned from the scan might not include content owned by the Enterprise Admin account.

See the [Recommended Configurations for the Box Solution](../../Solutions/Box/Recommended "Recommended Configurations for the Box Solution") topic for additional information.

## Ports

The following firewall ports are needed:

For ADInventory Data Collector

* TCP 389
* TCP 135-139
* Randomly allocated high TCP ports

For Box Data Collector

* TCP 80
* TCP 443