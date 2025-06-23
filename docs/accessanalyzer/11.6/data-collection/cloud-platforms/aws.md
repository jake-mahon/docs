---
title: aws
sidebar_label: aws
description: Documentation for aws functionality in Access Analyzer including configuration and usage information.
---

# AWS: Category

Use the Category page to select the type of scan for the targeted AWS instance or maintenance task
to perform.

![AWS Category page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/category.webp)

The options on the Category page are:

- AWS scan jobs

  - Collect Org data – Collects all organization info from an AWS instance
  - Collect IAM data – Collects all users, groups, and roles from an AWS instance
  - Collect S3 – Collects S3 data
  - Collect SDD data – Scans S3 objects for potentially sensitive data

- Maintenance

  - Drop AWS DC Tables – Removes AWS data collector data and tables from the Enterprise Auditor
    database. See the
    [Drop AWS Tables](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/aws.md)
    topic for additional information.

# AWS: Criteria

The Criteria (Select DLP criteria for this scan) page is where criteria to be used for discovering
sensitive data during a scan is configured. It is a wizard page for the category of Collect SDD
Data.

This page requires the Sensitive Data Discovery Add-On to be been installed on the Enterprise
Auditor Console to define the criteria and enable the Criteria Editor. See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/install.md)
topic for additional information.

![AWS Query SDD Criteria](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/ewsmailbox/criteria.webp)

Default criteria is set at the **Global Settings** > **Sensitive Data** node. Choose between the
**Use Global Criteria** Selection and the **Use the Following Selected Criteria** radio buttons.

For custom criteria, select the checkbox for the criteria to be used to search for sensitive data.
There are **Select All** and **Clear All** buttons that can be used.

The table contains the following types of criteria:

- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

**NOTE:** Until the Sensitive Data Discovery Add-On is installed, only the headers for the System
Criteria and User Criteria nodes are visible in the table.

User-defined criteria is created in the Criteria Editor, accessed through the **Global Settings** >
**Sensitive Data** node. See the
[Sensitive Data Discovery Add-On](/docs/accessanalyzer/11.6/accessanalyzer/sensitivedatadiscovery/overview.md)
topic for additional information.

# Drop AWS Tables

Sometimes when troubleshooting an AWS issue, it becomes necessary to clear the AWS DC data and
tables from the Enterprise Auditor database. Follow the steps to configure a job to remove tables.

**Step 1 –** Create a new job.

**Step 2 –** Configure the target host as **Local host**.

**Step 3 –** Assign a query using the **AWS** Data Collector.

![Drop AWS DC Tables option on Amazon Web Services Data Collector Wizard Category page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/fsaa/droptables.webp)

**Step 4 –** In the Amazon Web Services Data Collector Wizard on the Category page, select the
**Drop AWS DC Tables** category task. Click **Next**.

**Step 5 –** Click **Next** and then click **Finish** to close the Amazon Web Services Data
Collector Wizard. Click **OK** to close the Query Properties window.

**CAUTION:** When the job is run, all of the AWS DC data and tables are removed from the database.

The job is now configured and ready to run.

**NOTE:** An AWS connection profile is not required for the Drop AWS DC Tables task.

# AWS: Filter S3 Objects

The Filter S3 Objects page provides the options to filter which objects stored in S3 should be
queried for permissions and sensitive data. It is a wizard page for the categories of:

- Collect S3
- Collect SDD Data

![Filter S3 Objects page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/aws/filters3objects.webp)

Use the buttons to customize the filter list:

