---
sidebar_position: 7264
title: Change your Password
---

# Change your Password

You can change the password of your identity store account. After changing it, use the new password to sign into Directory Manager and other applications that use your domain account.

You can change password according to the password policy the administrator has enabled for the identity store. The administrator can either enable [Directory Manage Password Policy](../SecurityRole/Policy/Password "Directory Manage Password Policy")  or Netwrix Password Policy Enforcer policies for the identity store.

## Change your Password

Follow the steps to change your password.

Step 1 – In Admin Center, click your name in the top right corner and select **Change Password**.

Step 2 – On the Change Password page, enter your current password in the **Current Password** box.  
By default, password characters are represented by dots. Use the toggle button in the box to show or hide characters.

Step 3 – Enter a new password in the **New Password** and **Confirm Password** boxes. The new password
must conform to the rules of the applied password policy for the identity store.

Step 4 – Click **Change Password**.

NOTE: MFA enabled Microsoft Entra ID users cannot change their passwords in Directory Manager. If they try to use the option, the following message is displayed:.

![Admin Center Change Password error message for an Entra ID user](../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/AdminCenter/General/ChangePassword.png "Admin Center Change Password error message for an Entra ID user")

If the user's account is a master account, password of its child accounts also cannot be changed in Directory Manager.