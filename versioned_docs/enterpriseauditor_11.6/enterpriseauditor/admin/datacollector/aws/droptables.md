# Drop AWS Tables

Sometimes when troubleshooting an AWS issue, it becomes necessary to clear the AWS DC data and tables from the Enterprise Auditor database. Follow the steps to configure a job to remove tables.

__Step 1 –__ Create a new job.

__Step 2 –__ Configure the target host as __Local host__.

__Step 3 –__ Assign a query using the __AWS__ Data Collector.

![Drop AWS DC Tables option on Amazon Web Services Data Collector Wizard Category page](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/datacollector/fsaa/droptables.png)

__Step 4 –__ In the Amazon Web Services Data Collector Wizard on the Category page, select the __Drop AWS DC Tables__ category task. Click __Next__.

__Step 5 –__ Click __Next__ and then click __Finish__ to close the Amazon Web Services Data Collector Wizard. Click __OK__ to close the Query Properties window.

__CAUTION:__ When the job is run, all of the AWS DC data and tables are removed from the database.

The job is now configured and ready to run.

__NOTE:__ An AWS connection profile is not required for the Drop AWS DC Tables task.
