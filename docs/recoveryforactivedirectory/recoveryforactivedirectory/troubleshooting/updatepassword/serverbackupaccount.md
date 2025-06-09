# Update Domain Controller Backup Account Password

While adding backup configurations for a domain controller on the Forest page, an account is provided for performing domain controller backups. You can update the password for this account or even specify a different account.

Follow the steps to update the backup account password for a domain controller.

__Step 1 –__ Click __Forest__ in the left pane to open the Forest page.

![Forest Page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/forest.png)

__Step 2 –__ On the Forest page, select a forest to view the domain controllers in it. To locate a domain controller in a specific domain, expand the forest in the left pane and select a domain. The adjacent pane displays the domain controllers in that domain.

__Step 3 –__ Click the __Edit__ button for a domain controller, which is available in the far right of the domain controller row. The Server Backup Configuration wizard opens.

![Server Backup Configuration Wizard - Server page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/server.png)

__Step 4 –__ On the Server page, the fields are populated with the information you provided when configuring the domain controller backup. See the [Add Backup Configurations for a Domain Controller](/docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/forest.md#Add-Backup-Configurations-for-a-Domain-Controller) topic for additional information.

Enter the new password in the Password field and click __Next__. The next server backup will take into account the new password.

![Server Backup Configuration wizard - Schedule page](/img/product_docs/threatprevention/threatprevention/admin/configuration/databasemaintenance/schedule.png)

__Step 5 –__ Modify the schedule if needed, then click __Next__.

![Server Backup Configuration wizard - Options page](/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/install/application/options.png)

__Step 6 –__ Modify the options if needed, then click __Next__.

![Server Backup Configuration wizard - Confirm page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/confirm.png)

__Step 7 –__ The Confirm page displays a summary of the settings you provided on the pages of the wizard. Use the Back button to return to a previous page and change any setting. Click __Complete__ to finish the wizard.

![Server Backup Configuration has been Saved](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/serverbackupconfiguration.png)

__Step 8 –__ Click __OK__.

The backup account password for the domain controller has been updated and saved.
