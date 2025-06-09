# Oracle\_DataDictionaryProtection Job

The Oracle\_DataDictionaryProtection Job is designed to identify if the Oracle data dictionary views are accessible by all schemas. Oracle best practice recommendation is to restrict access to data dictionary views by default and grant explicit system privileges to access the dictionary views when needed.

## Analysis Tasks for the Oracle\_DataDictionaryProtection Job

Navigate to the __Jobs >  Databases > Oracle > 4.Configuration > Oracle\_DataDictionaryProtection > Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/configuration/analysisddprotection.png)

The default analysis tasks are:

- Find Instances with Modifiable Data Dictionary – Finds Oracle database instances where data dictionary can be modified by users with system privilege access. Creates the SA\_Oracle\_DictionaryAccessible\_Details table accessible under the jobs Result’s node.
- Data Dictionary Accessibility Summary – Highlights the number of database instances with the data dictionary access enabled and disabled. Creates the SA\_Oracle\_DictionaryAccessible\_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the __Oracle\_DataDictionaryProtection Job__ produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Data Dictionary Accessibility | The report highlights the number of instances with either accessible or inaccessible data dictionaries | None | This report is comprised of two elements:   - Pie Chart – Displays data dictionary accessibility - Table – Provides information on dictionary accessibility details |
