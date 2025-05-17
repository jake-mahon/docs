---
sidebar_position: 7571
title: Password Management
---

# Password Management

Complex passwords keep network infrastructure secure but there is a real cost to that security. Users forget their complex passwords. They can be given two options: either they call helpdesk to reset their password at an exorbitant cost or have a self-service tool. Directory Manager can serve both these functions. Using it:

* Helpdesk – Can reset passwords and unlock accounts for users after authentication. See the [Reset Passwords](../../../AdminCenter/Helpdesk/Operation/ResetPassword "Reset Passwords") topic for detailed information.
* Users – Can reset their own passwords and their own accounts after passing multifactor authentication. They can perform these password related functions through various mediums, such as:

  * Directory Manager portal – Using it, they can:

    * reset their forgotten passwords. See the [Reset Passwords](../Authentication/PasswordReset "Reset Passwords") topic for further information on how to reset forgotten passwords.
    * change their account passwords. See the  [Change your password](ChangePassword "Change Password") topic for further information on how to change their account passwords.
    * reset their own password or password of any other user. See the [Reset your password](ResetPassword "Reset Password") topic for additional information.
    * unlock their identity store account. See the [Unlock your accounts](UnlockAccount "Unlock Accounts") topic for detailed information on how to unlock their identity store accounts.
  * Client Software and Web Access

    The client software to install on user workstations is called  [Credential Provider](CredentialProvider "Credential Provider") and available for distribution using various IT enabled distribution methods such as group policy and Microsoft System Center Configuration Manager (SCCM). See the [Install Credential Provider](InstallCP "Install Credential Provider") topic for additional information.

    The distributed client enables the **Forgot Password?** and **Unlock Account** links on the Windows logon screen of users’ workstations. Users, who forget their passwords or are locked out, can easily access these functions from their machine. There is also an option for web access for users if they are on a remote computer.