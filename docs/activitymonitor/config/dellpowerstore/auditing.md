# Enable Auditing for Dell PowerStore

Follow the steps to enable auditing on Dell PowerStore.

- [Create an Event Publishing Pool](#Create-an-Event-Publishing-Pool)
- [Create an Event Publisher](#Create-an-Event-Publisher)
- [Enable Event Publishing for the NAS Server](#Enable-Event-Publishing-for-the-NAS-Server) OR [Enable or Disable Event Publishing for File System](#Enable-or-Disable-Event-Publishing-for-File-System)

See the [Dell PowerStore - File Capabilities](https://www.delltechnologies.com/asset/en-us/products/storage/industry-market/h18155-dell-powerstore-file-capabilities.pdf) white paper for additional information.

## Create an Event Publishing Pool

Follow the steps tTo create a new event publishing pool.:

__Step 1 –__ Select __Storage__ > __NAS Servers__ > __NAS Settings__ > __Publishing Pools__.

__Step 2 –__ Click __Create__ and specify the name of the pool.

__Step 3 –__ Specify CEE's address or addresses.

![Create Event Publishing Pool](/img/product_docs/activitymonitor/config/dellpowerstore/eventpublishingpool.webp)

- For SMB shares monitoring (CIFS) enable following Post-Events: –

  - CloseModified
  - CloseUnmodified
  - CreateDir
  - CreateFile
  - DeleteDir
  - DeleteFile
  - OpenFileNoAccess
  - RenameDir
  - RenameFile
  - SetAclDir
  - SetAclFile
- For NFS exports monitoring enable following Post-Events: –

  - CloseModified,
  - CloseUnmodified
  - CreateDir
  - CreateFile
  - DeleteDir
  - DeleteFile
  - FileRead
  - FileWrite
  - OpenFileNoAccess
  - RenameDir
  - RenameFile
  - SetAclDir
  - SetAclFile
  - SetSecDir
  - SetSecFile

__Step 4 –__ Click __Apply__.

## Create an Event Publisher

Follow the steps tTo create a an event publisher.:

__Step 1 –__ Select __Storage__ > __NAS Servers__ > __NAS Settings__ > __Events Publishers__.

![Events Publishing](/img/product_docs/activitymonitor/config/dellpowerstore/nasservers.webp)

__Step 2 –__ 
Click __Create__.

![publishingpools](/img/product_docs/activitymonitor/config/dellpowerstore/publishingpools.webp)

__Step 3 –__ Specify the name of the publisher.

__Step 4 –__ 
Select the pool and click __Next__.

![configeventpublisher](/img/product_docs/activitymonitor/config/dellpowerstore/configeventpublisher.webp)

__Step 5 –__ Specify Pre-Events Failure Policy as "Ignore - Consider pre-event acknowledged when CEPA servers are offline".

__Step 6 –__ Specify Post-Events Failure Policy as "Accumulate - Continue and persist lost events in an internal circular buffer".

__Step 7 –__ Click __Create Events Publisher__.

The events publisher is created.

## Enable Event Publishing for the NAS Server

Follow the steps tTo enable or disable event publishing for the NAS Server.:

__Step 1 –__ Select __Storage__ > __NAS Servers__.

![NAS Servers](/img/product_docs/activitymonitor/config/dellpowerstore/nasserver.webp)

__Step 2 –__ Go to __[NAS SERVER]__ > __Security & Events__ > __Events Publishing__.

__Step 3 –__ Enable and select the publisher.

![nasserver1](/img/product_docs/activitymonitor/config/dellpowerstore/nasserver1.webp)

__Step 4 –__ You can enable the event publishing for all file systems on the NAS by checking the box and selecting protocols.

Dell PowerStore is enabled for auditing.

## Enable or Disable Event Publishing for File System

Follow the steps toYou can enable or disable the feature for each file system individually. using the following:

__Step 1 –__ Select __Storage__ > __File Systems__ > __[FILE SYSTEM]__ > __Security & Events__ > __Events Publishing__.

![Event Publising Option for File System](/img/product_docs/activitymonitor/config/dellpowerstore/fseventpublishing.webp)

__Step 2 –__ Enable and select protocols needed.

Dell PowerStore is enabled for auditing.
