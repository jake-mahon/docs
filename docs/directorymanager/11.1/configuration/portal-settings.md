---
title: portal settings
sidebar_label: portal-settings
description: Directory Manager 11.1 documentation for portal settings with configuration details, usage instructions, and implementation guidance.
---

# Directory Manage Applications

Using Admin Center, you can create and manage the following Directory Manager applications:

- [ Directory Manager Portal](/docs/directorymanager/11.1/configuration/portal-settings.md)
- [Data Service](/docs/directorymanager/11.1/administration/services/data-service.md)
- [Security Service](/docs/directorymanager/11.1/administration/services/security-service.md)

Moreover, you can manage some basic deployment and log settings for the following applications:

- [Admin Center](/docs/directorymanager/11.1/administration/services/overview.md)
- [Replication Service](/docs/directorymanager/11.1/configuration/replication.md)
- [Email Service](/docs/directorymanager/11.1/administration/services/email-service.md)
- [Scheduler Service](/docs/directorymanager/11.1/automation/overview.md)

See the [Services](/docs/directorymanager/11.1/administration/services/overview.md) topic for additional information.

# Create a Portal

Admin Center lets you quickly build and deploy a web-based portal named Directory Manager portal,
for end-users to carry out user, group, and entitlement management tasks. Users can also view
detailed reports on the current state and health of the directory.

You can create multiple Directory Manager portals as well as create multiple instances for a portal.

You can also create a Self-Service Password Reset portal (SSPR), which is a kind of Directory
Manager portal that only facilitates password-related functions.

## Host a Portal

A portal is hosted on a web server, with native IIS, remote IIS, and Docker as the supported
servers.

