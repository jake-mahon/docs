# Proposed Directory Structure for Access Analyzer 12.0

```
docs/accessanalyzer/12.0/
├── index.md
├── overview.md
├── getting-started/
│   └── index.md
├── installation/
│   ├── index.md
│   ├── overview.md
│   ├── application/
│   │   ├── database.md
│   │   ├── first-launch.md
│   │   ├── other-languages.md
│   │   ├── overview.md
│   │   ├── reports/
│   │   │   ├── adfs.md
│   │   │   ├── disclaimer.md
│   │   │   ├── domains.md
│   │   │   ├── entra-id-sso.md
│   │   │   ├── kerberos-encryption.md
│   │   │   ├── okta.md
│   │   │   ├── overview.md
│   │   │   ├── secure.md
│   │   │   ├── sso.md
│   │   │   └── timeout.md
│   │   ├── update-license.md
│   │   ├── upgrade/
│   │   │   ├── overview.md
│   │   │   ├── solution-considerations.md
│   │   │   └── wizard.md
│   │   └── wizard.md
│   ├── filesystem-proxy/
│   │   ├── configure-data-collector.md
│   │   ├── overview.md
│   │   ├── silent-install.md
│   │   ├── troubleshooting.md
│   │   ├── uninstall.md
│   │   ├── upgrade.md
│   │   └── wizard.md
│   └── sharepoint-agent/
│       ├── overview.md
│       ├── upgrade.md
│       └── wizard.md
├── configuration/
│   ├── index.md
│   ├── active-directory/
│   │   ├── access.md
│   │   ├── activity.md
│   │   ├── file-archive.md
│   │   ├── overview.md
│   │   └── threat-prevention.md
│   ├── dell-celerra-vnx/
│   │   ├── access.md
│   │   ├── activity.md
│   │   ├── install-cee.md
│   │   ├── overview.md
│   │   └── validate.md
│   ├── dell-powerscale/
│   │   ├── activity.md
│   │   ├── install-cee.md
│   │   ├── manual-configuration.md
│   │   ├── overview.md
│   │   └── validate.md
│   ├── dell-unity/
│   │   ├── access.md
│   │   ├── activity.md
│   │   ├── install-cee.md
│   │   ├── overview.md
│   │   ├── setup-unisphere.md
│   │   └── validate.md
│   ├── entra-id/
│   │   ├── access.md
│   │   └── overview.md
│   ├── exchange-online/
│   │   └── access.md
│   ├── hitachi/
│   │   ├── activity.md
│   │   ├── configure-access-to-logs.md
│   │   ├── configure-logs.md
│   │   └── overview.md
│   ├── nasuni/
│   │   ├── access.md
│   │   ├── activity.md
│   │   └── overview.md
│   ├── netapp-7-mode/
│   │   ├── access.md
│   │   ├── activity.md
│   │   ├── configure-fpolicy.md
│   │   ├── customize-fpolicy.md
│   │   ├── enable-http.md
│   │   ├── overview.md
│   │   ├── provision-access.md
│   │   └── provision-activity.md
│   ├── netapp-c-mode/
│   │   ├── access.md
│   │   ├── activity.md
│   │   ├── configure-empty-fpolicy.md
│   │   ├── configure-firewall.md
│   │   ├── configure-fpolicy.md
│   │   ├── overview.md
│   │   └── provision-activity.md
│   ├── nutanix/
│   │   ├── access.md
│   │   ├── activity.md
│   │   └── overview.md
│   ├── qumulo/
│   │   ├── activity.md
│   │   └── overview.md
│   ├── sharepoint/
│   │   ├── access.md
│   │   ├── activity.md
│   │   └── overview.md
│   ├── sharepoint-online/
│   │   ├── access.md
│   │   ├── activity.md
│   │   └── overview.md
│   └── windows-file/
│       ├── access.md
│       ├── activity.md
│       └── overview.md
├── data-collection/
│   ├── index.md
│   ├── overview.md
│   ├── active-directory/
│   │   ├── category.md
│   │   ├── directory-scope.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   └── summary.md
│   ├── ad-activity/
│   │   ├── category.md
│   │   ├── clear-tables.md
│   │   ├── connection.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── scope.md
│   │   ├── share.md
│   │   ├── standard-tables.md
│   │   └── summary.md
│   ├── ad-inventory/
│   │   ├── category.md
│   │   ├── clear-tables.md
│   │   ├── custom-attributes.md
│   │   ├── domains.md
│   │   ├── index-update-options.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── standard-tables.md
│   │   └── summary.md
│   ├── ad-permissions/
│   │   ├── category.md
│   │   ├── custom-filter.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── remove-tables.md
│   │   ├── results.md
│   │   ├── scope.md
│   │   ├── standard-tables.md
│   │   └── summary.md
│   ├── aws/
│   │   ├── category.md
│   │   ├── criteria.md
│   │   ├── drop-tables.md
│   │   ├── filter-s3-objects.md
│   │   ├── login-roles.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── sensitive-data.md
│   │   └── summary.md
│   ├── azure-ad-inventory/
│   │   ├── category.md
│   │   ├── configure-job.md
│   │   ├── custom-attributes.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── standard-tables.md
│   │   ├── summary.md
│   │   └── troubleshooting.md
│   ├── box/
│   │   ├── activity-operation-scope.md
│   │   ├── activity-timeframe-scope.md
│   │   ├── additional-scoping.md
│   │   ├── authenticate.md
│   │   ├── category.md
│   │   ├── exclusions.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── scope-by-user.md
│   │   ├── standard-tables.md
│   │   └── summary.md
│   ├── command-line-utility/
│   │   ├── define-fields.md
│   │   ├── execution-options.md
│   │   ├── overview.md
│   │   ├── profile-parameters.md
│   │   ├── profile-type.md
│   │   ├── results.md
│   │   ├── script-editor.md
│   │   └── summary.md
│   ├── disk-info/
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── summary.md
│   │   └── target-disks.md
│   ├── dns/
│   │   ├── category.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   └── summary.md
│   ├── dropbox-access/
│   │   ├── category.md
│   │   ├── completion.md
│   │   ├── configure-job.md
│   │   ├── dlp-audit-settings.md
│   │   ├── overview.md
│   │   ├── scan-options.md
│   │   ├── scoping.md
│   │   ├── select-dlp-criteria.md
│   │   └── standard-tables.md
│   ├── entra/
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   └── summary.md
│   ├── event-log/
│   │   └── index.md
│   ├── ews-mailbox/
│   │   ├── category.md
│   │   ├── criteria.md
│   │   ├── filter.md
│   │   ├── filter-wizard/
│   │   │   ├── body-options.md
│   │   │   ├── folder-conditions.md
│   │   │   ├── message-conditions.md
│   │   │   ├── save-filter.md
│   │   │   └── search-filter.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── scope.md
│   │   ├── scope-select.md
│   │   ├── sdd-options.md
│   │   ├── search-filter.md
│   │   └── summary.md
│   ├── ews-public-folder/
│   │   ├── category.md
│   │   ├── criteria.md
│   │   ├── filter.md
│   │   ├── filter-wizard/
│   │   │   ├── body-options.md
│   │   │   ├── folder-conditions.md
│   │   │   ├── message-conditions.md
│   │   │   ├── save-filter.md
│   │   │   └── search-filter.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── sdd-options.md
│   │   ├── search-filter.md
│   │   └── summary.md
│   ├── exchange-2k/
│   │   ├── category.md
│   │   ├── mapi-settings.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── scope.md
│   │   └── summary.md
│   ├── exchange-mailbox/
│   │   ├── category.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── properties.md
│   │   ├── scope.md
│   │   ├── sdd-criteria.md
│   │   └── summary.md
│   ├── exchange-metrics/
│   │   ├── category.md
│   │   ├── collect-mode.md
│   │   ├── message-activity-filter.md
│   │   ├── message-sizes.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── scope.md
│   │   ├── summary.md
│   │   └── timeframes.md
│   ├── exchange-ps/
│   │   ├── category.md
│   │   ├── configure-job.md
│   │   ├── error-logging.md
│   │   ├── filter-message.md
│   │   ├── mailbox-logons.md
│   │   ├── mail-flow.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── scope.md
│   │   ├── scope-databases.md
│   │   ├── scope-mailboxes.md
│   │   ├── scope-public-folders.md
│   │   └── summary.md
│   ├── exchange-public-folder/
│   │   ├── category.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── probable-owner.md
│   │   ├── properties.md
│   │   ├── scope.md
│   │   └── summary.md
│   ├── file/
│   │   ├── category.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── summary.md
│   │   └── target-files.md
│   ├── fsaa/
│   │   ├── activity-settings.md
│   │   ├── applet-settings.md
│   │   ├── azure-tenant-mapping.md
│   │   ├── bulk-import.md
│   │   ├── certificate-management.md
│   │   ├── default-scoping-options/
│   │   │   ├── file-details.md
│   │   │   ├── file-properties.md
│   │   │   └── scan-settings.md
│   │   ├── default-scoping-options.md
│   │   ├── manual-certificate.md
│   │   ├── overview.md
│   │   ├── query-selection.md
│   │   ├── scan-server-selection.md
│   │   ├── scan-settings.md
│   │   ├── scoping-options.md
│   │   ├── scoping-queries.md
│   │   ├── sdd-criteria.md
│   │   ├── sensitive-data-settings.md
│   │   ├── standard-tables.md
│   │   ├── update-service-settings.md
│   │   └── workflows.md
│   ├── group-policy/
│   │   ├── category.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── policies-list.md
│   │   ├── summary.md
│   │   └── target.md
│   ├── ini-file/
│   │   ├── overview.md
│   │   ├── properties.md
│   │   ├── summary.md
│   │   └── target-files.md
│   ├── ldap/
│   │   └── index.md
│   ├── nis/
│   │   ├── category.md
│   │   ├── configure-job.md
│   │   ├── overview.md
│   │   ├── query.md
│   │   ├── results.md
│   │   ├── settings.md
│   │   ├── sid-mappings.md
│   │   ├── standard-tables.md
│   │   └── summary.md
│   ├── nosql/
│   │   ├── category.md
│   │   ├── configure-job.md
│   │   ├── criteria.md
│   │   ├── filter.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   └── summary.md
│   ├── password-security/
│   │   ├── category.md
│   │   ├── dictionaries.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   └── summary.md
│   ├── permission-matrix/
│   │   └── index.md
│   ├── powershell/
│   │   ├── edit-query.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── sample-server.md
│   │   └── summary.md
│   ├── registry/
│   │   └── index.md
│   ├── script/
│   │   ├── add.md
│   │   ├── editor.md
│   │   ├── example-1.md
│   │   ├── example-2.md
│   │   ├── methods-properties.md
│   │   ├── overview.md
│   │   ├── properties.md
│   │   ├── reference.md
│   │   └── run.md
│   ├── services/
│   │   └── index.md
│   ├── smart-log/
│   │   ├── collection-method.md
│   │   ├── criteria.md
│   │   ├── event-log-options.md
│   │   ├── log-state.md
│   │   ├── log-type.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── sample-host.md
│   │   ├── summary.md
│   │   ├── target-log.md
│   │   └── target-log-type/
│   │       ├── file-detection-log.md
│   │       └── windows-event-log.md
│   ├── spaa/
│   │   ├── activity-date-scope.md
│   │   ├── activity-log-locations.md
│   │   ├── additional-scoping.md
│   │   ├── agent-settings.md
│   │   ├── bulk-import-settings.md
│   │   ├── category.md
│   │   ├── configure-job.md
│   │   ├── dlp-audit-settings.md
│   │   ├── drop-tables.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── scan-scoping-options.md
│   │   ├── select-dlp-criteria.md
│   │   ├── settings.md
│   │   ├── standard-tables.md
│   │   ├── summary.md
│   │   └── test-access.md
│   ├── sql/
│   │   ├── category.md
│   │   ├── configure-job.md
│   │   ├── criteria.md
│   │   ├── custom-query-oracle.md
│   │   ├── custom-query-sql.md
│   │   ├── filter.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── row-key.md
│   │   ├── settings.md
│   │   └── summary.md
│   ├── system-info/
│   │   ├── category.md
│   │   ├── file-types.md
│   │   ├── job-scope.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── probable-owner.md
│   │   ├── results.md
│   │   ├── shares-list.md
│   │   ├── summary.md
│   │   └── vip-membership.md
│   ├── text-search/
│   │   ├── advanced-criteria.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   ├── search-criteria.md
│   │   ├── source-files.md
│   │   └── summary.md
│   ├── unix/
│   │   ├── edit-script.md
│   │   ├── input.md
│   │   ├── overview.md
│   │   ├── parsing.md
│   │   ├── results.md
│   │   └── settings.md
│   ├── users-groups/
│   │   ├── category/
│   │   │   ├── groups.md
│   │   │   ├── security.md
│   │   │   └── users.md
│   │   ├── overview.md
│   │   ├── results.md
│   │   └── summary.md
│   └── wmi-collector/
│       ├── classes.md
│       ├── overview.md
│       ├── properties.md
│       ├── sample-host.md
│       └── summary.md
├── actions/
│   ├── index.md
│   ├── overview.md
│   ├── libraries.md
│   ├── active-directory/
│   │   ├── operations/
│   │   │   ├── computer-details.md
│   │   │   ├── create-groups.md
│   │   │   ├── create-users.md
│   │   │   ├── disable-enable-computers.md
│   │   │   ├── disable-enable-users.md
│   │   │   ├── group-details.md
│   │   │   ├── group-membership.md
│   │   │   ├── move-objects.md
│   │   │   ├── set-reset-password.md
│   │   │   ├── sid-history.md
│   │   │   └── users-details.md
│   │   ├── operations.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── summary.md
│   │   └── target.md
│   ├── filesystem/
│   │   ├── action.md
│   │   ├── applet-settings.md
│   │   ├── destination.md
│   │   ├── environment.md
│   │   ├── operation.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── parameters/
│   │   │   ├── add-tags.md
│   │   │   ├── change-attributes.md
│   │   │   ├── change-owner.md
│   │   │   ├── change-permission-inheritance.md
│   │   │   ├── change-permissions-auditing.md
│   │   │   ├── change-share-permissions.md
│   │   │   ├── remove-file-permissions.md
│   │   │   ├── remove-share-permissions.md
│   │   │   └── remove-tags.md
│   │   ├── parameters.md
│   │   ├── prior-actions.md
│   │   ├── rollback.md
│   │   ├── summary.md
│   │   └── target.md
│   ├── mailbox/
│   │   ├── affected-mailboxes.md
│   │   ├── criteria-selection.md
│   │   ├── delegate-rights.md
│   │   ├── folder-conditions.md
│   │   ├── folder-identification.md
│   │   ├── identification.md
│   │   ├── message-actions.md
│   │   ├── message-conditions.md
│   │   ├── operations.md
│   │   ├── overview.md
│   │   ├── permissions.md
│   │   ├── sampling-host.md
│   │   ├── summary.md
│   │   └── trusted-users.md
│   ├── powershell/
│   │   ├── execution-options.md
│   │   ├── overview.md
│   │   ├── script.md
│   │   └── summary.md
│   ├── public-folder/
│   │   ├── action.md
│   │   ├── folders.md
│   │   ├── mapi-settings.md
│   │   ├── operations.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── prior-actions.md
│   │   ├── rollback.md
│   │   └── summary.md
│   ├── registry/
│   │   ├── operations.md
│   │   ├── overview.md
│   │   ├── summary.md
│   │   └── target-hosts.md
│   ├── send-mail/
│   │   ├── message.md
│   │   ├── overview.md
│   │   ├── properties.md
│   │   ├── summary.md
│   │   └── view-status.md
│   ├── service-now/
│   │   ├── authentication.md
│   │   ├── description.md
│   │   ├── incident-creation.md
│   │   ├── overview.md
│   │   └── summary.md
│   ├── survey/
│   │   ├── html-style.md
│   │   ├── introduction.md
│   │   ├── mail-message.md
│   │   ├── mail-properties.md
│   │   ├── overview.md
│   │   ├── questions.md
│   │   ├── summary.md
│   │   ├── template.md
│   │   ├── test-survey.md
│   │   └── web-server.md
│   └── web-request/
│       ├── destination.md
│       ├── header.md
│       ├── overview.md
│       ├── parameters.md
│       ├── settings.md
│       └── summary.md
├── analysis/
│   ├── index.md
│   ├── overview.md
│   ├── auto-action.md
│   ├── sql-scripting.md
│   ├── vb-scripting.md
│   ├── business-rules/
│   │   ├── applies-to.md
│   │   ├── logic.md
│   │   ├── overview.md
│   │   └── variables.md
│   ├── change-detection/
│   │   ├── additional-fields.md
│   │   ├── fields.md
│   │   ├── input.md
│   │   ├── input-scope.md
│   │   ├── options.md
│   │   ├── overview.md
│   │   ├── result-sample.md
│   │   ├── summary.md
│   │   └── unique-key.md
│   ├── notification/
│   │   ├── change-type.md
│   │   ├── command-line.md
│   │   ├── criteria.md
│   │   ├── event-log.md
│   │   ├── frequency.md
│   │   ├── hosts.md
│   │   ├── overview.md
│   │   ├── select-table.md
│   │   ├── smtp.md
│   │   ├── summary.md
│   │   ├── table-type.md
│   │   ├── time-window.md
│   │   └── type.md
│   └── sql-view-creation/
│       ├── columns.md
│       ├── export.md
│       ├── filter.md
│       ├── input.md
│       ├── input-scope.md
│       ├── join-columns.md
│       ├── overview.md
│       ├── result.md
│       ├── result-constraints.md
│       ├── result-sample.md
│       ├── summary.md
│       └── time-window.md
├── reporting/
│   ├── index.md
│   ├── overview.md
│   ├── cleanup.md
│   ├── create.md
│   ├── edit.md
│   ├── tags.md
│   ├── view.md
│   ├── chart-wizard/
│   │   ├── chart-format.md
│   │   ├── configure.md
│   │   ├── data-source.md
│   │   └── overview.md
│   ├── interactive-grids/
│   │   ├── copying-cells.md
│   │   ├── grouping.md
│   │   ├── overview.md
│   │   ├── paging.md
│   │   └── search-filter.md
│   └── wizard/
│       ├── authoring.md
│       ├── email.md
│       ├── layout.md
│       ├── overview.md
│       ├── publish-security.md
│       └── widgets.md
├── job-management/
│   ├── index.md
│   ├── overview.md
│   ├── features.md
│   ├── instantiate.md
│   ├── group/
│   │   ├── connection.md
│   │   ├── history.md
│   │   ├── host-lists-assignment.md
│   │   ├── overview.md
│   │   ├── reporting.md
│   │   ├── settings.md
│   │   └── storage.md
│   ├── instant-jobs/
│   │   ├── ad-password-expiration-notification.md
│   │   ├── ex-register-azure-app-auth.md
│   │   ├── fs-defend-sdd.md
│   │   ├── fs-migrate-schema.md
│   │   ├── overview.md
│   │   ├── sas-execution-statistics.md
│   │   ├── sp-register-azure-app-auth.md
│   │   └── sp-remove-host.md
│   ├── job/
│   │   ├── configure/
│   │   │   ├── actions.md
│   │   │   ├── analysis.md
│   │   │   ├── analysis-customizable-parameters.md
│   │   │   ├── hosts.md
│   │   │   ├── overview.md
│   │   │   ├── queries.md
│   │   │   └── reports.md
│   │   ├── create.md
│   │   ├── disable-enable.md
│   │   ├── overview.md
│   │   ├── properties/
│   │   │   ├── auto-retry.md
│   │   │   ├── connection.md
│   │   │   ├── general.md
│   │   │   ├── history.md
│   │   │   ├── notification.md
│   │   │   ├── overview.md
│   │   │   ├── performance.md
│   │   │   ├── report-roles.md
│   │   │   ├── report-settings.md
│   │   │   ├── storage.md
│   │   │   └── view-xml.md
│   │   ├── results.md
│   │   └── status.md
│   ├── running-instances/
│   │   ├── job-details.md
│   │   └── overview.md
│   └── schedule/
│       ├── overview.md
│       ├── rename-wizard.md
│       └── wizard.md
├── host-management/
│   ├── index.md
│   ├── overview.md
│   ├── data-grid.md
│   ├── lists.md
│   ├── actions/
│   │   ├── add.md
│   │   ├── delete-host.md
│   │   ├── delete-list.md
│   │   ├── edit-list.md
│   │   ├── edit-query.md
│   │   ├── export.md
│   │   ├── import-host.md
│   │   ├── import-location.md
│   │   ├── overview.md
│   │   ├── refresh.md
│   │   ├── rename.md
│   │   ├── save-to-list.md
│   │   ├── save-view.md
│   │   ├── schedule.md
│   │   ├── suspend.md
│   │   ├── view-host.md
│   │   └── view-query.md
│   └── discovery/
│       ├── activities.md
│       ├── log.md
│       ├── overview.md
│       ├── queries.md
│       └── wizard/
│           ├── ad-domain-controllers.md
│           ├── ad-exchange.md
│           ├── ad-general.md
│           ├── csv.md
│           ├── database.md
│           ├── ip-network.md
│           └── overview.md
├── administration/
│   ├── index.md
│   ├── overview.md
│   ├── navigation/
│   │   ├── activities-pane.md
│   │   ├── data-grid.md
│   │   ├── overview.md
│   │   ├── pane.md
│   │   ├── results-pane.md
│   │   └── top.md
│   ├── settings/
│   │   ├── index.md
│   │   ├── overview.md
│   │   ├── exchange.md
│   │   ├── history.md
│   │   ├── host-discovery.md
│   │   ├── host-inventory.md
│   │   ├── notification.md
│   │   ├── reporting.md
│   │   ├── schedule.md
│   │   ├── service-now.md
│   │   ├── access/
│   │   │   ├── overview.md
│   │   │   ├── rest-api/
│   │   │   │   ├── assign-app-access.md
│   │   │   │   ├── get-data.md
│   │   │   │   ├── obtain-token.md
│   │   │   │   ├── overview.md
│   │   │   │   ├── powershell-commands.md
│   │   │   │   └── refresh-token.md
│   │   │   └── role-based/
│   │   │       ├── assign-roles.md
│   │   │       ├── configure-roles.md
│   │   │       ├── custom-roles.md
│   │   │       ├── event-log.md
│   │   │       ├── faq.md
│   │   │       ├── overview.md
│   │   │       ├── role-definitions.md
│   │   │       ├── schedule-service-account.md
│   │   │       ├── secure-reports.md
│   │   │       └── workflow.md
│   │   ├── application/
│   │   │   ├── overview.md
│   │   │   └── vault.md
│   │   ├── connection/
│   │   │   ├── cyberark-integration.md
│   │   │   ├── gmsa.md
│   │   │   ├── overview.md
│   │   │   └── profile/
│   │   │       ├── active-directory.md
│   │   │       ├── aws.md
│   │   │       ├── create.md
│   │   │       ├── dropbox.md
│   │   │       ├── entra-id.md
│   │   │       ├── exchange-modern-auth.md
│   │   │       ├── local-windows.md
│   │   │       ├── oracle.md
│   │   │       ├── sql.md
│   │   │       ├── task.md
│   │   │       ├── unix.md
│   │   │       └── web-services.md
│   │   ├── sensitive-data/
│   │   │   ├── criteria.md
│   │   │   ├── overview.md
│   │   │   └── exclusions/
│   │   │       ├── add.md
│   │   │       ├── delete.md
│   │   │       ├── edit.md
│   │   │       ├── export.md
│   │   │       ├── import.md
│   │   │       └── overview.md
│   │   └── storage/
│   │       ├── add.md
│   │       ├── default.md
│   │       ├── delete.md
│   │       ├── overview.md
│   │       └── update-auth.md
│   └── maintenance/
│       ├── antivirus-exclusions.md
│       ├── backup-recovery.md
│       ├── best-practices.md
│       ├── overview.md
│       ├── troubleshooting.md
│       └── update-passwords.md
├── sensitive-data-discovery/
│   ├── index.md
│   ├── overview.md
│   ├── exempted-file-extensions.md
│   ├── metadata-tags.md
│   ├── supported-formats.md
│   ├── system-criteria.md
│   └── criteria-editor/
│       ├── configuration.md
│       ├── overview.md
│       └── criteria-type/
│           ├── keyword.md
│           ├── regular-expression.md
│           └── summary.md
├── solutions/
│   ├── index.md
│   ├── active-directory/
│   │   ├── index.md
│   │   ├── overview.md
│   │   ├── ad-security-assessment.md
│   │   ├── activity/
│   │   │   ├── ad-activity-collection.md
│   │   │   ├── ad-ldap-queries.md
│   │   │   ├── ad-lockouts.md
│   │   │   ├── overview.md
│   │   │   ├── recommended.md
│   │   │   ├── changes/
│   │   │   │   ├── ad-computer-modifications.md
│   │   │   │   ├── ad-group-modifications.md
│   │   │   │   ├── ad-user-modifications.md
│   │   │   │   └── overview.md
│   │   │   ├── group-usage/
│   │   │   │   ├── ad-access-changes.md
│   │   │   │   ├── ad-group-hosts.md
│   │   │   │   ├── ad-group-member-activity.md
│   │   │   │   └── overview.md
│   │   │   ├── operations/
│   │   │   │   ├── ad-authentication-protocol.md
│   │   │   │   ├── ad-domain-controller-traffic.md
│   │   │   │   ├── ad-hardcoded-dcs.md
│   │   │   │   ├── ad-load-balancing.md
│   │   │   │   ├── ad-machine-owners.md
│   │   │   │   └── overview.md
│   │   │   └── privileged-accounts/
│   │   │       ├── ad-admin-accounts.md
│   │   │       ├── ad-service-account-auth.md
│   │   │       └── overview.md
│   │   ├── certificate-authority/
│   │   │   ├── ad-ca-collection.md
│   │   │   ├── ad-certificate-audit.md
│   │   │   ├── ad-certificate-requests.md
│   │   │   └── overview.md
│   │   ├── cleanup/
│   │   │   ├── ad-cleanup-progress.md
│   │   │   ├── configure-target-ou.md
│   │   │   ├── overview.md
│   │   │   ├── recommended.md
│   │   │   ├── computers/
│   │   │   │   ├── ad-deprovision-computers-status.md
│   │   │   │   ├── ad-deprovision-computers.md
│   │   │   │   └── overview.md
│   │   │   ├── groups/
│   │   │   │   ├── overview.md
│   │   │   │   ├── deprovision/
│   │   │   │   │   ├── ad-deprovision-groups-status.md
│   │   │   │   │   ├── ad-deprovision-groups.md
│   │   │   │   │   └── overview.md
│   │   │   │   └── stamping/
│   │   │   │       ├── ad-group-cleanup-permissions.md
│   │   │   │       ├── ad-group-stamping.md
│   │   │   │       └── overview.md
│   │   │   └── users/
│   │   │       ├── ad-deprovision-users-status.md
│   │   │       ├── ad-deprovision-users.md
│   │   │       └── overview.md
│   │   ├── computers/
│   │   │   ├── ad-computer-delegation.md
│   │   │   ├── ad-stale-computers.md
│   │   │   ├── overview.md
│   │   │   └── recommended.md
│   │   ├── domains/
│   │   │   ├── ad-dc-summary.md
│   │   │   ├── ad-domain-info.md
│   │   │   ├── ad-dsrm-settings.md
│   │   │   ├── ad-kerberoasting-risk.md
│   │   │   ├── overview.md
│   │   │   ├── recommended.md
│   │   │   └── collection/
│   │   │       ├── ad-domain-controllers.md
│   │   │       ├── ad-dsrm.md
│   │   │       ├── ad-time-sync.md
│   │   │       └── overview.md
│   │   ├── group-policy/
│   │   │   ├── ad-cpassword.md
│   │   │   ├── ad-group-policy.md
│   │   │   ├── ad-overlapping-gpos.md
│   │   │   ├── ad-password-policies.md
│   │   │   ├── overview.md
│   │   │   └── recommended.md
│   │   ├── groups/
│   │   │   ├── ad-circular-nesting.md
│   │   │   ├── ad-dc-logon-groups.md
│   │   │   ├── ad-duplicate-groups.md
│   │   │   ├── ad-empty-groups.md
│   │   │   ├── ad-group-probable-owners.md
│   │   │   ├── ad-largest-groups.md
│   │   │   ├── ad-mail-security-groups.md
│   │   │   ├── ad-nested-groups.md
│   │   │   ├── ad-sensitive-security-groups.md
│   │   │   ├── ad-stale-groups.md
│   │   │   ├── overview.md
│   │   │   └── recommended.md
│   │   └── users/
│   │       ├── ad-direct-membership.md
│   │       ├── ad-duplicate-users.md
│   │       ├── ad-orphaned-users.md
│   │       ├── ad-password-status.md
│   │       ├── ad-service-accounts.md
│   │       ├── ad-sid-history.md
│   │       ├── ad-stale-users.md
│   │       ├── ad-user-attribute-completion.md
│   │       ├── ad-user-delegation.md
│   │       ├── ad-user-token.md
│   │       ├── ad-weak-passwords.md
│   │       ├── overview.md
│   │       └── recommended.md
│   ├── active-directory-inventory/
│   │   ├── 1-ad-scan.md
│   │   ├── 2-ad-changes.md
│   │   ├── 3-user-management.md
│   │   ├── 4-group-management.md
│   │   ├── 5-computer-management.md
│   │   ├── 6-group-policy-management.md
│   │   ├── 7-organizational-units.md
│   │   ├── 8-sites-and-services.md
│   │   ├── 9-gplogonrights.md
│   │   └── overview.md
│   ├── active-directory-permissions-analyzer/
│   │   ├── 1-ad-permissions-scan.md
│   │   ├── 2-effective-permissions.md
│   │   ├── 3-permission-reports.md
│   │   ├── 4-access-path-analysis.md
│   │   ├── 5-what-if-analysis.md
│   │   ├── 6-delegation-analysis.md
│   │   ├── 7-orphaned-sids.md
│   │   ├── 8-permission-remediation.md
│   │   └── overview.md
│   ├── aws/
│   │   ├── 1-aws-scan.md
│   │   ├── 2-s3-inventory.md
│   │   ├── 3-cloudtrail-analysis.md
│   │   ├── 4-iam-analysis.md
│   │   ├── 5-security-groups.md
│   │   ├── 6-vpc-analysis.md
│   │   └── overview.md
│   ├── box/
│   │   ├── 1-box-scan.md
│   │   ├── 2-box-activity.md
│   │   ├── 3-collaboration-analysis.md
│   │   ├── 4-external-sharing.md
│   │   └── overview.md
│   ├── databases/
│   │   ├── 1-database-scan.md
│   │   ├── 2-permission-analysis.md
│   │   ├── 3-access-patterns.md
│   │   ├── 4-sensitive-data.md
│   │   └── overview.md
│   ├── dropbox/
│   │   ├── 1-dropbox-scan.md
│   │   ├── 2-sharing-analysis.md
│   │   ├── 3-file-classification.md
│   │   ├── 4-activity-monitoring.md
│   │   └── overview.md
│   ├── entra-id/
│   │   ├── 1-entra-id-scan.md
│   │   ├── 2-user-analysis.md
│   │   ├── 3-role-analysis.md
│   │   ├── 4-application-analysis.md
│   │   ├── 5-conditional-access.md
│   │   └── overview.md
│   ├── exchange/
│   │   ├── 1-exchange-scan.md
│   │   ├── 2-mailbox-permissions.md
│   │   ├── 3-public-folder-permissions.md
│   │   ├── 4-transport-rules.md
│   │   ├── 5-mail-flow-analysis.md
│   │   └── overview.md
│   ├── filesystem/
│   │   ├── 1-filesystem-scan.md
│   │   ├── 2-permission-analysis.md
│   │   ├── 3-file-ownership.md
│   │   ├── 4-sensitive-data-discovery.md
│   │   ├── 5-access-patterns.md
│   │   ├── 6-orphaned-files.md
│   │   └── overview.md
│   ├── sharepoint/
│   │   ├── 1-sharepoint-scan.md
│   │   ├── 2-site-permissions.md
│   │   ├── 3-document-analysis.md
│   │   ├── 4-external-sharing.md
│   │   ├── 5-workflow-analysis.md
│   │   └── overview.md
│   └── unix/
│       ├── 1-unix-scan.md
│       ├── 2-user-groups.md
│       ├── 3-file-permissions.md
│       ├── 4-sudo-analysis.md
│       └── overview.md
├── requirements/
│   ├── index.md
│   ├── overview.md
│   ├── solutions/
│   │   ├── active-directory.md
│   │   ├── active-directory-permissions-analyzer.md
│   │   ├── aws.md
│   │   ├── box.md
│   │   ├── databases.md
│   │   ├── dropbox.md
│   │   ├── entra-id.md
│   │   ├── filesystem.md
│   │   ├── sharepoint.md
│   │   ├── unix.md
│   │   ├── windows.md
│   │   ├── entra-id/
│   │   │   └── entra-roles.md
│   │   ├── exchange/
│   │   │   ├── mail-flow.md
│   │   │   ├── mapi.md
│   │   │   ├── powershell.md
│   │   │   ├── remote-connections.md
│   │   │   ├── support.md
│   │   │   └── web-services-api.md
│   │   ├── filesystem/
│   │   │   ├── applet-mode-permissions.md
│   │   │   ├── applet-mode-ports.md
│   │   │   ├── local-mode-permissions.md
│   │   │   ├── local-mode-ports.md
│   │   │   ├── proxy-mode-applet-permissions.md
│   │   │   ├── proxy-mode-applet-ports.md
│   │   │   ├── proxy-mode-server.md
│   │   │   ├── proxy-mode-service-permissions.md
│   │   │   ├── proxy-mode-service-ports.md
│   │   │   └── scan-options.md
│   │   └── sharepoint/
│   │       ├── agentless-permissions.md
│   │       ├── agentless-ports.md
│   │       ├── agent-permissions.md
│   │       ├── agent-ports.md
│   │       ├── online-permissions.md
│   │       ├── online-ports.md
│   │       └── scan-options.md
│   └── target/
│       ├── active-directory-permissions-analyzer.md
│       ├── aws.md
│       ├── box.md
│       ├── database-db2.md
│       ├── database-mongodb.md
│       ├── database-mysql.md
│       ├── database-oracle.md
│       ├── database-postgresql.md
│       ├── database-redshift.md
│       ├── database-sql.md
│       ├── dropbox.md
│       ├── exchange.md
│       ├── exchange-online.md
│       ├── filesystems.md
│       ├── sharepoint.md
│       ├── unix.md
│       ├── windows.md
│       └── config/
│           ├── aws.md
│           ├── azure-files.md
│           ├── azure-information-protection.md
│           ├── azure-sql-access.md
│           ├── database-azure-sql.md
│           └── database-oracle.md
├── cdsa/
│   ├── job.md
│   ├── overview.md
│   └── presentation.md
└── topics/
    ├── best-practices.md
    ├── data-minimization.md
    ├── de-identification.md
    ├── email-notification.md
    ├── permission-reports.md
    ├── privacy-protection.md
    ├── restore-database.md
    ├── runtime-processing.md
    ├── security-considerations.md
    ├── shared-mailboxes.md
    └── tags.md
```
