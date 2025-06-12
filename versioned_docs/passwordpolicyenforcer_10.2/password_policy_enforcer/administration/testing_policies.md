# Testing Policies

You can quickly test your Password Policy Enforcer configuration by simulating a password change from the Password Policy Enforcer management console.

## Password Test

Follow the steps below to test your configuration.

__Step 1 –__ Click the __Policies__ item to display the Policies view.

__Step 2 –__ Click __Test Policies__ in the right pane of the management console.

![passwordtest](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/passwordtest.png)

__Step 3 –__ Select the __Password__ Test tab.

__Step 4 –__ Type a __user name__ in the User name text box, and a password in the Old Password and New Password text boxes.

__Step 5 –__ Click __Test__, or wait a few seconds if Test passwords as I type is selected.

__NOTE:__ Policy testing simulates a password change, but it does not change the password. As it is only a simulation, you do not have to enter the correct password in the Old Password text box.

The Password Policy Enforcer management console displays a green check mark below the Test button if the new password complies with the Password Policy Enforcer password policy, or a red cross if it does not comply. Detailed test results appear in the results panel.

__Step 6 –__ Click the __Results__ tab to view the test results for each rule. The check boxes show which rules the new password complied with.

| Rule | Status of Password Compliance with Rule |
| --- | --- |
| ![testing_the_password_policy_1](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/testing_the_password_policy_1.png) | Rule disabled or not tested. |
| ![testing_the_password_policy_2](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/testing_the_password_policy_2.png) | Rule enabled, password complies with rule |
| ![testing_the_password_policy_3](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/evaluation/testing_the_password_policy_3.png) | Rule enabled, password does not comply with rule. |

![managing_policies_12](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/managing_policies_12.png)

__Step 7 –__ Click the __Log__ tab to view Password Policy Enforcer's internal event log. The event log can help you to understand why Password Policy Enforcer accepted or rejected a password. For example, you can use the event log to see which:

- Computer the configuration was read from.
- Policy was assigned to the user, and why.
- Dictionary word or keyboard pattern matched with the password.
- Errors or warnings occurred during testing.

## Bulk Password Test

Bulk Password Test feature allows to check a large number of passwords against a selected policy and a get a report of the accepted and rejected passwords.

![bulkpasswordtest](/img/versioned_docs/passwordpolicyenforcer_10.2/password_policy_enforcer/administration/bulkpasswordtest.png)

Follow the steps below to test your configuration.

__Step 1 –__ Click the __Policies__ item to display the Policies view.

__Step 2 –__ Click __Test Policies__ in the right pane of the management console.

__Step 3 –__ Select the location of the password file.

__Step 4 –__ Select the location of the folder where you want to upload the result.

__NOTE:__ It is recommended that the Password File and Result folder are not located on a shared drive, so the processing can be done faster.

__Step 5 –__ Select a desired policy from the drop down list.

__Step 6 –__ If you want to receive a list of unacceptable passwords, you should use the following filters:

- Show compliant passwords – the compliant passwords will be displayed.
- Show rejected passwords – the rejected passwords will be displayed.

__Step 7 –__ Click the __Run__ button.

Statistics allows you to see the file line size, the number of passwords processed, and the result of processing each line. Click on the desired filters to show compliant and/or rejected passwords.

| Statistics of the Bulk Password Testing |  |
| --- | --- |
| Status | Shows whether the operation is ready for scanning, processing, or whether the scan has been terminated. |
| Accepted | Shows the number of the accepted passwords. |
| Number of lines | Shows the number of lines within the password. |
| Checked | Shows the number of the checked passwords. |
| Rejected | Shows the number of the rejected passwords. |
| Lines processed | Shows the number of the processed lines. |

## Policy Testing vs. Password Changes

- Policy testing simulates a password change, but it may not always reflect what happens when a user changes their password. A password change may yield different results to a policy test because:
- Policy testing does not simulate the Windows password policy rules. If the Windows password rules are enabled, then Windows may reject a password even though it complies with all the Password Policy Enforcer rules.
- Policy testing does not enforce the Minimum Age rule.
- Policy testing does not enforce the History rule.
- Policy testing enforces the password policy even if Password Policy Enforcer or the assigned policy is disabled. This allows you to test your configuration before enabling Password Policy Enforcer, or a new password policy.
- Policy testing occurs on the computer that the management console is running on. If the management console is connected to a remote domain configuration, then it may not find the dictionary file on the local computer, or the local dictionary file may be different to the one on the domain controller. Copy the dictionary file onto the local computer (in the same path) to avoid this problem.
- If the management console is connected to a domain configuration and the Password Policy Enforcer configuration was modified recently, then Active Directory may still be propagating the new configuration to the other domain controllers.
