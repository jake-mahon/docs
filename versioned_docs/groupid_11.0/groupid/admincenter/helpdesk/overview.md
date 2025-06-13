# Helpdesk

The Admin Center Helpdesk section enables administrators and helpdesk users to perform helpdesk-specific tasks, such as:

- Unlock user accounts and reset passwords on behalf of users in an identity store.
- Notify users to enroll their accounts.
- Unenroll user accounts from identity stores.
- View users' activities, such as enrollment, authentication, account unlock, and password-related functions. Toast notifications and history tracking are also enabled for these actions.

## Helpdesk Permissions

A security role must have the following permissions in an identity store to perform helpdesk-specific functions:

- Reset Any Password
- Unlock Any Account
- Unenroll

See [Password Management](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/permissions.md#Password-Management) in the [Security Role – Permissions](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/permissions.md) topic.

## Helpdesk Policy

The administrator can define a Helpdesk policy for a user role in an identity store. This policy mainly defines whether helpdesk role members should operate under the restricted or unrestricted mode to perform the account unlock and reset password functions.

NOTE: In unrestricted mode, helpdesk can unlock accounts and reset passwords of both enrolled and unenrolled users. In restricted mode, helpdesk can perform these functions for enrolled users only.

See the [Helpdesk Policy](/versioned_docs/groupid_11.0/groupid/admincenter/securityrole/policy/helpdesk.md) topic.

## Helpdesk Analytics

The dashboard in Admin Center offers insightful information to the administrator and helpdesk on users' activities (such as enrollment, account unlock, and password reset) in an identity store.

The dashboard displays the following helpdesk-specific cards:

- [Enrollment Summary](/versioned_docs/groupid_11.0/groupid/admincenter/general/dashboard.md#Enrollment-Summary): displays the number of enrolled users in an identity store.
- [Auth Summary](/versioned_docs/groupid_11.0/groupid/admincenter/general/dashboard.md#Auth-Summary): displays information about failed and successful authentication attempts for each authentication type.
- [Activity Summary](/versioned_docs/groupid_11.0/groupid/admincenter/general/dashboard.md#Activity-Summary): displays a summary of users' activities related to password change, password reset, account unlock, and enrollment.

## Desktop Notifications

You can enable desktop notification for GroupID in browser settings. In this way, a user signed into Admin Center on the respective machine will receive desktop notifications when an end-user performs any of the following actions in the GroupID portal:

- Resets account password
- Changes account Password
- Unlocks Account
- Links Account
- Unlinks Account
- Enrolls account
- Authenticates with password, authentication types, or any other medium

These actions are also logged in helpdesk history.

__See Also__

- [Helpdesk Operations](/versioned_docs/groupid_11.0/groupid/admincenter/helpdesk/operation/overview.md)
- [History in Helpdesk](/versioned_docs/groupid_11.0/groupid/admincenter/helpdesk/history.md)
