# What's New

## New Netwrix Community!

All Netwrix product announcements and bug fix lists have moved to the new Netwrix Community. See
announcements for Netwrix Identity Manager (formerly Usercube) in the
[Identity Manager](https://community.netwrix.com/c/identitymanager/announcements/150) area of our new
community.

The following information highlights the new and enhanced features introduced in this Netwrix
Identity Manager (formerly Usercube) version.

## Netwrix Identity Manager (formerly Usercube) November 25, 2024

New: Assigned Roles View

The new Assigned Roles page provides a role-centric view, displaying the list of users with
permissions in a specified role category and including a downloadable report. This feature is
currently in read-only preview, with additional functionality planned for the next release. See the
[Review Assigned Roles](/docs/identitymanager/saas/role-management/role-assignment/index.md) topic for additional
information.

New: Context-Bound Manual Permissions

Manual permission assignments can now be configured to be tied to a context end date using
‘ManualAssignmentEndDateLockedToContext’. For example, a contractor's manual permissions can be
configured to automatically extend when their contact is extended. See the
[Create a Role Manually](/docs/identitymanager/saas/role-management/index.md),
[Resource Type](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
and
[Remove Redundant Assignments](/docs/identitymanager/saas/role-management/role-assignment/index.md)
topics for additional information.

New: Suggested Multiple Correlations

A new option allows multi-correlation resource types to propose correlations with less than 100%
confidence. This behavior is controlled by the new boolean ‘SuggestAllCorrellations’. The default
(false) only suggests correlations with 100% confidence, while setting it to true allows
lower-confidence suggestions. See the
[Resource Type](/docs/identitymanager/saas/configuration/xml-configuration/scaffoldings.md)
topic for additional information.

Enhancement: Access Control and Workflows

The maximum number of workflow actors is now configurable via the ‘MaxActors’ key in the
‘appsettings.json’ file. The default value of 20 can now be increased up to 50. See the
[Application Settings](/docs/identitymanager/saas/configuration/network/server-settings/general-purpose.md)
topic for additional information.

Enhancement: Certifications and Risks

Extra options on certification screens (visible on the "..." button) can now be hidden by setting
**Only allow approving and refusing on access certifications items** to **Yes**. This will leave
only the **Approve** and **Deny** buttons visible. The default setting is **No**. See the
[Configure Global Settings](/docs/identitymanager/saas/configuration/index.md) topic for
additional information.

Enhancement: Connectors and Integrations

Two new settings, ‘MaxPageSize’ and ‘DefaultPageSize’, have been introduced to control and optimize
API call sizes. See the
[Application Settings](/docs/identitymanager/saas/configuration/network/server-settings/general-purpose.md)
topic for additional information.

Enhancement: Jobs and Policy

Manual correlations for resources with multiple correlations can now be performed from the Resource
Reconciliation screen.

Enhancement: Logs / Performance / Security

Incompatible C# expressions in the configuration will now be flagged during configuration imports. A
new tool, ‘Identity Manager-Check-ExpressionsConsistency’, has been introduced to help identify
incompatible expressions. See the
[Usercube-Check-ExpressionsConsistency](/docs/identitymanager/saas/automation/executables/check-expressions-consistency.md)
topic for additional information.

Additional logging has been added to the SAP ERP6 provisioning process.

For SaaS customers, there are new restrictions on scheduled jobs to enforce best practices. Jobs
that run frequently are blocked unless they follow practices such as using incremental modes instead
of full evaluation modes, evaluating only necessary entity types, and avoiding redundant task
executions. Existing jobs are whitelisted, but new non-compliant jobs will generate errors during
configuration imports.

Enhancement: UI / UX

Various user interface improvements, including better tooltips on the Role Review screen.

Enhancement: Other

The ‘Identity Manager-Export-Bacpac’ tool now allows finer control over data extraction and
anonymization options. See the
[Usercube-Export-Bacpac](/docs/identitymanager/saas/automation/executables/export-bacpac.md) topic
for additional information.

Additionally, the demo license is no longer included in the Runtime zip file. If you need a license,
please contact [Netwrix Support](https://www.netwrix.com/support.html).
