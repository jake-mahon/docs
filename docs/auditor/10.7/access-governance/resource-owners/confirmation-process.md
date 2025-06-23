---
title: confirmation process
sidebar_label: confirmation-process
description: Auditor 10.7 documentation for confirmation process with configuration details, usage instructions, and implementation guidance.
---

# Ownership Confirmation

The reason for assigning owners to resources is to enable those resources to be included in reviews,
or attestations, conducted through the application. In order for this to work, the assigned owner
needs to claim that ownership responsibility. Resources that do not have confirmed owners may fall
through the cracks.

**NOTE:** This does require the Notification settings to be configured for the Access Reviews
application. See the [Notifications Page](/docs/auditor/10.7/access-governance/access-reviews/configuration.md) topic for
additional information.

![Table in Resource Owners interface showing several resources being managed and all confirmation status icons](/img/product_docs/auditor/access/reviews/resourceowners/tablestatus.webp)

The table in the Resource Owners interface includes a Status column. The following icons appear in
this column to indicate the owner confirmation status:

| Icon                                                                                                                                            | Meaning   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Yellow circle with whit question mark](/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/statusnostatus.webp) | No Status | Indicates ownership confirmation has not been requested, and there is no ownership status at this time                                                                                                                                                                                                                                                                                                                                                                                                     |
| ![Blue circle with white clock face](/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/statuswaiting.webp)      | Waiting   | Indicates a request for confirmation has been sent, and you are waiting for a response from the assigned owner. Hover over the icon to view the date timestamp of the request.                                                                                                                                                                                                                                                                                                                             |
| ![Green circle with white checkmark](/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/statusconfirmed.webp)    | Confirmed | Indicates the assigned owner confirmed ownership of the resource. Hover over the icon to view the date timestamp of the confirmation.                                                                                                                                                                                                                                                                                                                                                                      |
| ![Red circle with white X](/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/statusdeclined.webp)               | Declined  | Indicates the assigned owner declined ownership of the resource. These individuals would have been asked to suggest an alternative owner. Check the Notes for the resource to view this information. Hover over the icon to view the date timestamp of the decline. _Remember,_ a resource with declined ownership needs to be updated to assign a new owner. See the [Update Resource Wizard](/docs/auditor/10.7/access-governance/resource-owners/owner-management.md) topic for additional information. |

If multiple owners have been assigned, there is a choice for which assigned owner(s) should receive
the confirmation. If multiple owners were sent the request, the column remains as a waiting symbol
until the assigned Primary owner replies.

See the [Confirm Ownership Wizard](/docs/auditor/10.7/access-governance/resource-owners/confirmation-process.md) topic for additional information.

# Ownership Confirmation Request Email

The Ownership Administrator may request ownership confirmation for a resource being managed through
the Access Reviews application. As an assigned owner, you will receive the following email.

![Ownership Confirmation Request Email with Yes and No buttons for responding](/img/product_docs/auditor/access/reviews/resourceowners/email/confirmemail.webp)

The Ownership Confirmation Request email provides buttons for confirming (Yes) or declining (No)
ownership of the listed resource. You will be asked to authenticate for your response to be
processed. The application will launch in your default browser. Enter your domain credentials to
complete the process. One of two messages will appear according to if you confirmed or declined.

## Confirmed Ownership Message

If you have accepted ownership for the assigned resource, the browser will display the following
message after authentication:

![confirmemailaccept](/img/product_docs/auditor/access/reviews/resourceowners/email/confirmemailaccept.webp)

"Your response has been saved. You may close this window and delete the confirmation request
e-mail."

## Declined Ownership Message

If you have declined ownership for the assigned resource, the browser will display the following
message after authentication:

![Ownership declined browser message](/img/product_docs/auditor/access/reviews/resourceowners/email/confirmemaildecline.webp)

"Before we update ownership can you suggest another owner?" Enter possible owners in the textbox.
Click **Submit** to complete the process.

![Ownership declined browser message after an alternative owner is submitted](/img/product_docs/auditor/access/reviews/resourceowners/email/confirmemaildecline2.webp)

"Your response has been saved. You may close this window and delete the confirmation request
e-mail."

# Confirm Ownership Wizard

The Confirm Ownership wizard is opened with the **Request Confirmation** button in the Resource
Owners interface. It can be opened for one or multiple resources.

![Confirm Ownership wizard showing 1.Select Owners page](/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/wizard/selectowners.webp)

It contains one page:

- 1. Select Owners — Lists the current owner(s) for each selected resource and confirmation status

## Request Ownership Confirmation

Follow the steps to request ownership confirmation.

**Step 1 –** In the Resource Owners interface, select the desired resource or resources and click
Request Confirmation. The Confirm Ownership wizard opens.

![Confirm Ownership wizard showing 1.Select Owners page](/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/wizard/selectowners.webp)

**Step 2 –** On the Select Owners page, you can optionally remove owners you do not want or need
ownership confirmation from. Select those owners and click **Remove**. Those owners will not receive
the confirmation email. Once the list is set as desired, click **Finish**. The Access Reviews
application begins to send the confirmation email. The table provides the following information:

- Resource Name — The icon indicates the type of resource. The resource name includes its location,
  such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name
  (e.g., [Domain]\[Group]).
- Owner Name — Name of the assigned owner
- Confirmed — Indicates whether or not the assigned owner has confirmed ownership of that resource.
  Tool-tips display when hovering over the icons indicating whether the resource ownership has been
  confirmed, declined, pending response, or that a confirmation has not been requested.

![selectownerstaskcompleted](/img/product_docs/auditor/access/reviews/resourceowners/wizard/selectownerstaskcompleted.webp)

**Step 3 –** The action status displays on the page. When the owner confirmation notification has
completed (100%), click Close. The Confirm Ownership wizard closes.

The selected owners receive an email from the Access Reviews application asking if they are the
owner of the assigned resource. See the
[Ownership Confirmation Request Email](/docs/auditor/10.7/access-governance/resource-owners/confirmation-process.md) topic for additional
information.
