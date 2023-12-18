---
sidebar_position: 2
slug: /groups
---

[Try in swagger](https://ua-2023-es6.github.io/Swagger-Doc/)

# Groups
this is the docs for the API

## Group Creation

### Endpoint: `/api/Group/`

**Method:** POST

**Description:** Creates a new group

**Request:**

```json
{
    "Name" : "Group 1",
    "parentGroupId" : 1
}
```

**Response:**

```json
{
  "request": {
    "name": "Group 1",
    "parentGroupId": 1
  },
  "data": {
    "id": 2,
    "name": "Group 1",
  }
}
```

## Get Groups

### Endpoint: `/api/Group/`

**Method:** GET

**Description:** Get all groups that were created.

**Response:**

```json
{
  "data": [
    {
      "id": 1,
      "name": "Institution Group",
      "subGroup": [
        {
          "id": 2,
          "name": "Group 1",
          "subGroup": [
            {
              "id": 3,
              "name": "Group 1.1",
              "subGroup": [
                {
                  "id": 4,
                  "name": "Group 1.1.1",
                  "subGroup": []
                }
              ]
            },
            {
              "id": 5,
              "name": "Group 1.2",
              "subGroup": []
            }
          ]
        },
        {
          "id": 6,
          "name": "Group 2",
          "subGroup": []
        }
      ]
    }
  ]
}
```

## Update Group

### Endpoint: `/api/Group/{id}`

**Method:** PUT

**Description:** Updates an already created group that corresponds to id

**Request:**

```json
{
    "Name" : "Group2",
}
```

**Response:**

```json
{
    "Id" : 0,
    "Name" : "Group2"
}
```

## Get Group details

### Endpoint: `/api/Group/{id}`

**Method:** GET

**Description:** Get the group that corresponds to the id.

**Response:**

```json
{
  "request": {
    "id": 1
  },
  "data": {
    "id": 1,
    "name": "Group 1",
    "users": [ ... ],
    "subGroup": [ ... ]
  }
}
```

## Delete Group

### Endpoint: `/api/Group/{id}`

**Method:** DELETE

**Description:** Delete the group that corresponds to the id.

**Response:**

```json
{
    "Id" : 1,
    "Name" : "Group1"
}
```

## Get the group users

### Endpoint: `/api/Group/{id}/user`

**Method:** GET

**Description:** Add the user that correponds to the userID to the group that corresponds to the id

#### URL Parameters

- `groupId` (integer, required) - The identifier of the group.

#### Query Parameters

- `take` (integer, required) - The number of items to be taken.
- `skip` (integer, required) - The number of items to be skiped.


**Response:**

```json
{
  "request": {
    "id": 1,
    "take": 10,
    "skip": 0
  },
  "data": [
    {
      "id": "00000000-0000-0000-0000-000000000001",
      "name": "User 1",
      "email": "user1@onecampus.pt"
    }
  ],
  "totalResults": 1
}
```

## Add user to group

### Endpoint: `/api/Group/{id}/user/{userId}`

**Method:** POST

**Description:** Add the user that correponds to the userId to the group that corresponds to the id

#### URL Parameters

- `groupId` (integer, required) - The identifier of the group.
- `userId` (guid, required) - The unique identifier of the user.

**Request:**

```json
{
    "GroupId" : 1,
    "UserId" : 1
}
```

**Response:**

```json
{
    "Id" : 1,
    "Name" : "Group1"
}
```

## Remove user from group

### Endpoint: `/api/Group/{id}/user/{userId}`

**Method:** DELETE

**Description:** Removes the user that correponds to the userId from the group that corresponds to the id

#### URL Parameters

- `groupId` (integer, required) - The identifier of the group.
- `userId` (guid, required) - The unique identifier of the user.

**Response:**

```json
{
    "Id" : 1,
    "Name" : "Group1"
}
```

