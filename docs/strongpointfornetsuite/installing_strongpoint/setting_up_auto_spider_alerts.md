# Setting Up the AutoSpider and Alerts

After you have run your initial spider, the AutoSpider monitors your account on an ongoing basis to see if customization changes have occurred. This is a light scan of the data to determine if there were any changes. If changes are detected, you are reminded to ReSpider your account.

Best practice is to run the AutoSpider regularly. If the AutoSpider is not run, your Change Logs will be missing the __Changed by__ and __Actual Change Date__ fields. When the Change Log is newly created, the fields contain __Pending AutoSpider__. If too many days go by, the fields change to __Could not be determined__.

## Set Up the AutoSpider

The AutoSpider portlet should be installed on all Administrator homepages. The AutoSpider triggers when the Administrator logs in. Ideally daily or every other day. Best practice is to wait for the portlet to load and see the __Spider Triggered__ message before continuing.

The __AutoSpider Portlet__ is required to update certain object types in NetSuite. Once triggered through the dashboard portlet, it picks up all changes on custom objects and triggers the scheduled scripts to reflect them in the Customization records, going back two days. The AutoSpider portlet is required in order to update these object types:

- Bundle
- Custom Report
- Entry Form
- Mass Update
- Online Customer Form
- Record
- Transaction Form
- Custom Advanced PDF/HTML Template

To add the auto spider portlet:

1. Log in to NetSuite with an Administrator role.
2. Click __Personalize__ on your home page.
3. Click __Custom Portlet__.
4. Click the menu icon for the __Custom Portlet__ and select __Set Up__
5. Select __Strongpoint AutoSpider Portlet (Realtime)__ from the __Source__ list.
6. Click __Save__

Any objects not captured by the AutoSpider are picked up by the Customizations to ReSpider alert.

![Auto-Spider Portlet](/img/product_docs/strongpointfornetsuite/installing_strongpoint/auto-spider_portlet.webp)

Stay on your __Home__ page until you see __Spider Triggered__ to ensure the spider starts.

## Set up Customizations to ReSpider Alerts

A series of Workflows are used to review system notes, audit logs and object history. These workflows identify when the Customization Records have not been updated. To ensure the objects in your account are updating, set up the Customizations to ReSpider search to provide alerts to the appropriate people in your company.

__Next Step:__ [Managing Users](/docs/strongpointfornetsuite/installing_strongpoint/managing_users.md)
