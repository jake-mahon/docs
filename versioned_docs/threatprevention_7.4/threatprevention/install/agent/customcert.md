# Create Custom Managed Certificates for Each Agent

If "custom-managed" is selected for the CA certificate configuration during [Manual Agent Deployment](/versioned_docs/threatprevention_7.4/threatprevention/install/agent/manual.md), use the ```SIAgentCert.exe``` command line utility to facilitate the creation of certificates for each Agent.

__NOTE:__ As a prerequisite for using custom managed certificates, you must provide the Enterprise Manager server DNS name, hostname, or FQDN (instead of the IP address) when installing Threat Prevention server, remote instance of the Administration Console, and the Agent. See the [Administration Console and Agent Not Communicating with the Enterprise Manager ](/versioned_docs/threatprevention_7.4/threatprevention/troubleshooting/enterprisemanagercommunication.md)topics for additional information.

The ```SIAgentCert.exe``` utility is located in the following folder:

```…\Netwrix\Netwrix Threat Prevention\SIWindowsAgent```

Follow the steps to run the ```SIAgentCert.exe``` utility.

__Step 1 –__ Open a command prompt on the machine where the Agent is deployed and run the SIAgentCert.exe utility as an Administrator. The utility checks for the following files in the ```.…\Netwrix\Netwrix Threat Prevention\SIWindowsAgent\CertsInfo``` folder:

- agent-crt.pem
- agentcsr.pem
- key.pem

If these files are not present because no certificates were previously created, the utility generates an ```agent-key.pem``` file and an ```agent-csr.pem``` and places them in the CertsInfo folder.

__Step 2 –__ The ```SIAgentCert.exe``` utility prompts you to sign the certificate using the generated ```agent-csr.pem``` file.

__NOTE:__ It is the customer's responsibility to supply the ```agent-csr.pem``` file to their certificate authority to create a signed file.

__Step 3 –__ Copy the ```agent-crt.pem``` file created and signed by the customer's certificate authority to the CertsInfo folder on the machine where the Agent is deployed:

```…\Netwrix\Netwrix Threat Prevention\SIWindowsAgent\CertsInfo```

__Step 4 –__ Verify that Enterprise Manager is running.

__Step 5 –__ Run the ```SIAgentCert.exe``` tool again as an Administrator on the machine where the Agent is deployed, which will enroll the ```agent-crt.pem``` file.

__Step 6 –__ Start the Agent service. This service has display name as _Netwrix Threat Prevention Windows Agent_ and service name as _SIWindowsAgent_.

__NOTE:__ After Agent deployment, you can configure and upgrade the Agent through the Administration Console. Upgrades and configuration changes will continue to use the existing certificate.

See the [Upgrade Procedure](/versioned_docs/threatprevention_7.4/threatprevention/install/upgrade/overview.md) topic for upgrade considerations. See the [Upgrade Agent](/versioned_docs/threatprevention_7.4/threatprevention/install/upgrade/agent.md) topic for instructions on upgrading an Agent from the Administration Console.
