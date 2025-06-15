# LDAP > AD_LDAPQueries Job

The __LDAP__ > __AD_LDAPQueries__ Job analyzes LDAP traffic to determine trends such as most expensive queries, most active servers and users, successful/failed and signing status. This data can be used to troubleshoot performance issues, load balancing, and poorly configured services.

![AD_LDAPQueries Job in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/activity/ldapjobstree.png)

___RECOMMENDED:___ Schedule this job to run with the 0.Collection job group.

## Analysis Tasks for the AD_LDAPQueries Job

Navigate to the __Active Directory__ > __6.Activity__ > __LDAP__ > __AD_LDAPQueries__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Except for the __Largest Queries__ task, do not modify or deselect the remaining selected analysis tasks. The remaining analysis tasks are preconfigured for this job.

![Analysis Tasks for the AD_LDAPQueries Job](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/activity/ldapqueriesanalysis.png)

The following non-configurable analysis tasks are selected by default:

- SSL – Creates the SA_AD_LDAPQueries_SSLStatus table accessible under the job’s Results node
- Host Summary – Creates the SA_AD_LDAPQueries_HostSummary table accessible under the job’s Results node
- User Summary – Creates the SA_AD_LDAPQueries_UserSummary table accessible under the job’s Results node

The following configurable analysis task can be optionally enabled:

- Largest Queries – Creates the SA_AD_LDAPQueries_ExpensiveQueries table accessible under the job’s Results node

In addition to the tables created by the analysis tasks, the AD_LDAPQueries Job produces the follow pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Largest LDAP Queries | Shows LDAP queries returning the most objects, and their source. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of three elements:   - Bar – Displays top users by LDAP traffic  - Table – Displays top users by LDAP traffic  - Table – Displays Expensive LDAP Queries |
| LDAP Overview | Overview of hosts and users performing queries, and query security. | CCPA  GDPR  SOX  HIPPA  PCI-DSS  GLBA  ITAR  FERPA  FISMA  ISO27001 | This report is comprised of four elements:   - Pie – Displays SSL query events view results  - Pie – Displays query security flags  - Table – Displays users performing LDAP queries  - Table – Displays originating hosts |

### Configure the Largest Queries Analysis Task

Customizable parameters enable you to set the values used to control the minimum objects returned and the days of traffic to analyze during this job’s analysis. The parameters can be customized and are listed in a section at the bottom of the SQL Script Editor. Follow the steps to customize an analysis task’s parameters.

__Step 1 –__ Navigate to the __Active Directory__ > __6.Activity__ > __LDAP__ > __AD_LDAPQueries__ > __Configure__ node and select __Analysis__.

![Largest Queries analysis task configuration](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/activity/ldapqueriesanalysisconfiguration.png)

__Step 2 –__ In the Analysis Selection view, select the __Largest Queries__ analysis task and click __Analysis Configuration__. The SQL Script Editor opens.

__CAUTION:__ Do not change any parameters where the Value states ```Created during execution```.

![Largest Queries analysis task in the SQL Script Editor](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/activity/ldapsqlscripteditor.png)

__Step 3 –__ In the parameters section at the bottom of the editor, find the Value column. There are two integer variables that can be modified. Double-click on the current __value__ and change as desired:

- @objects_returned – Controls the minimum number of objects returned for the queries to be considered large. This value is set to 100 by default.
- @timeframe – Controls the number of days to analyze traffic for. This value is set to 30 days by default.

__Step 4 –__ Click __Save and Close__ to finalize the customization and close the SQL Script Editor window.

The analysis task now includes custom parameters for the updated values.
