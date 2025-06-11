# Usercube-PasswordGenerator

## Example

### Manually generate a password

Consider an external system that is fulfilled manually and requires a new password.

To avoid writing the password in any file while still choosing a cryptographically secure password, we generate it just before using it.

```--auto-generate true --digit-chars 2 --lower-case-chars 6 --symbol-chars 2 --upper-case-chars 2```

## Arguments

| Argument Name | Details |
| --- | --- |
| --default-password   required if auto-generate is false | __Type__    String   __Description__ Specifies the default password used when ```--auto-generate``` is false.   __Example__   Set default password to password:   ```--default-password password```. |
| --auto-generate   default value: false | __Type__    No Value   __Description__ Specifies if the password should be the default password or generated automatically.   __Example__   Use default password:   ```--auto-generate false```. |
| --digit-chars   default value: 0 | __Type__    Integer   __Description__ Specifies the number of digits in the generated password. If the value is strictly positive, additional digits may be generated if ```--generated-length``` is higher than the sum of ```--digit-chars```, ```--lower-chase-chars```, ```--symbol-chars```, and ```--upper-case-chars```.   __Example__   Generate a password with 2 digits:   ```--digit-chars 2```. |
| --generated-length   default value: 0 | __Type__    Integer   __Description__ Specifies the length of the generated password. If it is lower than the sum of ```--digit-chars```, ```--lower-chase-chars```, ```--symbol-chars```, and ```--upper-case-chars```, the length of the generated password is equal to the sum. If it is higher than the sum of ```--digit-chars```, ```--lower-chase-chars```, ```--symbol-chars```, and ```--upper-case-chars```, extra characters of any type will be generated.   __Example__   Set a password length of 12:   ```--generated-length 12```. |
| --lower-case-chars   default value: 0 | __Type__    Integer   __Description__ Specifies the number of lower case characters in the generated password. If the value is strictly positive, additional lower case characters may be generated if ```--generated-length``` is higher than the sum of ```--digit-chars```, ```--lower-chase-chars```, ```--symbol-chars```, and ```--upper-case-chars```. If the sum of ```--digit-chars```, ```--lower-chase-chars```, ```--symbol-chars```, and ```--upper-case-chars``` is 0, only lower case characters will be generated.   __Example__   Generate a password with 6 lower case characters:   ```--lower-case-chars 6```. |
| --strength-check   default value: "^.\*" | __Type__    String   __Description__ The regular expression to check the password strength. By default, any password passes the strength check.   __Example__   Accept any password:   ```--strength-check ^.*```. |
| --symbol-chars   default value: 0 | __Type__    Integer   __Description__ Specifies the number of symbols in the generated password. If the value is strictly positive, additional symbols may be generated if ```--generated-length``` is higher than the sum of ```--digit-chars```, ```--lower-chase-chars```, ```--symbol-chars```, and ```--upper-case-chars```.   __Example__   Generate a password with 2 symbols:   ```--symbol-chars 2```. |
| --upper-case-chars   default value: 0 | __Type__    Integer   __Description__ Specifies the number of upper case characters in the generated password. If the value is strictly positive, additional upper case characters may be generated if ```--generated-length``` is higher than the sum of ```--digit-chars```, ```--lower-chase-chars```, ```--symbol-chars```, and ```--upper-case-chars```.   __Example__   Generate a password with 2 upper case characters:   ```--upper-case-chars 2```. |
