---
title: navigation
sidebar_label: navigation
description: Directory Manager 11.0 documentation for navigation with configuration details, usage instructions, and implementation guidance.
---

# Navigation

On signing into Admin Center, you land on the dashboard.

Use the following to navigate the application:

- [Quick Search](#quick-search)
- [Top Right Options](#top-right-options)
- [Menu Pane](#menu-pane)

## Quick Search

The search box is displayed at the top. Use it to perform a quick search and directly navigate to
different pages of the application. You can search for GroupID settings and configurations, and
directly navigate to your required pages.

When you perform a search, it looks up the following in Admin Center:

- Identity stores - You can use quick links to navigate to different pages in an identity store,
  such as workflows, schedules, and security roles.
- SMS gateway accounts
- GroupID applications - GroupID portals, Data services, Security services, and Mobile services
- Admin Center pages, such as the Replication, Notifications and Licensing pages
- Admin Center functions, such as restore replication, unlock account, etc. Clicking an action
  redirects you to the relevant page.

**To perform a search:**

1. In Admin Center, enter a search string in the Search box at the top of the page.  
   A list of matched items is displayed as you type. For example, as you type ‘ta’, it shows:

   ![quick_search](/img/versioned_docs/directorymanager_11.0/directorymanager/admincenter/general/quick_search.webp)

2. On clicking **Quick Actions** for an identity store, it displays the settings available for the
   identity store. Click an option to navigate to it.

## Top Right Options

The top right corner of the application displays the following:

| Icon             | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Help icon        | Click it to launch Admin Center help.                                                                                                                                                                                                                                                                                                              |
| Manage SAML icon | Click it to launch the Authenticate panel, where you can: - Set up GroupID as a service provider. GroupID can integrate with several single sign-on (SSO) solutions that support the SAML 2.0 standard. - Set up GroupID as an identity provider. See the [Authenticate](/docs/directorymanager/11.0/configuration/authentication/index.md) topic. |
| Profile icon     | Displays your profile picture with your name and the identity store that Admin Center is connected to. Click it to launch a menu that displays the GroupID version and the security role assigned to you in GroupID. The menu also displays options to change your password, access your applications, and sign out of Admin Center.               |

## Menu Pane

The menu pane in the left enables you to navigate to different functions in Admin Center.

| Menu Option         | Description                                                                                                                                                                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dashboard           | Displays the latest values for GroupID KPIs.                                                                                                                                                                                                                                |
| Identity Stores     | Displays the identity stores defined in GroupID. You can: - Create identity stores - Manage the security roles and settings for an identity store - Link identity stores                                                                                                    |
| Data Sources        | Enables you to create and manage data sources to be used as source and destination in Synchronize jobs, in query-based searches, and in group membership queries.                                                                                                           |
| Replication         | Controls global replication settings that apply to all identity stores.                                                                                                                                                                                                     |
| Notifications       | Displays the queued notifications for all identity stores. It also provides access to the Notification Editor.                                                                                                                                                              |
| Helpdesk            | Enables helpdesk users to perform password reset, account unlock, and account unenroll operations for identity store users.                                                                                                                                                 |
| Applications        | Enables you to create GroupID applications, namely: - GroupID portal - Data service - Security service - Mobile service (for the GroupID mobile app) You can also manage the following: - Admin Center deployment - Replication service - Email service - Scheduler service |
| History             | Displays history for major actions performed in Admin Center, such as identity store creation, changes to notification templates, and more.                                                                                                                                 |
| SMS Gateways        | Allows you to create SMS gateway accounts that GroupID uses to send text messages to the users’ mobile numbers.                                                                                                                                                             |
| Notification Editor | Lists templates for GroupID-generated notifications. These templates apply to all identity stores.                                                                                                                                                                          |
| Settings            | Lets you manage the following: - GroupID licensing - Global pool of security questions - GroupID logs                                                                                                                                                                       |

**See Also**

- [Dashboard](/docs/directorymanager/11.0/administration/admin-center/index.md)
- [Change your Password](/docs/directorymanager/11.0/administration/admin-center/index.md)
- [Switch Accounts](/docs/directorymanager/11.0/administration/admin-center/index.md)
- [Access your Applications](/docs/directorymanager/11.0/administration/admin-center/index.md)

# Find Dialog Box

This dialog box enables you to search **User**, **Group**, and **Contact** objects in the connected
identity store.

The object types available for search may vary, depending on the page you launch the **Find** dialog
box from.

1. From the **Look For** list, select one or more object types that you want to search for.

   - **Users** - to search for users only.
   - **Groups** - to search for groups only.
   - **Contacts** - to search for contacts only.

2. The **Search In** list shows all organizational units or containers in the connected identity
   store. Select the check boxes for the required containers to search in. To search all containers,
   select the **Entire Directory** check box.
3. In the **Search** box, type a search parameter. Below are some tips to get the best out of your
   searching:

   - You can type the complete string as a search parameter.

     For example, you can type **Administrator** in this box to find all objects with the display
     name '_Administrator'_.

   - You can type a part of the string as a search parameter.

     For example, you can type **Ad** in this box to find all objects with the display name
     beginning with '_Ad'_.

   - You can use wildcard search if you do not remember the exact search criteria.

     For example, you can type **\*** in this box to find all objects with any display name or
     you can type **\*d** in this box to find all objects containing '_d'_ anywhere in their
     display name.

4. Click the **Advanced Search** link to display additional search fields (such as description,
   first name, last name, and company) to search for objects using attributes other than the
   object's display name.

   NOTE: The fields available for Advanced Search may vary, depending on the portal's
   configuration.

5. Click the **Search** button to display the search results.
6. The **Search Results** section displays a list of objects matching the search criteria.

   From the search results, select the required objects and click the right-arrow to move them to
   the **Selected Results** list.

7. The **Selected Results** section displays the objects that you have selected from the **Search
   Results** list.

   Click the left-arrow to move the selected objects from the **Selected Results** list to the
   **Search Results** list.

**See Also**

- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)

# Query Based Advanced Search

GroupID portal enables you to search directory objects (users, mailboxes, contacts, groups) in the
identity store based on a query. You can create queries and save them for later directory objects
searches.

The Query Designer option on the Advanced Search page is available which presents you the
[Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md) dialog
box similar to the query designer dialog box used for creating queries for Smart Groups and
Dynasties.

**In Linked mode**: Query based searches cannot be performed.

What do you want to do?

- [Create a query](#create-a-query)
- [Preview query results](#preview-query-results)
- [Execute a query](#execute-a-query)
- [Modify a query](#modify-a-query)
- [Delete a query](#delete-a-query)

## Create a query

The Query Designer dialog box provides you a visual interface for creating search queries.

1. Click **Advanced Search** at the top.
2. On the **Advanced Search** page, click **Or use the new query based search** link.

   The **Queries** page is displayed.

   NOTE: If you are creating a search query for the first time the **Query Designer** dialog box
   opens automatically.

3. Click **Query Designer** to create queries to search directory objects.
4. Select an option from the
   [Query Designer - General tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
   list to specify the type of object the query should fetch.
5. You must specify the containers that the query should search for retrieving the directory
   objects.

   Click the **Start in** button and select a container on the Select Container dialog box. The
   query would search for objects only in this container and its sub-containers.

6. The **Query Designer** dialog box groups similar query options by tabs.

   1. **General tab**: lets you select object categories that you want the query to search in. The
      available options vary according to the object type selected in the **Find** list. See the
      [Query Designer - General tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
      topic.
   2. **Storage tab**: lets you filter the mailboxes to return. See the
      [Query Designer - Storage tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
      topic.
   3. **Filter Criteria tab**: lets you add additional filter criteria. For example, you can add
      criteria to retrieve all directory users who live in Houston and have a fax number. You can
      also apply logical operators (AND, OR) to your custom query to achieve the most accurate
      results.

      The condition list may vary while creating queries for object searches. See the
      [Query Designer - Filter Criteria tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
      topic.

   4. **Include/Exclude tab:** lets you include or exclude objects regardless of whether they are
      returned by the query or not. Use the Add and Remove buttons to add and remove objects in the
      Include and Exclude sections respectively. See the
      [Query Designer - Include/Exclude tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
      topic.
   5. **Database tab**: enables you to combine an external data source with the directory to search
      directory objects. See the
      [Query Designer - Database tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
      topic.

7. Click the **LDAP Query** button to view the query generated from the settings you have entered so
   far.
8. In the **Query name** box, type a name for the query.
9. Select the **Global Query** check box, if you want to share this query with other users in the
   connected identity store.
10. Click the **Save Query** button to save the query.

## Preview query results

Use the **Preview** button to preview query results obtained with the current settings on all tabs
of the Query Designer dialog box. This is a check to ensure the accuracy of data before changes are
committed to the directory.

On clicking it, results are displayed in the **Preview Results** pane, that appear at the bottom of
the dialog box.

## Execute a query

To execute the query, click the **Run** arrow. It will display all the results matching the search
criteria.

## Modify a query

To modify the query, click the **Edit** button. It will open the query designer where you can apply
changes to the search query.

## Delete a query

To delete a query, click the **Delete** icon. The query will be removed from the saved queries list.

**See Also**

- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)

# Directory Search

Using the GroupID portal, you can search and manage different directory objects (users, groups,
contacts and mailboxes).

NOTE: The contact object type is not supported in a Microsoft Entra ID based identity store.

What do you want to do?

- [Search directory objects (Quick Search)](#search-directory-objects-quick-search)
- [Search directory objects (Advanced Search)](#search-directory-objects-advanced-search)
- [Search directory objects (Query Based Advanced Search)](#search-directory-objects-query-based-advanced-search)
- [View Search Results](#view-search-results)

## Search directory objects (Quick Search)

Use Quick Search to quickly locate objects in the identity store. You can search the entire
directory or specific OU(s) within the directory, depending on search permissions granted to your
role in the identity store.

1. In the Quick Search box in the top-of the page, enter the display name, first name, or email
   address of an object to search for it.

   A list of matched objects is displayed as you type the search string.

2. Select your required object or click magnifying glass icon.

   Matches are displayed on the **Search Results** page.

NOTE: Display name, first name and email address are the default schema attributes for Quick Search.
If the GroupID administrator specifies different attributes, you will not get the desired results
when you perform a search with the display name, first name or email address.

## Search directory objects (Advanced Search)

Use the portal's Advanced Search to search for directory objects (users, mailboxes, contacts,
groups) in the identity store. You can search the entire directory or specific OU(s) within the
directory, depending on search permissions granted to your role in the identity store.

Multiple filters are available to search for objects. You can use them individually or in
combination to get the most appropriate search results.

NOTE: In portal's linked mode, you cannot search contacts in linked Azure / Google Workspace /
Generic LDAP store as contact object is not available in these providers.

1. Click **Advanced Search** at the top. The **Advanced Search** page is displayed.
2. In the **Search** box:

   In **Stand-alone** mode: select the check boxes for the entire directory or the OUs that you
   want to search in. You can also specify the default search OUs using the **Domains to Search**
   setting on the User Settings panel.

   NOTE: In **Linked** mode: the **Search** and the **Domains to Search** boxes will list all the
   domains of the linked identity stores. You can select domain(s) or OUs you want to search in.

3. In the **Objects** box, select the objects (User, mailboxes, contact, group) you want to search
   for.

   In **Linked** mode: If you log into the portal with an AD primary store, you can search a
   contact object and if you log in with any of the other providers i.e., Microsoft Entra ID,
   Google Workspace or Generic LDAP, you cannot search as they do not support the contact object
   type.

4. Enter search criteria as needed:

   - Type the display name, first name, last name, title, alias, company, department, office,
     and/or city of an object to search for it.
   - You can select a custom attribute from the **Select a field** list and type a search string in
     the box next to the list.

5. Click **Search**.

   Objects matching the search criteria are displayed on the **Search Results** page.

## Search directory objects (Query Based Advanced Search)

GroupID portal enables you to search directory objects (users, mailboxes, contacts, groups) in the
identity store based on a query. See the
[Query Based Advanced Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
topic.

NOTE: In portal's linked mode, you cannot search contacts in linked Azure / Google Workspace /
Generic LDAP store as contact object is not available in these providers.

## View Search Results

On performing a search, all objects matching your filter criteria are displayed on the **Search
Results** page.

The **Modify Search Directory** box in:

- **Stand-alone** mode: displays Entire Directory option. You can select a specific child domain or
  particular OUs to view search results from.

- **linked** mode: lists all domains of the linked identity stores. You can select domain(s) or OUs
  to view the search result from.

The page has multiple tabs, namely:

- **All**: displays all objects that match the search criterion.
- **Groups**: displays groups that match the search criterion.
- **Users**: displays users and mailboxes that match the search criterion.
- **Contacts**: displays contacts that match the search criterion.

The Search **Results** page displays results against the following columns:

- Type
- Display name
- Department
- Office
- Business
- Email

If portal is running in the Linked mode, the **Identity Store** column is displayed. It displays the
name of the identity store in which the object resides.

**Important**: For performing searches in customized portal using the Linked mode, it is important
that customized portal fields, which are used while creating filter expressions for use and group
objects, are bind with similar attributes of stores. Otherwise, GroupID will not be able to linked
identities.

You can perform multiple actions on objects. See the
[Toolbar](/docs/directorymanager/11.0/user-guide/portal/navigation.md) topic.

To move through search results, use the page numbers given at the bottom of the listing. You can
also control the number of results per page by modifying the **Search results per page** setting on
the User Settings panel.

See Also

- [Portal Settings](/docs/directorymanager/11.0/user-guide/portal/index.md)

# Toolbar

Use the toolbar to perform different actions on the portal pages. Buttons on the toolbar vary,
depending on the page you are on. Toolbar buttons are listed in the following table.

| Button                                                                                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![expire](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/expire.webp)               | The behavior of this button depends on the expiry policy of the selected group. - When the group has its expiry policy set to ‘never expire’, clicking this button displays an error message that the group cannot be expired. - When the group has an expiry policy other than ‘never expire’, clicking this button expires the group and moves it to the My Expired Groups page. - A group without an expiry policy will not expire. Directory groups that are created outside of GroupID do not have an expiry policy.                                                                                                                                           |
| ![properties](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/properties.webp)       | View the properties of the selected object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ![update](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/update.webp)               | Use this button to manually update a Smart Group. On clicking it, a dialog box is displayed, that shows the progress of the Smart Group Update job. To run this job in the background, click the **Run in Background** buttons. Use the **Background Tasks** icon in the top right corner to view the status of the Smart Group Update jobs.                                                                                                                                                                                                                                                                                                                        |
| ![join](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/join.webp)                   | The logged-on user can use this button to join group(s). 1. Click the arrow and select one of the following: - **Join perpetually**- to join the selected group(s) permanently. - **Join temporarily** - to join the selected group(s) for a specified period. At the end of the period, you are automatically removed from the group membership. 2. Click the **Join** button. The **Other** option is visible to users who have the ‘Manage my Direct Reports’ or ‘Join/Leave on behalf of Peer’ permission or both in the identity store. It enables the logged-on user to join a group permanently or temporarily on behalf of a direct report or peer.         |
| ![leave](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/leave.webp)                 | The logged-on user can use this button to leave group(s). 1. Click the arrow and select one of the following: - **Leave perpetually**- to leave the selected group(s) permanently. - **Leave temporarily** - to leave the selected group(s) for a specified period. At the end of the period, you are automatically added back to the group membership. 2. Click the **Leave** button. The **Other** option is visible to users who have the ‘Manage my Direct Reports’ or ‘Join/Leave on behalf of Peer’ permission or both in the identity store. It enables the logged-on user to leave a group permanently or temporarily on behalf of a direct report or peer. |
| ![managedby](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/managedby.webp)         | View the groups managed by the selected object, i.e., the groups for which the selected object is a primary or additional owner.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ![addtogroup](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/addtogroup.webp)       | Adds the selected objects to the membership of one or more groups. Click the button to search for groups to add the selected objects to.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ![exportresult](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/exportresult.webp)   | Exports the displayed object list to a Microsoft Excel file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ![addtocontacts](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/addtocontacts.webp) | Creates a vCard file for the selected object and prompts you to save it on your machine. You can then use it to add the group's email address to your email contact list. This feature requires a program registered for the vCard MIME type, such as Microsoft Outlook or Microsoft Outlook Express.                                                                                                                                                                                                                                                                                                                                                               |
| ![sendemail](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/sendemail.webp)         | Sends an email to the selected object(s). Clicking this button launches the default Windows email application for sending email.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ![renew](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/renew.webp)                 | Renews the selected groups by re-applying the expiration policy of the group, starting from today.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ![attesticon](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/attesticon.webp)       | Verify and validate a group's attributes and membership; then renew the group by re-applying its expiration policy, starting from today.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ![delete](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/delete.webp)               | Deletes the selected users and contacts. For groups, it physically deletes expired and logically deleted groups. Physically deleted groups are not available in the portal anymore. It does not delete groups with a valid expiry policy.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ![save](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/save.webp)                   | Saves your changes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ![import](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/import.webp)               | Add members or additional owners to a group using an external file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ![export](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/export.webp)               | Export members or additional owners of a group to an external file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ![movegroup](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/movegroup.webp)         | Move groups from one container to another.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ![setowner](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/setowner.webp)           | Set owner for a group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ![securitytype](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/securitytype.webp)   | Set security type of a group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ![expiration](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/expiration.webp)       | Set the expiration policy of a group.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ![resetpassword](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/resetpassword.webp) | Reset password for a user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ![heirarchy](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/heirarchy.webp)         | View the organizational hierarchy chart of a user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ![validate](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/validate.webp)           | Verify and update your profile information.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ![subscribe](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/subscribe.webp)         | Subscribe to the Teams channel. NOTE: Only non MFA Entra ID users can subscribe to the Teams channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ![unsubscribe](/img/versioned_docs/directorymanager_11.0/directorymanager/portal/unsubscribe.webp)     | Unsubscribe from the Team channel.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

**See Also**

- [Working with Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
