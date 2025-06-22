# SharePoint Reports

SharePoint reports are accessed through the Resource Audit interface. Explore the SharePoint
resources by expanding the levels within the Resources pane and selecting the desired resource. The
data within these reports is collected by the Enterprise Auditor SharePoint solution. See the
SharePoint Solution topic in the
[Netwrix Enterprise Auditor Documentation](https://helpcenter.netwrix.com/category/accessanalyzer)
for additional information.

SharePoint resource reports identify the following information in the targeted SharePoint on-premise
farms and SharePoint Online instances:

- What web applications, sites, lists, and libraries exist across the organization
- What permissions users and groups have on sites, lists, and libraries
- How it all translates into effective access
- What users are doing on SharePoint sites, lists, and libraries
- What potentially sensitive data exists across the targeted environment

SharePoint reports fall into the following categories:

- Access Reports

  - Report on permissions, effective access, and exceptions
  - Data collected by the Enterprise Auditor SharePoint Access Auditing collection jobs

- Activity Reports

  - Report on monitored activity
  - Data collected by the Enterprise Auditor SharePoint Activity Auditing collection jobs
  - Display information for a selected date range with local time stamps
  - Some of the reports also include trend graphs. Trend graphs provide a visual representation of
    the activity that occurred over the selected date range. See the
    [Activity Report Results Pane Features](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#activity-report-results-pane-features)
    topic for instructions on selecting a date range and filtering the trend graphs.
  - Activity information is represented in two ways:

    - Activity Statistics – Statistics reports show the count of operation events performed for
      the selected resource within the selected date range. These events are normalized into the
      operations of Reads, Writes, Deletes, and Manages.
    - Activity Details – Details reports show the specific operation events that occurred for
      the selected resource within the selected date range

- Sensitive Data Content Reports

  - Report on files with potentially sensitive data
  - Data collected by the Enterprise Auditor SharePoint Sensitive Data Discovery Auditing
    collection jobs

The following reports are available at the **SharePoint** node and provide information for both
SharePoint on-premise farms and SharePoint Online instances:

- [Exceptions Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/exceptions.md)
- [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/overview.md)
- [Server Summary Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/overview.md)

# Server Summary Report

The Server Summary report at the **SharePoint** node provides a top-level view of servers and
instances that are representative of the targeted SharePoint on-premise farms and SharePoint Online
instances.

![Server Summary report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/filesystem/serversummary.webp)

This report is comprised of the following columns:

- Server Name – Single server name representing the entire SharePoint on-premise farm or SharePoint
  Online instance
- Version – SharePoint version
- Site Collections – Count of site collections on the farm/instance
- Sites – Count of sites on the farm/instance
- Exceptions – Count of exceptions on the farm/instance
- Last Scanned – Date and timestamp of the last Enterprise Auditor scan

# Sensitive Content Summary Report

The Sensitive Content Summary report at the **SharePoint** node provides a count of files where
criteria matches were found in the targeted SharePoint on-premise farms and SharePoint Online
instances. This report includes a Details table.

![Sensitive Content Summary report at the SharePoint node](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/sensitivecontent.webp)

This report is comprised of the following columns:

- Server Name – Single server name representing the entire SharePoint on-premise farm or SharePoint
  Online instance
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Count – Number of files with criteria matches

There is one table at the bottom displaying Details on the files where the selected criterion
matches were found:

- Source — For System Criteria this shows the criteria name (for example, Credit Cards). For Subject
  Profiles criteria it shows the individual identities (for example, Jon Doe).
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity
