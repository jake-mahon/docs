# Deploying Remote Event Receivers for SharePoint

SharePoint remote event receivers are processed based on the source URL.
You can deploy receivers to specific Site Collections by including the source URL with no wildcard indicators (e.g. “http://test.sharepoint.com/sites/Test”).
You can also deploy receivers to all Site Collections by ending your inclusion with a wildcard indicator (e.g. “http://test.sharepoint.com\*”).

For event receivers you must configure a URL that is accessible to the SharePoint environment and utilizing a verifiable SSL certificate. The URL should be set here: Configuration → Core → Administration → Administration URL (note, advanced setting).

To deploy Remote Event Receivers:

1. Navigate to __Sources__→SharePoint→Settings→Deploy Remote Event Receivers.

   [![deployingremoteevents__thumb_0_0](/img/product_docs/dataclassification/ndc/admin/sources/sharepoint/deployingremoteevents__thumb_0_0.png)](/docs/dataclassification/resources/images/sources/source_groups/deployingremoteevents_.png)
2. Select __Add__ to add the path. The __Details__ panel displays.

   [![deployingremoteevents_2_thumb_0_0](/img/product_docs/dataclassification/ndc/admin/sources/sharepoint/deployingremoteevents_2_thumb_0_0.png)](/docs/dataclassification/resources/images/sources/source_groups/deployingremoteevents_2.png)
3. Select __Save__.

__NOTE:__ You can select __Test__ to validate and compare the correctness of the path you enter.

d

__NOTE:__ d
