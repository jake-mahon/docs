---
title: System Requirements Guide
sidebar_label: System Requirements
description: Complete hardware and software requirements for all Usercube components including agents, database, server, and integration devices.
---

# Agent

This section identifies the requirements for a Usercube agent.

## Software

The agent is a .NET application.

Running an agent requires installing the
[ASP.NET 8.0 Runtime](https://dotnet.microsoft.com/download/dotnet/8.0/runtime).

## Hosting

When used separated from the server, the agent can be run as:

- an [Internet Information Services (IIS)](https://www.iis.net/) website from the minimal version
  IIS 10.0 (recommended);
- a
  [Windows service](https://docs.microsoft.com/en-us/dotnet/framework/windows-services/introduction-to-windows-service-applications);
- a stand-alone executable for tests or debugging purposes.

### Integrated agent

Some installations require multiple separate agents, but most of them use a single integrated agent
that runs within the Usercube server process. In that case, the server executable contains the
agents and no agent executable needs to be executed. It means that if a Usercube server is already
installed, no further installation is required.

In this case, the agent working directory is the same as the server working directory, and both the
agent's and server's
[`appsettings`](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
share the same configuration. The `appsettings.agent` configuration set is still configured through
environment variables or via a separate
[`appsettings.agent.json`](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
file stored next to the `Usercube-Server.exe` executable, in the common working directory.

## Service Accounts

The agent should be assigned a
[Windows Server service account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts).

The installation of the server as part of an Active Directory domain requires the use of an account
with sufficient privileges to create a service account on the domain.

It can be either the IIS built-in
[application pool identity](https://support.microsoft.com/en-us/help/4466942/understanding-identities-in-iis),
or a custom
[Windows Server service account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts).

### Working directory permissions

The agent's service account needs specific permissions on the
[working directory](/docs/identitymanager/6.1/installation-setup/working-directory-setup.md):

- _Read_ and _List folder contents_ on the working directory;
- _Read & Execute_ and _List folder contents_ on the
  [`Runtime` directory](/docs/identitymanager/6.1/installation-setup/working-directory-setup.md),
  usually `C:/identitymanager<Organization>/Runtime`, in order to run the agent executable;
- _Read_ and _List folder contents_ on the directory for provisioning orders, whose path depends on
  the
  [`Work` folder's path](/docs/identitymanager/6.1/installation-setup/agent-configuration.md);
- _Read_, _List folder contents_, and _Write_ on the directory for data collection, whose path
  depends on the
  [`Work` folder's path](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

Other permissions should be denied.

> **FAQ**:
> [How to set up directory permissions in Windows Server?](/docs/identitymanager/6.1/installation-setup/server-configuration.md)

### Managed systems' permissions

Every Usercube agent needs one or several service accounts on the target managed systems, able to
read and write to said managed systems.

> For example, using Usercube with an Active Directory instance requires the agent to be assigned an
> Active Directory service account that can read, write, change users' passwords, update group
> memberships, and synchronize the whole Active Directory.

Before going further, make sure the integration team has provided:

- The list of all managed systems;
- service accounts with the necessary permissions for the agent to perform _Read_ and/or _Write_
  operations on the systems associated with a connector allowing respectively
  [synchronization and/or provisioning](/docs/identitymanager/6.1/connectors-integration/index.md);
- service accounts' credentials.

Managed systems credentials are stored in the
[`appsettings.agent` configuration set](/docs/identitymanager/6.1/installation-setup/agent-configuration.md)
and can be [protected](/docs/identitymanager/6.1/core-concepts/index.md).

### Database permissions

The agent needs a service account that can authenticate to SQL Server.

## Hostname and DNS

The agent needs to be assigned a hostname within the organization's domain. End-user browsers must
be able to resolve the agent's hostname.

The associated DNS zone needs to be
[updated accordingly](https://docs.microsoft.com/en-us/windows-server/networking/core-network-guide/cncg/server-certs/create-an-alias-cname-record-in-dns-for-web1).

The DNS alias should be written in lowercase in order to comply with as many security rules as
possible.

## SSL Certificate

The agent requires the use of HTTPS ports and an SSL certificate in order to perform HTTPS
communication with the server.

## Emails

The agent needs access to an SMTP server to send
[email notifications](/docs/identitymanager/6.1/installation-setup/email-server-setup.md).

## Encryption Key Pair

An [RSA-2048 encryption key pair](https://en.wikipedia.org/wiki/Public-key_cryptography) is required
for the agent in order to perform various encryption operations, such as source, configuration, or
log file encryptions;

Such a certificate does not need to be integrated into the target organization's Public Key
Infrastructure and does not require an expiration date. They are only relevant to internal and
temporary Usercube data and can be changed at any time.

An RSA key pair, as in an [X.509](https://fr.wikipedia.org/wiki/X.509) public key certificate and a
private key, can be stored either:

- As a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive (also called
  [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files)
  or `.pfx` file) stored in the _server_'s host file system. The archive contains both the public
  key certificate and the private key.
- As a certificate from a Windows'
  [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store)
  identified by _SubjectDistinguishedName_ or by _Thumbprint_. The Windows certificate also contains
  both the public key certificate and the private key. This is the recommended method.

The key pair can be generated with tools such as
[OpenSSL](https://www.openssl.org/docs/manmaster/man1/req.html) or Microsoft's
[New-SelfSignedCertificate](https://docs.microsoft.com/en-us/powershell/module/pkiclient/new-selfsignedcertificate?view=win10-ps)and[pvk2pfx tool](https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/pvk2pfx?redirectedfrom=MSDN).

## What's Next?

To start the installation, follow either the
[quick start guide](/docs/identitymanager/6.1/getting-started/quick-start.md)
or the
[production-ready installation guide](/docs/identitymanager/6.1/installation-setup/installation-guide.md).

# Database

This section identifies hardware and software requirements for Usercube's database.

## Hardware

The database disk storage requirements depend on multiple factors as the database lifespan and the
number of entries, for example 100,000 users can take up appropriately 10 GB of storage

**NOTE:** The maximum SQL Express database is 10 GB.

## Software

Usercube uses a [SQL Server database](https://www.microsoft.com/en-us/sql-server/sql-server-2019)
and supports SQL Server 2016 or later.

The
[database requirements](https://docs.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server?view=sql-server-ver15)
may depend on the chosen SQL Server edition and version.

### Recommended features

The following features are also highly recommended:

- [Always On availability groups](https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/always-on-availability-groups-sql-server):
  only available in the Enterprise edition of SQL Server 2016 or later

  > **FAQ**:
  > [How to enable Always On availability groups in SQL Server?](https://docs.microsoft.com/en-us/sql/database-engine/availability-groups/windows/enable-and-disable-always-on-availability-groups-sql-server?view=sql-server-ver15)

- [Database Mirroring](https://docs.microsoft.com/en-us//sql/database-engine/database-mirroring/database-mirroring-sql-server?view=sqlallproducts-allversions):
  available in all editions of SQL Server 2016 or later

  > **FAQ**:
  > [How to enable database mirroring in SQL Server?](https://docs.microsoft.com/en-us/sql/database-engine/database-mirroring/setting-up-database-mirroring-sql-server?view=sql-server-ver15)

- [Table Partitioning](https://docs.microsoft.com/en-us/sql/relational-databases/partitions/partitioned-tables-and-indexes?view=sql-server-ver15)

  The data history feature introduced in Usercube v5.1.0, might cause some tables to grow
  significantly.

  Database performance is greatly improved by enabling the
  [Table Partitioning](https://docs.microsoft.com/en-us/sql/relational-databases/partitions/partitioned-tables-and-indexes?view=sql-server-ver15)
  feature for the `UR_Resource` and `UP_Assigned*` tables:

  | `UP_Assigned*` Tables      |
  | -------------------------- |
  | UP_AssignedResourceTypes   |
  | UP_AssignedSingleRoles     |
  | UP_AssignedCompositeRoles  |
  | UP_AssignedNavigationRules |
  | UP_AssignedScalarRules     |

  This feature is available and enabled by default in SQL Server 2016 or later.

  > **FAQ**:
  > [How to create partitioned tables and indexes?](https://docs.microsoft.com/en-us/sql/relational-databases/partitions/create-partitioned-tables-and-indexes?view=sql-server-ver15)

### Additional tools

The installation and setup of the database require using either
[SQL server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15)
or the
[`sqlcmd` command line tool](https://docs.microsoft.com/en-us/sql/ssms/scripting/sqlcmd-use-the-utility?view=sql-server-ver15).

## SQL Server Authentication

Usercube can authenticate to SQL Server using either a SQL Server authentication login or a Windows
authentication login.

Netwrix recommends using the
[Windows authentication login](https://docs.microsoft.com/en-us/sql/relational-databases/security/choose-an-authentication-mode?view=sql-server-ver15)
to avoid storing a plain text password in the technical configuration files.

## SQL Server Roles

The database administrator must be able to assign the following roles to the service account used by
Usercube to access the SQL Server database:

- `db_owner` which is a
  [database-level role](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/database-level-roles?view=sql-server-ver15).
  This role grants its owner the authorization to perform all configuration and maintenance
  activities on the database, and to drop the database in SQL Server.
- `bulkadmin` which is a
  [server-level role](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/server-level-roles?view=sql-server-ver15).
  This role grants its owner the authorization to perform bulk operations on the database.

  Although `bulkadmin` is a server-level role, it still requires Usercube to have database-level
  permissions granted by the `db_owner` role. It means that bulk operations can be performed on
  the database only if Usercube has been granted the `db_owner` role.

  Granting `bulkadmin` role to the server's service account requires access to an account member
  of the `sysadmin` or `securityadmin` server-level role on the target SQL Server. See the
  [ Install the Server ](/docs/identitymanager/6.1/installation-setup/server-configuration.md)
  topic for additional information.

For more information about identity and permission management in SQL Server, see
[Microsoft's documentation](https://docs.microsoft.com/en-us/sql/relational-databases/security/authentication-access/getting-started-with-database-engine-permissions?view=sql-server-ver15).

## Shared SQL Server and Dedicated Database

Usercube's SQL Server installation can be used to host other database applications.

Usercube's database itself must be used exclusively for Usercube.

## Connection to the Server

SQL feed must be open from Usercube's server to SQL Server.

## Optimization

The
[max degree of parallelism (MAXDOP)](https://learn.microsoft.com/en-us/azure/azure-sql/database/configure-max-degree-of-parallelism?view=azuresql-db)
must be set to 1 in the SQL database.

## What's Next?

Let's move on to the requirements for Usercube's server. See the
[ Server ](/docs/identitymanager/6.1/getting-started/system-requirements.md)
topic for additional information.

# Integration Device

This section identifies the requirements for the local device used for the installation: either the
integrator can log in onto the local network, or a station must be available.

## Hardware

No matter whether the machine is virtual or physical, running a Usercube server or agent requires at
least 8 GB of RAM, 20 GB of disk storage, and a dual-core CPU.

NETWRIX even recommends a 4-core CPU if SQL server is installed on this device.

## Operating System

Both server and agent must run on [Windows Server](https://www.microsoft.com/en-us/windows-server).

Supported versions are:

- Windows Server 2022
  - Full Server
  - Server Core
  - Nano Server
- Windows Server 2019
  - Full Server
  - Server Core
  - Nano Server
- Windows Server 2016
  - Full Server
  - Server Core
  - Nano Server

> **FAQ**:
> [What version of Windows server am I currently running?](https://docs.microsoft.com/en-us/windows/client-management/windows-version-search)

## Access

The device must have access to the Virtual Machines of Usercube's server, and to the database.

## Software

Microsoft Excel must be installed.

A web browser must be accessible to test the future installation. Usercube's UI supports all popular
browsers:

- Google Chrome (latest 2 versions);
- Mozilla Firefox (latest 2 versions);
- Apple Safari (latest 2 versions);
- Microsoft Edge Chromium.

## Administrator Account

A Windows local administrator account is required to install the server and agent on the target
Windows Server workstation.

## Additional Recommendations

A not-so-minimalist text editor such as [Notepad++](https://notepad-plus-plus.org/downloads/) can be
useful to comfortably edit
[network configuration files](/docs/identitymanager/6.1/configuration-reference/network-configuration/index.md).

## What's Next?

Let's move on to the requirements for
[Usercube's database](/docs/identitymanager/6.1/getting-started/system-requirements.md).

# Requirements

This section identifies hardware and software requirements for each Usercube component:

- #### [Integration Device](/docs/identitymanager/6.1/getting-started/system-requirements.md)
- #### [Database](/docs/identitymanager/6.1/getting-started/system-requirements.md)
- #### [Server](/docs/identitymanager/6.1/getting-started/system-requirements.md)
- #### [Agent](/docs/identitymanager/6.1/getting-started/system-requirements.md)

# Server

This section identifies hardware and software requirements for Usercube's server.

## License Key

The server requires a
[license key](/docs/identitymanager/6.1/installation-setup/server-configuration.md)
provided by NETWRIX.

## Software

The server is a .NET application.

Running the server requires installing the
[ASP.Net hosting bundle in version 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).

## Hosting

The server can be run as:

- an [Internet Information Services (IIS)](https://www.iis.net/) website from the minimal version
  IIS 10.0 (recommended);
- a
  [Windows service](https://docs.microsoft.com/en-us/dotnet/framework/windows-services/introduction-to-windows-service-applications);
- a stand-alone executable for tests or debugging purposes.

It is recommended to enable the following
[Internet Information Services (IIS)](https://www.iis.net/) features to host Usercube:

- [Windows Authentication](https://docs.microsoft.com/en-us/iis/configuration/system.webserver/security/authentication/windowsauthentication/#windows-authentication);
- [Anonymous Authentication](https://docs.microsoft.com/en-us/iis/configuration/system.webserver/security/authentication/anonymousauthentication#anonymous-authentication).

## Service Accounts

The installation of the server as part of an Active Directory domain requires the use of an account
with sufficient privileges to create a service account on the domain.

The server should be assigned a
[custom Windows service account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts).

The IIS built-in
[application pool identity](https://support.microsoft.com/en-us/help/4466942/understanding-identities-in-iis)
should not be used, because it will prevent the custom account from connecting to a distant SQL
Server. Hence NETWRIX recommends using a domain account.

### Working directory permissions

The agent's service account needs specific permissions on the
[working directory](/docs/identitymanager/6.1/installation-setup/working-directory-setup.md):

- _Read_ and _List folder contents_ on the working directory;
- _Read & Execute_ and _List folder contents_ on the
  [`Runtime` directory](/docs/identitymanager/6.1/installation-setup/working-directory-setup.md),
  usually `C:/identitymanager<Organization>/Runtime`, in order to run the agent executable;
- _Read_ and _List folder contents_ on the directory for provisioning orders, whose path depends on
  the
  [`Work` folder's path](/docs/identitymanager/6.1/installation-setup/agent-configuration.md);
- _Read_, _List folder contents_, and _Write_ on the directory for data collection, whose path
  depends on the
  [`Work` folder's path](/docs/identitymanager/6.1/installation-setup/agent-configuration.md).

Other permissions should be denied.

> **FAQ**:
> [How to set up directory permissions in Windows Server?](/docs/identitymanager/6.1/installation-setup/server-configuration.md)

### Database permissions

If Windows' authentication is used for SQL Server, then the server should be able to authenticate to
SQL Server with its assigned service account. It means that the server's service account needs to be
assigned an SQL Server login with the relevant
[roles](/docs/identitymanager/6.1/getting-started/system-requirements.md),
including necessarily either `sysadmin` or `securityadmin`.

For more information, see the
[server installation procedure](/docs/identitymanager/6.1/installation-setup/server-configuration.md).

## Hostname and DNS

In the case of an on-premises installation, the server needs to be assigned a hostname within the
organization's domain. Agents must be able to resolve the server's hostname.

The associated DNS zone needs to be
[updated accordingly](https://docs.microsoft.com/en-us/windows-server/networking/core-network-guide/cncg/server-certs/create-an-alias-cname-record-in-dns-for-web1).

The DNS alias should be written in lowercase in order to comply with as many security rules as
possible.

## SSL Certificate

The server requires the use of an SSL certificate in order to perform HTTPS communication with
end-users' browsers.

Usercube SaaS offering comes with an SSL certificate signed by a trusted certificate authority for
the `*.usercube.com` domains. This certificate allows end-users to access the server through the
Internet without any further configuration. Using another domain name for the SaaS installation
requires providing NETWRIX with the corresponding SSL certificate signed by a trusted certificate
Authority.

Usercube on-premises offering requires the use of an SSL certificate trusted by all the target
end-users' browsers. Standard practices use a certificate signed by the target organization's Public
Key Infrastructure (PKI) root certificate authority.
[The on-premise SSL certificate must be set up in IIS](/docs/identitymanager/6.1/installation-setup/server-configuration.md).

## Emails

The server needs access to an SMTP server to send
[email notifications](/docs/identitymanager/6.1/installation-setup/email-server-setup.md).

## Encryption and Identity Server Key Pairs

An [RSA-2048 encryption key pair](https://en.wikipedia.org/wiki/Public-key_cryptography) is required
for:

- Usercube's server in order to perform various encryption operations, such as source,
  configuration, or log file encryptions;
- Usercube's Identity Server for end-user authentication purposes.

Such a certificate does not need to be integrated into the target organization's Public Key
Infrastructure and does not require an expiration date. They are only relevant to internal and
temporary Usercube data and can be changed at any time.

An RSA key pair, as in an [X.509](https://fr.wikipedia.org/wiki/X.509) public key certificate and a
private key, can be stored either:

- As a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive (also called
  [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files)
  or `.pfx` file) stored in the _server_'s host file system. The archive contains both the public
  key certificate and the private key.
- As a certificate from a Windows'
  [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store)
  identified by _SubjectDistinguishedName_ or by _Thumbprint_. The Windows certificate also contains
  both the public key certificate and the private key. This is the recommended method.

The key pair can be generated with tools such as
[OpenSSL](https://www.openssl.org/docs/manmaster/man1/req.html) or Microsoft's
[New-SelfSignedCertificate](https://docs.microsoft.com/en-us/powershell/module/pkiclient/new-selfsignedcertificate?view=win10-ps)and[pvk2pfx tool](https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/pvk2pfx?redirectedfrom=MSDN).

## What's Next?

Let's move on to
[Usercube's agent requirements](/docs/identitymanager/6.1/getting-started/system-requirements.md).
