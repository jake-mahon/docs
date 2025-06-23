---
title: Deployment Reports and Tracking
sidebar_label: Deployment Reports
description: Track successful deployments, deployment failures, pending approvals, and rollback logs with comprehensive deployment reporting and analysis tools.
---

# Success Deployments

This built-in report is available from **Reports** > **Release and Deployment** > **Success
Deployments**

The **Report Generation Status** should be **Complete**. If not, run the report again.

Click on any of the report columns to change the sort order. The á or â arrow in the column heading
indicates the current column and sort order being used for the results.

### Report Options

> **Summarize information by**: Select a criteria from the list to have the results summarized and
> grouped. Default is **# of Test Errors**.
>
> **Show**: Select the criteria for the deployment logs to show. Default is **All deployment logs**.
>
> **Time Frame**: Select the **Date Field** to be used for the report, the **Range**, and adjust the
> **From** and **To** fields as needed. The default **Date Field** is **Completed Date**, **Range**
> is **Custom** and **From/To** is blank. Date format is _dd/mm/yyyy_.
>
> **Run Report**: Runs (**Run Report Now**) the report using the selected report options. Or, click
> on the arrow to open the **Schedule Future Runs** option.
>
> **Hide Details/Show Details**: **Hide Details** hides the report body and **Show Details**
> restores the report view.
>
> **Customize**: Opens the **Report Options**. You can change the table format, details, and
> included columns.
>
> **Save**: Opens the **Save** dialog with the current file name options.
>
> **Save As**: Opens the **Save As** dialog with blank fields.
>
> **Delete**: Prompts you to confirm deleting the report. Click **OK** to delete or **Cancel** to
> keep the report.
>
> **Printable View**: Creates the file _report###.xls_.
>
> **Export Details**: Opens the **Export Report** options. Select the encoding and format (xls or
> csv) for the exported file. Click **Export** to generate the _report###_ file. Click **Done** to
> return to the report.
>
> **Subscribe**: Opens the **Report Subscription** dialog. Select the subscription options.
>
> **Filtered By**: Shows the current filters for the report. You can **Edit** or **Clear** the
> filters.

## Report Results

> **Deployment Log Name**: Link to the deployment log.
>
> **Owner Name**: Link to the deployment log owner information.
>
> **Start Date** ; The date and time of the deployment. Format is _dd/mm/yyyy hh:mm_
>
> **Retrieve Status**: Green flag indicates success, red flag indicates failure.
>
> **Deployment Status**: Green flag indicates success, red flag indicates failure.
>
> **Change Request**: Link to the change request for the deployment.
>
> **Components Total**: Total number of components.
>
> **Components Deployed**: Number of components deployed.
>
> **Customizations**: Customizations for the deployment.
>
> **Tests Selected**: Number of selected tests.

![Successful Deployment Logs Report](/img/product_docs/platgovsalesforce/reports/report_deploy_success.webp)

# Deployments with Failures

This built-in report is available from **Reports** > **Release and Deployment** > **Deployments with
Failures**

The **Report Generation Status** should be **Complete**. If not, run the report again.

Click on any of the report columns to change the sort order. The á or â arrow in the column heading
indicates the current column and sort order being used for the results.

### Report Options

> **Summarize information by**: Select a criteria from the list to have the results summarized and
> grouped. Default is **# of Test Errors**.
>
> **Show**: Select the criteria for the deployment logs to show. Default is **All deployment logs**.
>
> **Time Frame**: Select the **Date Field** to be used for the report, the **Range**, and adjust the
> **From** and **To** fields as needed. The default **Date Field** is **Completed Date**, **Range**
> is **Custom** and **From/To** is blank. Date format is _dd/mm/yyyy_.
>
> **Run Report**: Runs (**Run Report Now**) the report using the selected report options. Or, click
> on the arrow to open the **Schedule Future Runs** option.
>
> **Hide Details/Show Details**: **Hide Details** hides the report body and **Show Details**
> restores the report view.
>
> **Customize**: Opens the **Report Options**. You can change the table format, details, and
> included columns.
>
> **Save**: Opens the **Save** dialog with the current file name options.
>
> **Save As**: Opens the **Save As** dialog with blank fields.
>
> **Delete**: Prompts you to confirm deleting the report. Click **OK** to delete or **Cancel** to
> keep the report.
>
> **Printable View**: Creates the file _report###.xls_.
>
> **Export Details**: Opens the **Export Report** options. Select the encoding and format (xls or
> csv) for the exported file. Click **Export** to generate the _report###_ file. Click **Done** to
> return to the report.
>
> **Subscribe**: Opens the **Report Subscription** dialog. Select the subscription options.
>
> **Filtered By**: Shows the current filters for the report. You can **Edit** or **Clear** the
> filters.

