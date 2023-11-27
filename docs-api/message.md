# API Documentation

This is the documentation for the messaging API.

## Message Creation

### Endpoint: `/api/Message/`

**Method:** POST

**Description:** Creates a new message in a specified group.

**Request:**

```json
{
    "GroupId": "1",
    "Content": "Hello World!",
    "UserId": "123"
}
```

**Response**

```json
{
        "Id": "456",
        "Content": "Hello World!",
        "UserId": "123",
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
              "UserId": 123,
              "GroupId": 1,
              "CreatedAt": "10/30/2023 2:30:00 PM"
          },
          // ... more messages
      ]
```

## Question Creation

### POST `/api/Question/`

Creates a new question in a specified group.

#### Request Body

- `GroupId` (integer, required) - The unique identifier of the group to which the question belongs.
- `Content` (string, required) - The content of the question being asked.
- `UserId` (integer, required) - The unique identifier of the user who is creating the question.

#### Request Example

```json
{
    "GroupId": 1,
    "Content": "What is the airspeed velocity of an unladen swallow?",
    "UserId": 123
}
```

#### Response

```
{
    "Request": {
        "GroupId": 1,
        "Content": "What is the airspeed velocity of an unladen swallow?",
        "UserId": 123
    },
    "Response": {
        "Id": 456,
        "Content": "What is the airspeed velocity of an unladen swallow?",
        "UserId": 123,
        "GroupId": 1,
        "CreatedAt": "10/30/2023 2:30:00 PM"
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
            "UserId": 123,
            "GroupId": 1,
            "CreatedAt": "2023-10-30T14:30:00"
        }
        // ... more questions
    ],
    "Total": 1
}
```

## Answer Creation

### POST `/api/Answer/`

Creates a new answer to a specific question.

#### Request Body

- `QuestionId` (integer, required) - The unique identifier of the question to which the answer is related.
- `Content` (string, required) - The content of the answer being provided.
- `UserId` (integer, required) - The unique identifier of the user who is creating the answer.

#### Request Example

```json
{
    "QuestionId": 123,
    "Content": "The airspeed velocity of an unladen swallow is roughly 11 meters per second.",
    "UserId": 456
}

```

## Retrieve Answers by Question

### GET `/api/Answer/question/{questionId}`

Retrieves all answers associated with a specified question.

#### URL Parameters

- `questionId` (integer, required) - The unique identifier of the question for which answers are being retrieved.

#### Success Response

- **Code:** 200 OK
- **Content:** A collection of answers for the specified question along with the request details and the total count of answers.

#### Response Example

```json
{
    "Request": {
        "QuestionId": 123
    },
    "Response": [
        {
            "Id": 789,
            "QuestionId": 123,
            "Content": "The airspeed velocity of an unladen swallow is roughly 11 meters per second.",
            "UserId": 456,
            "CreatedAt": "2023-10-30T14:30:00"
        }
        // ... more answers
    ],
    "Total": 1
}
```