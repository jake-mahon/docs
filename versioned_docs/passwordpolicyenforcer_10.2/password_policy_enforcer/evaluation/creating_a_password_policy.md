# Creating a Password Policy

There are no password policies defined when Password Policy Enforcer is first installed. You can now create your first Password Policy Enforcer password policy. Password Policy Enforcer accepts all passwords in this state, so users only need to comply with the Windows password policy rules (if enabled).

Follow the steps below to create a Password Policy Enforcer password policy.

__Step 1 –__ Click __Start__ > __Password Policy Enforcer 10__ > __PPE Configuration__ to open the Password Policy Enforcer management console.

Click __Yes__ when asked if you would like to create a new Password Policy Enforcer configuration.

__Step 2 –__ Click the __Policies__ item in the left pane of the management console, then click __New Policy__ in the right pane. This opens the New Policy page.

![managing_policies](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/managing_policies.png)

__Step 3 –__ Enter a unique policy name in the __New policy name__ text box.

- If the new policy should inherit its default configuration from an existing policy, choose a policy from the __Copy settings from__ drop-down list.
- If the new policy should inherit settings from commonly used frameworks, select a Policy Template from the drop-down list. For a list of policies see [Policy Templates ](/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/policy_templates.md#Policy-Templates).

__Step 4 –__ Click __OK__.

__Step 5 –__ Click __No__ when asked if you would like to assign users to the policy.

![creating_a_password_policy_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/creating_a_password_policy_2.png)

__Step 6 –__ Click the __Password Policy Server__ item in the left pane of the management console, and then click __PPS Properties__ in the right pane.

__Step 7 –__ Choose the new __Users__ (in step 3) policy from the Default Policy drop-down, then click __OK__.

__Step 8 –__ Click __Yes__ when asked to confirm the choice of Default Policy.
