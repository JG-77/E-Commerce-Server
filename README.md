# E-Commerce-Server ![Node.js](https://img.shields.io/badge/License-Node.js-blue.svg) ![MIT](https://img.shields.io/badge/License-MIT-red.svg)

## GitHub Repository and Application

---

[GitHub Link](https://github.com/JG-77/E-Commerce-Server.git)

[Walkthrough Video pt1](https://drive.google.com/file/d/1G9z4GDMxvnDGdQR-k0zd8HZG8qRt8r31/view?usp=sharing)

[Walkthrough Video pt2](https://drive.google.com/file/d/1XNWwXlQzJPDWQc31xMZtaOaoVlXwMEti/view?usp=sharing)

[Walkthrough Video pt3](https://drive.google.com/file/d/1fjiARviWssetcR0KmtGwD90mWJgqfY3k/view?usp=sharing)

[Walkthrough Video pt4](https://drive.google.com/file/d/1NIr8N0ZyoRHpZFCBv9nVDWgpasKVEbYt/view?usp=sharing)

[Walkthrough Video pt5](https://drive.google.com/file/d/1O83UiGC1E-q0z5K3ctYuJrxGk713_6X-/view?usp=sharing)

## Application Screenshots

---

![E-commerce app screenshot 1]()

![E-commerce app screenshot 2]()

## Description

---

The E-Commerce Back End server utilizes Node.js, Express.js, and node packages such as Sequelize, MySQL2, and Dotenv to set up the application's back end functionality. Models are set up for categories, products, tags, and product tags to define database columns and id relationships using foreign key methods. The app has three main API route files for products, categories, and tags that use the GET, POST, PUT, and DELETE methods to update the database with the proper information. Server endpoints and properties have been set up to establish a stable connection.

## Technologies

---

### Node.js/Express

- Pre-set server build for stable server connectivity (starter code).
- Node.js packages installed (Express.js, Dotenv, Sequelize, MySQL2).
- GET routes coded to return all categories, products, or tags.
- GET routes coded to return one category, product, or tag by id value.
- PUT, POST, DELETE routes created to update, delete, or create a new category, product, or tag.
- Dotenv file added for hiding sensitive data.

### MySQL/Sequelize

- Created 'ecommerce_db' database for application (starter code).
- Category, Product, Tag, and ProductTag models created with defined columns for database organization.
- Foreign Key relationships created to link id valuea across models using one-to-one and man-to-many methods.
- Seed files containing values for models (starter code).

## Contact

Jessie Guadarrama: <jesguadarrama98@gmail.com>

## License

[Node.js License](https://raw.githubusercontent.com/nodejs/node/master/LICENSE)

Copyright Node.js contributors. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.

---

The MIT License (MIT)

Copyright (c) 2009-2014 TJ Holowaychuk <tj@vision-media.ca> (Express.js)

Copyright (c) 2013-2014 Roman Shtylman <shtylman+expressjs@gmail.com> (Express.js)

Copyright (c) 2014-2015 Douglas Christopher Wilson <doug@somethingdoug.com> (Express.js)

Copyright (c) 2014-present Sequelize contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
