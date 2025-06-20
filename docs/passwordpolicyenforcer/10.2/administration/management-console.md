# Management Console Views

The Password Policy Enforcer management console has four views. Click an item in the left pane of
the management console to select a view.

## Password Policy Enforcer View

![configuring_ppe_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_2.webp)

Click Netwrix Password Policy Enforcer in the left pane to display this view. With this view, you
can perform the following actions:

- Read the Password Policy Enforcer documentation.
- Connect to configuration. See the
  [Connect to a Configuration](/docs/passwordpolicyenforcer/10.2/administration/connecting-to-domains.md)
  topic for additional information.

## Password Policy Server View

![configuring_ppe_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_3.webp)

Click **Password Policy Server** in the left pane to display this view. With this view, you can
perform the following actions:

- Edit
  [PPS Properties Page](/docs/passwordpolicyenforcer/10.2/administration/management-console.md)
- Display the [Compromised Password Checker](#compromised-password-checker) page
- Run
  [HIBP Updater](/docs/passwordpolicyenforcer/10.2/tools-and-utilities/hibp-updater.md)
- [Connect to a Configuration](/docs/passwordpolicyenforcer/10.2/administration/connecting-to-domains.md)
  to a configuration
- Display the
  [Support Tools](/docs/passwordpolicyenforcer/10.2/tools-and-utilities/support-tools.md)
  page

### Compromised Password Checker

The Compromised Password Checker finds compromised passwords and helps to strengthen them, which
leads to increased security. It checks existing passwords against a compromised hash list at any
time, not only during a password change or reset.

#### General

#### ![cpcgeneral](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/cpcgeneral.webp)

- **Enable** – select this checkbox if you want to perform one of the following operations:

  - Notify User – Sends an email to the email address on the user object of an AD user that is
    found to have a compromised password.
  - Log events in "Event Viewer" – Creates a log entry for each user that has a compromised
    password. The log entry can be found in the X log of the event viewer.
  - Force password change at next logon – Sets the Force Password Change at next login attribute
    on the AD User that was found to have a compromised password. When the user tries to login the
    next time they will be forced to go through the password change process.

- **Schedule** – Click this link to open the "Schedule task" window. Choose date and time when the
  scan will start and configure the scan frequency.

  ![supporttoolswindowpasswordcheckerschedule](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/supporttoolswindowpasswordcheckerschedule.webp)

  Setup the desired schedule to run Password Checker. You may choose to run it once, or
  periodically on a defined schedule.

  - **Frequency** – Select how frequently you want to run Password Checker.

    - **One Time** – There are two options: Run now and Run later. If later, you should select
      the time in the **When** area.
    - **Daily** – Select the time of day at which you want to run Password Checker.
    - **Weekly** – Select the day of the week on which you want to run Password Checker.

      ![supporttoolswindowpasswordcheckerscheduleweekly](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/supporttoolswindowpasswordcheckerscheduleweekly.webp)

    - **Monthly** – Select the day of the month on which you want to run Password Checker.

      ![supporttoolswindowpasswordcheckerschedulemonthly](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/supporttoolswindowpasswordcheckerschedulemonthly.webp)

  - **When** – Select the start date and time when you to run Password Checker.

- **List of compromised passwords** – The path to the database of compromised passwords.
- **Domain Controller** – Name of the Domain Controller you want to scan with Compromised Password
  Checker. The name of the current domain controller can be taken from Configuration Report tab >
  Computer value. Please use the fully qualified (FQDN) domain controller name.

#### Report Recipient

![cpcreportrecipient](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/cpcreportrecipient.webp)

- **To** – Type the email address of the administrator receiving the full report.
- **From** – Type the name and email address you wish to appear. The correct format is
  `"Display Name" <mailbox@domain.com>`

#### User Notification

![cpcusernotification](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/cpcusernotification.webp)

- **From** – Type the name and email address you wish to appear. The correct format is
  `"Display Name" <mailbox@domain.com>`
- **Subject** – Type the subject line of your email.
- **Email** – The text for the message you want to send to the user. The default text contains
  information about the recipient's name and account, as well as a request to change the password.
  You can customize it any way you want.

The Compromised Password Checker is now configured to protect your system against compromised
passwords.

## Policies View

![configuring_ppe_4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_4.webp)

Click **Password Policy Server** in the left pane to display this view. With this view, you can
perform the following actions:

- Edit
  [Policy Properties](/docs/passwordpolicyenforcer/10.2/password-policies/policy-configuration.md)
- [Testing Policies](/docs/passwordpolicyenforcer/10.2/password-policies/testing-policies.md)
- [Creating a Policy](/docs/passwordpolicyenforcer/10.2/password-policies/creating-policies.md)
  and
  [Deleting a Policy](/docs/passwordpolicyenforcer/10.2/password-policies/creating-policies.md)
- Set
  [Policy Properties](/docs/passwordpolicyenforcer/10.2/password-policies/policy-configuration.md)

## Rules View

#### ![configuring_ppe_5](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_5.webp)

Click a **policy name** in the left pane to display this view. Use this view to configure the rules
for a policy.

# Management Console

This section introduces you to the Password Policy Enforcer management console, and explains how to
configure Password Policy Enforcer's global properties. You will also learn how to disable and
enable Password Policy Enforcer without uninstalling it.

## Management Console Overview

The Password Policy Enforcer management console is a Microsoft Management Console snap-in that is
used to edit Password Policy Enforcer's configuration. The management console is installed by
default when Password Policy Enforcer is installed, but you can also install it on your computer if
you want to remotely configure Password Policy Enforcer.

### Installing the Management Console

Follow the steps below to install the Password Policy Enforcer management console onto your computer
so that you can remotely configure Password Policy Enforcer.

**Step 1 –** Start the Password Policy Enforcer installer (PPE10.2.exe).

**Step 2 –** Read the license agreement and then click **Yes** if you accept all of the license
terms and conditions.

**Step 3 –** Select the **Advanced** option and then click **Next**.

**Step 4 –** Double-click the **PPE10.2.msi** file.

**Step 5 –** Click **Next** when the Password Policy Enforcer installation wizard opens.

**Step 6 –** Select **I accept the license agreement** and then click **Next**.

**Step 7 –** Select the **Custom** option, and then click **Next**.

**Step 8 –** Click the icon beside the Password Policy Server feature, and then click **Entire
feature will be unavailable**.

![configuring_ppe_0](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_0.webp)

**Step 9 –** Click **Next** twice.

**Step 10 –** Wait for the Management Console to install and then click **Finish**.

### Opening the Management Console

Click **Start** > **Netwrix Password Policy Enforcer 10** > **PPE Configuration** to open the
Password Policy Enforcer management console.

![configuring_ppe_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_1.webp)

**NOTE:** If you are opening the management console for the first time, click **Yes** when asked if
you would like to create a new Password Policy Enforcer configuration.

**NOTE:** Press F1 while using the management console to display help information for the current
window.

# PPS Properties Page

The Password Policy Server (PPS) is the Password Policy Enforcer component that checks passwords and
responds to queries from the Password Policy Client. PPS properties are global settings that apply
to all Password Policy Enforcer policies. See the
[Password Policy Client](/docs/passwordpolicyenforcer/10.2/installation-and-deployment/password-policy-client.md)
topic for additional information. If you do choose any of the options which log PPE Events, the
events will be viewable in Windows Event Viewer. See the
[View Event Logs in Windows Event Viewer](#view-event-logs-in-windows-event-viewer) topic for
additional information.

Follow the steps below to open the PPS Properties page:

![configuring_ppe_6](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_6.webp)

**Step 1 –** Click the **Password Policy Server** item to display the Password Policy Server view.

**Step 2 –** Click **PPS Properties** in the right pane of the management console.

**Step 3 –** Click the **Disable/Enable** button to disable or enable Password Policy Enforcer.

## General Tab

The General tab provides options to enable or disable policy enforcement and log events.

- Enforce policy when password is reset — Check this box if Password Policy Enforcer should enforce
  the password policy when a password is reset.

  - If this option is not selected, administrators and helpdesk operators will not have to comply
    with the password policy when resetting a user's password, or creating a new user account.
  - This option does not change the behavior of the Minimum Age rule, as this rule is never
    enforced during a reset.
  - The History rule is only enforced during a reset if this check box is selected, and the
    **Enforce this rule when a password is reset** checkbox is selected in the History Rule
    Properties page. See the
    [Rules](/docs/passwordpolicyenforcer/10.2/password-rules/index.md)
    topic for additional information.

- Log event when password not checked by app— Check this box if Password Policy Enforcer should add
  an entry to the Windows Application Event Log whenever it accepts a password without checking it.
  This my occur if:

  - Password Policy Enforcer is disabled
  - The policy assigned to a user is disabled
  - No policy is assigned to a user or an error occurs when determining the assigned policy, and a
    Default Policy is not specified
  - A password is reset, and the Enforce policy when password is reset checkbox is not selected

- Log event when password rejected by app— Check this box if Password Policy Enforcer should add an
  entry to the Windows Application Event Log whenever it rejects a password. The logged event
  includes the following:

  - Username
  - Source (client or server)
  - The rules the password did not comply with.

    **NOTE:** Password Policy Enforcer does not send passwords or password hashes over the
    network, even when logging rejections by the Password Policy Client.

  Most Password Policy Enforcer rules are enforced by both the Password Policy Client and Password
  Policy Server. If the Password Policy Enforcer Client is installed, then it will often reject a
  non-compliant password before Windows sends it to the domain controller. The following
  limitations apply when a password is rejected by the Password Policy Client:

  - An event is only logged if the Password Policy Enforcer Client version is 9.0 or later.

    If a password is rejected by an earlier client version, then no event is logged. If a
    password is rejected by the Password Policy Server, then an event is logged irrespective of
    the client version.

  - The logged event may not show all the rules the password did not comply with because some
    rules are only enforced by the Password Policy Server.

    For example, a password that does not comply with the Length, Complexity, and Compromised
    rules would only show the Length and Complexity rules in the event when rejected by the
    Password Policy Enforcer Client because the Compromised rule is only enforced by the server.

    If the Password Policy Enforcer Client is not installed, then the server will log the event
    with all three rules because the server enforces all these rules. See the
    [Rules](/docs/passwordpolicyenforcer/10.2/password-rules/index.md)
    topic for additional information.

  - Client rejections may not be logged, or they may be logged more than once if the Password
    Policy Client and Password Policy Server cannot communicate reliably.

- Log event when password accepted by app— Check this box if Password Policy Enforcer should add an
  entry to the Windows Application Event Log whenever it accepts a password. The logged event
  includes the username.

- Only accept encrypted client requests — Check this box if Password Policy Enforcer should only
  accept encrypted requests from the Password Policy Client, Netwrix Password Reset, Password Policy
  Enforcer/Web. See the
  [Password Policy Client](/docs/passwordpolicyenforcer/10.2/installation-and-deployment/password-policy-client.md)
  topic and the
  [Netwrix Password Reset and Web](/docs/passwordpolicyenforcer/10.2/getting-started/evaluation-guide.md)
  topic for additional information.

  - Client requests do not contain passwords or password hashes, and they were not encrypted prior
    to Password Reset and Web V9.0.
  - Select this option if you are not using the Password Reset/Web V8.x Password Policy Client,
    Password Reset V3.x, or PPE/Web V7.x (or earlier). Password Policy Enforcer accepts both
    encrypted and unencrypted requests if this option is not selected.

    **NOTE:** For versions v9.x and above, this option will be selected by default.

Choose a password policy from the Default Policy drop-down list. Users must comply with the default
policy if no other policy is assigned to them. See the
[Managing Policies](/docs/passwordpolicyenforcer/10.2/password-policies/creating-policies.md)
topic for additional information. Using Password Policy Enforcer without a default policy is not
recommended, as it may leave some passwords unchecked.

### Exempt Users from a Password Policy

Follow the steps below to exempt some users from having to comply with the password policy when a
default policy is specified.

**Step 1 –** Create a new policy for these users.

**Step 2 –** Leave all the rules disabled for this policy.

**Step 3 –** Assign this policy to the users who do not have to comply with any Password Policy
Enforcer rules.

Refer to the
[Managing Policies](/docs/passwordpolicyenforcer/10.2/password-policies/creating-policies.md)
topic for a diagrammatic representation of Password Policy Enforcer's policy selection algorithm, or
use the Test Policies page to quickly determine which policy Password Policy Enforcer will enforce
for a particular user. See the
[Managing Policies](/docs/passwordpolicyenforcer/10.2/password-policies/creating-policies.md)
topic for additional information.

**CAUTION:** If Password Policy Enforcer has only one policy and that policy is also the default
policy, then Password Policy Enforcer enforces the policy for all users.

The Password Policy Client and Password Policy Server communicate over UDP port 1333 by default. If
you need to change the default port, then type the new port number in the **Password Policy Server
Port** text box. Setting the port number to zero stops Password Policy Enforcer from accepting
client requests. If you change the port number, then you must also:

- Restart all the Password Policy Server computers.
- Configure the Password Policy Client to use the new port.

### Disabling and Enabling Password Policy Enforcer

You can disable Password Policy Enforcer to stop checking new passwords for compliance with the
password policy.

Follow the steps below to disable Password Policy Enforcer.

**Step 1 –** Click the **Password Policy Server** item to display the Password Policy Server view.

**Step 2 –** Click **PPS Properties** in the right pane of the management console.

![configuring_ppe_6](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_6.webp)

**Step 3 –** Click **Disable**.

**Step 4 –** Click **Yes** to confirm, then click **OK**.

**Step 5 –** Click **OK** to close the PPS Properties page.

The Password Policy Server icon in the left pane of the management console displays a red X when
Password Policy Enforcer is not checking passwords.

Follow the steps below to re-enable Password Policy Enforcer.

**Step 1 –** Click the **Password Policy Server** item to display the Password Policy Server view.

**Step 2 –** Click **PPS Properties** in the right pane of the management console.

![configuring_ppe_7](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_7.webp)

**Step 3 –** Click **Enable**, then click **OK**.

**Step 4 –** Click **OK** to close the PPS Properties page.

**NOTE:** Password Policy Enforcer is disabled or enabled immediately, but if the management console
is connected to a domain configuration, there will be some delay while Active Directory propagates
the change to the other domain controllers. See the
[Connect to a Configuration](/docs/passwordpolicyenforcer/10.2/administration/connecting-to-domains.md)
topic for additional information. A user's password history may be updated even when Password Policy
Enforcer is disabled. See the
[Rules](/docs/passwordpolicyenforcer/10.2/password-rules/index.md)
topic for additional information.

## Email Tab

The Email tab allows you to configure the e-mail delivery options.

![emailtab](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/emailtab.webp)

- Disable email reminders – Select this option if you prefer not to receive email reminders.
- Send email to an SMTP server – Select this option if you want receive email reminders.

  - Server – Provide the server address.
  - Port – Provide the number of the port you are using.
  - Username – Provide your username.
  - Password – Provide your password.

    - Use TLS – Select this checkbox if you want to use TLS email encryption.

- Save email to a pickup folder – Select this option if you want to have a backup copy of the sent
  email.

  - Path – Click **Browse** and select the path to the pickup folder.

## License Tab

The License tab allows you to see the status of your license.

Click the **License** tab to display your Password Policy Enforcer license details.

![licensetab](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/licensetab.webp)

Follow the steps to activate license for Netwrix Password Policy Enforcer.

**Step 1 –** Receive a license key from
[](https://www.netwrix.com/support.html)[Netwrix Support](https://www.netwrix.com/support.html)
after purchasing the Netwrix Password Policy Enforcer.

If you have not yet purchased the product, you can contact
[Netwrix Support](https://www.netwrix.com/support.html)[ ](https://www.netwrix.com/support.html)to
obtain it.

**Step 2 –** Copy the license certificate to the clipboard.

**Step 3 –** Click **Get license from clipboard** button.

The license file has been imported.

## View Event Logs in Windows Event Viewer

Follow the steps below to view events logs in Windows Event Viewer.

**Step 1 –** Open **Windows Event Viewer**.

![View Event Logs](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/vieweventlogs.webp)

**Step 2 –** Navigate to **Windows Logs** > **Application**.

**Step 3 –** In the Application list, select a Netwrix Password Policy Enforcer event under the
Source column.

The General tab shows details for the selected event. The Details tab shows...

### View Log Properties

To view Log Properties, navigate to the Actions menu and select **Properties**.

![Log Properties Window](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/vieweventlogslogproperties.webp)

The Log Properties window displays. Settings for this log can be configured from this window.
