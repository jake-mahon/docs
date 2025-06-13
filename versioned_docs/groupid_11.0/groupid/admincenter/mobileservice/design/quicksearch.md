# Manage Search Attributes

In the GroupID mobile app, users can search for directory objects (groups, users, contacts) in an identity store. You can specify the schema attributes that search is performed on. When a user enters a search string, the values of the specified attributes are matched to return the results.

You can also specify a search operator that determines what part of the attribute value should match the search string.

What do you want to do?

- [Specify Search Attributes](#specify-search-attributes)

## Specify Search Attributes

1. In Admin Center, select __Applications__ in the left pane.
2. On the __Mobile Service__ tab, click the ellipsis button for a service and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under __Design Settings__. You can design a different app for each of these.
4. Click __Search Forms__ in the left pane.
5. On the __Search Forms__ page, click the __Quick Search Attributes__ tab.
6. On the __Quick Search Attributes__ tab, the __Name__ column lists the schema attributes whose values will be matched when a user enters a search
   string in the app's directory search box. Click __Add__ to add an attribute to this list.
7. On the __Add Search Attribute__ dialog box, select a schema attribute in the __Attribute__ drop-down list and click __OK__.  
   The attribute is displayed in the __Name__ column on the __Quick Search Attributes__ tab.  
   To remove an attribute, click __Remove__ for it.
8. Click __Save__.

To specify an operator:

1. In the __Quick Search Operator__ drop-down list on the __Quick Search Attributes__ tab, select an option.

   - __Equal__ - looks up the values of the attributes listed in the __Name__ column and returns records with values exactly matching the search string.
   - __Contains__ - looks up the values of the attributes listed in the __Name__ column and returns records that contain the string anywhere in their values.
   - __Starts with__ - looks up the values of the attributes listed in the __Name__ column and returns records with values starting with the search string.
   - __Ends with__ - looks up the values of the attributes listed in the Name column and returns records with values ending with the search string.
2. Click __Save__.

__See Also__

- [Mobile Service](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/overview.md)
- [Design Settings](/versioned_docs/groupid_11.0/groupid/admincenter/mobileservice/design/overview.md)
