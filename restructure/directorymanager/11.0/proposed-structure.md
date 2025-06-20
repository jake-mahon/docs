# Proposed Directory Structure for Directory Manager 11.0

```
docs/directorymanager/11.0/
├── index.md
├── getting-started/
│   ├── index.md
│   ├── introduction.md
│   ├── overview.md
│   └── whats-new.md
├── installation/
│   ├── index.md
│   ├── requirements/
│   │   ├── index.md
│   │   ├── hardware-requirements.md
│   │   ├── software-requirements.md
│   │   ├── database-requirements.md
│   │   └── exchange-server-requirements.md
│   ├── preparation/
│   │   ├── index.md
│   │   ├── preparation-tool.md
│   │   └── what-prep-installs.md
│   ├── installation-process/
│   │   ├── index.md
│   │   ├── installer-guide.md
│   │   └── post-install-configuration.md
│   ├── configuration/
│   │   ├── index.md
│   │   ├── database-configuration.md
│   │   ├── gid-server-configuration.md
│   │   └── authentication-setup.md
│   ├── upgrade/
│   │   ├── index.md
│   │   ├── upgrade-guide.md
│   │   └── upgrade-notes.md
│   ├── backup-restore.md
│   └── uninstall.md
├── configuration/
│   ├── index.md
│   ├── admin-center/
│   │   ├── index.md
│   │   ├── getting-started/
│   │   │   ├── index.md
│   │   │   ├── sign-in.md
│   │   │   ├── authentication.md
│   │   │   ├── enrollment.md
│   │   │   ├── navigation.md
│   │   │   └── dashboard.md
│   │   ├── data-sources/
│   │   │   ├── index.md
│   │   │   ├── create-data-source.md
│   │   │   └── manage-data-sources.md
│   │   ├── identity-stores/
│   │   │   ├── index.md
│   │   │   ├── create-identity-store.md
│   │   │   ├── configure-identity-store.md
│   │   │   ├── manage-identity-store.md
│   │   │   ├── linking/
│   │   │   │   ├── index.md
│   │   │   │   └── manage-links.md
│   │   │   ├── replication.md
│   │   │   ├── configuration/
│   │   │   │   ├── index.md
│   │   │   │   ├── authentication-policies.md
│   │   │   │   ├── authentication-types.md
│   │   │   │   ├── directory-service/
│   │   │   │   │   ├── index.md
│   │   │   │   │   ├── circular-reference.md
│   │   │   │   │   ├── dynasty-settings.md
│   │   │   │   │   ├── group-expiry-deletion.md
│   │   │   │   │   ├── group-lifecycle.md
│   │   │   │   │   ├── history-tracking.md
│   │   │   │   │   ├── membership-lifecycle.md
│   │   │   │   │   ├── messaging-provider.md
│   │   │   │   │   ├── out-of-bounds.md
│   │   │   │   │   ├── prefixes.md
│   │   │   │   │   └── profile-validation.md
│   │   │   │   ├── security/
│   │   │   │   │   ├── index.md
│   │   │   │   │   ├── password-options.md
│   │   │   │   │   ├── second-way-authentication.md
│   │   │   │   │   ├── security-questions.md
│   │   │   │   │   └── sms-authentication.md
│   │   │   │   └── smtp-server.md
│   │   │   ├── history/
│   │   │   │   ├── index.md
│   │   │   │   ├── view-history.md
│   │   │   │   ├── event-logging.md
│   │   │   │   └── history-details.md
│   │   │   └── advanced/
│   │   │       ├── index.md
│   │   │       ├── ad-service-account.md
│   │   │       ├── advanced-entra-id.md
│   │   │       └── gmsa-requirements.md
│   │   ├── entitlements/
│   │   │   ├── index.md
│   │   │   ├── active-directory/
│   │   │   │   ├── index.md
│   │   │   │   └── manage-entitlements.md
│   │   │   └── entra-id/
│   │   │       ├── index.md
│   │   │       └── manage-entitlements.md
│   │   ├── security-roles/
│   │   │   ├── index.md
│   │   │   ├── create-security-role.md
│   │   │   ├── manage-security-roles.md
│   │   │   ├── check-role.md
│   │   │   ├── criteria.md
│   │   │   ├── permissions.md
│   │   │   └── policies/
│   │   │       ├── index.md
│   │   │       ├── authentication-policy.md
│   │   │       ├── group-owners-policy.md
│   │   │       ├── helpdesk-policy.md
│   │   │       ├── new-object-policy.md
│   │   │       ├── password-policy.md
│   │   │       ├── query-designer-policy.md
│   │   │       ├── search-policy.md
│   │   │       └── synchronize-policy.md
│   │   ├── scheduling/
│   │   │   ├── index.md
│   │   │   ├── manage-schedules.md
│   │   │   ├── entitlement-scheduling.md
│   │   │   ├── entitlement-scope.md
│   │   │   ├── entitlement-temporary-permissions.md
│   │   │   ├── group-lifecycle-scheduling.md
│   │   │   ├── group-usage-service.md
│   │   │   ├── history-retention.md
│   │   │   ├── managed-by-lifecycle.md
│   │   │   ├── membership-lifecycle.md
│   │   │   ├── orphan-group-update.md
│   │   │   ├── reports.md
│   │   │   ├── schema-replication.md
│   │   │   ├── smart-group-update.md
│   │   │   ├── synchronize.md
│   │   │   ├── user-lifecycle.md
│   │   │   └── workflow-acceleration.md
│   │   ├── services/
│   │   │   ├── index.md
│   │   │   ├── admin-center-service.md
│   │   │   ├── data-service/
│   │   │   │   ├── index.md
│   │   │   │   ├── create-data-service.md
│   │   │   │   └── manage-data-service.md
│   │   │   ├── email-service.md
│   │   │   ├── replication-service.md
│   │   │   ├── scheduler-service.md
│   │   │   └── security-service/
│   │   │       ├── index.md
│   │   │       ├── create-security-service.md
│   │   │       └── manage-security-service.md
│   │   ├── portals/
│   │   │   ├── index.md
│   │   │   ├── create-portal.md
│   │   │   ├── delete-portal.md
│   │   │   ├── applications.md
│   │   │   ├── prerequisites/
│   │   │   │   ├── index.md
│   │   │   │   ├── docker-prerequisites.md
│   │   │   │   └── remote-iis-prerequisites.md
│   │   │   ├── design/
│   │   │   │   ├── index.md
│   │   │   │   ├── bad-words.md
│   │   │   │   ├── create-object.md
│   │   │   │   ├── import-export.md
│   │   │   │   ├── navigation-bar.md
│   │   │   │   ├── object-card.md
│   │   │   │   ├── object-list.md
│   │   │   │   ├── object-properties.md
│   │   │   │   ├── organizational-hierarchy.md
│   │   │   │   ├── property-validation.md
│   │   │   │   ├── query-attributes.md
│   │   │   │   ├── send-as-on-behalf.md
│   │   │   │   ├── toolbars.md
│   │   │   │   └── forms/
│   │   │   │       ├── index.md
│   │   │   │       ├── quick-search.md
│   │   │   │       ├── search-forms.md
│   │   │   │       └── search-results.md
│   │   │   ├── display-types/
│   │   │   │   ├── index.md
│   │   │   │   ├── categories.md
│   │   │   │   ├── custom.md
│   │   │   │   ├── dropdown-list.md
│   │   │   │   ├── grid.md
│   │   │   │   ├── image.md
│   │   │   │   ├── linked-dropdown.md
│   │   │   │   ├── multiline-textbox.md
│   │   │   │   ├── radio.md
│   │   │   │   └── textbox.md
│   │   │   ├── linked-combo/
│   │   │   │   ├── index.md
│   │   │   │   ├── details.md
│   │   │   │   ├── file-format.md
│   │   │   │   └── schema.md
│   │   │   └── server-configuration/
│   │   │       ├── index.md
│   │   │       ├── advanced.md
│   │   │       ├── docker.md
│   │   │       ├── general.md
│   │   │       ├── log.md
│   │   │       ├── native-iis.md
│   │   │       ├── remote-iis.md
│   │   │       └── support.md
│   │   ├── mobile-service/
│   │   │   ├── index.md
│   │   │   ├── create-mobile-service.md
│   │   │   ├── delete-mobile-service.md
│   │   │   ├── phone-setup.md
│   │   │   ├── design/
│   │   │   │   ├── index.md
│   │   │   │   ├── object-properties.md
│   │   │   │   ├── permissions.md
│   │   │   │   ├── property-validation.md
│   │   │   │   ├── quick-search.md
│   │   │   │   └── search-results.md
│   │   │   └── server-configuration/
│   │   │       ├── index.md
│   │   │       ├── deployment.md
│   │   │       └── general.md
│   │   ├── notifications/
│   │   │   ├── index.md
│   │   │   ├── customize-notifications.md
│   │   │   └── notification-queue.md
│   │   ├── sms-gateway/
│   │   │   ├── index.md
│   │   │   ├── manage-gateways.md
│   │   │   ├── implement-custom.md
│   │   │   └── custom-gateway/
│   │   │       ├── index.md
│   │   │       ├── account-id.md
│   │   │       ├── clone.md
│   │   │       ├── password.md
│   │   │       ├── proxy-configuration/
│   │   │       │   ├── index.md
│   │   │       │   ├── proxy-domain.md
│   │   │       │   ├── proxy-hostname.md
│   │   │       │   ├── proxy-password.md
│   │   │       │   ├── proxy-port.md
│   │   │       │   └── proxy-username.md
│   │   │       ├── send-short-message.md
│   │   │       ├── short-message/
│   │   │       │   ├── index.md
│   │   │       │   ├── access-code.md
│   │   │       │   ├── class.md
│   │   │       │   ├── max-length.md
│   │   │       │   ├── message.md
│   │   │       │   ├── phone-numbers.md
│   │   │       │   ├── reference-id.md
│   │   │       │   └── validate.md
│   │   │       ├── send-sms-message-result/
│   │   │       │   ├── index.md
│   │   │       │   ├── class.md
│   │   │       │   ├── exception-message.md
│   │   │       │   ├── message.md
│   │   │       │   └── success.md
│   │   │       ├── test-connection.md
│   │   │       ├── test-credentials.md
│   │   │       ├── test-proxy.md
│   │   │       ├── url.md
│   │   │       └── user-id.md
│   │   ├── workflows/
│   │   │   ├── index.md
│   │   │   ├── implement-workflow.md
│   │   │   ├── integrate-workflow.md
│   │   │   ├── advanced-settings.md
│   │   │   └── approver-acceleration.md
│   │   ├── helpdesk/
│   │   │   ├── index.md
│   │   │   ├── helpdesk-history.md
│   │   │   └── operations/
│   │   │       ├── index.md
│   │   │       ├── ask-to-enroll.md
│   │   │       ├── export.md
│   │   │       ├── reset-password.md
│   │   │       ├── search.md
│   │   │       ├── unenroll.md
│   │   │       └── unlock-account.md
│   │   ├── replication/
│   │   │   ├── index.md
│   │   │   └── replication-settings.md
│   │   ├── general/
│   │   │   ├── index.md
│   │   │   ├── access-applications.md
│   │   │   ├── change-password.md
│   │   │   ├── concepts.md
│   │   │   ├── global-pool.md
│   │   │   ├── history.md
│   │   │   ├── licensing.md
│   │   │   ├── logs.md
│   │   │   └── switch-account.md
│   │   └── history.md
│   ├── authentication-setup/
│   │   ├── index.md
│   │   ├── authenticator.md
│   │   ├── email.md
│   │   ├── linked-account.md
│   │   ├── multi-factor-authentication.md
│   │   ├── security-questions.md
│   │   ├── single-factor-authentication.md
│   │   ├── windows-hello.md
│   │   └── yubikey.md
│   └── entra-id-configuration/
│       ├── index.md
│       ├── create-configuration.md
│       └── app-registration/
│           ├── index.md
│           ├── create-registration.md
│           ├── app-permissions.md
│           ├── app-register.md
│           └── modern-authentication.md
├── user-guide/
│   ├── index.md
│   ├── portal-overview/
│   │   ├── index.md
│   │   ├── login.md
│   │   ├── welcome.md
│   │   ├── dashboard.md
│   │   ├── general-features.md
│   │   └── toolbar.md
│   ├── groups/
│   │   ├── index.md
│   │   ├── overview/
│   │   │   ├── index.md
│   │   │   ├── all-groups.md
│   │   │   ├── all-dynasties.md
│   │   │   ├── all-expired-groups.md
│   │   │   ├── all-expiring-groups.md
│   │   │   ├── all-smart-groups.md
│   │   │   ├── my-groups.md
│   │   │   ├── my-dynasties.md
│   │   │   ├── my-deleted-groups.md
│   │   │   ├── my-expired-groups.md
│   │   │   ├── my-expiring-groups.md
│   │   │   ├── my-memberships.md
│   │   │   ├── my-smart-groups.md
│   │   │   ├── my-teams.md
│   │   │   ├── password-expiry-groups.md
│   │   │   ├── private-groups.md
│   │   │   ├── public-groups.md
│   │   │   ├── semi-private-groups.md
│   │   │   └── teams.md
│   │   ├── creating-groups/
│   │   │   ├── index.md
│   │   │   ├── group-type.md
│   │   │   ├── active-directory/
│   │   │   │   ├── index.md
│   │   │   │   ├── general.md
│   │   │   │   ├── group.md
│   │   │   │   ├── members.md
│   │   │   │   ├── owners.md
│   │   │   │   └── smart-group.md
│   │   │   └── azure/
│   │   │       ├── index.md
│   │   │       ├── general.md
│   │   │       └── group.md
│   │   ├── creating-dynasties/
│   │   │   ├── index.md
│   │   │   ├── dynasty-options-managerial.md
│   │   │   ├── dynasty-options-org-geo-cus.md
│   │   │   ├── active-directory/
│   │   │   │   ├── index.md
│   │   │   │   └── create-dynasty.md
│   │   │   └── azure/
│   │   │       ├── index.md
│   │   │       ├── create-dynasty.md
│   │   │       └── general.md
│   │   ├── creating-teams/
│   │   │   ├── index.md
│   │   │   └── create.md
│   │   ├── managing-groups/
│   │   │   ├── index.md
│   │   │   ├── working-with-groups.md
│   │   │   ├── general-function.md
│   │   │   ├── group-access.md
│   │   │   ├── group-deletion.md
│   │   │   ├── group-expiry.md
│   │   │   ├── group-expiry-function.md
│   │   │   ├── group-join-leave.md
│   │   │   ├── group-membership-function.md
│   │   │   ├── group-ownership-function.md
│   │   │   ├── dynasty-function.md
│   │   │   ├── schedule-update.md
│   │   │   ├── send-as-send-on-behalf.md
│   │   │   ├── attestation.md
│   │   │   └── transfer-ownership.md
│   │   ├── group-properties/
│   │   │   ├── index.md
│   │   │   ├── general.md
│   │   │   ├── advanced.md
│   │   │   ├── attributes.md
│   │   │   ├── channels.md
│   │   │   ├── delivery-restrictions.md
│   │   │   ├── dynasty-options.md
│   │   │   ├── email.md
│   │   │   ├── entitlements.md
│   │   │   ├── history.md
│   │   │   ├── import-additional-owners.md
│   │   │   ├── import-members.md
│   │   │   ├── member-of.md
│   │   │   ├── members.md
│   │   │   ├── owner.md
│   │   │   ├── similar-groups.md
│   │   │   ├── smart-group.md
│   │   │   └── tree-view.md
│   │   ├── query-designer/
│   │   │   ├── index.md
│   │   │   ├── general.md
│   │   │   ├── database.md
│   │   │   ├── filter-criteria.md
│   │   │   ├── include-exclude.md
│   │   │   ├── password-expiry-options.md
│   │   │   ├── script.md
│   │   │   └── storage.md
│   │   └── recycle-bin/
│   │       ├── index.md
│   │       └── general.md
│   ├── users/
│   │   ├── index.md
│   │   ├── creating-users/
│   │   │   ├── index.md
│   │   │   ├── active-directory/
│   │   │   │   ├── index.md
│   │   │   │   ├── account.md
│   │   │   │   ├── user.md
│   │   │   │   ├── password.md
│   │   │   │   ├── messaging.md
│   │   │   │   ├── summary.md
│   │   │   │   ├── contact/
│   │   │   │   │   ├── index.md
│   │   │   │   │   └── contact.md
│   │   │   │   └── mailbox/
│   │   │   │       ├── index.md
│   │   │   │       ├── exchange.md
│   │   │   │       └── mailbox.md
│   │   │   └── azure/
│   │   │       ├── index.md
│   │   │       ├── account.md
│   │   │       ├── user.md
│   │   │       ├── password.md
│   │   │       ├── directory-role.md
│   │   │       └── mailbox/
│   │   │           ├── index.md
│   │   │           ├── exchange.md
│   │   │           └── mailbox.md
│   │   ├── managing-users/
│   │   │   ├── index.md
│   │   │   ├── view-profile.md
│   │   │   ├── change-password.md
│   │   │   ├── password-management.md
│   │   │   ├── reset-password.md
│   │   │   ├── unlock-account.md
│   │   │   ├── validate-profile.md
│   │   │   ├── direct-report.md
│   │   │   ├── organizational-hierarchy.md
│   │   │   ├── credential-provider/
│   │   │   │   ├── index.md
│   │   │   │   ├── install-credential-provider.md
│   │   │   │   └── uninstall-credential-provider.md
│   │   │   ├── disabled-user.md
│   │   │   └── linked-accounts.md
│   │   ├── user-properties/
│   │   │   ├── index.md
│   │   │   ├── active-directory/
│   │   │   │   ├── index.md
│   │   │   │   ├── user-overview.md
│   │   │   │   ├── general.md
│   │   │   │   ├── account.md
│   │   │   │   ├── organization.md
│   │   │   │   ├── phone-note.md
│   │   │   │   ├── email.md
│   │   │   │   ├── advanced.md
│   │   │   │   ├── entitlement.md
│   │   │   │   ├── member-of.md
│   │   │   │   ├── contact/
│   │   │   │   │   ├── index.md
│   │   │   │   │   ├── advanced.md
│   │   │   │   │   └── member-of.md
│   │   │   │   └── mailbox/
│   │   │   │       ├── index.md
│   │   │   │       ├── advanced.md
│   │   │   │       ├── auto-reply.md
│   │   │   │       └── limits.md
│   │   │   └── azure/
│   │   │       ├── index.md
│   │   │       ├── identity.md
│   │   │       ├── contact-info.md
│   │   │       ├── job-info.md
│   │   │       └── directory-role.md
│   │   └── authentication/
│   │       ├── index.md
│   │       ├── authenticate-account.md
│   │       ├── enroll-account.md
│   │       ├── password-reset.md
│   │       └── second-factor-authentication.md
│   ├── entitlements/
│   │   ├── index.md
│   │   ├── file-servers.md
│   │   └── sharepoint-sites.md
│   ├── search/
│   │   ├── index.md
│   │   ├── find.md
│   │   ├── query-search.md
│   │   └── search.md
│   ├── synchronization/
│   │   ├── index.md
│   │   ├── dashboard.md
│   │   ├── provider.md
│   │   ├── creating-jobs/
│   │   │   ├── index.md
│   │   │   ├── choose-job-template.md
│   │   │   ├── source-and-destination.md
│   │   │   ├── object-fields-and-mapping.md
│   │   │   ├── mapping-field.md
│   │   │   ├── selected-field.md
│   │   │   ├── schedule-and-notification.md
│   │   │   ├── exchange.md
│   │   │   ├── google-app.md
│   │   │   ├── office-365.md
│   │   │   └── messaging-system-overview.md
│   │   ├── creating-collections/
│   │   │   ├── index.md
│   │   │   ├── choose-job-collection-template.md
│   │   │   ├── create.md
│   │   │   ├── scheduling-and-notification.md
│   │   │   └── synchronized-job-collection.md
│   │   ├── managing-sync/
│   │   │   ├── index.md
│   │   │   ├── manage-jobs.md
│   │   │   ├── manage-job-collections.md
│   │   │   ├── manage-job-collection-templates.md
│   │   │   ├── manage-job-templates.md
│   │   │   └── manage-schedules.md
│   │   ├── scripting/
│   │   │   ├── index.md
│   │   │   ├── dtm-script.md
│   │   │   ├── sample-container-script.md
│   │   │   ├── sample-transform-script.md
│   │   │   └── visual-basic-net-basic.md
│   │   └── transformation/
│   │       ├── index.md
│   │       └── auto-generate-unique-password.md
│   ├── reports/
│   │   ├── index.md
│   │   ├── dashboard.md
│   │   ├── generate-reports.md
│   │   ├── manage-reports.md
│   │   ├── computer-reports.md
│   │   ├── contact-reports.md
│   │   ├── group-reports.md
│   │   └── user-reports.md
│   ├── requests/
│   │   ├── index.md
│   │   ├── all-requests.md
│   │   ├── my-requests.md
│   │   └── pending-requests.md
│   ├── history/
│   │   ├── index.md
│   │   ├── my-history.md
│   │   ├── my-directory-group.md
│   │   └── my-direct-report.md
│   └── settings/
│       ├── index.md
│       ├── portal-settings.md
│       └── user-settings.md
├── integrations/
│   ├── index.md
│   ├── authentication-providers/
│   │   ├── index.md
│   │   ├── identity-provider/
│   │   │   ├── index.md
│   │   │   ├── metadata.md
│   │   │   ├── register.md
│   │   │   └── sign-in.md
│   │   └── service-provider/
│   │       ├── index.md
│   │       ├── adfs/
│   │       │   ├── index.md
│   │       │   ├── configure-adfs-in-directory-manager.md
│   │       │   ├── configure-relaying-party-trust.md
│   │       │   ├── generate-urls.md
│   │       │   └── sign-in.md
│   │       ├── entra-sso/
│   │       │   ├── index.md
│   │       │   ├── configure-in-entra.md
│   │       │   ├── configure-provider-in-directory-manager.md
│   │       │   ├── generate-urls.md
│   │       │   └── sign-in.md
│   │       ├── okta/
│   │       │   ├── index.md
│   │       │   ├── configure-in-okta.md
│   │       │   ├── configure-okta-in-directory-manager.md
│   │       │   ├── generate-urls.md
│   │       │   └── sign-in.md
│   │       ├── onelogin/
│   │       │   ├── index.md
│   │       │   ├── configure-in-onelogin.md
│   │       │   ├── configure-onelogin-in-directory-manager.md
│   │       │   ├── generate-urls.md
│   │       │   └── sign-in.md
│   │       └── pingone/
│   │           ├── index.md
│   │           ├── configure-in-pingone.md
│   │           ├── configure-pingone-in-directory-manager.md
│   │           ├── generate-metadata.md
│   │           └── sign-in.md
│   └── entra-id/
│       ├── index.md
│       ├── create-configuration.md
│       └── app-registration/
│           ├── index.md
│           ├── create-registration.md
│           ├── app-permissions.md
│           ├── app-register.md
│           └── modern-authentication.md
├── api-reference/
│   ├── index.md
│   ├── getting-started/
│   │   ├── index.md
│   │   ├── welcome.md
│   │   ├── get-token.md
│   │   └── common-errors.md
│   ├── users/
│   │   ├── index.md
│   │   ├── user-apis.md
│   │   ├── create-user.md
│   │   ├── get-user.md
│   │   ├── get-users.md
│   │   ├── update-user.md
│   │   ├── delete-user.md
│   │   ├── delete-users.md
│   │   ├── get-all-groups.md
│   │   ├── get-my-dynasties.md
│   │   ├── get-my-expired-groups.md
│   │   ├── get-my-expiring-groups.md
│   │   ├── get-my-expiring-groups-count.md
│   │   ├── get-my-groups.md
│   │   ├── get-my-groups-count.md
│   │   ├── get-my-memberships.md
│   │   ├── get-my-membership-count.md
│   │   └── get-my-smart-groups.md
│   ├── groups/
│   │   ├── index.md
│   │   ├── group-apis.md
│   │   ├── create-smart-group.md
│   │   ├── create-static-group.md
│   │   ├── get-group.md
│   │   ├── get-groups.md
│   │   ├── update-group.md
│   │   ├── update-groups.md
│   │   ├── update-smart-group.md
│   │   ├── update-smart-groups.md
│   │   ├── delete-group.md
│   │   ├── delete-groups.md
│   │   ├── expire-group.md
│   │   ├── expire-groups.md
│   │   ├── renew-group.md
│   │   ├── renew-groups.md
│   │   ├── join-group.md
│   │   ├── join-group-on-behalf.md
│   │   ├── leave-group.md
│   │   ├── leave-group-on-behalf.md
│   │   └── preview-membership.md
│   ├── contacts/
│   │   ├── index.md
│   │   ├── contact-apis.md
│   │   ├── create-contact.md
│   │   ├── get-contact.md
│   │   ├── get-contacts.md
│   │   ├── update-contact.md
│   │   ├── delete-contact.md
│   │   └── delete-contacts.md
│   ├── data-sources/
│   │   ├── index.md
│   │   ├── data-source-apis.md
│   │   ├── create-data-source.md
│   │   ├── get-data-source.md
│   │   ├── get-all-data-sources.md
│   │   ├── update-data-source.md
│   │   ├── delete-data-source.md
│   │   ├── data-source-types/
│   │   │   ├── index.md
│   │   │   ├── access.md
│   │   │   ├── excel.md
│   │   │   ├── odbc.md
│   │   │   ├── oracle.md
│   │   │   ├── sql-server.md
│   │   │   └── text.md
│   │   ├── advanced-operations/
│   │   │   ├── index.md
│   │   │   ├── get-filter-data-source.md
│   │   │   ├── get-data-source-parameter.md
│   │   │   ├── get-data-source-po.md
│   │   │   ├── get-all-data-source-types.md
│   │   │   ├── get-data-source-type-id.md
│   │   │   ├── get-data-source-type-name.md
│   │   │   ├── get-function-type.md
│   │   │   ├── get-metadata.md
│   │   │   ├── get-metadata-types.md
│   │   │   ├── get-expression-function-metadata-type.md
│   │   │   ├── parse-connection-string.md
│   │   │   └── validate-data-connection.md
│   ├── sync-jobs/
│   │   ├── index.md
│   │   ├── jobs-apis.md
│   │   ├── create-job.md
│   │   ├── get-jobs.md
│   │   ├── get-jobs-details.md
│   │   ├── get-jobs-name.md
│   │   ├── delete-job.md
│   │   ├── job-collections/
│   │   │   ├── index.md
│   │   │   ├── create-new-job-collection.md
│   │   │   ├── get-job-collections.md
│   │   │   ├── get-collections-details.md
│   │   │   ├── get-job-collection-details-by-id.md
│   │   │   ├── update-job-collection.md
│   │   │   └── delete-job-collections.md
│   ├── workflows/
│   │   ├── index.md
│   │   ├── workflow-apis.md
│   │   ├── all-workflow-routes.md
│   │   ├── approve-request.md
│   │   ├── deny-request.md
│   │   ├── create-route.md
│   │   ├── update-route.md
│   │   ├── delete-route.md
│   │   ├── get-workflow-route.md
│   │   ├── get-default-route.md
│   │   ├── get-approvers.md
│   │   ├── get-my-requests.md
│   │   ├── get-pending-requests.md
│   │   ├── get-workflow-request.md
│   │   ├── delete-workflow-request.md
│   │   ├── delete-request-status.md
│   │   ├── power-automate/
│   │   │   ├── index.md
│   │   │   ├── configure-power-automate.md
│   │   │   ├── get-power-automate-settings.md
│   │   │   └── update-power-automate-settings.md
│   └── logs/
│       ├── index.md
│       ├── logs-apis.md
│       ├── admin-center.md
│       ├── data-service.md
│       ├── email-service.md
│       ├── portal.md
│       ├── replication-service.md
│       ├── scheduler-service.md
│       └── security-service.md
└── management-shell/
    ├── index.md
    ├── getting-started/
    │   ├── index.md
    │   ├── commands.md
    │   └── parameters/
    │       ├── index.md
    │       ├── parameters.md
    │       └── set-the-credential.md
    ├── identity-store-connection/
    │   ├── index.md
    │   ├── connect-identity-store.md
    │   └── get-token.md
    ├── identity-stores/
    │   ├── index.md
    │   ├── new-identity-store.md
    │   ├── get-identity-store.md
    │   ├── set-identity-store.md
    │   ├── remove-identity-store.md
    │   ├── get-identity-store-roles.md
    │   ├── set-identity-store-role.md
    │   ├── get-user-role.md
    │   ├── get-role-permission-names.md
    │   ├── get-schema-attributes.md
    │   ├── get-client.md
    │   ├── get-log-settings.md
    │   ├── messaging/
    │   │   ├── index.md
    │   │   ├── get-available-messaging-servers.md
    │   │   ├── set-messaging-server.md
    │   │   ├── clear-messaging-server.md
    │   │   ├── set-notifications.md
    │   │   ├── clear-notifications.md
    │   │   ├── send-test-notification.md
    │   │   ├── set-smtp-server.md
    │   │   ├── clear-smtp-server.md
    │   │   └── get-sms-gateways.md
    ├── users/
    │   ├── index.md
    │   ├── new-user.md
    │   ├── get-user.md
    │   ├── set-user.md
    │   ├── remove-user.md
    │   ├── get-user-enrollment.md
    │   └── user-lifecycle/
    │       ├── index.md
    │       ├── extend-user.md
    │       ├── get-status.md
    │       ├── reinstate-user.md
    │       ├── terminate-direct-reports.md
    │       └── transfer-direct-reports.md
    ├── groups/
    │   ├── index.md
    │   ├── new-group.md
    │   ├── get-group.md
    │   ├── set-group.md
    │   ├── remove-group.md
    │   ├── move-group.md
    │   ├── convert-group.md
    │   ├── expire-group.md
    │   └── renew-group.md
    ├── smart-groups/
    │   ├── index.md
    │   ├── new-smart-group.md
    │   ├── get-smart-group.md
    │   ├── set-smart-group.md
    │   ├── convert-to-static-group.md
    │   ├── update-group.md
    │   └── upgrade-group.md
    ├── contacts/
    │   ├── index.md
    │   ├── new-contact.md
    │   ├── get-contact.md
    │   ├── set-contact.md
    │   └── remove-contact.md
    ├── dynasties/
    │   ├── index.md
    │   ├── new-dynasty.md
    │   └── set-dynasty.md
    ├── mailboxes/
    │   ├── index.md
    │   ├── new-mailbox.md
    │   ├── get-mailbox.md
    │   ├── set-mailbox.md
    │   └── remove-mailbox.md
    ├── mail-enabled-groups/
    │   ├── index.md
    │   ├── enable-distribution-group.md
    │   └── disable-distribution-group.md
    ├── membership/
    │   ├── index.md
    │   ├── add-group-member.md
    │   ├── get-group-member.md
    │   ├── remove-group-member.md
    │   ├── get-object.md
    │   └── set-object.md
    ├── scheduling/
    │   ├── index.md
    │   ├── new-schedule.md
    │   ├── get-schedule.md
    │   ├── set-schedule.md
    │   ├── remove-schedule.md
    │   ├── invoke-schedule.md
    │   ├── stop-schedule.md
    │   └── get-target-schedule.md
    └── general/
        ├── index.md
        ├── get-computer.md
        ├── get-connected-store-information.md
        ├── get-connected-user.md
        ├── get-directory-manager-information.md
        ├── get-imanami-command.md
        ├── get-replication-status.md
        ├── get-tombstone-object.md
        ├── invoke-replication.md
        ├── new-container.md
        ├── remove-container.md
        ├── restore-tombstone-object.md
        └── send-notification.md
```
