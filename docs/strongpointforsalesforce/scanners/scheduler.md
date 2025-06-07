# Scheduler

Platform Governance for Salesforce's scheduler creates automated scans, manages scripts, uses the Agent and finds the date last used (DLU). The schedules are validated to prevent scanners from running concurrently, potentially causing conflicts and incomplete documentation. A warning message is displayed if you create an overlapping scanner schedule.

To use the scheduler tool:

1. Open __Netwrix Dashboard__ > __Scanner__ > __Scheduler__  
   All categories are initially disabled by default.

   ![scheduler](/static/img/product_docs/strongpointforsalesforce/clean_up/scheduler.png)
2. Select the category to automate by clicking on __Disabled__ to enable it. There is no save button, automation is turned on and saved by toggling __Disabled__/__Enabled__.
3. Select the __Frequency__ , __Day__ and __Time__. Your selections are automatically saved.
4. Click any menu item to close the __Scheduler__.
