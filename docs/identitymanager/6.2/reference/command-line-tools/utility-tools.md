# Usercube-Anonymize

This tool anonymizes data based on a certain knowledge of the database and the data structure.

## Overview

Anonymizing data helps unlock situations where it is necessary to send data to varied teams while
guaranteeing the privacy of the data owners.

> For example, it can be necessary to transmit data to an integration team that needs to set up
> tests or a development environment to work on the applicative configuration. For example, users
> sometimes need to send data to Identity Manager's support team to reproduce a bug and get it
> corrected.

## Technical Principles

Anonymizing can be performed on data:

- from a CSV file, with the output written to a new CSV file;
- directly inside a SQL database, overwriting existing data with the anonymized data.

  In this case, the plain data is lost. So make sure to work on a copy of the original database.

Several types of data can be anonymized, according to distinct substitution methods that are
deterministic and non-reversible:

- strings have each alphabetical character substituted for another alphabetical character;

  > For example, `John Doe` becomes `Xert Okl`.

  Diacritical characters are replaced by a non-diacritical equivalent.

- numbers have each digit substituted for another digit;

  > For example, `54689` becomes `32016`.

- emails have the username anonymized, while leaving the domain name as is;

  > For example, `johndoe@contoso.com` becomes `xertoekl@contoso.com`.

- Active Directory's RDN properties (Relative Distinguished Names), in the _attribute=value_ format,
  are anonymized via the string method on the value, leaving the attribute as is.

  > For example, `CN=John Doe` becomes `CN=Xert Okl`.

## Examples

### Anonymizing a CSV file

The following example anonymizes the `first_name`, `last_name`, `email` and `phone` column of the
following CSV file:

```

id,first_name,last_name,email,gender,phone
1,Darrin,Crumpe,dcrumpe0@nifty.com,Male,2666420820
2,Lyon,Boddam,lboddam1@eepurl.com,Male,5927617041
3,Roxana,Prose,rprose2@statcounter.com,Female,5134883113
4,Vladimir,Grisedale,vgrisedale3@blogtalkradio.com,Male,1338476916
5,Jaquith,Pendrich,jpendrich4@merriam-webster.com,Female,1894520819
6,Art,Sweatland,asweatland5@boston.com,Male,5066492715
7,Lynelle,Klammt,lklammt6@stumbleupon.com,Female,5653774981
8,Chicky,Blatherwick,cblatherwick7@walmart.com,Male,4095068397
9,Delilah,Kauscher,dkauscher8@de.vu,Female,9324858513
10,Estelle,Melmeth,emelmeth9@dot.gov,Female,2176715812

```

The following command outputs the anonymized data in STDOUT.

```

./identitymanager-Anonymize.exe -n C:/Projects/identitymanager/Documentation/exampleSources/Anonymizer/users.csv -s "," --columns first_name,last_name,mail:email,number:phone

```

The output is:

```

id,first_name,last_name,email,gender,phone
1,Afccrp,Icqesl,aicqesl0@nifty.com,Male,6111065265
2,Mdhp,Qhaafe,mqhaafe1@eepurl.com,Male,4665125502
3,Chlfpf,Schnl,cschnl2@statcounter.com,Female,4230223223
4,Imfarerc,Ocrnlafml,iocrnlafml3@blogtalkradio.com,Male,2332051621
5,Jfkqrfg,Slpacrig,jslpacrig4@merriam-webster.com,Female,2260465226
6,Fcf,Nalffmfpa,fnalffmfpa5@boston.com,Male,4511066524
7,Mdplmml,Bmfeef,mbmfeef6@stumbleupon.com,Female,4143550622
8,Igribd,Qmffglcarib,iqmffglcarib7@walmart.com,Male,0564512365
9,Almrmfg,Bfqniglc,abfqniglc8@de.vu,Female,6360242423
10,Lnflmml,Elmelfg,lelmelfg9@dot.gov,Female,6251524226

```

### Anonymizing a SQL Server table

The following example overwrites the `UR_Resources` table of Identity Manager's database with
anonymized data for the `C3`, `C8`, `CA`, `CB`, `CC` and `CD` columns for all resources whose `Type`
is `17`.

```

.\Usercube-Anonymize.exe --connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" --table UR_Resources --columns "number:C3,C8,number:CA,mail:CB,number:CC,number:CD" --select-query "select * FROM UR_Resources WHERE Type = 17"

```

## Arguments

| Argument Name                         | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --columns required                    | **Type** Strings **Description** Columns from the CSV or SQL database that need anonymizing. **Usage** The value is a string sequence in the form `type:columname`, separated by a coma `,`, where `type` is used to choose the anonymize algorithm from among the following formats: `string` (default value); `mail`; `number`; `rdn`, and where `columnname` is the actual name, not case-sensitive, of the column to anonymize.                                                                                                                                                                                  |
| --connection-string optional          | **Type** String **Description** Connection string to the SQL Server database to be anonymized. **Note:** required when anonymizing a database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --csv-separator (-s) default value: ; | **Type** String **Description** Separator of the input CSV file, provided between simple quotes. **Note:** used only when anonymizing a CSV file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --entry-file (-n) optional            | **Type** String **Description** Path to the input CSV file to anonymize. **Note:** required when anonymizing a CSV file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --no-transaction optional             | **Type** No Value **Description** Disables the SQL transaction for the request made by the anonymizing tool to the target SQL Server database. **Warning:** NETWRIX recommends using this option only when using transactions leads to a failure (exceeded RAM usage, exceeded CPU usage), because it could corrupt the data from the database. Make sure to prepare a backup of the database before using this option. **Note:** used only when anonymizing a database.                                                                                                                                             |
| --output (-o) default value: STDOUT   | **Type** String **Description** Path of the output CSV file to write the anonymized data. **Note:** used only when anonymizing a CSV file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --select-query (-q) optional          | **Type** String **Description** SQL query to filter the rows to be anonymized. **Note:** used only when anonymizing a database, and useful only when the query includes a "WHERE" condition, otherwise the `--table` and `--columns` arguments are enough. **Usage** The table targeted by the query must be on the table specified in `--table`. **Examples** `SELECT Id, name, firstName FROM Resources WHERE resourceType = 'Person'` is a query with a simple condition. `SELECT * FROM Persons WHERE resourceType = 'Person' AND specialFlag = 'TopSecret'` selects all columns, and adds a specific condition. |
| --table (-t) optional                 | **Type** String **Description** Name of the table from the SQL Server database to be anonymized. **Note:** required when anonymizing a database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

# Usercube-Check-ExpressionsConsistency

This tool is used to check the C# expressions consistency.

## Examples

The following example checks the C# expressions compatibility with Identity Manager.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
.\Usercube-Check-ExpressionsConsistency.exe --database-connection-string "data source=.;Database=UsercubeV5demo;Integrated Security=SSPI;Min Pool Size=10;Encrypt=false" --output-path "C:\UsercubeDemo\Dump"
```

In case errors are found they will be displayed as:

```
In Custom/User/Directory User Connector.xml(12), Method "System.Linq.Enumerable.MaxBy" cannot be called on entities.
```

## Arguments

| Argument Name                         | Type   | Description                                                                                       |
| ------------------------------------- | ------ | ------------------------------------------------------------------------------------------------- |
| --database-connection-string required | String | SQL database connection string.                                                                   |
| --output-path                         | String | Full path of the folder in which the file containing expression compilation errors will be saved. |

# Usercube-Compute-CorrelationKeys

This tool is used to compute the values of all correlation keys.

## Examples

The following example computes the correlation keys of the database defined by the connection
string, for all entity types.

```

./identitymanager-Compute-CorrelationKeys.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" -a

```

## Arguments

| Argument Name                         | Details                                                                                                                                                                                                               |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --batch-size (-q) default value: 5000 | **Type** Int32 **Description** Batch size for queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching).                                                         |
|                                       |                                                                                                                                                                                                                       |
| ---                                   | ---                                                                                                                                                                                                                   |
| --database-connection-string required | **Type** String **Description** Connection string of the database.                                                                                                                                                    |
|                                       |                                                                                                                                                                                                                       |
| ---                                   | ---                                                                                                                                                                                                                   |
| --all-entityType (-a) optional        | **Type** No Value **Description** Applies the tool to all entity types.                                                                                                                                               |
| --batch-size (-q) default value: 5000 | **Type** Int32 **Description** Batch size for queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching).                                                         |
| --dirty optional                      | **Type** No Value **Description** Applies the tool incrementally by applying it only to resources marked as dirty, i.e. recently modified.                                                                            |
| --entitytype-list optional            | **Type** String List **Description** List of entity types that the tool is to be applied to. **Note:** required when `--all-entityType` is not specified.                                                             |
| --resource-identity-property optional | **Type** String **Description** Property used to override the resource identity property set in [SelectUserByIdentityQueryHandler](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md). |
|                                       |                                                                                                                                                                                                                       |
| ---                                   | ---                                                                                                                                                                                                                   |
| --log-level optional                  | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                     |

# Usercube-Configuration-Transform

This tool applies a series of transformations specified in a JSON file, on the content of a given
directory.

## Example

The following example searches all occurrences of `Directory_User` in the files inside
`C:/UsercubeDemo/Conf` whose names:

- contain `guest` to replace all occurrences with `Directory_Guest`;
- contain `bot` to replace all occurrences with `Directory_Bot`.

The resulting files are saved in `C:/UsercubeDemo/ConfTransformed`.

```
./identitymanager-Configuration-Transform.exe --input "C:/UsercubeDemo/Conf" --output "C:/UsercubeDemo/ConfTransformed" --transformation-file "C:/UsercubeDemo/transformations.json"
```

transformations.json

```
{
    "*guest*": {
        "Directory_User": "Directory_Guest"
    },
    "*bot*": {
        "Directory_User": "Directory_Bot"
    }
}
```

## Arguments

| Argument Name                  | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --input required               | **Type** String **Description** Path of the directory on which the transformations are to be applied.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --transformation-file required | **Type** String **Description** Path of the JSON file that contains the transformations to be applied. The first half of the following JSON transformation file intends to search all files in the input directory whose names are `filename` (case-insensitively). In those files, any occurrence of `ToBeReplaced` (case-sensitively) is replaced with `Replacement`. `\{    "filename": \{    "ToBeReplaced": "Replacement"    \},    "partialfilename*": \{    "ToBeReplaced2": "Replacement2"    \}   \}` **Note:** instead of a specific file name, Identity Manager can search for files whose names contain a specific string, using the character `*`. |
|                                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---                            | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output required              | **Type** String **Description** Path of the folder where the result will be saved.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

# Usercube-Create-DatabaseViews

Generates entity model SQL views in the Identity Manager database. All views are prefixed by `zz_`.
This tool deletes all views starting by `zz_` and creates views from the entity model described in
the running configuration.

For every **EntityType**, a matching SQL view is created from the UR_Resource table.

## Example

The following example allows the user to connect to Identity Manager server at
`http://usercube.contoso.com`, using the ClientId `Job` and Secret `secret`, to generate views for
Identity Manager's database.

```
./identitymanager-Create-DatabaseViews.exe --api-secret secret --api-client-id Job --api-url "http://usercube.contoso.com" --log-level Debug
```

## Arguments

| Argument Name                                   | Details                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --progress-use-database optional                | **Type** String **Description** Update progress in the SQL database.                                                                                                                                                                                                                                                                  |
| --progress-use-database-child-instance optional | **Type** String **Description** Initiate child task instance.                                                                                                                                                                                                                                                                         |
| --progress-use-api optional                     | **Type** String **Description** Update progress with the API.                                                                                                                                                                                                                                                                         |
|                                                 |                                                                                                                                                                                                                                                                                                                                       |
| ---                                             | ---                                                                                                                                                                                                                                                                                                                                   |
| --api-client-id required                        | **Type** String **Description** Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions.    |
| --api-secret required                           | **Type** String **Description** Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
| --api-url required                              | **Type** String **Description** URL of Identity Manager server.                                                                                                                                                                                                                                                                       |
|                                                 |                                                                                                                                                                                                                                                                                                                                       |
| ---                                             | ---                                                                                                                                                                                                                                                                                                                                   |
| --log-level optional                            | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                                                                                                                                     |

You can explore created views in the Identity Manager database's Views folder in SQL Server
Management Studio

![SSMS Views](/img/product_docs/identitymanager/identitymanager/integration-guide/executables/references/create-databaseviews/identitymanager-create-databaseviews_ssms.webp)

# Usercube-CSV-Transform

## Examples

### Define a primary key

Consider the file `C:/UsercubeContoso/Sources/hr_example.csv` with the following headers line:

`Login,Company,Email,FirstName,LastName`

To avoid having too much duplicated information on each line in a CSV file, we need to define a
primary key for the file which will allow the pooling of common information. We choose to
concatenate the values of the columns `Login` and `Company ` with a `-` as separator in an `Id`
column, which will be defined as key for our file.

