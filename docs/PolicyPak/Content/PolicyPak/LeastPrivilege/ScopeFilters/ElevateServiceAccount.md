---
sidebar_position: 4134
title: 'Scenario 4: Elevating a Service Account'
---

# Scenario 4: Elevating a Service Account

**NOTE:** For an overview of this scenario see the [Reduce or specify Service Account Rights](../../Video/LeastPrivilege/BestPractices/ServiceAccountRights "Reduce or specify Service Account Rights") video.

You might have a service which requires specific privileges. Maybe your service, by default, uses Local System, and you want to give it lessrights.

With Endpoint Policy Manager [Reduce or specify Service Account Rights](../../Video/LeastPrivilege/BestPractices/ServiceAccountRights "Reduce or specify Service Account Rights"), you can remove the powerful privileges of the service account and strip out LOCAL SYSTEM and grant a specific user the permissions required.

If you want a process to be run via special user account, you need to do the following:

**Step 1 –** Make a rule for an .exe from which the service runs.

We recommend to make a File Info + Signature rule, but PATH rules would work as well, e.g. `C:\Program Files\AppABC \AppService.exe`

**Step 2 –** On the Actions page select **Run with custom token** and configure the TOKEN and/or exact PRIVILEGES the process needs, like Load Driver Privilege (SeLoadDriverPrivilege), orBypass Traverse Checking (SeChangeNotify).

**Step 3 –** On the final page select **Scope** > **User and System Processes**. **Scope Filter** should be trimmed to the specific account you specified to run the service runs as.

Tip: It's also possible to use Scope Filter = SERVICES to make the rule apply to all services that run from the specified .exe, regardless of the user.

[![A screenshot of a computer

Description automatically generated](../../../../../../static/images/PolicyPak/Content/Resources/Images/Book4/ProcessScopeFilters/Scenario 4 Elevating a Service.png)](https://hf-files-oregon.s3-us-west-2.amazonaws.com/hdppolicypak_kb_attachments/2019/06-26/7f83c3a3-6e8a-49b6-80a9-0ef07ab2882f/faq-img-15.png)