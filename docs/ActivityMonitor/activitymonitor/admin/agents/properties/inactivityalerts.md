# Inactivity Alerts Tab

The Inactivity Alerts tab, once enabled and configured, sends real-time alerts when the agent stops receiving events for a specific time frame. The tab varies based on the type of agent selected.

Check the __Enable Inactivity alerting for this agent__ box to enable the options on this tab.

![Inactivity Alerts Tab for Agent Properties](/static/img/product_docs/activitymonitor/activitymonitor/admin/agents/properties/inactivityalerts.png)

Once enabled, set the alerting parameters:

- Length of inactivity – Enter the number of Minutes, Hours, or Days for inactivity before an alert is triggered. The default is 6 Hours.
- Repeat an alert every – Enter the number of Minutes, Hours, or Days for an alert to be repeated if inactivity continues. The default is 6 Hours.

The two tabs at the bottom are for configuring the method used to send the alert:

- Syslog Alerts – Configure the application to send alerts to a SIEM platform
- Email Alerts – Configure the application to send alerts through an SMTP server

Click __OK__ to commit the modifications. Click __Cancel__ to discard the modifications. The Agent Properties window closes.

## Syslog Alerts Tab

The Syslog alert sends a notification that the activity agent has not received event data for the configured interval. The alert is sent to the Syslog configured on the __Syslog Alerts__ tab.

![inactivityalertssyslogalerts](/static/img/product_docs/activitymonitor/activitymonitor/admin/agents/properties/inactivityalertssyslogalerts.png)

- Syslog server in SERVER[:PORT] format – Type the __Syslog server name__ with a SERVER:PORT format in the text box. The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the organization’s environment can resolve the name format used.
- Syslog protocol – Identify the __Syslog protocol__ to be used for the alert. The drop-down menu includes:

  - UDP
  - TCP
  - TLS

    __NOTE:__ The TCP and TLS protocols add the __Message framing__ drop-down menu. __Message framing__ options include:

    - LS (ASCII 10) delimiter
    - CR (ASCII 13) delimiter
    - CRLF (ASCII 13, 10) delimiter
    - NUL (ASCII 0) delimiter
    - Octet Count (RFC 5425)
- Test Button – The __Test__ button sends a test message to the Syslog server to check the connection. A connection status message displays with either a green check mark or a red X identifying the success of the sent test message. Messages vary by Syslog protocol:

  - UDP – Sends a test message and does not verify connection
  - TCP/TLS – Sends test message and verifies connection
  - TLS – Shows error if TLS handshake fails
- Syslog Message Template – Select the __Syslog message template__ to be used. Click the ellipsis (…) to open the Syslog Message Template window. The Syslog template provided is __AlienVault / Generic Syslog__.

![Message Template popup window for Syslog Alerts](/static/img/product_docs/activitymonitor/activitymonitor/admin/agents/properties/inactivityalertssyslogalertsmessagetemplate.png)

Custom templates can be created. Select the desired template or create a new template by modifying an existing template within the Syslog Message Template window. The new message template is named Custom.

Click __OK__ to apply changes and exit, or __Cancel__ to exit without saving any changes.

## Email Alerts Tab

The email alert sends a notification that the activity agent has not received event data for the configured interval. The alert is sent to the configured recipients on the Email Alerts tab.

![inactivityalertsemailalerts](/static/img/product_docs/activitymonitor/activitymonitor/admin/agents/properties/inactivityalertsemailalerts.png)

- Syslog server in SERVER[:PORT] format – Type the __SMTP server name__ with a SERVER:PORT format in the text box. The server name can be short name, fully qualified name (FQDN), or IP Address, as long as the organization’s environment can resolve the name format used.

  - Check the Enable TLS box if an SMTP server requires TLS protocol.
- User Name/Password – Specify credentials to send email alert. If using the current agent’s machine account, leave these fields blank.
- From email address – Enter the Sender’s email address
- To email address – Enter the Recipient’s email address. Multiple addresses are comma separated.

![Email Alerts - Message Subject popup window](/static/img/product_docs/activitymonitor/activitymonitor/admin/agents/properties/inactivityalertsemailalertsmessagesubject.png)

- Message subject – Click the ellipsis (…) to open the Message Template window to customize the subject. Macros can be used to insert

![Email Alerts - Message Body popup window](/static/img/product_docs/activitymonitor/activitymonitor/admin/agents/properties/inactivityalertsemailalertsmessagebody.png)

- Message body – Click the ellipsis (…) to open the Message Template window to customize the body
- Test – The Test button sends a test message to the receiver’s email address to check the connection. A connection status message displays with either a green check mark or a red X identifying the success of the sent test message.

Click __OK__ to apply changes and exit, or __Cancel__ to exit without saving any changes.

## Macro Variables for Agents

Macros are text strings that are replaced with actual values at run time. The following Macro variables are available to customize the Syslog and Email message template:

| Macro | Definition |
| --- | --- |
| %SYSLOG\_DATE% | Date/Time of the alert (local time, Syslog format) |
| %TIME\_STAMP% | Date/Time of the alert (local time) |
| %TIME\_STAMP\_UTC% | Date/Time of the alert (UTC) |
| %AGENT% | Agent host name |
| %PRODUCT% | Product name |
| %PRODUCT\_VERSION% | Product Version |
| %INACTIVE\_SERVER% | Host name of the monitored host which stopped sending events |
| %INACTIVE\_SERVER\_IP% | IP address of the monitored host which stopped sending events |
| %LAST\_EVENT\_TIME\_STAMP% | Date/Time of the last received call (local time) |
| %LAST\_EVENT\_TIME\_STAMP\_UTC% | Date/Time of the last received event (UTC) |
| %INACTIVITY\_PERIOD\_MINUTES% | Period of inactivity in minutes |
| %INACTIVITY\_PERIOD\_HOURS% | Period of inactivity in hours |
