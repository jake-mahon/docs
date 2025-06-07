# First factor

## What is meant by first factor?

It is a process that regulates access to our system.

## Requirements

With the user setting __Edit first factor__ you have the possibility to define another factor for authentication than the standard password.

![Edit first factor](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/firstfactor/first_factor_1-en.png)

## Factors

### Smartcard (only on Advanced view)

The configuration is done via the user setting __First factor__.

![Smartcard 1st factor](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/firstfactor/first_factor_2-en.png)

NOTE: This option is only valid for users in master key mode

__CAUTION:__ Be Aware"
The smartcard logon tries to determine whether the certificate belongs to the user to be logged on based on the applicant in the smartcard certificate. This is done using regex, the default regex ```^{username}[.@\\/-_:]({domain})$``` or ```^({domain})[.@\\/-_:]({username})$``` is applied to the applicant. In this case, ```{username}``` is replaced with the user to be registered and ```{domain}``` is replaced with the domain in the AD profile in the regex and if the regex query is positive, the user is registered. If the format of your applicant in your certificates is not compatible with these two regex queries, you must set a custom regex query in the Server Manager. Please note that ```{username}``` for username and ```{domain}``` for the AD domain SHOULD be present in the regex query. If the domain must be explicitly specified, it must be written in capital letters.

In addition, the smartcard certificate must of course also be valid on the server!

## Fido2 (only at the Web Application)

## Requirement

For Fido2 it is mandatory that SMTP ([Advanced settings](/docs/product_docs/passwordsecure/passwordsecure/configuration/server_manager/main_menu/advanced_settings.md)) is configured. In addition, an e-mail address must be stored for the AD users.

Furthermore, the URL of the Web Application must be stored in the Server Manager:

![Edit WebClient URL](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/firstfactor/first_factor_3-en.png)

### Configuration

The configuration is done via the user setting __First Factor__.

![FIDO2](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/firstfactor/first_factor_4-en.png)

As soon as an AD user logs on to the Web Application, he gets the following prompt

![prompt](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/firstfactor/first_factor_5-en.png)

After clicking on __Setup Fido2 access__ in the mail, Fido2 is configured.
