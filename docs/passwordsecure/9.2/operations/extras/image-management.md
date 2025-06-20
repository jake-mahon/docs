# Extras

## What are Extras?

Netwrix Password Secure provides a diverse range of supporting features that do not directly provide
added value but mostly build on existing approaches and expand their functionalities. They are
work-saving features that in total simplify the process of working with Netwrix Password Secure.

![installation_with_parameters_77_517x414](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/installation_with_parameters_77_517x414.webp)

- [Password rules](/docs/passwordsecure/9.2/core-features/password-management/password-rules.md)
- [Password generator](/docs/passwordsecure/9.2/core-features/password-management/password-generator.md)
- [Reports](/docs/passwordsecure/9.2/administration/reporting/reports-overview.md)
- [System tasks](/docs/passwordsecure/9.2/operations/system-tasks/system-tasks-overview.md)
- [Seal templates](/docs/passwordsecure/9.2/operations/extras/seal-templates.md)
- [Tag manager](/docs/passwordsecure/9.2/operations/tags/tag-management.md)
- [Image management](/docs/passwordsecure/9.2/operations/extras/image-management.md)

# Image management

## What is image management?

All logos and icons are managed in the image management. They can then be linked to the
corresponding data records. The images are then displayed in the Basic view as well as in the list
view of the client.

![Icon/logos in NPS](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/image_management/installation_with_parameters_106-en.webp)

## Relevant rights

The following options are required:

- Can upload new password images
- Can manage password images

NOTE: It is important that the setting “Ask for Favicon-Download “ is only considered, if the right
“Can upload new password images “ has been activated!

#### Managing Icons/Logos

There are two ways to upload icons.

1. By creating or saving the dataset.

In order to import favicons directly when saving the data set, the following preconditions must be
met:

- Setting “Ask Favicon-Download “ is activated.
- A URL is stored in the data record.

If these preconditions are met, the stored URL is checked for the favicon when saving the data
record. If a favicon is found, it will be imported into the database and displayed in the data
record in future.

NOTE: If there are several deposited, always use the first one.

2. Manual filing

In the main menu in [Extras](/docs/passwordsecure/9.2/operations/extras/image-management.md) you can find the image management. Here, you have the
possibility to store icons and logos manually.

![Image management](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/image_management/installation_with_parameters_107-en.webp)

Click on the + symbol to open the mask for creating images.

![add image](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/image_management/installation_with_parameters_108-en.webp)

- **Name** Name the picture here.

- **Search** **value** The following priority must be observed:

  - **Passwords**: first URL in the password (if several URLs are stored) -> attached tags ->
    password name -> names of connected applications
  - **Applications**: URL stored in the application -> attached tags -> application name

- ![icon_open_folder](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/image_management/icon_open_folder.webp)
  This symbol can be used to upload locally saved icons and logos.

NOTE: Please note that the icons and logos are not stored locally, but in the database.

## Conditions

The following conditions must be met for icons/logos to be uploaded and saved accordingly:

- The maximum size of an image file is 100 MB.
- Supported formats are png, jpg, bmp, ico, .svg
- Several search values can be separated by a comma (“Netflix.de, Netflix.com”).
