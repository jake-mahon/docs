---
title: group lifecycle
sidebar_label: group-lifecycle
description: Directory Manager 11.0 documentation for group lifecycle with configuration details, usage instructions, and implementation guidance.
---

# Group Life Cycle Schedule

GroupID enables you to define group lifecycle settings for an identity store (see the
[Manage Group Lifecycle Settings](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
topic). Based on these settings, the Group Lifecycle schedule expires and logically deletes groups
in the identity store on a scheduled basis, keeping your directory clean and preventing group glut.

While creating a Group Lifecycle schedule, you have to specify a job triggering criterion, the
containers the job will process, and notification options.

The Group Lifecycle schedule performs the following main functions:

- Expires and logically delete groups according to their respective expiry policies (see the
  [ Group Expiry and Deletion](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
  topic).
- Sends email notifications to relevant personnel before expiring a group. Also initiates
  notifications for group attestation.
- Extends or reduces the life of mail-enabled distribution groups based on their usage.
- Initiates group attestation for expiring groups.

What do you want to do?

- [Create a Group Life Cycle Schedule](#create-a-group-life-cycle-schedule)

## Create a Group Life Cycle Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click **Add Schedule** and select **Group Life Cycle Job**.  
   The **Create Schedule** page is displayed.
5. In the **Schedule Name** box, enter a name for the schedule.
6. The **Name Preview** box displays the schedule name prefixed with \_Glm\_\_; the schedule is
   displayed with this name in email notifications.
7. Select a GroupID portal URL in the **Portal URL** drop-down list to include it in notifications
   generated for this schedule. Users are redirected to this portal to perform any necessary action.
8. In the **Scheduler Service Name** drop-down list, select a Scheduler service that would be
   responsible for triggering this schedule. The number of services displayed in the list depend on
   the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler
   service. See the
   [Scheduler Service](/docs/directorymanager/11.0/configuration/services/index.md)
   topic.
9. You can specify containers as targets for the schedule. To do so, follow step 9 in the
   [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#create-a-group-usage-service-schedule)
   topic. The schedule will process all groups in the containers and their sub-containers listed in
   the **Target(s)** area in keeping with the Group Lifecycle settings for the identity store.

   NOTE: In Group Lifecycle settings, the administrator can specify container(s) for exclusively
   applying or not applying the Group Life cycle policy. See the
   [Apply Policy on Specific Containers](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md#apply-policy-on-specific-containers)
   topic. With containers specified in the **Target(s)** area, there may be a conflict or
   overlapping of containers, in which case, the Group Lifecycle settings take precedence.

10. Click **Add Triggers** in the **Triggers** area to specify a triggering criterion for the
    schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
    [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#create-a-group-usage-service-schedule)
    topic to manage triggers.
11. Click **Add Authentication** in the **Authentication** area to specify an account for running
    the schedule in the identity store. Follow step 12 in the
    [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#create-a-group-usage-service-schedule)
    topic for details.
12. To set notifications for the schedule, click **Notifications**.

    1. On the **Notifications** dialog box, select the **Send group life extension notification**
       check box to send email notifications to a group’s primary and additional owners when the job
       extends the life of a group, based on group usage settings in the Group Lifecycle policy. For
       group usage settings, see the
       [Enable Group Usage Lifecycle](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md#enable-group-usage-lifecycle)
       topic.
    2. Click **Save**.

13. On the **Create Schedule** page, click **Create Schedule**.
14. On the **Schedules** page, click **Save**.  
    The schedule is displayed under **Group Life Cycle**. See the
    [View the Schedules in an Identity Store ](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#view-the-schedules-in-an-identity-store)
    topic for more info.

See Also

- [Schedules](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)

# Managed By Life Cycle Schedule

The Managed By Life Cycle schedule updates the temporary additional owners for groups and temporary
additional managers for users in an identity store. It performs the following functions:

- Group owners and users with the ‘Manage any Group’ permission in the identity store can set a
  start and end date to:

  - Add an object as a temporary additional owner of a group
  - Remove an additional owner for a temporary period

  The Managed By Life Cycle schedule adds and removes an object as a group’s temporary additional
  owner on the specified dates.

- User managers and users with the ‘Manage any Profile’ permission in the identity store can set a
  start and end date to:

  - Add an object (user or contact) as a temporary additional manager of a user
  - Remove an additional manager for a temporary period

  The Managed By Life Cycle schedule adds and removes an object as the user’s temporary additional
  manager on the specified dates.

Let’s assume that the Managed By Life Cycle schedule is scheduled to run once a week, say Mondays.
If an object is to be added as a group’s temporary additional owner for three days - Wednesday till
Friday, it will not be added. This happens because the Managed By Life Cycle schedule did not run on
the specific days for temporary ownership update. Make sure the schedule is set to run at a
frequency that meets your temporary ownership requirements.

GroupID generates notifications when the Managed By Life Cycle schedule adds or removes temporary
additional owners/managers. See the
[Manage Managed by Life Cycle Notifications](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md#manage-managed-by-life-cycle-notifications)
topic.

What do you want to do?

- [Create a Managed By Life Cycle Schedule](#create-a-managed-by-life-cycle-schedule)

## Create a Managed By Life Cycle Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click **Add Schedule** and select **Managed By Life Cycle Job**. The
   **Create  Schedule** page is displayed.
5. In the **Schedule Name** box, enter a name for the schedule.
6. The **Name Preview** box displays the schedule name prefixed with \_ManagedByLifeCycle\_\_\_; the
   schedule is displayed with this name in email notifications.
7. Select a GroupID portal URL in the **Portal URL** drop-down list to include it in notifications
   generated by the schedule. Users are redirected to this portal to perform any necessary action.
8. In the **Scheduler Service Name** drop-down list, select a Scheduler service that would be
   responsible for triggering this schedule. The number of services displayed in the list depend on
   the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler
   service. See the
   [Scheduler Service](/docs/directorymanager/11.0/configuration/services/index.md)
   topic.
9. You can specify containers as targets for the schedule. The schedule will process all groups in
   the selected containers and sub-containers. To specific containers as target, see step 9 in the
   [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#create-a-group-usage-service-schedule)
   topic.
10. Click **Add Triggers** in the **Triggers** area to specify a triggering criterion for the
    schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
    [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#create-a-group-usage-service-schedule)
    topic to manage triggers.
11. Click **Add Authentication** in the **Authentication** area to specify an account for running
    the schedule in the identity store. Follow step 12 in the
    [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#create-a-group-usage-service-schedule)
    topic for details.
12. On the **Create Schedule** page, click **Create Schedule**.
13. On the **Schedules** page, click **Save**.  
     The schedule is displayed under **Managed By Life Cycle**. See the
    [View the Schedules in an Identity Store ](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#view-the-schedules-in-an-identity-store)
    topic for more info.

See Also

- [Schedules](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)

# Membership Life Cycle Schedule

The Membership Life Cycle schedule updates the temporary membership of groups in an identity store.
It performs the following functions:

- Group owners (primary owner, additional owners, and Exchange additional owners) can set a start
  and end date to:

  - Add an object as a temporary member of a group
  - Remove a member for a temporary period from group membership

  The Membership Life Cycle schedule temporarily adds and removes an object from group membership
  on the specified dates.

- Managers and peers can join and leave a group temporarily on behalf of other users. When the
  Membership Life Cycle schedule runs, it adds and removes those users from group membership on the
  specified dates.
- The Membership Life Cycle schedule executes the Membership Life Cycle policy for the identity
  store. See the
  [Manage Membership Life Cycle Policies](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)
  topic.
- The schedule also removes members when group owners inactivate them during group attestation. See
  the
  [Enable Group Attestation](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md#enable-group-attestation)
  topic.

Let’s assume that the Membership Life Cycle schedule is scheduled to run once a week, say Mondays.
If an object is to be added to group membership for three days - Wednesday till Friday, it will not
be added. This happens because the Membership Life Cycle schedule did not run on the specific days
for temporary membership update. Make sure that the schedule is set to run at a frequency that meets
your temporary membership requirements.

GroupID generates notifications when the Membership Life Cycle schedule adds or removes users from
group membership. See the
[Manage Membership Life Cycle Notifications](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md#manage-membership-life-cycle-notifications)
topic.

What do you want to do?

- [Create a Membership Life Cycle Schedule](#create-a-membership-life-cycle-schedule)

## Create a Membership Life Cycle Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click **Add Schedule** and select **Membership Life Cycle Job**. The
   **Create Schedule** page is displayed.
5. In the **Schedule Name** box, enter a name for the schedule.
6. The **Name Preview** box displays the schedule name prefixed with \_MembershipLifeCycle\_\_; the
   schedule is displayed with this name in email notifications.
7. Select a GroupID portal URL in the **Portal URL** drop-down list to include it in notifications
   generated by the schedule. Users are redirected to this portal to perform any necessary action.
8. In the **Scheduler Service Name** drop-down list, select a Scheduler service that would be
   responsible for triggering this schedule. The number of services displayed in the list depend on
   the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler
   service. See the
   [Scheduler Service](/docs/directorymanager/11.0/configuration/services/index.md)
   topic.
9. You can specify containers as targets for the schedule. The schedule will process all groups in
   these containers and their sub-containers. To specific containers as target, follow step 9 in the
   [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#create-a-group-usage-service-schedule)
   topic.

   NOTE: Membership Lifecycle policies are not applied to OUs specified here. Target OUs and groups
   are set in the respective policy.

10. Click **Add Triggers** in the **Triggers** area to specify a triggering criterion for the
    schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
    [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#create-a-group-usage-service-schedule)
    topic to add triggers.
11. Click **Add Authentication** in the **Authentication** area to specify an account for running
    the schedule in the identity store. Follow step 12 in the
    [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#create-a-group-usage-service-schedule)
    topic for details.
12. On the **Create Schedule** page, click **Create Schedule**.
13. On the **Schedules** page, click **Save**.  
    The schedule is displayed under **Membership Life Cycle**. See the
    [View the Schedules in an Identity Store ](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#view-the-schedules-in-an-identity-store)
    topic for more info.

See Also

- [Schedules](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)

# User Life Cycle Schedule

The User Life Cycle schedule monitors the profile validation process in GroupID. It performs the
following main functions in keeping with the user profile validation settings for an identity store:

- Monitors the profile validation dates of users
- Generates reminder emails
- Disables users who do not validate their profiles within the given period

What do you want to do?

- [Create a User Life Cycle Schedule](#create-a-user-life-cycle-schedule)

## Create a User Life Cycle Schedule

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Schedules** under **Settings** in the left pane.
4. On the **Schedules** page, click **Add Schedule** and select **User Life Cycle Job**. The
   **Create Schedule** page is displayed.
5. In the **Schedule Name** box, enter a name for the schedule.
6. The **Name Preview** box displays the schedule name prefixed with \_UserLifeCycle\_\_; the
   schedule is displayed with this name in email notifications.
7. Select a GroupID portal URL in the **Portal URL** drop-down list to include it in notifications
   generated for the schedule. Users are redirected to this portal to perform any necessary action.
8. In the **Scheduler Service Name** drop-down list, select a Scheduler service that would be
   responsible for triggering this schedule. The number of services displayed in the list depend on
   the number of Elasticsearch clusters in the environment, as each cluster has its own Scheduler
   service. See the
   [Scheduler Service](/docs/directorymanager/11.0/configuration/services/index.md)
   topic.
9. Click **Add Triggers** in the **Triggers** area to specify a triggering criterion for the
   schedule, that, when met, starts the execution of the schedule. Follow step 11 in the
   [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#create-a-group-usage-service-schedule)
   topic to add triggers.
10. Click **Add Authentication** in the **Authentication** area to specify an account for running
    the schedule in the identity store. Follow step 12 in the
    [Create a Group Usage Service Schedule](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#create-a-group-usage-service-schedule)
    topic for details.
11. On the **Create Schedule** page, click **Create Schedule**.
12. On the **Schedules** page, click **Save**.  
    The schedule is displayed under **User Life Cycle**. See the
    [View the Schedules in an Identity Store ](/docs/directorymanager/11.0/administration/admin-center/system-settings.md#view-the-schedules-in-an-identity-store)topic
    for more info.

See Also

- [Schedules](/docs/directorymanager/11.0/administration/admin-center/system-settings.md)
- [Configure User Profile Validation](/docs/directorymanager/11.0/configuration/identity-stores/active-directory.md)

# Expire a Group

This API expires the group whose identity is provided in the endpoint URL.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/{groupIdentity}/Expire?ReplicationRequired=true

## HTTP Method

POST

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](/docs/directorymanager/11.0/automation/apis/rest-api-reference.md)

# Expire Groups

This API expires multiple groups whose identities are provided in the request body.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identityStoreId}/Groups/Expire

## HTTP Method

POST

#### Sample Request Syntax

```
[
"eef9c2ae-32db-401b-b844-6ea6e5f21307",
"8b13bcc7-c51a-4840-a9f5-f1c03bba85d4",
"4ba9f608-8011-4a1d-80eb-777d605ac19e"
]
```

#### Sample Response Syntax

```
{
    "currentDirectoryServer": null,
    "exceptionMessagesAttributeWise": null,
    "data": null,
    "identityStoreObject": null,
    "name": null,
    "errorCode": null,
    "details": [
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        },
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        },
        {
            "currentDirectoryServer": null,
            "exceptionMessagesAttributeWise": null,
            "data": null,
            "identityStoreObject": null,
            "name": null,
            "errorCode": null,
            "details": [
            ],
            "type": 0,
            "message": null,
            "status": 0
        }
    ],
    "type": 0,
    "message": null,
    "status": 0
}
```

See Also

- [Common Errors](/docs/directorymanager/11.0/automation/apis/index.md)
- [Group APIs](/docs/directorymanager/11.0/automation/apis/rest-api-reference.md)

# Get My Expired Groups

This API retrieves the expired groups of the authenticated user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Expired?sortOrder=1&pageNo=1&pageSize=2&displayNestedOwnership=true&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "attributesToLoad": [
    "displayName"
  ]
}
```

#### Sample Response Syntax

```
{
  "total": 1,
  "data": [
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "OU=Groups,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "Expired_demogroup1",
              "identityStoreId": 0
            }
          ],
          "objectClass": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "group",
              "identityStoreId": 0
            }
          ],
          "name": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup1",
              "identityStoreId": 0
            }
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup1",
              "identityStoreId": 0
            }
          ],
          "objectCategory": [
          ]
        },
        "type": null,
        "filePermissionCollection": {
        }
      },
      "objectIdFromIdentityStore": "4ba9f608-8011-4a1d-80eb-777d605ac19e",
      "elasticHitScore": 1.0,
      "objectDisplayName": "Expired_demogroup1",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "group"
    }
  ]
}
```

See Also

- Common Errors
- [User APIs](/docs/directorymanager/11.0/automation/apis/rest-api-reference.md)
- Group APIs

# Get My Expiring Groups

Use this API to retrieve the expiring groups of the authenticated user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Expiring?sortOrder=1&pageNo=1&pageSize=1&displayNestedOwnership=true&displayAdditionalGroups=true&calculateTotal=true&searchMode=0

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "attributesToLoad": [
    "displayName"
  ]
}
```

#### Sample Response Syntax

```
{
  "total": 1,
  "data": [
    {
      "attributesBusinessObject": {
        "attributesCollection": {
          "container": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "OU=Groups,DC=demo,DC=local",
              "identityStoreId": 0
            }
          ],
          "displayName": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup1",
              "identityStoreId": 0
            }
          ],
          "objectClass": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "group",
              "identityStoreId": 0
            }
          ],
          "name": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup1",
              "identityStoreId": 0
            }
          ],
          "CN": [
            {
              "attributeCollection": {
              },
              "action": 0,
              "dn": null,
              "value": "demogroup1",
              "identityStoreId": 0
            }
          ],
          "objectCategory": [
          ]
        },
        "type": null,
        "filePermissionCollection": {
        }
      },
      "objectIdFromIdentityStore": "22409d19-f89c-4c13-81cc-131a212044a7",
      "elasticHitScore": 1.0,
      "objectDisplayName": "demogroup1",
      "stopNotification": false,
      "objectName": null,
      "identityStore": null,
      "identityStoreId": 2,
      "objectType": "group"
    }
  ]
}
```

See Also

- Common Errors
- [User APIs](/docs/directorymanager/11.0/automation/apis/rest-api-reference.md)
- Group APIs

# Get My Expiring Groups Count

This API retrieves the number of expiring groups of the authenticate user.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/IdentityStores/{identitystoreId}/Users/{userIdentity}/Groups/Expiring/count?includeAdditionalOwnershipGroups=true&includeNestedOwnershipGroups=true&searchMode=0

## HTTP Method

GET

#### Sample Request Syntax

```
{
  "includeAdditionalOwnershipGroups": true,
  "includeNestedOwnershipGroups": true
}
```

#### Sample Response Syntax

```
{
  "count": 1
}
```

See Also

- Common Errors
- [User APIs](/docs/directorymanager/11.0/automation/apis/rest-api-reference.md)
- Group APIs

# Expire-Group

The **Expire-Group** commandlet expires a group temporarily. All notifications to the expired group
will be stopped.

You can view events related to this commandlet in GroupID portal, against the **History** node in
the left panel.

## Syntax

```
Expire-Group
-Identity <string[]>
[-IdentityStoreId <int>]
[-SecurityToken <CustomClaimsPrincipal>]
[-Credential <pscredential>]
[<CommonParameters>]
```

## Required Parameter

- Identity

Example:

The following command expires the specified group from the connected identity store.

```
Expire-Group –Identity "CN=Training,OU=Local Recruiting,DC=HR,DC=Imanami,DC=US"
```

See Also

- [All Commands](/docs/directorymanager/11.0/automation/management-shell/getting-started.md)
- [Group Commands](/docs/directorymanager/11.0/automation/management-shell/cmdlet-reference.md)
- [Parameters](/docs/directorymanager/11.0/automation/management-shell/getting-started.md)

# Expired Groups

This page lists expired groups. A group expires when:

- Its validity period, as defined in its expiration policy, ends.

  OR

- The administrator manually designates a group as expired.

Expired groups are locked for all activities until renewed.

You can
[Modify Search Directory](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#modify-search-directory)
to search expired groups and add
[Filter All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#filter-all-groups)
by clicking **Expired Group Grid Filters**. All the expired groups matching the filters will be
displayed.

**See Also**

- [All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)
- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group Expiry](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Join/Leave a Group](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)

# Expiring Groups

This page shows only the expiring groups in the connected identity store.

Groups that will expire in 30 days or less are considered as expiring groups. The expiry date is
calculated from a group’s expiry policy. The Group Lifecycle job is responsible for expiring these
groups on their respective expiry dates; however, you can also manually expire a group before it
reaches the expiry date.

You can
[Modify Search Directory](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#modify-search-directory)
to search expiring groups and add
[Filter All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#filter-all-groups)
by clicking **Expiring Group Grid Filters**. All the expiring groups matching the filters will be
displayed.

**See Also**

- [All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)
- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group Expiry](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Join/Leave a Group](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
- [Working with Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)

# My Deleted Groups

To view a list of deleted groups, click **Groups** on the left navigation pane and select **My
Groups**. On the My Groups page, click the **My Deleted Groups** tab.

The **My Deleted Groups** tab lists the deleted groups that you are the primary owner for. To
include the groups for which you are an additional owner, select the **Display additional group
ownership in My Deleted Groups** check box on the
[Portal Settings](/docs/directorymanager/11.0/user-guide/portal/index.md) panel.

You can
[Modify Search Directory](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#modify-search-directory)
to search deleted groups and add
[Filter All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#filter-all-groups)by
clicking **My Deleted Groups Grid Filters**. All your deleted groups matching the filters will be
displayed.

**See Also**

- [My Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [ Group Deletion](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)

# My Expired Groups

To view a list of your expired groups in the identity store, click **Groups** on the left navigation
pane and select **My Groups**. On the My Groups page, click the **My Expired Groups** tab.

The following events occur when a group expires:

- The group becomes inactive and is locked for all activities.
- "EXPIRED\_" is added as a prefix to the group name.
- A mail-enabled distribution group is mail-disabled, which means that any emails sent to the group
  are bounced back with an expiry message.
- For an Office 365 group, its member list is backed up in the database and cleared from Office 365.
- For a security group, its member list is cleared and any permissions set for that group no longer
  apply. However GroupID keeps a backup of its membership in the database.

All groups that are expired by the Group Lifecycle job are available on the **My Expired Groups**
page. Moreover, when you manually expire a group that has an expiry policy other than ‘Never
expire’, it is also moved to this page.

The Group Lifecycle job is responsible for logically deleting expired groups, but you can also
physically delete a group. See
[ Group Deletion](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md).

By default, the **My Expired Groups** tab lists the groups that you are the primary owner for. To
include the groups for which you are an additional owner, select the **Display additional group
ownership in My Expired Groups** check box on the
[Portal Settings](/docs/directorymanager/11.0/user-guide/portal/index.md) panel.

You can
[Modify Search Directory](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#modify-search-directory)
to search expired groups and add
[Filter All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#filter-all-groups)by
clicking **My Expired Group Grid Filters**. All the expired groups matching the filters will be
displayed.

**See Also**

- [My Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group Expiry](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [ Group Deletion](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)

# My Expiring Groups

To view a list of your expiring groups, click **Groups** on the left navigation pane and select **My
Groups**. On the My Groups page, click the **My Expiring Groups** tab.

Groups that will expire in 30 days or less are considered as expiring groups. The expiry date is
calculated from a group’s expiry policy. The Group Life Cycle job is responsible for expiring these
groups on their respective expiry dates; however, you can also manually expire a group before it
reaches the expiry date.

By default, the tab lists the groups that you are the primary owner for. To include the groups for
which you are an additional owner, select the **Display additional group ownership in My Expiring
Groups** check box on the
[Portal Settings](/docs/directorymanager/11.0/user-guide/portal/index.md) panel.

You can
[Modify Search Directory](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#modify-search-directory)
to search expiring groups and add
[Filter All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#filter-all-groups)by
clicking **My Expiring Group Grid Filters**. All the expiring groups matching the filters will be
displayed.

**See Also**

- [My Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)
- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group Expiry](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [ Group Deletion](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)

# Password Expiry Groups

A password expiry group is a Smart Group whose membership contains users whose identity store
account passwords are approaching their expiry dates. Members of this group are notified by email to
reset their passwords. When they do so, they are automatically removed from the group membership.

On the **Password Expiry Options** tab of the Query Designer, you can define the password expiry
policy for the group. Based on this policy and the users' **PWDLASTSET** attribute, GroupID Portal
creates this group with users whose passwords will soon expire.

You can
[Modify Search Directory](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#modify-search-directory)
to search password expiry groups and add
[Filter All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#filter-all-groups)by
clicking **Password Expiry Group Grid Filters**. All the password expiry groups matching the filters
will be displayed.

**See Also**

- [All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group Expiry](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Join/Leave a Group](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
- [Working with Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)

# General tab

This tab displays the general attributes of the deleted group, such as the group name, last known
parent, creation date, and deletion date.

Use this tab to view attributes of the deleted groups.

This tab displays the following general attributes:

- Name
- Creation Date
- Common Name
- Object GUID
- Last Known Parent
- Deletion Date
- Distinguished Name
- Group Type

**See Also**

- [Deleted Groups](/docs/directorymanager/11.0/user-guide/group-management/group-lifecycle.md)

# Deleted Groups

GroupID Portal handles group deletion as either physical or logical.

## Tombstone Groups

Physically deleted groups have Tombstone as type. Physical group deletion refers to manually
deleting groups using the **Delete** option on the **Actions** menu or shortcut menu. GroupID moves
a physically deleted it to the Recycle Bin while stripping it of most of its properties. You can
delete or restore a group from the Recycle Bin. The restoration process not only restores the group
to its original container, but it also reinstates the home container for the group, if deleted.

When restored, a physically deleted group is restored with limited attributes; its membership is not
restored.

A Smart Group and Dynasty is restored as a static group with no members and no query.

NOTE: Tombstone groups are not available in Microsoft Entra ID.

## Logical Deletion

Groups that are deleted by the Group Lifecycle job are considered to be logically deleted. The job
deletes expired groups X number of days after group expiry, as specified in Group Lifecycle policy
settings.

Upon deletion, logically deleted groups are moved to the Recycle Bin, with all their attributes
intact. As a result, a logically deleted group, when restored, returns to its state it had at the
time of deletion. The restoration process not only restores the group to the container from where it
was deleted but it also reinstates the home container for the group, if deleted.

You can also manually delete a logically deleted group in the Recycle Bin, making it physically
deleted. Simply select the required group and select Delete on the shortcut menu.

## Deletion notifications

When the Group Lifecycle job deletes a group, it notifies the group owners or, if there is no owner,
the default approver specified in the Group Lifecycle policy.

What do you want to do?

- [Modify Search Directory](#modify-search-directory)
- [Filter Deleted Groups](#filter-deleted-groups)
- [Delete a group from Recycle Bin](#delete-a-group-from-recycle-bin)
- [Restore a deleted group](#restore-a-deleted-group)

## Modify Search Directory

You can modify the search results in **Modify Search Directory**. You can select entire directory or
a domain to search deleted groups from.

## Filter Deleted Groups

You can add filters while searching for specific deleted groups from Tombstone or Logically Deleted
Groups.

1. Click **Add Filter** to specify a criterion for filtering deleted groups.
2. From the **Select a Filter** list, select the attribute to filter deleted groups.
3. Two more boxes get displayed next to **Select a Filter** box upon selecting a filter.

   - **Select an Operator** from the first list.
   - Specify a value for the selected operator in the second box.

4. Click **Apply Filter**.

   Deleted Groups that match the specified criterion are displayed.

5. You can add additional filters by clicking **Add Filter**.
6. To undo the filters, click **Reset Filter.** It will remove all the criteria set before.

## Delete a group from Recycle Bin

1. In GroupID Portal, select **Groups > Deleted Groups** from the left pane.
2. From the groups list, select one or more groups.
3. Click **Delete** on the shortcut menu.

The group / groups will be permanently deleted from the recycle bin.

## Restore a deleted group

1. In GroupID Portal, select **Groups > Deleted Groups** from the left pane.
2. From the groups list, select one or more groups.
3. Click **Restore** on the shortcut menu.

The group / groups will be restored in the directory.

NOTE: You can only restore a physically deleted group from the Recycle Bin if the service account
for the connected identity store has the ‘Reanimate Tombstone’ permissions.

NOTE: While all searches in GroupID are catered through Elasticsearch, the Recycle Bin is an
exception, as it fetches data from the directory.

NOTE: The Recycle Bin does not display data for a Microsoft Entra ID based identity store.

**See Also**

- [Create Active Directory Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Create an Active Directory Dynasty](/docs/directorymanager/11.0/user-guide/group-management/dynasties.md)
- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)
