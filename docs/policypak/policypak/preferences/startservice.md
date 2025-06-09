# How to enable and start a service using Group Policy Preferences

__Step 1 –__ Create a new GPO for Group Policy Preferences.

__Step 2 –__ Select Computer ```Configuration > Preferences > Control Panel Settings > Services```.

__Step 3 –__  Right-click on Services and choose ```New > Service```.

![7_1_image-20190916224004-1](/img/product_docs/policypak/policypak/preferences/7_1_image-20190916224004-1.png)

__Step 4 –__ Under the General tab set the __Startup:__ to __Automatic__, then click the ellipsis under Service Name: and select the service you would like to enable.

In this example, I selected the RPC service.

![7_2_image-20190916224004-2](/img/product_docs/policypak/policypak/preferences/7_2_image-20190916224004-2.png)

__Step 5 –__ .Under Service action: select __Start service__

__Step 6 –__ Under the Recovery tab, select __Restart the Service__ for all 3 recovery options, then click __OK__.

![7_3_image-20190916224005-3](/img/product_docs/policypak/policypak/preferences/7_3_image-20190916224005-3.png)

__Step 7 –__ Now apply the GPO to the Computer OU where the computers live and where you want this setting, and the next time ```GPUPDATE``` runs the service will be enabled.
