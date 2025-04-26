#!/bin/bash

# Check if a directory was provided
if [ -z "$1" ]; then
  echo "Usage: $0 path/to/image_directory"
  exit 1
fi

INPUT_DIR="$1"
OUT_DIR="${INPUT_DIR%/}/optimized"
mkdir -p "$OUT_DIR"

# Sizes in pixels
SIZES=(400 800 1200 1600)

# Loop over image files
find "$INPUT_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r FILE; do
  EXT="${FILE##*.}"
  EXT_LOWER=$(echo "$EXT" | tr '[:upper:]' '[:lower:]')
  BASENAME="$(basename "$FILE" .${EXT})"

  for SIZE in "${SIZES[@]}"; do
    OUT_FILE="${OUT_DIR}/${BASENAME}-${SIZE}.${EXT_LOWER}"

    # Resize
    convert "$FILE" -resize "${SIZE}" "$OUT_FILE"

    # Optimize
    if [[ "$EXT_LOWER" == "jpg" || "$EXT_LOWER" == "jpeg" ]]; then
      jpegoptim --strip-all "$OUT_FILE" > /dev/null
    elif [[ "$EXT_LOWER" == "png" ]]; then
      pngquant --force --ext .png "$OUT_FILE" > /dev/null
    fi

    echo "✅ Created and optimized: $OUT_FILE"
  done
done
