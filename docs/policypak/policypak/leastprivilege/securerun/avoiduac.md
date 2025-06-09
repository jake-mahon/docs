# Creating Rules to Avoid UAC Prompts and Other Dialogs

Over time, once SecureRun is on, you will likely still get some application attempting to update in the background, which will cause a pop-up explaining a blocking attempt.

Once you have learned which programs are causing the pop-ups, you can decide to create an Allow and Log rule, an Elevate rule, or a Deny rule. The rule type you choose depends on the application and what you’re trying to do.

When SecureRun is turned on, the typical action needed is Allow and Log through a command line rule. For instance, to allow Java to attempt to keep updating, you would set a Path Condition and set a rule to Allow and Log a command line.

![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/securerun/creating_rules_to_avoid_uac.jpg)

The example below show a Combo rule enabling OneDriveSetup.exe to keep running (__Path Condition__ and __Command-line Condition__) with the Allow and Log action.

For more information on Combo rules, see [Creating and Using Executable Combo Rules](/docs/policypak/policypak/leastprivilege/bestpractices/rules/executablecombo.md)

![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/securerun/creating_rules_to_avoid_uac.png)

![A screenshot of a computer

Description automatically generated](/img/product_docs/policypak/policypak/leastprivilege/securerun/creating_rules_to_avoid_uac_1.jpg)

After the rules are created, you should not see pop-ups from installers with rules in place.
