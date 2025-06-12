# Manage Property Validation

In GroupID, property validation applies to:

- Users
- Groups

#### Profile Validation for Users

See the [Profile Validation for Users](/versioned_docs/groupid_11.0/groupid/admincenter/portal/design/propertyvalidation.md#Profile-Validation-for-Users) topic.

#### Property Validation for Groups

See the [Property Validation for Groups](/versioned_docs/groupid_11.0/groupid/admincenter/portal/design/propertyvalidation.md#Property-Validation-for-Groups) topic.

What do you want to do?

- [Add a Property Validation Field](#Add-a-Property-Validation-Field)
- [Edit a Field](#Edit-a-Field)
- [Remove a Field](#Remove-a-Field)

## Add a Property Validation Field

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Mobile Service__ tab, click the ellipsis button for a service and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under __Design Settings__. You can design a different app for each of these.
4. Click __Property Validation__ in the left pane.
5. In the __Select Directory Object__ drop-down list on the __Property Validation__ page, select:

   - __Group:__ to add, edit, or remove attributes for group attestation.
   - __User:__ to add, edit, or remove attributes for user profile validation.

   On selecting an option, the fields available for group attestation or profile validation in the app are listed under __Name__.
6. Click __Add__ to add a new field.
   The __Add Profile Validation Attribute__ pane is displayed.
7. Select an attribute from the __Field__ drop-down list.
8. In the __Display Name__ box, specify a name to use as the field’s label on the Attest Group/Validate Profile page of the app.
9. In the __Display Type__ drop-down list, select a display type for rendering the attribute (field) in the app.
10. In the __Visibility Level__ drop-down list, select a security role. The field would be visible to users of this role and roles with a priority value higher than this role. See [Priority](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md#Priority).  
    Select _Never_ to hide the field from all users.
11. Click __Advanced options__ to enter further details for the field.
12. As mentioned for visibility level, the field is visible to members of the selected role and roles with a priority value higher than the selected role.  
    In the __Exclude Roles__ area, select the check boxes for the higher priority roles you want to hide the field from.
13. In the __ToolTip Text__ box, enter the help text to appear when a user hovers the mouse over the field.
14. In the __Max Length__ box, enter a number that represents the maximum number of characters that users can enter as value for the field. Entering _0_ indicates it can accept an unlimited number
    of characters as value.
15. Select the __Is Required__ check box to force users to provide a value for the field.
16. Select the __Is Read Only__ check box to make the field read-only.
17. Click __OK__.
18. Click __Save__.

## Edit a Field

You can change the following for a field available in the app for group attestation or user profile validation:

- The attribute associated with the field
- The display name (the field is displayed with this label in the app)
- The display type used to render the field in the app
- Visibility level
- Tooltip
- The maximum characters that a user can enter as value for the field
- Make the field editable or read–only
- Make it optional or mandatory for users to provide a value for the field

__To update a field:__

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Mobile Service__ tab, click the ellipsis button for a service and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under __Design Settings__. You can design a different app for each of these.
4. Click __Property Validation__ in the left pane.
5. In the __Select Directory Object__ drop-down list on the __Property Validation__ page, select:

   - __Group:__ to update a group attestation field.
   - __User:__ to update a user profile validation field.
6. In the __Name__ area, click __Edit__ for a field.
7. Modify the required info on the __Edit Profile Validation Attribute__ pane.
   Follow the steps in the
   [Add a Property Validation Field](#Add-a-Property-Validation-Field) topic, beginning at step 7.

## Remove a Field

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Mobile Service__ tab, click the ellipsis button for a service and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under __Design Settings__. You can design a different app for each of these.
4. Click __Property Validation__ in the left pane.
5. In the __Select Directory Object__ drop-down list on the __Property Validation__ page, select:

   - __Group:__ to remove a field from the Attest Group page in the app.
   - __User:__ to remove a field from the Validate Profile page in the app.
6. In the __Name__ area, click __Remove__ for a field to remove it.
7. Click __Save__.

__See Also__

- [Mobile Service](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/overview.md)
- [Design Settings](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/design/overview.md)
