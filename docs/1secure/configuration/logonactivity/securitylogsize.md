# Configure Security Event Log Size and Retention Settings

__Step 1 –__ Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start>Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012)__> Group Policy Management.__

__Step 2 –__ In the left pane, navigate to __Forest: `<forest_name>`__ > __Domains__ > __`<domain_name>` → Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.

__Step 3 –__ Navigate to __Computer Configuration__ > __Policies__ > __Windows Settings > Security Settings__ >  __Event Log__ and double-click the __Maximum security log size__ policy.

![manualconfig_grouppolicymaxsecuritysizewinserver2016](../../../../static/img/product_docs/1secure/configuration/logonactivity/manualconfig_grouppolicymaxsecuritysizewinserver2016.webp)

__Step 4 –__ In the __Maximum security log size Properties__ dialog, select __Define this policy setting__ and set maximum security log size to_"4194240"_ kilobytes (4GB).

__Step 5 –__ Select the __Retention method for security log__ policy. In the __Retention method for security log Properties__ dialog, check __Define this policy__ and select __Overwrite events as needed__.

__Step 6 –__ Navigate to __Start__ > __Run__ and type _"cmd"_. Input the ```gpupdate /force``` command and press __Enter__. The group policy will be updated.
