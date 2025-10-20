#!/bin/bash

npx nuxt generate &&
	rsync -Pav .output/public/ root@134.199.162.132:/var/www/apex-civil/dist/
