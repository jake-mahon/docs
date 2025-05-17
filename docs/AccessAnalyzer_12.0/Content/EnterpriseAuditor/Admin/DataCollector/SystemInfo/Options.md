---
sidebar_position: 6140
title: "SystemInfo:\_Options"
---

# SystemInfo: Options

The Options page contains options for the Files Shares category. It is a wizard page for the categories of:

* File Shares
* Network Interface (NIC)
* Open File Shares

**NOTE:** This is a legacy feature, as it is more efficient to use the **FileSystemAccess** (FSAA) Data Collector to gather this information.

## File Shares and Open File Shares

For the File Shares and Open File Shares categories:

![System Info Data Collector Wizard Options page for File Shares category](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/SystemInfo/OptionsFileShares.png "System Info Data Collector Wizard Options page for File Shares category")

Select from the following options to control the depth of processing and the amount of information to be returned by the query:

* Include file level permissions

  * Do not collect inherited file permissions

    * Return All Folders
* Enumerate subfolders within shared folders

  * Limit returned subfolders depth to – Specify the number of levels
* Size units for corresponding properties – Select the desired size unit:

  * Bytes
  * KBytes
  * Mbytes
  * GBytes

## Network Interface (NIC)

For the Network Interface (NIC) category:

![System Info Data Collector Wizard Options page for NIC category](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/SystemInfo/OptionsNIC.png "System Info Data Collector Wizard Options page for NIC category")

The configurable option is:

* Show primary IP address only – Select this checkbox to return data for the primary network interface only