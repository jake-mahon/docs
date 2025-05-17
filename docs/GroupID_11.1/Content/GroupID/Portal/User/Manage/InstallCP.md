---
sidebar_position: 7574
title: Install GroupID Credential Provider
---

# Install Credential Provider

You can install Directory Manager Credential Provider in one of the following ways:

* [Install Credential Provider Manually](#manual "Install Credential Provider Manually")
* [Install Credential Provider via a Group Policy Object (GPO)](#gpo "Install Credential Provider via a Group Policy Object (GPO)")

### Install Credential Provider Manually

Browse to the folder where you have copied the package:

1. Click the *NetwrixGroupIDCredentialprovider.msi* file. The wizard opens and installs Credential Provider.
2. After the installation, it asks you to restart your machine.
3. After the restart, the Windows logon screen appears as follows:

   ![Windows Logon screen](../../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/Portal/CredentialProvider/Windows Screen.png "Windows Logon screen")

   The **Forgot Password** and **Unlock Account** options are now available on the Windows logon screen. They route you to the URLs provided for these options in the *CPSettings.xml* file. You can modify the URLs as well as the text of these options.

   Let’s have a look at the settings which are available in the *CPsettings.xml* file:

   * 

     Provide the text for the ForgotPasswordText key. This text will appear on the Windows logon screen for the Forgot Password option.
   * 

     Provide the text for the UnlockAccountText key. This text will appear on the Windows logon screen for Unlock Account option.
   * 

     Provide the URL to which you want to redirect the user to reset his/her forgotten password.

     * **For GroupID 10**:  
       https://MachineName:port/portalname
     * **For GroupID 11**:  
       https://Machniename:port/portalname/Home/PasswordReset
4. 

   Provide the URL to which you want to redirect the user to unlock his/her locked account.

   * **For GroupID 10:**
       
     https://MachineName:port/Portalname"
   * **For GroupID 11:**
       
     https://Machinename:port/portalname/Home/UnlockAccount
5. 

   Provide the text for the CPTitle key. This text will appear as title under the Netwrix logo on the Windows logon screen.

## Install Credential Provider via a Group Policy Object (GPO)

Instead of installing Credential Provider manually on each individual client workstation, you can distribute it for automatic installation using a GPO, for substantial time savings (especially with larger networks). The GPO can be defined for an organizational unit or applied on the entire domain. Credential Provider is installed automatically at the next Windows startup.

Installing Credential Provider is a two-step process:

1. [Install Orca](#Install "Install Orca")
2. [Deploy Credential Provider via a GPO](#Deploy "Deploy Credential Provider via a GPO")

### Install Orca

Before Credential Provider’s installation via GPO, Orca software is to be installed:

1. Browse to the folder where you have copied the Credential Provider package.
2. Go to the MST Guide folder and run the *Orca-x86\_en-us.msi* application. The Orca console opens:

   ![Orca console](../../../../Resources/Images/GroupID/Portal/CredentialProvider/Orca Console.PNG "Orca console")
3. In Orca, click **File** > **Open**. Browse to the Credential Provider folder and load the *NetwrixGroupIDCredentialprovider.msi* in Orca.

   ![Credential Provider in Orca](../../../../Resources/Images/GroupID/Portal/CredentialProvider/CP Loaded.PNG "Credential Provider in Orca")
4. From the menu, select **Transform** > **New Transform**:

   ![New Transform option](../../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/Portal/CredentialProvider/New Transform.png "New Transform option")
5. Click **Property** in the left pane, list of the properties are displayed in the **Property** main window:

   ![Property page](../../../../Resources/Images/GroupID/Portal/CredentialProvider/Property.PNG "Property page")
6. On your machine, create a new folder and copy the following files to it:

   * CPsettings.xml
   * NetwrixGroupidCredentialprovider.msi
7. Share the folder with the Everyone group with Read permission.
8. Provide the path of this newly created folder in the **SOURCEPATH** box.

   ![Property path](../../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/Portal/CredentialProvider/Property Path.png "Property path")
9. From the menu, select **Transform** > **Generate Transform**:

   ![Generate Transform option](../../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/Portal/CredentialProvider/Generate Transform.png "Generate Transform option")
10. Type a filename for the generated .mst file and save it into the shared folder you just created.
11. Close **Orca**.

### Deploy Credential Provider via a GPO

Having Orca successfully installed, follow these steps to deploy Credential Provider via a GPO.

1. Launch **Group Policy Management** console by typing *gpmc.msc* in the **Run** box and clicking **OK**. The Group Policy Management Editor opens.

   ![Group Policy Management console](../../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/Portal/CredentialProvider/GP Policy.png "Group Policy Management console")

   NOTE: Group Policy Management console is available if the Group Policy Management feature has been installed.
2. Right-click the domain or organizational unit for the computers that you want the Credential Provider installed on. Select **Create a GPO in this domain, and link it here...**:

   ![CCreate a GPO in this domain and link it here option](../../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/Portal/CredentialProvider/New GPO.png "CCreate a GPO in this domain and link it here option")

   Or

   Right-click the Select **Default Domain Policy** and select **Edit**:

   ![Edit Default Domain Policy option](../../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/Portal/CredentialProvider/Edit GPO.png "Edit Default Domain Policy option")
3. In the **Group Policy Management Editor**, click **Computer Configuration** > **Policies** > **Software Settings** > **Software installation** > **New** > **Package**.

   ![New Package option](../../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/Portal/CredentialProvider/Software Installation.png "New Package option")

   NOTE: This documentation describes steps for editing the default policy.
4. Browse to the shared folder. The folder must have the following files in it:

   * CPSettings.xml
   * Netwrixgroupidcredentialprovider.msi
   * .mst file

   Select the *Netwrixgroupidcredentialprovider.msi* and click **Ok**.

   ![Deploy Software ](../../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/Portal/CredentialProvider/Deploy CP.png "Deploy Software ")
5. Select **Advanced** and click **Ok**. The following window opens:

   ![Modifications tab](../../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/Portal/CredentialProvider/Modification tab.jpg "Modifications tab")
6. Select the **Modifications** tab. Click **Add**.
7. Browse to the shared folder where you saved the generated .mst file. Select that file and click **Ok**.
8. Close the Group Policy Management Editor.

The Credential provider is deployed on your machine via the default domain policy.

## Run the credential provider

1. Restart the machine  
   or  
   Run Command Prompt as administrator and type the following command in the cmd window:  
   gpupdate /force

## Run the credential provider on client machines

The modified domain policy will be installed on the client machines, which are in the scope of the Group Policy Object, upon their next restart. The Windows logon screen appear as follows:

![Windows Logon screen](../../../../../../../static/images/GroupID_11.1/Content/Resources/Images/GroupID/Portal/CredentialProvider/Windows Screen.png "Windows Logon screen")