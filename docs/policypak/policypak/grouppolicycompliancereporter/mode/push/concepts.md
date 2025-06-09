# Push Mode Concepts

Once the designated server is licensed and the Endpoint Policy Manager GPCR client (admin console) can connect to it, you can choose to set up the clientless auditing feature. Auditing enables all licensed machines (endpoints) to push their Group Policy results data to a central server automatically, without anything being installed on them. This gives administrators the ability to query machines anytime because the last known Group Policy data is always up-to-date and on the server. See Figure 42 for a diagram of how Endpoint Policy Manager GPCR Server with push mode receives information from Endpoint Policy Manager GPCR endpoints.

![gpcr_server_with_push_mode_6](/img/product_docs/policypak/policypak/grouppolicycompliancereporter/mode/push/gpcr_server_with_push_mode_6.png)

Figure 42. Auditing with GPCR Server in push mode.

The process for receiving information is as follows:

__Step 1 –__ A GPO delivers a scheduled task to all endpoint machines.

__Step 2 –__ When Group Policy runs (triggers) on the endpoint, the endpoint runs the auditor EXE (PPGPCR.Auditor.exe) which lives on a file share.

__NOTE:__ This can be any server at all and not necessarily the same server running the Endpoint Policy Manager GPCR server.

__Step 3 –__ Data (the RSOP report) is generated on the client and processed for delivery.

__Step 4 –__ About one minute later, data is pushed from the Endpoint Policy Manager GPCR endpoint to the designated server.

Data is then stored in the database, where Endpoint Policy Manager GPCR clients (admin consoles) can see, in real time, the latest settings from across the network.

__NOTE:__  The server will only accept data from computers which are specifically enabled to do so via an Active Directory group. This will be discussed in more detail in the next section.
