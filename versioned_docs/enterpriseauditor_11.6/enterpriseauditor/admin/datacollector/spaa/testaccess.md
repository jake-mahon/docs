# SPAA: Test Access

Use the Test Access page to check access to SharePoint On-Premises environments. The Test Access function uses each credential in a job's Connection profile to test access to a SharePoint environment. The Test Access page tests access to the following:

- Access to the remote registry
- SQL Access (for databases associated with the SharePoint farms)
- All Web Applications in the SharePoint environment

![Test Access page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/testaccess.png)

The options and sections on the Test Access page are:

- SharePoint App Server – Enter the server name for the SharePoint environment in the SharePoint App Server text box. Click __Check Access__ to test access to the SharePoint environment.

  - For example – ```sbnjqasp30``` or ```sbnjqasp3.qa.com```
  - Do not include ```http[s]://``` or use a URL for the server name. The Test Access function cannot be scoped to individual Web applications.
- Access Test Results – Displays information on test results. Test criteria are listed in the __Description__ column. Test results will be returned as either __Pass__ or __Fail__ in the Results column.
- Save Report – Click __Save Report__ to export and save a text version of the test results

|  |  |
| --- | --- |
| ![Successful test example](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/testaccessgoodtest.png) | ![Unsuccessful test example](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/spaa/testaccessbadtest.png) |
| __Successful Test (Correct Credentials)__ | __Unsuccessful Test (Incorrect Credentials)__ |
