# App Tokens Page

The App Tokens page provides the ability to generate and manage the app tokens needed to send data to Threat Manager. An app token is used by Threat Manager and/or the Activity Monitor to push Active Directory activity data into the Threat Manager database. An app token is used by Access Analyzer to push a list of files containing sensitive data into the Threat Manager database.

![page](/static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.png)

It is necessary to generate an app token for each product integration. The App Tokens table displays the following information for each generated app token:

- Name – Name of the app token
- Description – Description for the app token
- Enabled – If set to ON, allows access to the generated app token. If set to OFF, disallows access for the generated app token.

## Generate an App Token

Follow the steps to generate an app token.

__Step 1 –__ On the Integrations page, click __Add New Integration__.

![apptoken](/static/img/product_docs/threatmanager/threatmanager/administration/configuration/integrations/apptoken.png)

__Step 2 –__ In the Type drop-down menu, select __App Token__.

__Step 3 –__ Enter a Name for the token in the Name field, and a Description for the token in the Description field.

___RECOMMENDED:___ Identify the data source for this app in either the Name or Description fields.

__Step 4 –__ Click Add to generate the app token.

The app token is added to the App Tokens list in the Integrations box.

## View and Copy the App Token

To view the details for an app token, click on the app token name in the Integrations box. The top of the page displays the app token name and the description. These can be modified by clicking on the name or description and entering the desired information.

![details](/static/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/integrations/details.png)

Ensure that the app token is enabled for sending data to Threat Manager. In the General box, verify that the status is set to __ON__.

Follow the instructions to copy the app token.

__Step 1 –__ In the App Token box, click __Copy Token__.The app token is copied to the clipboard.

__Step 2 –__ Paste the app token to the desired location.

__Step 3 –__ Click __Save__ to save any changes to the page.

Repeat this process to copy any desired app tokens.
