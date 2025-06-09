# Scripts

## Available scripts

The following scripts are supplied and can be directly used. In all scripts, a password is firstly selected in the upper section. This is not the password that will be reset on the target system. Instead, a user should be entered here that can complete the rest of the process on the target system. This password thus requires administrative rights to the target system.

A delay can also be configured in every script. This may be necessary, for example, if a password is changed in AD and it is firstly distributed to other controllers.

![new script](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_1-en.png)

## Active Directory Password Reset

This script is responsible for changing passwords for Active Directory users (domain users). Access to Active Directory is configured here under __Hostname__.

![Active Directory Password Reset](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_2-en.png)

## Service accounts

This script changes the access data within a service. Both the user and also the password can be changed. The __host name__ – i.e. the target computer – and the __service name__ are saved here.

![Service accounts scripts](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_3-en.png)

Please note that the __display name__ for the __service__ needs to be used.

![display name service](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_4-en.png)

The access data in the associated password can be saved as follows:

### Local user

[Username]
[Username]
.[Username]
[Computer][Username]

### Active Directory user

[Domain][Username]

## Windows user

This script can be used to reset the passwords for local Windows users. Only the __host name__ needs to be saved here.

![Windows user script](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_5-en.png)

## Linux user

Linux users can also be reset in the same way as Windows users. It is also only necessary to enter the __host name__ and the __port__ here.

![Linux user script](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_6-en.png)

## MSSQL user

This script resets passwords for local MSSQL users. It is only necessary to enter the __MSSQL instance__ and the __port__.

![MSSQL user script](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_7-en.png)

The name of the MSSQL instance can be taken from the login window for the SQL Management Studio.

![MSSQL user script](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_8-en.png)

If a domain user is being used to log in to the SQL server, the user needs to be managed via the script __Active Directory user__.

## Planned task

The passwords for users of Windows Task Scheduler can be changed using this script. The __host name__ of the computer on which the task will run and the __name__ of the task itself are entered.

![planned task](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/passwordreset/scripts/password_safe_scripts_9-en.png)
