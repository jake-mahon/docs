---
sidebar_position: 3544
title: Customer Log
---

# Customer Log

For an overview of this section, see this video: [Endpoint Policy Manager Cloud: Immutable Log](../../../Video/Cloud/Security/ImmutableLog "Endpoint Policy Manager Cloud: Immutable Log").

The customer log, also known as the immutable log, is a very powerful security feature within Endpoint Policy Manager Cloud.

**NOTE:**  Only admins with the **Notification & Logging Options Admin** role can see the immutable log.

Nearly every step of every configuration is audited and stored in this log forever. Below you can see a sample log where each row explains an action that was taken within your Endpoint Policy Manager Cloud instance.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_98_624x161.png)

**NOTE:** You can also push your immutable log to your on-prem SIEM (log management) system via an automated email push. To set this up, watch the following video: [Endpoint Policy Manager Cloud Logs and Automatically Pushing via Email](../../../Video/Cloud/Security/EmailLogs "Endpoint Policy Manager Cloud Logs and Automatically Pushing via Email").

The Immutable Log Viewer has very powerful filtering that enables you to see what actions were performed, when, and by whom.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_99_624x286.png)

Depending on the event type, double-clicking on any line may provide more information. Particularly interesting is the **EditPolicy** type, which has a special button called **Compare**.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_100_624x416.png)

Clicking the **Compare** button performs a straight XML demonstration of output between the policy before and after editing. If you discover that a change is unwanted, you can immediately roll back to the previous version by selecting **Revert**.

![](../../../../../../../static/images/PolicyPak/Content/Resources/Images/Cloud/Web Interface and Controls_101_623x491.png)