---
sidebar_position: 5094
title: 1.Organizations Job Group
---

# 1.Organizations Job Group

The 1.Organizations job group analyzes and reports on the AWS Organization including password policies and accounts within the organization.

![1.Organizations Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/AWS/Organizations/JobsTree.png "1.Organizations Job Group in the Jobs Tree")

The 1.Organizations job jroup is comprised of:

* [AWS\_Accounts Job](AWS_Accounts "AWS_Accounts Job") – Provides detailed information about the accounts that exist in each AWS Organization. This job also determines the AWS Master Account for each Organization. The AWS Master Account can be set manually by adding a line for each Organization in the temporary table #IdentitySourceAccount in the analysis task parameters for this job.
* [AWS\_MemberAccountUsers Job](AWS_MemberAccountUsers "AWS_MemberAccountUsers Job") – Highlights users that are not located in the primary AWS Identity Source, which is generally the Master AWS Account for the Organization