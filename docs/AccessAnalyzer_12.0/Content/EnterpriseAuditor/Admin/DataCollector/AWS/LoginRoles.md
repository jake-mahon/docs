---
sidebar_position: 6166
title: 'AWS: Login Roles'
---

# AWS: Login Roles

The Login Roles page is where the previously created AWS Roles are added. It is a wizard page for the categories of:

* Collect Org data
* Collect IAM data
* Collect S3

![AWS Query Login Roles](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/AWS/LoginRoles.png "AWS Query Login Roles")

Add the login roles that will allow Access Analyzer to scan the AWS accounts. See the [Configure AWS for Scans](../../../Requirements/Target/Config/AWS "Configure AWS for Scans") topic for additional information. The page has the following options:

* Import From File – Browse to the location of a CSV file from which to import the roles
* Role Name – Enter the name of the role
* Add – Add the role from the Role Name textbox to the list
* Remove – Remove the selected role from the list
* Clear – Remove all roles from the list
* Max Session Duration (hours) – Specify the maximum time the account can be logged in for. This value should not exceed the SessionDuration configured for the role in AWS. The default value is 1 and the maximum value is 12.