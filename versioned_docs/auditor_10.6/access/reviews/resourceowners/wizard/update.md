# Update Resource Wizard

The Update resource wizard is opened with the __Update__ button in the Resource Owners interface.

![Update Resource wizard showing 1. Select Owners page](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/wizard/selectowners.png)

It contains three pages:

- 1. Select Owners — Lists the current owner(s). Modify by adding new owners, removing owners, or changing owner priority order (primary, secondary, etc.)
- 2. Description — Enter or modify a note describing the resource
- 3. Summary — Provides a preview of the settings selected within the wizard

See the [Update a Resource](#update-a-resource) topic for additional information.

## Update a Resource

Follow the steps to update ownership configuration for a resource.

__Step 1 –__ In the Resource Owners interface, select the desired resource and click __Update__. The Update resource wizard opens.

![Update resource wizard showing 1. Select Owners page](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/wizard/selectowners.png)

__Step 2 –__ The Select Owners page lists the currently assigned owner(s). Modify as desired and click __Next__ to continue.

- Add new owners — Click __Add__ to browse for a new owner. See the [Add Owner Window](/versioned_docs/auditor_10.6/access/reviews/resourceowners/window/addowner.md) topic for additional information.
- Remove an owner — Select an owner and click __Remove__
- Change owner priority — Select an owner and use the arrow buttons to change the order

_Remember,_ the first owner in the list is the primary owner. The table has several columns with information on the owners:

- Owner Name — Name of the assigned owner
- Owner Account — sAMAccountName associated with the owner, as read from Active Directory
- Owner Mail — Trustee's email address as read from Active Directory
- Owner Title — Trustee's title as read from Active Directory
- Owner Department — Trustee's department as read from Active Directory
- Confirmed — Indicates whether or not the assigned owner has confirmed ownership of that resource. Tool-tips display when hovering over the icons indicating whether the resource ownership has been confirmed, declined, pending response, or that a confirmation has not been requested.

![Update resource wizard showing 2. Description page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/servicenow/description.png)

__Step 3 –__  The Description page displays any description that has been provided by either the Ownership Administrator or the assigned owner(s) for the resource. Modify as desired by typing in the textbox. Then click __Next__ to continue.

![Update resource wizard showing 3. Summary page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/summary.png)

__Step 4 –__ On the Summary page, review the settings and click Finish. The Access Reviews application begins to process the ownership changes.

![Update resource wizard with 3. Summary page showing action status 100% complete](/img/versioned_docs/auditor_10.6/access/reviews/resourceowners/wizard/summarytaskcompleted.png)

__Step 5 –__ The action status displays on the page. When the update has completed (100%), click __Close__. The Update resource wizard closes.

This updates to ownership configuration have been processed.
