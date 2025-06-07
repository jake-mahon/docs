# Add New Resource Wizard

The Add new resource wizard is opened with the __Add__ button in the Resource Owners interface.

![Add new resource wizard page showing 1. Select Resources page](/static/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/wizard/selectresource.png)

It contains five pages:

- 1. Select Resource — Select the resource or group to be managed by the owner
- 2. Select Owners — Select Owners from Active Directory
- 3. Description — Optionally enter a note describing the resource
- 4. Access Groups — Optionally enable Access Requests and Owner Ad Hoc changes for this resource. When File System or SharePoint resources will be managed through the AIC, it is necessary to configure access groups for those resources in the target environment. An access group provides one of the following access levels to a specific resource: Read, Modify, or Full Control.

  __NOTE:__ This feature requires the Access Information Center is to be configured to commit changes in Active Directory. Additionally, resource based groups must be set up on the resource. See the [Commit Active Directory Changes](/docs/product_docs/accessinformationcenter/access/informationcenter/admin/additionalconfig/commitchanges.md) topic for additional information.
- 5. Summary — This page provides a preview of the settings selected within the wizard

See the [Add a Resource](#Add-a-Resource) topic for additional information.

## Add a Resource

Follow the steps to add resources one at a time and assign owners.

__Step 1 –__ In the Resource Owners interface, click __Add__. The Add new resource wizard opens.

![Add new resource wizard page showing 1. Select Resources page](/static/img/product_docs/accessinformationcenter/access/informationcenter/accessrequests/wizard/selectresource.png)

__Step 2 –__ On the Select Resource page, select the resource to be managed. Then click __Next__.

- Search field – Begin typing the name of the resource:
  - For File System, enter a share UNC path starting with “\\”
    - For example, \\example\share
  - For SharePoint, enter the site URL starting with “http://”
    - For example, http://farm.corp.com
  - For groups, enter the group name in NTAccount format [DOMAIN\GROUP]
    - For example, acme\app.group
- Browse option – Navigate through the resource tree to select the desired File System or SharePoint resource.

![Add new resources wizard showing 2. Select Owners page](/static/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/wizard/selectowners.png)

__Step 3 –__ On the Select Owners page, click __Add__ to browse for an owner. Repeat this Step to add multiple owners. See the [Add Owner Window](/docs/product_docs/accessinformationcenter/access/informationcenter/resourceowners/window/addowner.md) topic for additional information.

![Add new resources wizard with the 2. Select Owners page showing multiple owners selected](/static/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/wizard/selectownerswithowners.png)

__Step 4 –__ When only one owner is assigned, the owner will be the Primary by default. When multiple owners are assigned, the first owner in the list is the Primary owner. Use the arrow buttons to order the owners. Use the __Add__ and __Remove__ buttons to modify the list of owners. When the owners list is complete, click __Next__.The table has several columns with information on the owners:

- Owner Name — Name of the assigned owner
- Owner Account — sAMAccountName associated with the owner, as read from Active Directory
- Owner Title — Trustee's title as read from Active Directory
- Owner Mail — Trustee's email address as read from Active Directory
- Owner Department — Trustee's department as read from Active Directory
- Confirmed — Indicates whether or not the assigned owner has confirmed ownership of that resource. Tool-tips display when hovering over the icons indicating whether the resource ownership has been confirmed, declined, pending response, or that a confirmation has not been requested.

![Add new resource wizard showing 3. Description page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/action/servicenow/description.png)

__Step 5 –__ On the Description page, optionally add a description for the resource in the textbox. Then click __Next__.

![Add new resource wizard showing 4. Access Groups page](/static/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/wizard/accessgroups.png)

__Step 6 –__ On the Access Groups page, optionally enable Access Requests and Owner Ad Hoc changes for this resource:

- Allow access requests — Check this option to enable your domain users to make self-service access requests for this resource
- Allow owners to change access — Check this option to enable the owner to make ad hoc access changes for this resource

![Add new resource wizard showing 4. Access Groups page with groups configured](/static/img/product_docs/accessinformationcenter/access/informationcenter/resourceowners/wizard/accessgroupsconfigured.png)

__Step 7 –__ When File System or SharePoint resources will be managed through the AIC, it is necessary to configure access groups for those resources in the target environment. An access group provides one of the following access levels to a specific resource: Read, Modify, or Full Control. If either option in Step 6 is selected for this resource, it is necessary to set a group for at least one access level. Select the desired access level and click __Change__. The Select Group Window opens. Select the desired group and click __OK__. The Select Group window closes and the group appears in the table. Repeat this step for each access level desired. See the [Select Group Window](/docs/product_docs/accessinformationcenter/access/informationcenter/resourceowners/window/selectgroup.md) topic for additional information.

__Step 8 –__ Click __Next__ to continue.

![Add new resource wizard showing 5. Summary page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/adinventory/summary.png)

__Step 9 –__ On the Summary page, review the settings and click __Next__. The Access Information Center begins to process the ownership configuration.

![Add new resource wizard completed page](/static/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.png)

__Step 10 –__ The action status displays on the page. When the task has completed (100%), click __Close__. The Add new resource wizard closes.

This resource is now being managed through the Access Information Center.
