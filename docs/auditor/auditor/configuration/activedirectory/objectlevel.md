# Configure Object-Level Auditing

Object-level auditing must be configured for the __Domain__ partition if you want to collect information on user activity in the domain. If you also want to audit changes to AD configuration and schema, you must enable object-level auditing for __Configuration__ and __Schema__ partitions.

Auditing of the Configuration partition is enabled by default. See the [Active Directory](/docs/auditor/auditor/admin/monitoringplans/activedirectory/overview.md) topic for detailed instructions on how to enable monitoring of changes to the Schema partition in the target AD domain.

Perform the following procedures to configure object-level auditing for the Domain, Configuration and Schema partitions:

- [Configuring object-level auditing for the Domain partition](#Configuring-object-level-auditing-for-the-Domain-partition)
- [Enabling object-level auditing for the Configuration and Schema partitions](#Enabling-object-level-auditing-for-the-Configuration-and-Schema-partitions)

## Configuring object-level auditing for the Domain partition

__Step 1 –__ Open the __Active Directory Users and Computers__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools → __Active Directory Users and Computers__.

__Step 2 –__ In the __Active Directory Users and Computers__ dialog, click __View__ in the main menu and ensure that the __Advanced Features__ are enabled.

![manualconfig_aduc_advsecwinserver2016](/img/product_docs/1secure/1secure/configuration/ad/manualconfig_aduc_advsecwinserver2016.png)

__Step 3 –__ Right-click the __`<domain_name>`__ node and select __Properties.__ Select the __Security__ tab and click __Advanced__. In the __Advanced Security Settings for `<domain_name>`__ dialog, select the __Auditing__ tab.

![manualconfig_aduc_advauditing_winserver2016](/img/product_docs/1secure/1secure/configuration/ad/manualconfig_aduc_advauditing_winserver2016.png)

__Step 4 –__ Perform the following actions on the Windows Server 2012 and above:

1. Click __Add__. In the __Auditing Entry__ dialog, click the __Select a principal__ link.
2. In the __Select user, Computer, Service account, or Group__ dialog, type _"Everyone"_ in the __Enter the object name to select__ field.
3. Set __Type__ to _"Success"_ and __Applies to__ to _"This object and all descendant objects"_.
4. Under __Permissions__, select all checkboxes except the following: _Full Control_, _List Contents_, _Read All Properties_ and _Read Permissions_.
5. Scroll to the bottom of the list and make sure that the __Only apply these auditing settings to objects and/or containers within this container__ checkbox is cleared.

   ![manualconfig_objectlevel_winserver2016](/img/product_docs/1secure/1secure/configuration/ad/manualconfig_objectlevel_winserver2016.png)

## Enabling object-level auditing for the Configuration and Schema partitions

To perform this procedure, you will need the [ADSI Edit](http://technet.microsoft.com/en-us/library/cc773354(v=ws.10).aspx) utility. Follow the steps to enable object-level auditing for the Configuration and Schema partitions.

__Step 1 –__ On any domain controller in the target domain, navigate to Start > Windows Administrative Tools __> ADSI Edit__.

__Step 2 –__ Right-click the __ADSI Edit__ node and select __Connect To__. In the __Connection Settings__ dialog, enable __Select a well-known Naming Context__ and select __Configuration__ from the drop-down list.

![manualconfig_adsi_connectionwinserver2016](/img/product_docs/1secure/1secure/configuration/ad/manualconfig_adsi_connectionwinserver2016.png)

__Step 3 –__ Expand the __Configuration `<Your_Root_Domain_Name>`__ node. Right-click the __CN=Configuration, DC=`<name>`,DC=`<name>`…__ node and select __Properties.__

__Step 4 –__ In the __CN=Configuration, DC=`<name>`, DC=`<name>` Properties__ dialog select the __Security__ tab and click __Advanced__. In the __Advanced Security Settings for Configuration__ dialog, open the __Auditing__ tab.

__Step 5 –__ Perform the following actions on the Windows Server 2012 and above:

1. Click __Add__. In the __Auditing Entry__ dialog, click the __Select a principal__ link.
2. In the __Select user, Computer, Service account, or Group__ dialog, type _"Everyone"_ in the __Enter the object name to select__ field.
3. Set __Type__ to _"Success"_ and __Applies to__ to _"This object and all descendant objects"_.
4. Under __Permissions__, select all checkboxes except the following: _Full Control_, _List Contents_, _Read All Properties_ and _Read Permissions_.
5. Scroll to the bottom of the list and make sure that the __Only apply these auditing settings to objects and/or containers within this container__ checkbox is cleared.

   ![manualconfig_objectlevel_winserver2016](/img/product_docs/1secure/1secure/configuration/ad/manualconfig_objectlevel_winserver2016.png)

Repeat these steps for the Schema container if necessary.
