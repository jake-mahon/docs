# Installing User Access Review

The User Access Review app must be installed and licensed before it can be used.

- Installing the Bundle
- Licensing New Users for the UAR App
- Licensing Existing Users for UAR
- Adding UAR Center Tab to Custom Roles

## Installing the Bundle

1. Log into your NetSuite account with the administrator role.
2. Open __Customization__ > __SuiteBundler__ > __Search & Install Bundles__
3. Enter __433078__ in __Keywords__.
4. Click __Search__.

   ![Search for the UAR bundle](/img/product_docs/strongpointfornetsuite/uar/bundle_uar.webp)
5. Click __Strongpoint UAR__.

   ![Select the bundle](/img/product_docs/strongpointfornetsuite/uar/bundle_uar2.webp)
6. Click __Install__ to start the bundle installation.
7. Verify the installation is complete. Open __Customization__ > __SuiteBundler__ > __Search & Install Bundles__ > __List__
8. In the __Installed Bundles__ list, the __Strongpoint UAR__ bundle is marked with a green check in the __Status__ column when the bundle is installed.

A Strongpoint administrator grants users access to the UAR app. Continue with Licensing New Users for the UAR App or Licensing Existing Users for UAR.

## Licensing New Users for the UAR App

This procedure is used to add a UAR license to an existing NetSuite user who is not licensed for Platform Governance for NetSuite.

1. Open __Strongpoint__ > __Strongpoint Support__ > __License Manager__.
2. Click __View__.
3. Set the __View__ to __Strongpoint Licensed Users__.

   ![Set View to Strongpoint Licensed Users](/img/product_docs/strongpointfornetsuite/uar/licensing_uar.webp)
4. Click __New Licensed User__.

   ![UAR Licensed User](/img/product_docs/strongpointfornetsuite/uar/app_access.webp)
5. Select the __User__.
6. Set __License Type__ to __Full__.
7. Assign one or more UAR roles:

- __UAR Owner__ reviews Role Permissions and/or Role Membership.
- __UAR Auditor__ read-only access.
- __UAR Additional Reviewer__ performs assigned Role Membership reviews.
- __UAR Admin__manages the UAR process, assigns Role Owners to a role, creates Reviews, and views Reviews.

8. Click __Save__.

## Licensing Existing Users for UAR

1. Open __Strongpoint__ > __Strongpoint Support__ > __License Manager__.
2. Click __View__.
3. Set the __View__ to __Strongpoint Licensed Users__.

   ![Set View to Strongpoint Licensed Users](/img/product_docs/strongpointfornetsuite/uar/licensing_uar.webp)
4. Click __Edit__ beside the User name.

   ![UAR Licensed User](/img/product_docs/strongpointfornetsuite/uar/licensing_uar2.webp)
5. Set __License Type__ to __Full__.
6. Assign one or more UAR roles:

- __UAR Owner__ reviews Role Permissions and/or Role Membership.
- __UAR Auditor__ read-only access.
- __UAR Additional Reviewer__ performs assigned Role Membership reviews.
- __UAR Admin__manages the UAR process, assigns Role Owners to a role, creates Reviews, and views Reviews.

7. Click __Save__.

## Adding UAR Center Tab to Custom Roles

Determine the __Roles__ and __Center Types__ that need access to UAR.

1. Open __Setup__ > __Users/Roles__ > __Manage Roles__ to review your roles. The __Center Type__ is listed for each __Role__. For example, if you are adding UAR to the __Controller__ role, you can see the __Center Type__ is __Accounting Center__.

   ![Find the Center Type for each Role](/img/product_docs/strongpointfornetsuite/uar/role_review.webp)
2. Open __Customization__ > __Centers and Tabs__ > __Center Tabs__
3. Click __Edit__ by __User Access Review__.
4. Select the __Center__. This example shows the __Accounting Center__.

   ![Assign the Center](/img/product_docs/strongpointfornetsuite/uar/center_tab.webp)
5. Open the __Audience__ tab.
6. Select the __Role__. This example show the __Controller - Basic__ role.

   ![Add the role](/img/product_docs/strongpointfornetsuite/uar/center_tab_audience.webp)
7. Select __Save__ > __Save a Copy__.
8. Repeat for each __Center Type__ and __Role__.
