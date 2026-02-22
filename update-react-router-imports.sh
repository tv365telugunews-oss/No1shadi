#!/bin/bash

# This script updates all .tsx files to use react-router-dom instead of react-router

# Colors for output
GREEN='\033[0.32m'
NC='\033[0m' # No Color

count=0

# Find all .tsx files in src directory
find src -name "*.tsx" -type f | while read file; do
  # Check if file contains react-router imports
  if grep -q 'from "react-router"' "$file"; then
    # Replace react-router with react-router-dom
    if [[ "$OSTYPE" == "darwin"* ]]; then
      # macOS
      sed -i '' 's/from "react-router"/from "react-router-dom"/g' "$file"
    else
      # Linux
      sed -i 's/from "react-router"/from "react-router-dom"/g' "$file"
    fi
    echo -e "${GREEN}✓${NC} Updated: $file"
    ((count++))
  fi
done

echo ""
echo "Total files updated: $count"
echo "Done! All react-router imports have been replaced with react-router-dom"
