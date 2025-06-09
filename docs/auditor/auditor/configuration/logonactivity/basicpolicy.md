# Configure Basic Domain Audit Policies

Basic local audit policies allow tracking changes to user accounts and groups and identifying originating workstations. You can configure advanced audit policies for the same purpose too. See the [Configure Advanced Audit Policies](/docs/auditor/auditor/configuration/logonactivity/advancedpolicy.md) topic for additional information.

1. Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) __Group Policy Management.__
2. In the left pane, navigate to __Forest: `<forest_name>` > Domains > `<domain_name>`__ __> Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.
3. In the __Group Policy Management Editor__ dialog, expand the __Computer Configuration__ node on the left and navigate to __Policies → Windows Settings → Security Settings → Local Policies → Audit Policy.__
4. Configure the following audit policies.

   | Policy | Audit Events |
   | --- | --- |
   | Audit logon events | _"Success"_ and _"Failure"_ |
   | Audit account logon events | _"Success"_ and _"Failure"_ |
   | Audit system events | _"Success"_ |

   ![manualconfig_nla_auditpolicies2016](/img/product_docs/1secure/1secure/configuration/logonactivity/manualconfig_nla_auditpolicies2016.png)
5. Run the following command to update group policy:

    ```gpupdate /force```
