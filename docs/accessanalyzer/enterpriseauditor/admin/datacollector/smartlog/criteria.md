# SMARTLog: Criteria

The Criteria page is used to specify the search criteria. A test query can be run with the sample host entered on the Sample Host page to confirm the results that will be returned by the query. It is a wizard page for all log types.

![SMART Log DC Wizard Criteria page](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/ewsmailbox/criteria.webp)

The __Limit number of records to__ setting has a default of ```1000```.

Follow the steps to configure the search criteria.

![Filter button on Criteria page](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/smartlog/criteriafilter.webp)

__Step 1 –__ Click __Filter__ to add a condition or a group to the root of the query.

- Click the ellipsis (__…__) to add a new condition or group under an existing group

![Configure search](/img/product_docs/accessanalyzer/enterpriseauditor/admin/datacollector/smartlog/criteriarecordnumber.webp)

__Step 2 –__ Click __RecordNumber__ to configure the search to look for specific events or a range of events.

__Step 3 –__ Click __equals__ and __`<empty>`__ to further configure the condition as required.

__Step 4 –__ (Optional) At the root or group level, click __AND__ to change the logical operator for that level. The available options are __AND__, __OR__, __NOT AND__, and __NOT OR__.

__Step 5 –__ Repeat steps 1 to 4 to configure all necessary criteria.

- To remove a row (condition or group), click the ellipsis (__…__) on the row and select __Remove Row__
- To remove all currently configured criteria, click __Filter__ and select __Clear All__

__Step 6 –__ Click __Show data__ to run a test query and sample the data that will be returned that is connected to a target log based upon the configured criteria. The data is displayed in the Records found table.

The search criteria has now been configured and the results it returns tested. Configure the criteria further if the returned results are not as expected, or click __Next__ to continue to the next wizard page.
