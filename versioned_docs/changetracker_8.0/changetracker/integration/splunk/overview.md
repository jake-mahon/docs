# Splunk

Splunk is used to store logs from devices, databases and applications. Capturing changes to device configuration, from logs in Splunk, provides a form of agentless monitoring with the ability to monitor devices that are not currently supported by Change Tracker. This means anything that can reliably log it's configuration changes to Splunk can be monitored by Change Tracker, including custom applications.

A fully customizable Search Processing Language (SPL) query, executed via the Splunk API, will return specific logs that are converted to change events in Change Tracker. From this point on, these change events will behave as if they were produced by a traditional agent.

Permissions required for the Splunk can be found in the Authentication and Authorization section of the Splunk Documentation page. See Splunk's [REST API User Manual](https://docs.splunk.com/Documentation/Splunk/9.3.2/RESTUM/RESTusing#REST-API-User-Manual) article for additional information on permissions.

## Configure Credentials

Follow the steps to configure Splunk credentials.

__Step 1 –__ From the Settings menu select __Credentials__ and scroll to the Splunk Credentials section.

![splunkcredentials](/img/versioned_docs/changetracker_8.0/changetracker/integration/splunk/splunkcredentials.png)

__Step 2 –__ Click the __Add__ button and enter the details of the Splunk instance to connect to.

__Step 3 –__ Click __Update__.

The Splunk credentials are updated.

## Policy Templates

Policy templates are used to configure what to monitor on the target devices. For Splunk a policy template that defines an SPL query is required. Splunk's SPL query language is similar to SQL in that it is very flexible when defining the data to query, how to filter it and what transformations are required like column aliases.

### Create an SPL Query

___RECOMMENDED:___ It is recommended to develop and test the SPL query in Splunk's Search page.

The query must return fields with the following aliases:

- device
- whomadethechange
- eventdate
- eventinfo

The value in the eventdate field must be formatted as YYYY-mm-ddTHH:MM:SS. The strftime function can be used to format date time fields accordingly: strftime(MyDateTimeField,"%Y-%m-%dT%H:%M:%S.%Q").

Any further fields added will be included in the body of the events when the reach Change Tracker. Sourcetype is an example of such a field in the test query below.

![splunksearch](/img/versioned_docs/changetracker_8.0/changetracker/integration/splunk/splunksearch.png)

Below is the test query used in this document. This query pulls internal Splunk data that any instance will have while meeting Change Tracker's requirements. The "head 50" clause at the end of the statement ensures that only 50 rows are returned.

```
search index=_internal event_message != ""  | rename host as device | eval  whomadethechange = "test-user" | eval eventdate=strftime(_time,"%Y-%m-%dT%H:%M:%S.%Q")  | rename event_message as eventinfo | table device whomadethechange eventinfo eventdate sourcetype | head 50
```

### Create the Policy Template

Follow the steps to create a policy template.

__Step 1 –__ From the Settings menu, select __Policy Templates__.

__Step 2 –__ Click __Actions__ and __Add a Blank Policy Template__.

![addsplunkpolicy](/img/versioned_docs/changetracker_8.0/changetracker/integration/splunk/addsplunkpolicy.png)

__Step 3 –__ Name it __Splunk__, set the Usage column to __Tracking__, and click __update__.

![tracking](/img/versioned_docs/changetracker_8.0/changetracker/integration/splunk/tracking.png)

__Step 4 –__ Click the __tracking__ button on the new Splunk policy and then scroll right to the Splunk Search Queries tab.

![splquery](/img/versioned_docs/changetracker_8.0/changetracker/integration/splunk/splquery.png)

__Step 5 –__ Click the __tick box__ to add a query and then click __Add a Splunk Query__.

![splqueryconfiguration](/img/versioned_docs/changetracker_8.0/changetracker/integration/splunk/splqueryconfiguration.png)

Paste the query, give it a description and click Update. The query will now be listed in the policy.

__NOTE:__ Ensure the desired polling frequency is set.

