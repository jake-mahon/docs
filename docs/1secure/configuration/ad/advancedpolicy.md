# Configure Advanced Audit Policies

You can configure advanced audit policies instead of basic domain policies to collect Active Directory changes with more granularity. Either basic or advanced audit policies must be configured to track changes to accounts and groups, and to identify workstations where changes were made.

## To configure security options

Using both basic and advanced audit policies settings may lead to incorrect audit reporting. To force basic audit policies to be ignored and prevent conflicts, enable the Audit: Force audit policy subcategory settings to override audit policy category settings option.

Follow the steps:

__Step 1 –__ Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) >  __Group Policy Management.__

__Step 2 –__ In the left pane, navigate to __Forest: `<forest_name>` → Domains → `<domain_name>` → Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.

__Step 3 –__ In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left and navigate to Policies > Windows Settings > Security Settings → Local Policies → Security Options.

__Step 4 –__ Locate the Audit: Force audit policy subcategory settings to override audit policy category settings and make sure that policy setting is set to _"Enabled"_.

![manualconfig_ad_nla_audit_force_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_ad_nla_audit_force_winserver2016.webp)

__Step 5 –__ Navigate to __Start → Run__ and type _"cmd"_. Input the ```gpupdate /force``` command and press __Enter__. The group policy will be updated.

## To configure advanced audit policies

__Step 1 –__ Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) >  __Group Policy Management.__

__Step 2 –__ In the left pane, navigate to __Forest: `<forest_name>`__ > __Domains__ > __`<domain_name>`__ > __Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.

__Step 3 –__ In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left and navigate to Policies > Windows Settings > Security Settings > Advanced Audit Policy Configuration > Audit Policies.

__Step 4 –__ Configure the following audit policies.

| Policy Subnode | Policy Name | Audit Events |
| --- | --- | --- |
| Account Management | - Audit Computer Account Management - Audit Distribution Group Management - Audit Security Group Management - Audit User Account Management | _"Success"_ |
| DS Access | Audit Directory Service Access | _"Success"_ |
| Logon/Logoff | - Audit Logoff - Audit Logon   These policies are only required to collect the information on the originating workstation, i.e., the computer from which a change was made. | _"Success"_ |

![manualconfig_ad_advpol_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_ad_advpol_winserver2016.webp)

__Step 5 –__ Navigate to __Start > Run__ and type _"cmd"_. Input the ```gpupdate /force``` command and press __Enter__. The group policy will be updated.
