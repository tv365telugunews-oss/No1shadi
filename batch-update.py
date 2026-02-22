#!/usr/bin/env python3
import os
import re

def update_imports(directory):
    count = 0
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Replace react-router imports with react-router-dom
                    new_content = content.replace('from "react-router"', 'from "react-router-dom"')
                    
                    if content != new_content:
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated: {filepath}")
                        count += 1
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")
    
    return count

# Update all TypeScript files in src directory
src_dir = os.path.join(os.path.dirname(__file__), 'src')
total = update_imports(src_dir)
print(f"\nTotal files updated: {total}")

