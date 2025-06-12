# Enforcing Multiple Policies

Password Policy Enforcer can enforce up to 256 password policies on each domain or computer. You can assign policies to users directly, or indirectly through Active Directory security groups and containers (Organizational Units).

### Create Additional Password Policy

Follow the steps to create an additional password policy.

__Step 1 –__ Click the __Policies__ item in the left pane of the management console, then click __New Policy__ in the right pane.

![managing_policies](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/managing_policies.png)

__Step 2 –__ Enter __Admins__ in the New Policy name text box, then choose the __Users__ policy from the __Copy Settings From:__ drop-down.

__Step 3 –__ Click __OK__ to create the policy, then click the __Assigned To__ tab.

![enforcing_multiple_policies_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/enforcing_multiple_policies_1.png)

__Step 4 –__ Click the __Add...__ button beside the Groups list and type "__domain admins__" in the provided field.

- If the test computer is not a domain controller, click the __Add...__ button and type "__PPETestAdmin__" in the provided field.

__Step 5 –__ Click OK.

![enforcing_multiple_policies_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/enforcing_multiple_policies_2.png)

__Step 6 –__ Click __OK__ to close the Policy Properties page.

- Members of the Domain Admins group (or the PPETestAdmin user, if not using a domain controller) must now comply with the Administrators policy. All other users must comply with the Users policy. Users will not notice any difference at this point because the two polices are enforcing identical rules.

### Differentiate Password Policies

The example below instructs how to change the minimum password length for the Admins policy from seven to nine characters. To differentiate the policies, change the minimum password length for the Admins policy from seven to nine characters.

Follow the steps below to differentiate password policies.

__Step 1 –__ Click the __Admins__ policy in the left pane of the management console.

__Step 2 –__ Double-click the __Length__ rule.

__Step 3 –__ Choose __9__ from the At Least drop-down list, then click __OK__.

Use the Password Policy Enforcer management console, the Windows Change Password screen, the Active Directory Users and Computers console, or the Local Users and Groups console to test password changes and resets for the PPETestUser and PPETestAdmin accounts. Password Policy Enforcer should enforce the Users policy for PPETestUser, and the Admins policy for PPETestAdmin.

__NOTE:__ The [Administration](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/administration_overview.md) topic contains more information about policy assignments, and how Password Policy Enforcer resolves policy assignment conflicts that occur when more than one policy is assigned to a user.
