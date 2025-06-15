# Add Sites to an Organization

Sites are used to signify physical groupings within the organization.
The feature is helpful for Managed Service Providers with clients in multiple office locations from different cities. Once they set up an organization, install an agent for the on-prem sources (Active Directory or Computer), you can track the agent status for the organization's site, the agent connection, server name, and check for the agent updates.

| Icon | Description |
| --- | --- |
| ![alerts_editicon](../../../../static/img/product_docs/1secure/integration/alerts_editicon.webp) | Edit Icon. Click the Edit Icon to edit the site details. |
| ![addicon](../../../../static/img/product_docs/1secure/admin/organizations/addicon.webp) | Add Icon. Click the Add Icon to add a site. |
| ![deletebutton](../../../../static/img/product_docs/1secure/integration/deletebutton.webp) | Bin Icon. Click the Bin Icon to delete a site. |

## Add a New Site

Follow the steps to add a site to your organization.

__Step 1 –__ Add your organization or add a source to the created organization. See the [Add Organizations](addorganizations.md) topic for additional information.

__NOTE:__ You can add sites only for on-prem sources - Active Directory and Computer. These sources require an installation of the agent. See the [Add a Source and Connectors for Active Directory](sourcesandconnectors/activedirectory.md) or [Add a Source and Connectors for Computer](sourcesandconnectors/computer.md)topic for additional information.

![addsourcessite](../../../../static/img/product_docs/1secure/admin/organizations/addsourcessite.webp)

__Step 2 –__ On the Configure source details window (Step 2 of 3) window, add a new site. In the "New site name" field, specify the name for your site. This could be a geographical location like 'Barcelona' or a cluster of servers from which a single agent collects data. Click __Next__.

__NOTE:__ You can add multiple sites and then add it to your source. A managed organization can have multiple sites and each site can be associated with multiple sources.

__Step 3 –__ Finish adding a source for your organization. See the [Add a Source and Connectors for Active Directory](sourcesandconnectors/activedirectory.md) or [Add a Source and Connectors for Computer](sourcesandconnectors/computer.md) topic for additional information.

The site is now added.

You can now add the created sites to your source.

__Step 1 –__ Add a source to the your organization.

__Step 2 –__ Select your site from the drop-down list or click the __Add__ icon, if your want to add a new site. Click __Next__.

![sitesdropdown](../../../../static/img/product_docs/1secure/admin/organizations/sitesdropdown.webp)

__Step 3 –__ Finish adding the source. Screens will vary depending on the source added. See the [Add a Source and Connectors for Active Directory](sourcesandconnectors/activedirectory.md) or [Add a Source and Connectors for Computer](sourcesandconnectors/computer.md)topic for additional information.

## View Sites and Agent Status

Now you can review the created site for your organization and check the agent status.

Follow the steps to view the site for the organization.

__Step 1 –__ Navigate to Managed Organizations > "your organization" > Sites.

![updateagents2](../../../../static/img/product_docs/1secure/admin/updateagents2.webp)

__Step 2 –__ View the following details:

- Agent status – Agent status in color. See the [Statuses ](../statuses.md)topic for additional information
- Server name – Server from which the data is collected
- Last Connected – Last connection time with your agent in UTC
- Last Updated – Last time for the agent update in UTC
- Version – Agent version
- Agent Connection String (Update) – Update agent
- Override Tenancy Defaults – Toggle on if you want to change the update defaults for that organization

__Step 3 –__ You can edit or delete the site by clicking the __Edit__ or __Bin__ icon.
