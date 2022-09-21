import express, {Application} from "express";
import { Server } from "http";
import userRoutes from './Routes/userRoutes';

const app: Application = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users', userRoutes);

const server: Server = app.listen(PORT,() => {
    console.log('Server running on port ',PORT);
});

interface Body {
    name: string;
    email: string
}