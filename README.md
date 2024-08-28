# Help Center Application

## Quick Start

clone the repositry

```bash
git clone https://github.com/sanju2062/help-center.git

```

# To Start FrontEnd

```bash

cd frontend

# Install dependencies
npm install

npm start

```

# To Start BackEnd

To use backend of this application. You have to create a default.json file in the "backend/config" directory and you have to add your mongodb atlas URI in the this file for example {"mongoURI":"mongodb+srv://"username password".rm0ud.mongodb.net/"your collection name"?retryWrites=true&w=majority"}.

```bash
cd backend

# Install dependencies
npm install

nodemon start

```

# End points

#

To create a card
post
/api/createcard

{
"title": "xxxxx",
"description":"xxxx"
}

#

To get a card by its title
get
/api/getcard
pass the title in the query

or
/api/getcard/?title=this%20is%20title

#

To get all cards
get
/api/getcards
