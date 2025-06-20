# Directory Manager 11.1 - Proposed Structure

```
docs/directorymanager/11.1/
├── index.md
├── getting-started/
│   ├── index.md
│   ├── introduction.md
│   ├── whats-new.md
│   └── quick-start-guide.md
├── installation-and-setup/
│   ├── index.md
│   ├── requirements/
│   │   ├── index.md
│   │   ├── hardware.md
│   │   ├── database.md
│   │   ├── windows-server.md
│   │   ├── exchange-servers.md
│   │   ├── sql-certificate.md
│   │   ├── setup-authentication.md
│   │   └── permissions/
│   │       ├── index.md
│   │       ├── ad-service-account.md
│   │       └── gmsa-requirements.md
│   ├── installation/
│   │   ├── index.md
│   │   ├── about.md
│   │   ├── installer/
│   │   │   ├── index.md
│   │   │   ├── install.md
│   │   │   ├── preparation-tool.md
│   │   │   └── what-prep-install.md
│   │   ├── configuration/
│   │   │   ├── index.md
│   │   │   ├── configure.md
│   │   │   ├── database.md
│   │   │   ├── gid-server.md
│   │   │   └── signing-key-info.md
│   │   ├── security-utility.md
│   │   ├── backup-restore.md
│   │   ├── uninstall.md
│   │   └── upgrade/
│   │       ├── index.md
│   │       ├── upgrade.md
│   │       └── notes.md
│   └── entra-id-integration/
│       ├── index.md
│       ├── create.md
│       └── register/
│           ├── index.md
│           ├── app-register.md
│           ├── create.md
│           ├── app-permissions.md
│           └── mod-auth.md
├── admin-center/
│   ├── index.md
│   ├── getting-started/
│   │   ├── sign-in.md
│   │   ├── authenticate.md
│   │   ├── enroll.md
│   │   └── navigation.md
│   ├── identity-stores/
│   │   ├── index.md
│   │   ├── create.md
│   │   ├── manage.md
│   │   ├── configure.md
│   │   ├── advanced-entra-id.md
│   │   ├── replication.md
│   │   ├── history/
│   │   │   ├── index.md
│   │   │   ├── details.md
│   │   │   ├── event-logging.md
│   │   │   └── view.md
│   │   ├── link/
│   │   │   ├── index.md
│   │   │   └── manage.md
│   │   └── configuration/
│   │       ├── authentication-policies.md
│   │       ├── authentication-types.md
│   │       ├── smtp-server.md
│   │       ├── directory-service/
│   │       │   ├── circular-reference.md
│   │       │   ├── dynasty-settings.md
│   │       │   ├── group-expiry-deletion.md
│   │       │   ├── group-lifecycle.md
│   │       │   ├── history-tracking.md
│   │       │   ├── membership-lifecycle.md
│   │       │   ├── messaging-provider.md
│   │       │   ├── out-of-bounds.md
│   │       │   ├── prefixes.md
│   │       │   ├── profile-validation.md
│   │       │   └── password-policy-enforcer/
│   │       │       ├── index.md
│   │       │       ├── overview.md
│   │       │       ├── messages.md
│   │       │       ├── passphrases.md
│   │       │       ├── policy-properties.md
│   │       │       ├── users-groups.md
│   │       │       └── rules/
│   │       │           ├── index.md
│   │       │           ├── character-rules.md
│   │       │           ├── complexity-rule.md
│   │       │           ├── compromised-rule.md
│   │       │           ├── dictionary-rule.md
│   │       │           ├── history-rule.md
│   │       │           ├── length-rule.md
│   │       │           ├── maximum-age-rule.md
│   │       │           ├── minimum-age-rule.md
│   │       │           ├── patterns-rule.md
│   │       │           ├── repetition-rule.md
│   │       │           ├── similarity-rule.md
│   │       │           └── unique-characters.md
│   │       └── security/
│   │           ├── password-options.md
│   │           ├── second-way-authentication.md
│   │           ├── security-questions.md
│   │           └── sms-authentication.md
│   ├── data-sources/
│   │   ├── index.md
│   │   ├── create.md
│   │   └── manage.md
│   ├── entitlements/
│   │   ├── index.md
│   │   ├── active-directory/
│   │   │   └── manage.md
│   │   └── entra-id/
│   │       └── manage.md
│   ├── portal-management/
│   │   ├── index.md
│   │   ├── create.md
│   │   ├── delete.md
│   │   ├── applications.md
│   │   ├── docker-prerequisites.md
│   │   ├── remote-iis-prerequisites.md
│   │   ├── design/
│   │   │   ├── bad-words.md
│   │   │   ├── create-object.md
│   │   │   ├── import-export.md
│   │   │   ├── navigation-bar.md
│   │   │   ├── object-card.md
│   │   │   ├── object-list.md
│   │   │   ├── object-properties.md
│   │   │   ├── organizational-hierarchy.md
│   │   │   ├── property-validation.md
│   │   │   ├── query-attributes.md
│   │   │   ├── send-as-on-behalf.md
│   │   │   ├── toolbars.md
│   │   │   └── forms/
│   │   │       ├── quick-search.md
│   │   │       ├── search-forms.md
│   │   │       └── search-results.md
│   │   ├── display-types/
│   │   │   ├── index.md
│   │   │   ├── categories.md
│   │   │   ├── custom.md
│   │   │   ├── dropdown-list.md
│   │   │   ├── grid.md
│   │   │   ├── image.md
│   │   │   ├── linked-dropdown.md
│   │   │   ├── multiline-textbox.md
│   │   │   ├── multivalued-control.md
│   │   │   ├── radio.md
│   │   │   └── textbox.md
│   │   ├── linked-combo/
│   │   │   ├── index.md
│   │   │   ├── details.md
│   │   │   ├── file-format.md
│   │   │   └── schema.md
│   │   └── server/
│   │       ├── index.md
│   │       ├── general.md
│   │       ├── advanced.md
│   │       ├── docker.md
│   │       ├── log.md
│   │       ├── native-iis.md
│   │       ├── remote-iis.md
│   │       └── support.md
│   ├── help-desk/
│   │   ├── index.md
│   │   ├── history.md
│   │   └── operations/
│   │       ├── index.md
│   │       ├── ask-to-enroll.md
│   │       ├── export.md
│   │       ├── reset-password.md
│   │       ├── search.md
│   │       ├── unenroll.md
│   │       └── unlock-account.md
│   ├── security-roles/
│   │   ├── index.md
│   │   ├── create.md
│   │   ├── manage.md
│   │   ├── check-role.md
│   │   ├── criteria.md
│   │   ├── permissions.md
│   │   └── policies/
│   │       ├── index.md
│   │       ├── authentication.md
│   │       ├── group-owners.md
│   │       ├── help-desk.md
│   │       ├── membership-object-type-enforcement.md
│   │       ├── new-object.md
│   │       ├── password.md
│   │       ├── query-designer.md
│   │       ├── search.md
│   │       └── synchronize.md
│   ├── services/
│   │   ├── index.md
│   │   ├── admin-center.md
│   │   ├── email-service.md
│   │   ├── replication-service.md
│   │   ├── scheduler-service.md
│   │   ├── data-service/
│   │   │   ├── index.md
│   │   │   ├── create.md
│   │   │   └── manage.md
│   │   └── security-service/
│   │       ├── index.md
│   │       ├── create.md
│   │       ├── manage.md
│   │       └── sign-key-utility.md
│   ├── scheduling/
│   │   ├── index.md
│   │   ├── manage.md
│   │   ├── entitlement.md
│   │   ├── entitlement-scope.md
│   │   ├── entitlement-temporary-permissions.md
│   │   ├── group-lifecycle.md
│   │   ├── group-usage-service.md
│   │   ├── history-retention.md
│   │   ├── managed-by-lifecycle.md
│   │   ├── membership-lifecycle.md
│   │   ├── orphan-group-update.md
│   │   ├── reports.md
│   │   ├── schema-replication.md
│   │   ├── smart-group-update.md
│   │   ├── synchronize.md
│   │   ├── triggers.md
│   │   ├── user-lifecycle.md
│   │   └── workflow-acceleration.md
│   ├── replication/
│   │   ├── index.md
│   │   └── settings.md
│   ├── notifications/
│   │   ├── index.md
│   │   ├── customize.md
│   │   └── queue.md
│   ├── sms-gateway/
│   │   ├── index.md
│   │   ├── manage.md
│   │   ├── implement-custom.md
│   │   └── custom/
│   │       ├── index.md
│   │       ├── account-id.md
│   │       ├── clone.md
│   │       ├── password.md
│   │       ├── proxy-domain.md
│   │       ├── proxy-hostname.md
│   │       ├── proxy-password.md
│   │       ├── proxy-port.md
│   │       ├── proxy-username.md
│   │       ├── send-short-message.md
│   │       ├── test-connection.md
│   │       ├── test-credentials.md
│   │       ├── test-proxy.md
│   │       ├── url.md
│   │       ├── user-id.md
│   │       ├── send-sms-message-result/
│   │       │   ├── class.md
│   │       │   ├── exception-message.md
│   │       │   ├── message.md
│   │       │   └── success.md
│   │       └── short-message/
│   │           ├── class.md
│   │           ├── access-code.md
│   │           ├── max-length.md
│   │           ├── message.md
│   │           ├── phone-numbers.md
│   │           ├── reference-id.md
│   │           └── validate.md
│   ├── workflow/
│   │   ├── index.md
│   │   ├── implement.md
│   │   ├── integrate.md
│   │   ├── advanced-settings.md
│   │   └── approver-acceleration.md
│   ├── setup-authentication/
│   │   ├── index.md
│   │   ├── authenticator.md
│   │   ├── email.md
│   │   ├── linked-account.md
│   │   ├── mfa.md
│   │   ├── security-questions.md
│   │   ├── sfa.md
│   │   ├── windows-hello.md
│   │   └── yubikey.md
│   ├── general/
│   │   ├── index.md
│   │   ├── concepts.md
│   │   ├── dashboard.md
│   │   ├── access-applications.md
│   │   ├── change-password.md
│   │   ├── global-pool.md
│   │   ├── history.md
│   │   ├── licensing.md
│   │   ├── logs.md
│   │   └── switch-account.md
│   └── history.md
├── portal/
│   ├── index.md
│   ├── welcome.md
│   ├── login.md
│   ├── dashboard.md
│   ├── general-features.md
│   ├── toolbar.md
│   ├── users/
│   │   ├── index.md
│   │   ├── disabled-user.md
│   │   ├── linked-accounts.md
│   │   ├── create/
│   │   │   ├── index.md
│   │   │   ├── active-directory/
│   │   │   │   ├── index.md
│   │   │   │   ├── account.md
│   │   │   │   ├── user.md
│   │   │   │   ├── password.md
│   │   │   │   ├── messaging.md
│   │   │   │   ├── summary.md
│   │   │   │   ├── contact/
│   │   │   │   │   └── contact.md
│   │   │   │   └── mailbox/
│   │   │   │       ├── mailbox.md
│   │   │   │       └── exchange.md
│   │   │   └── azure/
│   │   │       ├── index.md
│   │   │       ├── account.md
│   │   │       ├── user.md
│   │   │       ├── password.md
│   │   │       ├── directory-role.md
│   │   │       └── mailbox/
│   │   │           ├── mailbox.md
│   │   │           └── exchange.md
│   │   ├── properties/
│   │   │   ├── index.md
│   │   │   ├── active-directory/
│   │   │   │   ├── index.md
│   │   │   │   ├── user-overview.md
│   │   │   │   ├── general.md
│   │   │   │   ├── account.md
│   │   │   │   ├── organization.md
│   │   │   │   ├── phone-note.md
│   │   │   │   ├── email.md
│   │   │   │   ├── entitlement.md
│   │   │   │   ├── advanced.md
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
│   │   ├── management/
│   │   │   ├── index.md
│   │   │   ├── view-profile.md
│   │   │   ├── validate-profile.md
│   │   │   ├── change-password.md
│   │   │   ├── reset-password.md
│   │   │   ├── unlock-account.md
│   │   │   ├── organizational-hierarchy.md
│   │   │   ├── direct-report.md
│   │   │   ├── password-management.md
│   │   │   ├── credential-provider.md
│   │   │   ├── install-cp.md
│   │   │   └── uninstall-cp.md
│   │   └── authentication/
│   │       ├── password-reset.md
│   │       └── second-factor-authentication.md
│   ├── groups/
│   │   ├── index.md
│   │   ├── my-groups.md
│   │   ├── my-dynasties.md
│   │   ├── my-memberships.md
│   │   ├── my-smart-groups.md
│   │   ├── my-teams.md
│   │   ├── my-expired-groups.md
│   │   ├── my-expiring-groups.md
│   │   ├── my-deleted-groups.md
│   │   ├── all-groups.md
│   │   ├── all-dynasties.md
│   │   ├── all-expired-groups.md
│   │   ├── all-expiring-groups.md
│   │   ├── all-smart-groups.md
│   │   ├── public-groups.md
│   │   ├── semi-private-groups.md
│   │   ├── private-groups.md
│   │   ├── password-expiry-groups.md
│   │   ├── teams.md
│   │   ├── transfer-ownership.md
│   │   ├── create/
│   │   │   ├── index.md
│   │   │   ├── group-type.md
│   │   │   ├── active-directory/
│   │   │   │   ├── general.md
│   │   │   │   ├── group.md
│   │   │   │   ├── smart-group.md
│   │   │   │   ├── members.md
│   │   │   │   └── owners.md
│   │   │   ├── azure/
│   │   │   │   ├── general.md
│   │   │   │   └── group.md
│   │   │   └── teams/
│   │   │       └── create.md
│   │   ├── dynasty/
│   │   │   ├── index.md
│   │   │   ├── dynasty-options-managerial.md
│   │   │   ├── dynasty-options-org-geo-cus.md
│   │   │   ├── active-directory/
│   │   │   │   └── create-dynasty.md
│   │   │   └── azure/
│   │   │       ├── general.md
│   │   │       └── create-dynasty.md
│   │   ├── management/
│   │   │   ├── working-with-groups.md
│   │   │   ├── general-function.md
│   │   │   ├── group-access.md
│   │   │   ├── group-join-leave.md
│   │   │   ├── group-deletion.md
│   │   │   ├── group-expiry.md
│   │   │   ├── group-expiry-function.md
│   │   │   ├── group-membership-function.md
│   │   │   ├── group-ownership-function.md
│   │   │   ├── dynasty-function.md
│   │   │   ├── schedule-update.md
│   │   │   ├── send-as-send-on-behalf.md
│   │   │   └── attestation.md
│   │   ├── properties/
│   │   │   ├── index.md
│   │   │   ├── general.md
│   │   │   ├── attributes.md
│   │   │   ├── email.md
│   │   │   ├── delivery-restrictions.md
│   │   │   ├── channels.md
│   │   │   ├── members.md
│   │   │   ├── owner.md
│   │   │   ├── member-of.md
│   │   │   ├── smart-group.md
│   │   │   ├── dynasty-options.md
│   │   │   ├── entitlements.md
│   │   │   ├── advanced.md
│   │   │   ├── history.md
│   │   │   ├── tree-view.md
│   │   │   ├── similar-groups.md
│   │   │   ├── import-members.md
│   │   │   └── import-additional-owners.md
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
│   ├── reports/
│   │   ├── index.md
│   │   ├── generate.md
│   │   ├── manage.md
│   │   ├── dashboard.md
│   │   ├── user.md
│   │   ├── group.md
│   │   ├── contact.md
│   │   └── computer.md
│   ├── synchronization/
│   │   ├── index.md
│   │   ├── dashboard.md
│   │   ├── provider.md
│   │   ├── collections/
│   │   │   ├── create.md
│   │   │   ├── choose-your-job-collection-template.md
│   │   │   ├── scheduling-and-notification.md
│   │   │   └── synchronized-job-collection.md
│   │   ├── jobs/
│   │   │   ├── create.md
│   │   │   ├── choose-your-job-template.md
│   │   │   ├── source-and-destination.md
│   │   │   ├── object-fields-and-mapping.md
│   │   │   ├── mapping-field.md
│   │   │   ├── selected-field.md
│   │   │   ├── schedule-and-notification.md
│   │   │   ├── exchange.md
│   │   │   ├── google-app.md
│   │   │   ├── office-365.md
│   │   │   └── messaging-system-overview.md
│   │   ├── management/
│   │   │   ├── index.md
│   │   │   ├── job.md
│   │   │   ├── job-collection.md
│   │   │   ├── job-template.md
│   │   │   ├── job-collection-template.md
│   │   │   └── schedule.md
│   │   ├── scripts/
│   │   │   ├── dtm-script.md
│   │   │   ├── sample-container-script.md
│   │   │   ├── sample-transform-script.md
│   │   │   └── visual-basic-net-basic.md
│   │   └── transformations/
│   │       ├── index.md
│   │       └── auto-generate-unique-password.md
│   ├── requests/
│   │   ├── index.md
│   │   ├── my-request.md
│   │   ├── all-request.md
│   │   └── pending.md
│   ├── history/
│   │   ├── index.md
│   │   ├── my-history.md
│   │   ├── my-directory-group.md
│   │   └── my-direct-report.md
│   ├── search/
│   │   ├── index.md
│   │   ├── find.md
│   │   ├── search.md
│   │   └── query-search.md
│   ├── settings/
│   │   ├── portal.md
│   │   └── user.md
│   └── entitlements/
│       ├── index.md
│       ├── file-servers.md
│       └── sharepoint-sites.md
├── authentication-and-sso/
│   ├── index.md
│   ├── overview.md
│   ├── as-identity-provider/
│   │   ├── index.md
│   │   ├── overview.md
│   │   ├── metadata.md
│   │   ├── register.md
│   │   └── sign-in.md
│   └── as-service-provider/
│       ├── index.md
│       ├── overview.md
│       ├── adfs/
│       │   ├── index.md
│       │   ├── overview.md
│       │   ├── generate-urls.md
│       │   ├── configure-adfs-in-directory-manager.md
│       │   ├── configure-relaying-party-trust.md
│       │   └── sign-in.md
│       ├── entra-sso/
│       │   ├── index.md
│       │   ├── overview.md
│       │   ├── generate-urls.md
│       │   ├── configure-in-entra.md
│       │   ├── configure-provider-in-directory-manager.md
│       │   └── sign-in.md
│       ├── okta/
│       │   ├── index.md
│       │   ├── overview.md
│       │   ├── generate-urls.md
│       │   ├── configure-in-okta.md
│       │   ├── configure-okta-in-directory-manager.md
│       │   └── sign-in.md
│       ├── onelogin/
│       │   ├── index.md
│       │   ├── overview.md
│       │   ├── generate-urls.md
│       │   ├── configure-in-onelogin.md
│       │   ├── configure-onelogin-in-directory-manager.md
│       │   └── sign-in.md
│       └── ping-one/
│           ├── index.md
│           ├── overview.md
│           ├── generate-metadata.md
│           ├── configure-in-ping-one.md
│           ├── configure-ping-one-in-directory-manager.md
│           └── sign-in.md
├── api-reference/
│   ├── index.md
│   ├── welcome.md
│   ├── get-token.md
│   ├── common-errors.md
│   ├── users/
│   │   ├── index.md
│   │   ├── create-user.md
│   │   ├── create-user-entra-id.md
│   │   ├── update-user.md
│   │   ├── delete-user.md
│   │   ├── delete-users.md
│   │   ├── get-user.md
│   │   ├── get-users.md
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
│   │   ├── create-smart-group.md
│   │   ├── create-smart-group-entra-id.md
│   │   ├── create-static-group.md
│   │   ├── create-static-group-entra-id.md
│   │   ├── update-group.md
│   │   ├── update-groups.md
│   │   ├── update-smart-group.md
│   │   ├── update-smart-groups.md
│   │   ├── delete-group.md
│   │   ├── delete-groups.md
│   │   ├── get-group.md
│   │   ├── get-groups.md
│   │   ├── join-group.md
│   │   ├── join-group-on-behalf.md
│   │   ├── leave-group.md
│   │   ├── leave-group-on-behalf.md
│   │   ├── expire-group.md
│   │   ├── expire-groups.md
│   │   ├── renew-group.md
│   │   ├── renew-groups.md
│   │   └── preview-membership.md
│   ├── contacts/
│   │   ├── index.md
│   │   ├── create-contact.md
│   │   ├── update-contact.md
│   │   ├── delete-contact.md
│   │   ├── delete-contacts.md
│   │   ├── get-contact.md
│   │   └── get-contacts.md
│   ├── data-sources/
│   │   ├── index.md
│   │   ├── create-ds.md
│   │   ├── update-ds.md
│   │   ├── delete-ds.md
│   │   ├── get-ds.md
│   │   ├── get-all-ds.md
│   │   ├── get-filter-ds.md
│   │   ├── validate-dc.md
│   │   ├── parse-cs.md
│   │   ├── get-all-ds-type.md
│   │   ├── get-ds-type-id.md
│   │   ├── get-ds-type-name.md
│   │   ├── get-fn-type.md
│   │   ├── get-md.md
│   │   ├── get-md-type-st.md
│   │   ├── get-ds-parameter.md
│   │   ├── get-ds-po.md
│   │   ├── get-fsmd-type.md
│   │   ├── ds-access.md
│   │   ├── ds-excel.md
│   │   ├── ds-odbc.md
│   │   ├── ds-oracle.md
│   │   ├── ds-sql.md
│   │   └── ds-text.md
│   ├── sync-jobs/
│   │   ├── index.md
│   │   ├── create-job.md
│   │   ├── delete-job.md
│   │   ├── get-jobs.md
│   │   ├── get-jobs-details.md
│   │   ├── get-jobs-name.md
│   │   ├── create-new-job-collection.md
│   │   ├── delete-job-collections.md
│   │   ├── update-job-collection.md
│   │   ├── get-job-collections.md
│   │   ├── get-collections-details.md
│   │   └── get-jc-details-by-jc-id.md
│   ├── search/
│   │   ├── index.md
│   │   ├── by-attribute.md
│   │   └── group-members.md
│   ├── logs/
│   │   ├── index.md
│   │   ├── admin-center.md
│   │   ├── data-service.md
│   │   ├── email-service.md
│   │   ├── portal.md
│   │   ├── replication-service.md
│   │   ├── scheduler-service.md
│   │   └── security-service.md
│   └── workflow/
│       ├── index.md
│       ├── all-wf-routes.md
│       ├── approve-req.md
│       ├── deny-req.md
│       ├── create-route.md
│       ├── update-route.md
│       ├── delete-route.md
│       ├── get-wf-route.md
│       ├── get-def-route.md
│       ├── get-wf-req.md
│       ├── delete-wf-req.md
│       ├── get-my-req.md
│       ├── get-pending-req.md
│       ├── delete-req-status.md
│       ├── get-approvers.md
│       ├── configure-power-automate.md
│       ├── update-power-automate-settings.md
│       └── get-power-automate-settings.md
├── management-shell/
│   ├── index.md
│   ├── overview.md
│   ├── commands.md
│   ├── parameters/
│   │   ├── parameters.md
│   │   └── set-the-credential.md
│   ├── identity-store-connection/
│   │   ├── index.md
│   │   ├── connect-identity-store.md
│   │   └── get-token.md
│   ├── general/
│   │   ├── index.md
│   │   ├── get-computer.md
│   │   ├── get-connected-store-information.md
│   │   ├── get-connected-user.md
│   │   ├── get-directory-manager-information.md
│   │   ├── get-imanami-command.md
│   │   ├── get-replication-status.md
│   │   ├── get-tombstone-object.md
│   │   ├── invoke-replication.md
│   │   ├── new-container.md
│   │   ├── remove-container.md
│   │   ├── restore-tombstone-object.md
│   │   └── send-notification.md
│   ├── identity-stores/
│   │   ├── index.md
│   │   ├── new-identity-store.md
│   │   ├── get-identity-store.md
│   │   ├── set-identity-store.md
│   │   ├── remove-identity-store.md
│   │   ├── get-client.md
│   │   ├── get-identity-store-roles.md
│   │   ├── set-identity-store-role.md
│   │   ├── get-role-permission-names.md
│   │   ├── get-user-role.md
│   │   ├── get-schema-attributes.md
│   │   ├── get-log-settings.md
│   │   ├── get-available-messaging-servers.md
│   │   ├── set-messaging-server.md
│   │   ├── clear-messaging-server.md
│   │   ├── get-sms-gateways.md
│   │   ├── set-notifications.md
│   │   ├── clear-notifications.md
│   │   ├── send-test-notification.md
│   │   ├── set-smtp-server.md
│   │   └── clear-smtp-server.md
│   ├── users/
│   │   ├── index.md
│   │   ├── new-user.md
│   │   ├── get-user.md
│   │   ├── set-user.md
│   │   ├── remove-user.md
│   │   └── get-user-enrollment.md
│   ├── groups/
│   │   ├── index.md
│   │   ├── new-group.md
│   │   ├── get-group.md
│   │   ├── set-group.md
│   │   ├── remove-group.md
│   │   ├── move-group.md
│   │   ├── convert-group.md
│   │   ├── expire-group.md
│   │   └── renew-group.md
│   ├── smart-groups/
│   │   ├── index.md
│   │   ├── new-smart-group.md
│   │   ├── get-smart-group.md
│   │   ├── set-smart-group.md
│   │   ├── convert-to-static-group.md
│   │   ├── update-group.md
│   │   └── upgrade-group.md
│   ├── contacts/
│   │   ├── index.md
│   │   ├── new-contact.md
│   │   ├── get-contact.md
│   │   ├── set-contact.md
│   │   └── remove-contact.md
│   ├── mailboxes/
│   │   ├── index.md
│   │   ├── new-mailbox.md
│   │   ├── get-mailbox.md
│   │   ├── set-mailbox.md
│   │   └── remove-mailbox.md
│   ├── mail-enabled-disabled-groups/
│   │   ├── index.md
│   │   ├── enable-distribution-group.md
│   │   └── disable-distribution-group.md
│   ├── membership/
│   │   ├── index.md
│   │   ├── add-group-member.md
│   │   ├── remove-group-member.md
│   │   ├── get-group-member.md
│   │   ├── get-object.md
│   │   └── set-object.md
│   ├── dynasty/
│   │   ├── index.md
│   │   ├── new-dynasty.md
│   │   └── set-dynasty.md
│   ├── scheduling/
│   │   ├── index.md
│   │   ├── new-schedule.md
│   │   ├── get-schedule.md
│   │   ├── set-schedule.md
│   │   ├── remove-schedule.md
│   │   ├── invoke-schedule.md
│   │   ├── stop-schedule.md
│   │   └── get-target-schedule.md
│   └── user-lifecycle/
│       ├── index.md
│       ├── extend-user.md
│       ├── get-status.md
│       ├── reinstate-user.md
│       ├── terminate-direct-reports.md
│       └── transfer-direct-reports.md
├── sspr-portal/
│   ├── index.md
│   ├── overview.md
│   ├── navigation.md
│   └── functions.md
└── reference/
    ├── whats-new.md
    └── getting-started.md
```
