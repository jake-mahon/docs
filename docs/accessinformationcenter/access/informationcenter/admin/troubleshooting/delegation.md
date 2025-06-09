# Service Account Delegation

Delegation can be used to grant the Active Directory service account the minimal rights necessary to allow the Access Information Center to commit changes in Active Directory. Apply delegation to the OUs housing the security and distribution list groups to be managed to grant the rights of Allow Read Members and Allow Write Members to the service account. See the [Commit Active Directory Changes](/docs/accessinformationcenter/access/informationcenter/admin/additionalconfig/commitchanges.md) topic for best practices for group and resource management through the Access Information Center.

Follow the steps to apply delegation to the desired OUs.

![Active Directory Users and Computers showing right-click menu](/img/product_docs/accessinformationcenter/access/informationcenter/admin/troubleshooting/delegatecontrol.png)

__Step 1 –__ In Active Directory Users and Computers, right-click on the OU housing the groups to be managed. Select __Delegate Control__. The Delegation of Control Wizard opens.

![Delegation of Control wizard showing the Users or Groups page](/img/product_docs/accessinformationcenter/access/informationcenter/admin/troubleshooting/delegatecontrolwizarduser.png)

__Step 2 –__ Navigate to the Users or Groups page. Click __Add__. Enter the Active Directory service account. Click __Next__.

![Delegation of Control wizard showing the Tasks to Delegate page](/img/product_docs/accessinformationcenter/access/informationcenter/admin/troubleshooting/delegatecontrolwizardtask.png)

__Step 3 –__ Navigate to the Tasks to Delegate page. Select the __Delegate the following tasks__ option and check the __Modify the membership of a group__ task.

__Step 4 –__ Navigate through the remaining wizard pages, and click __Finish__. The Delegation of Control Wizard closes.

This delegation grants the Active Directory service account Special Permissions to the OU, allowing the Read Members and Write Members rights.
