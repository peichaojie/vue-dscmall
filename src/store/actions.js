//引入获取用户列表的axios
import {getuserlist,search} from '@/api/index.js';

let actions = {
	async getuser(context,data){
		let result = await getuserlist(data);
		context.commit('getuser',result);
	},
	async searchuser(context,data){
		let result = await search(data);
		context.commit('searchuser',result)
	}

}

export default actions