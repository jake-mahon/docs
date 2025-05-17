---
sidebar_position: 5196
title: 3.Sharing Job Group
---

# 3.Sharing Job Group

The 3.Sharing job group highlights potentially insecure share configurations on Unix hosts.

![3.Sharing Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Unix/Sharing/JobsTree.png "3.Sharing Job Group in the Jobs Tree")

The jobs in the 3.Sharing job group are:

* [0.Collection Job Group](Collection/Overview "0.Collection Job Group") - Collects NFS and Samba configuration information which will be further analyzed to identify and categorize risk within audited Unix and Linux environments
* [UX\_NFS Job](UX_NFS "UX_NFS Job") – This job identifies potentially insecure NFS share options which are categorized by their risk level. Separate lists of options are checked based on target operating system.
* [UX\_Samba Job](UX_Samba "UX_Samba Job") – This job identifies potentially insecure Samba share configurations which are categorized by their risk level