# Postman: Authenticate using an API key

Postman: Authenticate using an API key

# Postman: Authenticate using an API key

You will need a userID and an API Key that has been generated for that user.Ref: [API Key Management](/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/apikeymanagement.md)

Follow the steps to authenticate using an API key.

__Step 1 –__ First, ensure the global variables are set by clicking the __eye__ icon in the upper right corner

![blobid0.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360047844814_blobid0_379x236.png)

__Step 2 –__ Then click __Edit__ to the left, on the ‘Globals’ line:

![blobid1.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360047844814_blobid1_760x393.png)

__Step 3 –__ Enter the ‘api\_key’ variable and copy-and-paste the API key for the user in the ‘Initial Value’ and ‘Current Value’ fields.

\*If required, enter the ‘base\_url’ variable and the URL for the Privilege Secure environment you are connecting to.

![blobid2.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360047844814_blobid2.png)

__Step 4 –__ Go to the Privilege Secure API collection in Postman.

__Step 5 –__ Expand the API Keys and click on __Authenticate using an API key__.

![blobid3.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360047844814_blobid3.png)

__Step 6 –__ Click on __Body__ and copy-and-paste the userId that is authorized on the API key entered in the global Variables.

![blobid4.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360047844814_blobid4.png)

__NOTE:__ The {{api\_key}} will pull the value from the global variable.

__Step 7 –__ Click on __Tests__.

![blobid5.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360047844814_blobid5_657x168.png)

__Step 8 –__ Cut-and-paste the lines below in the large field:

```var jsonData = JSON.parse(responseBody);  
postman.setGlobalVariable("current_jwt", jsonData.token);```

__Step 9 –__ In the upper left, click __Save__ or the down arrow to the left of Save and Save As to save the request.

![blobid6.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360047844814_blobid6_313x113.png)

__Step 10 –__ Click __Send__, you should see an output at the botton like the example below:

![blobid7.png](/img/versioned_docs/privilegesecurefordiscovery_2.21/privilegesecure/discovery/integrations/api/360047844814_blobid7_738x228.png)

Now you can send GET and POST requests.

Each 8 hours, you will have to run the ‘Authenticate using an API key’ POST request to refresh the token.
