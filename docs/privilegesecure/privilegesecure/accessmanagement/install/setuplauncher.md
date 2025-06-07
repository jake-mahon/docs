# Netwrix Setup Launcher

__CAUTION:__ The PostgreSQL database must be installed before installing the application. It can be installed separately or through the Netwrix Setup Launcher. Also note that the application will require a server reboot at the end of the installation.

The Netwrix Setup Launcher checks for and installs missing prerequisites in addition to installing the database and application.

![Netwrix Setup Launcher showing the Prequisites Setup with a green checkmark](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/install/launcherstep2.png)

___RECOMMENDED:___ Antivirus software should be disabled on this computer during the installation.

Right-click on the NPS\_Setup.exe file and select Run as administrator. The Netwrix Setup Launcher will open. The launcher runs a prerequisites setup check. The green checkmark indicates the prerequisites have been met and you are ready to install the database.

__CAUTION:__ The Advanced checkbox provides the option to switch databases to Microsoft SQLServer. This is not a recommended configuration and requires additional support from Netwrix.

## Install PostgreSQL Database

___RECOMMENDED:___ Antivirus software should be disabled on this computer during the installation.

Follow the steps to install the PostgreSQL database.

__Step 1 –__ In the Netwrix Setup Launcher, click __Install PostgreSQL 16__. The PostgeSQL v16 Setup wizard opens.

__NOTE:__ If PostgreSQL v16 is already installed, a green checkmark is displayed to the left of the Install PostgreSQL 16 button and you can install the Privilege Secure application.

![Stealthbits PostgreSQL v12 Setup Wizard on the Install page](/static/img/product_docs/threatprevention/threatprevention/install/upgrade/install.png)

__Step 2 –__ On the Install page, click __Install__.

![Stealthbits PostgreSQL v12 Setup Wizard on the License Agreement page](/static/img/product_docs/threatprevention/threatprevention/install/licenseagreement.png)

__Step 3 –__ On the End User License Agreement page, check the __I accept the license agreement__ box and click __Next__.

_Remember,_ it is a best practice to read the agreement before accepting it.

![Stealthbits PostgreSQL v12 Setup Wizard on the Install and Data Folder page](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/install/installfolder.png)

__Step 4 –__ The default installation location for both the Install Folder and the Data Folder is:

C:\Program Files\Stealthbits\Postgres16

- To change the default location, click __Browse__ and set a new location.
- When the location is set, click __Next__.

__NOTE:__ The installation process begins and the Setup wizard displays the its Progress. This may take a few moments.

![Stealthbits PostgreSQL v12 Setup Wizard on the Completed Successfully page](/static/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.png)

__Step 5 –__ When installation is complete, click __Exit__. The Stealthbits PostgeSQL v16 Setup wizard closes.

__NOTE:__ A reboot may be required.

The PostgreSQL database is successfully installed. It is time to install the application.

## Install Application

___RECOMMENDED:___ Antivirus software should be disabled on this computer during the installation.

Follow the steps to install Privilege Secure application.

![Netwrix Setup Launcher showing the PostgreSQL Setup with a green checkmark](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/install/launcherstep3.png)

__Step 1 –__ If you are using the Netwrix Setup Launcher, it displays a green checkmark for the PostgreSQL Setup. Click Netwrix Privilege Secure Setup.

__NOTE:__ This window remains open in the background while the database is installed.

![Netwrix Privilege Secure Setup wizard on the License Agreement page](/static/img/product_docs/threatprevention/threatprevention/install/licenseagreement.png)

__Step 2 –__ On the End User License Agreement page, check the __I agree to the license terms and conditions__ box and click __Options__.

_Remember,_ it is a best practice to read the agreement before accepting it.

![Netwrix Privilege Secure Setup wizard on the Setup Options page](/static/img/product_docs/privilegesecure/privilegesecure/accessmanagement/install/setupoptions.png)

__Step 3 –__ The default installation location for Install Folder is:

C:\Program Files\Stealthbits\PAM

- To change the default location, click __Browse__ and set a new location.
- When the location is set, click __OK__.

__Step 4 –__ You will return to the End User License Agreement page. Click __Install__.

__NOTE:__ The installation process begins and the wizard displays the its Progress. This may take a few moments.

![Netwrix Privilege Secure Setup wizard on the Completed Successfully page](/static/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.png)

__Step 5 –__ When installation is complete, click __Close__.

The installer displays a message that it is applying permissions. The application will require a server reboot at the end of the installation.

Once installation is complete, open and walk through the Netwrix Privilege Secure Setup Wizard. The Wizard can be accessed through the Netwrix Privilege Secure desktop icon or locally on the default port. See the [First Launch](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/install/firstlaunch.md) topic for additional information.
