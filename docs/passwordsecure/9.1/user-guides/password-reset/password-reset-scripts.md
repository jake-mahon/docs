# Scripts

## Available scripts

The following scripts are supplied and can be directly used. In all scripts, a password is firstly
selected in the upper section. This is not the password that will be reset on the target system.
Instead, a user should be entered here that can complete the rest of the process on the target
system. This password thus requires administrative rights to the target system.

A delay can also be configured in every script. This may be necessary, for example, if a password is
changed in AD and it is firstly distributed to other controllers.

![new script](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_1-en.webp)

## Active Directory Password Reset

This script is responsible for changing passwords for Active Directory users (domain users). Access
to Active Directory is configured here under **Hostname**.

![Active Directory Password Reset](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_2-en.webp)

## Service accounts

This script changes the access data within a service. Both the user and also the password can be
changed. The **host name** – i.e. the target computer – and the **service name** are saved here.

![Service accounts scripts](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_3-en.webp)

Please note that the **display name** for the **service** needs to be used.

![display name service](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_4-en.webp)

The access data in the associated password can be saved as follows:

### Local user

[Username] [Username] .[Username] [Computer][Username]

### Active Directory user

[Domain][Username]

## Windows user

This script can be used to reset the passwords for local Windows users. Only the **host name** needs
to be saved here.

![Windows user script](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_5-en.webp)

## Linux user

Linux users can also be reset in the same way as Windows users. It is also only necessary to enter
the **host name** and the **port** here.

![Linux user script](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_6-en.webp)

## MSSQL user

This script resets passwords for local MSSQL users. It is only necessary to enter the **MSSQL
instance** and the **port**.

![MSSQL user script](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_7-en.webp)

The name of the MSSQL instance can be taken from the login window for the SQL Management Studio.

![MSSQL user script](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_8-en.webp)

If a domain user is being used to log in to the SQL server, the user needs to be managed via the
script **Active Directory user**.

## Planned task

The passwords for users of Windows Task Scheduler can be changed using this script. The **host
name** of the computer on which the task will run and the **name** of the task itself are entered.

![planned task](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_9-en.webp)

# User-defined scripts

## Individual solutions using your own scripts

If your requirements cannot be met using the
[Scripts](/docs/passwordsecure/9.1/user-guides/password-reset/password-reset-scripts.md),
it is also possible to create your own Powershell scripts. These scripts need to meet certain
requirements to be used in Netwrix Password Secure.

## Storage location, name and call

The scripts must be saved in the following directory:
`C:\ProgramData\MATESO\Password Safe and Repository Service\System\PowerShell`

The scripts are saved in the **format.ps1**.

## Structure of the scripts

The PowerShell scripts must have the following structure:

### RunScript function

Netwrix Password Secure always calls the RunScript function.

[Copy](<javascript:void(0);>)

```
function RunScript
param (
        [String]$HostName,
        [String]$UserName,
        [String]$NewPassword,
        [String]$CredentialsUserName,
        [Security.SecureString]$CredentialsPassword
    )

```

The following standard parameters can be used here:

- UserName: The user name for which the password should be changed
- Password: The password that should be reset
- CredentialsUserName: The user name of the user authorized to carry our the reset (e.g.
  administrator)
- CredentialsPassword: The password of the authorized user

### Scriptblock

The **scriptblock** can be used when the script should run in the context of another user. The
actual change is then carried out in the **scriptblock**.

It is important in this case that you provide Netwrix Password Secure with feedback about what has
been changed via a **Write-Output**. The following example simply uses the outputs **true** or
**false**. However, it is also conceivable that an error message or similar is output.

[Copy](<javascript:void(0);>)

```
    $scriptBlock = {param ($UserName, $Password)
    // Make changes to SAP
    if($OK) {
        Write-Output "true"
    } else {
        Write-Output "false"
    }

```

Naturally, CredentialsUserName and CredentialsPassword can also be directly used in the script (i.e.
without the **scriptblock**). You can view the supplied MSSQL script as an example.

### Invoke

A credential then still needs to be created. This is then transferred to the **scriptblock** using
the **invoke** command. It is also important in this case to provide Netwrix Password Secure with
feedback about all errors via **Write-Output** or **throw [System.Exception]**.
