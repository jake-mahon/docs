# Configure Security Event Log Size and Retention Settings

Follow the steps to configure Security Event Log settings:

__Step 1 –__ Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) __Group Policy Management.__

__Step 2 –__ In the left pane, navigate to __Forest: <forest_name> > Domains > <domain_name>__ __> Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.

__Step 3 –__ Navigate to __Computer Configuration > Policies > Windows Settings > Security Settings > Event Log__ and double-click the __Maximum security log size__ policy.

![manualconfig_grouppolicymaxsecuritysizewinserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_grouppolicymaxsecuritysizewinserver2016.png)

__Step 4 –__ In the Maximum security log size Properties dialog, select __Define this policy setting__ and set maximum security log size to __4194240__ kilobytes (4GB).

__Step 5 –__ Select the __Retention method for security log__ policy. In the Retention method for security log Properties dialog, check __Define this policy__ and select __Overwrite events as needed__.

__Step 6 –__ Run the following command to update group policy: ```gpupdate /force```

__NOTE:__ After configuring security event settings via Group Policy, you may notice that the log size on a specific computer is not set correctly. In this case, follow the resolution steps from the Netwrix Knowledge base article to fix the issue: [Security log settings do not apply via GPO](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u000000HDk6CAG.html).
