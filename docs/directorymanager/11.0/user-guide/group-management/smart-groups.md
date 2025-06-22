# Smart Groups

This view lists only the Smart Groups created using GroupID in the connected identity store. It does
not list expired or deleted Smart Groups. To view the expired or deleted groups, select the
[Expired Groups](/docs/directorymanager/11.0/user-guide/group-management/group-lifecycle.md) or
[Deleted Groups](/docs/directorymanager/11.0/user-guide/group-management/group-lifecycle.md)
respectively.

You can
[Modify Search Directory](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#modify-search-directory)
to search smart groups and add
[Filter All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#filter-all-groups)by
clicking **Smart Group Grid Filter**. All the smart groups matching the filters will be displayed.

**See Also**

- [All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group Expiry](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Join/Leave a Group](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Working with Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)

# My Smart Groups

This page lists only the Smart Groups that you are primary owner of. To include the groups for which
you are an additional owner, select the **Display additional group ownership in My Smart Groups**
check box on the [Portal Settings](/docs/directorymanager/11.0/user-guide/portal/index.md)
panel.

You can
[Modify Search Directory](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#modify-search-directory)
to search your smart groups and add
[Filter All Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md#filter-all-groups)by
clicking **Smart Group Grid Filters**. All the smart groups matching the filters will be displayed.

**See Also**

- [My Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Groups](/docs/directorymanager/11.0/user-guide/group-management/create-groups.md)
- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group Expiry](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Join/Leave a Group](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Working with Groups](/docs/directorymanager/11.0/user-guide/group-management/manage-groups.md)
- [Directory Search](/docs/directorymanager/11.0/user-guide/portal/navigation.md)

# Query Designer - Database tab

You can combine an external data provider with the directory to determine a group's membership.

The supported external data providers are:

- Microsoft Access
- Microsoft Excel
- Oracle
- ODBC
- Microsoft SQL Server
- Text/CSV
- SCIM

Before using any of the above external data providers, a data source for the provider must be
defined in Admin Center. See the
[Create a Data Source](/docs/directorymanager/11.0/configuration/data-sources/index.md) topic.

A connection is configured in a data source, GroupID portal connects to the external database,
retrieves the results, and then queries the directory for matching records.

You must map one column returned by the command on the Database tab with a directory attribute to
join the external data source to the identity store. The query compares the values of the mapped
attributes and extracts objects with matching values to add to the group’s membership.

For example, if you want to add to group membership all employees whose employee IDs are present in
an external data source, you can select that data source and map a key attribute with a directory
attribute. Use attributes that store the employee ID. When group membership is updated, GroupID will
fetch only those users from the directory whose employee IDs also exist in the data source.

**External Data Provider**

Select the data source from the drop-down list that you want to use to determine the group's
membership.

**External Provider Table**

Once the data source is selected, select the provider's table that contains the data.

**Identity Store Attribute**

Select an identity store attribute to map a database attribute to it.

**External Provider Attribute**

Select a data provider attribute to map it to the selected identity store attribute.

**Command String**

This field displays the command that the **Query Designer** executes to retrieve the query results
from the data source. The value can be a query statement and can include multiple columns separated
by commas. Field names are enclosed in brackets ([ ]) to prevent any ambiguity that the query engine
might encounter due to spaces between column names.

You can modify the command and even write your own command.

For better performance, it is recommended to select only the columns required to create your group.

For example:

```
SELECT [Column1],[Column2] FROM [Filename.csv]
```

Execute

Click this button to execute the command and preview the results. This process may take several
minutes depending on the size of your data source.

**Clear**

Click this button to clear the query.

**Preview**

Enables you to preview the results returned with the criteria specified on all tabs of the Query
Designer dialog box. This is a check to ensure the accuracy of data before changes are committed to
the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.

**See Also**

- [Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)

# Query Designer - Filter Criteria tab

Use this tab to add custom criteria to your query that do not fit any of the categories represented
on other tabs of the Query Designer dialog box. For example, you can add criteria to retrieve all
directory users who live in Houston and have a fax number. You can also apply logical operators
(AND, OR) to your custom query to achieve the most accurate results.

If the administrator in your role's Query Designer policy has defined a default filter criteria,
that filter criteria is displayed on this tab. You can view and copy the query using the **View
Query** button. See the
[Specify a Default Filter Criteria](/docs/directorymanager/11.0/administration/admin-center/policies.md#specify-a-default-filter-criteria)
section of the
[ Query Designer Policy](/docs/directorymanager/11.0/administration/admin-center/policies.md)
topic.

The default criteria is part of the policy; therefore, in GroupID portal it is visible to the role
members only.

Let's say the administrator has defined the following default criteria in the policy:

department is exactly HR

You can add another row of filter criteria in the portal query designer window, if need be.

**Select Attribute**

By default, this is the only list displayed on the tab. It displays all or specific schema and
Exchange attributes, depending on what the GroupID administrator has configured.

Select an attribute to be searched. For example, to search for users who live in the city of
Houston, select the City attribute from this list.

**Contains**

From here, select the condition that identifies search results. The following table lists the
available conditions:

NOTE: Depending on configurations made by the GroupID administrator for the portal, all of the
following or specific conditions will be displayed in the list.

The condition list for query based searches may vary.

| Condition           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contains            | Returns everything that contains the value. NOTE: This is resource-intensive for the directory server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Does Not End With   | Returns everything that does not end with the value. NOTE: This is resource-intensive for the directory server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Does Not Start With | Returns everything that does not start with the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Ends With           | Returns everything that ends with the value. ( NOTE: This is resource-intensive for the directory server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Greater Or Equal    | Returns everything with a value greater than or equal to the given value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Is Exactly          | Returns everything that matches the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Is Not              | Returns everything that does not match the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Less Or Equal       | Returns everything with a value less than or equal to the given value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Not Contain         | Returns everything that does not contain the value. NOTE: This is resource-intensive for the directory server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Not Present         | Returns everything that does not have the specified value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Present             | Returns everything that has the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Starts With         | Returns everything that starts with the value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| All Flags On        | Performs bit-wise comparison to find objects that have all the specific flags set for the attribute according to the given value. The value must be a decimal number; it cannot be a hexadecimal number or a constant name. For example, to search all users who do not need a password (decimal value of PASSWD_NOTREQD flag = 32) and whom passwords never expires (decimal value of DONT_EXPIRE_PASSWORD flag = 65536), set the value of UserAccessControl's attribute against this condition to 65568 (65536 + 32). For more information, refer to the article [http://support.microsoft.com/kb/305144](http://support.microsoft.com/kb/305144).  |
| All Flags Off       | Performs bit-wise comparison to find objects that have all the specific flags not set for the attribute according to the given value. The value must be a decimal number; it cannot be a hexadecimal number or a constant name. For example, to search all users which are neither disabled (decimal value of ACCOUNTDISABLE flag =2) nor locked out (decimal value of LOCKOUT flag = 16), set the value of UserAccessControl's attribute against this condition to 18 (2 + 16). For more information, refer to the article [http://support.microsoft.com/kb/305144](http://support.microsoft.com/kb/305144).                                         |
| Any Flag On         | Performs bit-wise comparison to find objects that have any of the specific flag set for the attribute according to the given value. The value must be a decimal number; it cannot be a hexadecimal number or a constant name. For example, to search all users who do not need a password (decimal value of PASSWD_NOTREQD flag = 32) or whom passwords never expires (decimal value of DONT_EXPIRE_PASSWORD flag = 65536), set the value of UserAccessControl's attribute against this condition to 65568 (65536 + 32). For more information, refer to the article [http://support.microsoft.com/kb/305144](http://support.microsoft.com/kb/305144). |
| Any Flag Off        | Performs bit-wise comparison to find objects that have any of the specific flag not set for the attribute according to the given value. The value must be a decimal number; it cannot be a hexadecimal number or a constant name. For example, to search all users which are either disabled (decimal value of ACCOUNTDISABLE flag =2) or locked out (decimal value of LOCKOUT flag = 16), set the value of UserAccessControl's attribute against this condition to 18 (2 + 16). For more information, refer to the article [http://support.microsoft.com/kb/305144](http://support.microsoft.com/kb/305144).                                         |
| Chain Match         | Limited to the attributes of DN (distinguished name) type only. This is a special extended filter that walks the chain of ancestry in objects all the way to the root until it finds a match. For example, you can use this filter with the **ManagedBy** attribute to find all the groups for which the selected user is a direct or indirect owner.                                                                                                                                                                                                                                                                                                 |

**Value**

Specify a value for the attribute. The query will return results considering the specified criteria
(attribute, condition, value).

For some operators, the Value box is not available, as in the case of Present or Not Present. This
happens when the operators are not comparison operators. They only check whether the value for the
selected field exists and return either TRUE or FALSE.

**AND**

Click this button after selecting two or more records to insert a logical AND to the selected
criteria.

To select a record, click the arrow icon next to it and click **Select Row**.

**OR**

Click this button after selecting two or more records to insert a logical OR to the selected
criteria.

To select a record, click the arrow icon next to it and click **Select Row**.

**Clear**

Use this button to clear the given criteria.

**Preview**

Enables you to preview the results returned with the criteria specified on all tabs of the Query
Designer dialog box. This is a check to ensure the accuracy of data before changes are committed to
the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.

**See Also**

- [Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)

# Query Designer - General tab

Use this tab to specify the type of objects to include in your search. Options vary according to the
object type selected in the **Find** list.

Select the sub-types of the selected object type to include in your search.

The following table lists the options available on the **General** tab for each object type in the
**Find** list.

| Find list option            | Objects available for selection                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Messaging System Recipients | - **Users with mailboxes** - Includes users with messaging system mailboxes - **Users with External Email Address** - Includes users with email addresses that are external to your organization - **Contacts with External Email Address** - Includes contacts with email addresses that are external to your organization - **Mail-Enabled Groups** - Includes mail-enabled groups - **Mail-Enabled Folders** - Includes mail-enabled folders |
| Computers                   | - **Workstations and Servers** - Includes workstations and servers - **Domain Controllers** - Includes domain controllers                                                                                                                                                                                                                                                                                                                       |
| Custom                      | By default, it includes all object options for Messaging System Recipients, Computers, and Users, Contact, and Groups. For this reason, the General tab does not display any option for this object type.                                                                                                                                                                                                                                       |
| Users, Contacts and Groups  | - **Users** - Includes users - **Contacts** - Includes contacts - **Groups** - Includes groups                                                                                                                                                                                                                                                                                                                                                  |

NOTE: The Computer and Contact object types are not supported in a Microsoft Entra ID identity
store.

**Preview**

Enables you to preview the results returned with the criteria specified on all tabs of the Query
Designer dialog box. This is a check to ensure the accuracy of data before changes are committed to
the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.

**See Also**

- [Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)

# Query Designer - Include/Exclude tab

Use this tab to include or exclude an object from group membership, regardless of whether it is
returned by the query. The Include and Exclude lists affect group membership at two points in the
update process:

- **Immediately** - When you close the Query Designer dialog box, the GroupID portal adds the
  objects in the Include list to the group membership and removes the objects in the Exclude list
  from the group membership. If you have removed objects from the Include list, the group’s
  membership is updated immediately. However, if you have removed objects from the Exclude list, the
  group’s membership is updated only by manual update or by a scheduled job.
- **At group membership update** - When the group membership is updated using a scheduled job or the
  Update command, GroupID obtains the query results, adds the objects to include, and then removes
  the objects to exclude.

NOTE: For best performance, use query criteria to include or exclude objects as opposed to
statically selecting the objects using this tab.

**Include**

Displays the list of objects to include in group membership. The list also displays the objects that
are imported to the membership of this group using the portal's import feature. Use the **Add** and
**Remove** buttons to modify this list.

**Exclude**

Displays the list of objects to exclude from group membership. Use the **Add** and **Remove**
buttons to modify this list.

**Preview**

Enables you to preview the results returned with the criteria specified on all tabs of the Query
Designer dialog box. This is a check to ensure the accuracy of data before changes are committed to
the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.

**See Also**

- [Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)

# Query Designer

The Query Designer enables you to create queries for Smart Groups, Dynasties and directory objects
searches. These queries provide a quick and consistent way to retrieve a common set of directory
objects on which you want to perform specific tasks. For example, you can construct a query to
retrieve all users having mailboxes on a particular Exchange Server or you can build a query to
retrieve all directory objects whose information is present in an external data source, such as
Microsoft SQL Server.

If the administrator has defined a Query Designer access policy for your role, you can create
queries as per the defined policy. A banner is displayed on the Query Designer dialog box indicating
that the administrator has implemented a policy for your role. See the
[ Query Designer Policy](/docs/directorymanager/11.0/administration/admin-center/policies.md)
topic.

The query language depends on the identity store type.

- An Active Directory based identity store supports an LDAP query.
- A Microsoft Entra ID based identity store supports a device structured query language.

## Launch the Query Designer

You can launch the Query Designer dialog box for a Smart Group or a Dynasty or a search query in any
of the following ways:

- While creating a Smart Group or Dynasty - On the Smart Group/Query Designer page of the New Smart
  Group wizard or New Dynasty wizard, click **Query Designer**.
- From group properties - On the Smart Group/Query Designer tab in Smart Group/Dynasty properties,
  click **Query Designer**.
- When you upgrade a static group to a Smart Group or Dynasty.
- From the Queries page - On the Advanced Search page, click the **Or use the new query based
  search** link. Then click **Query Designer**.

## The Query Designer Interface

The Query Designer dialog box provides a visual interface for designing queries, so that you do not
have to write the commands. Its preview feature returns the results for the query before you commit
them to the directory server.

The Query Designer dialog box groups similar query options by tabs. Settings that are not grouped in
tabs are global; they apply to all tabs.

### Common Settings and Buttons

**Find**

Select an option to specify the type of object to include in the membership of the group.

- **Messaging System Recipients** - Mail-enabled objects
- **Computers** - Returns computers only
- **Custom** - Returns all objects regardless of objectClass. Be sure to add an objectClass
  predicate on the Database tab to avoid unpredictable results.

  Be sure to combine an external data source with the directory to search directory objects on the
  Database tab to avoid unpredictable results.

- **Users, Contacts, and Groups** - Any user, contact, or group, whether mail-enabled or not.

NOTE: The _Computers_ and _Contact_ object types are not supported in a Microsoft Entra ID identity
store.

**Start in**

Click this button to select the containers to search in. The query would search for objects only in
this container and its sub-containers to determine a group’s membership.

**Preview**

Enables you to preview the results returned with the criteria specified on all tabs of the Query
Designer dialog box. This is a check to ensure the accuracy of data before changes are committed to
the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.

### Tabs

The Query Designer has the following tabs:

- [Query Designer - General tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
- [Query Designer - Storage tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
- [Query Designer - Filter Criteria tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
- [Query Designer - Include/Exclude tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
- [Query Designer - Database tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
- [Query Designer - Script tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
- [Query Designer - Password Expiry Options tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)[Query Designer - Password Expiry Options tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
  (only available for Smart Groups with a password expiry condition)

NOTE: The **Storage** and **Script** tabs are not available for groups in a Microsoft Entra ID
identity store.

**See Also**

- [Group Properties](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)
- [Group properties - Smart Group/Query Designer tab](/docs/directorymanager/11.0/user-guide/group-management/group-properties.md)

# Query Designer - Password Expiry Options tab

The **Password Expiry Options** tab is only available for password expiry groups. You can create a
password expiry group by selecting the **Password Expiry** group option on the Welcome page of the
**Create Group** wizard.

A password expiry group is a Smart Group whose membership contains users whose identity store
account passwords are approaching their expiry dates. Members of this group are notified by email to
reset their passwords. On doing so, they are automatically removed from group membership.

On the **Password Expiry Options** tab of the Query Designer, you can define the password expiry
policy for the group. Based on this policy and the users' PWDLASTSET attribute, GroupID creates this
group with users whose passwords will soon expire.

When the group is updated, GroupID will add/remove users from the group and send email notifications
to all members.

You can also include disabled users and users whose password never expire to the password expiry
group.

## Domain Expiration Policy

Specify the maximum password age. The default age is 42 days. This setting does not affect your
domain security settings on the directory server.

## Expiration Range Policy

This policy defines when the user is added in the password expiry group. For example, take a domain
security policy configured with a maximum password age of 30 days. Setting the expiration range
policy to 10 days includes users who have passwords aged 20 days or older in the password expiry
group.

### Include disabled users

Select this check box to include disabled user accounts in the new group.

### Include users whose password never expires

Select this check box to include users with the **Password never expires** setting enabled, in group
membership.

## Send email after update

Select this check box to send a password expiry warning email to group members each time group
membership is updated either manually or through a scheduled job.

This email contains a URL that redirects users to a Password Center portal for changing their
identity store account passwords. (The administrator specifies this URL while configuring an SMTP
server for the identity store.)

The **Send email after update** options is enabled after the group is created.

Warning emails are not sent to group members (users) whose passwords are set to 'never expire'. Such
users are included in group membership when you select the **Include users whose password never
expires** check box or add such users to the **Include** list on the
[Query Designer - Include/Exclude tab](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md).

For warning emails to be sent, you must have an SMTP server configured for the identity store.

## Preview

Use this button to preview results obtained with the current settings on all tabs of the **Query
Designer** dialog box. This is a check to ensure the accuracy of data before changes are committed
to the directory. On clicking it, results are displayed on the following two tabs at the bottom of
the dialog box:

- Directory tab: displays the results for all the options set on all the tabs of the Query Designer
  dialog box.
- Advanced tab: displays the results from the selected external data source when you click the
  Execute button on the Advanced tab of the dialog box.

## Display preferences

The attributes of the objects displayed on the **Directory** and **Advanced** tabs are set using the
context (right-click) menu of each column header on the tab. Options are:

| Column header's context menu option | Description                                                                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Size All Columns to Fit             | Set the column size of each column to fit its content.                                                                                                        |
| `<Attribute Name>`                  | The names of the attributes currently displayed on the tab. Clear the check box for an attribute to remove it from the **Directory** tab.                     |
| **More**                            | Select additional attributes to display on the tab. After adding attributes, re-launch the **Directory** tab to refresh the list of the attributes displayed. |

In addition to the column header display options, the **Directory** tab also provides object display
options that are available when you right-click an object. Options are:

| Object's Context Menu Option | Description                                                                                                                                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add to Exclude               | Add the object to the Exclude list so that it cannot be added to the group's membership.                                                                                         |
| Export                       | Export the selected object's information to a comma-separated value (csv) or XML file. The export action exports only the attributes displayed on the tab.                       |
| Export All                   | Export the information of all objects on the **Directory** tab to a comma-separated value (csv) or XML file. The export action exports only the attributes displayed on the tab. |

**Preview**

Enables you to preview the results returned with the criteria specified on all tabs of the Query
Designer dialog box. This is a check to ensure the accuracy of data before changes are committed to
the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.

**See Also**

- [Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)

# Query Designer - Script tab

This tab is read-only and displays any script that has been added for the group. The scripting
feature enables administrators to manipulate group memberships and the Query Designer dialog
attributes (except for Include and Exclude attributes).

If no script has been added for the group, the box on this tab is blank.

**Load Default Script**

Displays the script based on the query set by the user.

**Compile Script**

Compile the script to determine if there are any errors which would prevent the code from loading or
executing. While compiling your script will verify the code is free of syntactical errors, it does
not guarantee that the code is free from logical errors.

**References**

Displays the script reference. A script references file contains information about the run-time
requirements of a library or component, such as which files are needed, how they are to be
registered, and where on the host machine they should be installed.

**Preview**

Enables you to preview the results returned with the criteria specified on all tabs of the Query
Designer dialog box. This is a check to ensure the accuracy of data before changes are committed to
the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.

**See Also**

- [Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)

# Query Designer - Storage tab

Settings on the Storage tab are available when the ‘Messaging System Recipients’ option is selected
in the **Find** list.

For the ‘Messaging System Recipients’ option, the default settings on the Storage tab retrieve all
mailboxes, irrespective of any server or mailbox store. You can apply a filter to mailboxes you want
the query to return.

If filters are specified, the query will return only mailboxes on the specified server or mailbox
store. This filter does not affect custom recipients, public folders, and distribution lists.

**Mailbox on any Server**

Returns all mailboxes. No filters apply with this selection.

**Mailbox on this Server**

Returns mailboxes from the server you select from the drop-down list.

**Mailbox on this MailStore**

Returns mailboxes from the mailbox store you select from the drop-down list.

**Preview**

Enables you to preview the results returned with the criteria specified on all tabs of the Query
Designer dialog box. This is a check to ensure the accuracy of data before changes are committed to
the directory.

**OK**

Saves settings and closes the dialog box.

**Cancel**

Discards settings and closes the dialog box.

**LDAP Query**

View the provider query in the LDAP Query box.

**See Also**

- [Query Designer](/docs/directorymanager/11.0/user-guide/group-management/smart-groups.md)
