# FS\_NotifyOwners Job

The FS\_NotifyOwners job is comprised of the SendMail action module that uses the data collected by the __FileSystem__ > __Cleanup__ > __1. Cleanup Assessment__ > __FS\_CleanupAssessment__ job to contact owners of shares containing data for which cleanup is pending.

## Action Tasks for the FS\_NotifyOwners Job

Navigate to the __FileSystem__ > __Cleanup__ > __2. Notify__ > __FS\_NotifyOwners__ > __Configure__ node and select __Actions__ to view the action tasks.

__CAUTION:__ Do not enable the action unless it is required. Disable the action after execution to prevent making unintended and potentially harmful changes to Active Directory.

![Action Tasks for the FS_NotifyOwners Job](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/cleanup/notify/notifyownersaction.webp)

The following action task is deselected by default.

- Notify Owners – Notifies share owners using SendMail module

Prior to running the FS\_NotifyOwners job, it is necessary to select the __Notify Owners__ task and configure the properties for the SendMail action module. See the [Configure the FS\_NotifyOwners Action](#configure-the-fs_notifyowners-action) topic for additional information.

### Configure the FS\_NotifyOwners Action

The recipients and the text of the email can be customized on the Properties page within the Send Mail Action Module Wizard. The [1. Cleanup Assessment > FS\_CleanupAssessment Job](/docs/accessanalyzer/enterpriseauditor/solutions/filesystem/cleanup/fs_cleanupassessment.md) must be run before the Send Mail Action Module Wizard can be opened. Follow these steps to customize the Notify Owners action task.

__Step 1 –__ Navigate to the job’s __Configure__ node and select __Actions__.

__Step 2 –__ In the Action Selection view, select the desired action task and click __Action Properties__ to view the Action Properties page.

__Step 3 –__ Click __Configure Action__ to open the Send Mail Action Module Wizard.

_Remember,_ the FS\_CleanupAssessment job must be run before the Send Mail Action Module Wizard can be opened.

![Send Mail Action Module Wizard Properties page](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/cleanup/notify/sendmailwizardproperties.webp)

__Step 4 –__ On the Properties page, customize the following fields:

- Carbon copy (CC) – Add the recipient emails within this field

  __NOTE:__ Email recipients may also be added within the Notification node under the Global Settings pane.

![Send Mail Action Module Wizard Message page](/img/product_docs/accessanalyzer/enterpriseauditor/solutions/filesystem/cleanup/notify/sendmailwizardmessage.webp)

__Step 5 –__ On the Message page, customize the following fields:

- Subject – Enter text for the display line on delivered emails
- Text Entry Box – Enter text to display on the body of each email

__Step 6 –__ Navigate to the Summary page, click __Finish__ to save any setting modifications or click __Cancel__ if no changes were made. Then click __OK__ to close the Send Mail Action Module Wizard.

The action task has been customized. It can now be selected and run as part of the FS\_NotifyOwners job.
