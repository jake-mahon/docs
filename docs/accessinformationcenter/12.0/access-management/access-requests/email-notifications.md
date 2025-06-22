# Access Expiration Email

If only temporary access was granted, once the date expires, the user will be automatically removed
from the resource, and will receive an email notification informing them of the removal.

![Access Expired email](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/email/expired.webp)

On the [Request History Page](/docs/accessinformationcenter/12.0/access-management/access-portal/your-access.md) of the Your Access portal, you
can see that the icon in the Expired column has changed and it's tooltip indicates that the access
has expired.

# Access Request Reminder Email

The Request Administrator may send reminder email from the Access Information Center for pending
access requests.

![Reminder email](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/email/reminder.webp)

Click **Sign in** to open the Access Information Center login page. Within the Owner portal,
navigate to the Access Requests page to process the request. See the
[Pending Access Requests](/docs/accessinformationcenter/12.0/access-management/access-requests/pending-requests.md) topic for additional information.

# User Access Request Email

When a domain user submits a request, you receive an email notification.

![User Access Request email](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/owners/request.webp)

The email will include the following information:

- Resource Path — The icon indicates the type of resource. The resource name includes its location,
  such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name
  (e.g., [Domain]\[Group]).
- Resource Type — Indicates the type of resource (File Share, SharePoint site, Active Directory
  group, etc.)
- User — Requester name and email address
- Access — Level of access being requested
- Request Notes — Note supplied by the requester

See the Process Request Via Email topic for additional information.

## Process Request Via Email

There are options for accepting or declining the request in the original email notification.

![Request email response buttons](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/email/requestbuttons.webp)

You can use these buttons to either accept or decline the request from the email notification.

### Accept Request

Follow the steps to accept the request using the email buttons.

**Step 1 –** Click **Yes** to approve the request. The Access Information Center launches in the
default browser for security authentication.

**Step 2 –** Log into the Access Information Center using your domain credentials.

![Request accepted message](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/email/requestaccepted.webp)

**Step 3 –** A message displays confirming that your response has been saved. Click **Close** to
close the browser window.

The requester will receive an email notification on the updated status of the request. See the
[Access Request Updated Email](/docs/accessinformationcenter/12.0/access-management/access-requests/email-notifications.md) topic for an example of this email.

You can view the history of requests processed for your resources in the Owner portal. See the
[Access Request History](/docs/accessinformationcenter/12.0/access-management/access-requests/request-history.md) topic for additional information.

### Decline Request

Follow the steps to decline the request using the email buttons.

**Step 1 –** Click **No** to decline the request. The Access Information Center launches in the
default browser for security authentication.

**Step 2 –** Log into the Access Information Center using your domain credentials.

![Decline access message](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/email/requestdecline.webp)

**Step 3 –** A message displays giving you the option to add an explanation for the user before the
response is processed. Any note added here is included in the email nonfiction to the requesting
user. Optionally enter an explanation into the Notes box, and click **Submit**.

![Access declined message](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/email/requestdeclined.webp)

**Step 4 –** A message displays confirming that your response has been saved. Click **Close** to
close the browser window.

The requester will receive an email notification on the updated status of the request, including any
note you added. See the [Access Request Updated Email](/docs/accessinformationcenter/12.0/access-management/access-requests/email-notifications.md) topic for an example of this
email.

You can view the history of requests processed for your resources in the Owner portal. See the
[Access Request History](/docs/accessinformationcenter/12.0/access-management/access-requests/request-history.md) topic for additional information.

# Access Request Updated Email

When your access request has been processed by the resource owner, you will receive one of the
following:

- Decision Accepted Email
- Decision Denied Email

## Decision Accepted Email

When a resource owner approves your access request, you will receive an email notification.

![Access Request Accepted status update email](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/email/updatedaccepted.webp)

The Decision row indicates the request was accepted. On the
[Request History Page](/docs/accessinformationcenter/12.0/access-management/access-portal/your-access.md) of the Your Access portal, you will
see a green check mark in the Decision column.

## Decision Denied Email

When a resource owner denies your access request, you will receive an email notification.

![Access Request Declined status update email](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/email/updateddeclined.webp)

The Decision row indicates the request was denied. The owner may have provided a note explaining the
decision, which will be visible at the bottom. On the
[Request History Page](/docs/accessinformationcenter/12.0/access-management/access-portal/your-access.md) of the Your Access portal, you will
see a Denied icon in the Decision column.
