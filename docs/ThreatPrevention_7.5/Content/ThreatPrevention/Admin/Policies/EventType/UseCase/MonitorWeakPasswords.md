---
sidebar_position: 6855
title: Monitor Weak Passwords Use Case
---

# Monitor Weak Passwords Use Case

Any Threat Prevention license can use the Password Enforcement Event type to monitor for the creation of weak passwords in your environment.

**NOTE:** See the [Prevent Weak Passwords Use Case](PreventWeakPasswords "Prevent Weak Passwords Use Case") topic for instructions on creating a policy to block weak passwords, which requires the Threat Prevention for[Enterprise Password Enforcer](../../../../Solutions/EPE " Enterprise Password Enforcer") solution.

Follow the steps to configure a policy to monitor the creation of weak passwords.

![EPE Settings window](../../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Configuration/EPE/EPESettings.png "EPE Settings window")

**Step 1 –** (Must be completed by an administrator) Configure the global EPE settings for your environment.

* Click **Configuration** > **EPE Settings** on the menu to open the EPE Settings window.
* Download the latest copy of the HaveIBeenPwned dictionary file. See the [Download and Configure the Have I Been Pwnd Hash List](../../../Configuration/EPESettings#Download "Download and Configure the Have I Been Pwnd Hash List") topic for additional information.
* Determine whether you want to deploy the dictionary to each domain controller or keep it locally on the Enterprise Manager server. See the [Considerations When Deploying the HIBP Database](../../../Configuration/EPESettings#Consider "Considerations When Deploying the Pwned Database") topic for additional information.
* Modify the global password rules to customize the password dictionary, word list dictionary and character substitution map. See the [Rules](../../../Configuration/EPESettings#Rules "Rules") topic for additional information.

**Step 2 –** Create a new policy with the Password Enforcement Event Type.

![New Monitor EPE Policy - General tab](../../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Configuration/EPE/NewMonitorEPEPolicy.png "New Monitor EPE Policy - General tab")

* Right-click on the **Policies > Auditing** folder and select **New > Policy**.
* On the General tab, provide a unique descriptive name, e.g. Monitor Weak Passwords, and description, e.g. This policy monitors the creation of weak passwords according to the global EPE settings.
* On the Event Type tab, click the **Add** (+) button and select Password Enforcement on the [Event Selection Window](../Overview#Event "Event Selection Window").

![Policy - Event Type tab with the Password Enforcement event selected](../../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Configuration/EPE/PasswordRulesMonitor.png "Policy - Event Type tab with the Password Enforcement event selected")

**Step 3 –** Configure the event filters.

* Password Rules tab:

  * Mode – Set to Monitoring
  * Pwned DB – Check the Block if password hash is in Pwned DB box
  * Character Substitution – Check the Block if exact match substituted password box
  * Username in Password – Check all options in this category and modify values as desired
  * Repeating Patterns – Check the Block if password contains repeating pattern box and set length value as desired
  * Sequential Characters – Check the Block if contains sequential characters box and set size value as desired
  * Keyboard Layout Sequence – Check the Block if contains characters in keyboard layout sequence box and set size value as desired
  * Configure additional settings as desired
* Optionally scope the policy further by applying Domain/Servers, AD Account, AD Perpetrator, and/or Hosts (from) filters.

**Step 4 –** Return to the General tab and enable the policy by clicking the Disabled toggle button.

**Step 5 –** Click **Save**.

The policy is now monitoring for the creation of weak passwords in your environment. There are three methods for viewing monitored weak password events:

* Recent Events tab of the monitoring policy
* Investigate node of the Administration Console
* Investigations interface of the Netwrix Threat Manager Reporting Module

## View Events in Recent Events Tab

![Recent Events Tab for weak password monitoring](../../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Configuration/EPE/RecentEventsMonitor.png "Recent Events Tab for weak password monitoring")

On the Recent Events tab of the policy, set the Show options as desired and click the Refresh button to view monitored events. See the [Recent Events Tab](../../RecentEvents/Overview "Recent Events Tab") topic for additional information.

## View Events in Investigate Interface

![Investigate Interface](../../../../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/Configuration/EPE/InvesitgateNodeMonitor.png "Investigate Interface")

On the Investigate window of the Administration Console, you can use the following filter options to view monitored weak password events:

* Policy filter – Select only the policy that is monitoring for weak passwords
* Other filter – Select the Event Name option and enter "password monitored" in the text box.

Click the Refresh button to view monitored events. See the [Investigate Interface](../../../Investigate/Overview "Investigate Interface") topic for additional information.

## View Events in Investigations Interface

On the Investigations interface of the Netwrix Threat Manager Reporting Module, create a new investigation with the following filter:

* Attribute = Policy
* Operator = Equals
* Filter = [name of monitoring policy]

See the [Investigations Interface](../../../../ReportingModule/Investigations/Overview "Investigations Interface") topic for additional information.