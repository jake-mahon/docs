# Microsoft Entra ID Platform Policy Configuration

The Microsoft Entra ID (formerly Azure AD) menu displays the configuration options for Microsoft
Entra ID platforms.

![Azure AD Platform Configuration](/img/versioned_docs/activitymonitor_7.1/activitymonitor/admin/outputs/azuread.webp)

Details for the selected platform are displayed on the right side of the page. Below are the
configuration options for an Microsoft Entra ID Platform.

- Name — Displays the name of the policy
- Description — Description of the policy
- Built-in Account — The built-in administrator account for the resources on the selected platform.
  If multiple built-in administrator accounts are required, create a copy of the platform. For
  Windows platforms, the built-in account is defined via the well-known SID (S-1-5-21\*-500).
- Password Complexity Policy — The password complexity rules for managed accounts created on the
  resources defined by the selected platform. See the
  [Password Complexity Page](/docs/privilegesecure/4.1/administration/credentials/password-policies.md)
  topic for additional information.
- Password Length — The number of characters required by the selected password policy
- Arrow icon — Show or Hide password policy details. Click the icon to display the password
  complexity requirements of the selected password policy.
- Scheduled Change Policy — How often the credentials for a managed account are changed (credential
  rotation). See the
  [Credentials Dashboard](/docs/privilegesecure/4.1/administration/dashboard/credentials.md)
  and
  [Schedule Policies Page](/docs/privilegesecure/4.1/administration/access-policies/schedule-policies.md)
  topic for additional information.
- Scan Schedule — How often to perform a host scan on the resources defined by the selected platform
  (local users, groups, windows services and scheduled tasks). This scan can also be run ad-hoc from
  the
  [Resources Page](/docs/privilegesecure/4.1/administration/resources/index.md).
- Verification Schedule — How often to verify the credentials for managed accounts on the resources
  defined by the selected platform. See the
  [Credentials Dashboard](/docs/privilegesecure/4.1/administration/dashboard/credentials.md)
  topic for additional information on managed accounts.
- Reset on Mismatch — When selected, this option will force a password rotation if the password
  verification step finds that the existing password for an account does not match what Privilege
  Secure expects.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

# Access Policies Tab for Microsoft Entra ID

The Access Policies tab Sessions Tab for Microsoft Entra ID shows information about the policies
associated with the selected resource.

![Access Policies Tab Azure AD](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/accesspoliciesazuread.webp)

The Access Policies tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Refresh — Reload the information displayed

The table has the following columns:

- Name — Displays the name of the policy. Click the link to view additional details. See the
  [Access Policy Page](/docs/privilegesecure/4.1/administration/access-policies/index.md)
  topic for additional information.
- Description — Description of the policy

The table columns can be resized and sorted in ascending or descending order.

# Applications Tab for Microsoft Entra ID

The Applications tab for Microsoft Entra ID (formerly Azure AD) shows information about the
applications installed on the selected resource.

![Applications Tab Azure AD](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/applicationsazuread.webp)

The Applications tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Refresh — Reload the information displayed

The table has the following columns:

- Application Name — Displays the name of the application
- Description — Description of the policy

The table columns can be resized and sorted in ascending or descending order.

# Groups Tab for Microsoft Entra ID

The Groups tab for Microsoft Entra ID (formerly Azure AD) shows information about the groups on the
selected resource.

![Groups Tab Azure AD](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/groupsazuread.webp)

The table has the following columns:

- Group Name — Displays the name of the group
- Members — List of accounts with group membership

The table columns can be resized and sorted in ascending or descending order.

# History Tab for Microsoft Entra ID

The History tab Access Policies tab for Microsoft Entra ID (formerly Azure AD) shows information
about the session history of the selected resource.

![History Tab Azure AD](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/historyazuread.webp)

The History tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- View Logs — Opens the Session Logs window to view the action log for the selected session. See the
  [Session Logs Window](/docs/privilegesecure/4.1/administration/session-management/session-logs.md)
  topic for additional information.
- Refresh — Reload the information displayed

The table has the following columns:

- Status — Shows status information for the session:

  - Information — Session was successful and row contains details
  - Warning — Session was successful but there were non-critical issues detected
  - Error — Session had an error and row contains details

