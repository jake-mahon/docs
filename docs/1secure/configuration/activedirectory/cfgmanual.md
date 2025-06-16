---
id: active-directory-manual-configuration
title: "Active Directory: manual configuration"
pagination_label: "Active Directory: manual configuration"
sidebar_label: "Active Directory: manual configuration"
sidebar_position: 105
description: "Learn how to manually configure your domain for Active Directory monitoring using Group Policy Management Console or ADSI Edit."
---

# Active Directory: manual configuration

To configure your domain for monitoring manually, you will need:

- **Group Policy Management Console** — if you plan to perform configuration steps from a domain
  controller

    -OR-

- **ADSI Edit** — if you plan to perform configuration steps from a server other than domain
  controller

If these tools are not installed, refer to the related topics:

- [Install ADSI Edit](adsi.md)
- [Group Policy Management Console](grouppolicymanagementconsole.md)

Take the following configuration steps:

**Step 1 –** Configure effective domain controllers policy (by default, Default Domain Controllers
Policy). See [Configure Basic Domain Audit Policies](domainauditpolicies.md) or
[Configure Advanced Audit Policies](advancedpolicy.md) for details.

**Step 2 –** [Configure Object-Level Auditing](objectlevel.md)

**Step 3 –** Adjust Security Event Log Size and Retention Settings

**Step 4 –** If you have an on-premises Exchange server in your Active Directory domain, consider
that some changes to AD can be made via that Exchange server. To be able to audit and report who
made those changes, you should
[Configure Exchange Administrator Audit Logging Settings](../../admin/datacollection/activedirectory/auditlogging.md)

Also, remember to do the following for AD auditing:

**Step 1 –** Configure Data Collecting Account, as described in
[Active Directory Auditing](../../admin/datacollection/activedirectory/activedirectoryauditing.md)

**Step 2 –** Configure required protocols and ports, as described in
[Protocols and Ports Required for Monitoring Active Directory, Exchange, and Group Policy](protocolsandports.md)
topic.

**Step 3 –** [Enable Secondary Logon Service](secondarylogonservice.md) on the computer where
Netwrix Cloud Agent resides.
