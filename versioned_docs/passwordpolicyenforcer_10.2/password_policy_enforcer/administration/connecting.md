# Connect to a Configuration

Password Policy Enforcer's configuration settings are stored in Active Directory or the registry. An Active Directory configuration is called a domain configuration, and it defines the password policies for domain user accounts. A registry configuration is called a local configuration, and it defines the password policies for local user accounts.

## Connecting to a Domain Configuration

A domain configuration exists on every domain controller. Changes to the configuration replicate to all the domain controllers in the domain, so you only need to configure one domain controller in each domain. If you are using Password Policy Enforcer in more than one domain, then you will need to configure each domain separately.

Follow the steps below to connect to a domain configuration.

__Step 1 –__ Click the __Netwrix Password Policy Enforcer__ item to display the Password Policy Enforcer view.

__Step 2 –__ Click __Connect To__ in the right pane of the management console.

__Step 3 –__ Select the __Domain__ option.

__Step 4 –__ Enter the __name__ or __IP address__ of a domain controller, then click __OK__.

__NOTE:__ You cannot make changes to the Password Policy Enforcer configuration while the management console is connected to a read-only domain controller.

## Connecting to a Local Configuration

A local configuration is used by only one computer, so it does not replicate to any other computers. You can copy a local configuration to another computer by exporting the configuration from the registry, and then importing it into the registry of the other computer. You can also use Group Policy to distribute a local configuration to many computers. See the [Domain and Local Policies](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/domain_and_local_policies.md) topic for additional information.

Follow the steps below to connect to a computer's local configuration.

__Step 1 –__ Click the __Netwrix Password Policy Enforcer__ item to display the Password Policy Enforcer view.

__Step 2 –__ Click __Connect To__ in the right pane of the management console.

__Step 3 –__ Select the __Local__ option, then click __OK__.

__NOTE:__ Domain configurations are stored in the CN=Password Policy Enforcer 10.0,CN=System object.

__NOTE:__  Local configurations are stored in the HKLM\SOFTWARE\ANIXIS\Password Policy Enforcer 10.0\ registry key.

__NOTE:__ Users with write permission to these objects can configure Password Policy Enforcer.
