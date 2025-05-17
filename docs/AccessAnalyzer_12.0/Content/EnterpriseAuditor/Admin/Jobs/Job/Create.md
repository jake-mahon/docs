---
sidebar_position: 5684
title: Create a New Job
---

# Create a New Job

Follow the steps to create a new job.

![Create Job from Jobs Tree context menu](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Jobs/CreateJob.png "Create Job from Jobs Tree context menu")

**Step 1 –** Select the Jobs tree or the desired job group to add the new job to. Right-click and select **Create Job**.

![New Job added to Jobs Tree](../../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Jobs/NewJob.png "New Job added to Jobs Tree")

**Step 2 –** Provide a unique, descriptive name for the job. The default name is `NewJob`. Some considerations for naming conventions:

**CAUTION:** Do not end a job name with a space.

* There can never be two jobs with the same name. Access Analyzer automatically appends a numeral to the end of a job name to avoid duplicates, for example `NewJob1`.
* No special characters can be used. See the Microsoft [Naming Conventions](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions "Naming Conventions") article for limitations.
* Jobs in a group are run alphanumerically
* When possible, keep names short to avoid report path errors caused by Microsoft’s maximum path length. See the Microsoft article referenced above.

The new job is now ready to be configured. See the [Data Collectors](../../DataCollector/Overview "Data Collectors"), [Analysis Modules](../../Analysis/Overview "Analysis Modules"), [Action Modules](../../Action/Overview "Action Modules"), and [Reporting](../../Report/Overview "Reporting") topics for additional information.