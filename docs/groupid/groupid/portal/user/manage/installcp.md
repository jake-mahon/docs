# Install Credential Provider

You can install Directory Manager Credential Provider in one of the following ways:

- Install Credential Provider Manually
- Install Credential Provider via a Group Policy Object (GPO)

### Install Credential Provider Manually

Browse to the folder where you have copied the package:

1. Click the _NetwrixGroupIDCredentialprovider.msi_ file. The wizard opens and installs Credential Provider.
2. After the installation, it asks you to restart your machine.
3. After the restart, the Windows logon screen appears as follows:

   ![Windows Logon screen](/img/product_docs/groupid/groupid/portal/user/manage/windows_screen.webp)

   The __Forgot Password__ and __Unlock Account__ options are now available on the Windows logon screen. They route you to the URLs provided for these options in the _CPSettings.xml_ file. You can modify the URLs as well as the text of these options.

   Let’s have a look at the settings which are available in the _CPsettings.xml_ file:

   - `<ForgetPasswordText value="Forget Password?" />`

     Provide the text for the ForgotPasswordText key. This text will appear on the Windows logon screen for the Forgot Password option.
   - `<UnlockAccountText value="Unlock Account" />`

     Provide the text for the UnlockAccountText key. This text will appear on the Windows logon screen for Unlock Account option.
   - `<ResetMyPasswordUrl value="https://MachineName:port/Portalname" />`

     Provide the URL to which you want to redirect the user to reset his/her forgotten password.

     - __For GroupID 10__:  
       `https://MachineName:port/portalname`
     - __For GroupID 11__:
       `https://Machniename:port/portalname/Home/PasswordReset`
4. `<UnlockMyAccountUrl value="https://MachineName:port/Portalname" />`

   Provide the URL to which you want to redirect the user to unlock his/her locked account.

   - __For GroupID 10:__
       
     `https://MachineName:port/Portalname`
   - __For GroupID 11:__
       
     `https://Machinename:port/portalname/Home/UnlockAccount`
5. `<CPTitle value="Log on to: Netwrix GroupID" />`

   Provide the text for the CPTitle key. This text will appear as title under the Netwrix logo on the Windows logon screen.

## Install Credential Provider via a Group Policy Object (GPO)

Instead of installing Credential Provider manually on each individual client workstation, you can distribute it for automatic installation using a GPO, for substantial time savings (especially with larger networks). The GPO can be defined for an organizational unit or applied on the entire domain. Credential Provider is installed automatically at the next Windows startup.

Installing Credential Provider is a two-step process:

1. Install Orca
2. Deploy Credential Provider via a GPO

### Install Orca

Before Credential Provider’s installation via GPO, Orca software is to be installed:

1. Browse to the folder where you have copied the Credential Provider package.
2. Go to the MST Guide folder and run the _Orca-x86\_en-us.msi_ application. The Orca console opens:

   ![Orca console](/img/product_docs/groupid/groupid/portal/user/manage/orca_console.webp)
3. In Orca, click __File__ > __Open__. Browse to the Credential Provider folder and load the _NetwrixGroupIDCredentialprovider.msi_ in Orca.

   ![Credential Provider in Orca](/img/product_docs/groupid/groupid/portal/user/manage/cp_loaded.webp)
4. From the menu, select __Transform__ > __New Transform__:

   ![New Transform option](/img/product_docs/groupid/groupid/portal/user/manage/new_transform.webp)
5. Click __Property__ in the left pane, list of the properties are displayed in the __Property__ main window:

   ![Property page](/img/product_docs/groupid/groupid/portal/user/manage/property.webp)
6. On your machine, create a new folder and copy the following files to it:

   - CPsettings.xml
   - NetwrixGroupidCredentialprovider.msi
7. Share the folder with the Everyone group with Read permission.
8. Provide the path of this newly created folder in the __SOURCEPATH__ box.

   ![Property path](/img/product_docs/groupid/groupid/portal/user/manage/property_path.webp)
9. From the menu, select __Transform__ > __Generate Transform__:

   ![Generate Transform option](/img/product_docs/groupid/groupid/portal/user/manage/generate_transform.webp)
10. Type a filename for the generated .mst file and save it into the shared folder you just created.
11. Close __Orca__.

### Deploy Credential Provider via a GPO

Having Orca successfully installed, follow these steps to deploy Credential Provider via a GPO.

1. Launch __Group Policy Management__ console by typing _gpmc.msc_ in the __Run__ box and clicking __OK__. The Group Policy Management Editor opens.

   ![Group Policy Management console](/img/product_docs/groupid/groupid/portal/user/manage/gp_policy.webp)

   NOTE: Group Policy Management console is available if the Group Policy Management feature has been installed.
2. Right-click the domain or organizational unit for the computers that you want the Credential Provider installed on. Select __Create a GPO in this domain, and link it here...__:

   ![CCreate a GPO in this domain and link it here option](/img/product_docs/groupid/groupid/portal/user/manage/new_gpo.webp)

   Or

   Right-click the Select __Default Domain Policy__ and select __Edit__:

   ![Edit Default Domain Policy option](/img/product_docs/groupid/groupid/portal/user/manage/edit_gpo.webp)
3. In the __Group Policy Management Editor__, click __Computer Configuration__ > __Policies__ > __Software Settings__ > __Software installation__ > __New__ > __Package__.

   ![New Package option](/img/product_docs/groupid/groupid/portal/user/manage/software_installation.webp)

   NOTE: This documentation describes steps for editing the default policy.
4. Browse to the shared folder. The folder must have the following files in it:

   - CPSettings.xml
   - Netwrixgroupidcredentialprovider.msi
   - .mst file

   Select the _Netwrixgroupidcredentialprovider.msi_ and click __Ok__.

   ![Deploy Software ](/img/product_docs/groupid/groupid/portal/user/manage/deploy_cp.webp)
5. Select __Advanced__ and click __Ok__. The following window opens:

   ![Modifications tab](/img/product_docs/groupid/groupid/portal/user/manage/modification_tab.jpg)
6. Select the __Modifications__ tab. Click __Add__.
7. Browse to the shared folder where you saved the generated .mst file. Select that file and click __Ok__.
8. Close the Group Policy Management Editor.

The Credential provider is deployed on your machine via the default domain policy.

## Run the credential provider

1. Restart the machine  
   or  
   Run Command Prompt as administrator and type the following command in the cmd window:  
   gpupdate /force

## Run the credential provider on client machines

The modified domain policy will be installed on the client machines, which are in the scope of the Group Policy Object, upon their next restart. The Windows logon screen appear as follows:

![Windows Logon screen](/img/product_docs/groupid/groupid/portal/user/manage/windows_screen.webp)
