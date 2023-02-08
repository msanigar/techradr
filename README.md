# techradr ~ the state of web tech in 2023

A JAMStack application with the primary purpose of measuring web dev sentiment accross a range of technologies, tooling, methodologies and processes.

<b>Tech: NextJS, Netlify, Tailwind CSS, Netlify edge functions, Netlify identity, Cassandra DB</b>

<hr>

#### ∞ Main View

Hero page
Desc.
Login btn

<hr>

#### ∞ Logged in view

Hero page
Toggle btn (form/results)
Global results|Personal form

<hr>

##### Flows

<b>Form</b>:
Collection of sections (Techniques, Platforms, Languages & Frameworks, Tools)
Submit form -> User ID as key -> key:value pair each result as obj
Receive individual results -> get by User ID -> map over each key:value -> render with inputs
<i>Error boundary:</i> key not found -> "this item has been removed from the form, please re-submit"
<i>Error boundary:</i> value not found -> "this item has been added to the form, please re-submit"
Receive all results -> get all by collection -> map over each key:value -> render with range

<hr>

#### Stuff

For Cassandra: SELECT key, text_value FROM "techscores"."techScoresByUser";

ASTRA_DB_ID=
ASTRA_DB_REGION=
ASTRA_DB_APPLICATION_TOKEN=
ASTRA_DB_NAMESPACE=

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
