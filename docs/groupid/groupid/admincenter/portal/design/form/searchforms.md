# Customize Search Forms

You can customize the search forms for a portal. You can:

- Add new fields
- Edit existing fields
- Remove fields
- Change the arrangement of fields on a page

NOTE: You can only customize existing search forms; you cannot add new ones.

### Customizable Search Forms

The following table lists the search forms that you can customize:

| Search Form Name | Description |
| --- | --- |
| Default | Manage the search fields on the _Advanced Search_ page, where users can search directory objects (user, group, contact) by different attributes.  This page is displayed when users click the _Advanced Search_ link. |
| Find Dialog | Manage the search fields on the _Find_ dialog box.  The _Find_ dialog box can be launched from various portal pages, for example, from the __Owner__ tab, __Members__ tab, and __Member Of__ tab in group properties. It is used to search for objects to designate as owners, managers, additional owners, group members, and more. |

What do you want to do?

- Add a Field to a Search Form
- Update a Field on a Search Form
- Remove a Field from a Search Form

## Add a Field to a Search Form

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Search Forms__ in the left pane.
5. On the __Search Form__ tab, the search forms available in the portal are listed under __Name__.  
   To modify a form, click __Edit__ for it.
6. On the __Edit Search Form__ pane, the __Fields__ area lists the fields available on the search form for performing a search.  
   Click __Add Field__ to add a new field. The __Add Field__ pane is displayed.
7. In the __Field__ drop-down list, select a schema attribute to link to the field.  
   The search string that portal users enter in the field will be matched to this attribute’s values to fetch search results.
8. In the __Display Name__ box, enter a display name for the field. This name is the field’s label on the search form.
9. In the __Tooltip__ box, enter the text to appear when a user hovers the mouse over the field.
10. In the __Display Type__ drop-down list, select the display type to use to render this field in the portal. The list contains basic display types
    and custom display types defined on the __Custom Display Types__ page. See the [Display Type Categories](/docs/groupid/groupid/admincenter/portal/displaytype/categories.md) topic.
11. Click __OK.__ The field is displayed in the __Fields__ area on the __Edit Search Form__ pane.  
    To rearrange the fields on the search form, click the plus sign for a field and drag to change its position.
12. Click __OK__.
13. Click __Save__ on the __Search Forms__ page.

## Update a Field on a Search Form

You can change the following for a field on a search form:

- The name of the field, as displayed in the portal
- The schema attribute linked to the field
- The display type used to render the field in the portal
- The tooltip for the field

__To update a field:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Search Forms__ in the left pane.
5. On the __Search Form__ tab, the search forms available in the portal are listed under __Name__.Click __Edit__ for a form to update its fields.
6. On the __Edit Search Form__ pane, click __Edit__ for a field to update it.
7. The __Edit Field__ pane is displayed. Refer to step 7 and onwards in the Add a Field to a Search Form topic to update the field.

## Remove a Field from a Search Form

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Search Forms__ in the left pane.
5. On the __Search Form__ tab, click __Edit__ for the form you want to remove a field from.
6. On the __Edit Search Form__ pane, click __Remove__ for a field to remove it.
7. Click __OK__.
8. Click __Save__ on the __Search Forms__ page.

__See Also__

- [Design a Portal with Display Types](/docs/groupid/groupid/admincenter/portal/displaytype/overview.md)
- [Display Type Categories](/docs/groupid/groupid/admincenter/portal/displaytype/categories.md)
- [Customize Search Results](/docs/groupid/groupid/admincenter/portal/design/form/searchresults.md)
- [Customize Quick Search](/docs/groupid/groupid/admincenter/portal/design/form/quicksearch.md)