`--input-file C:/UsercubeContoso/Sources/hr_example.csv --columns-concat "Login Company - ID"`--columns-key
ID```

### Handle multi-valued columns in a generated file

Consider the file `C:/UsercubeContoso/Sources/hr_example123.csv` with the following headers line
separated by a `;`:

`GroupAzure;Members;GroupSharePoint;Members`

This file is automatically generated by a script and the suffix (`123`here) is incremented on each
generation. Thus, we need to use a regex to avoid changing the command line for each new generated
file.

`--input-file C:/UsercubeContoso/Sources/hr_example(.*?).csv --regex --separator ;`

The file contains two headers with the same name, each related to one kind of group. Thus, we need
to rename one of these headers.

`--input-file C:/UsercubeContoso/Sources/hr_example(.*?).csv --regex --separator ; --headers-edit-name "Members MembersAzure"`

In this example, we will consider that the two Members columns contain all members for each group
separated by a `,` for the first Members column, and by a `*` for the second one. We need to
transform these columns in Identity Manager's format for multi-valued attributes.

`--input-file C:/UsercubeContoso/Sources/hr_example(.*?).csv --regex --separator ; --headers-edit-name "Members MembersAzure" --columns-multivalued "MembersAzure ," "Members *"`

## Arguments

| Argument Name                                        | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| --input-path required                                | **Type** String **Description** Specifies the CSV file to modify. **Example** Define `C:/UsercubeContoso/Sources/hr_example.csv` as input file: `--input-file C:/UsercubeContoso/Sources/hr_example.csv`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-path optional                               | **Type** String **Description** Specifies the output path, which is the exports' output path by default. **Example** Define `C:/UsercubeContoso/Test` as output folder: `--output-path "C:/UsercubeContoso/Test"`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --new-name optional, required **if** --regex is true | **Type** String **Description** Specifies the new name for the output file. **Example** Define new name `hr_transformed.csv`: `--new-name hr_transformed.csv`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --input-file-encoding default value: UTF-8           | **Type** String **Description** Encoding of the input file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings). **Example** `--input-file-encoding UTF-16`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --headers-edit-index optional                        | **Type** String List **Description** Specifies the headers to edit by index, which is particularly useful to rename empty headers. Each member of the list is written like `index newHeader`. **Example** Add or replace header at index 1 with `ExampleHeader` : `--headers-edit-index "1 ExampleHeader"`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --headers-edit-name optional                         | **Type** String List **Description** Specifies the headers to rename (first found) with the new name. Each member of the list is written like `currentHeader newHeader`. **Example** Rename headers `CompanyId` into `Company` and `int32_1` into `int32`: `--headers-edit-name "CompanyId Company" "int32_1 int32"`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --headers-remove-index optional                      | **Type** Integer **Description** Specifies the headers to remove by index. This command can be used to remove the second occurrence of a duplicate header by specifying its index. **Example** Remove header located at index 5: `--headers-remove-index 5`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --headers-remove-name optional                       | **Type** String List **Description** Specifies the headers to remove by name (first found). **Example** Remove first occurrences of headers `date1` and `bool1`: `--headers-remove-name date1 bool1`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --new-headers optional                               | **Type** String List **Description** **ONLY** for files without headers, specifies the new headers **except** the ones created by the concatenation of columns. **Example** Defines `header1` and `header2` as headers of the file: `--new-headers header1 header2`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --columns-concat optional                            | **Type** String List **Description** Specifies the columns to concatenate and how. Each member of the list is written like `column1Header column2Header`. If you want to specify characters between the column values, you can write `column1Header column2Header charactersBetween`. This operation creates a new column where it puts the result of the concatenation. This column header is the concatenation of the headers, but you can change it by writing the member like `column1Header column2Header charactersBetween newColumnHeader`. **Example** Concatenate columns: - `Company` and `Employee` with a `-` between them. `ID` will be the new column header. - `guid1` and `bytes1` with `_` between them. - `int32_2` and `int64_2` with nothing in between. `--columns-concat "Company Employee - ID" "guid1 bytes1 _" "int32_2 int64_2"` . |
| --columns-multivalued optional                       | **Type** String List **Description** Specifies the columns with multi-valued values not splittable with breaks. Each member of the list is written like `columnHeader separator`. **Example** Handle columns `multivalued1`, using separator `,`, and `multivalued2`, using separator `*`: `--columns-multivalued "multivalued1 ," "multivalued2 *"`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --columns-date optional                              | **Type** String List **Description** Specifies the columns with date values, and their date format, to format them into Identity Manager's format. Each member of the list is written like `columnHeader dateFormat`. **Example** Format date columns `date1` and `date2`, using the format `yyyyddMMHHmmss`: `--columns-date "date1 yyyyddMMHHmmss" "date2 yyyyddMMHHmmss"`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --columns-bool optional                              | **Type** String List **Description** Specifies the columns with Boolean values to convert them into Identity Manager's format. **Example** Format Boolean columns `bool1` and `bool2`: `--columns-bool bool1 bool2`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --columns-int32 optional                             | **Type** String List **Description** Specifies the columns with Int32 values to convert them into Identity Manager's format. **Example** Format Int32 columns `int32_1` and `int32_2 `: `--columns-int32 int32_1 int32_2`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --columns-int64 optional                             | **Type** String List **Description** Specifies the columns with Int64 values to convert them into Identity Manager's format. **Example** Format Int64 columns `int64_1`and `int64_2`: `--columns-int64 int64_1 int64_2`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --columns-guid optional                              | **Type** String List **Description** Specifies the columns with Guid values to convert them into Identity Manager's format. **Example** Format Guid columns `guid1`and `guid2`: `--columns-guid guid1 guid2`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --columns-bytes optional                             | **Type** String List **Description** Specifies the columns with Bytes values to convert them into Identity Manager's format. **Example** Format Bytes columns `bytes1` and `bytes2`: `--columns-bytes bytes1 bytes2`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --columns-key optional                               | **Type** String List **Description** Specifies the columns key to delete duplicates (the first line found is the one we keep). A column created by this tool can be specified as a key column through this argument, like the columns created by the `--columns-concat` for example. **Example** Define columns `RawId` and `ID` as keys: `--columns-key RawId ID`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                  | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --regex optional                                     | **Type** No Value **Description** The file name is a regex so we find the last generated corresponding file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --separator optional                                 | **Type** String **Description** Defines the separator if different than `,`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

# Usercube-Decrypt-File

In Identity Manager, files are encrypted by default. This tool decrypts an input file to save it
into an output file or an OutPutConsole that can be used in Powershell scripts or programs.

## Examples

### Result loaded in OutPutConsole (PowerShell Script)

The following example, used in a Powershell script, saves in the variable `decryptFile` the string
obtained by decrypting the files specified by the `ordersFile` variable. The decryption is made
using the agent side certificate defined in the agent's `appsettings.json`.

```

$decryptFile = & ./identitymanager-Decrypt-File.exe --files $ordersFile

```

## Arguments

| Argument Name                        | Details                                                                                                                                                                                                                    |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --files (-f) required                | **Type** String **Description** List of all the files to decrypt.                                                                                                                                                          |
| --encoding (-e) default value: UTF-8 | **Type** String **Description** Encoding used for any encryption/decryption. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings). |
| --output-path (-o) optional          | **Type** String **Description** Output path to save all decrypted files. **Note:** used only when the result is saved in a file.                                                                                           |
|                                      |                                                                                                                                                                                                                            |
| ---                                  | ---                                                                                                                                                                                                                        |
| --log-level optional                 | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                          |

# Usercube-EasyVistaTicket-UpdateFulfillmentState

The use of this executable supposes a previous use of the `Usercube-Fulfill-ToEasyVistaTicket`
executable.

`Usercube-Fulfill-ToEasyVistaTicket` creates tickets in an EasyVista instance:
`Usercube-EasyVistaTicket-UpdateFulfillmentState` sets the fulfillment state of the corresponding
assigned resource types in Identity Manager for tickets that are closed (`Executed`) or canceled
(`Error`).

## Examples

### Connector specified

When specifying `--connector`, there is no need to specify `--resource-types`:

`--connector "3" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

But the identifier can be also given instead of the id:

`--connector "EasyVista" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

In this example, for all resource types that have a target entity type of the connector `EasyVista`,
we set the fulfillment state of the corresponding assigned resource types.

### Resource types specified

When specifying `--resource-types`, there is no need to specify `--connector`:

`--resource-types "40" "41" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

But the identifiers can be also given instead of the id:

`--resource-types "EasyVista_NominativeUser" "EasyVista_Administrator" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret"--url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

In this example, for the resource types `EasyVista_NominativeUser` and `EasyVista_Administrator`, we
set the fulfillment state of the corresponding assigned resource types.

## Arguments

| Argument Name                                        | Details                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --api-client-id required                             | **Type** String **Description** Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an[ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions.     |
| --api-secret required                                | **Type** String **Description** Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
| --api-url required                                   | **Type** String **Description** URL of Identity Manager server.                                                                                                                                                                                                                                                                       |
|                                                      |                                                                                                                                                                                                                                                                                                                                       |
| ---                                                  | ---                                                                                                                                                                                                                                                                                                                                   |
| --url required                                       | **Type** String **Description** EasyVista API Endpoint URL.                                                                                                                                                                                                                                                                           |
| --account required                                   | **Type** String **Description** EasyVista account.                                                                                                                                                                                                                                                                                    |
| --login required                                     | **Type** String **Description** Path of the file used for complete synchronization.                                                                                                                                                                                                                                                   |
| --password required                                  | **Type** String **Description** EasyVista server password.                                                                                                                                                                                                                                                                            |
|                                                      |                                                                                                                                                                                                                                                                                                                                       |
| ---                                                  | ---                                                                                                                                                                                                                                                                                                                                   |
| --connector required if --resource-typesis not given | **Type** String **Description** Id or Identifier of the resource types' connector we want to update the fulfillment state.                                                                                                                                                                                                            |
| --resource-types required if --connectoris not given | **Type** String List **Description** Id or Identifier of the resource types we want to update the fulfillment state.                                                                                                                                                                                                                  |
| --certificate-identifier optional                    | **Type** String **Description** Unique key used to retrieve the certificate in Azure Key Vault.                                                                                                                                                                                                                                       |
| --vault optional                                     | **Type** String **Description** Vault uri.                                                                                                                                                                                                                                                                                            |
| --vault-connection-string optional                   | **Type** String **Description** Connection string to connect to Azure Key Vault.                                                                                                                                                                                                                                                      |
| --batch-size default value: 1000                     | **Type** Int32 **Description** Number of provisioning orders to wait between each progress report.                                                                                                                                                                                                                                    |
| --task-instance-id optional                          | **Type** String **Description** Id of the task instance which have launch the exe in a job context (for log purposes).                                                                                                                                                                                                                |

# Usercube-Encrypt-File

In Identity Manager, files are encrypted by default. This tool encrypts an input file or the
InputConsole of a Powershell program or file to save it as an encrypted output file. This task
cannot be configured in the configuration.

## Examples

### Launch the tools with input console (powershell script)

The following example, used in a Powershell script, decrypts the file(s) specified by the
`csvResult` variable and saves the result in the location specified in `resultsFile`. The encryption
is made using the certificate's thumbprint, store location and store name.

```

$csvResult | & ./identitymanager-Encrypt-File.exe --file-cert-thumbprint $certificateThumbprint --file-cert-store-location $certificateStoreLocation --file-cert-store-name $certificateStoreName --output-path $resultsFile

```

## Arguments

| Argument Name                       | Details                                                                                                                           |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| --files (-f) optional               | **Type** String **Description** List of all the files to encrypt. **Note:** required when the entry is made of files.             |
| --output-path (-o) optional         | **Type** String **Description** Output path to save the encrypted files or input console.                                         |
|                                     |                                                                                                                                   |
| ---                                 | ---                                                                                                                               |
| --file-cert-thumbprint optional     | **Type** String **Description** Thumbprint of the certificate when the certificate is in the store.                               |
| --file-cert-dn optional             | **Type** String **Description** Subject Distinguished Name of the certificate when the certificate is in the store.               |
| --file-cert-store-location optional | **Type** String **Description** Store location of the certificate when the certificate is in the store.                           |
| --file-cert-store-name optional     | **Type** String **Description** Store name of the certificate when the certificate is in the store.                               |
| --file-cert-file optional           | **Type** String **Description** File path of the certificate when the certificate is in a PFX file.                               |
| --file-cert-password optional       | **Type** String **Description** Password of the certificate when the certificate is in a PFX file.                                |
|                                     |                                                                                                                                   |
| ---                                 | ---                                                                                                                               |
| --log-level optional                | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`. |

# Usercube-Export-Bacpac

This tool exports the database to a bacpac file, as a backup.

## Examples

The following example generates to \<C:/UsercubeDemo\> a bacpac file from the Identity Manager
database with the given connection string and based on the bacpac template from the SQL folder.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
./identitymanager-Export-Bacpac.exe --database "<Usercube>" -s "<data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;>" --bacpac-path 0 --template-bacpac-path "<C:/UsercubeDemo/SQL>"

