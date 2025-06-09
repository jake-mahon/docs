# Compromised Password Check

The Compromised Password Checker finds compromised passwords. Users can be notified via email and advised or forced to change their password. The check can be scheduled to check existing passwords against a compromised hash list at any time.

__NOTE:__ Create the __Compromised Passwords Base__ file prior to enabling the Compromised Password Check. See the [HIBP Updater](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/hibpupdater.md) topic for instructions.

The Compromised Password Checker is launched from the Configuration Console:

Click __Start__ > __Netwrix Password Policy Enforcer__ > __PPE Configuration__  
or   
Double click the __PPE Configuration__ desktop shortcut.

Click the __Compromised Passwords__ tile on the Configuration Console dashboard. This feature is only available when __domain__ is selected with the [Connected To](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/configconsole.md#connected-to) configuration setting. The Compromised Password Check is disabled by default, and the schedule is set to __None__.

Click the __Compromised Password Check__ toggle to enable/disable the feature.

![Compromised Password Check](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/compromisedpasswords.png)

- __Compromised Passwords Base__ specify the database to use when checking for compromised passwords. Netwrix recommends using the [HIBP Updater](/docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/hibpupdater.md) to create this database. Click __Browse__ to navigate to the folder. Default is __C:\HIBP\DB__
- __Domain Controller (FQDN)__ specify the fully qualified domain controller name where you want to run the password check. Click __Browse__ and select from the list.
- __Log events in Windows Application Event Viewer__ select this option if you want to log events.
- __Force users to change password__ select this option to force users to change compromised passwords.
- __Recipient of the full report on the found compromised passwords__ specify the email address of the administrator who should receive the full report.
- __From__ specify the email sender.
- __Notify users whose passwords are compromised by email__ select this option to send email notification to users their password appears in the compromised list.
- __Set up email__ click to set up the email message for users. Enter the __From__ address and edit the subject and body template as needed. Click __Apply__ to save changes.

  ![Email user notification of compromised password](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/emailusernotification.png)

Click __Save__ to save your settings before running the check or setting up a schedule.

Click __Run now__ to run the check. Depending on your network, the check can take quite a while to complete. You can schedule it for off hours instead of running it now.

Here is an example of the compromised passwords list:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| List of compromised passwords |  |  |  |  |
| User | Account | Sid | Email | Description |
| admin | Administrator | S-1-5-21-1006207104-1546379664-2458629591-500 |  | Sending emails is not possible due to the lack of an email address in the account. |
| user2 | user2 | S-1-5-21-1006207104-1546379664-2458629591-1118 | user2@company.com | Email has been sent |

#### Schedule the Compromised Password Check

Click __Schedule__ to set up a schedule to run the Compromised Password Check.

![Schedule the Compromised Password Policy Check](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/compromisedpasswordsschedule.png)

Select the __Frequency__:

- None: no scheduled runs.
- Run now: run the check now. No scheduled runs.
- Once: set the __Start date__ and __Start time__ to run the check a single time.
- Daily: set the __Start date__ and __Start time__ to run the check daily.
- Weekly: set the __Start date__, __Start time__ and select the day of the week to run the check weekly.
- Monthly: set the __Start date__, __Start time__ and select the day of the month to run the check monthly.

Click __Apply__.
