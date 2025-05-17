---
sidebar_position: 5293
title: AD_DomainInfo Job
---

# AD\_DomainInfo Job

The AD\_DomainInfo Job provides operational reporting related to the collected domains, sites, and trusts, providing details such as high level object counts by domain or site, domain and forest functional levels, and types and directions of trusts.

## Queries for the AD\_DomainInfo Job

The AD\_DomainInfo Job uses the ActiveDirectory Data Collector and the LDAP Data Collector for the following queries:

**CAUTION:** Do not modify the queries. The queries are preconfigured for this job.

![Query Selection](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Domains/DomainInfoQuery.png "Query Selection")

The queries for this job are:

* Trusts – Targets one domain controller per forest to retrieve domain trust information
* Sites – Targets one domain controller per forest to retrieve domain site information
* Domains – Targets one domain controller per forest to retrieve domain information
* Trust Filtering – Queries the host specified to retrieve domain trust information
* dSHeuristics – Returns dSHeuristics Unicode string using LDAP

**NOTE:** See the Active Directory Data Collector and LDAP Data Collector sections for additional information

## Analysis Tasks for the AD\_DomainInfo Job

Navigate to the **Active Directory > 5.Domains > AD\_DomainInfo > Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Analysis Selection](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/ActiveDirectory/Domains/DomainInfoAnalysis.png "Analysis Selection")

The default analysis tasks are:

* Domain Summary – Creates interim processing tables in the database for use by downstream analysis and report generation
* Site Summary – Creates an interim processing table in the database for use by downstream analysis and report generation
* Trust Details – Creates an interim processing table in the database for use by downstream analysis and report generation
* dSHeuristics Details – Creates an interim processing table in the database for use by downstream analysis and report generation

In addition to the tables and views created by the analysis tasks, the AD\_DomainInfo Job produces the following pre-configured reports:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Domains | This report lists the forest sites and presents the total number of domain controllers, GC Servers, and users per site. | None | This report is comprised of two elements:   * Stacked Bar Chart – Displays domains  * Table – Provides details on domains |
| Sites | This report lists the sites and counts the domain controllers, global catalogue servers, and users of each. | None | This report is comprised of two elements:   * Bar Chart – Displays sites by user count  * Table – Provides details on sites by user count |
| Trusts | This report lists the domains and presents the trust information, including type, direction, and transitivity. | None | This report is comprised of one elements:   * Table – Provides details on domains and trusts |