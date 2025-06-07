# Define Log On As a Batch Job Policy

During the source addition, the Log on as a batch job policy is automatically defined for the Data Processing Account as a local security policy. However, if you have the Deny log on as a batch job policy defined locally or on the domain level, the local Log on as a batch job policy will be reset. In this case, redefine the Deny log on as a batch job policy through the Local Security Policy console on your computer or on the domain level through the Group Policy Management console.

You can configure this policy via the __Local Security Policy__ snap-in or using the Group Policy Management console.

## To configure the Log On As a Batch Job policy via the __Local Security Policy__ snap-in

__Step 1 –__ On any domain controller in the target domain, open the __Local Security Policy__ snap-in: navigate to Start →Windows Administrative Tools (Windows Server 2016 and higher) or Administrative Tools (Windows 2012) and select Local Security Policy.

__Step 2 –__ Navigate to __Security Settings → Local Policies → User Rights Assignment__ and locate the __Log on as a batch job__ policy.

![manualconfig_ws_logonasbatch](/static/img/product_docs/1secure/1secure/admin/datacollection/activedirectory/manualconfig_ws_logonasbatch.png)

__Step 3 –__ Double-click the __Log on as a batch job__ policy, and click __Add User or Group__. Specify the account that you want to define this policy for.

## To configure the Log On As a Batch Job policy using the Group Policy Management console

Perform this procedure only if the account selected for data collection is not a member of the Domain Admins group.

__Step 1 –__ Open the Group Policy Management console on any domain controller in the target domain: navigate to Start → Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools (Windows 2012 R2 and below) → Group Policy Management.

__Step 2 –__ In the left pane, navigate to Forest: <forest name> → Domains → <domain name> → Domain Controllers. Right-click the effective domain controllers policy (by default, it is the _Default Domain Controllers Policy_), and select Edit .

__Step 3 –__ In the Group Policy Management Editor dialog, expand the Computer Configuration node on the left and navigate to Policies → Windows Settings → Security Settings → Local Policies.

__Step 4 –__ On the right, double-click the User Rights Assignment policy.

__Step 5 –__ Locate the Log on as a batch job policy and double-click it.

__Step 6 –__ In the Log on as a batch job Properties dialog, click Add User or Group and specify the user that you want to define this policy for.

__Step 7 –__ Navigate to Start → Run and type "_cmd_". Input the ```gpupdate /force``` command and press Enter. The group policy will be updated.

__Step 8 –__ Type ```repadmin /syncall``` command and press Enter for replicate GPO changes to other domain controllers.

__Step 9 –__ Ensure that new GPO settings applied on any audited domain controller.
