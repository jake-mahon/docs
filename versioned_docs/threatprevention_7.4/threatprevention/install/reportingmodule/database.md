# Install the PostgreSQL Database Application

The PostgreSQL database application can be installed on the same server as the application or a different server. If it is installed on a different server, the location of the database server must be provided while installing the application.

Follow the steps to install the PostgreSQL database application.

__CAUTION:__ The PostgreSQL database application must be installed before the application.

__NOTE:__ These steps assume you have launched the installer through the Netwrix Setup Launcher ```(Netwrix_Setup.exe```). If you are not using the launcher, right-click on ```NetwrixPostgreSQL14.exe``` and select Run as administrator. Then skip to Step 2.

![Netwrix Setup Launcher](/img/versioned_docs/threatprevention_7.4/threatprevention/install/reportingmodule/setuplauncher.png)

__Step 1 –__ Click PostgreSQL Setup. The Netwrix PostgreSQL Setup wizard opens.

![Netwrix PostgreSQL Setup wizard](/img/versioned_docs/threatprevention_7.4/threatprevention/install/upgrade/install.png)

__Step 2 –__ Click Install.

![Netwrix PostgreSQL Setup wizard on the EULA page](/img/versioned_docs/changetracker_8.0/changetracker/install/eula.png)

__Step 3 –__ Read the End User License Agreement and select the I accept the license agreement checkbox. Click Next.

![Netwrix PostgreSQL Setup wizard on the Folder Location page](/img/versioned_docs/threatprevention_7.4/threatprevention/install/reportingmodule/folder.png)

__Step 4 –__ By default, the installation directories are set to:

- Install Folder – C:\Program Files\Stealthbits\PostgresSQL14
- Data Folder – C:\ProgramData\Stealthbits\PostgresSQL14

Optionally, enter a new path or use the __Browse__ buttons to modify as desired. Click Next.

![Netwrix PostgreSQL Setup wizard on the Successfully Installed page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sensitivedatadiscovery/completed.png)

__Step 5 –__ The installation begins and the installer displays a Setup Progress window. Click Exit when the installation is successful. The Netwrix PostgreSQL Setup wizard closes.

![postgresqlcheck](/img/versioned_docs/threatprevention_7.4/threatprevention/install/reportingmodule/postgresqlcheck.png)

The PostgreSQL database application is now installed. Nest you can install the Netwrix Threat Manager Reporting Module application. See the [Install the Netwrix Threat Manager Reporting Module](/versioned_docs/threatprevention_7.4/threatprevention/install/reportingmodule/application.md) topic for additional information.
