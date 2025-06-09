# Host Discovery Wizard

The Host Discovery Wizard gives complete control over how hosts are discovered on the targeted network and which hosts are discovered.

![Console with Create Query Option Highlighted](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/wizard/createqueryhighlighted.png)

Use the Host Discovery Wizard to create new queries. The wizard opens in the Results pane. Use any of the following methods in order to access the Host Discovery Wizard from the Host Discovery node:

- Select __Create Query__ in the Activities pane
- Right-click the __Host Discovery__ node and select __Create Query__ from the pop-up menu
- Right-click anywhere in the Host Discovery Queries table and select __Create Query__ from the pop-up menu

![Host Discovery Wizard](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/wizard/hostdiscoverywizard.png)

The first step in creating a Host Discovery query is to select the source where the query searches for hosts. Hosts are discoverable using one of the following options:

- [Scan IP Network](/docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/wizard/ipnetwork.md) – Scans a specified range of IP Addresses for active hosts and resolves the names of machines using DNS
- [Query an Active Directory Server (General)](/docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/wizard/adgeneral.md) – Scans the default domain controller or a specified server for all computer objects, can be scoped
- [Query an Active Directory Server (Discover Exchange servers)](/docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/wizard/adexchange.md) – Scans the default domain controller or a specified server but is scoped to return only computer objects sitting in the configuration container for Exchange servers
- [Query an Active Directory server (Discover Domain Controllers)](/docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/wizard/addomaincontrollers.md) – Scans the default domain controller or a specified server but is scoped to return only machines which are domain controllers
- [Import From a Local CSV File](/docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/wizard/csv.md) – Imports a host list from a specified CSV file
- [Import From a Database](/docs/accessanalyzer/enterpriseauditor/admin/hostdiscovery/wizard/database.md) – Imports a host list from a specified SQL Server database

__NOTE:__ The Advanced Options checkbox in the lower-left corner is a legacy item and should not be selected.
