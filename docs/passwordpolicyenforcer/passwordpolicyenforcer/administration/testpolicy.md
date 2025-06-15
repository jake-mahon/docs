# Test Policy

You can quickly test your Password Policy Enforcer configuration by simulating a password change. Click __Test Policy__ from the Configuration Console dashboard or when you are setting up a policy. Test policy opens in a separate window. Remember to __Save__ your rules and changes prior to testing.

Test policy opens on the __By user__ tab.

![Test by User](../../../../static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/testuser.webp)

## By User

Policy testing simulates a password change, but it does not change the password.

__Step 1 –__ Click __Test policy__ from the Configuration Console dashboard or when you are setting up a policy.

__Step 2 –__ Select a __user__.

__Step 3 –__ __Type in a password to simulate its change__. As you type, the new password is evaluated and the results are displayed.

![Failing Password](../../../../static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/testuserfail.webp)

The entered password is failing in this example, due to not meeting the length requirement. There is a red x indicating the failure. You can hover over the requirements to see the rule name.

In this example, the password passes. Notice the green check beside the entered password.

![Passing password](../../../../static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/testuserpass.webp)

Expand the __View log__ for details:

- Computer the configuration was read from.
- Policy was assigned to the user, and why.
- Dictionary word or keyboard pattern matched with the password.
- Errors or warnings occurred during testing.

Turn on __Verbose Logging__ to view the performed tests and results.

![Verbose logging](../../../../static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/testuserverbose.webp)

## Bulk Password Test

Bulk Password Test feature allows to check a large number of passwords against a selected policy and a get a report of the accepted and rejected passwords.

__Step 1 –__ Click __Test policy__ from the Configuration Console dashboard or when you are setting up a policy.

__Step 2 –__ Open the __Password bulk test__ tab.

![Password bulk test](../../../../static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/testbulk.webp)

__Step 3 –__ Select a policy for the test.

__Step 4 –__ __Browse__ to the text file containing the passwords to test. Processing is faster if the file is not on a shared drive.

__Step 5 –__ Click __Test passwords__. The __Statistics__ are displayed.

![Test results](../../../../static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/testbulkresult.webp)

| Statistics of the Bulk Password Testing |  |
| --- | --- |
| Status | Shows whether the operation is ready for scanning, processing, terminated, or finished. |
| Tested | Number of tested passwords. |
| Accepted | Number of accepted passwords. |
| Rejected | Number of rejected passwords. |
| Number of lines | Number of lines within the file. |
| Lines processed | Shows the number of the processed lines. |

Click __Show full report__ to view the test details.

![Test Bulk Report](../../../../static/img/product_docs/passwordpolicyenforcer/passwordpolicyenforcer/administration/testbulkreport.webp)

You can use the __Report settings__ to customize the report:

- Result report folder. Processing is faster if this is not a shared drive.
- Show accepted passwords
- Show rejected passwords

## Policy Testing vs. Password Changes

- Policy testing simulates a password change, but it may not always reflect what happens when a user changes their password. A password change may yield different results to a policy test because:
- Policy testing does not simulate the Windows password policy rules. If the Windows password rules are enabled, then Windows may reject a password even though it complies with all the Password Policy Enforcer rules.
- Policy testing does not enforce the Minimum Age rule.
- Policy testing does not enforce the History rule.
- Policy testing enforces the password policy even if Password Policy Enforcer or the assigned policy is disabled. This allows you to test your configuration before enabling Password Policy Enforcer, or a new password policy.
- Policy testing occurs on the computer that the management console is running on. If the management console is connected to a remote domain configuration, then it may not find the dictionary file on the local computer, or the local dictionary file may be different to the one on the domain controller. Copy the dictionary file onto the local computer (in the same path) to avoid this problem.
- If the management console is connected to a domain configuration and the Password Policy Enforcer configuration was modified recently, then Active Directory may still be propagating the new configuration to the other domain controllers.
