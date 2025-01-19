
# Day 1: Laying the Foundation for Your Marketplace Journey 

## Project Title

Sports Utilities E-Commerce Platform 

## Prepared By

 Ahzaz Ahmed

### Day 1: Laying the Foundation for Your Marketplace Journey

#### Objective

To build an e-commerce platform that specializes in sports utilities, such as sports shoes, casual shoes, hoodies, trousers, and training outfits for men, women, and kids.

## Task for Day 1

### Step 1
- #### Marketplace Type: 
     General E-Commerce
- #### Primary Purpose:
   The platform aims to provide a wide range of high-quality sports utilities, catering to the needs of athletes, fitness enthusiasts, and families. It will serve as a one-stop shop for training outfits and accessories, ensuring convenience, variety, and competitive pricing.

### Step 2: Define Your Business Goals

- #### What problem does your marketplace aim to solve?
  The platform addresses the difficulty customers face in finding a comprehensive collection of affordable and stylish sportswear and training gear for all age groups. By offering a wide range of products under one roof, the marketplace saves customers time and effort.

- #### Who is your target audience?

  Fitness enthusiasts, athletes, and trainers.

  Families looking for sports outfits for kids.

  Individuals seeking high-quality, affordable, and stylish activewear.

- #### What products or services will you offer?

  Products:

  Sports Shoes
 
   Casual Shoes

  Hoodies

  Trousers

  Training Outfits for Men, Women, and Kids

- #### What will set your marketplace apart?

  Affordability: Competitive pricing with seasonal discounts.

  Customization: Options for personalized activewear, such as name or logo printing.

  Variety: A comprehensive collection of styles and sizes for all age groups.

  Convenience: User-friendly website design and seamless checkout process.

### Step 3: Create a Data Schema

- #### Entities in Marketplace:
  - ##### product(id,tags,name,discription,price,categoryId,stock,varient)
  - ##### product category(id,name,discription)
  - ##### customer(name,email,password,phone, address,id)
  - ##### login(id,customerId,loginTime,logoutTime)
  - ##### signup(id,customerId,signupDate)
  - ##### order_details(id,customerId,orderDate,totalAmount,shippingId)
  - ##### carts(id,customerId,createdAt)
  - ##### cart_item(id,cartId,produstId,quantity)
  - ##### shipping_details(id,orderId,address,city,postalCode,country)
  - ##### payment_datails(paymentId,orderId,amount,method,status,paymentDate)



- #### Relationships Diagram Between Entities:

[Relationship Diagram](https://app.eraser.io/workspace/1hbFgpQdVBOi5E720VVw)