```

## Arguments

The list of arguments:

| Argument Name                                     | Type     | Description                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --database-connection-string (-s) required        | String   | Connection string of the database.                                                                                                                                                                                                                                                                                    |
| --database required                               | String   | Name of the database.                                                                                                                                                                                                                                                                                                 |
| --template-bacpac-path required                   | String   | Path of the empty bacpac file or dacpac file containing the database schema. The database export tool includes a .dacpac file, \<Usercube.SqlServer.dacpac\>, in the Runtime folder and should be used as the value for this parameter. It can be generated manually by exporting an empty Identity Manager database. |
| --temp-bacpac-path optional                       | String   | Path of the temporary folder storing the database's data.                                                                                                                                                                                                                                                             |
| --bacpac-path required                            | String   | Path of the generated bacpac file.                                                                                                                                                                                                                                                                                    |
| --without-history default value: false            | Boolean  | True to exclude history data.                                                                                                                                                                                                                                                                                         |
| --without-job-instances default value: false      | Boolean  | True to exclude job and task instances.                                                                                                                                                                                                                                                                               |
| --without-workflow-instances default value: false | Boolean  | True to exclude workflow instances.                                                                                                                                                                                                                                                                                   |
| --without-campaign-instances default value: false | Boolean  | True to exclude access certification campaign items.                                                                                                                                                                                                                                                                  |
| --without-temp default value: false               | Boolean  | True to exclude the data of temporary tables.                                                                                                                                                                                                                                                                         |
| --without-all default value: false                | Boolean  | True to exclude history data, job and task instances, workflow instances and access certification campaign items. _Remember,_ this option represents the usual use-case.                                                                                                                                              |
| --log-level optional                              | LogLevel | Level of log information among: Verbose; Debug; Information; Warning; Error; Fatal.                                                                                                                                                                                                                                   |

# Usercube-Export-Csv

## Examples

### Exporting a file respecting the default parameters

Consider the file `C:/UsercubeContoso/Sources/hr_example.csv` with `,` as separator and `UTF8`
encoding, it can be exported with the command:

`--raw-files-path C:/UsercubeContoso/Sources/hr_example.csv --ignore-cookies --connection-identifier HREXAMPLE --output-path C:/UsercubeContoso/Temp/ExportOutput`

The output file will be located in `C:/UsercubeContoso/Temp/ExportOutput/HREXAMPLE.csv` and the
content will be a copy of `hr_example.csv`'s one and an `UTF8` encoding.

### Define a separator

Consider the file `C:/UsercubeContoso/Sources/hr_example.csv` with `;` as separator.

As `,` is considered to be the default separator, we must set it:

`--raw-files-path C:/UsercubeContoso/Sources/hr_example.csv --ignore-cookies --connection-identifier HREXAMPLE --output-path C:/UsercubeContoso/Temp/ExportOutput --separator ;`

The result's content will be the same but with `,` as separator.

### Use a regex file name

Consider that you deal with a generated file that follows the regex:
`C:/UsercubeContoso/Sources/hr_example(.*?).csv`, for example
`C:/UsercubeContoso/Sources/hr_example5fH8g1.csv`. If several files match with the regex, the
executable uses the last one that was generated.

You can put your regex and precise that it is one with the `--regex` argument:

`--raw-files-path C:/UsercubeContoso/Sources/hr_example(.*?).csv --ignore-cookies --connection-identifier HREXAMPLE --output-path C:/UsercubeContoso/Temp/ExportOutput --regex`

## Use the Path Duality and the Not-Launch-Export System

In a larger context, the export might be used for complete or incremental synchronization. That is
why it has two paths: `--raw-files-path` for complete synchronizations, `--path-incremental` for
incremental ones.

In the export's scope, it only means one thing, what path must be used depends on
`--ignore-cookies`: its presence meaning that we are in a complete synchronization context and we
use `--raw-files-path`; its absence that we are in an incremental one and we use
`--path-incremental`.

It means that if the user gives `--ignore-cookies` and not `--raw-files-path`, or if they give
neither `--ignore-cookies` nor `--path-incremental`, the export will not be launched to prevent any
problem (complete data for an incremental synchronization for example). The `--force-complete`
argument bypasses this security: in the product, it is used for the initialization job, where we
want to perform a complete synchronization, even for CSV connections with only an incremental path.

## Arguments

| Argument Name                    | Details                                                                                                                       |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| --connection-identifier optional | **Type** String **Description** Connector's connection identifier. The output file will have this identifier as name.         |
| --output-path required           | **Type** String **Description** Output path for the files generated by the export.                                            |
|                                  |                                                                                                                               |
| ---                              | ---                                                                                                                           |
| --ignore-cookies optional        | **Type** No Value **Description** Specifies the synchronization mode, its presence meaning complete, its absence incremental. |
|                                  |                                                                                                                               |
| ---                              | ---                                                                                                                           |
| --regex optional                 | **Type** No Value **Description** The file name is a regex so we find the last generated corresponding file.                  |
| --separator optional             | **Type** String **Description** Defines the separator if different than `,`.                                                  |

# Usercube-Export-EasyVista

This tool is made to export entities from an EasyVista instance to CSV files.

The hardcoded entities named `Employees` can be fetched directly using the URL of the EasyVista
instance. To export other entities, you have to create a view of your data on EasyVista to be able
to fetch an `internalquery`.

## Examples

### Exporting entities by specifying attributes

It is possible to export data by specifying the attribute names to fetch, for each exported table:

```

--url "https://test-fr-vp-01.easyvista-training.com" --login "usercube" --password "usercube2021" --connection-identifier "ConnectionEasyVista" --attributes "table1=[NAME_FR, LOGIN]|table2=[NAME_EN, PROFIL]|Employee=[EMPLOYEE_ID]"  --output-path "C:/EasyVistaExport" --account "{account}" --cookie-path "C:/EasyVistaExport" --log-level Verbose --fetching-urls "HTTPS://test-fr-vp-01.easyvista-training.com/api/v1/50011/internalqueries?queryguid={3226F4FE-F3FC-4301-965A-32E546707BD0}&filterguid={9F3146C5-4EE0-4D1A-A4B9-8DC87A63C4E4}&viewguid={99E2223F-C1E0-4A14-87E8-C39C14325C03}" "HTTPS://test-fr-vp-01.easyvista-training.com/api/v1/50011/internalqueries?queryguid={57667FCD-134B-48A7-A188-CE700EF02C15}&filterguid={B4B3A15D-1DE2-41B5-91A7-A8E8343784E1}&viewguid={DB9C013B-28E0-45C8-A4C2-79E7D43C5421}" --entity-names "table1" "table2"

```

### Exporting entities using entities defined in configuration

It is also possible to export data by specifying the Identity Manager's server URL, so the export
tool automatically fetches the entity type mapping property names linked to the specified
connection:

```

--url "https://test-fr-vp-01.easyvista-training.com" --login "usercube" --password "usercube2021" --connection-identifier "ConnectionEasyVista" --output-path "C:/EasyVistaExport" --account "{account}" --cookie-path "C:/EasyVistaExport" --log-level Verbose --fetching-urls "HTTPS://test-fr-vp-01.easyvista-training.com/api/v1/50011/internalqueries?queryguid={3226F4FE-F3FC-4301-965A-32E546707BD0}&filterguid={9F3146C5-4EE0-4D1A-A4B9-8DC87A63C4E4}&viewguid={99E2223F-C1E0-4A14-87E8-C39C14325C03}" "HTTPS://test-fr-vp-01.easyvista-training.com/api/v1/50011/internalqueries?queryguid={57667FCD-134B-48A7-A188-CE700EF02C15}&filterguid={B4B3A15D-1DE2-41B5-91A7-A8E8343784E1}&viewguid={DB9C013B-28E0-45C8-A4C2-79E7D43C5421}" --entity-names "table1" "table2" --api-url "http://localhost:5000" --api-client-id Job  --api-secret secret

```

For each exported table, there is a resulting CSV file containing exported data.

The server has to be running.

## Arguments

| Argument Name                                         | Details                                                                                                                                                                                    |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| --attributes optional                                 | **Type** String list **Description** List of attributes to enrich the research. Format is: ```-at "Table1=[last_name, begin_of_contract, department_id, location_id]                       | Table2=[profile_id, e_mail]"``` |
| --fetching-urls required **if** --entity-names is set | **Type** String list **Description** The specific URLs to fetch data, corresponding to entity names. It must be the same length and have the same order as `--entity-names`.               |
| --entity-names required **if** --fetching-urls is set | **Type** String list **Description** The corresponding table names to fetch data, corresponding to fetching URLs. It must be the same length and have the same order as `--fetching-urls`. |
|                                                       |                                                                                                                                                                                            |
| ---                                                   | ---                                                                                                                                                                                        |
| --url required                                        | **Type** String **Description** EasyVista API Endpoint URL.                                                                                                                                |
| --account required                                    | **Type** String **Description** EasyVista account.                                                                                                                                         |
| --login required                                      | **Type** String **Description** Path of the file used for complete synchronization.                                                                                                        |
| --password required                                   | **Type** String **Description** EasyVista server password.                                                                                                                                 |

# Usercube-Export-Excel

## Examples

### Exporting a file respecting the default parameters

Consider the file `C:/UsercubeContoso/Sources/hr_example.xlsx` with `UTF8` encoding, it can be
exported using these command's arguments:

`--raw-files-path C:/UsercubeContoso/Sources/hr_example.xlsx --not-incremental --connection-identifier HREXAMPLE --output-path C:/UsercubeContoso/Temp/ExportOutput`

The output file(s) will be located in `C:/UsercubeContoso/Temp/ExportOutput/`. Their number
corresponds to the number of sheets in the XLSX file and they would be labeled: `HREXAMPLE_0.csv`,
`HREXAMPLE_1.csv`, ... `HREXAMPLE_n-1.csv` where n corresponds to the amount of spread sheets of the
XLSX file. The encoding is `UTF8` and the separator is `,`.

### Skipping some file's lines

The possibility to skip lines is made available using the `--lines-to-skip` argument:

`--raw-files-path C:/UsercubeContoso/Sources/hr_example.xlsx --not-incremental --connection-identifier HREXAMPLE --output-path C:/UsercubeContoso/Temp/ExportOutput --lines-to-skip 10`

As a consequence, the exported file would include the content of the XLSX file without the ten first
lines.

### Regex in file name

Considering a generated file following the regex: `C:/UsercubeContoso/Sources/hr_example(.*?).xlsx`,
for instance `C:/UsercubeContoso/Sources/hr_example5fH8g1.xlsx`, if several files match with the
regex, the executable would use the most recent one.

The regex can be included in the filename and would need to be precised using the `--is-regex`
argument:

`--raw-files-path C:/UsercubeContoso/Sources/hr_example(.*?).xlsx --not-incremental --connection-identifier HREXAMPLE --output-path C:/UsercubeContoso/Temp/ExportOutput --is-regex`

### Choosing value to trim

It's possible to precise characters to trim using the `--values-to-trim` argument:

`--raw-files-path C:/UsercubeContoso/Sources/hr_example.xlsx --not-incremental --connection-identifier HREXAMPLE --output-path C:/UsercubeContoso/Temp/ExportOutput --values-to-trim e`

The CSV output file will see every words beginning and ending by "e" (lower-case, this process is
case sensitive) removed of this letter.

### Ignoring particular sheets

The `--sheets-ignored` argument allows the user to specify for each sheet if it should be ignored
during the export. More precisely, a list of true or false arguments should be specified
respectively to the sheets. Let's say the `C:/UsercubeContoso/Sources/hr_example.xlsx` file
possesses three sheets, in order to export the first and the last ones the arguments would be:

`--raw-files-path C:/UsercubeContoso/Sources/hr_example.xlsx --not-incremental --connection-identifier HREXAMPLE --output-path C:/UsercubeContoso/Temp/ExportOutput --sheets-ignored false true true false`

Thus, two CSV files would be created corresponding to the the chosen ones: `HREXAMPLE_0.csv` and
`HREXAMPLE_3.csv`.

## Path Duality and the Not-Launch-Export System

The export executable might be used for a complete or an incremental synchronization. Thus, it
possesses two paths that could be precised - depending on the case - with the `--raw-files-path` for
complete synchronizations argument or the `--path-incremental` for incremental ones.

At the end of the day, the `--not-incremental` argument defines the export behavior: if present it
means a complete synchronization should be performed and the `--raw-files-path` argument must be
precised; if missing an incremental synchronization would be performed using `--path-incremental`.

It means that if the user provide the `--not-incremental` argument and no `--raw-files-path`, or if
the user doesn't provide `--not-incremental` nor `--path-incremental`, the export will not be
launched to prevent any issue (complete data for an incremental synchronization for instance). The
`--force-complete` argument bypasses this safeguard: during the initialization job for example,
where we want to perform a complete synchronization, even for Excel connections with only an
incremental path.

## Arguments

| Argument Name                    | Details                                                                                                                       |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| --not-incremental optional       | **Type** No Value **Description** Specifies the synchronization mode, its presence meaning complete, its absence incremental. |
| --is-regex optional              | **Type** No Value **Description** The file's name is a regex so we find the last generated corresponding file.                |
|                                  |                                                                                                                               |
| ---                              | ---                                                                                                                           |
| --connection-identifier optional | **Type** String **Description** Connector's connection identifier. The output file will have this identifier as name.         |
| --output-path required           | **Type** String **Description** Output path for the files generated by the export.                                            |

# Usercube-Export-Scim

This tool is made to export entries from a SCIM API to CSV files.

## Examples

### Exporting entities by specifying attributes

It is possible to export data by specifying the attribute names to fetch, for each exported table:

```

--server "https://scim-server.com" --connection-identifier "ConnectionSCIM" --output-path "C:/SCIMExport" --cookie-path "C:/SCIMExport" --log-level Verbose --login "usercube" --password "usercube2021" --filter-entities "Users|username eq \"john\";username name:givenName|familyName"

```

### Exporting entities using entities defined in configuration

It is also possible to export data by specifying the Identity Manager's server URL, so the export
tool automatically fetches the entity type mapping property names linked to the specified
connection:

```

--server "https://scim-server.com" --login "usercube" --password "usercube2021" --connection-identifier "ConnectionSCIM" --output-path "C:/SCIMExport" --cookie-path "C:/SCIMExport" --log-level Verbose --api-url "http://localhost:5000" --api-client-id Job  --api-secret secret

```

The server has to be running.

### Exporting entities with a token authentication

It is possible to export data by specifying the attribute names to fetch, for each exported table:

```

--server "https://scim-server.com" --connection-identifier "ConnectionSCIM" --output-path "C:/SCIMExport" --cookie-path "C:/SCIMExport" --log-level Verbose --oauth-token "MyToken" --filter-entities "Users|username eq \"john\";username name:givenName|familyName"

