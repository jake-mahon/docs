# Requirements to Deploy Virtual Appliance

This section provides the software requirements and represents the default hardware configuration
for the virtual machine where Netwrix Data Classification virtual appliance is going to be deployed.
Refer to the following sections for detailed information:

- Software Requirements
- Hardware Configuration

**NOTE:** The requirements below are sufficient for evaluation purposes only. Refer to the
[Requirements to Install Netwrix Data Classification](../requirements/overview.md) topic for
complete information on the requirements for installing Netwrix Data Classification in production
environments.

## Software Requirements

The table below lists the minimum software requirements for the virtual appliance deployment:

| Virtual Environment | Requirements                                                         |
| ------------------- | -------------------------------------------------------------------- |
| VMware              | - VMware server: ESXi 6.0, 6.5, 6.7, 7.0 - Workstation: 11 and 12    |
| Hyper-V Server      | - Windows server 2019 - Windows Server 2016 - Windows Server 2012 R2 |

## Hardware Configuration

When deploying Netwrix Data Classification virtual appliance, a pre-configured virtual machine is
created. The table below contains the default hardware configuration of the VM where Netwrix Data
Classification virtual appliance is going to be deployed:

| Parameter          | Value                                              |
| ------------------ | -------------------------------------------------- |
| Common             |                                                    |
| Processor          | 4 cores                                            |
| RAM                | 16 GB                                              |
| HDD                | 1 TB                                               |
| VMware only        |                                                    |
| Total Video Memory | 16 MB                                              |
| Network adapter    | vmxnet3                                            |
| Other              | Check and upgrade VMware Tools during power cycle. |
