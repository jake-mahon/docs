# Inheriting permissions

## What is inherited in organisational structures?

If you open the permissions for an organisational structure, the currently configured permissions
will be visible. In the following example, there are a total of four roles with varying permissions
for the organisational structure.

![inheriting permission](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/permissionsous/inheriting_permissions_1-en.webp)

## Relevant rights

The following options are required to view "**inherit**" and "**overwrite**" icons.

### User right

- Can overwrite permissions
- Can inherit permissions

The two highlighted options are now available on the ribbon.

- **Inherit**: This means that all of the configurations defined in the current permissions mask are
  inherited by underlying organisational structures when it is saved. The permissions are added to
  existing ones
- **Overwrite**: This means that all of the configurations defined are applied to underlying
  organisational structures when it is saved. The previous permissions are lost.

Both mechanisms are protected by a confirmation prompt. If both "inherit" and also "overwrite" are
selected, "overwrite" is considered the overriding function.

**CAUTION:** Both mechanisms are not protected by user rights. The **authorize** right for the
organisational structure is required to activate the inheritance or overwrite functions.

# Permissions for organisational structures

## Relevance

These permissions primarily define which users/roles have what form of permissions for
organisational structures. In addition, there are **two mechanisms** that directly build on the
permissions for organisational structures.

1. **Limiting visibility**: It was already explained in the section on
   [Visibility](/docs/passwordsecure/9.2/security-permissions/protective-mechanisms/visibility-controls.md)
   that selectively withholding information is a very effective
   [Protective mechanisms](/docs/passwordsecure/9.2/security-permissions/protective-mechanisms/protective-overview.md).
   Configuration of the visibility is carried out directly when issuing permissions to
   organisational structures.
2. **Inheriting permissions for records**:
   [Inheritance from organisational structures](/docs/passwordsecure/9.2/security-permissions/permission-concept/permission-inheritance.md)
   is defined as a system standard. This means that there is no difference between the permissions
   for an organisational structure and the permissions for data that is stored in these
   organisational structures.

The way in which permissions for organisational structures are designed thus effects the subsequent
work with Netwrix Password Secure in many ways. The following diagram describes the above-mentioned
interfaces.

![Permissions for organizational structures](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/permissionsous/permissions_for_organizational_structures_1-en.webp)

## Permissions

The visibility and also inheritance mechanisms are not considered below. This section exclusively
deals with permissions for the actual organisational structure. It deals with which users and roles
have what form of permissions for a given organisational structure. Permissions for organisational
structures can be defined via the ribbon or also the context menu that is accessed using the right
mouse button. A permissions tab appears:

![Permissions for OU](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/permissionsous/permissions_for_organizational_structures_2-en.webp)

NOTE: The basic mechanisms for setting permissions is described in detail in the Authorization
concept.

**CAUTION:** It is important that the permissions displayed here are interpreted correctly! The
example above shows the permissions for the "organisational structure IT".

The user Max Muster possesses all rights to the organisational structure IT and can thus edit,
delete and also grant permissions for this structure.

## The add right

The "add" right holds a special position amongst the available rights because it does not refer to
the organisational unit itself but rather to data that will be created within it. In general, it is
fair to say that to add objects in an organisational unit requires the add right. If a user wants to
add a new record to an organisational unit, the user requires the above-mentioned right. In the
example above, only the administrator has the required permissions for adding new records. Even the
IT manager – who possess all other rights to the organisational structure "IT" – does not have the
right to add records.

**CAUTION:** The add right merely describes the right to create objects in an organisational unit.

# Inheritance from organisational structures

## Organisational structures as a basis

The aim of organisational structures is to reflect the hierarchies and dependencies amongst
employees that exist in a company. Permissions are granted to these structures as usual via the
ribbon. Further information on this subject can be found in the section
[Permissions for organisational structures](/docs/passwordsecure/9.2/security-permissions/permission-concept/permission-inheritance.md).
As a specific authorization concept is generally already used within organisational structures, this
is also used as the basis for further permissions. This form of inheritance is technically
equivalent to granting permissions based on **affiliations to a folder**. When creating a new
record, the record receives the permissions in accordance with the defined permissions for the
organisational unit.

![explanation of authorization](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance-1-en.webp)

## Relevant user settings

Whether this form of inheritance should be applied is defined via the settings in the ribbon. It can
be configured in more detail using two settings.

**CAUTION:** If a predefined rights exists, this will always overwrite inherited permissions from
organisational structures

Inherit permissions for new objects (without rights template) This setting is relevant for newly
created records.

![setting inherit permission](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance-2-en.webp)

The following values can be configured:

Off: Permissions from OUs are not inherited organisational unit: When creating new objects,
permissions are set in accordance with the defined rights for the target organisational unit. This
setting is active by default. organisational unit and user: As well as inheriting permissions for
organization units, the configured permissions for the user are now also inherited when creating
private records. \*If inheritance for the users is also activated, the creation of private records
is in itself no longer possible. When creating new records to be saved in the organisational unit
for the logged-in user, the permissions for the record are now granted in accordance with the
permissions for the user.

Existing passwords inherit changes to the permissions for organisational units

![setting inherit from OU to password](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance-3-en.webp)

This option means that changes to permissions for an organisational unit will be inherited by all
passwords for this organisational unit. This setting is active by default. When inheriting
permissions, a dialogue will be displayed that offers you the following options:

Increase or reduce permissions: The permissions for the passwords are retained and are only
increased or reduced by the change. Overwrite permissions: The permissions for the passwords are
completely overwritten. This means that all permissions for a password are firstly removed and then
the new permissions for the organisational unit are inherited. Cancel inheritance: The permissions
are not inherited but are only changed in the organisational unit. \*The permissions are only
inherited by existing passwords within the organisational unit. Therefore, the permissions are not
inherited downwards throughout the entire structure.

Example case This example shows the creation of a new record in the organisational structure
“marketing”. It is defined in the settings for the stated organisational structure that permissions
should be inherited by new objects in accordance with the organisational structure.

The permissions for the organisational unit “marketing” are shown below:

![example of permissions](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance-4-en.webp)

A new password is now created in the organisational unit “marketing”.

![new password](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance-5-en.webp)

It is important that no preset is defined for this organisational unit. The permissions for the
record just created are now shown.

![permissions example](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance-6-en.webp)

## Conclusion

The permissions for the “storage location” are simply used when creating new objects. Two conditions
apply here:

The value “organisational unit” must be selected in the settings for the inheritance of permissions
There must be no [Predefining rights](/docs/passwordsecure/9.2/security-permissions/permission-concept/rights-templates.md) for the
affected organisational structure This process is illustrated in the following diagram:

![process for inheritance of permissions](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/automated_settings/inheritance_from_organisational_structures/inheritance-7-en.webp)
