---
sidebar_position: 3292
title: Installing and Configuring Endpoint Policy Manager GPCR for use with SQL Server
  using SQL Authentication
---

# Installing and Configuring Endpoint Policy Manager GPCR for use with SQL Server using SQL Authentication

This document will step through preparing for and installing the GPCR server and Admin Client software, and assumes MS SQL Server is installed on a separate, accessible server, using default settings.

## Configuring Active Directory

Set who is allowed to access the GPCR client and what computers will have their data collected.

**Step 1 –** Create a security group in the domain (e.g. GPCR Admin) and populate it with and administrators that require access to the GPCR client (admin console)

**Step 2 –** Create a security group in the domain (e.g. GPCR Computers) and populate it with individual computers or other computer groups (e.g. Domain Computers) that will participate the compliance reporting.

## Configuring SQL Server

### Set server Authentication

Authentication must be set to allow both SQL and windows authentication

**Step 1 –** Open "Microsoft SQL Server Management Studio" and connect to your server instance

**Step 2 –** Right-click on SQL server instance and click "Properties"

**Step 3 –** On the Server Properties page click on the "Security" tab and set the Server authentication to "SQL Server and Windows Authentication"

![](../../../../../static/images/PolicyPak/Content/Resources/Images/GPOCompilanceReporter/673_1_image-20200430140138-1.png)

**Step 4 –** Click OK to Close

**Step 5 –** If changed, restart MSSQLSERVER service

### Create DB Admin

Create an administrative SQL account within SSMS to own and access the GPCR database.

**Step 1 –** Expand "Security", right-click "Logins" and select "New Login"

**Step 2 –** On General tab

1. Set Login name, e.g. "GPCR\_DBAdmin"
2. Select radio button "SQL Server authentication" and set password
3. Uncheck "Enforce password policy"

   ![](../../../../../static/images/PolicyPak/Content/Resources/Images/GPOCompilanceReporter/673_3_image-20200430140138-2.png)

**Step 3 –** Click on "Server Roles" tab and select "public" and "sysadmin" roles

![](../../../../../static/images/PolicyPak/Content/Resources/Images/GPOCompilanceReporter/673_5_image-20200430140138-3.png)

**Step 4 –** Save and close

### Create Empty DB

GPCR requires an empty SQL database be present during the installation

**Step 1 –** In Microsoft SSMS, right-click on "Databases" and select "New Database"

![](../../../../../static/images/PolicyPak/Content/Resources/Images/GPOCompilanceReporter/673_7_image-20200430140138-4_471x171.png)

**Step 2 –** Enter name for database (e.g. GPCR)

**Step 3 –** Set Owner as DB admin created earlier (GPCR\_DBAdmin in example)

**Step 4 –** Place DB and log files where desired, if different from default

**Step 5 –** Save and close

## Ensuring Connectivity

Ensure communication is open between GPCR Client and SQL server

### Enable DTC

The following is run on both the Netwrix Endpoint Policy Manager (formerly PolicyPak) GPCR Client computer (Where the Admin Console is installed) and the remote SQL Server

**Step 1 –** Open Component Services

1. Open the "run" box (Win-R), type `"dcomcnfg"` and click OK

![](../../../../../static/images/PolicyPak/Content/Resources/Images/GPOCompilanceReporter/673_9_image-20200430140138-5.png)

**Step 2 –** Expand Console Root -> Component Services -> Computers -> My Computer -> Distributed Transaction Coordinator, Right-Click on Local DTC and click Properties

![](../../../../../static/images/PolicyPak/Content/Resources/Images/GPOCompilanceReporter/673_11_image-20200430140138-6.png)

**Step 3 –** On the Security tab -> Security Settings and Configure as follows:

1. Check "Network DTC Access"
2. Check "Allow Inbound" and "Allow Outbound"
3. Select "No Authentication Required"
4. Check "Enable SNA LU 6.2 Transactions"
5. Click OK

   ![](../../../../../static/images/PolicyPak/Content/Resources/Images/GPOCompilanceReporter/673_13_image-20200430140138-7.png)

