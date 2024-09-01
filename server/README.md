---
title: the alt-search api server
date: 2024-02-19
status: pre-production
author: tr1pwyr
description: the initial api server for alt-search
---

# alt-search api server

This directory represents the intial attempt at the api server for alt-search.

As of now it consists of simple connecting to the database, basic user functions, etc. However everything here as of now is working using a MySQL database.

- bcryptjs for hashing the password
- cors implimented
- dotenv
- jsonwebtoken
- sequelize

If this catches on I'll re-write in Rust or Go but I am trying to move fast and break stuff.