- Time — Date timestamp for when the event occurred
- User — User who requested the session. Click the link to view additional details. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/4.1/administration/applications/index.md)
  topic for additional information.
- Access Policy — Displays the name of the policy
- Event Message — Description of the event
- Session ID — Unique identifier for the session

The table columns can be resized and sorted in ascending or descending order.

# Sessions Tab for Microsoft Entra ID

The Sessions tab for Microsoft Entra ID (formerly Azure AD) shows information about the sessions of
the selected resource.

![Sessions Tab Azure AD](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/sessionsazuread.webp)

The Sessions tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- View Logs — Opens the Session Logs window to view the action log for the selected session. See the
  [Session Logs Window](/docs/privilegesecure/4.1/administration/session-management/session-logs.md)
  topic for additional information.
- Refresh — Reload the information displayed

The table has the following columns:

- Requested — Date and time of when the session was created
- Requested By — User who requested the session. Click the link to view additional details. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/4.1/administration/applications/index.md)
  topic for additional information.
- Login Account — Displays the account used to log onto the resource
- Activity — Displays the name of the activity. Click the link to view additional details. See the
  [Activities Page](/docs/privilegesecure/4.1/administration/activities/index.md)
  topic for additional information.
- Start — Indicates when the activity started. This refers to when the activity's actions were
  executed and not when the user was logged on to the resource.
- End — Indicates when the session is scheduled to end the activity, which is determined by the
  start time plus the maximum session duration set by the access policy Connection Profile
- Status — Shows status information for the session:

  - Waiting for Approval — The session requires approval to begin. See the Approvals Dashboard
    topic for additional information.
  - Approval Denied — Requested session was denied
  - Approval Failed — Approval request has encountered an error
  - Pending — Session scheduled start time is still in the future, session is waiting to start.
    See the Scheduled Dashboard topic for additional information.
  - Available — The activity session is ready. Click the icon to begin the session, or log in
    through a client. See the Start Activity Session topic for additional information.
  - Completed — Activity either reached the end of its scheduled end time or was canceled early by
    the requestor
  - Canceled — The session is either expired or was canceled manually by the user or an Privilege
    Secure administrator.
  - Failed — Pre-Session stage of the Activity has encountered an error
  - Locked — The session has been locked by an Privilege Secure administrator. See the
    [Lock Session](/docs/privilegesecure/4.1/administration/session-management/lock-session.md)
    topic for additional information.

The table columns can be resized and sorted in ascending or descending order.

# URLs Tab for Microsoft Entra ID

The URLs tab for Microsoft Entra ID (formerly Azure AD) shows information about the URLs associated
to the selected resource.

![URLs Tab for Azure AD](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/urlsazuread.webp)

The URLs tab has the following features:

- Add — Opens the Add Website URL window. See the
  [Add Website URL Window](/docs/privilegesecure/4.1/administration/resources/platforms/websites.md)
  topic for additional information.
- Edit — Opens the Edit Website URL window. See Edit Website URL for additional information.
- Remove — Removes the selected item
- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- URL — Displays the URL or string
- Match Type — Indicates the match parameter for the URL:

  - Domain — Match will be made on the domain name
  - Exact — Match will only be made if the URL is an exact match
  - Never — Match will not be made to URL
  - Starts With — Match is only made when the URL starts with the value
  - Regex — Match will be made on the valid regex string
  - Host — Match will be made on the host name (FQDN)

The table columns can be resized and sorted in ascending or descending order.

# Users Tab for Microsoft Entra ID

The Users tab for Microsoft Entra ID (formerly Azure AD) shows information about the users on the
selected resource.

![Users Tab Azure AD](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/usersazuread.webp)

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
  [Password Reset Options Window](/docs/privilegesecure/4.1/administration/credentials/password-policies.md)
  topic for additional information.
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
  [Credentials Page](/docs/privilegesecure/4.1/administration/credentials/index.md)
  topic for additional information.
- Rotate Start | End — Indicates if the account will have a password rotation on session start, end,
  both, or neither
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

The table columns can be resized and sorted in ascending or descending order.
