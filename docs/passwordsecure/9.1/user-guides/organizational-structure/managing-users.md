# Managing users

## How are users managed in Netwrix Password Secure?

The way in which users are managed is highly dependent on whether Active Directory is connected or
not. In Master Key mode, Active Directory remains the leading system. Accordingly, users are then
also managed in the AD. If Netwrix Password Secure is the leading system, e.g. in end-to-end mode,
users are managed in the organisational structures module. More details are provided in the relevant
sections.

## Relevant rights

The following options are required to add local users.

### User rights

Can add new users -Display organisational structure module

## Adding local users

In general, new users are added in the same way as creating a local organisational unit. Therefore,
only the differences will be covered below.

### Creating users

![create user](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/managingusers/create-user-wc.webp)

- **Allocated roles**: New users can directly be allocated one or more rolls when they are created
- **Change password on next login**: The user will be requested to change their user password on the
  next login (obligatory)
- **Account is deactivated**: The user is created with the status "deactivated". The account is thus
  not useable. The write rights for a user can be set/removed with this option. In editing mode, the
  account can also be deactivated during ongoing operation.
- **Restricted user**: Controlling entities exist in many companies that are only tasked with
  checking the integrity and hierarchies of various pieces of information with one another but are
  not required to productively work with the information themselves. This could be a data protection
  officer or also an administrator in some cases. This would be the case if an administrator was
  responsible for issuing permissions to other people but should not be able to view the data
  themselves. The property **restricted user** is used to limit the visibility of the password
  field. It thus deals with purely administrative users or controlling entities.

NOTE: Restricted users cannot view any passwords

### Configuring rights

The second tab of the wizard allows you to define the permissions for the newly created user. If an
allocated organisational unit or a rights template group was defined in the first tab, the new user
will inherit its permissions. Here, these permissions can be adapted if desired.

### Configuring user rights

Users always receive their user rights via role, which is either user-specific or global (see user
rights). If no role is defined in the first tab "Create user", the third tab will thus contain
globally defined user rights.

## Importing users

Importing from Active Directory can be carried out in two ways that are described in a separate
section.

## User licenses

There are two different types of licenses, **Advanced view** and **Basic view** licenses. In all
other editions you can only purchase Advanced view licenses. Please note that licensed Basic view
users are not able to use the Advanced view. However, Advanced view Users can also switch to the
Basic view.

**CAUTION:** For licensing reasons, it is not intended to switch from a Advanced view user to a
Basic view user!

Our sales team will be happy to answer any questions you may have about licensing.

Display data to which the user is authorized In order to display the data to which a user is
authorized, you must right-click on the corresponding user in the organisational structure. In the
context menu that opens, you will find the following options under **displaying data records**:

Password -Documents -Forms -Rolls -Uses -Password Reset -System Tasks -Seal templates

NOTE: All authorizations for a data record are taken into account, regardless of whether you are
authorized by a role or the user.

# Organisational structure

## What are organisational structures?

The storage of passwords or documents always takes place according to the defined organisational
structures. The module enables complex structures to be defined, which later form the basis for the
systematic storage of data. It is often possible to define them on the basis of already existing
organization diagrams for the company or department. It is also possible to use other criteria, such
as the function / activity performed, as the basis for creating hierarchies. It is always up to the
customer themselves to decide which structure is most useful for the purpose of the application.

![Organizational structure modul](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/organizational_structures_1-en.webp)

## Relevant rights

The following options are required for adding new organisational structures.

### User rights

- Can add new organisational units
- Display organisational structure module

## Module-specific ribbon functions

The operation of the ribbon differs fundamentally in a couple of aspects to how it works in other
modules. The following section will focus on only those elements of the ribbon that differ. The
remaining actions have already be explained for the password module.

![create new user/organisational unit](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/organizational_structures_2-en.webp)

- **New organisational unit/user**: New organisational units or new users can be added via the
  ribbon, the keyboard shortcut "CTRL + N" or also the context menu that is accessed using the right
  mouse button. Due to its complexity, there is a separate section for this function:
  [User management](/docs/passwordsecure/9.1/web-application/web-app-features/user-management-web.md)
- **Drag & Drop**: If this option has been activated, it is possible to move users or organisational
  units in list view via drag & drop
- **Permissions**: The configuration of permissions within the organisational structure is important
  both for the administration of the structure and also as the basis for the permissions in
  accordance with
  [Inheritance from organisational structures](/docs/passwordsecure/9.1/configuration/permissions/inheritance.md).
  The benefits of
  [Predefining rights](/docs/passwordsecure/9.1/configuration/permissions/predefining-rights.md)
  are explained in a separate section.
- **Settings**: The settings can be configured for both users and also organisational units. More
  information on
  [User settings](/docs/passwordsecure/9.1/user-guides/administration/user-settings.md)…
- **Active Directory**: The connection to Active Directory is explained in a dedicated section
  [Active Directory link](/docs/passwordsecure/9.1/configuration/authentication/directory-services/active-directory.md)
- **Microsoft Entra ID**: The connection to Microsoft Entra ID is explained in a dedicated section
- **Multi Factor authentication**: Additional security during login is provided through positive
  authentication based on another factor. More on this subject…
- **Reset password**: Administrators can reset the passwords with which users log in to Netwrix
  Password Secure to a defined value. Naturally, this is only possible if the connection to Active
  Directory is configured
  via[End-to-end encryption](/docs/passwordsecure/9.1/configuration/authentication/directory-services/end-to-end-encryption.md).
  In the alternative
  [Masterkey mode](/docs/passwordsecure/9.1/configuration/authentication/directory-services/masterkey-mode.md),
  the authentication is linked to the correct entry of the AD password.

NOTE: To reset a user password, membership for the user is a prerequisite.

The example below shows the configuration of a user where only the user themselves is a member.

![permission for user](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/organizational_structures_3-en.webp)

This configuration means that the user password cannot be reset by administrators. The disadvantage
is that if the password is lost there is no technical solution for "resetting" the password in the
system.

**CAUTION:** It is not recommended to configure the permissions so that only the user themselves has
membership. No other interventions can be made if the password is then lost.

## Adding local organisational units

Both users and also organisational units themselves can be added as usual via the ribbon
(alternatively via Ctrl + N or via the context menu). These processes are supported by various
wizards. The example below shows the creation of a new organisational unit:

### Create organisational unit

![Add new organisational unit](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/organizational_structures_4-en.webp)

- **Allocated organisational unit**: If the new object is defined as a **main organisational unit**,
  it is not allocated to an existing organisational unit
- **Rights template group**: If an already existing organisational unit was selected under
  "allocated organisational unit", you can select one of the existing rights template groups.

NOTE: The organisational unit marked in list view will be used as a default. This applies to the
fields "allocated organisational unit" and also "rights template".

### Create role

![Create role](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/organizational_structures_5-en.webp)

When creating a new organisational unit, the second tab in the wizard enables you to directly create
a new role. This role will not only be created but also given "read permission" to the newly created
organisational unit.

### Configuring rights

![Configuring rights](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/organizational_structures_6-en.webp)

The third tab of the wizard allows you to define the permissions for the newly created
organisational unit. If an allocated organisational unit or a rights template group was defined in
the first tab, the new organisational unit will inherit its permissions. These permissions can be
adapted if desired.

NOTE: The **organisational structure** module is based on the Web Application module of the same
name. Both modules have a different scope and design but are almost identical to use.
