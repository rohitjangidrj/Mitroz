$(document).ready(function() {

    // Company Logo Section

    var data = {
            "response": {
                "docs": [{
                    "companyLogoName": "BVG India",
                    "companyLogoImg": "bvgindia.jpg",
                }, {
                    "companyLogoName": "Tagloy",
                    "companyLogoImg": "tagloy.jpg",
                }, {
                    "companyLogoName": "Innowave",
                    "companyLogoImg": "innowave.jpg",
                }, {
                    "companyLogoName": "Manar Tools",
                    "companyLogoImg": "manartools.jpg",
                }, {
                    "companyLogoName": "MXAP Financial",
                    "companyLogoImg": "mxap-financial.jpg",
                }, {
                    "companyLogoName": "Surple Play",
                    "companyLogoImg": "surple-play.jpg",
                }]
            }
        },

        data = data.response.docs,
        companyLogo = $('.companyLogo'),
        html;

    $.each(data, function(key, val) {
        html = '<div class="item">',
            html += '<div class="wrapper">',
            html += '<img src="assets/siteContent/' + val.companyLogoImg + '" alt="' + val.companyLogoName + '" class="img-fluid">',
            html += '</div>',
            html += '</div>',
            companyLogo.append(html);
    });

    // About Section

    var data = {
            "response": {
                "docs": [{
                    "aboutNumberCount": "9",
                    "aboutCountContentTitle": "Years in Service",
                    "aboutCountContentDiscrption": "Years of cooperation with both corporations and startups.",
                }, {
                    "aboutNumberCount": "100",
                    "aboutCountContentTitle": "Prosperity",
                    "aboutCountContentDiscrption": "Years of cooperation with both corporations and startups.",
                }, {
                    "aboutNumberCount": "100",
                    "aboutCountContentTitle": "Guarantee",
                    "aboutCountContentDiscrption": "Years of cooperation with both corporations and startups.",
                }, {
                    "aboutNumberCount": "100",
                    "aboutCountContentTitle": "Quality",
                    "aboutCountContentDiscrption": "Years of cooperation with both corporations and startups.",
                }]
            }
        },

        data = data.response.docs,
        aboutCountNumber = $('.aboutCountNumber'),
        html;

    $.each(data, function(key, val) {
        html = '<div class="wrapper">',
            html += '<div class="numberCount"><span class="count">' + val.aboutNumberCount + '</span>%</div>',
            html += '<div class="aboutCountContent">',
            html += '<h3>' + val.aboutCountContentTitle + '</h3>',
            html += '<p>' + val.aboutCountContentDiscrption + '</p>',
            html += '</div>',
            html += '</div>',
            aboutCountNumber.append(html);
    });


    // Services Section

    var data = {
            "response": {
                "docs": [{
                    "subTitleServiceSectionInner": "Mobile App Development",
                    "subHeadingh3ServiceSectionInner": "For Technology Start-ups",
                    "textDiscrptionServiceSectionInner": "We design, deliver and deploy the core business platforms for technology start-ups who are looking to create a buzz and build rapid market traction with their inspired innovation.",
                    "viewMoreServiceSectionInner": "viewMore",
                    "wrapperImgServiceSectionInner": "mobile-application-architect",
                    "orderServiceSectionInner": "0",
                }, {
                    "subTitleServiceSectionInner": "Web Development",
                    "subHeadingh3ServiceSectionInner": "For IT Businesses",
                    "textDiscrptionServiceSectionInner": "Partnering strategically with large IT companies, we work as their dedicated resource for their web/mobile development projects with end-to-end support.",
                    "viewMoreServiceSectionInner": "viewMore",
                    "wrapperImgServiceSectionInner": "website-development-solution",
                    "orderServiceSectionInner": "1",
                }, {
                    "subTitleServiceSectionInner": "UI / UX",
                    "subHeadingh3ServiceSectionInner": "For SME and MNC Clients",
                    "textDiscrptionServiceSectionInner": "We develop powerful customized software/ERP solutions for small, mid-size and enterprise clients looking to maximize their IT spend.",
                    "viewMoreServiceSectionInner": "viewMore",
                    "wrapperImgServiceSectionInner": "we-design-experience",
                    "orderServiceSectionInner": "0",
                }]
            }
        },

        data = data.response.docs,
        serviceSectionInner = $('#serviceSectionInner'),
        html;

    $.each(data, function(key, val) {
        html = '<div class="row d-flex justify-content-between align-items-center mb-5">',
            html += '<div class="col-md-5 order-sm-' + val.orderServiceSectionInner + '">',
            html += '<div class="serviceWrapperContent">',
            html += '<section class="sectionTitHeaDis">',
            html += '<p class="subTitle">' + val.subTitleServiceSectionInner + '</p>',
            html += '<h3 class="subHeadingh3">' + val.subHeadingh3ServiceSectionInner + '</h3>',
            html += '<p class="textDiscrption">' + val.textDiscrptionServiceSectionInner + '</p>',
            html += '<a href="#" class="primaryBtn viewMore">' + val.viewMoreServiceSectionInner + '</a>',
            html += '</section>',
            html += '</div>',
            html += '</div>',
            html += '<div class="col-md-4">',
            html += '<div class="wrapperServicesImg">',
            html += '<div class="wrapperImgBg">',
            html += '<img src="assets/main/ux_ui_bg.svg" class="img-fluid">'
        html += '</div>',
            html += '<div class="wrapperImg">',
            html += '<img src="assets/main/' + val.wrapperImgServiceSectionInner + '.svg" alt="' + val.subHeadingh3ServiceSectionInner + '" class="img-fluid">',
            html += '</div>',
            html += '</div>',
            html += '</div>',
            html += '</div>',
            serviceSectionInner.append(html);
    });

    // Count Numkber

    var data = {
            "response": {
                "docs": [{
                    "serviceNumberCount": "8",
                    "serviceNumberContent": "Years in Service",
                }, {
                    "serviceNumberCount": "120",
                    "serviceNumberContent": "Clients",
                }, {
                    "serviceNumberCount": "100000",
                    "serviceNumberContent": "Lines of Code",
                }, {
                    "serviceNumberCount": "200",
                    "serviceNumberContent": "Projects Delivered",
                }]
            }
        },

        data = data.response.docs,
        serviceCount = $('.serviceCount'),
        html;

    $.each(data, function(key, val) {
        html = '<div class="wrapper">',
            html += '<div class="number"><span class="count">' + val.serviceNumberCount + '</span><span>+</span></div>',
            html += '<div class="content">' + val.serviceNumberContent + '</div>',
            html += '</div>',
            serviceCount.append(html);
    });

    // Testimonial

    var data = {
            "response": {
                "docs": [{
                    "testimonialIndexDate": "12 January, 2021",
                    "testimonialIndexContent": "Lorem ipsum dolor sit amet, consectetuer adipi - scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis",
                    "testimonialIndexClientName": "Nisha Kumari",
                    "testimonialIndexClientDegination": "Ux Designer",
                    "testimonialIndexClientImage": "dummyImage",
                }, {
                    "testimonialIndexDate": "12 January, 2021",
                    "testimonialIndexContent": "Lorem ipsum dolor sit amet, consectetuer adipi - scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis",
                    "testimonialIndexClientName": "Neha Roy",
                    "testimonialIndexClientDegination": "Ux Designer",
                    "testimonialIndexClientImage": "nehaDummyImage",
                }, {
                    "testimonialIndexDate": "12 January, 2021",
                    "testimonialIndexContent": "Lorem ipsum dolor sit amet, consectetuer adipi - scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis",
                    "testimonialIndexClientName": "Anita Kumari",
                    "testimonialIndexClientDegination": "Ux Designer",
                    "testimonialIndexClientImage": "dummyImage",
                }, {
                    "testimonialIndexDate": "12 January, 2021",
                    "testimonialIndexContent": "Lorem ipsum dolor sit amet, consectetuer adipi - scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis",
                    "testimonialIndexClientName": "Neha Roy",
                    "testimonialIndexClientDegination": "Ux Designer",
                    "testimonialIndexClientImage": "nehaDummyImage",
                }]
            }
        },

        data = data.response.docs,
        testimonialIndex = $('.testimonialIndex'),
        html;

    $.each(data, function(key, val) {
        html = '<div class="item">',
            html += '<div class="cardWrapper wrapper">',
            html += '<div class="wrapperContent">',
            html += '<div class="dateTestimonial">' + val.testimonialIndexDate + '</div>',
            html += '<div class="contentWrapper">' + val.testimonialIndexContent + '</div>',
            html += '<div class="clientName">' + val.testimonialIndexClientName + '</div>',
            html += '<div class="clientDegination">' + val.testimonialIndexClientDegination + '</div>',
            html += '</div>',
            html += '<div class="clientImg">',
            html += '<img src="assets/siteContent/' + val.testimonialIndexClientImage + '.png" alt="' + val.testimonialIndexClientName + '" class="img-fluid">',
            html += '</div>',
            html += '</div>',
            html += '</div>',
            testimonialIndex.append(html);
    });


    // Footer Content

    // Contact Us Footer Section

    var data = {
            "response": {
                "docs": [{
                    "contactTitleContent": "Mobile",
                    "contactTitleLink": 'tel:',
                    "contactLinkContent": '+917066734606',
                    "contactUsContent": "+91-70667 34606",
                    "contactUsIcons": "phone",
                }, {
                    "contactTitleContent": "Email",
                    "contactTitleLink": 'mailto:',
                    "contactLinkContent": 'info@mitroztech.com',
                    "contactUsContent": "Info@mitroztech.com",
                    "contactUsIcons": "envelope",
                }, {
                    "contactTitleContent": "Address",
                    "contactTitleLink": 'https://',
                    "contactLinkContent": 'goo.gl/maps/ak5ys85LeSSnpFom7',
                    "contactUsContent": "3rd Floor, Above Bhavani Sweets, Gurudwara chowk, Near Akurdi Railway station, Akurdi, Pimpri-Chinchwad, Maharashtra, India, 411035",
                    "contactUsIcons": "map-marker",
                }, {
                    "contactTitleContent": "Follow Us On",
                    "contactTitleLink": '/',
                    "contactLinkContent": '/',
                    "contactUsContent": "/",
                    "contactUsIcons": "user",
                }]
            }
        },

        data = data.response.docs,
        corprateheadquarter = $('.corprateheadquarter'),
        html;

    $.each(data, function(key, val) {
        html = '<div class="contentFooter">',
            html += '<div class="icon">',
            html += '<i class="fa fa-' + val.contactUsIcons + '"></i>',
            html += '</div>',
            html += '<p><span>' + val.contactTitleContent + '</span>:<br> <a href="' + val.contactTitleLink + '' + val.contactLinkContent + '">' + val.contactUsContent + '</a></p>',
            html += '</div>',
            corprateheadquarter.append(html);
    });

    // Social Media All Link

    var data = {
            "response": {
                "docs": [{
                    "social_mediaTitle": "Facebook",
                    "social_mediaLink": "https://www.facebook.com/mitroztech",
                    "social_mediaIcons": "facebook",
                }, {
                    "social_mediaTitle": "Twitter",
                    "social_mediaLink": "https://twitter.com/mitroztech",
                    "social_mediaIcons": "twitter",
                }, {
                    "social_mediaTitle": "Linkedin",
                    "social_mediaLink": "https://www.linkedin.com/company/mitroz-technologies",
                    "social_mediaIcons": "linkedin",
                }]
            }
        },

        data = data.response.docs,
        social_media = $('.social_media'),
        html;

    $.each(data, function(key, val) {
        html = '<li>',
            html += '<a href="' + val.social_mediaLink + '" target="_blank" title="' + val.social_mediaTitle + '">',
            html += '<div class="icon">',
            html += '<i class="fa fa-' + val.social_mediaIcons + '  aria-hidden="true""></i>',
            html += '</div>',
            html += '<span>' + val.social_mediaTitle + '</span>',
            html += '</a>',
            html += '</li>',
            social_media.append(html);
    });

    // Copyright Content
    var data = {
            "response": {
                "docs": [{
                    "copyrightTitle": "Mitroz Technologies, India,",
                    "copyrightCompanyName": "BluBrandz Technologies Pvt. Ltd.",
                    "copyrightCompanyLink": "https://blubrandzglobal.in",
                }]
            }
        },

        data = data.response.docs,
        copyright = $('.copyright'),
        html;

    $.each(data, function(key, val) {
        html = 'Copyright &#169; <span><a href="/" title="' + val.copyrightTitle + '">' + val.copyrightTitle + '</a> </span>',
            html += '2021 All rights reserved.<span>',
            copyright.append(html);
    });


    // About Us Page

    // Mission Vision

    var data = {
            "response": {
                "docs": [{
                    "missionVisionTitle": "Mission",
                    "missionVisionDiscrption": "To be a leader and the most successful Service Company in the Information Technology and Internet Service Industry. ",
                    "missionVisionIconImg": "mission",
                }, {
                    "missionVisionTitle": "Vision",
                    "missionVisionDiscrption": "Become the most recommendable service company in every market we serve and revolutionize this company to have the strength of a big company combined with the leanness and agility of a small company.",
                    "missionVisionIconImg": "vision",
                }]
            }
        },

        data = data.response.docs,
        missionVisionId = $('.missionVisionId');
    html;

    $.each(data, function(key, val) {
        html = '<div class="cardWrapper">',
            html += '<div class="icon">',
            html += '<div class="iconBg">',
            html += '<img src="/assets/main/' + val.missionVisionIconImg + '-ring.png" alt="' + val.missionVisionTitle + '" class="img-fluid">',
            html += '</div>',
            html += '<div class="iconImg">',
            html += '<img src="/assets/main/' + val.missionVisionIconImg + '.png" alt="' + val.missionVisionTitle + '" class="img-fluid">',
            html += '</div>',
            html += '</div>',
            html += '<div class="content">',
            html += '<h3 class="title">' + val.missionVisionTitle + '</h3>',
            html += '<p class="textDiscrption">' + val.missionVisionDiscrption + '</p>',
            html += '</div>',
            html += '</div>',
            missionVisionId.append(html);
    });

    // Case Studies Page USP

    var data = {
            "response": {
                "docs": [{
                    "aboutUSPageUSPTitle": "Client",
                    "aboutUSPageUSPDiscrption": "An IoT-based startup entity.",
                    "aboutUSPageUSPNumber": "01",
                }, {
                    "aboutUSPageUSPTitle": "Need/Challenge",
                    "aboutUSPageUSPDiscrption": "System development was stuck and project rollout was impacted as the promoters were low on resources to handle both development and marketing.",
                    "aboutUSPageUSPNumber": "02",
                }, {
                    "aboutUSPageUSPTitle": "Mitroz Solution",
                    "aboutUSPageUSPDiscrption": "We assigned a dedicated and highly competent resource well conversed in the IoT domain. We launched the app bug-free and also supported further progressive versions.",
                    "aboutUSPageUSPNumber": "03",
                }, {
                    "aboutUSPageUSPTitle": "Outcome",
                    "aboutUSPageUSPDiscrption": "Freed from the responsibilities of development, the Tagtalk team could focus effectively on marketing and promotional activities, which was crucial for generating revenue.",
                    "aboutUSPageUSPNumber": "04",
                }]
            }
        },

        data = data.response.docs,
        aboutUSPageUSP = $('#aboutUSPageUSP');
    html;

    $.each(data, function(key, val) {
        html = '<div class="cardWrapper wrapper">',
            html += '<div class="number">',
            html += '<span>' + val.aboutUSPageUSPNumber + '</span>',
            html += '</div>',
            html += '<div class="content">',
            html += '<h3 class="title">' + val.aboutUSPageUSPTitle + '</h3>',
            html += '<p class="discrption">' + val.aboutUSPageUSPDiscrption + '</p>',
            html += '</div>',
            html += '</div>',
            aboutUSPageUSP.append(html);
    });



    // Services Section Page

    var data = {
            "response": {
                "docs": [{
                    "servicesPageTitle": "Mobile Application Development",
                }, {
                    "servicesPageTitle": "Website Development",
                }, {
                    "servicesPageTitle": "Website Development",
                }]
            }
        },

        data = data.response.docs,
        servicesPageServ = $('.servicesPageServ'),
        html;

    $.each(data, function(key, val) {
        html = '<div class="wrapper">',
            html += '<h3 class="content">' + val.servicesPageTitle + '</h3>',
            html += '</div>',
            servicesPageServ.append(html);
    });


    // Services Page Section

    var data = {
            "response": {
                "docs": [{
                    // "subTitleServiceSectionInner": "Greater Flexibility",
                    "subHeadingh3ServiceSectionInner": "Greater Flexibility",
                    "textDiscrptionServiceSectionInner": "The ability to quickly scale up the team size and integrate seamlessly into the existing structure enables you to take up projects of all sizes and across all domains.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "greater_flexibility",
                    "orderServiceSectionInner": "0",
                }, {
                    // "subTitleServiceSectionInner": "Cost-effective Engagement",
                    "subHeadingh3ServiceSectionInner": "Cost-effective Engagement",
                    "textDiscrptionServiceSectionInner": "You don’t have to spend on onboarding new talent and keep paying them, even during lean times; you pay the new team members only for the specific project span. You also save in terms of employee benefits, insurance contribution, taxes, etc.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "cost-effective-engagement",
                    "orderServiceSectionInner": "1",
                }, {
                    // "subTitleServiceSectionInner": "Overcome Attrition",
                    "subHeadingh3ServiceSectionInner": "Overcome Attrition",
                    "textDiscrptionServiceSectionInner": "Employee churn can hamper your organization in multiple ways: it can affect productivity, quality, project timelines and even impact bottomline benefits. With Our Staff Augmentation service, you can effectively manage the fall-outs of attrition.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "overcome-attrition",
                    "orderServiceSectionInner": "0",
                }, {
                    // "subTitleServiceSectionInner": "Tap Into a Huge Talent Pool",
                    "subHeadingh3ServiceSectionInner": "Tap Into a Huge Talent Pool",
                    "textDiscrptionServiceSectionInner": "You don’t have to spend on onboarding new talent and keep paying them, even during lean times; you pay the new team members only for the specific project span. You also save in terms of employee benefits, insurance contribution, taxes, etc.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "huge-talent-pool",
                    "orderServiceSectionInner": "",
                }]
            }
        },

        data = data.response.docs,
        servicePageSectionInner = $('#servicePageSectionInner'),
        html;

    $.each(data, function(key, val) {
        html = '<div class="row d-flex justify-content-between align-items-center mb-5">',
            html += '<div class="col-md-5 order-sm-' + val.orderServiceSectionInner + '">',
            html += '<div class="serviceWrapperContent">',
            html += '<section class="sectionTitHeaDis">',
            // html += '<p class="subTitle">' + val.subTitleServiceSectionInner + '</p>',
            html += '<h3 class="subHeading subHeadingh3">' + val.subHeadingh3ServiceSectionInner + '</h3>',
            html += '<p class="textDiscrption">' + val.textDiscrptionServiceSectionInner + '</p>',
            html += '<a href="#" class="primaryBtn">' + val.viewMoreServiceSectionInner + '</a>',
            html += '</section>',
            html += '</div>',
            html += '</div>',
            html += '<div class="col-md-4">',
            html += '<div class="wrapperServicesImg">',
            html += '<div class="wrapperImgBg">',
            html += '<img src="assets/main/ux_ui_bg.svg" class="img-fluid">'
        html += '</div>',
            html += '<div class="wrapperImg">',
            html += '<img src="assets/main/' + val.wrapperImgServiceSectionInner + '.png" alt="' + val.subHeadingh3ServiceSectionInner + '" class="img-fluid">',
            html += '</div>',
            html += '</div>',
            html += '</div>',
            html += '</div>',
            servicePageSectionInner.append(html);
    });



    // Work Page Section

    var data = {
            "response": {
                "docs": [{
                    // "subTitleServiceSectionInner": "Greater Flexibility",
                    "subHeadingh3ServiceSectionInner": "BVG",
                    "textDiscrptionServiceSectionInner": "BVG Agro Safe, developed by BVG Life Sciences Ltd, a BVG Group Company, is an all-in-one crop protector that protects all crops from all pests and diseases (viral, fungal and bacterial). It acts by blocking...",
                    "viewMoreServiceSectionInner": "View Project",
                    "wrapperImgServiceSectionInner": "greater_flexibility",
                    "orderServiceSectionInner": "0",
                }, {
                    // "subTitleServiceSectionInner": "Cost-effective Engagement",
                    "subHeadingh3ServiceSectionInner": "E-Resource",
                    "textDiscrptionServiceSectionInner": "A simple app to manage your ERP knowledge: Solutions, modules, vendors...A system developed with concepts of reduction and optimization of costs, processes, information security and work dynamics of the…",
                    "viewMoreServiceSectionInner": "View Project",
                    "wrapperImgServiceSectionInner": "cost-effective-engagement",
                    "orderServiceSectionInner": "1",
                }, {
                    // "subTitleServiceSectionInner": "Overcome Attrition",
                    "subHeadingh3ServiceSectionInner": "GreenPatti",
                    "textDiscrptionServiceSectionInner": "India is an agricultural country and 65% of the total population of the country depends on agriculture. But this sector is still struggling with lot of difficulties in selling, buying and marketing their…",
                    "viewMoreServiceSectionInner": "View Project",
                    "wrapperImgServiceSectionInner": "overcome-attrition",
                    "orderServiceSectionInner": "0",
                }, {
                    // "subTitleServiceSectionInner": "Mahindra Lifespace",
                    "subHeadingh3ServiceSectionInner": "Mahindra Lifespace",
                    "textDiscrptionServiceSectionInner": "Vendor management app for Mahindra Lifespace vendors. Easy-to-use Small Business App to manage purchase orders, suppliers, inventory items and much more. This App provides easy way to create and manage…",
                    "viewMoreServiceSectionInner": "View Project",
                    "wrapperImgServiceSectionInner": "huge-talent-pool",
                    "orderServiceSectionInner": "1",
                }, {
                    // "subTitleServiceSectionInner": "Overcome Attrition",
                    "subHeadingh3ServiceSectionInner": "MXAP",
                    "textDiscrptionServiceSectionInner": "MXAP FINANCAL PVT LTD is a young and vibrant company established with the vision of providing Capital Market Training education on the “learn and earn” concept. Whether you are a student seeking insights…",
                    "viewMoreServiceSectionInner": "View Project",
                    "wrapperImgServiceSectionInner": "overcome-attrition",
                    "orderServiceSectionInner": "0",
                }, {
                    // "subTitleServiceSectionInner": "Mahindra Lifespace",
                    "subHeadingh3ServiceSectionInner": "Bet Mate Adda",
                    "textDiscrptionServiceSectionInner": "Vibe of betting is always in the air. BET MATE ADDA is Virtual Sport betting platform application; no bets are engaged or remunerated in real cash. BETMATE ADDA offers its users to virtual betting possibility…",
                    "viewMoreServiceSectionInner": "View Project",
                    "wrapperImgServiceSectionInner": "huge-talent-pool",
                    "orderServiceSectionInner": "1",
                }, {
                    // "subTitleServiceSectionInner": "Overcome Attrition",
                    "subHeadingh3ServiceSectionInner": "PSI Blood Bank",
                    "textDiscrptionServiceSectionInner": "PSI blood bank is an top blood bank in PCMC area with their quality service to provide a blood to needy on time.They decided to have their management system which will help them giving more quality for…",
                    "viewMoreServiceSectionInner": "View Project",
                    "wrapperImgServiceSectionInner": "overcome-attrition",
                    "orderServiceSectionInner": "0",
                }, {
                    // "subTitleServiceSectionInner": "Mahindra Lifespace",
                    "subHeadingh3ServiceSectionInner": "Manar Tools",
                    "textDiscrptionServiceSectionInner": "Manar tools Pvt. Ltd. is supplier to all major sectors like Automobiles, Engineering, power, forging, aerospace & forming industry. They are specialize in manufacturing PCD/CBN TOOLS/INSERTS. Mitroz…",
                    "viewMoreServiceSectionInner": "View Project",
                    "wrapperImgServiceSectionInner": "huge-talent-pool",
                    "orderServiceSectionInner": "1",
                }, {
                    // "subTitleServiceSectionInner": "Mahindra Lifespace",
                    "subHeadingh3ServiceSectionInner": "Fort Point",
                    "textDiscrptionServiceSectionInner": "Fortpoint arranges fleet to their customer who may be the business professional or any ordinary user who wants to travel from one location to another.They were facing problem by maintaining excel sheets…",
                    "viewMoreServiceSectionInner": "View Project",
                    "wrapperImgServiceSectionInner": "huge-talent-pool",
                    "orderServiceSectionInner": "0",
                }]
            }
        },

        data = data.response.docs,
        servicePageSectionInner = $('#workPageSectionInner'),
        html;

    $.each(data, function(key, val) {
        html = '<div class="row d-flex justify-content-between align-items-center mb-5">',
            html += '<div class="col-md-5 order-sm-' + val.orderServiceSectionInner + '">',
            html += '<div class="serviceWrapperContent">',
            html += '<section class="sectionTitHeaDis">',
            // html += '<p class="subTitle">' + val.subTitleServiceSectionInner + '</p>',
            html += '<h3 class="subHeading subHeadingh3">' + val.subHeadingh3ServiceSectionInner + '</h3>',
            html += '<p class="textDiscrption">' + val.textDiscrptionServiceSectionInner + '</p>',
            html += '<a href="#" class="primaryBtn">' + val.viewMoreServiceSectionInner + '</a>',
            html += '</section>',
            html += '</div>',
            html += '</div>',
            html += '<div class="col-md-4">',
            html += '<div class="wrapperServicesImg">',
            html += '<div class="wrapperImgBg">',
            html += '<img src="assets/main/ux_ui_bg.svg" class="img-fluid">'
        html += '</div>',
            html += '<div class="wrapperImg">',
            html += '<img src="assets/main/' + val.wrapperImgServiceSectionInner + '.png" alt="' + val.subHeadingh3ServiceSectionInner + '" class="img-fluid">',
            html += '</div>',
            html += '</div>',
            html += '</div>',
            html += '</div>',
            servicePageSectionInner.append(html);
    });



    // Mobile app development Page Section

    var data = {
            "response": {
                "docs": [{
                    // "subTitleServiceSectionInner": "Improve Workplace Productivity",
                    "subHeadingh3ServiceSectionInner": "Improve Workplace Productivity",
                    "textDiscrptionServiceSectionInner": "Generic mobile apps lack the functionality to integrate multiple tasks. However, a custom mobile app can perform several activities related to you business operations, thus helping your team members to accomplish tasks easier and faster; it facilitates smart work that saves time and effort.",
                    "wrapperImgServiceSectionInner": "improve-workplace-productivity",
                    "orderServiceSectionInner": "0",
                }, {
                    // "subTitleServiceSectionInner": "Designed for Greater Growth",
                    "subHeadingh3ServiceSectionInner": "Designed for Greater Growth",
                    "textDiscrptionServiceSectionInner": "Standard, off-the-shelf apps are not deigned to handle higher loads. So as your business grows, the apps your teams use may crash or malfunction, hampering business operations. However, your bespoke mobile app, which is designed to accommodate the increasing volume of work, delivers consistent performance at all times.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "designed-for-greater-growth",
                    "orderServiceSectionInner": "1",
                }, {
                    // "subTitleServiceSectionInner": "Ensuring Data Security & Integrity",
                    "subHeadingh3ServiceSectionInner": "Ensuring Data Security & Integrity",
                    "textDiscrptionServiceSectionInner": "Regular business apps, which lack hi-end security features, may compromise confidential data. On the other hand, your custom mobile app, which is loaded with specialized security features, is intrinsically designed to safeguard sensitive business information.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "ensuring-data-security",
                    "orderServiceSectionInner": "0",
                }, {
                    // "subTitleServiceSectionInner": "Higher Reliability",
                    "subHeadingh3ServiceSectionInner": "Higher Reliability",
                    "textDiscrptionServiceSectionInner": "With regular mobile apps, you stand the risk of affecting business continuity in case the unknown developer decides to discontinue the solution. With the Mitroz custom mobile app, you are assured of zero down time and long-lasting support.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "higher-reliability",
                    "orderServiceSectionInner": "1",
                }, {
                    // "subTitleServiceSectionInner": "Enhance CX",
                    "subHeadingh3ServiceSectionInner": "Enhance CX",
                    "textDiscrptionServiceSectionInner": "With a dedicated, high-performance mobile app at their disposal, your customer support team can respond to customer queries and complaints quickly and more effectively. This delightful customer experience (CX) will strengthen brand engagement and loyalty, helping drive revenue and profitability in the long run.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "enhance-cx",
                    "orderServiceSectionInner": "0",
                }]
            }
        },

        data = data.response.docs,
        mobileappPageSectionInner = $('#mobileappPageSectionInner'),
        html;

    $.each(data, function(key, val) {
        html = '<div class="row d-flex justify-content-between align-items-center mb-5">',
            html += '<div class="col-md-5 order-sm-' + val.orderServiceSectionInner + '">',
            html += '<div class="serviceWrapperContent">',
            html += '<section class="sectionTitHeaDis">',
            // html += '<p class="subTitle">' + val.subTitleServiceSectionInner + '</p>',
            html += '<h3 class="subHeading subHeadingh3">' + val.subHeadingh3ServiceSectionInner + '</h3>',
            html += '<p class="textDiscrption">' + val.textDiscrptionServiceSectionInner + '</p>',
            html += '<a href="#" class="primaryBtn">' + val.viewMoreServiceSectionInner + '</a>',
            html += '</section>',
            html += '</div>',
            html += '</div>',
            html += '<div class="col-md-4">',
            html += '<div class="wrapperServicesImg">',
            html += '<div class="wrapperImgBg">',
            html += '<img src="assets/main/ux_ui_bg.svg" class="img-fluid">'
        html += '</div>',
            html += '<div class="wrapperImg">',
            html += '<img src="assets/main/' + val.wrapperImgServiceSectionInner + '.png" alt="' + val.subHeadingh3ServiceSectionInner + '" class="img-fluid">',
            html += '</div>',
            html += '</div>',
            html += '</div>',
            html += '</div>',
            mobileappPageSectionInner.append(html);
    });


    // Web app development Page Section

    var data = {
            "response": {
                "docs": [{
                    // "subTitleServiceSectionInner": "Higher Efficiency",
                    "subHeadingh3ServiceSectionInner": "Higher Efficiency",
                    "textDiscrptionServiceSectionInner": "Manually oriented workflows involving paper-based business records or traditional spreadsheets are inefficient, tedious and prone to human error. On the other hand, our custom web apps digitalize your processes, resulting in faster and greater output with excellent accuracy.",
                    "wrapperImgServiceSectionInner": "higher-efficiency",
                    "orderServiceSectionInner": "0",
                }, {
                    // "subTitleServiceSectionInner": "Business Continuity",
                    "subHeadingh3ServiceSectionInner": "Business Continuity",
                    "textDiscrptionServiceSectionInner": "With the ability to access your custom web app from anywhere and at any time (24x7 accessibility), you can ensure uninterrupted business operations, irrespective of geographic location or time zone.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "business-continuity",
                    "orderServiceSectionInner": "1",
                }, {
                    // "subTitleServiceSectionInner": "Superior Security",
                    "subHeadingh3ServiceSectionInner": "Superior Security",
                    "textDiscrptionServiceSectionInner": "With data residing on secure cloud servers, you don’t risk losing valued business data in case your local system is stolen, damaged or hacked.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "superior-security",
                    "orderServiceSectionInner": "0",
                }, {
                    // "subTitleServiceSectionInner": "Flexibility that Facilitates Growth",
                    "subHeadingh3ServiceSectionInner": "Flexibility that Facilitates Growth",
                    "textDiscrptionServiceSectionInner": "Unlike a regular software solution, your custom web app easily integrates with other enterprise solutions. Furthermore, it can be quickly scaled to accommodate your evolving business needs and demands.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "flexibility-that-facilitates-growth",
                    "orderServiceSectionInner": "1",
                }, {
                    // "subTitleServiceSectionInner": "Plug-n-play Simplicity",
                    "subHeadingh3ServiceSectionInner": "Plug-n-play Simplicity",
                    "textDiscrptionServiceSectionInner": "You can bypass the tedious and elaborate installation process for multiple devices, while saving on resources like system memory. Maintenance is also an easy task, as updates and patches are rolled out remotely to every device.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "plug-n-play-simplicity",
                    "orderServiceSectionInner": "0",
                }]
            }
        },

        data = data.response.docs,
        webappPageSectionInner = $('#webappPageSectionInner'),
        html;

    $.each(data, function(key, val) {
        html = '<div class="row d-flex justify-content-between align-items-center mb-5">',
            html += '<div class="col-md-5 order-sm-' + val.orderServiceSectionInner + '">',
            html += '<div class="serviceWrapperContent">',
            html += '<section class="sectionTitHeaDis">',
            // html += '<p class="subTitle">' + val.subTitleServiceSectionInner + '</p>',
            html += '<h3 class="subHeading subHeadingh3">' + val.subHeadingh3ServiceSectionInner + '</h3>',
            html += '<p class="textDiscrption">' + val.textDiscrptionServiceSectionInner + '</p>',
            html += '<a href="#" class="primaryBtn">' + val.viewMoreServiceSectionInner + '</a>',
            html += '</section>',
            html += '</div>',
            html += '</div>',
            html += '<div class="col-md-4">',
            html += '<div class="wrapperServicesImg">',
            html += '<div class="wrapperImgBg">',
            html += '<img src="assets/main/ux_ui_bg.svg" class="img-fluid">'
        html += '</div>',
            html += '<div class="wrapperImg">',
            html += '<img src="assets/main/' + val.wrapperImgServiceSectionInner + '.png" alt="' + val.subHeadingh3ServiceSectionInner + '" class="img-fluid">',
            html += '</div>',
            html += '</div>',
            html += '</div>',
            html += '</div>',
            webappPageSectionInner.append(html);
    });


    // Case Study Page Section

    var data = {
            "response": {
                "docs": [{
                    // "subTitleServiceSectionInner": "Higher Efficiency",
                    "subHeadingh3ServiceSectionInner": "Higher Efficiency",
                    "textDiscrptionServiceSectionInner": "Manually oriented workflows involving paper-based business records or traditional spreadsheets are inefficient, tedious and prone to human error. On the other hand, our custom web apps digitalize your processes, resulting in faster and greater output with excellent accuracy.",
                    "wrapperImgServiceSectionInner": "mobile-application-architect",
                    "orderServiceSectionInner": "0",
                }, {
                    // "subTitleServiceSectionInner": "Business Continuity",
                    "subHeadingh3ServiceSectionInner": "Business Continuity",
                    "textDiscrptionServiceSectionInner": "With the ability to access your custom web app from anywhere and at any time (24x7 accessibility), you can ensure uninterrupted business operations, irrespective of geographic location or time zone.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "website-development-solution",
                    "orderServiceSectionInner": "0",
                }, {
                    // "subTitleServiceSectionInner": "Superior Security",
                    "subHeadingh3ServiceSectionInner": "Superior Security",
                    "textDiscrptionServiceSectionInner": "With data residing on secure cloud servers, you don’t risk losing valued business data in case your local system is stolen, damaged or hacked.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "we-design-experience",
                    "orderServiceSectionInner": "0",
                }, {
                    // "subTitleServiceSectionInner": "Flexibility that Facilitates Growth",
                    "subHeadingh3ServiceSectionInner": "Flexibility that Facilitates Growth",
                    "textDiscrptionServiceSectionInner": "Unlike a regular software solution, your custom web app easily integrates with other enterprise solutions. Furthermore, it can be quickly scaled to accommodate your evolving business needs and demands.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "website-development-solution",
                    "orderServiceSectionInner": "0",
                }, {
                    // "subTitleServiceSectionInner": "Plug-n-play Simplicity",
                    "subHeadingh3ServiceSectionInner": "Plug-n-play Simplicity",
                    "textDiscrptionServiceSectionInner": "You can bypass the tedious and elaborate installation process for multiple devices, while saving on resources like system memory. Maintenance is also an easy task, as updates and patches are rolled out remotely to every device.",
                    "viewMoreServiceSectionInner": "Enquiry",
                    "wrapperImgServiceSectionInner": "we-design-experience",
                    "orderServiceSectionInner": "0",
                }]
            }
        },

        data = data.response.docs,
        casestudyPageSectionInner = $('#casestudyPageSectionInner'),
        html;

    $.each(data, function(key, val) {
        html = '<div class="row d-flex justify-content-between align-items-center mb-5">',
            html += '<div class="col-md-5 order-sm-' + val.orderServiceSectionInner + '">',
            html += '<div class="serviceWrapperContent">',
            html += '<section class="sectionTitHeaDis">',
            // html += '<p class="subTitle">' + val.subTitleServiceSectionInner + '</p>',
            html += '<h3 class="subHeading subHeadingh3 customheadingh3">' + val.subHeadingh3ServiceSectionInner + '</h3>',
            html += '<p class="textDiscrption">' + val.textDiscrptionServiceSectionInner + '</p>',
            // html += '<a href="#" class="primaryBtn">' + val.viewMoreServiceSectionInner + '</a>',
            html += '</section>',
            html += '</div>',
            html += '</div>',
            html += '<div class="col-md-4">',
            html += '<div class="wrapperServicesImg">',
            html += '<div class="wrapperImgBg">',
            html += '<img src="assets/main/ux_ui_bg.svg" class="img-fluid">'
        html += '</div>',
            html += '<div class="wrapperImg">',
            html += '<img src="assets/main/' + val.wrapperImgServiceSectionInner + '.svg" alt="' + val.subHeadingh3ServiceSectionInner + '" class="img-fluid">',
            html += '</div>',
            html += '</div>',
            html += '</div>',
            html += '</div>',
            casestudyPageSectionInner.append(html);
    });


});