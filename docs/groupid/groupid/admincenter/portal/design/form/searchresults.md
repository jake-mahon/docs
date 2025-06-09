# Customize Search Results

You can customize the search result pages for a portal. You can:

- Add new fields
- Edit existing fields
- Remove fields
- Change the arrangement of fields on a page

NOTE: You can only customize existing search result pages; you cannot add new ones.

### Customizable Search Results Pages

The following table lists the search results pages that you can customize:

| Form Name | Description |
| --- | --- |
| Smart Group Preview | Manage the column headers on the preview page, which is displayed when users click the __Preview__ button on the __Query Designer__ dialog box. It enables users to preview the results returned with the specified query for the Smart Group/Dynasty.  The __Query Designer__ dialog box can be launched from the Smart Group page when creating a new Smart Group or Dynasty, and from the Smart Group tab in group properties. |
| Default | Manage the column headers on the __All__ tab of the search results page, which is displayed when users perform a search on the __Advanced Search__ page in the portal.  The __Advanced Search__ page can be launched using the __Advanced Search__ link. |
| User | Manage the column headers on the following portal pages:   - The __My Direct Reports__ tab, where users can view a list of their direct reports. This tab is displayed when users click __Users > My Direct Reports__ in the portal. - The __Users__ and __Contacts__ tabs on the search results page, which is displayed when users perform a search on the __Advanced Search__ page in the portal. |
| Disabled Users | Manage the column headers on the __Disabled Users__ tab in the portal, which displays a list of disabled users in the directory.  This tab is displayed when users click __Users > My Direct Reports__ and then the __Disabled Users__ tab in the portal. |
| Groups | Manage the column headers on the following portal pages:   - The __All Groups__ page – all except the __Expired Groups__ and __Expiring Groups__ tabs - The __My Groups__ page – all except the __My Expired Groups__ and __My Expiring Groups__ tabs - The __Groups__ tab on the search results page, which is displayed when users perform a search on the __Advanced Search__ page in the portal. |
| Expiring Groups | Manage the column headers on the following tabs in the portal:   - Groups > All Groups and then the __Expiring Groups__ tab . It displays the groups in the directory that will expire in 30 days or less. - Groups > My Groups and then the __My Expiring Groups__ tab. It displays the logged-on user’s groups that will expire in 30 days or less. |
| Expired Groups | Manage the column headers on the following tabs in the portal:   - Groups > All Groups and then the __Expired Groups__ tab. It displays the expired groups in the directory. - Groups > My Groups and then the __My Expired Groups__ tab. It displays the logged-on user’s groups that have expired. |
| Find dialog | Define the attributes to display for objects shown as search results on the _Find_ dialog box.  The _Find_ dialog box is used to search and select objects to designate as owners, managers, additional owners, group members, and more. It has a _search_ area and a _search results_ area. This option controls the column headers (attributes) displayed in the __Search Results__ area.  The _Find_ dialog box can be launched from various portal pages, for example, from the __Owner__ tab, __Members__ tab, and __Member Of__ tab in group properties. |

## Add a Field to a Search Results Page

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Search Forms__ in the left pane. Then click the __Search Results__ tab.
5. On the __Search Results__ tab, the search results pages available in the portal are listed under __Name__. To modify a page, click __Edit__ for it.
6. On the __Edit Search Results__ pane, the __Fields__ area lists the fields that display search results on the selected page.  
   Click __Add Field__ to add a new field.
7. On the __Add Field__ pane, use the __Field__ drop-down list to select a schema attribute to link to the field. The field will display the value of this attribute on the search
   results page.
8. In the __Display Name__ box, enter a display name for the field. This name is the field’s label on the search results page.
9. In the __Tooltip__ box, enter the text to appear when a user hovers the mouse over the field.
10. In the __Display Type__ drop-down list, select the display type to use to render this field in the portal. Available options are limited to textbox, DN, DNs, and Link, which are basic display Types. See the [Basic Display Types](/docs/groupid/groupid/admincenter/portal/displaytype/categories.md#basic-display-types) topic.
11. Click __OK.__ The field is displayed in the __Fields__ area on the __Edit Search Results__ pane.  
    To rearrange the fields on the search form, click the equal sign for a field and drag to change its position.
12. Click __OK__.
13. Click __Save__ on the __Search Forms__ page.

## Update a Field on a Search Results Page

You can change the following for a field on a search results page:

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
4. Click __Search Forms__ in the left pane; then click the __Search Results__ tab.
5. On the __Search Results__ tab, click __Edit__ for a form to update its fields.
6. On the __Edit Search Results__ pane, click __Edit__ for a field to update it.  
   The __Edit Field__ pane is displayed. Follow step 7 and onwards in the [Add a Field to a Search Results Page](#Add-a-Field-to-a-Search-Results-Page) topic to update the field.

## Remove a Field from a Search Results Page

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Search Forms__ in the left pane; then click the __Search Results__ tab.
5. On the __Search Results__ tab, click __Edit__ for the form you want to remove a field from.
6. On the __Edit Search Results__ pane, click __Remove__ for a field to remove it.
7. Click __OK__.
8. Click __Save__ on the __Search Forms__ page.

__See Also__

- [Design a Portal with Display Types](/docs/groupid/groupid/admincenter/portal/displaytype/overview.md)
- [Display Type Categories](/docs/groupid/groupid/admincenter/portal/displaytype/categories.md)
- [Customize Search Results](#Customize-Search-Results)
- [Customize Quick Search](/docs/groupid/groupid/admincenter/portal/design/form/quicksearch.md)
