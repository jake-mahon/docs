# Remove Resource Window

Use the Remove Resources window to remove a selected resource from the database.

Follow the steps to remove a resource.

__Step 1 –__ Navigate to the Resources page.

__Step 2 –__ Select the resource(s) to modify.

__Step 3 –__ Click Remove to open the Remove Resource window.

![Remove Resource Window](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/window/resources/removeresource.webp)

__Step 4 –__ Select the __Remove from Database__ checkbox to remove the selected resource(s) from the database.

__NOTE:__ Selecting this checkbox will remove all records of the resource(s) from the database. It will not prevent the resource from being synced or added again.

__Step 5 –__ Click __Remove__ to confirm that you want to remove the selected resource(s).

- The Remove from Database checkbox does not change the behavior for Database, Website, Entra ID, Domain, and secret vault resources. These resource types will be deleted from the database when you click Remove even if the Remove from Database checkbox is not selected.
- The Remove from Database checkbox must be selected and confirmed by clicking __Remove__ to remove any Active Directory-related resources.
- Any non-Acitve Directory related resource whether __Remove from Database__ option is selected or not, will be removed from the Database.

__Step 6 –__ Click __Okay__ to remove the selected resource(s).

The resource has been removed from the Resource page.
