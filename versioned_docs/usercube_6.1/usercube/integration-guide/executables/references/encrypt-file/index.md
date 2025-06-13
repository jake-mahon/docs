# Usercube-Encrypt-File

In Usercube, files are encrypted by default. This tool encrypts an input file or the InputConsole of a Powershell program or file to save it as an encrypted output file.
This task cannot be configured in the configuration.

## Examples

### Launch the tools with input console (powershell script)

The following example, used in a Powershell script, decrypts the file(s) specified by the ```csvResult``` variable and saves the result in the location specified in ```resultsFile```. The encryption is made using the certificate's thumbprint, store location and store name.

```

$csvResult | & ./Usercube-Encrypt-File.exe --file-cert-thumbprint $certificateThumbprint --file-cert-store-location $certificateStoreLocation --file-cert-store-name $certificateStoreName --output-path $resultsFile

```

## Arguments

| Argument Name | Details |
| --- | --- |
| --files (-f)   optional | __Type__    String   __Description__ List of all the files to encrypt.   __Note:__ required when the entry is made of files. |
| --output-path (-o)   optional | __Type__    String   __Description__ Output path to save the encrypted files or input console. |
|  |  |
| --- | --- |
| --file-cert-thumbprint   optional | __Type__    String   __Description__ Thumbprint of the certificate when the certificate is in the store. |
| --file-cert-dn   optional | __Type__    String   __Description__ Subject Distinguished Name of the certificate when the certificate is in the store. |
| --file-cert-store-location   optional | __Type__    String   __Description__ Store location of the certificate when the certificate is in the store. |
| --file-cert-store-name   optional | __Type__    String   __Description__ Store name of the certificate when the certificate is in the store. |
| --file-cert-file   optional | __Type__    String   __Description__ File path of the certificate when the certificate is in a PFX file. |
| --file-cert-password   optional | __Type__    String   __Description__ Password of the certificate when the certificate is in a PFX file. |
|  |  |
| --- | --- |
| --log-level   optional | __Type__    LogLevel   __Description__ Level of log information among: ```Verbose```; ```Debug```; ```Information```; ```Warning```; ```Error```; ```Fatal```. |
