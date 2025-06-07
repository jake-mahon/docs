# AD\_DomainControllerTraffic Job

The AD\_DomainControllerTraffic Job provides a summary of the amount of traffic for Changes, Authentication, Replication, and LDAP Queries for each domain controller which can be used to identify issues with load balancing. If the AD\_DCSummary job has been run, the roles for each domain controller will be provided.

## Analysis Tasks for the AD\_DomainControllerTraffic Job

Navigate to the __Active Directory__ > __6.Activity__ > __Operations__ > __AD\_DomainControllerTraffic__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_DomainControllerTraffic Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/operations/dctrafficanalysis.png)

The default analysis task is:

- Summarize Protocol Usage – Creates the SA\_AD\_DomainControllerTraffic\_Details table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD\_DomainControllerTraffic Job produces the follow pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Domain Controller Traffic | Identifies the amount of active directory events that occur on each domain controller. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of one element:   - Table –  Displays a Domain Controller summary |
