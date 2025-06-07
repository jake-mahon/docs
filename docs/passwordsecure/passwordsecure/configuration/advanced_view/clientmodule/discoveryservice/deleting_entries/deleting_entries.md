# Deleting entries

After creating an automatic __Password Reset__ via the __Conversion Wizard__, the data is no longer required and can be deleted. The discovered entries have a __link__ to the relevant __Discovery Service Task__ that was executed and can be found and displayed using the filter function.

## Deletion process

The discovered data in the __Discovery Service__ cannot simply be deleted and removed from the __Discovery Service entries__. As the entries have a __link to the Discovery Service Task__, it is necessary to delete the discovered entries via the __Discovery Service Task__ that was created. If entries were discovered using a joint __Discovery Service Task__, it is not possible to simply delete them. This is the case if two different users have carried out a scan on the same area. If you delete one of the two __Discovery Service Task__, only the entries that had a single link to this __Discovery Service Task__ will be deleted. The entries for the other __Discovery Service Task__ will be retained and must be deleted via the associated __Discovery Service Task__.
You can find out which __Discovery Service Task__ found a particular entry by selecting the entry via the __Conversion Wizard__.

![Conversion Wizard.](/static/img/product_docs/passwordsecure/passwordsecure/configuration/advanced_view/clientmodule/discoveryservice/deleting_entries/deleting_entries_1-en.png)

## Deleting entries by changing the settings in the System Task

If the IP range for an existing __Discovery Service Task__ is changed and the __Discovery Service Task__ is then executed for this new IP range, the previously discovered entries from the previous executed __Discovery Service Task__ will be deleted from the __Discovery Service__. If you want to carry out a __Discovery Service Task__ for a different IP range, you should create a new __Discovery Service Task__. This will prevent any already discovered entries from being deleted. However, if the existing entries are no longer required, you can delete them by using the same __Discovery Service Task__ with a different IP range.

1. Task B only scans the IP address: 192.168.150.1
2. Only the entries for the IP address 192.168.150.1 are discovered
3. Task A is changed and now scans the IP address:192.168.150.2
4. Result:
5. Only the entries from the IP address 192.168.150.2 are discovered
6. Entries for IP address 192.168.150.1 are deleted
7. Exception:
8. Task B scans the IP address: 192.168.150.1
9. The same entries for IP address 192.168.150.1 are discovered as for 1.
10. A new scan using Task A with a different IP address 192.168.150.2 will not delete the data from Task B

NOTE: The __Password Resets__ and __passwords__ created using the __Conversion Wizard__ are not deleted when the __Discovery Service Tasks__ are deleted.
