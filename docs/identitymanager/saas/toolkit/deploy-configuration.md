# Deploy the Configuration

This guide shows how to deploy the XML configuration, in order to build and use the Identity Manager
application.

## Overview

The process for configuration deployment varies according to the situation:

- when working on-premise, the configuration must be deployed locally;
- when working SaaS, the configuration must be deployed remotely.

## Deploy the Configuration Locally

Deploy a local XML configuration by using
the[ Usercube-Deploy Configuration](/docs/identitymanager/saas/automation/executables/deploy-configuration.md)
executable and declaring at least:

- the configuration directory;
- the connection string of the database.

> ```
>
> ./identitymanager-Deploy-Configuration.exe -d "C:\Usercube\Conf" --database-connection-string "data source=.;Database=Usercube;Integrated Security=SSPI;Min Pool Size=10;encrypt=false;"
>
> ```

## Deploy the Configuration Remotely

Deploy a SaaS XML configuration by proceeding as follows:

1.  Log in for configuration deployment/export with the
    [ Usercube-Login ](/docs/identitymanager/saas/automation/executables/login.md) executable.

    Identity Manager provides an OpenID Connect (OIDC) authentication process in order to ensure
    strong security, visibility and ease of use.

    NETWRIX recommends using Identity Manager's dedicated in-house OIDC Identity Provider (IDP), but
    you can also use your own IDP if you want to manage authentication yourself.

    When using your own IDP, make sure that the IDP implements a valid OIDC protocol and serves id
    tokens.

    > For example, when using Identity Manager's IDP:
    >
    >                                 ```
    >
    > ./identitymanager-Login.exe
    >
    > ```
    >
    > ```

    > For example, when using another IDP:
    >
    >                                 ```
    >
    > Usercube-Login.exe --authority https://my_oidc_authentication_server.com --client-id
    > 34b3c-fb45da-3ed32
    >
    > ```
    >
    > ```

    Either method will open your default browser to `http://localhost:5005` where you will be
    redirected to the specified IDP and will be prompted to log in.

    Specify `--port <port>` if you want the login page to use another local port.

    If you have already successfully deployed or exported your SaaS configuration at least once,
    then there is no need to communicate the authentication information again. Go directly to
    step 4.

    However, if, since then, there has been a change in the identity deploying/exporting the
    configuration or in the Identity Provider used to log in at step 1, then go through the whole
    process again.

2.  Log in to the IDP to be redirected back to this screen:

    ![Usercube-Login.exe Success Screen](/img/product_docs/identitymanager/identitymanager/integration-guide/toolkit/how-tos/export-configuration/identitymanager-login_success_v602.webp)

    Once authenticated, an identification token is stored on your local machine for the
    authentication to Identity Manager's deployment and export processes.

3.  Copy the entire text within the blue square and send it to your Identity Manager administrator.

    The administrator will add the identity information to the configuration of your Identity
    Manager instance, to allow the configuration deployment/export.

4.  Deploy the configuration by using
    the[ Usercube-Deploy Configuration](/docs/identitymanager/saas/automation/executables/deploy-configuration.md)
    executable and declaring at least:

    - the configuration directory;
    - the deployment environment;
    - the API URL of your Identity Manager instance.
      > ```
      >
      > ./identitymanager-Deploy-Configuration.exe -d "C:\Usercube\Conf" --api-url https://my_usercube_instance.com --deployment-slot Development
      >
      > ```

    You can deploy the configuration by launching only the `Deploy-Configuration` executable until
    the authentication token expires. Then, the token must be refreshed via the `Login` executable
    before deploying again.

    The token served by Identity Manager's IDP expires after one hour.

# Plan Change Management

How to anticipate the deep changes in the organization's applications and processes due to Identity
Manager installation as a new IGA tool.

Change management is not only part of any IGA project. It is a full project in itself that requires
its own project officer, objectives, success indicators, etc. It starts on the very first day with
the project kickoff, and runs alongside the technical project.

## Overview

The applications and processes of the organization are about to change deeply. Change management is
crucial because it determines the future proper use of the solution and the gain that can be
achieved by the organization. It requires an upstream impact analysis in order to define the
strategy to adopt.

### Process

A digital project follows two parallel processes:

