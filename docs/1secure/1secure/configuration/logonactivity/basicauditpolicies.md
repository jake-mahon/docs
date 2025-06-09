# Configure Basic Domain Audit Policies

Basic local audit policies allow tracking changes to user accounts and groups and identifying originating workstations. You can configure advanced audit policies for the same purpose too. See [Configure Advanced Audit Policies](/docs/1secure/1secure/configuration/logonactivity/advancedaudit.md)

__Step 1 –__ Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) >  __Group Policy Management.__

__Step 2 –__ In the left pane, navigate to __Forest: `<forest_name>`__ > __Domains > `<domain_name>` > Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.

__Step 3 –__ In the __Group Policy Management Editor__ dialog, expand the __Computer Configuration__ node on the left and navigate to __Policies__ > __Windows Settings__ > __Security Settings__ > __Local Policies > Audit Policy.__

__Step 4 –__ Configure the following audit policies.

| Policy | Audit Events |
| --- | --- |
| Audit logon events | _"Success"_ and _"Failure"_ |
| Audit account logon events | _"Success"_ and _"Failure"_ |
| Audit system events | _"Success"_ |

![manualconfig_nla_auditpolicies2016](/img/product_docs/1secure/1secure/configuration/logonactivity/manualconfig_nla_auditpolicies2016.png)

__Step 5 –__ Set the Audit system events policy to __Success__.

__Step 6 –__ Navigate to __Start__ > __Run__ and type _"cmd"_. Input the ```gpupdate /force``` command and press __Enter__. The group policy will be updated.
