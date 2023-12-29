import axios from "axios";


export async function findProducts (){
    try {
        let res = await axios.get("/dummyData/products.json");
        let data = await res['data'];
        if(data['status'] === "success" ){
            return data['data']
        }
    }catch (e) {
       return false
    }
}