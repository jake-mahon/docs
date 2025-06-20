# On-Premise Farm & Online Instance Levels Reports

The following reports are available at the on-premise farm and online instance levels and provide
information for both on-premise farms and online instances, unless otherwise specified:

- [Activity Details Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
- [Anonymous Access Links Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
  – Online instance only
- [Exceptions Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/exceptions.md)
- [External Sharing Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
  – Online instance only
- [Scan Summary Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
- [Sensitive Content Details Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
- [Sensitive Content Summary Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)

# Activity Details Report

The Activity Details report at the on-premise farm and online instance levels provides statistical
activity event information by user on the selected farm during the specified date range. This report
includes a line graph for Active Users Trend.

![Activity Details report at the on-premise farm and online instance levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/farminstance/instanceactivitydetails.webp)

This report is comprised of the following columns:

- Access Time – Date and timestamp for when the operation occurred
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
- Resource – Resource type being accessed
- Operation – Name of operation logged
- Access – Whether the trustee was granted access to execute the operation: **Allowed** or
  **Denied**
- Path – Original location where the operation occurred
- Target Path – New location if changed by the operation. Blank if the operation does not result in
  a new path.
- Process Name – Name of the process which performed the operation

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

There is one line graph at the bottom displaying Active Users Trend for the selected resource.

![Active Users Trend graph](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/farminstance/instanceactivitydetailstrendgraph.webp)

The Active Users Trend line graph provides a visual representation of the number of active users
over the selected date range. It indicates how many users are performing activity per day.

See the
[Activity Report Results Pane Features](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#activity-report-results-pane-features)
topic for instructions on filtering the trend graph.

# Anonymous Access Links Report

The Anonymous Access Links report at the online instance level displays files that have access links
generated to be shared with people outside the organization (guest/anonymous users).

![Anonymous Access Links report at the online instance level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/farminstance/instanceanonymousaccesslinks.webp)

This report is comprised of the following columns:

- Site Collection – Site collection where the shared file resides
- File Name – Name of the shared file
- Access – Level of access granted to the external users
- URL – URL path to the file

# External Sharing Report

The External Sharing report at the online instance level displays resources that are shared with
external users, such as users who are invited to sign in using their gmail accounts.

![External Sharing report at the online instance level](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/farminstance/instanceexternalsharing.webp)

This report is comprised of the following columns:

- Resource Name – Name of the shared resource
- Resource Type – Type of SharePoint resource
- Email – Email account of the external user
- Access – Level of access granted to the external users
- URL – URL path to the resource

# Scan Summary Report

The Scan Summary report at the on-premise farm and online instance levels provides a summary view of
all site collections on the selected farm/instance.

![Scan Summary report at the on-premise farm and online instance levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/farminstance/instancescansummary.webp)

This report is comprised of the following columns:

- Web Application

  - On-premises farm – Name of the web application to which the site collection belongs
  - Online instance – Reflects the main nodes in the resource tree. The value is either
    **Personal**, **Public**, or **SharePoint**.

- Site Collection

  - On-premises farm – Display name of the site collection
  - Online instance – Display types of site collections

    - Personal – Resources found under the **OneDrive for Business** node
    - Public – Resources found under the **Public** node
    - SharePoint – Resources directly under the online instance level

- Url – URL path to the site collection
- Resources – Count of resources within the site collection
- Exceptions – Count of exceptions within the site collection

# Sensitive Content Details Report

The Sensitive Content Details report at the on-premise farm and online instance level provides
details of files where criteria matches were found on the site collection. This report includes a
Matches table.

![Sensitive Content Details report at the on-premise farm and online instance levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentdetails.webp)

This report is comprised of the following columns:

- Site Collection – Name of the site collection
- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of files with criteria matches
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Details on the files where the selected criterion value
were found:

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

# Sensitive Content Summary Report

The Sensitive Content Summary report at the on-premise farm and online instance levels provides a
count of files where criteria matches were found on the site collection. This report includes a
Details table.

![Sensitive Content Summary report at the on-premise farm and online instance levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/postgresql/instance/instancesensitivecontentsummary.webp)

This report is comprised of the following columns:

- Site Collection – Name of the site collection
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

# Site Collection, Site, List, Library, & Folder Level Reports

The following reports are available at the site collection, site, list, library, and folder levels
and provide information for both SharePoint on-premise farms and SharePoint Online instances:

- [Activity Details Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
- [Effective Access Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
- [Exceptions Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/exceptions.md)
- [Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
- [Sensitive Content Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
- [Site Collection Roles Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
  – Available only at the site collection level

# Activity Details Report

The Activity Details report at the site collection, site, list, library, and folder levels provides
statistical activity event information by user on the selected server during the specified date
range. This report includes a line graph for Active Users Trend.

The **Include subfolders** option is active by default until removed. See the
[Results Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#results-pane)
topic for information on changing this option.

![Activity Details report at the site collection, site, list, library, and folder levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/sitecollections/siteactivitydetails.webp)

This report is comprised of the following columns:

- Access Time – Date and timestamp for when the operation occurred
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
- Resource – Resource type being accessed
- Operation – Name of operation logged
- Access – Whether the trustee was granted access to execute the operation: **Allowed** or
  **Denied**
- Path – Original location where the operation occurred
- Target Path – New location if changed by the operation. Blank if the operation does not result in
  a new path.
- Process Name – Name of the process which performed the operation

The table data grid functions the same way as other table grids. See the
[Data Grid Features](/docs/accessinformationcenter/11.6/reference/data-grid.md) topic
for additional information.

There is one line graph at the bottom displaying the Active Users Trend for the selected event.

![Active Users Trend graph](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/sitecollections/siteactivitydetailstrendgraph.webp)

The line graph provides a visual representation of the number of active users over the selected date
range. It indicates how many users are performing activity per day.

See the
[Activity Report Results Pane Features](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#activity-report-results-pane-features)
topic for instructions on filtering the trend graph.

# Effective Access Report

The Effective Access report at the site collection, site, list, library, and folder levels provides
insight into who has what level of access to this resource through a calculation that encompasses
web application policies, administrative access, resource permissions, and group membership. It
contains a list of all trustees with access to the selected resource and specifies the effective
access level. This report includes a Permission Source table.

![Effective Access report at the site collection, site, list, library, and folder levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/sitecollections/siteeffectiveaccess.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account:

  - On-premises farm – Active Directory account associated with the trustee
  - Online instance – Entra ID account associated with the trustee

- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory for on-premise farms or Entra ID for online
  instances
- Mail – Trustee’s email account as read from Active Directory for on-premise farms or Entra ID for
  online instances
- EmployeeId – Corporate ID for the employee as read from Active Directory for on-premise farms or
  Entra ID for online instances
- Description – Description of the trustee object as read from Active Directory for on-premise farms
  or Entra ID for online instances
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Enterprise Auditor data collection and analysis configuration to identify stale accounts)
- Direct – True or False if the permission is directly assigned
- Changed – True or False if the trustee has changes modeled that would impact access to the
  selected resource

The following rights are a normalized representation of the SharePoint permission levels (SharePoint
Roles) granted to the trustee:

- Read – Right to view/read SharePoint resources
- Write – Right to add or modify SharePoint resources
- Delete – Right to delete SharePoint resources
- Manage – Equivalent to full control over SharePoint resources

If the selected trustee in the top section of the report is a group, the Group Membership pane
displays the group membership, including nested groups.

There is one table at the bottom displaying Permission Source for the select trustee. It contains
all of the ways the selected trustee has been granted rights to the selected resource. To view the
granular rights granted through SharePoint permission levels (SharePoint Roles), see the **Role
Name** column.

![Permission Source table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/sitecollections/siteeffectiveaccesstable.webp)

The number of rows for this table indicates the number of ways this trustee has been granted access.
This table is comprised of the following columns:

- Source Path – Location for which the trustee was granted rights to the selected resource, which
  can be represented two ways:

  - Directly Applied – Rights granted directly to the selected trustee
  - Access through another trustee, path starts with trustee assigned the direct rights and shows
    all nested groups leading to the selected trustee

- Source Type – Source of the permission (for example, Site Permission, Web Application Policy, Site
  Collection Administrator, and so on)
- Source Name – Name of the resource where the permission is assigned

The following rights are a normalized representation of the SharePoint permission levels (SharePoint
Roles) granted to the trustee:

- List – Right to view list of SharePoint resources
- Read – Right to view/read SharePoint resources
- Write – Right to add or modify SharePoint resources
- Delete – Right to delete SharePoint resources
- Manage – Equivalent to full control over SharePoint resources

The following columns display the combined direct and inherited rights:

- Allow Mask – Bitmask corresponding to Windows ACE permission bits for combined direct and
  inherited allow rights
- Deny Mask – Bitmask corresponding to Windows ACE permission bits for combined direct inherited
  deny rights

This table provides the insight necessary to make modifications to a trustee's access. For example,
a trustee has three sources of access to the selected resource. One source is directly applied, and
two sources are through permissions granted to another trustee. In order for this trustee’s access
to the selected resource to be changed, each of these source paths must be taken into consideration.

# Permissions Report

The Permissions report at the site collection, site, list, library, and folder levels provides a
list of trustees with permissions for the selected resource. This report includes a table with
trustee access levels Compared to Parent.

![Permissions report at the site collection, site, list, library, and folder levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/sitecollections/sitepermissions.webp)

This report is comprised of the following columns:

- Trustee Name – Owner of the trustee account
- Trustee Account:

  - On-premises farm – Active Directory account associated with the trustee
  - Online instance – Entra ID account associated with the trustee

- Department – Department to which the trustee account belongs
- Title – Trustee’s title as read from Active Directory for on-premise farms or Entra ID for online
  instances
- Mail – Trustee’s email account as read from Active Directory for on-premise farms or Entra ID for
  online instances
- EmployeeId – Corporate ID for the employee as read from Active Directory for on-premise farms or
  Entra ID for online instances
- Description – Description of the trustee object as read from Active Directory for on-premise farms
  or Entra ID for online instances
- DistinguishedName – Distinguished name for the trustee account
- ObjectSid – Security ID of the object
- Disabled – True or False if trustee account is disabled
- Deleted – True or False if trustee account is deleted
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Enterprise Auditor data collection and analysis configuration to identify stale accounts)
- Type – Direct or Inherited type of permission
- Roles – Role name for the SharePoint permission level. For additional detail on what permissions
  each Role grants, see the Permission Mask column in the
  [Site Collection Roles Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md).

The following rights are a normalized representation of the SharePoint permission levels (SharePoint
Roles) granted to the trustee:

- Read – Right to view/read SharePoint resources
- Write – Right to add or modify SharePoint resources
- Delete – Right to delete SharePoint resources
- Manage – Equivalent to full control over SharePoint resources

If the selected trustee in the top section of the report is a group, the Group Membership pane
displays the group membership, including nested groups.

There is one table at the bottom displaying Compared to Parent permissions for the select trustee.
It contains information on explicit permissions granted for the selected resource.

![Compared to Parent table](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/sitecollections/sitepermissionstable.webp)

This table is blank unless an **Explicit Permissions** icon is attached to the resource in the
Resources pane. See the
[Resources Pane](/docs/accessinformationcenter/11.6/resource-audit/navigation/overview.md#resources-pane)
topic for additional information. This table is comprised of the same columns as the primary report,
with the exception that it does not have the **Roles** column.

# Sensitive Content Report

The Sensitive Content report at the site collection, site, list, library, and folder levels provides
a list of files and a hit count per file where criteria matches were found on the selected resource.
This report includes a Matches table.

![Sensitive Content report at the site collection, site, list, library, and folder levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/sitecollections/sitesensitivecontent.webp)

This report is comprised of the following columns:

- Criteria Name – Type of potentially sensitive criteria matches found
- Criteria Type – Pattern for pattern based matches (System Criteria), and subject type based on
  Subject Profile matches (for example, Customer, Employee, and so on)
- Path – Location of the file where the criteria matches were found
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file
- Count – Number of criteria matches found within each file
- Attributes – Comma separated list of Attributes found for the identity

There is one table at the bottom displaying Matches in the files where the selected criterion value
were found:

- Prefix – Text just prior to the sensitive data match in the file
- Match – Lists any sensitive data matches found for the highlighted criteria in the top grid of the
  report
- Suffix – Text just after the sensitive data match in the file
- Sub File – File name if the sensitive data files reside in a PST file or a ZIP file

**NOTE:** Up to five matches per file can be displayed.

# Site Collection Roles Report

The Site Collections Roles report at the site collection level provides a list of all roles or
permission levels for the selected site collection, including custom defined roles and role
descriptions. It also displays a calculation of the actual rights that each role grants within the
targeted SharePoint on-premise farm or SharePoint Online instance.

**NOTE:** This report is only available at the site collection level.

![Site Collections Roles report](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/sitecollections/sitecollectionroles.webp)

This report is comprised of the following columns:

- Role – Role name for the SharePoint permission level
- Description – Description of the SharePoint role, this is an open text entry within SharePoint and
  may not accurately represent the granular rights granted through the SharePoint permission level
- Permission Mask – Representation of the granular rights mapped to the permission level in
  SharePoint

The following rights are a normalized representation of the SharePoint permission levels (SharePoint
Roles) granted to the trustee:

- Read – Right to view/read SharePoint resources
- Write – Right to add or modify SharePoint resources
- Delete – Right to delete SharePoint resources
- Manage – Equivalent to full control over SharePoint resources

# Web Application & Web Application URL Levels Reports

The following reports are available at the web application and web application URL levels and
provide information for SharePoint on-premise farms:

- [Effective Policy Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)
- [Policy Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md)

# Effective Policy Report

The Effective Policy report at the web application and web application URL levels provides a list of
users and groups who are effectively granted or denied access to the SharePoint on-premise farm web
application through a particular web application policy with the rights being either granted or
denied.

![Effective Policy report at the web application and web application URL levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/webapplication/webappeffectivepolicy.webp)

This report is comprised of the following columns:

- Zone – Zone to which the policy is applied (for example, internet, intranet, default, and so on)
- Url – URL path to the site collection
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
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Enterprise Auditor data collection and analysis configuration to identify stale accounts)
- Deleted – True or False if trustee account is deleted

The following rights are a normalized representation of the SharePoint permission levels (SharePoint
Roles) granted to the trustee:

- Read – Right to view/read SharePoint resources
- Write – Right to add or modify SharePoint resources
- Delete – Right to delete SharePoint resources
- Manage – Equivalent to full control over SharePoint resources

If the selected trustee in the top section of the report is a group, the Group Membership pane
displays the group membership, including nested groups.

To view the granular rights granted through SharePoint permission levels (SharePoint Roles), see the
**Roles** column in the
[Permissions Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md).
For additional detail on what permissions each SharePoint Role grants, see the **Permission Mask**
column in the
[Site Collection Roles Report](/docs/accessinformationcenter/11.6/resource-audit/sharepoint/site-collections.md).

# Policy Report

The Policy report at the web application and web application URL levels provides a list of web
application policies assigned for the selected SharePoint on-premise farm web application.

![Policy report at the web application and web application URL levels](/img/versioned_docs/accessinformationcenter_11.6/access/informationcenter/resourceaudit/sharepoint/webapplication/webapppolicy.webp)

This report is comprised of the following columns:

- Zone – Zone to which the policy is applied (for example, internet, intranet, default, and so on)
- Url – URL path to the site collection
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
- Stale – True or False if trustee account is stale (according to the length of inactive time used
  by the Enterprise Auditor data collection and analysis configuration to identify stale accounts)
- Deleted – True or False if trustee account is deleted

The following rights are a normalized representation of web application policy permission granted to
the trustee:

- Read – Right to view/read resources
- Write – Right to add or modify SharePoint resources
- Delete – Right to delete SharePoint resources
- Manage – Equivalent to full control over SharePoint resources

If the selected trustee in the top section of the report is a group, the Group Membership pane
displays the group membership, including nested groups.
