# RACF

This connector exports users and profiles from a [RACF](https://www.ibm.com/docs/en/zos-basic-skills?topic=zos-what-is-racf) file.

This page is about [
RACF
](/docs/usercube/usercube/integration-guide/connectors/references-packages/racf/index.md).

![Package: MainFrame/RACF](/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/racf/packages_racf_v603.png)

## Overview

Resource Access Control Facility (RACF) is a security program from IBM OS/390 used to protect users' resources by controlling their accesses. The RACF connector exports the information saved by RACF about users, groups and access authorities.

## Prerequisites

Implementing this connector requires the input file to be in the RACF format, but it can have any extension.

## Export

This connector extracts the information found in a RACF file and transforms it into CSV files in Identity Manager format.

Be aware that Identity Manager supports only the RACF records represented by the following codes:
  
- [0100; 0120; 0101; 0102](https://www.ibm.com/docs/en/zos/2.1.0?topic=records-record-formats-produced-by-database-unload-utility#0100-0120-0101-0102) (groups);
  
- [0200; 0203](https://www.ibm.com/docs/en/zos/2.1.0?topic=utility-user-record-formats) (users);
  
- [0500; 0503](https://www.ibm.com/docs/en/zos/2.1.0?topic=utility-general-resource-record-formats) (general resources).

### Configuration

This process is configured through a [
Connection
](/docs/usercube/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) in the UI and/or the XML configuration, and in the ```appsettings.agent.json > Connections``` section:

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

> The following example reads RACF data from the ```C:/UsercubeContoso/RacfFile.csv``` iso-8859-1 file and exports it to CSV files in Identity Manager format:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "RACF": {
>       "Path": "C:/UsercubeContoso/RacfFile.csv",
>       "Encoding": "iso-8859-1",
>     }
>   }
> }
> ```

#### Setting attributes

| Name | Details |
| --- | --- |
| Path   required | __Type__    String   __Description__ Path of the RACF file to be exported. |
|  |  |
| --- | --- |
| Encoding   default value: UTF-8 | __Type__    String   __Description__ Encoding of the input file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#See-the-list-of-available-encodings). |

### Output details

This connector is meant to generate to the [
Connection
](/docs/usercube/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) folder one CSV file per record type (0100, 0200, etc.), named ```<connectionIdentifier>_<type>.csv```.

> For example, consider an export with a connection named ```ExportRacf```, and a source file containing the record types 0100, 0120, 0203. Then we will have three output files named ```ExportRacf_0100.csv```, ```ExportRacf_0120.csv``` and ```ExportRacf_0203.csv```.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

This connector has no credential attributes, and therefore does not use [
Connection
](/docs/usercube/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md), nor a [
Connection
](/docs/usercube/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md).

Still, data protection can be ensured through an [
Connection
](/docs/usercube/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) safe.
