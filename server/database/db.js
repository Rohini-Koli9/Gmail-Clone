import mongoose from 'mongoose';


const Connection = () => {
    const DB_URI = `mongodb://user:rohinikoli12345@gmailclone-shard-00-00.cuvpo.mongodb.net:27017,gmailclone-shard-00-01.cuvpo.mongodb.net:27017,gmailclone-shard-00-02.cuvpo.mongodb.net:27017/?ssl=true&replicaSet=atlas-h5n9wq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=gmailclone`

    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error.message)
    }
}

export default Connection;