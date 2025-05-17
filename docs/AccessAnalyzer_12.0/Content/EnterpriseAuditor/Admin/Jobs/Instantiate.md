---
sidebar_position: 5668
title: Instantiating Jobs into the  Jobs Tree
---

# Instantiating Jobs into the Jobs Tree

Access Analyzer jobs and solutions are comprised of files contained within the file system of the installation directory. All jobs and job groups contained within the Jobs tree are housed in the Jobs directory. The default location is:

…\STEALTHbits\StealthAUDIT\Jobs

![Explore Folder option from Jobs Tree](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Jobs/ExploreFolder.png "Explore Folder option from Jobs Tree")

The folder is opened from within the Access Analyzer Console by right-clicking on the desired **Jobs** node and selecting **Explore Folder**.

![Jobs folder in File Explorer](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Jobs/ExploreFolderFileExplorer.png "Jobs folder in File Explorer")

The naming convention of the folders controls what is visible in the Jobs tree. `GROUP_` is the prefix for all job groups. `JOB_` is the prefix for all jobs. Changing the prefix removes the object from the Jobs tree without deleting it.

Instantiating new, external jobs is as easy as copying and pasting the job or job group into this location. However, copying an existing job within the Jobs directory is not supported. If the job already exists within the Access Analyzer Console server, copying outside of the console may result in reporting issues.

**CAUTION:** Do not use these steps to copy an existing job.

There is no need to close the Access Analyzer application to instantiate a new job. Follow the steps to instantiate a new job into the Access Analyzer Jobs tree:

**Step 1 –** Obtain the job or job group to be instantiated. If it has been sent by Netwrix, a colleague, or other entity, it is most likely in one of two formats:

* Archive (.zip, .rar, and so on)
* Folder containing the job content (JOB\_[name of job] or GROUP\_[name of job group])

**Step 2 –** Open the Jobs directory. The default location is:

…\STEALTHbits\StealthAUDIT\Jobs

**Step 3 –** Place the job or job group into the Jobs directory.

![Extract zip file contents to the Jobs folder](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Jobs/InstantiateExtract.png "Extract zip file contents to the Jobs folder")

* If in archive format, extract the desired content to the Jobs directory

  * Use the default path or specify a specific path using the browse button (…)
  * Select whether to **Show extracted files when complete**. This option is selected by default.
* If in a folder format, copy and paste the job or job group folder into the Jobs directory

![New job added in the Jobs folder ](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Jobs/InstantiateFileExplorer.png "New job added in the Jobs folder ")

The new job or job group should be visible in the Jobs directory, and the naming convention should match that of the jobs or job groups that are already there.

![Refresh Tree](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Jobs/RefreshTree.png "Refresh Tree")

**Step 4 –** In the Access Analyzer Console, right-click on the **Jobs** node and select **Refresh Tree**.

![Job displayed in the Jobs Tree](../../../../../../static/images/AccessAnalyzer_12.0/Content/Resources/Images/EnterpriseAuditor/Admin/Jobs/InstantiateJobsTree.png "Job displayed in the Jobs Tree")

The new job or job group now displays in the **Jobs** tree in alphanumeric order.