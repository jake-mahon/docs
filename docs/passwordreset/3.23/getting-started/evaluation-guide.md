# Evaluation

Netwrix Password Policy Enforcer is an advanced password filter for Windows. This Evaluator's Guide
shows you how to quickly install, configure, and test Password Policy Enforcer. Password Policy
Enforcer helps you to secure your network by ensuring that users choose strong passwords. If a user
chooses a password that does not comply with the password policy, Password Policy Enforcer
immediately rejects the password and tells the user why their password was rejected.

![introduction_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/introduction_3.webp)

Unlike password cracking products that check passwords after they are accepted by the operating
system, Password Policy Enforcer checks new passwords immediately to ensure that weak passwords do
not jeopardize system security.

**NOTE:** You can also use Password Policy Enforcer to ensure that passwords are compatible with
other systems, and to synchronize passwords with other systems and applications.

The
[Administration](/docs/passwordreset/3.23/getting-started/overview.md)
topic contains additional installation and configuration information. Refer to the Administrator's
topic for more detailed coverage of the information in this document.

# Netwrix Password Reset and Web

Netwrix Password Reset and Web allows users to securely manage their passwords from a web browser.
Both products integrate with Netwrix Password Policy Enforcer to ensure that passwords comply with
the password policy, and to help users choose compliant passwords.

Password Resetis a self-service password management system that allows users to change their
password, reset a forgotten password, and unlock their account without calling the helpdesk. It
includes the Password Reset Client, which allows users to access APR from the Windows Logon and
Unlock screens.

The [Web](/docs/passwordreset/3.23/administration/apr-website.md)
application allows users to change their password from a web browser.

