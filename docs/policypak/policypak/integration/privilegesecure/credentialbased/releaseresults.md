# Credential Release Results

To see the action, right-click on the application and choose __Run with Netwrix Privilege Secure__ (or double-click it if the __Apply on demand__ option was unchecked.

![credential_release_results](/img/product_docs/policypak/policypak/integration/privilegesecure/credentialbased/credential_release_results.webp)

You’ll launch the process as ```EastSalesUser1```, and give your Active Directory credentials, Two-Factor (brokered by Netwrix Privilege Secure) and wait for the Activity Session to be created.

![credential_release_results_1](/img/product_docs/policypak/policypak/integration/privilegesecure/credentialbased/credential_release_results_1.webp)

The result is that NotepadP is launched as ```EastSalesAdmin9```. Because Netwrix Privilege Secure is brokering the operation and the Netwrix Endpoint Policy Manager (formerly PolicyPak) Least Privilege Manager client is changing the context to that user.

![credential_release_results_2](/img/product_docs/policypak/policypak/integration/privilegesecure/credentialbased/credential_release_results_2.webp)
