#!/bin/bash

# Get the list of authors and their commit counts for the last 60 days
git log --since="200 days ago" --pretty=format:"%an" | sort | uniq -c | sort -rn

# Get the total number of commits in the last 60 days
total=$(git log --since="200 days ago" --oneline | wc -l)

echo "Total commits: $total"

# to run this file: ./get_stats.sh > stats.txt