# Activity Details Report for Entra ID User

The Activity Details report for an Entra ID (formerly Azure Active Directory) user object provides
details on every activity event logged by the audited user during the selected date range. This
report includes a Permission Changes table.

![Activity Details report for an Entra ID user](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/user/entraid/activitydetailsentraid.webp)

This report is comprised of the following columns:

- Collector – Refers to the collection source for the permission (for example, **FileSystem** for
  the Enterprise Auditor File System Solution, **SharePoint** for the Enterprise Auditor SharePoint
  Solution, and so on)
- Server Name – Name of the file system server or SharePoint farm/instance where the activity event
  occurred
- Access Time – Date and timestamp for when the operation occurred
- Resource – Resource type being accessed
- Operation – Name of operation logged
- Access – Whether the trustee was granted access to execute the operation: **Allowed** or
  **Denied**
- Path – Original location where the operation occurred

# Effective Access Report for Entra ID User

The Effective Access report for a user object provides insight into every resource the audited Entra
ID (formerly Azure Active Directory) user has access to and what level of access has been granted.
Effective access is a calculation based on several variables according to the type of resource. This
report includes a Permission Source table.

See the
[Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
topic for File Systems for additional information on the effective access calculations for file
system resources. See the
[Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
topic for SharePoint for additional information on the effective access calculations for SharePoint
resources.

![Effective Access report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/entraid/effectiveaccessentraid.webp)

This report contains a list of all resources the audited user has the ability to access within the
targeted environments. When this report is opened, the Access Information Center begins analyzing
all of the collected data available for all access points. While the report data is loading, there
is a status bar in the upper-right corner of the Reports pane that indicates the data loading
progress. After the data has loaded, the number of rows is displayed.

**NOTE:** This report continues to load while other reports are being opened and viewed. As long as
the Access Information Center user remains logged into the Access Information Center, it continues
to load until all data has been analyzed for the audited user.

The scoping options allow Access Information Center users to specifying what collected data should
be analyzed in order to generate this report. Unlike other filter options, this can impact the
loading time depending on the scoping options selected. See the
[Scope an Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/navigation/effective-access.md)
topic for instructions on using this feature.

This report is comprised of the following columns:

- Collector – Refers to the collection source for the permission (for example, **FileSystem** for
  the Enterprise Auditor File System Solution, **SharePoint** for the Enterprise Auditor SharePoint
  Solution, and so on)
- Server Name – Name of the file system server or SharePoint farm/instance where the permission is
  set
- Type – Type of resource where the permission is set
- Path – Location of the resource where the permission is set
- Open Access – True or False to indicate if access is granted through a high-risk trustee (for
  example, Everyone, Authenticated Users, or Domain Users)

The following rights are a normalized representation of the permissions granted to the trustee:

- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources

There is one table at the bottom displaying Permission Source for the select resource. It contains
all of the ways the audited user has been granted rights to the selected resource.

![Permission Source table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/entraid/effectiveaccessentraidtable.webp)

The number of rows for this table indicates the number of ways this audited user has been granted
access. This table is comprised of the following columns:

- Source Path – Location for which the audited object was granted rights to the selected resource,
  which can be represented two ways:

  - Directly Applied – Rights granted directly to the audited object
  - Access through another trustee, path starts with trustee assigned the direct rights and shows
    all nested groups leading to the audited object

- Source Type – Source of the permission (for example, Share, Folder, Site Permission, Web
  Application Policy, and so on)
- Source Name – Name of the resource where the permission is assigned

The following rights are a normalized representation of the permissions granted to the trustee:

- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

# Member Of Report for Entra ID User

The Member Of report for a user object provides a list of all groups of which the audited Entra ID
(formerly Azure Active Directory) user is a member. This report includes a Membership Paths table.

![Member Of report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/entraid/memberofentraid.webp)

This report is comprised of the following columns:

- Group Account – Account associated with the group
- Domain Name – Name of the domain
- Group Scope – Scope of the group object: Domain Local, Global, or Universal
- Group Target – Not applicable to Entra ID. The value will always be None.
- Membership – Type of membership the audited object has to the selected group

  - Direct – Object is specifically assigned to this group
  - Nested – Object is a member of a group which has membership in this group

- Description – Description of this group from Entra ID
- ManagedBy Name – Name of manager for the group from Entra ID

Since this report is a list of Entra ID groups, the Group Membership pane displays the group
membership, including nested groups.

![Membership Paths table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/entraid/memberofentraidtable.webp)

There is one table at the bottom displaying Membership Paths for the select group. It contains all
of the ways the audited user has been granted membership to the selected group.

- Type – Type of membership the audited object has to the selected groupType of membership the
  audited user has to the selected group

  - Direct – Object is specifically assigned to this group
  - Nested – Object is a member of a group which has membership in this group

- Membership Path – Displays location for the audited object’s membership to the selected group,
  starts with group and ends with user

  - For Direct Membership – Path is [Group Name] > [User Name]
  - For Nested Membership – Path is [Group Name] > [Name of Nested Group] > [User Name]

- Nested Level – Count of groups nested between the selected group and the audited object’s direct
  membership

# Permissions Report for Entra ID User

The Permissions report for a user object provides a list of all resources where the audited Entra ID
(formerly Azure Active Directory) user has been assigned permissions. The **Include Inherited**
filter checkbox is active by default, which means the report displays both direct and inherited
permissions unless modified by the Access Information Center user. See the
[Results Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#results-pane)
topic for information on filter options.

![Permissions report for Entra ID](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/entraid/permissionsentraid.webp)

This report is comprised of the following columns:

- Collector – Refers to the collection source for the permission (for example, **FileSystem** for
  the Enterprise Auditor File System Solution, **SharePoint** for the Enterprise Auditor SharePoint
  Solution, and so on)
- Server Name – Name of the file system server or SharePoint farm/instance where the permission is
  set
- Type – Type of resource where the permission is set
- Source – Direct or Inherited permission type
- Path – Location of the resource where the permission is set

The following rights are a normalized representation of the permissions granted to the trustee:

- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

# Effective Access Report for Entra ID Group

The Effective Access report for a group object provides the insight into every resource the audited
Entra ID (formerly Azure Active Directory) group has access to and what level of access has been
granted. Effective access is a calculation based on several variables according to the type of
resource. This report includes a Permission Source table.

See the
[Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/windows-shares.md)
topic for File Systems for additional information on the effective access calculations for file
system resources. See the
[Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
topic for SharePoint for additional information on the effective access calculations for SharePoint
resources.

![Effective Access report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/entraid/effectiveaccessentraid.webp)

This report contains a list of all resources the audited Entra ID group has the ability to access
within the targeted environments. When this report is opened, the Access Information Center begins
analyzing all of the collected data available for all access points. While the report data is
loading, there is a status bar in the upper-right corner of the Reports pane that indicates the data
loading progress. After the data has loaded, the number of rows is displayed.

**NOTE:** This report continues to load while other reports are being opened and viewed. As long as
the Access Information Center user remains logged into the Access Information Center, it continues
to load until all data has been analyzed for the audited group.

The scoping options allow Access Information Center users to specifying what collected data should
be analyzed in order to generate this report. Unlike other filter options, this can impact the
loading time depending on the scoping options selected. See the
[Scope an Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/navigation/effective-access.md)
topic for instructions on using this feature.

This report is comprised of the following columns:

- Collector – Refers to the collection source for the permission (for example, **FileSystem** for
  the Enterprise Auditor File System Solution, **SharePoint** for the Enterprise Auditor SharePoint
  Solution, and so on)
- Server Name – Name of the file system server or SharePoint farm/instance where the permission is
  set
- Type – Type of resource where the permission is set
- Path – Location of the resource where the permission is set
- Open Access – True or False to indicate if access is granted through a high-risk trustee (for
  example, Everyone, Authenticated Users, or Domain Users)

The following rights are a normalized representation of the permissions granted to the trustee:

- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources

There is one table at the bottom displaying Permission Source for the select resource. It contains
all of the ways the audited Entra ID group has been granted rights to the selected resource.

![Permission Source table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/entraid/effectiveaccessentraidtable.webp)

The number of rows for this table indicates the number of ways the audited Entra ID group has been
granted access to this resource. This table is comprised of the following columns:

- Source Path – Location for which the audited object was granted rights to the selected resource,
  which can be represented two ways:

  - Directly Applied – Rights granted directly to the audited object
  - Access through another trustee, path starts with trustee assigned the direct rights and shows
    all nested groups leading to the audited object

- Source Type – Source of the permission (for example, Share, Folder, Site Permission, Web
  Application Policy, and so on)
- Source Name – Name of the resource where the permission is assigned

The following rights are a normalized representation of the permissions granted to the trustee:

- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources

# Member Of Report for Entra ID Group

The Member Of report for a group object provides a list of all Entra Id (formerly Azure Active
Directory) groups of which the audited group is a member. This report includes a Membership Paths
table.

![Member Of report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/entraid/memberofentraid.webp)

This report is comprised of the following columns:

- Group Account – Account associated with the group
- Domain Name – Name of the domain
- Group Scope – Scope of the group object: Domain Local, Global, or Universal
- Group Target – Not applicable to Entra ID. The value will always be None.
- Membership – Type of membership the audited object has to the selected group

  - Direct – Object is specifically assigned to this group
  - Nested – Object is a member of a group which has membership in this group

- Description – Description of this group from Entra ID
- ManagedBy Name – Name of manager for the group from Entra ID

Since this report is a list of Entra ID groups, the Group Membership pane displays the group
membership, including nested groups.

![Membership Paths table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/entraid/memberofentraidtable.webp)

There is one table at the bottom displaying Membership Paths for the selected Entra ID group. It
contains all of the ways the audited group has been granted membership to the selected group.

- Type – Type of membership the audited object has to the selected group

  - Direct – Object is specifically assigned to this group
  - Nested – Object is a member of a group which has membership in this group

- Membership Path – Displays location for the audited object’s membership to the selected group,
  starts with this group and ends with the selected group

  - For Direct Membership – Path is [Group Name] > [Selected Group Name]
  - For Nested Membership – Path is [Group Name] > [Name of Nested Group] > [Selected Group Name]

- Nested Level – Count of groups nested between the selected group and the audited object’s direct
  membership

# Members Report for Entra ID Group

The Members report for a group object provides a list of all trustees, users, and groups with
membership in the audited Entra ID (formerly Azure Active Directory) group. This report includes a
Membership Paths table.

![Members report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/entraid/membersentraid.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Domain Name – Name of the domain
- Department – Department to which the trustee account belongs
- Mail – Trustee’s email account as read from Active Directory
- Type – Type of membership the selected trustee has to the audited group

  - Direct – Trustee is specifically assigned to this group
  - Nested – Trustee is a member of a group which has membership in this group

- Nested Level – Count of groups nested between the audited group and the selected trustee’s direct
  membership
- Manager Name – Name of manager for the trustee from Entra ID

If the selected trustee is a group, the Group Membership pane displays the group membership,
including nested groups.

![Membership Paths table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/entraid/membersentraidtable.webp)

There is one table at the bottom displaying Membership Paths for the selected Entra ID group. It
contains all of the ways the audited group has been granted membership to the selected group.

- Type – Type of membership the selected trustee has to the audited group

  - Direct – Trustee is specifically assigned to this group
  - Nested – Trustee is a member of a group which has membership in this group

- Membership Path – Displays location for the selected trustee’s membership to the audited group,
  starts with audited group and ends with trustee

  - For Direct Membership – Path is [Group Name] > [Trustee Name]
  - For Nested Membership – Path is [Group Name] > [Name of Nested Group] > [Trustee Name]

- Nested Level – Count of groups nested between the audited group and the selected trustee’s direct
  membership

# Permissions Report for Entra ID Group

The Permissions report for a group object provides a list of all resources where the audited Entra
ID (formerly Azure Active Directory) group has been assigned permissions. The **Include Inherited**
filter checkbox is active by default, which means the report displays both direct and inherited
permissions unless modified by the Access Information Center user. See the
[Results Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#results-pane)
topic for information on filter options.

![Permissions report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/group/entraid/permissionsentraid.webp)

This report is comprised of the following columns:

- Collector – Refers to the collection source for the permission (for example, **FileSystem** for
  the Enterprise Auditor File System Solution, **SharePoint** for the Enterprise Auditor SharePoint
  Solution, and so on)
- Server Name – Name of the file system server or SharePoint farm/instance where the permission is
  set
- Type – Type of resource where the permission is set
- Source – Direct or Inherited permission type
- Path – Location of the resource where the permission is set

The following rights are a normalized representation of the permissions granted to the trustee:

- List – Right to view list of resources
- Read – Right to view/read resources
- Write – Right to add or modify resources
- Delete – Right to delete resources
- Manage – Equivalent to full control over resources

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.
