# Home Folder

This connector exports [home folders](https://en.wikipedia.org/wiki/Home_directory)' content.

This page is about [
Home Folders
](/docs/usercube_saas/usercube/integration-guide/connectors/references-packages/home-folders/index.md).

![Package: Storage/Home Folders](/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/homefolder/packages_homefolders_v603.png)

## Overview

Home Folders, also called Home Directory, is a user-dedicated storage area where users' personal files can be accessed. In general, a home folder is private so only its owner and administrators can access it. Moreover, the folders are often centralized because they are located on a network server. It allows making backups regularly and easily accessing the folders.

## Prerequisites

Implementing this connector requires:

- reading first how to [Set, View, Change, or Remove Special Permissions](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-r2-and-2008/cc772196(v=ws.10)) and check the [File and Folder Permissions](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-r2-and-2008/cc732880(v=ws.10)) list;
- an account with at least the special permission Read on all home folders in order to be able to export them.

## Export

This connector exports all the home folders to a CSV file.

This connector performs only complete export, not incremental.

### Configuration

This process is configured through a [
Connection
](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) in the UI and/or the XML configuration, and in the ```appsettings.agent.json > Connections``` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:
  
- be unique.
  
- not begin with a digit.
  
- not contain ```<```, ```>```, ```:```, ```"```, ```/```, ```\```, ```|```, ```?```, ```*``` and ```_```.

> For example:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "HomeFolderExport": {
>       "InputDirectories": [
>         "C:/ContosoFolder",
>         "C:/ContosoFolder2",
>       ],
>       "Domain": "Windows",
>       "Interactive": true,
>       "Login": "Contoso",
>       "Password": "ContOso$123456789"
>     }
>   }
> }
> ```

#### Setting attributes

| Name | Details |
| --- | --- |
| InputDirectories   required | __Type__    String List   __Description__ List of the directories that contain the home folders to be exported. |
| Domain   optional | __Type__    String   __Description__ Domain of the account used to access the home folders. |
| Interactive   default value: False | __Type__    Boolean   __Description__ ```True``` to set the authentication as interactive. ```False``` to set it batch. [See Microsoft's documentation for more details](https://docs.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-logonusera#see-microsofts-documentation-for-more-details). |
|  |  |
| --- | --- |
| Login   optional | __Type__    String   __Description__ Login of the account used to access the files and folders.   __Note:__ when not specified and ```Password``` neither, then the account running Identity Manager will be used.   __Note:__ if ```Domain``` is null, then ```Login``` must be set in the User Principal Name (UPN) format. |
| Password   optional | __Type__    String   __Description__ Password of the account used to access the files and folders.   __Note:__ when not specified and ```Login``` neither, then the account running Identity Manager will be used. |

### Output details

This connector is meant to generate a CSV file, named ```<connectionIdentifier>.csv```,to the [Application Settings](/docs/usercube_saas/usercube/integration-guide/network-configuration/agent-configuration/appsettings/index.md)Export Output folder, with the following columns:

- __Command__: empty for now, as the connector performs only complete export.
- __Name__: name of the home folder.

> For example, when exporting with a connection named ```HomeFolderExport```, then the output file will be named ```HomeFolderExport.csv``` and will look like:
>
> ```
> HomeFolderExport.csv
> Command,Name
> ...
> ```

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- [](/docs/usercube_saas/usercube/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md)[
  Connection
  ](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md), configured in the ```appsettings.encrypted.agent.json``` file;
- An [
  Connection
  ](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md)safe;

- [
  Connection
  ](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) able to store Home Folder's ```Login``` and ```Password```.
