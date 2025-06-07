# Customize the Toolbars

Toolbars are available on different pages of the Directory Manager portal; however, not all of these are customizable.

You can customize the following toolbars:

| Toolbar | Availability in the portal |
| --- | --- |
| User | The __My Profile__ and user properties pages  NOTE: The _Validate your profile_, _Extend_, and _Reinstate_ buttons on this toolbar are displayed in the portal when user profile validation is enabled: |
| Group | The group properties page  NOTE: (1) The _Update_ button is not displayed for static groups.    (2) The _Expire_ button is not displayed for groups with an expiation policy set to _Never Expire_.   (3) The _Attest Group_ and _Renew_ buttons are displayed when group attestation is enabled.   (4) The _Upgrade To_ button is displayed for static groups only. |
| Default Search | The __All__ tab on the __Search Results__ page for Quick Search and Advanced Search |
| Users Search | The __Users__ and __Contacts__ tabs on the __Search Results__ page for Quick Search and Advanced Search |
| Groups Search | The __Groups__ tab on the __Search Results__ page for Quick Search and Advanced Search |
| My Membership Groups | The __My Memberships__ tab of the __My Groups__ page |
| My Expiring Groups | The __My Expiring Groups__ tab of the __My Groups__ page |
| My Expired Groups | The __My Expired Groups__ tab of the __My Groups__ page |
| My Deleted Groups | The __My Deleted Groups__ tab of the __My Groups__ page |
| My Dynasties | The __My Dynasties__ tab of the __My Groups__ page |
| My Smart Groups | The __My Smart Groups__ tab of the __My Groups__ page |
| All Groups | The __All Groups__ tab of the __All Groups__ page |
| My Groups | The __My Groups__ tab of the __My Groups__ page |
| Expired Groups | The __Expired Groups__ tab of the __All Groups__ page |
| Expiring Groups | The __Expiring Groups__ tab of the __All Groups__ page |
| Private Groups | The __Private Groups__ tab of the __All Groups__ page |
| Semi-Private Groups | The __Semi-Private Groups__ tab of the __All Groups__ page |
| Public Groups | The __Public Groups__ tab of the __All Groups__ page |
| Smart Groups | The __Smart Groups__ tab of the __All Groups__ page |
| Dynasties | The __Dynasties__ tab of the __All Groups__ page |
| My Direct Reports | The __My Direct Reports__ tab of the __Users__ page |
| Disabled Users | The __Disabled Users__ tab of the __Users__ page |
| Members Grid | The __Members__ tab in static group properties |
| Smart Members Grid | The __Members__ tab in Smart Group and Dynasty properties |
| User Members Of Grid | The __Member Of__ tab in user properties |
| Computer Members Of Grid | The __Member Of__ tab in computer properties |
| Additional Owner | The __Owner__ tab in group properties |
| Additional Manager | The __Organization__ tab in user properties |
| Create Group Wizard – Members | The __Members__ page of the Create New Group wizard (for static group only) |
| Create Group Wizard - Additional Owner | The __Owners__ page of the Create New Group wizard (for all group types) |
| Contact Member Of Grid | The __Member Of__ tab in contact properties |
| Group Member Of Grid | The __Member Of__ tab in group properties |
| Direct Reports Grid | The __Organization__ tab in user properties |

NOTE: The __Computer Members of Grid__ and __Contact Member of Grid__ toolbars are not available for a Microsoft Entra ID identity store.

The buttons available on these toolbars are predefined. You cannot add or remove a button, but you can update a few details for a button, such as its name and image.

## Update the Properties of a Toolbar Button

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Setting__s. You can design a different portal for each of these.
4. Click __Toolbars__ in the left pane; the __Toolbars__ page is displayed.
5. In the __Select Toolbar Type__ drop-down list, select the toolbar you want to update.  
   The __Name__ area lists all buttons on this toolbar.
6. Click __Edit__ for a toolbar button to update its properties.
7. On the __Toolbar Button Properties__ pane, update the following information as required:

   1. __Name__ – The name of the toolbar button. It is read-only.
   2. __Text__ – The text displayed on the button as its name.
   3. __Show Text__ – Select this check box to display the text on the button; else the button would be displayed without the text.
   4. __Tooltip Text__ - The text to appear when a user hovers the mouse over the button.
   5. __Icon Class__ – The image (icon) to be displayed for the button on the toolbar.
   6. __Active Icon Class__ – The image (icon) to be displayed when a user hovers the mouse over this button.
   7. To manage images for Icon Class and Active Icon Class:

      - If no image has been uploaded, click __Upload__ to browse and select an image to upload.
      - If an image has been uploaded, the very image is displayed. Click __Upload__ to replace the existing image with a new one.

        NOTE: Image dimensions: 30 x 30 pixels
          
         Supported formats: .png, .jpg, .jpe, .jpeg
   8. __Visibility Level__ – Select a security role. The toolbar button would be visible to users of this role and roles with a priority value higher than this role. See [Priority](/docs/product_docs/groupid/groupid/admincenter/securityrole/manage.md#Priority).  
      Select _Never_ to hide the button from all users.
8. Click __OK__.
9. Click __Save__ on the __Toolbars__ page.

## Rearrange the Buttons on a Toolbar

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Toolbars__ in the left pane.
5. On the __Toolbars__ page, select a toolbar in the __Select Toolbar Type__ drop-down list.  
   The __Name__ area lists all buttons on this toolbar.
6. To change the order of buttons on the toolbar, click the equal sign for a button and drag to change its position.
7. Click __Save__.

See Also

- [Design a Portal with Display Types](/docs/product_docs/groupid/groupid/admincenter/portal/displaytype/overview.md)
