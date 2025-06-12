# Installation

Password Policy Enforcer/Web V7.11 is designed to run on Windows 2003, 2008, and 2012. Users access Password Policy Enforcer/Web from their web browser.

### System Requirements

- Windows 2003, 2003 R2, 2008, 2008 R2, 2012, or 2012 R2.
- 5 megabytes of free disk space.
- 5 megabytes free RAM.

__NOTE:__ Password Policy Enforcer/Web can share server resources with other applications. It can be installed on an existing, well secured web server.

## Preparing IIS

Windows 2008 and 2012 include a modular version of IIS that only has a small set of core features enabled by default. Password Policy Enforcer/Web is an ISAPI (Internet Server Application Programming Interface) extension, so you must enable ISAPI extensions on the server that will host Password Policy Enforcer/Web.

Follow the steps below to manage various circumstances that may arise during installation. Listed below are common situations that impact installation and the steps necessary to work around them:

- [If IIS is not installed on Windows 2012](#if-iisis-not-installed-on-windows-2012)
- [If IIS is already installed on Windows 2012](#if-iisis-already-installed-on-windows-2012)
- [If IIS is not installed on Windows 2008](#if-iisis-not-installed-on-windows-2008)
- [If IIS is already installed on Windows 2008](#if-iisis-already-installed-on-windows-2008)

#### If IIS is not installed on Windows 2012

Follow the steps below to prepare IIS is IIS is not installed on Windows 2012.

__Step 1 –__ Start the Server Manager (ServerManager.exe).

![installing_ppe_web](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/installing_ppe_web.png)

__Step 2 –__ Click __Manage__ > __Add Roles and Features__.

__Step 3 –__ Click __Next__ on Before You Begin page (if applicable).

__Step 4 –__ Select __Role-based or Feature-based installation__, then click __Next__.

__Step 5 –__ Select an appropriate server, then click __Next__.

__Step 6 –__ Select the Web Server (IIS) role.

__Step 7 –__ Click __Add Features__ if asked to install required features.

__Step 8 –__ Click __Next__ three times.

![installing_ppe_web_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/installing_ppe_web_1.png)

__Step 9 –__ Expand the Application Development group, then select __ISAPI Extensions__.

__Step 10 –__ Click __Next__, then click __Install__.

__Step 11 –__ Wait for IIS to install, then click __Close__.

#### If IIS is already installed on Windows 2012

Follow the steps below to prepare IIS is IIS is already installed on Windows 2012

__Step 1 –__ Start the Server Manager (ServerManager.exe).

![installing_ppe_web](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/installing_ppe_web.png)

__Step 2 –__ Click __Manage__ > __Add Roles and Features__.

__Step 3 –__ Click __Next__ on the Before You Begin page (if applicable).

__Step 4 –__ Select __Role-based or Feature-based installation__, then click __Next__.

__Step 5 –__ Select an appropriate server, then click __Next__.

__Step 6 –__ Expand the Web Server (IIS) (Installed) group.

__Step 7 –__ Expand the Web Server (Installed) group.

![installing_ppe_web_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/installing_ppe_web_2.png)

__Step 8 –__ Expand the Application Development group, then select __ISAPI Extensions__.

__Step 9 –__ Click __Next__ twice, then click __Install__.

__Step 10 –__ Wait for the ISAPI Extensions feature to install, then click __Close__.

#### If IIS is not installed on Windows 2008

Follow the steps below to prepare IIS if IIS is not installed on Windows 2008.

__Step 1 –__ Start the Server Manager console (ServerManager.msc).

__Step 2 –__ Click the __Roles__ item in the left pane.

![installing_ppe_web_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/installing_ppe_web_3.png)

__Step 3 –__ Click __Add Roles__ in the right pane.

__Step 4 –__ Click __Next__ on the Before You Begin page (if applicable).

__Step 5 –__ Select the Web Server (IIS) role, then click __Next__ twice.

![installing_ppe_web_4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/installing_ppe_web_4.png)

__Step 6 –__ Select __ISAPI Extensions__ in the Application Development group.

__Step 7 –__ Click __Next__, then click __install__.

__Step 8 –__ Wait for IIS to install, then click __Close__.

#### If IIS is already installed on Windows 2008

Follow the steps below to prepare IIS is IIS is already installed on Windows 2008.

__Step 1 –__ Start the Server Manager console (ServerManager.msc).

__Step 2 –__ Expand the __Roles__ item in the left pane, then click __Web Server (IIS)__.

__Step 3 –__ Scroll down to the Role Services section in the right pane.

![installing_ppe_web_5](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/installing_ppe_web_5.png)

__Step 4 –__ Click __Add Role Services__.

__Step 5 –__ Select __ISAPI Extensions__ in the Application Development group.

__Step 6 –__ Click __Next__, then click __Install__.

__Step 7 –__ Wait for the role service to install, then click __Close__.

## The PPE/Web Setup Wizard

The Setup Wizard copies the required files onto the server and configures IIS to run the Password Policy Enforcer/Web application.

Follow the steps below to install PPE/Web.

__Step 1 –__ Start the Password Policy Enforcer/Web Setup Wizard (PPEWeb711.exe).

__Step 2 –__ If another version of Password Policy Enforcer/Web is detected, the Setup Wizard may required older files to be backed up. Back up these files if the original files have been modified. Click __Next__.

__Step 3 –__ Click __Next__.

__Step 4 –__ Read the License Agreement. Click __I accept the terms of the license agreement__, then click __Next__ if you accept all the terms.

__Step 5 –__ Click __Browse...__ if you want to choose a different folder for the Password Policy Enforcer/Web documentation and tools, then click __Next__.

__Step 6 –__ Select an __IIS Web Site__ from the dropdown. Change the default Virtual Directory, if needed.

__NOTE:__ Password Policy Enforcer/Web should be installed in its own virtual directory.

__Step 7 –__ Click __Next__ twice.

__Step 8 –__ Wait for Password Policy Enforcer/Web to install, then click __Finish__.

#### Upgrading from PPE/Web V7.x

Some planning is needed to ensure a smooth upgrade from PPE/Web V7.x. A trial run on a lab network is recommended.

#### Before You Begin

The HTML templates and associated images are overwritten during an upgrade. You must back up and customized HTML templates and images before upgrading. The HTML templates and images are installed in the ```\Inetpub\wwwroot\ppeweb\``` folder by default.

__NOTE:__ A full backup of the PPE/Web server is recommended. This allows you to roll back to the previous version if the upgrade cannot be completed. You may need to restart Windows after upgrading.

__CAUTION:__ PPE/Web V7.11 is only compatible with Password Policy Enforcer V7.0 and later. Upgrade Password Policy Enforcer to a compatible version if you have enabled Password Policy Enforcer integration.

#### Upgrading to V7.11

__Step 1 –__ Start the PPE/Web Setup Wizard and follow the prompts. The Setup Wizard uninstalls the previous version. There is no need to manually uninstall previous versions.

__Step 2 –__ Restore any customized HTML templates and images after upgrading. Do not restore PPEWeb.dll from the backup as it belongs to the previous version.

## Upgrading from PPW/Web V6.x

Some planning is needed to ensure a smooth upgrade from PPE/Web V6.x. A trial run on a lab network is recommended.

#### Before You Begin

The HTML templates and associated images are overwritten during an upgrade. You must back up any customized HTML templates and iages before upgrading The HTML templates and images are installed in the ```\Inetpub\wwwroot\ppeweb\``` folder by default.

__NOTE:__ A full backup of the PPE/Web server is recommended. This allows you to roll back to the previous version if the upgrade cannot be completed. You may need to restart Windows after upgrading.

__CAUTION:__ PPE/Web V7.11 is only compatible with Password Policy Enforcer V7.0 and later. Upgrade Password Policy Enforcer to a compatible version if you have enabled Password Policy Enforcer integration.

#### Upgrading to V7.11Upgrading to V7.11

Follow the steps below to upgrade PPE/Web to V7.11.

__Step 1 –__ Start the PPE/Web Setup Wizard and follow the prompts The Setup Wizard uninstalls the previous version. There is no need to manually uninstall previous versions.

__Step 2 –__ Restore any customized HTML templates and images after upgrading. Do not restore PPEWeb.dll from the backup as it belongs to the previous version.

__Step 3 –__ Open the Configuration Console to import you PPE/Web configuration settings. You will also need to install your new license key if you have a perpetual license. See the [Configuration](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/configuration.md) topic for additional information.

## Upgrading from PPE/Web V3.x

PPE/Web V3.x did not include a Setup Wizard, so you should manually remove the old version before upgrading.

#### Removing PPE/Web V3.x

Follow the steps below to manually remove PPE/Web V3.x.

__Step 1 –__ Open the IIS Manager console.

__Step 2 –__ Right-click the PPE/Web virtual directory in the left pane of the IIS Manager console, then click Delete. Click Yes to confirm.

__Step 3 –__ Click the Web Service Extensions item in the left pane of the IIS Manager console. Right-click the PPE/Web item in the right pane, then click Delete. Click Yes to confirm.

__Step 4 –__ Back up the PPE/Web V3.x files.

__NOTE:__ the PPE/Web V3.x files are most likely located in the ```\Inetpub\wwwroot\ppeweb\``` folder.

__Step 5 –__ Delete the folder containing the PPE/Web V3.x files.

#### Upgrading to V7.11

Follow the steps below to upgrade to PPE/Web V7.x.

__Step 1 –__ Start the PPE/Web Setup Wizard and follow the prompts.

__Step 2 –__ Open the Configuration console to configure PPE/Web and install your new license key.

__NOTE:__ Any customizations to the PPE/Web V3.x user interface will need to be recreated after upgrading to PPE/Web V7.11. See the [Editing HTML Templates](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/web/editing_html_templates.md) topic for additional information.
