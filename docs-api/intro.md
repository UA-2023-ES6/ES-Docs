---
sidebar_position: 1
slug: /
---

# API
this is the docs for the API

## Time API

### Endpoint: `/api/Time/`

**Method:** GET

**Description:** Get the current time

**Response:**

```json
{
    "ServerTime": "10/30/2023 2:28:56 PM"
}
```


## Group Creation

### Endpoint: `/api/Group/`

**Method:** POST

**Description:** Creates a new group

**Request:**

```json
{
    "Name" : "Group1",
    "ClassId" : 1
}
```

**Response:**

```json
{
    "Id" : 0,
    "Name" : "Group1"
}
```

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

### Endpoint: `/api/Group/`

**Method:** GET

**Description:** Get all groups that were created.

**Response:**

```json
{
    "TotalResults" : [
        {
            "Id" : 1,
            "Name" : "Group1"
        },
        {
            "Id" : 2,
            "Name" : "Group2"
        },
        {
            "Id" : 3,
            "Name" : "Group3"
        },
        ...
    ]
}
```

### Endpoint: `/api/Group/{id}`

**Method:** GET

**Description:** Get the group that corresponds to the id.

**Response:**

```json
{
    "Id" : 1,
    "Name" : "Group1"
}
```

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

### Endpoint: `/api/Group/{id}/user/{userId}`

**Method:** POST

**Description:** Add the user that correponds to the userID to the group that corresponds to the id

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

### Endpoint: `/api/Group/{id}/user/{userId}`

**Method:** DELETE

**Description:** Removes the user that correponds to the userID from the group that corresponds to the id

**Response:**

```json
{
    "Id" : 1,
    "Name" : "Group1"
}
```

