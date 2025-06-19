# Exporting Information to Excel

You can export the information from the removal scenarios to Excel and then search for the
customizations affected by the bundle removal. Here is an example of using the removal scenarios 5
and 6 to find affected customizations.

- Scenario 5: **Outside bundle referencing inside**. All customizations built in the account that
  make use of the bundle components.
- Scenario 6: **In bundle referenced by outside**. Opposite of Scenario 5

## Export the Results

To export the results to Excel:

1. Select **View** on **Removal Scenarios 5 and 6**.
2. Click on the **Excel** icon.
3. Export **Removal Scenario 5** and **Scenario 6** to Excel.
4. Choose the record you want to investigate. (for example, **custom open task default**)
5. Each record shows all its relationships (both inside and outside bundle).

## Find Relationships that Only Exist Within the Bundle

To find the relationships that only exist within the bundle:

1. Copy the name of a record.
2. Go to the opposite scenario and do a search with the pasted name.
3. This shows you the bundle components that are being used so you are aware of what will be removed
   when the bundle is gone. These are the records that need to be replicated.

**Next Step:** [](/docs/platgovnetsuite/customization-management/bundle-removal/export-and-cleanup.md)[Final Tasks](/docs/platgovnetsuite/customization-management/bundle-removal/export-and-cleanup.md)

# Final Tasks

## Reviewing Critical and Non Critical Sheets

**Critical sheets** include all customizations that make use of the bundle components. You should
make sure you are aware of what these bundle components are doing and analyze the risks of removing
them. Specifically, you should review the customizations from scenarios 3 and 6: Scenario 3: are
non-bundle components that are used by bundle components, so there may be fields that are set by
scripts, workflows or searches that belong to the bundle. Scenario 6: are non-bundle components that
use at least one bundle component for something, so their functionality and/or display may be
broken.

**Non critical sheets** include all the customizations from scenarios 1, 2, 4 and 5.

## Testing

Testing should occur in the sandbox environment first. Retest functionality after the bundle removal
to ensure everything is working as expected. As part of the testing, run the
[Comparing Environments](/docs/platgovnetsuite/change-management/working-with-changes/comparing-environments.md) tool to see all the
differences after the bundle removal (sandbox vs. production). It helps you determine what needs to
be moved to the production environment.

After you remove the bundle from your production environment, run a post deployment check to make
sure everything is the same between the sandbox and production environments.
