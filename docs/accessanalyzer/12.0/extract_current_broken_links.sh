#!/bin/bash
cd /Users/jordan.violet/development/docs
npm run build:single endpointpolicymanager 2>&1 | grep "Docs markdown link couldn't be resolved" | sed 's/.*(\([^)]*\)).*/\1/' > docs/accessanalyzer/12.0/remaining_broken_links.txt