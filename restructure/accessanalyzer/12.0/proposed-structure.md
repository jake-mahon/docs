# Proposed Directory Structure for AccessAnalyzer 12.0

```
docs/accessanalyzer/12.0/
├── index.md
├── getting-started/
│   ├── index.md
│   ├── system-requirements/
│   │   ├── index.md
│   │   ├── application-server.md
│   │   ├── database-server.md
│   │   └── target-systems.md
│   ├── installation/
│   │   ├── index.md
│   │   ├── application-server.md
│   │   ├── database-setup.md
│   │   ├── file-system-proxy.md
│   │   ├── sharepoint-agent.md
│   │   └── mapi-cdo-install.md
│   └── upgrade/
│       ├── index.md
│       ├── pre-upgrade-checklist.md
│       └── upgrade-process.md
├── configuration/
│   ├── index.md
│   ├── active-directory/
│   │   ├── index.md
│   │   ├── domain-controller-setup.md
│   │   └── permissions-required.md
│   ├── cloud-platforms/
│   │   ├── index.md
│   │   ├── aws.md
│   │   ├── entra-id.md
│   │   ├── exchange-online.md
│   │   └── sharepoint-online.md
│   ├── storage-systems/
│   │   ├── index.md
│   │   ├── dell-systems.md
│   │   ├── hitachi.md
│   │   ├── nasuni.md
│   │   ├── netapp.md
│   │   ├── nutanix.md
│   │   └── qumulo.md
│   └── file-systems/
│       ├── index.md
│       ├── windows-file-server.md
│       ├── unix-nfs.md
│       └── sharepoint-on-premises.md
├── administration/
│   ├── index.md
│   ├── navigation/
│   │   ├── index.md
│   │   └── user-interface.md
│   ├── settings/
│   │   ├── index.md
│   │   ├── application-settings.md
│   │   ├── connection-profiles.md
│   │   ├── storage-management.md
│   │   ├── access-control.md
│   │   └── sensitive-data-settings.md
│   ├── host-management/
│   │   ├── index.md
│   │   ├── host-discovery.md
│   │   ├── host-groups.md
│   │   └── credentials.md
│   ├── job-management/
│   │   ├── index.md
│   │   ├── creating-jobs.md
│   │   ├── job-groups.md
│   │   ├── scheduling.md
│   │   ├── instant-jobs.md
│   │   └── monitoring-jobs.md
│   └── maintenance/
│       ├── index.md
│       ├── database-maintenance.md
│       ├── log-management.md
│       └── backup-restore.md
├── data-collection/
│   ├── index.md
│   ├── active-directory/
│   │   ├── index.md
│   │   ├── inventory.md
│   │   ├── permissions.md
│   │   ├── activity.md
│   │   └── group-policy.md
│   ├── cloud-services/
│   │   ├── index.md
│   │   ├── aws.md
│   │   ├── entra-id.md
│   │   ├── box.md
│   │   └── dropbox.md
│   ├── databases/
│   │   ├── index.md
│   │   ├── sql-server.md
│   │   ├── oracle.md
│   │   ├── mysql.md
│   │   ├── postgresql.md
│   │   ├── mongodb.md
│   │   └── db2.md
│   ├── email-systems/
│   │   ├── index.md
│   │   ├── exchange-mailboxes.md
│   │   ├── exchange-public-folders.md
│   │   ├── exchange-metrics.md
│   │   └── exchange-online.md
│   ├── file-systems/
│   │   ├── index.md
│   │   ├── windows-file-server.md
│   │   ├── sharepoint.md
│   │   ├── unix-systems.md
│   │   └── nis.md
│   ├── security-assessment/
│   │   ├── index.md
│   │   ├── password-security.md
│   │   ├── dns.md
│   │   ├── disk-info.md
│   │   ├── system-info.md
│   │   └── event-logs.md
│   └── custom-collectors/
│       ├── index.md
│       ├── powershell.md
│       ├── command-line.md
│       ├── wmi.md
│       ├── script.md
│       └── text-search.md
├── analysis-tools/
│   ├── index.md
│   ├── change-detection/
│   │   ├── index.md
│   │   └── configuration.md
│   ├── notifications/
│   │   ├── index.md
│   │   └── alert-configuration.md
│   ├── business-rules/
│   │   ├── index.md
│   │   └── rule-creation.md
│   ├── sql-views/
│   │   ├── index.md
│   │   └── custom-views.md
│   └── scripting/
│       ├── index.md
│       ├── sql-scripting.md
│       └── vb-scripting.md
├── actions/
│   ├── index.md
│   ├── active-directory-actions/
│   │   ├── index.md
│   │   └── operations.md
│   ├── file-system-actions/
│   │   ├── index.md
│   │   └── operations.md
│   ├── mailbox-actions/
│   │   ├── index.md
│   │   └── operations.md
│   ├── registry-actions/
│   │   ├── index.md
│   │   └── operations.md
│   ├── notification-actions/
│   │   ├── index.md
│   │   ├── send-mail.md
│   │   ├── service-now.md
│   │   └── web-request.md
│   ├── survey-actions/
│   │   ├── index.md
│   │   └── survey-configuration.md
│   └── powershell-actions/
│       ├── index.md
│       └── script-execution.md
├── reporting/
│   ├── index.md
│   ├── report-creation/
│   │   ├── index.md
│   │   ├── report-wizard.md
│   │   └── chart-wizard.md
│   ├── interactive-grids/
│   │   ├── index.md
│   │   └── grid-configuration.md
│   └── report-templates/
│       ├── index.md
│       └── custom-templates.md
├── solutions/
│   ├── index.md
│   ├── active-directory-solutions/
│   │   ├── index.md
│   │   ├── user-management.md
│   │   ├── group-management.md
│   │   ├── computer-management.md
│   │   ├── permissions-analysis.md
│   │   ├── activity-monitoring.md
│   │   └── cleanup-tasks.md
│   ├── cloud-security/
│   │   ├── index.md
│   │   ├── aws-security.md
│   │   ├── entra-id-security.md
│   │   ├── box-security.md
│   │   └── dropbox-security.md
│   ├── data-access-governance/
│   │   ├── index.md
│   │   ├── file-system-permissions.md
│   │   ├── sharepoint-permissions.md
│   │   ├── exchange-permissions.md
│   │   └── database-permissions.md
│   ├── compliance/
│   │   ├── index.md
│   │   ├── sensitive-data-discovery.md
│   │   ├── access-certification.md
│   │   └── audit-trails.md
│   └── security-operations/
│       ├── index.md
│       ├── privileged-access.md
│       ├── suspicious-activity.md
│       ├── forensics.md
│       └── security-assessments.md
├── sensitive-data-discovery/
│   ├── index.md
│   ├── criteria-configuration/
│   │   ├── index.md
│   │   ├── pattern-matching.md
│   │   ├── keyword-search.md
│   │   └── metadata-tags.md
│   └── supported-formats/
│       ├── index.md
│       └── file-types.md
├── credential-security-assessment/
│   ├── index.md
│   ├── job-configuration/
│   │   ├── index.md
│   │   └── assessment-setup.md
│   └── results-presentation/
│       ├── index.md
│       └── remediation-guidance.md
└── reference/
    ├── index.md
    ├── permission-matrix.md
    ├── action-libraries.md
    ├── api-reference/
    │   ├── index.md
    │   └── rest-api.md
    └── troubleshooting/
        ├── index.md
        └── common-issues.md
```
