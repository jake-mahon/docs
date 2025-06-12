# Configure Video Recordings Playback Settings

Video recordings of users' activity can be watched in any Netwrix Auditor client. Also, recordings are available as links in web-based reports and email-based Activity Summaries.

You can use group Managed Service Accounts (gMSA) as data collecting accounts.

To be able to watch video files captured by Netwrix Auditor via console, the following settings must be configured:

- The user must have read permissions (resultant set) to the __Netwrix_UAVR$__ shared folder where video files are stored. By default, all members of the __Netwrix Auditor Client Users__ group can access this shared folder. Both the group and the folder are created automatically by Netwrix Auditor. Make sure to grant sufficient permissions on folder or explicitly add user to the group (regardless his or her role delegated in the product). See the [To Add an Account to Netwrix Auditor Client Users Group](#To-Add-an-Account-to-Netwrix-Auditor-Client-Users-Group) topic for additional information.
- A dedicated codec must be installed. This codec is installed automatically on the computer where Netwrix Auditor is deployed, and on the monitored computers. To install it on a different computer, download it from [https://www.netwrix.com/download/ScreenPressorNetwrix.zip](https://www.netwrix.com/download/ScreenPressorNetwrix.zip).
- The Ink and Handwriting Services, Media Foundation, and Desktop Experience Windows features must be installed on the computer where Netwrix Auditor Server is deployed. These features allow enabling Windows Media Player and sharing video recordings via DLNA. See the [To Enable Windows Features](#To-Enable-Windows-Features) topic for additional information.

To be able to watch video files captured by Netwrix Auditor via direct links, the following settings must be configured:

- Microsoft Internet Explorer 7.0 and above must be installed and ActiveX must be enabled.
- Internet Explorer security settings must be configured properly. See the [To Configure Internet Explorer Security Settings](#To-Configure-Internet-Explorer-Security-Settings) topic for additional information.
- JavaScript must be enabled. See the [To Enable JavaScript](#To-Enable-JavaScript) topic for additional information.
- Internet Explorer Enhanced Security Configuration (IE ESC) must be disabled. See the [To Disable Internet Explorer Enhanced Security Configuration (IE ESC)](#To-Disable-Internet-Explorer-Enhanced-Security-Configuration-IE-ESC) topic for additional information.

All Internet Explorer-related settings are relevant only for those who watch videos not in Netwrix Auditor console.

__NOTE:__ Microsoft is in the process of deprecating Internet Explorer. However, if you are trying to access the video recordings from browser via direct links (reports on SSRS portal, subscriptions, activity summaries, search export results), IE engine should be present on the client machine. IE might be disabled with GPO, but it should not be removed completely. Recommended option is to use Edge with "IE mode" option enabled.

## To Configure Internet Explorer Security Settings

Follow the steps to configure Internet Explorer security settings.

__Step 1 –__ In Internet Explorer, navigate to __Tools__ > __Internet Options__.

__Step 2 –__ Switch to the Security tab and select __Local Intranet__. Click __Custom Level__.

__Step 3 –__ In the Security Settings - Local Intranet Zone dialog, scroll down to __Downloads__ and verify that __File download__ is set to __Enable__.

__Step 4 –__ In the Internet Options dialog, switch to the __Advanced__ tab.

__Step 5 –__ Local Security and select the __Allow active content to run in files on My Computer__ checkbox.

![manualconfig_uavr_ie2016](/img/versioned_docs/auditor_10.6/auditor/configuration/useractivity/manualconfig_uavr_ie2016.png)

## To Enable JavaScript

Follow the steps to enable JavaScript.

__Step 1 –__ In Internet Explorer, navigate to __Tools__ > __Internet Options__.

__Step 2 –__ Switch to the Security tab and select __Internet__. Click __Custom Level__.

__Step 3 –__ In the Security Settings - Internet Zone dialog, scroll down to __Scripting__ and verify that __Active scripting__ is set to __Enable__.

## To Disable Internet Explorer Enhanced Security Configuration (IE ESC)

Follow the steps to disable Internet Explorer enhanced security configuration.

__Step 1 –__ Navigate to Start > Windows Administrative Tools > __Server Manager__.

__Step 2 –__ In the Security Information section, click Configure IE ESC link on the right to disable it.

## To Add an Account to Netwrix Auditor Client Users Group

All members of the Netwrix Auditor Client Users group are granted the Global reviewer role in Netwrix Auditor and have access to all collected data.

Follow the steps to add an account to the Netwrix Auditor Client Users group.

__Step 1 –__ On the computer where Netwrix Auditor Server is installed, start the Local Users and Computers snap-in.

__Step 2 –__ Navigate to the Groups node and locate the Netwrix Auditor Client Users group.

__Step 3 –__ In the Netwrix Auditor Client Users Properties dialog, click __Add__.

__Step 4 –__ Specify the users you want to be included in this group.

## To Enable Windows Features

Depending on your Windows Server version, do one of the following:

If Netwrix Auditor Server is installed on Windows Server 2008 R2

__Step 1 –__ Navigate to __Start__ > __Server Manager__.

__Step 2 –__ Navigate to __Server Manager <your computer_name>__ > and click __Add features__.

__Step 3 –__ In the Add Features Wizard, select the following Windows features and the follow the installation prompts:

- Ink and Handwriting Services
- Desktop Experience

__Step 4 –__ Restart your computer to complete the features installation.

If Netwrix Auditor Server is installed on Windows Server 2012 and Later

__Step 1 –__ Navigate to __Start__ > __Server Manager__.

__Step 2 –__ In the Server Manager window, click __Add roles and features__.

__Step 3 –__ On the Select Features step, select one of the following Windows features and the follow the installation prompts:

- Ink and Handwriting Services
- Media Foundation
- User Interface and Infrastructure > Desktop Experience

__NOTE:__ If you have Windows corruption errors when installing Windows Media Foundation, run the Deployment Image Servicing and Management (DISM) tool from the command prompt with administrative rights. For detailed information, refer to the Microsoft article: [Fix Windows corruption errors by using the DISM or System Update Readiness tool.](https://support.microsoft.com/en-us/kb/947821)

__Step 4 –__ Restart your computer to complete features installation.