- Add – Opens the Select a bucket window. See the [Add Filter](#add-filter) topic for additional
  information.
- Add Custom Filter – Create a custom filter. See the [Add Custom Filter](#add-custom-filter) topic
  for additional information.
- Remove – Remove a filter from the list

## Add Filter

The Select a Bucket window shows the available buckets in the AWS instance.

![Select a bucket window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/aws/selectabucket.webp)

Select from the available buckets and click **OK** to add them to the Filter S3 Objects page.

## Add Custom Filter

The Add Custom Filter window allows a custom filter to be configured.

![Add Custom Filter window](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/customfilter.webp)

Configure a custom filter using the following format:

- The characters `*` and `?` are wildcards
  - `*` – matches any number of characters
  - `?` – matches a single character
- ARN should follow the format: `arn:aws:s3:::<bucket_name>/<key_name>`

Click **Save** to add the custom filter to the Filter S3 Objects page.

# AWS: Login Roles

The Login Roles page is where the previously created AWS Roles are added. It is a wizard page for
the categories of:

- Collect Org data
- Collect IAM data
- Collect S3

![AWS Query Login Roles](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/aws/loginroles.webp)

Add the login roles that will allow Enterprise Auditor to scan the AWS accounts. See the
[Configure AWS for Scans](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for additional information. The page has the following options:

- Import From File – Browse to the location of a CSV file from which to import the roles
- Role Name – Enter the name of the role
- Add – Add the role from the Role Name textbox to the list
- Remove – Remove the selected role from the list
- Clear – Remove all roles from the list
- Max Session Duration (hours) – Specify the maximum time the account can be logged in for. This
  value should not exceed the SessionDuration configured for the role in AWS. The default value is 1
  and the maximum value is 12.

# AWS Data Collector

The AWS Data Collector collects IAM users, groups, roles, and policies, as well as S3 permissions,
content, and sensitive data from the target Amazon Web Services (AWS) accounts. The AWS Data
Collector has been preconfigured for the AWS Solution. Both this data collector and the solution are
available with a special Enterprise Auditor license. See the
[AWS Solution](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
topic for additional information.

Protocols

- 443

Ports

- 443

Permissions

- To collect details about the AWS Organization, the following permission is required:

  - organizations:DescribeOrganization

- To collect details regarding IAM, the following permissions are required:

  - iam:GenerateCredentialReport
  - iam:GenerateServiceLastAccessedDetails
  - iam:Get\*
  - iam:List\*
  - iam:Simulate\*
  - sts:GetAccessKeyInfo

- To collect details related to S3 buckets and objects, the following permissions are required:

  - s3:Describe\*
  - s3:Get\*
  - s3:HeadBucket
  - s3:List\*

Sensitive Data Discovery Considerations

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

## AWS Query Configuration

The AWS Data Collector is configured through the Amazon Web Services Data Collector Wizard. The
wizard contains the following pages, which change based up on the query category selected:

- [AWS: Category](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/aws.md)
- [AWS: Login Roles](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/aws.md)
- [AWS: Filter S3 Objects](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/aws.md)
- [AWS: Sensitive Data Settings](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/aws.md)
- [AWS: Criteria ](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/aws.md)
- [AWS: Results](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/aws.md)
- [AWS: Summary](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/aws.md)

# AWS: Results

The Results page is where properties that will be gathered are selected. It is a wizard page for all
of the categories.

![Results page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/results.webp)

Properties can be checked individually or the **Select All** or **Clear All** buttons can be used.
All checked properties are gathered. Available properties vary based on the category selected.

# AWS: Sensitive Data Settings

The Sensitive Data Settings page is where sensitive data discovery settings are configured. It is a
wizard page for the category of Collect SDD Data.

![Sensitive Data Settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/application/upgrade/sensitivedata.webp)

Configure the following options:

- Don’t process files larger than: [number] MB – Limits the files to be scanned for sensitive
  content to only files smaller than the specified size
- Include offline files (this may significantly increase scan times) – Includes offline files in the
  scan
- Perform Optical Character Recognition for image files – Enables the data collector to scan for
  sensitive data within digital images of physical documents

  **NOTE:** The OCR option is intended to work for clear scanned physical documents or documents
  directly converted to images, with standard fonts. It will not work for scanning photos of
  documents and may not be able to recognize text on images of credit cards, driver's licenses, or
  other identity cards.

- Store discovered sensitive data – Stores discovered sensitive data in the database
- Limit stored matches per criteria to [number] – Limits database storage of matches per criteria
  for discovered sensitive data
- Use the radio buttons to select the File types to scan:

  - Scan all file types – Scans everything in a given environment
  - Scan custom file types – Select the checkboxes from the list of file and document types that
    are included in a sensitive data scan. The table contains the following categories and their
    sub-options:

    - Compressed Archive files
    - Documents
    - Email
    - Image files
    - Presentations
    - Spreadsheets
    - Text/Markup files

- Perform differential scan of – Enables you to choose whether to employ incremental scanning:

  - Files modified since last scan – Scans only files modified since the last scan
  - Files modified since [date] – Only scans files modified after the specified date
  - Files modified since the last [number] days – Scans files modified within the specified number
    of days

- Number of SDD scan processes [number] – Increases the number of SDD scanner processes that spawn
  as part of a scan, increasing parallel scanning. The value should not exceed 2x the number of CPU
  threads available.

_Remember,_ the sensitive data discovery options require the Sensitive Data Discovery Add-On to be
been installed on the Enterprise Auditor Console.

# AWS: Summary

The Summary page displays a summary of the configured query. It is a wizard page for all categories.

![summary](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/adinventory/summary.webp)

Click **Finish** to save configuration changes. If no changes were made, it is a best practice to
click **Cancel** to close the Amazon Web Services Data Collector Wizard to ensure that no accidental
clicks are saved.
