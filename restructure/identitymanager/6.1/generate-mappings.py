#!/usr/bin/env python3
import os

# Read all files
with open('/tmp/identitymanager-files.txt', 'r') as f:
    files = [line.strip() for line in f.readlines()]

# Define mapping rules
mappings = []

for file in files:
    # Remove the base path for easier processing
    rel_path = file.replace('docs/identitymanager/6.1/identitymanager/', '')
    
    # Core index file
    if file == 'docs/identitymanager/6.1/identitymanager/index.md':
        mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/index.md")
    
    # Installation guide mappings
    elif 'installation-guide/' in rel_path:
        if '/overview/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/getting-started/overview.md")
        elif '/quick-start/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/getting-started/quick-start.md")
        elif '/requirements/' in rel_path:
            if 'agent-requirements' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/getting-started/system-requirements.md")
            elif 'database-requirements' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/getting-started/system-requirements.md")
            elif 'device-requirements' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/getting-started/system-requirements.md")
            elif 'server-requirements' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/getting-started/system-requirements.md")
            elif rel_path == 'installation-guide/requirements/index.md':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/getting-started/system-requirements.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/getting-started/system-requirements.md")
        elif '/production-ready/' in rel_path:
            if '/agent/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md")
            elif '/database/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/installation-setup/database-setup.md")
            elif '/email-server/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/installation-setup/email-server-setup.md")
            elif '/server/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/installation-setup/server-configuration.md")
            elif '/working-directory/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/installation-setup/working-directory-setup.md")
            elif rel_path == 'installation-guide/production-ready/index.md':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/installation-setup/installation-guide.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/installation-setup/installation-guide.md")
        elif '/reverse-proxy/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/installation-setup/reverse-proxy-setup.md")
        elif rel_path == 'installation-guide/index.md':
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/installation-setup/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/installation-setup/installation-guide.md")
    
    # Integration guide / API mappings
    elif 'integration-guide/api/' in rel_path:
        if '/agent/' in rel_path:
            if '/job/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/agent-api/job-api.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/agent-api/index.md")
        elif '/authentication/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/authentication.md")
        elif '/pagination/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/pagination.md")
        elif '/squery/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/squery.md")
        elif '/server/' in rel_path:
            if '/accesscertification/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/access-certification.md")
            elif '/accesscontrol/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/access-control.md")
            elif '/connectors/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/connectors.md")
            elif '/job/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/jobs.md")
            elif '/metadata/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/metadata.md")
            elif '/provisioningentityinstance/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/provisioning.md")
            elif '/provisioningpolicy/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/provisioning.md")
            elif '/report/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/reports.md")
            elif '/resource/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/resources.md")
            elif '/resourcechange/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/resources.md")
            elif '/resourcefilechange/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/resources.md")
            elif '/resourcelink/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/resources.md")
            elif '/resourcelinkchange/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/resources.md")
            elif '/universes/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/universes.md")
            elif '/workflows/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/workflows.md")
            elif '/files/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/resources.md")
            elif rel_path.endswith('server/index.md'):
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/index.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/server-api/index.md")
        elif '/how-tos/' in rel_path:
            if '/request-postman/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/troubleshooting-support/how-to-guides/postman-requests.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/index.md")
        elif rel_path.endswith('api/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/api-reference/index.md")
    
    # Architecture mappings
    elif 'integration-guide/architecture/' in rel_path:
        if '/on-prem/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/core-concepts/architecture/on-premise.md")
        elif '/saas/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/core-concepts/architecture/saas.md")
        elif '/protect-agent-server-communication/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/troubleshooting-support/how-to-guides/protect-agent-communication.md")
        elif rel_path.endswith('architecture/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/core-concepts/architecture/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/core-concepts/architecture/index.md")
    
    # Connector mappings
    elif 'integration-guide/connectors/' in rel_path:
        if '/references-connectors/' in rel_path:
            # Map specific connectors
            connector_name = rel_path.split('/references-connectors/')[1].split('/')[0]
            if connector_name == 'activedirectory':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/active-directory.md")
            elif connector_name == 'azuread':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/azure-active-directory.md")
            elif connector_name == 'googleworkspace':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/google-workspace.md")
            elif connector_name == 'ldap' or connector_name == 'openldap':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/ldap.md")
            elif connector_name == 'microsoftexchange':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/microsoft-exchange.md")
            elif connector_name == 'okta':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/okta.md")
            elif connector_name == 'scim':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/scim.md")
            elif connector_name == 'servicenow' in connector_name:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/servicenow.md")
            elif connector_name == 'sharepoint':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sharepoint.md")
            elif connector_name == 'sql' or 'sql' in connector_name:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sql-databases.md")
            elif connector_name == 'workday':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/workday.md")
            elif connector_name == 'sap' in connector_name:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sap-erp.md")
            elif connector_name == 'powershell' in connector_name or connector_name == 'robotframework':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md")
            elif rel_path.endswith('references-connectors/index.md'):
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/index.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md")
        elif '/references-packages/' in rel_path:
            # Similar mapping for packages
            package_name = rel_path.split('/references-packages/')[1].split('/')[0]
            if package_name == 'active-directory':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/active-directory.md")
            elif package_name == 'azure-active-directory':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/azure-active-directory.md")
            elif package_name == 'googleworkspace':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/google-workspace.md")
            elif 'ldap' in package_name:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/ldap.md")
            elif package_name == 'microsoft-exchange':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/microsoft-exchange.md")
            elif package_name == 'salesforce':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/salesforce.md")
            elif 'sap' in package_name:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sap-erp.md")
            elif 'scim' in package_name:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/scim.md")
            elif 'servicenow' in package_name:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/servicenow.md")
            elif package_name == 'sharepoint':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sharepoint.md")
            elif 'sql' in package_name or package_name == 'mysql' or package_name == 'postgresql' or package_name == 'oracle-database':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/sql-databases.md")
            elif package_name == 'workday':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/workday.md")
            elif package_name == 'powershell' in package_name or package_name == 'robot-framework':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md")
            elif rel_path.endswith('references-packages/index.md'):
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/index.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/custom-connectors.md")
        elif '/configuration-details/' in rel_path:
            if '/connections/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-configuration/connections.md")
            elif '/credential-protection/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-configuration/credential-protection.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-configuration/index.md")
        elif '/entitypropertymapping-format/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-configuration/entity-property-mapping.md")
        elif '/how-tos/' in rel_path:
            if '/azuread-register/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-tutorials/azure-ad-registration.md")
            elif '/powershell' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-tutorials/powershell-scripts.md")
            elif '/robotframework' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-tutorials/robot-framework.md")
            elif '/ticket-template' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-tutorials/webhook-templates.md")
            elif rel_path.endswith('how-tos/index.md'):
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-tutorials/index.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-tutorials/index.md")
        elif rel_path.endswith('connectors/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/index.md")
    
    # Entity model
    elif 'integration-guide/entity-model/' in rel_path:
        mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/core-concepts/entity-model.md")
    
    # Executables
    elif 'integration-guide/executables/' in rel_path:
        if '/references/' in rel_path:
            exec_name = rel_path.split('/references/')[1].split('/')[0]
            if exec_name == 'agent':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/agent-executable.md")
            elif exec_name == 'server':
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/server-executable.md")
            elif 'configuration' in exec_name or 'config' in exec_name:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/configuration-tools.md")
            elif 'export' in exec_name or 'csv' in exec_name:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/data-export-tools.md")
            elif 'database' in exec_name or 'bacpac' in exec_name:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/database-tools.md")
            elif 'encrypt' in exec_name or 'decrypt' in exec_name or 'protect' in exec_name:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/security-tools.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/index.md")
        elif rel_path.endswith('executables/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/index.md")
    
    # Governance
    elif 'integration-guide/governance/' in rel_path:
        if '/accesscertification/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/governance/access-certification/index.md")
        elif '/reporting/' in rel_path:
            if '/powerbi' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/governance/reporting/power-bi-integration.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/governance/reporting/index.md")
        elif '/risks/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/governance/risks.md")
        elif rel_path.endswith('governance/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/governance/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/governance/index.md")
    
    # Identity management
    elif 'integration-guide/identity-management/' in rel_path:
        if '/identity-repository/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/identity-management/identity-repository.md")
        elif '/joiners-movers-leavers/' in rel_path:
            if '/on-offboarding/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/identity-management/joiners-movers-leavers/onboarding-offboarding.md")
            elif '/position-change/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/identity-management/joiners-movers-leavers/position-changes.md")
            elif rel_path.endswith('joiners-movers-leavers/index.md'):
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/identity-management/joiners-movers-leavers/index.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/identity-management/joiners-movers-leavers/index.md")
        elif rel_path.endswith('identity-management/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/identity-management/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/identity-management/index.md")
    
    # Modules
    elif 'integration-guide/modules/' in rel_path:
        mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/core-concepts/index.md")
    
    # Monitoring
    elif 'integration-guide/monitoring/' in rel_path:
        if '/qradar' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/troubleshooting-support/monitoring/qradar-integration.md")
        elif rel_path.endswith('monitoring/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/troubleshooting-support/monitoring/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/troubleshooting-support/monitoring/index.md")
    
    # Network configuration
    elif 'integration-guide/network-configuration/' in rel_path:
        if '/agent-configuration/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md")
        elif '/server-configuration/' in rel_path:
            if '/database-connection/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/installation-setup/database-setup.md")
            elif '/end-users-authentication/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/access-control-security/authentication/end-user-authentication.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/installation-setup/server-configuration.md")
        elif '/password-management/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/access-control-security/password-management.md")
        elif '/proxy/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/network-configuration/proxy-settings.md")
        elif '/settings/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/network-configuration/index.md")
        elif '/technical-files/' in rel_path:
            if '/appsettings' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/technical-files/appsettings-reference.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/technical-files/index.md")
        elif '/okta/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/connectors-integration/connector-packages/okta.md")
        elif rel_path.endswith('network-configuration/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/network-configuration/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/network-configuration/index.md")
    
    # Notifications
    elif 'integration-guide/notifications/' in rel_path:
        if '/custom/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/notifications/custom-notifications.md")
        elif '/native/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/notifications/native-notifications.md")
        elif '/customize-native-notification/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/notifications/custom-notifications.md")
        elif '/set-language/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/notifications/custom-notifications.md")
        elif rel_path.endswith('notifications/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/notifications/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/notifications/index.md")
    
    # Profiles and permissions
    elif 'integration-guide/profiles-permissions/' in rel_path:
        if '/permissions/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/access-control-security/profiles-permissions/permissions-reference.md")
        elif '/create-assign-profiles/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/access-control-security/profiles-permissions/creating-profiles.md")
        elif '/rightsrestriction/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/access-control-security/profiles-permissions/rights-restrictions.md")
        elif rel_path.endswith('profiles-permissions/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/access-control-security/profiles-permissions/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/access-control-security/profiles-permissions/index.md")
    
    # Provisioning
    elif 'integration-guide/provisioning/' in rel_path:
        if '/prov-thresholds/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/identity-management/provisioning/provisioning-thresholds.md")
        elif rel_path.endswith('provisioning/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/identity-management/provisioning/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/identity-management/provisioning/index.md")
    
    # Resources
    elif 'integration-guide/resources/' in rel_path:
        mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/core-concepts/resources.md")
    
    # Role assignment
    elif 'integration-guide/role-assignment/' in rel_path:
        if '/assignment-dates/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/assignment-dates.md")
        elif '/conformingassignmentcomputation/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/conforming-assignments.md")
        elif '/evaluate-policy/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/assignment-policies.md")
        elif '/indirectpermissions/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/indirect-permissions.md")
        elif rel_path.endswith('role-assignment/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/access-control-security/role-assignment/index.md")
    
    # Role mining
    elif 'integration-guide/role-mining/' in rel_path:
        mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/governance/role-mining.md")
    
    # Role model
    elif 'integration-guide/role-model/' in rel_path:
        mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/core-concepts/role-model.md")
    
    # Simulation
    elif 'integration-guide/simulation/' in rel_path:
        mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/simulation.md")
    
    # Synchronization
    elif 'integration-guide/synchronization/' in rel_path:
        if '/synchro-thresholds/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/synchronization/sync-thresholds.md")
        elif '/upward-data-sync/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/synchronization/upward-data-sync.md")
        elif rel_path.endswith('synchronization/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/synchronization/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/synchronization/index.md")
    
    # Tasks and jobs
    elif 'integration-guide/tasks-jobs/' in rel_path:
        if '/jobs/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/job-configuration.md")
        elif '/tasks/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/task-management.md")
        elif '/configure-incremental-job/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/incremental-jobs.md")
        elif '/build-efficient-jobs/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/job-optimization.md")
        elif '/troubleshoot-connector-jobs/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/troubleshooting-support/common-issues/connector-troubleshooting.md")
        elif rel_path.endswith('tasks-jobs/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/automation/jobs-tasks/index.md")
    
    # Toolkit
    elif 'integration-guide/toolkit/' in rel_path:
        if '/bindings/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/core-concepts/bindings.md")
        elif '/expressions/' in rel_path:
            if '/csharp-utility-functions/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/csharp-functions.md")
            elif '/predefined-functions/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/predefined-functions.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/expressions.md")
        elif '/deploy-configuration/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/configuration-tools.md")
        elif '/export-configuration/' in rel_path:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/configuration-tools.md")
        elif '/xml-configuration/' in rel_path:
            # Complex XML configuration mappings
            if '/access-certification/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-certification-config.md")
            elif '/access-control/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/access-control-config.md")
            elif '/business-intelligence/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/business-intelligence-config.md")
            elif '/connectors/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/connector-config.md")
            elif '/entity/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/entity-config.md")
            elif '/jobs/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/jobs-config.md")
            elif '/monitoring/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/monitoring-config.md")
            elif '/notifications/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/notification-config.md")
            elif '/workflows/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/workflow-config.md")
            elif '/scaffoldings/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/scaffoldings/scaffolding-reference.md")
            elif rel_path.endswith('xml-configuration/index.md'):
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md")
            elif '/configuration/' in rel_path and '/scaffoldings/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/scaffoldings/scaffolding-reference.md")
            elif '/configuration/' in rel_path:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md")
            else:
                mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/configuration-reference/xml-configuration/index.md")
        elif rel_path.endswith('toolkit/index.md'):
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/index.md")
        else:
            mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/tools-utilities/toolkit/index.md")
    
    # Integration guide index
    elif rel_path == 'integration-guide/index.md':
        mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/getting-started/index.md")
    
    # Catch-all for any unmapped files
    else:
        # Default mapping based on general patterns
        mappings.append(f"{file},docs/identitymanager/6.1/identitymanager/index.md")

# Write mappings to file
with open('/Users/colin.mckibben/Documents/github/docs/restructure/identitymanager/6.1/file-mappings.csv', 'w') as f:
    for mapping in mappings:
        f.write(mapping + '\n')

print(f"Generated {len(mappings)} mappings")