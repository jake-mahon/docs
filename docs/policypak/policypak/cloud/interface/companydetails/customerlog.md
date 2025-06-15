# Customer Log

For an overview of this section, see this video: [Endpoint Policy Manager Cloud: Immutable Log](../../../video/cloud/security/immutablelog.md).

The customer log, also known as the immutable log, is a very powerful security feature within Endpoint Policy Manager Cloud.

__NOTE:__  Only admins with the __Notification & Logging Options Admin__ role can see the immutable log.

Nearly every step of every configuration is audited and stored in this log forever. Below you can see a sample log where each row explains an action that was taken within your Endpoint Policy Manager Cloud instance.

![web_interface_and_controls_98_624x161](../../../../../../static/img/product_docs/policypak/policypak/cloud/interface/companydetails/web_interface_and_controls_98_624x161.webp)

__NOTE:__ You can also push your immutable log to your on-prem SIEM (log management) system via an automated email push. To set this up, watch the following video: [Endpoint Policy Manager Cloud Logs and Automatically Pushing via Email](../../../video/cloud/security/emaillogs.md).

The Immutable Log Viewer has very powerful filtering that enables you to see what actions were performed, when, and by whom.

![web_interface_and_controls_99_624x286](../../../../../../static/img/product_docs/policypak/policypak/cloud/interface/companydetails/web_interface_and_controls_99_624x286.webp)

Depending on the event type, double-clicking on any line may provide more information. Particularly interesting is the __EditPolicy__ type, which has a special button called __Compare__.

![web_interface_and_controls_100_624x416](../../../../../../static/img/product_docs/policypak/policypak/cloud/interface/companydetails/web_interface_and_controls_100_624x416.webp)

Clicking the __Compare__ button performs a straight XML demonstration of output between the policy before and after editing. If you discover that a change is unwanted, you can immediately roll back to the previous version by selecting __Revert__.

![web_interface_and_controls_101_623x491](../../../../../../static/img/product_docs/policypak/policypak/cloud/interface/companydetails/web_interface_and_controls_101_623x491.webp)
