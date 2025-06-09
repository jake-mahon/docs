# Create Review Wizard

The Create Review wizard is opened with the __Create__ button on the Entitlement Reviews interface. See the [Manage Reviews Page](/docs/auditor/access/reviews/entitlementreviews/interface.md#manage-reviews-page) topic for additional information.

![Create Review wizard](/img/product_docs/auditor/access/reviews/entitlementreviews/wizard/createreviewreviewtype.png)

It contains three pages:

- 1. Review Type

  - Review Name — Visible only to Review Administrators
  - Select the type of review to be created:

    - Membership – Review group membership
    - Access – Review user access rights to resources
- 2. Resources — Select resources to be included in the review
- 3. Summary

  - Preview of the review selections
  - Provides a status of the action being committed. Action includes creating the review and sending notifications to owners.

See the [Create a Review](#Create-a-Review) topic for additional information.

## Create a Review

Follow the steps to create a review.

__Step 1 –__ On the Manage Reviews page, click Create. The Create Review wizard opens.

![Create Review wizard showing the Review Type page](/img/product_docs/auditor/access/reviews/entitlementreviews/wizard/createreviewreviewtype.png)

__Step 2 –__ On the Review Type page, provide the following information and click __Next__:

- Review Name — Enter a unique, descriptive name for the review. The review name is only visible to Review Administrators.
- Select Type — Reviews are limited to one type. Select the type of review from the buttons provided:

  - Membership – Review group membership
  - Access – Review user access rights to resources

![Create Review wizrd showing the Resources page](/img/product_docs/auditor/access/reviews/entitlementreviews/wizard/createreviewresources.png)

__Step 3 –__ On the Resources page, select the resources to be included in the review. The Search feature is available to filter the list of available resource that match the type of review being created.

- The table displays the following information:

  - Resources — The icon indicates the type of resource. The resource name includes its location, such as the UNC path for a file system resource, the URL for SharePoint resource, or Group name (e.g., [Domain]\[Group]).
  - Description — Description or explanation of the resource as supplied by either the Ownership Administrator or the assigned owner
  - Reviewer — Primary owner assigned to the resource
  - Confirmed — Indicates whether or not the assigned owner has confirmed ownership of that resource. Tool-tips display when hovering over the icons indicating whether the resource ownership has been confirmed, declined, pending response, or that a confirmation has not been requested.
  - Scan Data — A checkmark indicates the resource has been scanned. Only resources with scan data can be included in a review.
- Select the desired resource(s) and click __Add__. The __View Selections__ button indicates how many resources have been selected. Click the button to open the Selected Resources window, where you can view and modify the selections. See the [Selected Resources Window](/docs/auditor/access/reviews/entitlementreviews/window/selectedresources.md) topic for additional information.
- Once the desired resources have been selected, click __Next__.

![Create Review wizard showing the Summary page](/img/product_docs/auditor/access/reviews/entitlementreviews/wizard/createreviewsummary.png)

__Step 4 –__ On the Summary page, review the settings and click Finish. The Access Reviews begins to create the review. Action status displays on the page. When the update has completed (100%), click Close. The Create Review wizard closes.

The new review displays in the table on the Manage Reviews page. An email was sent to the primary owner assigned to the resource(s) in this review. By default, the application is configured to send notifications only to the primary owner. However, this can be customized on the Configuration > Notifications page to send notifications to all assigned owners. See the [Notifications Page](/docs/auditor/access/reviews/admin/configuration/notifications.md) topic for additional information.
