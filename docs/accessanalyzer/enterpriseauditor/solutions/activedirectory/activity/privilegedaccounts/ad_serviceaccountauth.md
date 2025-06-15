# AD_ServiceAccountAuth Job

The AD_ServiceAccountAuth Job shows the last time a service account, identified by the presence of a servicePrincipalName, was active within the environment.

## Analysis Task for the AD_ServiceAccountAuth Job

Navigate to the __Jobs__ > __Active Directory__ > __6.Activity__ > __Operations__ > __AD_ServiceAccountAuth__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Task for the AD_ServiceAccountAuth Job](../../../../../../../static/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/privilegedaccounts/serviceaccountauthanalysis.webp)

The following non-configurable analysis task is selected by default:

- Creates the SA_AD_ServiceAccountAuth_Details table accessible under the job’s Results node.

In addition to the tables created by the analysis tasks, the AD_ServiceAccountAuth Job produces the follow pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Service Accounts | Because many service accounts may not ever perform a logon, tracking authentication can be a better way to identify stale service accounts. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of two elements:   - Bar Chart– Displays stale service accounts  - Table – Displays account details |
