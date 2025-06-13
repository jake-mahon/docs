# Devices and Computers

## Devices

From this section, you can view, sort, and export in Excel, PDF or CSV format any devices from the system. Use the Actions column to edit, manage rights, view device history and delete a speciﬁc device.

You can view the right for each device based on the color code from the Status column:

- Red indicates the device is blocked in the system
- Green indicates the device is allowed on computers or for users
- Yellow indicates the device is allowed for some users or computers with restrictions

__NOTE:__ Any new device connected to a protected computer is automatically added to the database and assigned to its ﬁrst user which can be changed later.

![View, sort, and export in Excel, PDF or CSV format any devices from the system](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/devices.png)

Click __Create__ to manually add a new device on the list by providing device information: name, friendly name, type PID, department, description, friendly description, VID, serial number and custom class.

Use __Choose action__ to export list of devices, schedule a list export, export or import in JSON format or refresh the device codes.

The __Export/Import Devices__ in JSON format feature allows you to manage device lists from one Endpoint Protector Server to another and aims to correlate the device rights and the Groups.

- If the same Groups exist on both Servers, the imported devices will also maintain the access rights
- If the Groups do not exist, the devices will still be imported but the access rights will be ignored

You can also import the devices directly from Active Directory.

__NOTE:__ For detailed information on Active Directory, refer to the [Directory Services](/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/overview.md) topic.

### Priority order

If you do not conﬁgure the devices, the rights are inherited from the default Global Rights that are set per Device Types (USB Storage Device, Digital Camera, iPod, Thunderbolt, Chip Card Device, etc.).

__NOTE:__ For detailed information, refer to the [Directory Services](/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/overview.md) topic.

If you conﬁgure device rights granularly for all entities, the priority order will be the following, starting with the highest:

![Priority order whech configuring device rights](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/priortyorder.png)

For example, If global rights indicate that no computer on the system has access to a speciﬁc device, and for one computer that device has been authorized, then that computer will have access to that device.

### Device Rights

To manage device rights for speciﬁc computers, groups, or users, select __Manage Rights__ from the Actions column.

![Manage device rights for speciﬁc computers, groups, or users](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/effectiverights.png)

![Managing device rights](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/devicerights.png)

After selecting a device and assigning rights to speciﬁc users, computers or groups follow these steps:

__Step 1 –__ Select the __Entity__ and the __Device__ right.

![Selecting the Entity and the Device right](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/entintydeviceright.png)

__Step 2 –__ Select the __Entities__ (Computers, Groups, or Users).

![Selecting the Entities (Computers, Groups, or Users)](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/entitiesrights.png)

### Device History

From this section, you can view the device history by selecting the View Device History action. This will display the Logs Report page ﬁltered for the respective device.

![ Logs Report page ﬁltered for the respective device](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/logsreport.png)

## Computers

From this section, you can ﬁlter, create, uninstall or delete a computer and use the Choose action option to create a Settings Report, Export List of Computers and Schedule Export list.

