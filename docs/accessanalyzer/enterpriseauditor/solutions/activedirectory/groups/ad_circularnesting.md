# AD_CircularNesting Job

The AD_CircularNesting Job identifies circularly nested groups within Active Directory which can pose administrative and operational challenges with identifying effective access to resources.

## Analysis Tasks for the AD_CircularNesting Job

Navigate to the __Active Directory__ > __1.Groups__ > __AD_CircularNesting__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_CircularNesting Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/exchange/distributionlists/membershipanalysis/circularnestinganalysis.webp)

The default analysis tasks are :

- Circular Nesting Details – Creates the SA_AD_CircularNesting_Details table accessible under the job’s Results node
- Domain Summary – Creates the SA_AD_CircularNesting_DomainSummary table accessible under the job’s Results node

In addition to the tables and views created by the analysis tasks, the AD_CircularNesting Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Circular Nesting | This report identifies instances of circular nesting within the environment. | None | This report is comprised of three elements:   - Bar Chart – Displays circular nesting by domain  - Table – Provides details on circular nesting  - Table – Provides details on circular nesting by domain |
