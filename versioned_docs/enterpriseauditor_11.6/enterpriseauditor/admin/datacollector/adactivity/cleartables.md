# Clear ADActivity Tables

Sometimes when troubleshooting an ADActivity issue, it becomes necessary to clear the standard
reference tables. Follow the steps.

**Step 1 –** Create a new job and assign a query using the ADActivity Data Collector.

![Active Directory Activity DC wizard Category page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adinventory/categoryremovetables.png)

**Step 2 –** In the Active Directory Activity DC Wizard on the Category page, select the **Remove
Tables** category task.

![Active Directory Activity DC wizard Results page for Remove Tables category](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/adactivity/resultsremovetables.png)

**Step 3 –** Click **Next** to go to the Results page. Optionally, select the **Success** checkbox
to display a confirmation of successful removal in the results after the job is run.

**Step 4 –** Click **Next** and then Click **Finish** to close the Active Directory Activity DC
Wizard. Click **OK** to close the Query Properties window.

**CAUTION:** When the job is run, all of the ADActivity standard reference tables are removed from
the database.