```

## Arguments

| Argument Name                    | Details                                                                                                                                                                                               |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --cookie-path required           | **Type** String **Description** Path of the cookie file for incremental export.                                                                                                                       |
| --filter-entities optional       | **Type** String **Description** List of the non group entities and corresponding attributes to export. Syntax: EntityNameInSCIM1                                                                      |
| --filter-entities-group optional | **Type** String **Description** Works as �filter-entities but for entities with members. Syntax: EntityNameInSCIM1                                                                                    |
| --attributes-in-filter optional  | **Type** No Value **Description** Specifies true if the server is not available and the entities and their attributes to export are given in the filter-entities and filter-entities-group arguments. |
|                                  |                                                                                                                                                                                                       |
| ---                              | ---                                                                                                                                                                                                   |
| --connection-identifier optional | **Type** String **Description** Connector's connection identifier. The output file will have this identifier as name.                                                                                 |
| --output-path required           | **Type** String **Description** Output path for the files generated by the export.                                                                                                                    |
|                                  |                                                                                                                                                                                                       |
| ---                              | ---                                                                                                                                                                                                   |
| --ignore-cookies optional        | **Type** No Value **Description** Specifies the synchronization mode, its presence meaning complete, its absence incremental.                                                                         |
|                                  |                                                                                                                                                                                                       |
| ---                              | ---                                                                                                                                                                                                   |
| --server required                | **Type** String **Description** URL of the SCIM endpoints of your application, not including the v2.                                                                                                  |
| --login optional                 | **Type** String **Description** Specifies the login of the account you may need.                                                                                                                      |
| --password optional              | **Type** String **Description** Specifies the password of the account you may need.                                                                                                                   |
| --application-id optional        | **Type** String **Description** Specifies the application connection login or the login of your application's id provider.                                                                            |
| --application-key optional       | **Type** String **Description** Specifies the application connection password or the password of your application's id provider.                                                                      |
| --oauth-url optional             | **Type** String **Description** The server's url when using OAuth2 authentication.                                                                                                                    |
| --oauth-token optional           | **Type** String **Description** Specifies the OAuth token to connect to the application.                                                                                                              |
| --scim-syntax optional           | **Type** Enum **Description** Specifies the syntax used for requests body. Has to be one of those values: Salesforce (default value) or CyberArk                                                      |

# Usercube-FillBankingDatabase

## Example

### Import the banking sources to the BankingSystem database.

The Banking demo application uses a database named `BankingSystem`. Once the database is created,
the tables should be created and the sources should be imported, otherwise the Banking demo
application will be empty.

Consider that the database's connection string is `"data source=.;Database=BankingSystem;"`, the
sources are located in the `C:/SDK/DemoApps/Sources` folder, and the `BankingSystemTables` script is
located in `C:/SDK/DemoApps/Banking`. We initialize the database to create its tables, and import
the sources.

`--connection-string "data source=.;Database=BankingSystem;" --sources-path C:/SDK/DemoApps/Sources --banking-sql-path C:/SDK/DemoApps/Banking`

## Arguments

| Argument Name                | Details                                                                                                                                                                                                                                   |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --banking-sql-path required  | **Type** String **Description** Specifies the path to the folder containing the `BankingSystemTables.sql` file. **Example** Set path to `C:/SDK/DemoApps/Banking`: `--connection-string "data source=.;Database=BankingSystem;"`.         |
| --connection-string required | **Type** String **Description** Specifies the connection string of the `BankingSystem` database. **Example** Set the connection string's data source to the local machine: `--connection-string "data source=.;Database=BankingSystem;"`. |
| --sources-path required      | **Type** String **Description** Specifies the path to the banking sources folder. **Example** Set path to `C:/SDK/DemoApps/Sources`: `--sources-path C:/SDK/DemoApps/Sources`.                                                            |

# Usercube-Fulfill-EasyVista

This executable creates, updates and archives employees in an EasyVista instance.

## Examples

### Connector specified

When specifying `--connector`, there is no need to specify `--resource-types`:

`--connector "3" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

But the identifier can be also given instead of the id:

`--connector "EasyVista" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

### Resource types specified

When specifying `--resource-types`, there is no need to specify `--connector`:

`--resource-types "40" "41" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

But the identifiers can be also given instead of the id:

`--resource-types "EasyVista_NominativeUser" "EasyVista_Administrator" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret"--url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

## Arguments

| Argument Name                                        | Details                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --api-client-id required                             | **Type** String **Description** Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions.    |
| --api-secret required                                | **Type** String **Description** Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
| --api-url required                                   | **Type** String **Description** URL of Identity Manager server.                                                                                                                                                                                                                                                                       |
|                                                      |                                                                                                                                                                                                                                                                                                                                       |
| ---                                                  | ---                                                                                                                                                                                                                                                                                                                                   |
| --url required                                       | **Type** String **Description** EasyVista API Endpoint URL.                                                                                                                                                                                                                                                                           |
| --account required                                   | **Type** String **Description** EasyVista account.                                                                                                                                                                                                                                                                                    |
| --login required                                     | **Type** String **Description** Path of the file used for complete synchronization.                                                                                                                                                                                                                                                   |
| --password required                                  | **Type** String **Description** EasyVista server password.                                                                                                                                                                                                                                                                            |
|                                                      |                                                                                                                                                                                                                                                                                                                                       |
| ---                                                  | ---                                                                                                                                                                                                                                                                                                                                   |
| --connector required if --resource-typesis not given | **Type** String **Description** Id or Identifier of the resource types' connector we want to update the fulfillment state.                                                                                                                                                                                                            |
| --resource-types required if --connectoris not given | **Type** String List **Description** Id or Identifier of the resource types we want to update the fulfillment state.                                                                                                                                                                                                                  |
| --certificate-identifier optional                    | **Type** String **Description** Unique key used to retrieve the certificate in Azure Key Vault.                                                                                                                                                                                                                                       |
| --vault optional                                     | **Type** String **Description** Vault uri.                                                                                                                                                                                                                                                                                            |
| --vault-connection-string optional                   | **Type** String **Description** Connection string to connect to Azure Key Vault.                                                                                                                                                                                                                                                      |
| --batch-size default value: 1000                     | **Type** Int32 **Description** Number of provisioning orders to wait between each progress report.                                                                                                                                                                                                                                    |
| --task-instance-id optional                          | **Type** String **Description** Id of the task instance which have launch the exe in a job context (for log purposes).                                                                                                                                                                                                                |

# Usercube-Fulfill-Scim

This executable creates, updates and deleles entries in an application using the SCIM API.

## Examples

### Connector specified

When specifying `--connector`, there is no need to specify `--resource-types`:

`--connector "3" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://scim.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

But the identifier can be also given instead of the id:

`--connector "SCIM" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://scim.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

### Resource types specified

When specifying `--resource-types`, there is no need to specify `--connector`:

`--resource-types "40" "41" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://scim.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

But the identifiers can be also given instead of the id:

`--resource-types "SCIM_NominativeUser" "SCIM_Administrator" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret"--url "https://scim.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

## Arguments

| Argument Name              | Details                                                                                                                                                                                                                                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --api-client-id required   | **Type** String **Description** Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions.    |
| --api-secret required      | **Type** String **Description** Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
| --api-url required         | **Type** String **Description** URL of Identity Manager server.                                                                                                                                                                                                                                                                       |
|                            |                                                                                                                                                                                                                                                                                                                                       |
| ---                        | ---                                                                                                                                                                                                                                                                                                                                   |
| --server required          | **Type** String **Description** URL of the SCIM endpoints of your application, not including the v2.                                                                                                                                                                                                                                  |
| --login optional           | **Type** String **Description** Specifies the login of the account you may need.                                                                                                                                                                                                                                                      |
| --password optional        | **Type** String **Description** Specifies the password of the account you may need.                                                                                                                                                                                                                                                   |
| --application-id optional  | **Type** String **Description** Specifies the application connection login or the login of your application's id provider.                                                                                                                                                                                                            |
| --application-key optional | **Type** String **Description** Specifies the application connection password or the password of your application's id provider.                                                                                                                                                                                                      |
| --oauth-url optional       | **Type** String **Description** The server's url when using OAuth2 authentication.                                                                                                                                                                                                                                                    |
| --oauth-token optional     | **Type** String **Description** Specifies the OAuth token to connect to the application.                                                                                                                                                                                                                                              |
| --scim-syntax optional     | **Type** Enum **Description** Specifies the syntax used for requests body. Has to be one of those values: Salesforce (default value) or CyberArk                                                                                                                                                                                      |

# Usercube-Fulfill-ToEasyVistaTicket

This executable creates tickets in an EasyVista instance.

## Examples

### Connector specified

When specifying `--connector`, there is no need to specify `--resource-types`:

`--connector "3" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

But the identifier can be also given instead of the id:

`--connector "EasyVista" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

### Resource types specified

When specifying `--resource-types`, there is no need to specify `--connector`:

`--resource-types "40" "41" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

But the identifiers can be also given instead of the id:

`--resource-types "EasyVista_NominativeUser" "EasyVista_Administrator" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret"--url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

## Arguments

| Argument Name                                        | Details                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --api-client-id required                             | **Type** String **Description** Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions.    |
| --api-secret required                                | **Type** String **Description** Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
| --api-url required                                   | **Type** String **Description** URL of Identity Manager server.                                                                                                                                                                                                                                                                       |
|                                                      |                                                                                                                                                                                                                                                                                                                                       |
| ---                                                  | ---                                                                                                                                                                                                                                                                                                                                   |
| --url required                                       | **Type** String **Description** EasyVista API Endpoint URL.                                                                                                                                                                                                                                                                           |
| --account required                                   | **Type** String **Description** EasyVista account.                                                                                                                                                                                                                                                                                    |
| --login required                                     | **Type** String **Description** Path of the file used for complete synchronization.                                                                                                                                                                                                                                                   |
| --password required                                  | **Type** String **Description** EasyVista server password.                                                                                                                                                                                                                                                                            |
|                                                      |                                                                                                                                                                                                                                                                                                                                       |
| ---                                                  | ---                                                                                                                                                                                                                                                                                                                                   |
| --connector required if --resource-typesis not given | **Type** String **Description** Id or Identifier of the resource types' connector we want to update the fulfillment state.                                                                                                                                                                                                            |
| --resource-types required if --connectoris not given | **Type** String List **Description** Id or Identifier of the resource types we want to update the fulfillment state.                                                                                                                                                                                                                  |
| --certificate-identifier optional                    | **Type** String **Description** Unique key used to retrieve the certificate in Azure Key Vault.                                                                                                                                                                                                                                       |
| --vault optional                                     | **Type** String **Description** Vault uri.                                                                                                                                                                                                                                                                                            |
| --vault-connection-string optional                   | **Type** String **Description** Connection string to connect to Azure Key Vault.                                                                                                                                                                                                                                                      |
| --batch-size default value: 1000                     | **Type** Int32 **Description** Number of provisioning orders to wait between each progress report.                                                                                                                                                                                                                                    |
| --task-instance-id optional                          | **Type** String **Description** Id of the task instance which have launch the exe in a job context (for log purposes).                                                                                                                                                                                                                |

# Usercube-Generate-Configuration

Generates from a CSV file the configuration of a connector with these entities.

## Overview

Two subcommands are possible for generation.

- simpleconnector
- complexconnector

The simple connector allows you to generate the configuration for a CSV file and create the
connector. The complex connector allows you to generate the configuration for a list of CSV files
and create the connector.

### 1. Simple connector

From a CSV file, generates the configuration of the entity representing the CSV file.

**The subcommand\_\_\_**simpleconnector**\_**must precede the arguments.\_\_

### 2. Complex connector

From a list of CSV files, generates the configuration of the entities representing each file. The
complex connector requires as an argument an xml file containing all the CSV files to be processed
as well as the primary keys of these files.

Example of xml file

```

<Connector xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" Name="HR" DefaultEncoding="UTF-8" DefaultSeparator=";">    <File Path="C:/identitymanager/Sources/rh_persons.csv" />    <File Path="C:/identitymanager/Sources/rh_services.csv" />    <File Path="C:/identitymanager/Sources/rh_sites.csv" />    <File Path="C:/identitymanager/Sources/rh_Categories.csv" />    <PrimaryKey Path="C:/identitymanager/Sources/rh_persons.csv" Header="EmplyoeId" EntityTypeName="HR_Person" />    <PrimaryKey Path="C:/identitymanager/Sources/rh_services.csv" Header="Code" EntityTypeName="HR_Service" />    <PrimaryKey Path="C:/identitymanager/Sources/rh_sites.csv" Header="Code" EntityTypeName="HR_Site" />    <PrimaryKey Path="C:/identitymanager/Sources/rh_Categories.csv" Header="Code" EntityTypeName="HR_Category" /></Connector>

```

- Path: CSV file path.
- File: Name of the files to be processed.
- PrimaryKey: Fills in the primary key of the CSV file.
- Header: Column name in the CSV file.
- EntityTypeName: Indicates the name of the entity to be created.
- Name: name of the connector to be created.

**The subcommand\_\_\_**complexconnector**\_**must precede the arguments.\_\_

## Examples

### Simple connector

```

./identitymanager-Generate-Configuration.exe simpleconnector -g "C:/GeneratedFile/file" -f "C:/SourceFile/confFile.csv"

```

### Complex connector

```

./identitymanager-Generate-Configuration.exe complexconnector -g "C:/GeneratedFile/file" "C:/SourceFile/confFile.xml"

