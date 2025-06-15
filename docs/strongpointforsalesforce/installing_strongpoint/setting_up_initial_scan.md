# Set Up the Initial Scan

The Metadata Scanner form is displayed.

![getting_started_wizard5](../../../static/img/product_docs/strongpointforsalesforce/installing_strongpoint/getting_started_wizard5.webp)

## Sandbox Options

If you are installing in a sandbox, there is an option for __Change Log Creation__. If __Enabled__, change logs are created in the sandbox. Due to Salesforce space limits on different [sandbox accounts](https://help.salesforce.com/articleView?id=data_sandbox_environments.htmandtype=5), you may want to disable change logs to save space. This option can also be accessed on the [Configuration and Stats](config_and_stats.md) page for the sandbox.

Here are the options for a Sandbox installation. Be sure to __Save__ each setting you change. Scroll down to find the Scanner options.

![Sandbox installation options](../../../static/img/product_docs/strongpointforsalesforce/installing_strongpoint/getting_started_wizard5_sandbox.webp)

## Start Initial Scan

Scroll down to the Metadata Scanner section.

![Scroll to the Scanner section](../../../static/img/product_docs/strongpointforsalesforce/installing_strongpoint/getting_started_wizard5_scan.webp)

1. Click the + by __Name__ to select all types for the initial scan.
2. Click __Run Scanner__. A notification message displays when the scan starts.
3. Click __Next__.

## Schedule Automatic Scans

You can schedule the scanners to auto-scan your environment:

1. Toggle __Enabled__ to activate a scan. Hover over the __?__ for details on the scan.
2. Select the __Frequency__ and __Day__. If you do not specify a time Platform Governance for Salesforce rescans at midnight.

   ![getting_started_wizard6](../../../static/img/product_docs/strongpointforsalesforce/installing_strongpoint/getting_started_wizard6.webp)

   Netwrix recommends you schedule at least the following items:

   - __Automated Scan__: Daily
   - __Field Usage & DLU__: Weekly
   - __Standard Fields Scan__: Weekly
   - __PermissionSet Assignment__: Weekly (Production orgs)
   - __Subscriber Users Scan__: Weekly (Production orgs)
3. Click __Next__.

The final screen is displayed. Click __Done__ to close the wizard.

![getting_started_wizard8](../../../static/img/product_docs/strongpointforsalesforce/installing_strongpoint/getting_started_wizard8.webp)

If you open the home page, you see the __Scanner Status__ is __In Progress__.

![Scanner status on home page](../../../static/img/product_docs/strongpointforsalesforce/installing_strongpoint/getting_started_wizard11.webp)

__Next Step:__ [Run the Scanner](running_scanner.md)
