# Configure Object-Level Auditing

Object-level auditing must be configured for the __Domain__ partition if you want to collect information on user activity in the domain. If you also want to audit changes to AD configuration and schema, you must enable object-level auditing for __Configuration__ and __Schema__ partitions.

Auditing of the Configuration partition is enabled by default. See the [Active Directory](/versioned_docs/auditor_10.6/auditor/admin/monitoringplans/activedirectory/overview.md) topic for detailed instructions on how to enable monitoring of changes to the Schema partition in the target AD domain.

Perform the following procedures to configure object-level auditing for the Domain, Configuration and Schema partitions:

- [Configuring object-level auditing for the Domain partition](#Configuring-object-level-auditing-for-the-Domain-partition)
- [Enabling object-level auditing for the Configuration and Schema partitions](#Enabling-object-level-auditing-for-the-Configuration-and-Schema-partitions)

## Configuring object-level auditing for the Domain partition

1. Open the __Active Directory Users and Computers__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools → __Active Directory Users and Computers__.
2. In the __Active Directory Users and Computers__ dialog, click __View__ in the main menu and ensure that the __Advanced Features__ are enabled.

   ![manualconfig_aduc_advsecwinserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_aduc_advsecwinserver2016.png)
3. Right-click the __`<domain_name>`__ node and select __Properties.__ Select the __Security__ tab and click __Advanced__. In the __Advanced Security Settings for `<domain_name>`__ dialog, select the __Auditing__ tab.

   ![manualconfig_aduc_advauditing_winserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_aduc_advauditing_winserver2016.png)
4. Do one of the following depending on the OS:

   - On pre-Windows Server 2012 versions:

     1. Click __Add__. In the __Select user, Computer, Service account, or Group__ dialog, type _"Everyone"_ in the __Enter the object name to select__ field.
     2. In the __Audit Entry__ dialog that opens, set the _"Successful"_ flag for all access entries except the following: _Full Control_, _List Contents_, _Read All Properties_ and _Read Permissions_.

        ![manualconfig_objectlevel_entry2008](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_objectlevel_entry2008.png)
     3. Make sure that the __Apply these auditing entries to objects and/or containers within this container only__ checkbox is cleared. Also, make sure that the __Apply onto__ parameter is set to _"This object and all descendant objects"_.
   - On Windows Server 2012 and above

     1. Click __Add__. In the __Auditing Entry__ dialog, click the __Select a principal__ link.
     2. In the __Select user, Computer, Service account, or Group__ dialog, type _"Everyone"_ in the __Enter the object name to select__ field.
     3. Set __Type__ to _"Success"_ and __Applies to__ to _"This object and all descendant objects"_.
     4. Under __Permissions__, select all checkboxes except the following: _Full Control_, _List Contents_, _Read All Properties_ and _Read Permissions_.
     5. Scroll to the bottom of the list and make sure that the __Only apply these auditing settings to objects and/or containers within this container__ checkbox is cleared.

        ![manualconfig_objectlevel_winserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_objectlevel_winserver2016.png)

## Enabling object-level auditing for the Configuration and Schema partitions

To perform this procedure, you will need the [ADSI Edit](http://technet.microsoft.com/en-us/library/cc773354(v=ws.10).aspx) utility. In Windows Server 2008 and above, this component is installed together with the AD DS role, or it can be downloaded and installed along with Remote Server Administration Tools. See the topic for additional information on how to install the ADSI Edit utility.

1. On any domain controller in the target domain, navigate to Start > Windows Administrative Tools __→ ADSI Edit__.
2. Right-click the __ADSI Edit__ node and select __Connect To__. In the __Connection Settings__ dialog, enable __Select a well-known Naming Context__ and select __Configuration__ from the drop-down list.

   ![manualconfig_adsi_connectionwinserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_adsi_connectionwinserver2016.png)
3. Expand the __Configuration `<Your_Root_Domain_Name>`__ node. Right-click the __CN=Configuration, DC=`<name>`,DC=`<name>`…__ node and select __Properties.__
4. In the __CN=Configuration, DC=`<name>`, DC=`<name>` Properties__ dialog select the __Security__ tab and click __Advanced__. In the __Advanced Security Settings for Configuration__ dialog, open the __Auditing__ tab.
5. Do one of the following depending on the OS:

   - On pre-Windows Server 2012 versions:

     1. Click __Add__. In the __Select user, Computer, Service account, or Group__ dialog, type _"Everyone"_ in the __Enter the object name to select__ field.
     2. In the __Audit Entry__ dialog that opens, set the _"Successful"_ flag for all access entries except the following: _Full Control_, _List Contents_, _Read All Properties_ and _Read Permissions_.

        ![manualconfig_objectlevel_entry2008](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_objectlevel_entry2008.png)
     3. Make sure that the __Apply these auditing entries to objects and/or containers within this container only__ checkbox is cleared. Also, make sure that the __Apply onto__ parameter is set to _"This object and all descendant objects"_.
   - On Windows Server 2012 and above

     1. Click __Add__. In the __Auditing Entry__ dialog, click the __Select a principal__ link.
     2. In the __Select user, Computer, Service account, or Group__ dialog, type _"Everyone"_ in the __Enter the object name to select__ field.
     3. Set __Type__ to _"Success"_ and __Applies to__ to _"This object and all descendant objects"_.
     4. Under __Permissions__, select all checkboxes except the following: _Full Control_, _List Contents_, _Read All Properties_ and _Read Permissions_.
     5. Scroll to the bottom of the list and make sure that the __Only apply these auditing settings to objects and/or containers within this container__ checkbox is cleared.

        ![manualconfig_objectlevel_winserver2016](/img/versioned_docs/auditor_10.6/auditor/configuration/activedirectory/manualconfig_objectlevel_winserver2016.png)
6. Repeat these steps for the Schema container if necessary.
