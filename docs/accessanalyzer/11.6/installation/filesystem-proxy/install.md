---
title: Installation: install
sidebar_label: install
description: Installation guide for install including system requirements, setup procedures, and configuration options.
---

# File System Proxy as a Service Overview

The File System Solution can be enabled to use proxy servers for scanning targeted file systems in
very large or widely dispersed environments.

When File System scans are run in proxy mode as a service, there are two methods available for
deploying the service:

- Pre-Installed File System Proxy Service – File System Proxy Service installation package must be
  installed on the Windows proxy servers prior to executing the scans. This is the recommended
  method.
- Ad Hoc File System Proxy Service Deployment – File System Proxy Service is installed on the
  Windows proxy server when the job is executed

The data collection processing is conducted by the proxy server where the service is running and
leverages a local mode-type scan to each of the target hosts. The final step in data collection is
to compress and transfer the data collected in the SQLite databases, or Tier 2 databases, back to
the Enterprise Auditor Console server.

Communication between the Enterprise Auditor Console Server and the proxy server is secure by
default using HTTPS requests.

The version of the proxy service must match the major version of Enterprise Auditor.

See the
[File System Solution](/docs/accessanalyzer/11.6/getting-started/requirements/solutions-requirements.md)
topic for information on the required prerequisites.

## Supported Platforms

The File System Proxy Service for the Enterprise Auditor File System Solution can be installed on
the following Windows operating systems:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

## Proxy Scanning Architecture

Enterprise Auditor is configured by default to process data collection against ten target hosts
simultaneously. When File System scans are run in local mode ten hosts process simultaneously, and
processing against the eleventh host begins after the processing against the first host is
completed. Proxy scanning architecture supports large deployments or widely dispersed environments.

A proxy server is any server that can be leveraged to process data collection against target hosts.

**CAUTION:** The File System Proxy Service cannot be installed on the same server as Enterprise
Auditor.

Two options are available for implementing the proxy scanning architecture:

- Proxy mode with applet
- Proxy mode as a service

### Proxy Mode with Applet

When File System scans are run in proxy mode with applet, it means the File System applet is
deployed to the Windows proxy server when the job is executed to conduct data collection. The data
collection processing is initiated by the proxy server where the applet is deployed and leverages a
local mode-type scan to each of the target hosts. The final step in data collection is to compress
and transfer the data collected in the SQLite databases, or Tier 2 databases, back to the Enterprise
Auditor Console server.

![Diagram of Enterprise Auditor server sending an FSAA applet to a proxy server](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/filesystemproxy/proxymodewithapplet.webp)

The diagram illustrates the Enterprise Auditor server sending an FSAA applet to a proxy server,
which runs the scan against a file server, and then returns data to the Enterprise Auditor server.

### Proxy Mode as a Service

When File System scans are run in proxy mode as a service, there are two methods available for
deploying the service:

- Pre-Installed File System Proxy Service – File System Proxy Service installation package must be
  installed on the Windows proxy servers prior to executing the scans. This is the recommended
  method.
- Ad Hoc File System Proxy Service Deployment – File System Proxy Service is installed on the
  Windows proxy server when the job is executed

The data collection processing is conducted by the proxy server where the service is running and
leverages a local mode-type scan to each of the target hosts. The final step in data collection is
to compress and transfer the data collected in the SQLite databases, or Tier 2 databases, back to
the Enterprise Auditor Console server.

The proxy communication is configured during the installation of the service on the proxy server and
certificate exchange options are configured via the Applet Settings page of the File System Access
Auditing Data Collector Wizard. The credential provided for the secure communications in the
installation wizard is also added to the Enterprise Auditor Connection Profile assigned to the File
System Solution.

See the
[File System Proxy Service Installation](/docs/accessanalyzer/11.6/installation/filesystem-proxy/install.md)
topic for additional information.

![Diagram of Enterprise Auditor server communicating securely with the proxy service on a proxy server](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/filesystemproxy/proxymodeasservicewithsecurerpc.webp)

