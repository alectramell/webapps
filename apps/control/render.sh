#!/bin/bash

clear

USERNAME=$(whoami)
WHEREAMI=$(pwd)

clear

rm control.zip

clear

zip -r control.zip *.html js img fonts
