---
id: objectlevel
title: 'Configure Object-Level Auditing'
---

# Configure Object-Level Auditing

Object-level auditing must be configured for the **Domain** partition if you want to collect information on user activity in the domain. You must also enable object-level auditing for **Configuration**.

Auditing of the Configuration partition is enabled.

Follow the steps to configure object-level auditing for the Domain partition.

**Step 1 –** Open the **Active Directory Users and Computers** console on any domain controller in the target domain: navigate to **Start** \> **Windows Administrative** Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) \> **Active Directory Users and Computers**.

**Step 2 –** In the **Active Directory Users and Computers** dialog, click **View** in the main menu and ensure that the **Advanced Features** are enabled.

![](/img/1secure/configuration/ManualConfig_ADUC_AdvSecWinServer2016.png)

![](/img/1secure/configuration/ManualConfig_ADUC_AdvAuditing_WinServer2016.png)

**Step 4 –** Do one of the following depending on the OS:

- On pre-Windows Server 2012 versions:

  2. In the **Audit Entry** dialog that opens, set the *"Successful"* flag for all access entries except the following: *Full Control*, *List Contents*, *Read All Properties* and *Read Permissions*.

     ![](/img/1secure/configuration/ManualConfig_ObjectLevel_Entry2008.png)
  3. Make sure that the **Apply these auditing entries to objects and/or containers within this container only** checkbox is cleared. Also, make sure that the **Apply onto** parameter is set to *"This object and all descendant objects"*.
  4. Click **Ok**.
- On Windows Server 2012 and above

  1. Click **Add**. In the **Auditing Entry** dialog, click the **Select a principal** link.
  3. Set **Type** to *"Success"* and **Applies to** to *"This object and all descendant objects"*.
  4. Under **Permissions**, select all checkboxes except the following: *Full Control*, *List Contents*, *Read All Properties* and *Read Permissions*.

     ![](/img/1secure/configuration/ManualConfig_ObjectLevel_WinServer2016.png)
  6. Click **Ok**.

Follow the steps to enable object-level auditing for the Configuration partition.

To perform this procedure, you will need the [ADSI Edit](http://technet.microsoft.com/en-us/library/cc773354(v=ws.10).aspx "ADSI Edit") utility. In Windows Server 2008 and above, this component is installed together with the AD DS role, or it can be downloaded and installed along with Remote Server Administration Tools. See the [Install ADSI Edit](ADSI.md "Install ADSI Edit") topic for additional information on how to install the ADSI Edit utility.

**Step 1 –** On any domain controller in the target domain, navigate to Start>Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools **(Windows 2012)** **> ADSI Edit**.

![](/img/1secure/configuration/ManualConfig_ADSI_ConnectionWinServer2016.png)

**Step 3 –** Expand the **Configuration ** node. Right-click the **CN=Configuration, DC=,DC=…** node and select **Properties.**

**Step 5 –**  Do one of the following depending on the OS:

- On pre-Windows Server 2012 versions:

  2. In the **Audit Entry** dialog that opens, set the *"Successful"* flag for all access entries except the following: *Full Control*, *List Contents*, *Read All Properties* and *Read Permissions*.

     ![](/img/1secure/configuration/ManualConfig_ObjectLevel_Entry2008.png)
  3. Make sure that the **Apply these auditing entries to objects and/or containers within this container only** checkbox is cleared. Also, make sure that the **Apply onto** parameter is set to *"This object and all descendant objects"*.
  4. Click **Ok**.
- On Windows Server 2012 and above

  1. Click **Add**. In the **Auditing Entry** dialog, click the **Select a principal** link.
  3. Set **Type** to *"Success"* and **Applies to** to *"This object and all descendant objects"*.
  4. Under **Permissions**, select all checkboxes except the following: *Full Control*, *List Contents*, *Read All Properties* and *Read Permissions*.

     ![](/img/1secure/configuration/ManualConfig_ObjectLevel_WinServer2016.png)
  6. Click **Ok**.