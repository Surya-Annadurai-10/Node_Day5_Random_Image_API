import { faker } from "@faker-js/faker";


const getRandomImg = (req,res) =>{
    const url = faker.image.url();
    console.log("url :" , url);
    
    if(!url){
        res.status(404).json({
           message : "Error in generating image link"
         })
         res.send({
            message : "Error in generating image link"
         })
        
    }else{
        res.status(200).json({
           message : "image link created successfully",
           url : url
        })
        res.send({
            message : "image link created successfully",
            url : url
         })
    }
}

export default getRandomImg;