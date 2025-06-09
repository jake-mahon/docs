# AD\_GroupHosts Job

The AD\_GroupHosts Job attempts to identify where groups may be used to provide access.

## Analysis Tasks for the AD\_GroupHosts Job

Navigate to the __Jobs__ > __Active Directory__ > __6.Activity__ > __GroupUsage__ > __AD\_GroupHosts__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_GroupHosts Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/groupusage/grouphostsanalysis.png)

The default analysis tasks are:

- Group Authentication Details – Creates the SA\_AD\_GroupHosts\_Details table accessible under the job’s Results node
- Summarize Authentication Events by Group – Creates the SA\_AD\_GroupHosts\_GroupSummary table accessible under the job’s Results node
- Summarize Authentication Events by Host – Creates the SA\_AD\_GroupHosts\_HostSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD\_GroupHosts Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Group Host Usage | Understand what groups are utilizing what hosts in the environment. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of three elements:   - Table – Displays security groups by target hosts  - Table – Displays hosts by associated groups  - Table – Displays authentication details |
