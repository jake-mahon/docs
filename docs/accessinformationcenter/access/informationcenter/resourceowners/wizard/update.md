# Update Resource Wizard

The Update resource wizard is opened with the __Update__ button in the Resource Owners interface.

![Update Resource wizard showing 1. Select Owners page](/static/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/wizard/selectowners.png)

It contains four pages:

- 1. Select Owners — Lists the current owner(s). Modify by adding new owners, removing owners, or changing owner priority order (primary, secondary, etc.)
- 2. Description — Enter or modify a note describing the resource
- 3. Access Groups — Enable or disable Access Requests and Owner Ad Hoc changes for this resource. When File System or SharePoint resources will be managed through the AIC, it is necessary to configure access groups for those resources in the target environment. An access group provides one of the following access levels to a specific resource: Read, Modify, or Full Control.

  __NOTE:__ This feature requires the Access Information Center is to be configured to commit changes in Active Directory. Additionally, resource based groups must be set up on the resource. See the [Commit Active Directory Changes](/docs/product_docs/accessinformationcenter/access/informationcenter/admin/additionalconfig/commitchanges.md) topic for additional information.
- 4. Summary — Provides a preview of the settings selected within the wizard

See the [Update a Resource](#Update-a-Resource) topic for additional information.

## Update a Resource

Follow the steps to update ownership configuration for a resource.

__Step 1 –__ In the Resource Owners interface, select the desired resource and click __Update__. The Update resource wizard opens.

![Update Resource wizard showing 1. Select Owners page](/static/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/wizard/selectowners.png)

__Step 2 –__ The Select Owners page lists the currently assigned owner(s). Modify as desired and click __Next__ to continue.

- Add new owners — Click __Add__ to browse for a new owner. See the [Add Owner Window](/docs/product_docs/accessinformationcenter/access/informationcenter/resourceowners/window/addowner.md) topic for additional information.
- Remove an owner — Select an owner and click __Remove__
- Change owner priority — Select an owner and use the arrow buttons to change the order

_Remember,_ the first owner in the list is the primary owner. The table has several columns with information on the owners:

- Owner Name — Name of the assigned owner
- Owner Account — sAMAccountName associated with the owner, as read from Active Directory
- Owner Title — Trustee's title as read from Active Directory
- Owner Mail — Trustee's email address as read from Active Directory
- Owner Department — Trustee's department as read from Active Directory
- Confirmed — Indicates whether or not the assigned owner has confirmed ownership of that resource. Tool-tips display when hovering over the icons indicating whether the resource ownership has been confirmed, declined, pending response, or that a confirmation has not been requested.

![Update resource wizard showing 2. Description page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/servicenow/description.png)

__Step 3 –__ The Description page displays any description that has been provided by either the Ownership Administrator or the assigned owner(s) for the resource. Modify as desired by typing in the textbox. Then click __Next__ to continue.

![Update resource wizard showing 3. Access Groups page](/static/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/wizard/accessgroups.png)

__Step 4 –__ The Access Groups page indicates whether or not the resource is available for Access Requests or Owner Ad Hoc changes. Modify as desired and click __Next__ to continue.

- Allow access requests — Enable/Disable your domain users to make self-service access requests for this resource
- Allow owners to change access — Enable/Disable the owner to make ad hoc access changes for this resource

__NOTE:__ File System and SharePoint resources must have resource based groups configured for each level of access: Read, Modify, and Full Control. If either option is selected for this resource, it is necessary to set a group for at least one access level. Select the desired access level and click __Change__. The Select Group Window opens. Select the desired group and click __OK__. The Select Group window closes and the group appears in the table. Repeat this step for each access level desired. See the [Select Group Window](/docs/product_docs/accessinformationcenter/access/informationcenter/resourceowners/window/selectgroup.md) topic for additional information.

![Update resource wizard showing 4. Summary page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/adinventory/summary.png)

__Step 5 –__ On the Summary page, review the settings and click __Next__. The Access Information Center begins to process the ownership configuration.

![Update resource wizard completed page](/static/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.png)

__Step 6 –__ The action status displays on the page. When the update has completed (100%), click __Close__. The Update resource wizard closes.

This updates to ownership configuration have been processed.
