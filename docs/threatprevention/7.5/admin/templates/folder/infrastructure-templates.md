# Infrastructure Templates

This section contains templates for monitoring and protecting infrastructure components.

## LDAP Monitoring {#ldap}

The LDAP folder contains the following templates:

| Template                      | Description                                                                                                                                                                                                                 | TAGS |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| LDAP: Sensitive Accounts      | This policy will detect LDAP queries targeting sensitive accounts, such as Administrator. Add to and delete from this list of accounts in the LDAP Query filter as per specific requirements                                | None |
| LDAP: Sensitive Containers    | This policy will detect LDAP queries targeting sensitive containers, such as Domain Controllers. Add to and delete from this list of containers in the LDAP Query filter per specific requirements                          | None |
| LDAP: Sensitive Groups        | This policy will detect LDAP queries targeting sensitive groups, such as Domain Admins, Enterprise Admins, and Schema Admins. Add to and delete from this list of groups in the LDAP Query filter per specific requirements | None |
| LDAP: Sensitive SPNs          | This policy will detect LDAP queries targeting sensitive Service Principal Names, such as Exchange and SQL Servers. Add to and delete from this list of SPNs in the LDAP Query filter per specific requirements             | None |
| LDAP: Service Principal Names | Detects attempts to obtain a list of SPN values                                                                                                                                                                             | None |

## Threat Manager Integration {#threat-manager}

The Threat Manager folder contains the following templates:

| Template                   | Description                                                                                                                                                                                                                                | TAGS                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| Threat Manager for AD      | This is the recommended policy for sending AD Events captured by Threat Prevention to Threat Manager. This policy includes:  Authentication Monitoring, Active Directory Changes, AD Replication Monitoring, and LSASS Guardian - Monitor. | - Threat Manager - NEW v6.1 TEMPLATES |
| Threat Manager for AD LDAP | This is the recommended policy for sending LDAP events captured by Threat Prevention to Threat Manager for detecting signature queries of LDAP reconnaissance tools. Policy 1: Suspicious Queries Policy 2: Suspicious Attributes Returned | - Threat Manager - NEW v7.1 TEMPLATES |