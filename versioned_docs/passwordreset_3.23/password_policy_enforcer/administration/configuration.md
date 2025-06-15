# Configuration

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

**Step 1 –** Start the Password Policy Enforcer installer (PPE912.exe).

**Step 2 –** Read the license agreement and then click **Yes** if you accept all of the license
terms and conditions.

**Step 3 –** Select the **Advanced** option and then click **Next**.

**Step 4 –** Double-click the **PPE912.msi** file.

**Step 5 –** Click **Next** when the Password Policy Enforcer installation wizard opens.

**Step 6 –** Select **I accept the license agreement** and then click **Next**.

**Step 7 –** Select the **Custom** option, and then click **Next**.

**Step 8 –** Click the icon beside the Password Policy Server feature, and then click **Entire
feature will be unavailable**.

**Step 9 –** Click **Next** twice.

![configuring_ppe](/img/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/configuring_ppe.png)

**Step 10 –** Wait for the Management Console to install and then click **Finish**.

### Opening the Management Console

Click **Start** > **Password Policy Enforcer 9** > **PPE Configuration** to open the Password Policy
Enforcer management console.

**NOTE:** If you are opening the management console for the first time, click **Yes** when asked if
you would like to create a new Password Policy Enforcer configuration.

![configuring_ppe_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_1.png)

The management console images in this document are taken from a computer running Windows
Server 2016. Other Windows versions may display the management console slightly differently, however
the management console is used identically on all Windows versions.

**NOTE:** Press F1 while using the management console to display help information for the current
window.

### Management Console Views

The Password Policy Enforcer management console has four views. Click an item in the left pane of
the management console to select a view.

#### Password Policy Enforcer View

![configuring_ppe_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_2.png)

Click **Password Policy Enforcer** in the left pane to display this view. With this view, you can
perform the following actions:

- Read the Password Policy Enforcer documentation.
- Connect to documentation.

#### PPS View

![configuring_ppe_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_3.png)

Click **PPS** in the left pane to display this view. With this view, you can perform the following
actions:

- Edit PPS properties
- Connect to a configuration
- Display the Support Tools page

#### Policies View

![configuring_ppe_4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_4.png)

Click **PPS** in the left pane to display this view. With this view, you can perform the following
actions:

- Edit policy properties
- Test policies
- Create and delete policies
- Set policy priorities

#### Rules View

Click a **policy name** in the left pane to display this view. Use this view to configure the rules
for a policy.

#### ![configuring_ppe_5](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_5.png)

## Connecting to a Configuration

Password Policy Enforcer's configuration settings are stored in Active Directory or the registry. An
Active Directory configuration is called a domain configuration, and it defines the password
policies for domain user accounts. A registry configuration is called a local configuration, and it
defines the password policies for local user accounts.

### Connecting to a Domain Configuration

A domain configuration exists on every domain controller. Changes to the configuration replicate to
all the domain controllers in the domain, so you only need to configure one domain controller in
each domain. If you are using Password Policy Enforcer in more than one domain, then you will need
to configure each domain separately.

Follow the steps below to connect to a domain configuration.

**Step 1 –** Click the **Password Policy Enforcer** item to display the Password Policy Enforcer
view.

**Step 2 –** Click **Connect To** in the right pane of the management console.

**Step 3 –** Select the **Domain** option.

**Step 4 –** Enter the **name** or **IP address** of a domain controller, then click **OK**.

**NOTE:** You cannot make changes to the Password Policy Enforcer configuration while the management
console is connected to a read-only domain controller.

### Connecting to a Local Configuration

A local configuration is used by only one computer, so it does not replicate to any other computers.
You can copy a local configuration to another computer by exporting the configuration from the
registry, and then importing it into the registry of the other computer. You can also use Group
Policy to distribute a local configuration to many computers. See the
[Domain and Local Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/domain_and_local_policies.md)
topic for additional information.

Follow the steps below to connect to a computer's local configuration.

**Step 1 –** Click the **Password Policy Enforcer** item to display the Password Policy Enforcer
view.

**Step 2 –** Click **Connect To** in the right pane of the management console.

**Step 3 –** Select the **Local** option, then click **OK**.

