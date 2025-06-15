# Customize Quick Search

In a Directory Manager portal, the quick search box is available at the top of each page. You can specify the schema attributes that quick search runs on, and the objects (group, user, contact) that can be searched. When a user enters a search string, the values
of all specified attributes are matched to return the results (allowed objects).

You can also specify a search operator that determines what part of the attribute value should match the search string.

What do you want to do?

- Specify Attributes for Quick Search
- Change the Search Operator
- Specify Searchable Objects

## Specify Attributes for Quick Search

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Search Forms__ in the left pane. Then click the __Quick Search Attributes__ tab.
5. On the __Quick Search Attributes__ tab, the __Name__ column lists the schema attributes whose values will be matched when portal users perform a search using the quick search box.  
   Click __Add__ to add an attribute to this list.
6. On the __Add Search Attribute__ dialog box, select a schema attribute in the __Attribute__ drop-down list and click __OK__.  
   The attribute is displayed in the __Name__ column on the __Quick Search Attributes__ tab.  
   To remove an attribute, click __Remove__ for it.
7. Click __Save__.

## Change the Search Operator

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Search Forms__ in the left pane. Then click the __Quick Search Attributes__ tab.
5. In the __Quick Search Operator__ drop-down list, select an option.

   - __Equal__ - looks up the values of the attributes listed in the _Name_ column and returns records with values that exactly match the search string.
   - __Contains__ - looks up the values of all attributes listed in the _Name_ column and returns records that contain the string anywhere in their values.
   - __Starts with__ - looks up the values of the attributes listed in the _Name_ column and returns records with values starting with the search string.
   - __Ends with__ - looks up the values of all attributes listed in the _Name_ column and returns records with values ending with the search string.
6. Click __Save__.

## Specify Searchable Objects

1. In Admin Center, select __Applications__ in the left pane.  
   On the __GroupID Portal__ tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select __Settings__.
3. Select an identity store under __Design Settings__ to customize the portal for it.  
   All identity stores linked with the portal are listed under __Design Settings__. You can design a different portal for each of these.
4. Click __Search Forms__ in the left pane. Then click the __Quick Search Attributes__ tab.
5. You can specify the object type(s) to be searched when users perform a search using the quick search function in the portal.  
   Select any or all three __User__, __Group__, and __Contact__ check boxes next to __Quick Search Objects__ to make that object type searchable in quick search.
6. Click __Save__.

__See Also__

- [Customize Search Forms](searchforms.md)
- [Customize Search Results](searchresults.md)
