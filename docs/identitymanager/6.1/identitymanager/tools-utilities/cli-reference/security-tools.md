# Usercube-Decrypt-File

In Usercube, files are encrypted by default. This tool decrypts an input file to save it into an
output file or an OutPutConsole that can be used in Powershell scripts or programs.

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

# Usercube-Encrypt-File

In Usercube, files are encrypted by default. This tool encrypts an input file or the InputConsole of
a Powershell program or file to save it as an encrypted output file. This task cannot be configured
in the configuration.

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

# Usercube-Protect-CertificatePassword

This tool helps protecting `.pfx` archives passwords. Given a plain text password, it generates an
encrypted version, that can be stored in a configuration file in place of the plain text one. The
tool uses a hard-coded secret RSA key to generate the encrypted password. Usercube uses the same key
to retrieve the plain text password and read the `.pfx` archive.

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
    "File": "C:/identitymanagerAgentContoso/contoso.pfx",
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
[RSA encryption](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md).
The encryption is based on the information given in your `appsettings.json` file about either a PFX
file or the location of the
[encryption certificate](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md#encryption-certificate)
in the Microsoft store.

This tool `Usercube-Protect-X509JsonFile` is used to encrypt a whole file, in comparison to the
[`Usercube-Protect-X509JsonValue`](/docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/security-tools.md)
tool that encrypts only a given value. This tool is more appropriate than
`Usercube-Protect-X509JsonValue` when you have many lines to encrypt.

## Examples

The command below encrypts the `appsettings.agent.json` file from the `C:/identitymanagerTraining` folder
and creates the `appsettings.encrypted.agent.json` file in the same folder.

```

./identitymanager-Protect-X509JsonFile.exe --input-json-file-path "C:/identitymanagerTraining/appsettings.agent.json" --output-json-file-path "C:/identitymanagerTraining/appsettings.encrypted.agent.json"

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
[appsettings.agent.json structure](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md):

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
`C:/identitymanagerTraining/appsettings.encrypted.agent.json` following the
[appsettings.agent.json structure](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md):

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
[RSA encryption](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md).
The encryption is based on the information given in your `appsettings.json` file about either a PFX
file or the location of the
[encryption certificate](/docs/identitymanager/6.1/identitymanager/installation-setup/agent-configuration.md#encryption-certificate)
in the Microsoft store.

This tool `Usercube-Protect-X509JsonValue` is used to encrypt only given values, in comparison to
the
[`Usercube-Protect-X509JsonFile`](/docs/identitymanager/6.1/identitymanager/tools-utilities/cli-reference/security-tools.md)
tool that encrypts a whole file. This tool is more appropriate than `Usercube-Protect-X509JsonFile`
when you have only a few lines to encrypt.

## Examples

The command below encrypts the task agent configuration `0` and the OpenId Client `secret` used in
the `appsettings.agent.json` file.

```

./identitymanager-Protect-X509JsonValue.exe --values "0" "secret"

```

As a response, the powershell returns one string per given value.

```

PS C:/identitymanagerTraining/Runtime> ./identitymanager-Protect-X509JsonValue.exe --values "0" "secret"
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
