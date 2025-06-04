---
id: cfgmanual
title: 'Active Directory: manual configuration'
---

# Active Directory: manual configuration

To configure your domain for monitoring manually, you will need:

- **Group Policy Management Console** — if you plan to perform configuration steps from a domain controller

  -OR-
- **ADSI Edit** — if you plan to perform configuration steps from a server other than domain controller

If these tools are not installed, refer to the related topics:

- [Install ADSI Edit](ADSI.md "Install ADSI Edit")
- [Group Policy Management Console](GroupPolicyManagementConsole.md "Group Policy Management Console")

Take the following configuration steps:

**Step 1 –**  Configure effective domain controllers policy (by default, Default Domain Controllers Policy). See [Configure Basic Domain Audit Policies](DomainAuditPolicies.md "Configure Basic Domain Audit Policies")
or
[Configure Advanced Audit Policies](AdvancedPolicy.md "Configure Advanced Audit Policies") for details.

**Step 2 –** [Configure Object-Level Auditing](ObjectLevel.md "Configure Object-Level Auditing")

Also, remember to do the following for AD auditing:

**Step 2 –** Configure required protocols and ports, as described in [Protocols and Ports Required for Monitoring Active Directory, Exchange, and Group Policy](ProtocolsAndPorts.md "Protocols and Ports Required for Monitoring Active Directory, Exchange, and Group Policy") topic.

**Step 3 –** [Enable Secondary Logon Service](SecondaryLogonService.md "Enable Secondary Logon Service") on the computer where Netwrix Cloud Agent resides.