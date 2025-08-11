#!/bin/bash

# Exit if any command fails
set -e

# Check args
if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <image-file>"
  exit 1
fi

INPUT="$1"
OUTPUT_DIR="./src/assets"
SIZES=(800 1200 1600)

# Get filename without extension and extension separately
FILENAME=$(basename -- "$INPUT")
BASENAME="${FILENAME%.*}"
EXT="${FILENAME##*.}"

# Loop over sizes and create resized images
for WIDTH in "${SIZES[@]}"; do
  OUTPUT_FILE="${OUTPUT_DIR}/${BASENAME}-${WIDTH}w.${EXT}"
  convert "$INPUT" -resize "${WIDTH}" "$OUTPUT_FILE"
  echo "✅ Created $OUTPUT_FILE"
done

echo "🎉 All images generated successfully."
