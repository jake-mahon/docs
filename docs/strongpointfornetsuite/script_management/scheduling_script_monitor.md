# Scheduling the Script Monitor

Deploy the Strongpoint Script Monitor ResultData SS script to capture script data.
This script populates data such as:

- Employees using customization
- Departments using customization
- Locations using customization
  __Used by__ system such as, other scripts)
- Used by external such as. customers and vendors)
- # of daily script execution
- # of daily script uses
- Script Average Run Time (for scripts with End Tags)

To schedule the script:

1. Open __Customization__ > __Scripting__ > __Scripts__.
2. Expand __Filters__ and select __Scheduled__ for __Type__.
3. Locate the __Strongpoint Script Monitor ResultData SS__ (id customscript\_flo\_script\_result\_data\_ss) script.
4. Click __Deployments__ link.
5. Click __Edit__ link for __customdeploy\_flo\_script\_utilisation\_data__
6. Set __Status__ to __Scheduled__.
7. Set __Start Date__ to the current date. You can modify the schedule as needed.
8. Click __Save__
