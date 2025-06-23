# Add Activity Token Complexity Policy

Follow the steps below to add an Activity Token Complexity policy to the console. See the Activity
Token Complexity section for detailed descriptions of the fields.

**Step 1 –** Navigate to the **Policy** > **Access Policies** > **Activity Token Complexity Policy**
page.

**Step 2 –** In the Activity Token Complexity list, click the **Plus** icon.

![Add Activity Token](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/add.webp)

**Step 3 –** Enter the desired information to determine the complexity of the connection profile.

- Provide a unique name for the policy
- Provide an optional description to state the purpose of the policy
- Configure the complexity parameters (Must Start With, Must End With, and Length), as desired

  _Remember,_ The maximum account name length value is 19 characters.

- Specify the maximum number of consecutive characters and select characters to exclude, if needed
- You can specify additional characters to exclude from the account name and configure granular
  rules for the characters to include (uppercase, lowercase, or numbers)

**Step 4 –** Click Save to create the new connection profile.

The new activity token complexity policy is added to the Activity Token Complexity Policy list.

# Activity Token Complexity Page

The Activity Token Complexity Policy page is accessible from the Navigation pane
underPolicyPolicies>Activity Token ComplexityAccess Policies. It shows the configuration options for
managing the complexity of activity tokens for connection profiles.

![Activity Token Complexity Page](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.webp)

The pane on the left side of the page displays a list of the configured activity token complexity
policies. This pane has the following features:

- Search — Searches the table or list for matches to the search string. When matches are found, the
  table or list is filtered to the matching results.
- Green + button — Create a new activity token complexity policy. See the
  [Add Activity Token Complexity Policy](/docs/privilegesecure/4.2/administration/activities/activity-management/token-complexity.md) topic for additional
  information.
- Trashcan icon — Deletes the activity token complexity policy. Icon appears when profile is hovered
  over. A confirmation window will display.

The selected activity token complexity policy details display in the main pane:

- Name — Name of the activity token complexity policy
- Description — Description of the policy
- Must Start With / Must End With — Lists cases the activity token complexity policy will enforce.
  This list contains the following options:

  - None
  - Lowercase
  - Uppercase
  - Numeric

- Length — The maximum number of characters the activity token complexity policy will enforce
- Max Consecutive Chars — The maximum number of consecutively occurring characters that the activity
  token complexity policy will allow
- Characters to Exclude — Custom characters the activity token complexity policy will exclude.
  Characters entered in this field will be excluded in addition to the characters listed beneath the
  Additional characters excluded section.
- Additional characters excluded — Default characters the activity token complexity policy will
  exclude
- Included Characters — Check boxes containing additional inclusive parameters for the activity
  token complexity policy:

  - Lowercase — At least one lowercase character in the password
  - Uppercase — At least one uppercase character in the password
  - Numbers — At least one number in the password

If any of these settings are modified, Save and Cancel buttons are displayed. Click **Save** to
commit the modifications. Click **Cancel** to discard the modifications.
