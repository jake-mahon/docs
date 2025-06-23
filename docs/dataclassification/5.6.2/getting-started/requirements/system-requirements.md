---
title: Requirements to Deploy Virtual Appliance
sidebar_label: System Requirements
description: This section provides the software requirements and represents the default hardware configuration for the virtual machine where Netwrix Data Classification...
---

# Requirements to Deploy Virtual Appliance

This section provides the software requirements and represents the default hardware configuration
for the virtual machine where Netwrix Data Classification virtual appliance is going to be deployed.

**NOTE:** The requirements below are sufficient for evaluation purposes only. See the
[Requirements to Install Netwrix Data Classification](/docs/dataclassification/5.6.2/getting-started/requirements/system-requirements.md)
topic for complete information on the requirements for installing Netwrix Data Classification in
production environments.

## Software Requirements

The table below lists the minimum software requirements for the virtual appliance deployment:

| Virtual Environment | Requirements                                                         |
| ------------------- | -------------------------------------------------------------------- |
| VMware              | - VMware server: ESXi 6.0, 6.5, 6.7, 7.0 - Workstation: 11 and 12    |
| Hyper-V Server      | - Windows Server 2019 - Windows Server 2016 - Windows Server 2012 R2 |

**NOTE:** Virtual appliance comes with a 180 day trial license of a Windows server. Upon its
expiration, you will need to apply your own Windows license.

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

# Hardware Requirements

Review the hardware requirements for the computer where Netwrix Data Classification will be
installed.

You can deploy Netwrix Data Classification on a virtual machine running Microsoft Windows guest OS
on the corresponding virtualization platform, in particular:

- VMware vSphere
- Microsoft Hyper-V
- Nutanix AHV

Note that Netwrix Data Classification supports only Windows OS versions listed in the
[Software Requirements](/docs/dataclassification/5.6.2/getting-started/requirements/system-requirements.md)
section.

## Netwrix Data Classification Server

The requirements in this section apply to a single Netwrix Data Classification server.

To deploy a server cluster, make sure all planned cluster nodes meet the requirements listed below.
Consider deploying 1 Netwrix Data Classification Server per approx. 16, 000, 000 objects to process.

See
[Deployment Planning](/docs/dataclassification/5.6.2/deployment/planning/deployment-overview.md)
and
[Configuring NDC Servers Cluster and Load Balancing with DQS Mode](/docs/dataclassification/5.6.2/deployment/planning/deployment-modes.md)
for more information.

| Hardware Component | 1 Server per 16 M objects      |
| ------------------ | ------------------------------ |
| Cores              | 8 Cores                        |
| RAM                | 32 GB                          |
| Hard disk          | UP TO 35% of all data in scope |
| Hard drive type    | SSD storage (recommended)      |

## SQL Server

Review the hardware requirements for the computer where Netwrix Data Classification SQL Database
will be deployed.

| Hardware Component | Up to 16 M objects                                                                                                                                                                                                                                                         | Up to 32 M objects and up to 8 M objects for SharePoint | Up to 64 M objects and up to 16 M objects for SharePoint |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------- |
| Processor          | 8 cores                                                                                                                                                                                                                                                                    | 8 cores                                                 | 8 cores                                                  |
| RAM                | 32 GB                                                                                                                                                                                                                                                                      | 64 GB                                                   | 128 GB                                                   |
| Hard disk          | Estimate required disk space assuming _10 - 12 KB_ per indexed object. For example, for _5, 000, 000_ objects, the database size will be approximately _50 GB_. See also [Deployment Planning](/docs/dataclassification/5.6.2/deployment/planning/deployment-overview.md). |                                                         |                                                          |
| Hard disk type     | SSD storage (recommended)                                                                                                                                                                                                                                                  |                                                         |                                                          |

## Network Access

| Specification  | Requirement                                                                                                                                                                              |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Network access | Ensure that your Netwrix Data Classification servers are available over the network on a HTTP compliant port from all machines where the client interface (management console) will run. |

# Requirements to Install Netwrix Data Classification

This section contains the hardware and software requirements and other prerequisites needed to
deploy Netwrix Data Classification.

- [Hardware Requirements](/docs/dataclassification/5.6.2/getting-started/requirements/system-requirements.md)
- [Software Requirements](/docs/dataclassification/5.6.2/getting-started/requirements/system-requirements.md)
- [Accounts and Required Permissions](/docs/dataclassification/5.6.2/getting-started/requirements/account-requirements.md)

# Software Requirements

The table below lists the software requirements for Netwrix Data Classification installation:

| Component        | Requirements                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- | --- | --- | --- | --- | --------------------- | --- | --- | -------------------- | -------------------------------------------------------------------- | --- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ----------------------- | ---------------------------------- | --- | -------------- | --- | --- | ----------------------- | -------------------------------- | --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| Operating system | Windows 2012 R2 and above Server Operating System Software.                                                                                                                                                                                                                                                                                                                      |
| Windows Features |                                                                                                                                                                                                                                                                                                                                                                                  |     |     |     | --- | --- |     | Web Server Role (IIS) |     |     | Common HTTP Features | - Default Document - HTTP Errors - Static Content - HTTP Redirection |     | Security | - Windows Authentication - Anonymous Authentication **NOTE:** The Anonymous Authentication element is included in the default installation of IIS 7. Make sure you use IIS 7 and above. |     | Application Development | - ISAPI Extensions - ISAPI Filters |     | Other features |     |     | .NET Framework Features | - .NET Framework 4.7.2 - ASP.NET |     | WCF Services | - HTTP Activation - Named Pipe Activation **NOTE:** To activate these features, select them under **.Net Framework Advanced Services** - **WCF Services** from **Windows Features**. |     |
| SQL Server       | - [SQL Server 2008 R2 Standard Edition](https://www.microsoft.com/en-us/download/details.aspx?id=26113) (or later). - SQL Server 2016 SP2 recommended (for better performance). **NOTE:** For large environments, SQL Server Enterprise edition may be needed; see needed. See [Deployment Planning](/docs/dataclassification/5.6.2/deployment/planning/deployment-overview.md). |
| Visual Studio    | - [Visual C++ Redistributable Packages for Visual Studio 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48145) and above.                                                                                                                                                                                                                                        |
| Other software   |                                                                                                                                                                                                                                                                                                                                                                                  |
| ---              | ---                                                                                                                                                                                                                                                                                                                                                                              |
| Antivirus        | Netwrix recommends adding NDC Index files to the list of exclusions (white list) of any installed antivirus. These files have _.CSE_ extension.                                                                                                                                                                                                                                  |
