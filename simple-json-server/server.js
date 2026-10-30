import express from 'express'; 

const app = express();

const PORT = 5000;  

app.use(express.json());   

app.get('/', (req ,res) => {
     res.json({message: 'Welcome to the simple JSON server!'});
})

app.get('/users', (req ,res )=> {
    res.json( {
        success: true,
        users: [
            {id: 1, name: 'John Doe'},
            {id: 2, name: 'Jane Smith'},
            {id: 3, name: 'Alice Johnson'}
        ]
    })
})  

app.get('/products', (req ,res)=> {
    res.json({
        success: true,
        products: [
            {id: 1, name: 'Table', price: 10.99},
            {id: 2, name: 'Chair', price: 5.99},
            {id: 3, name: 'Lamp', price: 15.99}
        ]
    })
})   

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})