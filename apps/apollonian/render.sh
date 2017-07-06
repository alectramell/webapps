#!/bin/bash

clear

USERNAME=$(whoami)
WHEREAMI=$(pwd)

clear

rm apollonian.zip

clear

zip -r apollonian.zip *.html *.json js img audio
