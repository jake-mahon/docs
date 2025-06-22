# Add Schedule Policy

Follow the steps to add a schedule policy to the console.

**Step 1 –** Navigate to the Policy > **Platforms** > **Schedule Policies** page.

**Step 2 –** In the Schedule Polices list, click the **Plus** icon.

![Schedule Policy Editor Window](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/edit/schedulepolicyeditor.webp)

**Step 3 –** Enter the following information:

**NOTE:** The fields will change depending on the selected frequency.

- Select the desired frequency:

  - Every X Hours – Enter the number of hours between executions
  - Every X Days – Enter the number of days between executions and the time of day
  - Weekly – Select the day of the week from the drop-down menu and enter the time of day
  - Monthly – Enter a number representing the day of the month and the time of day

**Step 4 –** Click **Save** to create the new schedule.

The new schedule is added to the Schedule Policy list.

# Schedule Policies Page

The Schedule Policies page is accessible from the Navigation pane under Policies > Platforms. It
shows configured schedule policies.

Schedules can be applied:

- Platforms — Configure schedules used by resources on a given platform type. See the
  [Platforms Page](/docs/privilegesecure/4.2/administration/resources/platforms/index.md) topic for additional information.
- Protection Policy — See the [Protection Policies Page](/docs/privilegesecure/4.2/administration/policies/protection-policies/add-protection-policy.md) topic for additional
  information.
- Change Policy (credential rotation) — How often the password of a managed account is changed. See
  the [Credentials Dashboard](/docs/privilegesecure/4.2/user-guide/dashboard-widgets/credentials-widget.md) topic for additional information on
  managed accounts.
- Host scan — Scan a host resources for local users, groups, windows services and scheduled tasks
- Verification — Check that the passwords for managed accounts match the credentials set by
  Privilege Secure

![Schedule Policies Page](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.webp)

The pane on the left side of the page displays a list of the configured schedule policies. This pane
has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Green + button — Create a new schedule policy. See the
  [Add Schedule Policy](/docs/privilegesecure/4.2/administration/policies/schedule-policies/add-schedule-policy.md) topic for additional information.
- Trashcan icon — Deletes the schedule policy. Icon appears when profile is hovered over. A
  confirmation window will display.

**NOTE:** The default password policy cannot be deleted.

The selected schedule policy details display in the main pane:

- Name — Displays the schedule recurrence information
- Edit icon — Click the icon to edit the selected schedule policy. See the
  [Edit Schedule Policy](/docs/privilegesecure/4.2/administration/policies/schedule-policies/edit-schedule-policy.md) topic for additional information.
