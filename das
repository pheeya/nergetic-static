[33mcommit bce9b64e6962ee55352f957a31c8b47db9805324[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m)[m
Author: Sameer Ahmed <sameerahmed1472@gmail.com>
Date:   Wed Jan 27 19:25:15 2021 +0500

    made background darker

[1mdiff --git a/css/main.css b/css/main.css[m
[1mindex b56f722..884ada5 100644[m
[1m--- a/css/main.css[m
[1m+++ b/css/main.css[m
[36m@@ -31,7 +31,7 @@[m [mbody {[m
     position: relative;[m
     background-size: 100%;[m
     background-attachment: fixed;[m
[31m-    background-image: url("../img/backgroundSniperFiltered.png");[m
[32m+[m[32m    background-image: url("../img/lightbackground.png");[m
     background-color:black;[m
 }[m
 [m
[36m@@ -51,7 +51,9 @@[m [mbody {[m
 }[m
 [m
 .loader {[m
[31m-    background-color: rgba(31, 32, 61, 0.295);[m
[32m+[m[32m    /* background-color: rgba(31, 32, 61, 0.295);[m
[32m+[m[32m     */[m
[32m+[m[32m    background-color: rgba(10, 10, 15, 0.774);[m
     position: fixed;[m
     height: 100%;[m
     width: 100%;[m
[1mdiff --git a/img/lightbackground.png b/img/lightbackground.png[m
[1mnew file mode 100644[m
[1mindex 0000000..4b9e878[m
Binary files /dev/null and b/img/lightbackground.png differ
