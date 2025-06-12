# Active Directory: Manual Configuration

To configure your domain for monitoring manually, you will need:

- Group Policy Management Console — Required if you plan to perform configuration steps from a domain controller

  -OR-
- ADSI Edit — Required if you plan to perform configuration steps from a server other than domain controller

__NOTE:__ If these tools are not installed, refer to the following Microsoft articles:

- [Group Policy Management Console](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/dn265969(v=ws.11))
- [ADSI Edit](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2003/cc773354(v=ws.10)?redirectedfrom=MSDN)

Follow the steps to configure your domain for monitoring.

__Step 1 –__ Configure effective domain controllers policy (by default, Default Domain Controllers Policy). See the [Configure Basic Domain Audit Policies](/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/basicpolicy.md)
or
[Configure Advanced Audit Policies](/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/advancedpolicy.md) topics for additional information.

__Step 2 –__ Configure object-level auditing. See the [Configure Object-Level Auditing](/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/objectlevel.md) topic for additional information.

__Step 3 –__ Adjust the security event log size and retention settings. See the [Adjust Security Event Log Size and Retention](/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/securitylog.md)topic for additional information.

__Step 4 –__ If you have an on-premises Exchange server in your Active Directory domain, consider that some changes to AD can be made via that Exchange server. To be able to audit and report who made those changes, perform configuration steps as described in the [Exchange Administrator Audit Logging Settings](/versioned_docs/auditor_10.6/auditor/configuration/exchange/auditlog.md) topic.

Optionally, you can adjust the Active Directory Tombstone Lifetime. See the [Adjust Active Directory Tombstone Lifetime (optional)](/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/tombstone.md) topic for additional information.

Also, remember to perform the following steps for AD auditing:

__Step 1 –__ Configure Data Collecting Account, as described in the [Additional Configuration to Review Changes Made via Exchange Server](/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/additional.md) topic.

__Step 2 –__ Configure required protocols and ports, as described in the [Active Directory Ports](/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/ports.md) topic.

__Step 3 –__ Enable Secondary Logon Service on the computer where Netwrix Auditor Server resides.

## Enable Secondary Logon Service

Follow the steps to Enable Secondary Logon Service.

__Step 1 –__ On the computer where Auditor Server resides, navigate to Start > Windows Administrative Tools > __Services__.

__Step 2 –__ In the __Services__ dialog, locate the __Secondary Logon__ service.

__Step 3 –__ Right-click the service and on the __General__ tab make sure that __Startup type__ for this service is other than _Disabled_. The startup type can be either _Automatic_ or _Manual_.
