# AD\_HardcodedDCs Job

The AD\_HardcodedDCs Job highlights machines that have communicated with only one domain controller.

## Analysis Tasks for the AD\_HardcodedDCs Job

Navigate to the __Active Directory__ > __6.Activity__ > __Operations__ > __AD\_HardcodedDCs__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_HardcodedDCs Job](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/operations/hardcodeddcsanalysis.png)

The default analysis tasks are:

- Hardcoded DCs – Creates the SA\_AD\_Hardcoded\_DCs table accessible under the job’s Results node
- Summarizes Hardcoded DC Information – Creates the SA\_AD\_Hardcoded\_Summary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD\_Hardcoded DCs Job produces the follow pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Hardcoded DCs | This report identifies hosts which may have hardcoded domain controller information in server or application settings. Each host identified in this report has only contacted one domain controller. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of three elements:   - Pie –  Displays top domain controllers  - Table – Displays hardcoded domain controller summary  - Table – Displays host details |
