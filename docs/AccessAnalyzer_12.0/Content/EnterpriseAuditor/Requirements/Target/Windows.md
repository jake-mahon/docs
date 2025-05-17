---
sidebar_position: 4919
title: Target Windows Server and Desktop Requirements, Permissions, and Ports
---

# Target Windows Server and Desktop Requirements, Permissions, and Ports

The Access Analyzer for Windows Solution is compatible with the following Microsoft Windows versions as targets:

* Windows 7 and higher
* Windows Server 2016 and later

Server and Desktop Requirements

The following are requirements for the servers and desktops to be scanned:

* WINRM Service installed

Data Collectors

This solution employs the following data collector to scan the target environment:

* [GroupPolicy Data Collector](../../Admin/DataCollector/GroupPolicy/Overview "GroupPolicy Data Collector")
* [PowerShell Data Collector](../../Admin/DataCollector/PowerShell/Overview "PowerShell Data Collector")
* [Registry Data Collector](../../Admin/DataCollector/Registry "Registry Data Collector")
* [Script Data Collector](../../Admin/DataCollector/Script/Overview "Script Data Collector")
* [Services Data Collector](../../Admin/DataCollector/Services "Services Data Collector")
* [SMARTLog Data Collector](../../Admin/DataCollector/SMARTLog/Overview "SMARTLog Data Collector")
* [SystemInfo Data Collector](../../Admin/DataCollector/SystemInfo/Overview "SystemInfo Data Collector")
* [TextSearch Data Collector](../../Admin/DataCollector/TextSearch/Overview "TextSearch Data Collector")
* [UsersGroups Data Collector](../../Admin/DataCollector/UsersGroups/Overview "UsersGroups Data Collector")
* [WMICollector Data Collector](../../Admin/DataCollector/WMICollector/Overview "WMICollector Data Collector")

## Permissions

* Member of the local Administrators group
* If target host is a domain controller, member of the Domain Administrator group in the target domain

## Ports

The following firewall ports are needed:

For GroupPolicy Data Collector

* TCP 389
* TCP 135-139
* Randomly allocated high TCP ports

For PowerShell Data Collector

* Randomly allocated high TCP ports

For Registry Data Collector

* TCP 135-139
* Randomly allocated high TCP ports

For Script Data Collector

* Randomly allocated high TCP ports

For Services Data Collector

* TCP 135-139
* Randomly allocated high TCP ports

For SMARTLog Data Collector

* TCP 135
* TCP 445
* Randomly allocated high TCP ports

For SystemInfo Data Collector

* TCP 135-139
* Randomly allocated high TCP ports

For TextSearch Data Collector

* TCP 135-139
* Randomly allocated high TCP ports

For UsersGroups Data Collector

* TCP 135-139
* Randomly allocated high TCP ports
* 445

For WMICollector Data Collector

* TCP 135-139
* Randomly allocated high TCP ports