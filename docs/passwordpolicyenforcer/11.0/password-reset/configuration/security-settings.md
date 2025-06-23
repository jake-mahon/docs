# Securing Password Reset

Password Reset has many inbuilt security features, but there are some things you should do to secure
Password Reset. The most important of these is to install an SSL certificate for the Web Interface.
You can also set up a standard user account with delegated permissions for the Password Reset
Server.

## Installing and Using an SSL Certificate

The Web Interface and Password Reset Server always communicate over a secure channel. You do not
have to configure the encryption for this connection, but you do need to set up SSL (Secure Sockets
Layer) encryption for the connection between the web browser (or Password Reset Client) and the web
server. See the [Password Reset Client](/docs/passwordpolicyenforcer/11.0/password-reset/using-password-reset.md) topic for more information.

**CAUTION:** Do not use Password Reset on a production network without SSL encryption.

You can use a self-signed certificate with Password Reset, but most organizations purchase
certificates from a certificate authority. You can install the Web Interface on a server that
already has an SSL certificate if you would rather not purchase another one.

Your certificate authority will have instructions to guide you through the certificate request and
installation process. You can also learn more about using SSL certificates with IIS on the pages
below.

- [http://www.iis.net/learn/manage/configuring-security/how-to-set-up-ssl-on-iis](http://www.iis.net/learn/manage/configuring-security/how-to-set-up-ssl-on-iis)
- [http://technet.microsoft.com/en-us/library/cc732230(WS.10).aspx](<http://technet.microsoft.com/en-us/library/cc732230(WS.10).aspx>)

**NOTE:** Ensure that users only access Password Reset over an encrypted connection after the SSL
certificate is installed. The Start address and Restricted path in the Password Reset Client
configuration should start with https://. Web browsers can be redirected to the secure URL. See the
[Configuring the PRC](/docs/passwordpolicyenforcer/11.0/password-reset/using-password-reset.md#configuring-the-prc) topic for more information.

## Delegating Permissions to the Netwrix Password Reset Server Service

When the Setup wizard creates a service account for the Password Reset Server, it adds the account
to the Domain Admins group. This allows Password Reset to start working without additional
configuration, but it also gives the service excessive permissions. You can improve security by
removing the service account from the Domain Admins group and granting only the required
permissions.

You can grant Active Directory permissions from the command-line with dsacls.exe, or with the
graphical user interface. The examples below use the command-line, but you can use either method.
The commands you need to execute are:

dsacls "[object]" /I:S /G "[account]:CA;Reset Password;user"

dsacls "[object]" /I:S /G "[account]:RPWP;lockoutTime;user"

dsacls "[object]" /I:S /G "[account]:RPWP;pwdLastSet;user"

Where [object] is the distinguished name of the domain or OU containing the user accounts, and
[account] is the name of the service account in user@domain or domain\user format.

The first two commands allow NPR to reset passwords and unlock accounts. Both commands are required
even if the Unlock item is hidden from the menu because Password Reset automatically unlocks an
account when its password is reset. The third command allows Password Reset to set **User must
change password at next logon** in Active Directory if the **Require users to change their password
after a reset** option is enabled in the Configuration Console's **Security** tab.

For example, the following command grants the axs\apr account permission to reset passwords for
users in the axs.net domain:

dsacls "dc=axs,dc=net" /I:S /G "axs\apr:CA;Reset Password;user"

If Password Reset is configured to use an SQL Server Compact database, then give the service account
read and write permissions to the database files. See the
[Moving to SQL Server](/docs/passwordpolicyenforcer/11.0/password-reset/administration/database-management.md) topic for more information.

Remove the service account from the Domain Admins group and restart the Password Reset service after
executing these commands. Check the Windows Application event log if the service does not start.

### Using Delegated Permissions with Protected Groups

When you delegate permissions for the Password Reset service account, the delegated permissions are
initially applied to all users in the domain or OU. After some time, Windows restores the original
permissions for some important user accounts. The restored permissions do not allow Password Reset
to reset passwords or unlock accounts for these users.

The accounts protected by this feature vary by Windows version, and include members of the Domain
Admins, Enterprise Admins, and Schema Admins groups. The list of protected groups is configurable,
so it may differ from the defaults in the Windows documentation.

If you are using an Password Reset service account with delegated permissions and do not want these
privileged accounts to reset their password or unlock their account with Password Reset, then there
is no need to make any configuration changes. Windows automatically restores the original
permissions for these accounts. This is done every hour by default.

If you want to allow these users to reset their password and unlock their account with Password
Reset, then you need to change the permissions for the AdminSDHolder container. The commands you
need to execute are:

dsacls "[AdminSDHolder]" /G "[account]:CA;Reset Password"

dsacls "[AdminSDHolder]" /G "[account]:RPWP;lockoutTime"

dsacls "[AdminSDHolder]" /G "[account]:RPWP;pwdLastSet"

Where [AdminSDHolder] is the distinguished name of the AdminSDHolder container, and [account] is the
name of the service account in user@domain or domain\user format.  
The DN of the AdminSDHolder container for the netwrix.com domain is
CN=AdminSDHolder,CN=System,DC=netwrix,DC=com

**NOTE:** Changes to the AdminSDHolder container are not applied to accounts immediately. You may
need to wait up to an hour for Windows to update the DACL for these accounts. You can also start the
process manually. Search for runProtectAdminGroupsTask or FixUpInheritance in Microsoft's
documentation or more information.

# Security Tab

Use the **Security** tab to configure the inactivity timeout, password reset policies, and the
lockout threshold.

![configuring_npr_8](/img/product_docs/passwordpolicyenforcer/passwordreset/administration/configuring_npr_8.webp)

### Inactivity Timeout

Users should remain at their computer while resetting their password or unlocking their account.
Their account could be compromised if they leave their computer after answering the first question.
NPR protects user accounts by expiring sessions if users take too long to respond. Select the
inactivity timeout from the **Expire idle sessions after...** drop-down list. Set it to 0 seconds to
disable the inactivity timeout.

### Reset Policies

Select the **Enforce the AD password history and minimum age policies for resets** check box to
enforce these Active Directory password policies during a reset. Older Windows versions cannot
enforce these policies for password resets. This capability was added as a hotfix for Windows 2008
and 2008 R2. See the [KB2386717](http://support.microsoft.com/kb/2386717) Microsoft knowledge base
article for additional information. The hotfix is included with SP1 for Windows 2008 R2, and is a
standard feature on later Windows versions.

Users are more likely to forget a password shortly after changing it. Enforcing a minimum age for
password resets may increase the number of help desk calls because users won't be able to reset
recently changed passwords. One solution is to clear the check box above, and select the **Require
users to change their password after a reset** check box instead. The Active Directory password
history policy won't be enforced for the password reset, but it will be enforced for the password
change when the user logs on. This stops users from reusing a recent password, but it won't stop
them from resetting a recently changed password.

Users whose passwords are set to never expire in Active Directory will not be forced to change their
password during logon, even if this check box is selected.

**NOTE:** Password Policy Enforcer's History rule is enforced for password resets if the **Enforce
policy when password is reset** check box is selected in the PPS properties page, and if the
**Enforce this rule when a password is reset** check box is selected in the History rule's
properties page. Netwrix Password Policy Enforcer does not enforce the Minimum Age rule for password
resets. See the Security Tab topic for additional information.

Users may try to evade the password history policy by resetting their password several times in
quick succession to push a password off the password history list. Select a value from the
**Passwords can only be reset if they are at least...** drop-down list to stop users from doing
this. Set it to 0 days to disable this feature. If the Active Directory minimum password age policy
is also enforced for password resets, then the effective minimum age is the greater of the AD and
NPR minimum ages.

### Lockout

Password Reset's lockout should not be confused with the Windows lockout policy. A Windows lockout
stops users from logging on, whereas an Password Reset lockout stops users from resetting their
password and unlocking their account. Windows locks out users when they enter too many incorrect
passwords. Password Reset locks out users when they enter too many incorrect answers or verification
codes.

Select a value from the **Lockout user after...** drop-down list to specify how many incorrect
answers Password Reset accepts before locking out a user. Set it to 0 incorrect answers to disable
the lockout feature. Incorrect verification codes are counted as incorrect answers if the **Lockout
users if they enter too many incorrect verification codes** check box is selected on the
**Verification** tab.

**NOTE:** Locked out users must re-enroll before they can use Password Reset to reset their password
or unlock their account. The incorrect answer count is reset when a user enrolls, or answers all
questions during a reset or unlock.
