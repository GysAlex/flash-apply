import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken=true
axios.defaults.baseURL = 'http://localhost:8000'

//Cette configuration ne sera faite qu'une seule fois, lors de l'importation
//De ce fichier, qui idéalement doit se faire dans un composant racine de cette application
//Dans notre cas ce seras dans main.jsx (import ./api/axios.jsx)