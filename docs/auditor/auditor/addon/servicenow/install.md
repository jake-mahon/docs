# Install Add-On

After downloading the add-on package from Netwrix add-on store, copy it to the a computer where the Auditor Server resides. Unpack the ZIP archive to a folder of your choice; by default, it will be unpacked to the __Netwrix_Auditor_Add-on_for_ITSM__ folder.

The main component of the add- on is implemented as a service named Netwrix Auditor __ITSM Integration Service__. This service will run on the computer where the Auditor Server works, and will use the default Integration API port __9699__. Unless specified, the service will run under the __LocalSystem__ account.

To use the add-on, you should check the prerequisites and specify configuration settings, as described in the next sections. After that, run the installer that will apply settings and start the service. See the [Deploy the Service](deployment.md) topic for additional information.
