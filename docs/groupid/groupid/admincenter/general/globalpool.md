# Manage the Global Question Pool

Directory Manager provides a list of predefined security questions for enrollment and authentication. You can update this list by adding or removing questions.

When an identity store is created, four questions from this global pool are automatically added to the identity store's local question pool. This pool is not shared with other identity stores.

What do you want to do?

- [Add a Question to the Question Pool](#Add-a-Question-to-the-Question-Pool)
- [Remove a Question from the Question Pool](#Remove-a-Question-from-the-Question-Pool)

## Add a Question to the Question Pool

1. In Admin Center, click __Settings__ at the bottom of the left navigation pane.
2. On the __GroupID Settings__ page, click the __Question Pool__ tab.
3. To add a question, click __Add New Question__.
4. On the __Add New Question__ dialog box, type a security question in the __Question__ box and click __Add Question__."The new question is displayed on the __Question Pool__ tab.
   Questions are sorted in alphabetical order.

__Search a question in the list:__

To search for a security question in the list, enter a search string in the search box and press __Enter__. Questions that contain the
string will be filtered.

## Remove a Question from the Question Pool

1. In Admin Center, click __Settings__ at the bottom of the left navigation pane.
2. On the __GroupID Settings__ page, click the __Question Pool__ tab.
3. On the __Question Pool__ tab, click __Delete__ for a question to delete it.
4. Click __Delete__ on the __Delete Question__ dialog box.  
   Deleting a question does not impact the users currently enrolled with the question.

__See Also__

- [Set up Authentication via Security Questions](/docs/groupid/groupid/admincenter/setupauth/securityquestions.md)
- [Directory Manage Password Policy ](/docs/groupid/groupid/admincenter/securityrole/policy/password.md)
- [Manage the Local Question Pool](/docs/groupid/groupid/admincenter/identitystore/configure/security/securityquestions.md)
