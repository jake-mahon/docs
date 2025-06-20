#!/usr/bin/env python3
"""
Generate file mappings for Directory Manager 11.1 documentation restructuring.
Maps 690 files from old structure to new structure based on defined rules.
"""

import os
import re
import csv
from pathlib import Path
from collections import defaultdict

def normalize_filename(filename):
    """Normalize filename for consistency"""
    # Remove .md extension for processing
    name = filename.replace('.md', '')
    # Convert to lowercase
    name = name.lower()
    return name

def get_new_path(old_path):
    """Map old path to new path based on restructuring rules"""
    # Extract relative path from base directory
    base = "/directorymanager/11.1/"
    if base in old_path:
        rel_path = old_path.split(base)[1]
    else:
        rel_path = old_path
    
    # Parse the path components
    parts = rel_path.split('/')
    
    # Define mapping rules
    if rel_path.startswith('directorymanager/portal/user/'):
        # User portal files → /user-management/
        filename = parts[-1]
        if 'profile' in filename:
            return '/user-management/profile-management.md'
        elif 'search' in filename:
            return '/user-management/user-search.md'
        elif 'create' in filename or 'add' in filename:
            return '/user-management/creating-users.md'
        elif 'modify' in filename or 'edit' in filename:
            return '/user-management/modifying-users.md'
        elif 'delete' in filename or 'remove' in filename:
            return '/user-management/deleting-users.md'
        elif 'password' in filename:
            return '/user-management/password-management.md'
        elif 'delegation' in filename:
            return '/user-management/delegation.md'
        else:
            return f'/user-management/{filename}'
    
    elif rel_path.startswith('directorymanager/portal/group/'):
        # Group portal files → /group-management/
        filename = parts[-1]
        if 'create' in filename or 'add' in filename:
            return '/group-management/creating-groups.md'
        elif 'modify' in filename or 'edit' in filename:
            return '/group-management/modifying-groups.md'
        elif 'delete' in filename or 'remove' in filename:
            return '/group-management/deleting-groups.md'
        elif 'member' in filename:
            return '/group-management/managing-members.md'
        elif 'nest' in filename:
            return '/group-management/nested-groups.md'
        elif 'dynasty' in filename:
            return '/group-management/group-dynasties.md'
        else:
            return f'/group-management/{filename}'
    
    elif rel_path.startswith('directorymanager/api/user/'):
        # User API files → /api-reference/users/
        filename = parts[-1]
        if 'create' in filename or 'add' in filename:
            return '/api-reference/users/user-operations.md#create'
        elif 'update' in filename or 'modify' in filename:
            return '/api-reference/users/user-operations.md#update'
        elif 'delete' in filename or 'remove' in filename:
            return '/api-reference/users/user-operations.md#delete'
        elif 'search' in filename or 'get' in filename:
            return '/api-reference/users/user-operations.md#read'
        elif 'password' in filename:
            return '/api-reference/users/password-operations.md'
        else:
            return f'/api-reference/users/{filename}'
    
    elif rel_path.startswith('directorymanager/api/group/'):
        # Group API files → /api-reference/groups/
        filename = parts[-1]
        if 'create' in filename or 'add' in filename:
            return '/api-reference/groups/group-operations.md#create'
        elif 'update' in filename or 'modify' in filename:
            return '/api-reference/groups/group-operations.md#update'
        elif 'delete' in filename or 'remove' in filename:
            return '/api-reference/groups/group-operations.md#delete'
        elif 'search' in filename or 'get' in filename:
            return '/api-reference/groups/group-operations.md#read'
        elif 'member' in filename:
            return '/api-reference/groups/member-operations.md'
        else:
            return f'/api-reference/groups/{filename}'
    
    elif rel_path.startswith('directorymanager/managementshell/'):
        # PowerShell cmdlets → /powershell-reference/
        if '/user/' in rel_path:
            return '/powershell-reference/user-cmdlets.md'
        elif '/group/' in rel_path:
            return '/powershell-reference/group-cmdlets.md'
        elif '/identity/' in rel_path:
            return '/powershell-reference/identity-cmdlets.md'
        elif '/authentication/' in rel_path:
            return '/powershell-reference/authentication-cmdlets.md'
        else:
            filename = parts[-1]
            return f'/powershell-reference/{filename}'
    
    elif 'install' in rel_path or 'requirement' in rel_path or 'prerequisite' in rel_path:
        # Installation files → /installation/
        if 'requirement' in rel_path or 'prerequisite' in rel_path:
            return '/installation/requirements.md'
        elif 'docker' in rel_path:
            return '/installation/docker-deployment.md'
        elif 'kubernetes' in rel_path or 'k8s' in rel_path:
            return '/installation/kubernetes-deployment.md'
        elif 'upgrade' in rel_path:
            return '/installation/upgrading.md'
        else:
            return '/installation/installation-guide.md'
    
    elif 'authenticat' in rel_path:
        # Authentication files → /configuration/authentication/
        if 'saml' in rel_path:
            return '/configuration/authentication/saml-configuration.md'
        elif 'oauth' in rel_path or 'oidc' in rel_path:
            return '/configuration/authentication/oauth-configuration.md'
        elif 'ldap' in rel_path or 'ad' in rel_path:
            return '/configuration/authentication/ldap-configuration.md'
        elif 'mfa' in rel_path or 'multi' in rel_path:
            return '/configuration/authentication/multi-factor-auth.md'
        else:
            return '/configuration/authentication/authentication-overview.md'
    
    elif rel_path.startswith('directorymanager/admincenter/'):
        # Admin Center files
        if 'schedule' in rel_path:
            # Schedule/automation files
            if 'synchronize' in rel_path:
                return '/automation/synchronization.md'
            elif 'lifecycle' in rel_path:
                return '/automation/lifecycle-management.md'
            elif 'reports' in rel_path:
                return '/automation/scheduled-reports.md'
            elif 'triggers' in rel_path:
                return '/automation/triggers.md'
            elif 'workflow' in rel_path:
                return '/automation/workflow-automation.md'
            else:
                return '/automation/overview.md'
        elif 'securityrole' in rel_path:
            # Security roles and permissions
            if 'permissions' in rel_path:
                return '/administration/permissions.md'
            elif 'policy' in rel_path:
                return '/administration/security-policies.md'
            elif 'create' in rel_path or 'manage' in rel_path:
                return '/administration/security-roles.md'
            else:
                return '/administration/security-roles.md'
        elif 'setupauth' in rel_path:
            # Authentication setup
            if 'mfa' in rel_path or 'sfa' in rel_path:
                return '/configuration/authentication/multi-factor-auth.md'
            elif 'yubikey' in rel_path:
                return '/configuration/authentication/hardware-tokens.md'
            elif 'windowshello' in rel_path:
                return '/configuration/authentication/windows-hello.md'
            elif 'linkedaccount' in rel_path:
                return '/configuration/authentication/linked-accounts.md'
            else:
                return '/configuration/authentication/authentication-methods.md'
        elif 'smsgateway' in rel_path:
            # SMS gateway configuration
            return '/configuration/sms-gateway.md'
        elif 'workflow' in rel_path:
            # Workflow configuration
            if 'implement' in rel_path:
                return '/workflows/implementation.md'
            elif 'integrate' in rel_path:
                return '/workflows/integration.md'
            elif 'acceleration' in rel_path:
                return '/workflows/acceleration.md'
            else:
                return '/workflows/overview.md'
        elif 'replication' in rel_path:
            # Replication configuration
            return '/configuration/replication.md'
        elif 'service' in rel_path:
            # Services configuration
            if 'dataservice' in rel_path:
                return '/administration/services/data-service.md'
            elif 'securityservice' in rel_path:
                return '/administration/services/security-service.md'
            elif 'emailservice' in rel_path:
                return '/administration/services/email-service.md'
            elif 'replicationservice' in rel_path:
                return '/administration/services/replication-service.md'
            elif 'schedulerservice' in rel_path:
                return '/administration/services/scheduler-service.md'
            else:
                return '/administration/services/overview.md'
        elif 'datasource' in rel_path:
            return '/configuration/data-sources.md'
        elif 'identitystore' in rel_path:
            if 'configure' in rel_path:
                return '/configuration/identity-stores.md'
            elif 'link' in rel_path:
                return '/configuration/identity-store-linking.md'
            elif 'replication' in rel_path:
                return '/configuration/replication.md'
            else:
                return '/configuration/identity-stores.md'
        elif 'notification' in rel_path:
            return '/configuration/notifications.md'
        elif 'portal' in rel_path:
            if 'design' in rel_path:
                return '/configuration/portal-customization.md'
            elif 'displaytype' in rel_path:
                return '/configuration/display-types.md'
            else:
                return '/configuration/portal-settings.md'
        elif 'helpdesk' in rel_path:
            return '/helpdesk/helpdesk-operations.md'
        elif 'entitlement' in rel_path:
            return '/configuration/entitlements.md'
        elif 'general' in rel_path:
            if 'licensing' in rel_path:
                return '/administration/licensing.md'
            elif 'logs' in rel_path:
                return '/administration/logging.md'
            elif 'dashboard' in rel_path:
                return '/getting-started/dashboard.md'
            else:
                return '/administration/general-settings.md'
        elif 'enroll' in rel_path:
            return '/getting-started/enrollment.md'
        elif 'signin' in rel_path or 'authenticate' in rel_path:
            return '/getting-started/signing-in.md'
        elif 'history' in rel_path:
            return '/administration/audit-history.md'
    
    elif 'integrat' in rel_path:
        # Integration files
        if 'teams' in rel_path:
            return '/integrations/microsoft-teams.md'
        elif 'servicedesk' in rel_path:
            return '/integrations/service-desk.md'
        elif 'siem' in rel_path:
            return '/integrations/siem-integration.md'
        else:
            return '/integrations/overview.md'
    
    elif 'security' in rel_path:
        # Security files
        if 'password' in rel_path:
            return '/security/password-policies.md'
        elif 'audit' in rel_path:
            return '/security/audit-logging.md'
        elif 'compliance' in rel_path:
            return '/security/compliance.md'
        else:
            return '/security/security-overview.md'
    
    elif 'reference' in rel_path:
        # Reference documentation
        if 'error' in rel_path:
            return '/reference/error-codes.md'
        elif 'glossary' in rel_path:
            return '/reference/glossary.md'
        else:
            return '/reference/index.md'
    
    elif 'quickstart' in rel_path or 'gettingstarted' in rel_path:
        return '/getting-started/quick-start.md'
    
    elif 'overview' in rel_path or 'index' in rel_path:
        return '/index.md'
    
    # Default mapping - preserve structure under misc
    else:
        return f'/misc/{rel_path}'

