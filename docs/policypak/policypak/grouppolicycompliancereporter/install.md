# Installing and Configuring Endpoint Policy Manager GPCR for use with SQL Server using SQL Authentication

This document will step through preparing for and installing the GPCR server and Admin Client software, and assumes MS SQL Server is installed on a separate, accessible server, using default settings.

## Configuring Active Directory

Set who is allowed to access the GPCR client and what computers will have their data collected.

__Step 1 –__ Create a security group in the domain (e.g. GPCR Admin) and populate it with and administrators that require access to the GPCR client (admin console)

__Step 2 –__ Create a security group in the domain (e.g. GPCR Computers) and populate it with individual computers or other computer groups (e.g. Domain Computers) that will participate the compliance reporting.

## Configuring SQL Server

### Set server Authentication

Authentication must be set to allow both SQL and windows authentication

__Step 1 –__ Open "Microsoft SQL Server Management Studio" and connect to your server instance

__Step 2 –__ Right-click on SQL server instance and click "Properties"

__Step 3 –__ On the Server Properties page click on the "Security" tab and set the Server authentication to "SQL Server and Windows Authentication"

![673_1_image-20200430140138-1](/static/img/product_docs/policypak/policypak/grouppolicycompliancereporter/673_1_image-20200430140138-1.png)

__Step 4 –__ Click OK to Close

__Step 5 –__ If changed, restart MSSQLSERVER service

### Create DB Admin

Create an administrative SQL account within SSMS to own and access the GPCR database.

__Step 1 –__ Expand "Security", right-click "Logins" and select "New Login"

__Step 2 –__ On General tab

1. Set Login name, e.g. "GPCR\_DBAdmin"
2. Select radio button "SQL Server authentication" and set password
3. Uncheck "Enforce password policy"

   ![673_3_image-20200430140138-2](/static/img/product_docs/policypak/policypak/grouppolicycompliancereporter/673_3_image-20200430140138-2.png)

__Step 3 –__ Click on "Server Roles" tab and select "public" and "sysadmin" roles

![673_5_image-20200430140138-3](/static/img/product_docs/policypak/policypak/grouppolicycompliancereporter/673_5_image-20200430140138-3.png)

__Step 4 –__ Save and close

### Create Empty DB

GPCR requires an empty SQL database be present during the installation

__Step 1 –__ In Microsoft SSMS, right-click on "Databases" and select "New Database"

![673_7_image-20200430140138-4_471x171](/static/img/product_docs/policypak/policypak/grouppolicycompliancereporter/673_7_image-20200430140138-4_471x171.png)

__Step 2 –__ Enter name for database (e.g. GPCR)

__Step 3 –__ Set Owner as DB admin created earlier (GPCR\_DBAdmin in example)

__Step 4 –__ Place DB and log files where desired, if different from default

__Step 5 –__ Save and close

## Ensuring Connectivity

Ensure communication is open between GPCR Client and SQL server

### Enable DTC

The following is run on both the Netwrix Endpoint Policy Manager (formerly PolicyPak) GPCR Client computer (Where the Admin Console is installed) and the remote SQL Server

__Step 1 –__ Open Component Services

1. Open the "run" box (Win-R), type ```"dcomcnfg"``` and click OK

![673_9_image-20200430140138-5](/static/img/product_docs/policypak/policypak/troubleshooting/error/gpocompilancereporter/669_3_image-20200327172830-3.png)

__Step 2 –__ Expand Console Root -> Component Services -> Computers -> My Computer -> Distributed Transaction Coordinator, Right-Click on Local DTC and click Properties

![673_11_image-20200430140138-6](/static/img/product_docs/policypak/policypak/troubleshooting/error/gpocompilancereporter/669_5_image-20200327172830-4.png)

__Step 3 –__ On the Security tab -> Security Settings and Configure as follows:

1. Check "Network DTC Access"
2. Check "Allow Inbound" and "Allow Outbound"
3. Select "No Authentication Required"
4. Check "Enable SNA LU 6.2 Transactions"
5. Click OK

   ![673_13_image-20200430140138-7](/static/img/product_docs/policypak/policypak/troubleshooting/error/gpocompilancereporter/669_7_image-20200327172830-5.png)

