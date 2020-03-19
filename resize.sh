#! /bin/bash
cp -r static/img/original/. static/img/medium
sips -Z 640 static/img/medium/*
