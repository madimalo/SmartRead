var config = {};

config.host = '127.0.0.1';
config.port = 27017;

// var url0 = 'http://sports.espn.go.com/espn/rss/nba/news';
// var url1 = 'http://tech2ipo.com/feed';//tech
// var url2 = 'http://rss.sina.com.cn/news/marquee/ddt.xml';//news
// var url3 = 'http://cn.nowness.com/issue/syndicate?output=rss' //fashion
// var url4 = 'http://www.ftchinese.com/rss/feed';//finance
// var url5 = 'http://feed.mtime.com/movienews.rss';//movie
// var url6 = 'http://sports.163.com/special/00051K7F/rss_sportslq.xml';//sports

// var urllist = [
// 	'http://sports.espn.go.com/espn/rss/nba/news',
// 	'http://tech2ipo.com/feed',
// 	'http://rss.sina.com.cn/news/marquee/ddt.xml',
// 	'http://cn.nowness.com/issue/syndicate?output=rss',
// 	'http://www.ftchinese.com/rss/feed',
// 	'http://feed.mtime.com/movienews.rss',
// 	'http://sports.163.com/special/00051K7F/rss_sportslq.xml'];

config.sites = {
	
	news: {

	},

	sports: {

	},

	tech: {
		url1: "http://tech2ipo.com/feed",
		url2: "http://www.ifanr.com/feed",
		url3: "http://www.36kr.com/feed",
		url4: "http://www.leiphone.com/feed", //not working with image and link
		url5: "http://feeds.geekpark.net" //not working with image
	},

	web: {

	},

	fashion: {
		url1: "http://www.fashiondes.com/rss",
		url2: "http://www.haibao.cn/feed/"

	},

	education: {

	},

	movie: {
		url1: "http://smweekly.feedsportal.com/c/35020/f/646841/index.rss",
		url2: "http://news.baidu.com/n?cmd=1&class=enternews&tn=rss"		

	},

	finance: {

	}
}

config.category = {
	'http://www.ifanr.com/feed' : 'tech',
	'http://tech2ipo.com/feed' : 'tech'
}

module.exports = config;