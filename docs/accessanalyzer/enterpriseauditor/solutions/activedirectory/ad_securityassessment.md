# AD Security Assessment Job

The AD\_SecurityAssessment Job performs checks against Active Directory security best practices in order to proactively identify critical security configurations that leave Active Directory vulnerable to attack. The result are reports that provide a listing of findings by severity and category with corresponding details that can be used to prioritize and remediate security issues.

![AD Security Assessment Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/securityassessmentjobstree.webp)

## Recommended Configurations for the AD\_SecurityAssessment Job

Dependencies

One or more of the following job groups or jobs must be run to produce results:

- .Active Directory Inventory Job Group
- Active Directory Job Group

  - Active Directory > 1.Groups > AD\_SensitiveSecurityGroups
  - Active Directory > 2.Users > AD\_PasswordStatus
  - Active Directory > 2.Users > AD\_ServiceAccounts
  - Active Directory > 2.Users > AD\_WeakPasswords
  - Active Directory > 2.Users > AD\_SIDHistory
  - Active Directory > 2.Users > AD\_UserDelegation
  - Active Directory > 3.Computers > AD\_ComputerDelegation
  - Active Directory > 4.Group Policy > AD\_CPassword
  - Active Directory > 5.Domains > AD\_DomainInfo
- Active Directory Permissions Analyzer Job Group

  - Active Directory Permissions Analyzer > 1.Users > AD\_ResetPasswordPermissions
  - Active Directory Permissions Analyzer > 1.Users > AD\_UserPermissions
  - Active Directory Permissions Analyzer > 2.Groups > AD\_GroupMembershipPermissions
  - Active Directory Permissions Analyzer > 2.Groups > AD\_GroupPermissions
  - Active Directory Permissions Analyzer > 3.OUs > AD\_OUPermissions
  - Active Directory Permissions Analyzer > 4.Computers > AD\_ComputerPermissions
  - Active Directory Permissions Analyzer > 4.Computers > AD\_LAPSPermissions
  - Active Directory Permissions Analyzer > 7.Containers > AD\_AdminSDHolder
  - Active Directory Permissions Analyzer > 7.Containers > AD\_ContainerPermissions
  - Active Directory Permissions Analyzer > 8.Domains > AD\_DomainReplication
  - Active Directory Permissions Analyzer > 9.Sites > AD\_DCShadowPermissions
- Windows Job Group

  - Windows > Privileged Accounts > Service Accounts > SG\_ServiceAccounts

__NOTE:__ If any of the above jobs are not completed, the AD\_SecurityAssessment job will run but all checks will not be assessed.

Target Host

This job group does not collect data. No target host is required.

Connection Profile

No specific Connection Profile is required.

Schedule Frequency

Scheduled to run as desired

History Retention

History is not supported. Turning on history will cause issues with data analysis and reporting.

Multi-console Support

Multiple StealthAUDIT consoles are not supported. This job should be run from a single StealthAUDIT console.

## Analysis Task for the AD\_SecurityAssessment Job

Navigate to the __Jobs__ > Active Directory > AD\_SecurityAssessment > Configure node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/securityassessmentanalysis.webp)

The following non-configurable analysis task is selected by default:

- Summarize Audit Findings – Creates the AD\_SecurityAssessment\_Results table accessible under the job’s Results node.

In addition to the tables created by the analysis task, the AD\_SecurityAssessment job produces the following preconfigured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| AD Security Assessment | This report identifies security risks within a targeted Active Directory environment based on results of previously run jobs. | GDPR  SOX  PCI  HIPAA | This report is comprised of four elements:   - Table – Provides Scope of Audit on domains  - Pie Chart – Displays Findings by Severity  - Table – Provides Findings by Category  - Table – Provides Details on Risk |
