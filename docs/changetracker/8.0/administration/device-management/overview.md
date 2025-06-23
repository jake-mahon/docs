title: Device Management Overview
sidebar_label: Overview
description: Monitor device details, group membership, planned changes, and compliance reports from the ChangeTracker Devices tab with comprehensive activity metrics.

# Device Tab

The **Device** page provides a full summary of device details, groups membership, planned changes
and configuration monitoring policy applied, events and Compliance Report results.

The **Devices** Tab provides a ‘Home Page’ for any selected device where full details of the Device
activity, Policy Templates assigned, group membership, report history and other key metrics are
collated into a single screen.

- View device inventory information and group membership.
- Complete event and report history.
- Quick access to configuration policy details via ‘**Show Tracked Items**’.
- View results of all past compliance reports and run new reports using ‘**Run Ad Hoc compliance
  report**’ button.
- Device inventory information and group membership.

![DevicesTab](/img/versioned_docs/changetracker_8.0/changetracker/admin/tabs/devicestab.webp)

**NOTE:** Go to **Tracking Configuration** tab to see a ‘read-only’ representation of the tracking
template assigned, note that this will be a merged version of all Policy Templates inherited by the
device.

To view the groups that any asset is a member of, click the group name. See **Settings** ->
**Groups** and show the additional group members.

To view the details of the Compliance Report applied, click **Compliance Reports** name. The latest
compliance report will be shown.

To see more details of Config Templates or Planned Change details, just click the name of the item.

More background information on any of these screens and functions can be found in the
[Change Tracker Admin Guide](https://www.newnettechnologies.com/514-nnt-change-tracker-gen-7r2-admin-guide-v1-1-1/file.html).

The **Event Stream**, **Configuration** and **Reports** tabs will allow for the review of the data
for the device shown.

The **Configuration** tab is where the currently tracked items are shown. Clicking the **Start
Tracker Now** button will either enable or poll the device for current results.

Clicking the **Report** tab allows for the viewing of existing compliance reports or the option to
re-run the report.

# Agents and Devices

Devices will be automatically assigned to a Group as determined by results of the **New Device
Discovery** policy report. Device attributes such as Group, Type and Credentials, or Delete Devices
can be edited below.

- Devices are automatically assigned to a Device Group based on the Discovery Report results but
  this can be overridden herel;
- The ‘Last Poll Time’ will also filter devices on a before or after date/time;
- Click Edit to change Group Assignment and to enable Diagnostic Mode or to Block Events from the
  Device;
- Diagnostic Mode generates more detailed dialogue from the Agent regarding its operation, for
  example, Baselining progress – this is disabled by default to reduce activity and events storage;
- Event Send Block allows events to be temporarily blocked for a Device, for example, in case a
  misconfigured template is generating too much noise.

**NOTE:** Use the **Filter Control Panel** to allow focus on just the Devices or Groups of interest.

![Graphical user interface, application

Description automatically
generated](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/page_guide_24.webp)

**NOTE:** Click on the ‘burger’ icon alongside any column heading to get a full list of column
options.

![Graphical user interface, text, application, email

Description automatically
generated](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/page_guide_25.webp)

![page_guide_26](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/page_guide_26.webp)
