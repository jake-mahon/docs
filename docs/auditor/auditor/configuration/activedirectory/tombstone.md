# Adjust Active Directory Tombstone Lifetime (optional)

You can restore deleted Active Directory objects and their attributes using the Netwrix Auditor Object Restore for Active Directory tool shipped with Netwrix Auditor. The tool finds the information on deleted objects in the product snapshots (this data is stored in the Long-Term Archive, a local file-based storage of audit data) and AD tombstones.

To be able to restore deleted Active Directory objects longer, increase the __Active Directory tombstone lifetime__ property (set by default to 180 days). Netwrix recommends setting it to 2 years (__730 days__). You can specify any number of days, but a selected value should not exceed the Long-Term Archive retention period.

Take into consideration that increasing tombstone lifetime may affect Active Directory performance and operability.

To perform this procedure, you will need the [ADSI Edit](http://technet.microsoft.com/en-us/library/cc773354(v=ws.10).aspx) utility.utility.

Follow the steps to change the tombstone lifetime attribute.

__Step 1 –__ On any domain controller in the target domain, navigate to Start > Windows Administrative Tools __> ADSI Edit__.

__Step 2 –__ Right-click the __ADSI Edit__ node and select __Connect To__. In the __Connection Settings__ dialog, enable __Select a well-known Naming Context__ and select __Configuration__ from the drop-down list.

![manualconfig_adsi_connectionwinserver2016](../../../../../static/img/product_docs/1secure/configuration/ad/manualconfig_adsi_connectionwinserver2016.webp)

__Step 3 –__ Navigate to __Configuration `<Your_Root_Domain_Name>` → CN=Configuration,DC=`<name>`,DC=`<name>` → CN=Services → CN=Windows NT → CN=Directory Service__. Right-click it and select __Properties__ from the pop-up menu.

__Step 4 –__ In the __CN=Directory Service Properties__ dialog, locate the __tombstoneLifetime__ attribute in the __Attribute Editor__ tab.

![manualconfig_adsi_tombstone_winserver2016](../../../../../static/img/product_docs/auditor/auditor/configuration/activedirectory/manualconfig_adsi_tombstone_winserver2016.webp)

__Step 5 –__ Click __Edit__. Set the value to _"730"_ (which equals 2 years).
