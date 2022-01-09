import axios from "axios";

const GetData = async () => {

    try {
        const data = await axios.get('https://data.covid19india.org/data.json');
        return data;
    } catch(err) {
        console.log('getting error in API');
    }
    
    
}
export default GetData;