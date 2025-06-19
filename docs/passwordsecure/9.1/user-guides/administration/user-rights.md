# Overview of all user rights

This section lists all of the existing user rights. If a right is explained in more detail in
another section, you can navigate directly to this section by clicking on the link in the Section
column. The rights are grouped according to categories to provide a better overview

| Category: General         | Section                |
| ------------------------- | ---------------------- |
| Can overwrite permissions | Form field permissions |
| Can inherit permissions   | Form field permissions |

| Category: Configuration                                                                                             | Section |
| ------------------------------------------------------------------------------------------------------------------- | ------- |
| Can add seal                                                                                                        |         |
| Can apply password masking                                                                                          |         |
| Can change form for a password                                                                                      |         |
| Can close tab of own organisational unit in LightCliet                                                              |         |
| Can edit filter                                                                                                     |         |
| Can export                                                                                                          |         |
| Can import                                                                                                          |         |
| Can manage password form fields                                                                                     |         |
| Can manage password images                                                                                          |         |
| Can manage seal templates                                                                                           |         |
| Can manage tags                                                                                                     |         |
| Can print                                                                                                           |         |
| Category: Mobile synchronisation                                                                                    | Section |
| ---                                                                                                                 | ---     |
| Can synchronise with mobile devices                                                                                 |         |
| Category: New records                                                                                               | Section |
| ---                                                                                                                 | ---     |
| Can add new Active Directory profiles                                                                               |         |
| Can add new RDP applications                                                                                        |         |
| Can add new SSH applications                                                                                        |         |
| Can add new SSO applications                                                                                        |         |
| Can add new web applications                                                                                        |         |
| Can add new SAML applications                                                                                       |         |
| Can add new users                                                                                                   |         |
| Can add new documents                                                                                               |         |
| Can add new forms                                                                                                   |         |
| Can add new organisational units                                                                                    |         |
| Can add new Password Resets                                                                                         |         |
| Can add new passwords                                                                                               |         |
| Can add new roles                                                                                                   |         |
| Can add new tags                                                                                                    |         |
| Can add individual passwords via Basic view                                                                         |         |
| Can add new passwords images                                                                                        |         |
| Can add new Entra ID profiles                                                                                       |         |
| Category: Offline mode                                                                                              | Section |
| ---                                                                                                                 | ---     |
| Offline mode                                                                                                        |         |
| Timespan for how long the offline mode can be used without connection to the server                                 |         |
| Categorie: Rights                                                                                                   | Section |
| ---                                                                                                                 | ---     |
| If non-administrators select “Override permissions” when moving items, keep existing permissions for administrators |         |
| Category: Rights templates                                                                                          | Section |
| ---                                                                                                                 | ---     |
| Can edit members when using a rights template                                                                       |         |
| Can manage rights templates                                                                                         |         |
| Can view selection of rights templates                                                                              |         |
| Can switch standard rights template                                                                                 |         |
| Category: Security                                                                                                  | Section |
| ---                                                                                                                 | ---     |
| Is database administrator                                                                                           |         |
| Can manage Active Directory profiles                                                                                |         |
| Can authorize other users to use personal passwords                                                                 |         |
| Can manage records for an application                                                                               |         |
| Can manage autologin                                                                                                |         |
| Can set owner rights                                                                                                |         |
| Can manage database sessions                                                                                        |         |
| Can permanently delete the deleted users                                                                            |         |
| Can permanently delete the deleted organisational structures                                                        |         |
| Can view deleted organisational structures                                                                          |         |
| Can permanently delete the deleted roles                                                                            |         |
| Can view deleted roles                                                                                              |         |
| Can manage locked users                                                                                             |         |
| Can edit global settings                                                                                            |         |
| Can export HTML WebViewer                                                                                           |         |
| Can change security level options                                                                                   |         |
| Can manage password rules                                                                                           |         |
| Can create personal records                                                                                         |         |
| Can configure standard password rules                                                                               |         |
| Can carry out batch processing for permissions based on a filter                                                    |         |
| Can manage password images                                                                                          |         |
| Category: Visibility User right new                                                                                 | Section |
| ---                                                                                                                 | ---     |
| Display application module                                                                                          |         |
| Display notification module                                                                                         |         |
| Show discovery service module                                                                                       |         |
| Display document module                                                                                             |         |
| Display form module                                                                                                 |         |
| Display logbook module                                                                                              |         |
| Display organisational structure module                                                                             |         |
| Display Password Reset module                                                                                       |         |
| Display password module                                                                                             |         |
| Display roles module                                                                                                |         |
| Category: System tasks                                                                                              | Section |
| ---                                                                                                                 | ---     |
| Can manage Active Directory system tasks                                                                            |         |
| Can manage system task reports                                                                                      |         |
| Can manage discovery service system tasks                                                                           |         |
| Can manage Emergency WebViewer export system tasks                                                                  |         |
| Can manage WebViewer export system tasks                                                                            |         |

