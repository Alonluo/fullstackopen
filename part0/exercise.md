#### 0.4 New note diagram

```
user->browser:

note left of browser
    user creates a new note
    and clicks "Save"
end note

browser->server: HTTP POST http://fullstack-exampleapp.herokuapp.com/notes

note left of server
   server receives user request
   to write note to database
end note

server->browser: URL redirect to https://fullstack-exampleapp.herokuapp.com/notes

note right of browser
    server writes note to database
    and browser reloads Notes page
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
server-->browser: HTML code
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
server-->browser: main.js

note over browser:
    browser executes JS code
    requesting JSON data from server 
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
    browser executes event handler
    rendering notes to display
end note
```

#### 0.5 Single page app diagram

```
title 0.5: Single page app

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
server-->browser: HTML code for single-page application
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js
server-->browser: spa.js

note over browser:
browser executes JS code
requesting JSON data from server 
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes event handler
rendering notes to display
end note
```

#### 0.6 New note in Single page app diagram

```
title 0.6: New note

user->browser:

note left of browser
    user creates a new note
    and clicks "Save"
end note

browser->server: HTTP POST http://fullstack-exampleapp.herokuapp.com/new_note_spa

note left of server
    server receives user request
    to write note to database
end note

note right of browser
    server writes note to database;
    browser stays on same page
end note

server->browser: status code "201 Created"
```

