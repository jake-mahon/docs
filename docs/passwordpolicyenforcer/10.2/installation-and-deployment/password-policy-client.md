# Configuring the Password Policy Client

The Password Policy Client is self-configuring and does not require manual configuration in most
cases. You may need to manually configure the Password Policy Client if:

- You want to install it in a disabled state to be enabled later.
- You want to change the display settings for small screens.
- The Password Policy Client displays policy messages in the wrong language.
- The default communication settings are not suitable (for example, if you change the default
  Password Policy Server Port).

Password Policy Enforcer includes an administrative template to help configure the Password Policy
Client. You can use Active Directory GPOs to configure many computers, or the Local Group Policy
Editor to configure one computer. The Password Policy Client configuration is stored in the
HKLM\SOFTWARE\Policies\ANIXIS\Password Policy Client\ registry key.

Install the Password Policy Client Administrative Template

**Step 1 –** Connect to any Domain Controller where you have Password Policy Enforcer installed and
have the group policy management console available.

**Step 2 –** Go to Password Policy Enforcer install directory (C:\Program Files (x86)\Password
Policy Enforcer) and copy the following two files (highlighted in yellow):

![ppc_configuration](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppc_configuration.webp)

**Step 3 –** Go to C:\Windows\Policy Definitions and paste the .admx file in the root of this
folder.

![ppc_configuration2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppc_configuration2.webp)

**Step 4 –** Go to C:\Windows\Policy Definitions\en-US and paste the .adml file in the root of this
folder.

![ppc_configuration1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppc_configuration1.webp)

