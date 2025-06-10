# Request APIs via Postman

This guide shows how to configure Postman to be able to request Identity Manager's API.

## Get an Access Token

Get an access token by proceeding as follows:

1. Launch Postman.
2. Create a new request by clicking on __+ New__ then __Request__.

   ![Postman: New Request](/img/product_docs/usercube/usercube/integration-guide/api/how-tos/request-postman/postman_newrequest.png)
3. Fill in the fields and click on __Save to Identity Manager__.

   ![Postman: New Request Fields](/img/product_docs/usercube/usercube/integration-guide/api/how-tos/request-postman/postman_requestfields.png)
4. Fill in the authentication information as follows:

   ![Postman: Authentication](/img/product_docs/usercube/usercube/integration-guide/api/how-tos/request-postman/postman_authentication.png)

   - __Method__: POST
   - __URL__: `URL IdentityManager`/connect/token
   - __Body__:
     - __client_id__: `OpenIdClient id`@`FQDN Usercube`
     - __client_secret__: `OpenIdClient secret`
     - __scope__: usercube_api
     - __grant_type__: client_credentials
5. Click on __Send__ and get the access token from the response body.

   ![Postman: Access Token](/img/product_docs/usercube/usercube/integration-guide/api/how-tos/request-postman/postman_accesstoken.png)

## Use an Access Token

Use an access token by proceeding as follows:

1. Create a new request in Postman.
2. Fill in the authorization information as follows:

   ![Postman: Authorization](/img/product_docs/usercube/usercube/integration-guide/api/how-tos/request-postman/postman_authorization.png)

   - __Method__: GET
   - __URL__: `<URL IdentityManager>/<URI of the API to call>?api-version=1.0`
   - __Authorization__:
     - __TYPE__: Bearer Token
     - __Token__: `<Access Token>`
3. Click on __Send__ and get the result from the response body.

   ![Postman: Access Token Result](/img/product_docs/usercube/usercube/integration-guide/api/how-tos/request-postman/postman_accesstokenresult.png)

## Create a Combined Request

Create a combined request by proceeding as follows:

1. Create a new request in Postman.
2. Fill in the authorization information as follows:

   ![Postman: Authorization (Combined Request)](/img/product_docs/usercube/usercube/integration-guide/api/how-tos/request-postman/postman_authorizationcombined.png)

   - __Method__: GET
   - __URL__: `<URL IdentityManager>/<URI of the API to call>?api-version=1.0`
   - __Authorization__:
     - __TYPE__: OAuth 2.0
     - __Header Prefix__: Bearer
3. Click on __Get New Access Token__ and fill in the fields as follows:

   ![Postman: New Access Token Fields (Combined Request)](/img/product_docs/usercube/usercube/integration-guide/api/how-tos/request-postman/postman_newaccesstokencombined.png)

   - __Token Name__: `<Token Name>`
   - __Grant Type__: Client Credentials
   - __Access Token URL__: `<URL IdentityManager>/connect/token`
   - __Client ID__: `<OpenIdClient id>@<FQDN Usercube>`

     Do not replace ```@``` with its encoding.
   - __Client Secret__: `<OpenIdClient secret>`
   - __Scope__: usercube_api
   - __Client Authentication__: Send client credentials in body
4. Click on __Request Token__ to get the token.

   ![Postman: Get Token (Combined Request)](/img/product_docs/usercube/usercube/integration-guide/api/how-tos/request-postman/postman_gettokencombined.png)
5. Click on __Use Token__ and __Send__ and get the result from the response body.

   ![Postman: Access Token Result (Combined Request)](/img/product_docs/usercube/usercube/integration-guide/api/how-tos/request-postman/postman_accesstokenresult.png)
