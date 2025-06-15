# Quick Start - Making and Removing Shortcuts

__NOTE:__ For some video overviews of Endpoint Policy Manager Scripts & Triggers Manager, see [https://www.policypak.com/products/policypak-scripts-manager.html](https://www.policypak.com/products/policypak-scripts-manager.html)

In this Quickstart example, we're going to deliver a shortcut to the desktop with a script. The shortcut will appear when the policy applies, and disappear when the policy no longer applies (i.e., when it "falls out of scope").

__Step 1 –__ Start out on your GPMC management station to create a group policy object (GPO) and link it to your users. In this example (Figure 7) we have a GPO created and linked it to the East Sales Users OU.

![getting_to_know_scripts_triggers_3](/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_3.webp)

Figure 7. Using Group Policy to create and link a GPO to East Sales Users.

__Step 2 –__ Edit the GPO, then go to User Configuration | Endpoint Policy Manager | Scripts & Triggers Manager as shown in Figure 8 and select Add | New Policy.

![getting_to_know_scripts_triggers_4](/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_4.webp)

Figure 8. Using the Group Policy Editor to make a new Endpoint Policy Manager Scripts & Triggers Manager policy.

__Step 3 –__ When you do this, the Endpoint Policy Manager Scripts & Triggers Manager Wizard appears. Click "Next" to continue.

__Step 4 –__ At the "On apply action" page, select "PowerShell script," then paste in the contents from the PS\Create_PolicyPak_Shortcut.ps1 file from the PS folder included in the downloaded examples. The result can be seen in Figure 9.

![getting_to_know_scripts_triggers_5](/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_5.webp)

Figure 9. Using Endpoint Policy Manager Scripts & Trigger Manager to deliver a PowerShell script.

It should be noted that "Run interactively" is not checked in this example. This option should be used when you want to see an individual script perform its work, or if the user needs to interact with the script.

__NOTE:__ The "Run interactively" option is not available when the policy specifies that a script is meant for computers.

__Step 5 –__ On the "On revert action" page, select "PowerShell script," then copy in the Remove_PolicyPak_Shortcut.ps1 script contents, as seen in Figure 10.

![getting_to_know_scripts_triggers_6](/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_6.webp)

Figure 10. Setting up a Revert Action script when the policy no longer applies.

__Step 6 –__ Click "Next" to continue. You will encounter the "Specify process mode" screen seen in Figure 11.

![getting_to_know_scripts_triggers_7](/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_7.webp)

Figure 11. Specifying when the script should run.

The "Specify process mode" page enables you to dictate when a script will apply.

- Always: Will apply every time a policy processes.

  - For Group Policy, this coincides with login, and runs in the background about every 90 minutes or so, when a DC is available.
  - For Endpoint Policy Manager Cloud, this is every 60 minutes. (If you can see the Endpoint Policy Manager Cloud service.)
  - For Endpoint Policy Manager + MDM, this will apply user policies on login and on the computer side. "Switched" policies, explained later, should apply when the Endpoint Policy Manager service starts or restarts (for example, on a reboot).
- Once: Will only apply one time when the policy is initially placed on the machine (when using Group Policy, Microsoft Endpoint Manager, or an MDM method).
- Once or when forced: Will initially apply only one time, but you can re-run the policy and its script by running``` gpupdate /force``` when using Group Policy or ```ppupdate /force``` when using any other policy deployment method.

__Step 7 –__ For this Quickstart example, select the default and click "Next." At the "Policy settings" page, give the policy a name like "Desktop icon on and off." Leave the State and Item-Level Targeting fields set with the defaults, as shown in Figure 12, and click "Finish."

![getting_to_know_scripts_triggers_8](/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_8.webp)

Figure 12. Endpoint Policy Manager Scripts & Triggers Manager Wizard final settings page.

The result of the policy you created can be seen in an entry like the one shown in Figure 13.

![getting_to_know_scripts_triggers_9](/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_9.webp)

Figure 13. The new Endpoint Policy Manager scripts policy in the Group Policy Editor.

You can also validate that your settings are contained within the GPO by looking at the Group Policy HTML settings report in the GPMC, as shown in Figure 14.

![getting_to_know_scripts_triggers_10](/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_10.webp)

Figure 14. Endpoint Policy Manager Scripts & Triggers Manager items appear in the GPMC reports.

__Step 8 –__ Now for testing, log into the endpoint as a new or existing user for whom the policy applies. In this example, we'll log in as EastSalesUser8. When logging in, you'll see the policy apply the script and an icon like the one shown in Figure 15 will be visible.

![getting_to_know_scripts_triggers_11](/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_11.webp)

Figure 15. An example of a Endpoint Policy Manager Scripts & Triggers Manager PowerShell script on the endpoint.

__Step 9 –__ To complete testing, go back to the GPMC, and un-link the GPO to make it stop applying, as seen in Figure 16.

![getting_to_know_scripts_triggers_12](/img/product_docs/policypak/policypak/scriptstriggers/gettoknow/getting_to_know_scripts_triggers_12.webp)

Figure 16. Make a policy stop applying by removing the "Link Enabled" settings in the GPMC.

The policy has now fallen out of scope and will stop applying. Back on the endpoint, run GPupdate. When you do, the "Off" script will run and the "Visit Endpoint Policy Manager" icon will disappear.
