# Portal Settings

You can fine-tune your portal pages by customizing display options. This also enables you to personalize the GroupID portal.

These settings are saved for a user with respect to the identity store. When this user logs on to another GroupID portal for the same identity store, the settings apply there too.

What do you want to do?

- [Set Identity Store mode](#Set-Identity-Store-mode)
- [Set a language for notifications](#Set-a-language-for-notifications)
- [Set the time zone](#Set-the-time-zone)
- [Set a default start page](#Set-a-default-start-page)
- [Set the number of history items to show on the home page](#Set-the-number-of-history-items-to-show-on-the-home-page)
- [Set the number of history items to show for objects](#Set-the-number-of-history-items-to-show-for-objects)
- [Set the number of recent objects to show](#Set-the-number-of-recent-objects-to-show)
- [Set the default domains for search lists](#Set-the-default-domains-for-search-lists)
- [Set the number of results to show on a page](#Set-the-number-of-results-to-show-on-a-page)
- [Show additional group ownership in My Groups](#Show-additional-group-ownership-in-My-Groups)
- [Show additional group ownership in My Expiring Groups](#Show-additional-group-ownership-in-My-Expiring-Groups)
- [Show additional group ownership in My Expired Groups](#Show-additional-group-ownership-in-My-Expired-Groups)
- [Show additional group ownership in My Deleted Groups](#Show-additional-group-ownership-in-My-Deleted-Groups)
- [Display additional group ownership in my Smart Groups](#Display-additional-group-ownership-in-my-Smart-Groups)
- [Display additional group ownership in my Dynasties](#Display-additional-group-ownership-in-my-Dynasties)
- [Display Additional Manager Direct Reports](#Display-Additional-Manager-Direct-Reports)
- [Reset default user options](#Reset-default-user-options)

## Set Identity Store mode

GroupID portal works with a single identity store. However, GroupID also enables administrators to link different identity stores. If an administrator creates a GroupID Portal and associates it with the linked identity stores, the portal users can
view the data from the linked identity stores at the same time, rather than having to switch identity stores.

Via Portal settings, you can choose either of the two modes by following these steps:

1. Click the __Settings__ icon at the top of the page.
2. From the __Identity Store Mode__ list, select one of the following mode:

   - Stand-alone mode
   - Linked mode
3. Click __Save__.

## Set a language for notifications

GroupID generates a number of notifications that are, by default, sent to users in the English language. However, a user can opt to receive notifications in a different language by personalizing the language settings from the __User Settings__ panel in the portal.

However, there are a few exceptions to it. See the [Localization](/versioned_docs/groupid_11.0/groupid/admincenter/notification/overview.md#Localization) topic for more information.

1. Click the __Settings__ icon at the top of the page.
2. From the __Notification Language__ list, select a language for receiving the notifications in.
3. Click __Save__.

## Set the time zone

You can set the portal's date and time for your time zone.

1. Click the __Settings__ icon at the top of the page.
2. In the __User Time Zone__ list, select the time zone for your region.
3. Click __Save__.

## Set a default start page

You can set the first page you see when you log into the portal.

1. Click the __Settings__ icon at the top of the page.
2. From the __Default startup page__ list, select a page to set as your start page.
3. Click __Save__.

## Set the number of history items to show on the home page

You can specify the number of history items to display in the History section on the portal's home page.

1. Click the __Settings__ icon at the top of the page.
2. In the __History items to display on home page__ box, set the maximum number of history items to be displayed on the portal's home page.
3. Click __Save__.

History is displayed if the administrator has enabled history tracking for the identity store.

## Set the number of history items to show for objects

Set the number of history items to display on the History tab. This tab is displayed when viewing the properties for a User, Group, Contact or Mailbox.

This setting also controls the number of history items displayed on the [My History](/versioned_docs/groupid_11.0/groupid/portal/history/myhistory.md), [My Direct Reports' History](/versioned_docs/groupid_11.0/groupid/portal/history/mydirectreport.md), and [My Groups' History](/versioned_docs/groupid_11.0/groupid/portal/history/mydirectorygroup.md) pages.

1. Click the __Settings__ icon at the top of the page.
2. In the __History items to display__ box, set the number of history items to display on the pages that display history data.
3. Click __Save__.

History is displayed if the administrator has enabled history tracking for the identity store.

## Set the number of recent objects to show

The GroupID portal keeps a list of recently viewed objects on the left navigation bar. This provides a convenient way to navigate back to objects later. You can specify the number of recent objects to
be shown on the navigation bar.

1. Click the __Settings__ icon at the top of the page.
2. In the __Most recent objects__ box, type the number of recent objects to display on the navigation bar.
3. Click __Save__.

## Set the default domains for search lists

You can specify the default domains to be searched when you perform a search using the portal. If portal is running in:

- __Stand-alone mode__: domain of the associated identity store is listed.

- __Linked mode__: domains of all the linked identity stores are listed.

To select domain(s) for searches:

1. Click the __Settings__ icon at the top of the page.
2. In the __Domains to search__ list, select the domains that you use frequently in your searches.
3. Click __Save__.

## Set the number of results to show on a page

You can specify the number of search results to be displayed on a portal page.

1. Click the __Settings__ icon at the top of the page.
2. In the __Search results per page__ box, type or select the number of search results to display on a page.
3. Click __Save__.

## Show additional group ownership in My Groups

By default, the __My Groups__ page displays the groups that you are a primary owner for. You can, however, set this page to display those groups too for which you are an additional owner.

1. Click the __Settings__ icon at the top of the page.
2. Select the __Display additional group ownership in My Groups__ check box.

   Selecting this option also displays the history of these groups in the __My Groups History__ view.
3. Click __Save__.

## Show additional group ownership in My Expiring Groups

By default, the __My Expiring Groups__ page displays the soon-to-expire groups that you are the primary owner of. You can, however, set this page to display those expiring groups too for which you are an additional owner.

1. Click the __Settings__ icon at the top of the page.
2. Select the __Display additional group ownership in My Expiring Groups__ check box.
3. Click __Save__.

## Show additional group ownership in My Expired Groups

By default, the __My Expired Groups__ page displays the expired groups that you are the primary owner for. You can, however, set this page to display those expired groups too for which you are an additional owner.

1. Click the __Settings__ icon at the top of the page.
2. Select the __Display additional group ownership in My Expired Groups__ check box.
3. Click __Save__.

## Show additional group ownership in My Deleted Groups

By default, the __My Deleted Groups__ page displays the deleted groups that you are the primary owner for. You can, however, set this page to display those deleted groups too for which you are an additional owner.

1. Click the __Settings__ icon at the top of the page.
2. Select the __Display additional group ownership in My Deleted Groups__ check box.
3. Click __Save__.

## Display additional group ownership in my Smart Groups

By default, the __My Smart Groups__ page displays the Smart Group that you are the primary owner for. You can, however, set this page to display those Smart Groups too for which you are an additional owner.

1. Click the __Settings__ icon at the top of the page.
2. Select the __Display additional group ownership in My Smart Groups__ check box.
3. Click __Save__.

## Display additional group ownership in my Dynasties

By default, the My Dynasties page displays the Dynasties that you are the primary owner for. You can, however, set this page to display those Dynasties too for which you are an additional owner.

1. Click the __Settings__ icon at the top of the page.
2. Select the __Display additional group ownership in My Dynasties__ check box.
3. Click __Save__.

## Display Additional Manager Direct Reports

By default, the __My Direct Reports__ page displays the users that you are the primary manager for. You can, however, set this page to display those users too for which you are an additional manager.

1. Click the __Settings__ icon at the top of the page.
2. Select the __Display Additional Manager Direct Reports__ check box.
3. Click __Save__.

## Reset default user options

You can reset the settings on the __User Settings__ panel to their default values.

1. Click the __Settings__ icon at the top of the page.
2. On the __User Settings__ page, click __Reset Defaults__.

   The following table lists the default values that are reset:

   | Option | Default Value |
   | --- | --- |
   | Identity Store Mode | Stand-alone |
   | Notification Language | English |
   | User Time Zone | The time zone set on the GroupID server machine. |
   | Default startup page | Welcome |
   | History items to display on home page | 10 |
   | History items to display | 10 |
   | Most recent objects | 5 |
   | Domains to Search | Entire Directory |
   | Search results per page | 25 |
   | Display additional group ownership check boxes | Not selected |
   | Display Additional Manager Direct Reports | Not selected |

__See Also__

- [My History](/versioned_docs/groupid_11.0/groupid/portal/history/myhistory.md)
- [My Groups' History](/versioned_docs/groupid_11.0/groupid/portal/history/mydirectorygroup.md)
- [My Groups](/versioned_docs/groupid_11.0/groupid/portal/group/mygroups.md)
- [My Expiring Groups](/versioned_docs/groupid_11.0/groupid/portal/group/myexpiringgroups.md)
- [My Expired Groups](/versioned_docs/groupid_11.0/groupid/portal/group/myexpiredgroups.md)
- [My Deleted Groups](/versioned_docs/groupid_11.0/groupid/portal/group/mydeletedgroups.md)
