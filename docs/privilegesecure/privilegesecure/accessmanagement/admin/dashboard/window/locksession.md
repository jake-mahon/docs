# Lock Session

It is possible to lock out the user in the event that suspicious or unauthorized activity is observed, either from the [Active Dashboard](/docs/privilegesecure/privilegesecure/accessmanagement/admin/dashboard/active.md), or the [Live Session Viewer Window](/docs/privilegesecure/privilegesecure/accessmanagement/admin/dashboard/window/liveviewer.md).

Follow the steps to lock a session.

__Step 1 –__ Navigate to either the __Active dashboard__ or the __Live Session Viewer__.

- From the Active Dashboard, select the session and click __Lock Activity__.

  - OR -
- From the Live Session Viewer, click the __lock__ icon.

![Lock User Session](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/dashboard/window/locksession.png)

__Step 2 –__ In the Lock Session window, enter the following information:

- Lock Title – The title of the message displayed to the session user
- Lock Message – The message displayed to the session user
- Prevent User From:
  - Opening New Activities on this Resource – Prevent user from opening new activity to this resource while locked.
  - Any Further Activity on this Resource – Lock all sessions and prevent the user from any further activity while locked. The Users & Groups Details page for the user will indicate that the account is locked.

__Step 3 –__ Click __Okay__ to confirm.

The session is locked and the Lock Session message is displayed to the session user within their RDP or SSH clients. To unlock an active session, either:

- From the Active Dashboard, select the session and click __Unlock Activity__.

  - OR -
- From the Live Session Viewer, click the __Unlock__ icon.

To unlock an account, see the [User, Group, & Application Details Page](/docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/page/details/usergroupapplication.md) topic for additional information.
