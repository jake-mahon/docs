---
sidebar_position: 5110
title: 6.S3 Permissions Job Group
---

# 6.S3 Permissions Job Group

The 6.S3 Permissions job group provides details on permissions assigned to AWS S3 buckets, highlighting specific threats like broken inheritance and open buckets.

![6.S3 Permissions Job Group in the Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/AWS/S3Permissions/JobsTree.png "6.S3 Permissions Job Group in the Jobs Tree")

The 6.S3 Permissions job group is comprised of:

* [AWS\_BrokenInheritance Job](AWS_BrokenInheritance "AWS_BrokenInheritance Job") – Highlights permissions in an AWS S3 bucket that differ from those assigned at the bucket level, those assigned directly on objects within the bucket
* [AWS\_EffectivePermissions Job](AWS_EffectivePermissions "AWS_EffectivePermissions Job") – Identifies and summarizes effective permissions on AWS S3 buckets and bucket objects
* [AWS\_OpenBuckets Job](AWS_OpenBuckets "AWS_OpenBuckets Job") – Identifies buckets that have permissions assigned to everyone at the top level of the AWS S3 bucket