$(document).ready(function() {
    "use strict";

    // Navigation JSON Design

    var data = {
        menu: [{
            name: 'Home',
            link: '',
            title: 'Home',
            sub: null
        }, {
            name: 'About Us',
            link: 'about-us.html',
            title: 'About Us',
            sub: null
        }, {
            name: 'Services',
            link: 'services.html',
            title: 'Services',
            sub: [{
                name: 'What We Do',
                link: 'services.html',
                title: 'What We Do',
                sub: null
            }, {
                name: 'Mobile App Development',
                link: 'mobile-app-development-company.html',
                title: 'What We Do',
                sub: null
            }, {
                name: 'Web App Development',
                link: 'web-application-development-company.html',
                title: 'What We Do',
                sub: null
            }, {
                name: 'Hire Best UI/UX Developers',
                link: 'ui-ux-development-company.html',
                title: 'What We Do',
                sub: null
            }]
        }, {
            name: 'Work',
            link: 'work.html',
            title: 'Work',
            sub: null
        }, {
            name: 'Blog',
            link: 'blog.html',
            title: 'Blog',
            sub: null
        }, {
            name: 'Career',
            link: 'career.html',
            title: 'Career',
            sub: null
        }, {
            name: 'Contact Us',
            link: 'contact-us.html',
            title: 'Contact Us',
            sub: null
        }]
    };



    // listing nav dispaly

    var getMenuItem = function(itemData) {
        var item = $("<li>")
            .append(
                $("<a>", {
                    href: '/' + itemData.link,
                    html: itemData.name,
                    // title: itemData.title,
                })
            );
        if (itemData.sub) {
            var subList = $("<ul>");
            $.each(itemData.sub, function() {
                subList.append(getMenuItem(this));
            });
            item.append(subList);
        }
        return item;
    };

    // Dispaly navigation on frontend

    var $menu = $(".navigation-header");
    $.each(data.menu, function() {
        $menu.append(
            getMenuItem(this)
        );
    });
    $menu.menu();

    // $('nav li a[href^="' + location.pathname.split("/")[1] + '"]').addClass('active');


});