def main():
    """Main function to generate mappings"""
    # Read all file paths
    with open('/tmp/all_dm_files.txt', 'r') as f:
        all_files = [line.strip() for line in f if line.strip()]
    
    # Track consolidations
    consolidations = defaultdict(list)
    mappings = []
    
    # Process each file
    for old_path in all_files:
        new_path = get_new_path(old_path)
        
        # Skip if no mapping found
        if not new_path:
            print(f"Warning: No mapping for {old_path}")
            continue
        
        # Handle consolidations (multiple old files to one new file)
        if '#' in new_path:
            # This is a section within a consolidated file
            base_file = new_path.split('#')[0]
            consolidations[base_file].append(old_path)
        else:
            mappings.append((old_path, new_path))
    
    # Add consolidation mappings
    for new_file, old_files in consolidations.items():
        for old_file in old_files:
            mappings.append((old_file, new_file))
    
    # Sort mappings for consistency
    mappings.sort(key=lambda x: x[0])
    
    # Write to CSV
    output_file = '/Users/jordan.violet/development/docs/dm_file_mappings.csv'
    with open(output_file, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(['old_path', 'new_path'])  # Header
        writer.writerows(mappings)
    
    # Print summary
    print(f"Generated mappings for {len(mappings)} files")
    print(f"Output saved to: {output_file}")
    
    # Print consolidation summary
    if consolidations:
        print(f"\nConsolidation summary ({len(consolidations)} target files):")
        for new_file, old_files in sorted(consolidations.items()):
            print(f"  {new_file} <- {len(old_files)} files")

if __name__ == "__main__":
    main()