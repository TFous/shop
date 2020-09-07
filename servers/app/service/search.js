const Service = require('egg').Service;

class SearchService extends Service {
    // ASC   desc
    async get(category,pageNumber=1,name,pageSize=10,order='ASC') {
        let data;
        let offset = (pageNumber - 1) * pageSize
        let limit = pageSize
        if(category==="所有"){
            data = await this.app.mysql.query("select * from product where product_name like ? limit ?,?", ["%"+name+"%",offset,limit]);
        }else{
            data = await this.app.mysql.query("select * from product where category = ? and product_name like ? limit ?,?", [category,"%"+name+"%",offset,limit]);
        }
        return data
    }
    async getCount(category,name) {
        let totalCount;
        if(category==="所有"){
            totalCount = await this.app.mysql.query("select count(*) as num from product where product_name like ? ", ["%"+name+"%"]);
        }else{
            totalCount = await this.app.mysql.query("select count(*) as num from product where category = ? and product_name like ?", [category,"%"+name+"%"]);
        }
        var dataString = JSON.stringify(totalCount);
        var data = JSON.parse(dataString);
        return data[0]["num"]
    }

}

module.exports = SearchService;