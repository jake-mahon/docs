# Search Users

Helpdesk users can search for users in specific identity store(s) or all identity stores defined in Directory Manager. A search filter is also available to help you narrow down your search results.

What do you want to do?

- [Perform a Search](#Perform-a-Search)

## Perform a Search

1. In Admin Center, click __Helpdesk__ in the left pane.
2. The __Helpdesk__ page opens to the __Helpdesk Operations__ tab. It lists all users from all identity stores in Directory Manager (notice that _All_ is displayed in the __Identity store__ box).
3. Use the following options to filter users:

   - __Identity store box__ - To get users from one or specific identity stores, click in the __Identity store__ box and select the check boxes for the identity stores you want to fetch users from.
   - __Search Users box__ - Enter a search text and press _Enter_. Users with the first names, last names, or email addresses matching the text are filtered and displayed.
   - __Search filter__ - You can also search users based on enrollment. Click __Filter(s)__. The __Filter(s)__ dialog box is displayed with the following options:

     - __Enrolled with:__ click in the box and select the authentication type(s) to restrict search to users enrolled with any of those authentication types.
     - __Not Enrolled with:__ click in the box and select the authentication type(s) to restrict search to users not enrolled with any of those authentication types.
     - Click __Apply__. Users matching the given criteria get listed.

#### View Users' Information

For a user, the following information is displayed:

- __Name:__ the display name of the user.
- __Store:__ the name of the identity store and the domain the user resides in.
- __Is Locked:__ displays whether the user account is locked or not.
- __Password Expires On:__ the date when the user account password will expire. If the password is set to _Never Expire_, then _Never Expires_ is displayed here.
- __Last Password Set:__ the time since the user last changed their password, for example, 'one year ago'. For users who never changed their passwords, _Never_ is displayed.
- __Enrolled With:__ the authentication types used to enroll the account in the identity store. For users who have not enrolled their accounts, _Not Enrolled_ is displayed.

Use the pagination options at the bottom of the listing to navigate through records.

Click the ellipsis button for a user to perform any of these actions:

- Reset password
- Unlock account
- Send enrollment reminder
- Unenroll account

__See Also__

- [Helpdesk](/docs/groupid/groupid/admincenter/helpdesk/overview.md)
- [Helpdesk Operations](/docs/groupid/groupid/admincenter/helpdesk/operation/overview.md)
