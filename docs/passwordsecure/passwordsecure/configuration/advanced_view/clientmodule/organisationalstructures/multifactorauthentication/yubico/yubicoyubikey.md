# Yubico / Yubikey

## Setting up multifactor authentication

### Requirements

The following firewall release must be granted:

- [https://api.yubico.com/wsapi/2.0/verify](https://api.yubico.com/wsapi/2.0/verify)

### Requesting the Yubico API key

An API key must be requested for configuration. For this purpose, use the following link and enter an e-mail address: [Yubico Website](https://upgrade.yubico.com/getapikey/)

![yubico setup](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/yubico/yubico_yubikey_1-en.webp)

Yubikey will then generate a __One Time Password__. The Yubikey used must only be touched in the right place.

![yubico stick](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/yubico/yubico_yubikey_2-en.webp)

The __One Time Password__ is entered directly into the corresponding field.

![yubico OTP](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/yubico/yubico_yubikey_3-en.webp)

Once the general terms and conditions have been approved, the API Key can be requested.

![yubico key](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/yubico/yubico_yubikey_4-en.webp)

### Configuring the Yubikey API

The actual setting up of the multifactor authentication is carried out on the Server Manager in the __Database__ module. First select the required data base; then open the "Features" in the ribbon.
The __Yubico Client ID__ and the __Yubico Secret Key__ must then be entered and saved.

![Configuration yubico](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/yubico/yubico_yubikey_5-en.webp)

The interface is now ready and can be used.

NOTE: The HTTPS endpoint [Yubico Verify](https://api.yubico.com/wsapi/2.0/verify) is used for communication with Yubico. Please make sure that the Netwrix Password Secure Server can connect to this endpoint.

## Configuring multifactor authentication for users

Multifactor authentication can be configured in the Netwrix Password Secure client. It can be done by the user themselves in __Backstage__ in the [Account](/docs/passwordsecure/passwordsecure/configuration/advanced_view/mainmenu/account/account.md) menu. In order to configure the Yubikey, simply select __Yubico OTP__.

![setup second factor](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/yubico/yubico_yubikey_6-en.webp)

Now click in the field for the token and create a token using the Yubikey. For __Yubikey NEO__, you only need to touch the touch panel. The same applies to __Yubikey Nano__.

![yubico stick](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/yubico/yubico_yubikey_2-en.webp)

The token is entered directly into the corresponding field. The multifactor authentication is configured once you’ve clicked on configure.

![Configuration yubico](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/yubico/yubico_yubikey_8-en.webp)

## Logging in with the Yubikey

To login with Multifactor Authentication, the database is first selected and then __User Name__ and __Password__ are entered and confirmed.

After the first password authentication, another window for the __Yubico Key__ is displayed.

![Login yubico](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/yubico/yubico_yubikey_10-en.webp)

Click on the field to highlight it, and enter the __Yubico Key__ by touching the Yubikeys.

![yubico stick](/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/organisationalstructures/multifactorauthentication/yubico/yubico_yubikey_2-en.webp)

The user is now logged on.
