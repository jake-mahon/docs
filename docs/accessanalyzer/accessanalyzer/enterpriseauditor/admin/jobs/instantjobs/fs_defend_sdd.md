# FS\_DEFEND\_SDD Job

The FS\_DEFEND\_SDD Job exports sensitive data matches collected by the File System Solution Sensitive Data Discovery Auditing jobs to Threat Manager. It is available through the Instant Job Library under the File System library. See the [Instant Job Wizard](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/overview.md) topic for instructions to add this instant job into the Jobs tree.

For installing the job, select __Local host__ on the Hosts page of the Instant Job Wizard. Then set the host list according to the following information.

![FS_DEFEND_SDD job in the Jobs tree](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.png)

Runtime Details:

- Dependencies – The following job groups must be successfully run before running this job
  - __FileSystem__ > __0.Collection__ Job Group
  - __FileSystem__ > __7.Sensitive Data__ Job Group
- Special Instructions
  - A Connection Profile must be created using the Web Services (JWT) credential account type with the specified Threat Manager App Token and assigned to this job
    - See the [Custom Connection Profile for FS\_DEFEND\_SDD Job](#Custom-Connection-Profile-for-FS_DEFEND_SDD-Job) topic for additional information
    - Assign the Connection Profile on the Connection tab of the job’s Properties
  - The Threat Manager host name with port, [HOST]:8080, and App Token are generated within Threat Manager:
    - Navigate to the __Configuration__ > __App Tokens__ page
    - Create a new app token
    - Copy the Host Name and Token
    - See the Access Analyzer Integration topic of the [Netwrix Threat Manager Documentation](https://helpcenter.netwrix.com/category/stealthdefend) for additional information.
- Target Hosts – Custom Host List
  - Threat Manager target host is the Threat Manager host name with port, [HOST]:8080
  - Format – [HOST]:8080
  - Assign host list at the __FS\_DEFEND\_SDD__ > __Configure__ > __Hosts__ (see the [Hosts Node](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/job/configure/hosts.md) topic for additional information)
- Scheduling – This job should be scheduled to run as desired
- History Retention – Not supported and should be turned off
- Multi-console Support – Not supported

The FS\_DEFEND\_SDD Job runs an analysis task that generates the SA\_FSAA\_SDD\_RESULTS table, which places the data in a compatible format for Threat Manager. It then runs an action task using the Web Request Action Module to send the data to Threat Manager.

## Analysis Tasks for the FS\_DEFEND\_SDD Job

Navigate to the __Jobs__ > __FS\_DEFEND\_SDD__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

![Default Analysis tasks for the job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/analysistasks.png)

The default analysis tasks are:

- Create FSAA DEFEND table – Creates the FSAA\_SDD\_RESULTS table accessible under the job’s Results node

## Actions for the FS\_DEFEND\_SDD Job

Navigate to the __Jobs__ > __FS\_DEFEND\_SDD__ > __Configure__ node and select __Actions__ to view the actions.

__CAUTION:__ This action is enabled by default.

![Default Action Tasks for the Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/actiontasks.png)

The default action is:

- Integrate – Uses the Web Request Action Module to send data to Threat Manager

## Custom Connection Profile for FS\_DEFEND\_SDD Job

The FS\_DEFEND\_SDD Job requires a custom Connection Profile to authenticate to Threat Manager. The credential for the Connection Profile must be created with the Web Services (JWT) account type. Remember, the Threat Manager App Token is generated within Threat Manager.

Create a Connection Profile and set the following information on the User Credentials window:

- Select Account Type – Web Services (JWT)
- Domain – Not a field for this type of credential, defaults to ```<WSJWT>```
- User name – Not a field for this type of credential
- Password Storage: Application – Uses Access Analyzer’s configured Profile Security setting as selected at the __Settings__ > __Application__ node
- Access Token – Copy and paste the Threat Manager App Token

See the [Application](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/application/overview.md) topic for additional information.
