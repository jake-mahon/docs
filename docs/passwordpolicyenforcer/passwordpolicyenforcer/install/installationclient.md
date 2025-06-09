# Install Password Policy Enforcer Client

This procedure is used to install the client on your current workstation. See the [Install with Group Policy Management](/docs/passwordpolicyenforcer/passwordpolicyenforcer/install/installationgpm.md) top for details on installing the client across your network. You can also install/uninstall the products using command line [Silent Installation](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/command_line_interface.md#silent-installation).

__Step 1 –__ Navigate to the folder where you extracted the installers downloaded from Netwrix.

__Step 2 –__ Click on the __Netwrix\_PPE\_Client\__version_\_x64.msi__ (64 bit OS) or __Netwrix\_PPE\_Client\__version_\_x86.msi__ (32 bit OS) installation package. The installer is launched.

![Client Setup](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/clientsetup1.png)

__Step 3 –__ Click __Next__.

![Client Setup](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/clientsetup2.png)

__Step 4 –__ Review the End-User License Agreement. Click __I accept the terms in the License Agreement__.

__Step 5 –__ Click __Next__.

![Client Setup](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/clientsetup3.png)

__Step 6 –__ Click __Install__.

![Client Setup](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/clientsetup4.png)

__Step 7 –__ Click __Finish__ when installation is complete.

The client is installed. There is no associated desktop icon or menu item.

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

![the_password_policy_client_3](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/the_password_policy_client_3.png)

__Step 5 –__ Select the __Enabled__ option, and then click __Show...__.

![the_password_policy_client_4](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/the_password_policy_client_4.png)

__Step 6 –__ Select the __Enabled__ option, and then click __Show...__.

![the_password_policy_client_5](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/install/the_password_policy_client_5.png)

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

__NOTE:__ If your firewall performs Stateful Packet Inspection, then only create a rule for the request datagram as the firewall automatically recognizes and allows the response datagram.