NOTE: There is a version selection box in the user rights. The options that were newly added in the
selected version are correspondingly marked in the list.

![installation_with_parameters_115](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/user_rights/overview_user_rights/installation_with_parameters_115.webp)

This makes it easier for administrators to correctly configure new options before they release the
update for all employees.

# User rights

## What are user rights?

In the user rights, access to functionalities is configured. Amongst tother things, this category
includes both the visibility of individual
[Client Module](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/navigation.md),
as well as the use of the import, export or management of rights templates functions. A complete
listing is directly visible in the user rights.

## Administration of user rights

Managing all user rights exclusively at the level of the user would be a time intensive process and
thus require a disproportionate amount of care and maintenance. In the same way as with the
[Authorization and protection mechanisms](/docs/passwordsecure/9.1/web-application/authorization-protection.md),
an approach can be used in which several users are grouped together. Nevertheless, it must still be
possible to additionally address the specific requirements of individual users. Some
functionalities, on the other hand, should be available to all users. In order to do this, Netwrix
Password Secure offers a three-step concept.

![installation_with_parameters_111](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/user_rights/installation_with_parameters_111.webp)

When it comes to user rights, the focus is always on the user. The user can receive user rights in
one of the following three ways:

1. The **personal user right** only applies to a specific user. This is always configured via
   the[Organisational structure](/docs/passwordsecure/9.1/user-guides/organizational-structure/managing-users.md).

**User rights to role**s apply to all members of a role and are specified in the
[Roles](/docs/passwordsecure/9.1/user-guides/modules/roles.md)

1. The **global user right** applies to all users of a database without exception. You can configure
   it in the client settings.

How a user receives a user right is irrelevant. The only important thing is that the user actually
receives a required right in one of the three ways mentioned above. It is recommended that you link
user rights to roles and, if necessary, supplement them with global user rights.

**CAUTION:** In addition to personal and global user rights (as opposed to settings), user rights
are assigned via roles and not via organisational units!

NOTE: Only those user rights that the current user possesses themselves can be issued. However, all
rights can be removed.

![installation_with_parameters_112](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/user_rights/installation_with_parameters_112.webp)

## Configuring the security level

The **security level** is an essential element that is also specified in the user rights. This is
the basis for the configuration of the
[User settings](/docs/passwordsecure/9.1/user-guides/administration/user-settings.md).

![installation_with_parameters_113](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/user_rights/installation_with_parameters_113.webp)

## Searching within user rights

Due to the large number of possible configurations, the search function helps you to quickly find
the desired configuration. This process is based as usual on the List
[Search](/docs/passwordsecure/9.1/user-guides/desktop-client/advanced-view/filter-and-search.md).

![installation_with_parameters_114](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/mainmenu/user_rights/installation_with_parameters_114.webp)

#### Database administrator

Special attention should be given to the right Is database administrator. This right has the
following effects:

- The user can also issue rights that he does not possess himself.
- The user can only have their rights removed by other database administrators.
- The user can unlock other users on the Server Manager.
- The user can also remove other users from the rights if they have the owner right.
