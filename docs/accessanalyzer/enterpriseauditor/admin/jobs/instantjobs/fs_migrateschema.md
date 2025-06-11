# FS\_MigrateSchema Job

The FS\_Migrate\_Schema Job migrates the schema in order to support the use of 64-bit ResourceID's without affecting data. It is available through the Instant Job Library under the File System library. See the [Instant Job Wizard](/docs/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/overview.md) topic for instructions to add this instant job into the Jobs tree.

For installing the job, select __Local host__ on the Hosts page of the Instant Job Wizard.

![FS_MigrateSchema job in the Jobs tree](/img/product_docs/accessanalyzer/enterpriseauditor/admin/hostmanagement/jobstree.webp)

Runtime Details:

- Dependencies – None
- Target Hosts – None
- Scheduling – This job should be scheduled to run as desired
- History Retention – Not supported and should be turned off
- Multi-console Support – Not supported
- Additional Notes – None

The FS\_Migrate Schema Job migrates the schema in order to support the use of 64-bit ResourceID's without affecting data.

## Analysis Tasks for the FS\_MigrateSchema Job

Navigate to the __Jobs__ > __FS\_MigrateSchema__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis tasks. The analysis tasks are preconfigured for this job.

![Default Analysis tasks for the job](/img/product_docs/accessanalyzer/enterpriseauditor/admin/jobs/instantjobs/analysistasks.webp)

The default analysis tasks are:

- 1.Migrate Resources – Migrates the SA\_FSAA\_Resources table to leverage 64-bit IDs
- 2.Migrate UnixRights – Migrates the SA\_FSAA\_UnixRights table to leverage 64-bit IDs
- 3.Migrate Gates – Migrates the SA\_Gates table to leverage 64-bit IDs
- 4.Migrate GatesProxy – Migrates the SA\_FSAA\_GatesProxy table to leverage 64-bit IDs
- 5.Migrate Exceptions – Migrates the SA\_FSAA\_Exceptions table to leverage 64-bit IDs
- 6.Migrate ProbableOwners – Migrates the SA\_FSAA\_ProbableOwners table to leverage 64-bit IDs
- 7.Migrate FileSizes – Migrates the SA\_FSAA\_FileSizes table to leverage 64-bit IDs
- 8.Migrate FileTypes – Migrates the SA\_FSAA\_FileTypes table to leverage 64-bit IDs
- 9.Migrate FileAges – Migrates the SA\_FSAA\_FileAges table to leverage 64-bit IDs
- 10.Migrate FileTags – Migrates the SA\_FSAA\_FileTags table to leverage 64-bit IDs
- 11.Migrate DFS Links – Migrates the SA\_FSDFS\_Links table to leverage 64-bit IDs
- 12.Migrate DLP Matches – Migrates the SA\_FSDLP\_Matches table to leverage 64-bit IDs
- 13.Migrate DLP MatchHits – Migrates the SA\_FSDLP\_MatchHits table to leverage 64-bit IDs
- 14.Migrate DLP MatchHits Subject Profile – Migrates the SA\_FSDLP\_MatchHits\_SubjectProfile table to leverage 64-bit IDs
- 15.Migrate FSAC ActivityEvents – Migrates the SA\_FSAC\_ActivityEvents table to leverage 64-bit IDs
- 16.Migrate DailyActivity – Migrates the SA\_FSAC\_DailyActivity table to leverage 64-bit IDs
- 17.Migrate FSAC RenameTargets – Migrates the SA\_FSAC\_RenameTargets table to leverage 64-bit IDs
- 18.Migrate FSAC Exceptions – Migrates the SA\_FSAC\_Exceptions table to leverage 64-bit IDs
- 19.Refresh Views – Updates viewable metadata
