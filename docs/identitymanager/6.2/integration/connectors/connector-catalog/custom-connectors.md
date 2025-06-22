# PowerShellProv

This connector writes to an external system via a
[PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/overview) script.

This page is about [ PowerShellProv ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: Custom/PowerShellProv](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/powershellprov/packages_powershellprov_v603.webp)

## Overview

PowerShell is a cross-platform task automation and configuration management framework, consisting of
a command-line shell and scripting language. Unlike most shells which accept and return text,
PowerShell is built on top of the .NET Common Language Runtime (CLR), and accepts and returns .NET
objects. This fundamental change brings entirely new tools and methods for automation.

## Prerequisites

Implementing this connector requires:

- making sure that the command `powershell.exe`, inside the command prompt (`cmd.exe`), does execute
  a PowerShell terminal;
- knowledge of scripting in PowerShell 5.1 or later,
  [see here PowerShell's requirements](https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/install/windows-powershell-system-requirements);
- making sure that the device hosting the agent has its execution policy properly configured to
  execute the given PowerShell script;
- checking the targeted system's requirements (environment, libraries, etc.), as this connector is
  meant to connect Identity Manager to a PowerShell-compatible system;
- writing and testing a PowerShell script (`.ps1`) according to Netwrix Identity Manager (formerly
  Usercube)' guidelines below.

## Export

There are no export capabilities for this connector.

## Fulfill

This connector executes a PowerShell script for the creation, deletion and update of any entity
linked to the managed system.

> For example, it can fulfill the `mailboxes` entity from Microsoft Exchange.

### Configuration

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

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
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> The following example fills a CSV file through the script `Fulfill-CSV.ps1`, for a single target
> managed system identified by the `PowerShellCsvFulfillment` subsection:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "PowerShellCsvFulfillment": {
>       "PowerShellScriptPath": "C:/UsercubeDemo/Scripts/Fulfill-CSV.ps1",
>       "Options": {
>         "Message": "Hello",
>         "Login": "admin",
>         "Password": "secret"
>       }
>     }
>   }
> }
> ```

#### Setting attributes

| Name                          | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PowerShellScriptPath required | **Type** String **Description** Path of the executed PowerShell script (.ps1).                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Options optional              | **Type** String Pair List **Description** List of key-value pairs for all the variables required by the PowerShell script. **Example** `   "Options": {    "Login": "admin",    "Password": "secret"   }` In order for the script to access these options, the following two lines of code must be included in the script: `$options = [System.Console]::ReadLine()   $options = ConvertFrom-Json $options` Afterwards, any one of these variables can be easily accessed: `$options.Login$options.Password   # -> admin and secret` |

### Write a script

See how to
[ Write a PowerShell Script for Provisioning ](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md)to
allow provisioning with this connector.

## Authentication

### Password reset

The PowerShell script manages password reset.

### Credential protection

Data protection can be ensured through:

- [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), configured in
  the `appsettings.encrypted.agent.json` file;
- An [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) safe;

| Attribute            | Naming Convention for the Key in Azure Key Vault  |
| -------------------- | ------------------------------------------------- |
| Login (optional)     | `Connections--<identifier>--Options--Login`       |
| Password (optional)  | `Connections--<identifier>--Options--Password`    |
| PowerShellScriptPath | `Connections--<identifier>--PowerShellScriptPath` |

- a [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) able to store
  the attributes from the `Options` section that are compatible with CyberArk.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Identity Manager from `appsettings.cyberark.agent.json`.

> For example, consider `Login` and `Password` values stored in the `PowerShellCsv_Account` account:
>
> ```
> appsettings.cyberark.agent.json
> {
>   "Connections": {
>     ...
>     "PowerShellCsvFulfillment": {
>       "Options": {
>         "Login": "PowerShellCsv_Account",
>         "Password": "PowerShellCsv_Account"
>       }
>     }
>   }
> }
> ```

# PowerShellSync

This connector exports data from an external system via a
[PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/overview) script.

This page is about [ PowerShellSync ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md).

![Package: Custom/PowerShellSync](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/powershellsync/packages_powershellsync_v603.webp)

## Overview

PowerShell is a cross-platform task automation and configuration management framework, consisting of
a command-line shell and scripting language. Unlike most shells which accept and return text,
PowerShell is built on top of the .NET Common Language Runtime (CLR), and accepts and returns .NET
objects. This fundamental change brings entirely new tools and methods for automation.

Data can be synchronized from any managed system by writing a PowerShell script that generates the
relevant CSV files for Identity Manager. The PowerShellSync connector provides all the necessary
tools for an easy integration of the script with Identity Manager's synchronization mechanisms.

When Identity Manager provides a native connector for a given system, for example the Active
Directory connector, Netwrix Identity Manager (formerly Usercube)highly recommends using the native
connector rather than this PowerShell connector.

## Prerequisites

Implementing this connector requires:

- making sure that the command `powershell.exe`, inside the command prompt (`cmd.exe`), does execute
  a PowerShell terminal;
