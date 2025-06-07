# Install the Threat Manager Application

The application can be installed on the same server as the PostgreSQL databases or a different server. If installed on a different server, the location of the database server must be provided while installing the application.

Follow the steps to install the application.

__CAUTION:__ The PostgreSQL database application must be installed before the application is installed.

__NOTE:__  These steps assume you have launched the installer through the Netwrix Setup Launcher (```Netwrix_Setup.exe```). If you are not using it, right-click on ```NetwrixThreatManager.exe``` and select Run as administrator. Then skip to Step 2.

![Netwrix Setup Launcher showing PostgreSQL Setup completed](/static/img/product_docs/threatprevention/threatprevention/install/reportingmodule/postgresqlcheck.png)

__Step 1 –__ Click __Netwrix Threat Manager Setup__. The Netwrix Threat Manager Setup wizard opens.

![Netwrix Threat Manager Setup wizard ](/static/img/product_docs/threatmanager/threatmanager/install/installtm3.0.png)

__Step 2 –__ Click __Install__.

![Netwrix Threat Manager Setup wizard EULA page](/static/img/product_docs/threatmanager/threatmanager/install/tm3eula.png)

__Step 3 –__ Read the End User License Agreement and select the I accept the license agreement checkbox. Click __Next__.

![Netwrix Threat Manager Setup wizard Install Folder page](/static/img/product_docs/threatprevention/threatprevention/install/reportingmodule/folder.png)

__Step 4 –__ By default, the installation directory is set to:

- Install Folder – C:\Program Files\STEALTHbits\StealthDEFEND

Optionally, enter a new path or use the __Browse__ button to modify as desired. Click Next.

![Netwrix Threat Manager Setup wizard Connect to the Database page](/static/img/product_docs/threatprevention/threatprevention/install/database.png)

__Step 5 –__ On the Database page, ensure the host and port are set correctly. If installing on the same server where the PostgreSQL database application was installed, this information will be accurate by default. The default database name is stealthdefend; however, it can be modified as desired. Click __Test__ to validate the connection information.

For example, if you change the default database name from stealthdefend to threatmanager and click __Test__.

![Warning message that the database does not exist, Create?](/static/img/product_docs/threatprevention/threatprevention/install/reportingmodule/databasecreatemessage.png)

__Step 6 –__ If a successful connection is made, a message window displays confirming the database does not exist and you want to create it. Click __OK__ and the window closes.

__Step 7 –__ A "Ready for installation" message appears on the Database page of the wizard and the Next button is enabled. Click __Next__.

__NOTE:__ If PostgreSQL is installed on a different host, then the connection details should be updated accordingly.

![Netwrix Threat Manager Setup wizard Firewall Rules page](/static/img/product_docs/threatprevention/threatprevention/install/reportingmodule/firewallrules.png)

__Step 8 –__ By default, the __Create Inbound Windows Firewall Rules__ checkbox is selected, indicating that the installer will create these. Deselect the checkbox if you do not want the installer to automatically create these rules because you have already created them. Click __Next__.

![Netwrix Threat Manager Setup wizard Completed Successfully page](/static/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.png)

__Step 9 –__ The installation process will begin and the Setup wizard will display the progress. Click Exit when the installation completes successfully. The Netwrix Threat Manager Setup wizard closes.

![Netwrix Setup Launcher with Threat Manager Setup check](/static/img/product_docs/threatprevention/threatprevention/install/reportingmodule/applicationcheck.png)

__Step 10 –__ Now that both components have been installed, close the Netwrix Setup Launcher.

The Threat Manager application is now installed and the database has been created. There are several post-installation tasks that you may need to complete, depending on your environment. See the following topics for additional information:

- [Optionally Install the Action Service on Additional Servers](/docs/product_docs/threatmanager/threatmanager/install/actionservice.md)
- [Secure the Threat Manager Console](/docs/product_docs/threatmanager/threatmanager/install/secure.md)
- During the first launch, you will set up the built-in Administrator account. See the [First Launch](/docs/product_docs/threatmanager/threatmanager/install/firstlaunch.md) topic for additional information.
