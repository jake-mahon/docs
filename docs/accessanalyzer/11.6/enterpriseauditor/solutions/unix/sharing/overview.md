# 3.Sharing Job Group

The 3.Sharing job group highlights potentially insecure share configurations on Unix hosts.

![3.Sharing Job Group in the Jobs Tree](/img/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/admin/hostmanagement/jobstree.webp)

The jobs in the 3.Sharing job group are:

- [0.Collection Job Group](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/unix/sharing/collection/overview.md) -
  Collects NFS and Samba configuration information which will be further analyzed to identify and
  categorize risk within audited Unix and Linux environments
- [UX_NFS Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/unix/sharing/ux_nfs.md)
  – This job identifies potentially insecure NFS share options which are categorized by their risk
  level. Separate lists of options are checked based on target operating system.
- [UX_Samba Job](/versioned_docs/enterpriseauditor_11.6/enterpriseauditor/solutions/unix/sharing/ux_samba.md)
  – This job identifies potentially insecure Samba share configurations which are categorized by
  their risk level
