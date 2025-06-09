# Install the RSAT Extension

The RSAT Extension is installed automatically on the machine where the Recovery Application Server and web console are installed. To use the RSAT Extension on a remote machine where Active Directory Users and Computers (ADUC) is installed, you have to manually install it using the RSAT installer. The installer is located in the following installation directory on the Recovery Application Server:

...Netwrix\Recovery for Active Directory\RSAT Extension\NetwrixRecovery\_RSAT\_Extension.msi

Follow the steps to install the RSAT Extension.

__Step 1 –__ Copy the ```NetwrixRecovery_RSAT_Extension.msi``` file to the machine where you want to install it.

__Step 2 –__ Run ```NetwrixRecovery_RSAT_Extension.msi``` . The RSAT Extension Setup wizard opens.

![RSAT Extension Installation Wizard - Welcome Page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.png)

__Step 3 –__ On the Welcome page, click __Next__.

![RSAT Extension Installation Wizard - License Agreement page](/img/product_docs/threatprevention/threatprevention/install/licenseagreement.png)

__Step 4 –__ On the End-User License Agreement page, read the End User License Agreement and check the __I accept the terms in the License Agreement__ box. Click __Next__.

![RSAT Extension Installation Wizard - Destination Folder page](/img/product_docs/activitymonitor/activitymonitor/install/destinationfolder.png)

__Step 5 –__ On the Destination Folder page, specify the file path to install the RSAT Extension. The default path is:

C:\Program Files\Netwrix\Recovery for Active Directory RSAT Extension\

Optionally, you can change the installation directory location for the RSAT Extension. Click __Change__ to open the Change destination folder page.

![RSAT Extension Setup Wizard - Change destination folder page](/img/product_docs/threatprevention/threatprevention/install/changedestinationfolder.png)

> - Use the Look in field to select the desired installation folder.
> - When the Folder name box is set as desired, click __OK__.

The wizard returns to the Destination Folder page. Click __Next__ to proceed.

![RSAT Extension Installation Wizard - Netwrix Recovery Server Connection page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/rsatextension/serverconnection.png)

__Step 6 –__ In the Server name field, enter the name or IP address of the Recovery Application Server, so the RSAT Extension identifies it in the environment.

__NOTE:__ 9001 is the default port. If a different port is specified on the Netwrix Recovery Server Configuration page of the Recovery for Active Directory Setup wizard while installing the application, then that specific port is applicable here.

Click __Next__.

![ready](/img/product_docs/activitymonitor/activitymonitor/install/ready.png)

__Step 7 –__  Click __Install__ to begin the installation process.

![RSAT Extension Installation Complete](/img/product_docs/threatprevention/threatprevention/install/reportingmodule/completed.png)

__Step 8 –__ The installation process begins and the Setup Wizard displays the Setup Progress. When installation is complete, click Finish to exit the wizard.

After installation has completed, open a new instance of ADUC and verify that the RSAT Extension has been successfully installed. Right-click on an object and ensure the __Rollback__ option has been added to the right-click menu. Also, a Recycle Bin node should be added to the root tree view.
