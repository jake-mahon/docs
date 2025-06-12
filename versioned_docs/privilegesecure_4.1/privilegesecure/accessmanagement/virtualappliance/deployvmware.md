# Deploy to VMware Infrastructure

Follow the steps below to deploy the virtual machine to VMware infrastructure.

__Step 1 –__ Copy the filePrivilege Secure__.ova__ on the computer where your VSphere Client is installed.

__Step 2 –__ Connect to your vSphere infrastructure using vSphere Web Client, right-click the object you need (datacenter, ESXi host, VM folder or resource pool) and select __Deploy OVF Template__.

__Step 3 –__ Follow the instructions in the table below:

| Step | Description |
| --- | --- |
| Source | Browse for the folder that contains the Netwrix Privilege Secure virtual appliance template. |
| OVF Template Details | Review template details. |
| Name and Location | If necessary, specify a name for the new virtual machine; default is "Privilege Secure".  Consider the following:   - The name must be unique within the inventory folder. - It may contain up to 80 characters, including spaces. |
| Resource Pool | Select a resource pool to deploy the Netwrix Privilege Secure virtual appliance. |
| Storage | Select a destination storage. |
| Disk Format | It is recommended to select __Thin Provision__ — to save the disk space. |
| Network Mapping | If you have multiple networks on your ESXi Server, select the __Destination__ network for a new virtual machine. |
| Ready to Complete | Review your virtual machine settings.  Click __Finish__ to exit the wizard. |

__Step 4 –__ Select the newly created virtual machine and click __Power On__.
