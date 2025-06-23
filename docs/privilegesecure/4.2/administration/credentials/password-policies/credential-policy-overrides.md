---
title: Add Credential Policy Override
sidebar_label: credential policy overrides
description: Administrative configuration and management features for Privilege Secure PAM solution including user management, policies, and security settings.
---

# Add Credential Policy Override

Follow the steps to add Credential Policy Override to the Privilege Secure Console.

**Step 1 –** Navigate to the Policy > Credentials > Credential Policy Overrides page.

**Step 2 –** In the Credential Policy Overrides list, click the Plus icon.

![Adding a credential policy override](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/addcredentialpolicyoverride.webp)

**Step 3 –** Enter or select the following information:

- Name — Displays the name of the credential
- Description — Description of the policy
- Scheduled Change Policy — Select a previously added schedule policy from the drop-down list. How
  often the credentials for a managed account are changed (credential rotation). See the
  [Credentials Dashboard](/docs/privilegesecure/4.2/user-guide/dashboard-widgets/credentials-widget.md) and
  [Schedule Policies Page](/docs/privilegesecure/4.2/administration/policies/schedule-policies/add-schedule-policy.md) topic for additional information.
- Verification Schedule — How often to verify the credentials for managed accounts on the resources
  defined by the selected platform. See the [Credentials Dashboard](/docs/privilegesecure/4.2/user-guide/dashboard-widgets/credentials-widget.md)
  topic for additional information on managed accounts.

**Step 4 –** Click Save to create the new credential policy override.

![cpopageaddcredentials](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/cpopageaddcredentials.webp)

**Step 5 –** With the new Credential Policy Override selected, click the **Add Credentials** button
to open the Add Credentials window. See the
[Add Credentials to a Policy Override](/docs/privilegesecure/4.2/administration/credentials/credential-management/add-credentials.md#add-credentials-to-a-policy-override)
topic for additional information.

![Add credential to Credential Policy Override Window](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/addcredentialtocpowindow.webp)

**Step 6 –** Select the checkbox for the credential and click **Add** to save the credential to the
Credential Policy Override.

**NOTE:** In order for an account to be added to add credentials window, a credential must be
managed with a method of **Automatic**. Only one account can be added to a Credential Policy
Override at a time. See the
[Manage Internal Service Accounts](/docs/privilegesecure/4.2/administration/credentials/credential-management/internal-service-account.md) topic for
additional information.

The account is added to the console and is shown in the Credential Policy Overrides list.

# Credential Policy Overrides Page

The Credential Policy Overrides page is accessible from the Policy Navigation pane under Credentials
and displays the configured Credential Policy Overrides. If a credential is added to a Credential
Policy Override, that credential's scheduled change policy and verification schedule will be
inherited from the Credential Policy Override, rather than being inherited from the credential's
platform.

![Credential Policy Overrides Page](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/page/credentialpolicyoverridepage.webp)

The pane on the left side of the page displays a list of the configured Credential Policy Overrides.
This pane has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Blue + button — Create a new credential group. See the
  [Add Credential Policy Override](/docs/privilegesecure/4.2/administration/credentials/password-policies/credential-policy-overrides.md) topic for additional
  information.
- Trashcan icon — Deletes the policy. Icon appears when policy is hovered over. A confirmation
  window will display.

The selected access policy details display at the top of the main pane:

- Name — Displays the name of the policy
- Description — Description of the policy

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The table has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Add Credentials — Opens the Add Credentials window. See the
  [Add Credentials Window](/docs/privilegesecure/4.2/administration/credentials/credential-management/add-credentials.md) topic for additional
  information.
- Remove — Removes the selected item
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Account — Name of the account. The following icons may also appear in this column:

  - Clipboard icon — Copies the password for the selected account
  - Information icon — Opens the View Password window to view the password and copy it to the
    clipboard. The window stays open for 20 seconds.

- Resource — Name of the resource that the account is on
- Password Changed — Date timestamp for the last time the password was rotated
- Age — Number of days since the last credential rotation or from when the password was first
  created
- Status — Indicates if the account credentials have been verified by Privilege Secure. See the
  [Platforms Page](/docs/privilegesecure/4.2/administration/resources/platforms/index.md) topic for additional information on configuring a
  verification schedule.

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

The table columns can be resized and sorted in ascending or descending order.
