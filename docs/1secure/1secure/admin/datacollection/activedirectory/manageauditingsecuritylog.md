# Configure the Manage Auditing and Security Log Policy

Perform this procedure only if the account selected for data collection is not a member of the Domain Admins group.

__Step 1 –__ Open the __Group Policy Management__ console on any domain controller in the target domain: navigate to Start > Windows Administrative Tools__→ Group Policy Management.__

__Step 2 –__ In the left pane, navigate to __Forest: <forest\_name> → Domains → <domain\_name> → Domain Controllers__. Right-click the effective domain controllers policy (by default, it is the __Default Domain Controllers Policy__), and select __Edit__ from the pop-up menu.

__Step 3 –__ In the __Group Policy Management Editor__ dialog, expand the __Computer Configuration__ node on the left and navigate to __Policies → Windows Settings → Security Settings → Local Policies.__

__Step 4 –__ On the right, double-click the __User Rights Assignment__ policy.

__Step 5 –__ Locate the __Manage auditing and security log__ policy and double-click it.

__Step 6 –__ In the __Manage auditing and security log Properties__ dialog, click __Add User or Group__, specify the user that you want to define this policy for.

__Step 7 –__ Navigate to __Start → Run__ and type _"cmd"_. Input the ```gpupdate /force``` command and press __Enter__. The group policy will be updated.

__Step 8 –__ Type ```repadmin /syncall``` command and press Enter for replicate GPO changes to other domain controllers.

__Step 9 –__ Ensure that new GPO settings applied on any audited domain controller.
