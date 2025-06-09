# AD\_AuthenticationProtocol Job

The AD\_Authentication Job shows what protocols are being used to authenticate across the environment and will help to identify what services and computers may be affected when disabling NTLM.

## Analysis Tasks for the AD\_AuthenticationProtocol Job

Navigate to the __Active Directory__ > __6.Activity__ > __Operations__ > __AD\_AuthenticationProtocol__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_AuthenticationProtocol Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/operations/authenticationprotocolanalysis.png)

The default analysis tasks are:

- Summarize Protocol Usage – Creates the SA\_AD\_AuthenticationProtocol\_Summary table accessible under the job’s Results node
- Summarize Host Protocol Usage – Creates the SA\_AD\_AuthenticationProtocol\_Hosts table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD\_AuthenticationProtocol Job produces the follow pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Authentication Protocols | Track the prevalence of NTLM versus Kerberos within the environment. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of two elements:   - Pie – Displays authentication protocols  - Table –  Displays authentication protocols summary |
