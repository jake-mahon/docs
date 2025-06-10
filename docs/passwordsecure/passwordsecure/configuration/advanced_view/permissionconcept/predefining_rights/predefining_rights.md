# Predefining rights

## What are predefined rights?

[Permissions for organisational structures](/docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/permissionsous/permissions_for_organisational.md) can be carried out separately for every record. Although this method enables you to very closely control every intended permission structure, it is not really efficient. On the one hand, there is too much configuration work involved, while on the other hand, there is a danger that people who should also receive permissions to access data are forgotten. In addition, many users should not even have the right to set permissions. “Predefining rights” is a suitable method to simplify the permissions and reduce error rates by using automated processes. This page covers the configuration of predefined rights, please also refer to the sections [Working with predefined rights](/docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/working_with_predefining_rights/working_with_predefined_rights.md) and their [Scope of validity for predefined rights](/docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/scope_of_validity/scope_of_validity_for_predefined.md).

## Organisational structures as a basis

[Organisational structure](/docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/organisational_structure.md) can be very useful in many areas in Netwrix Password Secure. In this example, they provide the basic framework for the automated granting of rights. In the broadest sense, these organisational structures should always be entered in accordance with existing departments in a company. The following example specifically focuses on an IT department. The following 3 hierarchies ([Roles](/docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/roles/roles.md)) have been defined within this IT department:

- __IT employee__
- __IT manager__
- __Administrator__

## Predefine rights

In general, a senior employee is granted more extensive rights than those granted to a trainee. This hierarchy and the associated permission structure can be predefined. In the O[Organisational structure](/docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/organisational_structure.md) module, we now select those OUs (departments) for which rights should be predefined and select \*predefine rights” in the ribbon.

![button of predefined rights](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/predefined-rights-1-en.webp)

- __Creating the first template group:__ A new window will appear after clicking on the icon for adding a new template group (green arrow) in which a meaningful name for the template group should be entered.

![add template](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/predefined-rights-2-en.webp)

Roles and users can now be added to this template via the ribbon or through the context menu (right mouse click). This was already completed in the example. The role __IT employee__ only has the "read permission", the __IT manager__ also has the "write permission" and the capability of managing permissions. __Administrators__ possess all available permissions. Configuration of the permission structures is explained in [Manual setting of permissions](/docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/manual_settings/manual_setting_of_permissions.md).

![example permissions](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/predefined-rights-3-en.webp)

## Adding other template groups

It is also possible to configure several different right templates within one department. This may be necessary e.g. if there are several areas of competency within one department which should each receive different permissions. Alongside the __IT general__ area, the template groups __Exchange__ and __Firewall__ have also been defined below.

![Standard template](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/predefined-rights-4-en.webp)

A __default template group__ can be defined directly next to the drop-down menu for selecting the template group (green arrow). This is always pre-configured when you select “IT” as the OU to save records.

## Issuing tags for predefining rights

In the same way that permissions are defined within right templates, it is also possible to automatically set __tags__. Their configuration is carried out in the same way as issuing [Tags](/docs/passwordsecure/passwordsecure/configuration/advanced_view/operation_and_setup/tags/tags.md) for records.

![tags for predefining rights](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/predefined-rights-5-en.webp)

This process ensures that a special tag is automatically issued when using a certain template group. Example cases can be found in the [Working with predefined rights](/docs/passwordsecure/passwordsecure/configuration/advanced_view/permissionconcept/predefining_rights/working_with_predefining_rights/working_with_predefined_rights.md).
