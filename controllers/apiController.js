const axios = require('axios')

class apiController{
    static getNews(req, res, next) {
        const NEWS_API = process.env.NEWS_API
        axios({
            method: 'GET',
            url: 'https://newsapi.org/v2/top-headlines',
            params: {
                country: 'id',
                apiKey: NEWS_API
            }
        })
        .then((result) => {
            let listNews = []
            result.data.articles.forEach(element => {
                listNews.push({
                    source: element.source.name,
                    title: element.title,
                    description: element.description,
                    url: element.url,
                    author: element.author,
                    imageUrl: element.urlToImage
                })
            });
            res.status(200).json(listNews)
            
        })
        .catch((error) => {
            next(error)
        })
    }

    static getPrayerTime(req, res, next) {
        axios({
            method: 'GET',
            url: 'https://api.pray.zone/v2/times/today.json',
            params: {
                city: 'jakarta'
            }
        })
        .then((result) => {
            res.status(200).json(result.data.results.datetime)
        })
        .catch((error) => {
            next(error)
        })
    }
}

module.exports = apiController