# Configure Security Event Log Maximum Size

Follow the steps to configure Event Log maximum size:

__Step 1 –__ On your file server, create a new file system where the security log will be stored.

__Step 2 –__ Mount this file system on a mount point, e.g., __/events__.

__Step 3 –__ Make sure that it is accessible via the __\\`<file_server_name>`\C$\events__ UNC path.

__Step 4 –__ On the computer where Auditor Server is installed, open __Registry Editor__: navigate to __Start → Run__ and type _"regedit"_.

__Step 5 –__ Navigate to __File → Connect Network Registry__ and specify the file server name.

__Step 6 –__ Navigate to __HKEY\_LOCAL\_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security__ and set the __File__ value to _"C:\events\security.evt"_.

__Step 7 –__  Set the __MaxSize__ value to _"4 000 000 000 (decimal)"_.
