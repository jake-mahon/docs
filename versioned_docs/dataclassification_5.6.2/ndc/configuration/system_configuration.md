# System Configuration Settings

This section contains information on additional configuration settings specific to different source types.

- [AD Domains Excluded](#AD-Domains-Excluded)
- [Attachments Excluded](#Attachments-Excluded)
- [No Index](#No-Index)
- [Proxy Server](#Proxy-Server)
- [Suspend Services (Scheduler)](#Suspend-Services-Scheduler)

[![Closed](/img/versioned_docs/transparent.gif)](javascript:void(0))[AD Domains Excluded](javascript:void(0))

The AD Domains Excluded list is used to disable Active Directory expansion for certain domain names. This is useful in a multi-Domain forest, where the Netwrix Data Classification server does not have access to all domains within the forest.

![configaddomainsexcluded](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/configaddomainsexcluded.png)

[![Closed](/img/versioned_docs/transparent.gif)Attachments Excluded](javascript:void(0))

When indexing files from that potentially contain attachments (SharePoint List Items) the list of file locations that will be ignored is defined by the Attachments Excluded list. The definitions in this list may be viewed and modified via the Attachments Excluded form:

![configattachementsexcluded](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/configattachementsexcluded.png)

Any file with a path that matches one of these patterns will be ignored. Wildcards may be used anywhere in the pattern definition, with:

- The asterisk character (\*) matching any sequence of characters
- The question mark character (?) matching any single character

[![Closed](/img/versioned_docs/transparent.gif)No Index](javascript:void(0))

Sometimes an application may wish to remove selected documents from all search results. This may be implemented by specifying No Index entries.

![confignoindex](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/confignoindex.png)

Any number of URLs (or Filenames) may be entered and none of these will ever appear in search results. Wildcards may be used anywhere in the pattern definition, with:

- The asterisk character (\*) matching any sequence of characters
- The Question mark character (?) matching any single character

[![Closed](/img/versioned_docs/transparent.gif)Proxy Server](javascript:void(0))

The Proxy Server form may be used to define a proxy server to be used when crawling websites, the proxy server is not used for SharePoint crawling.

![configproxyserver](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/configproxyserver.png)

Set Bypass Local to Yes to bypass the proxy server for local addresses (localhost etc).

Any other exclusions that should not go through the proxy server should be defined in the Exceptions list.

[![Closed](/img/versioned_docs/transparent.gif)Suspend Services (Scheduler)](javascript:void(0))

All Netwrix Data Classification services run as Windows services. They are responsible for building the search index and classifying documents against the registered taxonomies.

It can be useful to suspend these services from running so that they do not impact query performance during the peak hours of the working day. Sometimes it may be useful to suspend these services for some lower priority sources but have them continue to process higher priority sources.

![configsuspendservices](/img/versioned_docs/dataclassification_5.6.2/ndc/configuration/configsuspendservices.png)

Service suspensions can be configured in the following ways:

- Source—Which source types the suspension is in place for: all source types, specific source types (SharePoint, Web etc) or specifically against Re-Indexing operations.
- Service—Which services are affected by the suspension: All Services, or, a choice of: NDC Collector, NDC Indexer, NDC Classifier.
- Day/Times—Allows the configuration of which days and times the suspension will be in place.
