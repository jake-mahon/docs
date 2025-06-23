---
title: index
sidebar_label: index
description: Auditor 10.7 documentation for index with configuration details, usage instructions, and implementation guidance.
---

# Resource Owners Overview

The Resource Owners interface is where Access Reviews Console users with either the Security Team or
Administrator role (to be referred to as Ownership Administrators) can assign ownership of resources
to be managed through the application. Assigned owners do not require a console user role. Resources
to be included in the Access Reviews workflow must first be assigned owners within the Resource
Owners interface.

**_RECOMMENDED:_** The Access Reviews application is configured to send Notifications.

_Remember,_ a “resource” refers to the file system shared folders, SharePoint Online site
collections, and Active Directory (AD) groups. All data available within the Access Reviews
application is collected by Netwrix Auditor according to the synchronized monitoring plans.

“Owners” are the users who are responsible for reviewing access to the resources to which they are
assigned.

The My Reviews interface provides owners with access to historical and pending reviews. The My
Reviews interface is only accessible to users who have been assigned ownership of at least one
resource. Owners without a console user role are directed to the My Reviews interface at login.
Owners with a console user role access the pending and historical reviews for their resources by
clicking the My Reviews tab. See the [Pending Reviews](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md)
topic for additional information.

Who Can Assign Ownership (Ownership Administrators)?

- Console Users with Administrator role

  - Can complete the Review Administrator's approval process without impacting the visibility into
    the review created by a Review Administrator with the Security Team role

    **CAUTION:** Visibility into a review created by a Review Administrator with the Security
    Team role is blocked if a Review Administrator with the Administrator role starts a new
    instance.

- Console Users with Security Team role

  - Visibility into only those reviews personally created

What Can Resource Owners Do?

- Perform an access review (when there is a pending review)
- View historical information on access reviews

See the [Resource Owners Interface](/docs/auditor/10.7/access-governance/resource-owners/owner-management.md) topic for additional information.

## Workflow of Ownership Assignment

Prerequisite:

- Optional: The Access Reviews application is configured to send Notifications. See the
  [Notifications Page](/docs/auditor/10.7/access-governance/access-reviews/configuration.md) topic for additional information.

  **NOTE:** By default, the application is configured to send notifications only to the primary
  owner. However, this can be customized on the Configuration > Notifications page to send
  notifications to all assigned owners.

- Owners assigned to resources must have:

  - Email address to receive notifications
  - Credentials for a domain known to the application

- Resources and groups must be known to the application

Workflow:

**NOTE:** This workflow is not numbered because the Notification piece can occur at any time in the
workflow.

- Add resources to be managed by associating a business data owner with a resource. See the
  [Add New Resource Wizard](/docs/auditor/10.7/access-governance/resource-owners/owner-management.md) topic for additional information.
- Confirm resource ownership. See the [Ownership Confirmation](/docs/auditor/10.7/access-governance/resource-owners/confirmation-process.md) topic for additional
  information.
- Notify owners of their responsibilities. See the Notification to Owners topic for additional
  information.

## Notification to Owners

Let your owners know what their responsibilities are by notifying them with the following
information:

- An explanation of what a review is and why your organization is conducting them through the
  Netwrix Auditor Access Reviews application.
- How owners should log into the application console, specifically what URL and credentials to use.
- Expectation on response times
- How to access instructions on how to complete a review. You can link to the
  [Owners & Access Reviews](/docs/auditor/10.7/access-governance/resource-owners/index.md) topic or download that topic and its subtopics as a
  PDF and make it available within your corporate resources.

# Owners & Access Reviews

This topic and its subtopics are written for users who have been assigned resource ownership.

When your organization performs an access review on a resource for which you are the assigned owner,
it means you, the business user or data custodian, need to attest to the access and privileges users
have to your resource.

**NOTE:** For the Netwrix Auditor Access Reviews application, a “resource” refers to the file system
shared folders, SharePoint Online site collections, and Active Directory (AD) groups.

Your organization's Ownership Administrator and/or Review Administrator will let you know what URL
to use for logging in as well as what credentials to use. The URL will require you to be connected
to your organization's network. Upon login, you will be directed to the My Reviews page where you
can view pending and historical reviews for your resources.

You may receive email notifications requesting ownership confirmation from your organization's
Ownership Administrators. You will receive email notifications when you have a pending access review
to perform.
