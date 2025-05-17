---
sidebar_position: 7321
title: Unlock Accounts
---

# Unlock Accounts

Administrators can enforce an account lockout policy for a domain that locks a user account after a certain number of failed login attempts. This secures a machine from unauthorized access. However, legitimate
users may also get locked out; typically because of a typo or they could not recall their password correctly.

In such a situation as this, helpdesk users can unlock user accounts in an identity store.

Helpdesk may have to authenticate users before unlocking their accounts. See the [Helpdesk Policy](../Overview#Helpdesk "Helpdesk Policy")  topic.

NOTE: You can unlock the account of unenrolled users if (a) the **Unlock Any Account** permission has been granted to your role and (b) the Helpdesk policy for your role is set to the unrestricted mode.

## Unlock User Accounts in Unrestricted Mode

Step 1 – In Admin Center, click **Helpdesk** in the left pane.

Step 2 – The Helpdesk page opens to the Helpdesk Operations tab. Locate your required user. To search for a user, see the[Search Users](Search "Search Users") topic.

Step 3 – Click the ellipsis button for the user and select **Unlock Account**. For enrolled users, the Unlock Account dialog box has two pages: Authenticate and Unlock. Under the unrestricted mode, you can skip the former and move to the **Unlock** page. For unenrolled users, only the Unlock page is available.  
Use the **History** button to view user history, i.e., the actions performed on the user and by the user. This history is specific to helpdesk functions, as listed in the [History in Helpdesk](../History "History in Helpdesk") topic.

Step 4 – The Unlock page displays the user name, the identity store
where this user resides, the last time the user changed his or her password, and the lock status of the account. In case the user has linked his or her accounts that exist in different identity stores, this page displays all linked accounts that are locked.  
To unlock an account, select the check box for it and click **Unlock**.

## Unlock User Accounts in Restricted Mode

Step 1 – In Admin Center, click **Helpdesk** in the left pane.

Step 2 – The Helpdesk page opens to the Helpdesk Operations tab. Locate your required user. To search for a user, see the[Search Users](Search "Search Users") topic.

Step 3 – Click the ellipsis button for the user and select **Unlock Account**. The Unlock Account dialog box has two pages: Authenticate and Unlock.   
Use the **History** button to view user history, i.e., the actions performed on the user and by the user. This history is specific to helpdesk functions, as listed in the [History in Helpdesk](../History "History in Helpdesk") topic.

Step 4 – The Authenticate page displays the authentication type(s) the user's account is enrolled with. to authenticate the user, follow step 4 in the [Reset Passwords in Restricted Mode](ResetPassword#restricted "Reset Passwords in Restricted Mode") topic.

Step 5 – After authenticating the user, click **Next**.

Step 6 – The Unlock page displays the user name, the identity store
where this user resides, the last time the user changed his or her password, and the lock status of the account. In case the user has linked his or her accounts that exist in different identity stores, this page displays all linked accounts that are locked.  
To unlock an account, select the check box for it and click **Unlock**.