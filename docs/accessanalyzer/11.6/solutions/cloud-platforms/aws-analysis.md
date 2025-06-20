# 1.AWS_OrgScan Job

The 1.AWS_OrgScan job collects details about the AWS Organization including password policies and
accounts within the organization.

## Queries for the 1.AWS_OrgScan Job

The Org Scan query uses the AWS Data Collector to target all AWS instances and has been
preconfigured to use the Collect Org Data category.

![Queries for the 1.AWS_OrgScan Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/collection/orgscanqueries.webp)

The 1.AWS_OrgScan job has the following configurable query:

- Org Scan – Collects AWS Organization level information

### Configure the Org Scan Query

The Org Scan query in the 1.AWS_OrgScan job has been preconfigured to run with the default settings
with the category of Collect Org Data. Follow the steps to set any desired customizations.

**Step 1 –** Navigate to the **AWS** > **0.Collection** > **1.AWS_OrgScan** > **Configure** node and
select the **Queries** node.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window
opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The Amazon Web Services Data
Collector Wizard opens.

![AWS Data Collector Login Roles wizard page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/aws/loginroles.webp)

**Step 4 –** On the Login Roles page, add the created AWS Roles:

- Enter the Role in the Role Name field and click **Add**
- Alternatively, import multiple Roles from a CSV file
- See the
  [Configure AWS for Scans](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
  topic for additional information

**Step 5 –** On the Summary page, click **Finish** to save any modifications or click **Cancel** if
no changes were made. Then click **OK** to close the Query Properties window.

If changes were saved, the 1.AWS_OrgScans Job has now been customized.

# 2.AWS_S3Scan Job

The 2.AWS_S3Scan job collects details about the AWS S3 buckets including details about the objects
in those buckets.

## Queries for the 2.AWS_S3Scan Job

The S3 Scan query uses the AWS Data Collector to target all AWS instances and has been preconfigured
to use the Collect S3 category.

![Query Selection page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/collection/s3scanqueries.webp)

The 2.AWS_S3Scan job has the following configurable query:

- S3 Scan – Collects information about the AWS S3 buckets and objects

### Configure the S3 Scan Query

The S3 Scan query in the 2.AWS_S3 Scan job has been preconfigured to run with the default settings
with the category of Collect S3. Follow the steps to set any desired customizations.

**Step 1 –** Navigate to the **AWS** > **0.Collection** > **2.AWS_S3Scan** > **Configure** node and
select the **Queries** node.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window
opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The Amazon Web Services Data
Collector Wizard opens.

![AWS Data Collector Login Roles wizard page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/aws/loginroles.webp)

**Step 4 –** On the Login Roles page, add the created AWS Roles:

- Enter the Role in the Role Name field and click **Add**
- Alternatively, import multiple Roles from a CSV file
- See the
  [Configure AWS for Scans](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
  topic for additional information

![AWS Data Collector Filter S3 Objects wizard page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/aws/filters3objects.webp)

**Step 5 –** On the Filter S3 Objects page, scope the scan to target specific S3 objects:

- Click **Add** to select from AWS Buckets in the target environment
- Alternatively, click **Add Custom Filter** to configure a custom filter as a text string
- See the
  [AWS: Filter S3 Objects](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/aws.md)
  topic for additional information

**Step 6 –** On the Summary page, click **Finish** to save any modifications or click **Cancel** if
no changes were made. Then click **OK** to close the Query Properties window.

If changes were saved, the 2.AWS_S3Scan Job has now been customized.

## Analysis Tasks for the 2.AWS_S3Scan Job

Navigate to the **AWS** > **0.Collection** > **2.AWS_S3Scan** > **Configure** node and select
**Analysis** to view analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the 2.AWS_S3Scan Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/collection/s3scananaylsistasks.webp)

The following analysis task is selected by default:

- AIC AWS S3 Bucket Permissions Import – Imports AWS S3 Bucket permissions into the Access
  Information Center

# 3.AWS_IAMScan Job

The 3.AWS_IAMScan job collects details about users, groups, policies, roles, and other IAM related
identities.

## Queries for the 3.AWS_IAMScan Job

The IAM Scan query uses the AWS Data Collector to target all AWS instances and has been
preconfigured to use the Collect IAM Data category.

![Queries for the 3.AWS_IAMScan Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/collection/iamscanqueries.webp)

The 3.AWS_IAMScan job has the following configurable query:

- IAM Scan – Scans AWS S3 for information on IAM related identities

### Configure the IAM Scan Query

The IAM Scan query in the 3.AWS_IAMScan job has been preconfigured to run with the default settings
with the category of Collect IAM Data. Follow the steps to set any desired customizations.

**Step 1 –** Navigate to the **AWS** > **0.Collection** > **3.AWS_IAMScan** > **Configure** node and
select the **Queries** node.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window
opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The Amazon Web Services Data
Collector Wizard opens.

![AWS Data Collector Login Roles wizard page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/aws/loginroles.webp)

**Step 4 –** On the Login Roles page, add the created AWS Roles:

- Enter the Role in the Role Name field and click **Add**
- Alternatively, import multiple Roles from a CSV file
- See the
  [Configure AWS for Scans](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
  topic for additional information

**Step 5 –** On the Summary page, click **Finish** to save any modifications or click **Cancel** if
no changes were made. Then click **OK** to close the Query Properties window.

If changes were saved, the 3.AWS_IAMScan job has now been customized.

## Analysis Tasks for the 3.AWS_IAM Scan Job

View the analysis tasks by navigating to the **AWS** > **0.Collection** > **3.AWS_IAMScan** >
**Configure** node and selecting **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the 3.AWS_IAM Scan Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/collection/iamscananalysistasks.webp)

The following analysis task is selected by default:

- AWS Views – Creates the AWS Views table

# 4.AWS_S3SDDScan Job

The 4.AWS_S3SDDScan job collects details about S3 objects containing sensitive data.

## Queries for the 4.AWS_S3SDDScan Job

The AWS S3 Sensitive Data Scan query uses the AWS Data Collector to target all AWS instances and has
been preconfigured to use the Collect SDD Data category.

![Queries for the 4.AWS_S3SDDScan Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/collection/s3sddscanqueries.webp)

The 4.AWS_S3SDDScan job has the following configurable query:

- AWS S3 Sensitive Data Scan – Scans AWS objects for sensitive data

### Configure the AWS S3 Sensitive Data Scan Query

The AWS S3 Sensitive Data Scan query in the 4.AWS_S3SDDScan job has been preconfigured to run with
the default settings with the category of Collect SDD Data. Follow the steps to set any desired
customizations.

**Step 1 –** Navigate to the **AWS** > **0.Collection** > **4.AWS_S3SDD Scan** > **Configure** node
and select the **Queries** node.

**Step 2 –** In the Query Selection view, click **Query Properties**. The Query Properties window
opens.

**Step 3 –** Select the **Data Source** tab, and click **Configure**. The Amazon Web Services Data
Collector Wizard opens.

![AWS Data Collector Filter S3 Objects wizard page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/aws/filters3objects.webp)

**Step 4 –** On the Filter S3 Objects page, scope the scan to target specific S3 objects:

- Click **Add** to select from AWS Buckets in the target environment
- Alternatively, click **Add Custom Filter** to configure a custom filter as a text string
- See the
  [AWS: Filter S3 Objects](/docs/accessanalyzer/11.6/data-collection/cloud-platforms/aws.md)
  topic for additional information

![AWS Data Collector Sensitive Data Settings wizard page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/collection/s3sddsensitivedata.webp)

**Step 5 –** On the Sensitive Data Settings page, configure the following options:

- Modify maximum file size to be scanned
- Add scanning offline files
- Modify file types to be scanned
- Enable differential scanning
- Modify the number of SDD scan processes

  **_RECOMMENDED:_** For optimal performance, the total number of scan processes on a scan host
  should be 1 to 2 times the number of CPU threads available.

- Enable Optical Character Recognition (OCR) scans

  **NOTE:** The OCR option is intended to work for clear scanned physical documents or documents
  directly converted to images, with standard fonts. It will not work for scanning photos of
  documents and may not be able to recognize text on images of credit cards, driver's licenses, or
  other identity cards.

![AWS Data Collector Select DLP criteria for this scan wizard page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/datacollector/ewsmailbox/criteria.webp)

**Step 6 –** On the Criteria page, add or remove criteria as desired:

- (Optional) Create custom criteria on the global **Settings** > **Sensitive Data** Node
- See
  the[Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/security-and-compliance/sensitive-data-discovery/criteria-editor.md)
  topic for additional information and instructions

**NOTE:** By default, discovered sensitive data strings are stored in the Enterprise Auditor
database.

**Step 7 –** On the Summary page, click **Finish** to save any modifications or click **Cancel** if
no changes were made. Then click **OK** to close the Query Properties window.

If changes were saved, the 4.AWS_S3SDDScan Job has now been customized.

## Analysis Tasks for the 4.AWS_S3SDD Scan Job

View the analysis tasks by navigating to the **AWS** > **0.Collection** > **4.AWS_S3SDDScan** >
**Configure** node and selecting **Analysis**.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the 4.AWS_S3SDD Scan Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/collection/s3sddscananaylsistasks.webp)