![templatecomplete](/img/versioned_docs/changetracker_8.0/changetracker/integration/splunk/templatecomplete.png)

### Devices and Groups

Follow the steps to add a group.

__Step 1 –__ From the Settings menu, select __Groups__ and click __Add__ to add a new group called Splunk Tracker.

__Step 2 –__ Select __Splunk Tracker__ in the group tree; then click the __Policy Templates__ tab and click __Add an Existing Template__.

__Step 3 –__ Add the Splunk policy template to the Splunk Tracker group.

![group2](/img/versioned_docs/changetracker_8.0/changetracker/integration/splunk/group2.png)

Any device in this group of the type Splunk will execute the Splunk tracking policy created above.

![group](/img/versioned_docs/groupid_11.0/groupid/configureentraid/register/group.png)

__Step 4 –__ Ensure the Splunk Tracker group is selected and click __Add__ to add a sub group to the Splunk Tracker group named Splunk devices. This group will hold the proxied devices that Splunk events will be matched to.

### Devices

To direct the SPL query in the Splunk tracking policy to the target instance of Splunk, a proxied device must be created with the connection details.

Follow the steps to manually create a proxied device to represent the target instance of Splunk.

![manualdevicecreation](/img/versioned_docs/changetracker_8.0/changetracker/integration/splunk/manualdevicecreation.png)

__Step 1 –__  Select a device to be a proxy device and click __Add Proxied Device__. The agent on the same machine as the Hub is often a good choice for the proxy if it can communicate with the Splunk instance.

__Step 2 –__ Name the proxy device __Splunk__.

__Step 3 –__ Enter the URL for the Splunk instance in the Host field.

__Step 4 –__ Set the device type to __Splunk__.

__Step 5 –__ Select the Splunk credentials.

__Step 6 –__ Add the Splunk Tracker group to the Groups field.

![addsplunkdevice](/img/versioned_docs/changetracker_8.0/changetracker/integration/splunk/addsplunkdevice.png)

__NOTE:__ Change events coming into Change Tracker (from Splunk or any agentless monitoring) must match a device in Change Tracker. Events without a matching device will be ignored

This isn't a problem with agent based monitoring as the agent registers it's device on first contact with the Hub. All types of agentless monitoring require devices to be created in Change Tracker.

Devices can be created manually or via device discovery. Device discovery is only available when the Sync Service is configured to integrate with ServiceNow. Both will result in proxied devices registered to a proxy device with an agent.

To discover devices to match change events from Splunk, see the [Configure Device Discovery](/versioned_docs/changetracker_8.0/changetracker/integration/itsm/syncserviceadmin.md#Configure-Device-Discovery) section in [Sync Service Administration](/versioned_docs/changetracker_8.0/changetracker/integration/itsm/syncserviceadmin.md) topic for additional information.

To manually create proxied devices, select a device to be a proxy device (the Hub's agent is often a good choice here) and click Add Proxied Device. Ensure the new devices are added to the Splunk Devices group.

If the logs collected are from a custom application it may be desirable to treat the application as a device in Change Tracker instead of it's individual servers. This way change events would belong to the application and not to individual servers. This could be done by manually creating a proxied device named after the application and then ensuring the SPL query uses the same application name for it's Device column.

## Events

If everything has been configured correctly and communication with the Splunk instance is possible, Splunk logs should start arriving as events.

![splunkevents](/img/versioned_docs/changetracker_8.0/changetracker/integration/splunk/splunkevents.png)

In the body of a Splunk event it's possible to see the required firled from the SPL query. Any field in the results other than the required fields is added to the additional info section at the bottom of the event body. This flexible field can list multiple non required fields from the SPL query. This enables full control of what is logged into the events.

![splunkeventbody](/img/versioned_docs/changetracker_8.0/changetracker/integration/splunk/splunkeventbody.png)

Manual runs of the tracking policy can be executed from the Splunk device by clicking Start Tracker Poll.

![starttrackerpoll](/img/versioned_docs/changetracker_8.0/changetracker/integration/splunk/starttrackerpoll.png)
