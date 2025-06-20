# Configuring the Password Policy Client

The Password Policy Client is self-configuring and does not require manual configuration in most
cases. See the [Install Password Policy Enforcer Client](/docs/passwordpolicyenforcer/11.0/installation/client-installation.md) topic for
additional details. You may need to manually configure the Password Policy Client if:

- You want to install it in a disabled state to be enabled later.
- You want to change the display settings for small screens.
- Password Policy Client displays policy messages in the wrong language.
- Default communication settings are not suitable (for example, if you change the default Password
  Policy Server Port).

Password Policy Enforcer includes an administrative template to help configure the Password Policy
Client. You can use Active Directory GPOs to configure many computers, or the Local Group Policy
Editor to configure one computer. The Password Policy Client configuration is stored in the
HKLM\SOFTWARE\Policies\ANIXIS\Password Policy Client\ registry key.

Install the Password Policy Client Administrative Template

**Step 1 –** Connect to any Domain Controller where you have Password Policy Enforcer installed and
have the group policy management console available.

**Step 2 –** Go to Password Policy Enforcer install directory (C:\Program Files or C:\Program Files
(x86)\Password Policy Enforcer) and copy the **PPEClt.adml** and **PPEClt.admx** files (highlighted
in yellow):

![ppc_configuration](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/ppc_configuration.webp)

**Step 3 –** Go to C:\Windows\Policy Definitions and paste the .admx file in the root of this
folder.

![ppc_configuration2](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/ppc_configuration2.webp)

**Step 4 –** Go to C:\Windows\Policy Definitions\en-US and paste the .adml file in the root of this
folder.

![ppc_configuration1](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/ppc_configuration1.webp)

**Step 5 –** Open **Group Policy Management** console and check if you have a GPO created for
Client. If not, see the topic's section for additional information.

**Step 6 –** In the left pane, navigate to **Forest: `<forest_name>`** > **Domain** >
**`<domain_name>`**, right-click **`<OU_name>`** and select **Create a GPO** in this domain and Link
it here.

Once the GPO is configured, this view is available:

![ppc_configuration3](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/ppc_configuration3.webp)

**Step 7 –** Right-click the newly created GPO and select **Edit** from the pop-up menu.

**Step 8 –** Expand **Computer Configuration** > **Policies** > **Administrative Templates** >
**Netwrix Password Policy Enforcer**

![ppc_configuration4](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/ppc_configuration4.webp)

**Step 9 –** Click on **Netwrix Password Policy Client** to open a list of modification settings.

![ppc_configuration5](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/ppc_configuration5.webp)

**Step 10 –** Select the one you need, then modify and save it.

## Changing the Default Display Settings

The Windows 10 and 11 Change Password screen has less space for the Password Policy message than
earlier Windows versions. Users may need to scroll to see the message if their screen is small, or
if their computer is set to use large fonts.

The Password Policy Client for Windows 10 and 11 maximizes the available screen space by hiding
non-essential user interface elements on small screens. It can also display the Password Policy
message in a message box to draw attention to the password policy.

![the_password_policy_client_3](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/the_password_policy_client_3.webp)

You can change the default display settings to control which user interface elements are hidden, and
the point at which they are hidden. The display of the Password Policy message box is also
configurable.

Follow the steps below to change the default display settings for the Password Policy Client on
Windows 10 and 11.

**Step 1 –** Use the **Group Policy Management Console** (gpmc.msc) to display the GPOs linked at
the domain level.

**NOTE:** If you are not using Active Directory, then open the Local Group Policy Editor
(**gpedit.msc**) and skip step 2.

**Step 2 –** Right-click the **Password Policy Client GPO**, then click the **Edit...** button.

**Step 3 –** Expand the **Computer Configuration**, **Policies** (if visible), **Administrative
Templates**, **Classic Administrative Templates** (**ADM**), **Password Policy Enforcer**, and
**Password Policy Client** items.

**Step 4 –** Double-click the **Display settings (Windows 10)** setting in the right pane of the
Group Policy Management Editor.

**NOTE:** Information about each option is shown in the Help box.

# Password Policy Client

The Password Policy Client helps users to choose a compliant password. Detailed information is
provided if their new password is rejected.

The Password Policy Client is optional. If it is not installed, the
[Similarity Rule](/docs/passwordpolicyenforcer/11.0/password-rules/history-and-similarity.md) can not be enforced. Users only see the default Windows error
message if their password is rejected, not the detailed help they receive from the Password Policy
Client.

![the_password_policy_client](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/the_password_policy_client.webp)

![the_password_policy_client_1](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/the_password_policy_client_1.webp)

The Password Policy Client displays the password policy during a password change so that users can
see the policy while they choose their password. The Password Policy Client also displays a detailed
rejection message to explain why a password was rejected. Both these messages are customizable.

**NOTE:** The Password Policy Client does not modify any Windows system files. It also does not send
passwords or password hashes over the network.
