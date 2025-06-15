# Netwrix Auditor Integration

The integration between Netwrix Change Tracker and Netwrix Auditor allows for any event which Change
Tracker collects to be forwarded to Auditor. The type of event forwarded is controlled by the Change
Tracker notification profile.

![usernotifications_1122x481](/img/versioned_docs/changetracker_8.0/changetracker/integration/netwrixproducts/usernotifications_1122x481.png)

In this example notification profile, unplanned changes for systems in the Windows 2019 Auditor
group and compliance reports which are run against the Windows 2019 group will generate
notifications that will be pushed to Auditor.

Change events are pushed to Auditor via the it's API. Once in Auditor, these events can be mined
with the search functionality. Using the search option, information gathered by Change Tracker can
be used to create reports and alerts or it can be merged with data natively gathered by Auditor.

![auditorsearch_1117x430](/img/versioned_docs/changetracker_8.0/changetracker/integration/netwrixproducts/auditorsearch_1117x430.png)

This integration allows Auditor to gather information on the monitored environment that it would not
natively be able to collect. For example, monitoring the files of a website for change activity.

![auditoroperator_1115x182](/img/versioned_docs/changetracker_8.0/changetracker/integration/netwrixproducts/auditoroperator_1115x182.png)

Search criteria, like the one above, can be saved to generate reports or alerts.

![auditorsearchresults_1090x638](/img/versioned_docs/changetracker_8.0/changetracker/integration/netwrixproducts/auditorsearchresults_1090x638.png)
