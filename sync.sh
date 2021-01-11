hugo
aws s3 sync --delete public/ s3://awans-org-static/
aws cloudfront create-invalidation --distribution-i EY0KSQ7UO9R6S --paths "/*"
