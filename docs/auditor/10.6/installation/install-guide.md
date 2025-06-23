---
title: Automate Client Sign-in Process
sidebar_label: Client Sign-in
description: Configure automated sign-in for Netwrix Auditor client including shortcuts for connecting to multiple servers and MSP scenarios.
---

# Automate Sign-in to the Client

When you launch Netwrix Auditor client installed on the same machine as Netwrix Auditor server,
connection to that server is established automatically using your current account. However, if you
want to connect to Netwrix Auditor Server installed on another computer, you will be prompted to
specify connection parameters: server name and user credentials.

To automate the sign-in process, users who need to frequently connect to different Netwrix Auditor
Servers (for example, Managed Service Providers) may configure the product shortcut: when you click
the shortcut, Netwrix Auditor client will display the sign-in window with pre-populated server name
and user name. You will only have to enter password.

To create a shortcut for automated sign-in:

1. Navigate to the Netwrix Auditor client installation directory and locate the
   AuditIntelligence.exe file (default location is _C:\Program Files (x86)\Netwrix Auditor\Audit
   Intelligence\AuditIntelligence.exe)._
2. Create a shortcut for this executable file.
3. Right-click the created shortcut and select Properties.
4. In the Target field, a path to the executable file will be shown. Add the following parameters to
   the end:

   `/s:server_name /u:user_name /specify_creds`

   where:

   - `server_name`—your Netwrix Auditor Server name or IP address.
   - `user_name`— Netwrix Auditor user who will log in.

   Example:

   `"C:\Program Files (x86)\Netwrix Auditor\Audit Intelligence\Audit Intelligence.exe" /s:host.corp.local /u:corp\analyst /specify_creds`

5. Click Apply.

You can create as many shortcuts with different parameters as needed.

# Install for SharePoint Core Service

This section contains instructions on how to install Netwrix Auditor for SharePoint Core Service.

During the Netwrix Auditor for SharePoint Core Service installation / uninstallation your SharePoint
sites may be unavailable.

Prior to the Netwrix Auditor for SharePoint Core Service installation, review the following
prerequisites and make sure that:

- Netwrix Auditor for SharePoint Core Service is going to be installed on the computer that hosts
  SharePoint Central Administration in the audited SharePoint farm.
