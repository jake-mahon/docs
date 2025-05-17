---
sidebar_position: 7851
title: User, Group, & Application Details Page
---

# User, Group, & Application Details Page

The User, Group, & Application Details page shows additional information on the selected user or group. This page is opened from the link in the user or group column within the various interfaces.

![Users and Groups Details page](../../../../../../../../../static/images/PrivilegeSecure_4.2/Content/Resources/Images/PrivilegeSecure/Admin Guide/UsersGroupsDetailsPage.png "Users and Groups Details page")

The page has the following features:

* Name — Name of the selected user or group
* User Name — Displays the sAMAccountName for the account
* Active Sessions — Displays the number of active sessions for the user or group
* Scheduled Sessions — Displays the number of scheduled sessions for the user or group
* Lock Account — Indicates if the account is not locked. Click the button to lock the account. Accounts can also be locked from the Active Dashboard. An account can also become locked if there are five incorrect login attempts from the user.
* Unlock Account — Indicates if the account is locked. When the account is locked, the user will not be able to create a session. Click the button to unlock the account.
* Reset MFA — Click the button to force the user to reset MFA for Privilege Secure login. Resetting the user's MFA will generate a new TOTP secret for the user to register an authenticator. See [Reset User MFA](../../Window/UsersGroups/ResetMFA "Jump to Reset User MFA page") topic for additional information.

  **NOTE:** This button will not be visible if the present user has their Authentication Connector set to Not Required

The content within the tabs change based on the type of object. See the following topics for additional information:

* User Details:

  * [Sessions Tab](../../Tab/UsersGroups/Sessions "Sessions Tab")
  * [Policies Tab](../../Tab/UsersGroups/Policies "Policies Tab")
  * [Local Rights Tab](../../Tab/UsersGroups/LocalRights "Local Rights Tab")
  * [History Tab](../../Tab/UsersGroups/History "History Tab")
  * [Authentication Connector Tab](../../Tab/UsersGroups/AuthenticationConnector "Authentication Connector Tab")
  * [User Roles Tab](../../Tab/UsersGroups/UserRoles "User Roles Tab")
* Group Details:

  * [Sessions Tab](../../Tab/UsersGroups/Sessions "Sessions Tab")
  * [Members Tab](../../Tab/UsersGroups/Members "Members Tab")
  * [Policies Tab](../../Tab/UsersGroups/Policies "Policies Tab")
  * [History Tab](../../Tab/UsersGroups/History "History Tab")
  * [Authentication Connector Tab](../../Tab/UsersGroups/AuthenticationConnector "Authentication Connector Tab")
  * [Group Roles Tab](../../Tab/UsersGroups/GroupRoles "Group Roles Tab")
* Application Details:

  * [Sessions Tab](../../Tab/UsersGroups/Sessions "Sessions Tab")
  * [Policies Tab](../../Tab/UsersGroups/Policies "Policies Tab")
  * [History Tab](../../Tab/UsersGroups/History "History Tab")
  * [Authentication Tab](../../Tab/UsersGroups/Authentication "Authentication Tab")
  * [Properties Tab](../../Tab/UsersGroups/Properties "Properties Tab")