# Adjust Security Event Log Size and Retention

Defining the Security event log size is essential for change auditing. If the log size is insufficient, overwrites may occur before data is written to the Long-Term Archive and the Audit Database, and some audit data may be lost.

To prevent overwrites, you can increase the maximum size of the Security event log and set retention method for this log to “_Overwrite events as needed_”.

To adjust your Security event log size and retention method, follow the procedure described below.

To read about event log settings recommended by Microsoft, refer to the following article: [Event Log](https://support.microsoft.com/en-us/help/957662/recommended-settings-for-event-log-sizes-in-windows).

To increase the maximum size of the Security event log and set its retention method

1. Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) __Group Policy Management.__
2. In the left pane, navigate to __Forest: `<forest_name>` > Domains > `<domain_name>`__ __> Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.
3. Navigate to __Computer Configuration > Policies > Windows Settings > Security Settings > Event Log__ and double-click the __Maximum security log size__ policy.

   ![manualconfig_grouppolicymaxsecuritysizewinserver2016](../../../../../static/img/product_docs/1secure/configuration/logonactivity/manualconfig_grouppolicymaxsecuritysizewinserver2016.webp)
4. In the Maximum security log size Properties dialog, select __Define this policy setting__ and set maximum security log size to __4194240__ kilobytes (4GB).
5. Select the __Retention method for security log__ policy. In the Retention method for security log Properties dialog, check __Define this policy__ and select __Overwrite events as needed__.
6. Run the following command to update group policy:

    ```gpupdate /force```

If "Overwrite" option is not enough to meet your data retention requirements, you can use _auto-archiving_
option for Security event log to preserve historical event data in the archive files. With that option enabled, you may want to adjust the retention settings for log archives
(backups). Related procedures are described in the [Auto-archiving Windows Security log](https://helpcenter.netwrix.com/bundle/z-kb-articles-salesforce/page/kA04u000000Pcx6CAC.html) Netwrix Knowledge Base article.