- [.Net Framework 3.5 SP1](http://www.microsoft.com/en-us/download/details.aspx?id=22) is installed
  on the computer that hosts SharePoint Central Administration in the audited SharePoint farm.
- The SharePoint Administration (SPAdminV4) service is started on the target computer. See
  [SharePoint](/docs/auditor/10.6/data-sources/infrastructure/sharepoint-server.md) for more
  information.
- The user that is going to run the Core Service installation:
  - Is a member of the local Administrators group on SharePoint server, where the Core Service
    will be deployed.
  - Is granted the SharePoint_Shell_Access role on SharePoint SQL Server configuration database.
    See
    [Permissions for SharePoint Auditing](/docs/auditor/10.6/data-sources/infrastructure/sharepoint-server.md)
    topic for more information.

Follow the steps to install Netwrix Auditor for SharePoint Core Service manually.

**Step 1 –** On the computer where Auditor Server resides,navigate to _%Netwrix Auditor installation
folder%\SharePoint Auditing\_\_\SharePointPackage_ and copy SpaPackage\_`<version>`.msi to the
computer where Central Administration is installed.

**Step 2 –** Run the installation package.

**Step 3 –** Follow the instructions of the setup wizard. When prompted, accept the license
agreement and specify the installation folder.

# Install for User Activity Core Service

By default, the Core Service is installed automatically on the audited computers when setting up
auditing in Netwrix Auditor. If, for some reason, installation has failed, you must install the Core
Service manually on each audited computer.

Follow the steps to install Netwrix Auditor User Activity Core Service.

**Step 1 –** On the computer where Auditor Server resides, navigate to _%ProgramFiles% (x86)\Netwrix
Auditor\User Activity Video Recording_ and copy the UACoreSvcSetup.msi file to the audited computer.

**Step 2 –** Run the installation package.

**Step 3 –** Follow the instructions of the setup wizard. When prompted, accept the license
agreement and specify the installation folder.

**Step 4 –** On the Core Service Settings page, specify the host server (i.e., the name of the
computer where Netwrix Auditor is installed) and the server TCP port.

## Install User Activity Core Service with the Command Prompt

Follow the steps to perform a silent installation of the User Activity Core Service with the command
prompt.

**Step 1 –** On the computer where Auditor Server resides,, navigate to _%ProgramFiles%
(x86)\Netwrix Auditor\User Activity Video Recording_ and copy the **UACoreSvcSetup.msi** file to the
audited computer or to a file share the target server(s) can access.

**Step 2 –** Run the following commands on target servers:

- `CD %PathToInstaller%`
- `msiexec.exe /i "UACoreSvcSetup.msi" ALLUSERS=1 /qn /norestart /log output.log UAVR_SERVERNAME=%NAServer% UAVR_SERVERPORT=9004`

**Step 3 –** Replace _%PathToInstaller%_ with the path to the folder you copied the
**UACoreSvcSetup.msi** file.

**Step 4 –** Replace _%NAServer%_ with the name of your Netwrix Auditor server.

# Install Client via Group Policy

The Netwrix Auditor client can be deployed on multiple computers via Group Policy. This can be
helpful if you want to grant access to configuration and audit data to a significant number of
employees and, therefore, have to run Netwrix Auditor installation on multiple computers.

If installing via Group Policy, make sure to deploy Netwrix Auditor client and Netwrix Auditor
server on different machines. If both components are installed on the same machine, you may
experience issues with future upgrades.

To run the Netwrix Auditor installation, you must be a member of the local Administrators group.

## Extract MSI File

1. Download the product installation package.
2. Open the command prompt: navigate to Start → Run and type "_cmd_".
3. Enter the following command to extract the msi file into %Temp% folder:

   `Netwrix_Auditor.exe -d%Temp%`

   where %Temp% can be replaced with any folder you want to extract the file to.

4. Navigate to this directory and locate Netwrix_Auditor_client.msi.

## Create and Distribute Installation Package

1. Create a shared folder that will be used for distributing the installation package.

   Make sure that the folder is accessible from computers where the Netwrix Auditor clients are
   going to be deployed. You must grant the Read permissions on this folder to these computer
   accounts.

2. Copy Netwrix_Auditor_client.msi to the shared folder.

## Create a Group Policy to Deploy Netwrix Auditor

It is recommended to create a dedicated organizational unit using Active Directory Users and
Computers and add computers where you want to deploy the Netwrix Auditor client.

Follow the steps to create a Group Policy

**Step 1 –** Open the **Group Policy Management** console on any domain controller in the target
domain: navigate to Start > Windows Administrative Tools (Windows Server 2016 and higher) or
Administrative Tools (Windows 2012) **Group Policy Management.**

**Step 2 –** In the left pane, navigate to **Forest: `<forest_name>` → Domain → `<domain_name>`,
right-click `<OU_name>`** and select **Create a GPO in this domain and Link it here**.

![winserver2016_ou_gpo_for_deploy](/img/versioned_docs/auditor_10.6/auditor/install/winserver2016_ou_gpo_for_deploy.webp)

**Step 3 –** Right-click the newly created GPO and select **Edit** from the pop-up menu.

**Step 4 –** In the Group Policy Management Editor dialog, expand the **Computer Configuration**
node on the left and navigate to **Policies → Software Settings → Software installation.**

**Step 5 –** In the right page, right-click and select New → Package.

**Step 6 –** In the dialog that opens, locate Netwrix_Auditor_client.msi and click Open.

**Step 7 –** In the Deploy Software dialog, select Advanced.

![add_msi](/img/versioned_docs/auditor_10.6/auditor/install/add_msi.webp)

**Step 8 –** In the Netwrix Auditor Properties dialog, select the Deployment tab and click Advanced.

**Step 9 –** In the Advanced Deployment Options dialog, select the Ignore language when deploying
this package checkbox.

![winserver2016_advanced_deployment_options](/img/versioned_docs/auditor_10.6/auditor/install/winserver2016_advanced_deployment_options.webp)

**Step 10 –** Close the Netwrix Auditor Properties dialog.

**Step 11 –** Reboot computers where you want to deploy the Netwrix Auditor client.

The product will be automatically installed on computers affected by the newly created Group Policy
after reboot.
