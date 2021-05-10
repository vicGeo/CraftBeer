<h1 align="center">
  <img src="https://svgur.com/i/X6y.svg" height="80px"/>
  <br/>
  CraftBeer
</h1>
<p align="center">eCommerce from scratch </p>

### 🔨Project

This project is a SPA (Single-page application) developed with the MERN stack. Started on 28 April 2021 and finished on 9 May 2021.

### 💡Features

**User flow**

- User not registered
  - Search products.
  - View products details.
  - Add products to cart (but can not checkout) Need to register.
  - Remove items from the cart
- User registered
  - Access to your profile.
  - Update your profile details (name, email, password).
  - View your orders.
  - Remove items from the cart
  - Logout
  - Make a review of the product (one review by product only).
  - Rate the product (only once) from one star to five stars.
  - Proceed to checkout.
  - Place order.
  - Pay order with Paypal account sandbox (API Paypal).

**AdminUser flow**


- Admin
  - View all registered users.
  - View all orders.
  - View all products.
  - Delete users and edit their profiles.
  - Delete products and edit their properties.
  - Create a new product.
  - Upload images of the product and storage them in S3 bucket AWS.
  - Control the stock of product.
  - Mark as delivered a product.

**App**

- Top rated products carousel (three products)
- Pagination products (six per page)

### 💰API Paypal
We need a sandbox paypal account to pay the order.
When we create a developer paypal account we get a test sandbox buyer account (**no real money!**)

If you want test the app and pay an order you will need this account:

```bash
#Email ID
sb-yhwzk6121802@personal.example.com
#password
Vr&LI5QQ
```
#### 🚀POSTMAN

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/9a5490d15448c43de6fe?action=collection%2Fimport)

### ⚙️Tech Stack

**Client:** React, Redux, React-Bootstrap, Axios, Moment.

**Server:** Node, Express, Mongoose, JsonWebToken, Bcrypt, AWS-SDK, Multer-S3.

**Database:** MongoDB Atlas on AWS cluster.

### 📺Demo

Deploy on heroku: https://craftbeerapp.herokuapp.com/

- Register User

>![register](https://i.imgur.com/aiqaA7R.gif)

- Checkout order
>![](https://s3.gifyu.com/images/2021-05-10T16-56-441.gif)
</br>

- Pay order with paypal
>![](https://s3.gifyu.com/images/2021-05-10T17-20-301.gif)
</br>

- Review product
>![](https://s3.gifyu.com/images/2021-05-10T17-26-13.gif)
</br>

- Admin dashboard
>![](https://s3.gifyu.com/images/2021-05-10T17-36-32.gif)
</br>

- Add product
>![](https://s3.gifyu.com/images/2021-05-10T17-49-30.gif)
</br>

- Mark as delivered an order
>![](https://s3.gifyu.com/images/2021-05-10T18-04-30.gif)
</br>

- Search a beer
>![](https://s3.gifyu.com/images/2021-05-10T18-11-35.gif)
</br>

- Fully responsive
>![](https://i.imgur.com/nFN2wu0.png)



## 📝Author

- [@vicGeo](https://github.com/vicGeo) 💻

