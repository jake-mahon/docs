# AnyID Connectors Solution

The AnyID Connectors Solution allows you to quickly find where data for identities are stored, reducing the response time to Data Subject Access Requests (DSARs). Integration with third party repositories allows you to perform exact data matching for profiles such as employees, customers, students, or patients across any data repository.

Data Privacy Engine works in conjunction with Access Analyzer Sensitive Data Discovery scans to create an efficient, secure IdentityIndex™ that privacy, security, and legal professionals can leverage to quickly and easily map the location of subject information. Through a series of preconfigured Identity Connectors,you can easily extract identity-related attributes about customers and other potential subjects from verified systems of record like Salesforce, Epic, Peoplesoft, and Paycom, as well as homegrown or alternative platforms.

Through the creation of a Subject Profile for each individual, Access Analyzer’s broad-reaching Sensitive Data Discovery engine accurately identifies the specific location of a subject’s data across virtually any cloud or on-premises data repository. With this context in tow, organizations can now easily perform Data Subject Access Requests (DSARs), zero-in on where the implementation of Privacy by Design principles are needed most urgently, and know for certain when breach attempts and activities involve consumer, patient, resident, and other subject data.

## Supported Platforms

- CSV
- EpicClarity
- Paycom
- Salesforce

## Location

The AnyID Connectors Solution requires a special Access Analyzer license. It can be installed from the Instant Job Wizard. See the [Instant Job Wizard](/docs/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/overview.md) topic for additional information.

![AnyID Connectors Solution in the Jobs Tree](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.webp)

Once installed into the Jobs tree, navigate to the solution: __Jobs__ > __AnyID Connectors__.

## Jobs

The AnyID Connectors Solution provides a series of preconfigured jobs which allow end-users to integrate with third-party systems of record such as Paycom or Salesforce, to extract a list of potential data subjects along with relevant bits of PII such as Social Security Number, Address, or Phone Number.

The jobs within this group create and add to the secure IdentityIndex™ containing identity-related attributes about potential subjects which are then used by Access Analyzer’s Sensitive Data Discovery engine to perform exact data matching against virtually any cloud or on-premises data repository.

![AnyID Connectors Solution Overview page](/img/product_docs/accessanalyzer/enterpriseauditor/admin/runninginstances/overviewpage.webp)

The jobs in the AnyID Connectors Solution are:

- [AnyID\_CSV Job](/docs/accessanalyzer/enterpriseauditor/solutions/anyid/anyid_csv.md) – Imports a list of identities and attributes from a CSV file. Use this when a native integration may not be available, or an export is the best option.
- [AnyID\_EpicClarity Job](/docs/accessanalyzer/enterpriseauditor/solutions/anyid/anyid_epicclarity.md) – Collects patient information from Epic including MRNs, SSNs, Subscriber IDs, and Account IDs. An account with read access to the underlying Clarity Oracle database is required in order to run queries.
- [AnyID\_Paycom Job](/docs/accessanalyzer/enterpriseauditor/solutions/anyid/anyid_paycom.md) – Pulls employee information from Paycom including Name, Address, Date of Birth, and SSN. Contact your Paycom administrator in order to generate the CSV export required for this job.
- [AnyID\_Salesforce Job](/docs/accessanalyzer/enterpriseauditor/solutions/anyid/anyid_salesforce.md) – Collects Salesforce Contact details including Phone, Address, Email, and Date of birth. This job requires API access to Salesforce in order to collect this information.

__NOTE:__ See the individual job topics for information on recommended configurations.
