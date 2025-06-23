# Conclusion

Congratulations! You have successfully installed, configured, and used Netwrix Password Reset. This
brief guide has introduced you to Password Reset, but you can do much more with it. The
Administrator's Guide covers many more topics, including:

- Using two-factor authentication with SMS or email verification codes
- Automatically enrolling users when they request a rest or unlock.
- Sending email alerts to warn users of account activity.
- Increasing security by installing the Web Interface in a DMZ and limiting permissions for the
  service account.
- Moving database to SQL Server.
- Creating complex filters in the Data Console.
- Modifying the user interface and error messages.

You can learn more about Password Reset and Password Policy Enforcer at
[www.netwrix.com/password_policy_enforcer](https://www.netwrix.com/password_policy_enforcer.html).

Please [contact Netwrix support](mailto:support@netwrix.com) if you have any questions.

# Configuring Password Reset

Configuring Password Reset

# Configuring Password Reset

In the previous section, you used Password Reset with a default configuration. You can use the
Configuration Console to edit the configuration settings. Click Start > Netwrix Password Reset > NPR
Configuration Console to open the console.

![configuring_npr_1](/img/product_docs/passwordpolicyenforcer/passwordreset/administration/configuring_npr_1.webp)

The Configuration Console has a tabbed layout. Click the tabs along the top to see the various
settings. Most of the settings are self-explanatory. Press **F1** on any of the tabs to see the help
page for the current tab.

Configuration changes are applied when you click **Apply** or **OK**. Clicking **OK** also closes
the Configuration Console.

**NOTE:** Password Reset includes a 30-day evaluation license for up to 50 users.
Please[ contact Netwrix support](mailto:support@netwrix.com) if you would like to evaluate Netwrix
Password Reset with more than 50 users.

# Using Password Reset

Using Password Reset

# Using Password Reset

Password Reset is a web application. Open a web browser on the server and go to
[http://127.0.0.1/pwreset/ ](http://127.0.0.1/pwreset/)to see Password Reset's menu. You can also
access Password Reset from another computer by replacing 127.0.0.1 in the URL with the IP address or
hostname of the evaluation server.

![using_npr_1](/img/product_docs/passwordreset/passwordreset/evaluation/using_npr_1.webp)

You should install an SSL certificate on the web server when using Password Reset on a production
network with real passwords. See the
[Securing Password Reset](/docs/passwordreset/3.3/password-reset/advanced/securing-password-reset.md) topic for additional
information.

## Enrolling into Password Reset

You must enroll into Password Reset before you can use it to reset your password or unlock your
account. You can enroll manually by providing some information about yourself, or Password Reset can
enroll you automatically and send a verification code to confirm your identity.

Follow the steps below to manually enroll into Password Reset.

**Step 1 –** Click the **Enroll** item in the menu.

![using_npr_1_1](/img/product_docs/passwordreset/passwordreset/evaluation/using_npr_1_1.webp)

**Step 2 –** Enter a **Username**, **Domain**, and **Password** in the respective fields.

**Step 3 –** Select a question from each of the Question dropdown lists, and enter a corresponding
in Answer text boxes.

**Step 4 –** Click **Next**.

Windows increments the bad password count in Active Directory every time you try to enroll with an
incorrect password. This may trigger a lockout if the Windows account lockout policy is enabled.

## Resetting a Password

Use the Reset feature when you have forgotten your password. Resetting a password also unlocks the
account if it is locked.

Follow the steps below to reset a password.

**Step 1 –** Click the **Reset** item in the menu.

**Step 2 –** Enter a **Username** and **Domain** in the respective fields, then click **Next**.

**Step 3 –** Enter an **Answer** to the first question in the corresponding field, then click
**Next**. Repeat this step for each security question.

**Step 4 –** Enter the **New Password** into both text boxes, then click **Next**.

## Unlocking an Account

Use the Unlock feature when you know the password, but have entered it incorrectly too many times
and Windows has locked out your account.

Follow the steps below to unlock an account.

**Step 1 –** Click the **Unlock** item in the menu.

**Step 2 –** Enter a **Username** and **Domain** in the respective fields, then click **Next**.

**Step 3 –** Enter an **Answer** to the first question in the corresponding field, then click
**Next**. Repeat this step for each security question.

## Changing a Password

Use the Change feature when you know the password and would like to change it.

Follow the steps below to change a password.

**Step 1 –** Click the **Change** item in the menu.

**Step 2 –** Enter a **Username** and **Domain** in the respective fields, then click **Next**.

**Step 3 –** Enter the **Old Password**, **New Password**, and **Confirm Password** in the
respective field. Click **Next**.

Password Reset's user interface is built with customizable templates. You can easily modify the user
interface by editing the templates. Even the error messages are defined in the templates, so you can
edit those too. See the
[Editing the HTML Templates](/docs/passwordreset/3.3/password-reset/administration/html-template-customization.md) topic of the
Administrator's Guide for additional information.

# Using Password Reset with Password Policy Enforcer

Using Password Reset with Password Policy Enforcer

# Using Password Reset with Password Policy Enforcer

Password Policy Enforcer is a configurable password filter that enforces granular password policies
with many advanced features. Password Policy Enforcer helps to secure your network by ensuring that
users choose strong passwords.

![using_npr_with_password_policy](/img/product_docs/passwordreset/passwordreset/evaluation/using_npr_with_password_policy.webp)

Password Reset can integrate with Password Policy Enforcer to help users choose a compliant
password. Password Reset displays the Password Policy Enforcer password policy message when a user
is prompted for their new password, and the Password Policy Enforcer rejection message if the new
password does not comply with the password policy.

![using_npr_with_password_policy_1](/img/product_docs/passwordreset/passwordreset/evaluation/using_npr_with_password_policy_1.webp)

Select the **Password Policy Enforcer integration** check box in the General tab of the Password
Reset Configuration Console if you have installed and configured Password Policy Enforcer. The
Password Policy Enforcer Evaluator's Guide will help you to install and configure Password Policy
Enforcer if you are not currently using it.

An Password Reset license does not include a Password Policy Enforcer license. See
[Administration](/docs/passwordreset/3.3/password-policy-enforcer/index.md) in Password
Policy Enforcer topic for additional information.
