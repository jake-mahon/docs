---
sidebar_position: 5121
title: 2.Users Job Group
---

# 2.Users Job Group

The 2.Users job group provides details on AWS IAM user MFA status, access key usage, and staleness.

![2.Users Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/AWS/Users/JobsTree.png "2.Users Job Group in the Jobs Tree")

The 2.Users job group is comprised of:

* [AWS\_AccessKeys Job](AWS_AccessKeys "AWS_AccessKeys Job") – Provides details on the last time an access key was rotated or used, highlighting keys that were last rotated over a year ago
* [AWS\_MFAStatus Job](AWS_MFAStatus "AWS_MFAStatus Job") – Provides details on each user's MFA status, highlighting users that have it disabled
* [AWS\_RootAccounts Job](AWS_RootAccounts "AWS_RootAccounts Job") – Provides details on AWS root accounts and how they conform to recommended security practices
* [AWS\_StaleUsers Job](AWS_StaleUsers "AWS_StaleUsers Job") – Provides details on the last time each user logged in or their access key was used, highlighting those over 60 days or that have never logged in