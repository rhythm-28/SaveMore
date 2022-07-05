# SaveMore

A full-fledged e-commerce web application that supports features such as user registration, posting of products, add to cart, and payment options. It has two panels - one each for buyer and seller and performs CRUD (Create, Read, Update, Delete) operations on both panels. 

## Live Demo

https://drive.google.com/file/d/1hsYTn-7DWD-KHo9TBSqubd9j9PXK0hmU/view?usp=sharing

## Deployed Project

https://save-more.herokuapp.com/

## Features and Interfaces

BUYER PANEL

- Seamless landing page

<img width="958" alt="image" src="https://user-images.githubusercontent.com/77749781/177083943-9f209734-3a1d-4775-a495-2672da17d15a.png">


- Signup/Login using Passport.js. Users can register themselves and start buying from a variety of products.

![signup](https://user-images.githubusercontent.com/77749781/177206744-4c5b1451-dddf-43a6-9ba3-65a883f34c1e.jpeg)


- Home Page: Has a signout button with app cards for different products.

![products](https://user-images.githubusercontent.com/77749781/177206787-f9f7eef3-a3e3-444d-8c49-0b5a6aa7c120.jpeg)


- Product Page: Preview product with detailed description along with multiple images.

<img width="948" alt="image" src="https://user-images.githubusercontent.com/77749781/177206846-f16f7adb-0eff-4af3-ae50-11646b1a54e5.png">


- Cart : It supports features such as quantity change and add/remove products.

<img width="960" alt="image" src="https://user-images.githubusercontent.com/77749781/177254090-be7bfc5a-c915-4e06-be4c-9b12a14126a9.png">


- Payment: Once the buyer is ready to buy, he can proceed to Checkout from Cart.

![payment](https://user-images.githubusercontent.com/77749781/177206761-617fa8ed-7bea-4dbc-bcfc-15bd9d3a8d35.jpeg)


Payment Options: Buyer can choose among different payment options like Netbanking, Debit Card, Credit Card, UPI, etc.

![payment2](https://user-images.githubusercontent.com/77749781/177206771-dc3ae81a-5258-4bf1-9cc8-df1eea9d8d74.jpeg)


SELLER PANEL

- Become a seller: Users, once registered, have the option to become sellers. 

![seller](https://user-images.githubusercontent.com/77749781/177206777-ffff8683-c8cf-412b-bdf2-a1dceb1a4aa1.jpeg)


- Add Product: Once, users becomes sellers, they can start adding their products. 

<img width="948" alt="image" src="https://user-images.githubusercontent.com/77749781/177254853-c1ec1037-a51b-4a9e-9290-f3a0e264e965.png">


- Seller Profile

<img width="953" alt="image" src="https://user-images.githubusercontent.com/77749781/177255165-f8061539-6355-4b1a-aad0-b4c21767798e.png">


## Setup Instructions

- Clone the repository

```bash
  git clone https://github.com/rhythm-28/SaveMore.git
```

- Change the current working directory

```bash
  cd SaveMore
```

- Install the front-end packages

```bash
  cd client
  npm i 
```
- Install the back-end packages

```bash
  cd ..
  npm i 
```



- Run the MERN project

```bash
  npm run dev
```


## Technologies Used:

For front-end, following tech stack were used:
1) React.js
2) Material-UI
3) Redux
4) Bootstrap

For back-end, following tech stack were used:
1) Node.js
2) Express.js
3) Passport.js
4) Mongo DB

