# Policy Templates: Network Port Tracker

The __Network Port Tracker__ is designed to detect track changes to the open network ports on either a single device, or a range/group of devices. The Tracker uses a range of network-scanning approaches, either probing a device externally via the network to determine whether TCP and UDP ports are open or not, or using a local command on the device, such as ```netstat```. Remote, external scans are executed from a Netwrix Agent and utilizes an NMAP instance installed locally to the Agent.

This means that there are three scanning options available:

- __Self-Scan__ - Local Agent scans the local host using the local netstat. The same agent can run a full template including all other Tracker types.
- __Remote Scan__ – A remote Agent scans the host/device. In this mode, the remote device is configured as a Proxied device for the Agent being used, and therefore for other Trackers to be run against the Proxied Device, credentials will be required e.g. Cisco Firewall running config can also be tracked if valid credentials are assigned.
- __Network Scan__ – A Agent can be used to scan a range of devices. In this instance the ‘device’ is defined as ‘The Network’ or ‘New York Office LAN’, with the address range defined as ‘192.168.1.1-255, or 192.168.1.18 192.168.1.19 192.168.1.20-100’, i.e. individually specified addresses space separated, ranges defined using a -

The __NMAP__ package must be installed to a default program file location (Windows: Program Files(x86)\Nmap), Linux: /usr/bin/)

![PolicyTemplatesNetworkPortTrackerDiagram](../../../../../../static/img/product_docs/changetracker/changetracker/admin/settings/policytemplates/policytemplatesnetworkporttrackerdiagram.webp)

The __Network Port Tracker__ is configured by specifying port ranges to include and exclude from the scan. In addition, the protocol used for each range can also be selected, either TCP, UDP or both.

__NOTE:__ As with any UDP scan, the non-acknowledged nature of UDP requires a more intensive, slower approach which may result in scan times exceeding 24 hours.

![PolicyTemplatesNetworkPortTrackerTab](../../../../../../static/img/product_docs/changetracker/changetracker/admin/settings/policytemplates/policytemplatesnetworkporttrackertab.webp)
