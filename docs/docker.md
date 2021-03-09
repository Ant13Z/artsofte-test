How run the dev environment:
1. docker-compose up
2. frontend listens localhost:8080
3. backend listens localhost:80

How connect to the containers: 
1. docker-compose exec -u root frontend sh
2. docker-compose exec -u root backend sh