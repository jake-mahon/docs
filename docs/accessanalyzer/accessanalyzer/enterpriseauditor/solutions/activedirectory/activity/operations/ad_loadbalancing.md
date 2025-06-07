# AD\_LoadBalancing Job

The AD\_LoadBalancing Job analyzes each domain controller's traffic to show what percent of all LDAP, Replication, Authentication and Changes are being handled by that particular machine. This helps to highlight domain controllers which are over utilized relative to others within the domain, or unused domain controllers which may be decommissioned.

## Analysis Task for the AD\_LoadBalancing Job

Navigate to the __Active Directory__ > __6.Activity__ > __Operations__ > __AD\_LoadBalancing__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Task for the AD_LoadBalancing Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/operations/loadbalancinganalysis.png)

The default analysis task is:

- Domain Controller Traffic – Creates the SA\_AD\_LoadBalancing\_DomainControllers table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD\_LoadBalancing Job produces the follow pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Domain Controllers | This report identifies the distribution of change events and authentication events between domain controllers in the monitored environment. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of three elements:   - Bar Chart – Displays top DCs by authentication traffic  - Bar Chart – Displays top DCs by change traffic  - Table – Displays domain controller traffic details |
