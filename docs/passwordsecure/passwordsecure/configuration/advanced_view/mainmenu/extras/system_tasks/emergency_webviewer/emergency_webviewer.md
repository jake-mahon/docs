# EmergencyWebViewer

## What is an Emergency WebViewer export?

Safeguarding data is essential and this should be carried out using [Backup management](../../../../../server_manager/main_menu/backup_settings/backup_management/backup_management.md). However, a backup is not sufficient in some cases e.g. if a backup cannot be directly restored due to a hardware problem. In these cases, __Netwrix Password Secure__ offers the backup feature __Emergency WebViewer Export__.

The __Emergency WebViewer Export__ is based on an encrypted __HTML file__ which can be decrypted using a corresponding __key__. Both files are required to view the passwords in a browser and form the core system of the backup mechanism.

## Creation of the file and key

The __Emergency WebViewer Export__ is created in Netwrix Password Secure as a __[System tasks](../system_tasks.md)__ and this task can be used to guarantee a regular backup of the records (passwords) by entering an interval. When setting up the system task, the user thus defines the cycle at which the __Emergency WebViewer.html file__ is created on the Server Manager. The existing file is overwritten in each case by the latest version at the defined interval. The associated key is only created once at the beginning and needs to be saved. The current version of the __HTML file__ can only be decrypted using this __key__.

__CAUTION:__ The key (PrivateKey.prvkey) and the file (Emergency WebViewer.html) must be saved onto a secure medium (USB stick, HDD, CD/DVD, …) and kept in a secure location!

## Data security

• Naturally, the HTML WebViewer file is encrypted

• The export of the file is protected using a corresponding [User rights](../../../user_rights/user_rights.md)

• The file can only be encrypted using the __PrivateKey.prvkey__ file

__CAUTION:__ The export right for the passwords is not required for the Emergency WebViewer Export!

## Required rights

The user requires the following right to create a __Emergency WebViewer Export system task:__

![installation_with_parameters_89](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/system_tasks/emergency_webviewer/installation_with_parameters_89.webp)

## Emergency WebViewer.html and PrivateKey.prvkey

The __Emergency WebViewer Export__ creates two associated files.

1. The file __Emergency WebViewer.html__ is created on the computer executing the task
2. The associated key __PrivateKey.prvkey__ is created on the client.

## Calling up the Emergency WebViewer Export

The Emergency WebViewer Export is set up as a __system task__. It can be called up in the main menu under __Extras -> System Tasks__.

![installation_with_parameters_90_831x487](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/system_tasks/emergency_webviewer/installation_with_parameters_90_831x487.webp)

## Creating a Emergency WebViewer Export file

Clicking on New opens a new window and the __Emergency WebViewer Export__ can be selected. The __configuration page__ is then displayed.

![installation_with_parameters_91_578x390](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/system_tasks/emergency_webviewer/installation_with_parameters_91_578x390.webp)

It is not possible to use the __Emergency WebViewer Export__ with an __Active Directory user.__

![installation_with_parameters_92_467x103](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/system_tasks/emergency_webviewer/installation_with_parameters_92_467x103.webp)

## Configuration page for the Emergency WebViewer Export task

A new tab is displayed: __New emergency HTML WebViewer export task__ This now needs to be configured in accordance with the requirements.

![new emergend HTML](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/system_tasks/emergency_webviewer/installation_with_parameters_93-en_925x527.webp)

1. __General__
     
   Name: Enter a unique name Description: Enter additional information  
   Status: Execution: \*Activated\*/Deactivated
2. __Overview__
     
   Last run: Information display Next run: Information display
3. __Task settings__
     
   Folder path: Enter from the perspective of the server   
   Private key: needs to be saved
4. __Interval__
     
   Setting for when the system task is executed
5. __Executing server (optional)__
     
   Address (IP) of the additional server
6. __Tags__
     
   Freely definable characteristics of records

__CAUTION:__ The private key for the Emergency WebViewer must be saved before the system task can be saved!

## Displaying the Emergency WebViewer Export tasks

Once the configuration has been completed, the __system task__ is displayed in the current module in the

__System Tasks__ tab. The user has the option of checking the data here

![installation_with_parameters_94_914x671](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/system_tasks/emergency_webviewer/installation_with_parameters_94_914x671.webp)

## Using the Emergency WebViewer.html file

After the __system task__ has been successfully executed, __two files__ will have been created for the password backup.

1. Emergency WebViewer.html
2. PrivateKey.prvkey

__CAUTION:__ The file Emergency WebViewer.html is saved on the server executing the task. The

__CAUTION:__ key PrivateKey.prvkey needs to be securely saved by the user!\*

The __Emergency WebViewer Export__ is used in the same way as the __WebViewer export__. The __passwords__ are displayed in a current browser. The passwords are accessed in the __Emergency WebViewer Export__ with the __user password__ and the __key__ saved for the user. The search function is used to select the __key (PrivateKey.prvkey)__ and also to check its __validity__. If all data has been correctly entered, it is then possible to log in.

NOTE: The current user needs to log in using their password. If an incorrect password is entered, access is temporarily blocked.

Login data

- Database: Predefined
- User: Predefined
- Password: User password (must be entered by the user)
- Key: PrivateKey.prvkey

![emergency-webviewer](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/system_tasks/emergency_webviewer/emergency-webviewer.webp)

## Overview

After successfully logging in, the __overview page__ for the __Emergency WebViewer Export__ is displayed. This contains information about the saved __passwords__ just like with the WebViewer export. The passwords are now available to the user.

Overview: Emergency HTML WebViewer / passwords

![password in emergency webviewer](../../../../../../../../../static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/extras/system_tasks/emergency_webviewer/installation_with_parameters_96-en.webp)

The following data is displayed in the overview:

Overview data:

1. Display of the currently available records
2. Detailed information on the selected record
3. Search, logout, timeout until logout
4. Copy password to clipboard
5. Reveal password

## Security note

The existing __passwords__ are now available to the user for further processing. The HTML page is closed by clicking on __Logout__.

If the user is __inactive__ for __60 seconds__, he is automatically __logged out__ and the __login__ is displayed with additional information.

NOTE: You have been logged out due to inactivity

The user can log in again using the __password__ and __key__ as described above. After successfully logging in, the __Emergency WebViewer Export overview__ is displayed again.
