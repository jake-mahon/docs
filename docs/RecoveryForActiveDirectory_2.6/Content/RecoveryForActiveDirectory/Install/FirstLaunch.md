---
sidebar_position: 6949
title: First Launch
---

# First Launch

To launch the Recovery Console, either:

* Click the desktop icon
* Type `http:/localhost:3005` in a web browser and press Enter

## First Login

On the first login to the Recovery Console, use the credentials configured on the Administrator Role page during installation. This account has the Administrator role needed to manage the application. If a group is used, any account with membership to this group can login.

Follow the steps to login to Recovery for Active Directory.

**Step 1 –** Launch the Recovery Console. The Log in page is displayed.

![ Recovery for Active Directory - Login page](../../../../../static/images/RecoveryForActiveDirectory_2.6/Content/Resources/Images/RecoveryForActiveDirectory/Console/Login.png " Recovery for Active Directory - Login page")

**Step 2 –** Log in with credentials configured on the Administrator Role page of the Recovery for Active Directory Setup wizard during installation. See the [Install the Application](Application "Install the Application") topic for additional information on the administrator role. The username must be entered in the following format:

* Domain\Username

**Step 3 –** Click **Log in**.

Once logged in, the first step is to configure a domain. See the [Domain Backup Configuration Page](../Admin/ActiveDirectory/DomainBackupConfig "Domain Backup Configuration Pag") topic for additional information.

The administrator must also add users who can access the application. Once these users have access, see the [Log into the Recovery Console](Login "Log into the Recovery Console") topic for information on accessing and signing into the Recovery Console.