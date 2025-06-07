# Configure Basic Domain Audit Policies

Basic audit policies allow tracking changes to user accounts and groups and identifying originating workstations. You can configure advanced audit policies for the same purpose too. See the [Configure Advanced Audit Policies](/docs/product_docs/1secure/1secure/configuration/ad/advancedpolicy.md) topic for additional information.

__Step 1 –__ Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012)>  __Group Policy Management.__

__Step 2 –__ In the left pane, navigate to __Forest: <forest\_name>__ > __Domains__ >  __<domain\_name> > Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.

__Step 3 –__ In the __Group Policy Management Editor__ dialog, expand the __Computer Configuration__ node on the left and navigate to __Policies > Windows Settings > Security Settings > Local Policies > Audit Policy.__

__Step 4 –__ Configure the following audit policies.

| Policy | Audit Events |
| --- | --- |
| __Audit account management__ | _"Success"_ |
| __Audit directory service access__ | _"Success"_ |
| __Audit logon events__ | _"Success"_ |

![manualconfig_ad_localpolicy_winserver2016](/static/img/product_docs/1secure/1secure/configuration/ad/manualconfig_ad_localpolicy_winserver2016.png)

The Audit logon events policy is only required to collect the information on the originating workstation, i.e., the computer from which a change was made. This functionality is optional and can be disabled.

__Step 5 –__ Navigate to __Start > Run__ and type _"cmd"_. Input the ```gpupdate /force``` command and press __Enter__. The group policy will be updated.
