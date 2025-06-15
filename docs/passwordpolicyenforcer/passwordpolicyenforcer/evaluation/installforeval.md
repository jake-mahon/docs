# Install Password Policy Enforcer for Evaluation

The evaluation installation uses the standard installation packages:

- Server Installation: install on each server and domain controller in the domain you are evaluating. You can install manually using the procedure in [Install Password Policy Enforcer on a Server](../install/installationserver.md) or automatically with [Install with Group Policy Management](../install/installationgpm.md) procedure. Installing Password Policy Enforcer does not extend the Active Directory schema. Be sure and install the __Configuration Console__ feature on at least one server.
- Client Installation: install on each workstation you are evaluating. The Password Policy Client is an optional Password Policy Enforcer component to help users choose compliant passwords. Follow the [Install Password Policy Enforcer Client](../install/installationclient.md) procedure, or [Install with Group Policy Management](../install/installationgpm.md).

You may need to create a firewall port exception on the domain controllers if you are evaluating the Password Policy Client on a domain with client computers. See the [Password Policy Client](../administration/password_policy_client.md) topic for additional information.
