---
sidebar_position: 6649
title: Site Account Management APIs
---

# Site Account Management APIs

You can use APIs to perform the following functions for user accounts that can access the EPE Rest Service:

* Get all User Accounts
* Create an Account
* Get a User with a Specific User ID
* Get a User with a Specific User Name
* Delete an Account

## GET api/account/users

This API returns a list of internal accounts stored in the EpeUsers database.

Authentication required – Yes

Authentication Type – Basic authentication. Any valid account such as a local account for this machine or a domain account that can be verified on this machine should work.

Example

![GET api/account/users](../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/EPERestSite/Account/Users.png "GET api/account/users")

## POST api/account/create

This API creates a new internal account in the EpeUsers database.

Authentication required – Yes

Authentication Type – Basic authentication

Required Input Parameters

```
{  
"username":"accountname",  
"password":"password",  
"confirmpassword":"password",  
"firstname":"firstname",  
"lastname":"lastname"  
}
```
Example

![POST api/account/create](../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/EPERestSite/Account/Create.png "POST api/account/create")

## GET api/account/user/

This API returns information about an internal account stored in the EpeUsers database with the User Id value as the input parameter.

Authentication required – Yes

Authentication Type – Basic authentication

Example

![GET api/account/user/](../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/EPERestSite/Account/UserID.png "GET api/account/user/")

## GET api/account/user/

This API returns information about an internal account stored in the EpeUsers database with the User Name value as the input parameter.

Authentication required – Yes

Authentication Type – Basic authentication

Example

![GET api/account/user/](../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/EPERestSite/Account/UserName.png "GET api/account/user/")

## DELETE api/account/delete?userName=

This API deletes an internal account stored in the EpeUsers database with the User Name value as the input parameter.

Authentication required – Yes

Authentication Type – Basic authentication

Example

![DELETE api/account/delete?userName=](../../../../../static/images/ThreatPrevention_7.5/Content/Resources/Images/ThreatPrevention/EPERestSite/Account/Delete.png "DELETE api/account/delete?userName=")

To verify the result of this operation, you can use “GET api/account/users” or check the contents of the [EpeUsers].[dbo].[AspNetUsers] database table.