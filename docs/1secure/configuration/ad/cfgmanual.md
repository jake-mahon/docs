# Active Directory: manual configuration

To configure your domain for monitoring manually, you will need:

- __Group Policy Management Console__ — if you plan to perform configuration steps from a domain controller

  -OR-
- __ADSI Edit__ — if you plan to perform configuration steps from a server other than domain controller

If these tools are not installed, refer to the related topics:

- [Install ADSI Edit](/docs/1secure/configuration/ad/adsi.md)
- [Group Policy Management Console](/docs/1secure/configuration/ad/grouppolicymanagementconsole.md)

Take the following configuration steps:

__Step 1 –__  Configure effective domain controllers policy (by default, Default Domain Controllers Policy). See [Configure Basic Domain Audit Policies](/docs/1secure/configuration/ad/domainauditpolicies.md)
or
[Configure Advanced Audit Policies](/docs/1secure/configuration/ad/advancedpolicy.md) for details.

__Step 2 –__ [Configure Object-Level Auditing](/docs/1secure/configuration/ad/objectlevel.md)

__Step 3 –__ Adjust Security Event Log Size and Retention Settings

__Step 4 –__ If you have an on-premises Exchange server in your Active Directory domain, consider that some changes to AD can be made via that Exchange server. To be able to audit and report who made those changes, you should [Configure Exchange Administrator Audit Logging Settings](/docs/1secure/admin/datacollection/activedirectory/auditlogging.md)

Also, remember to do the following for AD auditing:

__Step 1 –__ Configure Data Collecting Account, as described in [Active Directory Auditing](/docs/1secure/admin/datacollection/activedirectory/activedirectoryauditing.md)

__Step 2 –__ Configure required protocols and ports, as described in [Protocols and Ports Required for Monitoring Active Directory, Exchange, and Group Policy](/docs/1secure/configuration/ad/protocolsandports.md) topic.

__Step 3 –__ [Enable Secondary Logon Service](/docs/1secure/configuration/ad/secondarylogonservice.md) on the computer where Netwrix Cloud Agent resides.
