# Mailer

Netwrix Password Policy Enforcer can send email reminders to domain users before their passwords expire. This is especially useful for users who logon infrequently, and for remote users who access the network without logging on to the domain. You must install the Password Policy Enforcer Mailer and configure the email delivery and email message options to send email reminders to users.

Add your email address to a service account, and the Password Policy Enforcer Mailer will remind you to change the service account password before it expires.

## Installing the Mailer

The Password Policy Enforcer Mailer is not installed by default. Only install it on one server in each domain. The Password Policy Enforcer Mailer can be installed on any server, including a domain controller.

Follow the steps below to install the Password Policy Enforcer Mailer:

__Step 1 –__ Start the Password Policy Enforcer Installer (PPE10.2.exe).

__Step 2 –__ Read the license agreement, then click __Yes__ if you accept all the license terms and conditions.

__Step 3 –__ Select the __Advanced__ option, then click __Next__.

__Step 4 –__ Double-click the __PPE10.2.msi__ file.

__Step 5 –__ If you are prompted to Modify, Repair, or Remove the installation, select __Modify__, then click __Next__. Proceed to step 11. Do not disable the other features as described below.

__CAUTION:__ If prompted to Modify, Repair, or Remove, do not modify any settings or disable any features as described in steps 6 - 10.

__Step 6 –__ Click __Next__ when the Password Policy Enforcer Installation Wizard opens.

__Step 7 –__ Select __I accept the license agreement__, then click __Next__.

__Step 8 –__ Select the __Custom__ option, then click __Next__.

__Step 9 –__ Click the __icon__ beside the Password Policy Server feature, then click the __Entire feature will be unavailable__ button.

__Step 10 –__ Repeat the previous step for the __Management Console__, __Documentation__, and __Dictionaries__ features unless you also want to configure Password Policy Enforcer from this server.

__Step 11 –__ Click the __icon__ beside the Password Policy Enforcer Mailer Service feature, then click the __Will be installed on local hard drive__ button.

__Step 12 –__ Click __Next__ twice.

__Step 13 –__ Wait for the Password Policy Enforcer Mailer to install, then click __Finish__ twice.
