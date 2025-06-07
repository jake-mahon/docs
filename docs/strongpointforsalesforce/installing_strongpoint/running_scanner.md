# Manual Scanners

When the initial scan is complete, you can run additional on demand scans as required.

When you add or change a specific customization, you can choose to run an on demand scan of only the Metadata type of the affected customization, instead of scanning the entire environment. This type of scan reduces the run time. For example if you change a Report, pick reports as the Metadata type and Platform Governance for Salesforce only scans reports.

The scanner is only available to Administrators.

To run the scanner:

1. Open __Netwrix Dashboard__ > __Scanner__ > __Manual Scanners__
2. Use the optional __Search Types__ to narrow the focus of the list if you are looking for a specific type.
3. You can select + beside one or more types to scan or you can scan the whole environment by clicking + on the __Name__ row to select all the types.

   ![scanner](/static/img/product_docs/strongpointforsalesforce/installing_strongpoint/scanner.png)
4. Click __Run Scanner__.
5. The batch runs in the background. You receive an email notification when the scan is complete.

   You can create your own Salesforce view for the scanners.

   - Open Salesforce __Setup__.
   - Search for __apex jobs__ or navigate to __Environments__ > __Jobs__ > __Apex Jobs__.
   - Click __Create New View__.  
     ![Set up a Strongpoint scanner view](/static/img/product_docs/strongpointforsalesforce/installing_strongpoint/scanner_view.png)
   - Enter a __View Name__. The system assigns __View Unique Name__. _Netwrix Jobs1_ is used in this example.
   - Select __Apex Class__ for the __Field__.
   - Select __starts with__ for the __Operator__.
   - Assign __FLO, Strongpoint__ for the __Value__.
   - Click __Save__. You can now see the status of all of the Strongpoint jobs.  
     ![Viewing running Strongpoin jobs](/static/img/product_docs/strongpointforsalesforce/installing_strongpoint/scanner_view2.png)
6. From the Netwrix Dashboard: click __Configuration and Stats__ in the __Resources__ section, or open __Settings__ > __Configuration and Stats__.

__Next Step:__ [Validate the Data ](/docs/product_docs/strongpointforsalesforce/installing_strongpoint/validating_data.md)
