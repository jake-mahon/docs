# Features by License Type

Lists the menus and menu items based on license type.

Menus and items not available for your license type are automatically hidden.

- Documentation and Optimization
- Intelligent Change Management
- Enterprise

## Documentation and Optimization

| **Standard Menus**        | **Menu Items**                                                                                                                                                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Strongpoint Overview      |                                                                                                                                                                                                                                                                                |
| Strongpoint Support       | User Guide Contact Support License Manager Installation Settings Stop Strongpoint Scripts Start Strongpoint Scripts                                                                                                                                                            |
| Tools                     | Strongpoint Spider Strongpoint SQL Library Standard Field Impact Analysis                                                                                                                                                                                                      |
| Customization             | ERD View Customization Quick Search Customization Impact Search Form                                                                                                                                                                                                           |
| Clean Up                  | Open Clean-Up Status View Unused Customizations Unused Scripts Inactive Owner Default ID (eg custbody8) Clean-Up Status: Awaiting Info Update Field Description and Help                                                                                                       |
| Automated Search Clean Up | Search Clean Up Rules Search Clean Up Status Archived Searches Retained Searches Searches To Be Archived                                                                                                                                                                       |
| Script Management         | Critical Scripts Utilization Error Report Yesterday's Script Errors Released Scripts in DEBUG Log Status Last Run Date By Script Active Script Deployments Not In AUDIT Log Status Scripts With No Audit Tags Tagged Scripts With No Data                                      |
| **Optional Menus**        | **Menu Items**                                                                                                                                                                                                                                                                 |
| ---                       | ---                                                                                                                                                                                                                                                                            |
| Manage Process            | Process Processes Missing Overview Processes Missing Description Processes With No Test Scripts Process Participants                                                                                                                                                           |
| Map Customizations        | Bundles with No Process Scripts with No Process Scripted Objects with No Process Workflows with No Process Workflow Objects with No Process Custom Records with No Process Custom Record Fields with No Process Active Searches with No Process Customizations with No Process |
| Process Issues            | Process Issue Process Issue Overview                                                                                                                                                                                                                                           |
| User Management           | Employees with Standard Roles Employees with Unused Logins Employee Permission Changes                                                                                                                                                                                         |
| Integrations              | Salesforce Connector Mapping Tool External Systems ERD External Systems External Customizations External Mapped Customizations Strongpoint Integration Processes Changes to External Customizations                                                                            |
| Archives                  | Customization Archive Process Archive Processes Pending Deletion (3 Days)                                                                                                                                                                                                      |

## Intelligent Change Management

| **Standard Menus**        | **Menu Items**                                                                                                                                                                                                                     |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Change Management Tools   | Change / Approval Policy New ITGC Change request [Beta] Change Request Compare Environments                                                                                                                                        |
| Change Management Reports | Policy Changes Open Noncompliant Changes Resolved Noncompliant Changes Compliant Changes Approval Override Managed Bundle Changes Platform Changes What Changed Non-Material Changes1 Consolidated Change By Type Deployed Changes |
| **Optional Menus**        | **Menu Items**                                                                                                                                                                                                                     |
| ---                       | ---                                                                                                                                                                                                                                |
| Testing                   | Test Record Tests Overview Processes with No Test Script Untested Customizations                                                                                                                                                   |
| Implementation            | Implementation Assignments and Status Planned Customizations Processes with No Work Instructions Improvement Projects                                                                                                              |

1 **Non-Material Object Changes** are changes detected in the object definition not caused by human
intervention and do not have any functional impact. Examples include NetSuite internal IDs, object
XML structure or JSON representation or reordering values in a list.

All of the Documentation and Optimization menu items are available to the Intelligent Change
Management license.

## Enterprise

All of the Documentation and Optimization and Intelligent Change Management menu items are available
to the Enterprise license.

