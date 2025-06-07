# Enforce Multiple Policies

Password Policy Enforcer can enforce up to 256 password policies on each domain or computer. You can assign policies to users directly, or indirectly through Active Directory security groups and containers (Organizational Units).

### Create Additional Password Policy

If you are in the settings for your first policy, click the left arrow beside the policy name to return to the Configuration Console dashboard.

![Return to the dashboard](/static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/evaldashboard.png)

Create an additional password policy.

__Step 1 –__ Click the context menu beside your first policy and select __Make copy__.

__Step 2 –__ Enter __Admins Policy__ for the Policy duplication.

![Enter Admins Policy](/static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/evalcopypolicy2.png)

__Step 3 –__ Click __Make copy__.

__Step 4 –__ Open the __Users & Groups__ tab.

![Open the Users & Groups tab](/static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/evalusergroups.png)

__Step 5 –__ Click the __+__ in the __Groups__ list and enter __Domain Admins__. Specify a Domain or local __Location__ depending on your evaluation set up.

__Step 6 –__ Click __OK__. Domain Admins are added to the __Groups__.

![Domain Admins added](/static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/evaldomainadmins.png)

- Members of the Domain Admins group (or the PPETestAdmin user, if not using a domain controller) must now comply with the Administrators policy. All other users must comply with the Users policy. Users will not notice any difference at this point because the two polices are enforcing identical rules.

### Differentiate Password Policies

To differentiate the policies, change the minimum password length for the Admins policy from seven to nine characters.

__Step 1 –__ Open the __Rules__ tab.

__Step 2 –__ Open the __Length__ rule.

__Step 3 –__ Select __9__ from the __At Least__ drop-down list.

![Set the length to 9](/static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/evallength9.png)

__Step 4 –__ Click __Save__.

__Step 5 –__ Click __Test policy__.

__Step 6 –__ Select the __PPETestAdmin__ user. The results pane shows the __Admins Policy__ is being applied, and the password must __contain at least 9 characters__.

![Admins policy is being tested](/static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/evaluation/evaladmin.png)

Use the Password Policy Enforcer configuration console, the Windows Change Password screen, the Active Directory Users and Computers console, or the Local Users and Groups console to test password changes and resets for the __PPETestUser__ and __PPETestAdmin__ accounts. Password Policy Enforcer should enforce the Eval policy for __PPETestUser__, and the Admins policy for __PPETestAdmin__.

__NOTE:__ The [Set Priorities](/docs/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/manage_policies.md#Set-Priorities) topic contains more information about policy assignments, and how Password Policy Enforcer resolves policy assignment conflicts that occur when more than one policy is assigned to a user.
