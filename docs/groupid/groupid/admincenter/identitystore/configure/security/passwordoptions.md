# Configure Password Options

You can define the following password restrictions and rules for an identity store:

- Specify restricted passwords
- Define regular expressions for allowed passwords
- Specify disallowed passwords using an external file

When identity store users reset or change their passwords using Directory Manager, their new passwords must adhere to the defined rules.

NOTE: (1) These password configurations do not apply when helpdesk users reset passwords of end-users.  
 (2) In case a user has linked his or her accounts in different identity stores, the password configurations for the master account apply.

In addition to these password restrictions, you can define a password policy for a security role in an identity store. See the [Directory Manage Password Policy ](/docs/groupid/groupid/admincenter/securityrole/policy/password.md) topic.

What do you want to do?

- Define Restricted Passwords
- Specify Regular Expressions for Allowed Passwords
- Specify Disallowed Passwords Using an External File

## Define Restricted Passwords

You can specify certain strings of text that users cannot use as passwords or part of passwords. You can also specify regular expressions to prevent users from creating passwords that match the expression.

__To restrict passwords:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Password Options__.
4. In the __Password Exception__ area on the __Password Options__ page, click __Add Password Exception__.
5. On the __Add New Password Exception__ dialog box, select an operator in the __Type__ drop down list.

   - __Equals:__ passwords that match the value you specify in the __Exception Value__ box are not allowed.
   - __Starts with:__ passwords that start with the value you specify in the __Exception Value__ box are not allowed.
   - __Ends With:__ passwords that end with the value you specify in the __Exception Value__ box are not allowed.
   - __Contains:__ passwords that contain the value you specify in the __Exception Value__ box are not allowed.
   - __Regular Expression:__ passwords that satisfy the regular expression you specify in the __Exception Value__ box are not allowed. See the [What are Regular Expressions?](/docs/groupid/groupid/admincenter/portal/displaytype/textbox.md#what-are-regular-expressions) topic to learn about regular expressions and their syntax.
6. Type a value for the selected operator in the __Exception Value__ box.
7. Click __OK__.
8. Follow steps 4 to 7 to define as many exceptions as required. All exceptions are treated as password restrictions.

   __To remove a password restriction:__

   - In the __Password Exception__ area, click __Remove__ for a restriction or rule to remove it.
   - To remove all restrictions, click __Remove All__.
9. Click __Save__ on the __Password Options__ page.

## Specify Regular Expressions for Allowed Passwords

By specifying regular expression(s) for allowed passwords, you ensure that passwords created by users follow certain rules and patterns.

__To specify a regular expression:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Password Options__.
4. In the __Password Rules__ area on the __Password Options__ page, click __Add Password Rule__.
5. On the __Add Rules__ dialog box, type a regular expression in the __Regular Expression__ box.  
   See the [What are Regular Expressions?](/docs/groupid/groupid/admincenter/portal/displaytype/textbox.md#what-are-regular-expressions) topic to learn about regular expressions and their syntax.
6. Click __OK__. The regular expression is displayed in the In the __Password Rules__ area.
7. Follow steps 4 to 6 to define as many regular expressions as required. Passwords that satisfy any of the regular expressions are allowed.

   __To remove a regular expression:__

   - In the __Password Rules__ area, click __Remove__ for a regular expression to remove it.
   - To remove all regular expressions, click __Remove All__.
8. Click __Save__ on the __Password Options__ page.

## Specify Disallowed Passwords Using an External File

A simple way of preventing users from using certain words or strings as passwords is to add those restricted passwords to a .csv or .txt file and upload it to Directory Manager.

__To upload the file:__

1. In Admin Center, click __Identity Stores__ in the left pane.
2. On the __Identity Stores__ page, click the ellipsis button for an identity store and select __Edit__.
3. Click __Configurations__ under __Settings__ in the left pane. Then click __Password Options__.
4. On the __Password Options__ page, select the __Check for disallowed passwords from imported file__ check box in the __Import Disallowed Password__ List area to enable file upload.
5. Click __Import__ to browse and select the file (.csv, .txt) containing the disallowed passwords.
6. Click __Save__ on the __Password Options__ page.

NOTE: Only a single file containing disallowed passwords can be imported for an identity store; importing another file will replace the existing one.

__See Also__

- [Directory Manage Password Policy ](/docs/groupid/groupid/admincenter/securityrole/policy/password.md)