The following analysis tasks are selected by default:

- AWS Sensitive Data Latest Match Counts View – Creates a view with the most recent scans of each
  AWS file
- Match Hits View – Shows the AWS SDD match hits
- AIC AWS S3 Bucket SDD Import – Imports AWS S3 Bucket objects with sensitive data into the Access
  Information Center

# 0.Collection Job Group

The 0.Collection job group scans and collects details on IAM and S3 buckets within an
AWS organization.

![0.Collection Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 0.Collection Job Group is comprised of:

- [1.AWS_OrgScan Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Collects details about the AWS Organization including password policies and accounts within the
  organization
- [2.AWS_S3Scan Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Collects details about the AWS S3 buckets including details about the objects in those buckets
- [3.AWS_IAMScan Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Collects details about users, groups, policies, roles and other IAM related identities
- [4.AWS_S3SDDScan Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Collects details about S3 objects containing sensitive data

# AWS_GroupMembers Job

The AWS_GroupMembers job group provides details on AWS IAM group membership, orphaned groups (those
with no policy assigned to them), sensitive security group membership, and stale groups.

## Analysis Tasks for the AWS_GroupMembers Job

Navigate to the **AWS** > **3.Groups** > **AWS_GroupMembers** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_GroupMembers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/groups/groupmembersanalysis.webp)

The following analysis tasks are selected by default:

- Group Membership – Identifies groups and their members. Creates the AWS_GroupMember_Details table
  accessible under the job’s Results node.
- Group Member Summary – Summarizes group member counts and number of policies applied to the
  groups. Creates the AWS_GroupMember_Summary table accessible under the job’s Results node.

## Report for the AWS_GroupMembers Job

In addition to the tables and views created by the analysis task, the AWS_GroupMembers job produces
the following preconfigured report:

| Report        | Description                                                                           | Default Tags | Report Element                                                                                                                                                                                                |
| ------------- | ------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Members | This report identifies group members and summarizes policies applied to those groups. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays a summary of group members - Stacked Bar Chart – Displays a summary of group policies - Table – Provides details on groups |

# AWS_NoPolicyGroups Job

The AWS_NoPolicyGroups job provides details on groups that have no policies assigned to them.

## Analysis Tasks for the AWS_NoPolicyGroups Job

Navigate to the **AWS** > **3.Groups** > **AWS_NoPolicyGroups** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_NoPolicyGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/groups/nopolicygroupsanalysis.webp)

The following analysis tasks are selected by default:

- No Policy Groups – Identifies groups that have no policies applied. Creates the
  AWS_NoPolicyGroup_Details table accessible under the job’s Results node.
- No Policy Groups Summary – Summarizes no policy groups across AWS Organizations. Creates the
  AWS_NoPolicyGroup_Summary table accessible under the job’s Results node.

## Report for the AWS_NoPolicyGroups Job

In addition to the tables and views created by the analysis task, the AWS_NoPolicyGroups job
produces the following preconfigured report:

| Report                  | Description                                                       | Default Tags | Report Element                                                                                                                                                                                                        |
| ----------------------- | ----------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Groups With No Policies | This report identifies groups that do not have a policy assigned. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays top accounts by no policy group counts - Table – Shows no policy groups by accounts - Table – Provides details on no policy groups |

# AWS_StaleGroups Job

The AWS_StaleGroups job highlights groups that have members that are considered stale. The
definition for staleness is set by default to 60 days. This can be configured.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The AWS_StaleGroups job has the following configurable parameter:

- Days without login to consider an account stale

See the
[Customizable Analysis Tasks for the AWS_StaleGroups Job](#customizable-analysis-tasks-for-the-aws_stalegroups-job)
topic for additional information.

## Analysis Tasks for the AWS_StaleGroups Job

Navigate to the **AWS** > **3.Groups** > **AWS_StaleGroups** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not deselect the selected analysis tasks. The analysis tasks are preconfigured for
this job. Only modify the analysis tasks listed in the customizable analysis tasks section.

![Analysis Tasks for the AWS_StaleGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/exchange/distributionlists/membershipanalysis/stalegroupsanalysis.webp)

The following analysis tasks are selected by default:

- Stale Group Details – Highlights the staleness of users in AWS groups. Creates the
  AWS_StaleGroup_Details table accessible under the job’s Results node.

  - The number of days without login to consider an account stale can be customized. By default it
    is set to 60. See the
    [Customizable Analysis Tasks for the AWS_StaleGroups Job](#customizable-analysis-tasks-for-the-aws_stalegroups-job)
    topic for additional information.

- Stale Group Summary – Summarizes statistics for stale groups. Creates the AWS_StaleGroup_Summary
  table accessible under the job’s Results node.
- Stale Groups AWS Summary – Summarizes stale groups by percentile for all of AWS

### Customizable Analysis Tasks for the AWS_StaleGroups Job

The default values for parameters that can be customized are:

| Analysis Task       | Customizable Parameter Name | Default Value | Value Indicates                                 |
| ------------------- | --------------------------- | ------------- | ----------------------------------------------- |
| Stale Group Details | @StaleThreshold             | 60            | Days without login to consider an account stale |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for instructions on how to modify parameters.

## Report for the AWS_StaleGroups Job

In addition to the tables and views created by the analysis task, the AWS_StaleGroups job produces
the following preconfigured report:

| Report       | Description                                               | Default Tags | Report Element                                                                                                                                                                      |
| ------------ | --------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Groups | This report determines the staleness of group membership. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays group membership - Table – Shows group membership - Table – Provides details on group membership |

# 3.Groups Job Group

The 3.Groups job group provides details on AWS IAM group membership, orphaned groups (those with no
policy assigned to them), sensitive security group membership, and stale groups.

![3.Groups Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 3.Groups job group is comprised of:

- [AWS_GroupMembers Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details about group members and the policies assigned to those groups
- [AWS_NoPolicyGroups Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details on groups that have no policies assigned to them
- [AWS_StaleGroups Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Highlights groups that have members that are considered stale

# AWS_Accounts Job

The AWS_Accounts job provides detailed information about the accounts that exist in each AWS
Organization. This job also determines the AWS Master Account for each Organization. The AWS Master
Account can be set manually by adding a line for each Organization in the temporary table
#IdentitySourceAccount in the analysis task parameters for this job.

## Analysis Tasks for the AWS_Accounts Job

Navigate to the **AWS** > **1.Organizations** > **AWS_Accounts** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_Accounts Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/organizations/accountsanalysis.webp)

The following analysis tasks are selected by default:

- AWS Account Details – Provides details for the AWS IAM accounts in the organization. Creates the
  AWS_Account_Details table accessible under the job’s Results node.
- AWS Account Summary – Summarizes AWS Accounts by organization. Creates the AWS_Account_Summary
  table accessible under the job’s Results node.

## Report for the AWS_Accounts Job

In addition to the tables and views created by the analysis task, the AWS_Accounts job produces the
following preconfigured report:

| Report   | Description                                                               | Default Tags | Report Element                                                                                                                                                                |
| -------- | ------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accounts | This report provides details on the IAM Accounts in the AWS Organization. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays top accounts by org - Table – Shows accounts by Org - Table – Provides details on accounts |

# AWS_MemberAccountUsers Job

The AWS_MemberAccountUsers job highlights users that are not located in the primary AWS Identity
Source, which is generally the Master AWS Account for the Organization.

## Analysis Tasks for the AWS_MemberAccountUsers Job

Navigate to the **AWS** > **1.Organizations** > **AWS_MemberAccountUsers** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_MemberAccountUsers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/organizations/memberaccountusersanalysis.webp)

The following analysis tasks are selected by default:

- Member Account User Details – Provides details on users that exist outside the master AWS account.
  Creates the AWS_MemberAccountUsers_Details table accessible under the job’s Results node.
- Member Account Users Summary – Summarizes AWS member account users by organization. Creates the
  AWS_MemberAccountUsers_Summary table accessible under the job’s Results node.

## Report for the AWS_MemberAccoutUsers Job

In addition to the tables and views created by the analysis task, the AWS_MemberAccountUsers job
produces the following preconfigured report:

| Report               | Description                                                                            | Default Tags | Report Element                                                                                                                                                                                                    |
| -------------------- | -------------------------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Member Account Users | This report highlights user accounts that are not contained in the AWS Master Account. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays top member account users by org - Table – Shows member account users by Org - Table – Provides details on member account users |

# 1.Organizations Job Group

The 1.Organizations job group analyzes and reports on the AWS Organization including password
policies and accounts within the organization.

![1.Organizations Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 1.Organizations job jroup is comprised of:

- [AWS_Accounts Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides detailed information about the accounts that exist in each AWS Organization. This job
  also determines the AWS Master Account for each Organization. The AWS Master Account can be set
  manually by adding a line for each Organization in the temporary table #IdentitySourceAccount in
  the analysis task parameters for this job.
- [AWS_MemberAccountUsers Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Highlights users that are not located in the primary AWS Identity Source, which is generally the
  Master AWS Account for the Organization

# AWS Solution

Enterprise Auditor for AWS allows organizations to secure their data residing in Amazon Web Services
(AWS) S3 platform, reducing their risk exposure through proactive, automated auditing and reporting
of S3 permissions, sensitive data, and ultimately a consolidated view of user access rights across
dozens of structured and unstructured data resources both on-premises and in the cloud.

The AWS Solution is designed to provide information about data access such as:

- Who has access to your data
- Who is accessing your data
- What sensitive data is being stored and accessed

The AWS Solution provides the ability to audit AWS IAM and S3. Enterprise Auditor uses the AWS
solution to collect IAM users, groups, roles, and policies, as well as S3 permissions, content, and
sensitive data from target AWS accounts. The solution requires a special Enterprise Auditor license.
It can be focused to only conduct auditing of AWS IAM. Additionally, the Sensitive Data Discovery
Add-On enables the solution to search AWS S3 content for sensitive data.

Supported Platforms

- Amazon AWS IAM
- Amazon AWS S3

Requirements, Permissions, and Ports

See the
[Target Amazon Web Service Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for additional information.

Sensitive Data Discovery Considerations

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

**NOTE:** The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.

Location

The AWS Solution requires a special Enterprise Auditor license. It can be installed from the
Enterprise Auditor Instant Job Wizard. See the
[Instant Job Wizard](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/instant-jobs.md)
topic for information on installing instant solutions from the Enterprise Auditor Library.

Once it has been installed into the Jobs tree, navigate to the solution: **Jobs** > **AWS**.

## Job Groups

The AWS solution is a comprehensive set of pre-configured audit jobs and reports that provide
visibility into IAM users, groups, roles, and policies, as well as S3 permissions, content, and
sensitive data from target AWS accounts.

![AWS Solution Overview page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/runninginstances/overviewpage.webp)

The AWS Solution is comprised of the following job groups:

- [0.Collection Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – The 0.Collection Job Group scans and collects details on IAM and S3 buckets within an AWS
  organization
- [1.Organizations Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – The 1.Organizations Job Group provides details on AWS accounts and users
- [2.Users Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – The 2.Users Job Group provides details on AWS IAM user MFA status, access key usage, and
  staleness
- [3.Groups Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – The 3.Groups Job Group provides details on AWS IAM group membership, orphaned groups (those with
  no policy assigned to them), sensitive security group membership, and stale groups
- [4.Roles Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – The 4.Roles Job Group provides details on roles in the AWS IAM environment
- [5.Policies Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – The 5.Policies Job Group provides details on AWS IAM policies including the various types of
  policies, the permissions they grant, and where they are applied in the AWS organization
- [6.S3 Permissions Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – The 6.S3 Permissions Job Group provides details on permissions assigned to AWS S3 buckets,
  highlighting specific threats like broken inheritance and open buckets
- [7.S3 Content Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – The 7.S3 Content Job Group provide details on AWS S3 buckets and objects contained in those
  buckets
- [8.S3 Sensitive Data Job Group](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – The 8.S3 Sensitive Data Job Group provides details on AWS S3 buckets and objects containing
  sensitive data

# AWS_CustomManagedPolicies Job

The AWS_CustomManagedPolicies job provides details on customer managed policies created in the AWS
Organization.

## Analysis Tasks for the AWS_CustomManagedPolicies Job

Navigate to the **AWS** > **5.Policies** > **AWS_CustomManagedPolicies** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_CustomManagedPolicies Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/policies/custommanagedpoliciesanalysis.webp)

The following analysis tasks are selected by default:

- Custom Managed Policy Details – Provides detailed information on AWS custom managed policies.
  Creates the AWS_CustomManagedPolicy_Details table accessible under the job’s Results node.
- Custom Managed Policy Usage Summary – Summarizes the custom managed policy usage by AWS
  Organization. Creates the AWS_CustomManagedPolicy_Summary table accessible under the job’s Results
  node.

## Report for the AWS_CustomManagedPolicies Job

In addition to the tables and views created by the analysis task, the AWS_CustomManagedPolicies job
produces the following preconfigured report:

| Report                  | Description                                                       | Default Tags | Report Element                                                                                                                                                                                                                            |
| ----------------------- | ----------------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Custom Managed Policies | This report analyzes AWS Custom Managed Policies and their usage. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays custom managed policies by account - Table – Shows custom managed policies by account - Table – Provides details on custom managed policies by account |

# AWS_InlinePolicies Job

The AWS_InlinePolicies job provides details on customer managed policies that are directly assigned
to a user or group.

## Analysis Tasks for the AWS_InlinePolicies Job

Navigate to the **AWS** > **5.Policies** > **AWS_InlinePolicies** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_InlinePolicies Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/policies/inlinepoliciesanalysis.webp)

The following analysis tasks are selected by default:

- Inline Policy Details – Provides details for AWS Inline Policies. Creates the
  AWS_InlinePolicy_Details table accessible under the job’s Results node.
- Inline Policy Summary – Summarizes AWS Inline Policies by organization. Creates the
  AWS_InlinePolicy_Summary table accessible under the job’s Results node.

## Report for the AWS_InlinePolicies Job

In addition to the tables and views created by the analysis task, the AWS_InlinePolicies job
produces the following pre-configured report:

| Report          | Description                                                                               | Default Tags | Report Element                                                                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Inline Policies | This report identifies AWS Inline Policies that are assigned directly on an AWS Identity. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays inline policies by account - Table – Shows inline policies by account - Table – Provides details on inline policies |

# AWS_ManagedPolicies Job

The AWS_ManagedPolicies job provides details on policies managed by Amazon in the AWS Organization.

## Analysis Tasks for the AWS_ManagedPolicies Job

Navigate to the **AWS** > **5.Policies** > **AWS_ManagedPolicies** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_ManagedPolicies Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/policies/managedpoliciesanalysis.webp)

The following analysis tasks are selected by default:

- Managed Policy Details – Identifies managed policies from AWS and if they are assigned to a user
  or group. Creates the AWS_ManagedPolicy_Details table accessible under the job’s Results node.
- Managed Policy Usage Summary – Summarizes the managed policy usage by AWS Org. Creates the
  AWS_ManagedPolicy_Summary table accessible under the job’s Results node.

## Report for the AWS_ManagedPolicies Job

In addition to the tables and views created by the analysis task, the AWS_Accounts job produces the
following preconfigured report:

| Report               | Description                                                | Default Tags | Report Element                                                                                                                                                                                                        |
| -------------------- | ---------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS Managed Policies | This report analyzes AWS Managed Policies and their usage. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays AWS managed policies by account - Table – Shows AWS managed policies by account - Table – Provides details on AWS managed policies |

# AWS_SensitivePolicies Job

The AWS_SensitivePolicies job provides details on users, groups, and roles as well as the policies
granting them sensitive permissions.

## Analysis Tasks for the AWS_SensitivePolicies Job

Navigate to the **AWS** > **5.Policies** > **AWS_SensitivePolicies** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_SensitivePolicies Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/policies/sensitivepoliciesanalysis.webp)

The following analysis tasks are selected by default:

- Sensitive Managed Policy Details – Provides details on AWS Sensitive Managed Policies. Creates the
  AWS_SensitiveManagedPolicies_Details table accessible under the job’s Results node.
- Sensitive Inline Policy Details – Provides details on AWS Sensitive Inline Policies. Creates the
  AWS_SensitiveInlinePolicies_Details table accessible under the job’s Results node.
- Sensitive Managed Policy Summary – Summarizes AWS Sensitive Managed Policies by organization.
  Creates the AWS_SensitiveManagedPolicies_Summary table accessible under the job’s Results node.
- Sensitive Inline Policy Summary – Summarizes AWS Sensitive Inlin Policies by organization. Creates
  the AWS_SensitiveInlinePolicies_Summary table accessible under the job’s Results node.

## Reports for the AWS_SensitivePolicies Job

In addition to the tables and views created by the analysis task, the AWS_SensitivePolicies job
produces the following preconfigured report:

| Report                     | Description                                                                               | Default Tags | Report Element                                                                                                                                                                                                                                                |
| -------------------------- | ----------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Inline Policies  | This report highlights users, groups, and roles with a sensitive inline policy assigned.  | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays sensitive policy assignments by org - Table – Shows sensitive policy assignments by org - Table – Provides details on sensitive policy assignments                         |
| Sensitive Managed Policies | This report highlights users, groups, and roles with a sensitive managed policy assigned. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays sensitive managed policy assignments by org - Table – Shows sensitive managed policy assignments by org - Table – Provides details on sensitive managed policy assignments |

# AWS_UnusedManagedPolicies Job

The AWS_UnusedManagedPolicies job provides details on customer managed policies that exist in the
AWS Organization. Optionally, AWS managed policies can be included by changing the parameter for the
analysis task.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The AWS_UnusedManagedPolicies job has the following configurable parameter:

- True or False value to include policies managed by AWS

See the
[Customizable Analysis Tasks for the AWS_UnusedManagedPolicies Job](#customizable-analysis-tasks-for-the-aws_unusedmanagedpolicies-job)
topic for additional information.

## Analysis Tasks for the AWS_UnusedManagedPolicies Job

Navigate to the **AWS** > **5.Policies** > **AWS_UnusedManagedPolicies** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not deselect the selected analysis tasks. The analysis tasks are preconfigured for
this job. Only modify the analysis tasks listed in the customizable analysis tasks section.

![Analysis Tasks for the AWS_UnusedManagedPolicies Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/policies/unusedmanagedpoliciesanalysis.webp)

The following analysis tasks are selected by default:

- Unused Managed Policies – Policies not assigned to any group or user. Creates the
  AWS_UnusedPolicies_Details table accessible under the job’s Results node.

  - Optionally, AWS managed policies can be included by setting the parameter to True. See the
    [Customizable Analysis Tasks for the AWS_UnusedManagedPolicies Job](#customizable-analysis-tasks-for-the-aws_unusedmanagedpolicies-job)
    topic for additional information.

- Unused Managed Policy Summary – Summary by AWS Organization of unused managed policies. Creates
  the AWS_UnusedPolicies_Summary table accessible under the job’s Results node.

### Customizable Analysis Tasks for the AWS_UnusedManagedPolicies Job

The default values for parameters that can be customized are:

| Analysis Task           | Customizable Parameter Name | Default Value | Value Indicates                                         |
| ----------------------- | --------------------------- | ------------- | ------------------------------------------------------- |
| Unused Managed Policies | @IncludeAWSManaged          | False         | True or False value to include policies managed by AWS. |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for instructions on how to modify parameters.

## Report for the AWS_UnusedManagedPolicies Job

In addition to the tables and views created by the analysis task, the AWS_UnusedManagedPolicies job
produces the following preconfigured report:

| Report                  | Description                                                                 | Default Tags | Report Element                                                                                                                                                                                                                 |
| ----------------------- | --------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unused Managed Policies | This report identifies policies that are not assigned to any group or user. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays unused managed policies by account - Table – Shows unused managed policies by account - Table – Provides details on unused managed policies |

# AWS_UserPolicies Job

The AWS_UserPolicies job provides details outlining user policy assignment. This includes where the
policy is assigned, directly or at a group level, and if the policy assignment has been duplicated.

## Analysis Tasks for the AWS_UserPolicies Job

Navigate to the **AWS** > **5.Policies** > **AWS_UserPolicies** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_UserPolicies Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/policies/userpoliciesanalysis.webp)

The following analysis tasks are selected by default:

- User Policies View – Details policies assigned to users directly and through group membership.
  Creates the AWS_IamUserPolicyView table accessible under the job’s Results node.
- Duplicated Policies – User policies that have been inherited and directly assigned. Creates the
  AWS_DuplicatedPolicy_Details table accessible under the job’s Results node.
- User Policy Summary – Summarizes policies assigned to users by Account. Creates the
  AWS_UserPolicy_Summary table accessible under the job’s Results node.

## Reports for the AWS_UserPolicies Job

In addition to the tables and views created by the analysis task, the AWS_UserPolicies job produces
the following preconfigured report:

| Report                       | Description                                                                                                          | Default Tags | Report Element                                                                                                                                                                                                                                                     |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Duplicate Policy Assignments | This report highlights policies that have been both assigned directly and inherited from a group to a user identity. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays top accounts by assigned managed policies - Table – Provides details on managed policy assignments                                                                              |
| Managed Policy Assignments   | This report details managed policy assignments in the AWS Organization.                                              | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays duplicate policy assignment summary by account - Table – Shows duplicate policy assignment summary by account - Table – Provides details on duplicate policy assignment summary |

# 5.Policies Job Group

The 5.Policies job group provides details on AWS IAM policies including the various types of
policies, the permissions they grant, and where they are applied in the AWS organization.

![5.Policies Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 5.Policies job group is comprised of:

- [AWS_CustomManagedPolicies Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details on customer managed policies created in the AWS Organization
- [AWS_InlinePolicies Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details on customer managed policies that are directly assigned to a user or group
- [AWS_ManagedPolicies Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details on policies managed by Amazon in the AWS Organization
- [AWS_SensitivePolicies Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details on users, groups, and roles as well as the policies granting them sensitive
  permissions
- [AWS_UnusedManagedPolicies Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details on customer managed policies that exist in the AWS Organization. Optionally,
  AWS managed policies can be included by changing the @IncludeAWSManaged parameter on the analysis
  task.
- [AWS_UserPolicies Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details outlining user policy assignment. This includes where the policy is assigned,
  directly or at a group level, and if the policy assignment has been duplicated.

# Recommended Configuration for the AWS Solution

The AWS Solution is configured to inherit settings from the global Settings node. The Connection
Profile must be assigned before job execution. Once it is assigned to the job group, it can be run
directly or scheduled.

Dependencies

For AWS IAM Auditing:

- AWS Permissions must be configured on the target databases.

  - See the
    [Configure AWS for Scans](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
    topic for information on configuring Roles within AWS and obtaining an Access Key
  - See the
    [Target Amazon Web Service Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
    topic for additional information on permissions

For AWS S3 Sensitive Data Discovery Auditing:

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

  - See the
    [Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/install.md)
    topic for additional information

Some of the 0.Collection job group queries can be scoped to target specific S3 Objects. However, it
is necessary for the SA_AWS_Instances table to be populated before attempting to scope the queries.
Therefore, the AWS_S3Scan job must be manually executed before attempting to scope the S3 queries.

Target Host

The AWS Data Collector identifies AWS instances via the created Roles and therefore does not require
a host list to be assigned. No target host is required (assign Local Host).

Connection Profile

The AWS Data Collector requires a specific set of permissions. The account used can be either a Web
Services (JWT) account or an Amazon Web Services account. Once the account has been provisioned,
create a custom Connection Profile containing the credentials for the targeted environment. See the
[Amazon Web Services for User Credentials](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information.

The Connection Profile is assigned under the **AWS** > **Settings** > **Connection** node. It is set
to **Use Default Profile**, as configured at the global Settings level. However, if this is not the
Connection Profile with the necessary permissions for targeting the AWS instances, click the
**Select one of the following user defined profiles** option and select the appropriate Connection
Profile.

See the
[Connection](/docs/accessanalyzer/11.6/administration/settings/connections.md)
topic for additional information on creating a Connection Profile.

Access Token

Creating the Connection Profile requires having the **Access Key ID** and the **Secret Access Key**
that was generated by the Amazon Web Services application. See the
[Configure AWS for Scans](/docs/accessanalyzer/11.6/getting-started/requirements/target-requirements.md)
topic for additional information.

Schedule Frequency

Schedule the AWS job group to run weekly or daily, depending on the amount of data in the
environment. If there are frequent AWS changes within the target environment, then it can be
executed more often. It is best to rerun it anytime AWS changes might have occurred.

History Retention

Not supported.

Multi Console Support

Not supported.

Run Order

The jobs in the 0.Collection job group must be run first and in order. The other job groups can be
run in any order, together or individually, after running the 0.Collection job group.

**_RECOMMENDED:_** Run the solution at the top level.

Run at the Solution Level

The jobs in the AWS job group should be run together and in order by running the entire solution,
instead of the individual jobs.

Run at the Job Group Level

For environments with a large amount of S3 data, it may be desirable to run the 3.AWS_S3Scan job and
the 4.AWS_S3SDDScan job less frequently than the other jobs in the 0.Collection job group.

Query Configuration

The following queries in the 0.Collection job group require the created AWS Roles to be added to the
Login Roles page:

- [1.AWS_OrgScan Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
- [2.AWS_S3Scan Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
- [3.AWS_IAMScan Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)

The following queries in the 0.Collection job group can be modified to limit the depth of the scan:

- [2.AWS_S3Scan Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
- [4.AWS_S3SDDScan Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)

Analysis Configuration

This solution can be run with the default analysis configuration. However, the following parameters
can be modified:

- The `@STALETHRESHOLD` parameter determines the number of days after which content is considered
  stale. It is set to default of 60 days. The `@STALETHRESHOLD` parameter can be customized in the
  following analysis tasks:

  - **2. Users** > **AWS_StaleUsers** > **Stale Users** Analysis Task
  - **3.Groups** > **AWS_StaleGroups** > **Stale Groups Details** Analysis Task
  - **4.Roles** > **AWS_StaleRoles** > **Stale Roles Details** Analysis Task

Workflow

The following is the recommended workflow:

**Step 1 –** Configure and assign the Connection Profile.

**Step 2 –** Configure the Scan query to add the AWS Roles to the Login Roles page.

**Step 3 –** (Optional) Modify query configurations for the 0.Collection job group to limit the scan
depth.

**Step 4 –** (Optional) Modify analysis task parameters for the reporting jobs.

**Step 5 –** Schedule the AWS job group to run as desired.

**Step 6 –** Review the reports generated by the AWS job group.

# AWS_Roles Job

The AWS_Roles job provides details on roles in the AWS IAM environment.

## Analysis Tasks for the AWS_Roles Job

Navigate to the **AWS** > **4.Roles** > **AWS_Roles** > **Configure** node and select **Analysis**
to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_Roles Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/roles/rolesanalysis.webp)

The following analysis tasks are selected by default:

- Role Details – Provides detailed information on AWS Roles. Creates the AWS_Role_Details table
  accessible under the job’s Results node.
- Role Summary – Summarizes roles by AWS account. Creates the AWS_Role_Summary table accessible
  under the job’s Results node.

## Report for the AWS_Roles Job

In addition to the tables and views created by the analysis task, the AWS_Roles job produces the
following preconfigured report:

| Report | Description                                                       | Default Tags | Report Element                                                                                                                                                               |
| ------ | ----------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Roles  | This report provides details on roles in the AWS IAM environment. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays top roles by account - Table – Shows roles by account - Table – Provides details on roles |

# AWS_StaleRoles Job

The AWS_StaleRoles job provides details on roles that are considered stale. Highlighting roles that
have not been used in more than 60 days and those that have never been used. The 60 day parameter is
configurable.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The AWS_StaleRoles job has the following configurable parameter:

- Days without login to consider an account stale

See the
[Customizable Analysis Tasks for the AWS_StaleRoles Job](#customizable-analysis-tasks-for-the-aws_staleroles-job)
topic for additional information.

## Analysis Tasks for the AWS_StaleRoles Job

Navigate to the **AWS** > **4.Roles** > **AWS_StaleRoles** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not deselect the selected analysis tasks. The analysis tasks are preconfigured for
this job. Only modify the analysis tasks listed in the customizable analysis tasks section.

![Analysis Tasks for the AWS_StaleRoles Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/roles/stalerolesanalysis.webp)

The following analysis tasks are selected by default:

- Stale Role Details – Highlights the roles in AWS that are considered stale. Creates the
  AWS_StaleRole_Details table accessible under the job’s Results node.

  - The number of days without login to consider an account stale can be customized. By default it
    is set to 60. See the
    [Customizable Analysis Tasks for the AWS_StaleRoles Job](#customizable-analysis-tasks-for-the-aws_staleroles-job)
    topic for additional information.

- Stale Role Summary – Summarizes stale roles by AWS Account. Creates the AWS_StaleRole_Summary
  table accessible under the job’s Results node.

### Customizable Analysis Tasks for the AWS_StaleRoles Job

The default values for parameters that can be customized are:

| Analysis Task      | Customizable Parameter Name | Default Value | Value Indicates                                  |
| ------------------ | --------------------------- | ------------- | ------------------------------------------------ |
| Stale Role Details | @StaleThreshold             | 60            | Days without login to consider an account stale. |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for instructions on how to modify parameters.

## Report for the AWS_StaleRoles Job

In addition to the tables and views created by the analysis task, the AWS_StaleRoles job produces
the following preconfigured report:

| Report      | Description                                                | Default Tags | Report Element                                                                                                                                                                                  |
| ----------- | ---------------------------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Roles | This report identifies stale roles in the AWS environment. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays top stale roles by account - Table – Shows stales roles by account - Table – Provides details on stale roles |

# 4.Roles Job Group

The 4.Roles job group provides details on roles in the AWS IAM environment.

![4.Roles Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 4.Roles job group is comprised of:

- [AWS_Roles Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details on roles in the AWS IAM environment
- [AWS_StaleRoles Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details on roles that are considered stale. Highlighting roles that have not been used
  in more than 60 days and those that have never been used.

# AWS_S3Buckets Job

The AWS_S3Buckets job provides a summary of AWS S3 buckets including total object size and counts.

## Analysis Task for the AWS_S3Buckets Job

Navigate to the **AWS** > **7.S3 Content** > **AWS_S3Buckets** > **Configure** node and select
**Analysis** to view the analysis task.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Task for the AWS_S3Buckets Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/s3content/s3bucketsanalysis.webp)

The following analysis task is selected by default:

- S3 Buckets – S3 Bucket details. Creates the AWS_Bucket_Details table accessible under the job’s
  Results node.

## Report for the AWS_S3Buckets Job

In addition to the tables and views created by the analysis task, the AWS_S3Buckets job produces the
following preconfigured report:

| Report     | Description                                   | Default Tags | Report Element                                                                                                                                                                    |
| ---------- | --------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| S3 Buckets | This report summarizes AWS S3 Bucket content. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays top five buckets by size - Table – Shows buckets by size - Table – Provides details on buckets |

# AWS_S3BucketTags Job

The AWS_S3BucketTags job identifies tags associated with AWS S3 Buckets. Tagging can be helpful to
identify the storage class or purpose of a bucket and can be used in AWS IAM Policy assignments.

## Analysis Tasks for the AWS_S3BucketTagsJob

Navigate to the **AWS** > **7.S3 Content** > **AWS_S3BucketTags** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_S3BucketTagsJob](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/s3content/s3buckettagsanalysis.webp)

The following analysis tasks are selected by default:

- AWS S3 Bucket Tags – Identifies tags associated with AWS S3 Buckets. Creates the
  AWS_BucketTag_Details table accessible under the job’s Results node.
- AWS S3 Bucket Tag Summary – Summarizes AWS bucket tag status. Creates the AWS_BucketTag_Summary
  table accessible under the job’s Results node.

## Report for the AWS_S3BucketTags Job

In addition to the tables and views created by the analysis tasks, the AWS_S3BucketTags job produces
the following preconfigured report:

| Report      | Description                                | Default Tags | Report Element                                                                                                                                                                                   |
| ----------- | ------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Bucket Tags | This report highlights AWS S3 Bucket Tags. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays buckets tagged by account - Table – Shows bucket tagging summary - Table – Provides details on bucket tagging |

# 7.S3 Content Job Group

The 7.S3 Content job group provide details on AWS S3 buckets and objects contained in those buckets.

![7.S3 Content Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 7.S3 Content job group is comprised of:

- [AWS_S3Buckets Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides a summary of AWS S3 buckets including total object size and counts
- [AWS_S3BucketTags Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Identifies tags associated with AWS S3 Buckets. Tagging can be helpful to identify the storage
  class or purpose of a bucket and can be used in AWS IAM Policy assignments.

# AWS_BrokenInheritance Job

The AWS_BrokenInheritance job highlights permissions in an AWS S3 bucket that differ from those
assigned at the bucket level, those assigned directly on objects within the bucket.

## Analysis Tasks for the AWS_BrokenInheritance Job

Navigate to the **AWS** > **6.S3 Permissions** > **AWS_BrokenInheritance** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_BrokenInheritance Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/filesystem/brokeninheritanceanalysis.webp)

The following analysis tasks are selected by default:

- Broken Inheritance – Permissions applied directly to AWS S3 Bucket Objects. Creates the
  AWS_BrokenInheritance_Details table accessible under the job’s Results node.
- Broken Inheritance Summary – Summarizes permissions applied directly to AWS S3 Bucket Objects.
  Creates the AWS_BrokenInheritance_Summary table accessible under the job’s Results node.

## Report for the AWS_BrokenInheritance Job

In addition to the tables and views created by the analysis task, the AWS_BrokenInheritance job
produces the following preconfigured report:

| Report             | Description                                                                     | Default Tags | Report Element                                                                                                                                                                                                      |
| ------------------ | ------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Broken Inheritance | This report identifies permissions applied directly on files in AWS S3 Buckets. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays top buckets by broken inheritance - Table – Shows buckets by broken inheritance - Table – Provides details on broken inheritance |

# AWS_EffectivePermissions Job

The AWS_EffectivePermissions job identifies and summarizes effective permissions on AWS S3 buckets
and bucket objects.

## Analysis Tasks for the AWS_Accounts Job

Navigate to the **AWS** > **6.S3 Permissions** > **AWS_EffectivePermissions** > **Configure** node
and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_Accounts Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/permissions/effectivepermissionsanalysis.webp)

The following analysis tasks are selected by default:

- S3 Bucket Effective Permissions – AWS S3 Bucket effective permissions for each identity. Creates
  the AWS_EffectiveBucketPermissions_Details table accessible under the job’s Results node.
- S3 Bucket Effective Permission Summary – Summarizes permission counts across AWS S3 Buckets.
  Creates the AWS_EffectiveBucketPermissions_Summary table accessible under the job’s Results node.

## Report for the AWS_EffectivePermissions Job

In addition to the tables and views created by the analysis task, the AWS_EffectivePermissions job
produces the following preconfigured report:

| Report                | Description                                                                    | Default Tags | Report Element                                                                                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Effective Permissions | This report identifies and summarizes effective permissions on AWS S3 Buckets. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays top buckets by effective permissions - Table – Shows buckets by effective permissions - Table – Provides details on effective permissions |

# AWS_OpenBuckets Job

The AWS_OpenBuckets job identifies buckets that have permissions assigned to everyone at the top
level of the AWS S3 bucket.

## Analysis Task for the AWS_OpenBuckets Job

Navigate to the **AWS** > **6.S3 Permissions** > **AWS_OpenBuckets** > **Configure** node and select
**Analysis** to view the analysis task.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Task for the AWS_OpenBuckets Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/s3permissions/openbucketsanalysis.webp)

The following analysis task is selected by default:

- Open Bucket Permissions – Permissions applied to AWS S3 buckets across all users. Creates the
  AWS_OpenBucket_Details table accessible under the job’s Results node.

## Report for the AWS_OpenBuckets Job

In addition to the tables and views created by the analysis task, the AWS_OpenBuckets job produces
the following preconfigured report:

| Report       | Description                                 | Default Tags | Report Element                                                                                                                                                                          |
| ------------ | ------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Open Buckets | This report identifies AWS S3 Open Buckets. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays largest open buckets - Table – Shows largest open buckets - Table – Provides details on open buckets |

# 6.S3 Permissions Job Group

The 6.S3 Permissions job group provides details on permissions assigned to AWS S3 buckets,
highlighting specific threats like broken inheritance and open buckets.

![6.S3 Permissions Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 6.S3 Permissions job group is comprised of:

- [AWS_BrokenInheritance Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Highlights permissions in an AWS S3 bucket that differ from those assigned at the bucket level,
  those assigned directly on objects within the bucket
- [AWS_EffectivePermissions Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Identifies and summarizes effective permissions on AWS S3 buckets and bucket objects
- [AWS_OpenBuckets Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Identifies buckets that have permissions assigned to everyone at the top level of the AWS S3
  bucket

# AWS_SensitiveData_Permissions Job

The AWS_SensitiveData_Permissions job provides details on the permissions assigned to AWS S3 buckets
and the objects in them which contain sensitive data.

## Analysis Tasks for the AWS_SensitiveData_Permissions Job

Navigate to the **AWS** > **8.S3 Sensitive Data** > **AWS_SensitiveData_Permissions** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_SensitiveData_Permissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/db2/sensitivedata/sensitivedatapermissionsanalysis.webp)

The following analysis tasks are selected by default:

- AWS Sensitive Data Permissions – Highlights permissions applied to AWS objects containing
  sensitive data. Creates the AWS_SDDPermission_Details table accessible under the job’s Results
  node.
- Sensitive Data Permissions Summary – Summarizes permissions on AWS objects containing sensitive
  data. Creates the AWS_SDDPermission_BucketSummary table accessible under the job’s Results node.

## Report for the AWS_SensitiveData_Permissions Job

In addition to the tables and views created by the analysis task, the AWS_SensitiveData_Permissions
job produces the following preconfigured report:

| Report                     | Description                                                                  | Default Tags   | Report Element                                                                                                                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sensitive Data Permissions | This report identifies permissions on AWS objects containing sensitive data. | Sensitive Data | This report is comprised of the following elements: - Stacked Bar Chart – Displays top buckets by permissions on sensitive data - Table – Shows buckets by permissions on sensitive data - Table – Provides details on sensitive data permissions |

# AWS_SensitiveData Job

The AWS_SensitiveData job provides details on AWS S3 buckets and the objects in them which contain
sensitive data.

## Analysis Tasks for the AWS_SensitiveData Job

Navigate to the **AWS** > **8.S3 Sensitive Data** > **AWS_SensitiveData** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_SensitiveData Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/databases/postgresql/collection/sensitivedataanalysis.webp)

The following analysis tasks are selected by default:

- Sensitive Data Details – Provides detailed information for S3 objects with Sensitive Data. Creates
  the AWS_SDD_Details table accessible under the job’s Results node.
- Sensitive Data Summary – Summarizes Sensitive Data by AWS Account. Creates the AWS_SDD_Summary
  table accessible under the job’s Results node.
- Enterprise Summary – Summarizes AWS sensitive data by criteria. Creates the
  AWS_SDD_EnterpriseSummary table accessible under the job’s Results node.

## Report for the AWS_Sensitive Data Job

In addition to the tables and views created by the analysis task, the AWS_SensitiveData job produces
the following preconfigured reports:

| Report                  | Description                                                                   | Default Tags   | Report Element                                                                                                                                                                                              |
| ----------------------- | ----------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enterprise Summary      | This report shows a summary of the criteria matches found in the Enterprise.  | None           | This report is comprised of the following elements: - Chart – Displays exceptions by match count - Table – Provides details on exceptions                                                                   |
| Sensitive Data Overview | This report identifies objects in AWS S3 buckets that contain sensitive data. | Sensitive Data | This report is comprised of the following elements: - Stacked Bar Chart – Displays top buckets by sensitive data hit - Table – Shows sensitive data by account - Table – Provides details on sensitive data |

# 8.S3 Sensitive Data Job Group

The 8.S3 Sensitive Data job group provides details on AWS S3 buckets and objects containing
sensitive data.

![8.S3 Sensitive Data Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 8.S3 Sensitive Data job group is comprised of:

- [AWS_SensitiveData Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details on AWS S3 buckets and the objects in them which contain sensitive data
- [AWS_SensitiveData_Permissions Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details on the permissions assigned to AWS S3 buckets and the objects in them which
  contain sensitive data

# AWS_AccessKeys Job

The AWS_AccessKeys job provides details on the last time an access key was rotated or used,
highlighting keys that were last rotated over a year ago.

## Analysis Tasks for the AWS_AccessKeys Job

Navigate to the **AWS** > **2.Users** > **AWS_AccessKeys** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_AccessKeys Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/users/accesskeysanalysis.webp)

The following analysis tasks are selected by default:

- Access Keys – Analyzes access key rotation age and last use. Creates the AWS_AccessKey_Details
  table accessible under the job’s Results node.
- High Risk Access Keys – Highlights high risk access keys. Creates the AWS_AccessKey_HighRisk table
  accessible under the job’s Results node.
- Access Keys summary – Summarizes access key rotation by age. Creates the AWS_AccessKey_Summary
  table accessible under the job’s Results node.

## Report for the AWS_AccessKeys Job

In addition to the tables and views created by the analysis task, the AWS_AccessKeys job produces
the following preconfigured report:

| Report      | Description                                                                                                                                 | Default Tags | Report Element                                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Access Keys | This report identifies user accounts which have not rotated their AWS IAM Access Keys for an extended amount of time or have never used it. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays access key age by account - Table – Shows high risk access keys - Table – Provides details on access keys |

# AWS_MFAStatus Job

The AWS_MFAStatus job provides details on each user's MFA status, highlighting users that have it
disabled.

## Analysis Tasks for the AWS_MFAStatus Job

Navigate to the **AWS** > **2.Users** > **AWS_MFAStatus** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_MFAStatus Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/users/mfastatusanalysis.webp)

The following analysis tasks are selected by default:

- MFAStatus – Checks user accounts in AWS for Multi-Factor Authentication. Creates the
  AWS_MFAStatus_Details table accessible under the job’s Results node.
- MFAStatus Summary – Summarizes AWS IAM Multi-Factor Authentication status by organisation. Creates
  the AWS_MFAStatus_Summary table accessible under the job’s Results node.

## Report for the AWS_MFAStatus Job

In addition to the tables and views created by the analysis task, the AWS_MFAStatus job produces the
following preconfigured report:

| Report     | Description                                            | Default Tags | Report Element                                                                                                                                            |
| ---------- | ------------------------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MFA Status | This report identifies the MFA status of each AWS user | None         | This report is comprised of the following elements: - Pie Chart – Displays MFA status - Table – Shows status by account - Table – Provides details on MFA |

# AWS_RootAccounts Job

The AWS_RootAccounts job provides details on AWS root accounts and how they conform to recommended
security practices.

## Analysis Tasks for the AWS_RootAccounts Job

Navigate to the **AWS** > **2.Users** > **AWS_RootAccounts** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AWS_RootAccounts Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/aws/users/rootaccountsanalysis.webp)

The following analysis tasks are selected by default:

- Root Account Security Details – Provides details on the credentials and their usage for the AWS
  root account in each account. Creates the AWS_RootAccountSecurity_Details table accessible under
  the job’s Results node.
- Root Account Risk Assessment – Highlights security risks on AWS root accounts. Creates the
  AWS_RootAccountSecurity_RiskAssessment table accessible under the job’s Results node.
- Root Account Security Summary – Summarizes risks on the root account. Creates the
  AWS_RootAccountSecurity_Summary table accessible under the job’s Results node.

## Report for the AWS_RootAccounts Job

In addition to the tables and views created by the analysis task, the AWS_RootAccounts job produces
the following preconfigured report:

| Report                | Description                                                 | Default Tags | Report Element                                                                                                                                                                                                                                      |
| --------------------- | ----------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Root Account Security | This report highlights security risks on AWS Root Accounts. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays top account security by org - Table – Shows account security by Org - Table – Provides details on risk assessment - Table – Provides details on account security |

# AWS_StaleUsers Job

The AWS_StaleUsers job provides details on the last time each user logged in or their access key was
used, highlighting those over specified number of days (default 60) or that have never logged in.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The AWS_StaleUsers job has the following configurable parameter:

- Number of days before considering a user stale

See the
[Customizable Analysis Tasks for the AWS_StaleUsers Job](#customizable-analysis-tasks-for-the-aws_staleusers-job)
topic for additional information.

## Analysis Tasks for the AWS_StaleUsers Job

Navigate to the **AWS** > **2.Users** > **AWS_StaleUsers** > **Configure** node and select
**Analysis** to view the analysis tasks.

**CAUTION:** Do not deselect the selected analysis tasks. The analysis tasks are preconfigured for
this job. Only modify the analysis tasks listed in the customizable analysis tasks section.

![Analysis Tasks for the AWS_StaleUsers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/users/staleusersanalysis.webp)

The following analysis tasks are selected by default:

- Stale Users – Identifies user accounts that have not been logged in to in the last 60 days.
  Creates the AWS_StaleUser_Details table accessible under the job’s Results node.

  - The number of days can be customized from the default value of 60. See the
    [Customizable Analysis Tasks for the AWS_StaleUsers Job](#customizable-analysis-tasks-for-the-aws_staleusers-job)
    topic for additional information.

- Stale User Summary – Summarizes stale users in AWS. Creates the AWS_StaleUser_Summary table
  accessible under the job’s Results node.

### Customizable Analysis Tasks for the AWS_StaleUsers Job

The default values for parameters that can be customized are:

| Analysis Task | Customizable Parameter Name | Default Value | Value Indicates                                |
| ------------- | --------------------------- | ------------- | ---------------------------------------------- |
| Stale Users   | @StaleThreshold             | 60            | Number of days before considering a user stale |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for instructions on how to modify parameters.

## Report for the AWS_StaleUsers Job

In addition to the tables and views created by the analysis task, the AWS_StaleUsers job produces
the following preconfigured report:

| Report      | Description                                                                                                                                                                                                                               | Default Tags | Report Element                                                                                                                                      |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale Users | This report identifies user accounts which have not logged into AWS for an extended amount of time or have never logged in. A user account is considered stale if the last logon is over 60 days ago or the password has never been used. | None         | This report is comprised of the following elements: - Stacked Bar Chart – Displays stale users by account - Table – Provides details on stale users |

# 2.Users Job Group

The 2.Users job group provides details on AWS IAM user MFA status, access key usage, and staleness.

![2.Users Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/hostmanagement/jobstree.webp)

The 2.Users job group is comprised of:

- [AWS_AccessKeys Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details on the last time an access key was rotated or used, highlighting keys that were
  last rotated over a year ago
- [AWS_MFAStatus Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details on each user's MFA status, highlighting users that have it disabled
- [AWS_RootAccounts Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details on AWS root accounts and how they conform to recommended security practices
- [AWS_StaleUsers Job](/docs/accessanalyzer/11.6/solutions/cloud-platforms/aws-analysis.md)
  – Provides details on the last time each user logged in or their access key was used, highlighting
  those over 60 days or that have never logged in
