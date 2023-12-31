---
sidebar_position: 3
slug: /messages
---

[Try in swagger](https://ua-2023-es6.github.io/Swagger-Doc/)

# Messages

This is the documentation for the messaging API.

## Message Creation

### Endpoint: `/api/Message/`

**Method:** POST

**Description:** Creates a new message in a specified group.

**Request:**

```json
{
    "GroupId": "1",
    "Content": "Hello World!"
}
```

**Response**

```json
{
        "Id": "456",
        "Content": "Hello World!",
        "GroupId": "1",
        "CreatedAt": "10/30/2023 2:30:00 PM"
    }

```

## Retrieve Messages by Group

### Endpoint: `/api/Message/group/{groupId}`

**Method:** GET

**Description:** Retrieves all messages for a specified group.

**Parameters:**

- `groupId` _(required)_: The unique identifier of the group for which messages are being retrieved.

**Responses:**

```json
[
          {
              "Id": 456,
              "Content": "Hello World!",
              "GroupId": 1,
              "senderName": "User 1",
              "CreatedAt": "10/30/2023 2:30:00 PM"
          },
          // ... more messages
      ]
```