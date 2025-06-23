# Activities Tab for Credential Based Access Policies

The Activities tab shows the activities associated with the selected access policy. Only the
Credential Release activity is associated with a Credential Based Access Policy.

![Credential based resource Activities tab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/policycredentials/activitiestabcredentials.webp)

The Activities tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Type— Provides options to filter results based on a chosen criterion:

  - All — Displays all activity for users and groups
  - Activity — Displays user activity
  - Activity Group — Displays group activity

- Refresh — Reload the information displayed

The table has the following columns:

- Name — Displays the name of the activity
- Type — Classification of the activity
- Description — Description of the policy

The table columns can be resized and sorted in ascending or descending order.

# Credentials Tab for Credential Based Access Policies

The Credentials tab shows credentials associated with the selected Credential Based access policy.

![Credential based policy credential tab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/policycredentials/accesspolicycredentialstab.webp)

The Credentials table has the following features:

- Add — Opens the Add Credentials window. See the
  [Add Credentials Window](/docs/privilegesecure/4.1/administration/access-policies/policy-assignments.md)
  topic for additional information.
- Remove — Removes the selected item from being associated with the policy
- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Type— Provides options to filter results based on a chosen criterion:

  - All — Displays all credentials for users and groups
  - Credential — Displays user credentials
  - Credential Group — Displays group credentials

- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Name of the account or credential group
- Type — Icon indicates the type of object
- Resource — Name of the resource that the account is on
- Operating System — Displays the operating system of the resource
- Active Session Count — Displays the number of active sessions on the resource

The table columns can be resized and sorted in ascending or descending order.

# Users Tab for Credential Based Access Policies

The Users tab shows the users and groups associated with the selected access policy.

![Credential based policy users tab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/policycredentials/userstabcredentials.webp)

The Users tab has the following features:

- Add — Opens the Add Users and Groups window. See the
  [Add Users & Groups Window](/docs/privilegesecure/4.1/administration/users-and-groups/group-management.md)
  topic for additional information.
- Remove — Removes the selected item from being associated with the policy
- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Type — Provides options to filter results based on a chosen criterion:

  - All — Displays all individual and group types
  - User — Displays user types
  - Group — Displays group types
  - Application — Displays application types
  - Collection — Displays collection types
  - Local User — Displays local user types

- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Expand — Click the expand () icon to show additional information about the activities and
  resources authorized for the selected user or group
- Name — Displays the name of the account. Click the link to view additional details.See the
  [User, Group, & Application Details Page](/docs/privilegesecure/4.1/administration/applications/index.md)
  topic for additional information.
- Email — Displays the associated email address, if available
- User Name — Displays the sAMAccountName for the account
- Type — Icon indicates the type of object
- Certified — Indicates the access entitlement for the user or group. See the
  [Access Certification Page](/docs/privilegesecure/4.1/monitoring-and-reporting/access-certification/index.md)
  topic for additional information.

  - Approved — Access entitlements have been approved
  - Denied — Access entitlements have been revoked
  - Incomplete — No access entitlement review has been completed

The table columns can be resized and sorted in ascending or descending order.

# Add Credentials Window for Credential Group

The Add Credentials window provides a list of Credentials that have been onboarded and are not
already present in the collection.. Credentials are onboarded in the
[Credentials Page](/docs/privilegesecure/4.1/administration/credentials/index.md).

![Add Credentials Window](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/window/accesspolicy/addcredentials.webp)

The window has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion: Internal, Standard, and
  Service
- Available Credentials — Shows all accounts available for credential management
- Credentials to Add — Shows selected credentials
- Add button — Closes the window

Both tables have the following columns:

- Checkbox — Check to select one or more items
- Account — Name of the account
- Resource — Name of the resource that the account is on
- Platform — Displays the type of platform, which defines the resource
- Method — Indicates how the account is managed:

  - Automatic — Credential rotation is managed by Privilege Secure according to the change policy
    for that platform type. See the
    [Platforms Page](/docs/privilegesecure/4.1/administration/resources/platforms/index.md)
    topic for additional information.
  - Manual — Credential rotation must be initiated manually with the Rotate Service Account
    button, or the credential must be manually updated on both the resource and in Privilege
    Secure. See the
    [Service Accounts Page](/docs/privilegesecure/4.1/configuration/services/service-accounts.md)
    section for information on updating credentials for Internal service accounts.
  - Not Managed — Not currently managed by Privilege Secure and no credentials have ever been
    stored

  **NOTE:** See the
  [Rotation Methods](/docs/privilegesecure/4.1/administration/credentials/rotation-methods.md)
  topic for additional information.

- Managed Type — Type of managed account:

  - Standard — Local or domain user account, including managed users created by activity sessions
  - Internal — Internal service account used by Privilege Secure with no dependencies. See the
    [Service Accounts Page](/docs/privilegesecure/4.1/configuration/services/service-accounts.md)
    topic for additional information.
  - Service — Local or domain service account with one or more dependencies. Includes Internal
    service accounts with one or more dependencies.

- Dependents — Number of scheduled tasks or Windows services using this account
- Password Changed — Date timestamp for the last time the password was rotated
- Age — Number of days since the last credential rotation or from when the password was first
  created
- Status — Indicates if the account credentials have been verified by Privilege Secure. See the
  [Platforms Page](/docs/privilegesecure/4.1/administration/resources/platforms/index.md)
  topic for additional information on configuring a verification schedule.

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

## Add Credentials to a Credential Group

Follow the steps to add credentials to a credential group.

**Step 1 –** Navigate to the **Credentials** > Credentials Groups page.

**Step 2 –** In the Credential Groups list, select the name of the credential group.

**Step 3 –** In the Credential Groups table, click Add.

**Step 4 –** Filter by **Internal**, **Standard**, or **Service**, and use the Search feature.

**Step 5 –** To add a credential to the group, click a row in the Available Credentials table.

**Step 6 –** Click the green right arrow to move the role user to the Credentials to Add table.

**Step 7 –** (Optional) Click a row in the Credentials to Add table to move it back to the Available
Credentials table.

**Step 8 –** Click Add to add the credential(s) to the group.

The new credentials are added to the applicable group.

# View Password Window

The View Password window shows the current passwords for the selected managed account. This window
remains open for only 20 seconds.

![View Password window](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/window/credentials/viewpassword.webp)

The window has the following features:

- Countdown — Indicates time remaining before the window closes automatically
- Eye icon — Reveals the password
- Copy to Clipboard — Copies the value to the clipboard
- Cancel — Closes the View Password window
