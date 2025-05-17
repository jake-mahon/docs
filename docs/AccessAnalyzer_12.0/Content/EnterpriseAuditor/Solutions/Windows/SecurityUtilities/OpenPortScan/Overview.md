---
sidebar_position: 5079
title: OpenPortScan Job Group
---

# OpenPortScan Job Group

The OpenPortScan job group reveals all open ports along with the associated executable on the targeted systems leveraging the jobs within this group. This is accomplished through remotely executing a netstat command on the target hosts and collecting the results for reporting.

![OpenPortScan Job Group in the Jobs Tree](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Windows/SecurityUtilities/OpenPortScanJobsTree.png "OpenPortScan Job Group in the Jobs Tree")

*Remember,* both jobs need to be assigned the same host list under the Host List Assignments node in the OpenPortScan job group’s settings.

The jobs in the OpenPortScan job group are:

* [RemoteOpenPort Job](RemoteOpenPort "RemoteOpenPort Job") – This job remotely executes `netstat -a -b -n` command to gather information about the available port on the targeted hosts
* [RetrieveNetstat Job](RetrieveNetstat "RetrieveNetstat Job") – This job reveals all open ports along with the associated executable on  targeted systems