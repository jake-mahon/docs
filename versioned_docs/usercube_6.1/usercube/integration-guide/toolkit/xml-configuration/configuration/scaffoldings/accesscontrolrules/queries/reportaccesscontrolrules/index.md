# ReportAccessControlRules

Generates the rights to access the report view.

Gives access to a shortcut on the navigation to access this page.

![Reports](/img/versioned_docs/usercube_6.1/usercube/user-guide/administrate/reporting/home_reports_v602.webp)

## Examples

```

  <ReportAccessControlRules Profile="Administrator"/>

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_ReportQuery" DisplayName_L1="Administrator - Report_ReportQuery" DisplayName_L2="Administrator - Rapport_ReportQuery" EntityType="ReportQuery" Profile="Administrator">  <Entry CanExecute="true" Permission="/Report/GenerateReportFileFromReportQuery/Query" /></AccessControlRule>

```
