# AD\_ComputerModifications Job

The AD\_ComputerModifications Job provides a report of all changes to computer objects.

## Analysis Tasks for the AD\_ComputerModifications Job

Navigate to the __Active Directory__ > __6.Activity__ > __Changes__ > __AD\_ComputerModifications__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_ComputerModifications Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/changes/computermodificationsanalysis.png)

The following non-configurable analysis tasks are selected by default:

- All Computer Object Changes – Creates the SA\_AD\_ComputerChanges\_ComputerSummary table accessible under the job’s Results node
- Summarize by Computer – Creates the SA\_AD\_ComputerChanges\_ComputerSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD\_ComputerModifications Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Computer Account Changes | Track changes to computer objects. | CPAA  GDPR  SOX  HIPAA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of three elements:   - Pie Chart – Displays Changes by Type  - Table – Displays Changes by Computer  - Table – Displays Computer Change Details |
