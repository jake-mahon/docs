---
sidebar_position: 4974
title: Box Solution
---

# Box Solution

The Box solution set contains jobs to provide visibility into Box access rights, policies, configurations, activities, and more, ensuring you never lose sight or control of your critical assets residing in Box.

Supported Platforms

* Box for Business

Requirements, Permissions, and Ports

See the [Target Box Requirements, Permissions, and Ports](../../Requirements/Target/Box "Target Box Requirements, Permissions, and Ports") topic for additional information.

Location

The Box Solution requires a special Access Analyzer license. It can be installed from the Instant Job Wizard. Once it has been installed into the Jobs tree, navigate to the solution: **Jobs** > **Box**.

![Box Solution in the Jobs Tree](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Box/JobsTree.png "Box Solution in the Jobs Tree")

The 0.Collection Job Group collects the data. The other job groups run analysis on the collected data and generate reports.

## Jobs

The Box solution contains jobs to highlight access, analyze content, and expand group membership in an organization's Box environment.

![Box Solution Overview page](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Box/OverviewPage.png "Box Solution Overview page")

The Box Solution has the following job groups and jobs:

* [0.Collection Job Group](Collection/Overview "0.Collection Job Group") – Collects the data which will be further analyzed in order to provide details on Box access rights, policies, configurations, activities, and content
* [1.Activity Job Group](Activity/Overview "1.Activity Job Group") – Identifies long term trends of activity providing insight into user activity, usage statistics, and suspicious behavior by analyzing enterprise events within the Box environment
* [2.Content Job Group](Content/Overview "2.Content Job Group") – Analyzes and summarizes the content of the Box environment, highlighting users with the most content as well as what type of content exists
* [Box\_Access Job](Box_Access "Box_Access Job") – Analyzes access granted to users and groups in an organization's Box environment in order to report on effective access rights, file-level permissions, and inactive access rights that can be revoked
* [Box\_GroupMembership Job](Box_GroupMembership "Box_GroupMembership Job") – Expands group membership in an organization's Box environment