```

## Arguments

| Argument Name                       | Details                                                                                                                                                                                                                                             |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --generated-file (-g) required      | **Type** String **Description** Path to the generated file.                                                                                                                                                                                         |
| --csv-path (-h) optional            | **Type** String **Description** Path to the CSV file. **Note:** used only for a simple connector.                                                                                                                                                   |
| --encoding (-e) optional            | **Type** String **Description** Encoding of the CSV file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings). **Note:** used only for a simple connector. |
| --csv-separator (-t) optional       | **Type** String **Description** Column separator of the CSV file. **Note:** used only for a simple connector.                                                                                                                                       |
| --generated-connector (-r) optional | **Type** String **Description** Name of the generated connector. **Note:** used only for a simple connector.                                                                                                                                        |
| --keep-all-columns (-k) optional    | **Type** No Value **Description** Keeps all the columns.                                                                                                                                                                                            |
| --connector-description optional    | **Type** String **Description** XML file that describes the CSV files and their primary key columns.                                                                                                                                                |
|                                     |                                                                                                                                                                                                                                                     |
| ---                                 | ---                                                                                                                                                                                                                                                 |
| --file-cert-thumbprint optional     | **Type** String **Description** Thumbprint of the certificate when the certificate is in the store.                                                                                                                                                 |
| --file-cert-dn optional             | **Type** String **Description** Subject Distinguished Name of the certificate when the certificate is in the store.                                                                                                                                 |
| --file-cert-store-location optional | **Type** String **Description** Store location of the certificate when the certificate is in the store.                                                                                                                                             |
| --file-cert-store-name optional     | **Type** String **Description** Store name of the certificate when the certificate is in the store.                                                                                                                                                 |
| --file-cert-file optional           | **Type** String **Description** File path of the certificate when the certificate is in a PFX file.                                                                                                                                                 |
| --file-cert-password optional       | **Type** String **Description** Password of the certificate when the certificate is in a PFX file.                                                                                                                                                  |
|                                     |                                                                                                                                                                                                                                                     |
| ---                                 | ---                                                                                                                                                                                                                                                 |
| --log-level optional                | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                                                   |

# Usercube-Get-JobSteps

This agent-side tool returns the list of all tasks present in a given job.

## Examples

```

.\Usercube-Get-JobSteps.exe --api-url "http://localhost:5000" --api-client-id "Job" --api-secret "secret" --job-identifier "InitializationJob"

Task : InitializationJob_0_CreateDatabaseViews, Order : 0
Task : InitializationJob_1_AD_ExportActiveDirectory_Initial_ADExport, Order : 1
Task : InitializationJob_2_LDAP_ExportLDAP_Initial_LDAPExport0, Order : 2
Task : InitializationJob_3_LDAP_ExportLDAP_Initial_LDAPExport1, Order : 3
Task : InitializationJob_4_AD_PrepareSynchronizationActiveDirectory_Initial, Order : 4
Task : InitializationJob_5_HR_PrepareSynchronization_Initial, Order : 5
Task : InitializationJob_6_LDAP_PrepareSynchronization_Initial, Order : 6
Task : InitializationJob_7_SAB_PrepareSynchronization_Initial, Order : 7
Task : InitializationJob_8_AD_SynchronizeActiveDirectory_ForceSynchronization, Order : 8
Task : InitializationJob_9_HR_Synchronize_ForceSynchronization, Order : 9
Task : InitializationJob_10_LDAP_Synchronize_ForceSynchronization, Order : 10
Task : InitializationJob_11_SAB_Synchronize_ForceSynchronization, Order : 11
Task : Init_SetAdminProfile, Order : 12
Task : Init_DatabaseIndex, Order : 13
Task : InitializationJob_14_AllEntities_UpdateEntityPropertyExpressions, Order : 14
Task : InitializationJob_15_AllEntities_ComputeCorrelationKeys, Order : 15
Task : InitializationJob_16_ComputeRoleModel, Order : 16
Task : InitializationJob_17_Directory_GenerateProvisioningOrders_ForceProvisioning, Order : 17
Task : InitializationJob_18_Directory_FulfillInternalResources_IgnoreHistorization, Order : 18
Task : InitializationJob_19_AllEntities_ComputeCorrelationKeys, Order : 19
Task : InitializationJob_20_ComputeRoleModel, Order : 20
Task : Init_SetManualAssignments, Order : 21
Task : Init_ApproveFutureuserAccountContol, Order : 22
Task : InitializationJob_23_AllEntities_ComputeCorrelationKeys, Order : 23
Task : InitializationJob_24_ComputeRoleModel, Order : 24
Task : InitializationJob_25_Directory_GenerateProvisioningOrders_ForceProvisioning, Order : 25
Task : InitializationJob_26_Directory_FulfillInternalResources_IgnoreHistorization, Order : 26
Task : InitializationJob_27_AllEntities_ComputeCorrelationKeys, Order : 27
Task : InitializationJob_28_ComputeRoleModel, Order : 28
Task : InitializationJob_29_Directory_GenerateProvisioningOrders_ForceProvisioning, Order : 29
Task : InitializationJob_30_Directory_FulfillInternalResources_IgnoreHistorization, Order : 30
Task : Directory_Collect_Initial, Order : 31
Task : Directory_Synchronization_Init, Order : 32
Task : InitializationJob_33_AllEntities_UpdateEntityPropertyExpressions, Order : 33
Task : InitializationJob_34_DeployConfiguration, Order : 34
Task : InitializationJob_36_AllEntities_ComputeCorrelationKeys, Order : 35
Task : InitializationJob_37_ComputeRoleModel, Order : 36
Task : InitializationJob_38_ComputeRiskScores, Order : 37
Task : Init_LoadApplications, Order : 38
Task : Init_LoadPhotos, Order : 39
Task : InitializationJob_41_UpdateClassification, Order : 40
Task : InitializationJob_42_SetInternalUserProfiles, Order : 41
Task : InitializationJob_43_ResetValidFrom, Order : 42
Task : InitializationJob_44_UpdateParametersContextDisplayNames, Order : 43
Task : Init_Translate, Order : 44
Task : Init_SetLastLogon, Order : 45
Task : Init_SuggestedRoles, Order : 46
Task : InitializationJob_49_AllEntities_ComputeCorrelationKeys, Order : 47
Task : InitializationJob_50_ComputeRoleModel, Order : 48
Task : InitializationJob_51_SavePreExistingAccessRights, Order : 49

```

## Arguments

| Argument Name             | Details                                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| --api-client-id optional  | **Type** String **Description** Login to Identity Manager server.                                                                 |
| --api-secret optional     | **Type** String **Description** Password to Identity Manager server.                                                              |
| --api-url optional        | **Type** String **Description** URL of Identity Manager server.                                                                   |
| --job-identifier required | **Type** String **Description** Identifier of the job whose tasks/steps are to be listed.                                         |
|                           |                                                                                                                                   |
| ---                       | ---                                                                                                                               |
| --log-level optional      | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`. |

# References: Executables

- [ Identity Manager-Agent ](/docs/identitymanager/6.2/reference/command-line-tools/agent-executable.md)

  Runs the Agent.