- The organizational and digital process used to design, build and deploy the solution.
- The human process urging staff to accept the solution, familiarize themselves with it, join and
  interact with the project.

Change management aims to support the teams throughout the human process.

![Process of Change Management](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/change-management/changemanagement_process.webp)

These processes include mandatory steps that all staff members have to go through, but not
necessarily at the same pace. For that reason, change managers can benefit from the use of personas,
i.e. creating characters that represent key populations.

## Participants and Artifacts

![Actors of Change Management](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/change-management/changemanagement_actors.webp)

The aim of a Project Management Officer concerning critical stakeholders is to enable:

- Decision makers to trigger holistic change in response to recurring factors in daily issues. This
  can be translated into promoting efforts towards the broader enterprise strategy, focusing on
  recurring challenges, identifying common denominators, not exceeding Project Management Office's
  capacity and promoting PMO's shifting value proposition.
- Managers to grow maturity and confidence in change management because they allow responsibility
  distribution throughout the organization. They need support in self-assessment and change
  management at varying degrees according to the strategic importance and complexity level of
  change. This can be translated into DIY change supports like templates, change coaches for
  tailored guidance, or change drivers for end-to-end execution.
- The employees impacted by change to enter the decision-making process at an early stage, thus
  improving change absorption. They must be engaged as active participants in shaping change
  decisions, in order to avoid extreme leader-dictated or consensus-based strategies.

| Input                               | Output                   |
| ----------------------------------- | ------------------------ |
| Upstream impact analysis (required) | Business ready to change |

## Run Change Management for Identity Manager

In order to profitably handle change management, any project should start with the question: **in
three years from now, what will be the (three to five) main facts attesting the success of this
project?** The answer will shape the strategy.

Whether Identity Manager replaces manual processes or an existing IGA tool, change management
methods are going to be the same. Only the analysis of impacted populations and the effort made to
onboard them can define the appropriate response.

IGA impact is based on data quality. Therefore, change management must encompass everything and
everyone that consumes and/or feeds data. All three population segments (decision makers, managers
and employees) are involved in data quality in one way or another. Hence, it is essential that they
understand IGA as an advantage instead of a constraint.

Run change management by proceeding as follows:

1. Identify the populations impacted by change. Below is an example of impacted populations that can
   vary enormously.

   ![Usual Populations](/img/product_docs/identitymanager/identitymanager/user-guide/deploy/change-management/changemanagement_populations.webp)

2. For all listed populations, estimate their size and the expected impact on them, through
   indicators like the frequency of their future use of the solution. Use personas to represent key
   population members, such as VIP users that don't use the application much, or users not feeling
   comfortable with computers.
3. According to the previous impact analysis, implement adjusted change management methods. You can
   get inspiration from the following examples.

|     | Population  | Size | Impact                 | Possible Actions                                                                                             |
| --- | ----------- | ---- | ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| 1   | All         | 500  | Low                    | Introduction email Public video Information article                                                          |
| 2   | End-Users   | 50   | High                   | Coffee corner: coffee break with the local support team offering tutorials and exercises on Identity Manager |
| 3a  | HR/Managers | 10   | High (daily use)       | Tutorials and exercises with a support team to get started quickly with Identity Manager                     |
| 3b  | HR/Managers | 10   | Medium (bimonthly use) | Step-by-step procedure video or flyer                                                                        |

##### Example 1

Informing relevant populations is essential. For large populations (ex.: 500 employees), an
introduction email can be sent to everyone or a video published on a public website or played on
screens visible in the workplace.

##### Example 2

A medium or large population (i.e. the size of a department in your organization) might be receptive
to informal meetings such as a coffee break with the local support team offering tutorials and
exercises on Identity Manager.

##### Example 3

Let us consider HR teams and managers which have a change impact depending on their frequency of use
of the application.

###### Example 3a

If they frequently use the application (i.e. daily use), they will benefit from tutorials and
exercises with a support team to get started quickly with Identity Manager.

###### Example 3b

If they infrequently use the application (i.e. bimonthly use), they may rather benefit from training
materials such as a step-by-step procedure video or flyer.

## Verify Change Management

In order to verify the process, change managers can rely on implemented indicators, in the same way
as for any project management situation.
