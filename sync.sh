hugo
aws s3 sync --delete public/ s3://awans-org-static/
aws cloudfront create-invalidation --distribution-i E2UEC42JQEVTER --paths "/*"
