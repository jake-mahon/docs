# Effective Access Report

The Effective Access report at the share and subfolder levels provides insight into who has what
level of access to this resource through a calculation that encompasses server policies, share and
folder permissions, and group membership. It contains a list of all trustees with access to the
selected resource and specifies the effective access level. This report includes a Permission Source
table.

![Effective Access report at the share and subfolder levels](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/shareeffectiveaccess.webp)

This report is comprised of the following columns:

- Trustee Type – Type of the trustee (for example, Domain User or Domain Group)
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Access Analyzer data collection and analysis configuration to identify stale accounts)
- Direct – True or False if the permission is directly assigned
- Changed – True or False if the trustee has changes modeled that would impact access to the
  selected resource

The following rights are a normalized representation of the Share and NTFS permissions granted to
the trustee:

- List – Right to view list of files and subfolders
- Read – Right to view/read files and subfolders
- Write – Right to add or modify files and subfolders
- Delete – Right to delete files and subfolders
- Manage – Equivalent to full control over files and subfolders

If the selected trustee in the top section of the report is a group, the Group Membership pane
displays the group membership, including nested groups.

There is one table at the bottom displaying Permission Source for the select trustee. It contains
all of the ways the selected trustee has been granted rights to the selected resource.

![Permission Source table](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/shareeffectiveaccesstable.webp)

The number of rows for this table indicates the number of ways this trustee has been granted access.
This table is comprised of the following columns:

- Source Path – Location for which the trustee was granted rights to the selected resource, which
  can be represented two ways:

  - Directly Applied – Rights granted directly to the selected trustee
  - Access through another trustee, path starts with trustee assigned the direct rights and shows
    all nested groups leading to the selected trustee

- Source Type – Share or folder source of the permission
- Source Name – Name of the share or folder where the permission is assigned

The following rights are a normalized representation of the Share and NTFS permissions granted to
the trustee:

- List – Right to view list of files and subfolders
- Read – Right to view/read files and subfolders
- Write – Right to add or modify files and subfolders
- Delete – Right to delete files and subfolders
- Manage – Equivalent to full control over files and subfolders

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

In the example above, the selected trustee has three sources of access to the selected resource. One
source is directly applied, one is through share permissions, one is through a policy. In order for
this trustee’s access to the selected resource to be changed, each of these source paths must be
taken into consideration.

# Permissions Report

The Permissions report at the share and subfolder levels provides a list of trustees with
permissions for the selected resource. This report includes a table with trustee access levels
Compared to Parent.

If activity is being monitored for the selected resource, then this report indicates where stale
permissions exist. See the Stale Permissions topic for additional information.

![Permissions report at the share and subfolder levels](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/sharepermissions.webp)

This report is comprised of the following columns:

- Trustee Type – Type of the trustee (for example, Domain User or Domain Group)
- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory
- Mail – Trustee’s email account as read from Active Directory
- EmployeeId – Corporate ID for the employee as read from Active Directory
- Description – Description of the trustee object as read from Active Directory
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Access Analyzer data collection and analysis configuration to identify stale accounts)
- Source – Share or Folder source of the permission
- Type – Direct or Inherited type of permission

The following rights are a normalized representation of the Share and NTFS permissions granted to
the trustee:

- List – Right to view list of files and subfolders
- Read – Right to view/read files and subfolders
- Write – Right to add or modify files and subfolders
- Delete – Right to delete files and subfolders
- Manage – Equivalent to full control over files and subfolders

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

If the selected trustee in the top section of the report is a group, the Group Membership pane
displays the group membership, including nested groups.

There is one table at the bottom displaying Compared to Parent permissions for the select trustee.
It contains information on explicit permissions granted for the selected resource.

![Compared to Parent table](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/sharepermissionstable.webp)

This table will be blank unless an Explicit Permissions icon is attached to the resource in the
Resources pane. See the [Resources Pane](/docs/accessinformationcenter/12.0/resource-auditing/navigation-guide.md#resources-pane) topic for
additional information. This table is comprised of the same columns as the primary report.

## Stale Permissions

The Permissions report also displays where stale permissions exists. Stale permissions provide a way
to identify when permissions assigned to a resource are unused. Unused permissions can be removed,
if desired.

A stale permission is defined as an access level not used to perform an activity on the resource
within the value set for the **ActivityDays** parameter in the `web.config` file. By default this is
set to 60 days. This feature requires the Access Analyzer File System Activity Auditing (FSAC)
collection jobs to be executed on a regular basis.

Select the **Highlight active permissionss** checkbox to show permissions that are in use. When a
user or effective member of a group that has permissions to a resource also has activity on the
resource, a yellow icon is displayed for the permission type to indicate the access level used to
perform the activity. Therefore, access level cells not highlighted when activity is being monitored
represent permissions that are identified as stale.

![Stale and active permissions](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/stalepermissions.webp)

In the Permissions report, the yellow icons show permissions that are active, and the green check
marks show permissions that are stale. The example shows that Jazmina’s activity has used the List,
Write, Delete, and Manage permissions but not the Read permission. It also shows there are at least
three other trustees with stale permissions.

![Activity Statistics report](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/stalepermissionsevents.webp)

The Activity Statisticsreport indicates that the trustee Jazmina has performed write, manage, and
delete events on the selected resource. See the
[Activity Statistics Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md) topic for additional information.

![Effective Access report](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/stalepermissionsaccess.webp)

The Effective Access report shows that Jazmina has access to the resource through the Group_Manage
group, and the access is directly applied. See the
[Effective Access Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/permissions-analysis.md) topic for additional information.

# Permissions Report

The Permissions report at the NFS Exports share and subfolder levels provides a list of trustees
with permissions for the selected resource and access level for each trustee.

![Permissions report at the NFS Exports share and subfolder levels](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/nfsexports/nfspermissions.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account – Active Directory account associated with the trustee
- Trustee Sid – Security ID of the object
- Type – Direct or Inherited type of permission

The following rights are a normalized representation of the Share and NTFS permissions granted to
the trustee:

- List – Right to view list of files and subfolders
- Read – Right to view/read files and subfolders
- Write – Right to add or modify files and subfolders
- Delete – Right to delete files and subfolders
- Manage – Equivalent to full control over files and subfolders
- Allow – Granular rights allowed through the Share and NTFS permissions
