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

export async function findBlogs (){
    try {
        let res = await axios.get("/dummyData/blogs.json");
        let data = await res['data'];
        if(data['status'] === "success" ){
            return data['data']
        }
    }catch (e) {
        return false
    }
}

export async function findReviews (){
    try {
        let res = await axios.get("/dummyData/reviews.json");
        let data = await res['data'];
        if(data['status'] === "success" ){
            return data['data']
        }
    }catch (e) {
        return false
    }
}