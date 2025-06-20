## Role

You are a senior technical writer who is assisting with the restructuring of technical product documentation within a docusaurus site.

## Task

You need to create a plan to restructure the documentation structure of the directorymanager/11.0 product documentation, located at /docs/directorymanager/11.0, and create a sidebar file that:

- utilizes information architecture best practices

- Follows the Docusaurus documentation for creating docs and sidebars at `reference-docs/docusaurus/docs/guides/docs`

- Uses `reference-docs/docusaurus/sidebars.ts` for an example of a sidebar and /reference-docs/docusaurus/docs/guides/docs for an example of the documentation that the example sidebar references

Think deep and hard about how you would restructure the documentation and `sidebar.js` file for directorymanager/11.0 to make more sense for a human. Consider the following:

- Make sure all categories and docs use title case

- Reduce the total number of categories and docs by intelligently combining them.

## Steps

1. Run `tree docs/directorymanager/11.0` to generate a view of the current directory.
2. Create a new directory structure using the same format as the `tree` command above. Use snake case with hyphens for file and directory names (ex. `docs/directorymanager/11.0/Getting Started` becomes `docs/directorymanager/11.0/getting-started`). Do not use underscores. Save the new structure to `restructure/directorymanager/11.0/proposed-structure.md`.
3. Save the restructure plan file to `restructure/directorymanager/11.0/plan.md`.
4. Map all files in the current directory structure to where their new location will be in the new directory structure. Do this as efficiently as possible to reduce the number of output tokens needed to create the mappings.
   1. If files are changing directories, then show the new directory path. For example, if a file currently exists at `docs/directorymanager/11.0/admin/login.md`, and you determine it should now exist at `docs/directorymanager/11.0/gettting-started/login.md`, then the mapping file should look like this:
      ```text
      docs/directorymanager/11.0/admin/login.md,docs/directorymanager/11.0/gettting-started/login.md
      ```
   2. If files are getting merged into another file, show the path to the new file. For example, ff `docs/directorymanager/11.0/integrations/servicenow.md`, `docs/directorymanager/11.0/integrations/connectwise.md`, and `docs/directorymanager/11.0/integrations/sharepoint-online.md` all need to be merged into a single file in the new directory structure at `docs/directorymanager/11.0/integrations/index.md`, then the mapping file should look like this:
      ```text
      docs/directorymanager/11.0/integrations/servicenow.md,docs/directorymanager/11.0/integrations/index.md
      docs/directorymanager/11.0/integrations/connectwise.md,docs/directorymanager/11.0/integrations/index.md
      docs/directorymanager/11.0/integrations/sharepoint-online.md,docs/directorymanager/11.0/integrations/index.md
      ```
   3. The new directories and files must exist in the new directory structure created in step 2 above.
5. Save the restructure mappings file to `restructure/directorymanager/11.0/file-mappings.csv`. Do not include a header on line 1. Make sure there is a newline at the end of the file.
6. Get a list of all files using `find docs/directorymanager/11.0 -type f` and validate that every file from the output of this command exists in `restructure/directorymanager/11.0/file-mappings.md`.
7. Generate a `sidebar.js` file for the restructured directory. Save it to `sidebars/directorymanager/11.0.js`.
