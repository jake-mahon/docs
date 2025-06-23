---
title: System Requirements and Architecture
sidebar_label: Requirements
description: Complete system requirements, client specifications, security exclusions, and architecture overview for Endpoint Protector deployment.
---

# Requirements

This document provides an in-depth overview of the Netwrix Endpoint Protector solution, designed for
large-scale deployments exceeding 5,000 endpoints. It addresses the solution scalability (back-end,
administration server, etc.) and not the specific endpoints it protects or the policies and settings
it can enforce.

Endpoint Protector with its different modules - consisting of Device Control, Content Aware
Protection, eDiscovery, and Enforced Encryption - applies its policies at the endpoint level. The
number of endpoints, their geographical distribution, network bandwidth, etc., impacts the Endpoint
Protector system requirements and will need to be addressed and planned for.

Deployed as a Virtual Appliance, Endpoint Protector works out of the box for approximately 1,000
endpoints. As a Hardware Appliance, different configurations are available, scaling up to 5,000
endpoints from a single appliance. All out-of-the-box versions of Endpoint Protector use MySQL as a
database.

# Client

The Endpoint Protector Client has one of the smallest footprints of any similar solution on the
market. The resources it consumes or the bandwidth it uses is insignificant. The processing power
consumed, and bandwidth used by the Client depends on the functions, settings, policies used, and
the endpoint’s hardware configuration. In an idle state, the base requirements are:

- CPU: At least 1 GHz dual-core CPU
- RAM: 30 MB
- Bandwidth: Less than 1 Kbs (Kilobit per second) when idle. This may increase depending on usage
  when sending logs or uploading shadow files.

**NOTE:** For Content Aware Protection and eDiscovery scanning, more CPU and RAM are required.

Below is a closer look at the resource consumption when all modules are enabled , function are
active, and policies are configured for a stress test:

| Module    | Device Control                                                            | Content Aware Protection                                                  | eDiscovery                                                                |
| --------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| CPU       | 1 GHz                                                                     | 1 GHz (in general) > 1 GHz (during scanning)                              | 1 GHz (in general) > 1 GHz (during scanning)                              |
| RAM       | 30 MB                                                                     | 30 MB (in general) > 30 MB (during scanning)                              | 30 MB (in general) > 30 MB (during scanning)                              |
| Bandwidth | < 1 Kbs (when idle) > 1 Kbs (when sending logs or uploading shadow files) | < 1 Kbs (when idle) > 1 Kbs (when sending logs or uploading shadow files) | < 1 Kbs (when idle) > 1 Kbs (when sending logs or uploading shadow files) |

## Security Exclusions

To maintain the optimal performance and stability of the Endpoint Protector Client, configure
security exclusions within third-party security software, such as antivirus, EDR, and HIPS
solutions. The Endpoint Protector Client is designed to be lightweight, but certain antivirus
programs may scan its files and processes intensively, which can impact performance.

### Importance of Exclusions

The Endpoint Protector Client logs data in small, frequent increments. Antivirus software may
attempt to scan each entry as it is written, which can lead to:

- Timeouts on larger files due to extended antivirus scanning.
- Increased RAM and CPU usage, as both Endpoint Protector and antivirus processes compete for system
  resources.
- Potential client stability issues, as well as reduced Deep Packet Inspection visibility and
  performance.

To prevent these conflicts and allow the Endpoint Protector Client to function without interference,
add exclusions for specific files, folders, and processes on Windows, macOS, and Linux, as outlined
below.

#### Recommended Exclusions for Windows

Service Level Exclusions

- CssDcFlt
- cssdlp20
- cssnwtap
- cssredir
- cssguard
- Endpoint Protector

Folder Level Exclusions

- C:\Program Files\CoSoSys\Endpoint Protector\\\*

  Alternative (for the folder-level exclusion above):

  - C:\Program Files\CoSoSys\Endpoint Protector\EPPservice.exe
  - C:\Program Files\CoSoSys\Endpoint Protector\sslsplit.exe
  - C:\Program Files\CoSoSys\Endpoint Protector\cssguard.exe
  - C:\Program Files\CoSoSys\Endpoint Protector\EPPNotifier.exe

- C:\Windows\System32\config\systemprofile\AppData\Local\CoSoSys\EPP\*

File Level Exclusions

- C:\ProgramFiles\CoSoSys\EndpointProtector\EPPservice.exe
- C:\ProgramFiles\CoSoSys\EndpointProtector\sslsplit.exe
- C:\ProgramFiles\CoSoSys\EndpointProtector\cssguard.exe
- C:\ProgramFiles\CoSoSys\EndpointProtector\EPPNotifier.exe

  Alternative (to the above file exclusions):

  - C:\ProgramFiles\CoSoSys\EndpointProtector\\\*

- C:\Windows\System32\drivers\cssdlp20.sys
- C:\Windows\System32\drivers\cssredir.sys
- C:\Windows\System32\drivers\cssdcflt.sys
- C:\Windows\System32\drivers\cssnwtap.sys
- C:\eppclient.log
- C:\eppsslsplit.log

