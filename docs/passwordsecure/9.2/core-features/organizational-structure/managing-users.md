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

![create user](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/managingusers/create-user-wc.webp)

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

# User passwords / logging in to client

## User passwords

Depending on the type of user, they will either be allocated their password in Netwrix Password
Secure or the login will be carried out using access data for the domain. How the user logs in also
differs according to the type of user.

### Differences between users and passwords

- **Local users** Local users are those users that were directly created in Netwrix Password Secure.
  These users must be directly assigned a password when they are created. If local users are
  migrated from older versions, they receive a randomly generated password that is sent to them via
  email.
- **AD users in end-to-end mode** These users must also be assigned a password in Netwrix Password
  Secure. A new password will also be issued via email for these users in the case of a possible
  migration.
- **AD users in Master Key mode** These users log in directly with access data for the domain. It is
  thus not necessary to assign them a password. As these users directly authenticate themselves via
  Active Directory, the currently saved password in Active Directory is thus always valid. These
  users can still directly log in using the existing password even after a migration

### Required rights

Various rights are required in order to issue or change user passwords. One prerequisite is the user
right **Can display organisational structure module**. **Read** and **write** rights for the user
are also required. Finally, membership of the user is required. Normally, the user themselves and
the user who created or imported the user have the right to change their password.

![Permission for user](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/managingusers/user_passwords_1-en.webp)

### Assigning and changing passwords

As already explained, local users are directly assigned their initial password when the user is
created. The situation is different for users that are imported in end-to-end mode. They do not
possess a password directly after the import and can thus not log in. It is thus necessary to assign
passwords after the import.

The passwords can be directly assigned or changed via the ribbon. Naturally, it is also possible to
select multiple users if e.g. several imported users should be assigned the same password.

![change password](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/managingusers/user_passwords_2-en.webp)

### Change password on next login

Even if several users receive the same initial password, it is sensible to force them to change it
to an individual password. There is a corresponding option for this purpose. In the case of **local
users**, this can be activated during the creation of the user. In the case of **users in end-to-end
mode**, this option is directly activated during import for security reasons. This option is
automatically deactivated after the user has successfully logged in and changed the password.

![change password next login](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/managingusers/user_passwords_3-en.webp)

### Security of passwords

To guarantee that passwords are sufficiently strong, it is recommended that corresponding
[Password rules](/docs/passwordsecure/9.2/core-features/password-management/password-rules.md) are created. It is
especially important to ensure here that user names are excluded. The password rule then still needs
to be defined as a user password rule.

## Logging in to the database

The process for logging into the database differs depending on the type of user.

### Local user

Local users simply log in using their user name and the assigned password.

![login username](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/managingusers/user_passwords_4-en_415x238.webp)

![login password](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/managingusers/user_passwords_5-en.webp)

## AD user

If only one domain has been configured, the users from AD can also log in with their user name and
password the same as local users. If multiple domains have been configured or there is a local user
with the same name, the name of the domain must be entered in front of the user name

The name of the domain must be entered as it is configured in the AD profile under **Domains**. The
option **Other domain names** can be used to save other forms of the domain name.

![AD User](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/managingusers/user_passwords_6-en.webp)

NOTE: The logon to the client is automatically forwarded to the Autofill Add-on and other clients on
the same computer. The same applies to logging on to the Autofill Add-on.
