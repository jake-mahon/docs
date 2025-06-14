# Password Management

Complex passwords keep network infrastructure secure but there is a real cost to that security. Users forget their complex passwords. They can be given two options: either they call helpdesk to reset their password at an exorbitant cost or have a self-service tool. GroupID can serve both these functions. Using it:

- __Helpdesk__: can reset passwords and unlock accounts for users after authentication. See the [Reset Passwords](/versioned_docs/groupid_11.0/groupid/admincenter/helpdesk/operation/resetpassword.md) topic for detailed information.
- __Users__: can reset their own passwords and their own accounts after passing multifactor authentication. They can perform these password related functions through various mediums, such as:

  - __GroupID portal__: Using it, they can:

    - reset their forgotten passwords. See the [Reset Passwords](/versioned_docs/groupid_11.0/groupid/portal/user/authentication/passwordreset.md) topic for further information on how to reset forgotten passwords.
    - change their account passwords. See the [ Change your password](/versioned_docs/groupid_11.0/groupid/portal/user/manage/changepassword.md) topic for further information on how to change their account passwords.
    - reset their own password or password of any other user. See the [Reset your password](/versioned_docs/groupid_11.0/groupid/portal/user/manage/resetpassword.md) topic for further information.
    - unlock their identity store account. See the [Unlock your accounts](/versioned_docs/groupid_11.0/groupid/portal/user/manage/unlockaccount.md) topic for detailed information on how to unlock their identity store accounts.
  - __GroupID app__: Using it, they can:

    - change their identity store account password
    - reset their identity store account password
    - unlock their identity store account
  - __Client Software and Web Access__

    The client software to install on user workstations is called [ GroupID Credential Provider](/versioned_docs/groupid_11.0/groupid/portal/user/manage/credentialprovider.md) and available for distribution using various IT enabled distribution methods such as group policy and Microsoft System Center Configuration Manager (SCCM). See the [Install GroupID Credential Provider](/versioned_docs/groupid_11.0/groupid/portal/user/manage/installcp.md) topic for additional information.

    The distributed client enables the __Forgot Password?__ and __Unlock Account__ links on the Windows logon screen of users’ workstations. Users, who forget their passwords or are locked out, can easily access these functions from their machine. There is also an option for web access for users if they are on a remote computer.
  - __Passwordless Authentication with QR Code__

    Opt for a hassle-free experience by signing into GroupID through QR code as an alternative to entering a username and password. See the [With QR Code](/versioned_docs/groupid_11.0/groupid/admincenter/signin.md#with-qr-code) section in the [Access Admin Center](/versioned_docs/groupid_11.0/groupid/admincenter/signin.md) topic.
