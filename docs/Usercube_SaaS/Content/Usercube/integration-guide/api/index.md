---
sidebar_position: 45
title: API
---

# API

Agent and server expose a REST API.

## OpenAPI Definition

:::note
This feature is optional and must be activated by the Swagger settings section. See the Application Settings topic for additional information.
:::

The page `[Usercube application's URL]/swagger` can be used to explore and test the API.

This page is built by the [Swagger UI tool](https://swagger.io/tools/swagger-ui/ "Swagger UI tool") from the Identity Manager [OpenAPI](https://swagger.io/specification/ "OpenAPI") definition.

![Usercube server swagger page](../../../../../../static/images/Usercube_SaaS/Content/Resources/Images/swagger.png)

A function can have several versions. This is why the API description is split into several OpenAPI definition files.

Each definition file is accessible in JSON format on URL `[Usercube application's URL]/swagger/{version}/swagger.json`.

:::note
The Swagger UI page is accessible anonymously but each call from this page to the API must have an authenticated context. To do so, you only need to be logged to the application from the same browser instance (Authentication is carried by a cookie).
:::