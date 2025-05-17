---
sidebar_position: 6778
title: Use a Template to Create a Policy
---

# Use a Template to Create a Policy

You can use a policy template to create a policy. All settings in the template are copied to the policy. You can customize the settings as required.

## Create a Policy From a Template

Click the Templates or Tags node in the Navigation pane and move the desired template to the Policies node.

* From under the Templates node, templates can be moved to the Policies node via drag-and-drop or with the right-click **Copy** and **Paste** options.
* From under the Tags node, templates can be moved to the Policies node via the right-click **Copy** and **Paste** options.

The policy will be disabled but will contain all of the preconfigured settings.

## Customize a Policy Created From a Template

Follow the steps to customize a policy that was created from a template.

**Step 1 –** Click Policies in the Navigation pane and open the policy you created from a template.

**Step 2 –** If desired, on the [General Tab](../Policies/General "General Tab") select the Active At Specified Times option and then set the schedule.

**CAUTION:** Use cation with *all Lockdown/Blocking Templates*! Blank filters result in *everything* being locked down or blocked.

**Step 3 –** On the [Event Type Tab](../Policies/EventType/Overview "Event Type Tab"), configure the Event Filters that are specific to each environment.

*Remember,* Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated like an "ALL" for that filter set.

**Step 4 –** If desired, on the [Actions Tab](../Policies/Actions/Overview "Actions Tab") assign any actions to be a part of this policy.

**Step 5 –** Return to the [General Tab](../Policies/General "General Tab") and check the **Enabled** box to activate the policy. Click **Save**.

When the last step is completed, this policy is sent, real-time, to the individual Agents and becomes active.