---
sidebar_position: 5115
title: 5.Policies Job Group
---

# 5.Policies Job Group

The 5.Policies job group provides details on AWS IAM policies including the various types of policies, the permissions they grant, and where they are applied in the AWS organization.

![5.Policies Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/AWS/Policies/JobsTree.png "5.Policies Job Group in the Jobs Tree")

The 5.Policies job group is comprised of:

* [AWS\_CustomManagedPolicies Job](AWS_CustomManagedPolicies "AWS_CustomManagedPolicies Job") – Provides details on customer managed policies created in the AWS Organization
* [AWS\_InlinePolicies Job](AWS_InlinePolicies "AWS_InlinePolicies Job") – Provides details on customer managed policies that are directly assigned to a user or group
* [AWS\_ManagedPolicies Job](AWS_ManagedPolicies "AWS_ManagedPolicies Job") – Provides details on policies managed by Amazon in the AWS Organization
* [AWS\_SensitivePolicies Job](AWS_SensitivePolicies "AWS_SensitivePolicies Job") – Provides details on users, groups, and roles as well as the policies granting them sensitive permissions
* [AWS\_UnusedManagedPolicies Job](AWS_UnusedManagedPolicies "AWS_UnusedManagedPolicies Job") – Provides details on customer managed policies that exist in the AWS Organization. Optionally, AWS managed policies can be included by changing the @IncludeAWSManaged parameter on the analysis task.
* [AWS\_UserPolicies Job](AWS_UserPolicies "AWS_UserPolicies Job") – Provides details outlining user policy assignment. This includes where the policy is assigned, directly or at a group level, and if the policy assignment has been duplicated.