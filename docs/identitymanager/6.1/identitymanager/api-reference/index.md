# How-Tos

These guides will help you use Usercube's API with practical step-by-step procedures.

- #### [Request Usercube's API via Postman](/docs/identitymanager/6.1/identitymanager/troubleshooting-support/how-to-guides/postman-requests.md)
  Configure Postman to be able to request Usercube's API.

# API

Agent and server expose a REST API.

## OpenAPI Definition

This feature is optional and must be activated by the
[Swagger settings section](/docs/identitymanager/6.1/identitymanager/installation-setup/server-configuration.md)

The page `[Usercube application's URL]/swagger` can be used to explore and test the API.

This page is built by the [Swagger UI tool](https://swagger.io/tools/swagger-ui/) from the Usercube
[OpenAPI](https://swagger.io/specification/) definition.

![Usercube server swagger page](/img/versioned_docs/identitymanager_6.1/identitymanager/integration-guide/api/swagger.webp)

A function can have several versions. This is why the API description is split into several OpenAPI
definition files.

Each definition file is accessible in JSON format on URL
`[Usercube application's URL]/swagger/{version}/swagger.json`.

The Swagger UI page is accessible anonymously but each call from this page to the API must have an
authenticated context. To do so, you only need to be logged to the application from the same browser
instance (Authentication is carried by a cookie).