You can download the Settings Report from System Maintenance, the [Exported Entities](/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemmaintenance/overview.md#Exported-Entities) topic to view the Deep Packet Inspection status for each entity (Computer/User/Group) and the entity from which Deep Packet Inspection is used.

Any new computer that has the Endpoint Protector Client deployed will be automatically added to the database, thus making it manageable.

![Filter, create, uninstall or delete a computer ](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/computers.png)

The Endpoint Protector Client has a self-registration mechanism. This process is run once after the Client software is installed on a client computer. The Client will then communicate to the Server its existence in the system. The Server will store the information regarding the Computer in the database and it will assign a License.

__NOTE:__ The self-registration mechanism acts whenever a change in the Computer licensing module is made, and also each time the application Client is reinstalled. The owner of the computer is not saved in the process of self-registration.

For more details about Licensing, go to the [System Configuration](/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/overview.md#System-Configuration) topic.

A Computer is identiﬁed by the computer parameters (Main IP, IP List, MAC, Domain, Workgroup, Computer Serial Number or MachineUUID, OS version) but information like Name and Description is also essential.

By default, the computer is assigned to the ﬁrst user that handles the computer. This can later be changed and is updated automatically based on whoever logs into the computer.

__NOTE:__ Computer MachineUUID may not be taken for Virtual Machines due to System Limitations.

You can manually create a new computer at any time by providing the computer parameters and information mentioned above or import computers from Active Directory.

For more details about Active Directory, go to the [Directory Services](/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/directoryservices/overview.md) topic. You can also assign the computers to the following for a better organization:

- [Devices and Computers](#Devices-and-Computers) e.g., several computers within the same oﬃce
- [System Configuration](/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/systemconfiguration/overview.md#System-Configuration) an alternative organization to Groups

### Computer Rights

You can manage computer rights from the Actions column for a speciﬁc computer by selecting __Manage Rights__. This section is built around the computers, allowing you to specify which Device Types and Speciﬁc Devices can be accessible.

![Specifies which Device Types and Speciﬁc Devices can be accessible](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/computerrights.png)

The Standard device control rights include the Device Types and Already Existing Devices sections. These are generally the only device rights used.

In addition to the Standard device control rights, if enabled from the Global Settings, you can create fallback policies for Outside Network and Outside Hours circumstances.

For detailed information on Device Types and Speciﬁc Devices (Standard, Outside Network, and Outside Hours), refer to the [Devices and Computers](#Devices-and-Computers)topic.

__NOTE:__ Use Restore Global Rights to revert to a lower level of rights. Once enabled, all rights on that level will be set to preserve global settings and the system will use the next level of rights.

All Existing Devices that were added on that level will be deleted when the restore is used.

### Computer Settings

This section allows you to edit the settings for each computer.

Deﬁning custom settings for all computers is not necessary since a computer is perfectly capable of functioning correctly without any manual settings deﬁned.

It will do this by either inheriting the settings from the group it belongs to or, if not possible, the global settings, which are mandatory and exist in the system with default values from installation.

![Editing the settings for each computer](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/computersettings.png)

### Computer History

From this section, you can view the computer history by selecting the View Computer History action. This will display the Logs Report page ﬁltered for the respective computer.

![This will display the Logs Report page ﬁltered for the respective computer](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/logsreport.png)

### Terminal Servers and Thin Clients

The capability to control ﬁle transfers on RDP storage between Thin Clients and Windows Terminal Servers can be enforced through Endpoint Protector, as detailed below.

#### Initial Conﬁguration

The process starts with the menu view from Device Control > Computers, namely the action to Mark as Terminal Server ![Mark as Terminal Server Action](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/terminalserver_19x14.png) .

After you selected the computer in the system as a Terminal Server, “Yes” will be displayed for ease of identiﬁcation, as seen below:

![Displays List of computers](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/computers.png)

__NOTE:__ The computers that can be targeted by this action are strictly Windows Servers with Terminal Server roles properly conﬁgured

Make sure that there is at least one Terminal Server license available when the action Mark as Terminal Server is performed. If the Terminal Server is successfully marked, a new device type will appear when choosing to Edit it under Device Control, Computers, Computer Rights.

The settings for the Terminal Server-speciﬁc Device Types are: Preserve Global Settings, Allow Access, Deny Access, and Read-Only Access.

![ Preserves Global Settings, Allow Access, Deny Access, and Read-Only Access.](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/rdpstorage.png)

An Allow Access right set to the RDP Storage device type will enable all users that connect to the Terminal Server by RDP to transfer ﬁles to and from their local disk volume or shared storage devices such as USBs.

By contrast, a Deny Access right set to the RDP Storage will not allow any user that connects to the Terminal Server by RDP to transfer ﬁles to and from their local disk volume or shared storage devices such as USBs.

__NOTE:__ Enable __Use User Rights__ in the settings bar from System Conﬁguration, System Settings, Endpoint Rights Functionality for the rights policy to apply on user logins with user priority.

Secondly, the menu from Device Control > Users > Rights will present an additional device type for all the users in Endpoint Protector, namely Thin Client Storage (RDP Storage).

![Thin Client Storage (RDP Storage) device type](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/thinclientstorage.png)

Multiple users can be recognized as active users on any given Terminal Server, and so, the setting of this right can be used as a powerful tool to create access policies for speciﬁc users, as detailed in the use case below.

![Illustrate tool to create access policies for speciﬁc users](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/thingrouptools.png)

On a Windows Terminal Server, the Endpoint Protector Client will display RDP Storage disks shared by one or multiple Thin Clients as seen below.

![Client version displays RDP Storage disks shared by one or multiple Thin Clients](/img/versioned_docs/endpointprotector_5.9.4/endpointprotector/admin/devicecontrol/clientversiondc.png)
