# Enable Remote Registry and Windows Management Instrumentation Services

Follow the steps to enable the Remote Registry service.

__Step 1 –__ Navigate to Start > Windows Administrative Tools >  __Services__.

![manualconfig_genevents_remoteregistry2016](/img/versioned_docs/auditor_10.6/auditor/configuration/fileservers/windows/manualconfig_genevents_remoteregistry2016.png)

__Step 2 –__ In the __Services__ dialog, locate the __Remote Registry__ service, right-click it and select __Properties__.

__Step 3 –__  In the __Remote Registry Properties__ dialog, make sure that the __Startup type__ parameter is set to _"Automatic"_ and click __Start__.

![manualconfig_genevents_remoteregistry_start2016](/img/versioned_docs/auditor_10.6/auditor/configuration/fileservers/windows/manualconfig_genevents_remoteregistry_start2016.png)

__Step 4 –__ In the __Services__ dialog, ensure that __Remote Registry__ has the _"Started"_ (on pre-Windows Server 2012 versions) or the _"Running"_ (on Windows Server 2012 and above) status.

__NOTE:__ The Remote Registry should be enabled on the target server.

5. Locate the Windows Management Instrumentation service and repeat these steps.
