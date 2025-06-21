# Notes on Upgrade

Consider the following when upgrading to GroupID 11 from GroupID 9 and 10.

NOTE: In the following text, the term ‘source version’ refers to the GroupID version you are
upgrading from.

**Notes**

1. Portals from the source version will not be upgraded to GroupID 11.
2. To upgrade to GroupID 11 on a different box, the GroupID source version file system must be
   available on the GroupID 11 server. To ensure this, follow step 1 in the
   [Prerequisites for Upgrade](/docs/directorymanager/11.0/getting-started/upgrade/index.md#prerequisites-for-upgrade)
   topic.

   The source version file system is required for the following:

   - When you create a new portal in GroupID 11, you can import the advanced settings and design
     settings of a Self-Service portal from the source version. See step 12 in the
     [Create a Portal in Native IIS](/docs/directorymanager/11.0/configuration/services/portal-configuration.md#create-a-portal-in-native-iis)
     topic.
   - In the source version, you specified a list of attributes to replicate for an identity store.
     These attributes are saved to a file on the GroupID file system.  
     To upgrade on a different box, the file containing the selected attributes for each identity
     store must be present on the GroupID 11 server. If the wizard does not find it, GroupID 11
     will display the default attributes for identity store replication (rather than your selected
     attributes).

     File name: `<name of the domain the identity store is created on>_<identity store ID>.xml`  
      Example: techinfo.local_4.xml, techinfo.onmicrosoft.com_6.xml  
      A separate file exists for each identity store.

     File Path on the GroupID 11 server:
     `C:\Program Files\Imanami\GroupID <source version>\Replication\IdentityStoresReplicationAttributes\`

   - To upgrade schedules, Synchronize jobs, and generated reports on a different box, the relevant
     files must be available on the GroupID 11 server.
   - If you have uploaded a CSV file containing a list of disallowed passwords for an identity
     store, that file should also be available on the GroupID 11 server for the Upgrade wizard to
     process it.

     File name: The name of the uploaded file.  
      For example: DisallowedPasswords.txt

     File Path on the GroupID 11 server:
     `C:\Program Files\Imanami\GroupID <source version>\GroupIDDataService\PasswordCenter\PasswordExceptionLists\<identity store name>_<identity store ID>\`

     Example: C:\Program Files\Imanami\GroupID
     10.0\GroupIDDataService\PasswordCenter\PasswordExceptionLists\ADStore_4\

3. When importing design settings of a Self-Service portal on the same box or on a different box,
   remember the following:

   - Design settings for the toolbars and navigation bars will not be imported due to architectural
     changes in GroupID 11.
   - The Group Search and User Search forms will not be upgraded as they are not available in
     GroupiD 11.
   - Portal branding, logo, and any customizations to a Self-Service portal will be lost.

4. When importing advanced settings for a portal on the same box or on a different box, remember the
   following:  
   If, in the source version, you have set the value of the Self-Service portal’s advanced setting
   _Default Startup Page_ to ‘Group Search’ or ‘Organizational Hierarchy’, then it will not be
   upgraded. The ‘Group Search’ page has been removed from GroupID 11 while the ‘Organizational
   Hierarchy’ page is not supported as a startup page.
5. Any notifications pending in the notification queue in the source version will not be upgraded.
6. An identity store created for G Suite will not be upgraded.
7. In case of upgrade on a different box, the DC Priority settings for an Active Directory domain
   are not upgraded to GroupID version 11.0.23315.04.
8. In the source version, the debug logs for upgrade were created in a temporary folder for the
   logged-on user, that could be accessed using the %TEMP% environment variable.  
   File name: ~GroupID10_Upgrade

   In GroupID 11, these debug logs will be created at the following location on the GroupID 11
   server:  
    C:\ProgramData\Imanami\GroupID 11.0\Upgrade Tool\  
    File name: directorymanager11_Upgrade.log

9. In the GroupID source version, Replication service logs were captured under the _debug_ mode,
   with no user interface to change this setting. On upgrade to GroupID 11, the file logging and
   Windows logging mode is set to default, i.e., ‘Error’. After upgrade, it is recommended that you
   go to Replication service settings and change file logging to the ‘Debug’ mode (if required). See
   the
   [Specify Log Settings for a Service](/docs/directorymanager/11.0/configuration/services/index.md#specify-log-settings-for-a-service)
   topic.
10. In the GroupID source version, log settings for an identity store inherently applied to Date
    service logs. On upgrade to GroupID 11, these log settings are moved to the Data service, with
    the file logging mode set to default, i.e., ‘Error’. To change the mode in GroupID 11, go to
    Data service settings and change it as required. See the
    [Specify Log Settings for a Service](/docs/directorymanager/11.0/configuration/services/index.md#specify-log-settings-for-a-service)
    topic.
11. The following applies in case of upgrade from GroupID 10 SR1.  
    When the approver in pending workflow requests is a variable, such as managedBy,
    additionalOwner, etc., then during upgrade, the variable will be resolved to the GUID of the
    object that it represents at that point in time. Hence, the variable is replaced with a static
    value.
12. SAML configurations with the Self-Service portals, Password Center portals, Automate, or any
    other GroupID client will be lost during upgrade, and will not be available in GroupID 11.
13. Reports will no longer be available on a shared location, as was in the source version. In
    GroupID 11, users can download reports in different formats, including PDF, from the GroupID
    portal.
14. When upgraded on a different box, file-based Synchronize jobs available on shared locations will
    move to the data sources created for them on the GroupID 11 file system.
15. During upgrade, scripts for Smart Groups and Synchronize jobs are upgraded to GroupID 11 without
    any change. If a script contains a location in a variable (for example, for exporting files),
    that setting will not work in case of upgrade on a different box. Make sure you change the
    location after upgrade.
16. In the GroupID source version, source and destination providers in Synchronize jobs were saved
    as connection strings in a file. Similarly, when using an external data source for Smart Groups,
    connection was established on the basis of a connection string. On upgrade, a data source will
    be created for each distinct connection string.  
    The Upgrade wizard will process connection strings for Smart Groups first. Then while processing
    Synchronize jobs, it will not create another data source if the same connection strings come up
    again.
17. In case of upgrade on a different box, OBBC connections defined using system DSN will be lost.
    As a result:

    - Smart Groups whose memberships are determined using system DSN (external data source) will be
      affected.
    - Synchronize jobs with the source or destination provider configured using system DSN will not
      work.

18. Insights in GroupID 10 has been renamed to Entitlement in GroupID 11.  
    In GroupID 10, one schedule named ‘Insights’ existed for Insights, which will be upgraded and
    renamed to ‘GroupID Entitlement’. GroupID 11 will also have two new schedules for Entitlement;
    ‘Entitlement Scope’ and ‘Entitlement Temporary Permissions’. These new schedules will be auto
    created for identity stores that have Entitlement settings defined.
19. You cannot run the Configuration Tool and the Upgrade wizard more than once using the same
    database (for upgrade to GroupID version 11.0.23315.04).

See Also

- [Upgrade to GroupID 11](/docs/directorymanager/11.0/getting-started/upgrade/from-version-10.md)

# Upgrade to GroupID 11

The topic guides you to upgrade to GroupID 11 from GroupID 9 and 10.

Follow the steps to upgrade.

1. To launch the Upgrade wizard, click **Next** on the **GroupID Successfully Configured** page of
   the Configuration Tool.

   OR

   Click the Windows Start menu > Imanami > GroupID Upgrade Tool 11.0.

   ![Welcome page](/img/versioned_docs/directorymanager_11.0/directorymanager/install/upgrade/1-welcome.webp)

2. Read the welcome message and click **Next**.

   ![2-select_source_version](/img/versioned_docs/directorymanager_11.0/directorymanager/install/upgrade/2-select_source_version.webp)

3. From the **Select the previous version to upgrade** list, select the GroupID version to upgrade
   from.

   NOTE: The following steps discuss the upgrade process with GroupID 10 as the source version. The
   process may vary for different source versions.

4. Click **Next**.

   ![Select modules to upgrade](/img/versioned_docs/directorymanager_11.0/directorymanager/install/upgrade/3-select_modules.webp)

   On the **Select Modules to upgrade** page, select the type of GroupID data for upgrade. You can
   choose to upgrade all or selective data of the previous version. Options are:

   - **Everything** – upgrades all data, which covers all options discussed under Custom.
   - **Custom** – choose what data you want to upgrade. On selecting it, the following options are
     listed, from where you can choose the data to upgrade.

     ![3-select_modules-custom](/img/versioned_docs/directorymanager_11.0/directorymanager/install/upgrade/3-select_modules-custom.webp)

5. Click **Next**.
6. If you have an Microsoft Entra ID based identity store in GroupID 10, the following page appears.

   ![Microsoft Entra ID Store Upgrade page](/img/versioned_docs/directorymanager_11.0/directorymanager/install/upgrade/entraidstore.webp)

   Provide the following information:

   - Registered Client Secret on EntraID: provide the client secret value generated against the
     certificate uploaded to Microsoft Entra Admin Center while registering the GroupID
     application.
   - **PFX Certificate**: Click Browse to navigate to the folder where the certificate is saved.
     This certificate must be the same uploaded for the registered GroupID app in Microsoft Entra
     ID.
   - **PFX Certificate Password**: Provide password of the PFX certificate.

7. Click **Next**.
8. If in the GroupID source version, Office 365 messaging provider is configured in a Microsoft
   Entra ID based identity store or in an AD identity store, the Upgrade wizard displays the
   following page.

   ![ Upgrade wizard Microsoft Entra ID Messaging System page](/img/versioned_docs/directorymanager_11.0/directorymanager/install/upgrade/entraidmessagingsystem.webp)

   Provide the following information:

   - **Client Secret**: provide the client secret value generated against the certificate uploaded
     to Microsoft Entra Admin Center while registering the GroupID application.
   - **PFX Certificate**: Click Browse to navigate to the folder where the certificate is saved.
     This certificate must be the same uploaded for the registered GroupID app in Microsoft Entra
     ID.
   - **PFX Certificate Password**: Provide password of the PFX certificate.

9. If any Synchronize jobs exist in GroupID 10 or the version you are upgrading from, then the
   wizard checks the destination domain set for them. Let's assume you have 5 jobs that connect to
   different child domains in a forest with different service accounts and different messaging
   providers.

   - If an identity store already exists in GroupID 10 for the destination domains that the jobs
     connect to, then jobs are moved to the respective identity stores in GroupID 11.
   - When there is no identity store in GroupID 10 for the destination domain that the jobs connect
     to, the Upgrade wizard reads the FQDN of the destination domains used in the jobs and tries to
     create a forest structure. On identifying one, it proceeds to create an identity store for the
     forest, requiring you to provide a service account. (The user name and password fields will be
     auto populated but you can change them.) All jobs with destination provider for that forest
     domain or any of its child domains will be moved to the new identity store.

     ![synchronize_upgrade](/img/versioned_docs/directorymanager_11.0/directorymanager/install/upgrade/synchronize_upgrade.webp)

     NOTE: The service account you provide here should have at least _read_ permission in the
     entire forest, so that all objects from the forest can be replicated to Elasticsearch.

     The wizard does not create a separate identity store for each child domain in the same
     forest. In case it cannot determine a forest structure, it creates separate identity stores
     for each domain.

10. For Synchronize jobs that use Office 365 as messaging provider in GroupID 10, the wizard would
    require you to provide the PFX certificate. All Synchronize jobs that use Office 365 as
    messaging provider will be listed on the wizard page. Expand each job and provide the PFX
    certificate along with its password.

    ![Upgrade wizard Synchronize Messaging System page](/img/versioned_docs/directorymanager_11.0/directorymanager/install/upgrade/entraidsynmessagingsystem.webp)

    Provide the following information:

    - **Certificate**: Click Browse to navigate to the folder where the certificate is saved. This
      certificate must be the same uploaded for the registered GroupID app in Microsoft Entra ID.
    - **Password**: Provide password of the PFX certificate.
    - **Client Secret**: provide the client secret value generated against the certificate uploaded
      to Microsoft Entra Admin Center while registering the GroupID application.

11. Click **Next**.
12. In GroupID 10 and earlier versions, reports were generated for the domain that the GroupID
    server was joined to. During upgrade, the wizard checks if an identity store for that domain
    exists or not.

    - If an identity store for that domain exists or if it being created for a Synchronize job in
      this upgrade process, GroupID will bind the reports to it.
    - If an identity store for that domain does not exist, then you have to create an identity store
      for it. It must essentially be an Active Directory identity store. The wizard will bind the
      reports generated in GroupID 10 to the identity store, so you will be able to view them in
      GroupID 11.  
      ![reports_upgrade](/img/versioned_docs/directorymanager_11.0/directorymanager/install/upgrade/reports_upgrade.webp)

    NOTE: If no report has been generated in GroupID 10, the page related to reports upgrade will
    not be displayed.

13. During upgrade, Synchronize schedules are also moved to identity stores.  
    The Upgrade wizard will check the jobs added to a schedule. If the destination in a job is a
    directory provider, it will automatically move the schedule to the respective identity store.

    Remember, during upgrade, identity stores are created for destination directory providers of
    Synchronize jobs (i.e., for providers that do not have an identity store in the source version).

    Consider the following:

    - If a schedule has Synchronize jobs where one job uses an Active Directory domain (DomainA) as
      destination and another job uses a file-based provider as destination, then the schedule will
      auto move to the identity store created for DomainA.
    - For schedules with Synchronize jobs that use file-based providers as destination, the Upgrade
      wizard will display the following page that will list all such schedules. Select an identity
      store for each schedule, so that the schedule moves to that identity store.

      ![store_selection_for_schedules](/img/versioned_docs/directorymanager_11.0/directorymanager/install/upgrade/store_selection_for_schedules.webp)

    - The rules stated above also apply to schedules with job collections added to them.

14. Click **Next**.

    ![Summary page](/img/versioned_docs/directorymanager_11.0/directorymanager/install/upgrade/5-summary.webp)

    This page displays a complete summary of the data to be copied/upgraded for your selected
    options. These options were selected on the **Select modules to upgrade** page..

    NOTE: If there are any disabled identity store(s) in the source GroupID version, GroupID will
    not upgrade those identity store(s). However, data of those identity store(s) will remain intact
    in the source GroupID version.

15. Review the summary and click **Next**.

    ![Upgrade Progress page](/img/versioned_docs/directorymanager_11.0/directorymanager/install/upgrade/6-upgrade_process_complete.webp)

    GroupID is upgraded while the Upgrade Process displays the upgrade progress. On successful
    upgrade, the **Upgradce Completed** message above the progress bar is displayed.

16. Click **Next**.  
    ![Upgrade Completed page](/img/versioned_docs/directorymanager_11.0/directorymanager/install/upgrade/7-upgrade_complete.webp)

    The **Upgrade Completed** page displays the status of features selected for upgrade.

17. You can click:

    - **View Details**: to view log file generated during the Upgrade process.
    - **Launch GroupID**: to start using GroupID 11.
    - **Close**: to close the Upgrade wizard.

See Also

- [Installation Tool](/docs/directorymanager/11.0/getting-started/installation/install-groupid.md)
- [Configuration Tool](/docs/directorymanager/11.0/getting-started/installation/post-installation.md)
- [Uninstall GroupID](/docs/directorymanager/11.0/getting-started/uninstall.md)
- [Notes on Upgrade](/docs/directorymanager/11.0/getting-started/upgrade/from-version-10.md)
