#!/usr/bin/env python3
"""Generate file mappings for identitymanager 6.2 documentation restructure."""

import os

# Read all files
with open('/tmp/all-files.txt', 'r') as f:
    files = [line.strip() for line in f]

# Define mapping rules
mappings = []

for file in files:
    # Remove the base path
    relative = file.replace('docs/identitymanager/6.2/', '')
    
    # Default mapping (will be overridden by specific rules)
    new_path = None
    
    # Main index
    if relative == 'identitymanager/index.md':
        new_path = 'docs/identitymanager/6.2/index.md'
    
    # Installation Guide mappings
    elif 'installation-guide/quick-start' in relative:
        new_path = 'docs/identitymanager/6.2/getting-started/quick-start.md'
    elif 'installation-guide/overview' in relative:
        new_path = 'docs/identitymanager/6.2/getting-started/architecture-overview.md'
    elif 'installation-guide/requirements' in relative:
        if relative.endswith('requirements/index.md'):
            new_path = 'docs/identitymanager/6.2/getting-started/system-requirements.md'
        else:
            new_path = 'docs/identitymanager/6.2/getting-started/system-requirements.md'
    elif 'installation-guide/production-ready/database' in relative:
        new_path = 'docs/identitymanager/6.2/installation/pre-installation/database-setup.md'
    elif 'installation-guide/production-ready/email-server' in relative:
        new_path = 'docs/identitymanager/6.2/installation/pre-installation/email-server-setup.md'
    elif 'installation-guide/production-ready/working-directory' in relative:
        new_path = 'docs/identitymanager/6.2/installation/pre-installation/working-directory-setup.md'
    elif 'installation-guide/production-ready/server' in relative:
        new_path = 'docs/identitymanager/6.2/installation/server-installation.md'
    elif 'installation-guide/production-ready/agent' in relative:
        new_path = 'docs/identitymanager/6.2/installation/agent-installation.md'
    elif 'installation-guide/reverse-proxy' in relative:
        new_path = 'docs/identitymanager/6.2/installation/reverse-proxy-configuration.md'
    elif 'installation-guide/production-ready/index.md' in relative:
        new_path = 'docs/identitymanager/6.2/installation/pre-installation/index.md'
    elif 'installation-guide/index.md' in relative:
        new_path = 'docs/identitymanager/6.2/installation/index.md'
    
    # Identity Management mappings
    elif 'identity-management/identity-repository' in relative:
        new_path = 'docs/identitymanager/6.2/identity-management/identity-repository.md'
    elif 'identity-management/joiners-movers-leavers/on-offboarding' in relative:
        new_path = 'docs/identitymanager/6.2/identity-management/user-lifecycle/onboarding-offboarding.md'
    elif 'identity-management/joiners-movers-leavers/position-change' in relative:
        new_path = 'docs/identitymanager/6.2/identity-management/user-lifecycle/position-changes.md'
    elif 'identity-management/joiners-movers-leavers/index.md' in relative:
        new_path = 'docs/identitymanager/6.2/identity-management/user-lifecycle/index.md'
    elif 'identity-management/index.md' in relative:
        new_path = 'docs/identitymanager/6.2/identity-management/index.md'
    
    # Synchronization mappings
    elif 'synchronization/synchro-thresholds' in relative:
        new_path = 'docs/identitymanager/6.2/identity-management/synchronization/sync-thresholds.md'
    elif 'synchronization/upward-data-sync' in relative:
        new_path = 'docs/identitymanager/6.2/identity-management/synchronization/sync-configuration.md'
    elif 'synchronization/index.md' in relative:
        new_path = 'docs/identitymanager/6.2/identity-management/synchronization/index.md'
    
    # Provisioning mappings
    elif 'provisioning/prov-thresholds' in relative:
        new_path = 'docs/identitymanager/6.2/identity-management/provisioning/provisioning-thresholds.md'
    elif 'provisioning/how-tos/argumentsexpression' in relative:
        new_path = 'docs/identitymanager/6.2/identity-management/provisioning/provisioning-configuration.md'
    elif 'provisioning/index.md' in relative:
        new_path = 'docs/identitymanager/6.2/identity-management/provisioning/index.md'
    
    # Governance mappings
    elif 'governance/accesscertification' in relative:
        new_path = 'docs/identitymanager/6.2/access-governance/access-certification/index.md'
    elif 'governance/how-tos/review-prolonged-entitlements' in relative:
        new_path = 'docs/identitymanager/6.2/access-governance/access-certification/review-process.md'
    elif 'governance/risks' in relative:
        new_path = 'docs/identitymanager/6.2/access-governance/risk-management.md'
    elif 'governance/reporting/how-tos/analyze-powerbi' in relative or 'governance/reporting/how-tos/connect-powerbi' in relative:
        new_path = 'docs/identitymanager/6.2/access-governance/reporting/power-bi-integration.md'
    elif 'governance/reporting/index.md' in relative:
        new_path = 'docs/identitymanager/6.2/access-governance/reporting/index.md'
    elif 'governance/index.md' in relative:
        new_path = 'docs/identitymanager/6.2/access-governance/index.md'
    
    # Role Management mappings
    elif 'role-model/role-model-rules' in relative:
        new_path = 'docs/identitymanager/6.2/access-governance/role-management/role-rules.md'
    elif 'role-model/index.md' in relative:
        new_path = 'docs/identitymanager/6.2/access-governance/role-management/role-model.md'
    elif 'role-assignment' in relative:
        if relative.endswith('role-assignment/index.md'):
            new_path = 'docs/identitymanager/6.2/access-governance/role-management/role-assignment.md'
        else:
            new_path = 'docs/identitymanager/6.2/access-governance/role-management/role-assignment.md'
    elif 'role-mining' in relative:
        new_path = 'docs/identitymanager/6.2/access-governance/role-management/role-mining.md'
    
    # API mappings
    elif 'api/authentication' in relative:
        new_path = 'docs/identitymanager/6.2/integration/api/authentication.md'
    elif 'api/pagination' in relative:
        new_path = 'docs/identitymanager/6.2/integration/api/pagination.md'
    elif 'api/squery' in relative:
        new_path = 'docs/identitymanager/6.2/integration/api/query-language.md'
    elif 'api/how-tos/request-postman' in relative:
        new_path = 'docs/identitymanager/6.2/integration/api/api-reference.md'
    elif relative == 'identitymanager/integration-guide/api/index.md':
        new_path = 'docs/identitymanager/6.2/integration/api/index.md'
    
    # Connector mappings
    elif 'connectors/configuration-details/connections' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-basics/connections.md'
    elif 'connectors/configuration-details/credential-protection' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-basics/credential-protection.md'
    elif 'connectors/configuration-details/index.md' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md'
    elif 'connectors/entitypropertymapping-format' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-basics/entity-property-mapping.md'
    elif 'connectors/references-connectors/activedirectory' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-catalog/active-directory.md'
    elif 'connectors/references-connectors/azure' in relative or 'connectors/references-connectors/microsoftentraid' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-catalog/azure-ad.md'
    elif 'connectors/references-connectors/ldap' in relative or 'connectors/references-connectors/openldap' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-catalog/ldap.md'
    elif 'connectors/references-connectors/scim' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-catalog/scim.md'
    elif 'connectors/references-connectors/sql' in relative or 'connectors/references-connectors/csv' in relative or 'connectors/references-connectors/excel' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-catalog/database-connectors.md'
    elif 'connectors/references-connectors/googleworkspace' in relative or 'connectors/references-connectors/okta' in relative or 'connectors/references-connectors/workday' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-catalog/cloud-applications.md'
    elif 'connectors/references-connectors/powershell' in relative or 'connectors/references-connectors/robotframework' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-catalog/custom-connectors.md'
    elif 'connectors/references-packages' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-packages.md'
    elif 'connectors/how-tos' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md'
    elif relative == 'identitymanager/integration-guide/connectors/index.md':
        new_path = 'docs/identitymanager/6.2/integration/connectors/index.md'
    elif 'connectors/references-connectors/index.md' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-catalog/index.md'
    
    # Workflow mappings
    elif 'internalworkflow' in relative or 'workflow' in relative:
        if 'xml-configuration/workflows' in relative:
            new_path = 'docs/identitymanager/6.2/integration/workflows/workflow-configuration.md'
        else:
            new_path = 'docs/identitymanager/6.2/integration/workflows/index.md'
    
    # Server Configuration mappings
    elif 'network-configuration/server-configuration/database-connection' in relative:
        new_path = 'docs/identitymanager/6.2/administration/server-configuration/database-connection.md'
    elif 'network-configuration/server-configuration/end-users-authentication' in relative:
        new_path = 'docs/identitymanager/6.2/administration/server-configuration/authentication.md'
    elif 'network-configuration/server-configuration/general-purpose' in relative:
        new_path = 'docs/identitymanager/6.2/administration/server-configuration/general-settings.md'
    elif 'network-configuration/server-configuration/rsa-encryption' in relative:
        new_path = 'docs/identitymanager/6.2/administration/server-configuration/encryption-settings.md'
    elif relative == 'identitymanager/integration-guide/network-configuration/server-configuration/index.md':
        new_path = 'docs/identitymanager/6.2/administration/server-configuration/index.md'
    
    # Agent Configuration mappings
    elif 'network-configuration/agent-configuration/appsettings' in relative:
        new_path = 'docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md'
    elif 'network-configuration/agent-configuration/azure-key-vault' in relative or 'network-configuration/agent-configuration/cyberark' in relative:
        new_path = 'docs/identitymanager/6.2/administration/agent-configuration/credential-providers.md'
    elif relative == 'identitymanager/integration-guide/network-configuration/agent-configuration/index.md':
        new_path = 'docs/identitymanager/6.2/administration/agent-configuration/index.md'
    
    # Security mappings
    elif 'profiles-permissions' in relative:
        if relative.endswith('profiles-permissions/index.md'):
            new_path = 'docs/identitymanager/6.2/administration/security/profiles-permissions.md'
        elif 'permissions/index.md' in relative:
            new_path = 'docs/identitymanager/6.2/administration/security/access-control-rules.md'
        else:
            new_path = 'docs/identitymanager/6.2/administration/security/profiles-permissions.md'
    elif 'password-management' in relative:
        new_path = 'docs/identitymanager/6.2/administration/security/password-management.md'
    elif 'network-configuration/proxy' in relative:
        new_path = 'docs/identitymanager/6.2/administration/server-configuration/general-settings.md'
    
    # Jobs and Tasks mappings
    elif 'tasks-jobs/jobs' in relative:
        new_path = 'docs/identitymanager/6.2/administration/jobs-tasks/job-configuration.md'
    elif 'tasks-jobs/tasks' in relative:
        new_path = 'docs/identitymanager/6.2/administration/jobs-tasks/task-management.md'
    elif 'tasks-jobs/how-tos' in relative:
        if 'incremental' in relative:
            new_path = 'docs/identitymanager/6.2/identity-management/synchronization/incremental-sync.md'
        else:
            new_path = 'docs/identitymanager/6.2/administration/jobs-tasks/job-configuration.md'
    elif relative == 'identitymanager/integration-guide/tasks-jobs/index.md':
        new_path = 'docs/identitymanager/6.2/administration/jobs-tasks/index.md'
    
    # Notifications mappings
    elif 'notifications/native' in relative:
        new_path = 'docs/identitymanager/6.2/administration/notifications/native-notifications.md'
    elif 'notifications/custom' in relative:
        new_path = 'docs/identitymanager/6.2/administration/notifications/custom-notifications.md'
    elif 'notifications/how-tos' in relative:
        new_path = 'docs/identitymanager/6.2/administration/notifications/custom-notifications.md'
    elif relative == 'identitymanager/integration-guide/notifications/index.md':
        new_path = 'docs/identitymanager/6.2/administration/notifications/index.md'
    
    # Monitoring mappings
    elif 'monitoring/how-tos/qradar' in relative:
        new_path = 'docs/identitymanager/6.2/administration/monitoring/integration-qradar.md'
    elif 'monitoring/references' in relative:
        new_path = 'docs/identitymanager/6.2/administration/monitoring/system-monitoring.md'
    elif relative == 'identitymanager/integration-guide/monitoring/index.md':
        new_path = 'docs/identitymanager/6.2/administration/monitoring/index.md'
    
    # Toolkit mappings
    elif 'toolkit/xml-configuration' in relative:
        if 'scaffoldings' in relative:
            new_path = 'docs/identitymanager/6.2/reference/configuration-reference/scaffoldings.md'
        else:
            new_path = 'docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md'
    elif 'toolkit/expressions' in relative:
        new_path = 'docs/identitymanager/6.2/development/configuration-toolkit/expressions.md'
    elif 'toolkit/bindings' in relative:
        new_path = 'docs/identitymanager/6.2/development/configuration-toolkit/bindings.md'
    elif 'toolkit/how-tos/deploy-configuration' in relative or 'toolkit/how-tos/export-configuration' in relative:
        new_path = 'docs/identitymanager/6.2/development/configuration-toolkit/deployment.md'
    elif relative == 'identitymanager/integration-guide/toolkit/index.md':
        new_path = 'docs/identitymanager/6.2/development/configuration-toolkit/index.md'
    elif 'toolkit' in relative:
        new_path = 'docs/identitymanager/6.2/development/configuration-toolkit/index.md'
    
    # Scripting mappings
    elif 'powershell' in relative and ('how-tos' in relative or 'script' in relative):
        new_path = 'docs/identitymanager/6.2/development/scripting/powershell-scripts.md'
    elif 'robotframework' in relative and ('how-tos' in relative or 'script' in relative):
        new_path = 'docs/identitymanager/6.2/development/scripting/robotframework-scripts.md'
    
    # Executables/Command Line Tools mappings
    elif 'executables/references/server' in relative:
        new_path = 'docs/identitymanager/6.2/reference/command-line-tools/server-executable.md'
    elif 'executables/references/agent' in relative:
        new_path = 'docs/identitymanager/6.2/reference/command-line-tools/agent-executable.md'
    elif 'executables/references/deploy-configuration' in relative or 'executables/references/export-configuration' in relative:
        new_path = 'docs/identitymanager/6.2/reference/command-line-tools/deployment-tools.md'
    elif 'executables/references' in relative:
        new_path = 'docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md'
    elif relative == 'identitymanager/integration-guide/executables/index.md':
        new_path = 'docs/identitymanager/6.2/reference/command-line-tools/index.md'
    
    # Entity Model and Architecture mappings
    elif 'entity-model' in relative:
        new_path = 'docs/identitymanager/6.2/reference/entity-model.md'
    elif 'architecture/on-prem' in relative or 'architecture/saas' in relative:
        new_path = 'docs/identitymanager/6.2/reference/architecture-details.md'
    elif 'architecture/how-tos/protect-agent-server-communication' in relative:
        new_path = 'docs/identitymanager/6.2/administration/security/index.md'
    elif relative == 'identitymanager/integration-guide/architecture/index.md':
        new_path = 'docs/identitymanager/6.2/getting-started/architecture-overview.md'
    
    # Integration Guide index
    elif relative == 'identitymanager/integration-guide/index.md':
        new_path = 'docs/identitymanager/6.2/integration/index.md'
    
    # Resources
    elif 'resources/index.md' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/index.md'
    
    # Modules
    elif 'modules/index.md' in relative:
        new_path = 'docs/identitymanager/6.2/development/index.md'
    
    # Settings
    elif 'network-configuration/settings' in relative:
        new_path = 'docs/identitymanager/6.2/administration/server-configuration/general-settings.md'
    elif 'network-configuration/technical-files' in relative:
        new_path = 'docs/identitymanager/6.2/reference/configuration-reference/index.md'
    elif relative == 'identitymanager/integration-guide/network-configuration/index.md':
        new_path = 'docs/identitymanager/6.2/administration/index.md'
    
    # XML Configuration Reference
    elif 'xml-configuration' in relative and not 'toolkit' in relative:
        new_path = 'docs/identitymanager/6.2/reference/configuration-reference/xml-reference.md'
    
    # Simulation
    elif 'simulation' in relative:
        new_path = 'docs/identitymanager/6.2/access-governance/role-management/index.md'
    
    # How-tos for Okta
    elif 'how-tos/okta' in relative:
        new_path = 'docs/identitymanager/6.2/integration/connectors/connector-catalog/cloud-applications.md'
    
    # Default mapping for anything not explicitly mapped
    if not new_path:
        # Map remaining files to troubleshooting or reference sections
        if 'how-tos' in relative:
            new_path = 'docs/identitymanager/6.2/troubleshooting/common-issues.md'
        elif 'connector' in relative and 'troubleshoot' in relative:
            new_path = 'docs/identitymanager/6.2/troubleshooting/connector-troubleshooting.md'
        else:
            new_path = 'docs/identitymanager/6.2/reference/index.md'
    
    mappings.append(f"{file},{new_path}")

# Write the mappings
with open('/Users/colin.mckibben/Documents/github/docs/restructure/identitymanager/6.2/file-mappings.csv', 'w') as f:
    for mapping in mappings:
        f.write(mapping + '\n')

print(f"Generated {len(mappings)} mappings")