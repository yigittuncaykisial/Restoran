import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer Q7gGVG5ZWysW1RzNgu4ufZRsyOi_gdMvXVDDaW13lzr4cWmMjRgWsT5R5lo7cw5EitVM09J3tNPz972Nevs6oIn2i0586C16XDSn6CX69Os_3K8q16kKdJuorH2GZnYx'
    }
})