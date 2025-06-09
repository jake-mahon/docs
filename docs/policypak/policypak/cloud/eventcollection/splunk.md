# Endpoint Policy Manager Cloud Event Forwarding to Splunk

Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud customers are entitled to have one day of Endpoint Policy Manager Least
Privilege Manager logs stored in Endpoint Policy Manager Cloud for free. If this is not
yet enabled for your Endpoint Policy Manager Cloud tenant, simply open a ticket to Endpoint Policy Manager Support.

If more than one day of storage is needed, Endpoint Policy Manager Cloud customers must pay a fee.

As an alternative, customers can use the Endpoint Policy Manager Cloud Event Forwarding to Splunk mechanism, which is free of charge. Follow these steps to configure this option.

__Step 1 –__ . Start out by logging into login.splunk.com and
get your URL. You will also need you Splunk Access Token ([https://docs.splunk.com/observability/en/admin/authentication-tokens/api-access-tokens.html](https://docs.splunk.com/observability/en/admin/authentication-tokens/api-access-tokens.html)
and
[https://docs.splunk.com/Documentation/Splunk/9.1.1/Security/Setupauthenticationwithtokens](https://docs.splunk.com/Documentation/Splunk/9.1.1/Security/Setupauthenticationwithtokens)
). You will need both the URL and API Token during these steps.

__NOTE:__  These directions will send data to Splunk Cloud, but the process is
similar to on-prem Splunk. Make sure your on-prem Splunk is configured
correctly to accept data sources from the Internet.

__Configure Event Forwarder in PP Cloud__

__Step 2 –__ 
Navigate to
[https://cloud.policypak.com/,](https://cloud.policypak.com/)
go to __Company details__ > __Event Forwarder
List__ > __Add Event Forwarder__
.

![976_1_1](/img/product_docs/policypak/policypak/cloud/eventcollection/976_1_1.png)

![976_3_3](/img/product_docs/policypak/policypak/cloud/eventcollection/976_3_3.png)

__Step 3 –__ 
Configure and save the new __Event Forwarder__. Please be aware that you must be a
__Notification Option Admin__' role member. One-time Password
is required for saving __Event Forwarder__ config for extra security.

You may may
usethe __Validate__ button to check the credentials before saving.

__Step 4 –__ Check the forwarding events state in the Collected Events report.

__Step 5 –__ InEndpoint Policy Manager Cloud confirm that events are forwarded as expected.

![976_2_2](/img/product_docs/policypak/policypak/cloud/eventcollection/976_2_2.png)

__Step 6 –__ 
In Endpoint Policy Manager Cloud, go to __Report__ > __Computers (Collected Events)__ > __Show
event__, and check __Forwarded__ state (Scheduled, Forwarded, Error).

__Step 7 –__ View the forwarded events in Splunk..

__Step 8 –__ 
To make sure the events are appearing in Splunk, Navigate to Splunk Home  and  enter the user name and
password.

__Step 9 –__  Click __Search & Reporting__ enter
index=__history__ filter, then click the __Search__ icon.

![976_4_4](/img/product_docs/policypak/policypak/cloud/eventcollection/976_4_4.png)

__Step 10 –__ Click __Datasets__.

![976_5_5](/img/product_docs/policypak/policypak/cloud/eventcollection/976_5_5.png)

__Step 11 –__  Click __raw\_data__.

![976_6_6](/img/product_docs/policypak/policypak/cloud/eventcollection/976_6_6.png)

__Step 12 –__ View the event data
