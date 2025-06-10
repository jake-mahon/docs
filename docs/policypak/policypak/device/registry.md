# What are the registry settings for Device Manager (and how do I reset Device Manager Admin Approval)?

On any endpoint, details about what USB and other devices have temporary or permanent access are stored here:

HKEY\_LOCAL\_MACHINE\SOFTWARE\PolicyPak\Client-Side Extensions\{7FA1BDCB-818A-4EF6-A1B7-EF5F85C2D702}\Admin Approval\ApprovedDevicesStorage

Here is an example of a device which was approved via the Admin Approval tool.

![aa1](/img/product_docs/policypak/policypak/device/aa1.webp)

## To determine the Admin Approval End Time for any device:

__Step 1 –__ Grab the __EndTime__ and change to __Decimal__.

__Step 2 –__ Input the __EndTime__ into this Powershell script.

```
$my_time = 1725537001291  
(([System.DateTimeOffset]::FromUnixTimeMilliseconds($my_time)).DateTime.ToLocalTime()).ToString("s")
```

An example can be seen here:

![aa2](/img/product_docs/policypak/policypak/device/aa2.webp)

## To Determine the Permissions within the Registry:

Permission bit flags:

- READ 0x80000000
- WRITE 0x40000000
- EXECUTE 0x20000000
- ALL 0x10000000

For example, for READ+WRITE permissions, the value is 0xC0000000.

## Resetting the Device Manager Admin Approval Values

From time to time you may want to reset the values on a machine such that all devices are reset, and new Admin Approval values may be set in the future. To do this:

__Step 1 –__ Download PSExec from [https://learn.microsoft.com/en-us/sysinternals/downloads/psexec](https://learn.microsoft.com/en-us/sysinternals/downloads/psexec)

__Step 2 –__ Run CMD as administator

__Step 3 –__ Execute psexec.exe -i -s regedit

__Step 4 –__ As SYSTEM open Regedit. Find HKEY\_LOCAL\_MACHINE\SOFTWARE\PolicyPak\Client-Side Extensions\{7FA1BDCB-818A-4EF6-A1B7-EF5F85C2D702}\Admin Approval\ApprovedDevicesStorage

__Step 5 –__ Delete the whole key __ApprovedDevicesStorage__ to reset AA approvals for all devices, or chose a specific one and delete it.

__Step 6 –__ Restart PPExtensionService.exe (aka Netwrix Endpoint Policy Manager (formerly PolicyPak) Helper Service.)
