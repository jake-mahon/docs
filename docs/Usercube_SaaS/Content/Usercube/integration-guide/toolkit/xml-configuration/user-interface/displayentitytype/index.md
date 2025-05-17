---
sidebar_position: 172
title: Display Entity Type
---

# Display Entity Type

The `` element sets information about how an entity type is to be displayed by the UI.

## Examples

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
                                    
```
### Zoom on Priority

The Priority property controls the order in which entity types are displayed in the entity type selection dropdown of the following administration screens:

* Role Review
* Provisioning Review
* Role Reconciliation
* Resource Reconciliation
* My Tasks (also known as Workflow Management)
* Workflow Overview
* Access Rules

By default, the entity type with the highest priority is selected first. The end user can later change the selection using the top-left dropdown.

![Change Selection](../../../../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/UI_DisplayPriorities_ChangeSelection_v521beta.png)

Priorities are integer values, positive or negative. The most important priority is assigned to the lowest value.

Entity Types with the same priority are sorted by `Identifier`, in the alphabetical order, where relevant.

Entity Types for which a priority isn't set by a `` configuration element are assigned an equally less important priority than the least important priority set by a `` element.

Example

This example shows how to define priorities between the main Entity Types of the organizational model. The highest priority is assigned to `Directory_User` and the lowest priority to `Directory_Application`. All other entity types are assigned an equally low priority, below `Directory_Application`. In the dropdown they will be sorted by alphabetical order.

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
dashboard.xml  
          

```
#### Priorities for workflows

The dropdown in My Tasks (also known as Workflow Management) and Workflow Overview screens is related to workflows, not to entity types per se.

In Identity Manager, each workflow is associated with a workflow-entity type.

To configure the priority order for elements in the dropdown in these screens, the user should remember to take the workflow-entity types in the ` need to be replaced with a custom value before entering the script in the command line.

```
dashboard.xml  
      

```
But the order in which "Workflow for Directory\_User" and "Workflow for Directory\_Guest" appear in the My Tasks screen is configured like this:

Code attributes enclosed with  need to be replaced with a custom value before entering the script in the command line.

```
dashboard.xml  
      

```
## Properties

| Property | Type | Description |
| --- | --- | --- |
| AutocompleteBinding optional | Int64 | Defines the binding of the property used for search in the auto complete picker (this activates the auto complete picker). |
| Color optional | String | Defines the color used when displaying this entity type (it must be a 6 digit hexadecimal value, preceded by a #). |
| D0IsActive default value: false | Boolean | Is dimension0 active for this entity type (D0IsActive to D3VIsActive following the base32hex convention. |
| HideRoles default value: false | Boolean | True to skip the **Access Permissions** step (the one containing the roles) in the default forms for this entity type. |
| IconCode optional | String | Defines the icode code ("People", "MapPin", "Suitcase"...). |
| IsHierarchical default value: false | Boolean | Is hierarchical entity type. |
| MinSearchLength optional | Int32 | Defines the minimum number of characters from which the search in the auto complete picker starts - 4 if it is not defined (the AutocompleteBinding must be defined). |
| PluralDisplayName\_L1 optional | String | Display name of the entity type in plural in language 1 (up to 16). |
| Priority default value: 2147483647 | Int32 | Sets the display priority of the Entity Type in the administration screens dropdown and the dashboard. A priority is an integer value, positive or negative. The highest priority is assigned to the lowest number. See the Priority section above. |

## Child Element: Property

Entity referencing the Entity properties (with which it share the same ID) that can be displayed in the Identity Manager interface.

### Properties

| Property | Type | Description |
| --- | --- | --- |
| AddedMinutes optional | Int32 | Add minutes to the date field with this property. Can be overwritten in every form control, display table column or tile item that displays the property. |
| AutocompleteBinding optional | Int64 | Defines the binding of the property used for search in the auto complete picker (this activates the auto complete picker if the input type of the display property is a picker). |
| DisplayOrder default value: 0 | Int32 | Defines the property display order. |
| DisplayTable optional | Int64 | Identifier of the display table. |
| Format optional | String | Defines a formatting method on the property values (`ParseSince1601Date`, `ToStringUserAccountControl`, `FormatDate` and `ParseBoolean`). |
| Group optional | Int64 | Identifier of the display property group, i.e. the fieldset, that the property is part of in the default UI form. |
| IconCode optional | String | Defines the icon code. |
| InputType default value: Auto | Enumeration | Identifier of the input type. See the [Form](../form/index "Form") topic for additional information. |
| IsHidden default value: false | Boolean | Property is hidden. |
| IsReadOnly default value: false | Boolean | Property is ReadOnly. |
| IsRequired default value: false | Boolean | Property is required. |
| MinSearchLength optional | Int32 | Defines the minimum number of characters from which the search in the auto complete picker starts - 4 if it is not defined (the input type of the display property must be a picker and the AutocompleteBinding must be defined). |
| NavigationBinding optional | Int64 | Defines the binding of the resource on which the user will be redirected when he clicks on an element of a BasicCollection. |
| OutputType default value: Auto | Enumeration | Identifier of the output type. |
| PlaceHolderText\_L1 optional | String | Property place holder text. |
| Tile optional | Int64 | Identifier of the tile. |
| ToolTipText\_L1 optional | String | Property tool tip text. |