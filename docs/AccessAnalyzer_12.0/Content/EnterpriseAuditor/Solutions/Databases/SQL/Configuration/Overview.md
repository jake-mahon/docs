---
sidebar_position: 5422
title: 4.Configuration Job Group
---

# 4.Configuration Job Group

The 4.Configuration Job Group provides information on potential vulnerabilities related to SQL and Azure SQL server configuration settings.

![](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Solutions/Databases/SQL/ConfigurationJobGroup.png)

The jobs in the 4.Configuration Job Group are:

* [SQL\_Authentication Job](SQL_Authentication "Navigates to the SQL_Authentication Job section") – This job identifies authentication settings on targeted SQL and Azure SQL servers that allow SQL server authentication in addition to Windows authentication. Microsoft recommends that the SQL and Azure SQL servers should be generally configured to utilize Windows authentication versus SQL authentication.
* [SQL\_BestPractices Job](SQL_BestPractices "Navigates to the SQL_BestPractices Job section") – This job is designed to analyze SQL and Azure SQL server configuration settings and report on any findings that deviate from recommended Microsoft Best Practices when it comes to creating, maintaining, and securing SQL servers
* [SQL\_CMDShell Job](SQL_CMDShell "Navigates to the SQL_CMDShell Job section") – This job is designed to report if the `xp_cmdshell` stored procedure is enabled or disabled. Since `xp_cmdshell` allows a user to execute operating system commands when connected to the SQL or Azure SQL server, it can be used to launch malicious attacks. Microsoft recommends that the `xp_cmdshell` stored procedure be disabled.
* [SQL\_DatabaseSizing Job](SQL_DatabaseSizing "SQL_DatabaseSizing Job") – Provides details on database file sizes and overall database sizes
* [SQL\_LinkedServers Job](SQL_LinkedServers "SQL_LinkedServers Job") – Identifies Linked Servers or remote database servers on which the identified SQL and Azure SQL server can execute commands. Some of the common remote OLE DB providers include IBM DB2, Oracle, Access and Excel. Typically, linked servers are used to handle distributed queries in SQL and Azure SQL server.