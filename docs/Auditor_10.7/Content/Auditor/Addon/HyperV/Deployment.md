---
sidebar_position: 1580
title: Deployment Scenarios
---

Filter: 

* All Files

Submit Search

# Deployment Scenarios

The add-on can be deployed on any computer in your environment. For example, you can run the add-on on the computer where Auditor is installed, or on a remote server. Also, consider different SCVMM deployment scenarios. Possible deployment options are as follows (here it is assumed that the add-on is installed together with Auditor server):

1. Add-on running on the same machine as SCVMM server (with Management Console):

![deployment_1](../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/Addon/HyperV/Diagram1Server.png "deployment_1")

2. Add-on and SCVMM server (with Management Console) running on different machines:

[![deployment_2](../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/Addon/HyperV/Diagram2Servers_thumb_0_0.png "deployment_2")](../../../Resources/Images/Auditor/Addon/HyperV/Diagram2Servers.png)

In this scenario, the account used to access SCVMM server must be a member of the *Remote Management Users* local group on the SCVMM server.

3. Add-on running on the same machine as SCVMM Management Console; SCVMM server running on the remote machine:

[![deployment_3](../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/Addon/HyperV/Diagram3Servers_thumb_0_0.png "deployment_3")](../../../Resources/Images/Auditor/Addon/HyperV/Diagram3Servers.png)

In this scenario, make sure to specify SCVMM server address in the **DataCollectionServer** parameter (not the machine where SCVMM console runs) in the **settings.xml** configuration file. See the [Add-On Parameters](Parameters "Add-On Parameters")topic for additional information.

Depending on the deployment scenario you choose, you will need to define a set of the add-on parameters. Several examples are provided below.

In the certain scenarios you may need to configure not all parameters but only some of them.

## Example 1

* The add-on runs on the Auditor server.
* The *System* account is used to launch the add-on via Task Scheduler (default configuration).
* Configuration parameters to specify in **settings.xml** (sample values):

`  
https://172.28.6.19:9699/netwrix/api/v1/activity_records`

``

``

Configuration parameters **NetwrixAuditorUserName** and **NetrixAuditorPassword** are not required.

## Example 2

* The add-on runs on the Auditor server with the explicitly specified user credentials.
* Configuration parameters to specify in **settings.xml** (sample values):

  `  
  https://172.28.6.19:9699/netwrix/api/v1/activity_records`

  `SecurityOfficer`  
  ``

  `NetwrixUser`  
  ``

## Example 3

* The add-on runs on the machine with SCVMM.
* The *System* account is used to launch the add-on via Task Scheduler (default configuration).
* Configuration parameters to specify in **settings.xml**:

``

``

``

Credentials for **Data Collection Server** (that is, SCVMM) are not required.

## Example 4

* SCVMM and/or Auditor run on the machines other than the add-on server.
* In this case, the corresponding set of credentials (for **Data Collection Server** and/or Netwrix Auditor) must be specified explicitly.
* Configuration parameters to specify in **settings.xml** (sample values):

  `https://172.28.6.19:9699/netwrix/api/v1/activity_records`

`SecurityOfficer`

`NetwrixUser`

`SCVMMServer`

`SCVMMAdmin`

`Password`