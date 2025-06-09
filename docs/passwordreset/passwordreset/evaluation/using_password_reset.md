# Using Password Reset

Using Password Reset

# Using Password Reset

Password Reset is a web application. Open a web browser on the server and go to [http://127.0.0.1/pwreset/ ](http://127.0.0.1/pwreset/)to see Password Reset's menu. You can also access Password Reset from another computer by replacing 127.0.0.1 in the URL with the IP address or hostname of the evaluation server.

![using_npr_1](/img/product_docs/passwordreset/passwordreset/evaluation/using_npr_1.png)

You should install an SSL certificate on the web server when using Password Reset on a production network with real passwords. See the [Securing Password Reset](/docs/passwordreset/passwordreset/administration/securing_password_reset.md) topic for additional information.

## Enrolling into Password Reset

You must enroll into Password Reset before you can use it to reset your password or unlock your account. You can enroll manually by providing some information about yourself, or Password Reset can enroll you automatically and send a verification code to confirm your identity.

Follow the steps below to manually enroll into Password Reset.

__Step 1 –__ Click the __Enroll__ item in the menu.

![using_npr_1_1](/img/product_docs/passwordreset/passwordreset/evaluation/using_npr_1_1.png)

__Step 2 –__ Enter a __Username__, __Domain__, and __Password__ in the respective fields.

__Step 3 –__ Select a question from each of the Question dropdown lists, and enter a corresponding in Answer text boxes.

__Step 4 –__ Click __Next__.

Windows increments the bad password count in Active Directory every time you try to enroll with an incorrect password. This may trigger a lockout if the Windows account lockout policy is enabled.

## Resetting a Password

Use the Reset feature when you have forgotten your password. Resetting a password also unlocks the account if it is locked.

Follow the steps below to reset a password.

__Step 1 –__ Click the __Reset__ item in the menu.

__Step 2 –__ Enter a __Username__ and __Domain__ in the respective fields, then click __Next__.

__Step 3 –__ Enter an __Answer__ to the first question in the corresponding field, then click __Next__. Repeat this step for each security question.

__Step 4 –__ Enter the __New Password__ into both text boxes, then click __Next__.

## Unlocking an Account

Use the Unlock feature when you know the password, but have entered it incorrectly too many times and Windows has locked out your account.

Follow the steps below to unlock an account.

__Step 1 –__ Click the __Unlock__ item in the menu.

__Step 2 –__ Enter a __Username__ and __Domain__ in the respective fields, then click __Next__.

__Step 3 –__ Enter an __Answer__ to the first question in the corresponding field, then click __Next__. Repeat this step for each security question.

## Changing a Password

Use the Change feature when you know the password and would like to change it.

Follow the steps below to change a password.

__Step 1 –__ Click the __Change__ item in the menu.

__Step 2 –__ Enter a __Username__ and __Domain__ in the respective fields, then click __Next__.

__Step 3 –__ Enter the __Old Password__, __New Password__, and __Confirm Password__ in the respective field. Click __Next__.

Password Reset's user interface is built with customizable templates. You can easily modify the user interface by editing the templates. Even the error messages are defined in the templates, so you can edit those too. See the [Editing the HTML Templates](/docs/passwordreset/passwordreset/administration/editing_the_html_templates.md) topic of the Administrator's Guide for additional information.

[Open topic with navigation](/docs/default.md#open-topic-with-navigation)
