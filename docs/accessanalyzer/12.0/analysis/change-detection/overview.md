# Change Detection Analysis Module

Use the Change Detection analysis module to track changes within a specific Access Analyzer view or
table for use in reporting and notifications. This module tracks additional, changed, or missing
selected data items and compares result rows from previous collection activity with rows from the
most recent collection.

This module compares values collected for two different query instances. Therefore, as change
detection depends on the existence of a **JobRunTimeKey**, history must be enabled and data
collected at least twice to produce the desired results. Configure History settings under the job’s
**Settings** > **History** node. See the [History](/docs/accessanalyzer/12.0/administration/settings/history.md) topic for additional
information.

## Configuration

The Change Detection Data Analysis Module wizard has the following pages:

- Welcome
- [Change Detection: Input Scope](/docs/accessanalyzer/12.0/analysis/change-detection/input-scope.md)
- [Change Detection: Input](/docs/accessanalyzer/12.0/analysis/change-detection/input.md)
- [Change Detection: Unique Key](/docs/accessanalyzer/12.0/analysis/change-detection/unique-key.md)
- [Change Detection: Fields](/docs/accessanalyzer/12.0/analysis/change-detection/fields.md)
- [Change Detection: Additional Fields](/docs/accessanalyzer/12.0/analysis/change-detection/additional-fields.md)
- [Change Detection: Options](/docs/accessanalyzer/12.0/analysis/change-detection/options.md)
- [Change Detection: Result Sample](/docs/accessanalyzer/12.0/analysis/change-detection/result-sample.md)
- [Change Detection: Summary](/docs/accessanalyzer/12.0/analysis/change-detection/summary.md)

The Welcome page gives an overview of the action module. The navigation pane contains links to the
pages in the wizard.

![Change Detection Data Analysis Module wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

There are no configurable settings on the Welcome page. To proceed, click **Next** or use the Steps
navigation pane to open another page in the wizard.
