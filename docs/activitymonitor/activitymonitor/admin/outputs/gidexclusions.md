# GID Exclusions Tab

The GID Exclusions tab on an output Properties window is where monitoring scope by group can be modified. These settings are initially configured when the output is added.

Select an output for a Linux host on the Monitored Hosts tab and click __Edit__ to open the output Properties window.

![gidexclusionstab](../../../../../static/img/product_docs/activitymonitor/activitymonitor/admin/outputs/gidexclusionstab.webp)

The tab contains the following settings:

- Add – Opens the Add or Edit GID window to add a group for exclusion. See the [Add or Edit GID Window](window/addeditgid.md) topic for additional information.
- Remove – Removes the selected group from exclusion. Confirmation is not requested.

  __CAUTION:__ If an account is removed by group, use the __Cancel__ button to discard the change.
- Edit – Opens the Add or Edit GID window to edit a selected group for exclusion. See the [Add or Edit GID Window](window/addeditgid.md) topic for additional information.

The table lists groups that are being excluded from monitoring, displayed in the GID column. By default, no groups are being excluded.

Click __OK__ to commit the modifications. Click __Cancel__ to discard the modifications. The output Properties window closes.
