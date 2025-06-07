# Connection to the Database

The connection of Identity Manager's server to the database is set through the ```appsettings``` top-level ```ConnectionString``` and the ```AzureCredentials``` attributes:

| Name | Details |
| --- | --- |
| ConnectionString   required | __Type__    String   __Description__ Identification token used to retrieve the connection information for the server to access Identity Manager's database in SQL Server.   __Note:__ must be compliant with SQL Server connection string syntax. See the [Install the Server](/docs/product_docs/usercube/usercube/installation-guide/production-ready/server/index.md) topic for additional information. __Example__``` {     �     "ConnectionString": "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"   } ``` |
| ConnectionStringGovernor   required | __Type__    String   __Description__ Identification token used to retrieve the connection information to SQL Server Resource Governor which is a feature used to manage SQL Server's workload and system resource consumption.   __Info:__ Resource Governor enables specifying limits on the amount of CPU, physical I/O, and memory that incoming application requests can use.    __Note:__ must be compliant with SQL Server connection string syntax. See the [Install the Server](/docs/product_docs/usercube/usercube/installation-guide/production-ready/server/index.md) topic for additional information.   __Note:__ all tasks and jobs use this connection string, when specified. __Example__``` {     �     "ConnectionStringGovernor": "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"   } ``` |
| AzureCredentials   required | __Type__    Azure Credentials   __Description__ Settings used with the ```ConnectionString``` to access the database in SQL Server, hosted on Microsoft Entra ID (formerly Microsoft Azure AD). |

## AzureCredentials

The database can be accessed one of two ways:

- either by specifying ```User Id``` and ```password``` keywords directly in the connection string:

  > For example:
  >
  >                                 ```
  > "ConnectionString": "data source=.;Database=UsercubeContoso;User Id=UsercubeServerContoso;Password=myPassword;Min Pool Size=10;encrypt=false;"
  > ```
- or, to avoid exposing the ```User Id``` and ```password``` in a connection string sent through the network, by using the built-in Microsoft Entra ID authentication method:

  > For example:
  >
  >                                 ```
  > "ConnectionString": "Server=tcp:<server-name>.database.windows.net,1433;Initial Catalog=<database-name>;Persist Security Info=False;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;"
  > ```

[See Microsoft's documentation for more details about authentication methods](https://docs.microsoft.com/en-us/sql/relational-databases/security/choose-an-authentication-mode?view=sql-server-ver15)

> The following example authenticates with ClientId and ClientSecret:
>
>                         ```
>
>                             appsettings.json
>
> {
>   ...
>   "ConnectionString": "Server=tcp:.database.windows.net,1433;Initial Catalog=;Persist Security Info=False;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;",
>
>   "AzureCredentials": {
>     "ClientId": "",
>     "AADTenantId": "",
>     "ClientSecret": ""
>   }
> }
> ```

> The following example authenticates with a pfx-stored public key certificate (password-protected pfx archive):
>
>                         ```
>
>                             appsettings.json
>
> {
>   ...
>   "ConnectionString": "Server=tcp:.database.windows.net,1433;Initial Catalog=;Persist Security Info=False;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;",
>
>   "AzureCredentials": {
>     "ClientId": "",
>     "AADTenantId": "",
>     "EncryptionCertificate": {
>       "File": "",
>       "Password": ""
>     }
>   }
> }
> ```

| Name | Details |
| --- | --- |
| ClientId   optional | __Type__    String   __Description__ Client ID obtained from Microsoft Entra ID when [registering ](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app)Identity Manager as an application. |
| AADTenantId   optional | __Type__    String   __Description__ Microsoft Entra ID's tenant identifier obtained when [registering ](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app)Identity Manager as an application.  __Note:__ remember to set Identity Manager as owner of the targeted database when registering Identity Manager as an application in Microsoft Entra ID. |
| ClientSecret   optional | __Type__    String   __Description__ Microsoft Entra ID's client secret used by Identity Manager to authenticate.__Note:__ used only if ```EncryptionCertificate``` is not specified. |
| EncryptionCertificate    required, if ClientSecret is not defined | __Type__    Encryption Certificate   __Description__ Location of the certificate used by Identity Manager to authenticate, instead of the ```ClientSecret```. |
