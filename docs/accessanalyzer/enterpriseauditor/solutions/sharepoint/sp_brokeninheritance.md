# 3.Broken Inheritance > SP\_BrokenInheritance Job

Keeping track of directly applied permissions at mass is not realistic, the SP\_BrokenInheritance job is responsible for performing data analysis and generating SharePoint broken inheritance reports at the site level. This includes looking at site broken inheritance and the trustees who are assigned to those sites where inheritance is broken so that you can remove that access in favor of providing access via group membership.

![3.Broken Inheritance > SP_BrokenInheritance Job in the Jobs Tree](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/brokeninheritancejobstree.png)

The SP\_BrokenInheritance job is located in the 3.Broken Inheritance Job Group.

## Analysis Tasks for the SP\_BrokenInheritance Job

Navigate to the __Jobs__ > __SharePoint__ > __3.Broken Inheritance__ > __SP\_BrokenInheritance__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Tasks for the SP_BrokenInheritance Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/brokeninheritanceanalysis.png)

They need to remain in the default order:

- 1. Create Inheritance View – Creates the SA\_ENG\_SPAA\_Inheritance view accessible under the job’s Results node
- 2. Unique Trustees Table. Identifies where Trustees have been Added/Removed – Creates the SA\_SP\_BrokenInheritance\_UniqueTrustees table accessible under the job’s Results node
- 3. Pivot Unique Trustees Table – Creates the SA\_SP\_BrokenInheritance\_UniqueTrusteesPivot table accessible under the job’s Results node
- 4. Summarize by Site Collection – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables created by the analysis tasks which display resources with broken inheritance, the SP\_BrokenInheritance Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Broken Inheritance | This job is responsible for performing data analysis and generating SharePoint direct permission reports at the site level. This includes looking at site broken inheritance and the trustees who are assigned to those sites where inheritance is broken. | None | This report is comprised of two elements:   - Bar Chart – Displays top 5 site collections by resources with permission changes - Table – Provides a site collection summary - Table – Provides broken inheritance details |
