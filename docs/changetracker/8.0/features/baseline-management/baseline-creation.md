title: Baseline Tab Management
sidebar_label: Baseline Creation
description: Manage and create device baselines in ChangeTracker through the Baseline tab with configuration and monitoring setup options.

# Baseline Tab

![baselinetab](/img/versioned_docs/changetracker_8.0/changetracker/baseline/baselinetab.webp)

Actions button:

To create a new Baseline Policy, use the Actions button in the top-right hand corner of the
Baselines Tab. This will prompt for a name to be assigned to the new Baseline Policy and the
Baseline Wizard process will kick in.

![baselineactionsbutton](/img/versioned_docs/changetracker_8.0/changetracker/baseline/baselineactionsbutton.webp)

Baseline Wizard Progress Bar:

Creation of a new Baseline Policy is tracked on the Baseline Wizard Progress Bar, only 8 steps
needed to create a baseline policy with rules, with Baseline Source and Member Device Group created
and a Baseline Report set-up.

Baseline Rules:

The Baseline Wizard will take you through a series of steps detailed in the next section of this
guide. Once configuration items have been harvested from the Source Device, they will be displayed
in the Add Rules panel. Items can be selected individually for inclusion within your Policy or use
the **Select All Baseline Events Matching Filter (all pages**) checkbox.

Rule Controls:

Add Rules will add the currently selected rules to your policy with the selected Rule Options (see
later section). The **Edit Rules** option allows an existing Policy to be edited and rules removed.

# Baseline Overview Tab

Once you have built your Baseline Policy and set-up the Baseline Report to run on a schedule you can
then switch to the other Baseline Center tabs for general routine operation. You are ready to
enforce compliance with your Baseline Configuration Standard!

![baselineoverviewtab](/img/versioned_docs/changetracker_8.0/changetracker/baseline/baselineoverviewtab.webp)

The Timeline:

Each dot represents a different report run and you can review results and see how compliance with
the Baseline Policy has changed over time.

Group Performance:

This provides a high-level view of how well your baseline configuration policy is being adhered to
across the entire estate of devices. The chart is active, and you can click to drill down to the
next level of detail on the Detail tab.

Device Scores:

This shows a deeper analysis of device compliance with the Baseline Policy, allowing an at a glance
view of the distribution of device numbers in each decile band of compliance score. It is useful for
determining your strategy for remediation work identifying the number of devices in each band of
compliance drift.

Failures Analysis:

This shows identified failures and their relative levels of incidence and also provides a good set
of metrics for determining your remediation strategy e.g., which are the most important patches to
apply.

For the next level of detail regarding failures, either click through on any of the charts or go
directly to the Detail tab. For the full report detail including details of all passes and failures
then view the report – Click **recent report runs** to go directly to the Report Center and use the
'Compliance Detail' report.

# Manage Tab

A word about remediation and change control when operating a Baseline Configuration Policy…

From the CIS Controls 7.1: "Maintain an up-to-date list of all authorized software that is required
in the enterprise for any business purpose on any business system” and “Ensure that unauthorized
software is either removed or the inventory is updated in a timely manner". Also "verify all
security configuration elements, catalog approved exceptions, and alert when unauthorized changes
occur".

From NERC CIP 010: "Develop a baseline configuration which shall include the following items:
Operating system or firmware, commercially available or open-source application software, custom
software, logical network accessible ports; and any security patches applied" then "Monitor every 35
days for changes to the baseline configuration. Document and investigate detected unauthorized
changes".

In summary, the intent of this security control is to maximize security defenses and maintain them.

- Decide on a secure configuration (software, network ports, hardened configuration settings) for a
  device, then
- Ensure all similar devices are compliant with your Baseline Configuration

But in a contemporary IT environment, change is a constant with the need to regularly patch devices
and to update configuration settings to meet changing business requirements. This means there needs
to be a further step in the process to Manage the Baseline Configuration.

For example, from my worked example earlier, there were three failures reported. One device was
missing a required item (Notepad++) and one other device was running the wrong version of Notepad++.
These failures would be remediated by installing or updating the software on the two non-compliant
devices. However, there was also a third failure – Google Chrome has been reported on the same two
devices at a later version than required.

![baselinefailureanalysis](/img/versioned_docs/changetracker_8.0/changetracker/baseline/baselinefailureanalysis.webp)

There are two paths to take from this: The two devices showing failures should be downgraded to
match the required version, alternatively, it may be preferable to update the Baseline Configuration
to embrace the newer version? This is a process known as 'promoting to the baseline' where either a
new or updated element needs to be grafted into the existing Baseline to take into account changing
times. Netwrix Change Tracker makes this process straightforward too, using the Manage Tab.

## Using the Manage Tab

The Manage tab will show any exceptions identified from the last report run.

**Note:** The Date and Time filters will be fixed and set according to the time window for the last
Baseline Report run.

![baselinemanagetab](/img/versioned_docs/changetracker_8.0/changetracker/baseline/baselinemanagetab.webp)

Baseline Exceptions

Exceptions include any failures according the Baseline Policy used in the report, together with any
new changes affecting the Baseline Policy referenced from the Source device (or if you have chosen
to include changes from Member Devices too, these will also appear here – see the
[Baseline Policy Wizard](/docs/changetracker/8.0/features/baseline-management/baseline-policies.md) regarding the Baseline Setup Wizard and the step where you
are asked to 'Specify Source'.

In this example we are using the default operation of only including changes originating from the
Source Device for this Baseline Policy. This shows that there has been an update to the version of
Google Chrome being used on this device, so this is highlighted and offered as a change that may
need to be promoted to the Baseline Policy.

Rule Operations:

There are three choices for modifying a Baseline Policy, Extend, Add and Delete. You can also use
the Edit Rules option back in the Setup tab if you want to remove an existing rule entirely. The
functions are largely self-explanatory, but tips are provided if you hover over each button.

![baselineruleoperations](/img/versioned_docs/changetracker_8.0/changetracker/baseline/baselineruleoperations.webp)

- Extend – Extend the existing baseline rules for this exception, in other words, promote this item
  as a 'valid' configuration
- Add – Adds a new rule to the baseline checking for the presence of this item. Any existing rule
  for this item is overwritten.
- Delete – Removes the baseline rule so it will no longer check for this item.

  **Note:** Deleting a 'No Others' rule failure will remove all 'No Others' processing for this
  Tracker type.

Once you have decided how you would like to handle the exceptions, you need to apply any changes
required using the Apply Changes Now button.

![baselineapplychangesnow](/img/versioned_docs/changetracker_8.0/changetracker/baseline/baselineapplychangesnow.webp)

You will be prompted to enter the Business Justification for the changes as when creating the
Baseline Policy originally.

## Viewing the Baseline Policy details

To get a ‘hard copy of the Baseline Policy, you can create a Tracking Policy report based on the
Baseline Policy. Go to the Reports Center and use the **Actions button**, then select **Add Tracking
Template Report**.

![baselinereportsandqueries](/img/versioned_docs/changetracker_8.0/changetracker/baseline/baselinereportsandqueries.webp)

An Auditor will often ask to see what the Baseline Policy comprises, when and why changes have been
made and by whom. This report provides a complete audit trail of changes as well as the breakdown of
rules included in the policy.

![baselinetest](/img/versioned_docs/changetracker_8.0/changetracker/baseline/baselinetest.webp)

# Detail Tab

This provides the detail behind individual report runs and specifically shows the devices in each
decile or percentile selected. See the Reports topic for the additional information about passes and
failures.

![baselinedetailstab](/img/versioned_docs/changetracker_8.0/changetracker/baseline/baselinedetailstab.webp)
