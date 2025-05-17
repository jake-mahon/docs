---
sidebar_position: 5897
title: Create a Connection Profile
---

# Create a Connection Profile

Follow the steps to create a Connection Profile.

![Add Connection Profile](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/AddConnectionProfile.png "Add Connection Profile")

**Step 1 –** Click Add Connection profile at the top of the Connection view.

![Connection - Add Connection Profile](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/ConnectionProfileName.png "Connection - Add Connection Profile")

**Step 2 –** A new profile displays in the list with a generic name. Provide a unique, descriptive name in the Connection profile name textbox.

**NOTE:** A good profile name should be chosen so that it does not need to be changed at a later time. If the profile name is changed after being applied to job groups or jobs, it requires the user to go back through all of those job groups or jobs and re-apply the Connection Profile.

![Add User Credential](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/AddUserCredential.png "Add User Credential")

**Step 3 –** Now it is time to add credentials to this profile. Click Add User credential and the User Credentials window opens.

![User Credentials](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/ActiveDirectoryAccount.png "User Credentials")

**Step 4 –** The window options change according to the value for the Selected Account Type field. Select the appropriate account type and then provide the required information. The account types are:

* [Active Directory Account for User Credentials](ActiveDirectory "Active Directory Account for User Credentials")
* [Local Windows Account for User Credentials](LocalWindows "Local Windows Account for User Credentials")
* [Unix Account for User Credentials](Unix "Unix Account for User Credentials")
* [SQL Authentication for User Credentials](SQL "SQL Authentication for User Credentials")
* [Task for User Credentials](Task "Task for User Credentials")
* [Azure Active Directory for User Credentials](EntraID "Azure Active Directory for User Credentials")
* [Dropbox for User Credentials](Dropbox "Dropbox for User Credentials")
* [Web Services (JWT) for User Credentials](WebServices) for User Credentials")
* [Oracle for User Credentials](Oracle "Oracle for User Credentials")
* [Exchange Modern Authentication for User Credentials](ExchangeModernAuth "Exchange Modern Authentication for User Credentials")

See the individual account type sections for information on the fields. Then click OK.

![Error Message for Password](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/PasswordDiffersError.png "Error Message for Password")

**NOTE:** If the entered passwords are not the same, an error message will pop-up after clicking OK on the User Credentials window. Click OK on the error message and re-type the passwords.

![User Credentials](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/UserCredentialsList.png "User Credentials")

**Step 5 –** Repeat Steps 3-4 until the User Credentials list for this profile is complete.

When Access Analyzer authenticates to a target host, it looks at the value of the WindowsDomain field in the Host Inventory for the target host. It then matches the first credential in the Connection Profile which matches that domain. If authentication fails, it moves consecutively through the User Credentials list. It will first match to all credentials listed for target host’s domain, and then proceed through all other credentials until authentication is successful or there are no more credentials to try.

***RECOMMENDED:*** Limit the User Credentials list to a minimal number per profile, especially when considering that a successful authentication does not automatically mean that particular credential has the appropriate level of permissions in order for the data collection to occur.

![Arrange Priority](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/MoveUpDown.png "Arrange Priority")

There are Move Up and Move Down buttons for arranging priority within the User Credentials list.

![Apply local login credentials](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/UseWindowsAccountOption.png "Apply local login credentials")

**Step 6 –** (Optional): At the bottom of the Connection view, is the Use the Windows account that Access Analyzer runs with before trying the user credentials above option. This option is per Connection Profile. If checked, Access Analyzer applies the local login credentials prior to any of the credentials saved to the Connection Profile.

**NOTE:** If a data collector utilizes an applet, this option must be unchecked.

**Step 7 –** When the user credentials have been added and ordered, click Save and then OK to confirm the changes to the Connection Profile.

The new Connection Profile is now visible in the Profile list and available for use at the job group or job level.

## Edit User Credentials within a Connection Profile

Follow the steps to edit user credentials within a Connection Profile.

![Edit Connection Profile](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/EditUserCredentials.png "Edit Connection Profile")

**Step 1 –** Select the Connection Profile to be modified from the Profile list. Remember, changing the Connection Profile name results in breaking job groups or jobs that are assigned this profile.

**Step 2 –** Select the user credential to be edited from the User Credentials list. Click Edit.

![User Credentials](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/SelectAccountType.png "User Credentials")

**Step 3 –** Modify the information in the User Credentials window. For the password, choose between the Use the existing password option or the Specify a new password below option. Click OK.

**Step 4 –** When the Connection Profile’s user credentials have been edited as desired, click Save and then OK to confirm the changes to the Connection Profile.

The edited user credentials are now used for authentication to target hosts for this Connection Profile.

## Delete a User Credential from a Connection Profile

Follow the steps to delete a user credential from a Connection Profile.

![Delete User Credentials](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/DeleteUserCredentials.png "Delete User Credentials")

**Step 1 –** Select the Connection Profile to be modified from the Profile list. Remember, changing the Connection Profile name results in breaking job groups or jobs that are assigned this profile.

**Step 2 –** Select the user credential to be edited from the User Credentials list. Click Delete.

![Confirmation message for deletion](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/DeleteUserCredentialsConfirm.png "Confirmation message for deletion")

**Step 3 –** Click OK to confirm the deletion.

**Step 4 –** The selected credential is no longer visible in the User Credentials list. Click Save and then OK to confirm the changes to the Connection Profile.

The deleted user credentials are no longer available for authentication to target hosts for this Connection Profile.

## Set a Default Connection Profile

The default profile is marked with the green checkmark.

![](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/DefaultConnectionProfile.png)

Follow the steps to set a new default Connection Profile.

![Set a Default Connection Profile](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/SetAsDefaultConnectionProfile.png "Set a Default Connection Profile")

**Step 1 –** Select the desired profile in the Connection Profile list and click Set as default.

**Step 2 –** The green checkmark moves. Click Save and then OK to confirm the changes.

This Connection Profile is now used as the default Connection Profile.

## Delete a Connection Profile

Follow the steps to delete a Connection Profile.

![Delete a Connection Profile](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/DeleteConnectionProfile.png "Delete a Connection Profile")

**Step 1 –** Select the profile from the Connection Profile list and click Delete.

![Confirmation message for deletion](../../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Settings/Connection/DeleteConnectionProfileConfirm.png "Confirmation message for deletion")

**Step 2 –** Click OK to confirm the deletion.

**Step 3 –** The selected profile is no longer visible in the Connection Profiles list. Click Save and then OK to confirm the changes.

The deleted Connection Profile is no longer available for authentication to target hosts.