# Autofill in Android

With autofill, the credentials are transferred from the Netwrix Password Secure app directly to the
login screens. This works for websites in the browser as well as for other apps.

#### Requirements

For automatic registration, the service must be enabled in the User Help¹ and Show via other apps¹
Netwrix Password Secure App must be enabled.

#### Autofill

The login data is entered as soon as the app finds a corresponding mask on a web page or in an app.
In some masks the process starts automatically, in others it is necessary to type in the first
field.

There are two possible scenarios.

- The **Netwrix Password Secure app** displays all matching passwords. The user selects the desired
  password and the app enters it.
- Selection of a password in the Netwrix Password Secure App. This dialog opens automatically if no
  password is found.

No password found

If no password is found that matches the app or the website called up, the desired password must
first be selected.

Exactly one password found

If there is a data set that contains exactly the URL that is called up, the corresponding password
can be suggested. A simple click on the password is then sufficient to pass the data to the website
or app.

Multiple passwords found

If several matching passwords are found in the database, the desired one must be selected.

NOTE: Depending on the current state, it may be necessary to authenticate on the app before
selecting or confirming the password to be entered. The database then has to be unlocked via the
password or Touch ID first.

# Autofill in iOS

The most important comfort feature of the Netwrix Password Secure app is probably the autofill. With
autofill, the credentials from the Netwrix Password Secure app are transferred directly to the login
screens. This works both with websites in the browser and with other apps.

#### Requirements

In order to ensure automatic registration, a few prerequisites must be met. First of all, the
automatic registration must be set up in the settings. If the **iOS keychain** is not needed, it
should be deactivated. This makes handling a bit easier. Finally, a database connection must exist
and access to passwords must be possible.

#### Autofill

**Autofill** always occurs when a login mask is found. No matter whether this is in an app or on a
website. For some login masks, the auto-enrollment process starts automatically. For other masks,
you have to type once into the first field. The autofill itself can be divided into three different
scenarios.

Dialog

Depending on the configuration and scenario, the dialog for entry can have different
characteristics:

- First, one or more passwords are displayed that match the current page or app. These can be
  selected and entered with a click.
- It is also possible to open the dialog for selecting a password. If no password is found, this
  dialog is displayed directly.
- Finally, the iOS keychain can also be opened. If this function is not needed, it can be
  deactivated. The corresponding option will then no longer be offered.

No password found

If no password is found that matches the app or the website, the desired password must first be
selected.

Exact password found

If there is a data record that contains exactly the URL that is called up, the corresponding
password can be suggested. A simple click on the password is then sufficient to pass the data to the
website or app.

Several passwords found

If several matching passwords are found in the database, the desired one must be selected.

NOTE: Depending on the current state, it may be necessary to authenticate to the app before
selecting or confirming of the password to be entered. The database then has to be unlocked via the
password, Touch ID or Face ID.

# Setting up autofill

The most important comfort feature of the Netwrix Password Secure App is probably the autofill, i.e.
the possibility to enter access data directly into the input mask. The autofill must first be set up
or configured.

#### Setting up the autofill under iOS

In the settings, first select the item Passwords & Accounts and then Automatically fill in. As soon
as Auto-fill is activated, all options for filling in login windows are offered. Here one then
selects Netwrix Password Secure.

RECOMMENDED: We recommend deactivating the **keychain (iOS)** as well as any other apps offered to
prevent misunderstandings in usage.

![password options](/img/product_docs/passwordsecure/passwordsecure/configuration/mobiledevices/setup/setting_up_autofill/password-options-en.webp)

#### Setting up automatic registration on Android

In the settings under Operating aids ¹, among the downloaded services, the Netwrix Password Secure
app is activated.

In addition, you must define in the settings under Show via other apps that Netwrix Password Secure
may be shown via other apps.

RECOMMENDED: We recommend to use only Netwrix Password Secure for automatic registration and to
deactivate all other apps here. This prevents possible misunderstandings in the operation.
