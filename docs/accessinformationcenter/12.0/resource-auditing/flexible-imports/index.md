# Flexible Imports Feature

Flexible imports allow an Access Information Center user to view reports on permissions, activity,
and sensitive content from sources or data not reported in the Access Information Center by default.
Access Analyzer users can query any supported system for this type of information and import it into
Access Information Center tables to display information in the Access Information Center. With
flexible imports, the Access Information Center provides a single view of entitlements across any
set of systems and applications.

The flexible imports feature populates the following Access Analyzer database tables, which enable
Access Information Center to access the data for reports:

- SA_AIC_FlexibleActivityEvents table
- SA_AIC_FlexibleHosts table
- SA_AIC_FlexibleLocalGroupMembership table
- SA_AIC_FlexiblePermissions table
- SA_AIC_FlexibleResources table
- SA_AIC_FlexibleSddMatches table
- SA_AIC_FlexibleSddMatchHits table

Imported data reports are accessed through the Resource Audit interface. Explore the resources by
expanding the levels within the Resources pane and selecting the desired resource. These reports
identify the following information in the targeted environment:

- Permissions applied to a particular resource
- What trustees are doing with their access
- What potentially sensitive data exists across the targeted environment

# Flexible Import Reports Quick Reference

The following imported data reports are available for selections within the Resources pane.

**NOTE:** Although the reports are always displayed at the nodes and levels listed, whether they are
populated is determined by what data is imported for the environment.

Environment Node Report

| Report                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Sensitive Content Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-detection.md) | Provides a list of paths and a hit count per table where criteria matches were found on the selected resource. This report includes a table with criteria Matches that is visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |

Environment > Host Level Reports

| Report                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Report](/docs/accessinformationcenter/12.0/resource-auditing/flexible-imports/import-reporting.md)            | Provides details on activity across the resource for every activity logged during the selected date range.                                                                                                                                                                                                                                                                                                  |
| [Sensitive Content Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-detection.md) | Provides a list of paths and a hit count per table where criteria matches were found on the selected resource. This report includes a table with criteria Matches that is visible to Access Information Center users with either Security Team Member or Administrator roles . The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |

Environment > Host > Sub-level Reports

| Report                                                                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Activity Report](/docs/accessinformationcenter/12.0/resource-auditing/flexible-imports/import-reporting.md)            | Displays activity on the resource during the selected date range.                                                                                                                                                                                                                                                                                                                                          |
| [Permissions Report](/docs/accessinformationcenter/12.0/resource-auditing/flexible-imports/import-configuration.md)     | Shows the permissions for the trustee on the selected resource.                                                                                                                                                                                                                                                                                                                                            |
| [Sensitive Content Report](/docs/accessinformationcenter/12.0/resource-auditing/sensitive-content/content-detection.md) | Provides a list of paths and a hit count per table where criteria matches were found on the selected resource. This report includes a table with criteria Matches that is visible to Access Information Center users with either Security Team Member or Administrator roles. The Matches table requires the storage of discovered sensitive data within the Access Analyzer database or it will be blank. |
