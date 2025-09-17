import mongoose from "mongoose"

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log('\n MONGODB connected successfully !! DB HOST : `${connectionInstance.connection.host}`');
        
    }catch(err){
        console.log("Mongo DB connection failed \n");
        console.log(err)
        process.exit(1);
        
        
    }
}
export default connectDB