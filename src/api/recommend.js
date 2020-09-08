import axios from 'axios'

// const app=require("C://Users//11390//myprojects//NeteaseCloudMusicApi//app.js");
// var server=app.server;
// const keywords="海阔天空";
// console.log(server.search(keywords,res));
 

// app.post('/search?keywords= 海阔天空', function (req, res) {
 
//     console.log(req.query);  // 上传的文件信息
  

//  })

//寻找歌手
 const server = 'http://localhost:3000';

 export function getSearch() {

  return axios.get(server+'/search', {
    params: {
        keywords: "周杰伦"
    }
  })
  .then(function (response) {
      return  Promise.resolve(response.data.result.songs)
    console.log(response.data.result.songs);
  })
  .catch(function (error) {
    console.log(error);
  });
 }

 //热门歌单
 export function getPlaylist() {
///top/playlist?limit=10&order=new
  return axios.get(server+'/top/playlist', {
    params: {
      limit: 8
  }
  })
  .then(function (response) {
      return  Promise.resolve(response.data.playlists)
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 }

 /** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
   axios.post(server+url, QS.stringify(params))
  .then(res => {
   resolve(res.data);
  })
  .catch(err =>{
   reject(err.data)
  })
  });
 }
