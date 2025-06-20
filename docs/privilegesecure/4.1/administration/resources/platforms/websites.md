# Web Site Platform Policy Configuration

The Web Site menu displays the configuration options for Web Site platforms.

![Website Platform Configuration](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/page/platforms/website.webp)

Details for the selected platform are displayed on the right side of the page. Below are the
configuration options for a Website Platform.

- Name — Displays the name of the policy
- Description — Description of the policy

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.

# Access Policies Tab for Website

The Access Policies tab shows information about the policies associated with the selected resource.

![websitedetailsaccesspolicytab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/websitedetailsaccesspolicytab.webp)

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

# History Tab for Website

The History tab shows information about the session history of the selected resource.

![websitedetailshistorytab](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/websitedetailshistorytab.webp)

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
  - Error — Session had an error and row contains details

- Time — Date timestamp for when the event occurred
- User — User who requested the session. Click the link to view additional details. See the
  [User, Group, & Application Details Page](/docs/privilegesecure/4.1/administration/applications/index.md)
  topic for additional information.
- Access Policy — Displays the name of the policy
- Event Message — Description of the event
- Session ID — Unique identifier for the session

The table columns can be resized and sorted in ascending or descending order.

# Sessions Tab for Website

The Sessions tab shows information about the sessions of the selected resource.

![Sessions Tab for Website Resource](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/websitedetailssessionstab.webp)

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

# URLs Tab for Website

The URLs tab shows information about the URLs associated to the selected resource. For example:
`https://company.lightning.force.com` and `https://salesforce.com` are both URLs associated to the
same website.

![URLs tab for Website Resource](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/websitedetailsurlstab.webp)

The URLs tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Add — Opens the Add Website URL window. See the
  [Add Website URL Window](/docs/privilegesecure/4.1/administration/resources/platforms/websites.md)
  topic for additional information.
- Edit — Opens the Edit Website URL window. See Edit Website URL for additional information.
- Remove — Removes the selected item
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

# Users Tab for Website

The Users tab shows information about the users on the selected resource.

Manually managed user accounts can be added to the website resource. These accounts are used for
activities on the resource. The format in the Username field must be identical to the username
format specified in the “Login Account Template” field of the activity. See the
[Activities Page](/docs/privilegesecure/4.1/administration/activities/index.md)
topic for additional information.

![Users Tab for Website Resource](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/tab/resources/websitedetailsuserstab.webp)

The Users tab has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Add — Opens the Add a Managed User window. See the
  [Add a Managed User Window](/docs/privilegesecure/4.1/administration/resources/resource-management/managed-users.md)
  topic for additional information.
- Edit — Opens the Edit a Managed User window. See Edit a Managed User for additional information.
- Delete — Removes the selected item from the resource. A confirmation window will display.
- Refresh — Reload the information displayed

The table has the following columns:

- Checkbox — Check to select one or more items
- Name — Displays the name of the account
- User Name — Displays the account name in the exact format specified in the “Login Account
  Template” field of the Activity, e.g. `domain\user` or `user@domain.com`. See the
  [Activities Page](/docs/privilegesecure/4.1/administration/activities/index.md)
  topic for additional information.
- Created — Date timestamp when the account was created

The table columns can be resized and sorted in ascending or descending order.

# Add Website URL Window

Follow the steps to add or edit a Website URL used by a resource.

**NOTE:** Only applicable to Microsoft Entra ID and Website resources.

**Step 1 –** Navigate to the **Resources** page.

**Step 2 –** Click the name of the desired resource to open the Resource Details page and select the
**URLs** tab.

**Step 3 –** Do the following:

- To add a new URL, click **Add**.

![addwebsiteurl](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/window/resources/addwebsiteurl.webp)

**Step 4 –** Enter the following information:

- URL — The URL or string to match
- Match Type — A Match Type is required:

  - Domain — A match will be made on the domain name
  - Exact — A match will only be made if the URL exactly matches
  - Never — Never match the URL
  - StartsWith — Only match if the URL starts with this value
  - Regex — Match based upon valid regex string
  - Host — Match based upon host name (FQDN)

**Step 5 –** Click Save to accept changes.

The URL is added to the resource and shown on the URLs tab.
