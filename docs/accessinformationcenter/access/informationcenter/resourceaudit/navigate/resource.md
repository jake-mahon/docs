# Resource Audit Interface

The Resource Audit interface is where resource reports are located. Summary and detail reports are available for permissions, effective access, activity, and sensitive data. Open the Resource Audit interface by clicking __Resource Audit__ on the home page of the Access Information Center or using the search features to open a filtered view for a resource.

Available reports vary based on the type of resource and the level within the resource. See the following topics for specific report details:

- [File System Reports](../filesystem/overview.md)
- [SharePoint Reports](../sharepoint/overview.md)
- [Active Directory Reports](../activedirectory/overview.md)
- [Amazon (AWS) Reports](../aws/overview.md)
- [Dropbox Reports](../dropbox/overview.md)
- [Exchange Reports](../exchange/overview.md)
- [MongoDB Reports](../mongodb/overview.md)
- [MySQL Reports](../mysql/overview.md)
- [Oracle Reports](../oracle/overview.md)
- [PostgreSQL Reports](../postgresql/overview.md)
- [SQL Server Reports](../sql/overview.md)
- [Flexible Imports Feature](../flexibleimports/overview.md)

## Resources Pane

The Resources pane, which is unique to the Resource Audit interface, displays a navigation view of available resources. Only those resource environments that have been scanned by Access Analyzer or introduced to the Access Information Center with Flexible Imports are available. Explore the desired resource by expanding the levels.

![Resources pane](../../../../../../static/img/product_docs/accessinformationcenter/access/informationcenter/resourceaudit/navigate/resourcespane.webp)

Select a resource in the Resources pane and a report in the Reports pane to to view the report data in the Results pane. Hover over any icon in the Access Information Center interface to view its description.

The Explicit Permissions, Exception, and Alert icons can shown next a resource icon in the Resources pane.

- Explicit Permissions – Indicates permissions for the resource are different than the permission of its parent. This is caused by broken inheritance or adding new permissions to a resource.
- Exception – Indicates the existence of a risk to data governance security on the resource as identified by Access Analyzer. Exceptions include permissions granted to stale, disabled, or high-risk trustees (for example, Everyone, Authenticated Users, and Domain Users). The following Access Analyzer jobs identify the Access Information Center exceptions:

  - __.Active Directory Inventory__ > __3-AD_Exceptions__
  - __.Entra ID Inventory__ > __2-AAD_Exceptions__
  - __FileSystem__ > __0.Collection__ > __3-FSAA Exceptions__
  - __SharePoint__ > __0.Collection__ > __7-SPAA_Exceptions__
- Alert – Indicates the existence of an activity exception that has been identified by Access Analyzer as a security risk on that resource. Alerts include periods of unusually high volumes of activity events and users accessing shares for the first time. The following Access Analyzer job identifies the Access Information Center alerts:

  - __FileSystem__ > __0.Collection__ > __3-FSAC Exceptions__

These icons are designed to draw attention to resources where potential security concerns may exist.

__NOTE:__ The Domain Group icon is used to indicate both Active Directory groups and Entra ID groups. See the [AIC Icons ](icons.md)topic for additional information.
