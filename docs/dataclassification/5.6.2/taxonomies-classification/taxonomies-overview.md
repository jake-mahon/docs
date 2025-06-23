# Additional Configuration

This section contains information on additional and / or optional tabs. Review the following for
additional information:

| Tab              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Graph            | The Graph tab shows a graphical representation of classification intersection points. ![taxonomygraph_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/taxonomies/taxonomygraph_thumb_0_0.webp) In the example above 6721 documents are tagged with "Medium (100kb-1Mb)", 1254 of these documents are also tagged with "HTML". It's also possible to see that there are 3517 documents that are tagged with both "HTML" and "English" (highlighted by the dashed links). |
| Info             | The Info tab displays the term description (aka Scope Notes) for each preferred term. The Description field is often populated automatically when an external taxonomy is imported automatically using the Scope Notes.                                                                                                                                                                                                                                                             |
| Logs             | All changes made to a term are recorded. The change history may be viewed from the Logs Tab: ![termlogs](/img/versioned_docs/dataclassification_5.6.2/ndc/taxonomies/termlogs.webp)                                                                                                                                                                                                                                                                                                 |
| User Edits       | When auto-classifications are amended in SharePoint the user edits are recorded in the SQL database, these can later be reviewed to identify terms that require review: ![useredits](/img/versioned_docs/dataclassification_5.6.2/ndc/taxonomies/useredits.webp)                                                                                                                                                                                                                    |
| User Suggestions | An optional interface can be enabled to allow users to suggest new terms for the termset hierarchy (http://netwrixdataclassificationserver/conceptQS/Taxonomies/TermSuggest.aspx). Suggestions can trigger automatic notifications to taxonomy administrators, as well as being recorded in the database for later review on the "User Suggestions" tab: ![usersuggestions_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/taxonomies/usersuggestions_thumb_0_0.webp)   |

# Taxonomies

## What are Taxonomies?

Netwrix Data Classification comes with several built-in **taxonomies** with hundreds of
classification rules out-of-the-box. The taxonomies cover a broad range of sensitive personal,
financial, and health-related information. Each taxonomy contains a set of terms. **Terms** are
defined by set of configuration **rules** (also called **clues**). See
[Classification Rules (Clues)](/docs/dataclassification/5.6.2/taxonomies-classification/clues/creating-clues.md) for
details.

- To create a taxonomy, go to the **Taxonomies** area of the web-based management console and follow
  the procedures described in
  [Add a Taxonomy](/docs/dataclassification/5.6.2/taxonomies-classification/managing-taxonomies/create-taxonomies.md) section.
- To manage the taxonomies, follow the procedures described in
  [Manage Taxonomies](/docs/dataclassification/5.6.2/taxonomies-classification/managing-taxonomies/create-taxonomies.md)
  section.

**IMPORTANT!** To access the **Taxonomies** area, users require sufficient rights. See the
[User Management](/docs/dataclassification/5.6.2/security-administration/user-management/users-roles.md) section
for more information.

![taxonomyclues_thumb_0_0](/img/versioned_docs/dataclassification_5.6.2/ndc/taxonomies/taxonomyclues_thumb_0_0.webp)

See also:

- [Built-in Taxonomies Overview ](/docs/dataclassification/5.6.2/taxonomies-classification/managing-taxonomies/standalone-taxonomies.md)
- [Taxonomy Settings](/docs/dataclassification/5.6.2/taxonomies-classification/managing-taxonomies/taxonomy-settings.md)
