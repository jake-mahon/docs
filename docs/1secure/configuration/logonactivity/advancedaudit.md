# Configure Advanced Audit Policies

You can configure advanced audit policies instead of basic domain policies to collect Logon Activity changes with more granularity.

Follow the steps to configure security options.

Using both basic and advanced audit policies settings may lead to incorrect audit reporting. To force basic audit policies to be ignored and prevent conflicts, enable the Audit: Force audit policy subcategory settings to override audit policy category settings option.

__Step 1 –__ Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools> __Group Policy Management.__

__Step 2 –__ In the left pane, navigate to __Forest: `<forest_name>` > Domains > `<domain_name>` > Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.

__Step 3 –__ In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left and navigate to Policies > Windows Settings > Security Settings > Local Policies > Security Options.

__Step 4 –__ Locate the Audit: Force audit policy subcategory settings to override audit policy category settings and make sure that policy setting is set to _"Enabled"_.

![manualconfig_ad_nla_audit_force_winserver2016](../../../../static/img/product_docs/1secure/configuration/ad/manualconfig_ad_nla_audit_force_winserver2016.webp)

__Step 5 –__ Navigate to __Start__ > __Run__ and type _"cmd"_. Input the ```gpupdate /force``` command and press __Enter__. The group policy will be updated.

Follow the steps to configure advanced audit policies.

__Step 6 –__ Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools> __Group Policy Management.__

__Step 7 –__ In the left pane, navigate to __Forest: `<forest_name>`__ > __Domains__ > __`<domain_name>`__ > __Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.

__Step 8 –__ In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left and navigate to Policies > Windows Settings > Security Settings > Advanced Audit Policy Configuration > Audit Policies .

__Step 9 –__ Configure the following audit policies.

| Policy Subnode | Policy Name | Audit Events |
| --- | --- | --- |
| Account Logon | - Audit Kerberos Service Ticket Operations - Audit Kerberos Authentication Service - Audit Credential Validation | _"Success"_ and _"Failure"_ |
| - Audit Other Account Logon Events | _"Success"_ and _"Failure"_ |  |
| Logon/Logoff | - Audit Logoff - Audit Other Logon/Logoff Events | _"Success"_ |
| - Audit Logon | _"Success"_ and _"Failure"_ |  |
| System | - Audit Security State Change | _"Success"_ |

![manualconfig_nla_advpol2016](../../../../static/img/product_docs/1secure/configuration/logonactivity/manualconfig_nla_advpol2016.webp)

__Step 10 –__ Set the following advanced audit policies to _"Success"_ and _"Failure"_:

- Audit Kerberos Service Ticket Operations
- Audit Kerberos Authentication Service
- Audit Credential Validation

__Step 11 –__ Set the Audit Security State Change advanced audit policy to "_Success_".

__Step 12 –__ Navigate to __Start__ > __Run__ and type _"cmd"_. Input the ```gpupdate /force``` command and press __Enter__. The group policy will be updated.