Go
to[](https://www.netwrix.com/active_directory_password_reset_tool.html)[ www.netwrix.com](https://www.netwrix.com/password_policy_enforcer.html)
for more information, or to download an evaluation copy.

![anixis_password_reset_and](/img/versioned_docs/passwordreset_3.23/password_policy_enforcer/evaluation/anixis_password_reset_and.webp)

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

Please contact Netwrix support[ ](mailto:support@anixis.com)if you have any questions.

# Configuring Password Reset

In the previous section, you used Password Reset with a default configuration. You can use the
Configuration Console to edit the configuration settings. Click Start > ANIXIS Password Reset > APR
Configuration Console to open the console.

![configuring_apr_1](/img/versioned_docs/passwordreset_3.23/password_reset/evaluation/configuring_apr_1.webp)

The Configuration Console has a tabbed layout. Click the tabs along the top to see the various
settings. Most of the settings are self-explanatory. Press **F1** on any of the tabs to see the help
page for the current tab.

Configuration changes are applied when you click **Apply** or **OK**. Clicking **OK** also closes
the Configuration Console.

**NOTE:** Password Reset includes a 30-day evaluation license for up to 50 users. Please contact
Netwrix support if you would like to evaluate Netwrix Password Reset with more than 50 users.

# Data Console

The Data Console allows you to view and export data collected by APR. Click **Start** > **ANIXIS
Password Reset** > **APR Data Console** to open the console.

The Data Console has three tabs. The Recent Activity tab shows a chart of recent requests. The chart
is empty when Password Reset is first installed, but it will populate itself as the system is used.

![the_data_console](/img/versioned_docs/passwordreset_3.23/password_reset/evaluation/the_data_console.webp)

The bars in the chart show how many successful enrollments, resets, unlocks, and changes occurred
every day. You can click the bars to see a filtered view of the events for that day.

The Audit Log tab contains all the events recorded by Password Reset. You can create filters to show
only some of the events. Filters are very flexible and easy to create.

![the_data_console_1](/img/versioned_docs/passwordreset_3.23/password_reset/evaluation/the_data_console_1.webp)

The Users tab contains information about each user. You can export the data in the Audit Log and
Users tabs from the File menu.

# Evaluation

Password Reset is a self-service password management system that helps organizations to reduce the
number of password related help desk calls. Password Reset allows users to securely change their
password and unlock their account, even if they have forgotten their password.

This Evaluator's Guide shows you how to quickly install, configure, and test Password Reset. You
should read this guide if you are evaluating Password Reset, or if you are using Password Reset for
the first time.

Please contact Netwrix support[ ](mailto:support@anixis.com)if you have any questions, or if you
encounter any problems during your evaluation.

![introduction_1_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_reset/evaluation/introduction_1_1.webp)

The Password Reset Administrator's Guide contains additional installation and configuration
information. Refer to the Administrator's Guide for more detailed coverage of the topics discussed
in this guide.

# Installation

Password Reset has two server components, and an optional client. See the
[Password Reset Client](/docs/passwordreset/3.23/getting-started/evaluation-guide.md)
topic for additional information. Both server components can be installed on one server, or they may
be installed on separate servers if your web server is in a DMZ. As the evaluation server is not in
a DMZ, we will install both components on one server.

The Web Interface is the component that users interact with. It accepts user requests, encrypts
them, and sends them to the Password Reset Server. The Password Reset Server is the component that
performs requests on behalf of users. It receives requests from the Web Interface, checks the user's
credentials, and performs the requested task if the credentials are valid.

![installing_apr_1](/img/versioned_docs/passwordreset_3.23/password_reset/evaluation/installing_apr_1.webp)

You only need one Windows 2008 to 2019 server for the evaluation. The server can be a domain
controller or a member server.

Follow the steps below to install Password Reset on the server.

**Step 1 –** Start the Password Reset Setup wizard (APR323.exe).

**Step 2 –** Click **Next**.

**Step 3 –** Read the license agreement. Click **I accept the terms of the license agreement**.
Click **Next** if you accept all terms.

**Step 4 –** Click **Next**, then click **OK** to install IIS, if asked.

**Step 5 –** Enter **aprsvc** in the User Name field.

**Step 6 –** Enter a secure password in the Password field.

**Step 7 –** Click **Next** three times.

**Step 8 –** Wait for Password Reset to install, then click **Finish**.

**NOTE:** The Setup wizard creates the aprsvc account and adds it to the Domain Admins group. You
can remove the account from the Domain Admins group and grant the required permissions later. See
the
[Securing Password Reset](/docs/passwordreset/3.23/configuration/security-settings.md)
topic of the Password Reset Administrator's Guide for additional information.

# Password Reset Client

The Password Reset Client allows users to securely reset their password or unlock their account from
the Windows Logon and Unlock Computer screens. Users click **Reset Password** to access the Password
Reset system.

![the_password_reset_client_1](/img/versioned_docs/passwordreset_3.23/password_reset/evaluation/the_password_reset_client_1.webp)

The Password Reset Client does not modify any Windows system files.

The Password Reset Client is normally deployed with Group Policy, Microsoft System Center
Configuration Manager, or some other software deployment tool. It takes about 15 minutes to set up
an automated deployment, so we will install the PRC manually for the evaluation.

## Installing the PRC

Follow the steps below to install the PRC.

**Step 1 –** Click **Start** > **ANIXIS Password Reset** > **Client Software**.

**Step 2 –** Double-click **APRClt323.msi**.

**Step 3 –** Click **Next**.

**Step 4 –** Read the license agreement. Click **I accept the license agreement**. Click **Next** if
you accept all the terms.

**Step 5 –** Click **Next**.

**Step 6 –** Once the Password Reset Client is installed, click **Finish**.

**Step 7 –** Click **Yes** is asked to restart the computer.

You can also install the Password Reset Client on any client computers that are being used for the
evaluation.

## Configuring the PRC

The Password Reset Client is normally configured with an Active Directory administrative template.
This allows you to centrally configure all computers in the domain. It takes about 15 minutes to set
up the Administrative Template, so we will configure the PRC by importing the settings into the
registry for the evaluation.

**Step 1 –** Download the sample configuration from the following link:
[http://www.anixis.com/ftp/apr/PRC_Config.zip](http://www.anixis.com/ftp/apr/PRC_Config.zip)

**Step 2 –** Extract **PRC_Config.reg** from the .zip file.

**Step 3 –** Right-click **PRC_Config.reg**, then click **Edit**.

![the_password_reset_client_1_1](/img/versioned_docs/passwordreset_3.23/password_reset/evaluation/the_password_reset_client_1_1.webp)

**Step 4 –** Replace **127.0.0.1** in the .reg file with the IP address or hostname of your
evaluation server.

**NOTE:** If you are only testing the Password Reset Client on the evaluation server, then leave it
set to 127.0.0.1. The IP address appears on two lines. You must change both lines.

**Step 5 –** Press **CTRL** + **S** to save your changes, then close **Notepad**.

**Step 6 –** Double-click **PRC_Config** to import the settings into the registry. Click **Yes**
when asked to confirm. Repeat this step on any client computers being used for the evaluation.

**NOTE:** You must import the configuration settings into the registry whenever you edit
PRC_Config.reg, otherwise the old settings will remain.

## Using the PRC

You can access the Password Reset Client from the Windows Logon and Unlock Computer screens. Click
the **Reset password...** command link to display the Password Reset menu.

The client works on Windows XP and Server 2003, but the pages do not display correctly on these
operating systems because Internet Explorer 8 has very limited support for HTML5. Send an e-mail to
[support@netwrix.com ](mailto:support@anixis.com)if you need to use the Password Reset Client with
these older operating systems.

# Using Password Reset

Password Reset is a web application. Open a web browser on the server and go to
[http://127.0.0.1/pwreset/ ](http://127.0.0.1/pwreset/)to see Password Reset's menu. You can also
access Password Reset from another computer by replacing 127.0.0.1 in the URL with the IP address or
hostname of the evaluation server.

![using_apr_1](/img/versioned_docs/passwordreset_3.23/password_reset/evaluation/using_apr_1.webp)

You should install an SSL certificate on the web server when using Password Reset on a production
network with real passwords. See the
[Securing Password Reset](/docs/passwordreset/3.23/configuration/security-settings.md)
topic for additional information.

## Enrolling into Password Reset

You must enroll into Password Reset before you can use it to reset your password or unlock your
account. You can enroll manually by providing some information about yourself, or Password Reset can
enroll you automatically and send a verification code to confirm your identity.

Follow the steps below to manually enroll into Password Reset.

**Step 1 –** Click the **Enroll** item in the menu.

![using_apr_1_1](/img/versioned_docs/passwordreset_3.23/password_reset/evaluation/using_apr_1_1.webp)

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
[Editing the HTML Templates](/docs/passwordreset/3.23/configuration/html-templates.md)
topic of the Administrator's Guide for additional information.

# Using Password Reset with Password Policy Enforcer

Password Policy Enforcer is a configurable password filter that enforces granular password policies
with many advanced features. Password Policy Enforcer helps to secure your network by ensuring that
users choose strong passwords.

![using_apr_with_password_policy](/img/versioned_docs/passwordreset_3.23/password_reset/evaluation/using_apr_with_password_policy.webp)

Password Reset can integrate with Password Policy Enforcer to help users choose a compliant
password. Password Reset displays the Password Policy Enforcer password policy message when a user
is prompted for their new password, and the Password Policy Enforcer rejection message if the new
password does not comply with the password policy.

![using_apr_with_password_policy_1](/img/versioned_docs/passwordreset_3.23/password_reset/evaluation/using_apr_with_password_policy_1.webp)

Select the **Password Policy Enforcer integration** check box in the General tab of the Password
Reset Configuration Console if you have installed and configured Password Policy Enforcer. The
Password Policy Enforcer Evaluator's Guide will help you to install and configure Password Policy
Enforcer if you are not currently using it.

An Password Reset license does not include a Password Policy Enforcer license. See
[Administration](/docs/passwordreset/3.23/getting-started/overview.md)
in Password Policy Enforcer topic for additional information.
