# Login to EPE REST Service APIs

You can use APIs to login to the EPE REST Service:

- POST api/account/login (Digest)
- POST api/account/logoff (Digest)
- POST Token (Bearer)

## POST api/account/login (Digest)

This API is used to login under a specified account.

This operation returns a session hash value in the body of the response, that can be used for
api/Epe/CheckPassword requests. To use this value in an api/Epe/CheckPassword request, provide it in
the header of the request.

Authentication required – No

Required Input Parameters

```
{
"username":"username",
"password":"password"
}
```

Example

![POST api/account/login (Digest)](/img/versioned_docs/threatprevention_7.4/threatprevention/eperestsite/login.png)

## POST api/account/logoff (Digest)

This API is used to log off from a specified session.

This operation makes session for the specified account and the hash value is not valid anymore.

Authentication required – Digest

Required Header Input Parameters

```
"User”: <username>
"Authorization”:”Hash”
"Hash": <hashvalue>
```

Example

![POST api/account/logoff (Digest)](/img/versioned_docs/threatprevention_7.4/threatprevention/eperestsite/logoff.png)

## POST Token (Bearer)

This API is used to login under a specified account.

This operation returns an access_token value in the body of the response, that can be used for
api/Epe/CheckPassword requests. To use this value in an api/Epe/CheckPassword request, provide it in
the header of the request.

Authentication required – Bearer

Required Input Parameters (TEXT Format)

```
userName=<username>&password=<password>&grant_type=password&client_Id=self
```

Example

![POST Token (Bearer)](/img/versioned_docs/threatprevention_7.4/threatprevention/eperestsite/token.png)
