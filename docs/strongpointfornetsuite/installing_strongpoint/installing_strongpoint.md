# Installing Platform Governance for NetSuite

To get Platform Governance for NetSuite up and running, you need to do the following:

1. [Install the bundle](#Install-the-bundle) using the correct bundle name and the bundle ID.
2. [Set the number of rows in list segments](#Set-the-number-of-rows-in-list-segments) to 1,000. This is a NetSuite best practice
3. [Assign a Strongpoint License](#Assign-a-Strongpoint-License).
4. [Run the spider](/docs/strongpointfornetsuite/installing_strongpoint/running_the_spider.md). The spider scans your account in a standardized manner. A series of scheduled scripts is run to document the connections between the customizations.

Starting with Version 6.2.5, queues and priority allocation are deprecated. The bundle is now installed using processor architecture for scheduled scripts. All deployments are set to low priority.

## Install the Bundle

The Bundle ID has been updated due to NetSuite changes.

1. Log into your NetSuite account with the administrator role.
2. Open __Customization__ > __SuiteBundler__ > __Search & Install Bundles__
3. Enter __294336__ in __Keywords__
4. Click __Search__

   ![Search for the Strongpoint Bundle](/img/product_docs/strongpointfornetsuite/installing_strongpoint/searchandinstallbundles.webp)
5. Click __Strongpoint__
6. Click __Install__ to start the bundle installation.
7. Verify the installation is complete. Open __Customization__ > __SuiteBundler__ > __Search & Install Bundles__ > __List__  
   In the __Installed Bundles__ list, the __Strongpoint__ bundle is marked with a green check in the __Status__ column when the bundle is installed.

   ![Verify Strongpoint Bundle Installation](/img/product_docs/strongpointfornetsuite/installing_strongpoint/verify_bundle_install.webp)

## Set the Number of Row in List Segments

It is important that you set your NUMBER OF ROWS IN LIST SEGMENTS to 1,000. This is a NetSuite best practice and critical for the proper spidering of your workflows. If you are unable to edit this field, refer to [Cannot Change the Number of Rows in List Segments](/docs/strongpointfornetsuite/troubleshooting/list_segments_not_editable.md)

To set the Number of Rows in List Segments:

1. Select __Set Preferences__ from __Home__ on the NetSuite main menu.
2. Go to __Optimizing NetSuite__.
3. Set the value to __1,000__.
4. Click __Save__.

If the field is grayed out, it should be set as a __Company Preference:__

1. Select __Company Preferences__ from __Set Up__ > __General Preferences__ on the NetSuite main menu.
2. Find the field __Number of Rows in List Segments__
3. Set the value to __1,000__
4. Click __Save__

## Assign a License

1. Open __Strongpoint__ > __Strongpoint Support__ > __License Manager__
2. Click __View__.
3. Click __New Licensed User__.
4. Click __Edit__ by your name.
5. Select __Full__ for __License Type__.
6. Click __Save__.

__Next Step:__ [Running the Spider](/docs/strongpointfornetsuite/installing_strongpoint/running_the_spider.md)
