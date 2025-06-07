# How to forward interesting events for Least Privilege Manager (or anything else) to a centralized location using Windows Event Forwarding.

#### Enable the Windows Remote Management (WinRM) Service on the Endpoints.

__NOTE:__ Since we need this service running on all the endpoints from where we plan to have forward events, it is recommended to use Group Policy to enable this setting.

__Step 1 –__ To enable this service using Group Policy, first create and link a GPO to the domain or OU where the computers (endpoints) live, give this a GPO a descriptive name, (i.e. Event Log Forwarding Setup).

__Step 2 –__ Edit the GPO, expand __Computer Configuration__ > __Preferences__ > __Control Panel Settings__ > __Services__, then right click .__Services__. and choose .__New__ > __Service__.

![381_1_image-20191023214431-1](/static/img/product_docs/policypak/policypak/leastprivilege/381_1_image-20191023214431-1.png)

__Step 3 –__ Under .__New Service Properties__ > __General__ > __Service name:__ click the ellipses (__…__) and browse for the WinRM service, then with the WinRM service highlighted, click __Select__.

![381_3_image-20191023214431-2](/static/img/product_docs/policypak/policypak/leastprivilege/381_3_image-20191023214431-2.png)

__Step 4 –__ Set the __Service action:__to __"Start service__", then click __Ok__.

![381_5_image-20191023214431-3](/static/img/product_docs/policypak/policypak/leastprivilege/381_5_image-20191023214431-3.png)

#### Allow the "Local Network Service" to access the event logs.

__Step 1 –__ In the same GPO as above, expand Computer Configuration > Policies > Windows Settings > Security Settings > Restricted Groups, then right-click "Restricted Groups" and select "Add Group", then type in "Event Log Readers" and click "Ok".

![381_7_image-20191023214431-4](/static/img/product_docs/policypak/policypak/leastprivilege/381_7_image-20191023214431-4.png)

__Step 2 –__ Right-click on the Event Log Readers group and select __Properties__, then add __NETWORK SERVICE__ under Members of this group:, and click __Ok__.

![381_8_image-20191023214431-5](/static/img/product_docs/policypak/policypak/leastprivilege/381_8_image-20191023214431-5.png)

#### Setting up the Event Forwarding Subscription

__Step 1 –__ In the same GPO as above, expand __Computer Configuration__ > __Policies__ > __Administrative Templates__ > __Windows Components__ > __Event Forwarding__, then double-click Configure target Subscription Manager, select the radio button for __Enabled__ then click __Show...__.

![381_10_image-20191023214431-6](/static/img/product_docs/policypak/policypak/leastprivilege/381_10_image-20191023214431-6.png)

__Step 2 –__ Under Show Contents configure the following:

![381_12_image-20191023214431-7](/static/img/product_docs/policypak/policypak/leastprivilege/381_12_image-20191023214431-7.png)

- __NOTE:__ Replace YourServerFQDN with the Fully Qualified Domain Name (FQDN) of your central collection machine (the one you want to forward events to). For example, if your server name was dc2016.fabrikam.com you would use:

  ```
  SERVER=http://DC2016.FABRIKAM.COM:5985/wsman/SubscriptionManager/WEC
  ```
- For HTTPS protocol use:

  ```
  SERVER=https://<FQDN of the collector>:5986/wsman/SubscriptionManager/WEC,Refresh=<Refresh interval in seconds>,IssuerCA=<Thumb print of the client authentication certificate>.
  ```
- "Refresh=60" is optional and equals 60 seconds. This value should only be used for testing. Once everything is working remove the ",Refresh=60" or don't use it to begin with and instead wait for events to be forwarded ( the default interval is 15 minutes). For more information see the Microsoft article on [Best practice for configuring EventLog forwarding in Windows Server 2012 R2](https://learn.microsoft.com/en-us/troubleshoot/windows-server/admin-development/configure-eventlog-forwarding-performance).

__Step 3 –__ On the central collection machine or server (the one you want to forward events to) open Event Viewer and click on __Subscriptions__. If shown the message below, click __Yes__.

![381_14_image-20191023214431-8](/static/img/product_docs/policypak/policypak/leastprivilege/381_14_image-20191023214431-8.png)

__Step 4 –__ Now right click __Subscriptions__ and choose __Create Subscription…__.

![381_16_image-20191023214431-9](/static/img/product_docs/policypak/policypak/leastprivilege/381_16_image-20191023214431-9.png)

__Step 5 –__ Give the Subscription a name (i.e. Endpoint Policy Manager Interesting Events), then select the __Source computer initiated__ radio button, and click __Select Computer Groups__.

![381_18_image-20191023214431-10](/static/img/product_docs/policypak/policypak/leastprivilege/381_18_image-20191023214431-10.png)

__Step 6 –__ Under Select Computer Groups click "Add Domain Computers…" then add the __Domain Computers__ group, and click __Ok__.

![381_20_image-20191023214431-11](/static/img/product_docs/policypak/policypak/leastprivilege/381_20_image-20191023214431-11.png)

__Step 7 –__ Click __Select Events…__.

![381_22_image-20191023214431-12](/static/img/product_docs/policypak/policypak/leastprivilege/381_22_image-20191023214431-12.png)

__Step 8 –__  If you happen to have the Endpoint Policy Manager Client Side Extensions (CSE) installed, under Select Events you can select the __By Log__ button, then use the drop down under Event Sources: to find __PolicyPak Least Privilege Manager Client – Operational__ and place a check box next to it. Click__Ok__.  
 You should now see a screen similar to this one:

![381_24_image-20191023214431-13](/static/img/product_docs/policypak/policypak/leastprivilege/381_24_image-20191023214431-13.png)

__NOTE:__  If you don't have the CSE installed, select the __XML__ tab, then check the __Edit query manually__ check box at the bottom before pasting in the query below, and clicking __Ok__. You will not be able to use the Filter tab after editing the XML query manually.

```
<QueryList>    <Query Id="0" Path="PolicyPak">    <Select Path="PolicyPak">*[System[Provider[@Name='PolicyPak Least Privilege Manager Client - Operational']]]</Select>    </Query>    </QueryList>
```

![381_26_image-20191023214431-14](/static/img/product_docs/policypak/policypak/leastprivilege/381_26_image-20191023214431-14.png)

__NOTE:__ Once you click __Ok__ the text will be formatted correctly and aligned on the left.

__Step 9 –__ Run gpupdate /force on a test computer and wait until the 60 seconds or 15-minute interval has passed before clicking refresh in the Subscriptions Window or Forwarded Events log. If any Endpoint Policy Manager Least Privilege Operational events have occurred within that interval and everything else is working, you should start to see computers showing up under the Source Computers column in the subscription, and start to see events from the source computers showing up under the Forwarded Events log.

![381_28_image-20191023214431-15](/static/img/product_docs/policypak/policypak/leastprivilege/381_28_image-20191023214431-15.png)

![381_30_image-20191023214431-16_950x303](/static/img/product_docs/policypak/policypak/leastprivilege/381_30_image-20191023214431-16_950x303.png)
