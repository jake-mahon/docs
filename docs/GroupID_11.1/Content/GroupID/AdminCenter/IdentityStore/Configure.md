---
sidebar_position: 7281
title: Configure an Identity Store
---

# Configure an Identity Store

Various configurations can be defined for an identity store.

**To manage configurations:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select **Edit**.
3. You can configure the following for an identity store:

   * [Identity Store-specific Configurations](#Configurations "Identity Store-specific Configurations")
   * [Security Roles](#Roles "Security Roles")
   * [Replication Settings](#Settings "Replication Settings")
   * [Identity Store History](#History "Identity Store History")
   * [Workflows](#Workflows "Workflows")
   * [Entitlements](#Entitlements "Entitlements")
   * [Schedules](#Jobs "Schedules")

## Identity Store-specific Configurations

The following configurations have to be defined for an identity store:

* An SMTP server for sending email notifications. See the [Configure an SMTP Server](Configure/SMTPServer "Configure an SMTP Server") topic.
* Authentication types and policies. See the [Authentication Policy](Configure/AuthPolicy "Authentication Policy")
  topic.
* A group life cycle policy that controls the expiry and deletion of groups in the identity store.
  See the [Manage Group Lifecycle Settings](Configure/DirectoryService/GroupLifecycle "Manage Group Lifecycle Settings") topic.
* Membership life cycle policies for static groups.
  See the [Manage Membership Life Cycle Policies](Configure/DirectoryService/MembershipLifecycle "Manage Membership Life Cycle Policies") topic.
* Inheritance settings for Dynasties. See the [Manage Dynasty Settings](Configure/DirectoryService/DynastySettings "Manage Dynasty Settings") topic.
* Group update and membership settings. See the [Manage Group Membership Settings](Configure/DirectoryService/OutOfBounds "Manage Group Membership Settings") topic.
* Group name prefixes, which are used to append group names.
  See the [Group Name Prefixes](Configure/DirectoryService/Prefixes "Set Group Name Prefixes") topic.
* Settings for history tracking.
  See the [Configure History Tracking](Configure/DirectoryService/HistoryTracking "Configure History Tracking") topic.
* A messaging provider so that mail-enabled objects can be created in the identity store.
  See the [Configure a Messaging Provider](Configure/DirectoryService/MessagingProvider "Configure a Messaging Provider") topic.
* Profile validation settings to ensure the accuracy of users’ information in the directory.
  See the [Configure User Profile Validation](Configure/DirectoryService/ProfileValidation "Configure User Profile Validation") topic.
* Circular reference settings for object update. See the [Manage Circular Reference](Configure/DirectoryService/CircularReference "Manage Circular Reference") topic.
* Password restrictions and rules
  for setting identity store passwords. See the [Configure Password Options](Configure/Security/PasswordOptions "Configure Password Options")
  topic.

## Security Roles

An identity store has security roles defined for it, and only role members can access Directory Manager. See the [Security Roles](../SecurityRole/Overview "Security Roles") topic.

You can specify the following configurations for a role:

* Assign permissions on different Directory Manager functions.
  See the [Security Role – Permissions](../SecurityRole/Permissions "Security Role – Permissions") topic.
* Specify policies for roles. See the [Security Role Policies](../SecurityRole/Policy/Overview "Security Role Policies") topic.

## Replication Settings

The Replication service is responsible for replicating objects that are created or modified directly on the directory server, to the Elasticsearch repository. You can specify the attributes for the Replication Service to replicate from the provider to the Elasticsearch repository.

See the [Manage Local Replication Settings](Replication "Manage Local Replication Settings") topic for details.

## Identity Store History

You can view the changes made to an identity store’s configurations, workflows, and security roles in an identity store. See the [Identity Store History](History/View "Identity Store History") topic.

## Workflows

Workflows are a built-in auditing system to ensure that changes made to directory objects are approved by an authorized user before they are committed
to the directory.

You can define different workflows for an identity store. For example, you can define a workflow that triggers when a user creates a group in the directory using Directory Manager. See the [Workflows](../Workflow/Overview "Workflows") topic for details.

## Entitlements

Specify file servers in Active Directory and SharePoint sites to view and update the permissions assigned to objects on shared resources. See the [Entitlement](../Entitlement/Overview "Entitlement") topic.

## Schedules

Define schedules to auto execute different Directory Manager functions, such as group expiry and deletion, Smart Group membership update, temporary additional manager assignment to users, and more. See the [Schedules](../Schedule/Overview "Schedules") topic.

**See Also**

* [Manage an Identity Store](Manage "Manage an Identity Store")