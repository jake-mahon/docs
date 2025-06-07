# Approval Process

After all owners assigned to a specific review have submitted their review, its status on the Manage Reviews page of the Resource Reviews interface changes to Responses awaiting review.

![Manage Reviews page with responses awaiting review](/static/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/interfaceapproval.png)

In the approval process, the Review Administrator looks at the owner-recommended changes and chooses to approve, deny, or defer the changes.

The Review Administrator may choose to model the requested changes to see how the user's overall access will be impacted. Change modeling is conducted through the Resource Audit interface. You can access this interface via the __Resource Audit__ button on the [Review Details Page](/docs/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/interface.md#Review-Details-Page). See the [Model Changes in the AIC](/docs/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/changemodeling/model.md) topic for additional information.

__CAUTION:__  If the Access Information Center has been configured to commit changes to Active Directory and the automation prerequisites have been met for this type of review, this change will be committed when the review is complete.

If the Access Information Center automatically commits the approved change, it is immediately visible in Access Information Center reports. It is not necessary to rescan with Netwrix Access Analyzer (formerly Enterprise Auditor). If approved changes are being manually committed by your organization's IT team, it will be necessary to rescan the environment before the changes will be reflected in Access Information Center reports.

See the [Process Owner Responses](#Process-Owner-Responses) topic for instructions on how to perform a granular review of owner-recommended changes. See the [Batch Processing](#Batch-Processing) topic for instructions on how to approve, decline, or defer all owner-recommended changes for a review.

## Process Owner Responses

Follow the steps to perform a granular review of a resource owner's recommended changes.

__CAUTION:__  If the Access Information Center has been configured to commit changes to Active Directory and the automation prerequisites have been met for this type of review, this change will be committed when the review is complete.

__Step 1 –__ On the Manage Reviews page, select a review and click __View Details__. The Review Details page opens.

![Review Details page for reviews awaiting processing](/static/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/reviewdetailsprocess.png)

__Step 2 –__ Select a resource in the list and click __View Responses__. The View Responses window opens.

_Remember,_ the __Resource Audit__ button opens the Resource Audit interface filtered to that resource's reports. This is where you can conduct change modeling.

![viewresponses](/static/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/viewresponses.png)

__Step 3 –__ By default, the table displays only the recommended changes. Select an item and click the desired action button: Accept, Decline, or Defer. The Approval column icon updates. See the [View Responses Window](/docs/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/window/viewresponses.md) topic for additional information.

__Step 4 –__ Repeat Step 3 until all changes have been processed. Then click __Close__. The View Responses window closes.

__Step 5 –__ Repeat Steps 2-4 for each resource included in the review.

__Step 6 –__ Remediation of the accepted changes can be done one of two ways:

- Automatic — If the Access Information Center has been configured to commit AD changes, accepted changes were implemented if the prerequisites were met. If this was a Sensitive Data review, you may need to export the approved changes and send those to your IT department. See the [Automation Prerequisites](/docs/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/prerequisites.md#Automation-Prerequisites) topic for additional information.
- Manual — Accepted changes must be implemented outside of the application by your IT department. Use the __Export Excel__ or __Export CSV__ buttons to generate and download an export of accepted changes.

__Step 7 –__ When remediation is complete, return to the Mange Reviews page (click on the breadcrumb). Select the review in the list and click __Mark Completed__.

The review remains marked as Completed until the next instance is started.

## Batch Processing

Follow the steps to perform a batch processing of a resource owner's recommended changes.

__CAUTION:__  If the Access Information Center has been configured to commit changes to Active Directory and the automation prerequisites have been met for this type of review, this change will be committed when the review is complete.

__Step 1 –__ On the Manage Reviews page, select a review and click __View Details__. The Review Details page opens.

![Review Details page for reviews awaiting processing](/static/img/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/reviewdetailsprocess.png)

__Step 2 –__ Select a resource in the list and open the __Process Changes__ drop-down menu. You can also select multiple resources in the list to be processed at once using the __Ctrl__ and __Shift__ key and click combinations.

_Remember,_ the __Resource Audit__ button opens the Resource Audit interface filtered to that resource's reports. This is where you can conduct change modeling.

__Step 3 –__ Select the desired action for all recommended changes: Accept, Decline, or Defer.

_Remember,_ all recommended changes for the selected resource will be processed with the same resolution.

__Step 4 –__ Repeat Steps 2-3 for each resource included in the review.

__Step 5 –__ Remediation of the accepted changes can be done one of two ways:

- Automatic — If the Access Information Center has been configured to commit AD changes, accepted changes were implemented if the prerequisites were met. If this was a Sensitive Data review, you may need to export the approved changes and send those to your IT department. See the [Automation Prerequisites](/docs/product_docs/accessinformationcenter/access/informationcenter/resourcereviews/prerequisites.md#Automation-Prerequisites) topic for additional information.
- Manual — Accepted changes must be implemented outside of the application by your IT department. Use the __Export Excel__ or __Export CSV__ buttons to generate and download an export of accepted changes.

__Step 6 –__ When remediation is complete, return to the Mange Reviews page (click on the breadcrumb). Select the review in the list and click __Mark Completed__.

The review remains marked as Completed until the next instance is started.
