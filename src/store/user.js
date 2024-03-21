import {createStore} from 'delfin'

export default createStore({
    state: {
        userInfo:{
            id:1,
            username:'zhangsan',
        }
    },
    action:{
        setUserInfo(state,userInfo){
            store.userInfo = userInfo;
        }
    }

})