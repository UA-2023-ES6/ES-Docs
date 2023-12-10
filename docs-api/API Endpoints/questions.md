---
sidebar_position: 5
slug: /questions
---

# Questions

## Question Creation

### POST `/api/Question/`

Creates a new question in a specified group.

#### Request Body

- `GroupId` (integer, required) - The unique identifier of the group to which the question belongs.
- `Content` (string, required) - The content of the question being asked.

#### Request Example

```json
{
    "GroupId": 1,
    "Content": "What is the airspeed velocity of an unladen swallow?"
}
```

#### Response

```
{
    "Request": {
        "GroupId": 1,
        "Content": "What is the airspeed velocity of an unladen swallow?"
    },
    "Response": {
        "Id": 456,
        "Content": "What is the airspeed velocity of an unladen swallow?",
        "senderName": "User 1",
        "GroupId": 1,
        "CreatedAt": "2023-10-30T14:30:00"
    }
}
```


## Retrieve Questions by Group

### GET `/api/Question/group/{groupId}`

Retrieves all questions associated with a specified group.

#### URL Parameters

- `groupId` (integer, required) - The unique identifier of the group for which questions are being retrieved.

#### Success Response

- **Code:** 200 OK
- **Content:** A collection of questions for the specified group along with the request details and the total count of questions.

#### Response Example

```json
{
    "Request": {
        "GroupId": 1
    },
    "Response": [
        {
            "Id": 456,
            "Content": "What is the airspeed velocity of an unladen swallow?",
            "senderName": "User 1",
            "GroupId": 1,
            "CreatedAt": "2023-10-30T14:30:00"
        }
        // ... more questions
    ],
    "Total": 1
}
```