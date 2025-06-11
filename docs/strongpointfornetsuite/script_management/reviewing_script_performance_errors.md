# Reviewing Script Performance and Errors

There are several tools included in Platform Governance for NetSuite that enable analysis of the script data.

## Performance Data

1. __Critical Scripts Execution History__: provides broad execution data about all scripts.
2. __Critical Script Utilization Overview__: select __View Overview__ to display the number of subsidiaries, departments, employees using the script and the number of customizations related to script to enable deeper analysis.
3. __Script Customization Record__: Script performance metrics are also available on the Customization Record for that script. These include:

   1. Script Average Run Time
   2. # of Daily Script Users
   3. # of Daily Script Executions

You can create saved searches to analyze those metrics as required.

To reset the __Script Average Run Time__ so you can see the impact of any changes without past data, you can use a Mass update to zero out the field called __Script Average Run Time__ just like any other NetSuite field. If you want to archive the results you can create a saved search with that field and export.

## Error Reporting

Script error reporting requires the scripts to be in at least Audit mode.

__Error Report__: Summary of all the available errors logged in the system for various scripts. Errors are summarized into types by excluding specific data such as line numbers, ids and, where detectable, execution data. The result is a manageable number of errors. Error data expires over time. This should not be viewed as a continuing or reliable view of all errors over time.

__Yesterday’s Script Errors__: Summary of all the available errors logged in the system for various scripts for the previous day.
