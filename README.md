# Front-Commerce Lite - Thème Data
*Prototype your next eCommerce experience using modern web technologies.*

Front-Commerce is a React application with a GraphQL middleware for building eCommerce stores backed by existing headless platforms such as Magento2. [Learn more about the product.](https://developers.front-commerce.com/)

## Theme Data - Overview
With this theme, we show how easy it is to connect Front-Commerce Lite with an external service and start working with it.  As an example, we choose to connect our product with an external database :  DataTourisme.
Data is a powerful way to learn about your consumers. You can learn a lot about their preferences, what they are searching, which page they’ve seen and more…

In our theme, we choose to play with data concerning French Cultural Sites. We wanted to create a custom Landing Page using these data. the first sites are currently display on the first section. The description is directly coming from DataTourisme’s api.

Below these sites, we choose to display an overall idea of what users can find on DataTourisme’s api. We add a simple chart presenting every type of cultural site available and how many of it the user could find on the site. This is a generic chart, used in a simple example. You can do a lot more with the database and imagination.

And you, what would you use datas for ?

## Installation instructions
[See Front-Commerce Lite general setup guide](https://github.com/front-commerce/front-commerce-lite/blob/master/README.md)

If you want to use the data you'll have to register on the [datatourisme website](https://www.datatourisme.gouv.fr/) and place in your project root folder a config.js exorting your api code

```
const app_key = "your_api_key";
export { app_key };
``` 

## Going in production
Convinced that Front-Commerce Lite’s stack is viable enough for your project? If yes, we achieved our goal!

You now have several solutions:

* start a project from scratch using these technologies. If your needs are simple it could be a solution, otherwise prepare yourself to months of work!
* compare with existing alternatives and choose the one which fits your needs and budget: features, architecture, test coverage and (if they are open source) the quality of their codebase
* fork Front-Commerce Lite in the open, follow our philosophy and architecture… and name it React Storefront :slightly_smiling_face:
* use Front-Commerce and start developing your features on top of a production ready solution right now!

Contact our team to get further information and contract a Front-Commerce license.

## License
MIT
