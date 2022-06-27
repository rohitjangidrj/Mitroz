$(document).ready(function() {
    // Blog Layout

    var data = {
        "response": {
            "docs": [{
                "blogImg": "android-app-earn-money",
                "blogDate": "OCTOBER 6, 2018",
                "blogCategories": "Mitroz tech",
                "blogTitle": "How to make Android apps earn money?",
            }, {
                "blogImg": "3-blog-mobile-app-vs-web-app",
                "blogDate": "JUNE 27, 2018",
                "blogCategories": "Mitroz tech",
                "blogTitle": "Mobile App Vs Web App: Which one to choose?",
            }, {
                "blogImg": "2-blog-web-development-trends",
                "blogDate": "October 9, 2017",
                "blogCategories": "Mitroz tech",
                "blogTitle": "Full Stack Development",
            }, {
                "blogImg": "1-blog-full-stack",
                "blogDate": "October 9, 2017",
                "blogCategories": "Mitroz tech",
                "blogTitle": "Web Development Trends for this year",
            }]
        }
    },

    data = data.response.docs,
    blogs_home = $('.blogs_home'),
    html;

    $.each(data, function (key, val) {
        html = '<div class="item">',
        html += '<div class="cardWrapper wrapper">',
        html += '<div class="imgDateWrapper">',
        html += '<a  href="" class="imgWrapper">',
        html += '<img src="assets/siteContent/' + val.blogImg + '.png" alt="' + val.blogTitle + '" class="img-fluid">',
        html += '</a>',
        html += '<div class="dateWrapper">' + val.blogDate + '</div>',
        html += '</div>',
        html += '<div class="contentWrapper">',
        html += '<p class="blogCategories"><a href="">' + val.blogCategories + '</a></p>',
        html += '<h3 class="blogTitle"><a href="">' + val.blogTitle + '</a></h3>',
        html += '</div>',
        html += '</div>',
        html += '</div>',
        blogs_home.append(html);
    });

    // Inner Page Design
    $('.inner-blog-section .blogs_home .item').addClass('col-lg-4 col-md-4 col-sm-4 col-xs-12');
});