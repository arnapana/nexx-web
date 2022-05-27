### CMD BUILD DOCKER IMAGE

'''
docker build -t nexx-phamacy .
'''

'''
docker run -p 6100:80 --name nexx-backoffice -e "NODE_ENV=production"  --env-file="./.env" --network=local  nexx-backoffice
'''