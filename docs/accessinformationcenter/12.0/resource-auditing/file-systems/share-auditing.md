# Share & Subfolder Levels Reports

The following reports are available at the share and subfolder levels:

- [Activity Details Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)
- [Activity Statistics Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)
- [Effective Access Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/permissions-analysis.md)
- [Exceptions Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/share-auditing.md)
- [Permissions Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/permissions-analysis.md)
- [Sensitive Content Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-detection.md)

# Exceptions Report

The Exceptions report at the share and subfolder levels provides a list of all trustees with access
that are causing exceptions on the selected resource. This report includes a Permission Source
table.

![Exceptions report at the share and subfolder levels](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/shareexceptions.webp)

An exception is defined as a problem or risk to data governance security. Exceptions include open
shares and permissions granted to stale or disabled users. This table is blank unless an Exception
icon is attached to the resource in the Resources pane, indicating exceptions were found. See the
[Resources Pane](/docs/accessinformationcenter/12.0/resource-auditing/navigation-guide.md#resources-pane) topic for additional information.

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Name – Type of exception found
- Path – Original location where the operation occurred

There is one table at the bottom displaying Permission Source for the select trustee. It contains
all of the ways the selected trustee has been granted rights to the selected resource.

![Permission Source table](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharesubfolder/shareexceptionstable.webp)

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

# Shared Folders Node Report

The following report is available at the **Shared Folder** node:

- [Scan Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/share-auditing.md)

See the [Share & Subfolder Levels Reports](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/share-auditing.md) topic for information on
reports found under this node.

# Scan Summary Report

The Scan Summary report at the **Shared Folders** node provides a summary view of all shares on the
server with the share type of Shared.

![Scan Summary report at the Shared Folders node](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/sharedfolders/sharedfoldersscansummary.webp)

This report is comprised of the following columns:

- Share Name – Name of the share
- Share Type – Shared type of share, this report is filtered to exclude Admin type of shares (for
  example, C$)
- Path – Location of the share
- Subfolders – Count of subfolders within the share
- Exceptions – Count of exceptions within the share

# Admin Shares Node Report

The following report is available at the **Admin Shares** node:

- [Scan Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/share-auditing.md)

See the [Share & Subfolder Levels Reports](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/share-auditing.md) topic for information on
reports found under this node.

# Scan Summary Report

The Scan Summary report at the **Admin Shares** node provides a summary view of all shares on the
server with the share type of Admin.

![Scan Summary report at the Admin Shares node](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/adminshares/adminsharesscansummary.webp)

This report is comprised of the following columns:

- Share Name – Name of the share
- Share Type – Admin type of share, this report is filtered to exclude Shared type of shares
- Path – Location of the share
- Subfolders – Count of subfolders within the share
- Exceptions – Count of exceptions within the share

# NFS Exports Reports

NFS share data can be imported into the Access Information Center through configuration of Access
Analyzer File System Sensitive Data Discovery Auditing collection jobs. The following report is
available at the **NFS Exports** node:

- [Scan Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/share-auditing.md)

The following reports are available at the share and subfolder levels below the NFS Exports node:

- [Activity Details Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)
- [Activity Statistics Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)
- [Permissions Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/permissions-analysis.md)
- [Sensitive Content Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-detection.md)

# Scan Summary Report

The Scan Summary report at the **NFS Exports** node provides a summary view of all shares on the
server with the share type of Shared.

![Scan Summary report at the NFS Exports node](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/nfsexports/nfsscansummary.webp)

This report is comprised of the following columns:

- Share Name – Name of the share
- Share Type – Shared type of share, this report is filtered to exclude Admin type of shares (for
  example, C$)
- Path – Location of the share
- Subfolders – Count of subfolders within the share
- Exceptions – Count of exceptions within the share
