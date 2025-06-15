# Thresholds

Thresholds are essential safety guards controlling all changes, for example preventing the overwriting of important data by mistake.

Thresholds are by default activated to warn users when synchronization or provisioning triggers too many modifications. If the number of modifications exceeds the specified threshold, Identity Manager stops the synchronization/provisioning and displays a warning on the log page.

Thresholds can be deactivated via the value ```0```, though __they should not all be__. Each action must be "guarded" by at least one threshold.

Once the changes have been reviewed, the blocked job can be resumed (or not). See the [
Synchronize Data
](../../../user-guide/set-up/synchronization/index.md) topic for additional information.

## Thresholds for Provisioning

Provisioning thresholds can be configured in XML files via [Resource Type](../../toolkit/xml-configuration/provisioning/resourcetype/index.md) to count the number of resources impacted by provisioning inside a given resource type. These thresholds impact the generation of provisioning orders. They are configured with:

| Absolute Threshold | Relative Threshold |
| --- | --- |
| ```MaximumDelete``` | ```MaximumDeletePercent``` |
| ```MaximumInsert``` | ```MaximumInsertPercent``` |
| ```MaximumUpdate``` | ```MaximumUpdatePercent``` |

All thresholds are active. Therefore, the lowest threshold (according to the specific situation) would be the first to stop the generation of provisioning orders.

Distinct [
Thresholds
](../../synchronization/synchro-thresholds/index.md) are configurable for synchronization.