- IIS Deployment - Your Directory Manager portal is hosted within a site in IIS. To launch IIS, see
  [Opening IIS Manager](<https://learn.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms525920(v=vs.90)>).

  ![in_iis](/img/product_docs/directorymanager/directorymanager/admincenter/portal/in_iis.webp)

- Docker Deployment - For a Docker deployment, make sure you have a running instance of Docker
  daemon in your environment. A portal runs within a container in Docker.

## Deploy Multiple Instances of a Portal

For load balancing and high availability, Directory Manager facilitates you to create multiple
Directory Manager portals, and even create multiple instances of the same portal. You may host
different instances on different web servers. For example, you can create two instances of a portal
while hosting one in native IIS and another in remote IIS.

Multiple instances of a portal share the same design settings and the same server settings, except
that each instance has its own deployment settings. A change to the shared settings propagates to
all deployment instances.

As multiple Data services and Security services can be created in Directory Manager, you can bind a
different Data service and Security service with each deployment instance of a portal. In this way,
different instances use different services for improved response times and load balancing.

What do you want to do?

- Create a Portal in Native IIS
- Create a Portal in Remote IIS
- Create a Portal in Docker
- Create a Self-Service Password Reset Portal
- Deploy Another Instance of a Portal
- Create a Portal by Copying an Existing Portal
- View the Details of a Portal
- Launch a Portal

## Create a Portal in Native IIS

When you create a portal in native IIS, Directory Manager does the following:

- It creates a directory with the portal's name at the following physical path on the Directory
  Manager server, and copies the portal files from its template directory to the new portal
  directory:  
  X:\Program Files\Imanami\GroupID 11.0\GroupIDPortal\Inetpub\  
  (X represents the Directory Manager installation drive)
- It also creates a virtual directory for the portal in your desired IIS site.

The portal runs within a virtual directory in native IIS while the portal files are physically
located on disk.

**To create a portal:**

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **GroupID Portal** and click **Next step**.
4. On the **Create GroupID Application** page, make sure the **IIS** tile is selected.
5. In the **Application Name** box, enter a unique name for the portal or use the default name. The
   portal is displayed with this name in Directory Manager.
6. In the **Deployment Name** box, enter a deployment name for the portal. This name is used to
   indicate the deployment instance for the portal in Directory Manager.  
   A portal can have multiple deployments, for example, one in IIS and another in Docker.  
   The application name and deployment name are displayed on the portal card on the **GroupID
   Portal** tab.

   ![portal_card](/img/product_docs/directorymanager/directorymanager/admincenter/portal/portal_card.webp)

7. In the **IIS Application Name** box, enter an IIS deployment name for the portal. This name
   should be unique for each portal deployed in IIS.

   - The IIS application name is used to name the portal's directory in IIS and its physical
     directory under **X:\Program Files\Imanami\GroupID 11.0\GroupIDPortal\Inetpub** on the
     Directory Manager server.  
     (X represents the Directory Manager installation drive)
   - This IIS application name is also appended to the web server address to construct the URL that
     users click to access this deployment instance of the portal. For example:  
     `https://web-server-name:port/IIS-application-name`  
     Hence, a different URL is constructed for each deployment of a portal in IIS.

8. In the **IIS Site** drop-down list, select a website to host the portal files. The list displays
   the websites defined on the native IIS server. _GroupIDSite11_ is the default selection.
9. In the **Service Endpoints** area, bind a Data service and a Security service with the portal.

   1. In the **Data Service** drop-down list, select a Data service for the portal to use. The list
      contains all Data services defined in Directory Manager.
   2. In the **Security Service** drop-down list, select a Security service for the portal to use.
      Thelist contains all Security services defined in Directory Manager.

10. In the **Support Information** area, enter internal contact information and resource links for
    the portal's users to obtain help while using the portal.  
    A portal includes a **Contact** link and a **Help** icon on its web interface. The **Contact**
    link launches an email application to send an email to a user or helpdesk for inquiries or
    support. The **Help** icon launches the online help for the portal in a new browser window. Both
    links are customizable, and their target email address or web address is specified in the
    **Support Information** area.

    1. In the **Support group or administrator's email address** box, enter the email address of a
       group or user to redirect user queries to. This email address is mapped to the **Contact**
       link in the portal.
    2. In the **Help URL** box, specify the address of your company's internal support website or
       the portal's help page, where portal users can find support material or report a problem. By
       default, this box displays the URL of the portal's help published by Netwrix.  
       This URL is mapped to the **Help** icon in the portal.

11. (Optional) Select the **Password Center Mode** check box to create this portal as a Self-Service
    Password Reset portal (SSPR). A SSPR portal does not offer the standard functions of a Directory
    Manager portal, such as group management, user management, or entitlement management, but is
    exclusively dedicated to password-relation activities. This portal enables users to manage their
    directory account passwords, i.e., the password for the account they use to access their
    workstations and other Microsoft services. Users can change and reset their passwords, as well
    as unlock their accounts. They can also enroll their accounts in Directory Manager and link
    accounts in different identity stores.

    The SSPR portal does not have design settings and advanced settings, like a standard Directory
    Manager portal has. For this reason, the following configurations are not available on selecting
    the **Password Center Mode** check box:

    - The **Import Design** option for identity stores in the Select Identity Stores area
    - The Advanced Settings area

    NOTE: Directory Manager does not support the upgrade of a Password Center portal (from a
    previous version) to an SSPR portal. You have to create the SSPR portal as a new portal.

12. In the **Select Identity Stores** area, select the check boxes for the identity stores you want
    to associate with the portal. Users in the associated identity stores can sign into the portal
    to manage directory objects, their directory profiles, and more.  
    While associating identity store(s), you may get the following message:

    ![linked_message](/img/product_docs/directorymanager/directorymanager/admincenter/portal/linked_message.webp)

    This relates to the scenario when identity stores in Directory Manager have been linked, as
    discussed in the
    [Linked Identity Stores and the Directory Manager Portal](/docs/directorymanager/11.1/configuration/identity-store-linking.md#linked-identity-stores-and-the-directory-manager-portal)
    topic. Hence, when two identity stores, IdentityStoreA and IdentityStoreB, are linked and you
    associate IdentityStoreA with the portal, this message is displayed. It alerts you to associate
    the second identity store in the linked pair (dentityStoreB) with the portal too, in order to
    benefit from the linking.

13. Each identity store associated with a portal has its own set of design settings, as listed in
    the [Design a Portal with Display Types](/docs/directorymanager/11.1/configuration/display-types.md) topic.

    If you are upgrading to Directory Manager 11 from GroupID 9 or GroupID 10, you can import the
    design settings for an identity store from a Self-Service portal in a previous version - as an
    alternate to defining these settings from scratch. Following are the details of the file
    containing identity store design settings for a Self-Service portal in GroupID 9 and 10:

    **Design file name:** `<Identity store name>`..xml.

    For example: ADStore.xml  
     A separate design file exists for each identity store linked with a Self-Service portal.

    **File location in GroupID 9/10:** [GroupID installation drive]:\Program Files\Imanami\GroupID
    `version`\SelfService\Inetpub\&lt;portal name&gt;\Design\  
     For example: C:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub\TestPortal\Design\

    Similarly, a separate file exists for each linked combo created in the Self-Service portal.  
    **Linked combo file name:** The file has the same name as that of the linked combo in the
    portal.for example, Country-State.xml  
    **File location in GroupID 9/10:** All linked combo files, regardless of the identity store they
    are used for, are available at the following path:  
    [GroupID installation drive]:\Program Files\Imanami\GroupID
    `version`\SelfService\Inetpub\&lt;portal name&gt;\Web\LinkedCombo\  
    For example: C:\Program Files\Imanami\GroupID
    10.0\SelfService\Inetpub\TestPortal\Web\LinkedCombo\

    **To import the design file and linked combo file(s), do the following:**

    1. As a prerequisite to Directory Manager 11 upgrade, the folder structure for the source
       version was copied to the Directory Manager 11 server. In this case, the design and linked
       combo files for all portals in the previous version are already available on the machine.
       Else copy the above mentioned files for the respective identity stores associated with the
       Self-Service portal, and place them on your local machine or a shared network location.
    2. In he **Select Identity Stores** area, click **Import Design** next to an identity store name
       to import the design file for it.
    3. Browse for the file to select and import it. The import process takes a while.  
       Each identity store associated with a Self-Service portal has its own design file, so make
       sure you import the correct file. For example, if Identity Store A is associated with two
       Self-Service portals, then these will be two different design files for the same identity
       store, though at different locations.
    4. After the file is uploaded, a message is displayed, showing the number of linked combos
       defined in the imported design settings and prompting you to import the respective linked
       combo files.  
       Browse to the location of the linked combo files and import those that represent the linked
       combos defined in the design settings.

14. A portal has certain advanced settings defined for it, as discussed in the
    [Manage Advanced Settings](/docs/directorymanager/11.1/configuration/portal-settings.md) topic.  
    If you are upgrading to Directory Manager 11 from GroupID 9 or GroupID 10, you can import the
    advanced settings of a Self-Service portal from a previous version as an alternate to defining
    settings from scratch. Following are the details of the file containing advanced settings for a
    Self-Service portal in GroupID 9 and 10:

    **File name:** server.xml. A separate file exists for each Self-Service portal.  
    **File location in GroupID 9/10:** [GroupID installation drive]:\Program Files\Imanami\GroupID
    `version`\SelfService\Inetpub\&lt;portal name&gt;\  
    For example: C:\Program Files\Imanami\GroupID 10.0\SelfService\Inetpub\TestPortal\

    **To import the file, do the following:**

    1. As a prerequisite to Directory Manager 11 upgrade, the folder structure for the source
       version was copied to the Directory Manager 11 server. In this case, the server.xml file for
       all portals in the previous version is already available on the machine. Else copy the
       server.xml file for the Self-Service portal whose advanced settings you want to import, and
       place it on your local machine or a shared network location.
    2. On the **Create GroupID Application** page, click **Import Settings** in the **Advanced
       Settings** area.
    3. Browse for the file to select and import it. The import process takes a while.

15. Click **Create Application**.  
    The new portal is displayed on the **GroupID Portal** tab. You can differentiate between a
    standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type
    has its own logo.

## Create a Portal in Remote IIS

You can host a portal within a site in remote IIS. For this, you need to connect with the Microsoft
IIS Administration API running on the remote IIS machine.

When you create a portal in remote IIS, Directory Manager does the following:

- It creates a virtual directory for the portal in a preconfigured site in remote IIS.
- It creates a physical directory for the portal in the folder that is mapped to this preconfigured
  site.

The portal runs within a virtual directory in remote IIS while the portal files are physically
located on disk.

To learn about the remote IIS settings and configurations before hosting a portal, see
the[Prerequisites for Deployments in Remote IIS](/docs/directorymanager/11.1/installation/requirements.md) topic.

**To create a portal:**

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **GroupID Portal** and click **Next step**.
4. On the **Create GroupID Application** page, select the **Remote IIS** tile.
5. In the **Application Name** box, enter a unique name for the portal or use the default name. The
   portal is displayed in Directory Manager with this name.
6. In the **Deployment Name** box, enter a deployment name for the portal. This name is used to
   indicate the deployment instance for the portal in Directory Manager. A portal can have multiple
   deployments, for example, one in IIS and another in Docker.  
   The application name and deployment name are displayed on the portal card on the **GroupID
   Portal** tab.
7. In the **API URL** box, enter the URL of the API to use for communicating with the remote IIS
   server.  
   Make sure the
   [Microsoft IIS Administration API](https://learn.microsoft.com/en-us/iis-administration/) is
   installed as a Windows service on the remote IIS machine. Fetch the URL of this API from remote
   IIS and provide it here to enable communication.
8. In the **Access Token** box, enter the access token to allow Admin Center to access the Microsoft
   IIS Administration API. This access token is generated from the Microsoft IIS Administration
   API's interface.
9. In the **Username** and **Password** boxes, enter the credentials of a Windows account to
   communicate with the API. This account must have access to the remote IIS machine, with
   sufficient permissions to enable you to create and manipulate objects in IIS.
10. In the **IIS Application Name** box, enter an IIS deployment name for the portal. This name
    should be unique for each portal deployed within the same site in remote IIS.

    - The IIS application name is used to name the portal's directory in the IIS site and its
      physical directory on the remote IIS machine. The physical directory is created within the
      folder that is mapped to the preconfigured site, and portal files are copied to it.
    - This IIS application name is also appended to the web server address to construct the URL that
      users click to access this deployment instance of the portal. For example:  
      `https://web-server-name:port/IIS-application-name`  
      Hence, a different URL is constructed for each deployment of a portal in remote IIS.

11. On providing the above information, the **Website** drop-down list displays the sites defined on
    the remote IIS server. Select the site that you have configured with the appropriate permissions
    for Directory Manager.
12. To enter information in the **Service Endpoints**, **Support Information**, **Password Center
    Mode**, **Select Identity Stores**, and **Advanced Settings** areas and create the portal,
    follow the steps in the Create a Portal in Native IIS topic, starting at step 9.

## Create a Portal in Docker

Directory Manager enables you to host a portal in Docker. For this, you need to connect with the API
running on a Docker deamon in your environment, so that Directory Manager can create a container for
the portal there and run the portal from within that container.

For an overview on application deployment in Docker, see the
[Prerequisites for Deployments in Docker](/docs/directorymanager/11.1/installation/requirements.md) topic.

NOTE: To host the portal, Docker daemon should be configured to run Windows containers.

**To create a portal:**

1. In Admin Center, click **Applications** in the left pane.
2. Click **Add Application**.
3. On the next page, select **GroupID Portal** and click **Next step**.
4. On the **Create GroupID Application** page, select the **Docker** tile.
5. In the **Application Name** box, enter a unique name for the portal or use the default name. The
   portal is displayed in Directory Manager with this name.
6. In the **Deployment Name** box, enter a deployment name for the portal. This name is used to
   indicate the deployment instance for the portal in Directory Manager. A portal can have multiple
   deployments, for example, one in IIS and another in Docker.  
   The application name and deployment name are displayed on the portal card on the **GroupID
   Portal** tab.
7. In the **Port** box, enter the port for the host machine to map the container to host ports. By
   default, the container port is 443.  
   This enables network access to the portal in Docker over this port.
8. In the **Service URL** box, enter the API URL to use for accessing and communicating with Docker
   Engine.  
   On installing Docker Engine, you must expose an API over TCP on the same machine to enable
   communication with Directory Manager.  
   The URL you provide in the **Service URL** box identifies the Docker deamon where you want to
   host the portal.
9. In the **Container Name** box, enter a name for the container that is created in Docker for
   deploying the portal.
10. For entering information in the **Service Endpoints**, **Support Information**, **Password
    Center Mode**, **Select Identity Stores**, and **Advanced Settings** areas and create the
    portal, follow the steps in the Create a Portal in Native IIS topic, starting at step 9.

## Create a Self-Service Password Reset Portal

A Directory Manager portal can be created as a Self-Service Password Reset portal (SSPR in native
IIS, remote IIS, and Docker. A SSPR portal only provides password management functions to end-users.

Creating an SSPR portal is similar to creating a standard Directory Manager portal; you only have to
select the **Password Center Mode** check box on the Create GroupID Application page. For details,
see Step 11 in the he Create a Portal in Native IIS topic.

NOTE: Directory Manager does not support the upgrade of a Password Center portal (from a previous
version) to an SSPR portal. You have to create the SSPR portal as a new portal.

## Deploy Another Instance of a Portal

You can deploy more than one instance of a portal. Instances can be deployed in different web
servers, for example, one in IIS, another in remote IIS, and yet another in Docker. For more on how
instances work, see the Deploy Multiple Instances of a Portal topic.

To deploy a new instance, you have to provide deployment details only. All instances share the same
server and design configurations, while only deployment details differ. For example, all instances
serve the same identity stores and have the same display and search-related configurations. Changing
a shared setting propagates to all deployment instances of the portal.

NOTE: A SSPR portal does not have design settings. Hence, only server settings are shared across
multiple instances.

**To deploy an instance:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **GroupID Portal** tab, click the ellipsis button for a portal and select **Deploy Another
   Instance**.
3. On the **Deploy Another Instance** page, select the **IIS**, **Remote IIS**, or **Docker** tile
   to indicate the web server where you want to deploy the instance.  
   The **Application Name** field displays the name of the portal as read-only.
4. Fields on the page vary, depending on the web server selected. In any case, the **Support
   Information**, **Select Identity Stores**, and **Advanced Settings** areas are not available, as
   they remain the same for all instances.

   - To deploy an instance in native IIS, follow steps 6-9 in the Create a Portal in Native IIS
     topic.
   - To deploy an instance in remote IIS, follow steps 6-12 in the Create a Portal in Remote IIS
     topic.
   - To deploy an instance in Docker, follow steps 6-10 in the Create a Portal in Docker topic.

5. After entering the required information, click **Deploy Instance**.  
   The new instance is displayed on the portal's card.

## Create a Portal by Copying an Existing Portal

You can create a new portal by copying an existing portal. All server and design configurations of
the template portal are duplicated to the new portal. Deployment details are not duplicated, so you
can choose to deploy the new portal in any of the supported web servers. Consider the following:

- You can create a SSPR portal by copying a standard Directory Manager portal. In this case, the
  design settings of the base portal are not duplicated as the SSPR portal does not have design
  settings.
- You can create a standard Directory Manager portal by copying a SSPR portal. As the SSPR portal
  does not have design settings, the new portal is created with the default design settings. You can
  modify them as needed.

**To create a portal:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **GroupID Portal** tab, click the ellipsis button for a portal and select **Copy**.  
   The **Copy GroupID Application** page is displayed; populated with the following settings of the
   copied portal:

   - The Data service and Security service linked to the portal
   - The support information for the portal, i.e., the admin/helpdesk contact email address and the
     portal's help URL
   - The identity store(s) associated with the portal

3. You can deploy the new portal in native IIS, remote IIS, or Docker.

   - To specify settings for a native IIS deployment, follow the instructions in the Create a
     Portal in Native IIS topic, beginning at step 4.
   - To specify settings for a remote IIS deployment, follow the instructions in the Create a
     Portal in Remote IIS topic, beginning at step 4.
   - To specify settings for a Docker deployment, follow the instructions in the Create a Portal in
     Docker topic, beginning at step 4.

## View the Details of a Portal

1. In Admin Center, click **Applications** in the left pane.  
   The **GroupID Portal** tab displays the portals that you have created.
2. The card for a portal displays the following information:

   | Info                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
   | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | Name                 | The name given to the portal. Next to the portal name is the portal logo, which enables you to differentiate between a standard Directory Manager portal and a SSPR portal, as each portal type has its own logo.                                                                                                                                                                                                                                                                                                                                                                                                                |
   | Identity Stores      | The names of the identity stores the portal serves.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
   | Deployment Instances | Displays the deployment instance(s) of the portal as tiles. A tile shows the deployment name of the instance and the web server where it is deployed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
   | Status               | A portal has one of the following statuses: - **Running:** Indicates that the portal is up and running. - **Stopped:** Indicates that Directory Manager is unable to communicate with the portal. To troubleshoot, go to the web server where the portal is deployed and make sure the portal is running. - **Error:** Any issue other than _stopped_ is categorized as _error_. In this case, contact your system administrator.                                                                                                                                                                                                |
   | Launch Application   | Click this link to launch the portal. When multiple deployments of a portal are available, select the tile for a deployment instance and click this link to launch that instance.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
   | Ellipsis             | Click it to launch a shortcut menu with the following options: - **Settings:** Launches the portal settings page, where you can manage server and design settings. - **Server Settings:** Includes the deployment details of each portal instance, the help URL for the portal, the identity stores linked with the portal, and more. - **Design settings:** These settings relate to the portal's user interface. - **Deploy Another Instance:** Enables you to deploy another instance of the portal. - **Copy:** Enables you to create a new portal by copying the settings of this portal. - **Delete:** Deletes the portal. |

You may notice a portal with an orange card and an orange icon on the card. On hovering the mouse
over the icon, the tooltip says that _linked mode will not be allowed_. This relates to the scenario
when identity stores in Directory Manager have been linked, as discussed in the
[Linked Identity Stores and the Directory Manager Portal](/docs/directorymanager/11.1/configuration/identity-store-linking.md#linked-identity-stores-and-the-directory-manager-portal)
topic. Hence, when two identity stores, IdentityStoreA and IdentityStoreB, are linked and you
associate IdentityStoreA with the portal, the portal card appears in orange. It informs you to
associate the second identity store in the linked pair (dentityStoreB) with the portal too, in order
to benefit from the linking.

## Launch a Portal

1. In Admin Center, select **Applications** in the left pane.
2. On the **GroupID Portal** tab, click **Launch Application** on a portal's card to launch it.

   When multiple deployments of a portal are available, select a deployment instance on the card
   and click **Launch Application** to launch that instance.

   Provide the URL of an instance to your users so they can access the portal. You can either copy
   the URL from the address bar or from a portal's deployment settings. See the
   [View the Launch URL for an Instance](/docs/directorymanager/11.1/configuration/portal-settings.md#view-the-launch-url-for-an-instance)
   topic.

**See Also**

- [Directory Manage Applications](/docs/directorymanager/11.1/configuration/portal-settings.md)
- [ Directory Manager Portal](/docs/directorymanager/11.1/configuration/portal-settings.md)

# Delete a Portal

You can delete a portal or a deployment instance of a portal. On deleting a portal, all its
instances are deleted with it.

What do you want to do?

- Delete a Deployment Instance for a Portal
- Delete a Portal

## Delete a Deployment Instance for a Portal

A portal can have multiple deployment instances. When you delete an instance, the following is
removed:

- **For an instance in native IIS:**

  - The portal directory under the following location on the Directory Manager server:  
    X:\Program Files\Imanami\GroupID 11.0\GroupIDPortal\Inetpub\  
    (X represents the Directory Manager installation drive)
  - The portal’s directory in the IIS site

- **For an instance in remote IIS:**

  - The portal’s directory in the remote IIS site
  - The portal's physical directory under the folder mapped to the remote IIS site

- **For an instance in Docker:**

  The container created in Docker Engine for the portal

**To delete an instance:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **GroupID Portal** tab, click the ellipsis button for a portal and select **Settings**.
3. Select **Deployments** under **Server Settings** in the left pane.  
   The **Deployment Settings** page has varying tabs, depending on the deployment instances of the
   portal.

   - The **IIS** tab is available when one or more portal instances are deployed in native IIS.
   - The **Remote IIS** tab is available when one or more portal instances are deployed in remote
     IIS.
   - The **Docker** tab is available when one or more portal instances are deployed in Docker.

   Select a tab to delete a portal instance deployed in the respective web server.

4. The **Select Application Deployment** drop-down list displays the portal instances deployed on
   the selected web server. Select an instance and click **Delete**.

## Delete a Portal

Deleting a portal removes all its deployments and configurations from Directory Manager.

**To delete a portal:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **GroupID Portal** tab, click the ellipsis button for a portal and select **Delete**.

**See Also**

- [Directory Manage Applications](/docs/directorymanager/11.1/configuration/portal-settings.md)
- [ Directory Manager Portal](/docs/directorymanager/11.1/configuration/portal-settings.md)

# Linked Combo Type - Details

Enter the following details about the linked combo on the **Details** page of the **Linked Combo
Display Type** wozard:

1. Enter a name for the linked combo in the **Linked Combo Name** box.  
   You cannot change the name of a custom display type once you have created it.
2. Next, specify the data source for the linked combo. You can either use an already uploaded file
   or upload a new one.

   - Use the **Available Data Sources** drop-down list to select an already uploaded file. This may
     be required, for example, when your source file contains the data and relationships for
     several fields, and you want to manage those relationships using multiple linked combos rather
     than one combo. Hence the need to upload the same file for multiple linked combos.  
     The list displays all the data source files previously used to create linked combos for this
     portal. To export a file, select it and click **Export**. The file is saved to the download
     location set in your browser settings.
   - To upload a new file, click **Browse** next to the **File Name** box and select the XML or
     Microsoft Excel file containing the data to populate the linked combo and the display types
     linked to it.

   If the source file is a Microsoft Excel (.xls or .xlsx) file, Directory Manager automatically
   creates its XML version to process it. To learn about the Excel file format, see the
   [Excel Data File Format](/docs/directorymanager/11.1/configuration/portal-settings.md) topic.

3. Click **Next**.

See Also

- [Linked Combo Display Type](/docs/directorymanager/11.1/configuration/portal-settings.md)

# Excel Data File Format

The following table explains the rules for the Microsoft Excel workbook to use for the linked combo
display type:

|     | Rule for           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.  | Worksheet names    | The worksheet names should follow the format: **Number-Name** Where: - _Number_ is the serial number based on the order of the worksheet and it should start from zero. This means that the number for the first worksheet should be 0, the second should be 1, the third should be 2, and so on. - _Name_ is the name of the worksheet that identifies the data it contains. It can be anything you want. ![image](/img/product_docs/directorymanager/directorymanager/admincenter/portal/linkedcombo/image.webp) |
| 2.  | Identity column    | Each worksheet should have an identity _(ID)_ column that contains a unique value for every record entered in the sheet. ![image1](/img/product_docs/passwordsecure/passwordsecure/configuration/basic_view/image1.webp)                                                                                                                                                                                                                                                                                           |
| 3.  | Name column        | Each worksheet should have a _Name_ column. This column contains the values to be displayed in the linked combo. For example, the _Name_ column in the 0-Company worksheet contains the company name for every record in the sheet.                                                                                                                                                                                                                                                                                |
| 4.  | Foreign Key column | Each worksheet that contains data related to that on the previous sheet, should have a foreign key identity column (_FK_). This column contains the ID of the record (from the immediately previous sheet) that the current record relates to. ![image2](/img/product_docs/passwordsecure/passwordsecure/configuration/basic_view/checklist/image2.webp)                                                                                                                                                           |

See Also

- [Linked Combo Display Type](/docs/directorymanager/11.1/configuration/portal-settings.md)

# Linked Combo Display Type

A linked combo is a custom display type that you can link to other display types on a portal page.
When a user selects a value from a linked combo, the values for the display types linked to it are
populated accordingly. A common application of the linked combo involves the _country, state_, and
_city_ fields. When a user selects a country, the _state_ field changes to display the states in
that country. On selecting a state, the city field displays the cities in that state.

In the default portal template, one linked combo display type _CountryState_ is defined, that
establishes a relationship between the country and state fields. Selecting a country populates the
_State_ list.

A linked combo display type also allows for more complex linking between fields, such as would be
needed to link the office, city, state, and country fields. Relationships can be extended to any
level. You can define one linked combo display type to manage these relationships, or simplify the
task by defining multiple combos, for example:

- The first linked combo establishes a relationship between the country and state fields.
- The second linked combo establishes a relationship between the state and city fields.
- The third establishes a relationship between the city and office fields.

Before creating a linked combo, you must create and maintain an external data file containing the
data and relationships for the required fields. The data source file is used to populate the linked
combo and the fields linked to it.

NOTE: When defining a linked combo, consider the following:

- You can define multiple linked combos for an object, provided that different attributes are used
  for the combos. For example, you define a linked combo for the user object using the company,
  department, and title attributes. To define another combo for the user object, you cannot use any
  of the previously used attributes.
- For two different object types, you can use the same attributes in different linked combos.

#### Linked Combo Data File

The linked combo requires an XML file that contains the data for the display type itself and the
other display types that will be linked to it. Directory Manager also supports the Microsoft Excel
file format (.xls or .xlsx), that it automatically converts to XML. The data in the Excel file must
be in a specific format for Directory Manager to process it.

For information about the Excel file format, see the [Excel Data File Format](/docs/directorymanager/11.1/configuration/portal-settings.md) topic.

NOTE: If data in the source file is updated, you must reload the file for changes to take effect.

## Define a Linked Combo Display Type

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click the **Linked Combo Types** tab.
6. Click **Add** to define a linked combo display type.
7. Complete the pages of the **Linked Combo Display Type** wizard.

   1. On the **Details** page, provide the source data file. See the
      [Linked Combo Type - Details](/docs/directorymanager/11.1/configuration/portal-settings.md) topic for more info.
   2. On the **Schema** page, define the parent-child relationship between fields. See the
      [Linked Combo Type - Schema](/docs/directorymanager/11.1/configuration/portal-settings.md) topic for details.

8. Click **OK**.
9. Click **Save** on the **Custom Display Types** page.  
   The linked combo display type is listed on the **Linked Combo Types** tab.

## Implement a Linked Combo

To use a linked combo in a portal, do the following:

1. Link a linked combo display type to a schema attribute on the **Search Forms**, **Properties**,
   **Create Object**, or **Property Validation** page in Design settings. The linked combo is
   rendered as a drop-down list in the portal.  
   On the **Schema** page of the **Linked Combo Display Type** wizard, you selected an expression
   (representing a data column in the source Excel workbook) in the **Type binding expression**
   drop-down list. Each record in this column will be displayed as a value in the drop-down list in
   the portal. When a user selects a value, it will be stored as the value of the schema attribute
   mapped to the linked combo display type.
2. The fields listed in the **Linked Field** list on the **Schema** page are already mapped to
   schema attributes. For all fields that you use in a linked combo, one of the following cases
   apply:

   - If a field’s schema attribute is already rendered as a field on the same portal page, it auto
     connects to the linked combo. Values in this field are displayed with respect to the
     expression mapped to it on the **Schema** page.  
     Let’s assume you select a field, Country, in the _Linked Field_ list, which is mapped to the
     “co” attribute in Active Directory. You link it to the ‘Country Name’ column in the source
     file. This column contains the names of all the countries in the world.  
     Now in the default portal template, the ‘co’ attribute is already rendered as a drop-down list
     on the _General_ tab in user properties and displays the names of Asian countries. When you
     apply your linked combo (containing the Country field) on the General tab, it auto-connects to
     the ‘co’ attribute and replaces its values (the list of Asian countries) with the values from
     the source data file (the names of all countries of the world).
   - If a field’s schema attribute is not previously used on the same portal page as the linked
     combo, the field will not be displayed in the portal. You must link this attribute to a
     display type and render it on the same portal page as the linked combo. Values in this field
     will be displayed with respect to the expression mapped to it on the **Schema** page.

   In any case, set the display type of each field in a linked combo to a _Textbox_ or _Dropdown_
   list, depending on the kind of values it would hold.

### Example Case for Implementing a Linked Combo

In this example, we will link a linked combo display type to the Company attribute (field) on the
General tab of the user properties page in the portal. Next, we will present how the fields used in
the linked combo should be rendered on the General tab, so that the fields are connected.

#### Step 1: Link a Linked Combo to a Schema Attribute

1. In Admin Center, select **Applications** in the left pane.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings.**
4. In the left pane, click **Properties**.
5. On the **Properties** page, select _User_ in the **Select Directory Object** list.
6. The names of all tabs on the portal’s user properties page are listed under **Name**. To render
   the linked combo on the **General** tab, click **Edit** for it.
7. On the **Edit Design Category** pane, let’s link the _Company_ field to the linked combo. Click
   **Edit** for the _Company_ field.
8. On the **Edit Field** pane, select a schema attribute to map your linked combo to, and in the
   **Display Type** drop-down list, select your linked combo display type.
9. Click **OK** on the panes to close them.
10. Click **Save** on the **Custom Display Types** page.

The _Company_ field would be displayed as a drop-down list on the _General_ tab of the user
properties page in the portal. Values in this list will be populated from the combo’s source data
file, with respect to the expression selected in the **Type Binding Expression** drop-down list on
the **Linked Combo Display Type** wizard.

#### Step 2: Render the Linked Fields in the Combo on the Portal

If the fields defined in a linked combo are already rendered on the same portal page as the linked
combo, make sure that the appropriate display type is used for them. Some examples are shown in the
table below.

On the other hand, if the fields defined in a linked combo are not available on the same portal page
as the linked combo, you must create the fields first. These fields must be linked to the same
schema attributes as the combo’s fields are linked with, and an appropriate display type must be set
for them. The following table shows an example of the field names and the display types to set for
them.

| Field   | Display Type to use | Notes                                                                                                                                                                                                                               |
| ------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Country | Drop-down list      | Create a Drop-down List display type and use it for this field or use the default drop-down list, lstCountry. lstCountry has values defined for it, which may produce undesirable results.                                          |
| State   | Drop-down list      | Create a Drop-down List display type and use it for this field or use the default drop-down list, lstState.                                                                                                                         |
| City    | Drop-down list      | Create a Drop-down List display type and use it for this field or use the default drop-down list, lstCity.                                                                                                                          |
| Address | Text box            | Use a simple text box display type with this field                                                                                                                                                                                  |
| Zip     | Text box            | Use a simple text box display type with this field or use the default textbox display type, maskZIPCode. This default display type comes with a validation check that ensures that users enter the zip code in the required format. |

## Reload the Source Data File

When you update data in the source file, you must also reload the file for changes to take effect.

**To reload the file:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.  
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click the **Linked Combo Types** tab.
6. Click **Edit** for a linked combo to reload the source data file for it. The **Linked Combo
   Display Type** wizard is displayed.
7. On the **Details** page, click **Browse** to select the file to load. Then click **Next**.
8. On the **Schema** page, make changes to the relationships, if required, and click **OK**.  
   See the [Linked Combo Type - Schema](/docs/directorymanager/11.1/configuration/portal-settings.md) topic for details.
9. Click **Save** on the **Custom Display Types** page.

**See Also**

- [Display Type Categories](/docs/directorymanager/11.1/configuration/display-types.md)
- [Define Custom Display Types](/docs/directorymanager/11.1/configuration/display-types.md)

# Linked Combo Type - Schema

On the **Schema** page of the **Linked Combo Display Type** wizard, define the parent-child
relationship between fields. Every linked field must have a parent field except the primary parent
field. Each linked field also requires a data binding expression that defines its mapping with the
underlying XML data. Directory Manager provides a list of all possible data binding expressions
(extracted from the XML source file) to select from.

Do the following:

1. Map the **Type binding expression** list to the first worksheet (0-`<worksheet name>`) of the
   source Excel workbook. The portal fields use the binding expression to obtain reference to the
   worksheet in the source file to retrieve and display data from.  
   Expressions in the **Type binding expression** list are auto generated with respect to the number
   of sheets in the source Excel workbook and the number of columns in a sheet. It is as:

   ![binding_expressions_examples](/img/product_docs/directorymanager/directorymanager/admincenter/portal/linkedcombo/binding_expressions_examples.webp)

   In an expression, worksheet names are enclosed in brackets while the names of the data columns
   in the worksheets are without brackets. The expressions in the figure above indicate that the
   Excel workbook has three worksheets: _Company_, _Country_, and _City_.

   - The _Company_ worksheet has one data column: _Name_.
   - The _Country_ worksheet has two data columns: _Name_ and _State_.
   - The _City_ worksheet has four data columns: _Name_, _Address_, _Address2_, and _ZipCode_.

2. Use the grid on the **Schema** page to link and relate the data from the Excel workbook sheets to
   the portal fields.

   1. Click **Add** to add a row.

      ![child_fields](/img/product_docs/directorymanager/directorymanager/admincenter/portal/linkedcombo/child_fields.webp)

   2. In the **Linked Field** drop-down list, select a field (for example, Country). This field
      will be linked to the data column represented by the binding expression you select in the
      **Binding Expression** drop-down list.  
      The **Linked Field** list contains predefined, hard coded fields, where each field is already
      mapped to a schema attribute. When you map a field to an expression, the values in the
      worksheet’s data column will be available for the field in the portal. When a portal user
      selects a value, it is set as the attribute’s value for the field.
   3. The **Parent Field** list does not apply to the first row. For all other rows, use it to
      select the name of the parent field for the selected linked field. For example, when _State_
      is selected in the _Linked Field_ list, select Country as the parent field.
   4. In the **Binding Expression** drop-down list, select an expression that represents the data
      column you want to link to the field selected in the **Linked Field** list.  
      Expressions are auto generated with respect to the number of sheets in the source Excel
      workbook and the number of columns in a sheet, as shown in the figure above.

   The following example shows the relationship for an Excel workbook with three worksheets:
   0-Company, 1-Country, and 2-City. (You can also create two linked combos to manage the
   relationship between these three fields.)

   ![schema](/img/product_docs/directorymanager/directorymanager/admincenter/portal/linkedcombo/schema.webp)

   The relationship formed between fields can be explained as:

   - The Company field, containing all records from the Name column on the Company worksheet, will
     be the primary linked combo field in the portal.
   - The Country field in the portal will contain all records from the Name column on the Country
     worksheet.
   - The State field in the portal will contain all records from the State column on the Country
     worksheet. The Country field will be the parent field for the State field, which means that
     when a user selects a country, the State field will show the states in that country.
   - The City field in the portal will contain all records from the Name column on the City
     worksheet. The State field will be the parent field for the City field, which means that when
     a user selects a state, the City field will show the cities in the selected state.

   The complete structure for the data in the Excel workbook is explained in the following table.

   | Worksheet | Column                       | Description                                       | Example   |
   | --------- | ---------------------------- | ------------------------------------------------- | --------- |
   | 0-Company | ID                           | Company identifier                                | 1000 2000 |
   | Name      | Company name                 | Netwrix Consulting Netwrix Software               |           |
   | 1-Country | FK                           | Company identifier with which to link this record | 1000 2000 |
   | ID        | Country identifier           | 1010 2010                                         |           |
   | Name      | Country name                 | United States Pakistan                            |           |
   | State     | State abbreviation           | CA PU                                             |           |
   | 2-City    | FK                           | Country identifier with which to link this record | 1010 2010 |
   | ID        | City identifier              | 1011 2011                                         |           |
   | Name      | City name                    | Livermore Lahore                                  |           |
   | Address   | Office address 1             | 5099 Preston Ave T8-A, Gulberg                    |           |
   | Address2  | Office address 2             |                                                   |           |
   | Zip Code  | Postal zip code or area code | 94551 54600                                       |           |

See Also

- [Linked Combo Display Type](/docs/directorymanager/11.1/configuration/portal-settings.md)

# Directory Manager Portal

A Directory Manager portal represents a virtual link with the directory. Using it, users can do the
following in an identity store:

- Search the directory.
- Perform group management tasks, such as create and update their groups; join and leave groups;
  attest, expire and renew groups, and more.
- Carry out user management tasks, such as create, update, and delete users in the directory. Users
  can maintain and update their profiles, change their passwords, manage their accounts, manage
  their direct reports, and more.
- Synchronize data between a source and a destination, such as directories, files, and databases.
- Manage user and group entitlements to shared resources on file servers and SharePoint sites.
- Approve and deny workflow requests.
- Generate hundreds of insightful reports on Active Directory, Microsoft Entra ID, Exchange, and
  Office 365 objects (groups, users, mailboxes, contacts, computers, and servers).
- View history data for directory objects that are created, updated, or deleted in the directory
  using Directory Manager.

Delegating group and user management tasks to end-users reduces the workload on IT administrators
and helpdesk, as users are empowered to manage their groups and direct reports without assistance
from an administrator. Moreover, when users maintain and update their profile information, data is
more accurate and reliable.

Administrators can maintain complete control over data integrity, as they can implement fine-grained
controls and policies that determine what users can view and change using the Directory Manager
portal. They can also define workflows for an identity store, that serve as a built-in auditing
system to ensure that users enter correct data before changes are committed to the directory.

A Directory Manager portal can be linked with multiple identity stores, thus eliminating the need to
create a separate portal for each identity store. Users can select an identity store while signing
in.

## Self-Service Password Reset Portal (SSPR)

A Self-Service Password Reset portal is a type of Directory Manager portal that only facilitates
password-related functions. This portal enables users to manage their directory account passwords,
i.e., the password for the account they use to access their workstations and other Microsoft
services. Users can change and reset their passwords, as well as unlock their accounts. They can
also enroll their accounts in Directory Manager and link accounts in different identity stores.

NOTE: Directory Manager does not support the upgrade of a Password Center portal (from a previous
version) to an SSPR portal. You have to create the SSPR portal as a new portal.

## Linked Identity Stores and the Portal

The administrator can link two or more identity stores in Directory Manager. As a prerequisite for
linking, the identity stores must be built on Active Directory or Microsoft Entra ID domains. The
purpose is to link identical objects in different domains.

To learn about linked identity stores and how they work in a Directory Manager portal, see the
[Linked Identity Stores and the Directory Manager Portal](/docs/directorymanager/11.1/configuration/identity-store-linking.md#linked-identity-stores-and-the-directory-manager-portal)
topic.

## Notifications in the Portal

A Directory Manager portal can send email notifications to designated recipients when a user makes a
change to objects in an identity store. To specify notification recipients, see the
[Specify Notification Recipients](/docs/directorymanager/11.1/configuration/identity-stores.md#specify-notification-recipients)
topic.

By default, notifications are sent to users in the English language. However, a user can opt to
receive notifications in a supported language by personalizing the language settings from the
**Settings** panel in the portal.

**See Also**

- [Directory Manage Applications](/docs/directorymanager/11.1/configuration/portal-settings.md)
- [Create a Portal](/docs/directorymanager/11.1/configuration/portal-settings.md)
- [Delete a Portal](/docs/directorymanager/11.1/configuration/portal-settings.md)

# Manage Advanced Settings

Advanced settings allow you to customize the functionality and appearance of a portal. For example,
you can set the default landing page, change the portal logo, show or hide the help link, display
enrollment reminders, and more.

NOTE: Advanced settings are available for a standard Directory Manager portal, and not for a
Self-Service Password Reset portal.

Default values for all advanced settings are specified for a portal. You can update any setting as
required. You can also import these advanced settings for a portal from a previous Directory Manager
version. See step 14 in the
[Create a Portal in Native IIS](/docs/directorymanager/11.1/configuration/portal-settings.md#create-a-portal-in-native-iis) topic.

You can manage the following advanced settings for a portal:

- Portal & Search
- Listings Display
- Miscellaneous

## Portal & Search

| Setting                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Portal Logo                                   | Use the default Directory Manager portal logo or a logo of your choice for display in the portal. - Click **Change** to select and upload a logo of your choice. - Click **Reset** to revert to the default logo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Default Startup Page                          | Specify a landing page for the portal. By default, the _Welcome_ page is set as the start page. You can change it to one that your users frequently visit. You can change the start page to any of these pages: - Welcome - My Groups - My Memberships - My Expired Groups - My Expiring Groups - My Deleted Groups - My Smart Groups - My Dynasties - Search - My Profile - My Direct Reports - Change My Password - Reset Password - Request Inbox - My Requests - Link Account - Entitlement - History - Reports - Synchronize NOTE: Individual users can personalize this setting from the Settings panel in the portal.                                                                                                                                                                |
| Search Default                                | Set the default selection in the portal’s _Search Directory_ box, which is available on the _Groups_, _Users_, and _Advanced Search_ pages as well as on the _Find_ dialog box. Options are: - **Global Catalog:** Selecting this option shows “_Entire Directory_” selected in the _Search Directory_ box. Also, expanding the list displays the Entire Directory check box selected instead of the logged-on domain. Select this option when most of the searches that portal users perform are based on the global catalog. - **Domain:** The _Search Directory_ box shows the domain of the identity store the portal is connected to. Users can expand the list to select any other option. NOTE: Individual users can personalize this setting from the Settings panel in the portal. |
| Sort Search                                   | Set the field name (column header) for sorting listings and search results in the portal, such as listings on the All Groups, My Groups, and Users pages, and searches performed using Advanced Search and the Find dialog box. In the **Sort Search** field, specify an attribute to use for sorting listings and search results. By default, the displayName attribute is specified, indicating that listings and search results are sorted by this attribute in ascending order. If you specify an attribute that is not used as a column header in a listing or search results, Directory Manager sorts it on the basis of the default attribute, i.e., _displayName_.                                                                                                                  |
| Find Dialog / Look For                        | Select any or all the **Users**, **Groups**, and **Contacts** check boxes to specify the type of objects that can be searched using the portal’s _Find_ dialog box. You can launch the _Find_ dialog box from multiple portal pages to search for objects to designate as owners, managers, additional owners, members, and more. By default, the _Find_ dialog box searches for all types of objects, including users, contacts, and groups. Use this setting to limit the _Find_ feature to specific object types. For example, select the **Users** check box to limit users to search for the _User_ objects only.                                                                                                                                                                      |
| Request Inbox Page Size                       | Specify a value in the 5 to 1000 range to set the number of workflow request items to display on the portal’s **All Requests**, **My Requests** and **Request Inbox** pages. Setting zero or a negative number displays all workflow requests. By default, these pages display 20 request items at a time. When setting the page size, consider the volume of request traffic generated by your users. Showing all or many workflow requests increases page load time and response time.                                                                                                                                                                                                                                                                                                    |
| Toolbar Default Most Recent Used Object Count | Specify a value in the 1 to 9 range to set the number of most recently used objects to display in the portal’s _quick search_ box. The _quick search_ box is displayed at the top of each page in the portal. Clicking in it displays objects that the logged-on user recently viewed. Clicking an object opens its properties. NOTE: Individual users can personalize this setting from the Settings panel in the portal.                                                                                                                                                                                                                                                                                                                                                                  |
| Default Search Page Size                      | Specify a value in the 5 to 1000 range to set the maximum number of list objects to display on a portal page. Many portal pages display lists of objects. Examples are the **My Groups** and **Users** pages. By default, all list views display 25 objects per page. When setting the page size, consider available network bandwidth and server resources, as the greater the number, the higher the potential for increased page load time and slow response time. NOTE: Individual users can personalize this setting from the **Settings** panel in the portal.                                                                                                                                                                                                                        |
| Autocomplete Quick Search                     | Specify whether to turn on search predictions for the portal’s _quick search_. The _quick search_ box is displayed at the top of every page in the portal. Search predictions are possible search terms related to the term the user is typing as search string. - Enable the toggle button to turn on search predictions for quick search in the portal. The portal will show matched items as users type a search string. - Disable the toggle button to turn off search predictions.                                                                                                                                                                                                                                                                                                     |

## Listings Display

| Setting                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Display Nested Ownership                  | Controls whether to display nested ownership on the portal’s **My Groups** page. It applies to all listings on the page except **My Memberships**. - When the toggle button is disabled, the **My Groups** page displays groups for which the logged-in user is the primary owner, additional owner, or Exchange additional owner. - When enabled, the **My Groups** page also displays groups with nested ownership. Example: the logged-in user is a member of Group A, and Group A is an owner of Group B. When this setting is enabled, the **My Groups** page also shows Group B as the logged-in user is its nested owner. |
| Display Groups in My Groups               | Controls whether to display the groups for which the logged-on user is an additional owner, on the portal’s **My Groups** tab. By default, the tab displays the groups that the logged-on user is the primary owner. Enable this setting to include groups for which the logged-on user is an additional owner.                                                                                                                                                                                                                                                                                                                  |
| Display Groups in My Deleted Groups       | Controls whether to display the deleted groups for which the logged-on user is an additional owner, on the portal’s **My Deleted Groups** tab. By default, the tab displays the groups that the logged-on user is the primary owner. Enable this setting to include deleted groups for which the logged-on user is an additional owner.                                                                                                                                                                                                                                                                                          |
| Display Groups in My Expired Groups       | Controls whether to display the expired groups for which the logged-on user is an additional owner, on the portal’s **My Expired Groups** tab. By default, the tab displays the groups that the logged-on user is the primary owner. Enable this setting to include expired groups for which the logged-on user is an additional owner.                                                                                                                                                                                                                                                                                          |
| Display Groups in My Expiring Groups      | Controls whether to display the expiring groups for which the logged-on user is an additional owner, on the portal’s **My Expiring Groups** tab. By default, the tab displays the groups that the logged-on user is the primary owner. Enable this setting to include expiring groups for which the logged-on user is an additional owner.                                                                                                                                                                                                                                                                                       |
| Display Groups in My Smart Groups         | Controls whether to display the Smart Groups for which the logged-on user is an additional owner, on the portal’s **My Smart Groups** tab. By default, the tab displays the groups that the logged-on user is the primary owner. Enable this setting to include Smart Groups for which the logged-on user is an additional owner.                                                                                                                                                                                                                                                                                                |
| Display Groups in My Dynasties            | Controls whether to display the Dynasties for which the logged-on user is an additional owner, on the portal’s **My Dynasties** tab. By default, the tab displays the Dynasties that the logged-on user is the primary owner. Enable this setting to include Dynasties for which the logged-on user is an additional owner. Note that this setting applies individually to parent, middle, and leaf Dynasties.                                                                                                                                                                                                                   |
| Display Additional Manager Direct Reports | Controls whether to display the direct reports for whom the logged-on user is an additional manager, on the portal’s **My Direct Reports** tab. By default, the tab displays the direct reports that the logged-on user is the primary manager. Enable this setting to include direct reports for whom the logged-on user is an additional manager.                                                                                                                                                                                                                                                                              |

NOTE: Individual users can personalize all except the _Display Nested Ownership_ setting from the
**Settings** panel in the portal.

## Miscellaneous

| Setting               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use Contains Filter   | Controls the filter that the search function on the portal’s _Advanced Search_ page and the _Find_ dialog box should use while searching objects. - By default, the setting is disabled, implying that when a user enters a search string, the portal searches the directory on the “starts with” basis. For example, if a user enters “Sam” in the _First Name_ box on the Advanced Search page, the portal searches the directory for all objects having first names starting with “Sam". - When you enable the setting, it changes the filter to "Contains”, which returns objects with the string "Sam" anywhere in the first name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Hide Help Link        | Controls whether to display the Help icon in the portal. This icon opens the portal help in a new browser window, where portal users can find support content or report their problems. - Enable the setting to display the **Help** icon in the portal. - Disable the setting to hide the **Help** icon. In this case, users will not be able to access the portal’s help pages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Enrollment Reminder   | Controls whether to display a reminder with redirect to the **Enroll My Account** page to unenrolled users when they sign into the portal. Enabling the setting initiates these events: 1. On signing in, the landing page displays an information bar requesting the user to enroll his or her account. (The user can ignore the request.) 2. Clicking the bar redirects the user to the **Enroll My Account** page. Disabling the setting does not display the information bar for account enrollment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Suggest Owner/Manager | Set the portal to suggest owners for orphan groups and managers for users without managers. Enable the setting to allow Directory Manager to suggest a primary owner for an orphan group (on the **Owner** tab in group properties) and a primary manager for a user without one (on the **Organization** tab in user properties). - The manager is suggested with respect to the user’s department (say, User A); if the department is not specified, manager suggestion does not work. Directory Manager checks the primary managers of all users who have the same department as User A, and the user who shows up most as a manager is suggested as User A’s primary manager. - The owner is suggested with respect to the group’s membership; Directory Manager checks the managers of group members and the user who shows up most as a manager is suggested as the group owner. This user may or may not be a member of the group. For example, when 40 members of Group A have User A as their manager and 38 members have User B as manager, User A is suggested as Group A’s primary owner. Disable the setting to turn off the owner/manager suggestion function. |

## Update a Setting

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal**tab, a portal card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Advanced Settings** under **Server Settings**.
4. On the **Advanced Settings** page, navigate to the required setting and update it.

   - To change general portal settings, see the Portal & Search table.
   - To change display settings for groups, see the Listings Display table.
   - To manage other settings, see the Miscellaneous table.

5. Click **Save**.

# Manage Settings for a Docker Deployment

You can manage various settings for a portal instance deployed in Docker.

## Start or Stop an Instance

To start or stop a deployment instance, see the
[Start or Stop an Instance](/docs/directorymanager/11.1/configuration/portal-settings.md#start-or-stop-an-instance) topic.

## View the Deployment Settings for an Instance

While deploying a portal instance in Docker, you have to specify:

- the port for the host machine to map the container to host ports  
  This is the port the application runs on.
- the service URL for communicating with Docker Engine

After instance creation, this info cannot be changed.

**To view the info:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info, including all its instances. You
   can differentiate between a standard Directory Manager portal and a SSPR portal from the portal
   logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**.
4. On the **Deployment Settings** page, click the **Docker** tab.
5. On the **Docker** tab, the **Select Application Deployment** drop-down list displays all
   instances of the portal deployed in Docker.  
   On selecting an instance, it’s port, service URL, and the URL to launch the instance is displayed
   on the **Deployment Configurations** tab.

## Set File Logging and Windows Logging for an Instance

To set file logging and Windows logging levels for a deployment instance, see the
[Manage Log Settings](/docs/directorymanager/11.1/configuration/portal-settings.md) topic.

## Delete an Instance

To delete a portal’s deployment instance, see the
[Delete a Deployment Instance for a Portal](/docs/directorymanager/11.1/configuration/portal-settings.md#delete-a-deployment-instance-for-a-portal)
topic.

# Manage General Server Settings

You can manage general server settings for a portal, such as change its display name, associate
identity stores with it, and view its various deployments.

## Change a Portal's Display Name

A portal is assigned an _application name_ during creation, which is used as it's display name in
Directory Manager. On changing it, the portal is displayed with the new name.

**To change a portal's display name:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info, including its name. You can
   differentiate between a standard Directory Manager portal and a SSPR portal from the portal logo,
   as each portal type has its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. On the **General Settings** page, enter a new name for the portal in the **Application Name**
   box.
4. Click **Save**.

## Associate Identity Stores with a Portal

You must associate one or more identity stores with a portal. When signing into the portal, a user
must select an identity store to connect to, for performing group and identity management operations
for that identity store. Similarly, when signing into the Self-Service Password Reset portal (SSPR),
a user must select an identity store to connect to, for performing password management functions.

**To associate an identity store:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info, including the identity stores
   associated with it. You can differentiate between a standard Directory Manager portal and a SSPR
   portal from the portal logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. The **Identity Stores** area on the **General Settings** page lists the identity stores in
   Directory Manager. It displays the provider type the identity store is created for, and whether
   the identity store is enabled.

   - Select the check box for an identity store to associate it with the portal.
   - Clear the check box for an identity store to dissociate it.

   All instances of this portal serve the identity store(s) you select here.

4. Click **Save.**

NOTE: You may observe the following message on the **Server Settings – General** page:

![linked_message](/img/product_docs/directorymanager/directorymanager/admincenter/portal/linked_message.webp)

It relates to the scenario when identity stores in Directory Manager have been linked, as discussed
in the
[Linked Identity Stores and the Directory Manager Portal](/docs/directorymanager/11.1/configuration/identity-store-linking.md#linked-identity-stores-and-the-directory-manager-portal)
topic. Hence, when two identity stores, IdentityStoreA and IdentityStoreB, are linked and you
associate IdentityStoreA with the portal, this message is displayed. It alerts you to associate the
second identity store in the linked pair (dentityStoreB) with the portal too, in order to benefit
from the linking.

## View the Deployment(s) for a Portal

A portal can have multiple deployments in the same or different web servers. You can update certain
settings for each deployment instance of a portal.

**To view a portal’s deployment instances:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info, including all its deployment
   instances. You can differentiate between a standard Directory Manager portal and a SSPR portal
   from the portal logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**.
4. The **Deployment Settings** page has varying tabs, depending on the deployment instances of the
   portal.

   - The **IIS** tab is available when one or more portal instances are deployed in native IIS.
     Select an instance to view the name of the instance directory in IIS, the IIS site that hosts
     the instance, the URL for the instance, the Data service and Security service associated with
     the instance, and logging levels. See the
     [Manage Settings for a Native IIS Deployment](/docs/directorymanager/11.1/configuration/portal-settings.md) topic for details.
   - The **Remote IIS** tab is available when one or more portal instances are deployed in remote
     IIS. Select an instance to view the Microsoft IIS Administration API URL and access token that
     Directory Manager uses to communicate with the remote IIS server, the credentials used to
     communicate with the API, the site that hosts the instance, the Data service and Security
     service associated with the instance, and logging levels. See the
     [Manage Settings for a Remote IIS Deployment](/docs/directorymanager/11.1/configuration/portal-settings.md) topic for details.
   - The **Docker** tab is available when one or more portal instances are deployed in Docker.
     Select an instance to view the port and Service URL used for deployment. See the
     [Manage Settings for a Docker Deployment](/docs/directorymanager/11.1/configuration/portal-settings.md) topic for details.

# Manage Log Settings

Directory Manager uses Windows logging and file logging to monitor events from a portal. You can set
the logging level for a deployment instance of a portal to track a specific set of information for
it.

To dump the log files to a desired location for easy access, see the
[Get Logs](/docs/directorymanager/11.1/administration/logging.md) topic.

## File Logging

File logging records events for a portal’s deployment instance in a text file. When the file size
reaches 100 MB, Directory Manager archives it in the same directory by replacing the file extension
with the suffix _.Log.X_ and then creating a new text file with the original name. _X_ in _.Log.X_
is a number from 1 to 10 representing the archiving order; where ‘1’ denotes the most recent file.

#### View Log Files

**For a native IIS and remote IIS deployment:**

1. Launch IIS and navigate to:  
   …\Sites\<site that hosts the service/portal instance>\<service/portal instance name>  
   Example:  
   …\Sites\GroupIDSite11\GroupIDPortal
2. Right-click this directory and select **Explore**.
3. Locate the **Logs** folder to read the logs.

## Windows Logging

Windows logging records events from a deployment instance of a portal in a centralized event log
named _Imanami GroupID_. Windows log entries are generated on the machine where IIS is running.

- For portal instances deployed in native IIS, you can view Windows logs in the Windows Event Viewer
  on the Directory Manager server.
- For portal instances deployed in remote IIS, you can view Windows logs in the Windows Event Viewer
  on the remote IIS machine.

The Windows Event Viewer shows a log of application and system messages, including errors,
information messages, and warnings. It is a useful tool for troubleshooting all kinds of Windows
problems.

NOTE: Windows logging is not available for a portal instance deployed in Docker.

#### View Windows Logs

1. On the Directory Manager server/remote IIS machine, type _eventvwr_ in the Run dialog box and
   click **OK** to launch Windows Event Viewer.
2. Click **Applications and Service Logs > Imanami GroupID** in the left pane to view the event logs
   for Directory Manager.

What do you want to do?

- Change the File Logging Level for a Portal Instance
- Turn Off File Logging for a Portal Instance
- Windows Logging
- Turn Off Windows Logging for a Portal Instance

## Change the File Logging Level for a Portal Instance

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info. You can differentiate between a
   standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has
   its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. To set the file logging level for a deployment instance, first select the web server (IIS/Remote
   IIS/Docker) where the instance is deployed. Then select the instance in the **Select Application
   Deployment** drop-down list.
5. Click the **Logging** tab.
6. In the **File Logging** area, select a logging level for the instance in the **Log Events**
   drop-down list. File logging groups events into the following levels, based on the type of
   information captured:

   | Level     | Information Captured                                                                            |
   | --------- | ----------------------------------------------------------------------------------------------- |
   | 1 - All   | Every event involving the portal instance; this is the highest logging level.                   |
   | 2 - Debug | Fine-grained event information that is most useful for debugging the application.               |
   | 3 - Info  | Successful operations of a functionality.                                                       |
   | 4 - Warn  | Events that are not necessarily significant, but that could potentially cause a future problem. |
   | 5 - Error | Errors that might still allow the portal instance to continue running. Default level.           |
   | 6 - Off   | No events captured; turns off file logging.                                                     |

7. Click **Save**.

## Turn Off File Logging for a Portal Instance

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info. You can differentiate between a
   standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has
   its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. To turn off file logging for a deployment instance, first select the web server (IIS/Remote
   IIS/Docker) where the instance is deployed. Then select the instance in the **Select Application
   Deployment** drop-down list.
5. Click the **Logging** tab.
6. In the **File Logging** area, select _Off_ in the **Log Events** drop-down list.
7. Click **Save**.

## Change the Windows Logging Level for a Portal Instance

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info. You can differentiate between a
   standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has
   its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. To set the Windows logging level for a deployment instance, first select the web server (IIS or
   Remote IIS) where the instance is deployed. Then select the instance in the **Select Application
   Deployment** drop-down list.
5. Click the **Logging** tab.
6. In the **Windows Logging** area, select a logging level for the instance in the **Log Events**
   drop-down list.  
   Windows logging groups events into different levels, based on the type of information captured.
   These levels are discussed in the table in the Change the File Logging Level for a Portal
   Instance topic.
7. Click **Save**.

## Turn Off Windows Logging for a Portal Instance

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info. You can differentiate between a
   standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has
   its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. To turn off Windows logging for a deployment instance, first select the web server (IIS/Remote
   IIS/Docker) where the instance is deployed. Then select the instance in the **Select Application
   Deployment** drop-down list.
5. Click the **Logging** tab.
6. In the **Windows Logging** area, select _Off_ in the **Log Events** drop-down list.
7. Click **Save**.

# Manage Settings for a Native IIS Deployment

You can manage various settings for a portal instance deployed in native IIS.

What do you want to do?

- Start or Stop an Instance
- Change the IIS Application Name for an Instance
- Move an Instance under a Different IIS Site
- View the Launch URL for an Instance
- View the Data Service and Security Service Bound to an Instance
- Set File Logging and Windows Logging for an Instance
- Delete an Instance

## Start or Stop an Instance

You can start and stop a portal instance deployed in native IIS, remote IIS, and Docker. When you
stop an instance, the following happens:

- For a native IIS deployment, Directory Manager stops the instance’s application pool.
- For a remote IIS deployment, Directory Manager stops the site that hosts the instance.
- For a Docker deployment, Directory Manager stops the container where the instance is deployed.

**To start or stop an instance:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info, including all its instances. You
   can differentiate between a standard Directory Manager portal and a SSPR portal from the portal
   logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. On the **IIS**, **Remote IIS**, or **Docker** tab, the **Select Application Deployment**
   drop-down list displays the portal instances deployed in the respective web server.  
   Select an instance to start or stop it.

   - When an instance is running, **Stop** is displayed next to it. Click it to stop the instance.
   - When an instance has stopped, **Start** is displayed next to it. Click it to start the
     instance.

## Change the IIS Application Name for an Instance

Each deployment instance of a portal in IIS is assigned an IIS application name to represent that
specific deployment. The name uniquely identifies the deployment in the IIS site and is used to
name:

- The instance’s virtual directory in IIS.
- It’s physical directory under X:\Program Files\Imanami \GroupID 11.0\GroupIDPortal\Inetpub\ on the
  Directory Managerserver  
  (X represents the Directory Manager installation drive)

This name is also appended to the web server address to construct the URL that users click to access
the portal instance. For example:  
`https://web-server-name:port/IIS-application-name`

When you change the name, it propagates to the instance’s IIS directory, physical directory, and
launch URL. You must provide the updated URL to users to enable them to access the portal. See the
[Launch a Portal](/docs/directorymanager/11.1/configuration/portal-settings.md#launch-a-portal) topic.

**To change the IIS application name:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays the portal’s info, including all its
   instances. You can differentiate between a standard Directory Manager portal and a SSPR portal
   from the portal logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. On the **IIS** tab, the **Select Application Deployment** drop-down list displays all portal
   instances deployed in native IIS. Select an instance to change its IIS application name.
5. In the **IIS Application Name** box on the **Deployment Configurations** tab, update the IIS
   deployment name for the instance.
6. Click **Save**.

## Move an Instance under a Different IIS Site

You can change the IIS site that hosts a deployment instance of a portal. In doing so, the URL of
the deployment instance also changes. You must provide the updated URL to your users to enable them
to access the instance. See the [Launch a Portal](/docs/directorymanager/11.1/configuration/portal-settings.md#launch-a-portal) topic.

**To change the site:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info, including all its instances. You
   can differentiate between a standard Directory Manager portal and a SSPR portal from the portal
   logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. On the **IIS** tab, the **Select Application Deployment** drop-down list displays all portal
   instances deployed in native IIS. Select an instance to move its directory under a different IIS
   site.
5. In the **IIS Site** drop-down list on the **Deployment Configurations** tab, select a site to
   move the instance’s directory under it. The list displays the websites defined in native IIS.
6. Click **Save**.

## View the Launch URL for an Instance

Use the URL for a portal's deployment instance to launch the respective instance.

**To view the URL:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info, including all its instances. You
   can differentiate between a standard Directory Manager portal and a SSPR portal from the portal
   logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. On the **IIS**, **Remote IIS**, or **Docker** tab, the **Select Application Deployment**
   drop-down list displays the portal instances deployed in the respective web server. Select an
   instance to view the launch URL for it.
5. The **Launch URL** box on the **Deployment Configurations** tab displays the URL. Copy and paste
   it in the browser to launch the deployment instance of the portal or share it with users to
   enable them to launch the instance.

## View the Data Service and Security Service Bound to an Instance

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info, including all its instances. You
   can differentiate between a standard Directory Manager portal and a SSPR portal from the portal
   logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
4. On the **IIS**, **Remote IIS**, or **Docker** tab, the **Select Application Deployment**
   drop-down list displays the portal instances deployed in the respective web server. Select an
   instance to view the launch URL for it.
5. The **Data Service** and **Security Service** boxes on the **Deployment Configurations** tab
   display the Data service and Security service this portal instance uses.

## Set File Logging and Windows Logging for an Instance

To set file logging and Windows logging levels for a deployment instance, see the
[Manage Log Settings](/docs/directorymanager/11.1/configuration/portal-settings.md) topic.

## Delete an Instance

To delete a portal’s deployment instance, see the
[Delete a Deployment Instance for a Portal](/docs/directorymanager/11.1/configuration/portal-settings.md#delete-a-deployment-instance-for-a-portal)
topic.

# Server Settings

A Directory Manager portal is deployed as a web application on a web server (native IIS, remote IIS,
or Docker). You can manage the following server-related settings for a portal:

- Change a portal’s name (i.e., the application name given to the portal).
- Associate identity stores with a portal.
- Update support information for the portal, i.e., the contact email address and the portal’s help
  URL.
- Specify search-related, group-related, and other advanced settings for a portal.

  NOTE: Advanced settings are available for a standard Directory Manager portal, but not for a
  Self-Service Password Reset portal.

You can also view the deployment details for all instances of a portal and do the following:

- Start or stop an instance.
- Configure Windows logging and file logging for an instance.
- Delete an instance.
- Move a portal instance under a different site in IIS.

NOTE: On changing some of these settings, the portal’s session ends and all connected users are
logged out. When accessed again, the portal runs under the new configurations.

**See Also**

- [Create a Portal](/docs/directorymanager/11.1/configuration/portal-settings.md)
- [Manage General Server Settings](/docs/directorymanager/11.1/configuration/portal-settings.md)
- [Manage Settings for a Native IIS Deployment](/docs/directorymanager/11.1/configuration/portal-settings.md)
- [Manage Settings for a Remote IIS Deployment](/docs/directorymanager/11.1/configuration/portal-settings.md)
- [Manage Settings for a Docker Deployment](/docs/directorymanager/11.1/configuration/portal-settings.md)
- [Manage Log Settings](/docs/directorymanager/11.1/configuration/portal-settings.md)
- [Add Support for a Portal](/docs/directorymanager/11.1/configuration/portal-settings.md)
- [Manage Advanced Settings](/docs/directorymanager/11.1/configuration/portal-settings.md)

# Manage Settings for a Remote IIS Deployment

You can manage various settings for a portal instance deployed in remote IIS.

What do you want to do?

## Start or Stop an Instance

To start or stop a deployment instance, see the
[Start or Stop an Instance](/docs/directorymanager/11.1/configuration/portal-settings.md#start-or-stop-an-instance) topic.

## View the Deployment Settings for an Instance

When creating a portal’s deployment instance in remote IIS, you have to provide info related to the
[Microsoft IIS Administration API](https://learn.microsoft.com/en-us/iis-administration/), such as:

- The API URL that Directory Manager uses for communicating with the remote IIS server
- The access token that Directory Manager uses to access the API
- The credentials used to connect to the API

You also have to provide an IIS application name, select a site to host the portal instance, and
specify the Data service and Security service the instance should use.

Once the instance is created, you can view these settings but you cannot modify them.

To view deployment settings:

1. n Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info, including all its instances. You
   can differentiate between a standard Directory Manager portal and a SSPR portal from the portal
   logo, as each portal type has its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **Deployments** under **Server Settings**; the **Deployment Settings** page is displayed.
   Click the **Remote IIS** tab.
4. On the **Remote IIS** tab, the **Select Application Deployment** drop-down list displays all
   portal instances deployed in remote IIS. Select an instance to view its settings.
5. On the **Deployment Configurations** tab, you can view the API URL, access token, and
   credentials. You can also view the name of the portal application in remote IIS, the site where
   it is hosted, the URL to launch the instance, and the Data service and Security service the
   instance uses. Refer to steps 7-12 in the
   [Create a Portal in Remote IIS](/docs/directorymanager/11.1/configuration/portal-settings.md#create-a-portal-in-remote-iis) topic for a
   description of these fields.

## Set File Logging and Windows Logging for an Instance

To set file logging and Windows logging levels for a deployment instance, see the
[Manage Log Settings](/docs/directorymanager/11.1/configuration/portal-settings.md) topic.

## Delete an Instance

To delete a portal’s deployment instance, see the
[Delete a Deployment Instance for a Portal](/docs/directorymanager/11.1/configuration/portal-settings.md#delete-a-deployment-instance-for-a-portal)
topic.

# Add Support for a Portal

Portals include a **Contact** link and a **Help** icon on their web interface. The **Contact** link
launches an email application to send an email to a user (such as administrator) or group (such as
helpdesk) for inquiries or feedback. The **Help** icon launches the online help for the portal in a
new browser window. Both links are customizable, and their target email address or web address can
be changed.

## Update the Support Email Address

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info. You can differentiate between a
   standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has
   its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **GroupID Support** under **Server Settings**; the **GroupID Support** page is displayed.
4. In the **Support/GroupID Administrator's Email** box, update the email address of the group or
   user responsible for responding to requests and inquiries from portal users.  
   This email address is mapped to the **Contact** link in the portal.
5. Click **Save**.

## Change the Help URL for a Portal

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info. You can differentiate between a
   standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has
   its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **GroupID Support** under **Server Settings**; the **GroupID Support** page is displayed.
4. In the **Help URL** box, update the URL of the portal help pages, where portal users can find
   support content or report their problems. This URL is mapped to the **Help** icon in the portal.
5. Enable the **Netwrix Help** toggle button if the help URL points to the portal help published by
   Netwrix. For Directory Manager, this URL is as:  
   https://helpcenter.netwrix.com/category/directorymanager

   Disable the **Netwrix Help** toggle button if the help URL points to help pages other than
   Netwrix help, such as when it points to your company’s internal help pages.

6. Click **Save**.

## View the Client ID Assigned to a Portal

Every Directory Manager client (such as Management Shell and a Directory Manager portal) is
registered with a unique ID in the database, known as client ID. This client ID is required while
integrating a third-party single sign-on solution that support the SAML standard, into Directory
Manager via any of its clients.

**To view the client ID for a portal:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal card displays its info. You can differentiate between a
   standard Directory Manager portal and a SSPR portal from the portal logo, as each portal type has
   its own logo.
2. Click the ellipsis button for a portal and select **Settings**.
3. Click **GroupID Support** under **Server Settings**; the **GroupID Support** page is displayed.  
   The **Client ID** box displays the client ID assigned to the portal. It is read-only and can be
   copied for use.
