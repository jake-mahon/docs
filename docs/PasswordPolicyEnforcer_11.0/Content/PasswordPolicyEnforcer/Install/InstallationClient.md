---
sidebar_position: 6552
title: Install Password Policy Enforcer Client
---

# Install Password Policy Enforcer Client

This procedure is used to install the client on your current workstation. See the [Install with Group Policy Management](InstallationGPM "Install with GPM") top for details on installing the client across your network. You can also install/uninstall the products using command line [Silent Installation](../Administration/Command Line Interface#Silent "Silent Installation").

**Step 1 –** Navigate to the folder where you extracted the installers downloaded from Netwrix.

**Step 2 –** Click on the **Netwrix\_PPE\_Client\_*version*\_x64.msi** (64 bit OS) or **Netwrix\_PPE\_Client\_*version*\_x86.msi** (32 bit OS) installation package. The installer is launched.

![](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Install/ClientSetup1.png "Client Setup")

**Step 3 –** Click **Next**.

![](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Install/ClientSetup2.png "Client Setup")

**Step 4 –** Review the End-User License Agreement. Click **I accept the terms in the License Agreement**.

**Step 5 –** Click **Next**.

![](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Install/ClientSetup3.png "Client Setup")

**Step 6 –** Click **Install**.

![](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PasswordPolicyEnforcer/Install/ClientSetup4.png "Client Setup")

**Step 7 –** Click **Finish** when installation is complete.

The client is installed. There is no associated desktop icon or menu item.

Restart each computer to complete the installation. Windows installs the Password Policy Client during startup.

## Testing the Password Policy Client

Test the Password Policy Client by logging on to a computer and pressing the CTRL + ALT + DEL keys and clicking the **Change a password** item. If you do not see the password policy, it could be because a Password Policy Enforcer policy has not been assigned to you, or because the firewall rules have not been created.

**NOTE:** The Password Policy Client does not store or send passwords or password hashes over the network. An attacker cannot determine user passwords by sniffing the communication protocol. The protocol is also encrypted by default for additional protection.

## Creating Firewall Rules for the Password Policy Client

You may need to create firewall rules for the Password Policy Client if your domain controllers are running a software (host) firewall, or if the Password Policy Client and Password Policy Server communicate through a firewall. Firewall rules are not necessary for local policies because the Password Policy Client and Password Policy Server are on the same computer.

### Windows Firewall

If Windows Firewall is enabled on your domain controllers, then you must create a port exception to allow connections to the Password Policy Server. Windows Firewall is enabled by default on Windows Server 2008 and later.

Follow the steps below to create the port exception on all domain controllers.

**Step 1 –** Use the **Group Policy Management Console** (gpmc.msc) to display the GPOs linked to the Domain Controllers OU.

**Step 2 –** Right-click the **Password Policy Enforcer GPO**, and then click **Edit...**.

**NOTE:**  You need to create the GPO if you chose the Express Setup option.

**Step 3 –** Expand the **Computer Configuration**, **Policies**, **Administrative Templates**, **Network**, **Network Connections**, and **Windows Firewall** items.

**Step 4 –** Click **Domain Profile** in the left pane then double-click **Windows Firewall: Define inbound port exceptions** in the right pane.

![](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PPE Admin Guide/The Password Policy Client_3.png)

**Step 5 –** Select the **Enabled** option, and then click **Show...**.

![](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PPE Admin Guide/The Password Policy Client_4.png)

**Step 6 –** Select the **Enabled** option, and then click **Show...**.

![](../../../../../static/images/PasswordPolicyEnforcer_11.0/Content/Resources/Images/PPE Admin Guide/The Password Policy Client_5.png)

**Step 7 –** Click **OK** until you return to the Group Policy Management Editor.

**Step 8 –** Close the **Group Policy Management Editor**.

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

**NOTE:** If your firewall performs Stateful Packet Inspection, then only create a rule for the request datagram as the firewall automatically recognizes and allows the response datagram.