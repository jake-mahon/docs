# Installation

Installation

# Installation

Netwrix Password Reset V3.30 is designed to run on Windows 2008 to 2019. Users access Password Reset from a web browser, or from the Password Reset console.

## System Requirements

- Windows 2008\*, 2008 R2, 2012, 2012 R2, 2016, or 2019.

  \*x64 only for NPR Server and Web Interface.
- 20 Megabytes free disk space.
- 20 Megabytes free RAM.

## System Components

Password Reset has two server components, and an optional client. Both server components can be installed on one server, or they may be installed on separate servers if your web server is in a DMZ.

### The Web Interface

The Web Interface is the component that users interact with. It accepts user requests, encrypts them, and sends them to the Password Reset Server. The Web Interface must be installed on a server running IIS 7 or later.

### The Netwrix Password Reset Server

The Password Reset Server is the component that performs requests on behalf of users. It receives requests from the Web Interface, checks the user's credentials, and performs the requested task if the credentials are valid.

![installing_npr](/img/product_docs/passwordreset/passwordreset/evaluation/installing_npr.webp)

__NOTE:__ Microsoft SQL Server Compact is installed with the Password Reset Server. SQL Server Compact is free to use, and should only be removed if you move the database to SQL Server. SQL Server Compact is an embedded database. Unlike SQL Server, you do not need to configure or manage it. See the [Working with the Database](/docs/passwordreset/passwordreset/administration/working_with_the_database.md) topic for additional information.

## Installation Types

A single server installation is recommended where users will only access Password Reset from a trusted network, including a VPN. In this installation type, the Web Interface and Password Reset Server are both installed on the same server. The server must have access to a domain controller in each managed domain.

If Password Reset will be accessible from the Internet without a VPN, then it is likely that you will want to run the Web Interface in a DMZ. A multiple server installation is recommended for this scenario. In this installation type, the Web Interface is installed on an server in the DMZ and the Password Reset Server is installed on another server in the internal network. A firewall rule allows the two servers to communicate.

You choose the installation type when installing Password Reset, but you can change it later.

__NOTE:__ An Password Reset Server can accept requests from more than one Web Interface. Having multiple Web Interfaces allows for load balancing and failover, but you should only consider this option if you already have redundant web servers. Most organizations only need one Web Interface.

Password Reset can share server resources with other applications. It is normally not necessary to dedicate a server exclusively to Password Reset. The Web Interface can be installed on an existing web server as long as it is well secured and not overloaded. The Password Reset Server can run on an existing member server or domain controller.

### Single Server Installation

Follow the steps below to install the Web Interface and Password Reset Server on a single server.

__Step 1 –__ Start the Password Reset Setup wizard (APR330.exe).

__Step 2 –__ The Setup wizard may ask you to backup some files if an older version of Password Reset is detected. Backup the files, and then click __Next__.

__Step 3 –__ Click __Next__.

__Step 4 –__ Read the License Agreement. Click __I accept the terms of the license agreement__, and then click __Next__ if you accept all the terms.

__Step 5 –__ Select the __All Components__ option, and then click __Next__.

__Step 6 –__ The Setup wizard may offer to install IIS. Click __OK__ to install IIS.

__Step 7 –__ Enter a __User Name__, __Domain__, and __Password__ for the Password Reset service account. The account will be created and added to the Domain Admins group if it does not exist.

__NOTE:__ You can remove the account from the Domain Admins group later. If using an existing account, make sure it has the required permissions. See the [Securing Password Reset](/docs/passwordreset/passwordreset/administration/securing_password_reset.md) topic for additional information.

__Step 8 –__ Click __Next__.

__Step 9 –__ Select an __IIS Web Site__ from the drop-down list, and optionally change the default __Virtual Directory__ for the Web Interface.

__NOTE:__ The Web Interface should be installed in its own virtual directory.

__Step 10 –__ Click __Next__ twice.

__Step 11 –__ Wait for Password Reset to install, and then click __Finish__.

