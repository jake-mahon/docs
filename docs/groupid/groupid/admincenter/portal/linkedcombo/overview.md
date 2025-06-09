# Linked Combo Display Type

A linked combo is a custom display type that you can link to other display types on a portal page. When a user selects a value from a linked combo, the values for the display types linked to it are populated accordingly. A common application of the
linked combo involves the _country, state_, and _city_ fields. When a user selects a country, the _state_ field changes to display
the states in that country. On selecting a state, the city field displays the cities in that state.

In the default portal template, one linked combo display type _CountryState_ is defined, that establishes a relationship between the country and state fields. Selecting a country populates the _State_ list.

A linked combo display type also allows for more complex linking between fields, such as would be needed to link the office, city, state, and country fields. Relationships can be extended to any level. You can define one linked combo display type
to manage these relationships, or simplify the task by defining multiple combos, for example:

- The first linked combo establishes a relationship between the country and state fields.
- The second linked combo establishes a relationship between the state and city fields.
- The third establishes a relationship between the city and office fields.

Before creating a linked combo, you must create and maintain an external data file containing the data and relationships for the required fields. The data source file is used to populate the linked combo and the fields linked to it.

NOTE: When defining a linked combo, consider the following:

- You can define multiple linked combos for an object, provided that different attributes are used for the combos. For example, you define a linked combo for the user object using the company, department, and title attributes. To define another
  combo for the user object, you cannot use any of the previously used attributes.
- For two different object types, you can use the same attributes in different linked combos.

#### Linked Combo Data File

The linked combo requires an XML file that contains the data for the display type itself and the other display types that will be linked to it. Directory Manager also supports the Microsoft Excel file format (.xls or .xlsx), that it automatically converts to
XML. The data in the Excel file must be in a specific format for Directory Manager to process it.

For information about the Excel file format, see the [Excel Data File Format](/docs/groupid/groupid/admincenter/portal/linkedcombo/fileformat.md) topic.

NOTE: If data in the source file is updated, you must reload the file for changes to take effect.

## Define a Linked Combo Display Type

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to define a custom display type for it.  
   All identity stores associated with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Custom Display Types__ in the left pane.
5. On the __Custom Display Types__ page, click the __Linked Combo Types__ tab.
6. Click __Add__ to define a linked combo display type.
7. Complete the pages of the __Linked Combo Display Type__ wizard.

   1. On the __Details__ page, provide the source data file. See the [Linked Combo Type - Details](/docs/groupid/groupid/admincenter/portal/linkedcombo/details.md) topic for more info.
   2. On the __Schema__ page, define the parent-child relationship between fields. See the [Linked Combo Type - Schema](/docs/groupid/groupid/admincenter/portal/linkedcombo/schema.md) topic for details.
8. Click __OK__.
9. Click __Save__ on the __Custom Display Types__ page.  
   The linked combo display type is listed on the __Linked Combo Types__ tab.

## Implement a Linked Combo

To use a linked combo in a portal, do the following:

1. Link a linked combo display type to a schema attribute on the __Search Forms__, __Properties__, __Create Object__, or __Property Validation__ page in Design settings. The linked combo is rendered as a drop-down list in the portal.  
   On the __Schema__ page of the __Linked Combo Display Type__ wizard, you selected an expression (representing a data column in the source Excel workbook) in the
   __Type binding expression__ drop-down list. Each record in this column will be displayed as a value in the drop-down list in the portal. When a user selects a value, it will be stored as the value of the schema attribute mapped to the linked
   combo display type.
