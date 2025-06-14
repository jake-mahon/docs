# Hyper-V

Hyper-V Tools utilize the VHD format for virtualization, ensuring seamless integration with Microsoft environments.

## Implementing Using Microsoft Hyper-V 2022

Follow the steps below to get started with your implementation.

__Step 1 –__ Extract the downloaded Endpoint Protector Virtual Appliance .zip package.

__Step 2 –__ Start Hyper-V Manager.

__Step 3 –__ From the panel on the right, select the __Import Virtual Machine__ option.

![hypervmanager](/img/product_docs/endpointprotector/endpointprotector/install/hypervmanager.png)

__Step 4 –__ Click __Next__.

__Step 5 –__ Browse and select the Endpoint Protector Virtual Appliance folder, containing.

- Snapshots
- Virtual Hard Disks
- Virtual Machines

![Virtual Appliance folder](/img/product_docs/endpointprotector/endpointprotector/install/appliancefolder.png)

![Specifying the Folder containg the VM import](/img/product_docs/endpointprotector/endpointprotector/install/locatefolder.png)

__Step 6 –__ Click __Next__.

__Step 7 –__ On the Select Virtual Machine section, select the Endpoint Protector Virtual Appliance, then click __Next__.

![Selecting the Endpoint Protector Virtual Appliance](/img/product_docs/endpointprotector/endpointprotector/install/selectvirtualmachine.png)

__Step 8 –__ On the Choose Import Type section, select the __Copy the virtual machine (create a new unique ID) option__. Click __Next__.

![Choosing Import Type](/img/product_docs/endpointprotector/endpointprotector/install/importtype.png)

__Step 9 –__ In the 'Choose Folders for Virtual Machine Files' section, select __Store the virtual machine in a different location__, then specify the desired paths in the three input fields. Click __Next__ to proceed.

![ Choosing Folders for Virtual Machine Files ](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/install/filesystemproxy/destination.png)

__Step 10 –__ On the Choose Folders to Store Virtual Hard Disks section, set the desired path for storing imported virtual hard disk. Click __Next__.

![ Setting the desired path for storing the  imported virtual hard disk](/img/product_docs/endpointprotector/endpointprotector/install/storagefolders.png)

__CAUTION:__ If you get to the Get Memory step, it means you have insuﬃcient memory on the Hyper-V Host. Please abort the process here and either increase memory on the Host or choose another Host to import the Endpoint Protector Virtual Appliance on.

![Insuﬃcient memory on the Hyper-V Host](/img/product_docs/endpointprotector/endpointprotector/install/configurememory.png)

__Step 11 –__ On the ﬁrst Connect Network step, please mention the virtual switch you want to use for the ﬁrst virtual network interface, changing it from ‘Not Connected’ to desired one. Click __Next__.

![Connect network settings](/img/product_docs/endpointprotector/endpointprotector/install/connectnetwork.png)

__Step 12 –__ On the second Connect Network step, please mention the virtual switch you want to use for the second virtual network interface. You may use the same one you have used at the previous step. Click __Next__.

![Connect network settings](/img/product_docs/endpointprotector/endpointprotector/install/networkconnect.png)

__Step 13 –__ On the Completing Import Wizard step, check that the settings are the ones wanted. Click __Finish__.

The new Virtual Machine will display in the Virtual Machines list.
