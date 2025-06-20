docs/endpointpolicymanager
├── index.md
├── getting-started
│ ├── index.md
│ ├── overview.md
│ ├── basic-concepts.md
│ ├── prepare-environment.md
│ ├── fastest-deployment.md
│ └── quickstart-guides
│ ├── index.md
│ ├── cloud.md
│ ├── group-policy.md
│ ├── mdm.md
│ └── download-contents.md
├── installation-and-deployment
│ ├── index.md
│ ├── installation-methods.md
│ ├── client-side-extension.md
│ ├── admin-console.md
│ ├── antivirus-compatibility.md
│ ├── services.md
│ ├── deployment-tools
│ │ ├── sccm.md
│ │ ├── powershell.md
│ │ └── pdq-deploy.md
│ ├── cloud-installation
│ │ ├── index.md
│ │ ├── active-directory.md
│ │ ├── client-installation.md
│ │ ├── domain-and-non-domain.md
│ │ ├── remote-clients.md
│ │ └── silent-installation.md
│ ├── updates-and-upgrades
│ │ ├── update-frequency.md
│ │ ├── command-line-updates.md
│ │ ├── upgrade-settings.md
│ │ └── deployment-rings.md
│ └── uninstallation.md
├── licensing
│ ├── index.md
│ ├── license-overview.md
│ ├── license-tool.md
│ ├── trial-licensing.md
│ ├── universal-licensing.md
│ ├── active-directory-licensing
│ │ ├── index.md
│ │ ├── domain-setup.md
│ │ ├── ou-management.md
│ │ └── scope-configuration.md
│ ├── cloud-licensing
│ │ ├── index.md
│ │ ├── billing.md
│ │ ├── license-status.md
│ │ └── usage-tracking.md
│ ├── mdm-licensing
│ │ ├── index.md
│ │ ├── intune-setup.md
│ │ ├── autopilot.md
│ │ └── hybrid-environments.md
│ ├── virtualization-licensing
│ │ ├── index.md
│ │ ├── virtual-desktops.md
│ │ ├── terminal-services.md
│ │ └── multisession-environments.md
│ └── unlicensing
│ ├── index.md
│ ├── component-unlicensing.md
│ └── forced-disabled.md
├── policy-management
│ ├── index.md
│ ├── administrative-templates
│ │ ├── index.md
│ │ ├── overview.md
│ │ ├── settings-management.md
│ │ ├── comments.md
│ │ ├── export-policies.md
│ │ ├── existing-gpos.md
│ │ ├── item-level-targeting.md
│ │ ├── priority-management.md
│ │ ├── versions.md
│ │ └── getting-started
│ │ ├── collection-overview.md
│ │ ├── computer-side.md
│ │ └── user-side.md
│ ├── group-policy-integration
│ │ ├── index.md
│ │ ├── insert-user-info.md
│ │ ├── item-level-targeting.md
│ │ └── cache-engine.md
│ ├── item-level-targeting
│ │ ├── index.md
│ │ ├── apply-preferences.md
│ │ ├── entra-id-groups.md
│ │ ├── security-groups.md
│ │ ├── virtual-desktops.md
│ │ ├── windows-endpoints.md
│ │ └── windows-server.md
│ └── preferences
│ ├── index.md
│ ├── getting-started.md
│ ├── component-licensing.md
│ ├── drive-mappings.md
│ ├── printer-deployment.md
│ ├── password-management.md
│ ├── settings-management.md
│ └── msi-deployment.md
├── application-management
│ ├── index.md
│ ├── application-settings
│ │ ├── index.md
│ │ ├── overview.md
│ │ ├── central-store.md
│ │ ├── dll-storage.md
│ │ ├── one-time-settings.md
│ │ ├── thinapp.md
│ │ ├── xenapp.md
│ │ ├── design-studio
│ │ │ ├── index.md
│ │ │ ├── overview.md
│ │ │ ├── advanced-features.md
│ │ │ ├── configuration-wizard.md
│ │ │ ├── user-interface-capture.md
│ │ │ ├── navigation.md
│ │ │ ├── tools.md
│ │ │ ├── quickstart.md
│ │ │ └── application-projects.md
│ │ ├── modes
│ │ │ ├── index.md
│ │ │ ├── enforcement.md
│ │ │ ├── app-lock.md
│ │ │ ├── acl-lockdown.md
│ │ │ ├── delivery-settings.md
│ │ │ └── reversion.md
│ │ ├── preconfigured-applications
│ │ │ ├── index.md
│ │ │ ├── chrome.md
│ │ │ ├── firefox.md
│ │ │ ├── internet-explorer.md
│ │ │ └── java.md
│ │ └── extras
│ │ ├── index.md
│ │ ├── managed-by.md
│ │ ├── multiple-appsets.md
│ │ └── setting-description.md
│ ├── file-associations
│ │ ├── index.md
│ │ ├── overview.md
│ │ ├── apply-mode.md
│ │ ├── default-browser.md
│ │ ├── helper-utility.md
│ │ ├── map-extensions.md
│ │ ├── oem-associations.md
│ │ ├── registered-extensions.md
│ │ ├── product-wizard.md
│ │ ├── collections.md
│ │ ├── item-level-targeting.md
│ │ └── windows-versions.md
│ ├── java-enterprise-rules
│ │ ├── index.md
│ │ ├── overview.md
│ │ ├── getting-started.md
│ │ ├── evaluate-urls.md
│ │ ├── theory.md
│ │ ├── usage.md
│ │ ├── manager-ia.md
│ │ ├── wildcards.md
│ │ ├── virtualized-browsers.md
│ │ ├── item-level-targeting.md
│ │ ├── export-collections.md
│ │ ├── process-order.md
│ │ └── prompts
│ │ ├── index.md
│ │ ├── firefox.md
│ │ └── internet-explorer.md
│ └── browser-router
│ ├── index.md
│ ├── overview.md
│ ├── navigation.md
│ ├── rules.md
│ ├── policy-management.md
│ ├── force-browser.md
│ ├── default-browser.md
│ ├── internet-explorer.md
│ ├── edge-legacy.md
│ ├── item-level-targeting.md
│ ├── shortcut-icons.md
│ └── installation.md
├── security-and-privilege-management
│ ├── index.md
│ ├── least-privilege-manager
│ │ ├── index.md
│ │ ├── overview.md
│ │ ├── getting-started.md
│ │ ├── best-practices
│ │ │ ├── index.md
│ │ │ ├── child-processes.md
│ │ │ ├── dont-elevate.md
│ │ │ ├── examples-to-avoid.md
│ │ │ └── file-info.md
│ │ ├── elevation-rules
│ │ │ ├── index.md
│ │ │ ├── executables.md
│ │ │ ├── installers.md
│ │ │ ├── scripts.md
│ │ │ ├── registry.md
│ │ │ ├── activex-items.md
│ │ │ ├── control-panel.md
│ │ │ └── java-files.md
│ │ ├── deny-rules
│ │ │ ├── index.md
│ │ │ ├── standard-users.md
│ │ │ ├── dlls.md
│ │ │ └── windows-universal.md
│ │ ├── admin-approval
│ │ │ ├── index.md
│ │ │ ├── getting-started.md
│ │ │ ├── overview.md
│ │ │ ├── secret-key.md
│ │ │ ├── avoid-popups.md
│ │ │ └── email-usage.md
│ │ ├── secure-run
│ │ │ ├── index.md
│ │ │ ├── overview.md
│ │ │ ├── setup.md
│ │ │ ├── best-practices.md
│ │ │ ├── avoid-uac.md
│ │ │ ├── inline-commands.md
│ │ │ └── powershell-enabling.md
│ │ ├── powershell-management
│ │ │ ├── blocking.md
│ │ │ └── malicious-attacks.md
│ │ ├── scope-filters
│ │ │ ├── index.md
│ │ │ ├── block-admins.md
│ │ │ ├── block-apps.md
│ │ │ ├── elevate-service-account.md
│ │ │ └── enhanced-secure-run.md
│ │ ├── events-and-auditing
│ │ │ ├── index.md
│ │ │ ├── client-events.md
│ │ │ ├── operational-events.md
│ │ │ ├── create-policy.md
│ │ │ └── auditing-settings.md
│ │ ├── tools
│ │ │ ├── helper-tools.md
│ │ │ └── rules-generator.md
│ │ ├── digital-signature.md
│ │ ├── edit-rights.md
│ │ ├── export.md
│ │ ├── license.md
│ │ ├── macro-attacks.md
│ │ ├── parent-process-filter.md
│ │ ├── reauthentication.md
│ │ ├── reduce-admin-rights.md
│ │ ├── run-as-admin.md
│ │ ├── secure-copy.md
│ │ ├── subprocesses.md
│ │ ├── wildcards.md
│ │ └── windows-event-forwarding.md
│ ├── security-settings
│ │ ├── index.md
│ │ ├── overview.md
│ │ ├── getting-started.md
│ │ ├── policy-editor.md
│ │ ├── item-level-targeting.md
│ │ ├── export-collections.md
│ │ └── process-order.md
│ └── gpo-export
│ ├── index.md
│ ├── deliver-certificates.md
│ ├── security-settings.md
│ └── user-context.md
├── device-and-desktop-management
│ ├── index.md
│ ├── device-manager
│ │ ├── index.md
│ │ ├── overview.md
│ │ ├── global-device-manager.md
│ │ ├── device-policies.md
│ │ ├── rules.md
│ │ ├── helper-tool.md
│ │ ├── troubleshooting.md
│ │ ├── registry.md
│ │ ├── serial-number.md
│ │ └── usb-drive.md
│ ├── start-screen-and-taskbar
│ │ ├── index.md
│ │ ├── overview.md
│ │ ├── getting-started.md
│ │ ├── taskbar-management.md
│ │ ├── start-screen.md
│ │ ├── collections.md
│ │ ├── item-level-targeting.md
│ │ ├── export-collections.md
│ │ └── process-order.md
│ └── remote-desktop-protocol
│ ├── index.md
│ ├── overview.md
│ ├── import-rdp-file.md
│ ├── policies-settings.md
│ └── item-level-targeting.md
├── cloud-and-remote-management
│ ├── index.md
│ ├── cloud-management
│ │ ├── index.md
│ │ ├── overview.md
│ │ ├── getting-started.md
│ │ ├── concepts.md
│ │ ├── quickstart.md
│ │ ├── interface
│ │ │ ├── index.md
│ │ │ ├── billing.md
│ │ │ ├── company-details.md
│ │ │ ├── computer-groups.md
│ │ │ ├── filebox.md
│ │ │ ├── license-status.md
│ │ │ ├── reports.md
│ │ │ ├── tools.md
│ │ │ └── xml-data-files.md
│ │ ├── user-management
│ │ │ ├── add-user.md
│ │ │ ├── add-administrator.md
│ │ │ ├── groups.md
│ │ │ └── two-factor-auth.md
│ │ ├── installation
│ │ │ ├── index.md
│ │ │ ├── mac-client.md
│ │ │ └── uninstall.md
│ │ ├── licensing
│ │ │ ├── index.md
│ │ │ ├── computer-deletion.md
│ │ │ ├── license-management.md
│ │ │ ├── reconnection-period.md
│ │ │ └── vdi.md
│ │ ├── security
│ │ │ ├── data-safety.md
│ │ │ └── public-key-policies.md
│ │ ├── configuration
│ │ │ ├── sync-frequency.md
│ │ │ ├── update-frequency.md
│ │ │ ├── targeting-editor.md
│ │ │ ├── policy-management.md
│ │ │ └── profile-update.md
│ │ ├── transition.md
│ │ ├── verify.md
│ │ ├── version.md
│ │ └── test-lab.md
│ ├── remote-work-delivery
│ │ ├── index.md
│ │ ├── overview.md
│ │ ├── getting-started.md
│ │ ├── computer-side.md
│ │ ├── collections.md
│ │ ├── cloud-mdm.md
│ │ ├── install-sequentially.md
│ │ ├── install-uwp.md
│ │ ├── printers.md
│ │ ├── variables.md
│ │ ├── item-level-targeting.md
│ │ ├── export-collections.md
│ │ ├── process-order.md
│ │ └── advanced
│ │ ├── multiple-files.md
│ │ └── recursion.md
│ └── mdm-integration
│ ├── index.md
│ ├── overview.md
│ ├── getting-started.md
│ ├── stack-msi.md
│ ├── uem-tools.md
│ ├── services
│ │ ├── index.md
│ │ ├── microsoft-intune.md
│ │ ├── mobile-iron.md
│ │ └── vmware-workspace-one.md
│ ├── tips
│ │ ├── index.md
│ │ ├── copy-paste.md
│ │ ├── enable-priority.md
│ │ ├── manual-config.md
│ │ ├── modify-settings.md
│ │ ├── process-order.md
│ │ └── recycle-settings.md
│ └── xml-data-files
│ ├── index.md
│ ├── administrative-templates.md
│ ├── application-settings.md
│ ├── browser-router.md
│ ├── feature-management.md
│ ├── file-associations.md
│ ├── java-enterprise-rules.md
│ ├── least-privilege-manager.md
│ ├── preferences.md
│ ├── scripts.md
│ ├── security-settings.md
│ ├── start-screen.md
│ └── taskbar.md
├── automation-and-scripting
│ ├── index.md
│ ├── scripts-and-triggers
│ │ ├── index.md
│ │ ├── overview.md
│ │ ├── advantages.md
│ │ ├── getting-started
│ │ │ ├── index.md
│ │ │ ├── computer-side.md
│ │ │ ├── shortcuts.md
│ │ │ └── usage.md
│ │ ├── use-cases
│ │ │ ├── bitlocker-deployment.md
│ │ │ ├── cylance.md
│ │ │ ├── edge-first-logon.md
│ │ │ ├── local-account-password.md
│ │ │ ├── local-scheduled-task.md
│ │ │ ├── mapped-drives.md
│ │ │ ├── multifactor-auth.md
│ │ │ ├── onedrive-automation.md
│ │ │ ├── powershell-scripts.md
│ │ │ ├── printer-install.md
│ │ │ ├── software-install.md
│ │ │ ├── vpn-connection.md
│ │ │ ├── wifi-setup.md
│ │ │ └── windows-update.md
│ │ ├── features
│ │ │ ├── index.md
│ │ │ ├── computer-side.md
│ │ │ ├── user-side.md
│ │ │ ├── ins-and-outs.md
│ │ │ ├── save-time.md
│ │ │ ├── update-cse.md
│ │ │ └── variables.md
│ │ ├── item-level-targeting.md
│ │ ├── export-collections.md
│ │ └── process-order.md
│ └── feature-management
│ ├── index.md
│ ├── overview.md
│ ├── getting-started.md
│ ├── windows-servers.md
│ ├── add-remove-features
│ │ ├── index.md
│ │ ├── collections.md
│ │ ├── policies.md
│ │ └── testing.md
│ ├── advanced-features
│ │ ├── index.md
│ │ ├── create-collection.md
│ │ ├── edit-collection.md
│ │ ├── edit-policy.md
│ │ ├── delete-policies.md
│ │ └── mixed-rules.md
│ └── item-level-targeting
│ ├── index.md
│ ├── export-collections.md
│ └── process-order.md
├── compliance-and-reporting
│ ├── index.md
│ ├── group-policy-compliance-reporter
│ │ ├── index.md
│ │ ├── overview.md
│ │ ├── concepts.md
│ │ ├── installation.md
│ │ ├── scenarios.md
│ │ ├── delivery-reports.md
│ │ ├── group-policy-results.md
│ │ ├── domain-multiple.md
│ │ ├── share-across-team.md
│ │ ├── tests-src-order.md
│ │ ├── licensing
│ │ │ ├── index.md
│ │ │ ├── basis.md
│ │ │ ├── compliance-reports.md
│ │ │ ├── expire.md
│ │ │ ├── minimum.md
│ │ │ ├── multiyear.md
│ │ │ ├── tool.md
│ │ │ ├── true-up.md
│ │ │ ├── types.md
│ │ │ └── user-limit.md
│ │ ├── modes
│ │ │ ├── index.md
│ │ │ ├── difference.md
│ │ │ ├── trial.md
│ │ │ ├── pull-mode
│ │ │ │ ├── index.md
│ │ │ │ ├── overview.md
│ │ │ │ ├── history.md
│ │ │ │ ├── results.md
│ │ │ │ ├── snapshots.md
│ │ │ │ └── tests.md
│ │ │ └── push-mode
│ │ │ ├── index.md
│ │ │ ├── overview.md
│ │ │ ├── clientless-auditing.md
│ │ │ ├── concepts.md
│ │ │ ├── installation.md
│ │ │ ├── results-reports.md
│ │ │ ├── setup.md
│ │ │ └── switch-mode.md
│ │ └── preparation
│ │ ├── index.md
│ │ ├── client.md
│ │ ├── configuration-wizard.md
│ │ ├── licensing.md
│ │ └── trial-mode.md
│ └── editions
│ ├── index.md
│ ├── overview.md
│ ├── paks.md
│ ├── policies.md
│ └── solutions.md
├── integrations
│ ├── index.md
│ ├── third-party-integrations
│ │ ├── app-locker.md
│ │ ├── app-v.md
│ │ ├── auditor-integration.md
│ │ ├── azure-virtual-desktop.md
│ │ ├── pdq-deploy.md
│ │ ├── service-now.md
│ │ └── vdi-solutions.md
│ ├── privilege-secure
│ │ ├── index.md
│ │ ├── overview.md
│ │ ├── mmc.md
│ │ ├── getting-started
│ │ │ ├── client.md
│ │ │ ├── gui.md
│ │ │ └── together.md
│ │ ├── credential-based
│ │ │ ├── policy-match.md
│ │ │ ├── release-results.md
│ │ │ └── setup-policy.md
│ │ └── resource-based
│ │ ├── closing-processes.md
│ │ ├── policy-match.md
│ │ └── stored-videos.md
│ └── virtualization
│ ├── citrix-app-layering.md
│ ├── xenapp.md
│ └── vmware-solutions.md
├── platform-specific
│ ├── index.md
│ ├── mac-support
│ │ ├── index.md
│ │ ├── overview.md
│ │ ├── application-launch.md
│ │ ├── install-client.md
│ │ ├── logs.md
│ │ └── scenarios
│ │ ├── index.md
│ │ ├── conditions.md
│ │ ├── launch-control.md
│ │ ├── mac-finder.md
│ │ ├── mac-priv-helper.md
│ │ ├── mount-unmount.md
│ │ ├── package-installation.md
│ │ ├── sudo.md
│ │ └── system-settings.md
│ └── windows-requirements
│ ├── index.md
│ ├── cloud-requirements.md
│ ├── windows-7.md
│ ├── windows-11.md
│ ├── operating-systems.md
│ ├── arm-support.md
│ ├── sql-server.md
│ └── support-matrix
│ ├── index.md
│ ├── application-virtualization.md
│ ├── firefox-versions.md
│ ├── java-versions.md
│ ├── vpn-solutions.md
│ └── xenapp.md
├── troubleshooting
│ ├── index.md
│ ├── overview.md
│ ├── known-issues.md
│ ├── log-analysis.md
│ ├── common-problems.md
│ ├── performance-issues.md
│ ├── network-issues.md
│ ├── deployment-issues.md
│ └── support-resources.md
├── manuals.md
└── archive
├── index.md
├── deprecated-features.md
├── legacy-versions.md
└── archived-guides
├── acrobat-x-pro.md
├── ie9-ie10.md
├── office-2013.md
├── opera-next.md
├── vmware-legacy.md
└── other-legacy.md
