# Form field permissions

## What are form field permissions?

The authorization concept allows separate permissions to be set for each object. These objects could
be records, forms or users. Netwrix Password Secure goes one step further in this context. Every
single form field for a record can also be granted with separate permissions. It is thus possible to
grant different permissions for the password field of a record than are set for the other fields.

## Relevant rights

The following options are required to view "inherit" and "overwrite" icons.

### User right

- Can overwrite permissions
- Can inherit permissions

## Configuration

The associated form field permissions for the marked record can be opened via the ribbon using the
drop-down menu under "Permissions".

![form field permissions](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwords/form_field_permissions_1-en.webp)

The window that opens allows you to select the relevant form field for which you want to grant
permissions. The following example focuses on the password field.

![permissions of password field](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwords/form_field_permissions_2-en.webp)

The permissions configured here now exclusively apply to the password field. The other form fields
remain unaffected.

# Manual setting of permissions

## What is the manual setting of permissions for records?

In contrast to the
[Automated setting of permissions](/docs/passwordsecure/9.2/security-permissions/permission-concept/automated-permissions.md), the
manual approach does not utilize any automatic processes. This method of setting permissions is thus
carried out separately for every record – this process is not as recommended for newly created data.
If you want to work effectively in the long term, the automatic setting of permissions should be
used. However, the manual setting of permissions is generally used when editing already existing
records.

## Adding additional users with permissions

In the previous section, it was clarified that permissions are granted either directly to the user
or to several users grouped in a role. With this knowledge, the permissions can be set manually. In
the [Passwords](/docs/passwordsecure/9.2/core-features/password-management/passwords-overview.md), there are three different ways to access
the permissions in the list view:

1. Icon in the ribbon
2. Context menu of a data record (right-click)
3. Icon at the right edge of the reading pane

![different ways to access the permissions](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/manual-setting-of-permissions-1-en.webp)

NOTE: The icon on the right of the reading pane shows the information whether the record is personal
or public. In case of personal data records, the user that is logged on is the only one who has
permissions!

The author is created with all permissions for the record. As described in the
[Permission concept and protective mechanisms](/docs/passwordsecure/9.2/security-permissions/permission-concept/permission-overview.md), you can now
add roles and users. 'Right click - Add' inside the userlist or use the ribbon "User and roles" to
add a user. The filter helps you to quickly find those users who should be granted permissions for
the record in just a few steps.

![add user and role](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/manual-setting-of-permissions-2-en.webp)

The search [Filter](/docs/passwordsecure/9.2/user-interfaces/advanced-view/search-filter.md)opens in a separate tab and can be
configured as usual.

![seach filter](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/manual-setting-of-permissions-3-en.webp)

**Multiple selection** is also enabled. It allows to add several users via the Windows standard
Ctrl/Shift + left mouse button.

## Set and remove permissions

By default, all added users or roles receive only the “Read” permission on the record. The “Read”
permission at the beginning is sufficient to view the fields of the data record and to use the
password. "Write" permission allows you to edit a data record. **The permission “Authorize” is
necessary to authorize other users to the record**. This is also a requirement for
the[Seals](/docs/passwordsecure/9.2/security-permissions/protective-mechanisms/seals.md).

![setting all permissions example](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/manual-setting-of-permissions-4-en.webp)

## Transferring permissions

A simple right-click on a user can be used to copy and transfer permission configurations of users
or roles to others in the context menu. In this context, the use of permission templates is also
very practical. In the “Template” area of ​​the ribbon, you can save configured permissions,
including all users, and reuse them for other records.

![preset menu](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/manual-setting-of-permissions-5-en.webp)

The transfer of permissions and their reuse can be an important building block to create and
maintain entitlement integrity. This method cannot rule out misconfigurations, but it will minimize
the risk significantly. Of course, the correct configuration of these templates is a prerequisite.

## The add permission

The “add" permission holds a special position in the authorization concept. This permission controls
whether a user/role is permitted e.g. to create a new record within an organisational structure.
Consequently, this permission can only be set in the
[Organisational structure](/docs/passwordsecure/9.2/core-features/organizational-structure/organizational-overview.md).

## The owner permission

The "owner" permission can be set for a user. This permission is more of **a guarantee**. Once
assigned, there is no way to remove the user or role. This is only possible by the user or the role
itself, as well as by users with the permission “Is database administrator”.

![owner permission](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/manual-setting-of-permissions-6-en.webp)

The owner permission prevents other users who have the “Authorize” permission from removing someone
with the owner permission from the record.

