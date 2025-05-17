---
sidebar_position: 5062
title: Security Utilities Job Group
---

# Security Utilities Job Group

The Security Utilities job group is designed to reveal all open ports along with the associated executable on the targeted systems. The job remotely executes a netstat command on the target hosts and collects the results for reporting.

![Security Utilities Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/SecurityUtilities/JobsTree.png "Security Utilities Job Group in the Jobs Tree")

The jobs and job groups in the Security Utilities job group are:

* [OpenPortScan Job Group](OpenPortScan/Overview "OpenPortScan Job Group") – Reveals all open ports along with the associated executable on the targeted systems leveraging the jobs within this group. This is accomplished through remotely executing a netstat command on the target hosts and collecting the results for reporting.
* [SG\_PowerShellCommands Job](SG_PowerShellCommands "SG_PowerShellCommands Job") – This job highlights instances where suspicious PowerShell commands have been found in a host’s PowerShell log