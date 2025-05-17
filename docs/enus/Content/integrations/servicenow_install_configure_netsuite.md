---
sidebar_position: 1405
title: Installing ServiceNow in NetSuite
---

# Installing ServiceNow in NetSuite

## Install NetSuite Bundle

1. Open **Customization** > **SuiteBundler** > **Search & Install Bundles**
2. Search for bundle id **311232**
3. Click on bundle name **ServiceNow Integration**
4. When the **Bundle Details** opens, click **Install**.

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNowInstall2.png)
5. When **Preview Bundle** opens, review the bundle and click **Install** to finish.
6. Open **Strongpoint** > **Strongpoint Support** > **Installation Settings** > **View**
7. Open the **ServiceNow Integration** tab.
8. If the **Service Now URL** is not present:

   1. Click **Edit**.
   2. Add the url. The format is: *https://dev67367.service-now.com/*
   3. Click **Save**.

### Install ServiceNow

1. Open **Connections & Credentials** > **Credentials**.
2. Click **New**.
3. Select **Basic Auth Credentials**.

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNow_credentials_record.png "Create a Credentials Record")
4. Enter the user credentials:  
   **User Name**: **sp-integrations**  
   **Password**: Contact your Customer Success Manager to receive the password.  
   Click **Submit** when complete.
5. Open **System Applications** > **Studio** or enter **Studio** in the Menu Search box.

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNowInstall4.png)
6. If a pop-up window appears, click **Import From Source Control**.

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNowInstall5.png)
     
    Otherwise, open **File** > **Import From Source Control**.  
   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNowInstall6.png)
7. Enter the required information:
     
   **URL**: *[https://github.com/StrongpointGit/strongpoint-ns-ssn.git](https://github.com/StrongpointGit/strongpoint-ns-ssn.git "Install and Configure ServiceNow in NetSuite")*  
   **Credential**: Select your credential from the drop down list  
   **User Name**: sp-integrations
     
   **Branch**: master

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNowInstall7.png)
8. Click **Import**. You see the **Strongpoint NetSuite Integration**.

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNowInstall7-2.png "Select Strongpoint NetSuite Integration")
9. Click **Strongpoint NetSuite Integration** to open the Application Explorer. You use this for the **Configure ServiceNow** procedure.
10. In NetSuite, open **Strongpoint** > **Strongpoint Support** > **Installation Settings**
11. Click **Edit**.
12. Open the **ServiceNow Integration** tab and enter your credentials.
13. **Save** your credentials.

### Configure ServiceNow

You can configure ServiceNow for your users:

> [Display Action Buttons Only for Specific Conditions](#Action)
>
> [Display Push Deployment Record Only Based on State](#PushDeploy)
>
> [Display Strongpoint NetSuite Tab for Selected Users](#Tab)

#### Display Action Buttons Only for Specific Conditions

You can set conditions on NetSuite integration buttons to control when they are displayed on specific change records. If you use ServiceNow, you can set Configuration Items to manage change requests for different platforms, projects or products.

:::note
You need to know the IDs of the configuration items to set conditions. Ask your ServiceNow administrator for help.
:::

1. In the ServiceNow Application Explorer for the NetSuite Integration, open **Server Development** > **UI Action** > **Select Account**

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNowInstall8.png)
     
   To open the Application Explorer, open **System Applications** > **Studio** and select **Strongpoint NetSuite Integration**
2. Set the **Condition** field to restrict display based on specific configuration items. If your company uses a different solution to identify changes for the NetSuite platform, contact your ServiceNow administrator to help determine the conditions to be set. In this example, we set the condition to be:   
   **current.cmdb\_ci == 'configuration\_item\_sys\_id'**

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNowInstall9.png)
3. Click **Update**.
4. Repeat these steps to complete the setup on the other UI Actions: **ERD**, **Push Deployment Record**, **Select Customizations** and **View Impact Analysis**.

#### Display Push Deployment Record Only Based on State

This is an example procedure to display the **Push Deployment Record** button once a change request has passed the **Authorize** state. Your organization may have a different approval process.

:::note
You can set any other stage (standard or custom) depending on your approval processes. If you need help to determine the correct conditions per your customizations, please contact your Service Now Administrator.
:::

1. In ServiceNow, open **System Applications** > **Studio**
2. Select **Strongpoint NetSuite Integration**.
3. Open **Server Development** > **UI Action** > **Push Deployment Record**
4. Set **Condition** to **current.state > -3**

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNowInstall10.png)
     
    If you set action button conditions in the [Display Action Buttons Only for Specific Conditions](#Action "Install and Configure ServiceNow in NetSuite") procedure, add this condition to the existing ones. For example,  
   **current.cmdb\_ci == 'configuration\_item\_sys\_id' && current.state > -3**
5. Click **Update**.

#### Display Strongpoint NetSuite Tab for Selected Users

By default, all user can see the Strongpoint NetSuite tab in ServiceNow Change Requests. You can modify this to only allow configured users to see the tab.

![](../../../../static/images/enus/Content/Resources/Images/ServiceNow_tab.png "Strongpoint NetSuite tab")

1. Log in to ServiceNow as an administrator to manage your instance.
2. Obtain the system identifiers for each user you want to have access to the Strongpoint NetSuite tab:

   1. Filter for **configuration**
   2. Open **Base Items** > **Computers**

      ![](../../../../static/images/enus/Content/Resources/Images/ServiceNow_tab1.png "Open the ServiceNow Configuration items")
   3. Select the system for the user to grant access to the tab.
   4. Select **Copy sys\_id** from the drop down menu.

      ![](../../../../static/images/enus/Content/Resources/Images/ServiceNow_tab2.png "Select Copy sys_id from the drop down menu")
   5. Paste the identifier in a file where you can access it to add to the script when you are finished locating the system identifiers. An example identifer is *b4fd7c8437201000deeabfc8bcbe5dc1*
3. Filter for **Studio**
4. Select **Strongpoint NetSuite Integration**.
5. Open **Client Development** > **Client Scripts** > **Strongpoint Initialize**

   ![](../../../../static/images/enus/Content/Resources/Images/ServiceNow_tab3.png "Open the Strongpoint Initialize Script")
6. Add all of your copied System Identifiers to the **allowedCIs**. Separate multiple IDs with a comma (,). For example:  
   `var allowedCIs = ['fe1cc02c735423002728660c4cf6a7dc','b4fd7c8437201000deeabfc8bcbe5dc1'];`
7. Click **Update**.