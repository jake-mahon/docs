---
title: viewing reports
sidebar_label: viewing-reports
description: Auditor 10.7 documentation for viewing reports with configuration details, usage instructions, and implementation guidance.
---

# Reports with Video

Netwrix Auditor can be configured to capture video of user activity on the monitored computers that
helps analyze and control changes made there. When you click a link, a video player opens and
playback of the recorded user activity starts, showing launched applications, actions, etc.

To view reports with video, navigate to Reports → User Activity.

In the report filters, select a monitoring plan you want to generate a report for. To review data
sources and items included in each plan, navigate to the Monitoring Plans section.

![ReportsWithVideo](/img/product_docs/auditor/auditor/admin/reports/alluseractivityvideo_thumb_0_0.webp)

Each report has a set of filters which help organize audit data in the most convenient way. See the
[View Reports](/docs/auditor/10.7/reporting/report-management/viewing-reports.md) topic for additional information. You can also create a subscription to any
report you want to receive on a regular basis. See the [Subscriptions](/docs/auditor/10.7/reporting/report-management/report-subscriptions.md)
topic for additional information.

Follow the steps to play a video:

**Step 1 –** Navigate to **Reports** → **User Activity**. Select any report and click View.

**Step 2 –** Click a link in the **When** column.

To open User Activity report for the selected user or server, you can also click the link in the Who
and Where columns of the All Users Activity report.

# View Reports

To view reports, users need the following:

1. Sufficient access rights in Netwrix Auditor, which are provided through role assignment:

- Users with _Reviewer_ role can generate the reports for their delegated scope only, and view them
  in any Netwrix Auditor client or in a web browser.
- Users with _Global administrator_ or _Global reviewer_ role can also create subscriptions to
  reports.

2. The Browser role on the SSRS Report Server. See the
   [SQL Server Reporting Services](/docs/auditor/10.7/installation-and-setup/system-requirements/sql-server-requirements.md) topic for
   additional information.

To view a report

You can add any elements (a dashboard, report, alert, risk, etc.) to the Auditor Home screen to
access them instantly. See the [Navigation](/docs/auditor/10.7/administration/navigation-and-ui/index.md) and
[Customize Home Screen](/docs/auditor/10.7/administration/navigation-and-ui/customizing-dashboard.md) topics for additional information.

1. In Netwrix Auditor Home screen, click
   ![reports_tile](/img/product_docs/auditor/auditor/admin/reports/reports_tile.webp)on
   the left, and in the tree on the left select the report you need.

To speed up the process, you can use the **Search** field, entering the keyword to search by.

![searchreports_thumb_0_0](/img/product_docs/auditor/auditor/admin/reports/searchreports_thumb_0_0.webp)

2. Click View button in the right pane.

To learn how to subscribe to a report, see [Create Subscriptions](/docs/auditor/10.7/reporting/report-management/report-subscriptions.md).

## Troubleshooting

If no data is displayed in the report, you may need to do the following:

1. Make sure that the Audit Database settings are configured properly in the monitoring plan, and
   that data is written to databases that reside on the default SQL Server instance. See the
   [Audit Database](/docs/auditor/10.7/administration/system-settings/audit-database.md) topic for additional information.
2. For SSRS-based reports - verify that SSRS (SQL Server Reporting Services) settings are configured
   properly. See the [Audit Database](/docs/auditor/10.7/administration/system-settings/audit-database.md) topic for additional
   information.
3. For state-in-time reports - verify that the monitoring plan that provides data for the report has
   the corresponding option selected. See the
   [Create a New Monitoring Plan](/docs/auditor/10.7/monitoring-plans/creating-monitoring-plans.md) topic for additional information.

## Customize Report with Filters

Report filters allow you to display changes matching certain criteria. For example, you can filter
changes by audited domain or object type. Filtering does not delete changes, but modifies the report
view allowing you to see changes you are interested in. Filters can be found in the upper part of
the Preview Report page.

To apply filters

1. Navigate to Reports and generate a report.
2. Apply required filters to the report and click View Report. For example, you can update report
   timeframe, change _Who_ and _Where_ values, apply sorting, etc.

Wildcards are supported. For example, type _%corp\administrator%_ in the in the Who domain\user
field if you want to view changes made by the corp\administrator user only .

Do not use % in the exclusive filters (e.g., Who (Exclude domain\user)). Otherwise, you will receive
an empty report.

_escape_characters_ are not supported.

The example below applies to the All Changes by Server report and shows the before and after views
of the report. The filters may vary slightly depending on the audited system and report type.

The report without filtering:

![allchangesserver](/img/product_docs/auditor/auditor/admin/reports/allchangesserver.webp)

The report below displays changes for all audited systems made by the CORP\Administrator user on the
ROOTDC2 domain controller for a month sorted by the action type.

![allchangesserverfiltered](/img/product_docs/auditor/auditor/admin/reports/allchangesserverfiltered.webp)
