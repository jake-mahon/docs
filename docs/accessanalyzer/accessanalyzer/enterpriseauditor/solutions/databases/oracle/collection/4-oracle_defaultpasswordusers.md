# 4-Oracle\_DefaultPasswordUsers Job

The 4-Oracle\_DefaultPasswordUsers Job provides a list of users in the database that are configured to use default passwords.

## Query for the 4-Oracle\_DefaultPasswordUsers Job

The 4-Oracle\_DefaultPasswordUsers Job uses the SQL Data Collector for the following query:

![Query Selection](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/collection/jobgroup17.png)

- Users with Default Passwords – Collects usernames of users whose passwords have not been updated since the database creation

### Configure the 4-Oracle\_DefaultPasswordUsers Query

The 4-Oracle\_DefaultPasswordUsers Job is preconfigured to run using the default settings for the Permissions Collection category in the SQL Data Collector. Follow the steps to customize configurations:

__Step 1 –__ Navigate to the __Databases__ > __0.Collection__ > __Oracle__ > __4-Oracle\_DefaultPasswordUsers__ > __Configure__ node and select Queries.

__Step 2 –__ In the Query Selection view, select the Users with Default Passwords query and click on Query Properties. The Query Properties window opens.

__Step 3 –__ Select the Data Source tab and click Configure. The SQL Data Collector wizard opens.

__CAUTION:__ Do not make changes to wizard pages not listed in these steps. They have been pre-configured for this job.

![Filters Page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/databases/oracle/collection/4oracledefaultpasswordsfilterpage.png)

__Step 4 –__ To query for specific databases/instances, navigate to the Filter page. The default query target is All Databases. The default query scope is Only select database objects. Click Retrieve. The Available database objects section will be populated. Databases and instances can be added in the following ways:

- Select the desired database objects and click Add
- Use the Import CSV button to import a list from a CSV file, if desired
- Optionally, use the Add Custom Filter button to create and apply a custom filter

__Step 5 –__ Navigate to the Summary page, click Finish to save any setting modifications or click Cancel if no changes were made. Then click OK to close the Query Properties window.

The 4-Oracle\_DefaultPasswordUsers Job is now ready to run with the customized settings.
