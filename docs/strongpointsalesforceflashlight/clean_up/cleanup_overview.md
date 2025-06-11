# Clean Up Overview

Clean up involves some or all of the following steps:

1. Identify and remove unused customizations (either individual or multiple):

- Completely unused
- Useless or inefficient

2. Identify and fix improperly set-up customizations (eg. no help text, inactive owner).
3. Describe each object and its clean up task (under the improvements tab.)
4. Assign change/approval policy.

## Clean Up Tools

Strongpoint has a series of built in Clean Up Tools to enable Administrators to clean up their account in an organized and efficient manner. There are many types of clean up, but they generally follow the same steps:

1. Select the approach
2. Analyze and organize the results
3. Create a Change Request (if required)
4. Manage the clean up as appropriate
5. Run the scanner

NOTE: Always check the Last Date Scanned on any object and re-scan that object if necessary to ensure the information about that object is up to date.

### Select the Approach

Strongpoint can help you clean up:

- Unused Customizations
- Unused Custom Fields
- Unused Scripts
- Unused Reports

Customizations that do not follow best practices:

- Customizations with No Related Process
- Customizations with No Description
- Customizations with No Help Text
- Customizations with No Active Owner

Depending on what you want to clean up, you can view clean up reports from the Strongpoint tab under Reports and then choosing Clean Up. You can also find the clean up reports at the bottom of the Strongpoint homepage under Strongpoint Features and Reports.

You can clean up individual or multiple customizations by going to the Customization tab and selecting __Create New View__. Use the filters to generate your list.

NOTE: Before moving on to other clean up activities, it is often a good idea to delete unused customizations that are highly likely safe to delete, such as fields that have not been used in years or that are not used by any other customization.

### Analyze and Organize the Results

Once you have selected the customizations that you want to clean up and have created a New View, you can analyze the results. The results can then be sorted and filtered and are required to group and manage the output for subsequent steps. You may chose to clean up based on Salesforce type and record type (among other options).

Every Customization record has a Clean-Up Status field that enables us to track the status of the clean-up process for that object.

The statuses are:

- __To Be Cleaned Up__: Flags the customization to be cleaned up.
- __Send Request Info Emails__: Triggers an email warning that the customization is about to be deleted.
- __Under Investigation__: Flags the customization as under investigation.
- __Disabled/Hidden__: Tracks that the customization has been disabled.
- __Archived__: Tracks that the data / set-up was archived.
- __Deleted__: Tracks that the customization has been deleted. The doc will be inactivated.
- __Ignore__: Removes it from the searches.
- __Fix ScriptID:__ Changes the ID of the script.
- __Reassign Owner__: Changes the owner.
- __Closed__: Flags the clean up status as closed.

### Run the Scanner

At the end of the process of updating the customization record(s), the account should be scanned to update the documentation for the customization changes. It can be re-scanned for just the specific record type that was changed.
