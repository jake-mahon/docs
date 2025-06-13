# Configure the Back up Files and Directories Policy

Configure this Back up Files and Directories policy via the Local Security Policy Snap-in or using the Group Policy Management Console.

Follow the steps to configure the Back up Files and Directories policy via the Local Security Policy Snap-in.

__Step 1 –__ On any domain controller in the target domain, open the Local Security Policy snap-in: navigate to Start > Windows Administrative Tools > Local Security Policy.

__Step 2 –__ Navigate to __Security Settings__ > __Local Policies__ > __User right Assignment__.

__Step 3 –__ Locate the Back up files and directories policy and double-click it.

__Step 4 –__ In the Back up files and directories Properties dialog, click __Add User or Group__, specify the user that you want to define this policy for.

The policy is now configured.

Follow the steps to configure the Back up Files and Directories policy using the Group Policy Management Console.

__NOTE:__ Perform this procedure only if the account selected for data collection is not a member of the Domain Admins group.

__Step 1 –__ Open the Group Policy Management console on any domain controller in the target domain: navigate to __Start__ > __Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools (Windows 2012 R2 and below)__ > __Group Policy Management__.

__Step 2 –__ In the left pane, navigate to Forest: `<forest name>` > Domains > `<domain name>` > Domain Controllers. Right-click the __effective domain controllers policy__ (by default, it is the Default Domain Controllers Policy), and select __Edit__.

__Step 3 –__ In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left and navigate to __Policies__ > __Windows Settings__ > __Security Settings__ > __Local Policies__.

__Step 4 –__ On the right, double-click the User Rights Assignment policy.

__Step 5 –__ Locate the Back up files and directories policy and double-click it.

__Step 6 –__ In the Back up files and directories Properties dialog, click Add User or Group and specify the user that you want to define this policy for.

__Step 7 –__ Navigate to Start > Run and type __cmd__. Input the ```gpupdate /force``` command and press Enter. The group policy will be updated.

__Step 8 –__ Type ```repadmin /syncall``` command and press Enter for replicate GPO changes to other domain controllers.

__Step 9 –__ Ensure that new GPO settings applied on any audited domain controller.

The policy is now configured.
