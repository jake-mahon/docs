# AD\_DomainControllers Job

The 0.Collection > AD\_DomainControllers Job collects domain controller details which will be further analyzed in order to provide information on domains, sites, and trusts.

## Queries for the AD\_DomainControllers Job

The AD\_DomainControllers Job uses the LDAP Data Collector and the ActiveDirectory Data Collector for the following queries:

__CAUTION:__ Except the first query, do not modify the remaining queries. The remaining queries are preconfigured for this job.

![Query Selection](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/domains/collection/domaincontrollersquery.png)

The queries for this job are:

- Domain Controller Listing – Targets one domain controller per domain known to Enterprise Auditor to collect a listing of all domain controllers
  - Can be modified to connect securely with TLS/SSL.
  - See the [Connect Securely with TLS/SSL](#connect-securely-with-tlsssl) topic for additional information.
- Actual Bridgehead Servers – Targets one domain controller per domain known to Enterprise Auditor to collect all of the bridgehead servers for each site
- Global Catalog Servers – Targets one domain controller per domain known to Enterprise Auditor to extract a list of GCs for each site
- Significant DCs – Targets one domain controller per domain known to Enterprise Auditor to gather information about the significant DCs
- Preferred Bridgehead Servers – Targets one domain controller per domain known to Enterprise Auditor to list the preferred bridgehead servers for each site

  __NOTE:__ See the Active Directory Data Collector and LDAP Data Collector sections for additional information.

### Connect Securely with TLS/SSL

The Domain Controller Listing Query in the AD\_DomainControllers Job is configured to use the LDAP Data Collector. This query can be optionally configured to connect securely with TLS/SSL.

__CAUTION:__ Do not modify any other settings in this query.

__Step 1 –__ Navigate to the job’s > __Configure__ node and select __Queries__.

__Step 2 –__ In the Query Selection view, select the _Domain Controller Listing_ Query and click __Query Properties__. The Query Properties window displays.

__Step 3 –__ Select the __Data Source__ tab, and click __Configure__. The LDAP template form wizard opens.

![LDAP template form](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/domains/collection/ldaptemplate.png)

__Step 4 –__ Click __Options__.

![Connection Options](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/activedirectory/domains/collection/ldaptemplateoptions.png)

__Step 5 –__ On the Options page, select __Connect Securely with TLS/SSL__. Optionally, select __Ignore Certificate Errors__ to connect even if certificate errors occur. Use __Server Port__ 686 for a secure connection. Click __OK__ to close the Options page.

__Step 6 –__ Step 13 – Then click __OK__ to close the LDAP template form wizard.

The job now connects securely with TLS/SSL.
