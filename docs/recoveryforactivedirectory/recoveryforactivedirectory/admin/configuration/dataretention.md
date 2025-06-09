# Data Retention Policy Page

The Data Retention Policy page provides settings for deleting backup data that of domains and domain controllers has aged by X number of days, and for deleting backup data for tombstone objects that have been purged.

Click __Configuration__ in the left pane. Then click the __Data Retention Policy__ tab on the Configuration page to open the Data Retention Policy page.

![Data Retention Policy Page](/img/product_docs/recoveryforactivedirectory/recoveryforactivedirectory/admin/configuration/dataretention.png)

Follow the steps to specify a data retention policy.

__Step 1 –__ On the Data Retention Policy page, select the __Enable data retention policy__ checkbox to enable policy settings.

__Step 2 –__ Select the __Delete object backup data older than X days__ checkbox to delete backup data that is older than X number of days from the database. You can specify any number of days; default is 60 days.

__Step 3 –__ Select the __Delete backup data for objects that have been purged from the deleted objects container__ checkbox to delete data from the database for tombstone objects that have been purged.

__NOTE:__ The 'deleted objects container' is represented by the Recycle Bin in Recovery for Active Directory.

When an object is deleted in Active Directory, it has _tombstone_ as its state. The object is not physically deleted but is stripped off most of its attributes and is flagged as _deleted_. The object remains in tombstone state for 180 days by default, after which it is permanently deleted from Active Directory. Selecting the __Delete backup data for objects that have been purged from the deleted objects container__ checkbox deletes data for permanently deleted objects from Recovery for Active Directory.

___RECOMMENDED:___ As permanently deleted objects cannot be rolled back or recovered using Recovery for Active Directory, it is recommended to enable this setting.

__Step 4 –__ Click __Save__.

A data retention policy has been defined in the system.
