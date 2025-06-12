# Active Directory App for Splunk

The Netwrix Active Directory security monitoring solution enables organizations to efficiently monitor and prevent Active Directory changes, authentications, and attacks in real-time, without any reliance on native logging or security controls. Using the preconfigured Netwrix Active Directory App for Splunk, you can quickly understand all Active Directory changes as a whole, patterns of activity indicative of account compromise, and attempts to compromise security, along with the ability to block undesired changes and access.

Threat Prevention can be configured to monitor Active Directory events and send the monitored events to Splunk.

You can integrate Netwrix’ products with the Netwrix Active Directory App for Splunk.

- Install the Active Directory App for Splunk.
- Ensure that Threat Prevention has been configured to send events to Splunk. See the [SIEM Tab](/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/systemalerting/siem.md)topic for additional information.

## App Installation in Splunk

Download the [Stealthbits Active Directory App for Splunk](https://splunkbase.splunk.com/app/3433/) from the [Splunkbase](https://splunkbase.splunk.com/). Then follow the [Splunk Add-ons](http://docs.splunk.com/Documentation/AddOns/released/Overview/Installingadd-ons) guide provided by Splunk to install the app.

__NOTE:__ In order to use the User Behavior Analytics dashboard in the app, install [Splunk User Behavior Analytics](https://www.splunk.com/en_us/products/premium-solutions/user-behavior-analytics.html) (any version) and the [Machine Learning Toolkit](https://splunkbase.splunk.com/app/2890/) app for Splunk (version 2.0.0+).

The Netwrix Active Directory tab will appear in the Splunk web interface.

After installing the Netwrix Active Directory App for Splunk, configure it to receive data from Threat Prevention.

## Initial Configuration of the Active Directory App for Splunk

Follow the steps to configure Splunk to receive data from Threat Prevention.

_Remember,_ prior to using the Active Directory App for Splunk, the relevant Netwrix product must be configured to send data to Splunk.

__Step 1 –__ Determine the IP address of the Splunk console. If Splunk is hosted on a UNIX machine, run <ifconfig>. If Splunk is hosted on a Windows machine, run <ipconfig>. This IP address is required on the [SIEM Tab](/versioned_docs/threatprevention_7.4/threatprevention/admin/configuration/systemalerting/siem.md), where you configure Threat Prevention to send data to Splunk.

__Step 2 –__ Navigate to the Settings menu in the Splunk web interface and click Data Inputs.

__Step 3 –__ Select UDP.

__Step 4 –__ Click New and add a new data input with port 514. If another Splunk UDP input is already using 514, you should be able to safely use another value (515 or higher), as long as it is not blocked by the network.

__Step 5 –__ Click Next.

__Step 6 –__ Under Input Settings, enter the following information:

- Source Type – Threat Prevention
- App context – Select Search and Reporting
- Host – Select IP
- Index – Select Default

__Step 7 –__ Review and save the new settings.

__Step 8 –__ To test that the configuration is working correctly, check the Search and Reporting app inside of the web console for Splunk (search for Threat Prevention). There should be sample logs with KEY=%VALUE% pairs in the Event column. If there are no events, use a packet sniffer to ensure that packets are being sent correctly between the two hosts, and diagnose any possible network issues.

The Netwrix Active Directory App will now display activity from the Threat Prevention data.
