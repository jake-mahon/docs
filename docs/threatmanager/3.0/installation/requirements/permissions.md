# Permissions for Active Directory Sync

The following permissions are required for the credential used by Threat Manager for Active
Directory Sync. See the
[Entra ID Sync Page](/docs/threatmanager/3.0/administration/integrations/entra-id.md) topic for
additional information about syncing the configured Active Directory domain(s) in Threat Manager.

| Object Type | Function                                                                                                | Access Requirements                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Group       | Retrieve all deleted groups                                                                             | Read Access to group objects under the Deleted Objects Container         |
| Group       | Retrieve all groups                                                                                     | Read Access to all group objects in the domain                           |
| User        | Retrieve all deleted users                                                                              | Read Access to user objects under the Deleted Objects Container          |
| User        | Retrieve all users                                                                                      | Read all user objects from the domain                                    |
| Computer    | Retrieve all deleted computer objects                                                                   | Read all computer objects under the Deleted Objects Container            |
| Computer    | Retrieve all computer objects                                                                           | Read all computer objects in the domain                                  |
| Group       | Used specifically for groups that have large memberships which get automatically truncated by the query | Read Access to memberof for all group objects in the domain              |
| GMSA        | Retrieve all Group Managed Service Accounts                                                             | Read access to all msDS-groupmanagedserviceaccount objects in the domain |
| Secret      | Retrieve all DPAPI master backup keys (Secret objects)                                                  | Read access to all secret objects in Active Directory                    |

# Application Permissions for Entra ID Sync

The following permissions are required for the credential used by Threat Manager for Microsoft Entra
ID Sync. See the
[Active Directory Sync Page](/docs/threatmanager/3.0/administration/integrations/active-directory.md)
topic for additional information about syncing the configured Microsoft Entra ID tenant(s) in Threat
Manager.

| Object Type                      | Function                                                   | Access Requirements                         |
| -------------------------------- | ---------------------------------------------------------- | ------------------------------------------- |
| Administrative Unit              | Retrieve all administrative units                          | AdministrativeUnit.Read.All                 |
| Application                      | Retrieve all applications                                  | Application.Read.All                        |
| Device                           | Retrieve all devices                                       | Device.Read.All                             |
| Group                            | Retrieve all groups                                        | Group.Read.All                              |
| Group Member                     | Retrieve all group members                                 | GroupMember.Read.All                        |
| Identity Risky Service Principal | Retrieve all risky service principals                      | IdentityRiskyServicePrincipal.Read.All      |
| Identity Risky User              | Retrieve all risky users                                   | IdentityRiskyUser.Read.All                  |
| Organization                     | Retrieve organization information                          | Organization.Read.All                       |
| Role Assignment Schedule         | Read and write role assignment schedules in the directory  | RoleAssignmentSchedule.ReadWrite.Directory  |
| Role Eligibility Schedule        | Read and write role eligibility schedules in the directory | RoleEligibilitySchedule.ReadWrite.Directory |
| Role Management                  | Retrieve all role management data                          | RoleManagement.Read.All                     |
| User                             | Retrieve all users                                         | User.Read.All                               |

# Overview

To sync Active Directory domain(s) and Microsoft Entra ID tenant(s) in Threat Manager you must use
service accounts with the required permissions. See the following topics for details on these
permission.

- [Permissions for Active Directory Sync ](/docs/threatmanager/3.0/installation/requirements/permissions.md)
- [Application Permissions for Entra ID Sync](/docs/threatmanager/3.0/installation/requirements/permissions.md)
