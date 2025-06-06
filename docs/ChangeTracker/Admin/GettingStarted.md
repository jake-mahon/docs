---
id: gettingstarted
title: Getting Started
---

# Getting Started

Once you have successfully installed Netwrix Change Tracker, and logged in for the first time (see 2FA section below), you can start putting it to work. Change Tracker can collect data for the reports with or without agents. By default, an agent is installed on the Change Tracker machine, so you can quickly check the data collection and reports using that agent. Alternatively, you can collect data from other devices in your network. Either way, your starting point will be the [Device Tab](Tabs/Devices.md "Device Tab").

Once you have established data collection, use the Reports tab to view reports on you device's configuration.

Next, use the [Planned Changes Tab](Tabs/PlannedChanges.md "Planned Changes Tab") manage change events and filter any changes that are considered as noise.

## Two Factor Authentication

Once registered with your authenticator app, use it to provide a One-Time Passcode (OTP) to complete the 2FA registration.

A One-Time Passcode (OTP) must now be provided during the sign in process.

security > auth > twoFactor > "registerAdmin": "false"

security > auth > twoFactor > "fallbackEnabled": "true" (default setting)

![](/img/changetracker/admin/2FAConfiguration.png)

A One-Time Passcode (OTP) may be required when attempting certain actions within Change Tracker for the first time during a session. Without 2FA or an authenticator app, this OTP will be written to the application log file (C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\logs\hubservice-log.txt) which is only accessible by local admins.