# Auth-Notes-Node-Backend
# API Json

{
    "info": {
        "_postman_id": "344e6e21-444b-44e4-a7ae-abeb01346fde",
        "name": "Task-Collection",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
        "description": ""
    },
    "item": [
        {
            "name": "Signin",
            "request": {
                "method": "POST",
                "url": {
                    "raw": "http://localhost:3000/api/auth/signin",
                    "path": [
                        "api",
                        "auth",
                        "signin"
                    ],
                    "protocol": "http",
                    "host": [
                        "localhost"
                    ],
                    "port": "3000"
                },
                "header": [
                    {
                        "key": "Accept",
                        "value": "*/*",
                        "disabled": true
                    }
                ],
                "body": {
                    "mode": "raw",
                    "options": {
                        "raw": {
                            "language": "json"
                        }
                    },
                    "raw": "{\n  \"email\":\"rahulrome037@gmail.com\",\n  \"password\":\"Rahul1234\"\n}"
                }
            }
        },
        {
            "name": "signup",
            "request": {
                "method": "POST",
                "url": {
                    "raw": "http://localhost:3000/api/auth/signup",
                    "path": [
                        "api",
                        "auth",
                        "signup"
                    ],
                    "protocol": "http",
                    "host": [
                        "localhost"
                    ],
                    "port": "3000"
                },
                "body": {
                    "mode": "raw",
                    "options": {
                        "raw": {
                            "language": "json"
                        }
                    },
                    "raw": "{\n  \"email\":\"rahulrome037@gmail.com\",\n  \"password\":\"Rahul1234\"\n}"
                }
            }
        },
        {
            "name": "create task",
            "request": {
                "method": "POST",
                "url": {
                    "raw": "http://localhost:3000/api/tasks/create-task",
                    "path": [
                        "api",
                        "tasks",
                        "create-task"
                    ],
                    "protocol": "http",
                    "host": [
                        "localhost"
                    ],
                    "port": "3000"
                },
                "header": [
                    {
                        "key": "authorization",
                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaHVscm9tZTAzN0BnbWFpbC5jb20iLCJpYXQiOjE3NDA1MDI5Nzl9.JMCfTEfBOKc-3-WCj2BrnHBhmuNB9488c3Q0as83Oes"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "options": {
                        "raw": {
                            "language": "json"
                        }
                    },
                    "raw": "{\n  \"title\":\"test task 2\",\n  \"description\":\"test description 2\",\n  \"userId\":\"67bd9f142be13c14a7bebd3e\"\n}"
                }
            }
        },
        {
            "name": "get task list",
            "request": {
                "method": "GET",
                "url": {
                    "raw": "http://localhost:3000/api/tasks/all-tasks?page=0",
                    "query": [
                        {
                            "key": "page",
                            "value": "0"
                        }
                    ],
                    "variable": [],
                    "path": [
                        "api",
                        "tasks",
                        "all-tasks"
                    ],
                    "protocol": "http",
                    "host": [
                        "localhost"
                    ],
                    "port": "3000"
                },
                "header": [
                    {
                        "key": "authorization",
                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaHVscm9tZTAzN0BnbWFpbC5jb20iLCJpYXQiOjE3NDA1MDI5Nzl9.JMCfTEfBOKc-3-WCj2BrnHBhmuNB9488c3Q0as83Oes"
                    }
                ]
            }
        },
        {
            "name": "getTaskById",
            "request": {
                "method": "GET",
                "url": {
                    "raw": "http://localhost:3000/api/tasks/all-tasks?_id=67bdff1a91d864ecbb3708c4",
                    "query": [
                        {
                            "key": "_id",
                            "value": "67bdff1a91d864ecbb3708c4"
                        }
                    ],
                    "variable": [],
                    "path": [
                        "api",
                        "tasks",
                        "all-tasks"
                    ],
                    "protocol": "http",
                    "host": [
                        "localhost"
                    ],
                    "port": "3000"
                },
                "header": [
                    {
                        "key": "authorization",
                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaHVscm9tZTAzN0BnbWFpbC5jb20iLCJpYXQiOjE3NDA1MDI5Nzl9.JMCfTEfBOKc-3-WCj2BrnHBhmuNB9488c3Q0as83Oes"
                    }
                ]
            }
        },
        {
            "name": "updateTask",
            "request": {
                "method": "PUT",
                "url": {
                    "raw": "http://localhost:3000/api/tasks/update-task?_id=67bdff1a91d864ecbb3708c4",
                    "query": [
                        {
                            "key": "_id",
                            "value": "67bdff1a91d864ecbb3708c4"
                        }
                    ],
                    "variable": [],
                    "path": [
                        "api",
                        "tasks",
                        "update-task"
                    ],
                    "protocol": "http",
                    "host": [
                        "localhost"
                    ],
                    "port": "3000"
                },
                "header": [
                    {
                        "key": "authorization",
                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaHVscm9tZTAzN0BnbWFpbC5jb20iLCJpYXQiOjE3NDA1MDI5Nzl9.JMCfTEfBOKc-3-WCj2BrnHBhmuNB9488c3Q0as83Oes"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "options": {
                        "raw": {
                            "language": "json"
                        }
                    },
                    "raw": "{\n  \"title\": \"test task 2 Updated\",\n  \"description\": \"test description 2\",\n  \"userId\":\"67bd9f142be13c14a7bebd3e\"\n}"
                }
            }
        },
        {
            "name": "deleteTask",
            "request": {
                "method": "DELETE",
                "url": {
                    "raw": "http://localhost:3000/api/tasks/delete-task?_id=67bdff1a91d864ecbb3708c4",
                    "query": [
                        {
                            "key": "_id",
                            "value": "67bdff1a91d864ecbb3708c4"
                        }
                    ],
                    "variable": [],
                    "path": [
                        "api",
                        "tasks",
                        "delete-task"
                    ],
                    "protocol": "http",
                    "host": [
                        "localhost"
                    ],
                    "port": "3000"
                },
                "header": [
                    {
                        "key": "authorization",
                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaHVscm9tZTAzN0BnbWFpbC5jb20iLCJpYXQiOjE3NDA1MDU3MzJ9.2y0HfY8heh04cszCfzctt1NTsUx2qRcqS-SZCnaQZSA"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "options": {
                        "raw": {
                            "language": "json"
                        }
                    },
                    "raw": "{\n  \"userId\":\"67bd9f142be13c14a7bebd3e\"\n}"
                }
            }
        }
    ]
}
 
