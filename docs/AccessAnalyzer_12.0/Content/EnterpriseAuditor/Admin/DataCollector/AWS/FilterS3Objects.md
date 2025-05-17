---
sidebar_position: 6167
title: 'AWS: Filter S3 Objects'
---

# AWS: Filter S3 Objects

The Filter S3 Objects page provides the options to filter which objects stored in S3 should be queried for permissions and sensitive data. It is a wizard page for the categories of:

* Collect S3
* Collect SDD Data

![Filter S3 Objects page](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/AWS/FilterS3Objects.png "Filter S3 Objects page")

Use the buttons to customize the filter list:

* Add – Opens the Select a bucket window. See the [Add Filter](#Add "Add Filter") topic for additional information.
* Add Custom Filter – Create a custom filter. See the [Add Custom Filter](#Add2 "Add Custom Filter") topic for additional information.
* Remove – Remove a filter from the list

## Add Filter

The Select a Bucket window shows the available buckets in the AWS instance.

![Select a bucket window](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/AWS/SelectABucket.png "Select a bucket window")

Select from the available buckets and click **OK** to add them to the Filter S3 Objects page.

## Add Custom Filter

The Add Custom Filter window allows a custom filter to be configured.

![Add Custom Filter window](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/DataCollector/AWS/CustomFilter.png "Add Custom Filter window")

Configure a custom filter using the following format:

* The characters `*` and `?` are wildcards
  * `*` – matches any number of characters
  * `?` – matches a single character
* ARN should follow the format: `arn:aws:s3:::/`

Click **Save** to add the custom filter to the Filter S3 Objects page.