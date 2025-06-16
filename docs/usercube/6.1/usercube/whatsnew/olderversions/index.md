# Usercube v5.x Release Notes

## Version 5.2.3.19

Release date 10-Oct-2022

#### Enhancements

- Connectors and Integrations
    - New option to specify the filter column by EntityType in Cyberark/SCIM to mitigate export
      errors due to extraction limits.

#### Fixed Bugs

- Jobs and Policy
    - For security, when assigned resource types are canceled due to inconsistent data, they are now
      blocked despite the block provisioning attribute being set to false.
    - The naming conventions task no longer fails with an "EMPTY" error message when a naming rule
      uses only indirect properties of the mapped group (instead of direct properties).
- Logs / Performance / Security
    - The database history will no longer grow indefinitely when there are navigation rules
      targeting deleted groups/profiles. Previously, the history was increased after each role model
      evaluation.
- UI / UX
    - Enhanced performance when displaying the Workflow Overview page.
- Other
    - The custom links feature now allows the targeting of a URI outside the Usercube application
      not only from the dashboard, but also from the left menu.

## Version 5.2.3.17

Release date 27-Sep-2022

#### Fixed Bugs:

- Access Control and Workflows
    - Unauthorized errors will no longer occur in specific cases where certain dependent data is
      modified in a workflow.
    - When using Usercube's Workflow connector for an HR synchronization, error messages are now
      stored in the database as well as in the log files.
    - In addition, the workflow connector's package could handle only provisioning orders for
      identities with multiple records. Now, the connector also works for identities without
      records.  NOTE: The agent needs to be upgraded to benefit from this correction.
- Connectors and Integrations
    - For a SCIM/Salesforce connector, under certain conditions permissions were deleted and created
      at each synchronization.  This has been corrected.
    - New option to specify the filter column by EntityType in Cyberark/SCIM to mitigate export
      errors due to extraction limits.
- Jobs and Policy
    - New hierarchical dimensions are now immediately calculated without needing to restart the
      Usercube server.
    - Resources could be correlated using rules from other types. Now, the correlations are computed
      using only the rules of the expected resource type.
- Logs / Performance / Security
    - Improved role query performance when filtering by category (on the Access Roles screen and in
      the catalog of the role permission basket).
- Other
    - Is it now possible to use `--product-translations` to import product translation files when
      deploying the configuration to the SaaS environment.

## Version 5.2.3.16

Release date 12-Sep-2022

#### Enhancements:

- Connectors and Integrations
    - Some systems using the LDAP protocol require some attributes for creation and/or update
      requests. If these attributes are not synchronized in Usercube, they cannot be provided by
      scalar rules or navigation rules. Now, these attributes can be given as arguments in the
      provisioning order, using the ResourceType's ArgumentsExpression. See the
      [documentation](/docs/usercube/6.1/usercube/integration-guide/connectors/references-connectors/ldap/index.md).
    - For the PowerBI integration, a new configuration parameter permits choosing between showing
      the identifier or the display name for columns in PowerBI. After the changing the parameter
      and deploying the configuration, the PowerBI cache must be fully emptied.
- Jobs and Policy
    - The configuration deployment tool now throws an error if two different tasks use the same
      identifier. (To add the same task to more than one job the `step` tag can be used.)
- Logs / Performance / Security
    - More coherence checks are made when importing with the configuration deployment tool.
    - The server now gives more detailed information about PowerBI errors.
- Other
    - When the server is launched, the database is now upgraded to the latest version.
- UI / UX
    - A new custom menu link feature has been added. It enables the configuration of custom links
      that let the user navigate to a custom static HTML pages. At this time, only two custom link
      settings can be configured. Two examples have been added to the Usercube demo configuration
      with URLs : /LegalNotice & /TermsService. See the
      [documentation](/docs/usercube/6.1/usercube/integration-guide/network-configuration/settings/index.md)
      for more information.

#### Fixed Bugs:

- Access Control and Workflows
    - The deploy configuration tool now correctly reads languages 9 to 16 for email notification
      templates.
    - Notification emails are no longer sent multiple times to the same group and/or generic email
      address.
- Jobs and Policy
    - Corrected an issue where, occasionally, the first user that opens the permission basket after
      a server restart could get a runtime error.
    - Corrected an issue where manual assignments were lost when updating owner information.
    - Assigned resource types are no longer canceled when the resource type grouping parameters are
      changed (P0, etc.).
    - All group memberships are now retrieved when using an Active Directory connection. Previously,
      restored objects (that had been previously deleted) were excluded.
- Logs / Performance / Security
    - Performance issues have been corrected when using the View History feature for an identity.
- Other
    - The option `--product-translation` has been fixed, allowing the export of the product
      translations.
- UI / UX
    - Top menu bar links now refresh correctly when a list, without default value for the top menu
      bar, is opened.
    - Column headers on generic list pages are now displayed in the correct language.
    - Search bar filters now properly take into account the `AddedMinutes` for date values.

## Version 5.2.3.12

Release date 28-Jul-2022

#### Enhancements:

- Access Control and Workflows
    - For homonym filters, bindings from different entity types can now be used. For example, it is
      possible to verify that a new user does not an already exist as employee **or** a guest.
- Connectors and Integrations
    - Fulfill capabilities have been added to the EasyVista connector: employees can be created,
      updated and archived (to the extent allowed by the EasyVista API).
    - The SCIM connector, when used with Salesforce, was limited to 2000 users. It is now able to
      export all users.
    - The SCIM connector also had some issues when provisioning attributes from extension schemas.
      It is now able to provision any attribute in any SCIM-compatible instance.
- Jobs and Policy
    - When FulfillWorkflow is used with the ResourceIdToCopy parameter, the provisioning order
      didn't set null values for null navigations. Now, a cloned record can have navigation
      properties that are null.
- Logs / Performance / Security
    - New verbose logs show the data source paths (CSV or PowerShell script paths) that are allowed
      by the agent as specified in the connections settings file.
- UI / UX
    - On the dashboard, it was not possible to add MenuItem with URI targeting a page outside the
      Usercube application. Now, any link is allowed in the MenuItem.URI property.
