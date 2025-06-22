# Export wizard

## What export wizards are there?

There are a total of four different export wizards.

![installation_with_parameters_74_548x283](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/export/export_wizard/installation_with_parameters_74_548x283.webp)

The functionality of these wizards only differs based on the data to be exported. A distinction is
made between passwords, organisational structures, forms and applications. **As all four wizards are
handled in the same way, the following section will only describe the password export wizard.** The
remaining three wizards function in the same way.

## What is the password export wizard?

This wizard allows records to be exported in standard.csv format. In contrast to the
[HTML WebViewer export](/docs/passwordsecure/9.1/user-guides/administration/export-import/html-export.md),
the resulting file is not protected by a password. It goes without saying that this feature must be
used carefully.

## Starting the password export wizard

The export wizard can be accessed in a variety of different ways:

- **Starting via Main menu/Extras:** If the wizard is opened, the export will include all passwords
  for which the registered user has the required permissions. If the user is an administrator with
  permissions for all records, the export will include all passwords in the database.
- **Starting via the ribbon:** The export can also be started via the
  [Ribbon](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md)
  in the
  [Passwords](/docs/passwordsecure/9.1/user-guides/password-management/creating-passwords.md)
  module.

![Export ribbon](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/export/export_wizard/installation_with_parameters_75-en.webp)

The password export wizard can be started via the ribbon in two ways. **Selected passwords** exports
only those passwords marked in list view, whereby **Passwords based on the filter** uses the
currently defined filter settings as the criteria.

The wizard

A diverse range of variables for the export and the storage location can be defined in the wizard. A
corresponding preview is also provided.

![installation_with_parameters_76](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/export/export_wizard/installation_with_parameters_76.webp)

Once the wizard has been completed, the desired export is created and saved to the defined storage
location.

**CAUTION:** It is important to once again point out the sensitive nature of this export function
that could have critical consequences from a security perspective. As the required permissions for
this export are generally only granted to users/roles with higher positions in the hierarchy, this
subject is even more relevant from a security perspective: It is possible to export all passwords
for which a user has the required permissions. Administrators could thus (intentionally or
unintentionally) cause more damage per se.

# Export

## What is an export?

An export is used for extracting the data saved in the MSSQL database. Both selective (manual) and
automated
[System tasks](/docs/passwordsecure/9.1/user-guides/administration/extras/system-tasks.md)
can extract information from Netwrix Password Secure in this manner.

**CAUTION:** Please note that extracting passwords is always associated with a weakening of the
security concept. The informative value of the logbook will suffer when data is exported because the
revision of this data will no longer be logged. This aspect needs to be taken into account
particularly in conjunction with the Netwrix Password Secure
[Export wizard](/docs/passwordsecure/9.1/user-guides/administration/export-import/export-wizard.md)
because the export result is not separately secured by a password.

The export function is accessed via the Main menu/Export. There are two fundamental types of export
– the WebViewer export and the export wizard. However, the latter is divided into four
subcategories.

![installation_with_parameters_63](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/export/installation_with_parameters_63.webp)

The
[HTML WebViewer export](/docs/passwordsecure/9.1/user-guides/administration/export-import/html-export.md)
creates a HTML file protected by a password. In contrast, the export wizard creates an open and
unprotected .csv file.

## Requirements

Permissions are used to define whether a record can be exported or not. Various protective
mechanisms can be applied. Restrictions can be placed on either the record itself and also via user
rights

- **The permissions for the record:** The permissions for the record define whether a record can be
  exported

![Export in the ribbon](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/export/installation_with_parameters_64-en.webp)

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
