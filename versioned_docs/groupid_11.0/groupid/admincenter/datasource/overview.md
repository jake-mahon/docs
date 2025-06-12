# Data Sources

You can create data sources in GroupID for the following providers, which include directories, databases, and files:

- MS Excel
- MS Access
- Oracle
- SQL Server
- Text/CSV (can only be used as a source in a Synchronize job)
- ODBC
- SCIM

## Where are Data Sources Used?

Data sources are used in the GroupID portal in the following ways:

- __As source and destination in Synchronize jobs__ - Synchronize jobs enable you to provision objects, deprovision objects, and sync data from one data source to another. See the [Synchronize](/versioned_docs/groupid_11.0/groupid/portal/synchronize/overview.md) topic.
- __As external data source for query-based searches__ - A Query Designer is used to perform targeted searches in the directory. While creating a search query, you can combine a data source with the directory to search for specific objects. See the [Query Based Advanced Search](/versioned_docs/groupid_11.0/groupid/portal/search/querysearch.md) topic.
- __As external data source for membership queries__ - A Query Designer enables you to specify membership queries for Smart Groups and Dynasties. When you specify a data source in the Query Designer, GroupID reads records from it and fetches similar objects from the directory to add to a group's membership. See the [Query Designer - Database tab](/versioned_docs/groupid_11.0/groupid/portal/group/querydesigner/database.md) topic.
- __As external data source for query-based searches__ - Another Query Designer is used to perform targeted searches in the directory. While creating a search query, you can combine a data source with the directory to search for specific objects. See the [Query Based Advanced Search](/versioned_docs/groupid_11.0/groupid/portal/search/querysearch.md) topic.

See Also

- [Create a Data Source](/versioned_docs/groupid_11.0/groupid/admincenter/datasource/create.md)
- [Manage a Data Source](/versioned_docs/groupid_11.0/groupid/admincenter/datasource/manage.md)
