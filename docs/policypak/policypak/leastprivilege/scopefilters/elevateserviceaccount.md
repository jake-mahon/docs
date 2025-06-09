# Scenario 4: Elevating a Service Account

__NOTE:__ For an overview of this scenario see the [Reduce or specify Service Account Rights](/docs/policypak/policypak/video/leastprivilege/bestpractices/serviceaccountrights.md) video.

You might have a service which requires specific privileges. Maybe your service, by default, uses Local System, and you want to give it lessrights.

With Endpoint Policy Manager [Reduce or specify Service Account Rights](/docs/policypak/policypak/video/leastprivilege/bestpractices/serviceaccountrights.md), you can remove the powerful privileges of the service account and strip out LOCAL SYSTEM and grant a specific user the permissions required.

If you want a process to be run via special user account, you need to do the following:

__Step 1 –__ Make a rule for an .exe from which the service runs.

We recommend to make a File Info + Signature rule, but PATH rules would work as well, e.g. ```C:\Program Files\AppABC \AppService.exe```

__Step 2 –__ On the Actions page select __Run with custom token__ and configure the TOKEN and/or exact PRIVILEGES the process needs, like Load Driver Privilege (SeLoadDriverPrivilege), orBypass Traverse Checking (SeChangeNotify).

__Step 3 –__ On the final page select __Scope__ > __User and System Processes__. __Scope Filter__ should be trimmed to the specific account you specified to run the service runs as.

Tip: It's also possible to use Scope Filter = SERVICES to make the rule apply to all services that run from the specified .exe, regardless of the user.

[![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/scopefilters/scenario_4_elevating_a_service.png)](https://hf-files-oregon.s3-us-west-2.amazonaws.com/hdppolicypak_kb_attachments/2019/06-26/7f83c3a3-6e8a-49b6-80a9-0ef07ab2882f/faq-img-15.png)
