---
sidebar_position: 1110
title: Customize Forms
---

# Customize Forms

This guide shows how to define a custom way to display the input fields to be filled in a given workflow.

See the [Form](../../../toolkit/xml-configuration/user-interface/form/index "Form") topic for additional information.

## Create a View Template for Entities Using Scaffoldings

Two scaffoldings generate the view, the display table and the rights to access the entity's resources.

* [View Template](../../../toolkit/xml-configuration/configuration/scaffoldings/templates/viewtemplate/index "View Template"): Creates the display table, the default view and access rights to the entity.
* [View Template Adaptable](../../../toolkit/xml-configuration/configuration/scaffoldings/templates/viewtemplateadaptable/index "View Template Adaptable"): Creates the entity view (designElement = ResourceTable), the report and the rights for a given profile.

:::warning
These scaffoldings are not enough to access resources. You must add a menu item to define the navigation in the view in the user interface.
:::

## Create an Entity View

To create the entity view, you must manipulate a [Form](../../../toolkit/xml-configuration/user-interface/form/index "Form").

:::warning
The view form doesn't give access to the view in the interface or the rights to access the interface.
:::

The following elements must be in place:

* [Create Menu Items](../create-menu-items/index "Create Menu Items")
* [View Access Control Rules](../../../toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/resources/viewaccesscontrolrules/index)

To create the view, you can manipulate one or more forms. The example below shows how to create a view from several different forms. This will allow you to reuse some forms in workflows.

```
                                                                                                                                                                                        

```
It is also possible to create only one form that contains all the information:

```
                                                                                        

```
### Create an Entity View Using Records

Some entities may have entity records. To view the entity in question with all the records attached to it, it is necessary to fill in forms that will load the record data as well as forms for the parent entity.

:::warning
The view form doesn't give access to the view in the interface or the rights to access it.
:::

The following elements must be in place:

* [Create Menu Items](../create-menu-items/index "Create Menu Items")
* [View Access Control Rules](../../../toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/resources/viewaccesscontrolrules/index)

In the example below, the view form will display all records. To change the filter on the record display, you must change the [Form](../../../toolkit/xml-configuration/user-interface/form/index "Form").

```
                                                                                                                                                                                                                                                                                                

```
:::warning
The record filter not only changes the display options of the record, but also changes the display of the rights associated with this record.
:::