__NOTE:__ The Password Reset Setup wizard installs the Password Reset Server and associated files into the ```\Program Files\NetwrixPassword Reset\``` folder by default. Use the SERVERDIR parameter to install the Password Reset Server to a different folder. For example, APR330.exe SERVERDIR="D:\Programs\NPR\"

### Multiple Server Installation

Create firewall rules to allow the Web Interface and Password Reset Server to communicate if there is a DMZ firewall between them. The Web Interface initiates a request by sending a datagram with the following properties:

| Web Interface Datagram |  |
| --- | --- |
| Protocol | UDP |
| Source Address | Web Interface server's IP address |
| Source Port | Any |
| Destination address | Password Reset Server's IP address |
| Destination Port | 5100 |

The Password Reset Server responds with a datagram that has the following properties:

| NPR Server Datagram |  |
| --- | --- |
| Protocol | UDP |
| Source Address | Password Reset Server's IP address |
| Source Port | 5100 |
| Destination address | Web Interface server's IP address |
| Destination Port | Any |

Install Password Reset Server on an Internal Network

Follow the steps below to install the Password Reset Server on a server in the internal network.

__Step 1 –__ Start the Password Reset Setup wizard (APR330.exe).

__Step 2 –__ The Setup wizard may ask you to backup some files if an older version of Password Reset is detected. Backup the files, and then click __Next__.

__Step 3 –__ Click __Next__.

__Step 4 –__ Read the License Agreement. Click __I accept the terms of the license agreement__, and then click __Next__ if you accept all the terms.

__Step 5 –__ Select the Server __Only option__, and then click __Next__.

__Step 6 –__ Type a __User Name__, __Domain__, and __Password__ for the Password Reset service account. The account will be created and added to the Domain Admins group if it does not exist.

__NOTE:__ You can remove the account from the Domain Admins group later. If using an existing account, make sure it has the required permissions. See the [Securing Password Reset](/docs/passwordreset/passwordreset/administration/securing_password_reset.md) topic for additional information.

__Step 7 –__ Make sure the __Create Windows Firewall Exception for the NPR Server service__ check box is selected, and then click __Next__ twice.

__Step 8 –__ Wait for the Password Reset Server to install, and then click __Finish__.

__NOTE:__ Open UDP port 5100 on the Password Reset Server computer if a host-based firewall other than the Windows Firewall is installed. This is needed in addition to the DMZ firewall rules above.  
The Password Reset Setup wizard installs the Password Reset Server and associated files into the ```\Program Files\Netwrix Password Reset\``` folder by default. Use the SERVERDIR parameter to install the Password Reset Server to a different folder. For example, APR330.exe SERVERDIR="D:\Programs\NPR\"

Install Web Interface Server in DMZ

Follow the steps below to install the Web Interface on a server in the DMZ.

__Step 1 –__ Start the Password Reset Setup wizard (APR330.exe).

__Step 2 –__ The Setup wizard may ask you to backup some files if an older version of Password Reset is detected. Backup the files, and then click __Next__.

__Step 3 –__ Click __Next__.

__Step 4 –__ Read the License Agreement. Click __I accept the terms of the license agreement__, and then click __Next__ if you accept all the terms.

__Step 5 –__ Select the __Web Interface Only__ option, and then click __Next__.

__Step 6 –__ The Setup wizard may offer to install IIS. Click __OK__ to install IIS.

__Step 7 –__ Select an __IIS Web Site__ from the drop-down list, and optionally change the default __Virtual Directory__ for the Web Interface. The Web Interface should be installed in its own virtual directory.

__Step 8 –__ Click __Next__ twice.

__Step 9 –__ Wait for the Web Interface to install, and then click __Finish__.

__Step 10 –__ Start the Registry Editor (regedit.exe).

__Step 11 –__ Expand the __HKEY\_LOCAL\_MACHINE__, __SOFTWARE__, __ANIXIS__, __ANIXIS Password Reset__, and __3.0__ registry keys.

__Step 12 –__ Set the __ServerIP__ registry value to the IP address of the computer that you installed the Password Reset Server onto.

![installing_npr_1](/img/product_docs/passwordpolicyenforcer/passwordreset/administration/installing_npr_1.webp)

The Password Reset Setup wizard only installs one Web Interface on each server, but you can copy the files to another directory and publish several Web Interfaces from one server. This allows you to present different user interfaces from each directory. The Web Interfaces all communicate with the same NPR Server because there is only one ServerIP value.

Follow the steps below to configure the Web Interfaces to communicate with different Password Reset Servers.

__Step 1 –__ Start the Registry Editor (regedit.exe).

__Step 2 –__ Expand the __HKEY\_LOCAL\_MACHINE__, __SOFTWARE__, __ANIXIS__, __ANIXIS Password Reset__, and __3.0__ registry keys.

__Step 3 –__ Clear the data in the __ServerIP__ registry value.

__Step 4 –__ Create a REG\_SZ value for each Web Interface called ServerIP\_VDIR where VDIR is the name of the virtual directory.

For example, if the virtual directory is called Finance, then the registry value should be called ServerIP\_Finance.

__Step 5 –__ Set each ServerIP\_VDIR value to the IP address of the Password Reset Server.

## Upgrading From NPR V3.x

Some planning is needed to ensure a smooth upgrade from NPR V3.x. A trial run on a lab network is recommended if you have not installed NPR before.

### Before You Begin

The database files are not overwritten during an upgrade, but you should still create a backup before upgrading. See the [Backing up the Database](/docs/passwordreset/passwordreset/administration/working_with_the_database.md#backing-up-the-database) topic for additional information.

__The Web Interface files are overwritten during an upgrade. You must backup any customized Web Interface files before upgrading__. The Web Interface files are installed in the ```\Inetpub\wwwroot\pwreset\``` folder by default.

__NOTE:__ A full backup of the NPR server(s) is recommended. This allows you to roll back to the previous version if the upgrade cannot be completed.  
You may need to restart Windows after upgrading.

If Password Reset was originally installed by someone else and you do not have their installation notes, then read the [Installation](#Installation) topic before you begin. Also make sure you know the password for the Password Reset Server service account as you will need it during the upgrade.

### Upgrading to V3.3

Start the Password Reset Setup wizard (APR330.exe) and follow the prompts. The Setup wizard uninstalls the previous version, so there is no need to manually uninstall it.

If the Password Reset Server and Web Interface are installed on different servers, then upgrade all servers before using the new version. The Password Reset Server and Web Interface are only tested with matching versions.

Restore any customized Web Interface files after upgrading. Do not restore APR.dll from the backup as it belongs to the previous version. You should keep a copy of the original Web Interface files and compare them with the files from the previous version using a file comparison tool. Any changes between versions should be merged into your customized files.

The Password Reset V3.30 data console does not read the VerificationCode or EnrollRecord columns from the User table on SQL Server. Access to these columns can be denied for Data Console users after upgrading all instances of the Data Console. See the [Using the Data Console](/docs/passwordreset/passwordreset/administration/using_the_data_console.md) topic for additional information.

## Upgrading From NPR V2.x

As this is a major upgrade with many changes, some planning is needed to ensure a smooth upgrade. A trial run on a lab network is recommended, especially if you are customizing the user interface. See the [Editing the HTML Templates](/docs/passwordreset/passwordreset/administration/editing_the_html_templates.md) topic for additional information.

__CAUTION:__ Due to a protocol upgrade, Netwrix Password Reset v3.3 is not compatible with Netwrix Password Policy Enforcer v8.x and earlier versions. If you are using Netwrix Password Reset with any of those older Netwrix Password Policy Enforcer versions, please consider upgrading Netwrix Password Policy Enforcer first to a current version, and only then upgrade Netwrix Password Reset to v3.3 (or later).

### Before You Begin

__Step 1 –__ Backup the NPR V2.x server(s).

__Step 2 –__ Close the Data Console if it is open.

__Step 3 –__ Stop the Netwrix Password Reset service and backing up the database. See the [Backing up the Database](/docs/passwordreset/passwordreset/administration/working_with_the_database.md#backing-up-the-database) topic for additional information.

### Upgrading to V3.23

__Step 1 –__ Follow the steps for either [Single Server Installation](#Single-Server-Installation) or [Multiple Server Installation](#Multiple-Server-Installation). If the Web Interface is on a different server, then upgrade it as well.

__Step 2 –__ Open the Data Console, and check the Audit Log and User tabs to make sure the data was imported.

__Step 3 –__ Open NPR in a web browser and test the Enroll, Reset, and Change features.

__Step 4 –__ Install your new license key if you have a perpetual license.

__Step 5 –__ Update the Client license key if you have a perpetual license.

## Other Tasks

Move Database files

The database files are created in the installation folder when NPR is first installed. The default installation folder for NPR V2.x was below the Program Files (x86) folder, but in NPR V3.3 it is below the Program Files folder. The database files are not moved automatically during an upgrade, so you should move them to the new installation folder (or a different folder) after upgrading.

Follow the steps below to move the database files to the ```\Program Files\Netwrix Password Reset\``` folder.

__Step 1 –__ Close the Data Console if it is open.

__Step 2 –__ Stop the Netwrix Password Reset service.

__Step 3 –__ Move apr.sdf and aprlog.sdf from the \Program Files (x86)\Netwrix Password Reset\ folder to the \Program Files\Netwrix Password Reset\ folder.

__Step 4 –__ Open the Configuration Console.

__Step 5 –__ Click the __General__ tab.

__Step 6 –__ Click __Change...__

__Step 7 –__ Click __Browse...__ and then browse to the \Program Files\Netwrix Password Reset\ folder.

__Step 8 –__ Click __OK__ twice, and then click __Apply__.

__Step 9 –__ Start the Netwrix Password Reset service.

__Step 10 –__ Update the backup script to copy from the new folder. See the [Backing up the Database](/docs/passwordreset/passwordreset/administration/working_with_the_database.md#backing-up-the-database) topic for additional information.

Configure Password Reset Client to use IE11 emulation mode

Older versions of the Password Reset Client display pages in Internet Explorer 7 emulation mode. This mode cannot display the new HTML templates correctly. You can upgrade the Password Reset Client to the latest version, or configure existing installations to use IE 11 mode. This only works on Windows Vista and later with IE 9 or later.

Follow the steps below to configure the Password Reset Client to use IE 11 mode.

__Step 1 –__ Start the Registry Editor (regedit.exe).

__Step 2 –__ Expand the __HKEY\_LOCAL\_MACHINE__, __SOFTWARE__, __Microsoft__, __Internet Explorer__, __MAIN__, __FeatureControl__, and __FEATURE\_BROWSER\_EMULATION__ registry keys.

__Step 3 –__ Create a new DWORD value called __LogonUI.exe__, and set it to 2AF8 (hex).

Create this registry value on all the Password Reset Client computers. IE 11 mode can be requested even if the computer is running an older version of IE.


