# Redshift_SensitiveData Job

This job provides information on all the sensitive data discovered in the targeted Redshift servers based on the selected scan criteria.

## Analysis Tasks for the Redshift_SensitiveData Job

Navigate to the __Jobs__ > __Databases__ >  __Redshift__ >  __Sensitive Data__ > __Redshift_SensitiveData__ > __Configure__ node and select __Analysis__ to view the Analysis Tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/redshift/sensitive_data/analysissensitivedata.webp)

The default analysis tasks are:

- Sensitive Data Details — Returns details around sensitive data in Redshift
- Database Summary — Summarizes Redshift sensitive data by database
- Enterprise Summary — Summarizes Redshift  sensitive data for the organization

## Reports for the for the Redshift_SensitiveData Job

In addition to the tables and views created the analysis task, the Redshift_SensitiveData Job produces the following preconfigured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Enterprise Summary | This report shows a summary of the criteria matches found in the Enterprise. | None | This report is comprised of two elements:   - Bar Chart - Displays exceptions by Match Count - Table - Displays Exception Details |
| Sensitive Data Overview | This report highlights objects which contain sensitive data criteria. | Sensitive Data | This report is comprised of three elements:   - Bar Chart - Displays top databases by Sensitive Data Hits - Table - Provides details on top databases with Sensitive Data - Table - Provides Sensitive Data Details |
