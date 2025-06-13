# Installing Password Policy Client

The Password Policy Client is compatible with Windows 8, 8.1, 10, or 11. It is also compatible with Windows Server 2016, 2019, and 2022. The Password Policy Client can be used with Remote Desktop Services on these operating systems.

__NOTE:__ The Password Policy Client is also compatible with Windows XP, Vista, and 7. However, Netwrix no longer provides technical support for these versions.

## System Requirements

- Windows 8, 8.1, 10, or 11.
- Windows Server 2016, 2019, and 2022
- One Megabyte free disk space.
- 256 Kilobytes free RAM (per session if using Remote Desktop Services).

You can install the Password Policy Client manually by running the Password Policy Enforcer installer (PPE10.2.exe) and choosing the Express Setup option if you only need to install it on a few computers. If you have many computers, then follow the instructions below to perform an automated installation with Group Policy, or use your regular software distribution tool to do the same.

## Create a Distribution Point

A distribution point can either be a UNC path to a server share, or a DFS (Distributed File System) path. You can use the distribution point you created earlier for Password Policy Enforcer to distribute the Password Policy Client. See the [Installation](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/installation.md) topic for additional information.

If you did not create a distribution point for Password Policy Enforcer, then create one now.

Follow the steps below to create a Password Policy Client distribution point.

__Step 1 –__ Log on to a server as an administrator.

__Step 2 –__ Create a shared network folder to distribute the files from.

__Step 3 –__ Give the __Domain Computers__ security group read access to the share, and limit write access to authorized personnel only.

### Copy PPECIt10.2.msi into the Distribution Point

Follow the steps below to copy the .msi file into the distribution point.

__Step 1 –__ Start the Password Policy Enforcer installer (PPE10.2.exe).

__Step 2 –__ Read the license agreement, and then click __Yes__ if you accept all the license terms and conditions.

__Step 3 –__ Select the __Advanced__ option, then click __Next__.

__Step 4 –__ Right-click the __PPEClt10.2.msi__ icon, click __Copy__, and then paste the file into the distribution point.

![the_password_policy_client](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client.png)

__Step 5 –__ Give the __Domain Computers__ security group read access to the PPEClt10.2.msi file in the distribution point.

__Step 6 –__ Click __Finish__.

## Create a Group Policy Object

Follow the steps below to create a group policy object.

__Step 1 –__ Start the __Group Policy Management Console__ (gpmc.msc).

__Step 2 –__ Expand the __forest__ and __domain__ items in the left pane.

__Step 3 –__ Right-click the __domain root node__ in the left pane, and then click __Create a GPO in this domain, and Link it here...__.

__Step 4 –__ Enter __Password Policy Client__ in the provided field, then press __ENTER__.

![the_password_policy_client_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_1.png)

## Edit the Group Policy Object

Follow the steps below to edit a group policy object.

__Step 1 –__ Right-click the __Password Policy Client GPO__, then click the __Edit...__ edit.

__Step 2 –__ Expand the __Computer Configuration__, __Policies__, and __Software Settings__ items in the left pane.

__Step 3 –__ Right-click the __Software installation__ item, then select __New__ > __Package...__.

__Step 4 –__ Enter the full __UNC path to PPEClt10.2.msi__ in the Open dialog box.

__NOTE:__ You must enter a UNC path so that other computers can access this file over the network. For example, ```\\file server\distribution point share\PPEClt10.2.msi```

__Step 5 –__ Click __Open__.

__Step 6 –__ Select the __Assigned deployment method__, then click __OK__.

![the_password_policy_client_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_2.png)

__Step 7 –__ Close the __Group Policy Management Editor__.

## Complete the Installation

Restart each computer to complete the installation. Windows installs the Password Policy Client during startup.

## Testing the Password Policy Client

Test the Password Policy Client by logging on to a computer and pressing the CTRL + ALT + DEL keys and clicking the __Change a password__ item. If you do not see the password policy, it could be because a Password Policy Enforcer policy has not been assigned to you, or because the firewall rules have not been created.

__NOTE:__ The Password Policy Client does not store or send passwords or password hashes over the network. An attacker cannot determine user passwords by sniffing the communication protocol. The protocol is also encrypted by default for additional protection.

## Creating Firewall Rules for the Password Policy Client

You may need to create firewall rules for the Password Policy Client if your domain controllers are running a software (host) firewall, or if the Password Policy Client and Password Policy Server communicate through a firewall. Firewall rules are not necessary for local policies because the Password Policy Client and Password Policy Server are on the same computer.

### Windows Firewall

If Windows Firewall is enabled on your domain controllers, then you must create a port exception to allow connections to the Password Policy Server. Windows Firewall is enabled by default on Windows Server 2008 and later.

Follow the steps below to create the port exception on all domain controllers.

__Step 1 –__ Use the __Group Policy Management Console__ (gpmc.msc) to display the GPOs linked to the Domain Controllers OU.

__Step 2 –__ Right-click the __Password Policy Enforcer GPO__, and then click __Edit...__.

__NOTE:__  You need to create the GPO if you chose the Express Setup option.

__Step 3 –__ Expand the __Computer Configuration__, __Policies__, __Administrative Templates__, __Network__, __Network Connections__, and __Windows Firewall__ items.

__Step 4 –__ Click __Domain Profile__ in the left pane then double-click __Windows Firewall: Define inbound port exceptions__ in the right pane.

![the_password_policy_client_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_3.png)

__Step 5 –__ Select the __Enabled__ option, and then click __Show...__.

![the_password_policy_client_4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_4.png)

__Step 6 –__ Select the __Enabled__ option, and then click __Show...__.

![the_password_policy_client_5](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/the_password_policy_client_5.png)

__Step 7 –__ Click __OK__ until you return to the Group Policy Management Editor.

__Step 8 –__ Close the __Group Policy Management Editor__.

### Other Firewalls

Use the information on this page to create appropriate rules for your firewall that allow the Password Policy Client and Password Policy Server to communicate through the firewall.

The Password Policy Client initiates a request by sending a datagram with the following attributes to the Password Policy Server:

| Attribute | Result |
| --- | --- |
| Protocol | UDP |
| Source Address | Client Computer IP address |
| Source Port | Any |
| Destination address | Domain controller IP address |
| Destination port | 1333 |

The Password Policy Server responds by sending a datagram with the following attributes back to the Password Policy Client:

| Attribute | Result |
| --- | --- |
| Protocol | UDP |
| Source Address | Domain controller IP address |
| Source Port | Any |
| Destination address | Client Computer IP address |
| Destination port | Any |

__NOTE:__ If your firewall performs Stateful Packet Inspection, then only create a rule for the request datagram as the firewall will automatically recognize and allow the response datagram.
