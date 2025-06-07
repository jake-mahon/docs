# Group Policy Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the Group Policy monitoring scope. To do it, edit the omitobjlist\_gp.txt, omitproplist\_gp.txt and omituserlist\_gp.txt files.

Follow the steps to exclude data from the Group Policy monitoring scope:

__Step 1 –__ Navigate to the _%Netwrix Auditor installation folder%\Active Directory Auditing_ folder.

__Step 2 –__ Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File | Description | Syntax |
| --- | --- | --- |
| omitobjlist\_gp.txt | The file contains a list of the Group Policy Object (GPO) names to be excluded from change reports. | ```<object name>```  For example, to exclude changes to the Default Domain Policy GPO, add the following line: ```Default Domain Policy```. |
| omitproplist\_gp.txt | The file contains a list of the Group Policy Object settings to be excluded from change reports. | ```<settingname>```  For example, to exclude data on changes made to the Maximum password length setting, add the following line: ```Maximum password length```. |
| omituserlist\_gp | The file contains a list of user names to be excluded from change reports. | ```<domain\user>```  For example, to exclude changes made by the user “usertest” in the domain “domaintest”, add the following line: ```domaintest\usertest```. |
