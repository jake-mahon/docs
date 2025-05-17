---
sidebar_position: 7651
title: The Send As and Send on Behalf features
---

# The Send As and Send on Behalf features

The administrator can configure the Send As and Send on Behalf features for a Directory Manager portal.

For the **Send As** feature, a portal user (User A) can set another object or objects in its Send As list. An added object (User B) will be able to choose User A’s email address in the ‘From’ field when composing a message in Outlook.
In this instance, the message, while sent by User B, will appear as sent by User A.

Similarly, for the **Send on Behalf** feature, a portal user (User A) can set another object or objects in its Send on Behalf list. An added object (User B) will be able to choose User A’s email address in the From field when composing
a message in Outlook. However, message recipients will see both User A’s address and User B’s address (as the actual author of the message). This means that when User B sends a message using User A’s address, the ‘From’ address will show ‘From:
Mailbox  on behalf of Mailbox ’.

The administrator can provide the Send As and Send on Behalf features on any tab in [Group Properties](../Properties/Overview "Group Properties"). They are displayed as:

![](../../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/Portal/SendAsSendOn.png)

Use the **Add** and **Remove** buttons to add and remove objects in the Send As and Send on Behalf lists.

NOTE: Only mailboxes and mail-enabled groups can add objects to their Send As and Send on Behalf lists.