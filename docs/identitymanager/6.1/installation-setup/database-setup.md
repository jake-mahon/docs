# Install the Database

The Usercube Database can be installed on the Server workstation or on a separate machine.

Please make sure that the
[database requirements](/docs/identitymanager/6.1/getting-started/system-requirements.md)
are met before going further.

## Steps

### 1. Install SQL server

Microsoft's extensive documentation can be used to get help
[installing a SQL Server 2016 or later](https://docs.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server).

### 2. Create the Usercube database

The recommended naming convention is `Usercube<Organization>`, where `<Organization>` is the name of
the organization targeted by this installation.

> **FAQ**:
> [How to create a database in SQL Server?](https://docs.microsoft.com/en-us/sql/relational-databases/databases/create-a-database?view=sql-server-ver15)

The database name is of no technical importance, but following the naming convention will make it
easier to read the guide.

### 3. Initialize the Usercube database

The database scheme can be initialized by running the `Usercube.sql` script (found in the
`SQL_<version>.zip` archive) on the newly created database.

Preferred methods include
[SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15)
and
[command line](https://docs.microsoft.com/en-us/sql/ssms/scripting/sqlcmd-use-the-utility?view=sql-server-ver15).

#### Example of procedure for SQL Server Management Studio 2019

- Open SQL Server Management Studio.
- Connect to your SQL Server instance.
- In the top left corner, select **File** > **Open** > **File**.
- Select the `Usercube.sql` file.
- Open the file. The file is now open in the main SQL Server Management Studio window.
- Locate the database name dropdown, next to the **Execute** button in the top left section of the
  screen.

![Execute Query](/img/versioned_docs/identitymanager_6.1/identitymanager/installation-guide/production-ready/database/execute_query.webp)

- From the dropdown, select the newly created database.
- Click **Execute**.

#### Example using the sqlcmd CLI

```
sqlcmd -S <ComputerName>\<InstanceName> -d Usercube<Organization_name> -i <Usercube.sql>
```

## What's Next?

The [next step](/docs/identitymanager/6.1/installation-setup/server-configuration.md)
will consist in:

- Setting up the Usercube Server as an IIS website.
- Creating a custom service account.
- Granting the necessary database permissions for this account.

It will also show how to
[test the Usercube Database connection](/docs/identitymanager/6.1/installation-setup/server-configuration.md).

# Connection to the Database

The connection of Usercube's server to the database is set through the `appsettings` top-level
`ConnectionString` and the `AzureCredentials` attributes:

| Name                              | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ConnectionString required         | **Type** String **Description** Identification token used to retrieve the connection information for the server to access Usercube's database in SQL Server. **Note:** must be compliant with [SQL Server connection string syntax](/docs/identitymanager/6.1/installation-setup/server-configuration.md). [See more information in the Installation Guide](/docs/identitymanager/6.1/installation-setup/server-configuration.md). **Example**`{     �     "ConnectionString": "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"   }`                                                                                                                                                                        |
| ConnectionStringGovernor required | **Type** String **Description** Identification token used to retrieve the connection information to SQL Server Resource Governor which is a feature used to manage SQL Server's workload and system resource consumption. **Info:** Resource Governor enables specifying limits on the amount of CPU, physical I/O, and memory that incoming application requests can use. **Note:** must be compliant with [SQL Server connection string syntax](/docs/identitymanager/6.1/installation-setup/server-configuration.md). **Note:** all tasks and jobs use this connection string, when specified. **Example**`{     �     "ConnectionStringGovernor": "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"   }` |
| AzureCredentials required         | **Type** [AzureCredentials](#azurecredentials) **Description** Settings used with the `ConnectionString` to access the database in SQL Server, hosted on Microsoft Entra ID (formerly Microsoft Azure AD).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## AzureCredentials

The database can be accessed one of two ways:

- either by specifying `User Id` and `password` keywords directly in the connection string:

  > For example:
  >
  >                                 ```
  >
  > "ConnectionString": "data source=.;Database=UsercubeContoso;User
  > Id=UsercubeServerContoso;Password=myPassword;Min Pool Size=10;encrypt=false;"
  >
  > ```
  >
  > ```

- or, to avoid exposing the `User Id` and `password` in a connection string sent through the
  network, by using the built-in Microsoft Entra ID authentication method:

  > For example:
  >
  >                                 ```
  >
  > "ConnectionString": "Server=tcp:<server-name>.database.windows.net,1433;Initial
  > Catalog=<database-name>;Persist Security
  > Info=False;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;"
  >
  > ```
  >
  > ```

[See Microsoft's documentation for more details about authentication methods](https://docs.microsoft.com/en-us/sql/relational-databases/security/choose-an-authentication-mode?view=sql-server-ver15)

> The following example authenticates with ClientId and ClientSecret:
>
>                         ```
>
>                             appsettings.json
>
> { ... "ConnectionString": "Server=tcp:.database.windows.net,1433;Initial Catalog=;Persist Security
> Info=False;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;",
>
> "AzureCredentials": { "ClientId": "", "AADTenantId": "", "ClientSecret": "" } }
>
> ```
>
> ```

> The following example authenticates with a pfx-stored public key certificate (password-protected
> pfx archive):
>
>                         ```
>
>                             appsettings.json
>
> { ... "ConnectionString": "Server=tcp:.database.windows.net,1433;Initial Catalog=;Persist Security
> Info=False;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;",
>
> "AzureCredentials": { "ClientId": "", "AADTenantId": "", "EncryptionCertificate": { "File": "",
> "Password": "" } } }
>
> ```
>
> ```

| Name                                                           | Details                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ClientId optional                                              | **Type** String **Description** Client ID obtained from Microsoft Entra ID when [registering Usercube as an application](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app).                                                                                                                                             |
| AADTenantId optional                                           | **Type** String **Description** Microsoft Entra ID's tenant identifier obtained when [registering Usercube as an application](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app).**Note:** remember to set Usercube as owner of the targeted database when registering Usercube as an application in Microsoft Entra ID. |
| ClientSecret optional                                          | **Type** String **Description** Microsoft Entra ID's client secret used by Usercube to authenticate.**Note:** used only if `EncryptionCertificate` is not specified.                                                                                                                                                                                     |
| EncryptionCertificate required, if ClientSecret is not defined | **Type** [`EncryptionCertificate`](/docs/identitymanager/6.1/installation-setup/server-configuration.md#encryptioncertificate) **Description** Location of the certificate used by Usercube to authenticate, instead of the `ClientSecret`.                                                                                                              |
