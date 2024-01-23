import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';

const techStacks = [
    {
        name:"ReactJS",
        image:"https://www.freecodecamp.org/news/content/images/2022/04/featured.jpg",
        href:"https://react.dev/blog/2023/03/16/introducing-react-dev",
        rating:5,
        description:"React is a JavaScript library for building user interfaces.The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.",
        id:1
    },
    {
        name:"JS",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkYHbdJN_C7hPWaUJJKVn6ClrLYlrMZaVLYnjYxhF-eA&s",
        href:"https://www.w3schools.com/js/",
        rating:5,
        description:"JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
        id:2
    },
    {
        name:"HTML",
        image:"https://www.devopsschool.com/blog/wp-content/uploads/2022/03/html.jpg",
        href:"https://www.geeksforgeeks.org/html-tutorial/",
        rating:4,
        description:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
        id:3
    },
    {
        name:"CSS",
        image:"https://www.skyminds.net/wp-content/uploads/css-banner.jpg",
        href:"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
        rating:3,
        description:"Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. ",
        id:4
    },
    {
        name:"AWS",
        image:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
        href:"https://aws.amazon.com/console/",
        rating:4,
        description:"Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis. Clients will often use this in combination with autoscaling.",
        id:5
    },
    ,
    {
        name:"DevOPS",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eKWnVJFY6rCuapZbFiOg4eKg7nj2Af9hVQ&usqp=CAU",
        href:"https://aws.amazon.com/devops/what-is-devops/",
        rating:5,
        description:"DevOps is a methodology in the software development and IT industry. Used as a set of practices and tools, DevOps integrates and automates the work of software development and IT operations as a means for improving and shortening the systems development life cycle. ",
        id:6
    }
]

export default function MediaCard() {
  return (
    <>
  {techStacks.map(item=>
  <Card sx={{ maxWidth: 345 }} id = {item.id}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.image}
        title={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Rating name="read-only" value={item.rating} readOnly />
        <Link href={item.href}>Learn More</Link>
      </CardActions>
    </Card>)}
    </>
   
    
  );
}
