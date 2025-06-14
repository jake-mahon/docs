# VMware

VMware Tools support a variety of formats such as OVF, OVA, and VMX for deploying the Endpoint Protector Virtual Appliance. This section provides the necessary guidance to implement the solution using different virtualization tools available within the VMware suite.

## Implement Using OVF Format

Leverage the OVF format to efficiently deploy your Endpoint Protector Virtual Appliance across supported platforms.

### VMware vSphere

VMware vSphere allows you to deploy virtual appliances efficiently using the OVF format.

Follow the steps to set up your virtual machine.

__Step 1 –__ Unzip the downloaded package.

__Step 2 –__ Start vSphere.

![Using the VMware vShpere](/img/product_docs/endpointprotector/endpointprotector/install/startvsphere.png)

__Step 3 –__ Go to File and select __Deploy OVF Template__.

![Selecting Deploy OVF Template.](/img/product_docs/endpointprotector/endpointprotector/install/ovftemplate.png)

__Step 4 –__ Click __Browse__.

![Browsing the location of the tenplate](/img/product_docs/endpointprotector/endpointprotector/install/sourcelocation.png)

__Step 5 –__ Select the OVF ﬁle from the extracted zip ﬁle.

![Selecting the OVF ﬁle from the extracted zip ﬁle](/img/product_docs/endpointprotector/endpointprotector/install/selectovffile.png)

__Step 6 –__ Click __Next__.

![Selecting the Source Location](/img/product_docs/endpointprotector/endpointprotector/install/ofvsourceselect.png)

__Step 7 –__ Check the OVF Template Details and then click __Next__.

![Checking the OVF Template Details ](/img/product_docs/endpointprotector/endpointprotector/install/ovftemplatedetails.png)

__Step 8 –__ Specify the name of the OVF template and click __Next__.

![Specifying the name of the OVF template ](/img/product_docs/endpointprotector/endpointprotector/install/templatenaming.png)

__Step 9 –__ Select the Thin provision Disk Format option and click __Next__.

![Selecting the Thin provision Disk Format](/img/product_docs/endpointprotector/endpointprotector/install/diskformat.png)

__Step 10 –__ Click __Finish__ to complete the installation.

![Completing the installation](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/jobs/instantjobs/installationcomplete.png)

### VMware Workstation

VMware Workstation provides strong virtualization capabilities for deploying Endpoint Protector using the OVF format.

Follow the steps to get started with setting up your appliance.

__Step 1 –__ Extract the downloaded Endpoint Protector Virtual Appliance package and move the ﬁles to the path where your virtual machines are stored.

__Step 2 –__ Open VMWare Workstation.

![Opening VMWare Workstation](/img/product_docs/endpointprotector/endpointprotector/install/vmwareworkstation.png)

__Step 3 –__ Select __Open Existing VM__ or __Team__.

![ Opening Existing VM or Team](/img/product_docs/endpointprotector/endpointprotector/install/vmorteam.png)

__Step 4 –__ After the Virtual Appliance is in your inventory power on the Virtual Appliance.

![ Powering on the Virtual Appliance](/img/product_docs/endpointprotector/endpointprotector/install/poweron.png)

__Step 5 –__ If asked if the Virtual Machine was copied or moved, select __I moved it__ (if it is the only Endpoint Protector Virtual Appliance in your network).

![Select I moved it](/img/product_docs/endpointprotector/endpointprotector/install/vmwaremoved.jpg)

The Virtual Machine is started and ready for use.

## Implement Using VMX Format

Utilize the VMX format to integrate existing virtual machines into your VMware environment.

### VMware Server

In VMware Server environments, the VMX format facilitates the addition of existing virtual machines to your inventory. Follow the steps below to get started.

__Step 1 –__ Extract the downloaded Endpoint Protector Virtual Appliance package and move the ﬁles to the path where your virtual machines are stored.

__Step 2 –__ Open your VMware Server web interface and log in.

![Opening VMware Server web interface](/img/product_docs/endpointprotector/endpointprotector/install/vmwareserver.png)

__Step 3 –__ Select __Add Virtual Machine to inventory__.

![Adding Virtual Machine to inventory](/img/product_docs/endpointprotector/endpointprotector/install/vmwaretoinventory.png)

__Step 4 –__ Browse in the inventory for Endpoint Protector Virtual Appliance and select the __VMX ﬁle__ and click __OK__.

![Adding Existing Virtual Machine](/img/product_docs/endpointprotector/endpointprotector/install/addexistingvm.png)

At this point, the Virtual Machine is ready to be started.

### VMware Player

VMware Player supports legacy VMX formats, enabling straightforward virtual machine setup. Follow the steps below to get started on integrating your appliance.

__Step 1 –__ Extract the downloaded Endpoint Protector Virtual Appliance package and move the ﬁles to the path where your virtual machines are stored.

__Step 2 –__ Open VMware Player.

![Opening VMware Player](/img/product_docs/endpointprotector/endpointprotector/install/vmwareplayer.png)

__Step 3 –__ Select __Open a Virtual Machine__ and select the VMX ﬁle from the location where you extracted it and then click __Open__.

![Selecting the VMX ﬁle from the location where it was extracted](/img/product_docs/endpointprotector/endpointprotector/install/vmwareopenvm.png)

__Step 4 –__ After the Virtual Machine is in your inventory click __Play Virtual Machine__.

![Initiating VM Play on VMware Player](/img/product_docs/endpointprotector/endpointprotector/install/vmwareplaymachine.png)

__Step 5 –__ If asked if the Virtual Machine was copied or moved, select __I moved it__ (if it is the only Endpoint Protector Virtual Appliance in your network).

![Select I moved it](/img/product_docs/endpointprotector/endpointprotector/install/vmwaremoved.jpg)

At this point, the Virtual Machine is ready to be started.

__CAUTION:__ Do not suspend the VMware Player while Endpoint Protector Virtual Appliance is running.

__CAUTION:__ Do not shut down your computer while VMware Player is running.
