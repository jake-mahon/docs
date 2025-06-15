# Unlock Accounts

Administrators can enforce an account lockout policy for a domain that locks a user account after a certain number of failed login attempts. This secures a machine from unauthorized access. However, legitimate
users may also get locked out; typically because of a typo or they could not recall their password correctly.

In such a situation as this, helpdesk users can unlock user accounts in an identity store.

Helpdesk may have to authenticate users before unlocking their accounts. See the [Helpdesk Policy ](../overview.md#helpdesk-policy) topic.

NOTE: You can unlock the account of unenrolled users if (a) the __Unlock Any Account__ permission has been granted to your role and (b) the Helpdesk policy for your role is set to the unrestricted mode.

## Unlock User Accounts in Unrestricted Mode

Step 1 – In Admin Center, click __Helpdesk__ in the left pane.

Step 2 – The Helpdesk page opens to the Helpdesk Operations tab. Locate your required user. To search for a user, see the[Search Users](search.md) topic.

Step 3 – Click the ellipsis button for the user and select __Unlock Account__. For enrolled users, the Unlock Account dialog box has two pages: Authenticate and Unlock. Under the unrestricted mode, you can skip the former and move to the __Unlock__ page. For unenrolled users, only the Unlock page is available.  
Use the __History__ button to view user history, i.e., the actions performed on the user and by the user. This history is specific to helpdesk functions, as listed in the [History in Helpdesk](../history.md) topic.

Step 4 – The Unlock page displays the user name, the identity store
where this user resides, the last time the user changed his or her password, and the lock status of the account. In case the user has linked his or her accounts that exist in different identity stores, this page displays all linked accounts that are locked.  
To unlock an account, select the check box for it and click __Unlock__.

## Unlock User Accounts in Restricted Mode

Step 1 – In Admin Center, click __Helpdesk__ in the left pane.

Step 2 – The Helpdesk page opens to the Helpdesk Operations tab. Locate your required user. To search for a user, see the[Search Users](search.md) topic.

Step 3 – Click the ellipsis button for the user and select __Unlock Account__. The Unlock Account dialog box has two pages: Authenticate and Unlock.   
Use the __History__ button to view user history, i.e., the actions performed on the user and by the user. This history is specific to helpdesk functions, as listed in the [History in Helpdesk](../history.md) topic.

Step 4 – The Authenticate page displays the authentication type(s) the user's account is enrolled with. to authenticate the user, follow step 4 in the [Reset Passwords in Restricted Mode](resetpassword.md#reset-passwords-in-restricted-mode) topic.

Step 5 – After authenticating the user, click __Next__.

Step 6 – The Unlock page displays the user name, the identity store
where this user resides, the last time the user changed his or her password, and the lock status of the account. In case the user has linked his or her accounts that exist in different identity stores, this page displays all linked accounts that are locked.  
To unlock an account, select the check box for it and click __Unlock__.
