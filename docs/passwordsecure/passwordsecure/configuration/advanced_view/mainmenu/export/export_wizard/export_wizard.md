# Export wizard

## What export wizards are there?

There are a total of four different export wizards.

![installation_with_parameters_74_548x283](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/export_wizard/installation_with_parameters_74_548x283.png)

The functionality of these wizards only differs based on the data to be exported. A distinction is made between passwords, organisational structures, forms and applications. __As all four wizards are handled in the same way, the following section will only describe the password export wizard.__ The remaining three wizards function in the same way.

## What is the password export wizard?

This wizard allows records to be exported in standard.csv format. In contrast to the [HTML WebViewer export](/docs/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/html_webviewer-export/html_webviewer_export.md), the resulting file is not protected by a password. It goes without saying that this feature must be used carefully.

## Starting the password export wizard

The export wizard can be accessed in a variety of different ways:

- __Starting via Main menu/Extras:__ If the wizard is opened, the export will include all passwords for which the registered user has the required permissions. If the user is an administrator with permissions for all records, the export will include all passwords in the database.
- __Starting via the ribbon:__ The export can also be started via the [Ribbon](/docs/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/ribbon/ribbon.md) in the [Passwords](/docs/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwords/passwords.md) module.

![Export ribbon](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/export_wizard/installation_with_parameters_75-en.png)

The password export wizard can be started via the ribbon in two ways. __Selected passwords__ exports only those passwords marked in list view, whereby __Passwords based on the filter__ uses the currently defined filter settings as the criteria.

The wizard

A diverse range of variables for the export and the storage location can be defined in the wizard. A corresponding preview is also provided.

![installation_with_parameters_76](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/export/export_wizard/installation_with_parameters_76.png)

Once the wizard has been completed, the desired export is created and saved to the defined storage location.

__CAUTION:__ It is important to once again point out the sensitive nature of this export function that could have critical consequences from a security perspective. As the required permissions for this export are generally only granted to users/roles with higher positions in the hierarchy, this subject is even more relevant from a security perspective: It is possible to export all passwords for which a user has the required permissions. Administrators could thus (intentionally or unintentionally) cause more damage per se.