The diagram illustrates the Enterprise Auditor server communicating securely with the proxy service
on a proxy server, which runs the scan against a file server, collecting the data locally and
securely. Then the proxy service returns data securely to the Enterprise Auditor server.

When a proxy mode scan is initiated from the Enterprise Auditor Console, it will distribute hosts to
be scanned across all proxy hosts. Enterprise Auditor monitors the scans from the central console.
Once all proxy hosts have completed scanning, all results and SQLite databases are returned to the
Enterprise Auditor Console server.

![Diagram of difference between an implementation with and without proxy servers](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/filesystemproxy/fsaaproxyarchitecture.webp)

The diagram shows the difference between an implementation of Enterprise Auditor without proxy
servers (on the left) and with proxy servers (on the right). On the right side of the diagram, the
scans have been configured to use the local host and two additional proxy servers to perform the
FSAA Data Collector scans. This allows it to execute three times as many concurrent hosts than would
be possible without proxy servers. This provides a clear benefit in scalability and scan times.

The proxy functionality for the FSAA Data Collector provides security and reliability.

_Remember,_ It is recommended that the File System Proxy Service is installed on the proxy server
before running File System scans in proxy mode as a service. Once installed, the FileSystemAccess
(FSAA) Data Collector must be configured to use the service. See the
[File System Data Collection Configuration for Proxy as a Service](/docs/accessanalyzer/11.6/installation/filesystem-proxy/configure.md)
topic for additional information.

## Sensitive Data Discovery Auditing Consideration

Sensitive Data Discovery Auditing scans also require the Sensitive Data Add-on – FSAA & SPAA
Agentless (or x86) version of the Sensitive Data Discovery Add-On be installed on the proxy server.
This requirement is in addition to having the Sensitive Data Discovery Add-on installed on the
Enterprise Auditor Console server. See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/installation/sensitive-data-discovery/install.md)
topic for additional information.

**NOTE:** If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the
minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. By
default, SDD scans are configured to run two concurrent threads. For example, if the job is
configured to scan 8 hosts at a time with two concurrent SDD threads, then an extra 32 GB of RAM are
required (8x2x2=32).

# File System Proxy Service Installation

The File System Proxy installer is designed to simplify the process of setting up File System
Scanning Proxy as a service on the designated proxy server. It is a best practice to use a
specifically provisioned domain account as the File System Proxy service account. Follow the steps
to install the FSAA service on the targeted proxy servers.

**Step 1 –** Run the `FileSystemProxy.exe` executable. The Netwrix Enterprise Auditor File System
Scanning Proxy Setup wizard opens.

![File System Proxy Setup Wizard Welcome page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/welcome.webp)

**Step 2 –** On the Welcome page, click **Next** to begin the installation.

![File System Proxy Setup Wizard End-User License Agreement page](/img/versioned_docs/changetracker_8.0/changetracker/install/eula.webp)

**Step 3 –** On the End-User License Agreement page, select the **I accept the terms in the License
Agreement** checkbox and click **Next**.

![File System Proxy Setup Wizard Destination Folder page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/filesystemproxy/destination.webp)

**Step 4 –** On the Destination Folder page, click **Next** to install to the default folder or
click **Change** to select a different location. Clicking **Change** opens the Change destination
folder page.

![File System Proxy Setup Wizard Change destination folder page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/agent/changedestination.webp)

On the Change destination folder page, choose a different destination folder for the installation.

- Look in – Select which folder or sub-folder to complete installation in using the Look in
  drop-down
- Up one level – Click the Up one level button to select the folder one level above the currently
  selected one
- Create a new folder – Click to create a new folder for the destination of the installation

Click **OK** to save changes or click **Cancel** to return to the Destination Folder page without
saving.

![File System Proxy Setup Wizard Configure Service page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/filesystemproxy/configureservice.webp)

**Step 5 –** On the Configure Service page, configure the credential to run the service using the
radio buttons. Then, click **Next**.