__Step 4 –__ The MSDTC service will need to be restarted for the changes to take affect – Click YES to restart now or NO to restart manually later.

### Enable Firewall Rules

Enable DTC through the firewall on both Endpoint Policy Manager GPCR Server and the remote SQL Server

__Step 1 –__ Open the Windows Defender Firewall

__Step 2 –__ Click on "Allow an app or feature through Windows Defender Firewall"

![673_15_image-20200430140138-8](/static/img/product_docs/policypak/policypak/troubleshooting/error/gpocompilancereporter/669_9_image-20200327172830-6.png)

__Step 3 –__ Find "Distributed Transaction Coordinator", check and check the appropriate Network profile (e.g. Domain).

![673_17_image-20200430140138-9](/static/img/product_docs/policypak/policypak/troubleshooting/error/gpocompilancereporter/669_11_image-20200327172830-7.png)

__Step 4 –__ Click OK to save and close

## Installing GPCR

When installing GPCR, download the latest bits from Endpoint Policy Manager. It is our recommendation that when downloading the latest software version, to grab "everything" (latest bits plus Paks, manuals and guidance). They can be found at [https://portal.policypak.com/downloads/everything](https://portal.policypak.com/downloads/everything)

### GPCR Server

These steps assume that this is the first time GPCR has been installed. If previously installed, you will also be prompted to choose between the previously configured database and admin group, and the setting new values for each.

__Step 1 –__ In the downloaded ISO or ZIP, open "Endpoint Policy Manager Group Policy Compliance Reporter" folder and run Endpoint Policy Manager GP Compliance Reporter (Server).msi

__Step 2 –__ Click "Next >" through first screen

__Step 3 –__ GPCR requires that Server and client (admin console) be at version 20.3.2366.420 at minimum. select "Yes, I confirm" and "Next >" to continue

__Step 4 –__ Accept agreement and "Next >" to continue

__Step 5 –__ Change installation or just click "Next >" to accept default (recommended) and continue

__Step 6 –__ Click "Change" and find domain security group created earlier (GPCR Admin in example) and click "Next >"

![673_19_image-20200430140138-10](/static/img/product_docs/policypak/policypak/grouppolicycompliancereporter/673_19_image-20200430140138-10.png)

__Step 7 –__ Select "Microsoft SQL Server and "Next >"

![673_21_image-20200430140138-11](/static/img/product_docs/policypak/policypak/grouppolicycompliancereporter/673_21_image-20200430140138-11.png)

__Step 8 –__ Configure Connection to SQL Server

1. Server = Hostname or IP address of SQL server
2. Uncheck "Trusted Connection …"
3. Type in Username and password of SQL account created earlier
4. Click "Refresh" to get list of Databases on SQL server and select empty DB created earlier
5. Next >

   ![673_23_image-20200430140138-12](/static/img/product_docs/policypak/policypak/grouppolicycompliancereporter/673_23_image-20200430140138-12.png)

__Step 9 –__ Install -> click yes if prompted for \*.msi

### GPCR Client

The GPCR Client (Admin Console) can be installed on any computer. It is recommended that it be installed on the computer that is used for Group Policy Administration.

__NOTE:__  The client itself is not licensed and thereby can be installed on as many computers as required.

__Step 1 –__ In the downloaded ISO or ZIP, open "Endpoint Policy Manager Group Policy Compliance Reporter" folder and run Endpoint Policy Manager GP Compliance Reporter (Admin Console).msi

__Step 2 –__ Click "Next >" through first screen

__Step 3 –__ GPCR requires that Server and client (admin console) be at version 20.3.2366.420 or higher. Select "Yes, I confirm" and "Next >" to continue

__Step 4 –__ Accept agreement and "Next >" to continue

__Step 5 –__ Change installation or just click "Next >" to accept default (recommended) and continue

__Step 6 –__ Select desired application shortcuts and click "Next >"

__Step 7 –__ Install -> click yes if prompted for \*.msi

### GPCR General configuration

For information on completing the GPCR configuration wizard, setting up Auditing and Licensing, and for general usage, please refer to the manual. In addition, review the KB video [Installing Compliance Reporter Server and Client](/docs/product_docs/policypak/policypak/video/gpocompilancereporter/install.md)