**CAUTION:** The owner permission does not protect a record from being deleted. Any user who has
deletion permission can delete the record!

# Multiple editing of permissions

## How to edit multiple permissions?

As part of the manual modification of permissions, it is also possible to edit multiple records at
the same time. Various mechanisms can be used to select the records to be edited. You are able to
select the records in [List view](/docs/passwordsecure/9.2/user-interfaces/advanced-view/list-view.md) or you can use
the filter as part of the multiple editing function. Both scenarios are described below.

### User permissions for batch processing

This mode is inactive by default and needs to be activated in the user rights.

- Can carry out batch processing for permissions based on a filter

## Multiple editing via list view

Individual permissions can be added or remove via **Multiple editing within list view**. The
existing permissions will **not be overwritten**.

## Selecting the records

In list view, Shift or Ctrl + mouse click can be used to select multiple records. Permissions can
also be granted for these records via the selection. The marked records are displayed in a different
color. 6 records are marked in the following image.

![password list](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-1-en.webp)

## Dialogue for configuring the permissions

A new tab will be opened in the ribbon above the "Permissions" button in which the permissions can
be configured. The tab will display the number of records that will be affected by the defined
changes.

![rights for selected passwords](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-2-en.webp)

NOTE: As the already granted permissions for the selected records may differ, it is not possible to
display the permissions here.

## Adding permissions

To add a permission, a user or role is selected first in the ribbon under **Search and add** or
**Search**. The permissions are then selected as usual in the ribbon. The
:material-plus-circle-outline: symbol indicates that permissions will be added. In the following
example, Mr. Steiner receives read permission to all selected records. In contrast, Mr. Brewery
receives all permissions.

## Reducing permissions / removing users and roles from the permissions

If you want to remove permissions, it is also necessary to add the user or the desired role to be
edited. Clicking on **Reduce permissions** now means that permissions will be removed. This is
indicated by the :material-minus-circle-outline: symbol. The selected permissions will be removed.

NOTE: If the **read** permission is to be removed for a user or role, the user will be completely
removed from the permissions.

## Examples

In the following example, Mr. Steiner receives read permissions to all selected records. In
contrast, Mr. Brewery receives all permissions:

![rights for selected passwords](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-3-en.webp)

The read permission will be removed for Mr. Steiner. As removing the read permissions means that no
other permissions exist for the record, Mr. Steiner is completely removed from the permissions. The
authorize, move, export and print permissions are being removed from Mr. Brewery. Assuming that he
previously had all permissions, he will then have read, write and delete permissions remaining:

![edit rights for selected passwords](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-4-en.webp)

## Batch processing using a filter

In some cases it is necessary to edit the permissions for a very large number of records. On the one
hand, a maximum limit of 1000 records exists and on the other hand, handling a very large number of
records via list view is not always the best solution. The **Batch processing using a filter** mode
has been developed for this purpose. This is directly initiated via the ribbon.

![Batch processing using a filter](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-5-en.webp)

In the subsequent dialogue, you define whether you want to expand, reduce or completely overwrite
existing permissions. If you select **expand or reduce** at this stage, the same logic as for
**editing via list view** is used. No permissions will thus be overwritten.

In the option **overwrite permissions**, the existing permissions are removed and then replaced by
the newly defined permissions.

**CAUTION:** It is important to proceed with great caution when overwriting permissions because this
function can quickly lead to a large number of records becoming unusable.

![permissions adapted on a filter](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-6-en.webp)

The filter itself defines the selection criteria for the records to be edited. The currently
configured filter will be used as default. The records that will be affected by the changes are also
not displayed in this view. Only the number of records is displayed. In the following example, 9
passwords are being edited to add the read permission the role "Sales".

![permissions change for selected records](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-7-en.webp)

## Seals and password masking

Sealed or masked records cannot be edited using batch processing. If these types of passwords are
selected, a dialogue will be displayed when carrying out batch processing to inquire how these
records should be handled.

![security warning because of sealed or masked passwords](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-8-en.webp)

It is possible to select whether the affected records are skipped or whether the seal or password
masking should be removed. If the **remove** option is selected, the process needs to be confirmed
again by entering a PIN.

![security warning](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/multiple_editing_of_permissions/multiple-editing-of-permissions-9-en.webp)

**CAUTION:** The removal of seals and password masking cannot be reversed!

NOTE: Depending on the number of records, editing records may take a long time. This process is
carried out in the background for this reason. A hint will indicate that the permissions process has
been completed.
