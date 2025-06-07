# AD\_ShadowAccess Job

This job finds shadow access that leads to compromise of a domain or sensitive data. Attackers can chain vulnerabilities to escalate privileges from a non-privileged user to administrator with only a few steps. This job will generate the shortest path between every non-privileged user to a domain administrative group, total domain compromise, or access to sensitive data.

This job will analyze the following links between resources and privileges in your environment:

- Effective Group Membership
- Modify Group Membership
- Reset User Password
- Access through adminSDHolder
- DCSync/Domain Replication privileges
- Shared passwords between domain accounts
- Groups that provide access to sensitive data
- Local administrators that can dump hashes from user sessions
- Administrative rights on SQL Servers that hold sensitive data

The AD\_ShadowAccess Job has special dependencies. See the [Recommended Configurations for AD Permissions Analyzer Solution](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/recommended.md) topic for additional information.

## Analysis Tasks for the AD\_ShadowAccess Job

Navigate to the __Active Directory Permissions Analyzer__ > __AD\_ShadowAccess__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks, with the exception of the __Calculate Shadow Access__ analysis tasks. The analysis tasks are preconfigured for this job. The __Calculate Shadow Access__ analysis task is the only analysis task that has customizable parameters.

![Analysis Tasks for the AD_ShadowAccess Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/shadowaccessanalysis.png)

The default analysis tasks are:

- Shadow Access Schema – Sets up the Shadow Access Tables and Views
- Dijkstra – Creates an interim processing table in the database for use by downstream analysis and report generation
- Path Formatting – Creates an interim processing table in the database for use by downstream analysis and report generation
- String Split – Creates an interim processing table in the database for use by downstream analysis and report generation
- Calculate Shadow Access – Creates the SA\_ShadowAccess\_Details table accessible under the job’s Results node

  - This Analysis Task has configurable parameters. See the [Configure the Analysis Tasks for the AD\_ShadowAccess Job](#Configure-the-Analysis-Tasks-for-the-AD_ShadowAccess-Job) topic for additional information.
- Shadow Access Paths Cleanup – Removes calculated rows that are no longer used

In addition to the tables and views created by the analysis tasks, the AD\_ShadowAccess Job produces the following pre-configured reports.

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Domain Shadow Access | This report will calculate the shortest path between highly sensitive privileges and non-privileged users. | None | This report is comprised of five elements:   - Bar Chart – Displays summary information on targeted domain - Table – Provides details on targeted domain in table form - Table – Provides details on exploited permissions - Table – Provides details on vulnerabilities - Table – Provides details on domain users and attack paths that can be used against those domain users |
| Sensitive Data Shadow Access | This report will calculate the shortest path between highly sensitive data and non-privileged users. | None | This report is comprised of five elements:   - Bar Chart – Displays summary information on sensitive data - Table – Provides details on sensitive data in table form - Table – Provides details on exploited permissions - Table – Provides details on vulnerabilities - Table – Provides details on domain users and attack paths that can be used against those domain users |

See the [Report Functions for the AD\_ShadowAccess Job](#Report-Functions-for-the-AD_ShadowAccess-Job) topic for additional information.

### Customizable Analysis Tasks for the AD\_ShadowAccess Job

The default values for customizable parameters are:

| Analysis Task | Customizable Parameter Name | Default Value | Instruction |
| --- | --- | --- | --- |
| Calculate Shadow Access | @session | 1 | Set to 0 to turn off Session Analysis |
| @shared\_password | 0 | Set to 0 to turn of Shared Password Analysis |  |
| @modify\_group\_membership | 1 | Set to 0 to turn off Modify Group Membership analysis |  |
| @sensitive\_data | 1 | Set to 0 to ignore sensitive data attacks |  |
| @dcsync | 1 | Set to 0 to ignore dcsync rights |  |
| @sdholder | 1 | Set to 0 to ignore sdadminholder |  |
| @disabled | 0 | Set to 0 to ignore disabled users |  |

See the [Configure the Analysis Tasks for the AD\_ShadowAccess Job](#Configure-the-Analysis-Tasks-for-the-AD_ShadowAccess-Job) topic for additional information.

### Configure the Analysis Tasks for the AD\_ShadowAccess Job

Customizable parameters enable Access Analyzer users to set the values used to classify user and group objects during this job’s analysis. The parameters can be customized and are listed in a section at the bottom of the SQL Script Editor. Follow the steps to customize an analysis task’s parameters.

__Step 1 –__  Navigate to the __Active Directory Permissions Analyzer__ > __AD\_ShadowAccess__ > __Configure__ node and select __Analysis__ to view analysis tasks.

![Configure Calculate Shadow Access task from Analysis Selection view](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/shadowaccessanalysisconfigure.png)

__Step 2 –__  In the Analysis Selection view, select the __Calculate Shadow Access__ analysis task, then click __Analysis Configuration__. The SQL Script Editor opens.

![SQL Script Editor](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/shadowaccesssqlscripteditor.png)

__Step 3 –__  In the parameters section at the bottom of the editor, find the Value column. Double-click on the current value and change as desired.

- If the variable type is a table, select the cell and click __Edit Table__ to modify the value.

__CAUTION:__ Do not change any parameters where the Value states ```Created during execution```.

__Step 4 –__  Click __Save and Close__ to finalize the customization and close the SQL Script Editor window.

The customizable analysis task parameters are now configured and ready to run.

### Report Functions for the AD\_ShadowAccess Job

The reports generated by the AD\_ShadowAccess Job presents users with an overview of vulnerabilities and attack paths within the targeted environments.

![Shadow Access reports in the job's Results node](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/shadowaccessreports.png)

Navigate to the __Active Directory Permissions Analyzer__ > __AD\_ShadowAccess__ > __Results__ node to view the AD\_ShadowAccess job reports.

__NOTE:__ These reports can also be accessed through the Web Console. See the [Viewing Generated Reports](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/report/view.md) topic for additional information.

![Exploited Permissions and Vulnerabilities on Shadow Access reports](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/shadowaccessreport1.png)

The Domain Shadow Access and Sensitive Data Shadow Access reports provide information on the exploited permissions and vulnerabilities that can be used as attack paths for shadow access to domain and sensitive data.

- Exploited Permissions – Displays summary information of the types of permissions that can be exploited by shadow attacks and the number of occurrences of those permissions
- Vulnerabilities – Displays summary information of the vulnerabilities that were detected and the number of occurrences of those vulnerabilities

![Report element displaying information on potential attack paths for users found in the targeted domain](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/shadowaccessreport2.png)

The last report element displays information on potential attack paths for users found in the targeted domain. Clicking on the green plus sign next to an attack path will open an Attack Path window that displays a step-by-step process of how a user object, if compromised, can be used to conduct a shadow attack.

![Attack Path window example](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/shadowaccessreport3.png)

The Attack Path window displays how a user object can be used in a shadow attack.

- Example:

  - The ```Everyone``` principle has the rights to reset the password of ```LSA```
  - ```LSA``` can modify group membership of ```Domain Admins```
  - The Attack Path window reveals that every user in the domain is effectively a Domain Admin

![Attack Path window example](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectorypermissionsanalyzer/shadowaccessreport4.png)

The number of objects and the direction of the arrows can change depending on the attack path and related elements.

- Example:

  - The ```testgroupuser10``` user object is a Local Admin on the ```TESTS``` server
  - A user object that has a session on the ```TESTS``` server is a member of the ```Domain Admins``` group
  - If the ```testgroupuser10``` user object becomes compromised, an attacker can scrape the password hash on a user object’s local session on ```TESTS``` that also is a member of ```Domain Admins``` and become a Domain Admin itself
