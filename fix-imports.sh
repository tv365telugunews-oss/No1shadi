#!/bin/bash

# Fix all react-router imports to react-router-dom in screen files
cd src/app/screens

# Update all .tsx files in screens directory
for file in *.tsx; do
  if [ -f "$file" ]; then
    # Use perl for in-place editing (works on all platforms)
    perl -pi -e 's/from "react-router"/from "react-router-dom"/g' "$file"
    echo "✓ Updated: $file"
  fi
done

# Update admin screens
cd admin
for file in *.tsx; do
  if [ -f "$file" ]; then
    perl -pi -e 's/from "react-router"/from "react-router-dom"/g' "$file"
    echo "✓ Updated: admin/$file"
  fi
done

echo ""
echo "All files have been updated!"
