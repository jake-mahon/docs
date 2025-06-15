# Automated Search Clean Up Considerations

This list describes some of the special cases encountered when using the [Automated Search Clean Up](automated_search_cleanup.md) tool

1. When an archived search contains __Date__ filters, you must have the same date format preference as the Company’s date preference to accurately restore the filter.
2. SuiteScript cannot delete __Pricing__ searches. Pricing searches are not displayed in the Clean Up preview and are excluded from the Automated Search Clean Up.
3. Private searches with a __Period__ filter cannot be deleted. SuiteScript returns an __Unexpected Error__ when trying to temporarily set the search as public to delete it.
4. Searches with __Period__ filter cannot be fully restored. Only public searches can be deleted for searches with __Period__ filter.

### Limitations to Restoring Auto Archived Searches

Items from the __Criteria__ and __Results__ tabs are restored with the exception of __Public__ searches with the __Period__ filter. Auto archiving does not occur with __Private__ searches with the __Period__ filter, as they cannot be deleted or archived.

The following check boxes on the Search form are not restored if they were checked:

- Available as List View
- Available as Dashboard View
- Available as SubList View
- Available for Reminders
- Show in Menu

Items from the following tabs on the Search form are not retained when an auto archived search is restored:

- Highlighting
- Available Filters
- Audience
- Email
- Audit Trail: the restored search is assigned a new Internal ID. The audit trail only contains entries for the new Internal ID.

![Search form](../../../static/img/product_docs/strongpointfornetsuite/clean_up/limitation_restoring_searches.webp)
