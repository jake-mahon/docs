---
title: review process
sidebar_label: review-process
description: Auditor 10.7 documentation for review process with configuration details, usage instructions, and implementation guidance.
---

# Approval Process

After all owners assigned to a specific review have submitted their review, its status on the Manage
Reviews page of the Entitlement Reviews interface changes to Responses awaiting review.

![Resource Reviews interface showing Manage Reviews page](/img/product_docs/auditor/access/reviews/entitlementreviews/managereviewspage.webp)

In the approval process, the Review Administrator looks at the owner-recommended changes and chooses
to approve, deny, or defer the changes.

See the Process Owner Responses topic for instructions on how to perform a granular review of
owner-recommended changes. See the Batch Processing topic for instructions on how to approve,
decline, or defer all owner-recommended changes for a review.

## Process Owner Responses

Follow the steps to perform a granular review of a resource owner's recommended changes.

**Step 1 –** On the Manage Reviews page, select a review and click **View Details**. The Review
Details page opens.

![Resource Reviews interface showing the Review Details page](/img/product_docs/auditor/access/reviews/entitlementreviews/reviewdetailspage.webp)

**Step 2 –** Select a resource in the list and click **View Responses**. The View Responses window
opens.

![viewresponses](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/viewresponses.webp)

**Step 3 –** By default, the table displays only the recommended changes. Select an item and click
the desired action button: Accept, Decline, or Defer. The Approval column icon updates. See the
[View Responses Window](/docs/auditor/10.7/access-governance/access-reviews/managing-reviews.md) topic for additional information.

**Step 4 –** Repeat Step 3 until all changes have been processed. Then click **Close**. The View
Responses window closes.

**Step 5 –** Repeat Steps 2-4 for each resource included in the review.

**Step 6 –** Remediation of the accepted changes must be done manually. Accepted changes must be
implemented outside of the application by your IT department. Use the **Export Excel** or **Export
CSV** buttons to generate and download an export of accepted changes.

**Step 7 –** When remediation is complete, return to the Mange Reviews page (click on the
breadcrumb). Select the review in the list and click **Mark Completed**.

The review remains marked as Completed until the next instance is started.

## Batch Processing

Follow the steps to perform a batch processing of a resource owner's recommended changes.

**Step 1 –** On the Manage Reviews page, select a review and click **View Details**. The Review
Details page opens. .

![Resource Reviews interface showing the Review Details page](/img/product_docs/auditor/access/reviews/entitlementreviews/reviewdetailspage.webp)

**Step 2 –** Select a resource in the list and open the **Process Changes** drop-down menu.

**Step 3 –** Select the desired action for all recommended changes: Accept, Decline, or Defer.

_Remember,_ all recommended changes for the selected resource will be processed with the same
resolution.

**Step 4 –** Repeat Steps 2-3 for each resource included in the review.

**Step 5 –** Remediation of the accepted changes must be done manually. Accepted changes must be
implemented outside of the application by your IT department. Use the **Export Excel** or **Export
CSV** buttons to generate and download an export of accepted changes.

**Step 6 –** When remediation is complete, return to the Mange Reviews page (click on the
breadcrumb). Select the review in the list and click **Mark Completed**.

The review remains marked as Completed until the next instance is started.

# Perform an Access Review

An Access review can be conducted for various types of data repository resources. Follow the steps
to perform an Access review.

**Step 1 –** On the Pending Reviews page, select the resource with a pending Access review and click
**Begin Review**. The Resource Review page opens to the 1 Make changes tab.

![Resource Reviews page showing an Access Review on 1 Make changes tab](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/reviewpageaccess.webp)

The table displays access information for the resource being reviewed:

- Trustee Name — Name of the trustee with access to this resource. If the trustee is a group, click
  the hyperlink to open the Group Membership window. See the
  [Group Membership Window](/docs/auditor/10.7/access-governance/entitlement-management/group-membership.md) topic for additional information.
- Access Level (Full Control, Modify, and Read) columns — Blue checkmark icon indicates current
  access level

**Step 2 –** Recommend access changes for a trustee by clicking the icon for the desired access
level (Full Control, Modify, or Read columns). A yellow checkmark icon indicates the new level of
access you are recommending.

**Step 3 –** Recommend removing access by selecting one or more trustees and clicking the **Remove
Access** button or by clicking on a checkmark icon. A blank yellow icon indicates you are
recommending all access be removed; it appears in the column for the current level of access.

_Remember,_ at any time you can save your recommendations and exit the review. It will remain
pending until you submit all recommendations for this resource.

**Step 4 –** When the recommended changes are set as desired, click **Next**. The 2 Review changes
tab opens in the Resource Review page.

![Resource Reviews page showing an Access Review on 2 Review changes tab](/img/product_docs/auditor/access/reviews/entitlementreviews/review/reviewpageaccesstab2.webp)

**Step 5 –** This tab displays a filtered table of trustees with recommended changes. Confirm your
recommendations and optionally add notes to the Review Administrator. Owners are encouraged to leave
notes explaining why the change is recommended.

**NOTE:** To make changes to your recommendations, you must return to the first tab. Click
**Previous**.

**Step 6 –** When all recommendations are confirmed and the desire notes added, click **Submit**. A
message displays stating that the review is complete. Click **OK** to close the message window.

The review for this resource is now complete. You will be redirected to the Pending Reviews page.
Your recommended changes have been sent to the Review Administrator for approval and processing.

# Perform a Membership Review

A Membership review is an evaluation of group membership. Follow the steps to perform a Membership
review.

**Step 1 –** On the Pending Reviews page, select the resource with a pending Membership review and
click **Begin Review**. The Resource Review page opens to the 1 Make changes tab.

![Resource Reviews page showing a Membership Review on 1 Make changes tab](/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/review/reviewpagemembership.webp)

The table displays membership information for the group being reviewed:

- Trustee Name — Name of the trustee with group membership. If the trustee is a group, click the
  hyperlink to open the Group Membership window. See the
  [Group Membership Window](/docs/auditor/10.7/access-governance/entitlement-management/group-membership.md) topic for additional information.
- Member — Blue checkmark icon indicates current membership

**Step 2 –** Recommend removing membership by selecting one or more trustees and clicking the
**Remove Access** button or by clicking on a checkmark icon. A blank yellow icon indicates you are
recommending the trustee be removed from the group.

_Remember,_ at any time you can save your recommendations and exit the review. It will remain
pending until you submit all recommendations for this resource.

**Step 3 –** When the recommended changes are set as desired, click **Next**. The 2 Review changes
tab opens in the Resource Review page.

![Resource Reviews page showing a Membership Review on 2 Review changes tab](/img/product_docs/auditor/access/reviews/entitlementreviews/review/reviewpagemembershiptab2.webp)

**Step 4 –** This tab displays a filtered table of trustees with recommended changes. Confirm your
recommendations and optionally add notes to the Review Administrator. Owners are encouraged to leave
notes explaining why the change is recommended.

**NOTE:** To make changes to your recommendations, you must return to the first tab. Click
**Previous**.

**Step 5 –** When all recommendations are confirmed and the desire notes added, click **Submit**. A
message displays stating that the review is complete. Click **OK** to close the message window.

The review for this resource is now complete. You will be redirected to the Pending Reviews page.
Your recommended changes have been sent to the Review Administrator for approval and processing.
