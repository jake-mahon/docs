# Select Processing Mode

At this step of the wizard, select processing (indexing) mode for your environment.

![processing_modes](/static/img/product_docs/dataclassification/ndc/install/initialconfiguration/processing_modes.png)

For starter and evaluation purposes, select Keyword mode.

Review the short description below and select mode:

## No Index

In this mode, the core search index will be disabled, heavily reducing the disk space requirements for the CSE files and improving overall document throughput for classification. Under this mode Search is not available and Browse functionality is not subject to security trimming. Recommended for data discovery, data security governance and compliance use cases.

## Keyword

In this mode the search index will be created; however, disk space required for the core search index will be of medium size. Both __Browse__ and __Search__ by keyword will be supported. Overall throughput is capable of supporting large number of documents (> 1M). Recommended for compliance, data discovery and classification rules tuning.

## Compound Term

In this mode you will get a fully featured index, supporting __Search__ by compound term. Consider that data storage will require more space, and overall throughput may decrease (compared to the Keyword mode). Recommended for knowledge management, data storage optimization, legal search, other content services.

Proceed with configuring processing settings. See [Processing Settings](/docs/product_docs/dataclassification/ndc/install/initialconfiguration/processingsettings.md) next.
