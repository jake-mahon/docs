# Requirements

This section lists software requirements and describes default hardware configuration needed for the
virtual machine where the Netwrix Privilege Secure virtual appliance will be deployed. Refer to the
following sections for detailed information:

- [Software Requirements](#software-requirements)
- [Virtual Hardware Configuration](#virtual-hardware-configuration)

**NOTE:** The requirements below are sufficient for evaluation purposes only. For production
deployment, see the Privilege Secure
[Application Server Requirements](/docs/privilegesecure/4.1/accessmanagement/requirements/applicationserver.md)
topic for additional information.

## Software Requirements

The table below lists minimum software requirements for the virtual appliance deployment:

| Virtual Environment | Requirements                                                                                                                       |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| VMware              | - VMware server: ESXi 6.7, 6.5, 6.0 - VMware workstation: 11 and 12                                                                |
| Hyper-V Server      | - Microsoft Windows Server 2022 - Microsoft Windows Server 2019 - Microsoft Windows Server 2016 - Microsoft Windows Server 2012 R2 |

## Virtual Hardware Configuration

When deploying the Netwrix Privilege Secure virtual appliance, a pre-configured virtual machine is
created. Default hardware configuration of the VM where the virtual appliance will be deployed is as
follows:

| Parameter          | Value                                                               |
| ------------------ | ------------------------------------------------------------------- |
| **Common**         |                                                                     |
| Processor          | 4 Cores                                                             |
| RAM                | 16 GB RAM                                                           |
| HDD                | 100 GB                                                              |
| **VMware only**    |                                                                     |
| Total Video Memory | 16 MB                                                               |
| Network adapter    | vmxnet3                                                             |
| Other              | VMware Tools will be checked automatically and updated if necessary |
