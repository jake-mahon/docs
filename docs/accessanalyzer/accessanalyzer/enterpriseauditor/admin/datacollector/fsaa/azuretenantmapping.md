# FSAA: Azure Tenant Mapping

The Azure Tenant Mapping page is where the target domain or Tenant ID are configured for Azure Information Protection (AIP) scanning. It is a wizard page for the categories of:

- File System Access/Permission Auditing Scan
- File System SDD Scan

Remember, select the __Enable scanning of files protected by Azure Information Protection__ checkbox on the [FSAA: Scan Settings](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/scansettings.md) page to enable this page in the data collector wizard. In order for FSAA to scan files protected by AIP, ensure that the prerequisites are met and an Azure Connection Profile is successfully created. See the [Azure Information Protection Target Requirements](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/requirements/target/config/azureinformationprotection.md) topic for additional information on configuring the File System solution to scan for AIP labels.

![FSAA Data Collector Wizard Azure Tenant Mapping page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/fsaa/azuretenantmapping.png)

Populate this page with the App ID (created during prerequisites) and a domain name or Tenant ID for an Azure environment. These values must be associated with each application ID in the Azure Connection Profile.

Use the __Add__ and __Remove__ buttons and manually enter or __Paste__ into the textbox the required information.
