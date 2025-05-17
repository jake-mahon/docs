---
sidebar_position: 1878
title: Configure Security Event Log Maximum Size
---

Filter: 

* All Files

Submit Search

# Configure Security Event Log Maximum Size

Follow the steps to configure Event Log maximum size:

**Step 1 –** On your file server, create a new file system where the security log will be stored.

**Step 2 –** Mount this file system on a mount point, e.g., **/events**.

**Step 3 –** Make sure that it is accessible via the **\\\C$\events** UNC path.

**Step 4 –** On the computer where Auditor Server is installed, open **Registry Editor**: navigate to **Start → Run** and type *"regedit"*.

**Step 5 –** Navigate to **File → Connect Network Registry** and specify the file server name.

**Step 6 –** Navigate to **HKEY\_LOCAL\_MACHINE\SYSTEM\CurrentControlSet\Services\EventLog\Security** and set the **File** value to *"C:\events\security.evt"*.

**Step 7 –**  Set the **MaxSize** value to *"4 000 000 000 (decimal)"*.