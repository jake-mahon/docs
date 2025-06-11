# Import Virtual Machine from Image to VMware

Follow the steps to import Virtual Machine from Image to VMware.

__Step 1 –__ Connect to your vSphere infrastructure using vSphere Web client, right-click the object you need (datacenter, ESXi host, VM folder or resource pool) and select __Deploy OVF Template__.

__NOTE:__ If you are running VMware 6.0, connect to vSphere using the on-premises vSphere client and select __File____>____Deploy OVF Template__.

__Step 2 –__ Follow the instructions in the table below:

| Step | Description |
| --- | --- |
| Source | Browse for the folder that contains the Netwrix Data Classification virtual appliance template. |
| OVF Template Details | Review information on this template. |
| Name and Location | Select a name for the new virtual machine if you do not want to use the default name "Netwrix Data Classification".  The name must be unique within the inventory folder and may contain up to 80 characters including spaces. |
| Resource Pool | Select a resource pool to deploy Netwrix Data Classification virtual appliance. |
| Storage | Select destination storage. |
| Disk Format | Netwrix recommends to select the Thin Provision option to save your disk space. |
| Network Mapping | If you have multiple networks on your ESXi Server, select the Destination network for a new virtual machine. |
| Ready to Complete | Review your virtual machine settings. Click Finish to exit the wizard. |

__Step 3 –__ Select the newly created virtual machine and click Power On.
