# Add Subscription

A subscription sends the report results for an investigation to recipients via email as an attachment. Click the Subscriptions link to open the Subscription to window. You can specify recipients to receive this report as an email attachment in a specified format.

![Subscription window](/img/product_docs/threatprevention/threatprevention/reportingmodule/investigations/options/subscription.png)

__NOTE:__ This option requires an email server to be configured.If this requirement is not met, a message will appear in the window. See the[Email Page](/docs/threatmanager/threatmanager/administration/configuration/integrations/email.md) section for additional information.

## Subscribe to an Investigation

Follow the steps to subscribe to an investigation.

__Step 1 –__ From the desired investigation, click __Subscriptions__. The Subscription window opens.

The name of the respective investigation is displayed as a link. Click it to view the filter defined for the investigation.

__Step 2 –__ By default the subscription is enabled. You can disable it with the toggle button by the window name.

__Step 3 –__ Modify the subscription name as desired in the Subscription name field. The default name is: Subscription for {{Investigation\_Name}}. This variable will be replaced with the name of the investigation. The + button opens a variable menu for the field.

__Step 4 –__ Enter the email addresses for the recipients of this report subscription in the Recipients box.

__Step 5 –__ Set the start date, time, and timezone for the selected frequency:

- Start date – This field opens a calender. You can also type a date in the field.
- Time – This field opens a clock. You can also type a date in the field.
- Timezone – This field opens a drop-down menu. Select the desired timezone.

__Step 6 –__ Set a frequency. Options in the Frequency drop-down menu are: Once, Daily, Weekly, and Monthly. Ensure the frequency does not exceed the "Time to Retain" settings for the System Jobs configured in the System Settings interface.

__Step 7 –__ There are two additional settings in the Advanced Options section. Click the arrow to expand this section.

__Step 8 –__ Modify the email subject line in the Email subject field as desired. The default name is: Subscription to{{Investigation\_Name}} at {{Date}}. These variables will be replaced with the name of the investigation and the date of the report. The + button opens a variable menu for the field.

__Step 9 –__ Set the file name in the File name field. The default name is: {{Investigation\_Name}}\_{{Date}}. This variable will be replaced with the name of the investigation. The + button opens a variable menu for the field.

__Step 10 –__ Select the file format for the export from the drop-down menu: CSV, PDF, JSON, Excel Viewing.

__Step 11 –__ Click __Save__. The Subscription export window closes.

The subscription is listed on the Subscriptions and Exports page of the Investigations interface.

See the [Subscriptions and Exports Page](/docs/threatmanager/threatmanager/administration/investigations/subscriptionsexports.md) topic for additional information.
