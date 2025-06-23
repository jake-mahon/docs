---
title: profile management
sidebar_label: profile-management
description: Directory Manager 11.1 documentation for profile management with configuration details, usage instructions, and implementation guidance.
---

# Validate your profile

The profile validation process in Directory Manager is designed to ensure the accuracy of users’
information in the directory.

When the administrator applies profile validation to a group in an identity store, all group members
must verify and update their profile information in the directory using the Directory Manager
portal. The administrator also specifies a profile validation life cycle period (for example, 90
days), so that each member must validate his/her profile once during each 90-day cycle.

While validating the profile, a user can:

- Update his or her directory profile.
- Specify or change his or her primary manager.
- Transfer his or her direct reports to another manager.
- Terminate his or her direct reports.

Periodically, users receive reminder emails to validate their profile information. Directory Manager
expires users who ignore these reminders and do not validate their profiles within the required
time. Expired users get disabled in the directory.

Such users can request the administrator or Helpdesk to unlock their accounts temporarily and grant
an extension period. If they do not validate their profile information within that extension period
either, Directory Manager expires them again and their managers are informed by email. To reactivate
these accounts, users’ managers must send a request to the administrator or Helpdesk. The
administrator or Helpdesk user can extend the profile validation period on the
[Disabled Users](/docs/directorymanager/11.1/user-management/disableduser.md) page of the portal.

NOTE: For notifications to be sent, an SMTP server must be configured for the identity store.

### Profile Validation for New Users

Apart from the regular profile validation life cycle, the administrator can set a separate profile
validation period for new users by specifying a certain number of days, say 30.

All new users receive a welcome email and a profile validation request, so that users must validate
their profiles for the first time within the given number of days. Once they validate their
profiles, the regular profile validation life cycle settings would apply.

### The User Life Cycle job

The profile validation feature in Directory Manager is monitored by the User Life Cycle job. This is
a scheduled job that runs on a set frequency and does the following:

- Monitors the profile validation dates of users.
- Generates reminder emails.
- Expires users who do not validate their profiles within the given period.

## Validate your profile

If profile validation applies to you, then you will see the following message displayed on the **My
Account** panel:

![validateprofile](/img/product_docs/directorymanager/directorymanager/portal/user/manage/validateprofile.webp)

The message displays the number of days left to validate your profile.

Step 1 – The My Profile card on the dashboard indicates your profile validation status. Click it to
launch the user properties page.

Step 2 – The toolbar on user properties page will display Validate your profile option. Click on it
to launch the profile validation window.

Step 3 – Provide or update information in the fields displayed on this window.

Step 4 – Your direct reports, if any, are listed in the My Direct Reports area. Select one of these
options for each of your direct reports:

- Works for me
- Transfer
- Terminate

Step 5 – After verifying and updating the information, click the **Validate Now** button. Your
profile is validated and a message is displayed that your changes have been saved.

NOTE: You can also manage your direct reports and managers on the Organization tab of the my profile
window.

## Change your primary manager

The **Manager** field displays the name of your primary manager (if you have one); else it is blank.

To add or change your primary manager, click the ellipsis button next to the field. This launches
the [Find Dialog Box](/docs/directorymanager/11.1/misc/directorymanager/portal/search/find.md), where you can search and select your primary manager.

When you change your primary manager (Manager A), then Manager A is notified by email to accept or
reject the request. If Manager A accepts, your manager is changed. If Manager A rejects the request,
you remain with Manager A and a notification is sent to you and Manager A.

NOTE: This is the default flow of the ‘Workflow to Change Manager’ workflow. If the administrator
disables the workflow or changes the approver, the flow changes accordingly. See
[Requests](/docs/directorymanager/11.1/index.md).

## Transfer your direct report

When you transfer a direct report, the direct report is notified by email to accept or reject the
transfer. If the direct report accepts the transfer, he or she has to select another primary manager
and validate his or her profile. If the direct report rejects the transfer, he or she is transferred
back to the old manager, i.e., you.

NOTE: This is the default flow of the ‘Workflow to Transfer a User’ workflow, with the direct report
set as the workflow approver. If the administrator disables the workflow or changes the approver,
the flow changes accordingly. See [Requests](/docs/directorymanager/11.1/index.md).

## Terminate your direct report

When you terminate a direct report, it takes effect immediately if the ‘Workflow to Terminate a
User’ workflow is disabled. If enabled, a request is sent to the approver. If the approver accepts
it, the direct report is terminated and if the approver rejects it, the direct report remains with
the manager, i.e., you.

# Manage your profile

To view and update your profile information in the directory, click your profile info in the top
right corner and select **See full profile**.

The profile page has the same tabs as the user properties page. Refer to the information for
[User Properties](/docs/directorymanager/11.1/user-management/overview.md) to manage your profile.

## User profile validation

If profile validation applies to you, then you must verify and update your profile information in
the directory using the Directory Manager portal.

Profile validation is not a one-time process; rather, the administrator specifies a profile
validation life cycle period (for example, 90 days), which implies that you must validate your
profile once during each 90-day cycle.

On your profile page, your profile validation status is displayed next to your name.

- The status, Verified User, indicates that your profile is validated.
- The status, Verification Pending, indicates that you must validate your profile.

  Click **Validate Your Profile** on the toolbar. The Validate Profile Properties window is
  displayed, where you can validate your profile.

- The status, Expired User, indicates that a user has expired because he or she did not validate his
  or her profile within the required duration. An expired user is disabled in the directory.
