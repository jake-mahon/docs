---
title: Accounts Tab for Secret Vault
sidebar_label: users
description: Administrative configuration and management features for Privilege Secure PAM solution including user management, policies, and security settings.
---

# Accounts Tab for Secret Vault

The Accounts tab shows information about the accounts associated to the selected resource.

![Accounts Tab for Secret Vault Resource](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/resources/accountssecretvault.webp)

The Accounts tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Add — Opens the Add a Managed Account window. See the
  [Add a Managed Account Window](/docs/privilegesecure/4.2/administration/resources/managed-accounts/add-account.md) topic for additional
  information.
- Edit — Opens the Edit a Managed Account window. See the
  [Edit a Managed Account Window](/docs/privilegesecure/4.2/administration/resources/managed-accounts/edit-account.md) topic for
  additional information.
- Delete — Removes the selected item. A confirmation window will appear.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Resource — Name of the resource that the account is on
- Username — Displays the name of the account
- Created — Date timestamp when the account was added to the secret vault

The table columns can be resized and sorted in ascending or descending order.

# Users Tab for Domain

The Users tab shows information about the domain users on the selected resource.

![Domian Users Tab](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/resources/usersdomain.webp)

The Users tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion: Users, Admin, Managed,
  and Not Onboarded
- Add to NPS User Role — Onboards the selected account, granting the Privilege Secure User role
- Remove NPS Role — Removes console access from the selected account
- Manage — Set the selected account to be managed by Privilege Secure. This button is only available
  when the account Managed Type is Standard or Internal. For an Internal account, a pop up window
  will display.. Password rotation can be set to automatic or manual for managed accounts.
- Unmanage — Remove the account from being managed by Privilege Secure
- Schedule Rotation — Add the credential rotation task to the queue. This button is only available
  when the Method is Automatic managed.
- Verify — Checks that the credentials for the selected account match the credentials set by
  Privilege Secure
- View History — Opens the Password History window to displays the password history for the account
- Password Reset Options — Customize password rotation options. This option is only available for
  managed accounts. See
  [Password Reset Options Window](/docs/privilegesecure/4.2/administration/resources/managed-accounts/password-reset-options.md) for additional
  information.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the account
- User Name — Displays the sAMAccountName for the account
- Privilege — Level of privilege the account has on the resource
- Last Login — Date timestamp for the last time the user logged into the application
- Password Changed — Date timestamp for the last time the password was rotated
- Age — Number of days since the last credential rotation or from when the password was first
  created
- NPS Role — Indicates the assigned Privilege Secure role
- Managed — Indicates if the account is managed by Privilege Secure. See the
  [Credentials Page](/docs/privilegesecure/4.2/administration/credentials/index.md) topic for additional information.
- Rotate Start | End — Indicates if the account will have a password rotation on session start, end,
  both, or neither
- Dependents — Number of scheduled tasks or Windows services using this account.
- Status — Indicates if the account credentials have been verified by Privilege Secure. See the
  [Platforms Page](/docs/privilegesecure/4.2/administration/resources/platforms/index.md) topic for additional information on configuring
  a verification schedule.

  - Unspecified — Verification check has not run
  - Verified — Confirmed the credentials match the value stored in Privilege Secure
  - Mismatch — Credentials do not match the value stored in Privilege Secure. This status only
    appears when the Reset on Mismatch option is not enabled.
  - Changed — Credentials were successfully updated to match the value stored in Privilege Secure.
    This status only appears when the Reset on Mismatch option is enabled.
  - Failed — Attempt to update the credentials to match the value stored in Privilege Secure was
    unsuccessful. This status only appears when the Reset on Mismatch option is enabled.

- Last Checked — Date timestamp of the last verification check
- Next Change — Date timestamp for the next credential password rotation
- Schedule — Shows the schedule policy used to change the password of a manged account, the
  credential rotation. See the [Schedule Policies Page](/docs/privilegesecure/4.2/administration/policies/schedule-policies/add-schedule-policy.md) topic for
  additional information.
- Complexity — Indicates the password complexity policy used for the account. See the
  [Password Complexity Page](/docs/privilegesecure/4.2/administration/credentials/password-policies/password-complexity.md) topic for additional information.

The table columns can be resized and sorted in ascending or descending order.

# Users Tab for Microsoft Entra ID

The Users tab for Microsoft Entra ID (formerly Azure AD) shows information about the users on the
selected resource.

**NOTE:** Users in hybrid environments will be associated with the on-premises Active Directory
domain resource (if the on-premises domain has been synced by Privilege Secure). This view will show
cloud-only EntraID users.

![Users Tab Entra ID](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/resources/usersazuread.webp)

The Users tab has the following features:

- Manage — Set the selected account to be managed by Privilege Secure. This button is only available
  when the account Managed Type is Standard or Internal. For an Internal account, a pop up window
  will display.. Password rotation can be set to automatic or manual for managed accounts.
- Unmanage — Remove the account from being managed by Privilege Secure
- Schedule Rotation — Add the credential rotation task to the queue. This button is only available
  when the Method is Automatic managed.
- Verify — Checks that the credentials for the selected account match the credentials set by
  Privilege Secure
- View History — Opens the Password History window to displays the password history for the account
- Password Reset Options — Customize password rotation options. This option is only available for
  managed accounts. See the
  [Password Reset Options Window](/docs/privilegesecure/4.2/administration/resources/managed-accounts/password-reset-options.md) topic for
  additional information.
- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the account
- User Principal Name — Displays the UPN value for the account
- Last Login — Date timestamp for the last time the user logged into the application
- Password Last Set — Date timestamp for the last time the password was set
- Age — Number of days since the last credential rotation or from when the password was first
  created
- Managed — Indicates if the account is managed by Privilege Secure. See the
  [Credentials Page](/docs/privilegesecure/4.2/administration/credentials/index.md) topic for additional information.
- Rotate Start | End — Indicates if the account will have a password rotation on session start, end,
  both, or neither
- Status — Indicates if the account credentials have been verified by Privilege Secure. See the
  [Platforms Page](/docs/privilegesecure/4.2/administration/resources/platforms/index.md) topic for additional information on configuring
  a verification schedule.

  - Unspecified — Verification check has not run
  - Verified — Confirmed the credentials match the value stored in Privilege Secure
  - Mismatch — Credentials do not match the value stored in Privilege Secure. This status only
    appears when the Reset on Mismatch option is not enabled.
  - Changed — Credentials were successfully updated to match the value stored in Privilege Secure.
    This status only appears when the Reset on Mismatch option is enabled.
  - Failed — Attempt to update the credentials to match the value stored in Privilege Secure was
    unsuccessful. This status only appears when the Reset on Mismatch option is enabled.

- Last Checked — Date timestamp of the last verification check

The table columns can be resized and sorted in ascending or descending order.

# Users Tab for Host

The Users tab shows information about the local users on the selected resource.

![Host Users Tab](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/resources/usershost.webp)

The Users tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion: Managed and Not Onboarded
- Manage — Set the selected account to be managed by Privilege Secure. This button is only available
  when the account Managed Type is Standard or Internal. For an Internal account, a pop up window
  will display.. Password rotation can be set to automatic or manual for managed accounts.
- Unmanage — Remove the account from being managed by Privilege Secure
- Schedule Rotation — Add the credential rotation task to the queue. This button is only available
  when the Method is Automatic managed.
- Verify — Checks that the credentials for the selected account match the credentials set by
  Privilege Secure
- View History — Opens the Password History window to displays the password history for the account
- Password Reset Options — Customize password rotation options. This option is only available for
  managed accounts. See
  [Password Reset Options Window](/docs/privilegesecure/4.2/administration/resources/managed-accounts/password-reset-options.md) topic for
  additional information.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the account
- User Name — Displays the sAMAccountName for the account
- Privilege — Level of privilege the account has on the resource
- Last Login — Date timestamp for the last time the user logged into the application
- Password Changed — Date timestamp for the last time the password was rotated
- Age — Number of days since the last credential rotation or from when the password was first
  created
- Managed — Indicates if the account is managed by Privilege Secure. See the
  [Credentials Page](/docs/privilegesecure/4.2/administration/credentials/index.md) topic for additional information.
- Rotate Start | End — Indicates if the account will have a password rotation on session start, end,
  both, or neither
- Dependents — Number of scheduled tasks or Windows services using this account.
- Status — Indicates if the account credentials have been verified by Privilege Secure. See the
  [Platforms Page](/docs/privilegesecure/4.2/administration/resources/platforms/index.md) topic for additional information on configuring
  a verification schedule.

  - Unspecified — Verification check has not run
  - Verified — Confirmed the credentials match the value stored in Privilege Secure
  - Mismatch — Credentials do not match the value stored in Privilege Secure. This status only
    appears when the Reset on Mismatch option is not enabled.
  - Changed — Credentials were successfully updated to match the value stored in Privilege Secure.
    This status only appears when the Reset on Mismatch option is enabled.
  - Failed — Attempt to update the credentials to match the value stored in Privilege Secure was
    unsuccessful. This status only appears when the Reset on Mismatch option is enabled.

- Last Checked — Date timestamp of the last verification check
- Next Change — Date timestamp for the next credential password rotation
- Schedule — Shows the schedule policy used to change the password of a manged account, the
  credential rotation. See the [Schedule Policies Page](/docs/privilegesecure/4.2/administration/policies/schedule-policies/add-schedule-policy.md) topic for
  additional information.
- Complexity — Indicates the password complexity policy used for the account. See the
  [Password Complexity Page](/docs/privilegesecure/4.2/administration/credentials/password-policies/password-complexity.md) topic for additional information.

The table columns can be resized and sorted in ascending or descending order.

# Users Tab for Website

The Users tab shows information about the users on the selected resource.

Manually managed user accounts can be added to the website resource. These accounts are used for
activities on the resource. The format in the Username field must be identical to the username
format specified in the “Login Account Template” field of the activity. See the
[Activities Page](/docs/privilegesecure/4.2/administration/activities/index.md) topic for additional information.

![Users Tab for Website Resource](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/tab/resources/websitedetailsuserstab.webp)

The Users tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Add — Opens the Add a Managed User window. See the
  [Add a Managed User Window](/docs/privilegesecure/4.2/administration/resources/managed-accounts/add-user.md) topic for additional
  information.
- Edit — Opens the Edit a Managed User window. See Edit a Managed User for additional information.
- Delete — Removes the selected item from the resource. A confirmation window will display.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the account
- User Name — Displays the account name in the exact format specified in the “Login Account
  Template” field of the Activity, e.g. `domain\user` or `user@domain.com`. See the
  [Activities Page](/docs/privilegesecure/4.2/administration/activities/index.md) topic for additional information.
- Created — Date timestamp when the account was created

The table columns can be resized and sorted in ascending or descending order.
