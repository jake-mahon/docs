---
sidebar_position: 1199
title: Home Folder
---

# Home Folder

This connector exports [home folders](https://en.wikipedia.org/wiki/Home_directory)' content.

This page is about [Home Folders](../../references-packages/home-folders/index "Home Folders").

![Package: Storage/Home Folders](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Packages_homefolders_V603.png)

## Overview

Home Folders, also called Home Directory, is a user-dedicated storage area where users' personal files can be accessed. In general, a home folder is private so only its owner and administrators can access it. Moreover, the folders are often centralized because they are located on a network server. It allows making backups regularly and easily accessing the folders.

## Prerequisites

Implementing this connector requires:

* reading first how to [Set, View, Change, or Remove Special Permissions](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-r2-and-2008/cc772196(v=ws.10) "Set, View, Change, or Remove Special Permissions") and check the [File and Folder Permissions](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-r2-and-2008/cc732880(v=ws.10)) list;
* an account with at least the special permission Read on all home folders in order to be able to export them.

## Export

This connector exports all the home folders to a CSV file.

This connector performs only complete export, not incremental.

### Configuration

This process is configured through a [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "": {
      ...
    }
  }
}
```
:::note
The identifier of the connection and thus the name of the subsection must:
- be unique.
- not begin with a digit.
- not contain , :, ", /, \, |, ?, \* and \_.
:::

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
| InputDirectories required | **Type**  String List  **Description** List of the directories that contain the home folders to be exported. |
| Domain optional | **Type**  String  **Description** Domain of the account used to access the home folders. |
| Interactive default value: False | **Type**  Boolean  **Description** `True` to set the authentication as interactive. `False` to set it batch. [See Microsoft's documentation for more details](https://docs.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-logonusera#parameters). |

|  |  |
| --- | --- |
| Login optional | **Type**  String  **Description** Login of the account used to access the files and folders. **Note:** when not specified and `Password` neither, then the account running Identity Manager will be used. **Note:** if `Domain` is null, then `Login` must be set in the User Principal Name (UPN) format. |
| Password optional | **Type**  String  **Description** Password of the account used to access the files and folders. **Note:** when not specified and `Login` neither, then the account running Identity Manager will be used. |

### Output details

This connector is meant to generate a CSV file, named `.csv`, to the [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") folder, with the following columns:

* **Command**: empty for now, as the connector performs only complete export.
* **Name**: name of the home folder.

> For example, when exporting with a connection named `HomeFolderExport`, then the output file will be named `HomeFolderExport.csv` and will look like:
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

* [[Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection")](../../../network-configuration/agent-configuration/rsa-encryption/index), configured in the `appsettings.encrypted.agent.json` file;
* An [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection")safe;

* [Connection](../../../toolkit/xml-configuration/connectors/connection/index "Connection") able to store Home Folder's `Login` and `Password`.