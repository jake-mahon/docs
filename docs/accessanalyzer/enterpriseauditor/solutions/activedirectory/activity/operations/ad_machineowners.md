# AD\_MachineOwners Job

The AD\_MachineOwners Job helps to identify the owner of a particular host.

## Analysis Tasks for the AD\_MachineOwners Job

Navigate to the __Active Directory__ > __6.Activity__ > __Operations__ > __AD\_MachineOwners__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_MachineOwners Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/activedirectory/activity/operations/machineownersanalysis.webp)

The default analysis tasks are:

- Identify Machine Owners – Creates the SA\_AD\_MachineOwners\_Details table accessible under the job’s Results node
- User Summary – Creates the SA\_AD\_MachineOwners\_UserSummary table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD\_MachineOwners Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Machine Owners | Identify owners of machines based on authentication patterns. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of two elements:   - Bar Chart– Displays top users by machines owned  - Table – Displays machine owners |
