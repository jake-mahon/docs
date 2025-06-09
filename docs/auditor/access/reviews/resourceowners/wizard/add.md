# Add New Resource Wizard

The Add new resource wizard is opened with the __Add__ button in the Resource Owners interface.

![Add new resource wizard showing 1. Select Resources page](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/wizard/selectresource.png)

It contains four pages:

- 1. Select Resource — Select the resource or group to be managed by the owner
- 2. Select Owners — Select Owners from Active Directory
- 3. Description — Optionally enter a note describing the resource
- 4. Summary — This page provides a preview of the settings selected within the wizard

See the [Add a Resource](#Add-a-Resource) topic for additional information.

## Add a Resource

Follow the steps to add resources one at a time and assign owners.

__Step 1 –__ In the Resource Owners interface, click __Add__. The Add new resource wizard opens.

![Add new resource wizard page showing 1. Select Resources page](/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/wizard/selectresource.png)

__Step 2 –__ On the Select Resource page, select the resource to be managed. Then click __Next__.

- Search field – Begin typing the name of the resource:
  - For File System, enter a share UNC path starting with “\\”
    - For example, \\example\share
  - For SharePoint, enter the site URL starting with “http://”
    - For example, http://farm.corp.com
  - For groups, enter the group name in NTAccount format [DOMAIN\GROUP]
    - For example, acme\app.group
- Browse option – Navigate through the resource tree to select the desired File System or SharePoint resource.

![Add new resources wizard showing 2. Select Owners page](/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/wizard/selectowners.png)

__Step 3 –__ On the Select Owners page, click __Add__ to browse for an owner. Repeat this Step to add multiple owners. See the [Add Owner Window](/docs/auditor/access/reviews/resourceowners/window/addowner.md) topic for additional information.

![Add new resources wizard with the 2. Select Owners page showing multiple owners selected](/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/wizard/selectownerswithowners.png)

__Step 4 –__ When only one owner is assigned, the owner will be the Primary by default. When multiple owners are assigned, the first owner in the list is the Primary owner. Use the arrow buttons to order the owners. Use the __Add__ and __Remove__ buttons to modify the list of owners. When the owners list is complete, click __Next__.The table has several columns with information on the owners:

- Owner Name — Name of the assigned owner
- Owner Account — sAMAccountName associated with the owner, as read from Active Directory
- Owner Mail — Trustee's email address as read from Active Directory
- Owner Title — Trustee's title as read from Active Directory
- Owner Department — Trustee's department as read from Active Directory
- Confirmed — Indicates whether or not the assigned owner has confirmed ownership of that resource. Tool-tips display when hovering over the icons indicating whether the resource ownership has been confirmed, declined, pending response, or that a confirmation has not been requested.

![Add new resource wizard showing 3. Description page](/img/product_docs/accessanalyzer/enterpriseauditor/admin/action/servicenow/description.png)

__Step 5 –__ On the Description page, optionally add a description for the resource in the textbox. Then click __Next__.

![Add new resource wizard showing 4. Summary page](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/adinventory/summary.png)

__Step 6 –__ On the Summary page, review the settings and click Finish. The Access Reviews application begins to process the ownership configuration.

![Add new resource wizard with 4. Summary page showing action status 100% completed](/img/product_docs/auditor/access/reviews/resourceowners/wizard/summarytaskcompleted.png)

__Step 7 –__ The action status displays on the page. When the task has completed (100%), click __Close__. The Add new resource wizard closes.

This resource is now being managed through the Access Reviews application.
