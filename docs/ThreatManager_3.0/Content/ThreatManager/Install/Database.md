---
sidebar_position: 2434
title: Install the PostgreSQL Database Application
---

# Install the PostgreSQL Database Application

The PostgreSQL database application can be installed on the same server as the application or a different server. If it is installed on a different server, the location of the database server must be provided while installing the application.

Follow the steps to install the PostgreSQL database application.

**CAUTION:** The PostgreSQL database application must be installed before the application.

**NOTE:** These steps assume you have launched the installer through the Netwrix Setup Launcher `(Netwrix_Setup.exe`). If you are not using the launcher, right-click on `NetwrixPostgreSQL14.exe` and select Run as administrator. Then skip to Step 2.

![Netwrix Setup Launcher](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Setup/SetupLauncher.png "Netwrix Setup Launcher")

**Step 1 –** Click PostgreSQL Setup. The Netwrix PostgreSQL Setup wizard opens.

![Netwrix PostgreSQL Setup wizard](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Database/Install.png "Netwrix PostgreSQL Setup wizard")

**Step 2 –** Click Install.

![Netwrix PostgreSQL Setup wizard on the EULA page](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Database/EULA.png "Netwrix PostgreSQL Setup wizard on the EULA page")

**Step 3 –** Read the End User License Agreement and select the I accept the license agreement checkbox. Click Next.

![Netwrix PostgreSQL Setup wizard on the Folder Location page](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Database/Folder.png "Netwrix PostgreSQL Setup wizard on the Folder Location page")

**Step 4 –** By default, the installation directories are set to:

* Install Folder – C:\Program Files\Stealthbits\PostgresSQL14
* Data Folder – C:\ProgramData\Stealthbits\PostgresSQL14

Optionally, enter a new path or use the **Browse** buttons to modify as desired. Click Next.

![Netwrix PostgreSQL Setup wizard on the Successfully Installed page](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Database/Completed.png "Netwrix PostgreSQL Setup wizard on the Successfully Installed page")

**Step 5 –** The installation begins and the installer displays a Setup Progress window. Click Exit when the installation is successful. The Netwrix PostgreSQL Setup wizard closes.

![Netwrix Setup Launcher showing PostgreSQL Setup completed](../../../../../static/images/ThreatManager_3.0/Content/Resources/Images/ThreatManager/Install/Setup/PostgreSQLCheck.png "Netwrix Setup Launcher showing PostgreSQL Setup completed")

The PostgreSQL database application is now installed. Now you can install the Threat Manager application. See the [Install the Threat Manager Application](Application "Install the Threat Manager Application") topic for additional information.

## Optionally Configure the Postgres.conf File

PostgreSQL has some unique memory management features that need to be configured specifically based on the specifications of the database server. PostgreSQL can easily be starved of resources and enter a failed state if careful consideration and configuration of the `postgres.conf` file is not taken under consideration. For larger environments or for those experiencing issues with PostgreSQL, the following changes are suggested.

**NOTE:** When setting values, specifically when using a Memory unit, case sensitivity is required.

The table displays `Postgres.conf` settings and their suggested values.

| Setting | Suggested Value | Notes |
| --- | --- | --- |
| effective\_cache\_size | Total Server Memory (MBs) \* .75 |  |
| shared\_buffers | totalMemory / 4 | shared\_buffers on windows needs to be limited to 512MB |
| wal\_buffers | 3% of shared\_buffers with a min of 32kB and a max of 16MB |  |
| checkpoint\_timeout | checkpoint\_timeout = 30min |  |
| max\_wal\_size | 2048MB |  |
| min\_wal\_size | 1024MB |  |
| checkpoint\_completion\_target | 0.7 |  |
| work\_mem | work\_mem = ((totalMemory - shared\_buffers) / (max\_connections \* 3) / max\_parallel\_workers\_per\_gather) | Limit to 64kB |
| max\_connections | 100 |  |
| maintenance\_work\_mem | maintenance\_work\_mem = totalMemory / 16 | cap maintenance memory at 2GB on servers with lots of memory |
| default\_statistics\_target | 100 |  |
| random\_page\_cost | if ( disk\_is\_hdd ) { random\_page\_cost = 4 } else { random\_page\_cost = 1.1 } |  |
| max\_parallel\_workers | max\_parallel\_workers = cpuNum |  |
| max\_worker\_processes | 8 |  |
| max\_parallel\_workers\_per\_gather | 2 |  |
| max\_locks\_per\_transaction | 300 |  |