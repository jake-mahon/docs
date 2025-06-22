# Server Summary Report

The Server Summary report at the **File System** node provides a top-level view of servers that have
been scanned.

![Server Summary report at the File System node](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/serversummary.webp)

This report is comprised of the following columns:

- Server Name – Name of the server
- Operating System – Name of the server’s operating system
- Shares – Count of shares on the server
- Folders – Count of folders on the server
- Exceptions – Count of exceptions on the server
- Last Scanned – Date and timestamp of the last Access Analyzer scan

Also, the Group Membership pane displays Local Administrator and Local Group membership on the
selected server.

# Server Level Reports

The following reports are available at the server level:

- [Activity Details Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)
- [Activity Statistics Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)
- [Exceptions Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/server-auditing.md)
- [Scan Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/server-auditing.md)
- [Sensitive Content Details Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md)
- [Sensitive Content Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-reporting.md)
- [Share Activity Summary Report](/docs/accessinformationcenter/12.0/resource-auditing/file-systems/activity-monitoring.md)

# Exceptions Report

The Exceptions report at the server level provides a list of exceptions that were found within
shares on the selected server. This report includes a Details table.

![Exceptions report at the server level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/server/serverexceptions.webp)

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

# Scan Summary Report

The Scan Summary report at the server level provides a summary view of all shares on the selected
server.

![Scan Summary report at the server level](/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/filesystem/server/serverscansummary.webp)

This report is comprised of the following columns:

- Share Name – Name of the share
- Share Type – Admin or Shared type of share, an Admin share is a built-in share (for example, C$)
- Path – Location of the share
- Subfolders – Count of subfolders within the share
- Exceptions – Count of exceptions within the share
