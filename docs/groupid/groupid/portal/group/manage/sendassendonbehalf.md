# The Send As and Send on Behalf features

The administrator can configure the Send As and Send on Behalf features for a Directory Manager portal.

For the __Send As__ feature, a portal user (User A) can set another object or objects in its Send As list. An added object (User B) will be able to choose User A’s email address in the ‘From’ field when composing a message in Outlook.
In this instance, the message, while sent by User B, will appear as sent by User A.

Similarly, for the __Send on Behalf__ feature, a portal user (User A) can set another object or objects in its Send on Behalf list. An added object (User B) will be able to choose User A’s email address in the From field when composing
a message in Outlook. However, message recipients will see both User A’s address and User B’s address (as the actual author of the message). This means that when User B sends a message using User A’s address, the ‘From’ address will show ‘From:
Mailbox `<User B's address>` on behalf of Mailbox `<User A’s address>`.

The administrator can provide the Send As and Send on Behalf features on any tab in [Group Properties](/docs/groupid/groupid/portal/group/properties/overview.md). They are displayed as:

![sendassendon](/img/product_docs/groupid/groupid/portal/group/manage/sendassendon.webp)

Use the __Add__ and __Remove__ buttons to add and remove objects in the Send As and Send on Behalf lists.

NOTE: Only mailboxes and mail-enabled groups can add objects to their Send As and Send on Behalf lists.
