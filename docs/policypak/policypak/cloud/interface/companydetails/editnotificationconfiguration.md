# Edit Notification Configuration

The __Notifications Editor__ is only available to admins with the __Notification & Logging Options Admin__ role. This role enables the admin to perform two functions:

- Add Rules: Specify email alerts when specific actions are taken inside of Endpoint Policy Manager Cloud.
- Actions Configuration: Specify special emails when certain conditions exist within the Endpoint Policy Manager Cloud instance.

![web_interface_and_controls_91_624x157](/static/img/product_docs/policypak/policypak/cloud/interface/companydetails/web_interface_and_controls_91_624x157.png)

## Add Rules

Admins can get alerts via email when specific actions are taken by other admins. To get an action notification, you need tospecify the following:

- Action Name: This is the action type you want to audit for.
- Initiator User: This is the admin you want to audit.
- Notification Receiving User: This is who will get the alerts.
- Notification: This is the delivery method of the notification. Currently only email is supported, but there may be additional methods added in the future.

![web_interface_and_controls_92_499x345](/static/img/product_docs/policypak/policypak/cloud/interface/companydetails/web_interface_and_controls_92_499x345.png)

If you want to quickly set up all notifications for all admins, click all three check boxes.

![web_interface_and_controls_93_499x337](/static/img/product_docs/policypak/policypak/cloud/interface/companydetails/web_interface_and_controls_93_499x337.png)

When you set up notifications, you will see a list of the added rules.

![web_interface_and_controls_94_498x221](/static/img/product_docs/policypak/policypak/cloud/interface/companydetails/web_interface_and_controls_94_498x221.png)

## Actions Configuration

The __Actions Configuration Editor__ has two settings that can be selected:

- Inactive Computers: When selected, allows you to send a weekly report of inactive computers to all company admins.
- License threshold: Allows you to set the threshold for notification of the percentage of remaining licenses.

Neither of these are turned on by default and may only be enabled by an admin with the __Notification & Logging Options Admin__ role.

![web_interface_and_controls_95_623x429](/static/img/product_docs/policypak/policypak/cloud/interface/companydetails/web_interface_and_controls_95_623x429.png)

When the weekly report of inactive computers is turned on, admins will get an email like yjos on Mondays.

![web_interface_and_controls_96_625x341](/static/img/product_docs/policypak/policypak/cloud/interface/companydetails/web_interface_and_controls_96_625x341.png)

When the check box for remaining license notification threshold is set and the pool of licenses dips below the reporting threshold, all admins get a notification.

![web_interface_and_controls_97_624x209](/static/img/product_docs/policypak/policypak/cloud/interface/companydetails/web_interface_and_controls_97_624x209.png)
