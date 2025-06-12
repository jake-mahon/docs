# Manage Property Validation Attributes

In GroupID, property validation applies to:

- Users
- Groups

### Profile Validation for Users

Profile validation is designed to ensure the accuracy of users’ information in the directory. It applies to users who are members of the group specified for profile validation in an identity store. These users must verify and update their directory profile information at a set frequency using the portal.

While validating his or her profile, a user can:

- Update his or her directory profile information
- Change his or her primary manager
- Transfer his or her direct reports to another manager
- Terminate his or her direct reports

You can specify the schema attributes (fields) for user profile validation. These attributes (fields) are displayed on the __Validate Profile Properties__ window of the portal, where users can validate and update the values for these attributes.

NOTE: A few fields for profile validation are specified in the default portal template. You can add more fields, edit the existing fields, or remove them. However, the __My Direct Reports__ field can neither be edited nor removed.

### Property Validation for Groups

The GroupID administrator can enforce group owners to review and validate the attributes and membership of an expiring group before renewing it. See the [Enable Group Attestation](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/directoryservice/grouplifecycle.md#enable-group-attestation) topic.

While attesting a group in the portal, the owner can:

- Update a few attributes, such as the group’s display name, expiration policy, security type, etc.
- Verify the group’s membership and inactivate undesired members. Inactive members are removed from group membership instantly or after x number of days, depending on the configurations made by the administrator.

Group attestation applies to expiring groups with an expiry policy other than ‘never expire’.

You can specify the schema attributes (fields) for group attestation. These attributes (fields) are displayed on the __Attest & Renew Group__ wizard in the portal, where group owners can validate and update the values for these attributes.

NOTE: A few fields for group attestation are specified in the default portal template. You can add more fields, edit the existing fields, or remove them. However, the _Members_ grid can neither be edited nor removed.

What do you want to do?

- [Add a Property Validation Field](#add-a-property-validation-field)
- [Update a Field](#update-a-field)
- [Remove a Field](#remove-a-field)

## Add a Property Validation Field

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Property Validation__ in the left pane. The __Property Validation__ page is displayed.
5. In the __Select Directory Object__ drop-down list, select:

   - _Group:_ to add, edit, or remove attributes for group attestation.
   - _User:_ to add, edit, or remove attributes for user profile validation.

   On selecting an option, the fields available for group attestation/profile validation in the portal are listed under __Name__.
6. Click __Add__ to specify a new attribute (field) for group attestation/profile validation.  
   The __Add Profile Validation Attribute__ pane is displayed.
7. Select an attribute from the __Field__ drop-down list.
8. In the __Display Name__ box, specify a name to use as the field’s label on the Attest & Renew Group wizard/Validate Profile Properties window of the portal.
9. Use the __Display Type__ drop-down list to specify the display type to use for rendering the attribute in the portal. The list contains basic display types and custom display types defined on the __Custom Display Types__ page. See the [Display Type Categories](/versioned_docs/groupid_11.0/groupid/admincenter/portal/displaytype/categories.md) topic.
10. In the __Visibility Level__ drop-down list, select a security role. The field would be visible to users of this role and roles with a priority value higher than this role. See [Priority](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/manage.md#priority).  
    Select _Never_ to hide the field from all users.
11. As mentioned for visibility level, the field is visible to members of the selected role and roles with a priority value higher than the selected role.  
    In the __Exclude Roles__ area, select the check boxes for the higher priority role(s) you want to hide the field from.
12. In the __ToolTip Text__ box, enter the text to display when a user hovers the mouse over the field.
13. In the __Max Length__ box, enter a number that represents the maximum number of characters that users can enter as value for the field. Entering _0_ indicates that the field can accept an unlimited number of characters for its value.
14. Select the __Is Required__ check box to make it mandatory for users to provide a value for the field.
15. Select the __Is Read Only__ check box to make the field read-only.
16. Select the __Filter Bad Words__ check box to ensure that users do not enter any bad word in this field.  
    A value entered for the field is checked against the words listed on the __Bad Words List__ page. Matched values cannot be saved. See the [Manage the Bad Words List](/versioned_docs/groupid_11.0/groupid/admincenter/portal/design/badwords.md) topic.
17. The __Image Attribute__ list is available when ‘DN’ is selected as the display type. This list supports ‘thumbnailPhoto’ as its value.

    - Select the ‘thumbnailPhoto’ attribute in the __Image Attribute__ drop-down list when you want to auto upload an image for the field. Let’s assume you apply this setting while defining the _Primary Manager_ field on the _Validate Profile Properties_ window. In the portal, the primary manager's image will be displayed alongside his or her name on the _Validate Profile Properties_ window.  
      Note that for the image to display, the ‘thumbnailPhoto’ attribute must have a value stored; in case of no value, an image placeholder is displayed.
    - If you do not want to auto upload an image for the field, clear the value in the __Image Attribute__ box.
18. Click __OK__.
19. Click __Save__ on the __Property Validation__ page.

## Update a Field

You can change the following for a field available in the portal for group attestation or user profile validation:

- The attribute mapped to the field
- The display name (the field is displayed with this label in the portal)
- The display type used to render the field in the portal
- Visibility level
- Tooltip

The following field properties vary from field to field. You can:

- Specify the maximum characters that a user can enter as value for the field
- Whether to auto upload an image with the field
- Make the field editable or read–only
- Make it optional or mandatory for users to provide a value for the field
- Prevent users from using certain words as value for the field

__To update field properties:__

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Property Validation__ in the left pane.
5. On the __Property Validation__ page, select _Group_ or _User_ in the __Select Directory Object__ drop-down list.

   - _Group:_ to update a field for group attestation
   - _User:_ to update a field for user profile validation
6. In the __Name__ area, click __Edit__ for a field.
7. On the __Edit Profile Validation Attribute__ pane, update the required information. Follow steps 7-19 in the [Add a Property Validation Field](#add-a-property-validation-field) topic for help.

## Remove a Field

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Property Validation__ in the left pane.
5. On the __Property Validation__ page, select _Group_ or _User_ in the __Select Directory Object__ drop-down list.

   - _Group:_ to remove a field from the __Attest & Renew Group__ wizard in the portal.
   - _User:_ to remove a field from the __Validate Profile Properties__ window in the portal.
6. In the __Name__ area, click __Remove__ for a field to remove it.
7. Click __Save__.

__See Also__

- [Design a Portal with Display Types](/versioned_docs/groupid_11.0/groupid/admincenter/portal/displaytype/overview.md)
- [Configure User Profile Validation](/versioned_docs/groupid_11.0/groupid/admincenter/identitystore/configure/directoryservice/profilevalidation.md)