**NOTE:** Domain configurations are stored in the CN=Password Policy Enforcer 9.0,CN=System object.

**NOTE:** Local configurations are stored in the HKLM\SOFTWARE\ANIXIS\Password Policy Enforcer 9.0\
registry key.

**NOTE:** Users with write permission to these objects can configure Password Policy Enforcer.

## Support Tools

Use the Support Tools page to create a Configuration Report that you can send to Netwrix Support, or
to directly edit Password Policy Enforcer's configuration settings.

### Configuration Report

Create a Configuration Report and e-mail it to Netwrix Support if Password Policy Enforcer is not
working as expected. The Configuration Report will help us to diagnose the problem.

Follow the steps below to create a Configuration Report.

**Step 1 –** Click the **PPS** item to display the PPS view.

**Step 2 –** Click **Support Tools** in the right pane of the management console.

**Step 3 –** Click **Save Configuration Report...**

**Step 4 –** Enter a file name, then click **Save**.

#### Property Editor

The Property Editor allows you to directly edit the Password Policy Enforcer configuration. You
should only use the Property Editor if instructed to by Netwrix Support.

Follow the steps below to open the property editor.

**Step 1 –** Click the **PPS** item to display the PPS view.

**Step 2 –** Click **Support Tools** in the right pane of the management console.

**Step 3 –** Click the **Property Editor** tab.

## Disabling and Enabling

You can disable Password Policy Enforcer to stop checking new passwords for compliance with the
password policy.

Follow the steps below to disable Password Policy Enforcer.

**Step 1 –** Click the **PPS** item to display the PPS view.

**Step 2 –** Click **PPS Properties** in the right pane of the management console.

![configuring_ppe_6](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/configuring_ppe_6.png)

**Step 3 –** Click **Disable PPE**.

**Step 4 –** Click **Yes** to confirm, then click **OK**.

**Step 5 –** Click **OK** to close the PPS Properties page.

The PPS icon in the left pane of the management console displays a red X when Password Policy
Enforcer is not checking passwords.

Follow the steps below to re-enable Password Policy Enforcer.

**Step 1 –** Click the **PPS** item to display the PPS view.

**Step 2 –** Click **PPS Properties** in the right pane of the management console.

![configuring_ppe_8](/img/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/configuring_ppe_8.png)

**Step 3 –** Click **Enable PPE**, then click **OK**.

**Step 4 –** Click **OK** to close the PPS Properties page.

