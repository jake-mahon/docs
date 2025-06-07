# Monitor Weak Passwords Use Case

Any Threat Prevention license can use the Password Enforcement Event type to monitor for the creation of weak passwords in your environment.

__NOTE:__ See the [Prevent Weak Passwords Use Case](/docs/product_docs/threatprevention/threatprevention/admin/policies/eventtype/usecase/preventweakpasswords.md) topic for instructions on creating a policy to block weak passwords, which requires the Threat Prevention for[ Enterprise Password Enforcer](/docs/product_docs/threatprevention/threatprevention/solutions/epe.md) solution.

Follow the steps to configure a policy to monitor the creation of weak passwords.

![EPE Settings window](/static/img/product_docs/threatprevention/threatprevention/admin/configuration/epesettings.png)

__Step 1 –__ (Must be completed by an administrator) Configure the global EPE settings for your environment.

- Click __Configuration__ > __EPE Settings__ on the menu to open the EPE Settings window.
- Download the latest copy of the HaveIBeenPwned dictionary file. See the [Download and Configure the Have I Been Pwnd Hash List](/docs/product_docs/threatprevention/threatprevention/admin/configuration/epesettings.md#Download-and-Configure-the-Have-I-Been-Pwnd-Hash-List) topic for additional information.
- Determine whether you want to deploy the dictionary to each domain controller or keep it locally on the Enterprise Manager server. See the [Considerations When Deploying the HIBP Database](/docs/product_docs/threatprevention/threatprevention/admin/configuration/epesettings.md#Considerations-When-Deploying-the-HIBP-Database) topic for additional information.
- Modify the global password rules to customize the password dictionary, word list dictionary and character substitution map. See the [Rules](/docs/product_docs/threatprevention/threatprevention/admin/configuration/epesettings.md#Rules) topic for additional information.

__Step 2 –__ Create a new policy with the Password Enforcement Event Type.

![New Monitor EPE Policy - General tab](/static/img/product_docs/threatprevention/threatprevention/admin/policies/eventtype/usecase/newmonitorepepolicy.png)

- Right-click on the __Policies > Auditing__ folder and select __New > Policy__.
- On the General tab, provide a unique descriptive name, e.g. Monitor Weak Passwords, and description, e.g. This policy monitors the creation of weak passwords according to the global EPE settings.
- On the Event Type tab, click the __Add__ (+) button and select Password Enforcement on the [Event Selection Window](/docs/product_docs/threatprevention/threatprevention/admin/policies/eventtype/overview.md#Event-Selection-Window).

![Policy - Event Type tab with the Password Enforcement event selected](/static/img/product_docs/threatprevention/threatprevention/admin/policies/eventtype/usecase/passwordrulesmonitor.png)

__Step 3 –__ Configure the event filters.

- Password Rules tab:

  - Mode – Set to Monitoring
  - Pwned DB – Check the Block if password hash is in Pwned DB box
  - Character Substitution – Check the Block if exact match substituted password box
  - Username in Password – Check all options in this category and modify values as desired
  - Repeating Patterns – Check the Block if password contains repeating pattern box and set length value as desired
  - Sequential Characters – Check the Block if contains sequential characters box and set size value as desired
  - Keyboard Layout Sequence – Check the Block if contains characters in keyboard layout sequence box and set size value as desired
  - Configure additional settings as desired
- Optionally scope the policy further by applying Domain/Servers, AD Account, AD Perpetrator, and/or Hosts (from) filters.

__Step 4 –__ Return to the General tab and enable the policy by clicking the Disabled toggle button.

__Step 5 –__ Click __Save__.

The policy is now monitoring for the creation of weak passwords in your environment. There are three methods for viewing monitored weak password events:

- Recent Events tab of the monitoring policy
- Investigate node of the Administration Console
- Investigations interface of the Netwrix Threat Manager Reporting Module

## View Events in Recent Events Tab

![Recent Events Tab for weak password monitoring](/static/img/product_docs/threatprevention/threatprevention/admin/policies/eventtype/usecase/recenteventsmonitor.png)

On the Recent Events tab of the policy, set the Show options as desired and click the Refresh button to view monitored events. See the [Recent Events Tab](/docs/product_docs/threatprevention/threatprevention/admin/policies/recentevents/overview.md) topic for additional information.

## View Events in Investigate Interface

![Investigate Interface](/static/img/product_docs/threatprevention/threatprevention/admin/policies/eventtype/usecase/invesitgatenodemonitor.png)

On the Investigate window of the Administration Console, you can use the following filter options to view monitored weak password events:

- Policy filter – Select only the policy that is monitoring for weak passwords
- Other filter – Select the Event Name option and enter "password monitored" in the text box.

Click the Refresh button to view monitored events. See the [Investigate Interface](/docs/product_docs/threatprevention/threatprevention/admin/investigate/overview.md) topic for additional information.

## View Events in Investigations Interface

On the Investigations interface of the Netwrix Threat Manager Reporting Module, create a new investigation with the following filter:

- Attribute = Policy
- Operator = Equals
- Filter = [name of monitoring policy]

See the [Investigations Interface](/docs/product_docs/threatprevention/threatprevention/reportingmodule/investigations/overview.md) topic for additional information.
