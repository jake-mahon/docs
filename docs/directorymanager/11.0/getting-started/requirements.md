---
title: Directory Manager System Requirements
sidebar_label: Requirements
description: Comprehensive system requirements for Directory Manager including SQL Server database, hardware specifications, and software dependencies.
---

# Database Requirements

GroupID requires an SQL Server database to store and retrieve data. The SQL database may reside on
any SQL Server in your environment.

GroupID supports the following versions of SQL Servers:

| Database Servers          | Editions                                                                                                                                                       |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Microsoft SQL Server 2016 | Express, Standard, Enterprise Express edition available at: [SQL Server 2016 Express edition](https://www.microsoft.com/en-us/download/details.aspx?id=56840)  |
| Microsoft SQL Server 2017 | Express, Standard, Enterprise Express edition available at: [SQL Server 2017 Express edition](https://www.microsoft.com/en-us/download/details.aspx?id=55994)  |
| Microsoft SQL Server 2019 | Express, Standard, Enterprise Express edition available at: [SQL Server 2019 Express edition](https://www.microsoft.com/en-us/download/details.aspx?id=101064) |
| Microsoft SQL Server 2022 | Express, Standard, Enterprise Express edition available at: [SQL Server 2022 Express edition](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) |

The SQL Server Browser service is required and during the installation of SQL Server, you can set
its start mode either as Automatic, Disabled or Manual. If it is disabled, SQL Servers are not
listed in the **SQL Server** box on the **Database settings** page of the Configuration Tool. In
that case, you have to type the server name in the **SQL Server** box to select the required server
manually.

To enable the SQL Server Browser service, see
[How to: Start and Stop the SQL Server Browser Service](<http://technet.microsoft.com/en-us/library/ms189093(v=sql.105).aspx>).

See Also

- [Requirements](/docs/directorymanager/11.0/getting-started/requirements.md)

# Supported Microsoft Exchange Servers

GroupID supports the following Microsoft Exchange Servers:

- Microsoft Exchange Server 2013
- Microsoft Exchange Server 2016
- Microsoft Exchange Server 2019

See Also

- [Requirements](/docs/directorymanager/11.0/getting-started/requirements.md)

# Hardware Requirements

Minimum hardware requirements for GroupID are:

- 1.4 GHz or faster with four or more cores on a 64-bit processor
- 8 GB of RAM in case of GroupID-managed Elasticsearch

  6 GB of RAM in case of self-managed Elasticsearch

  RECOMMENDED: We recommend a dedicated server for GroupID. If you install any other application
  on the GroupID server, adjust RAM requirements accordingly. For example, if you install SQL
  Server, you may need to add 2-4 GB RAM depending on the edition of the SQL Server.

  Different editions of SQL Server have varying resource requirements. For example:

  - SQL Server Express – Minimal resource usage; 2 GB additional RAM may suffice.
  - SQL Server Standard or Enterprise – These require more resources; allocate 4 GB or more
    additional RAM for optimal performance.

- 6 GB or more disk space (for installation only)

  Space requirements are relative to the provider's data size growth for Elasticsearch data.

See Also

- [Requirements](/docs/directorymanager/11.0/getting-started/requirements.md)

# Requirements

This page lists the hardware, operating system, MS Exchange, and database required to run GroupID
11.0. The prerequisites may vary depending on your environment.

- [Hardware Requirements](/docs/directorymanager/11.0/getting-started/requirements.md)
- [Microsoft Windows Servers Requirements ](/docs/directorymanager/11.0/getting-started/requirements.md)
- [Supported Microsoft Exchange Servers](/docs/directorymanager/11.0/getting-started/requirements.md)
- [Database Requirements](/docs/directorymanager/11.0/getting-started/requirements.md)

Prior to installation, the
[Preparation Tool](/docs/directorymanager/11.0/getting-started/installation/preparation-tool.md)
installs the required software and Windows features. See the
[What does the Preparation Tool Install](/docs/directorymanager/11.0/getting-started/installation/preparation-tool.md)
topic for the list of components the tool installs.

See Also

- [Preparation Tool](/docs/directorymanager/11.0/getting-started/installation/preparation-tool.md)
- [Installation Tool](/docs/directorymanager/11.0/getting-started/installation/install-groupid.md)
- [Configuration Tool](/docs/directorymanager/11.0/getting-started/installation/post-installation.md)

# Microsoft Windows Servers Requirements

GroupID supports the following Microsoft Windows Servers:

Microsoft Windows Server 2016 Family

- Windows Server 2016 Standard
- Windows Server 2016 Datacenter

Microsoft Windows Server 2019 Family

- Windows Server 2019 Standard
- Windows Server 2019 Datacenter

Microsoft Windows Server 2022 Family

- Windows Server 2022 Standard
- Windows Server 2022 Datacenter

See Also

- [Requirements](/docs/directorymanager/11.0/getting-started/requirements.md)