| **Standard Menus**              | **Menu Items**                                                                                                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Financial Controls              | Controls Control Change Requests Unresolved Control Incidents Resolved Control Incidents Results Pre-Approved Control Incidents                                                 |
| SoD Rule                        | SoD Rule Library                                                                                                                                                                |
| SoD Risk Management             | SoD Risk Analysis SoD Risk and Control Matrix                                                                                                                                   |
| SoD Processing Status           | SoD Processing Status                                                                                                                                                           |
| SoD Incident Management Reports | Unresolved SoD Incidents Resolved SoD Incidents Compliant SoD Incidents SoD Incidents (Resolved/Unresolved) by Employee SoD Blocked Incidents (Resolved/Unresolved) by Employee |
| SoD Audit Report                | SoD Rules with Blocking On SoD Rules Status Changes User Role SoD Violations                                                                                                    |
| SoD Change Management           | SoD Pre-Approval Change Request New SoD Change Request New SoD Rule Change                                                                                                      |
| SoD Employee Access Reports     | Employee Access Review Report Employees With Administrator Role Employees Roles Assigned/Changed Employees Permissions Assigned/Changed                                         |

# License Manager

The License Manager is where you manage your Platform Governance for NetSuite license and licensed
users. Contact your customer service representative if you need modifications to your license.

If the **Take Web Site Offline for Maintenance** option is changed, you must use the  
**Strongpoint** > **Strongpoint Support** > **License Manager** > **Get Lic. Number**  
 Or re-push the bundle to update the Spider link.

## Add a New License

1. Open **Strongpoint** > **Strongpoint Support** > **License Manager**
2. Depending on your account settings, you may have to click **View** to see the account record.

   ![Add a New License.](/img/product_docs/platgovnetsuite/installing_strongpoint/license_new.webp)

3. Click **Get Lic. Number** if the **License Number** is blank. If the License Number is not blank,
   continue with the next step.
4. Click **New Licensed User**.

   ![Add a licensed user](/img/product_docs/platgovnetsuite/installing_strongpoint/license_new_user.webp)

5. Select a **User**.
6. Set **License Type** to **Full**.
7. Click **Save**.

## Edit or View an Existing License

1. Open **Strongpoint** > **Strongpoint Support** > **License Manager**
2. Click **Edit** if you need to modify your **Weekly Reports Recipients** or your **License
   Number** or click **View** to [Manage Users](/docs/platgovnetsuite/security-and-compliance/user-management.md).
3. Click **Save** if you make changes.

## License Manager Buttons and Fields

Some buttons and fields are only visible when you **Edit** the License.

- **Change ID**: changes the NetSuite ID of the license.
- **Get Lic. Number**: click to update your license if you have made modifications such as
  renewing, adding seats, or adding modules. This feature is available after Netwrix notifies you
  your license modifications are complete.
- **Full License End Date**: displays the end date of the current subscription.
- **Full License Count**: displays the number of **Full** licenses active in your account.
- **License Number**: displays your license.
- **License Type**: displays your purchased License Type, controlling what
  [Features](/docs/platgovnetsuite/getting-started/requirements-and-licensing.md) you can access. License Types are **Documentation and
  Optimization**, **Intelligent Change Management** and **Enterprise**.
- **Edition**: displays your NetSuite Edition.
- **Subsidiaries**: displays the number of operating subsidiaries you have in your OneWorld account.
  Platform Governance for NetSuite does not count subsidiaries that are only used for financial
  transactions or as an elimination subsidiary.
- **View**: select **Strongpoint Licensed Users** to filter the view and see the user information.
- **Licensed User**: select a user number and click the Open icon that appears if you hover next to
  the field to open the user record.
- **New Licensed User**: opens the **Licensed User** form.
- **Edit**: opens the **Licensed User** form for the selected **User**.

Click on a column heading to toggle the sort order based on the column contents. By default, the
records are sorted alphabetically by **User** name.

NetSuite displays 25 records per page. Use the drop down to select other pages of records.
