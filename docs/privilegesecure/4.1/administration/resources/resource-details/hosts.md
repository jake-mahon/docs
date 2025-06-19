# Host Details Page

The Host Details page shows additional information for the selected host resource. This page is
opened from any linked resource within the various interfaces.

![Host Details Page](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/page/details/hostdetailspage.webp)

The details page displays the following information:

- Name — Displays the name of the resource
- OS Version — Displays the operating system of the resource
- Last Scanned — Date timestamp for the last time the resource was scanned
- Active — Displays the number of active sessions on the resource
- Scheduled — Displays the number of sessions scheduled for the resource
- Test button — Opens the Test Resource Connectivity window. See the
  [Test Resource Connectivity Window](/docs/privilegesecure/4.1/administration/resources/resource-management/test-connectivity.md)
  topic for additional information.
- Scan Now button — Scans a host resource for local users, groups, windows services, and scheduled
  tasks. A confirmation window will display.. The Cancel button, which is only visible when scanning
  can be used to stop the resource scan. This scan can also be scheduled from the
  [Platforms Page](/docs/privilegesecure/4.1/administration/resources/platforms/index.md).
- WinRM Config button — Opens the Configure Secure WinRM Connection window. See the
  [Configure Secure WinRM Connection Window](/docs/privilegesecure/4.1/administration/resources/platforms/windows.md)
  topic for additional information.
- Platform — Displays the type of platform, which defines the resource
- Service Account — Displays the service account associated with the resource
- Blue arrow button — Opens the Service Account details page. See the
  [Service Accounts Page](/docs/privilegesecure/4.1/configuration/services/service-accounts.md)
  topic for additional information.
- Green plus button — Opens the Add New Service Account window. See the
  [Add New Service Account Window](/docs/privilegesecure/4.1/administration/resources/resource-management/service-accounts.md)
  topic for additional information.
- IP Address — Displays the IP address for the resource
- SSH Port — Displays the SSH port number
- RDP Port — Displays the RDP port number
- WinRM Port — Displays the WinRM port number
- WinRM HTTPS Port — Displays the WinRM HTTPS port number
- WinRM Disabled checkbox — If this checkbox is selected, Netwrix Privilege Secure will not attempt
  to communicate to the target resource via WinRM. This value is determined during the initial host
  scan of the resource, but will not be automatically changed during subsequent host scans.
- Trust on Discovery checkbox — If this checkbox is selected, the certificate that is used with
  WinRM HTTPS will be trusted when the host is first scanned. Otherwise, the NPS administrator needs
  to manually trust the host.
- Action on Thumbprint Mismatch — This menu selection determines the course of action when a
  thumbprint mismatch occurs during a connection to the resource.

  - Allow Connection — This setting will allow a connection to the host. (No event is generated.)
  - Log Event and Allow — This setting will allow a connection to the host and log an event in the
    Event table. If a SIEM connection is configured, an event will be sent to SIEM as well.
  - Log Event and Block — This setting will block the connection to the host and log an event in
    the Event table. If a SIEM connection is configured, an event will be sent to SIEM as well.

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

The details page has the following tabs:

- [Sessions Tab for Host](/docs/privilegesecure/4.1/administration/resources/resource-details/hosts.md)
- [Access Policies Tab for Host](/docs/privilegesecure/4.1/administration/resources/resource-details/hosts.md)
- [Protection Policies Tab for Host](/docs/privilegesecure/4.1/administration/resources/resource-details/hosts.md)
- [Users Tab for Host](/docs/privilegesecure/4.1/administration/resources/resource-details/hosts.md)
- [Groups Tab for Host](/docs/privilegesecure/4.1/administration/resources/resource-details/hosts.md)
- [Services Tab for Host](/docs/privilegesecure/4.1/administration/resources/resource-details/hosts.md)
- [Scheduled Tasks Tab for Host](/docs/privilegesecure/4.1/administration/resources/resource-details/hosts.md)
- [History Tab for Host](/docs/privilegesecure/4.1/administration/resources/resource-details/hosts.md)
- [Installed Software Tab for Host](/docs/privilegesecure/4.1/administration/resources/resource-details/hosts.md)

# Access Policies Tab for Host

The Access Policies tab shows information about the policies associated with the selected resource.

![Host Access Policies Tab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/accesspolicieshost.webp)

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

# Groups Tab for Host

