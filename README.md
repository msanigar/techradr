# techradr ~ the state of web tech in 2023

A JAMStack application with the primary purpose of measuring web dev sentiment accross a range of technologies, tooling, methodologies and processes.

<b>Tech: NextJS, Netlify, Tailwind CSS, Netlify edge functions, Netlify identity, MongoDB</b>

<hr>

#### ∞ Main View

- Hero page
- Desc.
- Login btn

<hr>

#### ∞ Logged in view

- Hero page
- Toggle btn (form/results)
- Global results|Personal form

<hr>

##### Flows

<b>Form</b>:

- Collection of sections (Techniques, Platforms, Languages & Frameworks, Tools)
- Submit form -> User ID as key -> key:value pair each result as obj
- Receive individual results -> get by User ID -> map over each key:value -> render with inputs
- <i>Error boundary:</i> key not found -> "this item has been removed from the form, please re-submit"
- <i>Error boundary:</i> value not found -> "this item has been added to the form, please re-submit"
- Receive all results -> get all by collection -> map over each key:value -> render with range

<hr>

#### Stuff

- .env
- MONGO_DB_USER=
- MONGO_DB_PASSWORD=
- MONGO_DB_NAME=

```cmd
yarn
yarn dev
http://localhost:3000

λ
yarn
npm i -g netlify-cli
netlify dev
http://localhost:8888/.netlify/functions/<functionname>
```

```
[userId]: {
    [techId]: [rating]
}
```

```json
"22b8efaa-765b-4dc6-b301-f6cfb05881de": {
    "react": "keep",
    "knockoutjs": "meh"
}

```
