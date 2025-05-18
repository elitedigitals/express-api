import express from "express";
import bodyParser from "body-parser";

const app =express();
const PORT = 7000;

const router =express.Router();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));



let items = [
    {
        id: 1,
        name: 'Michael Lee',
        business: 'GreenField Farms',
        position: 'Operations Manager',
        description: 'An organic farming business focused on sustainable agriculture.'
      }
]









app.get('/', (req, res)=>{
    res.send("hello world")
})


//get all items
app.get("/items",(req, res)=>{
    res.send({items:items})});


//create new item and 
app.post('/items',(req, res)=>{

    const {name, business, position, description} = req.body;
    const item = {
        id: items.length + 1,
        name: name,
        business: business,
        position: position,
        description: description,
    };
    if (!name || !business || !position || !description) {
        res.status(400).send({message: 'Name and description are required'})
    } else {
        items.push(item);
        res.send({message: 'post addeded', data: item}); 
    }

res.send('user added to array')
});


//get item by id
app.get("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const foundItem = items.find(item => item.id === id);
  
    if (!foundItem) {
      return res.status(404).json({ message: `Item with ID ${id} not found.` });
    }
  
    res.status(200).json(foundItem);
  });


// delete item by id
app.delete("/items/:id",(req, res) => {
    const id = parseInt(req.params.id);
    const deletedItem = items.find(item => item.id === id);
  
    if (!deletedItem) {
      return res.status(404).json({ message: `Item with ID ${id} not found.` });
    }
  
    items = items.filter(item => item.id !== id);
  
    res.status(200).json({
      message: `Item with the name ${deletedItem.name} has been deleted.`,
      deletedItem: deletedItem
    });
  });
  
// update items by id
app.put('items/:id',(req, res) => {
    const id = parseInt(req.params.id);
    const { name, position, business, description } = req.body;
  
    if (!name || !position || !business || !description) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    const item = items.find(item => item.id === id);
  
    if (!item) {
      return res.status(404).json({ message: `User with ID ${id} not found.` });
    }
  
    item.name = name;
    item.position = position;
    item.business = business;
    item.description = description;
  
    res.status(200).json({
      message: `User with ID ${id} has been updated.`,
      updatedItem: item
    });
  });
  

//fuction for invalid url handler 
function handleInvalidRoutes(req, res, next) {
    res.status(404).json({
        error:"Route not found",
        message: `The webpage ${req.originalUrl} does not exist`
    })
    next();
}

//handles invalid urls
app.use(handleInvalidRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack); // log error
    res.status(500).json({
      error: "Internal Server Error",
      message: err.message || "Something went wrong"
    });
  });
  

app.listen(PORT, ()=>{
    console.log(`Server running on Port http://localhost:${PORT}`)
})