## Report Results

> **Deployment Log Name**: Link to the deployment log.
>
> **Start Date** ; The date and time of the deployment. Format is _dd/mm/yyyy hh:mm_
>
> **Change Request**: Link to the change request for the deployment.
>
> **Retrieve Status**: Green flag indicates success, red flag indicates failure.
>
> **Deployment Status**: Green flag indicates success, red flag indicates failure.
>
> **Owner Name**: Link to the deployment log owner information.
>
> **Customizations**: Customizations for the deployment.
>
> **Component Errors**: Number of components with errors.
>
> **Components Total**: Number of components deployed.
>
> **Deploy Error Messages**: Deploy error messages if available.
>
> **Retrieve Error Message**: Retrieve error message if available.
>
> **Tests Error Message**: Test error message if available.
>
> **# of Test Errors**: Total number of errors.

![Deployment Log  Report with Failures](/img/product_docs/platgovsalesforce/reports/report_deploy_failures.webp)

# Deployments Pending Approval Report

This built-in report is available from **Reports** > **Release and Deployment** > **Deployments
pending approval**

The **Report Generation Status** should be **Complete**. If not, run the report again.

Click on any of the report columns to change the sort order. The á or â arrow in the column heading
indicates the current column and sort order being used for the results.

### Report Options

> **Summarize information by**: Select a criteria from the list to have the results summarized and
> grouped. Default is **None**.
>
> **Show**: Select the criteria for the deployment logs to show. Default is **All change requests**.
>
> **Time Frame**: Select the **Date Field** to be used for the report, the **Range**, and adjust the
> **From** and **To** fields as needed. The default **Date Field** is **Deployment Date**, **Range**
> is **Custom** and **From/To** is blank. Date format is _dd/mm/yyyy_.
>
> **Run Report**: Runs (**Run Report Now**) the report using the selected report options. Or, click
> on the arrow to open the **Schedule Future Runs** option.
>
> **Hide Details/Show Details**: **Hide Details** hides the report body and **Show Details**
> restores the report view.
>
> **Customize**: Opens the **Report Options**. You can change the table format, details, and
> included columns.
>
> **Save**: Opens the **Save** dialog with the current file name options.
>
> **Save As**: Opens the **Save As** dialog with blank fields.
>
> **Delete**: Prompts you to confirm deleting the report. Click **OK** to delete or **Cancel** to
> keep the report.
>
> **Printable View**: Creates the file _report###.xls_.
>
> **Export Details**: Opens the **Export Report** options. Select the encoding and format (xls or
> csv) for the exported file. Click **Export** to generate the _report###_ file. Click **Done** to
> return to the report.
>
> **Subscribe**: Opens the **Report Subscription** dialog. Select the subscription options.
>
> **Filtered By**: Shows the current filters for the report. You can **Edit** or **Clear** the
> filters.

## Report Results

> **Change Request Name**: Link to the change request for the deployment.
>
> **Change Request: Created Date**: The created date of the change request. Format is _dd/mm/yyyy_
>
> **Change Request: Owner Name**: Link to the change request owner information.
>
> **Customizations**: Customizations for the deployment.
>
> **Change Stage**
>
> Change level required and stage for the deployment.
>
> **Change Policy**: Link to the change policy.
>
> **Completion Status**: Current status.
>
> **Target Environment**: Target environment for the deployment.
>
> **Source Environment**: Source environment for the deployment.

![report_deploy_pend_approval](/img/product_docs/platgovsalesforce/reports/report_deploy_pend_approval.webp)

# Rollback Logs

This built-in report is available from **Reports** > **Release and Deployment** > **Rollback Logs**

The **Report Generation Status** should be **Complete**. If not, run the report again.

Click on any of the report columns to change the sort order. The á or â arrow in the column heading
indicates the current column and sort order being used for the results.

### Report Options