**NOTE:** Password Policy Enforcer is disabled or enabled immediately, but if the management console
is connected to a domain configuration, there will be some delay while Active Directory propagates
the change to the other domain controllers. See the
[Connecting to a Configuration](#connecting-to-a-configuration) topic for additional information. A
user's password history may be updated even when Password Policy Enforcer is disabled. See the
[History Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#history-rule)
topic for additional information.

## PPS Properties

The PPS (Password Policy Server) is the Password Policy Enforcer component that checks passwords and
responds to queries from the Password Policy Client. PPS properties are global settings that apply
to all Password Policy Enforcer policies. See the
[Password Policy Client](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md)
topic for additional information.

Follow the steps below to open the PPS Properties page:

![configuring_ppe_9](/img/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/configuring_ppe_9.png)

**Step 1 –** Click the **PPS** item to display the PPS view.

**Step 2 –** Click **PPS Properties** in the right pane of the management console.

**Step 3 –** Click the **Disable/Enable PPE** button to disable or enable Password Policy Enforcer.

Select the **Enforce policy when password is reset** check box if Password Policy Enforcer should
enforce the password policy when a password is reset. If this option is not selected, administrators
and helpdesk operators will not have to comply with the password policy when resetting a user's
password, or creating a new user account. This option does not change the behavior of the Minimum
Age rule, as this rule is never enforced during a reset. The History rule is only enforced during a
reset if this check box is selected, and the **Enforce this rule when a password is reset** check
box is selected in the History Rule Properties page. See the
[Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md) topic
for additional information.

Select the **Log event when password not checked by PPE** check box if Password Policy Enforcer
should add an entry to the Windows Application Event Log whenever it accepts a password without
checking it. This my occur if:

- Password Policy Enforcer is disabled
- The policy assigned to a user is disabled
- No policy is assigned to a user or an error occurs when determining the assigned policy, and a
  Default Policy is not specified
- A password is reset, and the **Enforce policy when password is reset** check box is not selected

Select the **Log event when password rejected by PPE** check box if Password Policy Enforcer should
add an entry to the Windows Application Event Log whenever it rejects a password. The logged event
includes the username, source (client or server), and the rules the password did not comply with.
Most Password Policy Enforcer rules are enforced by both the Password Policy Client and Password
Policy Server. If the Password Policy Enforcer Client is installed, then it will often reject a
non-compliant password before Windows sends it to the domain controller. The following limitations
apply when a password is rejected by the Password Policy Client:

- An event is only logged if the Password Policy Enforcer Client version is 9.0 or later. If a
  password is rejected by an earlier client version, then no event is logged. If a password is
  rejected by the Password Policy Server, then an event is logged irrespective of the client
  version.
- The logged event may not show all the rules the password did not comply with because some rules
  are only enforced by the Password Policy Server. For example, a password that does not comply with
  the Length, Complexity, and Compromised rules would only show the Length and Complexity rules in
  the event when rejected by the Password Policy Enforcer Client because the Compromised rule is
  only enforced by the server. If the Password Policy Enforcer Client is not installed, then the
  server will log the event with all three rules because the server enforces all these rules. See
  the [Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md)
  topic for additional information.
- Client rejections may not be logged, or they may be logged more than once if the Password Policy
  Client and Password Policy Server cannot communicate reliably.

**NOTE:** Password Policy Enforcer does not send passwords or password hashes over the network, even
when logging rejections by the Password Policy Client.

Select the **Only accept encrypted client requests** check box if Password Policy Enforcer should
only accept encrypted requests from the Password Policy Client, Netwrix Password Reset, Password
Policy Enforcer/Web. See
the[Password Policy Client](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/password_policy_client.md)
topic and the
[Netwrix Password Reset and Web](/versioned_docs/passwordreset_3.23/password_policy_enforcer/evaluation/password_reset.md)
topic for additional information. Client requests do not contain passwords or password hashes, and
they were not encrypted prior to Netwrix Password Reset and Web V9.0. Select this option if you are
not using the Netwrix Password Reset and Web V8.x Password Policy Client, Netwrix Password Reset
V3.x, or PPE/Web V7.x (or earlier). Password Policy Enforcer accepts both encrypted and unencrypted
requests if this option is not selected.

Choose a password policy from the Default Policy drop-down list. Users must comply with the default
policy if no other policy is assigned to them. See the
[Managing Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md)
topic for additional information. Using Password Policy Enforcer without a default policy is not
recommended, as it may leave some passwords unchecked.

Follow the steps below to exempt some users from having to comply with the password policy when a
default policy is specified.

**Step 1 –** Create a new policy for these users.

**Step 2 –** Leave all the rules disabled for this policy.

**Step 3 –** Assign this policy to the users who do not have to comply with any Password Policy
Enforcer rules.

Refer to the
[Policy Selection Flowchart](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md#policy-selection-flowchart)
topic for a diagrammatic representation of Password Policy Enforcer's policy selection algorithm, or
use the Test Policies page to quickly determine which policy Password Policy Enforcer will enforce
for a particular user. See the
[Managing Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies.md)
topic for additional information.

**CAUTION:** If Password Policy Enforcer has only one policy and that policy is also the default
policy, then Password Policy Enforcer enforces the policy for all users.

The Password Policy Client and Password Policy Server communicate over UDP port 1333 by default. If
you need to change the default port, then type the new port number in the **Password Policy Server
Port** text box. Setting the port number to zero stops Password Policy Enforcer from accepting
client requests. If you change the port number, then you must also:

- Restart all the Password Policy Server computers.
- Configure the Password Policy Client to use the new port.

Click the **E-mail** tab to configure the e-mail delivery options.

Click the **License** tab to display your Password Policy Enforcer license details. To install a new
license, copy the license to the clipboard, and then click **Get license from clipboard**.
