# AutoAction Analysis Module

The Auto Action analysis module executes a pre-configured action as part of the analysis task execution. To add an action to an analysis via the Auto Action analysis module, the action must already exist and it must reside within the current job.

__NOTE:__ The Actions node can also automatically execute actions. See the [Action Modules](/docs/accessanalyzer/enterpriseauditor/admin/action/overview.md) topic for additional information.

## Select Action Window

The Select Action window lists the actions that currently exist within the Job that can be selected to automatically run upon job execution.

![Select Action Window](/img/product_docs/accessanalyzer/enterpriseauditor/admin/analysis/autoaction.png)

Select an action from the list. Click __OK__ to exit the window, and then click __Save__ to preserve the changes made to the analysis module. The action now executes as part of the analysis task. If no actions were selected, it is best practice to click __Cancel__ to close the Select Action window to ensure no accidental selections are saved. Actions only display if they exist within the Actions node of the current Job.
