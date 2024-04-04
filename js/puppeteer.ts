function updateResponseText() {
  console.log("saving response (text)");
  fetch(
    "http://localhost:1337/api/v1/questionnaireresponses/64493578e47e189baa3541d1",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9ETXlORGt6UWprMU5qWkZRelpGT0VJMU1FWTVSRVJDT1VJd1JETXdRVEkyTWtFM00wTXlPUSJ9.eyJodHRwOi8vYWx5bmUuY29tL29yZ19hdXRob3Jpc2F0aW9uIjp7Imhhc0V4dGVybmFsSWRlbnRpdHkiOmZhbHNlLCJhbHluZU9yZ09iamVjdElkIjoiNWIyMjRiNGIwMWU2YTMyYWUxN2E3MTM0IiwiYWx5bmVVc2VyT2JqZWN0SWQiOiI1YjIyNjU4NTM0YTU2M2EzMWU4NmNlZjEiLCJlbmZvcmNlTUZBIjpmYWxzZSwiYXV0aDBVc2VyRW1haWwiOiJhbHluZS10ZXN0aW5nK2V4cGVydF8xQG1pdHJhdGVjaC5jb20iLCJ1c2VyVHlwZSI6IkV4cGVydCBVc2VyIiwidGVhbXMiOlsiNWNhNzE5NDlmNzcxYzA1N2U0YzE5ZjdjIiwiNWI1MWU2NjBmZGJlZmU5YzM1MDgyOTg2IiwiNWNhNzIwOGVmNzcxYzA1N2U0YzE5ZjdkIiwiNjA2NWNjMGZkYjRiMTIyNWVmZWU4N2JhIl0sInN0YXR1cyI6ImFjdGl2ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlfSwiaXNzIjoiaHR0cHM6Ly9kZXYuYXV0aC5ldS5hbHluZS5jb20vIiwic3ViIjoiYXV0aDB8NjM5YzE5ZTQ2ZWE3NjM0ZmFlMTY4YWI4IiwiYXVkIjoiV2ltWVNONmNNajkyZXFRcTNubmZzVUhKdUk5bWhiQjIiLCJpYXQiOjE2OTgxNTgwMjcsImV4cCI6MTY5ODI0NDQyNywibm9uY2UiOiJSbkJ1VTJkUWQwdFZRMlExWWxsMlNXcG1UR2xXYm5WdllXZE1TMnRDWkhCbE5FTTRZMHhIU0ZCSVJRPT0ifQ.qSeauAiq6pIW7im2jBtnw-J5ETt382gbbKUQi9jBKrS-Y96KVROTilKnuFRWg2ocLyvS2B_AOtKsKypzUojkev9sAxkBymh48_L4FBJcrVwkajRYD_K1JkuWdqaukKUzZjn-uv_ivnXuCXvvXI1tWzkB7DzJSUrtfE1mmUFDFu6Cufj0teiWAVU5jfK0nSnma_UcsG6XVvD-Fjni-U10HBiBZj1If5dr9euD0l-FYP1je_etsIIFWDOBQ5m24OGbOkXK0aVaB5uljdgaaZy-HTDkHKz0-9JlQ1FFpjxxPnC1BaXAvwxosWgCRzQx4DXsMkDZMSyVHNb8e7M3hDEEQw",
        "content-type": "application/json; charset=UTF-8",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-gpc": "1",
        Referer: "http://localhost:4200/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: `{"questionnaireresponse":{"blockType":"questionnaire-string","content":{"answer":"${new Date().toString()}","features":{"explanation":null,"evidence":null},"custom":null},"visible":true,"_cache":{"submissionErrors":[{"name":"MissingFieldError","context":{"resource":"questionnaireresponses/64493578e47e189baa3541d1","field":"content.answer"},"code":"missing_field","field":"content.answer","resource":"questionnaireresponses/64493578e47e189baa3541d1","details":{"keyword":"minLength","dataPath":".content.answer","schemaPath":"#/properties/content/properties/answer/minLength","params":{"limit":1},"message":"should NOT be shorter than 1 characters","validatingObject":{"id":"64493578e47e189baa3541d1","respondedAt":"2023-10-24T14:51:03.109Z","updatedAt":"2023-10-24T14:51:03.109Z","content":{"answer":"","features":{"explanation":null,"evidence":null},"custom":null},"suggestions":[],"visible":true,"finalValue":null,"finalLevel":null,"finalOption":null,"finalDeviation":null,"finalMaturityModel":null,"sourceResponse":null,"_cache":{"submissionErrors":[],"submissionHash":"","submissionValid":false}},"lang_title":"Taking over responses from latest values available"}}],"submissionValid":false,"submissionHash":"2164e4e3e908406f94d96d45166944eed72a6ed1"},"state":"IN_PROGRESS","commentChannels":[],"suggestions":[],"finalOption":null,"finalValue":null,"questionnaire":"6439a898c2a03a170d7a2872","questionnairerequest":"6449355ce47e189baa3541c6","block":"6439a898c2a03a170d7a2872_RmPKH","recipient":"5b226d4534a563a31e86cef9","delegatee":"5b22658534a563a31e86cef1","object":"5d42b07d4de3c236f287369c"},"prefLang":"en_GB"}`,
      method: "PUT",
    }
    );
  }
  
  function updateResponseTextAndExplanation() {
  console.log("saving response (text and explanation)");
  fetch(
    "http://localhost:1337/api/v1/questionnaireresponses/64493578e47e189baa3541d1",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9ETXlORGt6UWprMU5qWkZRelpGT0VJMU1FWTVSRVJDT1VJd1JETXdRVEkyTWtFM00wTXlPUSJ9.eyJodHRwOi8vYWx5bmUuY29tL29yZ19hdXRob3Jpc2F0aW9uIjp7Imhhc0V4dGVybmFsSWRlbnRpdHkiOmZhbHNlLCJhbHluZU9yZ09iamVjdElkIjoiNWIyMjRiNGIwMWU2YTMyYWUxN2E3MTM0IiwiYWx5bmVVc2VyT2JqZWN0SWQiOiI1YjIyNjU4NTM0YTU2M2EzMWU4NmNlZjEiLCJlbmZvcmNlTUZBIjpmYWxzZSwiYXV0aDBVc2VyRW1haWwiOiJhbHluZS10ZXN0aW5nK2V4cGVydF8xQG1pdHJhdGVjaC5jb20iLCJ1c2VyVHlwZSI6IkV4cGVydCBVc2VyIiwidGVhbXMiOlsiNWNhNzE5NDlmNzcxYzA1N2U0YzE5ZjdjIiwiNWI1MWU2NjBmZGJlZmU5YzM1MDgyOTg2IiwiNWNhNzIwOGVmNzcxYzA1N2U0YzE5ZjdkIiwiNjA2NWNjMGZkYjRiMTIyNWVmZWU4N2JhIl0sInN0YXR1cyI6ImFjdGl2ZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlfSwiaXNzIjoiaHR0cHM6Ly9kZXYuYXV0aC5ldS5hbHluZS5jb20vIiwic3ViIjoiYXV0aDB8NjM5YzE5ZTQ2ZWE3NjM0ZmFlMTY4YWI4IiwiYXVkIjoiV2ltWVNONmNNajkyZXFRcTNubmZzVUhKdUk5bWhiQjIiLCJpYXQiOjE2OTgxNTgwMjcsImV4cCI6MTY5ODI0NDQyNywibm9uY2UiOiJSbkJ1VTJkUWQwdFZRMlExWWxsMlNXcG1UR2xXYm5WdllXZE1TMnRDWkhCbE5FTTRZMHhIU0ZCSVJRPT0ifQ.qSeauAiq6pIW7im2jBtnw-J5ETt382gbbKUQi9jBKrS-Y96KVROTilKnuFRWg2ocLyvS2B_AOtKsKypzUojkev9sAxkBymh48_L4FBJcrVwkajRYD_K1JkuWdqaukKUzZjn-uv_ivnXuCXvvXI1tWzkB7DzJSUrtfE1mmUFDFu6Cufj0teiWAVU5jfK0nSnma_UcsG6XVvD-Fjni-U10HBiBZj1If5dr9euD0l-FYP1je_etsIIFWDOBQ5m24OGbOkXK0aVaB5uljdgaaZy-HTDkHKz0-9JlQ1FFpjxxPnC1BaXAvwxosWgCRzQx4DXsMkDZMSyVHNb8e7M3hDEEQw",
        "content-type": "application/json; charset=UTF-8",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-gpc": "1",
        Referer: "http://localhost:4200/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: `{"questionnaireresponse":{"blockType":"questionnaire-string","content":{"answer":"Tue Oct 24 2023 11:58:40 GMT-0300 (Brasilia Standard Time)","features":{"explanation":{"text":"Explanation ${new Date().toString()}"},"evidence":null},"custom":null},"visible":true,"_cache":{"submissionErrors":[],"submissionValid":true,"submissionHash":"757c0f65c12e9d368295bc544a1804e22927ade6"},"state":"IN_PROGRESS","commentChannels":[],"suggestions":[],"finalOption":null,"finalValue":null,"questionnaire":"6439a898c2a03a170d7a2872","questionnairerequest":"6449355ce47e189baa3541c6","block":"6439a898c2a03a170d7a2872_RmPKH","recipient":"5b226d4534a563a31e86cef9","delegatee":"5b22658534a563a31e86cef1","object":"5d42b07d4de3c236f287369c"},"prefLang":"en_GB"}`,
      method: "PUT",
    }
  );
}

setInterval(updateResponseText, 10000);
setInterval(updateResponseTextAndExplanation, 4000);
