# Creating the Deployment GPO

To create the deployment Group Policy Objects (GPO), follow these steps:

__Step 1 –__ Open the Group Policy Management console, right-click Group Policy Objects and click New;

__Step 2 –__ Add Endpoint Protector 32 bit as the GPO name;

__Step 3 –__ Right-click the new GPO and click Edit;

![Creating the Deployment Group Policy Objects](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/configuration/activedirectory/gpoeditor.png)

__Step 4 –__ Expand Computer Configuration / Software Settings and right-click Software Installation, and then select New/Package;

__NOTE:__ When browsing the ‘msi’ file, ensure it is located in a folder shared over your network and accessible by the computers on your Active Directory.

![Configuring Deployment for Group Policy Objects](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/configuration/activedirectory/gpoconfiguration.png)

__Step 5 –__ Close the Group Policy Object Editor console and repeat this step for the Endpoint Protector 64-bit GPO.
