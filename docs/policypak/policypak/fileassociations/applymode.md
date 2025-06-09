# Apply Mode or "Apply Once and Drift"

You can also create policies that will enforce a given file association one time so that users can then drift from your configuration and choose their own application.

__NOTE:__ For a video on applying policies only once, see [Endpoint Policy Manager File Associations Manager: Apply once (and drift)](/docs/policypak/policypak/video/fileassociations/applyonce.md).

Let's create a file association policy on the User side so that Adobe Acrobat Reader is the assigned application for all its associated files.

![about_policypak_file_associations_27](/img/product_docs/policypak/policypak/fileassociations/about_policypak_file_associations_27.png)

Notice that you get a popup message alerting you that user-side file and protocol associations are ignored on Endpoint Policy Manager CSE versions older than 20.2.2361.

![about_policypak_file_associations_28](/img/product_docs/policypak/policypak/fileassociations/about_policypak_file_associations_28.png)

You can then choose all of the possible file types for Adobe Acrobat Reader.

![about_policypak_file_associations_29](/img/product_docs/policypak/policypak/fileassociations/about_policypak_file_associations_29.png)

Next choose the __Apply once (for policies)__ option.

![about_policypak_file_associations_30](/img/product_docs/policypak/policypak/fileassociations/about_policypak_file_associations_30.png)

Once the policy has been enforced one time, users can then drift away from the deployed configuration to make their own choices.

You can use this Apply once and drift approach for a single policy as well. Simply go to __Add__ > __New Policy__ and click the __Apply__ drop down menu and select __Once__.

![about_policypak_file_associations_31](/img/product_docs/policypak/policypak/fileassociations/about_policypak_file_associations_31.png)
