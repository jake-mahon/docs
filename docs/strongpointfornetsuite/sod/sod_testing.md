# SoD Testing Mode

Testing Mode helps you implement a new SoD solution, or to clean up your existing account. By creating and running rules in a test mode, you can identify and resolve potential issues with a rule without creating SoD incidents.

Testing Mode provides two ways to test a rule without generating SoD incidents:

- Test on Roles: checks to see if there are any roles violating the rule.
- Test on Employees: checks to see if any employees are violating the rule.

The violations list in Employee or Role customizations are updated during testing.

To access Testing Mode:

1. Create a new Rule or edit an existing Rule:  
   __SoD__ > __SoD Rule Library__ > __New__ or __Search__
2. Open the __SoD Rule Processing Status__ tab.
3. Select __Test on Roles__ or __Test on Employees__.
4. Click __Run SoD__ to run the test. It can take over an hour to evaluate large accounts.

Any of these events require a role to be re-evaluated:

__Trigger Role Job__

- Anytime Role(s) are added/updated
- Anytime the Rules are added/updated
- Manual trigger on the Role

__Trigger Role Assignment__

- Anytime Role(s) are added/updated
- Anytime the Rules are added/updated
- Anytime Role Assignments on an Employee are added/updated
- Anytime Global Permissions are added/updated
- Also triggered when the Manual trigger on the Role is selected
- Manual Trigger on the Employee

You can manually start the evaluation process, or wait until the Spider runs overnight. To manually run the process:

1. Open __SoD__ > __SoD Processing Status__ > __Run SoD on User Roles__
2. Select all of the roles you have modified.
3. Click __Run SoD__

## Test Reports

Test Reports are available for both __User Role Test Violations__ and __Employee Test Violations__:

1. Open __SoD__ > __SoD Testing__ and select one of the Reports:

   - __User Role Test Violations Summary__
   - __Employee Test Violations Summary__
   - __User Role Test Violation Detailed__: displays User Role Name link, SoD Violation, Base Permissions, Conflicting Permissions and User Role link. Report can be exported to Excel.
   - __Employee Test Violation Detailed__: displays a list with Employee Name link, SoD Violation, Non-compliant Roles, Non-compliant Global Permissions, Base Permissions, and Conflicting Permissions. Report can be exported to Excel.
2. Click __View__ for the Rule you want to see.
3. Open the __SoD__ tab.
4. Select __SoD Testing__ and one of the tabs:. There are links to __View Violation Details__ and to open the Role Record.

   ![SoD Test Report](/static/img/product_docs/strongpointfornetsuite/sod/sod_test_report.png)
     
   Details can be exported in an Excel format.
