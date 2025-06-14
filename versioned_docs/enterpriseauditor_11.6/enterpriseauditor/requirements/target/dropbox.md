# Target Dropbox Requirements, Permissions, and Ports

The Enterprise Auditor for AWS Solution provides the ability to audit Dropbox. It scans:

- Dropbox

Data Collector

This solution employs the following data collector to scan the target environment:

- [DropboxAccess Data Collector](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/dropboxaccess/overview.md)

## Permissions

- Dropbox Team Administrator

The DropboxAccess Data Collector requires the generation of an access token that is used to configure the Connection Profile for Dropbox. The access token is generated from within the Dropbox Access Auditor Data Collector Wizard on the Scan Options page. Once the access token is copied into a Connection Profile for Dropbox, it will be saved and does not need to be generated again. See the [DropboxAccess: Scan Options](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/dropboxaccess/scanoptions.md) topic for additional information.

## Ports

The following firewall ports are needed:

For DropboxAccess Data Collector

- TCP 80
- TCP443
