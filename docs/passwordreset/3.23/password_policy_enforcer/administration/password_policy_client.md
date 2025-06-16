# Password Policy Client

The Password Policy Client reduces user frustration and password related helpdesk calls by helping
users to choose a compliant password. You do not have to install the Password Policy Client to use
Password Policy Enforcer, but the
[Similarity Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#similarity-rule)
is only enforced if the PPC is installed.

The PPC helps users to choose a compliant password by explaining the password policy to them, and by
telling them why their password was rejected. If the PPC is not installed, then users will see the
default Windows error message when their password is rejected.

![the_password_policy_client](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client.jpg)

![the_password_policy_client_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_1.jpg)

The PPC displays the password policy during a password change so that users can see the policy while
they choose their password. The PPC also displays a detailed rejection message to explain why a
password was rejected. Both these messages are customizable.

**NOTE:** The Password Policy Client does not modify any Windows system files. It also does not send
passwords or password hashes over the network.

## Installing the PPC

The Password Policy Client is compatible with Windows XP, Vista, 7, 8, and 10. It is also compatible
with Windows Server 2003, 2008, 2012, 2016, and 2019. The Password Policy Client can be used with
Remote Desktop Services on these operating systems.

### System Requirements

- Windows XP, Vista, 7, 8, 8.1, or 10.
- Windows Server 2003, 2003 R2, 2008, 2008 R2, 2012, 2012 R2, 2016, or
-   2019.
- One Megabyte free disk space.
- 256 Kilobytes free RAM (per session if using Remote Desktop Services).

You can install the PPC manually by running the Password Policy Enforcer installer (PPE912.exe) and
choosing the Express Setup option if you only need to install it on a few computers. If you have
many computers, then follow the instructions below to perform an automated installation with Group
Policy, or use your regular software distribution tool to do the same.

### Create a Distribution Point

A distribution point can either be a UNC path to a server share, or a DFS (Distributed File System)
path. You can use the distribution point you created earlier for Password Policy Enforcer to
distribute the PPC. See the
[Automated Installation (Advanced Setup)](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/installation.md#automated-installation-advanced-setup)
topic for additional information.

If you did not create a distribution point for Password Policy Enforcer, then create one now.

Follow the steps below to create a PPC distribution point.

**Step 1 –** Log on to a server as an administrator.

**Step 2 –** Create a shared network folder to distribute the files from.

**Step 3 –** Give the **Domain Computers** security group read access to the share, and limit write
access to authorized personnel only.

### Copy PPECIt912.msi into the Distribution Point

Follow the steps below to copy the .msi file into the distribution point.

**Step 1 –** Start the Password Policy Enforcer installer (PPE912.exe).

**Step 2 –** Read the license agreement, and then click **Yes** if you accept all the license terms
and conditions.

**Step 3 –** Select the **Advanced** option, then click **Next**.

**Step 4 –** Right-click the **PPEClt912.msi** icon, click **Copy**, and then paste the file into
the distribution point.

![the_password_policy_client](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client.webp)

**Step 5 –** Give the **Domain Computers** security group read access to the PPEClt912.msi file in
the distribution point.

**Step 6 –** Click **Finish**.

### Create a Group Policy Object

Follow the steps below to create a group policy object.

**Step 1 –** Start the **Group Policy Management Console** (gpmc.msc).

**Step 2 –** Expand the **forest** and **domain** items in the left pane.

**Step 3 –** Right-click the **domain root node** in the left pane, and then click **Create a GPO in
this domain, and Link it here...**.

**Step 4 –** Enter **Password Policy Client** in the provided field, then press **ENTER**.

![the_password_policy_client_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_1.webp)

### Edit the Group Policy Object

Follow the steps below to edit a group policy object.

**Step 1 –** Right-click the **Password Policy Client GPO**, then click the **Edit...** edit.

**Step 2 –** Expand the **Computer Configuration**, **Policies**, and **Software Settings** items in
the left pane.

**Step 3 –** Right-click the **Software installation** item, then select **New** > **Package...**.

**Step 4 –** Enter the full **UNC path to PPEClt912.msi** in the Open dialog box.

**NOTE:** You must enter a UNC path so that other computers can access this file over the network.
For example, `\\file server\distribution point share\PPEClt912.msi`

**Step 5 –** Click **Open**.

**Step 6 –** Select the **Assigned deployment method**, then click **OK**.

![the_password_policy_client_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_2.webp)

**Step 7 –** Close the **Group Policy Management Editor**.

### Complete the Installation

Restart each computer to complete the installation. Windows installs the Password Policy Client
during startup.

#### Testing the PPC

Test the Password Policy Client by logging on to a computer and pressing the CTRL + ALT + DEL keys
and clicking the **Change a password** item. If you do not see the password policy, it could be
because a Password Policy Enforcer policy has not been assigned to you, or because the firewall
rules have not been created.

**NOTE:** The Password Policy Client does not store or send passwords or password hashes over the
network. An attacker cannot determine user passwords by sniffing the communication protocol. The
protocol is also encrypted by default for additional protection.

## Creating Firewall Rules for the PPC

You may need to create firewall rules for the Password Policy Client if your domain controllers are
running a software (host) firewall, or if the PPC and PPS communicate through a firewall. Firewall
rules are not necessary for local policies because the PPC and PPS are on the same computer.

#### Windows Firewall

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

#### Other Firewalls

Use the information on this page to create appropriate rules for your firewall that allow the
Password Policy Client and Password Policy Server to communicate through the firewall.

The Password Policy Client initiates a request by sending a datagram with the following attributes
to the Password Policy Server:

| Attribute           | Result                       |
| ------------------- | ---------------------------- |
| Protocol            | EDP                          |
| Source Address      | Client Computer IP address   |
| Source Port         | Any                          |
| Destination address | Domain controller IP address |
| Destination port    | 1333                         |

The Password Policy Server responds by sending a datagram with the following attributes back to the
Password Policy Client:

| Attribute           | Result                       |
| ------------------- | ---------------------------- |
| Protocol            | EDP                          |
| Source Address      | Client Computer IP address   |
| Source Port         | Any                          |
| Destination address | Domain controller IP address |
| Destination port    | 1333                         |

**NOTE:** If your firewall performs Stateful Packet Inspection, then only create a rule for the
request datagram as the firewall will automatically recognize and allow the response datagram.

## Customizing PPC Messages

The Password Policy Client displays three messages to help users choose a password:

- The Password Policy message is shown as the user changes their password. This message explains the
  password policy to the user.
- The Rejection Reason message is shown if a password does not comply with the Password Policy
  Enforcer password policy. This message tells the user why their password was rejected.
- The Generic Rejection message is shown if Password Policy Enforcer does have a specific reason for
  the rejection, generally because the password does not comply with the Windows password policy.

#### PPC Message Components

PPC messages are built using templates, macros, and inserts. The image below shows a sample policy
message with the template in blue, a macro in green, and policy inserts in white.

![the_password_policy_client_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_2.jpg)

### Customizing Message Templates

Each Password Policy Enforcer password policy has three message templates, one for each of the PPC
messages.

Follow the steps below to edit a policy's message templates.

**Step 1 –** Click the **Policies** item to display the Policies view.

**Step 2 –** Click the **desired policy** in the right pane of the management console.

**Step 3 –** Click **Properties** in the right pane of the management console.

**Step 4 –** Click the **Messages** tab.

**Step 5 –** Choose a language from the Language drop-down list.

**Step 6 –** Edit the message templates in the Password Policy, Rejection Reason, and Generic
Rejection text boxes.

### Customizing Rule Inserts

Rule inserts allow the Password Policy and Rejection Reason messages to display the most appropriate
information for each user. Most Password Policy Enforcer rules have a Policy and Reason insert. The
Policy insert is used by the [POLICY] macro, and the Reason insert is used by the [REASON] macro.

Follow the steps below to edit a rule's inserts.

**Step 1 –** Click the **Policies** item to display the Policies view.

**Step 2 –** Double-click the **desired policy** in the right pane of the management console.

**Step 3 –** Double-click the **desired rule** to display the Rule Properties page.

**Step 4 –** Click the **Messages** tab.

**Step 5 –** Choose a language from the Language list.

**Step 6 –** Edit the rule inserts in the Policy and Reason text boxes.

**NOTE:** Use the \n escape sequence to start a new line in a message template or rule insert (PPC
V5.1 and later). Inserts and lines starting with two or more spaces, a minus, and a space are shown
with a bullet to the left (PPC V8.0 and later).

### Multilingual Messages

The Password Policy Client initially displays all messages in English, but you can configure it to
display messages in 30 other languages.

Follow the steps below to configure PPC for another language.

**Step 1 –** Configure message templates for the new language (see Customizing Message Templates
above).

**Step 2 –** Configure rule inserts for each enabled rule (see Customizing Rule Inserts above).

![the_password_policy_client_6](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_6.webp)

![the_password_policy_client_7](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_7.webp)

The Password Policy Client uses the Windows client language settings to determine which language to
display.

**NOTE:** You do not have to create a Password Policy Enforcer policy for each language. Each policy
can have messages defined in multiple languages.

## Configuring the PPC

The Password Policy Client is self-configuring and does not require manual configuration in most
cases. You may need to manually configure the PPC if:

- You want to install it in a disabled state to be enabled later.
- You want to change the display settings for small screens.
- The PPC displays policy messages in the wrong language.
- The default communication settings are not suitable (for example, if you change the default PPS
  Port).

Password Policy Enforcer includes an administrative template to help configure the PPC. You can use
Active Directory GPOs to configure many computers, or the Local Group Policy Editor to configure one
computer. The PPC configuration is stored in the HKLM\SOFTWARE\Policies\ANIXIS\Password Policy
Client\ registry key.

Install the PPC Administrative Template

Follow the steps below to install the PPC administrative template.

**Step 1 –** Use the **Group Policy Management Console** (gpmc.msc) to display the GPOs linked at
the domain level.

**NOTE:** If you are not using Active Directory, then open the Local Group Policy Editor
(gpedit.msc) and skip step 2.

**Step 2 –** Right-click the **Password Policy Client GPO**, then click the **Edit...** button.

**NOTE:** You need to create the GPO if you installed the PPC manually.

**Step 3 –** Expand the **Computer Configuration** item.

**Step 4 –** Expand the **Policies** item, if visible.

**Step 5 –** Right-click the **Administrative Templates** item, then click the **Add/Remove
Templates...** button.

**Step 6 –** Click **Add...** and then browse to the Password Policy Enforcer installation folder
(\Program Files (x86)\Password Policy Enforcer\)

**Step 7 –** Select **PPEClt.adm**, then click **Open**.

![the_password_policy_client_8](/img/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/the_password_policy_client_8.webp)

**Step 8 –** Click **Close**.

Configure the Password Policy Client

Follow the steps below to configure the Password Policy Client.

**Step 1 –** Use the **Group Policy Management Console** (gpmc.msc) to display the GPOs linked at
the domain level.

**NOTE:** If you are not using Active Directory, then open the Local Group Policy Editor
(gpedit.msc) and skip step 2.

**Step 2 –** Right-click the **Password Policy Client GPO**, and then click the **Edit...** button.

**NOTE:** You need to create the GPO if you installed the PPC manually.

**Step 3 –** Expand the **Computer Configuration**, **Policies** (if vsible), **Administrative
Templates**, **Classic Administrative Templates** (**ADM**), **Password Policy Enforcer**, and
**Password Policy Client** items.

![the_password_policy_client_9](/img/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/the_password_policy_client_9.webp)

**Step 4 –** Double-click one of the settings in the right pane, and then configure the available
options.

**NOTE:** Information about each option is shown in the Help box.

![the_password_policy_client_10](/img/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/the_password_policy_client_10.webp)

**Step 5 –** Click **OK**.

**Step 6 –** Close the **Group Policy Management Editor**.

If you are using an Active Directory GPO to configure the PPC, then the configuration is applied to
all computers in the domain. This does not happen immediately. You can force an immediate refresh of
Group Policy on the local computer with this command: gpupdate /target:computer

#### Changing the Default Settings

The Windows 10 Change Password screen has less space for the Password Policy message than earlier
Windows versions. Users may need to scroll to see the message if their screen is small, or if their
computer is set to use large fonts.

The Password Policy Client for Windows 10 maximizes the available screen space by hiding
non-essential user interface elements on small screens. It can also display the Password Policy
message in a message box to draw attention to the password policy.

![the_password_policy_client_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_3.jpg)

You can change the default display settings to control which user interface elements are hidden, and
the point at which they are hidden. The display of the Password Policy message box is also
configurable.

Follow the steps below to change the default display settings for the Password Policy Client on
Windows 10.

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
