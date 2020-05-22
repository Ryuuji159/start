#!/bin/sh

cd $(dirname "$(readlink -f "$0")")

minify index.html > index.min.html
rsync -av "index.min.html" "sky:~/start/index.html"
rm index.min.html