**Step 5 –** Open **Group Policy Management** console and check if you have a GPO created for
Client. If not, see the
[Installing Password Policy Client](/docs/passwordpolicyenforcer/10.2/installation-and-deployment/password-policy-client.md)
topic's
[Edit the Group Policy Object](/docs/passwordpolicyenforcer/10.2/installation-and-deployment/password-policy-client.md#edit-the-group-policy-object)
section for additional information.

**Step 6 –** In the left pane, navigate to **Forest: `<forest_name>`** > **Domain** >
**`<domain_name>`**, right-click **`<OU_name>`** and select **Create a GPO** in this domain and Link
it here.

Once the GPO was configured, it will have the following view:

![ppc_configuration3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppc_configuration3.webp)

**Step 7 –** Right-click the newly created GPO and select **Edit** from the pop-up menu.

**Step 8 –** Expand **Computer Configuration** > **Policies** > **Administrative Templates** >
**Netwrix Password Policy Enforcer**

![ppc_configuration4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppc_configuration4.webp)

**Step 9 –** Click on **Netwrix Password Policy Client** to open a list of modification settings
with brief descriptions of each.

![ppc_configuration5](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/ppc_configuration5.webp)

**Step 10 –** Select the one you need, then modify and save it.

## Changing the Default Display Settings

The Windows 10 and 11 Change Password screen has less space for the Password Policy message than
earlier Windows versions. Users may need to scroll to see the message if their screen is small, or
if their computer is set to use large fonts.

The Password Policy Client for Windows 10 and 11 maximizes the available screen space by hiding
non-essential user interface elements on small screens. It can also display the Password Policy
message in a message box to draw attention to the password policy.

![the_password_policy_client_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_3.webp)

You can change the default display settings to control which user interface elements are hidden, and
the point at which they are hidden. The display of the Password Policy message box is also
configurable.

Follow the steps below to change the default display settings for the Password Policy Client on
Windows 10 and 11.

**Step 1 –** Use the **Group Policy Management Console** (gpmc.msc) to display the GPOs linked at
the domain level.

**NOTE:** If you are not using Active Directory, then open the Local Group Policy Editor
(gpedit.msc) and skip step 2.

**Step 2 –** Right-click the **Password Policy Client GPO**, then click the **Edit...** button.

**Step 3 –** Expand the **Computer Configuration**, **Policies** (if visible), **Administrative
Templates**, **Classic Administrative Templates** (**ADM**), **Password Policy Enforcer**, and
**Password Policy Client** items.

**Step 4 –** Double-click the **Display settings (Windows 10)** setting in the right pane of the
Group Policy Management Editor.

**NOTE:** Information about each option is shown in the Help box.

# Installing Password Policy Client

The Password Policy Client is compatible with Windows 8, 8.1, 10, or 11. It is also compatible with
Windows Server 2016, 2019, and 2022. The Password Policy Client can be used with Remote Desktop
Services on these operating systems.

**NOTE:** The Password Policy Client is also compatible with Windows XP, Vista, and 7. However,
Netwrix no longer provides technical support for these versions.

## System Requirements

- Windows 8, 8.1, 10, or 11.
- Windows Server 2016, 2019, and 2022
- One Megabyte free disk space.
- 256 Kilobytes free RAM (per session if using Remote Desktop Services).

You can install the Password Policy Client manually by running the Password Policy Enforcer
installer (PPE10.2.exe) and choosing the Express Setup option if you only need to install it on a
few computers. If you have many computers, then follow the instructions below to perform an
automated installation with Group Policy, or use your regular software distribution tool to do the
same.

## Create a Distribution Point

A distribution point can either be a UNC path to a server share, or a DFS (Distributed File System)
path. You can use the distribution point you created earlier for Password Policy Enforcer to
distribute the Password Policy Client. See the
[Installation](/docs/passwordpolicyenforcer/10.2/installation-and-deployment/installation-types.md)
topic for additional information.

If you did not create a distribution point for Password Policy Enforcer, then create one now.

Follow the steps below to create a Password Policy Client distribution point.

**Step 1 –** Log on to a server as an administrator.

**Step 2 –** Create a shared network folder to distribute the files from.

**Step 3 –** Give the **Domain Computers** security group read access to the share, and limit write
access to authorized personnel only.

### Copy PPECIt10.2.msi into the Distribution Point

Follow the steps below to copy the .msi file into the distribution point.

**Step 1 –** Start the Password Policy Enforcer installer (PPE10.2.exe).

**Step 2 –** Read the license agreement, and then click **Yes** if you accept all the license terms
and conditions.

**Step 3 –** Select the **Advanced** option, then click **Next**.

**Step 4 –** Right-click the **PPEClt10.2.msi** icon, click **Copy**, and then paste the file into
the distribution point.

![the_password_policy_client](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client.webp)

**Step 5 –** Give the **Domain Computers** security group read access to the PPEClt10.2.msi file in
the distribution point.

**Step 6 –** Click **Finish**.

## Create a Group Policy Object

Follow the steps below to create a group policy object.

**Step 1 –** Start the **Group Policy Management Console** (gpmc.msc).

**Step 2 –** Expand the **forest** and **domain** items in the left pane.

**Step 3 –** Right-click the **domain root node** in the left pane, and then click **Create a GPO in
this domain, and Link it here...**.

**Step 4 –** Enter **Password Policy Client** in the provided field, then press **ENTER**.

![the_password_policy_client_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_1.webp)

## Edit the Group Policy Object

Follow the steps below to edit a group policy object.

**Step 1 –** Right-click the **Password Policy Client GPO**, then click the **Edit...** edit.

**Step 2 –** Expand the **Computer Configuration**, **Policies**, and **Software Settings** items in
the left pane.

**Step 3 –** Right-click the **Software installation** item, then select **New** > **Package...**.

**Step 4 –** Enter the full **UNC path to PPEClt10.2.msi** in the Open dialog box.

**NOTE:** You must enter a UNC path so that other computers can access this file over the network.
For example, `\\file server\distribution point share\PPEClt10.2.msi`

**Step 5 –** Click **Open**.

**Step 6 –** Select the **Assigned deployment method**, then click **OK**.

![the_password_policy_client_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_2.webp)

**Step 7 –** Close the **Group Policy Management Editor**.

## Complete the Installation

Restart each computer to complete the installation. Windows installs the Password Policy Client
during startup.

## Testing the Password Policy Client

Test the Password Policy Client by logging on to a computer and pressing the CTRL + ALT + DEL keys
and clicking the **Change a password** item. If you do not see the password policy, it could be
because a Password Policy Enforcer policy has not been assigned to you, or because the firewall
rules have not been created.

**NOTE:** The Password Policy Client does not store or send passwords or password hashes over the
network. An attacker cannot determine user passwords by sniffing the communication protocol. The
protocol is also encrypted by default for additional protection.

## Creating Firewall Rules for the Password Policy Client

You may need to create firewall rules for the Password Policy Client if your domain controllers are
running a software (host) firewall, or if the Password Policy Client and Password Policy Server
communicate through a firewall. Firewall rules are not necessary for local policies because the
Password Policy Client and Password Policy Server are on the same computer.

### Windows Firewall

If Windows Firewall is enabled on your domain controllers, then you must create a port exception to
allow connections to the Password Policy Server. Windows Firewall is enabled by default on Windows
Server 2008 and later.

Follow the steps below to create the port exception on all domain controllers.

**Step 1 –** Use the **Group Policy Management Console** (gpmc.msc) to display the GPOs linked to
the Domain Controllers OU.

**Step 2 –** Right-click the **Password Policy Enforcer GPO**, and then click **Edit...**.

**NOTE:** You need to create the GPO if you chose the Express Setup option.

**Step 3 –** Expand the **Computer Configuration**, **Policies**, **Administrative Templates**,
**Network**, **Network Connections**, and **Windows Firewall** items.

**Step 4 –** Click **Domain Profile** in the left pane then double-click **Windows Firewall: Define
inbound port exceptions** in the right pane.

![the_password_policy_client_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_3.webp)

**Step 5 –** Select the **Enabled** option, and then click **Show...**.

![the_password_policy_client_4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_4.webp)

**Step 6 –** Select the **Enabled** option, and then click **Show...**.

![the_password_policy_client_5](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_5.webp)

**Step 7 –** Click **OK** until you return to the Group Policy Management Editor.

**Step 8 –** Close the **Group Policy Management Editor**.

### Other Firewalls

Use the information on this page to create appropriate rules for your firewall that allow the
Password Policy Client and Password Policy Server to communicate through the firewall.

The Password Policy Client initiates a request by sending a datagram with the following attributes
to the Password Policy Server:

| Attribute           | Result                       |
| ------------------- | ---------------------------- |
| Protocol            | UDP                          |
| Source Address      | Client Computer IP address   |
| Source Port         | Any                          |
| Destination address | Domain controller IP address |
| Destination port    | 1333                         |

The Password Policy Server responds by sending a datagram with the following attributes back to the
Password Policy Client:

| Attribute           | Result                       |
| ------------------- | ---------------------------- |
| Protocol            | UDP                          |
| Source Address      | Domain controller IP address |
| Source Port         | Any                          |
| Destination address | Client Computer IP address   |
| Destination port    | Any                          |

**NOTE:** If your firewall performs Stateful Packet Inspection, then only create a rule for the
request datagram as the firewall will automatically recognize and allow the response datagram.

# Password Policy Client

The Password Policy Client helps users to choose a compliant password. You do not have to install
the Password Policy Client to use Password Policy Enforcer, but the
[Similarity Rule](/docs/passwordpolicyenforcer/10.2/password-rules/pattern-rules.md)
is only enforced if the Password Policy Client is installed.

The Password Policy Client helps users to choose a compliant password by explaining the password
policy to them, and by telling them why their password was rejected. If the Password Policy Client
is not installed, then users will see the default Windows error message when their password is
rejected.

![the_password_policy_client](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client.webp)

![the_password_policy_client_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_1.webp)

The Password Policy Client displays the password policy during a password change so that users can
see the policy while they choose their password. The Password Policy Client also displays a detailed
rejection message to explain why a password was rejected. Both these messages are customizable.

**NOTE:** The Password Policy Client does not modify any Windows system files. It also does not send
passwords or password hashes over the network.
