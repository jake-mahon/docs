# Use a Template to Create a Policy

You can use a policy template to create a policy. All settings in the template are copied to the policy. You can customize the settings as required.

## Create a Policy From a Template

Click the Templates or Tags node in the Navigation pane and move the desired template to the Policies node.

- From under the Templates node, templates can be moved to the Policies node via drag-and-drop or with the right-click __Copy__ and __Paste__ options.
- From under the Tags node, templates can be moved to the Policies node via the right-click __Copy__ and __Paste__ options.

The policy will be disabled but will contain all of the preconfigured settings.

## Customize a Policy Created From a Template

Follow the steps to customize a policy that was created from a template.

__Step 1 –__ Click Policies in the Navigation pane and open the policy you created from a template.

__Step 2 –__ If desired, on the [General Tab](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/general.md) select the Active At Specified Times option and then set the schedule.

__CAUTION:__ Use cation with _all Lockdown/Blocking Templates_! Blank filters result in _everything_ being locked down or blocked.

__Step 3 –__ On the [Event Type Tab](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/eventtype/overview.md), configure the Event Filters that are specific to each environment.

_Remember,_ Each filter tab acts like an "AND" statement for the filter. Any filter tab left blank is treated like an "ALL" for that filter set.

__Step 4 –__ If desired, on the [Actions Tab](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/actions/overview.md) assign any actions to be a part of this policy.

__Step 5 –__ Return to the [General Tab](/versioned_docs/threatprevention_7.4/threatprevention/admin/policies/general.md) and check the __Enabled__ box to activate the policy. Click __Save__.

When the last step is completed, this policy is sent, real-time, to the individual Agents and becomes active.
