# 🚀 Docker Network Project

This is a sample multi-tier web application deployed using Docker. It includes:

- **Frontend**: Static site served by **NGINX**
- **Backend**: API built with **Node.js**
- **Database**: **MySQL** instance

Each component runs in its own container and is connected via a custom Docker bridge network. This setup is great for learning Docker networking and containerized deployments.


## 📥 Clone the Repository

```bash
git clone https://github.com/SanathKumar619/Docker-Network.git
cd Docker-Network
tree
```
![Tree](https://github.com/user-attachments/assets/8eb7e2b3-8613-40d8-bd7a-c298a13854e3)

# Setup & Run

## 1. Install Docker (if not already installed)

### For Ubuntu/Debian:

```bash
chmod +x install-docker.sh
./install-docker.sh
```
## 2. Build Docker Images

Now that the repository is cloned, build the Docker images for the frontend, backend, and database:

```bash
docker build -t frontend ./frontend
docker build -t backend ./backend
docker build -t database ./database
docker images
```
![image](https://github.com/user-attachments/assets/b59808f3-7fc0-4c6f-95bd-08830d32bdda)

## 3. Create Docker Network

Create a custom Docker network to allow the containers to communicate with each other:

```bash
docker network create --driver bridge my-nw
docker network ls
```
![image](https://github.com/user-attachments/assets/fb8bcdb6-c756-409c-8290-de4dcd81668c)

## 4. Run the Containers

Now, start the containers for the MySQL database, Node.js backend, and NGINX frontend:

```bash
# Run MySQL database
docker run -d -p 3306:3306 --network my-nw database:latest

# Run Node.js backend
docker run -d -p 3000:3000 --network my-nw backend:latest

# Run NGINX frontend
docker run -d -p 8080:80 --network my-nw frontend:latest

docker ps
```
![PS](https://github.com/user-attachments/assets/76242247-2323-4f8b-869d-11695e94628f)

## 5. Access the Application

Once the containers are running, you can access the application:

- **Frontend**: [http://localhost](http://localhost)
  
  ![image](https://github.com/user-attachments/assets/ae2256c3-f5b3-4175-a9ad-737befa0af8b)
- **Backend API**: [http://localhost:3000](http://localhost:3000)
  
  ![image](https://github.com/user-attachments/assets/689ff1dd-cb80-4d7d-857e-4b4a2c5b047f)

- **Database**: Access the MySQL database via the container using a MySQL client.
  
  ![MY-SQL-connection](https://github.com/user-attachments/assets/222e0d6e-9856-4dc8-a42d-d3e6647605c4)

## 6. Docker Network Commands

Here are some useful Docker network commands to help you manage the network and containers:

- **Inspect a network** (view details of the custom network `mynetwork`):

```bash
docker network inspect my-nw
```
- **Connect a running container to the network**:

```bash
docker network connect my-nw <container>
```
- **Disconnect a running container from the network**:

```bash
docker network disconnect my-nw <container>
```
- **Remove unused networks**:

```bash
docker network prune
```
## 🙌 Thank You!

Thank you for exploring this Docker networking setup! I hope this guide helps you understand and implement Docker multi-container networking.

## 🐙 Author

Sanath Kumar

GitLab: [@SanathKumar619](https://gitlab.com/SanathKumar619)

LinkedIn: [Sanath Kumar](https://www.linkedin.com/in/sanath-kumar-is-here/)

## 📄 License

This project is open-source and available under the MIT License.

