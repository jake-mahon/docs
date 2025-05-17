---
sidebar_position: 1232
title: Request Entitlement Assignment
---

# Request Entitlement Assignment

How to send a manual request to add, update or remove an entitlement for an identity.

## Overview

Changes in an identity's entitlements can be handled using Identity Manager's predefined workflows to:

* View the list of the identity's [Request Entitlement Assignment](#) with Identity Manager's suggestions according to the identity's position;
* Modify the identity's [Request Entitlement Assignment](#) (add, update, remove).

## Participants and Artifacts

An assignment can be requested for a user sometimes by said user themselves, most often by their manager, and on some occasions by the involved application owner.

| Input | Output |
| --- | --- |
| [Create the Workforce Repository](../../set-up/initial-identities-loading/index "Create the Workforce Repository") (required) [Create Roles in the Role Catalog](../../set-up/single-roles-catalog-creation/index) (required) | Updated entitlements |

## View Identity's Entitlements

View the identity's entitlements by proceeding as follows:

1. Access the user directory from the home page.

   ![Home Page - Directory User](../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Home_directoryUser_V523.png)
2. Click on the user to be checked.

   ![Workflow - User](../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/DataModif_User_V602.png)
3. Click on **View Permissions** to access the entitlement list.

   ![View Permissions Tab](../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/ViewPermissions_V602.png)

## Modify Identity's Entitlements

Act on an existing identity by proceeding as follows:

1. Access the user directory from the home page.

   ![Home Page - Directory User](../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Home_directoryUser_V523.png)
2. Click on the user to be modified.

   ![Workflow - User](../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/DataModif_User_V602.png)
3. Click on **Actions** > **Modify Permissions** to launch the workflow for a manual entitlement request.

   ![Workflow - Modify Permissions](../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/DataModif_changeUser_V602.png)
4. Follow the workflow's instructions to select entitlements and the action to be performed. You can:

   * select entitlements to add;
   * modify the potential options of the entitlements you are adding;
   * delete entitlements which were assigned or declined manually;
   * deny entitlements which were assigned automatically;
   * allow denied entitlements by assigning them back manually.

   :::note
If the request is about assigning an entitlement via a role which requires at least one approval, then sending the request triggers the display of said request on the Role Review screen.
   
   In this case, the requested entitlement will be displayed in the user's \*\*View Permissions\*\* tab only after the request is reviewed.
   :::

## Verify Entitlement Request

In order to verify the process, check that the change you made in the user's entitlements is displayed in their **View Permissions** tab in the directory.

![Home Page - Directory User](../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Home_directoryUser_V523.png)

![View Permissions Tab](../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/ViewPermissions_V602.png)