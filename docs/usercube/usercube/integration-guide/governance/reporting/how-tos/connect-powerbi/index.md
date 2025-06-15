# Connect Power BI to Identity Manager

This guide shows how to connect Power BI to Identity Manager.

## Overview

When facing a periodic need for producing specific reports, especially when a visual presentation is required, Identity Manager offers the possibility to connect to the [Power BI](https://powerbi.microsoft.com/en-us/what-is-power-bi) application. This application will allow you to create customized reports with a vast range of display options (such as graphs, charts, matrixes, etc.) using Identity Manager's universes.

## Prerequisites

- Power BI Desktop must be installed on your device.
- Identity Manager's server must be running.

## Connect Power BI to Identity Manager

Connect Power BI to Identity Manager by proceeding as follows:

1. Open Power BI Desktop.
2. Click on __Get data__ either in the welcome window or in the home menu.

   ![Get Data](../../../../../../../../static/img/product_docs/usercube/usercube/integration-guide/governance/reporting/how-tos/connect-powerbi/powerbi_getdata.webp)
3. In the opening window, search for Identity Manager, click on its plugin in the right menu, and click on __Connect__.

   ![Get Data Window](../../../../../../../../static/img/product_docs/usercube/usercube/integration-guide/governance/reporting/how-tos/connect-powerbi/powerbi_getdatawindow.webp)
4. Enter Identity Manager's server URL in the opening window.

   ![Server URL](../../../../../../../../static/img/product_docs/usercube/usercube/integration-guide/governance/reporting/how-tos/connect-powerbi/powerbi_url.webp)
5. In the opening window, enter the [
   OpenIdClient
   ](../../../../toolkit/xml-configuration/access-control/openidclient/index.md)of the ```Administrator``` profile. The ```Client Id``` expects the concatenation of the identifier of ```OpenIdClient``` with ```@``` and Identity Manager's domain name. See the following example.

   ![Client Id / Client Secret](../../../../../../../../static/img/product_docs/usercube/usercube/integration-guide/governance/reporting/how-tos/connect-powerbi/powerbi_clientid.webp)
6. You can now access in the left panel the [
   Universe
   ](../../../../toolkit/xml-configuration/business-intelligence/universe/index.md)from Identity Manager configuration. You can click on the desired universe to expand it, and view and pick the desired tables.

   ![Universe Panel](../../../../../../../../static/img/product_docs/usercube/usercube/integration-guide/governance/reporting/how-tos/connect-powerbi/powerbi_universes.webp)

   __Power BI tip:__ to view a table, click on its name. To select a table, check the box next to the table's name.
7. Once you've selected all the tables you need, click on __Load__ to import data to the Power BI report. You can also click on __Transform data__ to open the query editor and make other changes in your tables, rows and columns.

## Clear the Cache

Remember to clear the cache in Power BI to ensure that all changes are considered.

Clear the cache by proceeding as follows:

1. In Power BI, click on __File__ > __Options and settings__ > __Options__.
2. In the __Data Load__ tab, click on __Clear Cache__.

   ![Clear Cache](../../../../../../../../static/img/product_docs/usercube/usercube/integration-guide/governance/reporting/how-tos/connect-powerbi/powerbi_clearcache.webp)