**Step 4 –** The MSDTC service will need to be restarted for the changes to take affect – Click YES to restart now or NO to restart manually later.

### Enable Firewall Rules

Enable DTC through the firewall on both Endpoint Policy Manager GPCR Server and the remote SQL Server

**Step 1 –** Open the Windows Defender Firewall

**Step 2 –** Click on "Allow an app or feature through Windows Defender Firewall"

![](../../../../../static/images/PolicyPak/Content/Resources/Images/GPOCompilanceReporter/673_15_image-20200430140138-8.png)

**Step 3 –** Find "Distributed Transaction Coordinator", check and check the appropriate Network profile (e.g. Domain).

![](../../../../../static/images/PolicyPak/Content/Resources/Images/GPOCompilanceReporter/673_17_image-20200430140138-9.png)

**Step 4 –** Click OK to save and close

## Installing GPCR

When installing GPCR, download the latest bits from Endpoint Policy Manager. It is our recommendation that when downloading the latest software version, to grab "everything" (latest bits plus Paks, manuals and guidance). They can be found at 

### GPCR Server

These steps assume that this is the first time GPCR has been installed. If previously installed, you will also be prompted to choose between the previously configured database and admin group, and the setting new values for each.

**Step 1 –** In the downloaded ISO or ZIP, open "Endpoint Policy Manager Group Policy Compliance Reporter" folder and run Endpoint Policy Manager GP Compliance Reporter (Server).msi

**Step 2 –** Click "Next >" through first screen

**Step 3 –** GPCR requires that Server and client (admin console) be at version 20.3.2366.420 at minimum. select "Yes, I confirm" and "Next >" to continue

**Step 4 –** Accept agreement and "Next >" to continue

**Step 5 –** Change installation or just click "Next >" to accept default (recommended) and continue

**Step 6 –** Click "Change" and find domain security group created earlier (GPCR Admin in example) and click "Next >"

![](../../../../../static/images/PolicyPak/Content/Resources/Images/GPOCompilanceReporter/673_19_image-20200430140138-10.png)

**Step 7 –** Select "Microsoft SQL Server and "Next >"

![](../../../../../static/images/PolicyPak/Content/Resources/Images/GPOCompilanceReporter/673_21_image-20200430140138-11.png)

**Step 8 –** Configure Connection to SQL Server

1. Server = Hostname or IP address of SQL server
2. Uncheck "Trusted Connection …"
3. Type in Username and password of SQL account created earlier
4. Click "Refresh" to get list of Databases on SQL server and select empty DB created earlier
5. Next >

   ![](../../../../../static/images/PolicyPak/Content/Resources/Images/GPOCompilanceReporter/673_23_image-20200430140138-12.png)

**Step 9 –** Install -> click yes if prompted for \*.msi

### GPCR Client

The GPCR Client (Admin Console) can be installed on any computer. It is recommended that it be installed on the computer that is used for Group Policy Administration.

**NOTE:**  The client itself is not licensed and thereby can be installed on as many computers as required.

**Step 1 –** In the downloaded ISO or ZIP, open "Endpoint Policy Manager Group Policy Compliance Reporter" folder and run Endpoint Policy Manager GP Compliance Reporter (Admin Console).msi

**Step 2 –** Click "Next >" through first screen

**Step 3 –** GPCR requires that Server and client (admin console) be at version 20.3.2366.420 or higher. Select "Yes, I confirm" and "Next >" to continue

**Step 4 –** Accept agreement and "Next >" to continue

**Step 5 –** Change installation or just click "Next >" to accept default (recommended) and continue

**Step 6 –** Select desired application shortcuts and click "Next >"

**Step 7 –** Install -> click yes if prompted for \*.msi

### GPCR General configuration

For information on completing the GPCR configuration wizard, setting up Auditing and Licensing, and for general usage, please refer to the manual. In addition, review the KB video [Installing Compliance Reporter Server and Client](../Video/GPOCompilanceReporter/Install)