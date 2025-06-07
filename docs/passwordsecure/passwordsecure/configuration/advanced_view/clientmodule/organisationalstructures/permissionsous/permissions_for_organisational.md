# Permissions for organisational structures

## Relevance

These permissions primarily define which users/roles have what form of permissions for organisational structures. In addition, there are __two mechanisms__ that directly build on the permissions for organisational structures.

1. __Limiting visibility__: It was already explained in the section on [Visibility](/docs/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/protective_mechanisms/visibility/visibility.md) that selectively withholding information is a very effective [Protective mechanisms](/docs/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/protective_mechanisms/protective_mechanisms.md). Configuration of the visibility is carried out directly when issuing permissions to organisational structures.
2. __Inheriting permissions for records__: [Inheritance from organisational structures](/docs/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance_from_organizational.md) is defined as a system standard. This means that there is no difference between the permissions for an organisational structure and the permissions for data that is stored in these organisational structures.

The way in which permissions for organisational structures are designed thus effects the subsequent work with Netwrix Password Secure in many ways. The following diagram describes the above-mentioned interfaces.

![Permissions for organizational structures](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/permissionsous/permissions_for_organizational_structures_1-en.png)

## Permissions

The visibility and also inheritance mechanisms are not considered below. This section exclusively deals with permissions for the actual organisational structure. It deals with which users and roles have what form of permissions for a given organisational structure. Permissions for organisational structures can be defined via the ribbon or also the context menu that is accessed using the right mouse button. A permissions tab appears:

![Permissions for OU](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/permissionsous/permissions_for_organizational_structures_2-en.png)

NOTE: The basic mechanisms for setting permissions is described in detail in the Authorization concept.

__CAUTION:__ 
It is important that the permissions displayed here are interpreted correctly! The example above shows the permissions for the "organisational structure IT".

The user Max Muster possesses all rights to the organisational structure IT and can thus edit, delete and also grant permissions for this structure.

## The add right

The "add" right holds a special position amongst the available rights because it does not refer to the organisational unit itself but rather to data that will be created within it. In general, it is fair to say that to add objects in an organisational unit requires the add right. If a user wants to add a new record to an organisational unit, the user requires the above-mentioned right. In the example above, only the administrator has the required permissions for adding new records. Even the IT manager – who possess all other rights to the organisational structure "IT" – does not have the right to add records.

__CAUTION:__ The add right merely describes the right to create objects in an organisational unit.
