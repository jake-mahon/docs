# End-to-end encryption

## Maximum encryption

[Active Directory link](/docs/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/directoryservices/activedirectorylink/active_directory_link.md) with active end-to-end encryption currently offers __maximum security__. Only users, organisational units and roles are imported. The permissions and the hierarchical relationship between the individual objects needs to be separately configured in Netwrix Password Secure. The advantage offered by end-to-end encryption is that Active Directory is “defused” as a possible insecure gateway. In Master Key mode, users who control Active Directory receive de facto complete access to all passwords because resetting a Windows user name enables users to log in under another person’s name. Active Directory is thus the leading system. __Using an active E2EE connection, users require their own password for Netwrix Password Secure__. There is thus no access to users’ data via Active Directory.

## Relevant rights

The following options are required to add new profiles.

### User right

- Can add new Active Directory profiles
- Display organisational structure module
- Display role module

## Creating profiles

The process for creating a new profile is started via the icon "manage profiles" on the ribbon.

![New AD profile](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/directoryservices/activedirectorylink/end_to_end_encryption_1-en.png)

NOTE: "End-to-end" needs to be set in the "Encryption" field

A __user__ is required to access the AD. The user should be formatted as follows: Domain\user. It must have access to the AD.

- The relevant __user password__ (domain password) is required for the user mentioned above
- __Direct search__ is recommended for very large domain trees. The representation of the tree structure is omitted, elements can only be found and selected via the search.
- The __filter__ can be used to directly specify an AD path as an entry point via an LDAP query.
- Various security options – so-called AuthenticationTypes Enumeration – can be selected for the connection of the AD to Netwrix Password Secure:
  - Secure
  - SecureSocketsLayer
  - ReadOnlyServer
  - Signing
  - Sealing

## Import

The import is started directly in the ribbon. A wizard guides the user through the entire operation.

![Import icon](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/directoryservices/activedirectorylink/end_to_end_encryption_2-en.png)

## Organisational structure

First, an organisational unit is selected for the import. If there are no organisational units in the database yet, as in this example, the data is imported into the __main organisational unit__.

![Import wizard/organisational structure](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/directoryservices/activedirectorylink/end_to_end_encryption_3-en.png)

## Active Directory objects

In the next step, select the relevant profile that should be used for the import. Then, select the organisational units and/or users for the import. A search is available for this purpose.

![Import wizard/AD objects](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/directoryservices/activedirectorylink/end_to_end_encryption_4-en.png)

It can be seen that the organisational units __Jupiter__ and __Contoso__ contain items to be imported. The organisational units themselves will not be imported. The check next to the group __Accounting__ indicates that the group itself will be imported along with some of its sub-elements.

There are different symbols which indicate the elements to be imported.

- The element itself and all possible sub-elements will be imported
- The element itself and some of its sub-elements will be imported
- The element will not be imported; however, it contains elements that will be imported

A context menu that is accessed using the right mouse button is available within the list that provides helpful functions for selecting the individual elements.

![context menu](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/directoryservices/activedirectorylink/end_to_end_encryption_5-en.png)

- Select sub-objects selects all sub-objects that are located directly below the current object
- Deselect sub-objects removes tags from all sub-objects that are located directly below the current object
- Reset all items removes all previously set tags
- Display element details lists all information that is available for the current element

In the lower area you can specify whether the users just selected for import should be created as __Light__ or __Advanced User (View)__s.

NOTE: If individual users, organisational units, or roles cannot be selected for import, they have already been imported via another profile

## Summary

The last page summarizes which objects will be edited and in what form. It specifies the names of the elements along with their descriptions. The __Status__ column specifies whether the object is added, updated, or disabled. The last column specifies the organisational unit into which the element is imported. The number of objects is added together at the bottom.

![Import wizard/Summary](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/directoryservices/activedirectorylink/end_to_end_encryption_6-en.png)

NOTE: Depending on the amount of data, it may take several minutes to create the summary.

## Importing

The import itself is carried out by the server in the background. The individual elements then appear in the list one by one. This may take some time, depending on the amount of import data. If the import is terminated, you will receive a confirmation.

![confirmation](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/directoryservices/activedirectorylink/end_to_end_encryption_7-en.png)

NOTE: As end-to-end encryption is retained in this mode, the server does not receive a key to match already imported users with the AD. There is thus no synchronization with the AD. Similarly, no memberships can be imported. After the import, users must be manually assigned to the appropriate organisational units and roles.

## Imported users and organisational units

In end-to-end mode, the imported users behave like local users. The users can/must be edited manually in Netwrix Password Secure. The affiliations to organisational units and/or roles must be adapted manually.

## Rights

The rights will be issued as follows during the import or synchronization.

### New objects

|  | User | Groups | Roles |
| --- | --- | --- | --- |
| Are rights inherited from the OU? | If no preset has been saved | If no preset has been saved | No |
| Are rights applied from a preset? | If a preset has been saved | If a preset has been saved | No |
| Is the "add" right issued? | No | Yes | No |
| Who receives the rights key? | Imported users and all with the "authorize" right | All | Imported roles and all with the "authorize" right |

### Changed objects

|  | User | Groups | Roles |
| --- | --- | --- | --- |
| Are rights inherited from the OU? | No | No | No |
| Are rights applied from a preset? | No | No | No |
| Is the "add" right issued? | No | No | No |
| Who receives the rights key? | None | None | None |

NOTE: In end-to-end mode, __no role affiliations__ are issued during the import or synchronization.

## Logging into Netwrix Password Secure

Users imported in this mode can not login with the domain password. Rather, a password is generated during import. This password is sent to the users by e-mail. If a user has not entered an e-mail address, the user name is entered as the password. The initial password can be changed by the administrator or the user himself at the first login.
