# Running the Scanner

When the initial scan is complete, you can run additional on demand scans as required.

When you add or change a specific customization, you can choose to run an on demand scan of only the Metadata type of the affected customization, instead of scanning the entire environment. This type of scan reduces the run time. For example if you change a Report, pick reports as the Metadata type and Strongpoint only scans reports.

NOTE: The scanner is only available to Administrators.

To run the scanner:

1. Open __Flashlight__ > __Tools__ > __Strongpoint Scanners__
2. Optional: You can enter all of part of a __Type__ in __Search Types__ to filter the list.
3. You can select several types to scan or you can scan the whole environment by clicking the __+__ by __Name__ to select all the types.
![scanner](../../../static/img/product_docs/strongpointforsalesforce/installing_strongpoint/scanner.webp)4. Click __Run Scanner__.
5. The batch runs in the background. You receive an email notification when the scan is complete.
6. You can open __Flashlight__ > __Support__ > __Status Report__ to view the __Flashlight Configuration and Stats__.

If you are missing objects, you can run a scan on a __Customization__ from the open record by clicking __Rescan__.

![rescan_example_800x289](../../../static/img/product_docs/strongpointsalesforceflashlight/tools/rescan_example_800x289.webp)

__Next Step:__[Validating the Data ](validating_data.md)