- Run as LocalSystem – Uses the local system to run the File System Proxy service
- Run as a service account – Uses the provisioned credentials provided in the **User Name** and
  **Password** fields to run the File System Proxy service. Remember, this account must be a local
  Administrator on the proxy server and have the Log on as a service privilege in the proxy server's
  Local Security Policy.

![File System Proxy Setup Wizard Ready to install page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/ready.webp)

**Step 6 –** On the Ready to install page, click **Install** to start installation.

![File System Proxy Setup Wizard Completed page](/img/versioned_docs/activitymonitor_7.1/activitymonitor/install/complete.webp)

**Step 7 –** When the installation completes, click **Finish** to exit the wizard.

**NOTE:** If the File System Proxy Service is installed on multiple servers, then a custom host list
of proxy servers should also be created in Netwrix Enterprise Auditor.

Once the File System Proxy Service has been installed on any proxy server, it is necessary to
configure the File System Solution certificate exchange method for Proxy Mode as a Service. See the
[FSAA Applet Certificate Management Overview](/docs/accessanalyzer/11.6/data-collection/file-systems/configuration.md)
topic for additional information.

## Custom Parameters for File System Proxy Service

The port and priority parameters can be modified for the File System Proxy Service on the registry
key:

HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\StealthAUDITFSAA\ImagePath

- Port parameter – Only needs to be added to the registry key value if a custom port is used. The
  default port of 8766 does not need to be set as a parameter
  - Append `-e [PORT NUMBER]` to the ImagePath key value
- Priority parameter – Can be modified so that the service runs as a background priority, which may
  be desired if the service has been installed directly on a file server

  - Append `-r 0` to the ImagePath key value

  **NOTE:** If both parameters are added, there is no required order.

  **_RECOMMENDED:_** Stop the Netwrix Enterprise Auditor FSAA Proxy Scanner service before
  modifying the registry key.

Follow the steps to configure these service parameters.

![Netwrix Enterprise Auditor FSAA Proxy Scanner service in the Services Management Console](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/filesystemproxy/service.webp)

**Step 1 –** After installing the File System Proxy Service, open Services Management Console
(`services.msc`). To stop the service, right-click on the Netwrix Enterprise Auditor FSAA Proxy
Scanner service and select **Stop**.

![File System Proxy ImagePath registry key in the Registry Editor](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/filesystemproxy/regedit.webp)

**Step 2 –** Open Registry Editor (`regedit`) and navigate to the following registry key:

HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\StealthAUDITFSAA\ImagePath

**Step 3 –** Right-click on the **ImagePath** key and select **Modify**. The Value data was set
during installation according to the installation directory location selected.

- Priority set to background priority:
  - Add `-r 0` to the end of the path value
- Custom Port:

  - Add `-e [PORT NUMBER]` number to the end of the path value

    Example with Port number 1234:

    C:\Program Files (x86)\STEALTHbits\StealthAUDIT\FSAA\StealthAUDITRPC.EXEFSAASrv.DLL -e 1234

    **NOTE:** The port number needs to be added to the path only if a custom port is used.

**Step 4 –** Click **OK** and close Registry Editor.

**Step 5 –** Return to the Services Management Console and start the Netwrix Enterprise Auditor FSAA
Proxy Scanner service. Close the Services Management Console.

![Port number on File System Access Auditor Data Collector Wizard Applet Settings page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/install/filesystemproxy/dcwizardportnumber.webp)

**Step 6 –** In the Enterprise Auditor Console, navigate to the **FileSystem** > **0.Collection** >
**[Job]** > **Configure** > **Queries** node and open the File System Access Auditor Data Collector
Wizard. On the Applet Settings wizard page, change the **Port number** to the custom port.

**NOTE:** See the
[File System Data Collection Configuration for Proxy as a Service](/docs/accessanalyzer/11.6/installation/filesystem-proxy/configure.md)
section for additional configurations required to run scans in proxy mode as a service.

**Step 7 –** Repeat the previous step for each of the **FileSystem** > **0.Collection** jobs to
employ this proxy service.

The custom port identified is now used for communication between the File System Proxy Service and
Enterprise Auditor.
