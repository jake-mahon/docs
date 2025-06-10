# Network Scan

There are several steps required to configure and define a multi-device network scan.

![NetworkScan](/img/product_docs/changetracker/changetracker/admin/settings/policytemplates/networkscan.webp)

__Step 1 –__ Define The Network device. Select the agent from which you would like the scan to run, usually the Agent installed on the Hub server, but any remote Agent or Agents can be used to run scans to their local subnet, thereby simplifying routing/firewall rules.

![EditNetwork](/img/product_docs/changetracker/changetracker/admin/settings/policytemplates/editnetwork.webp)

- __Host/Database Name__ - Define the individual addresses and/or address range; use a space to separate multiple entries; use a 1-20 notation for an inclusive range.
- __Credentials__ - For a multiple device/address port scan range, no credentials are required so a simple __No-Connection-Required__ credential key is needed.

![EditNetworkCredentialName](/img/product_docs/changetracker/changetracker/admin/settings/policytemplates/editnetworkcredentialname.webp)

- __Credential Name__ - Create a ‘No-Connection-Required’ credential key – a username and password will be required but these can be entered as dummy credentials.

__Step 2 –__ The __Network Port Tracker__ can then be scheduled to run like any other Tracker although due to the typically prolonged time needed to complete each scan, especially if UDP ports are included, we would advise that the Tracker is set to __Polling frequency: run at__ ‘agent startup’ and repeat ‘No repeat’.

![page_guide_53](/img/product_docs/changetracker/changetracker/admin/settings/policytemplates/page_guide_53.webp)

__Step 3 –__ Once the initial poll has completed the duration will be required as a communications Event.

![page_guide_54](/img/product_docs/changetracker/changetracker/admin/settings/policytemplates/page_guide_54.webp)

__Step 4 –__ Provided you have specified within the Tracker template to __Send Baseline Events__ then you will also be able to see both the full baseline/status for the Tracker results, as well as the usual change events. Similarly, you can also report on these, export the events, and receive alerts for any Planned and Unplanned changes.

![EventDetailsNetwork](/img/product_docs/changetracker/changetracker/admin/settings/policytemplates/eventdetailsnetwork.webp)
