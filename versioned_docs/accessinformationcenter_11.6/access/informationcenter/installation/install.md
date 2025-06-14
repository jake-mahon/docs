# Install the Access Information Center

Once the prerequisites have been met, follow the steps to install the Access Information Center.

__Step 1 –__ Run the ```AccessInformationCenter.exe``` executable and the Netwrix Access Information Center Setup wizard opens.

![Netwrix Access Information Center Setup Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.png)

__Step 2 –__ On the Welcome page, click the Next button to begin the installation process.

![AIC Setup Wizard End-User License Agreement page](/img/versioned_docs/changetracker_8.0/changetracker/install/eula.png)

__Step 3 –__ On the End-User License Agreement page, check the __I accept the terms in the License Agreement__ box and click __Next__.

![AIC Setup Wizard Destination Folder page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/destinationfolder.png)

__Step 4 –__ On the Destination Folder page, you can choose between the default destination folder and a custom folder. Click Change to browse for a different location. When the destination is set as desired, click __Next__.

__NOTE:__ The default location is ```C:\Program Files\STEALTHbits\Access Information Center\```. There are no specific requirements for changing the path.

![AIC Setup Wizard SQL Server Connection page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/application/sqlserver.png)

__Step 5 –__ On the SQL Server Connection page, provide the required database information. Click Next to test the connection to the SQL Server. If there are no errors, the next wizard page will open.

- Server — Enter the database server hostname (NetBIOS name, FQDN, or IP address) with the instance name or non-standard port, if applicable, in one of the following formats:

  - No named instance, use [SQLHostName], e.g. NT-SQL02
  - Named instance, use [SQLHostName]\[SQLInstanceName], e.g. NT-SQL02\Netwrix
  - No named instance with non-standard port, use [SQLHostName],[PortNumber], e.g. NT-SQL02,72
  - Named instance with non-standard port, use [SQLHostName]\[SQLInstanceName],[PortNumber], e.g. NT-SQL02\Netwrix,72
- Database — Enter the name of the existing database

- Authentication — Select the Database service account type from the drop-down menu. Then enter the account information in the __User Name__ and __Password__ fields.
  - For Windows Authentication — __User Name__ format must be [DOMAIN]\[username] , e.g. NWXTECH\ad.bruce

__NOTE:__ The Server and Database information are available in the Enterprise Auditor Console in the __Settings__ > __Storage__ node, and will be auto-populated if installing the Access Information Center on the same server as Enterprise Auditor. The Database settings can be modified after installation. See the [Database Page](/versioned_docs/accessinformationcenter_11.6/access/informationcenter/admin/configuration/database.md) topic for additional information.

![AIC Setup Wizard Configure Web Server page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/action/survey/webserver.png)

__Step 6 –__  On the Configure Web Server page, you can choose between the default port and a custom port on which the application will be accessible. To change the port, enter a new port number in the field. When the port is set as desired, click __Next__.

![AIC Setup Wizard Ready to install page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/ready.png)

__Step 7 –__ On the Ready to install page, click Install to begin the process.

![AIC Setup Wizard Completed page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/sensitivedatadiscovery/completed.png)

__Step 8 –__ Once the installation has successfully completed, click Finish to exit the wizard.

The installation wizard placed an Netwrix Access Information Center icon on the desktop. Now proceed to the [First Launch](/versioned_docs/accessinformationcenter_11.6/access/informationcenter/admin/firstlaunch.md) topic for next steps.
