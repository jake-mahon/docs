---
title: databases sql usersroles overview
sidebar_label: overview
description: Solution guide for databases sql usersroles overview including implementation steps, configuration, and best practices.
---

# 1.Users and Roles Job Group

The 1.Users and Roles Job Group is designed to provide insight into user security, roles, and object
permissions to all SQL or Azure SQL server objects.

![Users and Roles Job Group](/img/product_docs/accessanalyzer/solutions/databases/sql/usersroles/sqljobgroup22.webp)

The jobs in the 1.Users and Roles Job Group are:

- [SQL_DatabasePrinciples Job](/docs/accessanalyzer/12.0/solutions/databases/sql/usersroles/sql-databaseprinciples.md) – This job group is designed to provide
  detailed information on database principals across all the targeted SQL or Azure SQL server
  instances
- [SQL_PasswordIssues Job](/docs/accessanalyzer/12.0/solutions/databases/sql/usersroles/sql-passwordissues.md) – This job group is designed to analyze the SQL or
  Azure SQL login passwords and evaluate if they comply with the prescribed password policies. In
  addition, it checks for weak passwords.
- [SQL_RoleMembers Job](/docs/accessanalyzer/12.0/solutions/databases/sql/usersroles/sql-rolemembers.md) – This job is designed to analyze and provide
  information about all the role members in each o the SQL or Azure SQL server role groups, both at
  the instance and database level, across all the targeted SQL or Azure SQL servers
- [SQL_ServerPrincipals Job](/docs/accessanalyzer/12.0/solutions/databases/sql/usersroles/sql-serverprincipals.md) – This job is designed to provide information
  about all the server principals on the instances across all the targeted SQL or Azure SQL servers
- [SQL_SQLLogins Job](/docs/accessanalyzer/12.0/solutions/databases/sql/usersroles/sql-sqllogins.md) – This job is designed to provide information on both
  successful and failed SQL or Azure SQL server logins across all the targeted SQL or Azure SQL
  servers
- [SQL_SysAdmins Job](/docs/accessanalyzer/12.0/solutions/databases/sql/usersroles/sql-sysadmins.md) – This job group is designed to provide insight into all the
  users who have SQL or Azure SQL server administration roles across all the targeted SQL or Azure
  SQL servers
