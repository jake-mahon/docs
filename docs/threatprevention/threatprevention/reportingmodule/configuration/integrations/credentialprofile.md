# Credential Profile Page

The Credential Profile page within the Integrations interface lists all of the credentials used by the application to complete tasks. These credentials are securely stored.

Use the gear icon in the upper right corner of the console to open the Configuration menu. Then select __Integrations__ to open the Integrations interface.

Click __Credential Profile__ in the navigation pane to view a list of the already created Credential Profiles, if any.

![Integrations interface on the Credential Profile page](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.png)

The table displays the user name for each profile. To view profile details or make modifications, select a profile from the table or under Credential Profile in the navigation pane.

See the [Reporting Module Server Requirements](/docs/threatprevention/threatprevention/requirements/reportingserver.md) topic for a list of permission requirements for each type of task.

Best Practice Recommendation

It is a best practice to:

- Create one Credential Profile per domain for Active Directory Sync purposes
- Create a Credential Profile with Writer permissions to the shared folder where subscription exports will be stored

## Add a Credential Profile

Follow the steps to add a Credential Profile.

__Step 1 –__ Use the gear icon in the upper right corner of the console to open the Configuration menu. Then select __Integrations__ to open the Integrations interface.

__Step 2 –__ On the Integrations interface, click Add New Integration in the navigation pane. The Add New Integration window opens.

![Add New Integration window with Credential Profile type selected](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/credentialprofile.png)

__Step 3 –__ In the Type drop-down menu, select Credential Profile.

__Step 4 –__ Enter the following information:

- Name – Provide a unique, descriptive name for the Credential Profile
- Description – Provide a description for the Credential Profile
- Platform – Select the account type for the credential:

  - SQL – For SQL Server accounts
  - Windows – For local and Active Directory accounts
- User Name – Enter the account user name in the required format. For Windows accounts, it is: [DOMAIN]\[USERNAME], e.g. NWXTech\svc-netwrix
- Password – Enter the password for the credential

__Step 5 –__ Click Add. The Add New Integration window closes.

The Credential Profile is listed in the Integrations navigation pane. Repeat the process to add additional Credential Profiles.

## Credential Profile Details

Follow the steps to view the details of a Credential Profile.

__Step 1 –__ Use the gear icon in the upper right corner of the console to open the Configuration menu. Then select __Integrations__ to open the Integrations interface.

__Step 2 –__ On the Integrations interface, click __Credential Profile__ in the navigation pane to view a list of the already created Credential Profiles, if any.

__Step 3 –__ Select a Credential Profile from the table or the navigation pane to view its details.

![Integrations interface displaying the details for a Credenital Profile](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/details.png)

Select the profile from the list to see modification optionsThe following information is displayed for a Credential Profile:

- Name and Description – The box at the top displays the name and description of the profile

  - Edit – The edit button in the upper right corner of the box changes those fields from read-only to editable. See the [Edit Profile](#Edit-Profile) topic for additional information.
  - Delete – The delete button in the upper right corner of the box opens the Delete Profile window to confirm the action
- Credentials – This section displays the credentials

  - Edit Credential – The edit button to the right of the credentials opens the Credentials Settings window, where you canupdate the Platform, User Name, or Password. See the [Edit Credential](#Edit-Credential) topic for additional information.
  - Delete Credential – The delete button to the right of the credentials opens the Delete Credential window to confirm the action
  - Add Credential – This button allows you to add additional credentials to this profile. This functionality is available for a full Netwrix Threat Manager implementation, and does not apply to the Netwrix Threat Manager Reporting Module.

## Edit Profile

Follow the steps to edit a Credential Profile name and/or description.

__Step 1 –__ Use the gear icon in the upper right corner of the console to open the Configuration menu. Then select __Integrations__ to open the Integrations interface.

__Step 2 –__ On the Integrations interface, click __Credential Profile__ in the navigation pane to view a list of the already created Credential Profiles, if any.

__Step 3 –__ Select a Credential Profile from the table or the navigation pane.

__Step 4 –__ Click the __Edit__ button in the upper right corner of the name and description box.

![Name and Description box for a Credential Profile in Edit mode](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/editprofile.png)

__Step 5 –__ To modify the profile name, type in the top field.

__Step 6 –__ To modify the profile description, type in the bottom field.

__Step 7 –__ Click the __Save__ button.

The Credential Profile name and/or description have been modified.

## Edit Credential

Follow the steps to edit a credential within a Credential Profile. This may be necessary if the account password needs to be updated.

__Step 1 –__ On the Integrations interface, click __Credential Profile__ in the navigation pane to view a list of the already created Credential Profiles, if any. Select a Credential Profile.

__Step 2 –__ In the Credentials box, click the edit button to the right of the credential. The Credential Settings window opens.

![Credential Settings window](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/credentialsettingswindow.png)

__Step 3 –__ To edit the platform type, select either SQL or Windows from the __Platform__ drop-down menu.

__Step 4 –__ To edit the account user name, enter the account user name in the required format of [DOMAIN]\[USERNAME], e.g. NWXTech\svc-netwrix.

__Step 5 –__ To update the password, enter the account password in the Password field.

__Step 6 –__ Click __Save__. The Credential Settings window closes.

The credential within the Credential Profile has been modified.
