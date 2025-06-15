# Scripts

## Available scripts

The following scripts are supplied and can be directly used. In all scripts, a password is firstly
selected in the upper section. This is not the password that will be reset on the target system.
Instead, a user should be entered here that can complete the rest of the process on the target
system. This password thus requires administrative rights to the target system.

A delay can also be configured in every script. This may be necessary, for example, if a password is
changed in AD and it is firstly distributed to other controllers.

![new script](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_1-en.png)

## Active Directory Password Reset

This script is responsible for changing passwords for Active Directory users (domain users). Access
to Active Directory is configured here under **Hostname**.

![Active Directory Password Reset](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_2-en.png)

## Service accounts

This script changes the access data within a service. Both the user and also the password can be
changed. The **host name** – i.e. the target computer – and the **service name** are saved here.

![Service accounts scripts](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_3-en.png)

Please note that the **display name** for the **service** needs to be used.

![display name service](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_4-en.png)

The access data in the associated password can be saved as follows:

### Local user

[Username] [Username] .[Username] [Computer][Username]

### Active Directory user

[Domain][Username]

## Windows user

This script can be used to reset the passwords for local Windows users. Only the **host name** needs
to be saved here.

![Windows user script](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_5-en.png)

## Linux user

Linux users can also be reset in the same way as Windows users. It is also only necessary to enter
the **host name** and the **port** here.

![Linux user script](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_6-en.png)

## MSSQL user

This script resets passwords for local MSSQL users. It is only necessary to enter the **MSSQL
instance** and the **port**.

![MSSQL user script](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_7-en.png)

The name of the MSSQL instance can be taken from the login window for the SQL Management Studio.

![MSSQL user script](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_8-en.png)

If a domain user is being used to log in to the SQL server, the user needs to be managed via the
script **Active Directory user**.

## Planned task

The passwords for users of Windows Task Scheduler can be changed using this script. The **host
name** of the computer on which the task will run and the **name** of the task itself are entered.

![planned task](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_9-en.png)
