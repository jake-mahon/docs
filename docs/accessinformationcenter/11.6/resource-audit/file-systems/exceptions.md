# Exceptions Report

The Exceptions report at the share and subfolder levels provides a list of all trustees with access
that are causing exceptions on the selected resource. This report includes a Permission Source
table.

![Exceptions report at the share and subfolder levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharesubfolder/shareexceptions.webp)

An exception is defined as a problem or risk to data governance security. Exceptions include open
shares and permissions granted to stale or disabled users. This table is blank unless an Exception
icon is attached to the resource in the Resources pane, indicating exceptions were found. See the
[Resources Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#resources-pane)
topic for additional information.

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Name – Type of exception found
- Path – Original location where the operation occurred

There is one table at the bottom displaying Permission Source for the select trustee. It contains
all of the ways the selected trustee has been granted rights to the selected resource.

![Permission Source table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/sharesubfolder/shareexceptionstable.webp)

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

# Exceptions Report

The Exceptions report at the server level provides a list of exceptions that were found within
shares on the selected server. This report includes a Details table.

![Exceptions report at the server level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/server/serverexceptions.webp)

An exception is defined as a problem or risk to data governance security. Exceptions include open
shares and permissions granted to stale or disabled users. This report will be blank if no
exceptions were found on the selected server. It is comprised of the following columns:

- Server Name – Name of the server
- Name – Type of exception found
- Description – Description of the exception type
- Count – Number of this type of exception found on the server

There is one table at the bottom displaying Details for the selected exception:

- Trustee Name – Owner of the trustee account
- Path – Location of the resource where the exception exists

# Exceptions Report

The Exceptions report at the **File System** node provides a list of exceptions that were found
across the targeted environment. This report includes a Details table.

![Exceptions report at the File System node](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/activedirectory/exceptions.webp)

An exception is defined as a problem or risk to data governance security. Exceptions include open
shares and permissions granted to stale or disabled users. This table is blank if no exceptions were
found within the targeted file systems. This report is comprised of the following columns:

- Server Name – Name of the server
- Name – Type of exception found
- Description – Description of the exception type
- Count – Number of this type of exception found on the server

There is one table at the bottom displaying Details for the selected exception:

- Trustee Name – Owner of the trustee account
- Path – Location of the resource where the exception existss

# Exceptions Node Reports

The following report is available at the **Exceptions** node:

- [Exceptions Report](/docs/accessinformationcenter/11.6/resource-audit/file-systems/exceptions.md)

The **Exceptions** node displays when exceptions have been identified on the selected server. When
it is present, it can be expanded to view the exception type level reports. The following nodes may
show under the Exceptions node for a file system resource when that exception type has been
identified:

- Disabled Users – Folders where disabled users have been granted access
- Open resources – Folders that are openly accessible through file shares
- Stale Users – Folders where stale users have been granted access

The Exceptions report for each exception type level displays filtered exception information. See the
[Exceptions Report by Type](/docs/accessinformationcenter/11.6/resource-audit/file-systems/exceptions.md)
topic for the report details.

# Exceptions Report

The Exceptions report at the **Exceptions** node provides a list of exceptions found on the server.
This report includes a Details table.

![Exceptions report at the Exceptions node](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/activedirectory/exceptions/exceptionsexceptions.webp)

An exception is defined as a problem or risk to data governance security. Exceptions include open
shares and permissions granted to stale or disabled users. This report is comprised of the following
columns:

- Server Name – Name of the server
- Name – Type of exception found
- Description – Description of the exception type
- Count – Number of this type of exception found

There is one table at the bottom displaying Details for the selected exception:

- Trustee Name – Owner of the trustee account
- Path – Location of the resource where the exception exists

# Exceptions Report by Type

The Exceptions report at the exception type level provides details on the selected exception type.
This report includes a Permission Source table.

![Exceptions report at the exception type level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/activedirectory/exceptions/exceptionsbytype.webp)

An exception is defined as a problem or risk to data governance security. This report is comprised
of the following columns:

- Trustee Name – Owner of the trustee account
- Path – Location of the resource where the exception exists

If the selected trustee in the top section of the report is a group, the Group Membership pane
displays the group membership, including nested groups.

There is one table at the bottom displaying Permission Source for the select trustee. It contains
all of the ways the selected trustee has been granted rights to the selected resource.

![Permission Source table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/exceptions/exceptionsbytypetable.webp)

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
