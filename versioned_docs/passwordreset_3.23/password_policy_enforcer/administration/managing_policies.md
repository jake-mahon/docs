# Managing Policies

Netwrix Password Policy Enforcer can enforce up to 256 different password policies. You can assign policies to users directly, or indirectly through Active Directory security groups and containers (Organizational Units). See the [Assigning Policies to Users](#assigning-policies-to-users) topic for additional information.

This topic explains how to create and configure Password Policy Enforcer password polices.

## Creating a Policy

There are no password policies defined when Password Policy Enforcer is first installed. Password Policy Enforcer accepts all passwords in this state, so users only need to comply with the Windows password policy rules (if enabled).

Follow the steps below to create a new password policy.

__Step 1 –__ Click the __Policies__ item to display the Policies view.

__Step 2 –__ Click __New Policy__ in the right pane of the management console.

![managing_policies](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/managing_policies.png)

__Step 3 –__ Enter a unique policy name in the __New policy name__ text box.

__Step 4 –__ If the new policy should inherit its default configuration from an existing policy, then choose a policy from the Copy settings from drop-down list.

__Step 5 –__ Click __OK__.

__Step 6 –__ Modify the default policy properties as needed.

__Step 7 –__ Click __OK__ to close the Policy Properties page, and then configure the rules for this policy.

## Deleting a Policy

Follow the steps below to delete a policy that is no longer required.

__Step 1 –__ Click the Policies item to display the Policies view.

__Step 2 –__ Click Delete Policy in the right pane of the management console.

__Step 3 –__ Select a policy to delete, and then click __OK__.

## Policy Properties

![managing_policies_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/managing_policies_1.png)

To open the Policy Properties page:

__Step 1 –__ Click the Policies item to display the Policies view.

__Step 2 –__ Click the desired policy in the right pane of the management console.

__Step 3 –__ Click Properties in the right pane of the management console.

Each Password Policy Enforcer policy must have a unique name. To change the name of a policy, type the new name in the text box beside the policy icon.

Password Policy Enforcer only enforces enabled policies. Select the __Enabled__ check box if Password Policy Enforcer should enforce this policy, or deselect it to disable the policy. The policy's icon in the left pane of the management console changes to an X icon when a policy is disabled.

__NOTE:__ A user's password history may be updated even when the policy assigned to the user is disabled. See the [History Rule](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md#history-rule) topic for additional information.

The __Reject passwords that do not comply with__ drop-down list specifies the required compliance level for this policy. The default value (all the rules) requires users to comply with all enabled rules. Choose an alternative option if Password Policy Enforcer should enforce a more lenient password policy. The Minimum Age and Maximum Age rules are excluded from compliance level calculations. See the [Rules](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/rules.md) topic for additional information.

When setting the compliance level, consider that some rules may be disabled when a user enters a passphrase. See the [Passphrases](#passphrases) topic for additional information. Password Policy Enforcer accepts passphrases that comply with all enabled rules, irrespective of the compliance level. This ensures that passphrases can be used, even if they do not meet the compliance level when Password Policy Enforcer is configured to disable one or more rules for passphrases.

Password Policy Enforcer can start a password synchronization application or script whenever a user successfully changes their password. Enter the full path to the executable in the __Execute this program when a password is changed__ text box. The path can contain environment variables like ```%SystemRoot%```. Every computer running Password Policy Enforcer should have a local copy of the program, and only authorized users should have access to it, or any of its components.

The user logon name and new password are sent to the program as command- line parameters. For example, if you add the commands below to a batch file, Password Policy Enforcer will record each user's logon name and new password in a text file called passwords.txt:

echo Username: %1 >> c:\passwords.txt

echo Password: %2 >> c:\passwords.txt

__CAUTION:__ This script is shown as an example only. You should not store user passwords.

Record any configuration notes about this policy in the Notes text box.

- Click the __Assigned To__ tab to assign this policy to users, groups, or containers.
- Click the __Passphrases__ tab to specify which rules should be disabled when a user enters a passphrase.
- Click the __Messages__ tab to customize the Password Policy Client message templates for this policy.

## Assigning Policies to Users

Password Policy Enforcer uses policy assignments to decide which policy to enforce for each user. Domain policies can be assigned to users, groups, and containers (Organizational Units). Local policies can only be assigned to users. See the [Domain and Local Policies](/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/domain_and_local_policies.md) topic for additional information.

When a policy is assigned to a group, Password Policy Enforcer enforces the policy for all members of the group as well as any nested groups. For example, if the Helpdesk group is a member of the Info Tech group, then any policy assigned to the Info Tech group also applies to the members of the Helpdesk group. If this behavior is not desired, then you can assign a different policy to the Helpdesk group.

__NOTE:__ When a policy is assigned to a container, Password Policy Enforcer enforces the policy for all users in the container as well as any child containers. For example, if the Helpdesk and Managers OUs are children of the Info Tech OU, then any policy assigned to the Info Tech OU also applies to the two child OUs. If this behavior is not desired, then you can assign a different policy to a child OU.

![managing_policies_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/managing_policies_3.png)

__NOTE:__ When a domain policy is assigned to a user or group, Password Policy Enforcer stores the user or group SID in the configuration. The assignment remains valid even if the user or group is renamed. When a local policy is assigned to a user, Password Policy Enforcer stores the username in the configuration. The assignment is invalidated if the user is renamed.

![managing_policies_4](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/managing_policies_4.png)

To assign a password policy:

__Step 1 –__ Click the Policies item to display the Policies view.

__Step 2 –__ Click the desired policy in the right pane of the management console.

__Step 3 –__ Click Properties in the right pane of the management console.

__Step 4 –__ Click the Assigned To tab.

__Step 5 –__ Click the appropriate Add... button.

__Step 6 –__ Select the desired user, group, or container, and then click OK.

__Step 7 –__ Click OK to close the Policy Properties page.

To remove a policy assignment:

__Step 1 –__ Click the Policies item to display the Policies view.

__Step 2 –__ Click the desired policy in the right pane of the management console.

__Step 3 –__ Click Properties in the right pane of the management console.

__Step 4 –__ Click the Assigned To tab.

__Step 5 –__ Select the policy assignment that you wish to remove.

__Step 6 –__ Click the appropriate Remove button.

__Step 7 –__ Click OK to close the Policy Properties page.

__NOTE:__ Different assignment types can be used for a single policy. For example, you may assign users to a policy by both OU and group at the same time.

### Policy Assignment Conflicts

A policy assignment conflict occurs when more than one policy is assigned to a user. Password Policy Enforcer can resolve these conflicts and choose one policy for each user.

Password Policy Enforcer first tries to resolve a policy assignment conflict by examining the assignment type. Assignments by user take precedence over assignments by group, which in turn take precedence over assignments by container. For example, if Policy A is assigned to a user by group, and Policy B is assigned to the same user by container, then Password Policy Enforcer will enforce Policy A because assignments by group take precedence over assignments by container.

If all the policies are assigned to the user by container, then Password Policy Enforcer enforces the policy that is assigned to the nearest parent container. For example, if Policy A is assigned to the Users OU, and Policy B is assigned to the Users\Students OU, then Password Policy Enforcer will enforce Policy B for all users in the Users\Students and Users\Students\Science OUs because it is the policy assigned to the nearest parent container.

If a policy assignment conflict still exists, then Password Policy Enforcer checks the priority of each remaining policy, and enforces the policy with the highest priority. See the [Policy Selection Flowchart](#policy-selection-flowchart) topic for a diagrammatic representation of this algorithm.

Use the Log tab in the Test Policies page to quickly determine which policy Password Policy Enforcer will enforce for a particular user.

![managing_policies_5](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/managing_policies_5.png)

### Policy Priorities

Policy priorities help Password Policy Enforcer to resolve policy assignment conflicts. If more than one policy is assigned to a user, and Password Policy Enforcer cannot decide which policy to enforce using the other conflict resolution rules, then Password Policy Enforcer always enforces the policy with the highest priority. To set a policy's priority:

__Step 1 –__ Click the Policies item to display the Policies view.

__Step 2 –__ Click Set Priorities in the right pane of the management console. This option is only visible when there is more than one password policy.

![managing_policies_6](/img/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies_6.png)

__Step 3 –__ Select the desired policy.

__Step 4 –__ Click the arrow buttons to increase or decrease the priority of the policy.

__Step 5 –__ Click OK to close the Policy Priorities page.

### Policy Selection Flowchart

This flowchart shows how Password Policy Enforcer chooses a policy for each user. Use the Test Policies page to quickly determine which policy Password Policy Enforcer will enforce for a particular user.

![managing_policies](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/managing_policies.jpg)

## Passphrases

Passphrases have gained popularity in recent years as they can be more difficult to crack and easier to remember than passwords. The difference between passwords and passphrases is their length. Passwords are rarely longer than 15 characters, but passphrases commonly contain 20 or more characters.

Complexity and dictionary rules are less important for passphrases as passphrases rely primarily on length for security. You may therefore want to relax some password policy requirements for passphrases. To configure a password policy with fewer requirements for passphrases:

![managing_policies_7](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/managing_policies_7.png)

__Step 1 –__ Click the Policies item to display the Policies view.

__Step 2 –__ Click the desired policy in the right pane of the management console.

__Step 3 –__ Click Properties in the right pane of the management console.

__Step 4 –__ Click the Passphrases tab.

__Step 5 –__ Choose the minimum number of characters a password must contain before some rules are disabled from the drop-down list.

__Step 6 –__ Select the rules that will be disabled.

__Step 7 –__ Click OK to close the Policy Properties page

Disabled rules are not counted when calculating the compliance level, but Password Policy Enforcer will accept passphrases that comply with all enabled rules, irrespective of the compliance level. This ensures that passphrases can be used, even if they do not meet the compliance level when Password Policy Enforcer is configured to disable one or more rules for passphrases.

__NOTE:__ Opinions differ on how long a passphrase needs to be. Even a 30 character passphrase can be weaker than a well-chosen password. Do not disable too many rules under the assumption that length alone will make up for the reduced complexity as this is not always true.

## Testing Policies

You can quickly test your Password Policy Enforcer configuration by simulating a password change from the Password Policy Enforcer management console.

Follow the steps below to test your configuration:

__Step 1 –__ Click the Policies item to display the Policies view.

__Step 2 –__ Click Test Policies in the right pane of the management console.

![managing_policies_8](/img/versioned_docs/passwordreset_3.23/password_policy_enforcer/administration/managing_policies_8.png)

__Step 3 –__ Type a user name in the User name text box, and a password in the Old Password and New Password text boxes.

__Step 4 –__ Click Test, or wait a few seconds if Test passwords as I type is selected.

__NOTE:__ Policy testing simulates a password change, but it does not change the password. As it is only a simulation, you do not have to enter the correct password in the Old Password text box.

The Password Policy Enforcer management console displays a green check mark below the Test button if the new password complies with the Password Policy Enforcer password policy, or a red cross if it does not comply. Detailed test results appear in the results panel.

Click the __Results__ tab to view the test results for each rule. The check boxes show which rules the new password complied with.

| Rule | Status of Password Compliance with Rule |
| --- | --- |
| ![testing_the_password_policy_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/testing_the_password_policy_1.png) | Rule disabled or not tested. |
| ![testing_the_password_policy_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/testing_the_password_policy_2.png) | Rule enabled, password complies with rule |
| ![testing_the_password_policy_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/testing_the_password_policy_3.png) | Rule enabled, password does not comply with rule. |

Click the __Log__ tab to view Password Policy Enforcer's internal event log. The event log can help you to understand why Password Policy Enforcer accepted or rejected a password. For example, you can use the event log to see which:

- Computer the configuration was read from.
- Policy was assigned to the user, and why.
- Dictionary word or keyboard pattern matched with the password.
- Errors or warnings occurred during testing.

![managing_policies_12](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/managing_policies_12.png)

### Policy Testing vs. Password Changes

- Policy testing simulates a password change, but it may not always reflect what happens when a user changes their password. A password change may yield different results to a policy test because:
- Policy testing does not simulate the Windows password policy rules. If the Windows password rules are enabled, then Windows may reject a password even though it complies with all the Password Policy Enforcer rules.
- Policy testing does not enforce the Minimum Age rule.
- Policy testing does not enforce the History rule.
- Policy testing enforces the password policy even if Password Policy Enforcer or the assigned policy is disabled. This allows you to test your configuration before enabling Password Policy Enforcer, or a new password policy.
- Policy testing occurs on the computer that the management console is running on. If the management console is connected to a remote domain configuration, then it may not find the dictionary file on the local computer, or the local dictionary file may be different to the one on the domain controller. Copy the dictionary file onto the local computer (in the same path) to avoid this problem.
- If the management console is connected to a domain configuration and the Password Policy Enforcer configuration was modified recently, then Active Directory may still be propagating the new configuration to the other domain controllers.
