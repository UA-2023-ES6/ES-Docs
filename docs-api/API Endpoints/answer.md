---
sidebar_position: 1
slug: /answers
---

[Try in swagger](https://ua-2023-es6.github.io/Swagger-Doc/)

# Answers
this is the docs for the API

## Answer Creation

### POST `/api/Answer/`

Creates a new answer to a specific question.

#### Request Body

- `QuestionId` (integer, required) - The unique identifier of the question to which the answer is related.
- `Content` (string, required) - The content of the answer being provided.

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