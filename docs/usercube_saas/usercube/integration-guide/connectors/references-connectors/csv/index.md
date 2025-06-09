# CSV

This connector exports data from a [CSV file](https://en.wikipedia.org/wiki/Comma-separated_values).

This page is about [
CSV
](/docs/usercube_saas/usercube/integration-guide/connectors/references-packages/csv/index.md).

![Package: File/CSV](/img/product_docs/usercube/usercube/integration-guide/connectors/references-connectors/csv/packages_csv_v603.png)

## Overview

Files in CSV format are commonly used to store information.

## Prerequisites

Implementing this connector requires the source file to be in CSV format.

## Export

This export copies the information found in a CSV file and transforms it into a new CSV file in the Identity Manager's format.

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
>     "HRContoso": {
>       "Path": "C:/UsercubeContoso/Contoso/hr_conto(.*?).csv",
>       "PathIncremental": "C:/UsercubeContoso/Contoso/hr_delta_conto(.*?).csv",
>       "Encoding": "UTF-16",
>       "Separator": ";",
>       "IsFileNameRegex": true,
>       "NumberOfLinesToSkip": 1,
>       "ValuesToTrim": [
>         "*",
>         "%"
>       ]
>     }
>   }
> }
> ```

#### Setting attributes

| Name | Details |
| --- | --- |
| Path   Required if PathIncremental is not defined. | __Type__    String   __Description__ Path of the input file to be used for complete synchronization. |
| PathIncremental   Required if Path is not defined. | __Type__    String   __Description__ Path of the input file to be used for incremental synchronization. |
| IsFileNameRegex   optional | __Type__    Boolean   __Description__ ```True``` to enter a regex instead of a normal string for ```Path``` and ```PathIncremental```.    __Note:__ if several files correspond to the regex, then the export will use the last created file.   __Info:__ useful when the filename is only partially known, for example when using a generated file. |
| ValuesToTrim   optional | __Type__    String List   __Description__ Ordered list of the characters to trim at the beginning and at the end of the headers and values of the input file.   __Note:__ the second value will be trimmed after the first, the order is important. __Example__ When writing ```$``` first and then ```%``` in ```ValuesToTrim```, then "$%I am an example$%" becomes "I am an example$". |
| Encoding   default value: UTF-8 | __Type__    String   __Description__  Encoding of the input file. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#see-the-list-of-available-encodings). |
| NumberOfLinesToSkip   default value: 0 | __Type__    Int32   __Description__  Number of lines to skip in order to reach the line used as data header. |

### Output details

This connector is meant to generate a CSV file, named ```<connectionIdentifier>.csv```, to the Export Output folder. See the [Application Settings](/docs/usercube_saas/usercube/integration-guide/network-configuration/agent-configuration/appsettings/index.md)topic for additional information.

For example, when exporting a connection named ```HRCountries```, the output file will be named ```HRCountries.csv```.

The file's columns come from the header line from the input CSV file.

All columns with headers, even empty ones, will be written to the output. However, columns without headers will not be written.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

This connector has no credential attributes, and therefore does not use [](/docs/usercube_saas/usercube/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md)[
Connection
](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md), nor a [
Connection
](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md).

Still, data protection can be ensured through an [
Connection
](/docs/usercube_saas/usercube/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) safe.
