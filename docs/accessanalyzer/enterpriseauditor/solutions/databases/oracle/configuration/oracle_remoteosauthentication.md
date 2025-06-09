# Oracle\_RemoteOSAuthentication Job

The Oracle\_RemoteOSAuthentication Job is designed to discover if remote OS authentication is enabled for the targeted Oracle database servers.

## Analysis Tasks for the Oracle\_RemoteOSAuthentication Job

Navigate to the __Jobs > Databases > Oracle > 4.Configuration > Oracle\_RemoteOSAuthentication > Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/databases/oracle/configuration/analysisremoteosauth.png)

The default analysis tasks are:

- Find Instances With Remote OS Authentication Enabled – Finds database instances with remote OS authentication setting set to “TRUE”. Creates the SA\_Oracle\_RemoteAuthenticationEnabled\_Details table accessible under the job’s Results node.
- Remote OS Authentication Summary – Counts the number of database instances where the ‘remote\_os\_authent’ parameter is set to “TRUE” and also those that are set to “FALSE”. Creates the SA\_Oracle\_RemoteOSAuthentication\_Summary table accessible under the job’s Results node.

In addition to the tables and views created by the analysis task, the Oracle\_RemoteOSAuthentication Job produces the following pre-configured report.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Oracle Remote OS Authentication | This report shows the number of instances that have remote\_os\_auth parameter set to “TRUE” | None | This report is comprised of two elements:   - Pie Chart – Displays remote OS authentication - Table – Provides information on remote OS authentication details |
