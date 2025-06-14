# Users and Roles Page

The Users and Roles page displays the accounts with access to Recovery for Active Directory.

Click __Configuration__ in the left pane. Then click the __Users and Roles tab__ on the Configuration page to open the Users and Roles page.

![Users and Roles page](/img/product_docs/accessanalyzer/enterpriseauditor/requirements/target/config/roles.webp)

The table displays the following information:

- Account – Login username displayed in the [DOMAIN\USERNAME] format for Active Directory accounts
- Type – The type of account, an individual or group account
- Role – The role assigned to the account.

  - Administrator – This role allows full control of Recovery for Active Directory, including adding domains, configuring notifications, and adding and removing users. It has access to the Configuration node in the left navigation pane of the application.
  - Operator – This role allows access to the Active Directory and Forest nodes, and can perform rollback and recovery tasks for domains and forests through the Recovery Console.
- Action – Actions that can be performed on user accounts

  - Remove – Click __Remove__ to remove the respective user or group from console access. See the Remove a User or Group  topic for additional information.

### Add a User or Group

Follow the steps to add a user or group that can log into the Recovery Console. If a group is added. all its members can log in.

__Step 1 –__ Click the __Add Account Role__ button on the Users and Roles page. The Add Account Role wizard opens.

![Add Account Role wizard – Account page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/configuration/account.webp)

__Step 2 –__ Enter a user's first or last name, display name, sAMAccountName, or group name in the __Search__ field. As you type, the system will find matches in Active Directory and display the results.

__Step 3 –__ Select the desired user and click __Next__.

![Add Account Role wizard – Role page](/img/product_docs/groupid/groupid/configureentraid/register/role.webp)

__Step 4 –__ Select the Administrator or Operator role for the account from the __Role__ drop-down menu.

- Administrator – This role allows full control of Recovery for Active Directory, including adding domains, configuring notifications, and adding and removing users. It has access to the Configuration node in the left navigation pane of the application.
- Operator – This role allows access to the Active Directory and Forest nodes, and can perform rollback and recovery tasks for domains and forests through the Recovery Console.

__Step 5 –__ Click __Next__.

![Add Account Role wizard – Confirm page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/forest/confirm.webp)

__Step 6 –__ The Confirm page displays a summary of the settings you provided on the pages of the wizard. Use the Back button to return to a previous page and change any setting. Click __Complete__ to finish the wizard.

The selected user or group is now added to the table with the specified role.

## Change the Role Assigned to an Account

Follow the steps to change the role assigned to an account.

__NOTE:__ This action is only available for manually added accounts and not for the default account.

__Step 1 –__ On the Users and Roles page, click the row for an account to make it editable.

__Step 2 –__  Then use the drop-down menu in the Role column to select a different role for the account.

### Remove a User or Group

Follow the steps below to remove a user's or group's access to the Recovery Console.

__NOTE:__ This action is only available for manually added accounts and not for the default account.

__Step 1 –__ On the Users and Roles page, locate the user or group for whom to remove access.

__Step 2 –__ Click the __Remove__ button to remove that user or group from the table.

![Delete Role Confirmation](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/configuration/deleterole.webp)

__Step 3 –__ Click __OK__ to confirm the action.

The user's or group's access to Recovery for Active Directory is removed.
