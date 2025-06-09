# Windows Solution

The Windows Solution is designed to provide both high-level and granular views into any sized organization's infrastructure. Systems are a critical business asset. In order to optimally support and benefit the business, these systems must be running optimally and be fully secured. The Windows Solution allows organizations to quickly inventory, assess, and secure their Windows desktop and server infrastructure from a central location. Key capabilities include privileged account discovery, security configuration and vulnerability assessment, compliance reporting, and asset inventory.

Supported Platforms

- Windows 7 and higher
- Windows Server 2016 and later

Requirements, Permissions, and Ports

See the [Target Windows Server and Desktop Requirements, Permissions, and Ports](/docs/accessanalyzer/enterpriseauditor/requirements/target/windows.md) topic for additional information.

Location

The Windows Solution requires a special Access Analyzer license. It can be installed from the Instant Job Wizard. See the [Instant Job Wizard](/docs/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/overview.md) topic for additional information. Once it has been installed in the Jobs tree, navigate to the solution: __Jobs__ > __Windows__.

![Windows Solution in the Jobs Tree](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.png)

Each job group works independently from the other job groups. All of the job groups have their own collections that are used to analyze and report on data specific to the groups function. The SG\_SecurityAssessment job summarizes security related results from the Windows solution.

## Job Groups

The Windows Solution provides both high-level and granular views into any sized organization’s infrastructure.

![Windows Solution Overview page](/img/product_docs/accessanalyzer/enterpriseauditor/admin/runninginstances/overviewpage.png)

The jobs and job groups in the Windows Solution are:

- [Applications Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/windows/applications/overview.md) – The jobs in this group track various aspects of installed application management, highlighting installed software and utilization, unauthorized programs, rogue systems, and more
- [Authentication Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/windows/authentication/overview.md) – This group offers insight into authentication settings within audited systems to help identify potential security vulnerabilities and reduce risk within the environment
- [Open Access Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/windows/openaccess/overview.md) – This group highlights instances of open access across the audited environment
- [Privileged Accounts Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/windows/privilegedaccounts/overview.md) – Vital to security is the ability to accurately assess who has administrative privileges to each system and how. This group provides the collection and correlation capabilities needed to unravel complex access assignments, including local administrator membership, users with remote logon rights, and service accounts.
- [Security Utilities Job Group](/docs/accessanalyzer/enterpriseauditor/solutions/windows/securityutilities/overview.md) – This group provides a series of security element checks across the audited environment
- [SG\_SecurityAssessment Job](/docs/accessanalyzer/enterpriseauditor/solutions/windows/sg_securityassessment.md) – This job performs checks against Windows security best practices in order to proactively identify critical security configurations that leave the environment vulnerable to attack. The result is a report which provides a listing of findings by severity and category with corresponding details that can be used to prioritize and remediate security issues.
