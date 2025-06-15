# Export

## What is an export?

An export is used for extracting the data saved in the MSSQL database. Both selective (manual) and
automated [System tasks](../extras/system_tasks/system_tasks.md) can extract information from
Netwrix Password Secure in this manner.

**CAUTION:** Please note that extracting passwords is always associated with a weakening of the
security concept. The informative value of the logbook will suffer when data is exported because the
revision of this data will no longer be logged. This aspect needs to be taken into account
particularly in conjunction with the Netwrix Password Secure
[Export wizard](export_wizard/export_wizard.md) because the export result is not separately secured
by a password.

The export function is accessed via the Main menu/Export. There are two fundamental types of export
– the WebViewer export and the export wizard. However, the latter is divided into four
subcategories.

![installation_with_parameters_63](../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/installation_with_parameters_63.webp)

The [HTML WebViewer export](html_webviewer-export/html_webviewer_export.md) creates a HTML file
protected by a password. In contrast, the export wizard creates an open and unprotected .csv file.

## Requirements

Permissions are used to define whether a record can be exported or not. Various protective
mechanisms can be applied. Restrictions can be placed on either the record itself and also via user
rights

- **The permissions for the record:** The permissions for the record define whether a record can be
  exported

![Export in the ribbon](../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/installation_with_parameters_64-en.webp)

In this example, the marked role IT employee does not have the required permissions to export the
record. In contrast, the IT manager does have the required permissions. In addition, the
administrator possesses all rights, including the right to export.

#### Relevant right

The following option is required.

User right

- Can export

NOTE: If a record is exported, this user right and also the corresponding permissions for the record
must be set. The user right defines whether a user can generally export data, while the permissions
for the record define which records can be exported.