2. The fields listed in the __Linked Field__ list on the __Schema__ page are already mapped to schema attributes. For all fields that you use in a linked combo, one of the following
   cases apply:

   - If a field’s schema attribute is already rendered as a field on the same portal page, it auto connects to the linked combo. Values in this field are displayed with respect to the expression mapped to it on the __Schema__ page.  
     Let’s assume you select a field, Country, in the _Linked Field_ list, which is mapped to the “co” attribute in Active Directory. You link it to the ‘Country Name’ column in the source file. This column
     contains the names of all the countries in the world.  
     Now in the default portal template, the ‘co’ attribute is already rendered as a drop-down list on the _General_ tab in user properties and displays the names of Asian countries. When you apply your linked
     combo (containing the Country field) on the General tab, it auto-connects to the ‘co’ attribute and replaces its values (the list of Asian countries) with the values from the source data file (the names of all countries of the
     world).
   - If a field’s schema attribute is not previously used on the same portal page as the linked combo, the field will not be displayed in the portal. You must link this attribute to a display type and render it on the same portal page as the linked
     combo. Values in this field will be displayed with respect to the expression mapped to it on the __Schema__ page.

   In any case, set the display type of each field in a linked combo to a _Textbox_ or _Dropdown_ list, depending on the kind of values it would hold.

### Example Case for Implementing a Linked Combo

In this example, we will link a linked combo display type to the Company attribute (field) on the General tab of the user properties page in the portal. Next, we will present how the fields used in the linked combo should be rendered on the General
tab, so that the fields are connected.

#### Step 1: Link a Linked Combo to a Schema Attribute

1. In Admin Center, select __Applications__ in the left pane.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings.__
4. In the left pane, click __Properties__.
5. On the __Properties__ page, select _User_ in the __Select Directory Object__ list.
6. The names of all tabs on the portal’s user properties page are listed under __Name__. To render the linked combo on the __General__ tab, click __Edit__ for it.
7. On the __Edit Design Category__ pane, let’s link the _Company_ field to the linked combo. Click __Edit__ for the _Company_ field.
8. On the __Edit Field__ pane, select a schema attribute to map your linked combo to, and in the __Display Type__ drop-down list, select your linked combo display type.
9. Click __OK__ on the panes to close them.
10. Click __Save__ on the __Custom Display Types__ page.

The _Company_ field would be displayed as a drop-down list on the _General_ tab of the user properties page in the portal. Values in this list will be populated from the combo’s
source data file, with respect to the expression selected in the __Type Binding Expression__ drop-down list on the __Linked Combo Display Type__ wizard.

#### Step 2: Render the Linked Fields in the Combo on the Portal

If the fields defined in a linked combo are already rendered on the same portal page as the linked combo, make sure that the appropriate display type is used for them. Some examples are shown in the table below.

On the other hand, if the fields defined in a linked combo are not available on the same portal page as the linked combo, you must create the fields first. These fields must be linked to the same schema attributes as the combo’s fields are linked
with, and an appropriate display type must be set for them. The following table shows an example of the field names and the display types to set for them.

| Field | Display Type to use | Notes |
| --- | --- | --- |
| Country | Drop-down list | Create a Drop-down List display type and use it for this field or use the default drop-down list, lstCountry.  lstCountry has values defined for it, which may produce undesirable results. |
| State | Drop-down list | Create a Drop-down List display type and use it for this field or use the default drop-down list, lstState. |
| City | Drop-down list | Create a Drop-down List display type and use it for this field or use the default drop-down list, lstCity. |
| Address | Text box | Use a simple text box display type with this field |
| Zip | Text box | Use a simple text box display type with this field or use the default textbox display type, maskZIPCode. This default display type comes with a validation check that ensures that users enter the zip code in the required format. |

## Reload the Source Data File

When you update data in the source file, you must also reload the file for changes to take effect.

__To reload the file:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to define a custom display type for it.  
   All identity stores associated with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Custom Display Types__ in the left pane.
5. On the __Custom Display Types__ page, click the __Linked Combo Types__ tab.
6. Click __Edit__ for a linked combo to reload the source data file for it. The __Linked Combo Display Type__ wizard is displayed.
7. On the __Details__ page, click __Browse__ to select the file to load. Then click __Next__.
8. On the __Schema__ page, make changes to the relationships, if required, and click __OK__.  
   See the [Linked Combo Type - Schema](/docs/groupid/groupid/admincenter/portal/linkedcombo/schema.md) topic for details.
9. Click __Save__ on the __Custom Display Types__ page.

__See Also__

- [Display Type Categories](/docs/groupid/groupid/admincenter/portal/displaytype/categories.md)
- [Define Custom Display Types](/docs/groupid/groupid/admincenter/portal/displaytype/custom.md)
