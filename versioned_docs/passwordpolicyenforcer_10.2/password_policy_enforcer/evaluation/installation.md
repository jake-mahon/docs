# Installation

You can install Password Policy Enforcer manually, or you can automate the installation with a software distribution tool. Installing Password Policy Enforcer does not extend the Active Directory schema.

__NOTE:__ Refer to the [Administration](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/administration_overview.md) topic to learn how to install Password Policy Enforcer with Group Policy. You can also use other software distribution tools like Microsoft's System Center Configuration Manager to install Password Policy Enforcer.

Follow the steps below to manually install Password Policy Enforcer.

__Step 1 –__ Start the Password Policy Enforcer installer from the PPE10.exe file.

__Step 2 –__ Read the license agreement, then click __Yes__ to accept the license terms and conditions.

__Step 3 –__ Select __Express__, then __click__ Next.

__Step 4 –__ Select the __Password Policy Server__ check box, if unchecked.

__Step 5 –__ Click __Next__ to install Password Policy Enforcer.

__Step 6 –__ Click __Yes__ when asked to restart the computer.

If you are evaluating Password Policy Enforcer on a domain with more than one domain controller, repeat the steps above on every domain controller in the domain.

The Password Policy Client is an optional Password Policy Enforcer component that helps users to choose a compliant password. You do not have to install the Password Policy Client to enforce a Password Policy Enforcer password policy, but installing the Password Policy Client will make it easier for users to choose a password. If you are testing Password Policy Enforcer on a domain that contains client computers, then repeat the steps above on any Windows client computers if you would like to evaluate the Password Policy Client. You do not need to select the __Password Policy Server__ check box to install the Password Policy Client on a client computer.

You may need to create a firewall port exception on the domain controllers if you are evaluating the Password Policy Client on a domain with client computers. See the [Password Policy Client](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/password_policy_client.md#Password-Policy-Client) topic for additional information.

__NOTE:__ The Password Policy Client does not replace or modify any Windows system files. You can install it with Group Policy, or some other software distribution tool in your production network.
