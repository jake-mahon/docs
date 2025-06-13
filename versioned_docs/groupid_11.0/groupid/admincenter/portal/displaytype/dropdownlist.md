# Drop-down List Display Type

Use the drop-down list display type to give portal users a list of options to select from.

To create a custom drop-down list display type, you have to specify the values (options) to display in the list. This custom display type can then be linked to a schema attribute. Options in the drop-down list are the different values that users can
select for the schema attribute you link this display type with.

### Predefined Drop-down List Display Types

A few drop-down list display types used in the default portal template are:

|  | Display Type Name | Default Value | Values |
| --- | --- | --- | --- |
| 1. | lstSecurity | Private: Closed Membership | Public  Semi-Private: Owner Must Approve  Private: Closed Membership |
| 2. | lstGroupScope | Universal Group | Domain Local  Global Group  Universal Group |
| 3. | lstGroupType | None | Security  Distribution |
| 4. | membershipeditlist | None | Perpetual  Temporary Member  Addition Pending  Temporary Removed  Removal Pending |
| 5. | lstCountry | None | A list of all countries |
| 6. | lstState | None | A list of all states in the US |
| 7. | lstStateProvince | None | A list of all states in the US and provinces in Canada. |
| 8. | lstProvince | None | A list of all provinces in Canada |

What do you want to do?

- [Define a Drop-down List Display Type](#define-a-drop-down-list-display-type)

## Define a Drop-down List Display Type

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to define a custom display type for it.  
   All identity stores associated with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Custom Display Types__ in the left pane.
5. On the __Custom Display Types__ page, click __Add__ on the __Custom Display Types__ tab.
6. On the __New Display Type__ pane, enter a name for the display type and select _Dropdown List_ in the __Type__ drop-down list.  
   You
   cannot change the name of a custom display type once you have created it.
7. Use the __Values__ area to specify the values to be displayed in the drop-down list.

   1. Click __Add Value__.
   2. Specify a value and a display text for that value in the respective boxes. The display text will be displayed in the drop-down list, while the value will be saved in the directory or database when a user selects the display text from the drop-down
      list.  
      (The value will be saved in the directory when the drop-down list display type is mapped to a directory attribute. It will be saved in the database when the display type is mapped to a database attribute.)
   3. In the __Visibility__ drop-down list, select a security role. The value in the drop-down list will be visible to users of this role and roles with a priority value higher than this role. See [Priority](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md).  
      Select _Never_ to hide the value from all users.
   4. Click __OK__. The value is listed in the __Values__ area, represented by its display text.
8. Repeat step 7 to define more values in the list.

   - To edit a value, click __Edit__ for it.
   - To remove a value from the list, click __Delete__ for it.
9. Select a value in the __Default Selection__ list to set it as the default value for the drop-down list in the portal.  
   The __Default Selection__ list contains all values
   defined in the __Values__ area.
10. Click __OK__.
11. Click __Save__ on the __Custom Display Types__ page.

__See Also__

- [Design a Portal with Display Types](/versioned_docs/groupid_11.0/groupid/admincenter/portal/displaytype/overview.md)
- [Display Type Categories](/versioned_docs/groupid_11.0/groupid/admincenter/portal/displaytype/categories.md)
- [Define Custom Display Types](/versioned_docs/groupid_11.0/groupid/admincenter/portal/displaytype/custom.md)
