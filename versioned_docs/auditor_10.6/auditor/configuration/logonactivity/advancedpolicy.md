# Configure Advanced Audit Policies

You can configure advanced audit policies instead of basic domain policies to collect Logon Activity changes with more granularity.

Perform the following procedures:

- [Configuring security options](#Configuring-security-options)
- [Configuring advanced audit policies](#Configuring-advanced-audit-policies)

## Configuring security options

Using both basic and advanced audit policies settings may lead to incorrect audit reporting. To force basic audit policies to be ignored and prevent conflicts, enable the Audit: Force audit policy subcategory settings to override audit policy category settings option.

To do it, perform the following steps:

1. Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) __Group Policy Management.__
2. In the left pane, navigate to __Forest: <forest\_name> > Domains > <domain\_name>__ __> Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.
3. In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left and navigate to Policies → Windows Settings → Security Settings → Local Policies → Security Options.
4. Locate the Audit: Force audit policy subcategory settings to override audit policy category settings and make sure that policy setting is set to _"Enabled"_.

   ![manualconfig_ad_nla_audit_force_winserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_ad_nla_audit_force_winserver2016.png)
5. Run the following command to update group policy:

    ```gpupdate /force```

## Configuring advanced audit policies

1. Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) __Group Policy Management.__
2. In the left pane, navigate to __Forest: <forest\_name> > Domains > <domain\_name>__ __> Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.
3. In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left and navigate to Policies → Windows Settings → Security Settings → Advanced Audit Policy Configuration → Audit Policies .
4. Configure the following audit policies.

   | Policy Subnode | Policy Name | Audit Events |
   | --- | --- | --- |
   | Account Logon | - Audit Kerberos Service Ticket Operations - Audit Kerberos Authentication Service - Audit Credential Validation | _"Success"_ and _"Failure"_ |
   | - Audit Other Account Logon Events | _"Success"_ and _"Failure"_ |  |
   | Logon/Logoff | - Audit Logoff - Audit Other Logon/Logoff Events | _"Success"_ |
   | - Audit Logon | _"Success"_ and _"Failure"_ |  |
   | System | - Audit Security State Change | _"Success"_ |

   ![manualconfig_nla_advpol2016](/img/versioned_docs/auditor_10.6/auditor/configuration/logonactivity/manualconfig_nla_advpol2016.png)
5. Run the following command to update group policy:

    ```gpupdate /force```
