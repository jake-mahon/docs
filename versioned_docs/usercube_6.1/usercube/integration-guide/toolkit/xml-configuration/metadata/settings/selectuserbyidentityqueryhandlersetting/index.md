# SelectUserByIdentityQueryHandlerSetting

This attribute matches an end-user with a resource from the central repository.

Authorization mechanisms within Usercube rely on assigning a profile to a resource that stands for the end-user digital identity.

To that end, end-user authentication credentials are linked to such an identity using the following pattern:

1. authentication credentials are retrieved;
2. authentication credentials are trimmed using the ```AfterToken``` and/or ```BeforeToken``` attributes;
3. the trimmed result is matched against the ```ResourceIdentityProperty``` of resources with the entity type specified by ```OwnerEntityType```;
4. the matching resource is used to find a profile and authorization for that digital identity.

After modifying the authentication mode via ```SelectUserByIdentityQueryHandlerSetting```, Usercube server must be restarted. On a SaaS environment, contact your Usercube administrator.

## Examples

The following example links the authentication credentials of an end-user to its matching resource of EntityType __Directory_User__.

In this example, authentication has been set up using [Integrated Windows Authentication](/versioned_docs/usercube_6.1/usercube/integration-guide/network-configuration/server-configuration/end-users-authentication/index.md). In that case, the login used by the end-user is in the form ```DOMAIN/userName```.

The __AfterToken__ attribute parses the ```DOMAIN/userName``` string into ```userName```.

The parsed result ```userName``` is compared with ```AD_Entry:sAMAccountName``` property value of __Directory_User__ resources.

The matching __Directory_User__ resource is the resource that stands for the end-user identity within Usercube.

```

<SelectUserByIdentityQueryHandlerSetting
    ResourceIdentityProperty="AD_Entry:sAMAccountName"
    ResourceDisplayNameProperty="AD_Entry:displayName"
    OwnerPhotoTagProperty="Directory_User:PhotoTag"
    OwnerEntityType="Directory_User"
    AfterToken="\"/>

```

## Properties

| Property | Details |
| --- | --- |
| AfterToken   optional | __Type__    String   __Description__   Second character used to trim the authentication login.    The trimmed result is the content of the authentication login between ```AfterToken``` and ```BeforeToken```. If ```BeforeToken``` is empty, trimmed result is everything after ```AfterToken```. If ```AfterToken``` is empty, trimmed result is everything before ```BeforeToken```. |
| BeforeToken   optional | __Type__    String   __Description__   First character used to trim the authentication login.   The trimmed result is the content of the authentication login between ```AfterToken``` and ```BeforeToken```. If ```BeforeToken``` is empty, trimmed result is everything after ```AfterToken```. If ```AfterToken``` is empty, trimmed result is everything before ```BeforeToken```. |
| Identifier   default value: SelectUserByIdentityQueryHandler | __Type__    String   __Description__   Unique identifier of the setting. |
| OwnerEntityType   optional | __Type__    String   __Description__   Entity type of the resources used to store digital identities within Usercube. |
| OwnerPhotoTagProperty   optional | __Type__    String   __Description__   Photo property for Usercube users. |
| ResourceDisplayNameProperty   optional | __Type__    String   __Description__   Property used for displaying login data at the top right of the application. |
| ResourceIdentityProperty   optional | __Type__    String   __Description__   Identity-resource property supposed to match the authentication login used by the end-user. |
