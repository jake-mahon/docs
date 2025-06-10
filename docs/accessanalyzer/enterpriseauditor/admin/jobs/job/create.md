# Create a New Job

Follow the steps to create a new job.

![Create Job from Jobs Tree context menu](/img/product_docs/accessanalyzer/enterpriseauditor/admin/jobs/job/createjob.webp)

__Step 1 –__ Select the Jobs tree or the desired job group to add the new job to. Right-click and select __Create Job__.

![New Job added to Jobs Tree](/img/product_docs/accessanalyzer/enterpriseauditor/admin/navigate/newjob.webp)

__Step 2 –__ Provide a unique, descriptive name for the job. The default name is ```NewJob```. Some considerations for naming conventions:

__CAUTION:__ Do not end a job name with a space.

- There can never be two jobs with the same name. Access Analyzer automatically appends a numeral to the end of a job name to avoid duplicates, for example ```NewJob1```.
- No special characters can be used. See the Microsoft [Naming Conventions](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions) article for limitations.
- Jobs in a group are run alphanumerically
- When possible, keep names short to avoid report path errors caused by Microsoft’s maximum path length. See the Microsoft article referenced above.

The new job is now ready to be configured. See the [Data Collectors](/docs/accessanalyzer/enterpriseauditor/admin/datacollector/overview.md), [Analysis Modules](/docs/accessanalyzer/enterpriseauditor/admin/analysis/overview.md), [Action Modules](/docs/accessanalyzer/enterpriseauditor/admin/action/overview.md), and [Reporting](/docs/accessanalyzer/enterpriseauditor/admin/report/overview.md) topics for additional information.
