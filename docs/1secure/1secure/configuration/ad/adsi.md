# Install ADSI Edit

The ADSI Edit utility is used to view and manage objects and attributes in an Active Directory forest. ADSI Edit is required to manually configure audit settings in the target domain. It must be installed on any domain controller in the domain you want to start auditing.

To install ADSI Edit on Windows Server 2008 and Windows Server 2008 R2

1. Navigate to __Start__ > __Control Panel__ > __Programs__ > __Programs and Features__ > __Turn Windows features on or off__.
2. In the __Server Manager__ dialog, select __Features__ in the left pane, and then click __Add Features__.
3. Navigate to __Remote Server Administration Tools__ > __Role Administration Tools__ and select __AD DS and AD LDS Tools__ .
4. Click __Next__ to proceed to the confirmation page.
5. Click __Install__ to enable it.

To install ADSI Edit on Windows Server 2012 and above

1. Navigate to __Start__ >  __Control Panel > Programs__ >  __Programs and Features__ >  __Turn Windows features on or off__.
2. In the __Add Roles and Features Wizard__ dialog that opens, proceed to the __Features__ in the left pane.
3. Navigate to __Remote Server Administration Tools → Role Administration Tools__ and select __AD DS and AD LDS Tools__.
4. Click __Next__ to proceed to the confirmation page.
5. Click __Install__ to enable it.
