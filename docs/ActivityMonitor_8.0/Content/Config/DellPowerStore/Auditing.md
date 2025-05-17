---
sidebar_position: 2753
title: Enable Auditing for Dell PowerStore
---

# Enable Auditing for Dell PowerStore

Follow the steps to enable auditing on Dell PowerStore.

* [Create an Event Publishing Pool](#Create "Create Event Publishing Pool")
* [Create an Event Publisher](#Create2 "Create an Event Publisher")
* [Enable Event Publishing for the NAS Server](#Enable "Enable Event Publishing for NAS Server") OR [Enable or Disable Event Publishing for File System](#Enable2 "Enable or Disable Event Publishing for File System")

See the [Dell PowerStore - File Capabilities](https://www.delltechnologies.com/asset/en-us/products/storage/industry-market/h18155-dell-powerstore-file-capabilities.pdf "Dell PowerStore - File Capabilities") white paper for additional information.

## Create an Event Publishing Pool

Follow the steps tTo create a new event publishing pool.:

**Step 1 –** Select **Storage** > **NAS Servers** > **NAS Settings** > **Publishing Pools**.

**Step 2 –** Click **Create** and specify the name of the pool.

**Step 3 –** Specify CEE's address or addresses.

![Create Event Publishing Pool](../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/Config/Dell/PowerScale/EventPublishingPool.png "Create Event Publishing Pool")

* For SMB shares monitoring (CIFS) enable following Post-Events: –

  * CloseModified
  * CloseUnmodified
  * CreateDir
  * CreateFile
  * DeleteDir
  * DeleteFile
  * OpenFileNoAccess
  * RenameDir
  * RenameFile
  * SetAclDir
  * SetAclFile
* For NFS exports monitoring enable following Post-Events: –

  * CloseModified,
  * CloseUnmodified
  * CreateDir
  * CreateFile
  * DeleteDir
  * DeleteFile
  * FileRead
  * FileWrite
  * OpenFileNoAccess
  * RenameDir
  * RenameFile
  * SetAclDir
  * SetAclFile
  * SetSecDir
  * SetSecFile

**Step 4 –** Click **Apply**.

## Create an Event Publisher

Follow the steps tTo create a an event publisher.:

**Step 1 –** Select **Storage** > **NAS Servers** > **NAS Settings** > **Events Publishers**.

![Events Publishing](../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/Config/Dell/PowerScale/NASServers.png "Events Publishing")

**Step 2 –** 
Click **Create**.

![](../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/Config/Dell/PowerScale/PublishingPools.png)

**Step 3 –** Specify the name of the publisher.

**Step 4 –** 
Select the pool and click **Next**.

![](../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/Config/Dell/PowerScale/ConfigEventPublisher.png)

**Step 5 –** Specify Pre-Events Failure Policy as "Ignore - Consider pre-event acknowledged when CEPA servers are offline".

**Step 6 –** Specify Post-Events Failure Policy as "Accumulate - Continue and persist lost events in an internal circular buffer".

**Step 7 –** Click **Create Events Publisher**.

The events publisher is created.

## Enable Event Publishing for the NAS Server

Follow the steps tTo enable or disable event publishing for the NAS Server.:

**Step 1 –** Select **Storage** > **NAS Servers**.

![NAS Servers](../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/Config/Dell/PowerScale/NASServer.png "NAS Servers")

**Step 2 –** Go to **[NAS SERVER]** > **Security & Events** > **Events Publishing**.

**Step 3 –** Enable and select the publisher.

![](../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/Config/Dell/PowerScale/NASServer1.png)

**Step 4 –** You can enable the event publishing for all file systems on the NAS by checking the box and selecting protocols.

Dell PowerStore is enabled for auditing.

## Enable or Disable Event Publishing for File System

Follow the steps toYou can enable or disable the feature for each file system individually. using the following:

**Step 1 –** Select **Storage** > **File Systems** > **[FILE SYSTEM]** > **Security & Events** > **Events Publishing**.

![Event Publising Option for File System](../../../../../static/images/ActivityMonitor_8.0/Content/Resources/Images/Config/Dell/PowerScale/FSEventPublishing.png "Event Publising Option for File System")

**Step 2 –** Enable and select protocols needed.

Dell PowerStore is enabled for auditing.