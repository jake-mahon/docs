# Customize Notifications

Directory Manager generates a variety of notifications for different events, such as when changes are made to a group, when workflows are triggered, and when profile validation is due for users. Supported languages for notifications are listed in the [Localization](/docs/groupid/groupid/gettingstarted.md#localization) topic.

Templates for all Directory Manager notifications are available in these languages. You can customize a notification template for the following in each of the supported languages:

- Subject line
- Message (content and format)

By default, notifications are sent to users in the English language. However, a user can opt to receive notifications in a different language by personalizing the language settings from the __Settings__ panel in
the Directory Manager portal.

## Customize a Notification Template

1. In Admin Center, click __Notifications__ in the left pane. Then click __Notification Editor__ on the __Notification Queue__ page.  
   Or  
   In Admin Center, click __Notification Editor__ at the bottom of the left navigation pane.

   The editor displays a list of all notifications that Directory Manager generates. Notification names are displayed in English, regardless of the language you select.
2. By default, English (US) is selected, so you can view and customize the notification templates in the English language. To set another language:

   1. Click __Filter__.
   2. On the __Filter(s)__ dialog box, select a language in the __Locality__ drop-down list.  
      This list displays the ISO codes of the supported languages.
   3. Click __Apply__.
3. You can search for a notification template using the following filters:

   - Select an event in the __Categories__ list to get a list of notifications pertaining to that event.
   - Specify a search string in the search box at the top and press __Enter__; notification templates that have the string as part of their name or description are displayed. You can also search for a specific
     notification template by its name.
4. To open a notification template for editing, click __Open__ for it in the __Actions__ column.
5. Select a mode to view the template. Options are:

   - Source code - Click the __Source Code__ tab to view and edit the notification template in the HTML editor.
   - Interactive - Click the __Interactive__ tab to view the template in a user–friendly format. This is how the notification will be displayed to the recipients. You cannot format or edit the template in
     this view.
6. You can customize the notification template in the following ways:

   - [Change the Subject Line](#Change-the-Subject-Line)
   - [Edit and Format the Content](#Edit-and-Format-the-Content)
   - [Replace the Tags](#Replace-the-Tags)
7. After saving your changes, click __Go Back__ to return to the Notification Editor.

### Change the Subject Line

1. In the Source Code view, click the __Title__ tile.
2. In the __Edit Title__ dialog box, change the subject line of the notification and click __Update__.
3. Click __Save__ on the menu bar.

### Edit and Format the Content

You can do the following in the Source Code view:

- Control the notification format. Use HTML tags to format heading styles, change the font and font size, change text alignment, and more.
- Make changes to the message content.
- Replace the tags with other relevant tags. By using a tag, you can display an attribute’s value in the notification.

NOTE: Do not insert tables or custom photos in a notification template.

After making the required changes, click __Save__ on the menu bar.

To aid you in content management, the Source Code view uses the same editor that powers Microsoft Visual Studio; hence, you also have the following options available:

- Use the page navigator in the top right corner of the source code view to scroll through the content. The navigator is divided into sections, enabling you to jump to the beginning, middle and end of the source code.
- Use the options on the __Edit__ menu to search for target text (whether it be a word, phrase, or tag), to cut the selected text, to copy the selected text, and to redo and undo an operation. You can also insert
  the current date and time in the template.

### Replace the Tags

In a notification template, variables are appended with an attribute name and enclosed in percentage signs, to display that attribute’s value in the notification. For example, %TARGETOBJECT\_DisplayName% will resolve to the display name of the targetobject;
%REQUESTER\_mail% will show the email address of the requester, and so on.

__To replace a tag:__

1. In the Source Code view, click the __Dictionary__ tile to view the recommended tags to replace the default tags with.

   ![tagdictionary](/img/product_docs/groupid/groupid/admincenter/notification/tagdictionary.webp)

   Each notification template has its own set of recommended tags.
2. Use the _Go To_ option on the __Edit__ menu to search for a tag you want to replace. Refer to the tag dictionary to know what tags are used in the notification.
3. After replacing a tag in the template, click __Save__ on the menu bar.

##### Complete List of Tags

Here is a complete list of tags for object attributes. Using tags other than these is not recommended. By using a tag, you can display an attribute’s value in the notification.

|  | Variable | Description |
| --- | --- | --- |
| 1. | TARGETOBJECT | Can be any object (user/group/contact) that is under consideration in a notification |
| 2. | REQUESTER | The user object who makes a workflow request |
| 3. | APPROVER | The approver in workflow notifications |
| 4. | ANOTHER\_APPROVER | An approver, other than the ‘approver’ above, who performs an action on the workflow request (as there can be multiple approvers) |
| 5. | BEHALFEDPERSON | The user on whose behalf join/leave requests are made by their manager |
| 6. | RECEIVER | The receiver of a notification |
| 7. | AUTHOR | A user who creates/modifies/deletes an object |
| 8. | USER | A user object under consideration in password-related notifications |
| 9. | MASTER | The master account of a user in password-related notifications |

##### Complete List of Attributes

Following is a list of all attributes that can be used with tags in the notification templates: You can also use any custom attributes.

| Attributes |
| --- |
| Owner | Member | MemberOf | Manager |
| Name | DisplayName | FirstName | LastName |
| Title | Company | Department | City |
| Office | DistinguishedName | ObjectId | ObjectType |
| Alias | SamAccountName | EmailAddress | CommonName |
| GroupType | Description | ObjectClass | ObjectCategory |
| Telephone | HomeDataBase | TargetAddress | FaxNumber |
| LogonName | DLMemRejectPerms | ObjectGUID | UnauthOrig |
| AuthOrig | DLMemSubmitPerms | DelivContLength | ExchCoManagedByLink |
| HideDLMembership | HideFromAddressLists | RequireAuthToSendTo | ReplyToOriginator |
| UserID | AdminDescription | DisplayNamePrintable | ReportToOwner |
| ObjectSid | ReportToOriginator | HierarchicalSearchPostfix | TokenGroups |
| Info | ManagerCanUpdateMembershipList | Container | ThumbnailPhoto |
| Password | ThumbnailLogo | DirectReports | JpegPhoto |
| PasswordLastSet | UserPasswordExpirationDate | IsCriticalSystemObject | UserAccountControl |
| ModifyTimeStamp | CreateTimeStamp | GroupTypeLocal | GroupTypeGlobal |
| GroupTypeSecurity | GroupTypeUniversal | GroupTypeDistribution | GroupScope |
| SimpleDisplayName | MsExchRequireAuthToSendTo | ExpansionServerName | OOFReplyToOriginator |
| Notes | Country | State | Street |
| HomeMDB | Exchange2010AdditionalOwners | ProxyAddresses | DynamicDLFilter |
| GroupClassName | ComputerClassName | ContactClassName | UserClassName |
| DatabaseMoniker | GroupTypeUniversalSecurity | GroupTypeGlobalSecurity | PublicFolderClassName |
| AccountExpires | GroupTypeUniversalDistribution | GroupTypeLocalDistribution | GroupTypeLocalSecurity |
| IsDeleted | GroupTypeLocalSecurity\_Builtin | GroupTypeGlobalDistribution | AccountDisabled |
| LastLogon | PrimaryGroupToken | PrimaryGroupId | SubscribeByMail |
| AdPublicDelgateRights | UserPrincipleName |  |  |
