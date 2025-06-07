# Working with predefined rights

## Using predefined rights when creating passwords

After you have configured [Predefining rights](/docs/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/predefining_rights.md), you can then use them to create new records. Proceed here as follows:

- Select the password module
- “New password” via the ribbon
- Select a form

In the next window to appear, the organisational unit “IT” and the template group “Exchange” are selected.

![predefined rights](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/working_with_predefining_rights/working_with_predefined_rights_1-en.png)

Here is the underlying rights template as a comparison:

![example for predefined rights](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/working_with_predefining_rights/working_with_predefined_rights_2-en.png)

The relationship between them is obvious. It can be immediately seen that by selecting the organisational unit “IT” based on the rights configured in the rights template, permissions are granted for the roles “IT management” and also “Administrators”. __The underlying tags “IT” and “Exchange” are also set.__

## Preview of the permissions to be set

When using rights templates, the permissions to be granted can be very quickly classified via a __color table__. The actual permissions can also be viewed as usual via the [Ribbon](/docs/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/ribbon/ribbon.md). The following color key is used with the associated permissions:

| __Color__ | __Permission__ |
| --- | --- |
| Green | Read |
| Yellow | Write |
| Orange | Delete |
| Red | Authorize |

Other rights also exist that are, however, not separately indicated by a color. The overview in the ribbon can be used to see whether the “move”, “export” and “print” rights are set or not. The permissions for the selected role/user are always displayed – in this case for the role “IT management”.

![predefined rights permiissions](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/working_with_predefining_rights/working_with_predefined_rights_3-en.png)

## Conclusion

The [Manual setting of permissions](/docs/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/manual_setting_of_permissions.md) enables the configuration of rights for both existing and also new records. The option of [Predefining rights](/docs/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/predefining_rights.md) represents a very efficient alternative. Instead of having to separately grant permissions for every record, a “preset” is defined once for each organisational structure. Once this has been done, it is sufficient in future to merely select the organisational structure when creating a record. The permissions are then set automatically. This process is particularly advantageous for those users who should not set their permissions themselves.

![predefined rights diagram](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/working_with_predefining_rights/working_with_predefined_rights_4-en.png)

__CAUTION:__ The configuration of permissions can be carried out manually or automatically as described. If you want to change previously set permissions later, this has to be done manually. Retrospectively defining rights is not possible.