The Groups tab shows information about the local groups on the selected resource.

![groupshost](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/groupshost.webp)

The table has the following columns:

- Group Name — Displays the name of the group
- Members — List of accounts with group membership

The table columns can be resized and sorted in ascending or descending order.

# History Tab for Host

The History tab shows information about the session history of the selected resource.

![History Tab for Host Resource](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/historyhost.webp)

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
- Access Policy — Displays the name of the policy. Click the link to view additional details. See
  the
  [Access Policy Page](/docs/privilegesecure/4.1/administration/access-policies/index.md)
  topic for additional information.
- Event Message — Description of the event
- Session ID — Unique identifier for the session

The table columns can be resized and sorted in ascending or descending order.

# Installed Software Tab for Host

The Installed Software tab shows information about the software installed on the selected host
resource.

![Installed Software Tab for Host Resource](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/installedsoftwarehost.webp)

The History tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Refresh — Reload the information displayed

The table has the following columns:

- Software Name — Displays the name of the software installed
- Version — Displays the software version number
- Description — Description of the policy

The table columns can be resized and sorted in ascending or descending order.

# Protection Policies Tab for Host

The Protection Policies tab shows information about the protection policies associated with the
selected resource.

![Host Protection Policies Tab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/protectionpolicieshost.webp)

The Protection Policies tab has the following feature:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.

The table has the following columns:

- Name — Displays the name of the policy. Click the link to view additional details. See the
  [Protection Policies Page](/docs/privilegesecure/4.1/administration/access-policies/protection-policies.md)
  topic for additional information.
- Description — Description of the policy

The table columns can be resized and sorted in ascending or descending order.

# Scheduled Tasks Tab for Host

The Scheduled Tasks tab shows information about the tasks that are scheduled to run on the selected
resource.

![Scheduled Tasks Tab for Host Resource](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/scheduledtaskshost.webp)

The Scheduled Tasks tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Filter — Provides options to filter results based on a chosen criterion: Managed and Unmanaged
- Refresh — Reload the information displayed

The table has the following columns:

- Task Name — Displays the name of the task
- Run As Account — Account used to run the task
- Managed — Indicates if the account is managed by Privilege Secure. See the
  [Credentials Page](/docs/privilegesecure/4.1/administration/credentials/index.md)
  topic for additional information.
- Description — Description of the policy

The table columns can be resized and sorted in ascending or descending order.

# Services Tab for Host

The Services tab shows information about the services running on the selected resource.

![Services Tab for Host Resource](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/serviceshost.webp)

The Services tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Type — Provides options to filter results based on a chosen criterion: Managed and Unmanaged
- Refresh — Reload the information displayed

The table has the following columns:

- Service Name — Displays the short name of the service
- Display Name — Displays the long name of the service
- Description — Description of the policy
- Startup Type — Indicates if the service is started manually or automatically
- Log On As — Account used to run the service

The table columns can be resized and sorted in ascending or descending order.

# Sessions Tab for Host

The Sessions tab shows information about the sessions of the selected resource.

![Sessions Tab for Host Resource](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/sessionshost.webp)

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
  - Logged In — User is successfully logged in to the Resource either directly or via the Proxy.
    Direct log-in is detected by polling the Resource at regular intervals and may not update
    immediately.

The table columns can be resized and sorted in ascending or descending order.

# Users Tab for Host

The Users tab shows information about the local users on the selected resource.

![Host Users Tab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/usershost.webp)

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
  [Password Reset Options Window](/docs/privilegesecure/4.1/administration/credentials/password-policies.md)
  topic for additional information.
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
  [Credentials Page](/docs/privilegesecure/4.1/administration/credentials/index.md)
  topic for additional information.
- Rotate Start | End — Indicates if the account will have a password rotation on session start, end,
  both, or neither
- Dependents — Number of scheduled tasks or Windows services using this account.
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
- Schedule — Shows the schedule policy used to change the password of a manged account, the
  credential rotation. See the
  [Schedule Policies Page](/docs/privilegesecure/4.1/administration/access-policies/schedule-policies.md)
  topic for additional information.
- Complexity — Indicates the password complexity policy used for the account. See the
  [Password Complexity Page](/docs/privilegesecure/4.1/administration/credentials/password-policies.md)
  topic for additional information.

The table columns can be resized and sorted in ascending or descending order.
