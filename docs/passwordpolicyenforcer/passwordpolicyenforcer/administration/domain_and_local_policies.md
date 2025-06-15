# Domain and Local Policies

Netwrix Password Policy Enforcer enforces password policies for both domain and local user accounts.

Domain user accounts exist in Active Directory. Information about these accounts is kept on the domain controllers, and changes to the accounts are replicated amongst the domain controllers.

Local user accounts exist in the SAM database of workstations and servers. The workstations and servers may be standalone, or domain members. Information about these accounts is only kept on the host computer, and does not replicate to any other computers.

A typical Windows network has both domain and local user accounts, but you may not want to enforce Password Policy Enforcer password policies for both account types. If your users normally logon with a domain account, then you will most likely only use Password Policy Enforcer to enforce password policies for the domain accounts.

## Installation Differences

To enforce password policies for domain user accounts, you should install Password Policy Enforcer onto all the domain controllers in the domain. If you have read-only domain controllers and aren't using the [Rules](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/rules.md), [Password Policy Client](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/password_policy_client.md), or other software (such as [Netwrix Password Reset](https://www.netwrix.com/active_directory_password_reset_tool.html)) that uses the Password Policy Enforcer Client protocol, then you do not need to install Password Policy Enforcer on the read-only domain controllers.

To enforce password policies for local user accounts, you should install Password Policy Enforcer onto the computers containing the user accounts you wish to enforce password policies for. These computers may be workstations or servers, and they may be standalone or domain members. It is normally not necessary to install Password Policy Enforcer onto all the workstations and servers in a domain because most users in a domain logon with a domain account. If this is the case, then you will most likely only need to install Password Policy Enforcer on the domain controllers.

## Operational Differences

Most of Password Policy Enforcer's rules and features can be used with both domain and local policies, but there are some differences. When enforcing the password policy for domain accounts, Password Policy Enforcer queries Active Directory to get information about the accounts.

While it is theoretically possible to get most of this information from the SAM database for local accounts, there is a technical limitation which stops password filters from querying the SAM. There is also some information, such as the user's OU, which does not exist in the SAM. Because of these limitations, the following rules and features cannot be used with local password policies:

- The Minimum Age and Maximum Age rules (you can use the Windows version of these rules with Password Policy Enforcer). See the [Rules](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/rules.md) topic for additional information.
- Policy assignments by groups and containers. See the [Assign Policies to Users & Groups](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/usersgroups.md) topic for additional information.

Password Policy Enforcer's configuration is stored in Active Directory for domain password policies, and in the Windows registry for local password policies. The Connect To page in the Password Policy Enforcer management console allows you to choose a configuration source. See the [Connected To](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/configconsole.md#connected-to) topic for additional information. Changes you make to Password Policy Enforcer's domain configuration are replicated to all domain controllers in the domain. Changes to a local configuration are applied only to the local computer. If you want to use the same local configuration for many computers, export the HKLM\SOFTWARE\ANIXIS\Password Policy Enforcer 10.0\ registry key from the configured computer, and import it into the other computers.

You can also use Group Policy to distribute Password Policy Enforcer's local configuration to many computers in a domain. This is only necessary for local password policies. Domain password policies automatically replicate to the domain controllers because they are stored in Active Directory.

Follow the steps below to distribute Password Policy Enforcer's local configuration with Group Policy.

__Step 1 –__ Start the Group Policy Management Console (gpmc.msc).

__Step 2 –__ Expand the forest and domain items in the left pane.

__Step 3 –__ Right-click the __Group Policy__ object that you would like to use to distribute the configuration, and then click the __Edit...__ button.

__Step 4 –__ Expand the Computer Configuration, Preferences, and Windows Settings items in the left pane.

__Step 5 –__ Right-click the __Registry__ item, and then select __New__ > __Registry Wizard__.

![domain_and_local_policies](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/domain_and_local_policies.webp)

__Step 6 –__ Select the computer that contains the Password Policy Enforcer local configuration that you want to distribute, and then click __Next__.

__Step 7 –__ Expand the __HKEY_LOCAL_MACHINE__, __SOFTWARE__, and __ANIXIS__ items.

__Step 8 –__ Click the __Password Policy Enforcer _version___ item, and then select the check boxes beside each item in the bottom pane of the window.

![domain_and_local_policies_1](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/domain_and_local_policies_1.webp)

__Step 9 –__ Click __Finish__.

__Step 10 –__ Close the Group Policy Management Editor.

Password Policy Enforcer's local configuration is applied to the target computers in the domain. This does not happen immediately, as Windows takes some time to apply the changes to Group Policy. You can force an immediate refresh of Group Policy on the local computer with this command: ```gpupdate /target:computer```
