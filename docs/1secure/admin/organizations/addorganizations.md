# Add Organizations

Follow the steps to add an organization.

__Step 1 –__ On the Netwrix 1Secure Website, on the __Home__ page, select the Add organization icon to add an organization.

![organization_adding](/img/product_docs/1secure/admin/organizations/organization_adding.png)

__Step 2 –__ On the Add Organization (Step 1 of 4) window, specify the following:

- Name – Specify a name for the organization
- Timezone – Select a timezone for the organization
- Country – Select a country for the organization
- Tags – Select tag(s) for the organization. Tags provide a way of adding metadata to the tenancies being managed. To specify multiple tags, select them one by one from the dropdown menu.
- Alert profile – Select an alert profile for the organization. Alert profiles enable you to group alert configurations and delivery notification settings together.
- Risk Profile – Select a risk profile for the organization. Risk profiles enable you to group thresholds together.
- Groups – Select a group for the organization. To assign an organization to multiple groups, select the groups one by one from the drop-down menu.

Click __Next__.

![addorganizationsselectdatasource](/img/product_docs/1secure/admin/organizations/addorganizationsselectdatasource.png)

__Step 3 –__ On the Select Data Source (Step 2 of 4) window, add a preferred data source to your organization:

- Active Directory
- Azure AD (now Microsoft Entra ID)
- Computer
- Exchange Online
- SharePoint Online

__NOTE:__  See the [Sources and Connectors ](/docs/1secure/admin/organizations/sourcesandconnectors/overview.md) topic for detailed information.

![addorganizationssites](/img/product_docs/1secure/admin/organizations/addorganizationssites.png)

__Step 4 –__ On the Configure source details (Step 3 of 4) window, add a site for your organization. Sites are used to signify physical groupings within the organization. Click __Next__.

__NOTE:__ This step is displayed only when adding Active Directory and Computer sources.

See the [Add Sites to an Organization](/docs/1secure/admin/organizations/addsites.md) topic for additional information.

![addorganizationsagent](/img/product_docs/1secure/admin/organizations/addorganizationsagent.png)

__Step 5 –__ On the Configure source details (Step 3 of 4) window, follow the instructions to install the agent. Please go to the [Install Agent](/docs/1secure/install/installagent.md)topic of the online help. Click __Next__.

__NOTE:__ Install the agent only for on-prem sources - Active Directory and Computer. This step is displayed only when adding these sources.

![addorganizationssourcedetails](/img/product_docs/1secure/admin/organizations/addorganizationssourcedetails.png)

__Step 6 –__ On the Configure source details (Step 3 of 4) window, specify your source settings. See the [Sources and Connectors ](/docs/1secure/admin/organizations/sourcesandconnectors/overview.md) topic for additional information.

![addorganizationssourcesandconnectors](/img/product_docs/1secure/admin/organizations/addorganizationssourcesandconnectors.png)

__Step 7 –__ On the Choose new connector (Step 4 of 4) window, add the connectors for your sources on. See the [Sources and Connectors ](/docs/1secure/admin/organizations/sourcesandconnectors/overview.md) topic for additional information.

__Step 8 –__ Click __Finish__ or __Save & Add another source__ to add a source for your organization.

The organization is now added.
