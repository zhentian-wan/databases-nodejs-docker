## Node.js with Mongo and Docker

1. Pull the mongo image from docker:

```bash
docker pull mongo
```

2. Run the container:

```bash
docker run --name mongodb -p 37017:27017 -d mongo
```

How to stop the container?

```bash
docker stop mongodb
```

How to restart the stopped container?

```bash
docker start mongodb
```

3. Download the Mongodb Compoass GUI tool form [https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)

    3.1 Connect to localhost database throught port `37017`.


## Redis with Docker

1. Pull the image:

```bash
docker pull redis
```

2. Run:

```bash
docker run --name redis -p 7379:6379 -d redis
```

3. Download [RedisInsight](https://redislabs.com/redis-enterprise/redis-insight/)

4. Connect to local database

Visit `localhost:8001`

```bash
Host: localhost
Port: 7379
Name: NodeDatabases
```

## MySQL with Docker

```bash
docker pull mysql
```

```bash
docker run --nmae mysql -p 3406:3306 -e MYSQL_ROOT_PASSWORD=mypassword -d mysql
```

