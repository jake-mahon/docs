# AD\_UserDelegation Job

The AD\_Delegation Job highlights user accounts which are trusted for delegation. Kerberos delegation enables an application to access resources hosted on a different server, and opens up several avenues to compromise based on the type of delegation enabled.  See the [What Is Kerberos Delegation?](https://blog.netwrix.com/2021/11/30/what-is-kerberos-delegation-an-overview-of-kerberos-delegation/) Netwrix blog article for more information about this configuration and the related security risks.

## Analysis Task for the AD\_UserDelegation Job

Navigate to the __Active Directory__ > __2.Users__ > __AD\_UserDelegation__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Task for the AD_UserDelegation Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/users/userdelegationanalysis.png)

The default analysis tasks are:

- Determine users for trusted delegation – Creates the SA\_AD\_UserDelegation\_Details table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the AD\_UserDelegation Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Users Trusted for Delegation | This report highlights which users are trusted for delegation, which accounts are sensitive, and whether the delegation is constrained or unconstrained. | None | This report is comprised of three elements:   - Bar Chart – Displays users trusted for delegation by domain  - Table – Provides details on users trusted for delegation  - Table – Provides details on users trusted for delegation by domain |