> **Summarize information by**: Select a criteria from the list to have the results summarized and
> grouped. Default is **# of Test Errors**.
>
> **Show**: Select the criteria for the deployment logs to show. Default is **All deployment logs**.
>
> **Time Frame**: Select the **Date Field** to be used for the report, the **Range**, and adjust the
> **From** and **To** fields as needed. The default **Date Field** is **Completed Date**, **Range**
> is **Custom** and **From/To** is blank. Date format is _dd/mm/yyyy_.
>
> **Run Report**: Runs (**Run Report Now**) the report using the selected report options. Or, click
> on the arrow to open the **Schedule Future Runs** option.
>
> **Hide Details/Show Details**: **Hide Details** hides the report body and **Show Details**
> restores the report view.
>
> **Customize**: Opens the **Report Options**. You can change the table format, details, and
> included columns.
>
> **Save**: Opens the **Save** dialog with the current file name options.
>
> **Save As**: Opens the **Save As** dialog with blank fields.
>
> **Delete**: Prompts you to confirm deleting the report. Click **OK** to delete or **Cancel** to
> keep the report.
>
> **Printable View**: Creates the file _report###.xls_.
>
> **Export Details**: Opens the **Export Report** options. Select the encoding and format (xls or
> csv) for the exported file. Click **Export** to generate the _report###_ file. Click **Done** to
> return to the report.
>
> **Subscribe**: Opens the **Report Subscription** dialog. Select the subscription options.
>
> **Filtered By**: Shows the current filters for the report. You can **Edit** or **Clear** the
> filters.

## Report Results

> **Deployment Log Name**: Link to the deployment log.
>
> **Owner Name**: Link to the deployment log owner information.
>
> **Start Date** ; The date and time of the deployment. Format is _dd/mm/yyyy hh:mm_
>
> **Change Request**: Link to the change request for the deployment.
>
> **Customizations**: Customizations for the deployment.
>
> **Components Deployed**: Number of components deployed.

![Deployment Rollback Report](/img/product_docs/platgovsalesforce/reports/report_deploy_rollbacks.webp)

# Environment Compare Logs

This built-in report is available from **Reports** > **Release and Deployment** > **Environment
Compare Logs**

The **Report Generation Status** should be **Complete**. If not, run the report again.

Click on any of the report columns to change the sort order. The á or â arrow in the column heading
indicates the current column and sort order being used for the results.

### Report Options

> **Summarize information by**: Select a criteria from the list to have the results summarized and
> grouped. Default is **# of Test Errors**.
>
> **Show**: Select the criteria for the deployment logs to show. Default is **All deployment logs**.
>
> **Time Frame**: Select the **Date Field** to be used for the report, the **Range**, and adjust the
> **From** and **To** fields as needed. The default **Date Field** is **Completed Date**, **Range**
> is **Custom** and **From/To** is blank. Date format is _dd/mm/yyyy_.
>
> **Run Report**: Runs (**Run Report Now**) the report using the selected report options. Or, click
> on the arrow to open the **Schedule Future Runs** option.
>
> **Hide Details/Show Details**: **Hide Details** hides the report body and **Show Details**
> restores the report view.
>
> **Customize**: Opens the **Report Options**. You can change the table format, details, and
> included columns.
>
> **Save**: Opens the **Save** dialog with the current file name options.
>
> **Save As**: Opens the **Save As** dialog with blank fields.
>
> **Delete**: Prompts you to confirm deleting the report. Click **OK** to delete or **Cancel** to
> keep the report.
>
> **Printable View**: Creates the file _report###.xls_.
>
> **Export Details**: Opens the **Export Report** options. Select the encoding and format (xls or
> csv) for the exported file. Click **Export** to generate the _report###_ file. Click **Done** to
> return to the report.
>
> **Subscribe**: Opens the **Report Subscription** dialog. Select the subscription options.

## Report Results

> **FLO Environment Compare Log Name**: Link to the environment compare log.
>
> **Different Records Count**: Number of different records between the compared environments.
>
> **User**: Link to the requesting user's information.
>
> **Change Request**: Link to the change request.
>
> **Compare Filters**: Filters used to run the comparison.
>
> **Created Date**: Date of the environment compare. Format is _dd/mm/yyyy_

![Environment Compare Log Report](/img/product_docs/platgovsalesforce/reports/report_deploy_env_compare.webp)

## Sample Environment Compare Log

Click on a **Log Name** link to open the log.

![Example Environment Compare Log](/img/product_docs/platgovsalesforce/reports/deploy_compare_env_log.webp)