- [Usercube-Anonymize ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Transforms strings to anonymize given data.

- [ Usercube-Compute-CorrelationKeys ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Computes the values of all correlation keys.

- [ Usercube-Configuration-Transform ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Applies a series of transformation.

- [ Usercube-Create-DatabaseViews ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Generates entity model SQL views in the Identity Manager database.

- [ Usercube-CSV-Transform ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Modifies a CSV file by performing operations on its headers and/or columns.

- [ Usercube-Decrypt-File ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Decrypts an input file to save it into an output file or an OutPutConsole that can be used in
  Powershell scripts or programs.

- [ Usercube-Deploy Configuration](/docs/identitymanager/6.2/reference/command-line-tools/deployment-tools.md)

  Retrieves all XML configuration files from a given folder, in order to calculate the
  configuration items to insert, update or delete in the application.

- [ Usercube-EasyVistaTicket-UpdateFulfillmentState ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Updates the assigned resource types according to EasyVista tickets state.

- [ Usercube-Encrypt-File ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Encrypts an input file or the InputConsole of a Powershell program or file to save it as an
  encrypted output file.

- [Usercube-Export-Bacpac](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Exports the database to a bacpac file.

- [ Usercube-Export-Configuration ](/docs/identitymanager/6.2/reference/command-line-tools/deployment-tools.md)

  Generates in a folder the files of the configuration found in the database.

- [Usercube-Export-Csv ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Exports CSV files.

- [ Usercube-Export-EasyVista ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Exports CSV files.

- [Usercube-Export-Excel ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Exports Excel files.

- [Usercube-Export-Scim ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Exports SCIM entries to a CSV file.

- [Usercube-FillBankingDatabase ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Fills the `BankingSystem` database for the Banking demo application.

- [ Usercube-Fulfill-EasyVista ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Creates, updates and archives employees in an EasyVista instance.

- [Usercube-Fulfill-Scim ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Creates, updates and deleles entries in an application using the SCIM API.

- [Usercube-Fulfill-ToEasyVistaTicket ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Creates ticket in an EasyVista instance.

- [Usercube-Generate-Configuration ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Generates from a CSV file the configuration of a connector with these entities.

- [ Usercube-Get-JobSteps ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Returns the list of all tasks present in a given job.

- [ Usercube-Invoke-Job ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Launches a job on the agent side.

- [ Usercube-Invoke-ServerJob ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Launches jobs on the server side.

- [ Usercube-Login ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Provides an authentication token needed for SaaS configuration deployment/export.

- [ Identity Manager-Manage-Configuration Dependent Indexes ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Creates the necessary indexes based on the latest deployed configuration to optimize
  performances.

- [Usercube-Manage-History](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Manages the data history stored in the database. It can purge old data or consolidate the
  history.

- [ Usercube-New-OpenIDSecret ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Allows to generate the hashed password of the secret to connect to the given client for agent
  side job Identity Manager.

- [ Usercube-PasswordGenerator ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Generates a password.

- [ Usercube-Prepare-Synchronization ](/docs/identitymanager/6.2/identity-management/synchronization/index.md)

  Cleanses exported CSV files.

- [ Usercube-Protect-CertificatePassword ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Encrypts a .pfx archive password using a Identity Manager provided RSA key.

- [ Usercube-Protect-X509JsonFile ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Encrypts sensitive data from a given JSON file.

- [ Usercube-Protect-X509JsonValue ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Encrypts the values of sensitive data.

- [ Usercube-RefreshSchema ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Refreshes the schema of a given connection. Takes as input a connection, and refreshes its
  schema. The result of the update is stored into the database.

- [Usercube-Send-PasswordNotification ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Sends a mail notification for a password initialization or change.

- [Usercube-Server ](/docs/identitymanager/6.2/reference/command-line-tools/server-executable.md)

  Runs the Server.

- [Usercube-Update-EntityPropertyExpressions ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Recomputes the values of all properties defined via expressions.

- [Usercube-Upgrade-ConfigurationVersion ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Upgrades your configuration from your current version entered in settings to the latest version.

- [Usercube-Upgrade-DatabaseVersion ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

  Runs all the migration scripts to upgrade the database.

- [ Identity Manager-Agent ](/docs/identitymanager/6.2/reference/command-line-tools/agent-executable.md)

  Runs the Agent.

- [Usercube-Check-ExpressionsConsistency](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md)

# Usercube-Invoke-Job

This tool launches a job on the agent side.

## Behavior Details

The Usercube-Invoke-Job.exe tool is a state machine.

![Schematization](/img/product_docs/identitymanager/identitymanager/integration-guide/executables/references/invoke-job/job_operation.webp)

When a job is launched, the state machine starts by computing all the tasks that must be launched in
the job.

Each task is assigned a launch order which can be configured in
[ Job ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) steps. All the job's tasks are grouped
together according to their launch order, and they are launched by group. Such task grouping allows
the job to be faster executed.

The launch orders of all the tasks of a job can be listed by using the
[ Usercube-Get-JobSteps ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) executable.

Before any task is launched, the state machine checks the task's parent tasks in order to verify
whether the task must be launched or not.

If the task must be launched, then the state machine checks whether the task should be started
server- or agent-side.

Then the task is launched, and then:

- if the task completes successfully, then the next task is loaded and started, or if this was the
  last task then the job ends successfully;
- if the task exits in error, then the whole job exits in error and stops;
- if the job is requested to stop from the UI, then the job's state switches to `cancelled` and is
  transmitted to the current task in order to not launch the next task;

  A canceled job is not stopped straight away, as the current task first needs to be finished.

- if the task exits in error while the warning mode is active, then the next job is loaded.

  Only export tasks can have this warning mode.

- if the task exits blocked, then the whole job stops and can be restarted manually at its
  breakpoint;

  Only synchronization and provisioning tasks can exit blocked.

In the case where the job is blocked and restarted:

- if the blocked task is a
  [ Synchronize Task ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md),
  then the state machine runs a synchronization validation on the related connector, and uses the id
  of the blocked task instance to synchronize the related tables;
- if the blocked task is a
  [`GenerateProvisioningOrdersTask`](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md),
  then the state machine forces the same provisioning on the related connector.

  Both the synchronization validation and the forced provisioning are virtual jobs that do not
  exist in the database. However, they will be visible in the UI which keeps track of any launched
  task.

In both cases, the state machine resumes the job with the tasks that were not started due to the
blockage.

Any task launched by the state machine is linked to a job instance in order to keep track of the
launch group.

## Example

```

./identitymanager-Invoke-Job.exe -j "AccessCertificationEnd" --api-secret secret --api-client-id Job --api-url "http://localhost:5000"

```

## Arguments

| Argument Name                                      | Details                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                    |                                                                                                                                                                                                                                                                                                                                           |
| ---                                                | ---                                                                                                                                                                                                                                                                                                                                       |
| --job-identifier (-j) required                     | **Type** String **Description** Job's identifier to be launched.                                                                                                                                                                                                                                                                          |
| --repair-job (-r) optional                         | **Type** No Value **Description** Bool to Decide launch Synchronization Validation or Provisioning with force.                                                                                                                                                                                                                            |
| --begin-job-step (-b) optional                     | **Type** String **Description** The step from which the job starts.                                                                                                                                                                                                                                                                       |
| --end-job-step (-e) optional                       | **Type** String **Description** The step at which the job stops.                                                                                                                                                                                                                                                                          |
| --task-identifier (-t) optional                    | **Type** String **Description** Specify the identification of the task to be started in the job (only this task will be started).                                                                                                                                                                                                         |
| --force-synchronization-provisioning (-f) optional | **Type** Int64 **Description** Forces execution when the threshold is reached or exceeded.                                                                                                                                                                                                                                                |
| --task-type (-c) optional                          | **Type** String **Description** The first task found with this type is launched.                                                                                                                                                                                                                                                          |
| --task-string-contains (-s) optional               | **Type** String **Description** Launches all tasks with an identifier containing the given value.                                                                                                                                                                                                                                         |
|                                                    |                                                                                                                                                                                                                                                                                                                                           |
| ---                                                | ---                                                                                                                                                                                                                                                                                                                                       |
| --api-client-id required                           | **Type** String **Description** Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect /Secret pair, linked to a profile with the relevant permissions.                |
| --api-secret required                              | **Type** String **Description** Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect /Secret pair/Secret pair, linked to a profile with the relevant permissions. |
| --api-url required                                 | **Type** String **Description** URL of Identity Manager server.                                                                                                                                                                                                                                                                           |

# Usercube-Invoke-ServerJob

## Invoke a Job (Server Side)

To launch the job in the Server side only you need to run the executable
Usercube-Invoke-ServerJob.exe.

To know the task launch orders in job use the following exe: Usercube-Get-Job Steps .exe. See the
[ Usercube-Get-JobSteps ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) topic for additional information.

## Examples

```

.\Usercube-Invoke-ServerJob.exe -g "CleanDatabase" -s secret

```

## Arguments

| Argument Name                                      | Details                                                                                                                           |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
|                                                    |                                                                                                                                   |
| ---                                                | ---                                                                                                                               |
| --job-identifier (-j) required                     | **Type** String **Description** Job's identifier to be launched.                                                                  |
| --repair-job (-r) optional                         | **Type** No Value **Description** Bool to Decide launch Synchronization Validation or Provisioning with force.                    |
| --begin-job-step (-b) optional                     | **Type** String **Description** The step from which the job starts.                                                               |
| --end-job-step (-e) optional                       | **Type** String **Description** The step at which the job stops.                                                                  |
| --task-identifier (-t) optional                    | **Type** String **Description** Specify the identification of the task to be started in the job (only this task will be started). |
| --force-synchronization-provisioning (-f) optional | **Type** Int64 **Description** Forces execution when the threshold is reached or exceeded.                                        |
| --task-type (-c) optional                          | **Type** String **Description** The first task found with this type is launched.                                                  |
| --task-string-contains (-s) optional               | **Type** String **Description** Launches all tasks with an identifier containing the given value.                                 |

# Usercube-Login

Delegates the authentication process to a third-party Identity Provider which will provide an
authentication token required to allow the remote deployment/export of Identity
Manager configuration.

The provided authentication token is meant to be sent to the Identity Manager administrator.

## Examples

The following example launches the authentication to Identity Manager's in-house Identity Provider
(IDP). It will open your default browser to `http://localhost:5005` where you will be redirected to
Identity Manager's IDP that will provide you with the authentication token.

```

./identitymanager-Login.exe

```

The following example launches the authentication to a specific Identity Provider whose
authentication URL and Client Id are respectively `https://my_oidc_authentication_server.com` and
`34b3c-fb45da-3ed32`. It will open your default browser to `http://localhost:5005` where you will be
redirected to the IDP that will provide you with the authentication token.

```

./identitymanager-Login.exe --authority https://my_oidc_authentication_server.com --client-id 34b3c-fb45da-3ed32

```

The following example launches the authentication to Identity Manager's Identity Provider, but using
a specific port `5050`. It will open your default browser to `http://localhost:5050` where you will
be redirected to Identity Manager's IDP. that will provide you with the authentication token.

```

./identitymanager-Login.exe --port 5050

```

## Arguments

| Argument Name              | Details                                                                                                                                                                                                                                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --authority optional       | **Type** String **Description** Base URL of the Identity Provider used for authentication. When not specified, Identity Manager provides an in-house Identity Provider.                                                                                                                              |
| --client-id optional       | **Type** String **Description** Client Id of the application authorized to delegate the authentication to the specified Identity Provider. When not specified, Identity Manager provides the Client Id for the in-house Identity Provider. **Note:** ask for this id to your internal administrator. |
| --port default value: 5005 | **Type** Int64 **Description** Port used to run the local web page.                                                                                                                                                                                                                                  |

# Identity Manager-Manage-Configuration Dependent Indexes

This tool creates the necessary SQL indexes based on the latest deployed configuration to optimize
certain queries performances.

## Available optimizations:

- Creates SQL indexes and statistics to optimize searches on specific entity types
- Creates SQL indexes to optimize joins between records and main entity types
- Creates SQL indexed views used to compute dashboard counters

## Examples

```

./identitymanager-Manage-ConfigurationDependantIndexes.exe -e "Directory_User" -r "Directory_UserRecord" "Directory_Guest" -dc -s  "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;" -a

```

./identitymanager-Manage-ConfigurationDependantIndexes.exe -auto -dc -s "data
source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;" -a

```

## Arguments

| Argument Name | Details |
| --- | --- |
| --entityTypes (-e)   optional | __Type__    String List   __Description__ Sets the list of entity types for which optimization indexes will be created/updated. |
| --recordEntityTypes (-r)   optional | __Type__    String List   __Description__ Sets the list of record entity types for which optimization indexes will be created/updated. |
| --userProperties (-p)   optional | __Type__    String List   __Description__ Sets the list of User' properties that link the records and the users. (the order of the given userProperties' must match the order of the given recordEntityTypes'). |
| --dashboardCounter (-dc)   optional | __Type__    No Value   __Description__ Adjusts the indexed views for the dashboard counters appropriately. |
| --auto   optional | __Type__    No Value   __Description__ The entity types, record entity types and user properties are deduced automatically from the provisioning rules configured in the database. |
| --apply-to-database (-a)   optional | __Type__    No Value   __Description__ Directly applies the resulting SQL script to the database. |
|  |  |
| --- | --- |
| --database-connection-string   required | __Type__    String   __Description__ Connection string of the database. |
```

# Usercube-Manage-History

This tool optimizes the data history stored in the database, reducing its size and enhancing
database performance.

The inner workings of this executable are based on the `ValidFrom` and `ValidTo` attributes that
specify the validity period of a given assignment. These attributes are inside the following tables
which are the tables actually purged: `ur_resources`; `ur_resourcelinks`;
`up_assignedcompositeroles`; `up_assignedsingleroles`; `up_assignedresourcenavigations`;
`up_assignedresourcetypes`.

## Examples

Purge before a period

To clean the database periodically, it can be purged of all the history older than a given period of
time.

The following example deletes all the history from the database that is more than 12-month old:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
./identitymanager-Manage-History.exe --purge-before-months 12 --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
```

Purge before a date

The database can be purged of all history older than a given date.

The following example deletes all the history from the database older than May 26th 1993:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
./identitymanager-Manage-History.exe --purge-before-date 19930526 --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
```

Optimize

The database's history can be optimized by removing intermediate versions based on their age, for
example keeping only one version the last week, one per month the last 6 months and then one per
year for 3 years.

The following example reduces the history from the database, keeping at most one history version per
interval. Here we keep one version per day (1440 minutes) in the last 7 days, then one version per
month (43920 minutes) in the last 6 months before the previously defined period, then one version
per year (525960 minutes) in the last 2 years before the previously defined periods.

![Schema - Optimize](/img/product_docs/identitymanager/identitymanager/integration-guide/executables/references/manage-history/tools_managehistory_schema.webp)

For each period, if there is more than one version (i.e. `ValidFrom` is inside the interval), the
versions are merged in the following way:

- The latest version is kept
- The oldest date is kept (that is, in the database, the `ValidFor` is equal to the one of the
  oldest version in the considered period).

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

./identitymanager-Manage-History.exe --optimize "1440:7 43920:6 525960:2" --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"

```

If you want to configure a time period when there is no purge and all history is kept as is, then
you can specify a short duration that allows a single change, for example only one minute. The
following example copies the previous one, in addition we want to keep all changes of the last 6
hours (360 minutes): `--optimize 1:360 1440:7 43920:6 525960:2`.

Clean duplicates

As given data can have several versions in the database, redundant rows can be deleted and replaced
with one row that covers the consolidated time range.

The following example remove all duplicates in the database.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

./identitymanager-Manage-History.exe --clean-duplicates --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"

```

The following example remove all duplicates induced by the `pwdLastSet` property.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

./identitymanager-Manage-History.exe --clean-duplicates --excluded-resource-columns "pwdLastSet" --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"

```

Solicit memory rather than the database

To reduce the database load, the tool's optimizations can be made via the local device's memory.

The following example deletes all the history from the database that is more than 12-month old, the
optimizations being computed in memory instead of in the database:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

./identitymanager-Manage-History.exe --purge-before-months 12 --in-memory --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"

```

## Arguments

| Argument Name                                                | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| --clean-duplicates optional                                  | No Value    | Removes duplicate historical data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --entity-type required if --excluded-resource-columns is set | String      | When using `--clean-duplicates` option, defines the entity type (Id or Identifier) that should have its duplicates removed from the `UR_Resources` table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --excluded-resource-columns required if --entity-type is set | String list | When using `--clean-duplicates` option, defines the list of column names (the name of the columns in the `UR_Resources` table, or the Identifier of the corresponding um_entityproperty) to exclude when comparing rows of `UR_Resources` table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --in-memory default value: False                             | No value    | Performs optimizations in memory instead of the database. It implies heavy memory consumption but light SQL load.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --optimize optional                                          | String list | Reduces the history and optimizes the versions that are kept based on the precision given through ranges in the argument. A range is specified by a duration in minutes followed by the number of occurrences. For example 60:10 defines a range of 60 minutes repeated 10 times, or 10 snapshots repeated at 60 minute intervals. For each interval, at most one version is kept in the history. The intervals are evaluated in the given order from now, backwards. In the previous example, it means the more recent versions are kept with a high precision (one per day initially), then with lesser and lesser precision (one per month and then one per year). If the data has not changed over an interval, no optimization can be done. |
| --purge-before-date optional                                 | String      | Deletes all the history older than the given date in the yyyyMMdd format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --purge-before-months optional                               | String      | Deletes all the history older than the given number of months.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --database-connection-string required                        | String      | Connection string of the database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

The available actions (clean duplicates; purge; optimize) are all optional, but at least one must be
used in the executable command.

# Usercube-New-OpenIDSecret

This tools generates an hash. In practice, we hash a client secret but the tool can generate
randomly a hash without an input string. The name of the executable is:
Usercube-New-OpenIDSecret.exe'.

## Examples

                    ```

    ./identitymanager-New-OpenIDSecret.exe --client-secret
    Shared secret for 'secret' is 'K7gNU3sdo+OL0wNhqoVWhr3g6s1xYv72ol/pe/Unols='

````


The output shows the client secret and its hashed version. It must be entered in the [
OpenIdClient
](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) configuration.

## Arguments

| Argument Name | Details |
| --- | --- |
| --client-secret   optional | __Type__    String   __Description__ OpenID client secret that will be hashed by the program. |
|  |  |
| --- | --- |
| --log-level   optional | __Type__    LogLevel   __Description__ Level of log information among: ```Verbose```; ```Debug```; ```Information```; ```Warning```; ```Error```; ```Fatal```. |
````

# Usercube-PasswordGenerator

## Example

### Manually generate a password

Consider an external system that is fulfilled manually and requires a new password.

To avoid writing the password in any file while still choosing a cryptographically secure password,
we generate it just before using it.

`--auto-generate true --digit-chars 2 --lower-case-chars 6 --symbol-chars 2 --upper-case-chars 2`

## Arguments

| Argument Name                                         | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --default-password required if auto-generate is false | **Type** String **Description** Specifies the default password used when `--auto-generate` is false. **Example** Set default password to password: `--default-password password`.                                                                                                                                                                                                                                                                                                                                                                                               |
| --auto-generate default value: false                  | **Type** No Value **Description** Specifies if the password should be the default password or generated automatically. **Example** Use default password: `--auto-generate false`.                                                                                                                                                                                                                                                                                                                                                                                               |
| --digit-chars default value: 0                        | **Type** Integer **Description** Specifies the number of digits in the generated password. If the value is strictly positive, additional digits may be generated if `--generated-length` is higher than the sum of `--digit-chars`, `--lower-chase-chars`, `--symbol-chars`, and `--upper-case-chars`. **Example** Generate a password with 2 digits: `--digit-chars 2`.                                                                                                                                                                                                        |
| --generated-length default value: 0                   | **Type** Integer **Description** Specifies the length of the generated password. If it is lower than the sum of `--digit-chars`, `--lower-chase-chars`, `--symbol-chars`, and `--upper-case-chars`, the length of the generated password is equal to the sum. If it is higher than the sum of `--digit-chars`, `--lower-chase-chars`, `--symbol-chars`, and `--upper-case-chars`, extra characters of any type will be generated. **Example** Set a password length of 12: `--generated-length 12`.                                                                             |
| --lower-case-chars default value: 0                   | **Type** Integer **Description** Specifies the number of lower case characters in the generated password. If the value is strictly positive, additional lower case characters may be generated if `--generated-length` is higher than the sum of `--digit-chars`, `--lower-chase-chars`, `--symbol-chars`, and `--upper-case-chars`. If the sum of `--digit-chars`, `--lower-chase-chars`, `--symbol-chars`, and `--upper-case-chars` is 0, only lower case characters will be generated. **Example** Generate a password with 6 lower case characters: `--lower-case-chars 6`. |
| --strength-check default value: "^.\*"                | **Type** String **Description** The regular expression to check the password strength. By default, any password passes the strength check. **Example** Accept any password: `--strength-check ^.*`.                                                                                                                                                                                                                                                                                                                                                                             |
| --symbol-chars default value: 0                       | **Type** Integer **Description** Specifies the number of symbols in the generated password. If the value is strictly positive, additional symbols may be generated if `--generated-length` is higher than the sum of `--digit-chars`, `--lower-chase-chars`, `--symbol-chars`, and `--upper-case-chars`. **Example** Generate a password with 2 symbols: `--symbol-chars 2`.                                                                                                                                                                                                    |
| --upper-case-chars default value: 0                   | **Type** Integer **Description** Specifies the number of upper case characters in the generated password. If the value is strictly positive, additional upper case characters may be generated if `--generated-length` is higher than the sum of `--digit-chars`, `--lower-chase-chars`, `--symbol-chars`, and `--upper-case-chars`. **Example** Generate a password with 2 upper case characters: `--upper-case-chars 2`.                                                                                                                                                      |

# Usercube-Protect-CertificatePassword

This tool helps protecting `.pfx` archives passwords. Given a plain text password, it generates an
encrypted version, that can be stored in a configuration file in place of the plain text one. The
tool uses a hard-coded secret RSA key to generate the encrypted password. Identity Manager uses the
same key to retrieve the plain text password and read the `.pfx` archive.

## Examples

Given a `.pfx` archive protected by the `secret` password, an encrypted version can be generated
with the following command:

```
./identitymanager-Protect-CertificatePassword.exe --pfx-password "secret"
```

The output is the following :

```

ep4BsLtg5RVFVI1kEIMZbV1q7Bg2eAFzeD73YX5fV7eklSIqcJcxHsCQbyY2zKLppXSX+Zpwm7xU5QY6DTAJleFbWsP/p0fjXUn1agy1tQ6l6t6wvURBZcePEgu+ivNjpUENbDIBotPdzbpISLJIjQbISzHDWnHuWPk/l8h0wXU=@WrAj9YdcNK8cQvfopZa5g1QFc1hk6nPolkwQAkU2ORfXupgV7kaWgKF4W/UmC0XXg4zuaqpVui6ivB0jbLTiXgQ62o+bG9ZSEJLaur4d20TMRNadqnWTWPWhVJF6XiS4jX7sDvVrZO3sKQJMNzZSeTKmsl0w0boCBEkuHsWDA24=@0oLLKxcTJGxSx1uGvhexEA==

```

This encrypted password can now be copied to the relevant location in a configuration file. For
example :

```
appsettings.json

{
...
 "EncryptionCertificate": {
    "File": "C:/UsercubeAgentContoso/contoso.pfx",
    "Password": "ep4BsLtg5RVFVI1kEIMZbV1q7Bg2eAFzeD73YX5fV7eklSIqcJcxHsCQbyY2zKLppXSX+Zpwm7xU5QY6DTAJleFbWsP/p0fjXUn1agy1tQ6l6t6wvURBZcePEgu+ivNjpUENbDIBotPdzbpISLJIjQbISzHDWnHuWPk/l8h0wXU=@WrAj9YdcNK8cQvfopZa5g1QFc1hk6nPolkwQAkU2ORfXupgV7kaWgKF4W/UmC0XXg4zuaqpVui6ivB0jbLTiXgQ62o+bG9ZSEJLaur4d20TMRNadqnWTWPWhVJF6XiS4jX7sDvVrZO3sKQJMNzZSeTKmsl0w0boCBEkuHsWDA24=@0oLLKxcTJGxSx1uGvhexEA=="
  }
...
}

```

## Arguments

| Name                    | Details                                                                      |
| ----------------------- | ---------------------------------------------------------------------------- |
| --pfx-password required | **Type** String **Description** Password of the `.pfx` archive's to encrypt. |

# Usercube-Protect-X509JsonFile

This tool is used to encrypt a JSON file containing sensitive connection data, for example the
`appsettings-agent.json` file, with
[ RSA Encryption ](/docs/identitymanager/6.2/reference/index.md). The
encryption is based on the information given in your `appsettings.json` file about either a PFX file
or the location of the encryption certificate in the Microsoft store. See the
[Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md)
topic for additional information.

This tool `Usercube-Protect-X509JsonFile` is used to encrypt a whole file, in comparison to the
[ Usercube-Protect-X509JsonValue ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) tool that encrypts only a
given value. This tool is more appropriate than `Usercube-Protect-X509JsonValue` when you have many
lines to encrypt.

## Examples

The command below encrypts the `appsettings.agent.json` file from the `C:/UsercubeTraining` folder
and creates the `appsettings.encrypted.agent.json` file in the same folder.

```

./identitymanager-Protect-X509JsonFile.exe --input-json-file-path "C:/UsercubeTraining/appsettings.agent.json" --output-json-file-path "C:/UsercubeTraining/appsettings.encrypted.agent.json"

```

For example it takes this :

```
appsettings.agent.json

{
  "TaskAgentConfiguration": {
    "HttpClientTimeoutSupplement": 0
  },
  "OpenId": {
    "OpenIdClients": {
      "Job": "secret"
    },
    "DefaultOpenIdClient": "Job"
  },

  "PasswordResetSettings": {
    "TwoFactorSettings": {
      "ApplicationUri": "http://localhost:3000"
    },
    "NotificationSettings": {
      "Cultures": [
        "en"
      ]
    }
  },
  ...
}

```

And it returns this :

```
appsettings.encrypted.agent.json

{
  "TaskAgentConfiguration": {
    "HttpClientTimeoutSupplement": "kxABAEh6CpUOAOMBNPNLKazx9I0vqummv24acN292gonFiK4ov81bjqE2ic+n+HqastXU2aTQcl3IefhEXn9KA2dhnIbDTXB4GhOn9lL9AzUfwKXBr5EBmVy7ggruG2ewpWGK1c3LBJ35km9XvCnzSHLfolZwHNPwM/8b/C6XqSzieoFcO5H92IGJ1lFRboacvp0rO+SkkUv63Ewsk+1MrVLa63oBgWfY6PhMeJvNpWGqCD+I614hB6jE2Li/recwQIPd10XEgFM1OEkZ5ZiO+URxX7MCBe1o20rTaczKR7e7lLQGa/e3Y3i1sFnCm+yRm/lzw0qtDvOtCXlPT13EsHsUunxnR3uH4R6lRBXT30OKobaX7MTQjGkLRChss/GVGCK5w=="
  },
  "OpenId": {
    "OpenIdClients": {
      "Job": "kxABAOkh0BF2GdMedpzmKZZWVWc8IYaiZO2dofmt7lLBP3vMYgLLZYNDyR3x7Ah7tA1r6oSL5gBT3mSFyXB63NJk+QmZqNW1LWdzh+3U+DvNdQw4OfDfFlC5F+nH3/L5iqWc+h1jMlaQBpkqf42Vr8HwFKtqMXLJVXEIyeHSPgHRp1iOjGkNSRNrRQGJ4pVyo0xKmcWsz3qGYf0SnJIzRJ++PcYh/dJgxHAZFsDnV55X3zg72J8teoIEG82GdNjmCV/W4S4edNCYa1gL3KpgDGQq1GEed71Ht1tVYlHlJ4hckE++otQqTgRA2p4nFvo3LmlMag6k4EQRzEk6TOHUlGjUtYgpzMuPqei8/3CRXy5o8YW5R0wVFJJ/jSfYrvR3M9SwJw=="
    },
    "DefaultOpenIdClient": "kxABANLI/Qx7X8L1VtIl+FM4RtYlTLLpUUBCp2pucY+jzjlwhbF9fjJhhTP/KmeCj8M2yB4AA1V3AQgcEBvg92I1vCAWXIBgCjz6LUD2yf4FCpACaxNgiBZVAaCELNCgbKDgy9UB1j4sCozpEzReLVtYdOX+KFbGU6zJ808jnrLFMz+YHT4LXMyF94A5Zl86DFT9br6PwR75qImvjDlIUt+7/I8WrT1Nnqn2hXxqzAd1J2W5Xv8Bt9sXFmskSZN9PyOo9EY9t5lVGq++IqjGPWh4vQAXCzIsfRgUfU7PfHKVuSKSHbME1EZwG/FjzOe8B4bO2q/a/qLtGgygyX5ExEkZ/IcrtSZnTdqC83AfyexlEv9Z3wWFAoKGDtI3zhmCZYnuZQ=="
  },
  "PasswordResetSettings": {
    "TwoFactorSettings": {
      "ApplicationUri": "kxABAFAEx4fWwG/ANPVTf/WGyccDxoR2xCy+x+U3Ny1KkqnOFw+SizePTgINTzBaYHLTHABQD0GWW6U+4qiG6DpcIcdAD0VVnddqB5a+YIE0reufXYhZTrDU/9yeG6aUWIHkLl9UudC/nnW6zMrjChiJhJvT7csFKdgbqUazZT56hR0i6XS36a5h2/tTWhbZTkk1Dil5JP7xUcu5CMWyXMUvGvK8gfQozYxo/DJTOiLrWjg5ION1yx+ZqPhcIUxgYaBjxSpfT6U9YMy5mE9JGqf7W76baS9fOVr3H1DAL02icX29uJAcsw1r9k1rJQIKEhAuqTNeuqF6C6iPHJAsail+iteOJEYgBSACRz7Te4t6Hp7PBs0FfP0WY1oL+1T+p7X+HaO1jAJhE50J2AKhGNXTZfE="
    },
    "NotificationSettings": {
      "Cultures": [
        "kxABAPwTbpFUbP9xT9HyqtTuMLKT9sVD0Qq1kCsI44d12vJEcW2MMy9K5vKakwTPeJpvY6SafELoHc7AjKnh8ZJi0/Yu4dieE5W+5uXY1uaghYJ/2VjimzIsDhvRhm90xUlaMjdFBjx4HAnxBAtEbEjifdGHxZ0L9F305hXSTORj53u76ctCE5D9HPTN3AgLmyIGv5NExwhD4sgppbf6PWjTEZ7yNcoUpkkS4pJ6BMz+PaQo26A2rMP710zQgG72an4XvxSoR3SwSm0fhLCASgYi8YOZw0j/cfxl/LrW1EQ7gyW0/Mw9v1YRNH3DkbWSeHZ3odhDWdaWkzR6yOEt5hO60eM0w8Tjoed30Jwf+enf1rJFStDe/dhg6vjUIaTn6tt1Gw=="
      ]
    }
  },
  ...
}

```

The previous command can be useful to encrypt, for example, an Active Directory's login used by the
agent during the synchronization process.

The login to encrypt is stored in the following format, compliant with the
[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md).json
structure:

appsettings.beforeEncryption.json

```

{
  ...
  "Connections": {
    ...
    "ADExport": {
      "Login": "Administrator"
    }
  }
}
```

This command writes encrypted values from `appsettings.agent.json` to
`C:/UsercubeTraining/appsettings.encrypted.agent.json` following the
[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md).json
structure:

```
appsettings.encrypted.agent.json
{
  ...
  "Connections": {
    ...
    "ADExport": {
      "Login": "kxABAM9LW6vyx3TpDXoU5mKKQAwxxNcH9Q2z+dk+E7BNzrI346fUUiPmnJlOJZNX8bA1sokpDHTJBJngdF8LqVuWhk0t+IBpHE+iRJZ4q6i/CzX/OnpoGEHLSL5gZUixIqn9kul5AbxI38d/aGkCGIeAGY73rf0eQRizB2uR/ObR/H9jm3dHGt3TUNyOH4WqdwrXL0WTeMyfme6O+2PMoGvmjVF04keicuisjj/jROxTcDKe69qjPuCJZabR69CA2qP1TPMDMy/zlg8bzRZKepw8VxI4OpIKrbwhaUTauJMR6URPsOZ54fdocKi3oEyvpm2AhX4YF8GpOw7fBQrPWte/JJFOxgIzH1Kh0d0YhC2ZpMCXexfOlB2Y9afWG/t7rdi4VDsEf8gwj+IJ3HbE0dtIPLw="
    }
  }
}
```

## Arguments

| Name                             | Details                                                                      |
| -------------------------------- | ---------------------------------------------------------------------------- |
| --input-json-file-path required  | **Type** String **Description** Path of the input to-be-encrypted json file. |
| --output-json-file-path required | **Type** String **Description** Path of the output encrypted json file.      |

# Usercube-Protect-X509JsonValue

This tool is used to encrypt sensitive connection data, for example data from the
`appsettings.agent.json` file, with
[ RSA Encryption ](/docs/identitymanager/6.2/reference/index.md). The
encryption is based on the information given in your `appsettings.json` file about either a PFX file
or the location of the encryption certificate in the Microsoft store. See the
[Application Settings](/docs/identitymanager/6.2/administration/server-configuration/general-settings.md)
topic for additional information.

This tool `Usercube-Protect-X509JsonValue` is used to encrypt only given values, in comparison to
the[ Usercube-Protect-X509JsonValue ](/docs/identitymanager/6.2/reference/command-line-tools/utility-tools.md) tool that encrypts a whole file. This tool is more
appropriate than `Usercube-Protect-X509JsonFile` when you have only a few lines to encrypt.

## Examples

The command below encrypts the task agent configuration `0` and the OpenId Client `secret` used in
the `appsettings.agent.json` file.

```

./identitymanager-Protect-X509JsonValue.exe --values "0" "secret"

```

As a response, the powershell returns one string per given value.

```

PS C:/UsercubeTraining/Runtime> ./identitymanager-Protect-X509JsonValue.exe --values "0" "secret"
kxABACJhXxJwnGJSug/nE6ODGGYwnzhX1WeYUHmS7gkMLpF15K7POOZAVWsl93zuYaVStPK0sV+U6mOE4h5IzbT083Uac+/NKic+qNZLYi4PRum+G17pIeSMBu3z7GQJxGGkAeX7dwf0kc/oDW5yAQ1BtFN+k27UHZkUrz0fe/eOZwTHbgV5sSUM+6pXW6IQd2VnVRRKLyWij0MAKsCNlHtv6QE73b8P8u7liRdzWOueqE2blAZk0rm0JzFxZlUQKgIMBTk2cuFWph7rp8dp8h8mDKJl9xbYzAtmM/rgXuhcMYryIrlqFeBWt1J65cfL7HNQb6OX7Imb2LQZmZMI2xc1gFyiXjeINeMriYm3zecnSBMiYEGW6RddE6doJOtrTyznrg==
kxABAJT+2u1C1r0JI8criUz15QkI71x6/BPeNMlPWEL5ZHkTvZWVnMLG/zNJz9PvnjfecROC4fkxPRI5U+sF8W1caH8DtxnzM0ctYD0QtRcpS9z48y2mUzOzl3pU68BQyosyZGZW0ifXVI9UJVGMzMTfWloCw+R+xfZHviYLVGT8y2PKkCBdNp7IcZN4qT6mq8AmTIMSgwagR854n1EHn8lT5nUUFmhZ7iIJ/sonEVG4uyTAjND9YXSsfL9dm2ipTzXrybruIkVU051aczdohreMRsfeSB6TDAYa3GEMNeAb3CzI5I/6NpKYEzZEoYu4JXAzE6bqHeK2oVJyrmTL11kwq4m9fTMwlwmB0GaPeJtbQoih6TIX2qlOPfQdsrZt0dl5qw==

```

Then you just need to copy and paste them.

The following example shows how to update the OpenId ClientSecret matching the "ContosoCharlotte"
OpenId ClientId in the `appsettings.encrypted.agent.json` file.

The initial `appsettings.encrypted.agent.json` file resembles the following:

```
appsettings.encrypted.agent.json before update
{
  ...
  "OpenId": {
    "OpenIdClients": {
      "ContosoCharlotte": "dKIHkloXG6i1LkxkhjkKoVKS9gFO7Hx8VUm"
    }
  }
}
```

The new ClientSecret to encrypt is _charlotte2028_.

Using the `Usercube-Protect-X509JsonValue.exe`:

```
./identitymanager-Protect-X509JsonValue.exe --values charlotte2028
```

The `--values` parameter also accepts multiple white-space-separated values for encryption.

The output, in the console, shows the encrypted value for the _charlotte2028_ string.

```

kxABABJR7wYaQIqNjHT/rhYVMp5Vmsao7/eBLb7JCIiHMOKbi2sC0dY0SAJgj50NQ0kEH5LS3Y3TYso98+IdnxAzpURrtNu/LUWCJo1kTLM/taygebc0MK4XbkFmWzEgzLcVhAIy8GyFgEWqgNhOx7vwSPXFRrhQTVqIjwO0QNqxlZ5s6uyQm5fk9es2o6aLL0xwbvqspReFxZwuHrguAoIvkBnaKSsDfTLSuheP6VN7yOglLHvZ8Sn9R42M2BpG/dKIHXG6i1LkxkKoVKS9gFO7Hx8VUmYgxG+qIKTRVHdpMctqWKNUJTsQkmRKs+S3qiA2mgK/iC/dp923TfigAnBLWtyXw8eKDJjZ+s6n878BIf55iEjpgOrbm5FLzj8dfqPhQw==

```

The last step is to update the `appsettings.encrypted.agent.json` file by copy/pasting this new
encrypted value to replace the old one. It results in:

```
appsettings.encrypted.agent.json after update
{
  "OpenId": {
    "OpenIdClients": {
      "ContosoCharlotte": "kxABABJR7wYaQIqNjHT/rhYVMp5Vmsao7/eBLb7JCIiHMOKbi2sC0dY0SAJgj50NQ0kEH5LS3Y3TYso98+IdnxAzpURrtNu/LUWCJo1kTLM/taygebc0MK4XbkFmWzEgzLcVhAIy8GyFgEWqgNhOx7vwSPXFRrhQTVqIjwO0QNqxlZ5s6uyQm5fk9es2o6aLL0xwbvqspReFxZwuHrguAoIvkBnaKSsDfTLSuheP6VN7yOglLHvZ8Sn9R42M2BpG/dKIHXG6i1LkxkKoVKS9gFO7Hx8VUmYgxG+qIKTRVHdpMctqWKNUJTsQkmRKs+S3qiA2mgK/iC/dp923TfigAnBLWtyXw8eKDJjZ+s6n878BIf55iEjpgOrbm5FLzj8dfqPhQw=="
    }
  }
}
```

## Arguments

| Name              | Details                                                    |
| ----------------- | ---------------------------------------------------------- |
| --values required | **Type** String **Description** List of values to encrypt. |

# Usercube-RefreshSchema

## Examples

`Usercube-RefreshSchema` can be used as an executable file as follows:

```
dotnet Usercube-RefreshSchema.dll --api-url myserver.usercube.com --api-client-id myclientid --api-secret myclient secret --connection-id -2

```

The credentials used to connect to the connection come from the
[appsettings.agent](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md).

## Arguments

| Name                       | Details                                                                                                                                                                                                                                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --connection-id \*required | **Type** Integer **Description** Id of a connection whose schemas are updated. See the [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) topic for additional information.                                                                                                             |
|                            |                                                                                                                                                                                                                                                                                                                                       |
| ---                        | ---                                                                                                                                                                                                                                                                                                                                   |
| --api-client-id required   | **Type** String **Description** Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions.    |
| --api-secret required      | **Type** String **Description** Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [ OpenIdClient ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. |
| --api-url required         | **Type** String **Description** URL of Identity Manager server.                                                                                                                                                                                                                                                                       |
|                            |                                                                                                                                                                                                                                                                                                                                       |
| ---                        | ---                                                                                                                                                                                                                                                                                                                                   |
| --log-level optional       | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                                                                                                                                     |

# Usercube-Send-PasswordNotification

## Examples

### Manually send a password initialization mail notification

Consider a user who needs an account in an external system. Consider that this account requires a
password.

As an example, we will consider that the id of the
[Resource Type Mappings](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
associated with the external system is 10, and the id of the assigned resource type associated with
the user is 1000.

Once the password is set, we need to communicate this password to the user. We send a mail
notification to inform the user.

`--password true --assigned-resource-type 1000 --resource-type-mapping 10`

For the notification to be sent, the server set at **appsettings** > **ApplicationUri** should be
running.  
The [Resource Type Mappings](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md)
should have an associated
[ Password Reset Settings ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md).  
For
the notification to be sent, the password reset settings should at least contain a notified email
binding.  
For the notification to make sense, the password reset settings should at least contain a
beneficiary full name binding.

## Arguments

| Argument Name                     | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --assigned-resource-type required | **Type** String **Description** Specifies the id of the assigned resource type corresponding to the user and the external system that is being fulfilled with a new password. This can be found in the provisioning order at **ProvisioningOrdersList** > **AssignedResourceTypeId**. **Example** Send a notification for the assigned resource type with id 1000: `--assigned-resource-type 1000`.                                                                                                                                                     |
| --password required               | **Type** String **Description** Specifies the new password that will be sent by mail. **Example** Send a notification for the password NewPassword: `--password NewPassword`.                                                                                                                                                                                                                                                                                                                                                                           |
| --resource-type-mapping required  | **Type** String **Description** Specifies the id of the [Resource Type Mappings](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) corresponding to the external system that is being fulfilled with a new password. This can be found in the provisioning order at **ProvisioningOrdersList** > **ResourceType** > **Id**, as the resource type and its corresponding resource type mapping share the same id. **Example** Send a notification for the resource type mapping with id 10: `--resource-type-mapping 10`. |
| --notification-cc optional        | **Type** Integer **Description** Specifies an address that should also receive the notification. **Example** Add [admin@acme.admin](mailto:admin@acme.admin) to the mail CC: `--notification-cc admin@acme.admin`.                                                                                                                                                                                                                                                                                                                                      |

# Usercube-Update-EntityPropertyExpressions

This tool is used to recompute the values of all properties defined via expressions (C#, etc.),
usually to prepare for a connector's synchronization.

## Examples

The following example updates the property expressions of the database defined by the connection
string, for all entity types.

```

./identitymanager-Update-EntityPropertyExpressions.exe --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false" -a

```

## Arguments

| Argument Name                                 | Details                                                                                                                                                                                                                                  |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --batch-select-size (-q) default value: 10000 | **Type** Int32 **Description** Batch size for SELECT queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching).                                                                     |
| --batch-update-size (-c) default value: 20000 | **Type** Int32 **Description** Batch size for UPDATE queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching).                                                                     |
|                                               |                                                                                                                                                                                                                                          |
| ---                                           | ---                                                                                                                                                                                                                                      |
| --database-connection-string required         | **Type** String **Description** Connection string of the database.                                                                                                                                                                       |
|                                               |                                                                                                                                                                                                                                          |
| ---                                           | ---                                                                                                                                                                                                                                      |
| --all-entityType (-a) optional                | **Type** No Value **Description** Applies the tool to all entity types.                                                                                                                                                                  |
| --batch-size (-q) default value: 5000         | **Type** Int32 **Description** Batch size for queries. [See more details](https://docs.microsoft.com/en-us/azure/azure-sql/performance-improve-use-batching).                                                                            |
| --dirty optional                              | **Type** No Value **Description** Applies the tool incrementally by applying it only to resources marked as dirty, i.e. recently modified.                                                                                               |
| --entitytype-list optional                    | **Type** String List **Description** List of entity types that the tool is to be applied to. **Note:** required when `--all-entityType` is not specified.                                                                                |
| --resource-identity-property optional         | **Type** String **Description** Property used to override the resource identity property set in the [ Select User by Identity Query Handler Setting ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md). |
|                                               |                                                                                                                                                                                                                                          |
| ---                                           | ---                                                                                                                                                                                                                                      |
| --log-level optional                          | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`.                                                                                                        |

# Usercube-Upgrade-ConfigurationVersion

This tool is used to upgrade your configuration from your current version entered in settings to the
latest version.

## Examples

```

./identitymanager-Upgrade-ConfigurationVersion.exe --version "5.1.0" --xml-path "C:/UsercubeDemo/Conf" --output "C:/UsercubeDemo/Conf2"

```

In this example, the configuration files are in the folder "C:/UsercubeDemo/Conf" and at version
"5.1.0". This tools will upgrade all the xml files to the latest version and save them in the folder
"C:/UsercubeDemo/Conf2".

## Arguments

| Argument Name        | Details                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| --version required   | **Type** String **Description** Current version.                                                                                  |
| --xml-path required  | **Type** String **Description** Current xml configuration folder to migrate.                                                      |
|                      |                                                                                                                                   |
| ---                  | ---                                                                                                                               |
| --output required    | **Type** String **Description** Path of the folder where the result will be saved.                                                |
|                      |                                                                                                                                   |
| ---                  | ---                                                                                                                               |
| --log-level optional | **Type** LogLevel **Description** Level of log information among: `Verbose`; `Debug`; `Information`; `Warning`; `Error`; `Fatal`. |

# Usercube-Upgrade-DatabaseVersion

This tool is used to run the necessary migration scripts in order to upgrade the database structure
from its current version to the most recent version.

## Examples

To upgrade a database with the connection string `databaseConnectionString`, go to the Runtime
folder of the newest version and launch the tool with the following argument:

```

./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "databaseConnectionString"

```

If the database has been correctly upgraded, the following message should appear:
`Database has been upgraded to version X.X.X`, with "X.X.X" being the newest version to which the
migration was made.

### With a Mode

The following example runs the database upgrade tool only for backward compatible changes.

```

./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "databaseConnectionString" --mode BackwardCompatibleChanges

```

### With the Execute Predefined

The following example runs the database upgrade tool only for backward compatible changes and the
predefined script. As the predefined script is always executed in the other modes, this option is
useful only when specifying `--mode BackwardCompatibleChanges`.

```

./identitymanager-Upgrade-DatabaseVersion.exe --connection-string "databaseConnectionString" --mode BackwardCompatibleChanges --execute-predefined

```

## Arguments

| Argument Name                     | Details                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --connection-string (-s) required | **Type** String **Description** Connection string to the database. **Example** `--connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"`                                                                                                                                                                                                                                                |
| --execute-predefined optional     | **Type** No Value **Description** Indicates that the predefined SQL file must be executed, when using the `BackwardCompatibleChanges` mode.                                                                                                                                                                                                                                                                                                    |
| --mode default value: All         | **Type** Enum **Description** `All` - run all the script types. `BackwardCompatibleChanges` - only execute backward compatible scripts. **Note:** the previous runtime can still work. `BreakingChanges` - only execute breaking scripts. **Note:** the server must be stopped. `CleanupChanges` - only execute cleanup scripts, to cleanup the database after the server restarted with the new runtime. **Example** `--mode BreakingChanges` |
| --force-version optional          | **Type** String **Description** Forces the database version instead of using the current one to replay the migration scripts.                                                                                                                                                                                                                                                                                                                  |
