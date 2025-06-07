# Usercube-Decrypt-File

In Identity Manager, files are encrypted by default. This tool decrypts an input file to save it into an output file or an OutPutConsole that can be used in Powershell scripts or programs.

## Examples

### Result loaded in OutPutConsole (PowerShell Script)

The following example, used in a Powershell script, saves in the variable ```decryptFile``` the string obtained by decrypting the files specified by the ```ordersFile``` variable. The decryption is made using the agent side certificate defined in the agent's ```appsettings.json```.

```

$decryptFile = & ./Usercube-Decrypt-File.exe --files $ordersFile

```

## Arguments

| Argument Name | Details |
| --- | --- |
| --files (-f)   required | __Type__    String   __Description__ List of all the files to decrypt. |
| --encoding (-e)   default value: UTF-8 | __Type__    String   __Description__ Encoding used for any encryption/decryption. [See the list of available encodings](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding#See-the-list-of-available-encodings). |
| --output-path (-o)   optional | __Type__    String   __Description__ Output path to save all decrypted files.   __Note:__ used only when the result is saved in a file. |
|  |  |
| --- | --- |
| --log-level   optional | __Type__    LogLevel   __Description__ Level of log information among: ```Verbose```; ```Debug```; ```Information```; ```Warning```; ```Error```; ```Fatal```. |
