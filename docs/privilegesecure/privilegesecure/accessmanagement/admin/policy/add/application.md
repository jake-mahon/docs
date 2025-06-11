# Add Application

Applications are a special type of user that allow external entities to interact with Privilege Secure via the REST API interface. Capabilities within the product are identical to standard users with the exception that Applications are not able to log on through the product UI. Each Application has a unique name that is used to identify the application calling the API; authentication is via a combination of certificate serial number and API key.

![addapplication](/img/product_docs/privilegesecure/privilegesecure/accessmanagement/admin/policy/add/addapplication.webp)

Follow the steps to add an Application to an Access Policy.

__Step 1 –__ Navigate to the Users & Groups page.

__Step 2 –__ Click Add Application.

__Step 3 –__ Enter a new Application Name in the provided field. This will be displayed to represent the application.

__Step 4 –__ Enter a Certificate Serial Number in the provided field. This is the serial number of the client certificate used to authenticate the application. The certificate should be signed by a Certificate Authority (CA). Ensure the certificate is trusted by IIS by adding the CA trusted root certificate to the Trusted Root Certification Authorities on the Privilege Secure server.

__Step 5 –__ Enter the API Key. This is the unique key used as part of Application authentication.

__Step 6 –__ Click the Save button when finished.

The new Applicationhas been added to the the Users & Groups page.
