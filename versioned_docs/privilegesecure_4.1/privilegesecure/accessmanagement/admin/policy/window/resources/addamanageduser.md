# Add a Managed User Window

Manually managed user accounts may be added to the website resource. These accounts can be used for activities on the resource by specifying the username value in the “Login Account Template” field of the Activity. See the [Activities Page](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/page/activities.md) topic for additional information.

Follow the steps to add or edit a managed user account for the resource.

__NOTE:__ Only applicable to Website resources.

__Step 1 –__ Navigate to the __Resources__ page.

__Step 2 –__ Click the name of the desired resource to open the Resource Details page and select the __Users__ tab.

__Step 3 –__ Do the following:

- To add a new managed user, click __Add__.
- To modify an existing managed user, select the User from the list and click __Edit__.

![addmanageduser](/img/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/window/resources/addmanageduser.png)

__Step 4 –__ Specify the username/password combination that will be used to log users onto the website. Enter the following information:

- Display Name – The friendly name for the account
- Username – The account in the exact format specified in the “Login Account Template” field of the Activity, e.g. ```domain\user``` or ```user@domain.com```. See the [Activities Page](/versioned_docs/privilegesecure_4.1/privilegesecure/accessmanagement/admin/policy/page/activities.md) topic for additional information.
- Password – Contains the service account password. The Eye icon can be used to view the password.

__Step 5 –__ Click __Okay__ to accept changes.

The managed user is added to the resource and shown on the Users tab.