- knowledge of scripting in PowerShell 5.1 or later,
  [see here PowerShell's requirements](https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/install/windows-powershell-system-requirements);
- making sure that the device hosting the agent has its execution policy properly configured to
  execute the given PowerShell script;
- checking the targeted system's requirements (environment, libraries, etc.), as this connector is
  meant to connect Identity Manager to a PowerShell-compatible system;
- writing and testing a PowerShell script (`.ps1`) according to Netwrix Identity Manager (formerly
  Usercube)' guidelines below.

## Export

This connector executes a PowerShell script that generates one or several CSV files. These files are
to be used during the synchronization of the data from the managed system targeted by the
PowerShellSync connector.

The CSV files must be written to the `$OutputPath`.

The export is executed by a job from the UI, or via `Usercube-Export-Powershell.exe` in the command
prompt.

### Configuration

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

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
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> For example:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "PowerShellExport": {
>       "PowerShellScriptPath": "C:/UsercubeDemo/Scripts/Export-CSV.ps1",
>     }
>   }
> }
> ```

##### Setting attributes

| Name                          | Details                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| PowerShellScriptPath required | **Type** String **Description** Path of the PowerShell script (.ps1) to be executed. |

### Write a script

Identity Manager provides a few variables to be used in the PowerShell script.

| Name          | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| OutputPath    | **Type** String **Description** Prefix of the path of the generated CSV file. **Info:** the synchronization process requires the generated CSV file to be located in a very specific location, with a specific name prefix. Hence the need for this predefined variable. **Value** [`<TempFolderPath>`](/docs/identitymanager/6.2/administration/agent-configuration/agent-settings.md)`/ExportOutput/<connectionIdentifier>_` **Example** In this example, if the temp folder is named `Temp` and the connection `PowerShellExport`, then the generated file is: `Temp/ExportOutput/PowerShellExport_users.csv`. ```generateCSV | Export-CSV ($OutputPath + "users.csv")` where`generateCSV``` is a generic PowerShell method that generates CSV files. |
| IsIncremental | **Type** Boolean **Description** Variable to be used to provide a different behavior for complete and incremental synchronization.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Fulfill

There are no fulfill capabilities for this connector.

# Robot Framework

This connector writes to an external system via a [Robot Framework](https://robotframework.org)
script.

This page is about [ Robot Framework ](/docs/identitymanager/6.2/integration/connectors/connector-packages.md)

![Package: Custom/Robot Framework](/img/product_docs/identitymanager/identitymanager/integration-guide/connectors/references-connectors/robotframework/packages_robot_v603.webp)

## Overview

Robot Framework is an open-source automation framework which can be used for robotic process
automation (RPA). This framework is easy to use thanks to its human-readable syntax.  
It has a modular architecture that can be extended by
[libraries](https://robotframework.org/#libraries) implemented with Python or Java. These libraries
provide various tools to interact with a managed system.

## Prerequisites

Implementing this connector requires the agent to include the following elements:

- [Python](https://www.python.org/downloads/) 3.7 or above. Specific Robot Framework libraries may
  require a specific Python version;
- Python folder location in the `PATH` environment variable list and the location of its subfolder
  `Scripts`;
- Robot Framework: use `pip install robotframework` in the command prompt. If the installation ran
  correctly, `robot.exe` should be in your path. You can confirm this by running `gcm robot` in a
  powershell console.

## Export

There are no export capabilities for this connector.

## Fulfill

This connector can create, update and/or delete any entity linked to the managed system.

### Configuration

This process is configured through a
[ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

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
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> The following example fills in a CSV file by using the script `FulfillRobotFramework.robot`:
>
> ```
> appsettings.agent.json
> {
>   "Connections": {
>     ...
>     "RobotFrameworkFulfillment": {
>       "RobotFrameworkScriptPath": "C:/UsercubeDemo/Scripts/FulfillRobotFramework.robot",
>       "Options": {
>         "Message": "Hello"
>       }
>     }
>   }
> }
> ```

#### Setting attributes

| Name                              | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RobotFrameworkScriptPath required | **Type** String **Description** Path to the executed Robot Framework script (.robot).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Options optional                  | **Type** String Pair List **Description** List of key-value pairs for all the variables required by the PowerShell script. **Example** `   "Options": {    "Login": "admin",    "Password": "secret"   }` Access these options in the script using the following method: `${login}= Get Secure Data Login False   ${password}= Get Secure Data Password True` **Info:** when the boolean argument from `Get Secure Data` is set to `True`, then the value is stored in the variable and erased from memory, hence not retrievable on next call. This enables control over sensitive data like passwords by defining the lifetime of the variable containing sensitive data. **Warning:** never use `Get Secure Data` when `Options` is empty. |

### Write a script

See how
to[ Write a Robot Framework Script ](/docs/identitymanager/6.2/integration/connectors/connector-basics/configuration.md) to
allow provisioning with this connector.

## Authentication

### Password reset

The script manages password reset.

### Credential protection

Data protection can be ensured through:

- [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md), configured in
  the `appsettings.encrypted.agent.json` file;
- an [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) safe;

| Attribute                | Naming Convention for the Key in Azure Key Vault      |
| ------------------------ | ----------------------------------------------------- |
| Login (optional)         | `Connections--<identifier>--Options--Login`           |
| Password (optional)      | `Connections--<identifier>--Options--Password`        |
| RobotFrameworkScriptPath | `Connections--<identifier>--RobotFrameworkScriptPath` |

- a [ Connection ](/docs/identitymanager/6.2/development/configuration-toolkit/xml-configuration.md) able to store
  the attributes from the `Options` section that are compatible with CyberArk.

Protected attributes are stored inside a safe in CyberArk, into an account whose identifier can be
retrieved by Identity Manager from `appsettings.cyberark.agent.json`.

> For example, consider `Login` and `Password` values stored in the `RobotFramework_Account`
> account:
>
> ```
> appsettings.cyberark.agent.json
> {
>   "Connections": {
>     ...
>     "RobotFrameworkFulfillment": {
>       "Options": {
>         "Login": "RobotFramework_Account",
>         "Password": "RobotFramework_Account"
>       }
>     }
>   }
> }
> ```
