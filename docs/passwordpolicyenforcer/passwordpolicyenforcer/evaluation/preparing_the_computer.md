# Prepare the Computer

You only need one computer for the evaluation. A Windows Server 2016, 2019, or 2022 domain controller in its own domain is recommended. You can also use Windows 10 or 11 if you only need to enforce policies for local accounts.

## Disable the Windows Password Policy Rules

If the Password Policy Enforcer and Windows password policies are both enabled, then users must comply with both policies. This is not recommended for the evaluation because the Windows policy may stop users from reusing recent passwords, or from changing their password more than once a day. These restrictions can make it difficult to evaluate Password Policy Enforcer.

This procedure disables the Windows password policy:

__Step 1 –__ Open the appropriate policy management tool:

- If you are evaluating Password Policy Enforcer on a domain, use the Group Policy Management Console (__gmpc.msc__) to display the GPOs linked at the domain level. Right-click the __Default Domain Policy GPO__ (or whichever GPO you use to set the password policy), then click the __Edit...__ button.
- If you are evaluating Password Policy Enforcer on a standalone server or workstation, open the __Local Group Policy Editor__ (__gpedit.msc__).

__Step 2 –__ Expand the following items:

- Computer Configuration
- Policies (if it exists)
- Windows Settings
- Security Settings
- Account Policies
- Password Policy

__Step 3 –__ Double-click __Enforce password history__ in the right pane of the GPO Editor.

__Step 4 –__ Enter __0__ in the text box, then click __OK__.

__Step 5 –__ Repeat the step above for the Maximum Password Age and Minimum Password Length policies.

__Step 6 –__ Double-click the __Group Policy Management Editor__.

__Step 7 –__ Close the __Group Policy Management Editor__.

![preparing_the_computer](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/preparing_the_computer.png)

__Step 8 –__ Execute the ```gpupdate/target:computer``` command to refresh the Group Policy.

## Create Test Accounts

Create two user accounts for the evaluation, __PPETestUser__ and __PPETestAdmin__.

![preparing_the_computer_1](/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/preparing_the_computer_1.png)

Make __PPETestAdmin__ a member of the Domain Admins group if you are evaluating Password Policy Enforcer on a domain controller.
