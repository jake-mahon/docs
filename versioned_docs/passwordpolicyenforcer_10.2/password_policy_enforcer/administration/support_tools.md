# Support Tools

Use the Support Tools page to create a Configuration Report that you can send to Netwrix Support, or to directly edit Password Policy Enforcer's configuration settings.

## Configuration Report

Create a Configuration Report and e-mail it to Netwrix Support if Password Policy Enforcer is not working as expected. The Configuration Report will help us to diagnose the problem.

Follow the steps below to create a Configuration Report.

__Step 1 –__ Click the __Password Policy Server__ item to display the Password Policy Server view.

__Step 2 –__ Click __Support Tools__ in the right pane of the management console.

![Support Tools Window - Configuration Report tab](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/supporttoolswindow.png)

__Step 3 –__ Click __Save Configuration Report...__

__Step 4 –__ Enter a file name, then click __Save__.

### Create Configuration Report as Text or HTML for Auditors

As of the release of Password Policy Enforcer 10.2, there is currently no way to export reports. However, you can export Password Policy Enforcer's domain configuration with the following command:

ldifde -f PPE10.1.txt -d "CN=Password Policy Enforcer 10.0,CN=System,DC=netwrix,DC=net" -l url,wWWHomePage

You will need to change the new domain name to match your domain. Your user, group, and OU assignments will not be valid in the new domain, so they will need to be updated after the import in the new domain. This is easily done after the import from the PPE Management Console in the Policy Properties page for each policy. See the [Assigning Policies](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/assigning_policies.md) topic for additional information. Your license will also most likely need to be imported into the new domain. This is done from the About tab on the PPS Properties page.

Follow the steps below to edit the edit the PPE10.1.txt file .

__Step 1 –__ Open the __PPE10.1.txt__ file in a text editor.

__Step 2 –__ Replace __changetype: add__ with __changetype: modify__

__Step 3 –__ Add the line __replace: wWWHomePage__ above the line starting with __wWWHomePage:__

__Step 4 –__ Add a line with just a "__-__" (hyphen) character below the line starting with __wWWHomePage:__

__Step 5 –__ Add the line __replace: url__ above the line starting with __url::__

__Step 6 –__ Add a "__-__" hyphen near the end of the file, below the last line in the URL attribute

__Step 7 –__ Open ADSIEdit or AD Users and Computers in the target domain and clear the __URL__ and __www wWWHomePage__ attributes for the Password Policy Enforcer configuration object (CN=Password Policy Enforcer 10.0,CN=System).

__Step 8 –__ Import configuration with the following command:

ldifde -i -f PPE10.1.txt

Check __URL__ and __wWWHomePage__ attributes in ADSIEdit or AD Users and Computers before opening PPE Management Console to ensure that configuration has been maintained.

## Property Editor Tab

The Property Editor allows you to directly edit the Password Policy Enforcer configuration. You should only use the Property Editor if instructed to by Netwrix Support.

__CAUTION:__ Only configure the settings on the Property Editor tab if instructed to do so by [Netwrix Support](https://www.netwrix.com/support.html).

Follow the steps below to open and configure the Property Editor.

__Step 1 –__ Click the __Password Policy Server__ item to display the Password Policy Server view.

__Step 2 –__ Click __Support Tools__ in the right pane of the management console.

![Support Tools Window - Property Editor tab](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/supporttoolswindowpropertyeditor.png)

__Step 3 –__ Click the __Property Editor__ tab.

__Step 4 –__ Select the desired policy from the drop-down list.

__Step 5 –__ Select property from the drop-down list.

__Step 6 –__ Enter a value directly related to the Property ID.

__Step 7 –__ Provide a valid Property ID to make changes in the configuration.

__Step 8 –__ Click __Set value__.

__Step 9 –__ Click __Close__ to save the updates.
