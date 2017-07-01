#!/bin/bash

clear

USERNAME=$(whoami)
WHEREAMI=$(pwd)

clear

XINFO=$(git show README.md | grep '+#')

clear

notify-send --icon="$WHEREAMI/img/html5.svg" --urgency="critical" "$XINFO" &

clear
