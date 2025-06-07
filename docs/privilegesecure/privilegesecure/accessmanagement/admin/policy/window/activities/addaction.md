# Add Action Window

The Add Action window varies slightly based on the Action Type selected and the associated session part. Follow the instructions to add actions to the activity.

__Step 1 –__ Navigate to the Activities page.

__Step 2 –__ In the Activities list, select the name of an activity.

__Step 3 –__ In the Actions section, for each of the following, click the Add icon.

- Pre-Session (Grant) — List of actions that will run before the session begins. These actions may be paired with a corresponding Post-Session action.
- Session (Connect) — List of actions that will run during the session
- Post-Session (Remove) — List of actions that will run after the session completes.

These actions may be paired with a corresponding Pre-Session action.

![addactionwindow](/static/img/product_docs/threatprevention/threatprevention/admin/policies/actions/addactionwindow.png)

__Step 4 –__ Complete the following fields:

- Action Type - Icon indicates the type of object.
- AD Object Type - AD Object Type — Select which type of object to manage in the Organizational Unit, a User or Computer..
- AD Organizational Unit for the Action - AD Organizational Unit — Enter a pre-existing Organizational Unit the login account will have delegated permissions for.
- AD Rights to be Added - AD Rights to be Added — Select which right will be delegated to the login account for managing the previously specified Organizational Unit.
- Continue on Error - Continue on Error — If an error occurs, continue to the next step rather than halting the action.
- Action Name - Action Name — (Optional) Edit the name of the action.
- Paired Actions Name - Paired Action's Name — (Optional) Edit the name of the paired action

See the [Action Types](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/activityactiontypes.md) section for detailed descriptions of the fields.

__NOTE:__ The fields will change depending on the selected Action Type.

__Step 5 –__ Click Okay to create the new action.

__Step 6 –__ Continue to create as many actions for each stage of the session (Grant, Connect, Remove) as required.

__NOTE:__  It is not possible to change the Action Type once the action is created. Delete the existing action and then create a new action to get a new Action Type.

__Step 7 –__ If desired, it is possible to automatically run any Protection Policies associated with the resource when the session completes. Simply add the _Invoke Protection Policies_ action to the Post-Session group. See the [Protection Policies Page](/docs/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/page/protectionpolicies.md) topic for additional information.

__NOTE:__ It is not necessary to select a protection policy. All protection policies that apply to the session host are executed.

The new actions are added to the activity.
