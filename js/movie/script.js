// 配置  
// 电影接口
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
// DOM编程
// 返回DOM 节点对象
const oForm = document.querySelector('#form')
const oInput = document.querySelector('#search')
console.log(oForm);
//获取电影
const getMovies = function (keyword) {
    console.log(keyword);
    let reqUrl = '';

    if (keyword) {
        //搜索
        reqUrl = SEARCH_API + keyword;
    }else{
        reqUrl = API_URL;
    }

    fetch(reqUrl).then(res => {
        // 二进制流
        console.log(res);
        return res.json();
    }).then(data => {
        showMovies(data.results);
    })
}

const showMovies = function (movies) {
    main.innerHTML = '';
    main.innerHTML = movies.map(movie => {
        // es6 结构
        // 右边解给左侧
        const {poster_path,title,vote_average,overview} = movie;
        return `
        <div class="movie">
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span>${vote_average}</span>
            </div>
            <div class="overview">
              <h3>Overview</h3>
              ${overview}
            </div>
        </div>
        `
    }
    ).join("")
}

window.onload = function(){
    getMovies();
}

oForm.addEventListener('submit', function (e) {
    // 事件对象 event 简写为 e
    console.log(e,'////');
    e.preventDefault()
    const serach = oInput.value.trim();
    if (serach) {
        // 搜索电影
        getMovies(serach)
    }
    else {
        console.log('请输入搜索内容')
    }
    
})