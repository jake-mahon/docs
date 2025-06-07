# Billable Users Report

A Billable Users report provides information on the billable accounts – the enabled Active Directory/Microsoft Entra ID (formerly Azure AD) accounts for your organization. See the [Billable Accounts](/docs/product_docs/1secure/1secure/admin/organizations/billableaccounts.md) topic for additional information.

| Icon | Description |
| --- | --- |
| ![businessuserslock](/static/img/product_docs/1secure/1secure/admin/searchandreports/businessuserslock.png) | Lock Icon. It shows that the business users cannot view the report. See the [Add Users](/docs/product_docs/1secure/1secure/admin/organizations/addingusers.md) topic for additional information on the business users. |

## Review a Report

Follow the steps to review a billable users report.

__Step 1 –__ On the Home page, click the __Users__ of your organization. The __System__ > __Billable Users__ page opens. By default, it populates the data with the Users of your organization.

- Dashboard for Managing Organization

![billableusersreportmanagingorg](/static/img/product_docs/1secure/1secure/admin/searchandreports/billableusersreportmanagingorg.png)

- Dashboard for Managed Organization

![billableaccountsmanagedorg](/static/img/product_docs/1secure/1secure/admin/organizations/billableaccountsmanagedorg.png)

__NOTE:__ You can also access the report by navigating to the __Reports__ > __System__ page.

![BU Report screen](/static/img/product_docs/1secure/1secure/admin/searchandreports/billableusersreport.png)

__Step 2 –__ If necessary, you can filter the provided data. Select a filter, operator, and value from the Filter, Operator, and Value drop-down menus respectively.

__NOTE:__ You must specify three columns: Filter, Operator, and Value. You may also select more than one filter. To review the Operator filter options, see the [Filter Operators ](/docs/product_docs/1secure/1secure/admin/searchandreports/filteroperators.md)topic for additional information.

__Step 3 –__ Click __Search__.

__NOTE:__ You can also export a report to your email by clicking __Export__  in the upper right corner of the page. You shall receive a report in XLSX to your login email.

## Filter Descriptions

This table provides a list of filters and descriptions.

| Filter | Description |
| --- | --- |
| Account | Limits your search to a specific account. Account is an instance of a user, specific to a source.  For example:  User = John.Smith  Account = AD User: John.Smith / Azure User: John.Smith |
| User | Limits your search to a specific user. |
| Source Type | Specify the source type of the user:   - AD User - Azure User - Windows Local User |
