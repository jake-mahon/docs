# Usercube-Upgrade-ConfigurationVersion

This tool is used to upgrade your configuration from your current version entered in settings to the latest version.

## Examples

```

./Usercube-Upgrade-ConfigurationVersion.exe --version "5.1.0" --xml-path "C:/UsercubeDemo/Conf" --output "C:/UsercubeDemo/Conf2"

```

In this example, the configuration files are in the folder "C:/UsercubeDemo/Conf" and at version "5.1.0". This tools will upgrade all the xml files to the latest version and save them in the folder "C:/UsercubeDemo/Conf2".

## Arguments

| Argument Name | Details |
| --- | --- |
| --version   required | __Type__    String   __Description__ Current version. |
| --xml-path   required | __Type__    String   __Description__ Current xml configuration folder to migrate. |
|  |  |
| --- | --- |
| --output   required | __Type__    String   __Description__ Path of the folder where the result will be saved. |
|  |  |
| --- | --- |
| --log-level   optional | __Type__    LogLevel   __Description__ Level of log information among: ```Verbose```; ```Debug```; ```Information```; ```Warning```; ```Error```; ```Fatal```. |
