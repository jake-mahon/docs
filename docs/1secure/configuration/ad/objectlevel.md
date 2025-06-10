# Configure Object-Level Auditing

Object-level auditing must be configured for the __Domain__ partition if you want to collect information on user activity in the domain. You must also enable object-level auditing for __Configuration__.

Auditing of the Configuration partition is enabled.

Follow the steps to configure object-level auditing for the Domain partition.

__Step 1 –__ Open the __Active Directory Users and Computers__ console on any domain controller in the target domain: navigate to __Start__ > __Windows Administrative__ Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) > __Active Directory Users and Computers__.

__Step 2 –__ In the __Active Directory Users and Computers__ dialog, click __View__ in the main menu and ensure that the __Advanced Features__ are enabled.

![manualconfig_aduc_advsecwinserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_aduc_advsecwinserver2016.webp)

__Step 3 –__ Right-click the __`<domain_name>`__ node and select __Properties.__ Select the __Security__ tab and click __Advanced__. In the __Advanced Security Settings for `<domain_name>`__ dialog, select the __Auditing__ tab.

![manualconfig_aduc_advauditing_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_aduc_advauditing_winserver2016.webp)

__Step 4 –__ Do one of the following depending on the OS:

- On pre-Windows Server 2012 versions:

  1. Click __Add__. In the __Select user, Computer, Service account, or Group__ dialog, type _"Everyone"_ in the __Enter the object name to select__ field.
  2. In the __Audit Entry__ dialog that opens, set the _"Successful"_ flag for all access entries except the following: _Full Control_, _List Contents_, _Read All Properties_ and _Read Permissions_.

     ![manualconfig_objectlevel_entry2008](/img/product_docs/1secure/configuration/ad/manualconfig_objectlevel_entry2008.webp)
  3. Make sure that the __Apply these auditing entries to objects and/or containers within this container only__ checkbox is cleared. Also, make sure that the __Apply onto__ parameter is set to _"This object and all descendant objects"_.
  4. Click __Ok__.
- On Windows Server 2012 and above

  1. Click __Add__. In the __Auditing Entry__ dialog, click the __Select a principal__ link.
  2. In the __Select user, Computer, Service account, or Group__ dialog, type _"Everyone"_ in the __Enter the object name to select__ field.
  3. Set __Type__ to _"Success"_ and __Applies to__ to _"This object and all descendant objects"_.
  4. Under __Permissions__, select all checkboxes except the following: _Full Control_, _List Contents_, _Read All Properties_ and _Read Permissions_.
  5. Scroll to the bottom of the list and make sure that the __Only apply these auditing settings to objects and/or containers within this container__ checkbox is cleared.

     ![manualconfig_objectlevel_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_objectlevel_winserver2016.webp)
  6. Click __Ok__.

Follow the steps to enable object-level auditing for the Configuration partition.

To perform this procedure, you will need the [ADSI Edit](http://technet.microsoft.com/en-us/library/cc773354(v=ws.10).aspx) utility. In Windows Server 2008 and above, this component is installed together with the AD DS role, or it can be downloaded and installed along with Remote Server Administration Tools. See the [Install ADSI Edit](/docs/1secure/configuration/ad/adsi.md) topic for additional information on how to install the ADSI Edit utility.

__Step 1 –__ On any domain controller in the target domain, navigate to Start>Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools __(Windows 2012)__ __> ADSI Edit__.

__Step 2 –__ Right-click the __ADSI Edit__ node and select __Connect To__. In the __Connection Settings__ dialog, enable __Select a well-known Naming Context__ and select __Configuration__ from the drop-down list.

![manualconfig_adsi_connectionwinserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_adsi_connectionwinserver2016.webp)

__Step 3 –__ Expand the __Configuration `<Your_Root_Domain_Name>`__ node. Right-click the __CN=Configuration, DC=`<name>`,DC=`<name>`…__ node and select __Properties.__

__Step 4 –__ In the __CN=Configuration, DC=`<name>`, DC=`<name>` Properties__ dialog select the __Security__ tab and click __Advanced__. In the __Advanced Security Settings for Configuration__ dialog, open the __Auditing__ tab.

__Step 5 –__  Do one of the following depending on the OS:

- On pre-Windows Server 2012 versions:

  1. Click __Add__. In the __Select user, Computer, Service account, or Group__ dialog, type _"Everyone"_ in the __Enter the object name to select__ field.
  2. In the __Audit Entry__ dialog that opens, set the _"Successful"_ flag for all access entries except the following: _Full Control_, _List Contents_, _Read All Properties_ and _Read Permissions_.

     ![manualconfig_objectlevel_entry2008](/img/product_docs/1secure/configuration/ad/manualconfig_objectlevel_entry2008.webp)
  3. Make sure that the __Apply these auditing entries to objects and/or containers within this container only__ checkbox is cleared. Also, make sure that the __Apply onto__ parameter is set to _"This object and all descendant objects"_.
  4. Click __Ok__.
- On Windows Server 2012 and above

  1. Click __Add__. In the __Auditing Entry__ dialog, click the __Select a principal__ link.
  2. In the __Select user, Computer, Service account, or Group__ dialog, type _"Everyone"_ in the __Enter the object name to select__ field.
  3. Set __Type__ to _"Success"_ and __Applies to__ to _"This object and all descendant objects"_.
  4. Under __Permissions__, select all checkboxes except the following: _Full Control_, _List Contents_, _Read All Properties_ and _Read Permissions_.
  5. Scroll to the bottom of the list and make sure that the __Only apply these auditing settings to objects and/or containers within this container__ checkbox is cleared.

     ![manualconfig_objectlevel_winserver2016](/img/product_docs/1secure/configuration/ad/manualconfig_objectlevel_winserver2016.webp)
  6. Click __Ok__.
