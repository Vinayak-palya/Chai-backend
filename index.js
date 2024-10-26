require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const gitHubData = {
    "login": "Vinayak-palya",
    "id": 179369595,
    "node_id": "U_kgDOCrD2ew",
    "avatar_url": "https://avatars.githubusercontent.com/u/179369595?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Vinayak-palya",
    "html_url": "https://github.com/Vinayak-palya",
    "followers_url": "https://api.github.com/users/Vinayak-palya/followers",
    "following_url": "https://api.github.com/users/Vinayak-palya/following{/other_user}",
    "gists_url": "https://api.github.com/users/Vinayak-palya/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Vinayak-palya/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Vinayak-palya/subscriptions",
    "organizations_url": "https://api.github.com/users/Vinayak-palya/orgs",
    "repos_url": "https://api.github.com/users/Vinayak-palya/repos",
    "events_url": "https://api.github.com/users/Vinayak-palya/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Vinayak-palya/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-08-25T07:04:06Z",
    "updated_at": "2024-10-09T14:59:59Z"
  }
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter' , (req , res) => {
    res.send('vinayakdotcom')
})
app.get('/login',(req , res) => {
    res.send('<h1>please losign at chai aur code</h1>')
})
app.get('/youtube' , (req , res) => {
    res.send("<h2> chai aur code </h2>")
})
app.get('/gitHub/login' , (req , res) => {
    res.send(gitHubData.login)
})
app.get('/github' ,(req , res) => {
    res.json(gitHubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})