# Configure Windows Registry Audit Settings

Windows Registry audit permissions must be configured on each Windows server you want to audit so that the “Who” and “When” values are reported correctly for each change. For test environment, PoC or evaluation you can use automatic audit configuration. If you want to configure Windows Registry manually, follow the instructions below.

The following audit permissions must be set to _"Successful"_ for the ```HKEY_LOCAL_MACHINE\SOFTWARE and HKEY_LOCAL_MACHINE\SYSTEM``` keys:

- Set Value
- Create Subkey
- Delete
- Write DAC
- Write Owner

Perform one of the following procedures depending on the OS version:

- [Configuring Windows registry audit settings on pre-Windows Server 2012 versions](#Configuring-Windows-registry-audit-settings-on-pre-Windows-Server-2012-versions)
- [Configuring Windows registry audit settings on Windows Server 2012 and above](#Configuring-Windows-registry-audit-settings-on-Windows-Server-2012-and-above)

## Configuring Windows registry audit settings on pre-Windows Server 2012 versions

__Step 1 –__ On your target server, open __Registry Editor__: navigate to __Start → Run__ and type _"regedit"_.

__Step 2 –__ In the registry tree, expand the __HKEY\_LOCAL\_MACHINE__ key, right-click __SOFTWARE__ and select __Permissions__ from the pop-up menu.

__Step 3 –__ In the __Permissions for SOFTWARE__ dialog, click __Advanced__.

__Step 4 –__ In the __Advanced Security Settings for SOFTWARE__ dialog, select the __Auditing__ tab and click __Add__.

__Step 5 –__ Select the __Everyone__ group.

__Step 6 –__ In the __Auditing Entry for SOFTWARE__ dialog, select _"Successful"_ for the following access types:

- __Set Value__
- __Create Subkey__
- __Delete__
- __Write DAC__
- __Write Owner__

![ManualConfig_WS_AuditingEntry2008](/img/versioned_docs/auditor_10.6/auditor/configuration/windowsserver/manualconfig_ws_auditenrty2008.png)

Repeat the same steps for the ```HKEY_LOCAL_MACHINE\SYSTEM``` key.

## Configuring Windows registry audit settings on Windows Server 2012 and above

__Step 1 –__ On your target server, open __Registry Editor__: navigate to __Start → Run__ and type _"regedit"_.

__Step 2 –__ In the registry tree, expand the __HKEY\_LOCAL\_MACHINE__ key, right-click __SOFTWARE__ and select __Permissions__ from the pop-up menu.

__Step 3 –__ In the __Permissions for SOFTWARE__ dialog, click __Advanced__.

__Step 4 –__ In the __Advanced Security Settings for SOFTWARE__ dialog, select the __Auditing__ tab and click __Add__.

__Step 5 –__ Click __Select a principal link__ and specify the __Everyone__ group in the __Enter the object name to select__ field.

__Step 6 –__ Set __Type__ to _"Success"_ and __Applies to__ to _"This key and subkeys_.

__Step 7 –__ Click __Show advanced permissions__ and select the following access types:

- Set Value
- Create Subkey
- Delete
- Write DAC
- Write Owner

![Config_WS_AuditingEntry_2016](/img/versioned_docs/auditor_10.6/auditor/configuration/windowsserver/manualconfig_ws_auditenrty_2016.png)

Repeat the same steps for the ```HKEY_LOCAL_MACHINE\SYSTEM``` key.

Using Group Policy for configuring registry audit is not recommended, as registry DACL settings may be lost.