- Other
    - A new API retrieves entity type data that has been updated (creation, modification or
      deletion), in an incremental mode, from a given date. See the [documentation]
      (/integration-guide/api/server/resource/index.html#apiresourceincrementaltypedate).
    - When the server is launched, the database is now upgraded to the latest version if necessary

#### Fixed Bugs:

- Access Control and Workflows
    - If a property is in a VisibilityGroup and a user without permissions wants to query it with
      the Query Module, an empty column will be returned instead of the real values.
    - Previously, a browser's cache had to be cleared after updating a UI form's configuration. Now,
      simply re-opening the browser will take the new changes into account.
    - The RemoveDiacritics method now replaces special characters like � or � with their non
      accentuated equivalent (oe and sh for these examples).
    - The Workflow Overview screen is shown without error when a record is added during a workflow
      request step and subsequently removed in the review step.
    - At the end of a workflow, mandatory drop-down lists that had only one pre-filled value no
      longer generate validation errors.
    - In workflow forms, the combo box items are now systematically sorted in alphabetical order.
    - Fixed an issue where 500 errors appeared in workflows or in the permissions basket after a
      property had been removed by a configuration change.
- Certifications and Risks
    - In certain cases, AccessControlRules for AccessCertificationItems were not respecting a single
      filter. Now a single filter is respected.
- Connectors and Integrations
    - When an unplugged connection is used in a connector already containing synchronization
      connection(s), the prepare synchronization no longer fails.
    - On the connector screen, labels for Active Directory and LDAP resource type settings have been
      clarified.
    - The Excel connector can now properly do exports when date columns also contain the time.
- Jobs and Policy
    - During a new composite role's validation, linked single roles that were "pre-existing" are no
      longer temporarily deleted.
    - Correction for an issue where, under certain circumstances, a denied role could stay on the
      role review screen.
    - Navigation rules are now properly taken into account when created via the UI.
    - Canceled assigned resource types are now correctly deleted once the target resource is
      deprovisioned.
    - Denying a role linked to a non-conforming account is now correctly handled so that the deny
      decision will be remembered and the role will no longer appear for validation.
    - Role model computation results are now always the same whether executed via a workflow or
      executed via the executable.
    - Corrected a regression where, while manually running jobs with a remote agent, the job
      initiator was empty.
    - All single roles related to parameterized navigations in a non-conforming state are shown as
      non-conforming. Previously, only a few were shown.
- Logs / Performance / Security
    - Corrected certain SQL deadlocks that were happening when workflow changes were persisted while
      the Usercube-Generate-ProvisioningOrders was running.
    - The bindings required for each workflow step are now stored in a cache in the Temp/Cache
      folder. This enhances cold start server performance.
    - The SetRecentlyModifiedFlag task has been optimized.
    - Performance enhancements for screen loading times.
    - The workflow summary has been optimized to load more quickly.
    - Submitting a workflow request could trigger hundreds of small database queries when many roles
      and accounts were added or removed to the user. Now, the database queries are batched together
      to reduce the workflow execution duration.
    - The dashboard counters are updated less frequently to enhance the application's performance.
    - Correction for an issue where, after a server restart, if many workflow requests were executed
      immediately, some could fail with a 500 error.
- UI / UX
    - Navigating through certain workflows no longer incorrectly affects the filter on the Access
      Roles page, so roles linked to a disabled policy are now correctly displayed.
    - When a workflow was initiated from a top level menu, sometimes the URL path was incorrectly
      built using an incorrect origin. Now the path is correctly built.
    - On pop-up windows, the action buttons are displayed if the window height has been changed, for
      example after resizing a page or zooming.
    - To avoid date confusion, if an incorrect number of digits are typed into a date field, an
      error is now displayed.
    - On lists of entity types, display indicators now correctly update depending on the chosen
      language.
- Other
    - The configuration export is now more reliable when a connector is created via the UI.

## Version 5.2.3.03

Release date 3-Jun-2022

#### Fixed Bugs:

- Connectors and Integrations
    - When verifying permissions for new schema objects in an Azure AD, service account permission
      verifications could fail and the synchronization job would also fail. Now a lack of
      permissions for new schema objects does not block the entire synchronization. NOTE: This
      requires that the agent be upgraded.
    - When writing to LDAP directories, the LDAP connections were not reused when there were a very
      large number of provisioning orders. Now, the LDAP connections are pooled correctly to
      optimize job performance. NOTE: This requires that the agent be upgraded.
- Jobs and Policy
    - Corrected a regression where certain custom emails, sent via a job, caused an error.

## Version 5.2.3.02

Release date 31-May-2022

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the documentation's
[Migration](/docs/usercube/6.1/usercube/migration-guide/index.md) section must therefore
be followed.

For licensing reasons, the Oracle and MySQL dlls have been removed from the Runtime. If these
connectors are used, please refer to the documentation for
[MySQL](/docs/usercube/6.1/usercube/integration-guide/connectors/references-packages/mysql/index.md)
and
[Oracle](/docs/usercube/6.1/usercube/integration-guide/connectors/references-packages/oracle-database/index.md)
for more information.

#### Fixed Bugs:

- Access Control and Workflows
    - Previously, clicking on a link in a Usercube email worked only when the user was already
      authenticated. Now the link is correctly reached even if an authentication detour is required.
- Connectors and Integrations
    - On connections with secured options, corrected an issue when saving values if no secured
      option is specified.
    - The `CreateAgentSynchroIncremental` scaffolding now verifies the connection types so that only
      connectors with incremental synchronizations are included.
    - Correction for an issue when loading certain entities with PowerBI.
- Jobs and Policy
    - The Usercube-Set-RecentlyModifiedFlag task performance could be degraded in large databases.
      The task is now optimized.
    - Offsets are correctly applied when there are overlapping positions for an assigned resource
      type that is given by a single role.
    - When deleting a resource using the fulfill internal workflow with an Exclusion Expression in
      the Context Rule for the corresponding entityType, if the Exclude Expression doesn't evaluate
      correctly at runtime then the owner is now automatically excluded and a message is logged.
      Also, the task now ends in a warning state.
    - Scalars and navigations are correctly computed when an assigned resource type is given
      manually.
    - Emails configured to be sent when jobs end in a specific state, now indicate the job's
      identifier (instead of the database id) and the state (error, warning, etc.) of the job.
    - The permissions for `ProvisioningPolicy/Policy/Query` and `ProvisioningPolicy/Policy` have now
      been removed from the BasketRulesControlRules scaffolding. They give access to the dashboard
      icon "Policies" which should not be part of this scaffolding. If this scaffolding is in use,
      the permissions won't be modified immediately in the database, but will be removed after a
      configuration deployment. If preserving them after a configuration deployment is necessary,
      they should be added in manually for the appropriate profiles or configuration migration can
      be performed.
    - When the case of an AD attribute is changed, it's now correctly taken into account in the
      provisioning order.
- Logs / Performance / Security
    - Corrected an issue where multiple updates created a database dead lock.
    - Exceptions related to asynchronous SQL executions are now logged.
- UI / UX
    - On the Assigned Profiles screen, edit and delete buttons are visible only when the user has
      the right to perform such an action.
- Other
    - When there is only one universe in a query module, the query is now correctly retrieved when
      reloading the page or copying/pasting the URL.

## Version 5.2.3.01 - Release Candidate

Release date 17-May-2022

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the documentation's
[Migration](/docs/usercube/6.1/usercube/migration-guide/index.md) section must therefore
be followed.

For licensing reasons, the Oracle and MySQL dlls have been removed from the Runtime. If these
connectors are used, please refer to the documentation for
[MySQL](/docs/usercube/6.1/usercube/integration-guide/connectors/references-packages/mysql/index.md)
and
[Oracle](/docs/usercube/6.1/usercube/integration-guide/connectors/references-packages/oracle-database/index.md)
for more information.

#### Enhancements:

- Access Control and Workflows
    - Homonym searches are now more customizable. See the
      [documentation](/docs/usercube/6.1/usercube/integration-guide/workflows/how-to/configure-homonym-test/index.md)
      for more information.
    - Improvements to the ToSoundex method used in expressions: now, all diacritics glyphs are
      replaced by simple letter to get the Soundex value.
- Certifications and Risks
    - The certification campaign page has been simplified to facilitate the review of access items:
      suggestions are provided based on the role model and a help dialog has been added.
      ![Certification](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.3.certification.png)
- Connectors and Integrations
    - The PowerBI report generated by the Role Mining tool has new tabs with metrics about the
      generated rules.
    - Two new connectors are now available for EasyVista in the Usercube marketplace. One allows the
      synchronization of users and the other allows the provisioning of tickets. For more
      information see the documentation, for
      [users](/docs/usercube/6.1/usercube/integration-guide/connectors/references-connectors/easyvista/index.md)
      and
      [tickets](/docs/usercube/6.1/usercube/integration-guide/connectors/references-connectors/easyvistaticket/index.md).
      Please contact your customer success manager for information about licensing. NOTE: This
      feature requires that the agent be upgraded.
    - On the connector screens, source columns are now modifiable by the user even without a schema
      refresh.
    - For the ServiceNow package and the ServiceNow ticket package, client id and secret have been
      transformed as secured options.
      ![SecureOptions](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.3.servicenowsecureoptions.png)
    - For the AzureAD connector, exporting the extension attributes is now allowed.
- Jobs and Policy
    - When a job is blocked due to exceeding a synchronization threshold, a "Synchronization
      Changes" tab is displayed on the job detail page and entity types can be selected to see all
      changed resources
      ![DepassedThresholdCounters](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.3.depassedthresholdcounters.png)![DepassedThresholdChanges](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.3.depassedthresholdchanges.png)
    - Integrated a new "Literal" expression option, reducing the need for C# code for simple cases.
      The "Literal" expression is available for ResourceScalarRule expressions, ResourceQueryRule
      source expressions and EntityPropertyExpression expressions for creation and update. See the
      [documentation](/docs/usercube/6.1/usercube/integration-guide/toolkit/expressions/index.md)
      for more information.
    - The role model simulation has been redesigned and has more fonctionality.
      ![SimulationAddDelete](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.3.simulationadddelete.png)![SimulationResults](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.3.simulationresults.png)
    - Resource Types have a new option, "Depends On" which assures that resource types are created
      in the correct order. For example, an Exchange Account would be created after the Active
      Directory account.
      ![ResourceTypeDependsOn](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.3.resourcetypedependson.png)
    - The Usercube-Set-RecentlyModifiedFlag tool now propagates "dirty" flag on users to their
      associated records.
- UI / UX
    - The dashboard has been enhanced. Icons are now color-customizable and administration icons are
      split by entity type and the counters for administrative actions have been re-introduced.
      ![Dashboard](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.3.dashboard.png)
    - A setting has been introduced to disable dashboard counters related to the provisioning
      screens (Role Review, Provisioning Review, Role Reconciliation, Resource Reconciliation and
      Manual Provisioning. This can help with performance issues. See `DisableProvisioningCounters`
      in the
      [documentation](/docs/usercube/6.1/usercube/integration-guide/network-configuration/settings/index.md).
    - Entity histories are now available. Browse an entity's history and view all the events related
      to that entity. Events of the same type can be compared in order to see differences between
      dates.
      ![ViewHistory](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.3.viewhistory.png)
    - An entity's data can now be viewed as of a specific date.
      ![DataAsOfDate](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.3.dataasofdate.png)
    - Enhancements have been made to the Resource Type screens so that the correct flow of actions
      is encouraged.
    - On the Assigned Profiles screen, the search operator on the Profile column now uses a
      "Contain" filter instead of "StartWith".
    - The screen for defining automation rules has been improved for clarity.
      ![AutomationRules](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.3.automationrules.png)
- Other
    - When exporting the configuration, the option �mark-for-export will now flag all items created
      via the UI so that they will also export. A second execution of the task is no longer
      necessary.
    - Additionally, there is a new option that will mark certain elements of the Role Model for
      export (�mark-rolemodel-for-export). Currently this includes the following items created via
      the UI:
        - Single Roles
        - Composite Roles
        - Single Role Rules
        - Composite Role Rules
        - Pending Approval Rules
    - Improvements have been made to the deploy configuration tool to catch more configuration
      syntax problems.
    - The list of keys for English and French translations have been added to the SDK.
    - Product translations can now be imported with the configuration deployment tool.
    - Role Mapping feature allows to automatically create roles and rules corresponding to an
      external system permission based on a set of naming conventions.

#### Fixed bugs:

- Access Control and Workflows
    - Workflows with a `ContinueWith` activity now correctly find all email recipients without
      throwing an error.
    - Homonym verifications that are applied in an update workflow now ignore the current resource's
      record(s) so as not to propose the same resource as a homonym.
- Connectors and Integrations
    - Synchronized values with spaces are no longer trimmed, correctly representing an exact copy of
      the incoming data. This change may generate extra reconciliation tasks.
    - The scaffolding `ConnectorMappings` now works correctly when, for entity associations,
      `IsProperty1Collection` is true. Previously it only worked if `IsProperty2Collection` was
      true.
    - In the case of a remote agent, using "Account Management" and choosing "Reset Password (by
      email)", the email is now sent correctly.
    - On the connector screens, adding a final backslash to a connection parameter (for example, a
      folder path) is now properly handled.
    - Corrected a problem where, for CSV connector synchronizations, multiple encoded quotation
      marks were causing problems.
    - On the Connector Entity Type pages, error messages have been downgraded to warning messages
      and are better placed to communicate the real issue.
- Jobs and Policy
    - When a job has an errored task and a task blocked because of an exceeded threshold, the
      "Relaunch" option is no longer available.
    - On the Resource Reconciliation page, mono-valued properties could be listed, but shown as
      unchanged. Now, they are now longer listed.
    - The `CreateInitializationJob` scaffolding's task sequencing has been corrected.
    - In certain cases, with `CorrelateMultipleResoruces` as true, `AssignedResourceScalars` could
      be duplicated in the database, blocking the compute role model. This has been corrected.
    - During internal provisioning, corrections were made when deleting resources linked to other
      resources. This case wasn't always handled correctly, causing performance difficulties.
    - When performing an RH synchronization with an associated fulfill internal workflow and when,
      for the same user, a position was added and deleted at the same time, both the add and the
      delete are now taken into account.
- UI / UX
    - When a user navigates from one entity to another, the links on the actions bar are now
      correctly reloaded based on the user's permissions.
    - Specifying a control InputType as hidden now works correctly for ForeignKey properties
    - Display tables with searchable/sortable headers are now easier to use. The search and filter
      buttons are now always displayed instead of requiring a column resize in order to access them.
    - On the connection screens, the connection identifier is now read-only after creation.
    - Corrected errors that were sometimes thrown when creating query or scalar roles via the UI.
    - Occasionally, on some browsers, elements based on the page height weren't correctly calculated
      and caused a blank page. This issue has been fixed.
    - In a workflow that manages several positions, a deleted position would move to the top of the
      list. Now it stays in its original location.
    - Now, in a layout row set, the checkbox's label is displayed next to the checkbox.
- Other
    - When updated in the configuration, two ContextRule calculated properties
      `ResourcesStartExpression` and `ResourcesEndExpression` are now correctly updated when the
      configuration is imported.
    - The configuration export tool now exports the resource key reference instead of the id for:
      SingleRoleRules, CompositeRoleRules, ResourceNavigationRules, and ResourceTypeRules.
    - The deployment configuration tool now blocks the display table column SearchOperators that are
      "FlexibleContain" since this configuration is not allowed.

## Version 5.2.2.7

Release date 12-Apr-2022

#### Fixed bugs:

- Connectors and Integrations
    - When the PrepareSynchronization finishes in error, the synchronization is now closed, so the
      next synchronizations are no longer blocked.
    - The PassworResetSetting now correctly generates a password using the `GeneratedLength`,
      `GeneratedUpperCaseCharsCount`, `GeneratedDigitCharsCount`, `GeneratedSymbolCharsCount`,
      `GeneratedLowerCaseCharsCount` options.
    - Link values in an LDAP export were written both to their own files and to the entries file.
      Now there are no duplicate lines in the entries file. NOTE: This feature requires that the
      agent be upgraded.
    - For the SCIM connector's export, the output file name for association mappings is now correct.
      NOTE: This feature requires that the agent be upgraded.
- Jobs and Policy
    - In a situation where a ResourceType can be inferred by several single roles, some of which can
      be inferred by several composite roles, giving a composite role could result in the
      ResourceType's disappearance during the approval phase. This has been corrected.
    - The ComputeRoleModel task could fail if a scalar rule value was longer than 4,000 characters.
      Now, only the specific value is tagged as an error instead of the whole task.
    - The provisioning calculation can better handle dates far into the future or the past.
    - For resources imported via XML, primary key columns are now automatically calculated.
    - Running simultaneous correlation key calculations is now blocked, in order to avoid primary
      key violation constraints.
    - Certain SQL deadlocks are now prevented when running a FulfillInternalResources task.
    - Deactivating a connector no longer removes too many tasks from scaffolded multi-connector
      jobs.
    - The Compute Role Model now correctly detects when a hierarchical dimension is cyclical and
      stack overflow errors are no longer thrown.
    - Offsets defined at the TypeRule level are now correctly applied to all properties of an
      AssignedResourceType.
- Logs / Performance / Security / Other
    - Indexed view names are now shorter (using hexa encoding) because very long names could cause
      errors while importing the configuration.
    - The Usercube-Manage-History tool now cleans the history with smaller batches to reduce the SQL
      server memory/disk usage.
    - Menus protected with dynamic filters by profile were checked for all the possible profiles
      instead of only the needed one(s). This has been optimized and now, administrators get their
      menus faster.
    - When viewing an entity, menus displayed slowly when their permissions were protected with
      complex filters. Now, the response times are greatly optimized.
    - The complexity of SQL queries performed in jobs and workflows has been greatly reduced,
      enhancing overall performance.
    - The permission basket response time has been reduced.
    - More index optimizations.
- UI / UX
    - Correction for a regression where the date selection component gave errors when the language
      was French.
    - An XML configuration with an OptimizeDisplayTable scaffolding can now be deployed if one of
      the columns is the resource's InternalDisplayName property.
    - Corrected a regression where, on the view page of an entity with records, the "View More"
      button no longer existed.
    - The job duration time is now correctly displayed when a job takes longer than one day.
    - Automation rules created by the UI and XML were displayed differently on the Automations
      screen when viewing by ResourceType. This display has now been harmonized.
    - On the workflow supervision screen, navigation bindings in display elements no loner generate
      a blank page for deleted users.

## Version 5.2.2.1 - Commercial Release

Release date 24-Feb-2022

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the documentation's
[Migration](/docs/usercube/6.1/usercube/migration-guide/index.md) section must therefore
be followed.

#### Enhancements:

- Connectors and Integrations
    - The Export-ActiveDirectory tool has a new argument `--request-timeout` that configures the
      LDAP client-side timeout when synchronizing the Active Directory.
- Jobs and Policy
    - On the Access Rule pages, hours and minutes can now be defined for time offsets.
- Other
    - The configuration can now be deployed remotely via an HTTP post request. See the
      [documentation](/docs/usercube/6.1/usercube/integration-guide/toolkit/xml-configuration/jobs/tasks/server/deployconfigurationtask/index.md)
      for more information.

#### Fixed bugs:

- Access Control and Workflows
    - A cache issue with QueryHandler queries has been corrected.
    - Profiles with filters that concern multiple records are now correctly calculating based on all
      records instead of only one.
    - Building SQL queries on complex entity models that have more than one multi-valued navigation
      no longer throws an error.
    - When synchronizing from an HR source with multiple positions, and when existing positions have
      end dates, an added position's end date is now also being taken into account.
    - When synchronizing an HR source, the triggered workflows' subjects are no longer partially
      empty for employees with positions that were added and removed at the same time.
- Other
    - For APIs, when a query specifies a multi-valued join the continuation token is now correct.

## Version 5.2.2.0 - Release Candidate

Release date 10-Feb-2022

#### Enhancements:

- Access Control and Workflows

    - Workflows that are in process or have been previously saved, can now be aborted. Once aborted,
      a purge option is now available on the Workflow Overview screen to completely remove the
      workflow.
      ![WorkflowAbort](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.2.workflowabort.png)![WorkflowPurge](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.2.workflowpurge.png)
    - A user can now re-forward tasks from the Workflow Overview screen:
        - If the ActivityTemplate is `ActionWithRefine`, only the previous performer can re-forward
          (the one from which originates the previous forward/re-forward).
        - If the ActivityTemplate is `ReviewWithFeedback`, only the original reviewer(s) or
          performer can re-forward.
    - Drop-down lists can now be automatically populated based on previously chosen values. In the
      following example, choosing a manager will automatically fill the �Organization' and
      �Location' fields with the manager's respective values:

        ```xml
        <Control DisplayName_L1="Position" DisplayName_L2="Poste" OutputType="LayoutFieldset">      <Control Binding="Title" />      <Control Binding="Manager" />      <Control Binding="Organization" DefaultValueBinding="Manager.MainOrganization" />      <Control Binding="Location" DefaultValueBinding="Manager.MainLocation" />    </Control>
        ```

- Certifications and Risks
    - Added performance optimizations for recertification campaigns.
    - On the Access Certification Review screen, the green pop-up confirmation notification is no
      longer displayed.
    - On the risk warning pop-up screen, a description field is now visible in addition to the
      remediation field.
- Connectors and Integrations
    - A new button on the connector screen refreshes all the connector's schemas.
      ![ConnectorRefreshAllSchemas](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.2.connectorrefreshallschemas.png)
    - On the connector screens, when using the SQL Connection Package, errors thrown by fetch schema
      operations are displayed near the appropriate field.
    - The RACF connector now extracts account/group associations in a 0203.csv file.
    - On the SQL connection screens, the packages now have dedicated fields for User ID and Password
      so they can be encrypted in the storage system.
    - The two original CSV packages have been merged into one, that can do complete and/or
      incremental synchronizations according to the Path and PathIncremental attributes. NOTE: This
      feature requires that the agent be upgraded.
    - For the Excel connection package, different file paths can now be specified for complete
      and/or incremental synchronizations. NOTE: These corrections require upgrading the agent.
      ![ExcelSynchroPaths](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.2.excelsynchropaths.png)
    - On the entity mapping screen, a mapped column is no longer removed from the mapping selection
      screen, so that several properties can now be defined on the same connection column.
      ![RemapColumns](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.2.remapcolumns.png)
    - Updated the default web.config file to automatically start the scheduler when IIS starts.
    - For connection packages that manage an incremental synchronization mode, the jobs button now
      allows the choice between complete and incremental synchronizations.
      ![JobCompleteAndIncremental](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.2.virtualjobcompleteandincremental.png)
    - The Robot Framework connector is now able to generate a secure password.
- Jobs and Policy
    - _Behavior modification_: When reconciliating a composite role, the application will not assign
      a composite role unless all linked single roles are also assigned. Previously, only one
      non-ambiguous linked single role would be enough to assign the composite role. This prevents a
      mix of allowed and denied single roles displayed on the users' permission lists.
    - When deploying the configuration, the `CronTabExpression` is now checked and an error will be
      thrown if it is invalid.
    - On the provisioning review and resource reconciliation screens, we are now able to postpone
      the decision on an individual property.
      ![PostponDecision](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.2.postponedecision.png)
    - The permission assignment pop-up has been enhanced.
        - dates and comments can be directly modified
        - an item can be deleted with the button on each line
          ![PermissionsPopup](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.2.permissionpopup.png)
    - Added ability to see the role requester's comment on the role review screen and in the role
      review notification email.
      ![RoleReviewComment](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.2.rolereviewcomment.png)
    - On the provisioning review screen, it is now possible to filter by resource type and by
      specific properties.
      ![ProvisioningReviewWithPropertyView](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.2.provisioningreviewwithpropertyview.png)
    - On the provisioning review screen, it is now possible to filter on properties once a resource
      type has been chosen.
    - An error indicator is now displayed on a ResourceType's assigned properties when the
      ProvisioningState equals RuntimeErrored.
    - Jobs from the connector screens are now moved to a dedicated category on the job execution
      screen so they are no longer intermixed with other jobs.
- Logs / Performance / Security

    - The resource identity property can now be overridden in appsettings.json, allowing different
      environments to use different settings:

        ```json
        "SelectUserByIdentityQueryHandler": \{
           "ResourceIdentityProperty": "AD_Entry:objectSid"\}

        ```

    - An agent scheduler will now wait for the lock file to be released before starting. Previously,
      it would start and immediately fail, unable to recover.
    - When C# expressions are compiled, the line number and the C# error identifier are now given.
    - C# tuples can now be used in C# expressions.
    - The complete job scaffolding now contains a new task that updates configuration-related
      database indexes.
    - For added security, the file paths used in a connector's connections are now checked against a
      list of authorized file paths located in the appsettings.agent.json under the SourcesRootPaths
      attribute. More information is available in the
      [documentation](/docs/usercube/6.1/usercube/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md).
    - Added encryption support for appsettings.json agent and server files. More information is
      available in the documentation for the
      [agent](/docs/usercube/6.1/usercube/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md)
      and for the
      [server](/docs/usercube/6.1/usercube/integration-guide/network-configuration/server-configuration/rsa-encryption/index.md).

- UI / UX
    - When creating or modifying an element that can have an offset date (`Navigation Rule`,
      `Query Rule`, `Resource Type` or `Scalar Rule`), there is now a possibility to choose "Never"
      so that the element will never expire and will display as "No End Date".
    - New customization options for the top bar/banner (background color as well as font color) are
      available by specifying the colors in the `appsettings` or in the config - using `BannerColor`
      and `BannerTextColor`. If no color is specified in the appsettings, the colors specified in
      the configuration are used. If no colors are specified in the configuration, the default
      colors are used. This allows easy configuration of color differentiation by environment.
    - On the connector screens, it is now possible to configure an EntityType's Internal Display
      Name expression.
    - When several records are changed in a workflow, the Workflow Overview screen now gives a
      position summary to indicate which position was modified.
      ![WorkflowOverviewSeePositions](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.2.workflowoverviewseepositions.png)
    - In workflows, child component labels are now displayed when using the `LayoutRowSet` component
      ![ChildLabels](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.2.childlabelsonlayoutrowset.png)
    - In the UI only, Pending Approval Rules have been renamed as Automation Rules.
    - Automation Rules (formerly Pending Approval Rules) can now be created via the Access Rules
      screen.
      ![AutomationRules](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.2.automationrules.png)
    - It's now possible to use URIs in menu items that are up to 2048 characters in length.
    - On the connector screens, specific errors are now displayed near the associated fields instead
      of as general, global errors.
    - An indicator is now displayed in the connection list when the last schema update failed.
      ![RefreshSchemaFailIndicator](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.2.refreshschemafailindicator.png)
- Other
    - The Configuration Deployment tool has been completely re-written. New performance enhancements
      make the import faster and error and warning messages are clearer.
    - The Configuration Export tool has also been completely re-written and is now functional. With
      `--mark-for-export`, items created by the connector pages can now be exported (other areas of
      the application are coming soon). An exported configuration can now also be re-imported.
    - A new option, `--reset-database`, has been added to the Configuration Deployment tool. It
      enables a full re-set of the Usercube database using the files ResetDatabase.sql and
      Usercube.sql (they are now in the Runtime package). This allows for a new, clean Usercube
      instance, and works both locally and remotely.
    - A new literal option is available for expressions. This expression now works for
      `RessourceScalarRules` expressions, `ResourceQueryRules` source expressions, and
      `EntityPropertyExpression` expressions. Examples of the first two types of rules have been
      added to the demo configuration.
    - Two new utility functions for C# expressions: `BuildUsername` and `BuildUsernameWithInitials`.
      See the
      [C# utility functions section](/docs/usercube/6.1/usercube/integration-guide/toolkit/expressions/csharp-utility-functions/index.md)
      of the documentation.
    - Two demo applications representing a Banking and an HR system have been added to the SDK to
      illustrate interactions with managed systems.
    - InvokeSqlCommands can now be overridden in the agent appsettings file. More information is
      available in the
      [documentation](/docs/usercube/6.1/usercube/integration-guide/toolkit/xml-configuration/jobs/tasks/agent/invokesqlcommandtask/index.md)

#### Fixed bugs:

- Access Control and Workflows
    - Assigned profiles can no longer be given to users who do not possess the required resource for
      authentication and logging into Usercube.
    - In a workflow without a persist step, the last activity can now be completed from the UI.
      Previously, the message "This task has already been handled." was displayed prematurely.
    - Access review campaigns are now started based on UTC time instead of the system time.
    - In a workflow with a required photo (using AssertValueRequiredAspect) where the photo is
      missing, the assert message is now clearly visible on the missing photo's frame.
    - When the �Message' field on the �Finalize' step of a workflow contains more than 4000
      characters, a clear error messages is now displayed.
    - When an automatically assigned profile is manually denied, it will no longer be recreated.
- Certifications and Risks
    - The job that processes certification campaigns no longer tries to assign certification items
      after a campaign's end date.
- Connectors and Integrations
    - In some cases, deleted AD entries were not detected by the incremental synchronization. Now,
      the entries are always correctly removed from the database by the synchronization.
    - When creating an entity type, an error was thrown when trying to use the same identifier as
      one that had been previously deleted. Now a previously deleted identifier can be re-used.
    - A clearer error message is now presented if an incremental synchronization fails because a
      prior set of data for comparison is not available.
- Jobs and Policy
    - The "Automatic, but with validation" role option can now be used in all types of workflows.
      Before, it required the user to pass through a workflow's permissions page to function
      properly.
    - Assigned resource types' offsets are now taken account if they are inferred from a manually
      approved single role.
    - The `SetRecentlyModifiedFlagTask` no longer deletes changes generated during a blocked
      synchronization.
    - For mono-valued application permissions waiting for approval on the provisioning review
      screen, navigations are no longer staying blocked after initially being unlocked/sent or
      errored.
    - The search filters on the job page are working again.
    - After exceeding a threshold in a job and then relaunching the job, the task line now shows the
      number of entities added, deleted, and updated. Before, the counters were staying at the zero
      values from when the job was blocked.
- Logs / Performance / Security
    - When an SQL exception occurred, only the SQL error message was logged and the specific query
      was logged only if the log level was Verbose. Now, the query is logged in all cases.
- UI / UX
    - The job task "Provisioning Orders Generation" is now named "Compute Role Model" for clarity.
    - Entering an incorrect format in a date field will now give clearer error messages.
- Other
    - The PowerBI API connector now supports properties having the same name.
    - Using the Query UI or the PowerBI plugin, when displaying the resources of a given resource
      type, like "AD admin accounts", only resources of the correct type are returned. Previously,
      all resources were returned.
    - The C# expressions for the role mapping are now recompiled by the XML tool. Previously, they
      were only compiled when the -c argument was explicitly provided.

## Version 5.2.1.3

Release date 26-Jan-2022

#### Fixed bugs:

- Connectors and Integrations
    - Creating an EntityType using the UI with a plural display name no longer throws an error.
    - The connector generator tool has been re-enabled.
- Jobs and Policy
    - Removed incorrect associations with existing records when deleting resources via a
      synchronization job. This was causing problems with multi-position synchronizations.
    - For Resource Types with `DiscardManualAssignements`=true, changes needing reconciliation could
      not be manually kept as they were immediately discarded. Now, only manual values impacted by
      workflow changes are discarded.
    - When running a compute role model on an entity type having a resource type where correlate
      multiple resources was enabled, a unique key violation has been corrected.
    - Mono-valued navigations are now deprovisioned when they are deleted in source files.
- UI
    - Correction for a regression where, on multiple position workflows, the "Delete the selected
      position" button disappears when clicked.
- Other
    - Added the possibility to specify a minimum authentication algorithm for SAML configuration
      using `MinIncomingSigningAlgorithm`. More information is available in the documentation's
      [�End User Authentication' section](/docs/usercube/6.1/usercube/integration-guide/network-configuration/server-configuration/end-users-authentication/index.md).
    - Correction for a situation where, when two UI controls were linked together with a
      LinkedBinding, the generated query could be incorrect when the LinkedBinding and the
      FilterBinding values differed.
    - It is now possible to configure a path to public certificates in the appsettings.json using
      the attribute ValidationKeys in the section IdentityServer. These public keys can be used by
      Usercube to validate tokens generated by external applications.

## Version 5.2.1.1

Release date 14-Jan-2022

#### Fixed bugs:

- Connectors and Integrations

    - Corrections for SCIM export and provisioning. NOTE: These corrections require upgrading the
      agent.
    - For a password reset settings:
        - The `StrengthCheck` regex can now be used to verify the auto-generated password
        - If the `MustChange` attribute is set to true, the user will now be forced to change the
          password at the first connection. NOTE: This correction requires upgrading the agent.
    - For CSV Connector packages, ANSI encoding can now be specified as "windows-1252". Previously,
      only "iso-8859-1" was working.

- Jobs and Policy

    - Correction for a regression where role parameters weren't displayed in the permissions list.
    - If an existing assigned resource property is non-conforming or pre-existing, the workflow
      state no longer changes.
    - Changed properties are now filtered based on current resource Ids. This prevents the modifying
      of linked entities' pre-existing/non-conforming permissions, for example Person.Manager.
    - Manual provisioning tasks for generated assigned resource types now respect the start date and
      the `FulfillHoursAheadOftime`
    - When values are modified in an external system, AssignedResourceNavigations are now in the
      correct state so that non-conforming navigations from query rules are now indicated as
      cancelled instead of non-conforming.
    - Fixed a bug where unmapped scalar properties were considered "verified" before the execution
      of the corresponding provisioning order.
    - When a `RecordSection` is configured, outdated records are now ignored in the Compute Role
      Model if there is an up-to-date record present.
    - Correction for offset calculations when no end date exists.
    - New permissions with effective dates that are included in, or overlapping with, dates of an
      existing permission are now correctly handled.
    - When verified assigned resource navigations are deleted in an external system, they are now
      correctly marked as missing.
    - Running the compute role model task twice without any rule changes no longer triggers any
      updates.
    - Correction for an error on the provisioning review page when requesting the creation of a new
      resource.
    - For some resource type assignments that are awaiting correlation review, the properties were
      not computed. Now, all relevant properties are correctly computed.
    - If a permission assignment is non-conforming, a TimeOffset will no longer try to modify the
      assignment.
    - Corrected an error related to checks for job cancellations during server-side tasks.
    - A policy's `IsExternal` property can no longer be updated. It can only be set when the Policy
      is created.
    - On the provisioning screen, corrected an issue when trying to assign a different resource to a
      provisioning order.
    - Modifying values of applied mono-valued navigations no longer changes the state, incorrectly,
      to non-conforming.
    - Corrected the infinite queries requests during a connector synchronization when two entity
      properties use the `Option` type.

- UI

    - On a given ResourceType, when `AllowAdd` is set to false, the ResourceType will not be an
      option when choosing new permissions. However, it will remain an option for other types of
      actions (risk or rules, for example).

- Workflows and Access Control

    - Spaces can no longer be inserted before or after values in workflow forms, such as first name
      or last name. Now, all whitespace characters are trimmed when submitting a workflow.

- Other

    - The query module no longer throws "join not found" errors when designing a query for a deep
      data model.
    - Fixed the problem with the query module that occasionally resulted in a null reference error.
    - Corrected a configuration deployment error when several `IndirectResourceRules` were
      configured with the same property.
    - Corrected a problem where encodings for `EntityTypeMappings` were lost when migrating from
      older versions to 5.2 versions.

## Version 5.1.7.17

Release date 22-Dec-2021

#### Fixed Bugs:

- Jobs and Policy
    - During a connector synchronization, corrected a problem where a time-out was caused when two
      entity properties use the `Option` type.

## Version 5.1.7.16

Release date 09-Dec-2021

#### Fixed Bugs:

- Jobs and Policy
    - Fixed a ComputeRoleModel regression for ResourceTypeRules using dimensions or parameters.

## Version 5.1.7.15

Release date 06-Dec-2021

#### Fixed Bugs:

- Jobs and Policy
    - Scalars for ResourceTypes with `CorrelateMultipleResources` set to true, are no longer
      duplicated when the provisioning policy is run.

## Version 5.1.7.14

Release date 29-Nov-2021

#### Fixed Bugs:

- Jobs and Policy

    - When an existing navigation value is different from the one suggested by the role model, the
      assigned resource navigation is now marked as "Non-conforming". Previously, the state was
      incorrectly indicated as "Cancellation".

- Connectors and Integrations

    - To prevent password constraint errors, a new configuration setting,
      "PasswordGenerationSetting", permits a whitelist of allowed symbol characters for password
      generation called "AllowedSymbolChars". When provided, the white list will override the
      default symbol character list: "!;.,?()[]-\_&%$+{}@". More information is provided in the
      documentation's
      [�References' section](/docs/usercube/6.1/usercube/integration-guide/network-configuration/settings/index.md).

## Version 5.1.7.13

Release date 10-Nov-2021

#### Fixed Bugs:

- Jobs and Policy

    - Provisioning policy: keep the same workflow state when the existing assigned resource property
      is found or historic.
    - Provisioning policy: filter changed properties based on current resource ids (to prevent
      modifying linked entities found/historic permissions: Person.Manager).
    - Fix offset computing when there is no end date.

- Connectors and Integrations

    - Password Reset : Use the "StrengthCheck" regex to verify if the auto-generated password is
      matching.

## Version 5.1.7.12

Release date 27-Oct-2021

#### Fixed Bugs:

- Jobs and Policy
    - During the Compute Rule Model, calculating offsets on minimum and maximum date values no
      longer throws an error.
    - Fixed a SQL timeout on the Workflow Overview screen that could appear for workflows where a
      role was manually modified.
    - When a RecordSection is configured, outdated records are now ignored in the Compute Role Model
      if there is an up-to-date record present.

## Version 5.2.1.0

Release date 21-Oct-2021

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the documentation's
[Migration](/docs/usercube/6.1/usercube/migration-guide/index.md) section must therefore
be followed.

#### Enhancements:

- Certifications and Risks
    - "Declined" labels have been changed to "Refused" to keep vocabulary clear and consistent.
- Connectors and Integrations
    - The CSV Connector can now properly refresh the schema when reading files that have extensions
      different than "csv", such as "txt".
    - PowerShell sensitive options are now hidden when passing them to the API.
    - Add secured options fields for sensitive data in the PowerShell connection settings.
      ![Secured Options](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.1.securedoptions.png)
- Jobs and Policy
    - Azure AD binary properties can now be provisioned.
    - Indirect permissions can now be displayed on user permission screens. See the
      [documentation](/docs/usercube/6.1/usercube/integration-guide/role-assignment/indirectpermissions/index.md)
      for more information.
      ![Indirect Permissions](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.1.indirectpermissions.png)
- Logs/Performance/Security
    - The new `Usercube-Manage-History` tool manages the data history stored in the database. It can
      purge old data or consolidate the history.
    - The `Usercube-Manage-ConfigurationDependantIndexes` tool has a new option "�auto" to
      automatically generate database indexes based on the specific configuration. This improves the
      database performances for the directory pages and all the review screens.
    - Just after login, the first display of the dashboard was slow because of missing SQL indexes.
      The database schema and the SQL index management tool have new indexes to optimize these first
      connections.
    - Enhanced system verifications before running the initialization job.
- Other
    - The XSD for LdapResourceTypeMapping has been corrected.
    - Using the XSD, resources can be referenced by Id, so we now propose these attributes, for
      example D0Id.
    - Added a new Report Query Universe including identified Risks.
    - The Role Mining utility now gives a better results summary, showing the percentage of existing
      permissions that are taken into account by new rules and the number of exceptions that still
      remain.
- UI
    - When multiple languages are configured, the indicator number is now used to identify the
      language in the front-end (instead of the index in the table).
    - On the Fulfill Internal Workflow connection screen, the transition list selection field is now
      pre-filtered based on the selected workflow type.
    - Search bar items that a user is not allowed to modify are now hidden.
    - Priorities can now be set on DisplayEntityTypes so that the highest priority EntityTypes will
      be selected by default on administration screens. Priorities are selected based on
      ContextRules during the migration. In most cases, these will need adjusting.
    - On the Jobs screen, progress indicators for Provisioning Policy tasks are now displayed.
    - Orphan and Uncategorized filters on resource screens have been improved.
      ![Orphan and Uncategorized filters](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.1.orphanuncat.png)
    - AddedMinutes is now configurable for Display Entity Properties, Form Controls and Display
      Tables (column and tile items). The value set on the Display Entity Property is the default
      value used if no specific value is set for a form control or the display table.  
      Note that the current behavior does not change for WorkflowUpdateSeveralRecordsEntity forms.
      When a property is displayed in a display table without a set value for AddedMinutes (on the
      column or tile item and therefore not on the display property either), but the property is
      displayed in the form, then the AddedMinutes set on the form control is used to display the
      property value in the display table.
    - Optimized language-related property bindings for neutral properties in DisplayTables are now
      handled.
    - New links to owners on Reconciliation and Provisioning Review screens.
      ![Links on Reconciliation](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.1.linksfromresourcerec.png)![Links on Provisioning Review](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.1.linksfromprovreview.png)
    - New fields for existing options are now configurable on the ResourceType creation screens:
        - Remove Orphans
        - Block Provisioning Orders
        - Discard Manual Assignments
        - Correlate Multiple Resources
          ![New Options Resource Types](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.1.resourcetypenewoptions.png)
    - Errors on the EntityType configuration screen are now detected and displayed on each concerned
      field.
    - Improved the workflow state filter on the Role Review page: all "Pending approval" workflow
      states, except PendingRiskApproval, have now been grouped under one generic option "Pending
      Approval" instead of split into the different phases of approval.
      ![Pending Approval Filters](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.1.pendingapprovalsimplification.png)
- Workflows and Access Control
    - On the "My Tasks" screen, it is now possible to attribute tasks to a member of a review team.
      ![Assign Tasks 1](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.1.assignedto1.png)![Assign Tasks 2](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.1.assignedto2.png)

#### Fixed bugs:

- Certifications and Risks
    - When creating and updating a Certification Campaign, risk options and filters are no longer
      visible in the Target Specificities or Owner filters if no risks have been created.
    - Correction for active target filters in access certification campaigns for situations where
      identity changes were planned ahead of time.
- Connectors and Integrations
    - On the Connector Connection screen, the button "Check Connection" is disabled if the "Filters"
      field is empty. This harmonizes the behavior with other connection packages and avoids a
      notification error.
    - There is now a default DataTypeConverter for the Generic SQL Package. NOTE: This correction
      requires upgrading the agent.
    - Two connections can no longer have the same name; the comparison is now case-insensitive.
- Jobs and Policy
    - Force tasks to periodically evaluate the overall job state: if the job state is finished, the
      task will now finish as well.
    - Correction for the use of `ContinueOnError` for server side tasks.
    - After deleting a resource and then synchronizing, the provisioning state is now correctly set
      to executed instead of verified.
    - The TransmittedStateValidityPeriod is now taken into account for existing provisioning orders
      and duration periods greater than one day.
    - `CommentActivation` for Role Reviews can now be set on the Policy in the XML configuration.
- Logs/Performance/Security
    - Add colors in the `Usercube-Get-JobSteps` output to make it easier to differentiate the tasks.
    - The anonymization tool now completes without exceeding the time out.
    - Added an error message when running `Usercube-Get-JobSteps` with an incorrect job identifier.
    - AzureAD cookie files are now encrypted. This is handled during migration.
    - The OpenIdClient is now retrieved and saved when workflows re-created or reviewed via the API.
- Other
    - Certain special characters are no longer removed during configuration migrations.
    - CSV report columns are now generated in the same order as they are expressed in the report
      configuration.
- UI
    - The counter refresh has been improved on the �My Tasks' dashboard icon.
    - Error notifications are now always displayed when the API returns an error 403 (unauthorized)
      when retrieving resources for a dropdown.
    - Search filters are smarter when passing from one type of filter to another.
    - Default values in search bars are now taken into account in a list displayed like a table.
    - In search fields, placeholders were incorrect when they moved from inside the field to the top
      label. For example, in a User search bar, the placeholder on the empty field Name was "Name"
      but once a value was defined in the field, the top label was "Phonetic First/Last Name"
      instead of "Name".
    - Autocomplete pickers outside of Form Controls are now displayed properly.
    - A regression was fixed so that, on the Role Review and Role Reconciliation pop-up screens, the
      link to the owner has been re-established.
    - The record display on the Workflow Overview screen now groups records properly even if their
      changes are identical.
    - Filters on boolean properties are smarter: when "No" is selected, resources with property
      value equals to "False" or "Null" are returned instead of only "False".
    - Entity Property Identifier names are now verified on the connector pages. They can't be a
      reserved word, must start with a letter, can't contain accents, must contain only letters and
      digits.
    - In workflows, RecordSortProperties defined in the configuration were previously unused. Now, a
      record list in a workflow is sortable by:
        - The RecordSortProperty, if it is defined
        - The sort defined for the DisplayTable, if it is defined
        - The first column, if the defined DisplayTable is a "table" or the ResourceId if it's a
          "list"
    - On the permission modification page, corrected a regression where the "Allow" button was
      activated when the selected permission was already allowed.
    - Harmonize the usage of data filters on primary screens and pop-up screens.
- Workflows and Access Control
    - When changes are applied during a workflow validation step, all records are now correctly
      updated instead of only one record being updated.
    - ResourceFiles are now deleted when the associated resource is deleted
    - In a multiple-step workflow with photo changes, the photo is now visible in intermediary steps
      and only the last image is persisted.
    - Added necessary permissions to the `CreateAdministratorProfile` scaffolding so that
      administrators can use the basic Risk Module.
    - The configuration deployment tool no longer permits the creation of two aspects that point to
      the same binding on the same workflow.

## Version 5.2.0.8

Release date 12-Oct-2021

#### Fixed Bugs:

- Certifications and Risks
    - Database query optimization for the Access Certification review items.
    - When no photo property is set and an access review item has been forwarded, an issue with
      nulls has been fixed.
- Connectors and Integrations
    - The AD refresh schema mechanism has been modified to require fewer permissions and therefore
      avoid "unauthorized" errors. NOTE: This correction requires upgrading the agent.
    - Corrections for the SCIM export mechanism. NOTE: This correction requires upgrading the agent.
    - The "Manage Accounts" menu was displayed for users having matching permissions on all
      identities. Access to this menu is no longer denied for users with a filtered scope of
      responsibility.
    - Corrected a random error, "Cannot compare files with a different header", on incremental CSV
      file synchronizations. NOTE: This correction requires upgrading the agent.
- Jobs and Policy
    - A cancelled assigned resource navigation is now kept when the provisioning state is
      "executed".
    - Corrected a case where automatic roles weren't removed when the user's end date arrived.
    - Corrected certain primary key conflicts when trying to merge property changes while using the
      Fulfill Internal Workflow.
    - When a single role gives permissions that are forbidden by a Segregation of Duties blocking
      risk, the Compute-RoleModel calculation no longer fails.
    - For manual provisioning modifications, when only one permission assignment is changed all the
      other provisioning states now stay as they were instead of reverting to an "executed" state.
    - All linked resources are now updated when `CorrelateMultipleResources` is activated.
- Logs/Performance/Security
    - If the ActiveDirectoryUserStore was used with the login form, the credentials submitted are
      taken into account instead of constantly reusing the credentials of the first logged in user.
      NOTE: This correction requires upgrading the agent.
    - The `Usercube-Get-JobSteps` tool now displays the tasks sorted by level and launch order
      instead of simply by launch order.
    - The selection fields on resource entities are now faster.
- UI
    - Dates using the language 'en-GB' in date selection fields now allow a date in the European
      format to be typed in, instead of forcing an American format.
- Workflows and Access Control
    - Custom email notifications with filters used in the `QueryFilterExpression` no longer throw an
      occasional "Index was outside the bounds of the array" exception that prevented emails from
      being sent.
    - Fixed an SQL timeout on the Workflow Overview screen that could appear for workflows in which
      a role was manually modified.
- Other
    - The Role Mining tool now uses less memory with huge datasets.
    - Reports generated by scaffoldings are displayed on the dedicated menu.

## Version 5.1.7.11

Release date 24-Sep-2021

#### Fixed Bugs:

- Certifications and Risks

    - When no photo property is set and an access review item has been forwarded, an issue with
      nulls has been fixed.

- Jobs and Policy

    - When an assigned resource navigation is pending deletion, the state will now stay as
      cancellation, rather than reverting to non-conforming.
    - An orphaned account that had recently been correlated is now no longer be considered an
      orphan, preventing incorrect account deletions.
    - When computed permission assignments are null, a null reference exception is no longer thrown.
    - Corrected a case where automatic roles weren't removed when the user's end date arrived.
    - All linked resources are now updated when `CorrelateMultipleResources` is activated.

- Workflows and Access Control

    - Added a new, optional, expression to `AddChangeAspect`: `AcceptNullValueExpression` is a C#
      expression that must return a boolean value in order to specify whether `Null` is a taken into
      account as the changed value when it's returned by `Expression` parameter. By default, the
      value of `AcceptNullValueExpression` is false.
    - Custom email notifications with filters used in the `QueryFilterExpression` could sometimes
      have an "Index was outside the bounds of the array" exception that prevented emails from being
      sent. This has been corrected.

- Other

    - For OpenId Connect authentication, the response_mode and response_type settings can now be
      switched from code flow with PKCE to implicit flow.

## Version 5.2.0.6

Release date 30-Aug-2021

### **Migration notice:**

This release includes updated instructions for migrating from the version 5.1.7. The migration steps
in the documentation's [Migration](/docs/usercube/6.1/usercube/migration-guide/index.md)
section must therefore be followed.

There is no migration to be done from version 5.2.0.2.

#### Fixed Bugs:

- Certifications and Risks
    - Corrected the generation of Certification reports: in the case of an owner's DisplayName that
      is null, we now show the Id of the owner.
- Connectors and Integrations
    - When deploying an XML configuration, a SequenceException will no longer occur when a
      ResourceTypeMapping is not linked to the correct connection.
    - The Connection used by Fulfill tasks can now be overridden. Previously, these tasks were
      always using their ResourceTypes' Connections.
    - The Salesforce connector in 5.1 agents will no longer throw a System.NullReferenceException
      when calling a 5.2 server during the provisioning of user accounts.
    - For an Oracle database connection, the IsolationLevel parameter has changed for the
      InvokeSQLTask to prevent database locks.
- Jobs and Policy
    - Deploying the XML configuration no longer deletes navigation rules that were configured from
      the UI.
    - Fixed a runtime exception that could cause ChannelClosedExceptions when launching
      ComputeRoleModel.
    - When an assigned resource navigation is pending deletion, the state will now stay cancelled,
      rather than reverting to non-conforming.
    - An orphaned account that had recently been correlated is no longer be considered an orphan,
      preventing incorrect account deletions.
    - The ComputeRoleModel task now runs successfully after the deletion of a ResourceType.
    - When computed permission assignments are null, a null reference exception is no longer thrown.
    - Null reference error should no longer be thrown by the FulfillInternalWorkflow task.
    - Multi-valued dimensions are properly taken into account during the initialization phase.
- Migration from 5.1
    - The migration to 5.2 considered a CSV file shared by several entity types from the same
      connector as an error. Now, the migration automatically creates a CSV connection shared by all
      the entity types that need it.
    - The XML generated by the 5.2 migration tool is now indented correctly.
    - When migrating the XML configuration, redundant elements are no longer generated when the same
      CSV files are used in several mappings.
    - The XML migration now sets the Manual connector package for ResourceTypeMappings that had a
      Manual fulfillment in 5.1.
    - Certain ResourceTypeMappings now migrate properly with their connection information.
    - FulfillDatabase connectors now properly migrate to FulfillWorkflow.
    - Various additional improvements to the migration tool.
- Other
    - For OpenId Connect authentication, the response_mode and response_type settings can now be
      switched from code flow with PKCE to implicit flow.
    - For clustered server installations, the appSettings.json now has a new DataProtection section
      to configure a shared certificate for generating anti-forgery tokens and protecting
      authentication cookies.
    - The generate configuration tool now also generates CSV Connections.
- UI
    - The "OptimizeDisplayTable" scaffolding now properly handles simple columns (columns not
      containing tiles).
- Workflows and Access Control
    - The "OnlyIfNew" attribute is now taken into account for "BuildUniqueValue" aspects.

## Version 5.1.7.10

Release date 4-Aug-2021

#### Fixed Bugs:

- Certifications and Risks

    - When defining a campaign, the ResourceType's data filter compliance check regarding the
      campaign's specified EntityType is now performed correctly.

- Connectors and Integrations

    - Added two new parameters to fix OAuth 2.0 settings:
        - "Scope" in OAuth 2.0 Settings
        - "SubClaimType"

- Jobs and Policy

    - Fixed lost correlations for resource types without any property rules (Scalar, Navigation,
      Query).
    - Fixed issues with provisioning orders that had empty content in the UI for Manual
      Provisioning.
    - In specific circumstances, the `FulfillInternalWorkflowTask` is now better able to calculate
      the workflow that should be used.
    - During the synchronization process, a double quote was appended to values that already
      contained double quotes. Now, the synchronization parser correctly takes this character into
      account.

- Logs/Performance/Security

    - Agent log settings are now independent of server log settings for jobs.
    - If the server was down and an agent's authentication token had expired, it could no longer
      execute jobs when the server came back online. Now, the agent can correctly refresh the
      authentication token as needed.
    - Logs will be shown in debug level when, because of a context rule exclude expression, an owner
      is excluded from the Role Model computation.

- UI

    - `DislpayTables` (of type "table") shown on the "Provisioning review" and "Role reconciliation"
      screens can now be filtered by the scalar properties that exist in search criterion and in
      column headers as well.
    - Multi-valued properties are no longer automatically duplicated when adding a new record in a
      multi-record record workflow form.
    - On the Role Reconciliation and Role Review pages, a wait spinner now exists to prevent a user
      from clicking (quickly) on a decision button more than once.
    - Pop-up value-selection screens will now show the correct number of lines/value options.
    - Fixed a bug where the Workflow Supervision page was giving an empty display for modified
      fields when the `RecordSlaveForm` was not defined.

- Workflows and Access Control

    - Correction for the generic email reminder calculation so that no empty emails are sent, and
      that each email contains one reminder.
    - Workflows with multi-records and multi-valued properties no longer give errors during workflow
      validations.
    - Added a new, optional, expression to `AddChangeAspect`: `AcceptNullValueExpression` is a C#
      expression that must return a boolean value in order to specify whether `null` is taken into
      account as the changed value if/when it's returned by the `Expression` parameter. By default,
      the value of `AcceptNullValueExpression` is false.
    - The Policy.Identifier property can now be used in `AccessControlRule` filters. An HTTP 500
      error is no longer returned on the permissions page when this property is used.
    - Roles can now be correctly reviewed when the configuration contains a Profile targeting both
      Roles and Categories at the same time.

- Other

    - Configuration Export/Import no longer throws an error because of policy roles that have been
      partially deleted.

## Version 5.2.0.2

Release date 23-Jul-21

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the documentation's
[Migration](/docs/usercube/6.1/usercube/migration-guide/index.md) section must therefore
be followed.

#### Enhancements:

- Connectors and Integrations

    - New connector configuration screens
      ![ConnectorHomePage](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.0.connectorhomepage.png)
        - Connector marketplace with packages for existing connectors and integrations:
            - CRM/Salesforce
            - Custom/JSON
            - Custom/PowerShell
            - Database/Generic SQL
            - Database/MySQL
            - Database/ODBC
            - Database/Oracle
            - Database/PostgreSQL
            - Database/SQL Server
            - Usercube/Workflow
            - Directory/Active Directory
            - Directory/Apache Directory
            - Directory/Azure Active Directory
            - Directory/Generic LDAP
            - Directory/LDIF
            - Directory/Open LDAP
            - Directory/Red Hat Directory Server
            - ERP/SAP
            - ERP/Workday
            - File/CSV
            - File/CSV delta
            - ITSM/ServiceNow
            - Mainframe/RACF
            - Mainframe/Top Secret
            - PAM/CyberArk
            - Storage/Shared Folders
            - Storage/SharePoint
            - Ticket/ServiceNow
            - Ticket/Usercube
            - Ticket/Usercube And Create/Update/Delete resources
            - Usercube/Database
            - Usercube/Workflow
        - New Connectors
            - Custom/Robot Framework
            - Database/MySQL
            - Database/ODBC
            - Database/Oracle
            - Database/PostgreSQL
            - Database/SQL Server
            - Database/SQL Server Entitlements
            - File/Excel
            - File/Excel delta
            - Server/Microsoft Exchange
            - Storage/Home Folders
              ![MarketPlace](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.0.marketplace.png)
        - Connector overview page: view information of each connector in a dashboard format.
          ![ADConnectorPage.png](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.0.adconnectorpage.png)
        - Connections: view and edit a connection, specifying the connection package and the agent
          settings.
          ![ConnectorConnection.png](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.0.connectorconnection.png)
        - Connector EntityTypes: manage the meta data of the entity type, its display, its mapping
          and its properties (metadata, mapping, association).
          ![ConnectorSABEntityType.png](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.0.connectorsabentitytype.png)![ConnectorSABEntityTypeNav.png](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.0.connectorsabentitytypenav.png)
    - Correlation and classification rules can be created inside the application.
      ![CorrelationClassification](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.0.connectorcorrelationclassification.png)
    - Connector Agent Settings: The section InformationSystems in the appsettings.agent.json has
      been renamed as "Connections." This is handled by the migration utility.
    - A binary property (like photos) can now be updated via synchronization.
    - Added two new parameters for OAuth 2.0 settings:
    - "Scope" in OAuth 2.0 Settings
    - "SubClaimType"
    - Azure AD can now export any entity.
    - LDAP has been refactored, and one connection will now export the entries and the links.
    - Output files name are changed for all connectors that were using prefixes. Now, instead of the
      prefix, we have: export*name + "*" + connection_identifier. For example, for an AD where the
      connection identifier is ADExportFulfillment, the entry file will be named
      "ad_ADExportFulfillment_entries.csv".
    - PowerBI plugin to retrieve data from Usercube.

- Certifications and Risks

    - During or at the end of a certification campaign, reviewed items with a "Refused" decision can
      now be queued for immediate deprovisioning.
      ![CertificationDecisions](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.0.certificationdecisions.png)
    - Denied permissions can be filtered out when creating and/or modifying an Access Certification
      campaign.
    - Risks are now displayed with their remediation message.
    - The new permissions /ProvisioningPolicy/Risk/OverrideBlocking and
      /ProvisioningPolicy/Risk/OverrideApproval allow a user profile to override the risk settings.
      As an example, for an administrator with these permissions, a blocking risk becomes one
      requiring special approval or a risk with only a warning.

- Jobs and Policy

    - A new parameter "DeactivationExportFulfill" disables Export or Fulfill in a Connection that is
      linked to a package having a Fulfill or an Export. Consequently, with this parameter, a
      connection that no longer implements Fulfill cannot be implemented in a ResourceTypeMapping
      and a connection with Export disabled will no longer be used by Scaffoldings to create Export
      Tasks in jobs.
    - A new type of rule, `PendingApprovalRule`, allows an �Allow' or �Deny' decision to
      automatically be made for pending Roles or ResourceTypes after a specified time period.
    - A task's progress display on the job detail page has now been adapted according to the type of
      task.
    - Multi-valued dimensions for the role model are now supported.
    - Non-conforming permissions for departed and archived users are now canceled.
    - Removal of all export task types and update of a single export task type, "ExportTask" that
      replaces all other exports.
    - The Roles, Rules and Risks dialogs now show the author and date of the last change.
      ![RoleModelHistory](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.0.rolemodelhistory.png)
    - On the Access Rules page, there is a new filter on the Type for Single/Composite roles and
      Resource Types
      ![RuleFilter](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.0.rulefilter.png)

- Logs/Performance/Security

    - Corrected a typo in the appSettings files where PageResult should be PagedResult. The
      migration tool will update these settings.
    - Fix LDAP error messages when a dn can't be found.
    - Parsing errors related to json files now indicate the name of the errored file.
    - TempFolderPath and WorkFolderPath are two new settings defined in the appsettings.json. They
      allow the definition of the Temp path, whose default location is `../Temp`and whose content
      can be deleted, before restarting the server, without altering the behavior of Usercube and
      the Work path, whose content shouldn't be removed or altered.
    - The cookies used for incremental exports are now stored in /ExportCookies
    - The SQL zz\_\* views for reading and updating custom entities have been enhanced. There are no
      longer views for the optimized associations as their values were already available in the
      mono-valued side entity type's view. Furthermore, the SQL views for non-optimized associations
      now have the `_type` column, allowing the direct insertion of rows with SQL statements.

- Other

    - All the CSV files stored in the Temp folder now use a comma "," as column separator instead of
      semicolumn ";". These files are therefore fully CSV compliant.

- UI

    - Enhancements to the auto-complete functionality of selection fields in workflows.
    - In entity type configuration UI, if the identifier of the entity type or its properties are
      not C#-compliant, the creation/update of the entity type is forbidden and error messages are
      displayed on each corresponding field.
    - Identifiers of EntityTypes or their properties must be C#-compliant. In the new Connector
      screens, errors are presented to the user if this constraint is not respected.
    - On the Resource Type definition screen, the addition and removal of associated permissions is
      now configurable (corresponding to AllowAdd and AllowRemove in the xml configuration).
    - Role descriptions are now visible throughout the application:

        - On the Access Roles screen (description column + tooltip if more than 30 characters),
        - On a user's page, when adding permissions:
            - On the dialog where the permissions are selected (column + tooltip)
            - On the summary screen, when hovering over the permission a tooltip is displayed
        - While viewing the permissions of a user (View Permissions screen), when clicking on a
          permission, a dialog opens, the description has been added below the role name)
        - When reviewing a permission

    - The number of configurable languages has increased from 8 to 16.
    - When creating policy rules, a role's FullName (with categories) is now displayed instead of
      the simple DisplayName.
    - When data can be saved, the button label has been changed from "Edit" to "Save" on the
      following pages:

        - Access Certification Campaigns,
        - Assigned Profiles,
        - Access Policies,
        - Access Roles,
        - Access Rules,
        - Risks
        - Connectors

- Workflows and Access Control

    - A new workflow type has been created that allows mass updates:
      `WorkflowUpdateRecordEntitiesForm`![5.2.0.UpdateMultipleUsers](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.2.0.updatemultipleusers.png)
    - On CompositeRoles and SingleRoles, the new "Approve Role Implicitly" setting allows users with
      profiles for requesting _and_ reviewing permissions to request roles and then skip the review
      steps. By default, all the roles must be explicitly reviewed.

#### Fixed Bugs:

- Connectors and Integrations

    - A default value was added for the attribute MicrosoftGraphPathApi for the Azure AD connector.
    - Display an explicit error when trying to reset password of non-existent resources (deleted
      resources or those awaiting creation).
    - Fixed a bug where access control filters were not taken into account for password reset
      operations (from the agent API).
    - Fixed the KeyVault configuration loading which did not consider a variable depth greater
      than 1.
    - The executables Usercube.Fulfill.SharePoint.exe and Usercube.Export.Workday.exe were renamed
      respectively as Usercube-Fulfill-SharePoint.exe and Usercube-Export-Workday.exe.
    - TSS, RACF and SAP exports now have a prefix for their output, which is the connection
      identifier, similar to other connectors.

- Certifications and Risks

    - The executable Usercube-Update-AccesCertificationCampaign is now named
      Usercube-Update-AccessCertificationCampaign
    - When defining a campaign, the compliance check of the data filter on the ResourceType compared
      to the target entity type of the campaign is now performed correctly.

- Jobs and Policy

    - "Pre-existing" resource types with a confidence rate of less than 100 percent are now properly
      shown on the Provisioning Review screen in the "Correlation" section instead of the Resource
      Reconciliation screen.
    - A double quote was appended to values containing a double quote during the synchronization
      process. Now, the synchronization parser correctly takes this character into account.
    - A scaffolded job based on a connector without any EntityTypeAssociations will no longer try to
      create PrepareSynchronisation and Synchronisation tasks.
    - Added an updating job on Agent scheduler, which periodically refreshes the job list, in cases
      of the database has been updated.
    - An EntityType is now forced to have only one related context rule.
    - During an AD synchronization, records are now compared correctly between CSV file and database
      so changes will not be detected with the exact same files.
    - For added security, the default Approval Workflow Type for new roles now Simple (one approval)
      instead of zero approvals.
    - For Usercube-Update-EntityPropertyExpressions and Usercube-Update-Classification the argument
      has been changed from `--diry` to `--dirty`.
    - In computing delta synchronizations, a resource shouldn't have multiple owners.
    - The Entity Property of type "Option" has been changed to "ForeignKey", so
      `<Property Identifier="Categories" DisplayName_L1="Categories" Type="Option" />` becomes
      `<Property Identifier="Categories" DisplayName_L1="Categories" Type="ForeignKey" />`
    - The InvokeAspectsTask's progress state is now correctly passed on to the job running the task.
      The possible values are Completed, Aborted, or Errored.
    - The scaffolding for the correlation calculations now takes into account all source EntityTypes
      that are relevant to a given ResourceType.

- Logs/Performance/Security

    - Add Logger service to help debug C# Expressions. Example:
      `C#:resource:logger.LogDebug("Name={0}", resource.Name); return resource.Name;`
    - Added a verification to the Deploy-Configuration tool that prevents two or more dimensions
      from having the same SQL column index.
    - Agent log settings are now independent of server log settings for jobs.
    - Corrected certain silent errors when deploying configuration to the SaaS environment.
    - Fixed a bug in the login process causing page links to be redirected to the home page after
      login, if a login was necessary, rather than the page specified.
    - If the server was down and an agent's authentication token had expired, it could no longer
      execute jobs when the server came back online. Now, the agent can correctly refresh the
      authentication token as needed.
    - Logs for unauthorized access give better information about missing permissions.
    - Nullable checks for C# expressions have been added during configuration deployment to prevent
      runtime exceptions. They will be displayed as warnings.
    - The Access Certification report now generates more quickly.
    - The attribute FilesAreNotEncrypted no longer exists. The encryption is now only retrieved from
      the EncryptFile attribute in the appsettings.json. This change is handled by the migration.
    - When loading the configuration indicated with the appsettings files, the precedence has been
      corrected so that the encrypted appsettings (appsettings.encrypted.agent.json) override the
      normal appsettings (appsettings.agent.json).

- Other

    - A bookmark from the Universes queries can be copied from one environment to another.
    - Calls to a non-existent API now return a 404 Not Found error instead of the index page.
    - In `AccessCertificationDataFilter` and `AccessCertificationOwnerFilter`, the property
      `TargettedRisk` was changed to `TargetedRisk`.

- UI

    - DisplayTables (of type "table") shown on the "Provisioning review" and "Role reconciliation"
      screens can now be filtered by the Last Name and First Name columns.
    - Fixed incorrect top menu bar translations when the language is changed.
    - Fixed selection screens that were occasionally showing the wrong number of lines.
    - In Campaign Reviews, items are now always visible even when the name of the permission is a
      long string.
    - Multi-valued properties are no longer automatically duplicated when adding a new record in a
      multi-record record workflow form.
    - On the permissions page, removal of a conflict message when a new assignment corresponds to
      one that is already in a process of deletion.
    - On the Role Reconciliation and Role Review pages a wait spinner now exists to prevent a user
      from clicking on a decision button more than once.
    - Pagination buttons on the Workflow Overview screen no longer shift to the vertical center of
      the page.
    - Provisioning Review UI: Take into account the case where the resource has not yet been
      synchronized and correctly display a screen title of "Update" instead of "New".
    - Upgrade the Index manager tool in search fields so it will handle Display Tables that don't
      use Tiles (for example, the ResourceTables)
    - When no values are displayed on a screen, the actions "Next page" and "Previous page" now
      return coherence results.

- Workflows and Access Control

    - Correction for the generic email reminder calculation so that no empty emails are sent and
      each email contains one reminder.
    - On an Entity with records workflow, changes were wrong when a field in the record section
      tried to update a property of the main entity. Now, there is no error and an updated field in
      the record section will correctly update the main entity property. For example: a Photo field
      in the record section updates the property Photo of Directory_User.
    - On notification aspects with recipients as a specific profile, a filter on ValueId is now
      correctly handled.
    - Roles can now be correctly reviewed when the configuration contains a Profile targeting both
      Roles and Categories at the same time.
    - Rules of type "Automatic, with validation" are now only given automatically during new user
      workflows. This prevents a situation where all future permission modifications would
      continually generate validation requests.
    - The ContinueWith Activity to merge workflows now functions properly.
    - The Policy.Identifier property can now be used in AccessControlRule filters. An HTTP 500 error
      is no longer returned on the permissions page when this property is used.
    - The scaffolding ViewAccessControlRules no longer gives the wide-reaching "/" permission.
    - When processing notification aspects for the same permission using the "Profile" recipient
      type, certain access rules are no longer skipped.
    - Workflows with multi-records and multi-valued properties no longer give errors during the
      workflow validations.

## Version 5.1.7.9

Release date 24-Jun-2021

#### Fixed Bugs:

- Connectors and Integrations
    - Correction for a problem with the initialization of the password reset services, where the
      encryption certificate was used instead of the password reset certificate when Usercube was
      installed on-premises.
    - Correction for time-consuming Azure AD exports which were ending too soon due to an expired
      token.
    - Fixed mail settings password handling for SMTP servers.
    - Passwords with fewer than 12 characters can now be generated for new accounts.
- Jobs and Policy
    - Expression assemblies are now loaded when evaluating expressions for provisioning rules. This
      avoids potential incompatibilities between the DLL and the C# expressions.
    - Non-Conforming single roles are now correctly detected when a ResourceType does not have any
      scalar rules.
    - To prevent certain timeouts, a new, optional, parameter, JobLaunchTimeout, can now be added to
      the appsettings to override the current default for starting jobs. The default value is 7500
      milliseconds. See the documentation for more details.
- Logs/Performance/Security
    - New clearer, error messages are thrown when RecordStartProperty or RecordEndProperty are not
      correctly specified on Forms based on records.
    - More logs have been added to the scheduler:
        - when a job has stopped (with its execution time)
        - when sleeping, with the sleep time
        - the execution/sleep time ratio
        - the full list of scheduled jobs
    - Correction for the task logs when a job is stopped or errors out.
- Workflows and Access Control
    - Corrected an error that prevented standard users from seeing their permissions or sources and
      from making requests, even if allowed by the configuration.
    - When new records are added in a review step, the navigation properties are now correctly
      duplicated.
    - Correction for some missing parent workflow permissions.

## Version 5.1.7.8

Release date 7-Jun-2021

#### Mini migration:

Before migrating the agent, if the file `tracked-accounts-{system-identifier}.csv` exists inside the
(old) runtime, it should be moved to Usercube's Temp folder. If this setting was previously
configured in the appsettings, no change is necessary. See the first bug below for more information.

#### Enhancements:

Connectors and Integrations

- The Usercube-Discover-ActiveDirectory tool has been enhanced to determine the domain controller
  closest to the agent.

Logs/Performance/Security

- Certain, less important, "Warning" messages displayed in the logs have been downgraded to the
  debug level.

#### Fixed Bugs:

- Connectors and Integrations

    - To prevent a loss of tracking abilities for resetting passwords, the default appsettings has
      been changed from: `./tracked-accounts-{system-identifier}.csv` to
      `Temp/tracked-accounts-{system-identifier}.csv`
    - The Export-ActiveDirectory tool now tries several times to synchronize an AD's content, even
      in cases of server-side timeouts.

- Jobs and Policy

    - In certain cases, blocked provisioning orders were not disappearing from the Provisioning
      Review screen once they were unblocked. This has been corrected by removing
      AssignedResourceNavigations that were linked to deleted resources.
    - Sometimes, the same resource would have two consecutive provisioning review tasks. Now, the
      provisioning reviews are fused together.
    - In a case where a ResourceType is updated by a navigation rule and the role review is still
      pending, the resource will now no longer appear on the list of pending provisioning review
      items.
    - Correction for authorized resources with correlation confidence levels of 100%, that under
      certain conditions, were being considered as unauthorized.
    - In some cases, where a resource is inferred only indirectly by roles instead of by a direct
      rule, a role waiting for approval could trigger the resource deprovisioning.
    - Sometimes, when several jobs are scheduled at exactly the same time, only one of the jobs was
      executed. Now, each job is executed one after the other.
    - The job locking mechanism which prevented manual jobs from being executed at the same time has
      been removed.

- UI

    - Previously, the ResourceType attributes, AllowAdd and AllowRemove, were only taken into
      account when the ResourceTypes were controlled by automatic assignments. Now, they are also
      taken into account with manual assignments in the UI. Specifically,
    - On the permissions screen when the associated resource type has `AllowRemove="false"`:
        - For manually assigned resource types: the Delete and Deny buttons are disabled
        - For automatically assigned resource type: the Deny button is disabled
    - On the "Add Permissions" screen, resource types that have `AllowAdd="false"` are not displayed

- Workflows and Access Control

    - In multi-position HR systems, new positions for an existing user are now generating an update
      workflow instead of incorrectly re-creating the user. -In the Identity Server, the public
      origin parameter has been reintroduced to assist with authentications using proxies and a mix
      of http and https.

- Other

    - When importing the configuration, the error message "An item with the same key has already
      been added." was sometimes shown. Now, these duplicate key exceptions are handled better.

## Version 5.1.7.7

Release date: 18-May-2021

#### Fixed Bugs:

- Connectors and Integrations
    - Optimizations for LDAP exports and AD synchronizations.
- Jobs and Policy
    - The scheduler now works properly with the `CronTimeZone` attribute set to `ServerTime`.
    - The end date for a pre-existing assignment now updates when the user's end date is updated.
    - Manually-given composite roles can now be removed without any issues.
    - An agent can now execute only one job at a time, preventing conflicts. A second job that
      starts while one is already active, will quickly end in an error state.
    - The job scaffolding now correctly interprets the `FulfillInternalWokflow` command.
- Logs/Performance/Security
    - Logging out now functions correctly when an external login has been used.
    - Corrected the logout problem for Okta authentication with Open ID Connect
    - Added new Option for OpenID section to save the ID_Token
    - When the certificate password contains an `@`, and the password is unencrypted in the
      appsettings file, it is now interpreted correctly as long as the `P@ssword` is introduced with
      an `@`. Example: `"Password": "@P@ssword"`
    - Added a home page for Usercube-Agent, to verify the correct setup.
- UI
    - Date formats are now correctly displayed in DisplayTable Tiles
    - The Collection property can now only be displayed if the output/input type is
      collection-compliant according to the property's current read/write mode:
        - if the form is read-only or the control associated to the property is read-only or the
          property itself is read-only: the collection property must have the �BasicCollection'
          output type to be displayed.
        - if the form is in write mode and the control associated to the property is not read-only
          and the property itself is not read-only: the collection property must have the �Picker'
          input type to be displayed and editable.
    - Multi-valued properties are now displayed as added or deleted on the Workflow Overview page.
- Workflows and Access Control
    - Fixed a bug where the password reset notification email for Active Direcotry accounts was
      displaying the DN instead of the sAMAccountName
    - Corrected an error on Access Policies, Access Roles, Access Rules and Risk pages when the user
      had only read-only permissions.
- Other
    - When recuperating Access Certification Campaign filters, empty result sets are now properly
      handled.
    - With API calls related to resources, it is now possible to set a null value.

## Version 5.1.7.6

Release date: 20-Apr-2021

#### Fixed Bugs:

- Connectors and Integrations
    - The agent now sends compressed data to the server when synchronizing a connector, thus
      reducing the upload time and the bandwidth usage.
- Jobs and Policy
    - Inferred navigations are now in an automatic state after reconciling a resource with the role
      model.
    - Pre-existing resource type reconciliation now correctly passes the state to automatic when the
      role model value is chosen.
    - On the resource reconciliation screen, a recategorized resource with no owner now correctly
      has a �Verified' provisioning state and a �Manual' workflow state.
    - For permissions, an assignment in a cancellation state is now correctly overridden by a new,
      automatic assignment.
    - Fixed a regression in the Compute-Role-Model algorithm so that properties are no longer marked
      as non-conforming.
- UI
    - Read-only multi-valued collections can now be displayed in:
        - workflows/activities for simple resources without records (Location, Company for example)
        - workflows/activities for resources with records: only in the main resource section
    - Correction made to multi-valued pickers so that all elements are properly deleted when
      unselected.
- Workflows and Access Control
    - The password reset notification emails for AD Accounts were sometimes displaying the DN. Now,
      the sAMAccountName is shown.
    - Emails for password reset now correctly show accented characters in the subject line.

## Version 5.1.7.5

Release date: 30-Mar-2021

#### Enhancements:

New - Mono-Profile Application Management feature: A new property `GroupByProperty_Id` has been
added to support this feature. It is used to regroup navigation resources (resources used in
navigation rules) by value. When defined, the Evaluate policy will enforce that one and only one
item of a group can be assigned to an identity for a given date range.

Whenever the value of this property changes for a resource used in the defined navigation rules, the
**Server** needs to be restarted in order for the changes to be taken into account.

#### Fixed bugs:

- Connectors and Integrations
    - During certain large synchronization jobs, the error "Unable to read data from the transport
      connection: An existing connection was forcibly closed by the remote host" should no longer
      appear.
- Jobs and Policy
    - On the job screens, the counters are now correctly calculated. Additionally when a job has
      been re-started and finished, the counters correctly indicate all the steps of full job.
    - When the database is initialized, missing accounts had their navigations marked as
      "Pre-existing" but not the accounts themselves. As such, they could not be reviewed in the
      Provisioning Review. Now, all of these accounts can be fully reviewed.
    - Binaries are now correctly handed by the SavePreExistingAccessRights task.
    - The Resource Reconciliation screen was displaying accounts with unchanged groups for some
      pre-existing memberships. Now, the role model evaluation correctly clears theses cases.
    - Correction made to the SavePreExistingAccessRightsTask when custom SQL queries are used to
      refine the permission set that needs to be updated.
    - Non-conforming navigations now start on the detection date instead of on the owner's start
      date.
    - On non-conforming accounts, all scalar properties that were different from computed ones were
      marked as non-conforming except for those without a value. Now, all differences are marked as
      non-conforming.
    - Correction made to fix SQL deadlock issues when cleaning orphan assignments.
    - Mark source scalar/navigation properties as "Manual" when the target is updated from
      workflows.
- Logs/Performance/Security
    - Logging out now functions correctly when an external login has been used.
    - Correction made to the quantity of historical data that was being saved in the UP_Assigned\*
      tables.
- UI
    - On the "View Permissions" workflow page, in simplified view, declined permissions are now
      hidden.
    - When selecting permissions, previously declined permissions are now indicated with an "X" and
      the tool tip message has changed to indicate that the role has been previously declined.
    - At the end of a review step of a workflow, after adding someone in the "CC" field and then
      returning to the permissions page, an error was thrown. This situation was corrected.
    - Correction for errors that were occasionally appearing while loading a user's permission page.
- Workflows and Access Control
    - When assigning a profile, a different email address can be specified for notifications. This
      address is now taken into consideration for Role/Provisioning review notifications.
    - The aspect, `AssertValueRequired`, now correctly manages multi-valued navigation properties
      during modification.
    - An error is no longer thrown when an actor who receives a forwarded workflow tries to delete a
      manual role.
    - Any data search, with a filter on a sensitive property, was directly denied to prevent any
      information leaks. Now, the motor queries to see if the filter is a superset of the sensitive
      property access filter, in which case it will allow access.
    - If a record's end date is set to the past in the request step of workflow, and the record
      filter is `CurrentAndFuture`, the modified record was not shown in future workflow steps. This
      has been corrected, so modified records will be visible in all steps of a workflow despite the
      record filter.
    - If a workflow reviewer's email address is an empty string, an error was thrown when finishing
      the workflow's request step. Now, nulls and empty strings are handled without errors.
    - Assigned profile contexts will now be correctly emptied when values are deleted.

## Version 5.1.7.4

Release date: 16-Mar-2021

#### Fixed bugs:

- Correction for an error message "default value cannot be null" when running certain executables.

## Version 5.1.7.3

Release date: 12-Mar-2021

#### Fixed bugs:

- Connectors and Integrations
    - Corrected English/French language confusion in the password reset/initialization notification
      template.
    - Correction for a concurrent process issue when doing TSS Exports.
    - Correction for a null reference exception in the LDAP Export Task when it is configured
      manually and not all required arguments are provided.
    - Correction in the calculation of the ExportRACF task identifier that generated an error when
      adjusting a scaffolded job by adding a new task before or after ExportRACF.
- Jobs and Policy
    - Canceling pre-existing role assignments after an owner's departure now works correctly.
    - Correction for a regression where agent-specific tasks could not be scheduled by the agent
      that is included in the on premises server. Jobs were still executed correctly when run from
      the UI or another agent.
    - In QueryRules with a C# TargetExpression, the correlation keys are now correctly fetched using
      a better SQL filter.
    - Non-conforming group membership was not cleaned up once a rule assign had automatically given
      a group to an account. Now, these memberships are marked as Automatic and are no longer
      displayed in the Resource Reconciliation.
- Logs/Performance/Security
    - Included a better error message in the configuration import tool when an added task is not
      present in the configuration.
    - Improvements to database locking mechanism to prevent errors during jobs
    - Some of the LDAP requests sent when creating a new AD account and initializing its password
      were not logged.
    - General performance enhancements
- UI
    - Fixed an incorrect BasicCollection display while viewing resources with records.
    - On the Workflow Overview page, active changes to past records are still shown even when the
      RecordFilter is set to Current or CurrentAndFuture.
    - When opening an existing QueryRule, all the QueryRule properties are now visible
- Workflows and Access Control
    - Access control filters are now correctly applied in all steps of a workflow.
    - In a Review workflow step where the workflow was transferred, the problem with the
      recalculation of the actors has been fixed.
    - Review notifications, for both role reviews and provisioning reviews, are now correctly sent
      to second or third level reviewers.
    - On role review emails, the subject line no longer shows HTML encoded characters.

## Version 5.1.7.2

Release date: 26-Feb-2021

#### Fixed bugs:

- Connectors and Integrations
    - In an Active Directory for a complete synchronization, all group members are now retrieved.
- Jobs and Policy
    - Addition of a new API version guarantees backward compatibility between older agents and a
      5.1.7.X server.
    - Restarting multiple blocked synchronization tasks now works correctly.
    - Corrected a problem where, when starting a job, the agent didn't have enough visibility about
      server actions to correctly report the status.
- Workflows and Access Control
    - It is again possible to save a workflow from the first tab/step.
    - Review Provisioning/Roles notifications: assignment start and end dates are now accessible in
      the AssignedItem model.
    - Certain bindings from aspects/expressions were not handled correctly, now the correct
      properties will be loaded for the UI.

## Version 5.1.7.1

Release date: 19-Feb-2021

#### Fixed bugs:

- Connectors and Integrations

    - On the Manage Account screen, clearer messages have been introduced when password related and
      unlock problems occur.
    - On the Manage Account screen, a default regex expression for measuring password strength is
      now used when the configuration lacks the setting "PasswordTests".

- Errors/Logs/Security

    - Correction for a regression where the agent could not start when `EncryptFile` was set to
      `false`.
    - For RoleReview and RoleReconciliation, permissions are now also verified server-side.

- Jobs and Policy

    - Confirming an "Unreconciled property" now performs the correct operation.
    - Correction for a deadlock issue when running the Compute-Role-Model executable.
    - Correction for a situation where the scheduler was periodically stopping.
    - Correction for the primary key constraint violation when computing the role model.
    - Correction to the provisioning policy where found or historical assignments, with a
      correlation score of less than 100, gave errors.
    - Correction where the creation of a new nested entity threw an exception.
    - Entity Property Expression will now correctly delete the link between two entities.
    - In the Provisioning policy, found resource properties are no longer marked as Auto, instead
      they are now marked as Found in order to reflect the workflow state of the resource.
    - Manual roles are no longer deleted until all the inferred roles are obsolete.
    - Removal of the button "Retry" in Jobs and JobInstance screens that could cause data
      duplication.
    - The argument, WorkflowIdentifier, was not taken into account by the ProvisionerWorkflow.
    - The Provisioning Policy now removes links between entities if the data does not, or no longer,
      exists.
    - Correction made to the AddTask instruction that now permits adding a Task in the first
      position of a job.

- UI

    - Adding a multi-valued property to a record no longer produces an error.
    - Correction made on the creation of a new entity where the "Picker" input type was not properly
      working.
    - Fixed an inversion of FilterBinding and LinkedBinding that caused an error in some situations.
    - On the Role Review screen, an issue was corrected for mismatched lines.
    - On the workflow supervision page, a regression has been fixed when viewing a deleted entity.
    - The screen pagination on no longer ignores some items.
    - Tool-tip result explanations in French were missing for certain job tasks.
    - Many similar SQL queries were executed each time the permission page was opened and when a
      workflow request was submitted. The UI could display "Timeout" error messages occasionally.
      Now, these duplicate queries have been removed.

- Workflows and Access Control

    - During a workflow review, the position table is now refreshed when updating/selecting values.
    - When submitting a workflow, the access control layer could prevent changes computed by
      expressions or generated by aspects. Now, only the user changes (from the UI) are checked.
    - A role added in a workflow request step can now be deleted in the review step without error.
    - Correction for the situation where, when using the `WorkflowNotification` permission with a
      specific email address added to a profile assignment, notifications were ignoring the specific
      address and still going to the user's normal address.
    - To correct a problem in the BuildUniqueValueAspect where it was impossible to obtain Entity
      information from an associated Record, a new key "ResourceIdToCopy" was added in the
      configurable argument dictionary, in the ArgumentExpression of the ResourceType attribute. The
      value of this key must be a long in a string format. If this value is present in the
      dictionary, the resource created by the workflow provisioner will be a copy of the resource
      with the ID of the value.

        Configuration example:

        ```
        <ResourceType Identifier="HR_Contract_To_Directory_UserRecord" DisplayName_L1="User Record (from HR)" DisplayName_L2="Fiche de         collaborateur (source RH)" Category="HR" Policy="Default" TargetEntityType="Directory_UserRecord" BlockProvisioning="0"         SourceEntityType="HR_Contract" CorrelateMultipleResources="true" ArgumentsExpression="C#:resource:
          if ((provisioningOrder == null) || (provisioningOrder.ChangeType.IsNone())) {
            return null;
          }

          var arguments = new System.Collections.Generic.Dictionary&lt;string, string&gt;();
          var workflowIdentifier = &quot;Directory_User_Update_Several_Records&quot;;
          arguments.Add(&quot;WorkflowIdentifier&quot;, workflowIdentifier);

          if (provisioningOrder.TryGetScalar(&quot;EmployeeId&quot;, out var employeeId) &amp;&amp; (employeeId != null))
          {
            var resources = queryHandler.Select&lt;Directory_UserRecord&gt;(&quot;Select Id Where EmployeeId=\&quot;&quot; + employeeId.        ToString() + &quot;\&quot;&quot;);

            if (resources.Any())
            {
              arguments.Add(&quot;ResourceIdToCopy&quot;, resources.FirstOrDefault().Id.ToString());
        }
          }

          return arguments;" >

        ```

- Other

    - A correction was made for the date serialization.
    - For the query module, the command timeout has now been set to 20 seconds to avoid server
      problems.
    - Query module: SQL optimization to reduce FULL joins.

## Version 5.1.7

Release date: 14-Jan-2021

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the documentation's
[Migration](https://extranet.usercube.com/5.1/5.1.7/Documentation/migration-guide/) section must
therefore be followed IN THE ORDER INDICATED.

#### Enhancements:

- Connectors and Integrations
    - New attribute types are available for Active Directory, LDAP, OpenLDAP and ServiceNow Exports.
    - If any export fails (because an exception occurs or a task is stopped), the output files are
      deleted to prevent corrupted and/or incomplete data.
    - Microsoft Exchange Export functionality for incremental and complete synchronizations is now
      available.
    - Orphan associations can now be exported to a CSV file using a new `Orphans` attribute on the
      `SynchronizationTask`. See the
      [documentation](https://extranet.usercube.com/5.1/5.1.7/Documentation/integration-guide/toolkit/xml-configuration/jobs/tasks/server/SynchronizeTask)
      for more information.
    - Added a NoSigning option to the Export-LDAP which deactivates the Kerberos encryption when
      using the �Negotiate' authentication type.
    - Binary properties can now be synchronized and provisioned.
    - Added the ability to select the NameId format in the Saml2 Settings
- Errors/Logs/Security
    - Improved error messages during AD synchronization.
    - Improved error messages when parameters passed to an API method are invalid.
    - New database maintenance and diagnostic tools have been created.
- Other

    - The risk management module has been improved. When creating a risk, an Exemption Policy must
      be chosen. Available options are:

        - _Warning_: A simple warning is displayed when adding a new role creating the risk. The
          user can choose to continue or cancel the action.
        - _Blocking_: The role creating the risk cannot be added. The user can only cancel the
          action.
        - _Approval Required_: The role creating the risk must be approved before continuing on with
          the classic role approval workflow, if any. (NOTE: this option is only available if the
          risk module has been purchased.)
          ![RiskCreation](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.7.riskcreation.png)

            On the "Add permissions" page, the "Risk" popup has been reworked to display all risks
            and their exemption policies.

            ![RiskPermissionPopup](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.7.riskpermissionpopup.png)

            On the "Role review" page, if the risk module has been purchased, it is now possible to
            filter on roles with a risk that are waiting for approval.

            ![RiskFilterOnProvisioningReview](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.7.riskfilteronprovisioningreview.png)

    - A new task now exists to determine if any workflow instances have been executed, and if so,
      the agent can execute a PowerShell script accordingly.

        Here are several examples:

        ```
        <InvokeScriptAspect Identifier="Directory_User_InvokeScript" Agent="Local" ScriptFile="C:/UsercubeDemo/aspect.ps1">    <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />    <PointCut Activity="Directory_User_StartExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />  </InvokeScriptAspect>

        ```

        and / or

        ```
          <Job Identifier="InvokeAspects" DisplayName_L1="00: Invoke Aspects" Agent="Local">    <InvokeAspectsTask Agent="Local" DisplayName_L1="Execute Powershell for aspects" OutputPath="C:/UsercubeDemo/Temp" OpenIdClient="Job" />  </Job>

        ```

    - Retrieval of many of the entity types used by the UI has been optimized:

        - Rules
        - Role Review
        - Role Reconciliation
        - Provisioning Review
        - Resource Reconciliation
        - Manual Provisioning
        - Workflow Review
        - Workflow Supervision
        - Access Certification Campaign (edit dialog box)
        - Identified Risks

    - Performance enhancements for front-end queries related to role parameters.
    - The tool �Usercube-Create-ConfigurationIndexes' has been renamed as
      �Usercube-Manage-ConfigurationDependantIndexes' and includes the maintenance and deletion of
      indexes according to configuration changes.
    - All API methods based on a �squery' have two new optional parameters:

        - `PageSize`
        - `ContinuationToken` If `PageSize` is specified (`top` must not be specified in the
          squery), the response will contain a `ContinuationToken` which can be used to get next
          items

    - The subject prefix indicated at the end of a Workflow is predefined, but is now also
      modifiable.
    - Improvements in managing UI translations:

        - activity template state: is the display name used in Workflow Overview
        - default access certification campaign policy: is the display name used in Access
          Certification Campaign
        - InternalDisplayName property: is shared by all custom entity types, and used in the table
          view list when no display table is defined. The header displayed for the unique table
          column is the identifier "InternalDisplayName" because no display names are defined for
          this property.

        When deploying the configuration, if the languages have been changed (or if the update is
        forced using the corresponding option), the display names are updated according to the
        configured languages.

        For now only two languages are supported, English and French. If there are no translations
        defined for one of the configured languages:

        - in the case of the primary language, the display name is set to the default translation
          (English).
        - otherwise the display name is empty

        To update the database, deploy the configuration with the `--force-translations` option.

#### Fixed bugs:

- Connectors and Integrations

    - When using the scaffolding to create a job with the FulfillToServiceNowTicket task, a
      ServiceNowUpdateFulfillmentState task is now added. If the resource is created internally an
      UpdateExpressionTask is also added. This corrects a problem where the correlation task wasn't
      started and so synchronized resources could not pass to a verified state.
    - Synchronization will no longer be blocked by duplicated unique keys, the first one will be
      used.
    - Improvements when parsing CSV files
    - OpenId: added a new attribute to the "OpenIdSetting" to set the requested scopes.
    - SCIM: the provisioning of booleans has been fixed.

- Errors/Logs/Security

    - Display a warning if a scalar property, which is not a neutral definition, does not have a
      correct TargetColumnIndex
    - When importing the configuration, a new verification on `Indicator` checks if the `Item`
      values are coherent with respect to the property to which the `Indicator` is bound.
    - When a scaffolding configuration is incorrect, the file and line number are now displayed in
      error messages.
    - An exported configuration that is re-imported now respects menu items and form control
      hierarchies.
    - The typo QueryHander has been fixed and is now correctly QueryHandler.
    - When importing the configuration, an improved error message is given when a role is not found.
    - Reintroduced an option, where when deploying the configuration, we could choose to replace
      Language1 by Language2: `--use-l2`.

- Jobs and Policy

    - TimeOffsetReference "After" now works correctly to keep a single role until the end date of an
      entitlement that is inferred by it.
    - When running a job, the log instance can now be opened without errors.
    - The Update-TreeDimensionHierarchies Task has been moved inside the motor and has been deleted
      as it no longer needs to be called explicitly. **Warning**: If this task has been manually
      added to a scaffolding with the `AddTask` instruction, the automatic migration doesn't work
      for this case and will need to be deleted manually.
    - On review and reconcile pages, the "Keep Current value" option now works correctly for AD
      resources when a change to the parentDN is proposed.
    - The policy repository now loads correctly with the automatic roles that required validation.
    - With large role models, ComputeRoleModel manages memory usage better.
    - QueryRule expression values are now case sensitive on the permission modification page,
      previously there were inconsistencies in case comparisons between the simulation presented on
      the permission page and the real provisioning.
    - Correction for the creation and update of a resource for a simple entity in Fulfill Internal
      workflow.
    - Correction for a problem where, during a provisioning review with a resource correlated at
      less than 100 percent, choosing to create a new resource gave an error.
    - Fixed an exception thrown by FulfillInternalResources with sent orders previously created.
    - Enable the AssignedProfile task in the Complete Job's scaffolding.
    - Corrected a problem where ambiguous correlations (multiple accounts matching the same rule)
      were not properly handled.
    - Corrected the CreateInitializationJob scaffolding when two agents are present in the
      configuration. The scaffolding now takes the agent specified instead of the first agent.
    - The alias �force-synchronization has been changed to �force-synchronization-provisioning for
      Usercube-Invoke-Job and Usercube-Invoke-ServerJob. **Warning**: This is currently a rupture,
      but only for PowerShell scripts. It will be handled for ascending compatibility in the planned
      5.1.7.1 release.

- UI

    - In search bar filters, true/false filters now correctly return true/false and not "undefined".
    - An aspect error on a read only field is now correctly displayed in the user interface.
    - On the Workflow Summary and Workflow Overview pages, an incorrect display of the owner under
      certain circumstances was fixed.
    - On the Query page, corrected a blank page error when the universes had not been correctly
      fetched.
    - Dates with a value of 0 are now displayed as �Never (0)'.
    - Fixed the display of declined inferred roles on the permissions page.
    - There is no longer an error raised after selecting a user, viewing their permissions,
      selecting a resource type and then clicking on the overview section to see the history.
    - Pagination in Access Certification Review screen has been fixed.

- Workflows and Access Control

    - Improved behavior of Workflow AddAndEndRecordEntity: now, according to date changes, records
      can be copied, updated or deleted instead of ending all records and creating only one record.
    - On the WorkflowAddRecordEntityForm, the first record is now selected by default
    - The HideRecordRemoveButton on workflows has been updated:

        - "false" (the default value) indicates that any record can be deleted (as long as at least
          one exists).
        - "true" indicates that records from previously completed workflows should not be removed,
          so the button is hidden for these older records but is still available for records
          manipulated in the current workflow.

    - Correction for an error when CC'ing someone at the end of a workflow.
    - Multiple `<Recipient>` of type "Expression" can now be defined in an notification aspect.
    - Fixed a bug where deleting a user before completing the user entry workflow gave an error.
    - Improvements that take into account changes induced by Aspects.
    - Correction for `<AssignedProfile>` tag now permits configurations such as

        ```
        <ProfileContext Id="-2" /><AssignedProfile Id="-2" Profile="Administrator" ContextId="-2" AccessState="Approved" User="CN=xxxx,OU=Comptes,DC=interne,DC=regioncentre,DC=fr" />

        ```

        to replace the SQL scripts used in the Initialization jobs, among other uses.

- Other

    - Correction for a date issue where a certification campaign ended a day too soon.
    - Correction for the QueryHandler method which prevented the use of dynamic values in squeries.
    - SQL fragmentation by the Provisioning Policy has been reduced.

## Version 5.1.6.2

Release date: 9-Feb-2021

#### Fixed bugs:

- On the Role Review screen, an issue was corrected where the lines were mismatched.
- Correction for a regression where the agent could not start when `EncryptFile` was set to `false`.
- The agent scheduler can now correctly interpret the workaround permitting its use with a Usercube
  certificate.
- For the query module, the command timeout has now been set to 20 seconds to avoid server problems.
- The argument, `WorkflowIdentifier`, was not taken into account by the Provisioner Workflow.

## Version 5.1.6.1

Release date: 8-Jan-2021

#### Fixed bugs:

- Correction for the CreateConnectorJob scaffolding where the NoSynchronization argument was
  ignored.
- Fixed a problem with resetting the password from the user interface in a distributed installation.
- Synchronization compatibility for older agents has been restored.
- Fixed a bug in Compute-Role-Model that was causing LoadWith to throw an unauthorized exception.
- The provisioning policy now correctly overrides correlated resources with the most recent changes.
- Assigned resource scalars and types were incorrectly updated when Compute-RoleModel was run twice
  in a row.
- Correction for the situation where rules with dimensions were no longer loaded when initializing
  RoleRecovery (only rules without any dimensions were taken into account).
- Filters on Categories with AccessControlRule for AccessCertification now function properly.
- The WorkflowState is now correctly updated when a 'non-conforming' scalar/navigation finally
  matches the role model rules.
- General security fixes.

## Version 5.1.6

Release date: 16-Nov-2020

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the documentation's
[�Migration' section](/docs/usercube/6.1/usercube/migration-guide/index.md) must therefore
be followed IN THE ORDER INDICATED.

For enhanced security, we are now checking to see if a custom SSL certificate is being used. In the
case that the Usercube certificate provided in the SDK is still is being used, there will be an
error when starting the server.

To continue to use the Usercube certificate in non-production environments, add
`"AuthorizeUsercubeCertificate": true,` to appsettings.json files at the root.

#### Enhancements:

- UI

    - Improved the view for the manual provisioning screen so that it clearly shows the actions to
      be taken.
      ![ManualProvisioning](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.6.manualprovisioning.png)
    - Added a filter in Reconciliation Review screen in order to filter by inferred / not-inferred
      permissions. Leaving the filter at its default "not-inferred" setting shows only permissions
      that were NOT automatically mapped to roles (so that permissions mapped to roles can be
      handled on the Role Reconciliation screen).
      ![InferredFilter](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.6.inferredfilter.png)
    - The screen for reviewing assigned resources type has been improved. Now, when a user opens the
      dialog for an unauthorized account, all properties to be verified are in read-only mode
      because the recommended action is the deletion of the account. If instead, the user chooses
      "Authorize Account", a pop-up warns that there are properties to be verified. Once verified,
      the choice "Confirm Account Authorization" is available.
      ![UnauthorizedAccount](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.6.unauthorizedacct.png)![UnauthorizedAccountProperties](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.6.unauthorizedacctproperties.png)
    - Previously, a user could not add permissions if another, exactly identical permission with the
      same dates existed. Now, the dates are not simply compared, but the date ranges and conflicts
      or overlaps between permissions are displayed as permissions are added.
      ![ConflictingDates](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.6.conflictingdates.png)
    - On the permissions page, if an assigned resource type or its properties are pre-existing or
      non-conforming, the consolidated state column now adds the information in the tooltip message
      and the icon also shows the status as either pre-existing or non-conforming.
    - Display a minimum amount of information when a resource processed in the workflow has not yet
      been created or no longer exists in the database.
      ![ChangeSummaryDeletion](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.6.changesummarydelete.png)

- Workflows and Access Control

    - Emails related to Role Model notifications can now be filtered based on Access Control
      Entries. In an AccessControlEntry, we have an existing flag, `Notify`. By default, this value
      is set to true, and the user is notified when a task corresponding to this permission needs to
      be performed. It can be set to false to prevent the user from receiving notification mails.
      See the following example which prevents role review emails from going to the
      "RoleOfficerSpecific" profile.

    ```xml
    <AccessControlRule Identifier="RoleOfficerSpecific_AssignedSingleRole_Custom_ProvisioningPolicy_ReviewRoles_Directory_User" DisplayName_L1="Role Officer - Review Roles " DisplayName_L2="Gestionnaire de r�les - Revue des r�les" EntityType="AssignedSingleRole" Profile="RoleOfficerSpecific">  <Filter Binding="Role.Id" SingleRole="true" />  <Entry CanExecute="true" Notify="false" Permission="/Custom/ProvisioningPolicy/ReviewRoles/Directory_User" /></AccessControlRule>
    ```

    - Enhancements to the FulfillInternalWorkflow:
        - correction made for deleted provisioning orders that weren't working.
        - when multiple records change for the same entity, all changed records are now taken into
          account, not simply the first one found.
        - a new case is handled for deletions: if an entity and all of the entity's records are in
          delete mode and no kind of "deletion date" is detected in the fulfill configuration, the
          resources will be deleted and not updated.
    - Workflow notification e-mail subjects are now prefixed with information about the relevant
      resource:
        - In case of a creation workflow, the prefix is a pseudo-display name, computed from the
          form's raw data, of the resource to be created.
        - In case of an update workflow, the prefix is the internal display name of the resource
          being modified.
        - A workflow's subtitle now also displays the same prefix.
    - Added a possibility to filter on Categories with AccessControlRules for AccessCertification.

- Connectors and Integrations

    - New Workday connector for exports. The two modes, incremental and complete, take into account
      all entities (workers, locations ,job positions etc�).
    - The SCIM connector can now do a partial incremental synchronization. With this new
      functionality comes a new optional attribute, SyncCookiesFile. SyncCookiesFile specifies the
      path of the cookie file used for incremental synchronization. Example:
      "C:/UsercubeDemo/Sources/example_cookie.bin" See more information in the documentation: Home
      Page > Integration Guide > Connectors > SCIM
    - Password Reset Improvements
        - Added the ability to set a static CC recipient email address for password reset
          notifications (per resource type).
        - In password reset notification emails, the resource type name is now displayed.
    - The SharePoint connector now synchronizes multiple SharePoint sites and provisions account
      membership modifications.
    - The connector generator can now handle larger CSV files.
    - SSL is now available for OpenLDAP Exports (with new attributes in the OpenLDAPSetting).
    - Usercube can now use certificates with CyberArk AAM to secure the password retrieval.
    - New Azure Key Vault configuration for appsettings.json on both the Server and Agent sides.

- Jobs / Policy

    - Two new options for the Invoke-Job command:
        - option `--task-type`: Tasks of this type are launched first.
        - option `--task-string-contains`: Launches all of the tasks having an identifier containing
          the given value.
    - A new argument, `PrincipalDataConnector`, for the InitializationJob scaffolding has been
      introduced. If this argument is used, the last ComputeRoleModel and
      UpdateEntityPropertyExpressionsTask of the initialization job will contain all the entities of
      the specified connector. See the documentation for more information.
    - On the jobs screen, a new button "Retry" exists if an incremental job finishes with warning
      state or in an errored state. This button will relaunch the incremental job in complete mode.
    - Added a file format encoding attribute for InvokeSqlCommandTask. See the documentation for
      more information: Home > Integration Guide > References > Tasks > Server > Export >
      Usercube-Invoke-SqlCommand.

- Optimizations

    - Added a new scaffolding type, `OptimizeDisplayTable` that optimizes a DisplayTable's
      performance (using computed expressions instead of navigation bindings). See the documentation
      for more information.
    - Added a new attribute to use the SQL resource governor for all jobs and tasks,
      `ConnectionStringGovernor`. See the documentation for more information.
    - A new method for storing historical data that reduces the index fragmentation of the Resource
      table has been introduced.
    - A new tool, `Usercube-Create-ConfigurationIndexes`, has been created for optimizing the
      database by analyzing a specific configuration and adding the related and necessary SQL
      indexes and statistics
    - UI back-end queries have been optimized on the following screens:
        - Role Review and Reconciliation
        - Provisioning Review and Resource Reconciliation
        - My Tasks
        - Queries
        - Identified Risks
        - Access Certification
        - Manual Provisioning
        - Job Execution
        - Access Policies, Roles and Rules
        - API calls when starting the application

- Tools

    - The generate configuration tool can now read encrypted data files. See the documentation:
      Home > Integration Guide > References > Tasks > Server > Tools > Generate Configuration
    - The Export configuration tool now has a new attribute `--use-resource-key` (or `-rk`). If
      used, a resource reference will now be exported as a key (the resource used corresponds to the
      property marked `IsKey` in the entity model) instead as an internal id. (This makes importing
      the exported configuration into another database possible, but it is not the default setting
      to avoid performance issues.) Ex: `<SingleRoleRule D0="XXX"...` instead of
      `<SingleRoleRule D0Id="xxx"... `

- Other

    - Added the possibility to encrypt the MailSettings' secret in the appsettings files.
    - Added a BlockAllResourceTypeProvisioning attribute in the ComputeRoleModelTask to allow
      provisioning blocks on all ResourceTypes for certain situations. This attribute is now set to
      True for the last policy in the Initialization Job.

#### Fixed bugs:

- UI

    - The Workflow Overview page, for deletion workflows, now displays information about deleted
      resources which was not previously available.
    - Correction for the DateTime parser on the Workflow Overview page that was occasionally
      generating errors when accessing workflows with added positions.
    - Correction for the permissions page, where manual assignments could not be deleted under
      certain conditions.
    - On the Access Certification Review page, the owner search bar is no longer pre-filled.
    - On the Provisioning Review screen, in the review dialog box for non-conforming/pre-existing
      provisioning orders that not related to a resource, the "Other Resource Properties" list has
      been corrected to show only the resource properties that do not need to be verified.
    - Improved translation capabilities for Access Certification Campaign policies.
    - The Query page now returns null values, if they exist, even on the main entity.
    - For correlation rules and access certification campaigns, the pop-up window used to define
      bindings now correctly reflects selected values.
    - On the Role Reconciliation screen, for a given Resource, if the type and then the owner is
      changed, no error is now presented.
    - Fixed an error on the assigned properties lists where, after a user scrolls for a little
      while, the properties are no longer displayed.
    - Fixed the risk warning message that was too intrusive under certain conditions.
    - When suggesting parameters, duplicate sets of suggestions have now been deleted.
    - Previously, links from on the dashboard were only visible to users if a user had permissions
      to create and update the elements in the section. Now, a user can still click and view while
      simply having read-only access (indicated by the `*/Query` permission).
    - On the Query screen, corrected two issues related to management of null-valued resource
      fields:
        - the row is now correctly displayed in the result table even if some values are null
        - the filter to find null value has been fixed.
    - Correction for certain cases where a user didn't have delete or update permissions, but the
      buttons were shown and clickable in certain views.

- Access Control and Workflows

    - In workflow access control rules, filtering bindings by hard-coded Ids now works correctly.
    - Correction so that the agent-side task, ActivityInstanceActor, correctly updates the workflow
      instances in a job. See the documentation for more information: Home > Integration Guide >
      References > Tasks > Agent > Tools > Usercube-Update-ActivityInstanceActor.
    - When processing notification aspects for the same permission using the "Profile" recipient
      type, certain access rules are no longer skipped.
    - Dates displayed in emails sent for Access Reviews now show the UTC value (which corresponds to
      what is visible on the Access Review screens).

- Connectors

    - Correction for a problem where csv values exported from RACF were incorectly mapped to user
      information.
    - A binary property (like photos) can now be updated via synchronization.
    - Correction for an exceeded size limit error when synchronizing with a big data sample
    - Job scaffoldings have been fixed for a situation where a connector that used two different
      information systems for two different task types did not correctly attribute the parent.
    - When loading a CSV file, values exceeding the database column length limit are now truncated,
      and a warning is displayed.
    - Safety levels have been reduced when performing inserts, deletions or updates on lines or
      links with synchronization and provisioning. The new values are described in the
      documentation: Home Page > Integration Guide > References > Data model > Connectors >
      Connector.
    - Fixed a bug where the password initialization fails on LDAP connections when using the
      "TwoWay" Mode
    - The ActiveDirectoryUseStore section of appSettings.agent.json has been moved to the
      Authentication section to harmonize setting locations. This change will be applied with the
      migration tool.
    - The ServiceNow connector can now write fulfillment tickets to ServiceNow's incident table.
      `ServiceNowTicketUpdateFulfillmentStateTask` has been added to the scaffolding with a
      following `UpdateEntityPropertyExpressionsTask`.

- Jobs / Policy

    - Correction for the AddTask argument when two or more tasks have been added before or after
      same task.
    - Added an optional flag `Dirty` which provides the possibility of using a "dirty" (or modified)
      attribute with the FulfillInternalResourceTask in the configuration.
    - Invoke-SQL, when exporting to a CSV file, now correctly formats data types.
    - When a job finishes with a blocked state and when two or more tasks are blocked, the Relaunch
      button now re-starts all blocked tasks and not only the first task.
    - When a non-conforming single role is found, the AssignedResourceType is now set properly.
    - The UpdateParametersContextDisplayNames task now manages configurations with either zero or
      one dimension.
    - The Policy gives more predictable results when correlating resources in the cases where users
      have several types of resources that could belong to them.
    - Correction where the IndirectResourceRule was not generating the appropriate role
      reconciliation tasks.
    - Provisioning orders are now only generated for Applied, Executed, Sent, or Pending assignments
      and not for Errored or Blocked assignments.
    - Corrected a problem where non-conforming permissions didn't correctly pass to conforming when
      the appropriate rules were added.
    - A provisioning order will no longer be generated when a resource does not have any properties.
    - The Classification Job was updated to clean assignments correlated by the Provisioning Policy,
      preventing multiple assignments of the same resource.
    - The Provisioning Policy now refreshes correlated resources that have been found and updates
      the correlation score accordingly.
    - Assigned roles with missing parameters are now correctly handled and computed if/when the
      parameters are provided.
    - Deleting a policy now properly deletes all its corresponding items (after a warning message).
    - For identified risks, the owner filter definition has been clarified.

- Configuration Deployment / Error handling / Logs

    - The configuration deployment tool is more robust. It now verifies
        - that all agents are the same inside a job and inside a task.
        - that an EntityType's name is not a reserved name.
        - the xml attributes for SelectUserByIdentityQueryHandlerSetting and
          SelectPersonasByFilterQueryHanderSetting
        - whether entity types and entity properties have spaces and if found, a clear error message
          is given.
        - ResourceViewRecordEntityForms to make sure that the RecordSortProperty attribute is a
          scalar property.
        - if an element has a property defined more than once (with same identifier)
        - that TileItems and DisplayTablesColumns reference mono-valued column bindings.
        - that a main language is specified.
    - Better messages or error handling for
        - situations where role approvers don't have email addresses.
        - when files used for synchronization have a bad encoding.
        - the InvokeSQLCommand task errors, thereby forcing the corresponding job to end in an
          error.
        - problems during Prepare-Synchronization: the filename is now displayed.
        - a situation where RessourceType is detected as being in a cyclic graph in scaffolded jobs.
        - missing permissions when a user's authorization fails for a certain action.
    - Error management has been enhanced in the configuration deployment tool: multiple errors can
      now be displayed.
    - In job logs, the arguments related to passwords (certificates, password, secret�) are now
      hidden.
    - Mail settings information is now displayed when the Usercube server starts.

- Other

    - Correction for an LDAP authentication timeout issue after a long idle period between
      connections
    - The base32hex naming convention now has a dedicated page in the documentation. See Home Page >
      Integration Guide > Applicative Configuration > Miscellaneous
    - Increased security for photo uploads.
    - Renamed SelectUserByIdentityQueryHanderSetting to SelectUserByIdentityQueryHandlerSetting.
      This is handled in the migration tool.

## Version 5.1.5.1

Release date 2020-10-05

#### Fixed bugs:

- For LDAP connectors, the objectClass filter can now correctly handle multiple values.
- For a connector typed as ActiveDirectory, we now check for the existence of the
  PrepareSynchronizationTask and SynchronizeTask.
- Correction for a case where, in an installation scenario with a remote agent, the agent attempted
  to query the database directly instead of querying the Usercube server's APIs.
- Correction so that the agent-side task, ActivityInstanceActor, updates the workflow instances in a
  job.
- The incremental synchronization now correctly ignores changes made to attributes that are not
  specified in the configuration.
- Correction to correct the quantity of historical data being saved in the UP_Assigned\* tables.
- To prevent synchronization errors, attributes that are too long are now truncated at the size of
  the column.
- Correction for incorrectly interpreted empty values when, under certain conditions, the Review
  tasks for the WorkflowUpdateSeveralRecordsEntityForm with no PersistDraft Activity, was giving a
  blank page.
- For a ResourceType, the ArgumentsExpression now evaluates the correct target entity type.

## Version 5.1.5

Release date: 2020-09-15

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the following section must
therefore be followed IN THE ORDER INDICATED.

#### Migration steps:

1. Stop server
2. Rename the existing Runtime folder to �RuntimeOld'
3. Install the new runtime from �Runtime_XXXX.zip'
4. Migrate the database:

    `Usercube-Upgrade-DatabaseVersion --connection-string "database connection string"`

5. Migrate the appSettings:
   `Usercube-Upgrade-AppSettings --input-path "old runtime directory" --version 5.X.X -�connection-string "database connection string"`
   (where 5.X.X is the "MigrateFrom" version)
6. Migrate the configuration:
   `Usercube-Upgrade-ConfigurationVersion --version 5.X.X --xml-path "source conf path" --output "target conf path"`
   (where 5.X.X is the "MigrateFrom" version)
7. Optional: Deploy-Configuration:
   `Usercube-Deploy-Configuration -d " conf path " -s "database connection string" -e` (Without
   redeploying the configuration new features will not be taken into account.)
8. Start server

> Note:
>
> - Risk scores are included in our new Risk Management Module. Only Segregation of Duties risks are
>   present with the basic license.
> - For SaaS installations, the agent must be upgraded to benefit from a bug correction related to
>   password resets of existing accounts.
> - For API calls, make sure to enter the new versioning attribute mentioned lower down in the
>   release notes: �api-version'=v where v is the API version. Currently all API verions are at 1.0.

#### Enhancements:

New UI features

- New display indicators are available to indicate certain resource attributes (for example: VIP,
  External, High Risk etc).
  ![DisplayIndicator1](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.5.displayindicator1.png)![DisplayIndicator2](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.5.displayindicator2.png)![DisplayIndicator3](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.5.displayindicator3.png)
  Each indicator is configurable:

```
   <Indicator EntityType="Directory_User" Binding="MainRecord.EmployeeType.Category.Id" ComparisonOperator="Equal" Order="2">    <Item Value="-201" Color="#2B758F" DisplayName_L1="External" DisplayName_L2="Externe" />   </Indicator>

```

- Role parameters are now suggested based on a user's existing permissions and job specificities.
  ![RoleParamterSuggestions](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.5.roleparamsuggestions.png)
- Introduction of a new page that lists all identified risks.
  ![IdentifiedRisks](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.5.identifiedrisks.png)
- Approval comments can now be set at the access policy level. The default values are:
    - for approvals: Optional
    - for rejections: Required
    - for deleting a non-conforming permission: Optional
    - for keeping a non-conforming permission: Required These access policy comment requirements can
      also be overridden at the role level. On the policy configuration screen:
      ![CommentMgmt.Policy](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.5.commentmgmt.policy.png)
      On the role configuration screen:
      ![CommentMgmt.Role](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.5.commentmgmt.role.png)
- Secondary categories are now displayed in the role detail dialog.
  ![SecondaryCategory](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.5.secondarycategory.png)
- In the role reconciliation list view, a new column with the date of detection has been introduced.
  By default this column is used for sorting the page.
  ![DetectionDate](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.5.detectiondate.png)
- A new refresh button has been added for the following screens:
    - My Tasks
    - Workflow Overview
    - Role Review
    - Role Reconciliation
    - Provisioning Review
    - Resource Reconciliation
    - Manual Provisioning
    - Assigned Profiles
    - Access Rules
    - Access Roles
    - Policies
      ![Refresh](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.5.refresh.png)
- On Resource Review and Resource Reconciliation dialogs, an asterisk is now displayed to show if
  the property is required. If the DisplayEntityProperty has IsRequired="true", an asterisk is be
  displayed.
  ![Asterisks](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.5.asterisks.png)
- On screens with pagination, the page number is now saved. This allows a user who clicks on a
  resource and then closes the popup, to return to the same page as before.
- On the Resource Reconciliation page, when the resource type is changed and parameters are needed,
  Usercube now prompts for parameter values.

New Job features

- Within a job, multiple tasks with the same level indication can now be executed at the same time.
  See the documentation for more information Home > Integration Guide > References > Data model >
  Jobs > Task.
- Usercube-Get-JobSteps and Usercube-Invoke-Job tools now provide more detailed information about
  each task.
- For the scaffolding jobs, resourceTypes are now sorted as a tree to make sure fulfillments are
  performed in the correct order. (For example, in the case of multiple data sources or more than
  one data master.)
- New, smarter job execution logic which runs tasks or not depending on previous results. For
  example, if a Data Collect returns zero lines, the dependent synchronization task does not need to
  run. In the documentation, see examples on the page Home Page > Integration Guide > How-Tos >
  Configure Usercube Jobs > Synchronization Complete or search for the attribute `TaskDependsOnTask`
  for more information.

Other new items

- Because mail settings are unique to each environment, mailSettings have been moved from the
  database to the appsettings configuration. In order to migrate and preserve existing mailSettings,
  you must follow the migration instructions above in these Release Notes.
- A new C# expression can be added to the Provisioning Policy to compute the provisioning order
  arguments like "WorkflowIdentifier". See more information in the documentation: Home Page >
  Integration Guide > References > Data model > Provisioning > ResourceType.
- Scalar and query rule expressions: there is a new implicit variable called "assignment" that
  contains the assigned resource type start date, end date and parameter values. More information
  can be found in the documentation: Home Page > Integration Guide > References > Data model >
  Provisioning > ResourceScalarRule
- The mono-valued association property TargetColumnIndex limit has been extended. An index can now
  be defined between 128 and 152.
- All of Usercube's API are now versioned. The new required parameter "api-version", facilitates the
  choice of the API version, allowing scripts, tools and agents to be backwards-compatible with the
  newer versions of Usercube.
- Added missing error notifications after failed API requests.
- Enhancement of role parameter reconciliation based on fine-grained permissions.
- Dependences have now been created between computed expressions allowing, on a given EntityType,
  the use of the result of a first computed property to compute a second one. For example, on a
  Directory_User, the MainRecord can now be used in Bindings/Expressions of other Directory_User
  properties. This is managed with a Priority setting.
- The scheduler has a new parameter allowing it to be based either on Universal Time (UMT -
  Greenwich Meridian) or the server's local time zone.

#### Fixed bugs:

UI Corrections

- In email notifications, the password font has been changed so the characters are clearer.
- When a login is incorrect, better error messages are now shown.
- Correction for a refresh problem when a photo taken with the webcam was updated.
- The language of authentication form can now be configured to languages other than English.
- On the workflow activities pages, the EntityType selection list is now based on access control
  rules, only showing entities for which a user has permissions.
- Fixed a bug encountered when requesting a resource creation on the Manual Provisioning page.
- Improve management of incoherent dates in the UI, restricting certain dates from being entered in
  the past and correctly handling dates on assigned roles that have just been requested.
- In the query and correlation rule dialog boxes, a correction was made for editing the bindings.
- Query Page: Fixed a blank page error while adding a field after a query reset.
- On the Role Review page, review buttons are hidden for the pre-existing and non-conforming
  assigned roles which should be managed on the Role Reconciliation screen.
- Dates related to a DatePicker with "AddedMinutes" now changes correctly on rendering (for example,
  after closing the view permissions dialog box).
- When creating or modifying a new assigned profile, the list of available profiles are now sorted
  in alphabetical order.
- Access Certification: Improved message when there is nothing to review.
- On the permissions page, for a manual assignment, the �Deny' option is only available when the
  permission is being first added and is not available in any other situation. (In other situations,
  the only option is �Delete'.)
- Fixed a 400 error when the displayName of an access certification in progress is updated.
- Fixed an error in workflow simplified views, where permissions being added could not be deleted.
- On the Role Review screen, for approved or declined permissions:
    - hide the comment button if no comment was previously added
    - disable the comment button when there are existing comments
- Certain variables incorrectly displayed by Internet Explorer have been corrected.
- Fixed some incorrect behavior when a user creates or updates role categories.
- Improved the display of resource values. All values displayed in the application (in lists and on
  the resource page) must have the same display. If a "format" is defined for a
  displayEntityProperty, this format is applied. Otherwise, the value is displayed according to the
  type of the EntityProperty.
- Fixed an error on shared forms where, in an activity, the form was not displayed and on the
  workflow overview page, the changes in the form were not displayed.
- On workflow finalization screens, the placeholder values for the "CC" and "At the request of"
  fields have been corrected.
- In resource views, the display of a collection property with an intermediary mono-valued binding
  (for example, person.User.OwnedApplications) is now allowed.
- On the Resource Reconciliation page: buttons are now clickable when the user changes the resource
  type, selects a resource with a different entity type, and then re-selects the proposed entity
  type.
- On the Query page, the action buttons are now disabled if a user has made no selections.
- On the role review page, the hovering for a permission's history was replaced by a button to make
  sure it was always accessible.
- Fixed an incorrect arrow display for offset dates in navigation and scalar rule dialogs.
- A new warning message has been added when deleting access policies: "Warning: all objects linked
  to this policy will be deleted".
- Using a dropdown list to select a resource that doesn't have a display name no longer throws an
  error.
- Jobs that are blocked because a security threshold has been exceeded are now clearly indicated.
- Composite and single role metadata have been added to the access review module which permits,
  among other things, the filtering of access review items.

Security and performance corrections

- The InvokeSQLCommandTask now correctly interprets the LogLevel that has been indicated.
- A series of optimizations have been made for connector synchronizations.
- Certain tasks, such as Compute Role Model, no longer fail after a timeout and have been optimized.
- New, tightened security on API calls.
- Optimizations for the loading of the user directory pages.
- Upgrades for error and warning logs for the Usercube-Invoke-Job and Usercube-Invoke-ServerJob
  tools.
- The ComputeCorrelationKeyTasks in job scaffolding have been optimized.
- Change the default value for the BlockProvisioning attribute of ComputeRoleModelTask, from false
  to true in order to prevent unexpected fulfillments.

Configuration Deployment

- When deploying the conf, if the arguments �configuration-directory and �database-connection-string
  are missing, the exception is now thrown correctly.
- During the configuration deployment, scaffoldings now check a connector's existence.
- Errors are now thrown when multiple tasks are declared with the same identifier.
- Error messages during configuration deployment no longer show unnecessary information.
- Giving an incorrect identifier for a job, now gives a clear error.
- Added new error checking to prevent conflicting aspects.
- Harmonization of similar attributes: FilesAreEncrypted in the MappingPath scaffolding argument has
  been switched to FilesAreNotEncrypted.

Other corrections

- Correction for regression in Windows SSO authentication
- The InvokeSQLServer jobs now correctly abort when the user clicks on the �Stop' button during a
  job's execution.
- Transactions are no longer blocked when several resource types are provisioned at the same time.
- Exporting the configuration to XML files now also exports default values.
- Usercube-Get-JobSteps now returns a clear description of the error if the job identifier is wrong.
- In Usercube-Anonymize a new argument to specify the delimiter is available: "�csv-separator" (or
  its short alias "-s").
- In Usercube-Update-FulfillmentStates, the short alias "-h" for the input path was removed because
  it conflicted with the help alias.
- Date filters have been modified to take advantage of database partitioning, if it has been
  enabled.
- Fixed the Export-LDAP timeout argument which wasn't accepting values other than 0.
- The AD Export tool now correctly extracts CNs containing special characters (for example, a
  comma).
- The tool Usercube-Anonymize.exe now anonymises columns with empty values.
- Incremental AD synchronizations, when run after a long period of time, are no longer giving
  errors.
- Improvements for handling of deleted objects/entities and their dependent objects.
- Fulfillment orders are now generated when an assignment state is Pending (add or delete) or
  Applied (modify).
- A job that was twice blocked for exceeding security thresholds can now be properly re-started
  after the second blockage.
- The data anonymization tool can better handle empty attributes, invalid DNs or invalid email
  addresses. It can also now handle multi-valued attributes.
- Correction for the LDIF export where attributes from distinct entities were getting interchanged.
- Fixed a regression where the argument FilesAreNotEncrypted was not taken into account for all
  exports.
- In appSettings, in the EncryptionSettings section, when UseEncryption and EncryptFile were both
  false, there was still an error for a missing certificate.
- The Initialization scaffolding job is now always created with UserStartDenied, so it cannot be
  re-executed.
- Correction made to Usercube-Fulfill-InternalWorkflows concerning entities without records.
- For fulfillment simulation, the simulation file is now correctly created.
- For the SCIM connector a new OAuth2Url attribute for retrieving tokens has been added, in order to
  handle a situation where the system cannot determine this information.
- Corrected a bug on certification review items when managers change.
- Corrected some regressions for Export-LDAP.
- When using the ActiveDirectoryUserStore, the Domain setting is required, and we now verify its
  existence at startup.
- Display names are now computed for all provisioning contexts.
- Fixed a bug where the ad/ldap provisioner was not properly tracking the account's activation to
  trigger the password reset mechanism.

#### Known issues:

Workflow task counters were causing performance issues and so they have been temporarily removed
from the home page for Role Review, Provisioning Review, Role Reconciliation and Resource
Reconcilation. They will be back in version 5.1.6.

## Version 5.1.4.2

Release date: 2020-08-12

#### Fixed bugs:

- Reduce the manual assignments end dates based on the new end date (if it is smaller) and the
  offsets.
- Improved scheduler error handling.
- Tasks such as Compute Role Model failed on timeout and needed to be optimized.

## Version 5.1.4.1

Release date: 2020-07-31

#### Fixed bugs:

- Added the namespace System.Globalization for the C# expression white list. It is now possible to
  use .ToTitle() and culture info.
- Correction for a regression in the agent scheduler.
- Adaptations made allowing the execution of server-side scripts on Linux.

## Version 5.1.4

Release date: 2020-07-24

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the following section must
therefore be followed.

#### Migration steps:

1. Stop server
2. Rename the existing Runtime folder to �RuntimeOld'
3. Install the new runtime from �Runtime_XXXX.zip'
4. Migrate the database:

    `Usercube-Upgrade-DatabaseVersion -s "database connection string"`

5. Migrate the configuration:
   `Usercube-Upgrade-ConfigurationVersion -s 5.X.X -c "source conf path" -o "target conf path"`
   (where 5.X.X is the "MigrateFrom" version)
6. Migrate the appSettings:
   `Usercube-Upgrade-AppSettings --input-path "old runtime directory" --version 5.X.X` (where 5.X.X
   is the "MigrateFrom" version)
7. Optional: Deploy-Configuration:

    `Usercube-Deploy-Configuration -d " conf path " -s "database connection string" -e`

8. Start server

#### Enhancements:

- New Account management functionality for changing or re-initializing passwords as well as
  unlocking accounts is now available.
  ![PasswordReset](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.4.passwordreset.png)
- Role Parameters are now displayed in all views with permissions (lists and dialog).
  ![Parameters](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.4.parameters.png)
- Improvements on manual provisioning screens:

    - Add start and end date columns in the list of properties
    - Add request number, start and end assignment dates
    - Added the possibility of clicking on the request number
    - Other general improvements
      ![ManualProvisiong](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.4.manualprovisioning.png)

- The Usercube Documentation has been significantly improved.

    - The content has been reorganized in four Guides: introduction, integration, installation, and
      migration.
    - The Introduction has been extended
    - The Installation Guide has been reviewed and improved
    - The Technical Configuration and Connectors documentation, now in the Integration Guide, have
      been reviewed and improved.
    - Look and feel has been improved.

- On the provisioning review page when the pending orders filter is enabled, a filter now exists for
  the action type.
  ![ProvisioningFilter](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.4.provisioningfilter.png)
- On screens that show the cancellation of resources, the edit icon is replaced by a cancel icon on
  to avoid confusion.
  ![CancellationIcon](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.4.cancellationicon.png)
- Active Directory forests are now natively supported.
- ServiceNow ticketing

    - Added new Task `FulfillToServiceNowTicketTask` to create tickets in ServiceNow requesting
      creation, update or deletion of any resource. Upon creation of the ticket, the
      AssignedResource state will be in a Transmitted state.
    - Added new Task `ServiceNowTicketUpdateFulfillmentStateTask` to retrieve canceled and closed
      tickets. When retrieving tickets, AssignedResources states will be set to executed or errored.
    - New xml fields in ResourceTypeMapping:
        - `TicketCallerIdIdentifier` The name of the attribute to get the id of the user (in the
          ticketing system) for whom the ticket will be created.
        - `TicketCategory` and `TicketSubCategory` Information indicating in which category the
          ticket should be created.
        - `TicketImpact` and `TicketUrgency` For prioritizing
        - `TicketAdditionalInformation` Additional textual information that will appear in the
          ticket.

- The back-end is now capable of calculating a simple "risk score" for each user. This will be more
  visible in the UI in upcoming versions.
- Other new UI features:

    - The auto-complete in drop-down lists is now optional. The list has auto-complete only if the
      auto-complete binding is defined for the display property or for the associated display entity
      type. The auto-complete binding defined for the display property overrides the auto-complete
      binding defined for the display entity type. If not specified otherwise, the minimum length of
      search characters is four.
    - In the dialog box of the Resource Review and Resource Reconciliation screens, the "Value"
      column header has been renamed to "Proposed Value" to clarify the meaning.
    - On the Job Execution page, several new filters allow the user to filter all Job Instances by
      date range. A filtered view will show all types of Job Instances and will not be restricted to
      the one chosen in the left-hand menu.
    - Improve auto-complete drop-down lists:
        - display "No results" when no results are found
        - display "Enter at least N characters to start the search" when the number of characters
          entered is less than minSearchLength
        - display waiting spinner when results are being requested

- New security features:

    - Added security for job instance API calls, including security that locks or unlocks API calls
      and launches or blocks specific tasks depending on the license purchased.
    - Usercube-Protect-X509JsonFile is a new tool that encrypts each value in a JSON file.
    - Added protection against unwanted uses of C# functions in the configuration files.

- Other new items

    - AppSettings.json files have been restructured
    - Multiple records are now taken into account for internal workflow fulfillment.
    - In the configuration files, link properties used in EntityAssociations are now declared as
      Type ForeignKey, instead of Int64.
    - A new package was integrated for AD/LDAP export and fulfillment allowing this functionality
      from non-Windows servers.
    - For command line tools, all the parameters can now be passed as regular arguments or through
      stdin. Reading the parameters from stdin is enabled by the �stdin argument. This is especially
      useful for securely sending passwords and other sensitive information to the tools. The
      Usercube-Invoke-Job tool leverages this mechanism for all the jobs' tasks.
    - The `Usercube-Deploy-Configuration` tool has been modified to error out for configuration
      errors like invalid query rule target bindings, giving clear indications of how the
      configuration files should be corrected.
    - Arguments are now harmonized for `Usercube-Invoke-API`.

#### Fixed bugs:

- UI corrections

    - UI font optimizations.
    - Fixed the display of breadcrumb in permission name columns: now the last item is displayed.
    - Fix picker to avoid unnecessary API requests and to filter from the previous search only if
      the character is added at the end
    - Fix the display of drop-down options (search results and disabled options)
    - The text of the disabled options ("Enter at least [n] characters[�]" / "No results") must not
      fill out the input text of the drop-down list
    - Fix focus on multi-selection picker.
    - Fix error in a single selection picker with search where the second selection was not taken
      into account.
    - Auto-complete picker now manages search on bindings with more than one property.
    - On the job screen, the duration for a task that is "Pending Launch" is no longer shown with an
      incorrect value.
    - In Job view, jobs instance state icons are no longer cut off on the left side. We can now see
      all of state icons.
    - On the Query page, certain navigation properties that should not have been displayed were
      removed.
    - Now, if Usercube is configured without dimensions, the home dashboard is still displayed and
      features that previously needed dimensions are no longer broken.
    - On pages with permission lists, sorting now works correctly.
    - Fixed error in UI selection component: multiple selections are now correctly handled.
    - When displaying the same entity type for two different dimensions we now display the dimension
      labels instead of entity labels (which were then repeated).
    - Fix for left and right navigation keys that couldn't be used to type something in a filter
      research bar.
    - Enhancements to UI for role deletions
    - For the user's circle logo, if there are more than two initials, their size in image is
      automatically reduced and if there are more than five initials, they are truncated to display
      a maximum of five characters.
    - Currently, a pre-existing permission cannot be deleted or updated from the permissions page:
      the element cannot be selected (no checkmark) and a tool-tip is displayed to explain "This
      permission cannot be modified."
    - On the Workflow Overview page, when owner information is not available (for example when user
      has been deleted or when a new user creation is still in draft form), a simple dash ("-") is
      now displayed instead of a user icon with no information.
    - Agent-side jobs can now be started from the UI.

- Security and log corrections

    - Correction for a security vulnerability that prevents usage of forbidden properties in query
      filters.
    - Correction to minor security issue where passwords were being saved in browsers. Auto-complete
      is now set to off for password fields.
    - With the InvokeExpression function (agent and server) logs generated inside the PowerShell
      script are now taken into account in the task instance logs.
    - Unclear logs about workflows and data are now more explicit.
    - HttpClient error detail is now written to the logs.
    - Solution for an intermittent problem where encrypted logs were truncated, preventing
      decryption.

- Other corrections

    - For AD provisioning, if the service account doesn't have proper write permissions, errors are
      now correctly thrown when a new group membership cannot be created.
    - Correction for the duplication of workflows after the launch of FulfillInternalWorkflow.
    - Corrections to the enforcement of scopes of responsibility during API calls.
    - Improvements in the detection of existing permissions with parameters.
    - For LDAP provisioning, a connection is made to the LDAP server only in the case where there
      are fulfilment orders to be executed.
    - Password notification mails did not take into account the culture settings in the appSettings
      files and were always in English.
    - For an export AD or LDAP, we now verify if the logins or passwords are null or empty and show
      an error if necessary.
    - In searching for existing permissions mono-valued properties were not taken into account.
    - Corrections to regressions in the role mining tool related to the new encryption settings.
    - Corrected the Re-launch Job to handle the case where a task warning is present in job before a
      blocked task. Now the job can be relaunched instead of being blocked.
    - Corrections made to the task override feature for all Property Enumerator values,
      TaskResourceTypes, TaskEntityTypes, and TaskDimensions.
    - Correction for server-side timeout issues, including a new parameter in appSettings.json
      (agent side) `TaskTimeoutSupplement` that adds an optional timeout supplement for the
      execution of server tasks in Invoke-Job.
    - Category hierarchy is now taken into account when evaluating access control rules.
    - Role parameter functionality has been added to all 128 available dimensions. Previously, only
      the first eight could be used with parameters.
    - Scalar and query rules are now evaluated correctly when an assigned resource type has a
      non-deducible parameter.
    - Fix a blocked state for Job Instances where the job also contains a warning instance.
    - Corrected arguments used in the SharePoint connector
    - Corrected configuration migration of the GroupByDimension configuration attribute.
    - The Role Model now sets the resource type classification confidence rate to 100% even if the
      correlated owner is not at 100%. The Resource Classification now targets only resources
      without owners to prevent any interaction between the correlations and the classification.
    - Correction to the Invoke-Server-SQL tool for AzureAD authentication
    - Both Export Invoke Sql commands (agent and server) now delete the resultant half-finished CSV
      file when they are stopped in the UI and the UI properly shows an aborted state.
    - Fix made to Negotiate Authentication in LDAP Fulfillment.
    - In the Provisioning Review, the Current Value column is now correctly calculated and
      displayed.
    - Several ResourceTypes can now be provisioned at the same time.
    - Correction for provisioning review errors where occasionally, the button was not available to
      unblock and retry.
    - Correction for AD authentication problem over SSL.
    - Fixed regression errors in the PowerShell fulfillment.
    - Differences on manually overridden scalar property values (i.e. an AD attribute) are now
      correctly detected.
    - Correction for the Workflow States that were incorrect when approving a declined role.
    - Shared Folder improvements:
        - New task available for the SharedFolder export.
        - New option for logging in with a service account.

## Version 5.1.3.1

Release date: 2020-06-15

#### Fixed bugs:

- Agent-side jobs can now be started from the UI.
- Correction for provisioning review errors where occasionally, the button was not available to
  unblock and retry.
- Differences on manually overridden scalar property values (i.e. an AD attribute) are now correctly
  detected.
- Enhancements to UI for role deletions
- Fixed error in UI selection component: multiple selections are now correctly handled.
- HttpClient error detail is now written to the logs.
- In the Provisioning Review, the Current Value column is now correctly calculated and displayed.
- On pages with permission lists, sorting now works correctly.
- On the provisioning review page when the pending orders filter is enabled, a filter now exists for
  the action type.
- Several ResourceTypes can now be provisioned at the same time.
- Solution for an intermittent problem where encrypted logs were truncated, preventing decryption.

Release date: 2020-06-02

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the following section must
therefore be followed.

#### Migration steps:

1. Stop server
2. Install the new runtime �Runtime_XXXX.zip'
3. Migrate the database:

    `Usercube-Upgrade-DatabaseVersion -s "database connection string"`

4. Migrate the configuration:
   `Usercube-Upgrade-ConfigurationVersion -s 5.X.X -c "source conf path" -o "target conf path"`
   (where 5.X.X is the "MigrateFrom" version)
5. Deploy-Configuration:

    `Usercube-Deploy-Configuration -d " conf path " -s "database connection string" -e`

6. Start server

#### Enhancements:

- Performance enhancements in the database and the front-end
- In both modes (SaaS and On-Premises) all work files, whether on the agent or the server, can be
  encrypted. Encryption is optional but is enabled by default with the DataSourceIsEncrypted
  parameter. The encryption includes logs, temporary files generated by the synchronization, the
  provisioning, the reports and the provisioners (like pending password re-sets). More information
  is available in the documentation: References > Data model > Connectors > EntityTypeMapping and
  EntityTypeAssociationMapping. Also, in Technical configuration > Agent configuration > Encryption
  Certificate section.
- CyberArk Integration: Login and passwords can now be retrieved from CyberArk Vault for real-time
  use in synchronization and/or provisioning.
- New connector SCIM for services implementing SCIM endpoints. More information available in the
  documentation:
    - Technical configuration > Information System Settings > SCIM Settings
    - References > Tasks > Agent > Exports > Usercube-Export-SCIM
    - References > Tasks > Agent > Fulfillment > Usercube-Fulfill-SCIM
- ServiceNow improvements:
    - Exports and Fulfillment now support OAuth2 authentication with new optional arguments
      available in the settings.
    - Export now supports Date, Boolean, Int32, Int64 formats and can export multiple tables at
      once.
    - Provisioning of many-to-many tables: the name of the table corresponding to the association
      must be given in the new XML field EntityAssociationMapping:DatasourceName.
    - New XML field "DatasourceName" for EntityAssociationMapping: this field is optional and
      specifies mapping for n-n relations. Currently it is only be used for ServiceNow provisioning.
    - More information is available in the documentation: References > Tasks > Agent > Fulfilment >
      Usercube-Fulfill-ServiceNow and References > Data model > EntityAssociationMapping
- AppInsights integration
- Parallel user workflows are now possible.
- New Query page:
    - Columns can be chosen and rearranged
      ![UnivQuery2](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.universequery1.png)
    - According to type of property selected, the filtered value field is changed correspondingly
      ![UnivQuery2](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.universequery2.png)
    - Display fields are easily searchable
      ![UnivQuery2](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.universequery3.png)
    - Queries can be bookmarked
      ![UnivQuery2](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.universequery4.png)
- New functionality for managing risks.
  ![RiskMgmt1](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.riskmanagement1.png)![RiskMgmt2](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.riskmanagement2.png)![RiskMgmt3](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.riskmanagement2.png)![RiskMgmt4](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.riskmanagement4.png)![RiskMgmt5](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.riskmanagement5.png)
- Review Comments can now be configured for each role and for each review type: pending and
  non-conforming role permissions. There are three values to choose from:
    - Disabled
    - Optional (set by default on the approval of a pending role permission and on delete a
      non-conforming role permission)
    - Required (set by default on the refusal of a pending role permission and on keep a
      non-conforming role permission)
      ![CommentMgmt](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.commentmgmt.png)
- In role review/reconciliation comment dialogs, add informational data about the permission being
  approved/denied.
- In the roles catalog, instead of a generic column title, the second column title now displays the
  of type of object being shown: single rules for single rules, etc.
  ![RolesCatalog](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.rolescatalog.png)
- Implement two views to display permissions lists:
    - view grouped by categories, with the name column filtering on role and/or category name
      ![PermissionTree](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.permissionstree.png)
    - view list where all columns can be sorted
      ![PermissionList](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.permissionslist.png)
- On the workflow overview page, a new list of permissions shows the permissions impacted by the
  workflow with their workflow states and provisioning states, clearly indicating the state of all
  validations related to the workflow.
  ![OverviewStates](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.overviewstates.png)
- Allow filter on the workflow overview list by "Completed" or "Pending".
  ![OverviewListFilter](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.overviewlistfilter.png)
- On the Job Execution screen, a new search bar has been added permitting sorting by "State" of the
  job instances.
- UI enhancements aligning fields and their labels.
- New step in InitializationJob: initialize history tables by setting each entity's first record
  ValidFrom value to 0001-01-01 00:00:00.00.
- Improve clarity on Provisioning Review and Resource Reconciliation screens.
    - Add action indication (create, update, delete) in the list of assigned resource types to
      review or reconcile
      ![RoleReviewActions](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.rolereviewactions.png)
    - In dialogs, dynamic button labels indicating the action that will be performed based on user
      choices.
      ![DynamicLabels](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.dynamiclabels.png)
- Added a new filter when running an access certification campaign: it is now possible to target all
  entities having a property modified since a given date.
  ![CertificationTargetDate](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.certificationtargetdate.png)
- New indicators in workflow overview to display records added, modified, or deleted.
  ![WorkflowOverviewIndicators](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.workflowoverviewindicators.png)
- On the workflow overview page, all translation modifications are now shown as well.
  ![Translations](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.3.overviewlanguage.png)
- Enhance scalar rule expressions with a new argument that provides basic information about the
  assigned resource type: Id, StartDate, EndDate. More information in the documentation:
  References > Data model > Provisioning > ResourceScalarRule
- Provisioning policy: extend the QueryRule/CorrelationRule to match multiple resources
- In Request Summaries, more information has been added: the workflow state, and a link to the
  Request and the Workflow owner.
- Enhancements to sorting capabilities on Workflow Overview page.
- Enhancements to error messages regarding invalid XML when deploying configuration.
- In the UI, field value selections can now be typed, instead of always needing to click.
- The notification aspect has new recipient type, "Expression", where the email address is built by
  a C# expression.
- The execution of an aspect can now be determined by an expression (IfExpression attribute). (For
  migration: the P12 attribute in v5.0.x for the BuildUniqueValue aspect are now migrated to the
  IfExpression attribute.)
- Modification of the job repair mode: the starting order is now calculated in the Invoke Job and
  the Invoke Server Job and has been removed from the front end.
- Simplification when executing any task in debug mode: The TaskIdentifier and TaskID are no longer
  necessary and the task can be launched with only the name of the json object from the
  appSettings.ConnectionInformation.json. Example:
  `./Usercube-Fulfill-AzureAD.exe --AzureAD_Setting "AzureAD_Export_Fulfillment" -t "-2"`
- Addition of the attribute option "�force" to the jobs: Invoke-Job and Invoke-ServerJob. These jobs
  can now be forced in order to avoid a blocked situation. More information in the documentation
  References > Jobs > Server Side > Invoke Job.
- Improved security features to prevent unauthorized or diverted use of the application by iframe
  elements.
- Improvements to reports with historical information.
- Restrictions and securing of API calls
- FulfillmentType and InformationSystemIdentifier parameters have been moved from the connector
  level to the ResourceTypeMapping level allowing different types of fulfillment on different types
  of accounts. For example, nominative accounts can be automatically provisioned, and administrator
  accounts can be manually provisioned. Accordingly, a new information system Identifier
  Fulfill-InternalWorkflow is available for the appsettings.ConnectionInformation.json file. More
  information is available in the documentation: References > Data model > Connectors >
  ResourceTypeMapping and Technical configuration > Information System Settings

#### Fixed bugs:

- Better sequencing was introduced for the password reset phase of an AD account when the
  creation/modification of the account fails.
- Fixed an error on resource lists: the resource displayed above the "See more" button must be
  filtered by the default filters configured in search bar of the entity type.
- Fixed a bug where the workflow overview displayed the wrong photo in some workflow steps
- The photo no longer disappears after a workflow is saved or forwarded.
- A problem with the scaffolding for ServiceNow and incremental synchronizations was resolved.
- Under certain conditions, there were issues releasing LDAP connection pools during
  synchronizations.
- Correction to some consistency problems in the UX related to the resource type counters.
- Resource display names on the permissions page are now truncated if too long. Hovering over the
  truncated string will display the full name.
- During synchronization, an exception is no longer thrown when more than one entity property has
  the same source column.
- A number of Usercube migration issues were fixed.
- Fixed inconsistencies in ConsolidatedWorkflowBlockedState and ConsolidatedWorkflowBlockedCount
  related to pre-existing permissions.
- Role Parameter contexts are now automatically set if the values can be deduced from the owner.
- Corrections to Usercube-Export-RACF tool related to duplicate columns.
- The synchronization job was, on rare occasions, executing the process twice for the same entity
  type.
- The role access management dialog, when opened via URL, now correctly loads all data.
- The start date field is now taken into account in a UsercubeWorkflowAddAndEndRecordEntity workflow
  form.
- A warning is now presented to the user when creating an access rule without criteria warning about
  creating a rule applicable for all users/entities.
- On the role review and role reconciliation screens, the button now no longer disappears if the
  screen width is too small.
- On the Certification review page, a new column shows a denied icon if the permissions have been
  denied to the user.
- Corrections made to the reviewing and reconciliation of composite roles.
- Homonym warning now correctly shows only one resource instead of all related resource records.
- Allow sorting and filtering of the records table in a workflow according to the configuration
  definition. The table is now sorted by default according to the DefaultSortPriority.
- In a scheduled job change, the transition end date now allows the definition of an end of position
  before the start date of a new position.
- On the permissions page, an assignment is now in its correct category after closing the
  view-detail modal.
- For workflows with several records, the workflow overview display page now correctly shows the
  shared section and all positions and the relevant position for the workflow.
- Alignment of the contents on the request summary and workflow overview pages. Start date and end
  date were added in request summary and resource of assigned resource type is displayed in workflow
  overview.
- If one dimension is not defined, or has been deleted (for example, dimensions 0, 1, 3, and 4 are
  defined but not dimension 2), the UI should not request values for the missing dimension in the
  parameter modal.
- Job ToolTip placement modified so as not to interfere with buttons.
- On the permissions page, a permission added manually during an earlier step of the same workflow
  cannot be changed. To change it, it should be deleted and then reintroduced with the desired
  modifications.
- The BuildUniqueValue aspect can be managed by the new attribute OnlyIfNew="True" so the value will
  only be built if the resource is new.
- A configuration containing scaffolding elements can now be exported without errors.
- The access context rules now correctly filter "type" column for optimized associations.
- On the role reconciliation screen: selecting "Delete" for a pre-existing item now correctly
  removes the associated line.
- Corrected a problem where certification campaigns with filters on owners couldn't be started.
- Corrections to server availability behind a reverse proxy.
- Generalized the pending activities counter so it will work across different time zones.
- Correction to the AddTask argument in the job scaffolding where a compared task is calculated more
  than once in the same job.
- In the pagination of entity type display tables, boolean properties are properly managed.
- Correction to the agent-side Swagger implementation.
- On the workflow overview page, enhancements in displaying Review Pending and Refine Pending:
    - Potential actors are displayed before the action is completed.
    - Once the action is completed, the interface shows who performed the action.
- Improved records displayed by default when no records match with the record filter for the form,
  most often seen in the case when a user is archived.
    - If the record filter is set to "CurrentAndFuture" and there are no present or future records,
      the most recent of the past records is displayed by default.
    - If the record filter is set to "Current" and there are no present records:
        - If there are future any records, the first of the future records is displayed by default.
        - If there are no future records, the most recent of the past records is displayed by
          default.
- Correction regarding an occasional authentication errors when running the compute properties
  expressions.
- Documentation enhancements and corrections.
- If the log information is missing in appSettings, a default serilog section is now created.
- The clean database job schedule was deleted to allow for more flexibility in the configuration
  layer.
- Correction to the linkDependTasks argument in the job scaffolding.
- Occasionally, a job launched via the UI errored too quickly and no message was sent to the front
  end. Now a jobInstance is systematically created so any error message will be visible.
- In encryption appSettings, the private key is no longer required.
- Remove links on the workflow overview page when the active user does not have permissions to reach
  these pages.
- Correction made related to the execution of the InvokeSqlCommand on both server and agent side.
- No longer check for login and password if the Authentication Type is Negotiate.
- Send a better error when the ConnectionInformation appsettings is not correctly defined.
- The initialization scaffolding now includes the UpdateTreeDimensionTask after the
  DeployConfiguration, to correctly calculate tree dimensions.
- The workflow overview page now correctly displays deleted positions.
- For synchronization jobs, if the connector key information is not present in the json settings, a
  TaskInstance error is now presented on the job screen.
- Fix progress "Completed" for Server Tasks.
- A single update of a "one to many" relationship that is stored in resoucelinks tables now works
  properly.
- In computing delta synchronizations: a resource should not have multiple owners.
- Corrected an internal error when performing a workflow on a user with multiple positions.
- Corrected a bug related to jobs blocked multiple times which appeared in certain cases.

## Version 5.1.2

Release date: 2020-04-10

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the following section must
therefore be followed.

#### Migration steps:

1. Stop server
2. Install the new runtime �Runtime_XXXX.zip'
3. Migrate the database:

    `Usercube-Upgrade-DatabaseVersion -s "database connection string"`

4. Migrate the configuration:

    `Usercube-Upgrade-ConfigurationVersion -s 5.1.0 -c "source conf path" -o "target conf path"`

5. Deploy-Configuration:

    `Usercube-Deploy-Configuration -d " conf path " -s "database connection string" -e`

6. Start server

#### Enhancements:

- New UI for login and logout pages
  ![Login](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.2.login.png)
- Improvements to font and layouts.
- New connector for ServiceNow with options for incremental or complete synchronizations.
- The SAML2 protocol can now be used for authentication. See the documentation: Technical
  configuration > Server configuration > Section 1.2.4
- New integration avec QRadar
- Workflow overview has been improved:
    - new design elements
    - shows workflows added, updated or deleted
    - shows assignments added, updated or deleted
    - the page title is now the subject of the last activity instance and not simply the workflow's
      name
    - the state is highlighted
    - a link to the owner has been added
    - an optional parameter in the activity configuration can hide a workflow from the overview
      screen (WorkflowOverviewDisable).
      ![WorkflowOverview](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.2.workflowoverview.27635.png)
- The title of the bottom section on the Request Summary is no longer hard coded in the product. It
  is configurable and displayed in workflow overview.
  ![ImpInfoBlock](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.2.workflowoverview.impinfo.png)
- In the detail screens of My Tasks and in workflow summary screens, a new eye icon is shown next to
  the Request ID which links to a summary of the entire request.
- In the Jobs UI, the task logs are now colored like they would be if executed from the command
  line, so warnings and errors are now easier to identify.
  ![ColoredErrors](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.2.colorederrors.png)
- When running a certification campaign and choosing what to certify, it is now possible to filter
  by specific users.
  ![CertifByOwner](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.2.certifbyuser.png)
- Display the type of Approval Workflow in the role catalog and in the list of suggested
  permissions.
  ![ApprovalWorkflowSuggestions](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.2.approvalworkflowsuggestions.png)
- On the Role Review screen, new improvements show the history of the request including any comments
  previously made.
- New filters have been added to resource lists shown in DisplayTables with
  DisplayTableDesignElement="resourcetable":
    - Display uncategorized resources
    - Display orphaned resources
    - Display resources linked to a specific resource type
    - Filter by resource owner's name
      ![ResourceFilters](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.2.resourcefilters.png)
- A new job, UsercubeCleanDatabase, is available that resets the all TaskInstance and JobInstance
  that haven't responded in over 2 hours. Overriding this task is possible with the setting
  SchedulingCleanDataBaseSetting.
- A new job now exists, Usercube-Invoke-ServerJob, to execute tasks server-side without the need for
  an agent. See documentation: References > Jobs > Jobs On Server Side
- New optional arguments have been introduced for the Usercube-Invoke-Job that specify the
  encryption certificate (with file or certificate store). See documentation: References > Jobs >
  Jobs On Agent Side
- Agent-side tasks now have two new optional arguments, CertificateFilePath and
  CertificateFilePassword, for encrypting service account connection information.
- Job task dependence has been introduced which will prevent a child task from launching if a parent
  task didn't complete successfully. See the documentation: References > Jobs > "Link two tasks in a
  job"
- The confidence rate of query and correlation rules can now be set between 0 and 150. In the
  Provisioning Review and Resource Reconciliation screens, if the confidence rate is greater than
  100%, the user will see 100% displayed, indicating simply that the correlation exists. A value
  greater than 100% is used only to prioritize multiple rules with a confidence rate of 100%, not to
  approve a permissions assignment.
- In the configuration, a new flag "Hide on simplified view" is available for use on roles and
  resource types that should not be visible on the user's permissions screen's simplified view.
- Normalize, clean up and add increase the number of possible dimensions from 8 to 128 for
  profilecontexts, profilerules and contextrules.

#### Fixed bugs:

- Fixed a bug in which Chrome, in rare cases, was rejecting some cookies and preventing
  authentication.
- Fixed inconsistent date parsing using the timezone syntax (IANA id)
- Correction made to the provisioning tool that was requesting account password resets, although the
  password reset was disabled.
- Correction that allows the modification of a photo in update workflows.
- Fixed some hardcoded entity types in some frontend URIs
- The "Usercube-Deploy-Configuration" tool now checks that photo properties are completed with their
  tag properties.
- Fixed an issue where the password reset settings were not taken into account when the server is
  also considered as agent (On Premises setup).
- Photos now delete properly if the user chooses to remove an existing photo.
- Query rule errors are now in log files and no longer in the database.
- The command Usercube-Invoke-Expression can now return more errors.
- When importing a configuration, display table bindings are now checked and if necessary, a clear
  error is presented.
- The InvokeAPITask now verifies the existence of the three required properties when creating the
  HttpClient for all agent tasks.
- Unnecessary processing and unnecessary server requests from the UI were removed to improvement
  application performance.
- English translations for Access Certification were improved.
- The wording was improved on the user permissions and the modify permissions screens.
- In the TileItem configuration element, the display order indicator is now taken into account with
  "LineDisplayOrderIndicator".
- Added a default filter from the URL in resource lists with the �resourcetable' DesignElement
  attribute.
- In resource lists with a �resourcetable' DesignElement attribute, the resource type picker now
  displays only resource types with a target entity type matching the resource's entity type.
- To enhance clarity, on the Access Rules screen, rule types have been renamed.
    - Automatic (instead of Requested)
    - Automatic with validation (instead of Requested Automatically)
- In the "modify permission screen" for a resource, when selecting a new resource type, a modal
  opens to select the target resource to be associated with the selected entity type. The drop-down
  in the modal now displays only resources whose type is the same as the resource type's target.
- On the Reports screen, Report Name filtering was fixed.
- LDAP connections now close properly.
- Correction to the Active-Directory full export that was not working when the "WhenCreated"
  attribute was not in the list of attributes to fetch.
- Synchronization exceptions are more explicit.
- During Prepare-Synchronization, if multiple values (lines) are detected for a mono valued
  attribute (column) only the first one in the ordered list is taken into account.
- In the new single role rule dialog, �Automatic' is pre-selected as the default role type value.
- The Request Number search field in the Workflow Overview screen is now case-insensitive.
- Corrections in the cleanup when an entity, used as a dimension in an access rule, is deleted,
- Search bar values now better retain the default values across the application.
- Improvements on pagination when filters change on the "My Tasks", "Role Review", "Workflow
  Overview" and "Manual Provisioning" pages.
- The record filter in a form is now correctly managed when it is equal to "Current".
- Set the default value of the record filter in a form to filter on current and future records.
- Correction to badly placed pagination buttons in a list when the third tile has more rows than the
  second.
- When adding or updating an access certification campaign, if a user starts modifying and then
  clicks outside the window, a warning now pops up to indicate that changes are in progress.
- Deny icons on permission assignments if the assignment is non-conforming or historic have been
  removed. Conversely, the possibility of denying a non-conforming or historic permission assignment
  is blocked.
- In Role Review, the workflow state filters are now kept when changing between entities.
- Disable the complete refresh of the page when user clicks on links on an account button. Now, only
  the new content of the page is loaded, not the entire page.
- A new workflow label "Cancellation" has been introduced to clarify misunderstandings.
- On the Resource Reconciliation page, unnecessary sorting options were removed where filters are
  more relevant.
- Deleted hardcoded entity type in creation workflow. The real entity type is now retrieved.
- Correction of a search error on generic tables where the configured search operator was not taken
  into account.
- The CreateSeveralRecordsEntity workflow no longer gives a blank screen when the first record is
  deleted. Now, the last record is shown, as in the UpdateSeveralRecordsEntity workflow.
- Fix incorrect translation values in the new role dialog.
- Correction for an �undefined' workflow error when RecordStartProperty and RecordEndProperty
  weren't defined.
- In the Resource Reconciliation detail screen, the column lengths in the data tables are now
  adjustable.
- Warning messages used to confirm deletions are now red instead of orange.
- Opening the provisioning review modal, a user with the appropriate permissions can click on the
  eye icon and be correctly taken to the original request.
- In the Assigned Role view, when a role is in the awaiting approval state, the icon at the left of
  a role name more clearly indicates an awaiting status.
- A reviewer on the Access Campaign page, can no longer possible to make the same choice repeatedly.
- On the Access Certification screen, the counter is now updated when choices are confirmed.
- Now, in Access Certification a certification item review assignment incorporates start and end
  dates specified on assigned profiles.
- In the BuildUniqueValue aspect, a new variable "iteration" allowed in the SQL query permits the
  creation of unique values over the same type of object. For example, a unique value for each
  UserRecord.
- In a RecordEntityForm, input modifications in the MainControl section are now correctly taken into
  account.
- WorkflowAddRecordEntity form containing read-only fields no longer causes an error when
  submitting.
- While the AzureAD connector was directly creating guests, new options allow guests to be invited
  via the standard Azure AD mechanism. To enable this new feature, the guests' ResourceTypeMapping
  must be updated as in the following example:
  `<ResourceTypeMapping Identifier="AzureAD_DirectoryObject_Guest" DNProperty="AzureAD_DirectoryObject:objectid" DefaultObjectClass="users" DisplayNameProperty="AzureAD_DirectoryObject:displayName" MailProperty="AzureAD_DirectoryObject:mail" InvitationMode="MicrosoftInvitation" InvitationRedirectUrl="https://www.usercube.com" />`
- The XML configuration tool now gives a clear and detailed error message when a configured object
  has an invalid reference to another one, for example, a Pointcut towards a non-existing Workflow.
- The configuration deployment tool was crashing when a CorrelationRule had an incorrect
  ResourceType reference. Now, a clear error message is displayed.
- QueryRules that had both a Source and Target expression were not compiled when deploying the
  configuration. Now, the role model is applied correctly for these properties.
- Errors are now returned when certain incorrect values are found in
  appsettings.ConnectionInformation.json.
- The Configuration argument is now optional in the scaffolding CreateInitializationJob.
- Correction to the calculation of pre-existing values by adding a provisioning block in the last
  calculated ComputeRoleModel for Initialization Job Scaffolding.
- Correction to identifier generation for ServiceNow and PowerShell Task in all scaffolding to
  prevent conflicts.
- Fix English Grammar in JobLogs view.
- In the File Access tool, correction was made for a null pointer exception in an optional argument.
- Correction to path information that was truncated in the File Access module.
- If a user receives a forwarded task, even if they normally do not have access for this type of
  task, they will be given the proper permissions to act on the forwarded task.
- Fix to provide the correct application URL in email notifications.
- When clicking on a task from an email, if the task has been treated, the progress of the task and
  a message are now displayed instead of an error.
- Deleting a role/resource type is blocked while it is assigned to a user or used in a rule.
- The provisioning policy is now applied correctly for mono-valued fields that don't have a target
  column index.
- If the ResourceType attribute "AllowRemove" flag is false, the provisioning policy keeps this
  resource type even if it is no longer needed according to permission rules.

## Version 5.1.1

Release date: 2020-03-03

### **Compatibility notice:**

This release includes compatibility ruptures. The migration steps in the following section must
therefore be followed.

#### Migration steps:

1. Stop server
2. Install the new runtime �Runtime_XXXX.zip'
3. Migrate the database:

    `Usercube-Upgrade-DatabaseVersion -s "database connection string"`

4. Migrate the configuration:

    `Usercube-Upgrade-ConfigurationVersion -s 5.1.0 -c "source conf path" -o "target conf path"`

5. Update appSettings files according instructions in the Usercube documentation: "Migration
   Usercube configuration > 5.1.0 to 5.1.1"
6. Deploy-Configuration:

    `Usercube-Deploy-Configuration -d " conf path " -s "database connection string" -e`

7. Start server

#### Minor Enhancements:

- The dashboard has new icons for task badges.
  ![Dasboard](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.1.dashboard.png)
- Role reconciliation icons have been updated to more clearly indicate their use and subsequent
  consequences to the roles.
  ![RoleReconciliationIcons](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.1.rolereconciliationicons.png)
- The new image picker allows the possibility for uploading an existing photo or using the webcam to
  take a photo.
  ![TakeAPhoto](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.1.takephoto.png)
- All roles are now displayed in the same section including suggested roles.
  ![RolesTogether](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.1.rolestogether.png)
- The role details page now displays the request and certification histories.
  ![RoleHistories](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.1.rolehistories.png)
- The role catalog displays the type of approval workflow.
  ![ApprovalTypesDisplayed](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.1.approvaltypesdisplayed.png)
- A given certification campaign can now filter roles to be certified by their number of approvals
  and by their last certification date.
  ![CertifyCriterion](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.1.certifycriterion.png)
- A new certification report linked to each campaign allows the extraction of real-time results to
  an Excel file.
  ![CertificationReportButton](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.1.certificationreportbutton.png)
  ![CertificationReportResults](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.1.certificationreportresults.png)

#### Fixed bugs:

- A resource type with an end date in the past now has a �Blocked' state once the provisioning
  policy is executed (instead of �Pending').
- The Active Directory data collect could hang when an entry was moved to the AD basket and then
  purged from the AD logs. Now, these entries are considered as completely deleted.
- Configuration deployment now correctly handles the situation when the EntityType, ResourceType or
  Dimension lists are empty.
- Correction to InvokeExpression tool on the agent side.
- Cumulate the list of missing propertyMappings during the synchronization preparation instead of
  having separate errors for each one.
- Permits the stack trace to be displayed in the logs.
- In the daily synchronization job, correction to the SendNotification task.
- Before executing AD or LDAP server calls, the connection is now verified.
- A synchronization in incremental mode empties previously filled fields that currently have a null
  value.
- Correction related to incorrect arguments in the synchronization preparation.
- The AD provisionner can now handle the modification of an account when the password is not yet
  set.
- Correction related to Windows authentication
- Record filters set for workflow record forms are now properly taken into account (property
  RecordFilter of a Form with options for displaying: All, Current only or Current and Future only).
- Logging in with a form-based ActiveDirectory authentication can now avoid timeout issues using the
  fastBind option. Logs are also more explicit on login failures at the Debug level.
- Better logs for the LDAP provisioner which now indicate the attribute concerned by an error
- A search bar defined without advanced criterion no longer throws errors.
- Workflow management pagination is more robust.
- Increased allowable length in the InputPath parameter of InvokeExpressionTask from 442 characters
  to 4000.
- For data extractions, new check to test the existence of the data source file.
- New option to deprovision a resource when the owner is deleted: RemoveOrphans attribute has been
  added in the ReourceType entity.
- Deploy-Configuration tool now returns an error when EntityAssociationMapping configuration is
  inconsistent.
- Corrected error in search view of page of roles which prevented changing the value approval
  workflow levels.
- Increased robustness in the synchronization process:
    - Prevent synchronization errors when multiple properties use the same column in the source
      file.
    - A binary property cannot have a target column index.
    - A synchronized column cannot be defined more than once in the source file.
- Adding a record to an existing multi-record entity no longer throws SQL errors.
- ComputeCorrelationKeys now uses correct binding for query rules.

## Version 5.1.0

Release date: 2020-01-20

### **Compatibility notice:**

This is a major upgrade. The migration steps below must be followed.

#### Migration steps:

1. If necessary, upgrade to .NetCore to version 3.1 or later.
2. Install the new runtime: a. Copy the new runtime.zip b. Modify the ApplicationUri and the
   ConnectionString c. Add the client license (send an email to
   [sales@usercube.com](mailto:sales@usercube.com))
3. Migrate the database: a. `Usercube-Upgrade-DatabaseVersion -s "database name"` b. Execute the
   last part of the file �Usercube.sql' starting with the line
   `DELETE "ua_accesscontrolpermissions"`
4. Migrate the configuration: a.
   `Usercube-Upgrade-ConfigurationVersion -s 5.0.0 -c "conf source" -o "conf cible"` b.
   `Usercube-Deploy-Configuration -d � conf � -s � base � -e`

#### Major Enchancements:

- Certification: Roles, accounts and groups can now be certified. Certfication campaigns can be
  defined on different levels of roles and each certification item can be transfered elsewhere if
  necessary.
    - Campaign creation
      ![CampaignCreation](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.0.campaigncreation.png)
    - Campaigns lists
      ![Campaigns](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.0.campaigns.png)
- Jobs: Jobs can now be executed on the server as well as the agent, with detail of each job step
  including direct access to execution logs.
  ![Jobs](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.0.jobs.png)
- Historisation: Historisation is now active for the metadata tables, resoure tables et most
  provisioning tables (tables UM*, UR* et UP\_). For optimal performance, the SQL server needs table
  partitioning capabilities.
- The permissions page now displays access rights in a tree layout.
- Suggested roles are now possible. They can be defined with access rules where the type is
  �Suggested'.
  ![SuggestedRoles](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.0.suggestedroles.png)
- Dashboard counters are now visible indicating actionable tasks since last time.
  ![Counters](/img/versioned_docs/usercube_6.1/usercube/whatsnew/olderversions/5.1.0.counters.png)
- New notifictions for provisioning reviews, role reviews, provisioining summaries, role summaries,
  and certification requests needing treatment.

#### Minor Enhancements:

- The agent containts a new SAP Connector. This connector requires SAP Netweaver for Java with at
  least the following versions: SAP NetWeaver '04 SPS 14 or SAP NetWeaver 7.0 SPS 05. The connector
  can
    - synchronize users, groups and roles
    - fulfill users and group/role memberships
    - initialize users' passwords
- New ldif connector. This connector will read ldif files as source for synchronization.
- A new OpenLDAP Connector can handle incremental OpenLDAP exports
- The Access Rules page now permits the creation/modification/deletion of QueryRules
- Encryption now possible in json files to secure connection settings. See the documentation:
  References > Tools > Usercube-Protect-ConnectorSettings.
- Values coming from authoritative sources can be overridden by changing them in the User Interface
  and Workflows. The forced values are then locked and can no longer be changed by the authoritative
  source. Now, if the source changes, a special warning tracks that the forced values should be
  reviewed, and reset if needed.
- Product licensing is now translated into a product setting. A license key must be provided for
  each server installation. The license key defines the available features and usage limits.
- When synchronization or provisioning safety limits are triggered, the exact cause is now logged by
  the server (count or percentage of inserted/updated/deleted rows or links).
- A new approval workflow with three steps is now available for composite roles, single roles and
  resource types.
- The unncessary attribute DisplayOrder has been removed from MenuItem children, SearchCriterion and
  DisplayTables.
- 26043: On the assigned profiles page and roles pages, search now returns results where the string
  is contained in the title (not simply starting with).
- IsUniqueKey is a new attribute of an Entity Association Mapping.
- TransformExpression has been renamed to FlexibleComparisonExpression (the migration script will
  update the configuration).
- Harmonization of URLs and page titles.
- Simplification of Role and ResourceType pickers.
- Activity state in the UI now reflects the name defined in the database.
- 23094, 23095: Updated UI components.
- Remove unncessary cancel button on login page.
- Size of photo on the resource page reduced.
- In the provisioning policy, can define a query rule with a target expression.
- Permissions page now takes into account aspects and computed expressions.
- Resource correlation keys are precalculated for better provisioning policy performance.
- Enhanced mechanism for calculating recipients of workflow notifications
- Attribute ComparisonType for resource scalar rules has new possible values (see documentation)
- Optional comments can now be added in role review, when a role is declined and in role
  reconciliation, when a role is kept.

#### Fixed bugs:

- A data line with many caracters is now word-wrapped to a second line instead of being truncated.
- Provisioning orders are now generated with correct commands when a linked assignment has not been
  correlated.
- Add a category picker that wasn't available when assigning a profile.
- Fix correcting problem related to deletion/modification of validity dates when assigning a
  profile.
