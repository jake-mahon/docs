---
sidebar_position: 1007
title: Request APIs via Postman
---

# Request APIs via Postman

This guide shows how to configure Postman to be able to request Identity Manager's API.

## Get an Access Token

Get an access token by proceeding as follows:

1. Launch Postman.
2. Create a new request by clicking on **+ New** then **Request**.

   ![Postman: New Request](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Postman_newRequest.png)
3. Fill in the fields and click on **Save to Identity Manager**.

   ![Postman: New Request Fields](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Postman_requestFields.png)
4. Fill in the authentication information as follows:

   ![Postman: Authentication](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Postman_authentication.png)

   * **Method**: POST
   * **URL**: /connect/token
   * **Body**:
     * **client\_id**: @
     * **client\_secret**: 
     * **scope**: usercube\_api
     * **grant\_type**: client\_credentials
5. Click on **Send** and get the access token from the response body.

   ![Postman: Access Token](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Postman_accesstoken.png)

## Use an Access Token

Use an access token by proceeding as follows:

1. Create a new request in Postman.
2. Fill in the authorization information as follows:

   ![Postman: Authorization](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Postman_authorization.png)

   * **Method**: GET
   * **URL**: /?api-version=1.0
   * **Authorization**:
     * **TYPE**: Bearer Token
     * **Token**: 
3. Click on **Send** and get the result from the response body.

   ![Postman: Access Token Result](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Postman_accesstokenresult.png)

## Create a Combined Request

Create a combined request by proceeding as follows:

1. Create a new request in Postman.
2. Fill in the authorization information as follows:

   ![Postman: Authorization (Combined Request)](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Postman_authorizationCombined.png)

   * **Method**: GET
   * **URL**: /?api-version=1.0
   * **Authorization**:
     * **TYPE**: OAuth 2.0
     * **Header Prefix**: Bearer
3. Click on **Get New Access Token** and fill in the fields as follows:

   ![Postman: New Access Token Fields (Combined Request)](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Postman_newAccessTokenCombined.png)

   * **Token Name**: 
   * **Grant Type**: Client Credentials
   * **Access Token URL**: /connect/token
   * **Client ID**: @

     :::note
Do not replace @ with its encoding.
     :::
   * **Client Secret**: 
   * **Scope**: usercube\_api
   * **Client Authentication**: Send client credentials in body
4. Click on **Request Token** to get the token.

   ![Postman: Get Token (Combined Request)](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Postman_getTokenCombined.png)
5. Click on **Use Token** and **Send** and get the result from the response body.

   ![Postman: Access Token Result (Combined Request)](../../../../../../../../static/images/Usercube_6.2/Content/Resources/Images/Postman_accesstokenresultCombined.png)