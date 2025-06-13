# Operation

Operation of the Web Application has been based as far as possible on the operation of the Netwrix Password Secure client. Nevertheless, there are some differences that need to be noted and they are described here.

NOTE: There is also a Basic view in the Web Application. Everything worth knowing can be found at the following link: web view Basic view

#### Login

There is no database profile on the Web Application. All databases approved for the Web Application will be made available. The following information needs to be entered to log in:

Database name

User name

Password

![Login WebClient](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/web_applicaiton/operation/installation_with_parameters_167-en.png)

After successfully logging in, the last database name used and the last registered user will be saved. You thus only need to enter the password for the next login.

#### Transferring login data via the URL

The __database name__ and __user name__ can be transferred directly via the URL. The following parameters are used here:

- __database__ for transferring the database nam
- __username__ for transferring the user name

The parameters are simply attached to the URL for the Web Application and separated from one another with a __&__.

Example

You want to call up the Web Application under __https://psr\_Web Application.firma.com.__ In the process, you want the login mask to be directly filled with the database __Passwords__ and the user name __Anderson__. The following URL is then used: __https://psr\_Web Application.firma.com/authentication/ login?database=Passwords&username=Anderson__

NOTE: It is possible to only transfer the database. The user name is not absolutely necessary.

#### Structure

The Web Application is split into a number of sections that are described below.

![Operation](/img/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/web_applicaiton/operation/installation_with_parameters_168-en.png)

1. [Header](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/web_applicaiton/operation/header/header.md)

The header provides access to some essential functions.

2. [Navigation bar](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/web_applicaiton/operation/navigation_bar/navigation_bar.md)

It is possible to switch between module and filter view on the navigation bar.

3. [Filter or structure area](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/web_applicaiton/operation/filter_or_structure/filter_or_structure_area.md)

As is also the case on the client, it is possible to select between filter and structure.

4. [Menu](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/web_applicaiton/operation/menu_bar/menu.md)

The ribbon on the client has been replaced by a menu bar on the Web Application.

5. [List view](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/web_applicaiton/operation/list_view/list_view.md)

The records currently selected using the filter can be viewed in list view.

6. [Reading pane](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/web_applicaiton/operation/reading_pane/reading_pane_webclient.md)

The reading pane shows you details about the relevantly selected element.

7. [Footer](/versioned_docs/passwordsecure_9.1/passwordsecure/configuration/web_applicaiton/operation/footer/footer.md)

Various information about the record is displayed in the footer. For example, logbook entries or the history.
