# Configuration Console

The PPE Configuration Console manages Password Policy Enforcer across your domain. It can be installed on multiple servers/workstations as convenient.

Open the Configuration Console:

Click __Start__ > __Netwrix Password Policy Enforcer__ > __PPE Configuration__  
or   
Double click the __PPE Configuration__ desktop shortcut.

![Configuration Console Dashboard](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/ppedashboard.webp)

## Dashboard Controls

The Configuration Console dashboard has all the tools you need to set up and manage Password Policy Enforcer.

- Enable/Disable Password Policy Enforcer
- Connected To
- Help
- Settings - General, Notifications, License

In addition, there are tiles to access Password Policy Enforcer major features:

- [Manage Policies](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/manage_policies.md)
- [Compromised Password Check](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/compromisedpasswordcheck.md)
- [System Audit and Support](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/systemaudit.md) - Version Tracker, Support Tools, Property Editor

See the specific topics for details.

### Enable/Disable Password Policy Enforcer

The toggle enables/disables Password Policy Enforcer on all domain controllers. It is enabled by default.

![Enable/Disable PPE](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/enabledisableppeconsole.webp)

Click the toggle to disable PPE:

![Disable PPE](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/disable.webp)

If PPE  is disabled, click the toggle to enable:

![Enable PPE](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/disabled.webp)

### Connected To

Sets the configuration for __Domain__ (default) or __Local__. Password Policy Enforcer's configuration settings are stored in Active Directory or the registry. An Active Directory configuration is called a domain configuration, and it defines the password policies for domain user accounts. A registry configuration is called a local configuration, and it defines the password policies for local user accounts.

Domain configurations are stored in the __CN=Password Policy Enforcer__ _version___,CN=System object__.

Local configurations are stored in the __HKLM\SOFTWARE__ANIXIS__\Password Policy Enforcer__ _version___\ registry key__.

__NOTE:__ Users with write permission to these objects can configure Password Policy Enforcer.

Domain

- Defines policies for domain user accounts.
- Select a Domain Controller from the list of domain controllers where PPE is installed.
- Configuration is replicated to all the domain controllers in the domain.

![Connect To Domain Configuration](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/connecttodomain.webp)

Local

- Defines policies for local user accounts.
- Only affects the computer where it is set.
- You can copy a local configuration to another computer by exporting the configuration from the registry, and then importing it into the registry of the other computer. You can also use Group Policy to distribute a local configuration to many computers. See the [Domain and Local Policies](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/domain_and_local_policies.md) topic for additional information.

![Connected To Local Configuration](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/connecttodomain.webp)

### Help

Links to documentation and support tools.

- __Netwrix Help Center__ launches the Password Policy Enforcer help.
- __About__ displays the Configuration Console version.
- __Export Configuration Report__ opens an export dialog. You can export the configuration as an html or txt file. Browse to the folder where you want the report.
- __Open Property Editor__ launches the Property Editor.

  __NOTE:__ Properties should only be changed when advised by Netwrix Support.

### Settings

There are three tabs:

- General
- Notifications
- License

#### General

Open the __Settings__ > __General__ tab to set up policy and log settings. The general settings apply to either the domain or to a local computer, depending on your Connected To configuration setting.

If you make changes, click __Save__ to keep your changes or __Discard__ to cancel.

Here are the default settings.

![General Settings PPE](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/settingsgeneral.webp)

- __Default policy__ sets the policy to be enforced on the domain or local computer unless users have a different policy assigned to them.
- __Enforce policy when password is reset__ requires users, administrators and helpdesk operators to comply with the password policy when resetting a password or creating a new user account. Default is checked.

  - Minimum Age rule is never enforced during a reset.
  - History rule is enforced if this option is selected and the __Enforce this rule when a password is reset__ option is selected on the [History Rule](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/history_rule.md) Properties.
- __Accept encrypted client request only__ specifies requests from Password Policy Client, Netwrix Password Reset and Password Policy/Web must be encrypted. Client requests do not contain passwords or password hashes. See the [Password Policy Client](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/password_policy_client.md) topic for additional information. Default is checked.
- __Log event when password not checked by service__ adds an entry to the Windows Application Event Log whenever it accepts a password without checking it. Default is checked. This can occur if:

  - Password Policy Enforcer is disabled.
  - The policy assigned to a user is disabled.
  - No policy is assigned to a user or an error occurs when determining the assigned policy, and a Default Policy is not specified.
  - A password is reset, and the __Enforce policy when password is reset__ is not selected.
- __Log event when password rejected by service__ adds an entry to the Windows Application Event Log whenever a password is rejected. Default is not checked. The logged event includes:

  - Username
  - Source (client or server)
  - Rules the password does not meet.

    __NOTE:__ Passwords or password hashes are not sent over the network.

  Most rules are enforced by both the Password Policy Client and Password Policy Server. If the Password Policy Enforcer Client is installed, a non-compliant password can be rejected before Windows sends it to the domain controller. The following limitations apply when a password is rejected by the Password Policy Client:

  - An event is only logged if the Password Policy Enforcer Client version is 9.0 or later. If a password is rejected by the Password Policy Server, then the event is logged.
  - Client logged events only show the local rules the password violated. For example, the Compromised rule is only enforced by the Password Policy Server. See the [Rules](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/rules.md) topic for additional information.
  - Client rejections can be lost or duplicated if there are communication issues between the Password Policy Client and Password Policy Server.
- __Log event when password accepted by service__ adds an entry to the Windows Application Event Log whenever a password is accepted. The logged event includes the username. Default is not checked.

#### Notifications

Open the __Settings__ > __Notifications__ tab to set up notifications. Notifications are only available when __domain__ is selected with the Connected To configuration setting.

If you make changes, click __Save__ to keep your changes or __Discard__ to cancel.

Here are the default settings.

![Notifications Settings](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/settingsnotifications.webp)

- __Send email reminders__: check this option to send reminders. Default is not checked.

  - __SMTP Server__: enter IP address.
  - __Port__: enter port number.
  - __Username__: enter your username.
  - __Password__: enter your password.
  - __Use TLS__: check this option to enable TLS email encryption.
- __Save email to a pickup folder__: check this option to have the Mailer save emails to a folder for later delivery by a mail server. The mail server must monitor this folder for new email.

  - __Path__: Click __Browse__ and select the path to the pickup folder.

__NOTE:__ Saving email to a pickup folder is the fastest and most reliable delivery method. Use this option if your mail server supports pickup folders.

The Password Policy Enforcer Mailer sends emails at 2:00 AM every day (local time on your server). Check the Windows Application Event Log to monitor its progress. You can also run the Password Policy Enforcer Mailer from the command line to send email immediately, or to troubleshoot problems.

__NOTE:__ You can change the time the mailer runs. Set the __PPE Mailer__ service startup to __Disabled__ or __Manual__, then stop the service. Create a task to run "__PPEMail /send__" at the desired time.

#### License

Open the __Settings__ > __License__ tab to view your current license. The license settings apply to either the domain or to a local computer, depending on your Connected To configuration setting.

To add or update your license, copy it from the email or file, then click __Paste license from clipboard__.

![License Settings Tab](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/settingslicense.webp)

- __License type__ and __Licensed to__ are set based on your sales agreement.
- __Users__ is the total number of available licenses.
- __AD Users__ is the total number of Active Directory user accounts.
- __In use pertains__ to active AD user accounts, disregarding disabled accounts.
