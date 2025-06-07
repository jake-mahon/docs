# Reporting

The Reporting node is for configuring the global settings for publishing Access Analyzer reports. The Web Console is where any reports which have been published can be viewed outside of the Access Analyzer Console. The Web Console provides a consolidated logon housing both the published reports and the AIC (when applicable).

![Global Settings Reporting page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/reporting.png)

The publishing of reports can be disabled at the global level by selecting __Do not publish reports__ from the Publish Option drop-down menu. It can also be disabled at the job group, job, or report configuration level. See the [Jobs Tree](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/jobs/overview.md) topic for additional information.

The __Cancel__ and __Save__ buttons are in the lower-right corner of the Reporting view. These buttons become enabled when modifications are made to the Reporting global settings. Whenever changes are made at the global level, click __Save__ and then __OK__ to confirm the changes. Otherwise, click __Cancel__ if no changes were intended.

## Website URL

The Website URL field contains address for the hosted website, the Web Console, where the published reports reside.

![Website URL on Global Settings Reporting page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/websiteurl.png)

The default address is:

http://[Fully Qualified Domain Name of the Access Analyzer Console server]:8082

This link is used to access the Web Console, and it is used for the web link in an emailed report. The protocol and port number may need to be modified to align with the organization’s environment, but it must match the information in the website’s configuration file. If the Web Console has been secured, this address must be manually updated:

https://[Fully Qualified Domain Name of the StealthAUDIT Console server]:[Port Number]

__NOTE:__ Any browser used to access the Web Console must have JavaScript allowed for the site. See the [Configure JavaScript Settings for the Web Console](#Configure-JavaScript-Settings-for-the-Web-Console) topic for additional information.

## Publish Option

The Publish Option allows you to enable or disable the publishing of reports at the global level.

![Publish Option on Global Settings Reporting page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/publish.png)

Select the __Publish reports__ option to publish all Access Analyzer reports or select __Do not publish reports__ to disable the publishing. The inheritance of this setting can be broken at the job group, job, or report levels.

### Email Report Options

Configure email reports sent out by Access Analyzer using the Email Report options.

![Email options on Global Settings Reporting page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/email.png)

The __E-mail reports__ checkbox enables recipients to receive all published reports, unless inheritance is broken at the job group, job, or report level. Separate multiple recipients with a semicolon. If commas are used as delimiters for email addresses, they will be converted into semicolons when the settings are saved.

___RECOMMENDED:___ Configure email reporting at a specific level to ensure recipients only receive reports which apply to them.

__NOTE:__ Email reports does not work unless Access Analyzer has been configured to send email notifications through the __Notification__ node. See the [Notification](/docs/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/notification.md) topic for additional information.

The __Do Not Email Report If Blank__ checkbox prevents reports from being sent via email if all elements are blank when generated. A blank report can occur if there is an error in data collection or if the report is configured for data which might not always be present (for example, new computer objects created since last scan).

___RECOMMENDED:___ Enable the __Do Not Email Report If Blank__ option.

The report can be sent using the desired __Email Content__ option:

- Web Link – Sends an email notice that the report has been published and provides the recipient with a link to it in the Web console
- Embedded HTML – Sends the report embedded inside the email using HTML format
- Data Tables as CSV (No Charts) – Attaches the complete data set (as configured within the report, without row limit) to an email as a CSV file, excluding any charts
- PDF – Attaches the report to an email as a PDF file

The __Subject(Prefix)__ field identifies the prefix of the email subject line, unless inheritance is broken at the job group, job, or report level. The prefix appears in the email header preceding the report name. If left blank, Access Analyzer applies a prefix of ```Access Analyzer Report``` to the email subject line.

## Configure JavaScript Settings for the Web Console

Any browser used to access the Web Console must have JavaScript allowed for all features of the Web Console to function correctly. If the JavaScript permission is not set as allowed for the entire browser, you must add the Web Console as an allowed site.

Follow the steps to allow JavaScript on the Web Console in Microsoft Edge.

__Step 1 –__ Open Microsoft Edge Settings.

![javascriptsitepermissions](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/javascriptsitepermissions.png)

__Step 2 –__ Go to the __Cookies and site permissions__ settings page, and click __JavaScript__ under All permissions.

![javascriptsettings](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/settings/javascriptsettings.png)

__Step 3 –__ Click  __Add__ in the Allow section. On the Add a site window, enter the URL for the Web Console and click __Add__.

__NOTE:__ If the global Allowed option is selected, you do not need to specifically add the Web Console as an allowed site.

The Web Console's URL is added to the Allow list and JavaScript is enabled for the Web Console.