Process Level Exclusions

- cssguard.exe
- EPPNotifier.exe
- EPPservice.exe

Registry Level Exclusions

- HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\CssDcFlt
- HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\cssdlp20
- HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\cssguard
- HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\cssnwtap
- HKEY_LOCAL_MACHINE\SYSTEM\ControlSet001\Services\cssredir

#### Recommended Exclusions for macOS

Folder Level Exclusions

- /Applications/EndpointProtectorClient.app/\*
- /private/etc/epp/\*
- /private/var/tmp/epp/\*

File Level Exclusions

- /Applications/EndpointProtectorClient.app/Contents/MacOS/EppClient
- /Applications/EndpointProtectorClient.app/Contents/MacOS/sslsplit
- /Applications/EndpointProtectorClient.app/Contents/MacOS/netdlp_setup
- /Applications/EndpointProtectorClient.app/Contents/Applications/EppNotifier.app/Contents
- /MacOS/EppNotifier
- /var/log/eppclient.log
- /var/log/eppsslsplit.log

Process Level Exclusions

- EppClient
- sslsplit
- netdlp_setup
- EppNotifier

#### Recommended Exclusions for Linux

Folder Level Exclusions

- /opt/cososys/\*
- /var/log/epp-client/\*

File Level Exclusions

- /opt/cososys/sbin/epp-client-daemon
- /opt/cososys/sbin/epp_sslsplit
- /opt/cososys/sbin/epp_netdlp_setup
- /opt/cososys/sbin/netdlp_scripts/linux_install_certicates.sh
- /opt/cososys/bin/epp-client
- /var/log/epp-client/epp_client_daemon.log
- /var/log/epp-client/eppsslsplit.log

Process Level Exclusions

- epp-client-daemon
- epp-client
- epp_sslsplit
- epp_netdlp_setup
- linux_install_certicates.sh

By applying these exclusions, you will allow the Endpoint Protector Client to operate smoothly
alongside other security products, ensuring both functionality and protection across endpoints.

# Main Components

Endpoint Protector is designed around several physical entities:

- Computers – The Windows, Mac, and Linux workstations that have the Endpoint Protector Client
  installed.
- Devices – The devices that are currently supported by Endpoint Protector (USB devices, digital
  photo cameras, USB memory cards, etc).
- Users – The user who will be handling the devices and the computers.

The Server side of Endpoint Protector has different parts working close together:

- Endpoint Protector Hardware or Virtual Appliance – containing Operating System, Database, etc.
- Web Service – communicating with the Endpoint Protector Clients and storing the information
  received from them.
- Endpoint Protector User Interface – managing the existing devices, computers, users, groups, and
  their behavior in the entire system.

The Client-side of Endpoint Protector has two different components:

- Endpoint Protector Client – enforcing the rights and settings received from the Server on Windows,
  Mac, and Linux computers; it also automatically deploys Enforced Encryption on the USB storage
  devices.
- Enforced Encryption Client – enforcing 256 AES encryption on USB storage devices as specified from
  the Server; it is a stand-alone application compatible with Windows and Mac computers.

![Main Components](/img/product_docs/endpointprotector/endpointprotector/requirements/maincomponents.webp)

## Architecture Overview

The diagram below illustrates the network architecture for the Endpoint Protector system. This setup
enables comprehensive Data Loss Prevention (DLP) across both local and remote users, securing
sensitive information and ensuring compliance with security policies.

![Architecture Overview](/img/product_docs/endpointprotector/endpointprotector/requirements/networkarchitecture.webp)

### Key Components and Data Flow

Endpoint Protector Server

This server is the core of Endpoint Protector, enforcing security policies and monitoring data flows
across the organization. It communicates with all endpoints to ensure compliance with data
protection rules and logs activity for auditing purposes.

MySQL Database

The Endpoint Protector server is integrated with a MySQL database that stores configuration data,
user activity logs, and incident reports. This allows for centralized data management, enabling
efficient policy enforcement and detailed reporting.

Firewall/Gateway Device

Acting as a security barrier, the firewall/gateway protects the network from external threats and
manages secure connections for remote users. It ensures that only authorized traffic reaches the
Endpoint Protector Server, safeguarding internal resources.

DLP Admin

The Data Loss Prevention (DLP) Admin manages the entire Endpoint Protector infrastructure. They
configure policies, monitor endpoint activity, and address potential data breaches. The admin uses
the server’s interface to adjust security rules and respond to incidents as they occur.

DLP Users (LAN and Remote):

- LAN Users – These internal users are connected to the organization’s Local Area Network (LAN), and
  their devices are monitored by the Endpoint Protector server to prevent unauthorized data
  transfers.
- Remote Users – Remote employees access the network through secure channels via the
  firewall/gateway. Their activities are also monitored by Endpoint Protector to ensure consistent
  enforcement of policies.
