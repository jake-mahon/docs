# Configuration Backup

__NOTE:__ Only available for ‘Superusers’

The Backup utility allows for the migration of complex Netwrix Data Classification instance configurations.

This allows a user to safely design and test a Netwrix Data Classification configuration within a development environment and then copy the configuration, or specific parts of the configuration, to a different environment (I.E production).

The tool supports text replacement to allow user defined URL's to be replaced by the equivalent destination URL. The following configuration options are available for import / export:

- Source Registrations
- SharePoint Termset Registrations
- Workflow Configurations
- Core Configuration Options:

  - Files Excluded
  - Files Included
  - Mapped Metadata Fields
  - Mapped Metadata Values
  - Supported Languages
  - Pages Excluded
  - Pages Included
  - SharePoint Excluded
  - Text Patterns

Follow the steps to create configuration backup.

__Step 1 –__ Go to __Settings__ > __Config__ > __Utilities__.

![utilitiesbackup](../../../../../static/img/product_docs/dataclassification/ndc/admin/utilities/utilitiesbackup.webp)

__Step 2 –__ From the navigation menu on the left, click __Backup/Restore.__

__Step 3 –__  Click __Create Backup__ and select the elements that you wish to include (sources, SharePoint taxonomies, or workflows).

__NOTE:__ The backup password will be required if you export a backup to XML and re-import to a different environment. This option is required on __Upload Backup__ step.

__Step 4 –__ Click __Save__.

Upon import any items that already exist will be skipped.
