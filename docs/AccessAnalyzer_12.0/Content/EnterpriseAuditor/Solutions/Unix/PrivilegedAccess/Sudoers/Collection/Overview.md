---
sidebar_position: 5202
title: 0.Collection Job Group
---

# 0.Collection Job Group

The 0.Collection job group collects details on all rights granted via sudoers within audited Unix and Linux Environments.

![0.Collection Job Group in the Jobs Tree](../../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Unix/PrivilegedAccess/CollectionJobsTree.png "0.Collection Job Group in the Jobs Tree")

The jobs in the 0.Collection job group are:

* [UX\_MakeDirectory Job](UX_MakeDirectory "UX_MakeDirectory Job") – This job creates a temporary Access Analyzer directory on target Unix and Linux environments to be used by the UX\_ParseSudoers job
* [UX\_ParseSudeors Job](UX_ParseSudeors "UX_ParseSudeors Job") – This job parses all rights granted via sudoers in the audited environment