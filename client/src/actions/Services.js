import axios from 'axios'


export default {
    fetch: async (action, ) => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        let data = axios.get(`/api/${action}/`, { cancelToken: source.token })
                        .then((res) => {
                            
                            return res.data
                        }).catch((err) => {
                            if (axios.isCancel(err)) {
                            return "axios request cancelled"
                            }
                            return err
                        });

        return data
        
        
    }
}