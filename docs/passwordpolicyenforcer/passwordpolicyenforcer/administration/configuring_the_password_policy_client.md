# Configuring the Password Policy Client

The Password Policy Client is self-configuring and does not require manual configuration in most cases. See the [Install Password Policy Enforcer Client](/docs/passwordpolicyenforcer/passwordpolicyenforcer/install/installationclient.md) topic for additional details. You may need to manually configure the Password Policy Client if:

- You want to install it in a disabled state to be enabled later.
- You want to change the display settings for small screens.
- Password Policy Client displays policy messages in the wrong language.
- Default communication settings are not suitable (for example, if you change the default Password Policy Server Port).

Password Policy Enforcer includes an administrative template to help configure the Password Policy Client. You can use Active Directory GPOs to configure many computers, or the Local Group Policy Editor to configure one computer. The Password Policy Client configuration is stored in the HKLM\SOFTWARE\Policies\ANIXIS\Password Policy Client\ registry key.

Install the Password Policy Client Administrative Template

__Step 1 –__ Connect to any Domain Controller where you have Password Policy Enforcer installed and have the group policy management console available.

__Step 2 –__ Go to Password Policy Enforcer install directory (C:\Program Files or C:\Program Files (x86)\Password Policy Enforcer) and copy the __PPEClt.adml__ and __PPEClt.admx__ files (highlighted in yellow):

![ppc_configuration](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/ppc_configuration.png)

__Step 3 –__ Go to C:\Windows\Policy Definitions and paste the .admx file in the root of this folder.

![ppc_configuration2](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/ppc_configuration2.png)

__Step 4 –__ Go to C:\Windows\Policy Definitions\en-US and paste the .adml file in the root of this folder.

![ppc_configuration1](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/ppc_configuration1.png)

__Step 5 –__ Open __Group Policy Management__ console and check if you have a GPO created for Client. If not, see the topic's section for additional information.

__Step 6 –__ In the left pane, navigate to __Forest: `<forest_name>`__ > __Domain__ > __`<domain_name>`__, right-click __`<OU_name>`__ and select __Create a GPO__ in this domain and Link it here.

Once the GPO is configured, this view is available:

![ppc_configuration3](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/ppc_configuration3.png)

__Step 7 –__ Right-click the newly created GPO and select __Edit__ from the pop-up menu.

__Step 8 –__ Expand __Computer Configuration__ > __Policies__ > __Administrative Templates__ > __Netwrix Password Policy Enforcer__

![ppc_configuration4](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/ppc_configuration4.png)

__Step 9 –__ Click on __Netwrix Password Policy Client__ to open a list of modification settings.

![ppc_configuration5](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/ppc_configuration5.png)

__Step 10 –__ Select the one you need, then modify and save it.

## Changing the Default Display Settings

The Windows 10 and 11 Change Password screen has less space for the Password Policy message than earlier Windows versions. Users may need to scroll to see the message if their screen is small, or if their computer is set to use large fonts.

The Password Policy Client for Windows 10 and 11 maximizes the available screen space by hiding non-essential user interface elements on small screens. It can also display the Password Policy message in a message box to draw attention to the password policy.

![the_password_policy_client_3](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/the_password_policy_client_3.jpg)

You can change the default display settings to control which user interface elements are hidden, and the point at which they are hidden. The display of the Password Policy message box is also configurable.

Follow the steps below to change the default display settings for the Password Policy Client on Windows 10 and 11.

__Step 1 –__ Use the __Group Policy Management Console__ (gpmc.msc) to display the GPOs linked at the domain level.

__NOTE:__ If you are not using Active Directory, then open the Local Group Policy Editor (__gpedit.msc__) and skip step 2.

__Step 2 –__ Right-click the __Password Policy Client GPO__, then click the __Edit...__ button.

__Step 3 –__ Expand the __Computer Configuration__, __Policies__ (if visible), __Administrative Templates__, __Classic Administrative Templates__ (__ADM__), __Password Policy Enforcer__, and __Password Policy Client__ items.

__Step 4 –__ Double-click the __Display settings (Windows 10)__ setting in the right pane of the Group Policy Management Editor.

__NOTE:__ Information about each option is shown in the Help box.
