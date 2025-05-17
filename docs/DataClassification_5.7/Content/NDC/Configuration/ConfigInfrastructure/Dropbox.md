---
sidebar_position: 3060
title: Configure Dropbox for Crawling
---

Filter: 

* All Files

Submit Search

# Configure Dropbox for Crawling

Netwrix Data Classification connects to and crawls a Dropbox source via a custom Dropbox app, created within Dropbox management console.

You will need to create a Dropbox App and authorize it. Do the following:

1. Select Create apps.
2. Generate Access token

To create a new app

To create a new app, you should sign in to Dropbox cloud using a Dropbox Business account with administrative rights. Refer to [Dropbox documentation](https://developer.box.com/guides/authentication/#section-advanced-features) for more information on the accounts and rights.

1. Navigate to 
2. Select **Create apps**.
3. On the Choose an API step, select Scoped Access.
4. On the Choose the type of access you needstep, select Full Dropbox type.
5. Provide a name for your App. For example, Netwrix Data Classification.

   **NOTE:** Remember to agree with Dropbox API Terms and Conditions.
6. Click Create app.

To authorize your app

1. Once your App has been created, navigate to the Permissions tab.
2. Select the following permissions and click submit.

   * account\_info.read
   * files.metadata.write
   * files.metadata.read
   * files.content.write
   * files.content.read
   * sharing.read
   * team\_info.read
   * team\_data.member
   * team\_data.team\_space
   * files.team\_metadata.write
   * members.read

![](../../../Resources/Images/Config_Infrastructure/Dropbox_Authorize_App.PNG)