const siteMenuItems = [
        {
            "depth": 0,
            "repositoryBased": false,
            "properties": {
                "hst:parameternames": ["notificationCTAIcon", "notificationCTAAction",
                    "contentCardImageURL", "notificationCTALabel", "openInNewTab"
                ],
                "hst:parametervalues": ["", "", "", "", "disabled"],
                "hst:repobased": false
            },
            "name": "Notifications",
            "childMenuItems": [{
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["notificationCTAIcon", "notificationCTAAction",
                        "contentCardImageURL", "notificationCTALabel", "openInNewTab"
                    ],
                    "hst:parametervalues": [
                        "https://www-eddiebauer-com-static-content.s3.amazonaws.com/notifications/sms-promotion.png",
                        "signupSmsPromo", "/user/my-account?view=profile", "Sign up now", "disabled"
                    ],
                    "hst:repobased": false
                },
                "name": "Sign up for SMS promotions and get a $5 Reward",
                "childMenuItems": [],
                "parameters": {
                    "notificationCTAIcon": "https://www-eddiebauer-com-static-content.s3.amazonaws.com/notifications/sms-promotion.png",
                    "notificationCTAAction": "signupSmsPromo",
                    "contentCardImageURL": "/user/my-account?view=profile",
                    "notificationCTALabel": "Sign up now",
                    "openInNewTab": "disabled"
                },
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["notificationCTAIcon", "notificationCTAAction",
                        "contentCardImageURL", "notificationCTALabel", "openInNewTab"
                    ],
                    "hst:parametervalues": [
                        "https://www-eddiebauer-com-static-content.s3.amazonaws.com/notifications/gift-icon.png",
                        "birthdaygiftcode", "", "Apply to bag", "disabled"
                    ],
                    "hst:repobased": false
                },
                "name": "You have a birthday gift available!",
                "childMenuItems": [],
                "parameters": {
                    "notificationCTAIcon": "https://www-eddiebauer-com-static-content.s3.amazonaws.com/notifications/gift-icon.png",
                    "notificationCTAAction": "birthdaygiftcode",
                    "contentCardImageURL": "",
                    "notificationCTALabel": "Apply to bag",
                    "openInNewTab": "disabled"
                },
                "_links": {}
            }],
            "parameters": {
                "notificationCTAIcon": "",
                "notificationCTAAction": "",
                "contentCardImageURL": "",
                "notificationCTALabel": "",
                "openInNewTab": "disabled"
            },
            "_links": {}
        }, 
        {
            "depth": 0,
            "repositoryBased": false,
            "properties": {
                "hst:parameternames": ["openInNewTab"],
                "hst:repobased": false,
                "hst:parametervalues": ["disabled"],
                "hst:externallink": "/content/new-arrivals?cm_sp=topnav_new"
            },
            "name": "NEW!",
            "childMenuItems": [{
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:parametervalues": ["disabled"],
                    "hst:repobased": false
                },
                "name": "SHOP BY CATEGORY",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/90094/women-new-arrivals?cm_sp=topnav_n_category_women"
                    },
                    "name": "Women",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/90094/women-new-arrivals?cm_sp=topnav_n_category_women",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/90001/men-new-arrivals?cm_sp=topnav_n_category_men"
                    },
                    "name": "Men",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/90001/men-new-arrivals?cm_sp=topnav_n_category_men",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20082/kids?cm_sp=topnav_k_featured_viewall\u0026sortBy=launch_date\u0026sortOrder=desc"
                    },
                    "name": "Kids",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20082/kids?cm_sp=topnav_k_featured_viewall\u0026sortBy=launch_date\u0026sortOrder=desc",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/90070/gear-gear-new-arrivals?cm_sp=topnav_g_featured_newarrivals"
                    },
                    "name": "Gear",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/90070/gear-gear-new-arrivals?cm_sp=topnav_g_featured_newarrivals",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20061/home?cm_sp=topnav_home_featured_newarrivals\u0026sortBy=launch_date\u0026sortOrder=desc"
                    },
                    "name": "Home",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20061/home?cm_sp=topnav_home_featured_newarrivals\u0026sortBy=launch_date\u0026sortOrder=desc",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:parametervalues": ["disabled"],
                    "hst:repobased": false
                },
                "name": "FEATURED",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/womens-travel-styles?keyword=womens%20travel%20styles\u0026cm_sp=topnav_n_featured_wtravel"
                    },
                    "name": "Women's Travel",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/womens-travel-styles?keyword=womens%20travel%20styles\u0026cm_sp=topnav_n_featured_wtravel",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/mens-travel-styles?keyword=mens%20travel%20styles\u0026cm_sp=topnav_n_featured_mtravel"
                    },
                    "name": "Men's Travel",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/mens-travel-styles?keyword=mens%20travel%20styles\u0026cm_sp=topnav_n_featured_mtravel",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/content/outfits#/training/women-s-cold-weather-training?cm_sp=topnav_n_featured_SFSwtrain"
                    },
                    "name": "Women's Training",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/content/outfits#/training/women-s-cold-weather-training?cm_sp=topnav_n_featured_SFSwtrain",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/content/outfits#/training/men-s-cold-weather-training?cm_sp=topnav_n_featured_SFSmtraining"
                    },
                    "name": "Men's Training",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/content/outfits#/training/men-s-cold-weather-training?cm_sp=topnav_n_featured_SFSmtraining",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/campaign/buy-more-save-more?cm_sp=topnav_n_featured_bmsm"
                    },
                    "name": "New Styles: Buy More \u0026 Save",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/campaign/buy-more-save-more?cm_sp=topnav_n_featured_bmsm",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {}
            }],
            "parameters": {
                "openInNewTab": "disabled"
            },
            "_links": {
                "site": {
                    "href": "/content/new-arrivals?cm_sp=topnav_new",
                    "type": "external"
                }
            }
        }, {
            "depth": 0,
            "repositoryBased": false,
            "properties": {
                "hst:externallink": "/content/women?cm_sp=topnav_w",
                "hst:repobased": false
            },
            "name": "WOMEN",
            "childMenuItems": [{
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "FEATURED",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20094/women?cm_sp=topnav_w_featured_viewall",
                        "hst:repobased": false
                    },
                    "name": "View All",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20094/women?cm_sp=topnav_w_featured_viewall",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/90094/women-new-arrivals?cm_sp=topnav_w_featured_newarrivals",
                        "hst:repobased": false
                    },
                    "name": "New Arrivals",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/90094/women-new-arrivals?cm_sp=topnav_w_featured_newarrivals",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/800000001/gender-neutral?cm_sp=topnav_w_featured_genderneutral",
                        "hst:repobased": false
                    },
                    "name": "Gender Neutral",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/800000001/gender-neutral?cm_sp=topnav_w_featured_genderneutral",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20094/women?cm_sp=topnav_w_featured_viewall\u0026facets=size_type%3A%22Tall%22",
                        "hst:repobased": false
                    },
                    "name": "Women's Tall",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20094/women?cm_sp=topnav_w_featured_viewall\u0026facets=size_type%3A%22Tall%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20094/women?cm_sp=topnav_w_featured_viewall\u0026facets=size_type%3A%22Plus%22",
                        "hst:repobased": false
                    },
                    "name": "Women's Plus",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20094/women?cm_sp=topnav_w_featured_viewall\u0026facets=size_type%3A%22Plus%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20094/women?cm_sp=topnav_w_featured_viewall\u0026facets=size_type%3A%22Petite%22",
                        "hst:repobased": false
                    },
                    "name": "Women's Petite",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20094/women?cm_sp=topnav_w_featured_viewall\u0026facets=size_type%3A%22Petite%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20094/women?cm_sp=topnav_w_featured_sale\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Sale",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20094/women?cm_sp=topnav_w_featured_sale\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20117/womens-jackets-vests?cm_sp=topnav_w_jackets-vests",
                    "hst:repobased": false
                },
                "name": "OUTERWEAR",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/110009/womens-parkas?cm_sp=topnav_w_jackets-vests_parkas",
                        "hst:repobased": false
                    },
                    "name": "Parkas",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/110009/womens-parkas?cm_sp=topnav_w_jackets-vests_parkas",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20119/women-jackets-and-vests-jackets-and-vests?cm_sp=topnav_o_w_jackets",
                        "hst:repobased": false
                    },
                    "name": "Jackets",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20119/women-jackets-and-vests-jackets-and-vests?cm_sp=topnav_o_w_jackets",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/580023/womens-insulated?cm_sp=topnav_w_jackets-vests_insulated",
                        "hst:repobased": false
                    },
                    "name": "Insulated",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/580023/womens-insulated?cm_sp=topnav_w_jackets-vests_insulated",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/460010/womens-rainwear?cm_sp=topnav_w_jackets-vests_rainwear",
                        "hst:repobased": false
                    },
                    "name": "Rainwear",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/460010/womens-rainwear?cm_sp=topnav_w_jackets-vests_rainwear",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20122/womens-vests?cm_sp=topnav_w_jackets-vests_vests",
                        "hst:repobased": false
                    },
                    "name": "Vests",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20122/womens-vests?cm_sp=topnav_w_jackets-vests_vests",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20120/women-outerwear-pants%3A-rain-snow-ski?cm_sp=topnav_w_outerwear_pants"
                    },
                    "name": "Pants",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20120/women-outerwear-pants%3A-rain-snow-ski?cm_sp=topnav_w_outerwear_pants",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/460009/womens-soft-shells?cm_sp=topnav_w_jackets-vests_softshells",
                        "hst:repobased": false
                    },
                    "name": "Softshell \u0026 Wind Jackets",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/460009/womens-soft-shells?cm_sp=topnav_w_jackets-vests_softshells",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20117/womens-jackets-vests?cm_sp=topnav_w_jackets-vests",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20123/womens-bottoms?cm_sp=topnav_w_bottoms",
                    "hst:repobased": false
                },
                "name": "BOTTOMS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/580001/womens-pants?cm_sp=topnav_w_bottoms_pants",
                        "hst:repobased": false
                    },
                    "name": "Pants",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/580001/womens-pants?cm_sp=topnav_w_bottoms_pants",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20127/womens-jeans?cm_sp=topnav_w_bottoms_jeans",
                        "hst:repobased": false
                    },
                    "name": "Jeans",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20127/womens-jeans?cm_sp=topnav_w_bottoms_jeans",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20128/womens-leggings?cm_sp=topnav_w_bottoms_leggings",
                        "hst:repobased": false
                    },
                    "name": "Leggings",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20128/womens-leggings?cm_sp=topnav_w_bottoms_leggings",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/480003/women-bottoms-pants-lined?cm_sp=topnav_w_bottoms_linedbottoms"
                    },
                    "name": "Lined Bottoms",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/480003/women-bottoms-pants-lined?cm_sp=topnav_w_bottoms_linedbottoms",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/180001/womens-capris?cm_sp=topnav_w_bottoms_capris",
                        "hst:repobased": false
                    },
                    "name": "Capris",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/180001/womens-capris?cm_sp=topnav_w_bottoms_capris",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/800000002/women-bottoms-pants-joggers?cm_sp=topnav_w_bottoms_joggers",
                        "hst:repobased": false
                    },
                    "name": "Joggers",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/800000002/women-bottoms-pants-joggers?cm_sp=topnav_w_bottoms_joggers",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20109/womens-shorts?cm_sp=topnav_w_bottoms_shorts",
                        "hst:repobased": false
                    },
                    "name": "Shorts",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20109/womens-shorts?cm_sp=topnav_w_bottoms_shorts",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20123/womens-bottoms?cm_sp=topnav_w_bottoms",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20150/womens-tops?cm_sp=topnav_w_tops",
                    "hst:repobased": false
                },
                "name": "TOPS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20154/womens-t-shirts?cm_sp=topnav_w_tops_tshirts",
                        "hst:repobased": false
                    },
                    "name": "T-Shirts",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20154/womens-t-shirts?cm_sp=topnav_w_tops_tshirts",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/190002/womens-sweatshirts-hoodies?cm_sp=topnav_w_tops_sweatshirtshoodies",
                        "hst:repobased": false
                    },
                    "name": "Sweatshirts \u0026 Hoodies",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/190002/womens-sweatshirts-hoodies?cm_sp=topnav_w_tops_sweatshirtshoodies",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/480002/womens-flannel?cm_sp=topnav_w_tops_flannel"
                    },
                    "name": "Flannels",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/480002/womens-flannel?cm_sp=topnav_w_tops_flannel",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/190001/women-tops-sweaters?cm_sp=topnav_w_tops_sweaters"
                    },
                    "name": "Sweaters",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/190001/women-tops-sweaters?cm_sp=topnav_w_tops_sweaters",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20151/womens-shirts?cm_sp=topnav_w_tops_shirts",
                        "hst:repobased": false
                    },
                    "name": "Shirts",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20151/womens-shirts?cm_sp=topnav_w_tops_shirts",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20153/womens-tank-tops?cm_sp=topnav_w_tops_tanktops",
                        "hst:repobased": false
                    },
                    "name": "Tank Tops",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20153/womens-tank-tops?cm_sp=topnav_w_tops_tanktops",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20150/womens-tops?cm_sp=topnav_w_tops",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/140003/womens-fleece?cm_sp=topnav_w_fleece",
                    "hst:repobased": false
                },
                "name": "FLEECE",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/580031/womens-casual?cm_sp=topnav_w_fleece_casual",
                        "hst:repobased": false
                    },
                    "name": "Casual",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/580031/womens-casual?cm_sp=topnav_w_fleece_casual",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20121/womens-technical?cm_sp=topnav_w_fleece_technical",
                        "hst:repobased": false
                    },
                    "name": "Technical",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20121/womens-technical?cm_sp=topnav_w_fleece_technical",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/140003/womens-fleece?cm_sp=topnav_w_fleece",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "COZY",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20139/womens-sleep?cm_sp=topnav_w_cozy_sleep",
                        "hst:repobased": false
                    },
                    "name": "Sleep",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20139/womens-sleep?cm_sp=topnav_w_cozy_sleep",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/800000006/women-loungewear?cm_sp=topnav_w_sleep_loungwear",
                        "hst:repobased": false
                    },
                    "name": "Loungewear",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/800000006/women-loungewear?cm_sp=topnav_w_sleep_loungwear",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20138/womens-slippers?cm_sp=topnav_w_sleep_slippers",
                        "hst:repobased": false
                    },
                    "name": "Slippers",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20138/womens-slippers?cm_sp=topnav_w_sleep_slippers",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20062/blankets-throws?cm_sp=topnav_w_cozy_blankets-throws"
                    },
                    "name": "Blankets \u0026 Throws",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20062/blankets-throws?cm_sp=topnav_w_cozy_blankets-throws",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "SPECIAL COLLECTIONS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/campaign/the-great?cm_sp=topnav_w_collaborations_thegreat"
                    },
                    "name": "The Great",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/campaign/the-great?cm_sp=topnav_w_collaborations_thegreat",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20114/womens-dresses?cm_sp=topnav_w_tops_dresses",
                    "hst:repobased": false
                },
                "name": "DRESSES",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20115/womens-skirts-skorts?cm_sp=topnav_w_dresses_skirts"
                    },
                    "name": "Skirts",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20115/womens-skirts-skorts?cm_sp=topnav_w_dresses_skirts",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20114/womens-dresses?cm_sp=topnav_w_tops_dresses",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20095/womens-accessories?cm_sp=topnav_w_accessories",
                    "hst:repobased": false
                },
                "name": "ACCESSORIES",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/30099/womens-beanies?cm_sp=topnav_w_accessories_beanies"
                    },
                    "name": "Beanies",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/30099/womens-beanies?cm_sp=topnav_w_accessories_beanies",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20097/womens-gloves?cm_sp=topnav_w_accessories_gloves",
                        "hst:repobased": false
                    },
                    "name": "Gloves",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20097/womens-gloves?cm_sp=topnav_w_accessories_gloves",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20102/womens-socks?cm_sp=topnav_f_w_socks",
                        "hst:repobased": false
                    },
                    "name": "Socks",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20102/womens-socks?cm_sp=topnav_f_w_socks",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20096/womens-belts?cm_sp=topnav_w_accessories_belts",
                        "hst:repobased": false
                    },
                    "name": "Belts",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20096/womens-belts?cm_sp=topnav_w_accessories_belts",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20101/womens-scarves?cm_sp=topnav_w_accessories_scarves",
                        "hst:repobased": false
                    },
                    "name": "Scarves",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20101/womens-scarves?cm_sp=topnav_w_accessories_scarves",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20103/womens-sunglasses?cm_sp=topnav_w_accessories_sunglasses",
                        "hst:repobased": false
                    },
                    "name": "Sunglasses",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20103/womens-sunglasses?cm_sp=topnav_w_accessories_sunglasses",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20099/womens-hats?cm_sp=topnav_w_accessories_hats",
                        "hst:repobased": false
                    },
                    "name": "Hats",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20099/womens-hats?cm_sp=topnav_w_accessories_hats",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20095/womens-accessories?cm_sp=topnav_w_accessories",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:repobased": false,
                    "hst:parametervalues": ["disabled"],
                    "hst:externallink": "/campaign/buy-more-save-more?cm_sp=topnav_w_bmsm"
                },
                "name": "BUY MORE \u0026 SAVE",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/womens-teesdeal?keyword=womens%20teesdeal\u0026cm_sp=topnav_w_bmsm_tees"
                    },
                    "name": "Tees",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/womens-teesdeal?keyword=womens%20teesdeal\u0026cm_sp=topnav_w_bmsm_tees",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/womens-fleecedeal?keyword=womens%20fleecedeal\u0026cm_sp=topnav_w_bmsm_fleece"
                    },
                    "name": "Fleece",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/womens-fleecedeal?keyword=womens%20fleecedeal\u0026cm_sp=topnav_w_bmsm_fleece",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/womens-sockdeal?keyword=womens%20sockdeal\u0026cm_sp=w_bmsm_socks"
                    },
                    "name": "Socks",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/womens-sockdeal?keyword=womens%20sockdeal\u0026cm_sp=w_bmsm_socks",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {
                    "site": {
                        "href": "/campaign/buy-more-save-more?cm_sp=topnav_w_bmsm",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "SHOPS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/the-womens-shirt-shop?cm_sp=topnav_w_shops_shirtshop",
                        "hst:repobased": false
                    },
                    "name": "Shirt Shop",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/the-womens-shirt-shop?cm_sp=topnav_w_shops_shirtshop",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/campaign/the-womens-technical-t-shirt-shop?cm_sp=topnav_w_shops_tshirtshop"
                    },
                    "name": "Technical T-Shirt Shop",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/campaign/the-womens-technical-t-shirt-shop?cm_sp=topnav_w_shops_tshirtshop",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/women_denim_shop?cm_sp=topnav_w_shops_denimshop",
                        "hst:repobased": false
                    },
                    "name": "Denim Shop",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/women_denim_shop?cm_sp=topnav_w_shops_denimshop",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/womens-pants-and-shorts-guide?cm_sp=topnav_w_shops_pantsandshorts",
                        "hst:repobased": false
                    },
                    "name": "Pants \u0026 Shorts Guide",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/womens-pants-and-shorts-guide?cm_sp=topnav_w_shops_pantsandshorts",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/leggings?cm_sp=topnav_w_shops_leggingsshop",
                        "hst:repobased": false
                    },
                    "name": "Leggings Shop",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/leggings?cm_sp=topnav_w_shops_leggingsshop",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }],
            "parameters": {},
            "_links": {
                "site": {
                    "href": "/content/women?cm_sp=topnav_w",
                    "type": "external"
                }
            }
        }, {
            "depth": 0,
            "repositoryBased": false,
            "properties": {
                "hst:externallink": "/content/men?cm_sp=topnav_m",
                "hst:repobased": false
            },
            "name": "MEN",
            "childMenuItems": [{
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "FEATURED",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20001/men?cm_sp=topnav_m_featured_viewall",
                        "hst:repobased": false
                    },
                    "name": "View All",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20001/men?cm_sp=topnav_m_featured_viewall",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/90001/men-new-arrivals?cm_sp=topnav_m_featured_newarrivals",
                        "hst:repobased": false
                    },
                    "name": "New Arrivals",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/90001/men-new-arrivals?cm_sp=topnav_m_featured_newarrivals",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/800000001/gender-neutral?cm_sp=topnav_m_featured_genderneutral",
                        "hst:repobased": false
                    },
                    "name": "Gender Neutral",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/800000001/gender-neutral?cm_sp=topnav_m_featured_genderneutral",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20001/men?cm_sp=topnav_m_featured_mtallshop\u0026facets=size_type%3A%22Tall%22",
                        "hst:repobased": false
                    },
                    "name": "Men's Tall",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20001/men?cm_sp=topnav_m_featured_mtallshop\u0026facets=size_type%3A%22Tall%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20001/men?cm_sp=topnav_m_featured_sale\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Sale",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20001/men?cm_sp=topnav_m_featured_sale\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20015/mens-jackets-vests?cm_sp=topnav_m_jackets-vests",
                    "hst:repobased": false
                },
                "name": "OUTERWEAR",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/110003/mens-parkas?cm_sp=topnav_m_jackets-vests_parkas",
                        "hst:repobased": false
                    },
                    "name": "Parkas",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/110003/mens-parkas?cm_sp=topnav_m_jackets-vests_parkas",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20017/men-jackets-and-vests-jackets?cm_sp=topnav_o_m_jackets",
                        "hst:repobased": false
                    },
                    "name": "Jackets",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20017/men-jackets-and-vests-jackets?cm_sp=topnav_o_m_jackets",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/580033/mens-insulated?cm_sp=topnav_m_jackets-vests_insulated",
                        "hst:repobased": false
                    },
                    "name": "Insulated",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/580033/mens-insulated?cm_sp=topnav_m_jackets-vests_insulated",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/460005/mens-rainwear?cm_sp=topnav_m_jackets-vests_rainwear",
                        "hst:repobased": false
                    },
                    "name": "Rainwear",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/460005/mens-rainwear?cm_sp=topnav_m_jackets-vests_rainwear",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20020/mens-vests?cm_sp=topnav_m_jackets-vests_vests",
                        "hst:repobased": false
                    },
                    "name": "Vests",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20020/mens-vests?cm_sp=topnav_m_jackets-vests_vests",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20018/men-outerwear-pants%3A-rain-snow-ski?cm_sp=topnav_m_outerwear_pants"
                    },
                    "name": "Pants",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20018/men-outerwear-pants%3A-rain-snow-ski?cm_sp=topnav_m_outerwear_pants",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/460006/mens-soft-shells?cm_sp=topnav_m_jackets-vests_softshells",
                        "hst:repobased": false
                    },
                    "name": "Softshell \u0026 Wind Jackets",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/460006/mens-soft-shells?cm_sp=topnav_m_jackets-vests_softshells",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20015/mens-jackets-vests?cm_sp=topnav_m_jackets-vests",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20021/mens-bottoms?cm_sp=topnav_m_bottoms",
                    "hst:repobased": false
                },
                "name": "BOTTOMS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/580037/mens-pants?cm_sp=topnav_m_bottoms_pants",
                        "hst:repobased": false
                    },
                    "name": "Pants",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/580037/mens-pants?cm_sp=topnav_m_bottoms_pants",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/480004/men-bottoms-pants-lined-pants?cm_sp=topnav_m_bottoms_linedbottoms"
                    },
                    "name": "Lined Bottoms",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/480004/men-bottoms-pants-lined-pants?cm_sp=topnav_m_bottoms_linedbottoms",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20025/mens-jeans?cm_sp=topnav_m_bottoms_jeans",
                        "hst:repobased": false
                    },
                    "name": "Jeans",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20025/mens-jeans?cm_sp=topnav_m_bottoms_jeans",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20039/mens-shorts?cm_sp=topnav_m_bottoms_shorts",
                        "hst:repobased": false
                    },
                    "name": "Shorts",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20039/mens-shorts?cm_sp=topnav_m_bottoms_shorts",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/200250/mens-boxers?cm_sp=topnav_m_bottoms_boxers",
                        "hst:repobased": false
                    },
                    "name": "Boxers",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/200250/mens-boxers?cm_sp=topnav_m_bottoms_boxers",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20021/mens-bottoms?cm_sp=topnav_m_bottoms",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20052/mens-tops?cm_sp=topnav_m_tops",
                    "hst:repobased": false
                },
                "name": "TOPS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20059/mens-t-shirts?cm_sp=topnav_m_tops_t-shirts",
                        "hst:repobased": false
                    },
                    "name": "T-Shirts",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20059/mens-t-shirts?cm_sp=topnav_m_tops_t-shirts",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20054/mens-shirts?cm_sp=topnav_m_tops_shirts",
                        "hst:repobased": false
                    },
                    "name": "Shirts",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20054/mens-shirts?cm_sp=topnav_m_tops_shirts",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20048/mens-sweatshirts-hoodies?cm_sp=topnav_m_tops_sweatshirts-hoodies",
                        "hst:repobased": false
                    },
                    "name": "Sweatshirts \u0026 Hoodies",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20048/mens-sweatshirts-hoodies?cm_sp=topnav_m_tops_sweatshirts-hoodies",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/480005/men-tops-shirts-flannel?cm_sp=topnav_m_tops_flannel"
                    },
                    "name": "Flannels",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/480005/men-tops-shirts-flannel?cm_sp=topnav_m_tops_flannel",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/540001/mens-polos?cm_sp=topnav_m_tops_polos",
                        "hst:repobased": false
                    },
                    "name": "Polos",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/540001/mens-polos?cm_sp=topnav_m_tops_polos",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20052/mens-tops?cm_sp=topnav_m_tops",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/140004/mens-fleece?cm_sp=topnav_m_fleece",
                    "hst:repobased": false
                },
                "name": "FLEECE",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/580036/mens-casual?cm_sp=topnav_m_fleece_casual",
                        "hst:repobased": false
                    },
                    "name": "Casual",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/580036/mens-casual?cm_sp=topnav_m_fleece_casual",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20019/mens-technical?cm_sp=topnav_m_fleece_technical",
                        "hst:repobased": false
                    },
                    "name": "Technical",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20019/mens-technical?cm_sp=topnav_m_fleece_technical",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/140004/mens-fleece?cm_sp=topnav_m_fleece",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20002/mens-accessories?cm_sp=topnav_m_accessories",
                    "hst:repobased": false
                },
                "name": "ACCESSORIES",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/30004/mens-beanies?cm_sp=topnav_m_accessories_beanies"
                    },
                    "name": "Beanies",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/30004/mens-beanies?cm_sp=topnav_m_accessories_beanies",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20005/mens-gloves?cm_sp=topnav_m_accessories_gloves",
                        "hst:repobased": false
                    },
                    "name": "Gloves",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20005/mens-gloves?cm_sp=topnav_m_accessories_gloves",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20007/mens-socks?cm_sp=topnav_f_m_socks"
                    },
                    "name": "Socks",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20007/mens-socks?cm_sp=topnav_f_m_socks",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20003/mens-belts?cm_sp=topnav_m_accessories_belts",
                        "hst:repobased": false
                    },
                    "name": "Belts",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20003/mens-belts?cm_sp=topnav_m_accessories_belts",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20006/mens-scarves?cm_sp=topnav_m_accessories_scarves",
                        "hst:repobased": false
                    },
                    "name": "Scarves",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20006/mens-scarves?cm_sp=topnav_m_accessories_scarves",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20008/mens-sunglasses?cm_sp=topnav_m_accessories_sunglasses",
                        "hst:repobased": false
                    },
                    "name": "Sunglasses",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20008/mens-sunglasses?cm_sp=topnav_m_accessories_sunglasses",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20004/mens-hats?cm_sp=topnav_m_accessories_hats",
                        "hst:repobased": false
                    },
                    "name": "Hats",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20004/mens-hats?cm_sp=topnav_m_accessories_hats",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20002/mens-accessories?cm_sp=topnav_m_accessories",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "SPECIAL COLLECTIONS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/a-ap-worldwide?keyword=A%24AP%20Worldwide\u0026cm_sp=topnav_w_collaborations_asapworldwide"
                    },
                    "name": "A$AP Worldwide",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/a-ap-worldwide?keyword=A%24AP%20Worldwide\u0026cm_sp=topnav_w_collaborations_asapworldwide",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/mountain-ops?keyword=Mountain%20Ops\u0026cm_sp=topnav_w_collaborations_mountainops"
                    },
                    "name": "Mountain Ops",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/mountain-ops?keyword=Mountain%20Ops\u0026cm_sp=topnav_w_collaborations_mountainops",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "COZY",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20043/mens-sleep?cm_sp=topnav_m_cozy_sleep",
                        "hst:repobased": false
                    },
                    "name": "Sleep",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20043/mens-sleep?cm_sp=topnav_m_cozy_sleep",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/800000008/men-loungewear?cm_sp=topnav_m_sleep_loungewear",
                        "hst:repobased": false
                    },
                    "name": "Loungewear",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/800000008/men-loungewear?cm_sp=topnav_m_sleep_loungewear",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20038/mens-slippers?cm_sp=topnav_m_cozy_slippers",
                        "hst:repobased": false
                    },
                    "name": "Slippers",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20038/mens-slippers?cm_sp=topnav_m_cozy_slippers",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20062/blankets-throws?cm_sp=topnav_m_cozy_blankets-throws"
                    },
                    "name": "Blankets \u0026 Throws",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20062/blankets-throws?cm_sp=topnav_m_cozy_blankets-throws",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:repobased": false,
                    "hst:parametervalues": ["disabled"],
                    "hst:externallink": "/campaign/buy-more-save-more?cm_sp=topnav_m_bmsm"
                },
                "name": "BUY MORE \u0026 SAVE",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/mens-teesdeal?keyword=mens%20teesdeal\u0026cm_sp=topnav_m_bmsm_tees"
                    },
                    "name": "Tees",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/mens-teesdeal?keyword=mens%20teesdeal\u0026cm_sp=topnav_m_bmsm_tees",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/mens-fleecedeal?keyword=Mens%20Fleecedeal\u0026cm_sp=topnav_m_bmsm_fleece"
                    },
                    "name": "Fleece",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/mens-fleecedeal?keyword=Mens%20Fleecedeal\u0026cm_sp=topnav_m_bmsm_fleece",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/polodeal?keyword=Polodeal\u0026cm_sp=topnav_m_bmsm_polo"
                    },
                    "name": "Polos",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/polodeal?keyword=Polodeal\u0026cm_sp=topnav_m_bmsm_polo",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/mens-sockdeal?keyword=mens%20sockdeal\u0026cm_sp=topnav_m_bmsm_socks"
                    },
                    "name": "Socks",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/mens-sockdeal?keyword=mens%20sockdeal\u0026cm_sp=topnav_m_bmsm_socks",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {
                    "site": {
                        "href": "/campaign/buy-more-save-more?cm_sp=topnav_m_bmsm",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "SHOPS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/the-mens-shirt-shop?cm_sp=topnav_m_shops_shirtshop",
                        "hst:repobased": false
                    },
                    "name": "Shirt Shop",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/the-mens-shirt-shop?cm_sp=topnav_m_shops_shirtshop",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/the-mens-technical-t-shirt-shop?cm_sp=topnav_m_shops_tshirtshop",
                        "hst:repobased": false
                    },
                    "name": "Technical T-Shirt Shop",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/the-mens-technical-t-shirt-shop?cm_sp=topnav_m_shops_tshirtshop",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/mens-denim-shop?cm_sp=topnav_m_shops_denimshop",
                        "hst:repobased": false
                    },
                    "name": "Denim Shop",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/mens-denim-shop?cm_sp=topnav_m_shops_denimshop",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/mens-pants-and-shorts-guide?cm_sp=topnav_m_shops_pantsandshorts",
                        "hst:repobased": false
                    },
                    "name": "Pants \u0026 Shorts Guide",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/mens-pants-and-shorts-guide?cm_sp=topnav_m_shops_pantsandshorts",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }],
            "parameters": {},
            "_links": {
                "site": {
                    "href": "/content/men?cm_sp=topnav_m",
                    "type": "external"
                }
            }
        }, {
            "depth": 0,
            "repositoryBased": false,
            "properties": {
                "hst:externallink": "/content/kids?cm_sp=topnav_k",
                "hst:repobased": false
            },
            "name": "KIDS",
            "childMenuItems": [{
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "FEATURED",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20082/kids?cm_sp=topnav_k_featured_viewall",
                        "hst:repobased": false
                    },
                    "name": "View All",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20082/kids?cm_sp=topnav_k_featured_viewall",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/family-sleep?keyword=Family%20Sleep\u0026cm_sp=topnav_k_featured_familysleep"
                    },
                    "name": "Family Sleep",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/family-sleep?keyword=Family%20Sleep\u0026cm_sp=topnav_k_featured_familysleep",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20082/kids?cm_sp=topnav_k_featured_sale\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Sale",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20082/kids?cm_sp=topnav_k_featured_sale\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20083/kids-boys?cm_sp=topnav_k_boys",
                    "hst:repobased": false
                },
                "name": "BOYS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20085/kids-jackets?cm_sp=topnav_k_boys_jackets",
                        "hst:repobased": false
                    },
                    "name": "Jackets",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20085/kids-jackets?cm_sp=topnav_k_boys_jackets",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/30087/kids-fleece?cm_sp=topnav_k_boys_fleece"
                    },
                    "name": "Fleece",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/30087/kids-fleece?cm_sp=topnav_k_boys_fleece",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20086/kids-bottoms?cm_sp=topnav_k_boys_bottoms",
                        "hst:repobased": false
                    },
                    "name": "Bottoms",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20086/kids-bottoms?cm_sp=topnav_k_boys_bottoms",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20087/kids-tops?cm_sp=topnav_k_boys_tops",
                        "hst:repobased": false
                    },
                    "name": "Tops",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20087/kids-tops?cm_sp=topnav_k_boys_tops",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/690003/kids-boys-sleep?cm_sp=topnav_k_boys_sleep",
                        "hst:repobased": false
                    },
                    "name": "Sleep",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/690003/kids-boys-sleep?cm_sp=topnav_k_boys_sleep",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/690002/kids-accessories?cm_sp=topnav_k_boys_accessories"
                    },
                    "name": "Accessories",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/690002/kids-accessories?cm_sp=topnav_k_boys_accessories",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/760006/kids-tops?cm_sp=topnav_k_boys_swim",
                        "hst:repobased": false
                    },
                    "name": "Swim",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/760006/kids-tops?cm_sp=topnav_k_boys_swim",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20083/kids-boys?cm_sp=topnav_k_boys",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20088/kids-girls?cm_sp=topnav_k_girls",
                    "hst:repobased": false
                },
                "name": "GIRLS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20090/kids-jackets?cm_sp=topnav_k_girls_jackets",
                        "hst:repobased": false
                    },
                    "name": "Jackets",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20090/kids-jackets?cm_sp=topnav_k_girls_jackets",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/30092/kids-fleece?cm_sp=topnav_k_girls_fleece"
                    },
                    "name": "Fleece",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/30092/kids-fleece?cm_sp=topnav_k_girls_fleece",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20091/kids-bottoms?cm_sp=topnav_k_girls_bottoms",
                        "hst:repobased": false
                    },
                    "name": "Bottoms",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20091/kids-bottoms?cm_sp=topnav_k_girls_bottoms",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20092/kids-tops?cm_sp=topnav_k_girls_tops",
                        "hst:repobased": false
                    },
                    "name": "Tops",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20092/kids-tops?cm_sp=topnav_k_girls_tops",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/690005/kids-girls-sleep?cm_sp=topnav_k_girls_sleep",
                        "hst:repobased": false
                    },
                    "name": "Sleep",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/690005/kids-girls-sleep?cm_sp=topnav_k_girls_sleep",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/690004/kids-accessories?cm_sp=topnav_k_girls_accessories"
                    },
                    "name": "Accessories",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/690004/kids-accessories?cm_sp=topnav_k_girls_accessories",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/760005/kids-tops?cm_sp=topnav_k_girls_swim",
                        "hst:repobased": false
                    },
                    "name": "Swim",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/760005/kids-tops?cm_sp=topnav_k_girls_swim",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20088/kids-girls?cm_sp=topnav_k_girls",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/690001/infant-toddler?cm_sp=topnav_k_infant-toddler",
                    "hst:repobased": false
                },
                "name": "INFANT \u0026 TODDLER",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/700001/infant-toddler-jackets?cm_sp=topnav_k_infant-toddler_jackets",
                        "hst:repobased": false
                    },
                    "name": "Jackets",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/700001/infant-toddler-jackets?cm_sp=topnav_k_infant-toddler_jackets",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/800001/infant-toddler-fleece?cm_sp=topnav_k_infant-toddler_fleece"
                    },
                    "name": "Fleece",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/800001/infant-toddler-fleece?cm_sp=topnav_k_infant-toddler_fleece",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/700003/infant-toddler-sleep?cm_sp=topnav_k_infant-toddler_sleep",
                        "hst:repobased": false
                    },
                    "name": "Sleep",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/700003/infant-toddler-sleep?cm_sp=topnav_k_infant-toddler_sleep",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/690001/infant-toddler?cm_sp=topnav_k_infant-toddler",
                        "type": "external"
                    }
                }
            }],
            "parameters": {},
            "_links": {
                "site": {
                    "href": "/content/kids?cm_sp=topnav_k",
                    "type": "external"
                }
            }
        }, {
            "depth": 0,
            "repositoryBased": false,
            "properties": {
                "hst:externallink": "/content/outerwear?cm_sp=topnav_o",
                "hst:repobased": false
            },
            "name": "OUTERWEAR",
            "childMenuItems": [{
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "FEATURED",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/s/outerwear?keyword=outerwear\u0026cm_sp=topnav_o_featured_viewall",
                        "hst:repobased": false
                    },
                    "name": "View All",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/s/outerwear?keyword=outerwear\u0026cm_sp=topnav_o_featured_viewall",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20117/womens-outerwear?cm_sp=topnav_o_w\u0026facets=size_type%3A%22Plus%22",
                        "hst:repobased": false
                    },
                    "name": "Women's Tall",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20117/womens-outerwear?cm_sp=topnav_o_w\u0026facets=size_type%3A%22Plus%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20117/womens-outerwear?cm_sp=topnav_o_w\u0026facets=size_type%3A%22Plus%22",
                        "hst:repobased": false
                    },
                    "name": "Women's Plus",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20117/womens-outerwear?cm_sp=topnav_o_w\u0026facets=size_type%3A%22Plus%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20117/womens-outerwear?cm_sp=topnav_o_w\u0026facets=size_type%3A%22Petite%22",
                        "hst:repobased": false
                    },
                    "name": "Women's Petite",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20117/womens-outerwear?cm_sp=topnav_o_w\u0026facets=size_type%3A%22Petite%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20015/mens-outerwear?cm_sp=topnav_o_m\u0026facets=size_type%3A%22Tall%22",
                        "hst:repobased": false
                    },
                    "name": "Men's Tall",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20015/mens-outerwear?cm_sp=topnav_o_m\u0026facets=size_type%3A%22Tall%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/campaign/icebox?cm_sp=topnav_o_featured_icebox"
                    },
                    "name": "Icebox – Innovative Gear",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/campaign/icebox?cm_sp=topnav_o_featured_icebox",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/campaign/outerwear-shop?cm_sp=topnav_o_feat_outerwearshop"
                    },
                    "name": "Down Shop",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/campaign/outerwear-shop?cm_sp=topnav_o_feat_outerwearshop",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/rain?cm_sp=topnav_o_featured_rainwear",
                        "hst:repobased": false
                    },
                    "name": "Rainwear",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/rain?cm_sp=topnav_o_featured_rainwear",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/first-ascent-outerwear?keyword=First%20Ascent%20Outerwear"
                    },
                    "name": "First Ascent",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/first-ascent-outerwear?keyword=First%20Ascent%20Outerwear",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/outerwear?keyword=outerwear\u0026cm_sp=topnav_o_featured_sale\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Sale",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/outerwear?keyword=outerwear\u0026cm_sp=topnav_o_featured_sale\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20117/womens-outerwear?cm_sp=topnav_o_w",
                    "hst:repobased": false
                },
                "name": "WOMEN",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/110009/womens-parkas?cm_sp=topnav_o_w_parkas",
                        "hst:repobased": false
                    },
                    "name": "Parkas",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/110009/womens-parkas?cm_sp=topnav_o_w_parkas",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20119/women-jackets-and-vests-jackets-and-vests?cm_sp=topnav_o_w_jackets",
                        "hst:repobased": false
                    },
                    "name": "Jackets",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20119/women-jackets-and-vests-jackets-and-vests?cm_sp=topnav_o_w_jackets",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/580023/womens-insulated?cm_sp=topnav_o_w_insulated",
                        "hst:repobased": false
                    },
                    "name": "Insulated",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/580023/womens-insulated?cm_sp=topnav_o_w_insulated",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/460010/womens-rainwear?cm_sp=topnav_o_w_rainwear",
                        "hst:repobased": false
                    },
                    "name": "Rainwear",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/460010/womens-rainwear?cm_sp=topnav_o_w_rainwear",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20121/womens-technical?cm_sp=topnav_o_women_fleece",
                        "hst:repobased": false
                    },
                    "name": "Fleece",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20121/womens-technical?cm_sp=topnav_o_women_fleece",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20122/womens-vests?cm_sp=topnav_o_w_vests",
                        "hst:repobased": false
                    },
                    "name": "Vests",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20122/womens-vests?cm_sp=topnav_o_w_vests",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20120/women-outerwear-pants%3A-rain-snow-ski?cm_sp=topnav_o_w_pants"
                    },
                    "name": "Pants",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20120/women-outerwear-pants%3A-rain-snow-ski?cm_sp=topnav_o_w_pants",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/460009/womens-soft-shells?cm_sp=topnav_o_w_softshells",
                        "hst:repobased": false
                    },
                    "name": "Softshell \u0026 Wind Jackets",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/460009/womens-soft-shells?cm_sp=topnav_o_w_softshells",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20117/womens-outerwear?cm_sp=topnav_o_w",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20015/mens-outerwear?cm_sp=topnav_o_m",
                    "hst:repobased": false
                },
                "name": "MEN",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/110003/mens-parkas?cm_sp=topnav_o_m_parkas",
                        "hst:repobased": false
                    },
                    "name": "Parkas",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/110003/mens-parkas?cm_sp=topnav_o_m_parkas",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20017/men-jackets-and-vests-jackets?cm_sp=topnav_o_m_jackets",
                        "hst:repobased": false
                    },
                    "name": "Jackets",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20017/men-jackets-and-vests-jackets?cm_sp=topnav_o_m_jackets",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/580033/mens-insulated?cm_sp=topnav_o_m_insulated",
                        "hst:repobased": false
                    },
                    "name": "Insulated",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/580033/mens-insulated?cm_sp=topnav_o_m_insulated",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/460005/mens-rainwear?cm_sp=topnav_o_m_rainwear",
                        "hst:repobased": false
                    },
                    "name": "Rainwear",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/460005/mens-rainwear?cm_sp=topnav_o_m_rainwear",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20019/mens-technical?cm_sp=topnav_o_men_fleece",
                        "hst:repobased": false
                    },
                    "name": "Fleece",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20019/mens-technical?cm_sp=topnav_o_men_fleece",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20020/mens-vests?cm_sp=topnav_o_m_vests",
                        "hst:repobased": false
                    },
                    "name": "Vests",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20020/mens-vests?cm_sp=topnav_o_m_vests",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20018/men-outerwear-pants%3A-rain-snow-ski?cm_sp=topnav_o_m_pants"
                    },
                    "name": "Pants",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20018/men-outerwear-pants%3A-rain-snow-ski?cm_sp=topnav_o_m_pants",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/460006/mens-soft-shells?cm_sp=topnav_o_m_softshells",
                        "hst:repobased": false
                    },
                    "name": "Softshell \u0026 Wind Jackets",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/460006/mens-soft-shells?cm_sp=topnav_o_m_softshells",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20015/mens-outerwear?cm_sp=topnav_o_m",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/s/kids-outerwear?keyword=kids%20outerwear\u0026cm_sp=topnav_o_kids",
                    "hst:repobased": false
                },
                "name": "KIDS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20090/girls-jackets-vests?cm_sp=topnav_o_kids_gjacketsvests",
                        "hst:repobased": false
                    },
                    "name": "Girls Jackets \u0026 Vests",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20090/girls-jackets-vests?cm_sp=topnav_o_kids_gjacketsvests",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20085/boys-jackets-vests?cm_sp=topnav_o_kids_bjacketsvests",
                        "hst:repobased": false
                    },
                    "name": "Boys Jackets \u0026 Vests",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20085/boys-jackets-vests?cm_sp=topnav_o_kids_bjacketsvests",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/700001/infant-toddler-jackets?cm_sp=topnav_o_kids_infantjackets"
                    },
                    "name": "Infant \u0026 Toddler Jackets \u0026 Vests",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/700001/infant-toddler-jackets?cm_sp=topnav_o_kids_infantjackets",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/s/kids-outerwear?keyword=kids%20outerwear\u0026cm_sp=topnav_o_kids",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/content/outerwear-care?cm_sp=topnav_o_outerwearguide",
                    "hst:repobased": false
                },
                "name": "OUTERWEAR GUIDE",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/down-innovation-and-education?cm_sp=topnav_o_outerwearguide_downinnovation",
                        "hst:repobased": false
                    },
                    "name": "Down Innovation",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/down-innovation-and-education?cm_sp=topnav_o_outerwearguide_downinnovation",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/content/outerwear-care/down?cm_sp=topnav_o_outerwearguide_caringfordown",
                        "hst:repobased": false
                    },
                    "name": "Caring for Down",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/content/outerwear-care/down?cm_sp=topnav_o_outerwearguide_caringfordown",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/content/outerwear-care/evertherm-down?cm_sp=topnav_o_outerwearguide_caringforevertherm",
                        "hst:repobased": false
                    },
                    "name": "Caring for Evertherm™",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/content/outerwear-care/evertherm-down?cm_sp=topnav_o_outerwearguide_caringforevertherm",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/content/outerwear-care/waterproof-outerwear?cm_sp=topnav_o_outerwearguide_caringforwaterproof",
                        "hst:repobased": false
                    },
                    "name": "Caring for Waterproof Outerwear",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/content/outerwear-care/waterproof-outerwear?cm_sp=topnav_o_outerwearguide_caringforwaterproof",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/content/outerwear-care/stormrepel-dwr-finish?cm_sp=topnav_o_outerwearguide_caringforstorm",
                        "hst:repobased": false
                    },
                    "name": "Caring for StormRepel™",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/content/outerwear-care/stormrepel-dwr-finish?cm_sp=topnav_o_outerwearguide_caringforstorm",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/content/outerwear-care/temperature-ratings?cm_sp=topnav_o_outerwearguide_tempratings",
                        "hst:repobased": false
                    },
                    "name": "Temperature Ratings",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/content/outerwear-care/temperature-ratings?cm_sp=topnav_o_outerwearguide_tempratings",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/content/outerwear-care?cm_sp=topnav_o_outerwearguide",
                        "type": "external"
                    }
                }
            }],
            "parameters": {},
            "_links": {
                "site": {
                    "href": "/content/outerwear?cm_sp=topnav_o",
                    "type": "external"
                }
            }
        }, {
            "depth": 0,
            "repositoryBased": false,
            "properties": {
                "hst:externallink": "/content/gear?cm_sp=topnav_g",
                "hst:repobased": false
            },
            "name": "GEAR",
            "childMenuItems": [{
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "FEATURED",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20070/gear?cm_sp=topnav_gear_featured_viewall",
                        "hst:repobased": false
                    },
                    "name": "View All",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20070/gear?cm_sp=topnav_gear_featured_viewall",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/90070/gear-gear-new-arrivals?cm_sp=topnav_g_featured_newarrivals",
                        "hst:repobased": false
                    },
                    "name": "New Arrivals",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/90070/gear-gear-new-arrivals?cm_sp=topnav_g_featured_newarrivals",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20070/gear?cm_sp=topnav_gear_featured_sale\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Sale",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20070/gear?cm_sp=topnav_gear_featured_sale\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/770001/gear-equipment?cm_sp=topnav_g_equipment",
                    "hst:repobased": false
                },
                "name": "PACKS \u0026 LUGGAGE",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770002/gear-equipment-backpacks?cm_sp=topnav_g_backpacks",
                        "hst:repobased": false
                    },
                    "name": "Backpacks",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770002/gear-equipment-backpacks?cm_sp=topnav_g_backpacks",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770003/gear-equipment-tecnical-packs?cm_sp=topnav_g_technical_packs",
                        "hst:repobased": false
                    },
                    "name": "Technical Packs",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770003/gear-equipment-tecnical-packs?cm_sp=topnav_g_technical_packs",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770004/gear-equipment-duffels-and-luggage?cm_sp=topnav_g_duffels_luggage",
                        "hst:repobased": false
                    },
                    "name": "Duffels \u0026 Luggage",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770004/gear-equipment-duffels-and-luggage?cm_sp=topnav_g_duffels_luggage",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770005/gear-equipment-tote-bags?cm_sp=topnav_g_tote_bags",
                        "hst:repobased": false
                    },
                    "name": "Tote Bags",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770005/gear-equipment-tote-bags?cm_sp=topnav_g_tote_bags",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770006/gear-equipment-crossbody-bags?cm_sp=topnav_g_crossbody_bags",
                        "hst:repobased": false
                    },
                    "name": "Crossbody Bags",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770006/gear-equipment-crossbody-bags?cm_sp=topnav_g_crossbody_bags",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/770001/gear-equipment?cm_sp=topnav_g_equipment",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/770007/gear-camping?cm_sp=topnav_g_camping",
                    "hst:repobased": false
                },
                "name": "CAMPING",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770008/gear-camping-tents?cm_sp=topnav_g_tents",
                        "hst:repobased": false
                    },
                    "name": "Tents",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770008/gear-camping-tents?cm_sp=topnav_g_tents",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770009/gear-camping-sleeping-bags?cm_sp=topnav_g_sleeping_bags",
                        "hst:repobased": false
                    },
                    "name": "Sleeping Bags",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770009/gear-camping-sleeping-bags?cm_sp=topnav_g_sleeping_bags",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770010/gear-camping-chairs?cm_sp=topnav_g_chairs",
                        "hst:repobased": false
                    },
                    "name": "Chairs",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770010/gear-camping-chairs?cm_sp=topnav_g_chairs",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/770007/gear-camping?cm_sp=topnav_g_camping",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/770011/gear-accessories?cm_sp=topnav_g_accessories",
                    "hst:repobased": false
                },
                "name": "ACCESSORIES",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770012/gear-accessories-travel?cm_sp=topnav_g_travel",
                        "hst:repobased": false
                    },
                    "name": "Travel",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770012/gear-accessories-travel?cm_sp=topnav_g_travel",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770013/gear-accessories-outdoor?cm_sp=topnav_g_outdoor",
                        "hst:repobased": false
                    },
                    "name": "Outdoor",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770013/gear-accessories-outdoor?cm_sp=topnav_g_outdoor",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770014/gear-accessories-lighting?cm_sp=topnav_g_lighting",
                        "hst:repobased": false
                    },
                    "name": "Lighting",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770014/gear-accessories-lighting?cm_sp=topnav_g_lighting",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/800002/gear-accessories-games?cm_sp=topnav_g_games",
                        "hst:repobased": false
                    },
                    "name": "Games",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/800002/gear-accessories-games?cm_sp=topnav_g_games",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770015/gear-accessories-knives-and-tools?cm_sp=topnav_g_knives_tools",
                        "hst:repobased": false
                    },
                    "name": "Knives \u0026 Tools",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770015/gear-accessories-knives-and-tools?cm_sp=topnav_g_knives_tools",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770016/gear-accessories-sunglasses?cm_sp=topnav_g_sunglasses",
                        "hst:repobased": false
                    },
                    "name": "Sunglasses",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770016/gear-accessories-sunglasses?cm_sp=topnav_g_sunglasses",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/770011/gear-accessories?cm_sp=topnav_g_accessories",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20074/gear-hydration?cm_sp=topnav_g_hydration",
                    "hst:repobased": false
                },
                "name": "HYDRATION",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770017/gear-hydration-water-bottles?cm_sp=topnav_g_water_bottles",
                        "hst:repobased": false
                    },
                    "name": "Water Bottles",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770017/gear-hydration-water-bottles?cm_sp=topnav_g_water_bottles",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/770018/gear-hydration-cups-and-mugs?cm_sp=topnav_g_cups_mugs",
                        "hst:repobased": false
                    },
                    "name": "Cups \u0026 Mugs",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/770018/gear-hydration-cups-and-mugs?cm_sp=topnav_g_cups_mugs",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20074/gear-hydration?cm_sp=topnav_g_hydration",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "BRANDS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/s/stanley?keyword=stanley\u0026cm_sp=topnav_g_brands_stanley",
                        "hst:repobased": false
                    },
                    "name": "Stanley®",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/s/stanley?keyword=stanley\u0026cm_sp=topnav_g_brands_stanley",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/s/nite-ize?keyword=nite%20ize\u0026cm_sp=topnav_g_brands_nite_ize",
                        "hst:repobased": false
                    },
                    "name": "Nite Ize®",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/s/nite-ize?keyword=nite%20ize\u0026cm_sp=topnav_g_brands_nite_ize",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/s/travelon?keyword=travelon\u0026cm_sp=topnav_g_brands_travelon",
                        "hst:repobased": false
                    },
                    "name": "Travelon®",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/s/travelon?keyword=travelon\u0026cm_sp=topnav_g_brands_travelon",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/800000009/gear-pets?cm_sp=topnav_gear_pets",
                    "hst:repobased": false
                },
                "name": "PETS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/800000011/gear-pets-jackets?cm_sp=topnav_gear_pets_jackets"
                    },
                    "name": "Jackets",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/800000011/gear-pets-jackets?cm_sp=topnav_gear_pets_jackets",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/800000012/gear-pets-sweaters?"
                    },
                    "name": "Sweaters",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/800000012/gear-pets-sweaters?",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/800000014/gear-pets-accessories?cm_sp=topnav_gear_pets_accessories",
                        "hst:repobased": false
                    },
                    "name": "Accessories",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/800000014/gear-pets-accessories?cm_sp=topnav_gear_pets_accessories",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/800000013/gear-pets-toys?"
                    },
                    "name": "Toys",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/800000013/gear-pets-toys?",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/800000009/gear-pets?cm_sp=topnav_gear_pets",
                        "type": "external"
                    }
                }
            }],
            "parameters": {},
            "_links": {
                "site": {
                    "href": "/content/gear?cm_sp=topnav_g",
                    "type": "external"
                }
            }
        }, {
            "depth": 0,
            "repositoryBased": false,
            "properties": {
                "hst:parameternames": ["openInNewTab"],
                "hst:repobased": false,
                "hst:parametervalues": ["disabled"],
                "hst:externallink": "/content/footwear?cm_sp=topnav_f"
            },
            "name": "FOOTWEAR",
            "childMenuItems": [{
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:parametervalues": ["disabled"],
                    "hst:repobased": false
                },
                "name": "FEATURED",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/footwear?keyword=footwear\u0026cm_sp=topnav_f_featured_viewall"
                    },
                    "name": "View All",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/footwear?keyword=footwear\u0026cm_sp=topnav_f_featured_viewall",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/footwear?keyword=footwear\u0026cm_sp=topnav_f_featured_sale\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Sale",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/footwear?keyword=footwear\u0026cm_sp=topnav_f_featured_sale\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:repobased": false,
                    "hst:parametervalues": ["disabled"],
                    "hst:externallink": "/c/20130/womens-footwear?cm_sp=topnav_f_w_footwear"
                },
                "name": "WOMEN",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20133/womens-boots?cm_sp=topnav_f_w_boots",
                        "hst:repobased": false
                    },
                    "name": "Boots",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20133/womens-boots?cm_sp=topnav_f_w_boots",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20131/womens-hiking?cm_sp=topnav_f_w_hiking",
                        "hst:repobased": false
                    },
                    "name": "Hiking",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20131/womens-hiking?cm_sp=topnav_f_w_hiking",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/580011/womens-casual?cm_sp=topnav_f_w_casual",
                        "hst:repobased": false
                    },
                    "name": "Casual",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/580011/womens-casual?cm_sp=topnav_f_w_casual",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20137/womens-sandals?cm_sp=topnav_f_w_sandals",
                        "hst:repobased": false
                    },
                    "name": "Sandals",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20137/womens-sandals?cm_sp=topnav_f_w_sandals",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20138/womens-slippers?cm_sp=topnav_f_w_slippers",
                        "hst:repobased": false
                    },
                    "name": "Slippers",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20138/womens-slippers?cm_sp=topnav_f_w_slippers",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20102/womens-socks?cm_sp=topnav_f_w_socks",
                        "hst:repobased": false
                    },
                    "name": "Socks",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20102/womens-socks?cm_sp=topnav_f_w_socks",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {
                    "site": {
                        "href": "/c/20130/womens-footwear?cm_sp=topnav_f_w_footwear",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:repobased": false,
                    "hst:parametervalues": ["disabled"],
                    "hst:externallink": "/c/20030/mens-footwear?cm_sp=topnav_f_m_footwear"
                },
                "name": "MEN",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20031/mens-boots?cm_sp=topnav_f_m_boots",
                        "hst:repobased": false
                    },
                    "name": "Boots",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20031/mens-boots?cm_sp=topnav_f_m_boots",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20034/mens-hiking?cm_sp=topnav_f_m_hiking",
                        "hst:repobased": false
                    },
                    "name": "Hiking",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20034/mens-hiking?cm_sp=topnav_f_m_hiking",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/580049/mens-casual?cm_sp=topnav_f_m_casual",
                        "hst:repobased": false
                    },
                    "name": "Casual",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/580049/mens-casual?cm_sp=topnav_f_m_casual",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20037/mens-sandals?cm_sp=topnav_f_m_sandals",
                        "hst:repobased": false
                    },
                    "name": "Sandals",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20037/mens-sandals?cm_sp=topnav_f_m_sandals",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20038/mens-slippers?cm_sp=topnav_f_m_slippers",
                        "hst:repobased": false
                    },
                    "name": "Slippers",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20038/mens-slippers?cm_sp=topnav_f_m_slippers",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20007/mens-socks?cm_sp=topnav_f_m_socks",
                        "hst:repobased": false
                    },
                    "name": "Socks",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20007/mens-socks?cm_sp=topnav_f_m_socks",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {
                    "site": {
                        "href": "/c/20030/mens-footwear?cm_sp=topnav_f_m_footwear",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:parametervalues": ["disabled"],
                    "hst:repobased": false
                },
                "name": "SHOPS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/content/footwear-guide?cm_sp=topnav_fp_shops_hikingfootwear",
                        "hst:repobased": false
                    },
                    "name": "Hiking Footwear Shop",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/content/footwear-guide?cm_sp=topnav_fp_shops_hikingfootwear",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {}
            }],
            "parameters": {
                "openInNewTab": "disabled"
            },
            "_links": {
                "site": {
                    "href": "/content/footwear?cm_sp=topnav_f",
                    "type": "external"
                }
            }
        }, {
            "depth": 0,
            "repositoryBased": false,
            "properties": {
                "hst:externallink": "/content/home?cm_sp=topnav_h",
                "hst:repobased": false
            },
            "name": "HOME",
            "childMenuItems": [{
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "FEATURED",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20061/home?cm_sp=topnav_home_featured_viewall",
                        "hst:repobased": false
                    },
                    "name": "View All",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20061/home?cm_sp=topnav_home_featured_viewall",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20061/home?cm_sp=topnav_home_featured_newarrivals\u0026sortBy=launch_date\u0026sortOrder=desc",
                        "hst:repobased": false
                    },
                    "name": "New Arrivals",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20061/home?cm_sp=topnav_home_featured_newarrivals\u0026sortBy=launch_date\u0026sortOrder=desc",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20061/home?cm_sp=topnav_home_featured_sale\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Sale",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20061/home?cm_sp=topnav_home_featured_sale\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20061/home?cm_sp=topnav_home",
                    "hst:repobased": false
                },
                "name": "HOME",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20062/blankets-throws?cm_sp=topnav_home_blankets-throws",
                        "hst:repobased": false
                    },
                    "name": "Blankets \u0026 Throws",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20062/blankets-throws?cm_sp=topnav_home_blankets-throws",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20068/sheets-pillowcases?cm_sp=topnav_home_sheets-pillowcases",
                        "hst:repobased": false
                    },
                    "name": "Sheets \u0026 Pillowcases",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20068/sheets-pillowcases?cm_sp=topnav_home_sheets-pillowcases",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20064/duvet-covers-shams?cm_sp=topnav_home_duvetcovers-shams",
                        "hst:repobased": false
                    },
                    "name": "Duvet Covers \u0026 Shams",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20064/duvet-covers-shams?cm_sp=topnav_home_duvetcovers-shams",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20063/comforters?cm_sp=topnav_home_comforters",
                        "hst:repobased": false
                    },
                    "name": "Comforters",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20063/comforters?cm_sp=topnav_home_comforters",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20066/pillows?cm_sp=topnav_home_pillows",
                        "hst:repobased": false
                    },
                    "name": "Pillows",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20066/pillows?cm_sp=topnav_home_pillows",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20061/home?cm_sp=topnav_home",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:parametervalues": ["disabled"],
                    "hst:repobased": false
                },
                "name": "SPECIAL COLLECTIONS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/campaign/photographer-series-down-throw"
                    },
                    "name": "Limited Edition Photographer Series Down Throws",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/campaign/photographer-series-down-throw",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {}
            }],
            "parameters": {},
            "_links": {
                "site": {
                    "href": "/content/home?cm_sp=topnav_h",
                    "type": "external"
                }
            }
        }, {
            "depth": 0,
            "repositoryBased": false,
            "properties": {
                "hst:parameternames": ["openInNewTab"],
                "hst:repobased": false,
                "hst:parametervalues": ["disabled"],
                "hst:externallink": "/s/-?keyword=*\u0026cm_sp=topnav_sale\u0026facets=sale_attr%3A%22Yes%22"
            },
            "name": "SALE",
            "childMenuItems": [{
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:repobased": false,
                    "hst:parametervalues": ["disabled"],
                    "hst:externallink": "/c/20094/women?cm_sp=topnav_sale_women\u0026facets=sale_attr%3A%22Yes%22"
                },
                "name": "WOMEN",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20150/womens-tops?cm_sp=topnav_sale_w_tops\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Tops",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20150/womens-tops?cm_sp=topnav_sale_w_tops\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20123/womens-bottoms?cm_sp=topnav_sale_w_bottoms\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Bottoms",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20123/womens-bottoms?cm_sp=topnav_sale_w_bottoms\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20117/womens-jackets-vests?cm_sp=topnav_sale_w_outerwear\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Outerwear",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20117/womens-jackets-vests?cm_sp=topnav_sale_w_outerwear\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20130/womens-footwear?cm_sp=topnav_sale_w_footwear\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Footwear",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20130/womens-footwear?cm_sp=topnav_sale_w_footwear\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20095/womens-accessories?cm_sp=topnav_sale_w_accessories\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Accessories",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20095/womens-accessories?cm_sp=topnav_sale_w_accessories\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {
                    "site": {
                        "href": "/c/20094/women?cm_sp=topnav_sale_women\u0026facets=sale_attr%3A%22Yes%22",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:repobased": false,
                    "hst:parametervalues": ["disabled"],
                    "hst:externallink": "/c/20001/men?cm_sp=topnav_sale_men\u0026facets=sale_attr%3A%22Yes%22"
                },
                "name": "MEN",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20052/mens-tops?cm_sp=topnav_sale_m_tops\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Tops",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20052/mens-tops?cm_sp=topnav_sale_m_tops\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20021/mens-bottoms?cm_sp=topnav_sale_m_bottoms\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Bottoms",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20021/mens-bottoms?cm_sp=topnav_sale_m_bottoms\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20015/mens-jackets-vests?cm_sp=topnav_sale_m_outerwear\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Outerwear",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20015/mens-jackets-vests?cm_sp=topnav_sale_m_outerwear\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20030/mens-footwear?cm_sp=topnav_sale_m_footwear\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Footwear",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20030/mens-footwear?cm_sp=topnav_sale_m_footwear\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20002/mens-accessories?cm_sp=topnav_sale_m_accessories\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Accessories",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20002/mens-accessories?cm_sp=topnav_sale_m_accessories\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {
                    "site": {
                        "href": "/c/20001/men?cm_sp=topnav_sale_men\u0026facets=sale_attr%3A%22Yes%22",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:repobased": false,
                    "hst:parametervalues": ["disabled"],
                    "hst:externallink": "/c/20082/kids?cm_sp=topnav_sale_kids\u0026facets=sale_attr%3A%22Yes%22"
                },
                "name": "KIDS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20088/kids-girls?cm_sp=topnav_sale_kids_g\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Girls",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20088/kids-girls?cm_sp=topnav_sale_kids_g\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20083/kids-boys??cm_sp=topnav_sale_kids_b\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Boys",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20083/kids-boys??cm_sp=topnav_sale_kids_b\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/690001/kids-infant-and-toddler?cm_sp=topnav_sale_kids_it\u0026facets=sale_attr%3A%22Yes%22"
                    },
                    "name": "Infant \u0026 Toddler",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/690001/kids-infant-and-toddler?cm_sp=topnav_sale_kids_it\u0026facets=sale_attr%3A%22Yes%22",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {
                    "site": {
                        "href": "/c/20082/kids?cm_sp=topnav_sale_kids\u0026facets=sale_attr%3A%22Yes%22",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:repobased": false,
                    "hst:parametervalues": ["disabled"],
                    "hst:externallink": "/c/20070/gear?cm_sp=topnav_sale_gear\u0026facets=sale_attr%3A%22Yes%22"
                },
                "name": "GEAR",
                "childMenuItems": [],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {
                    "site": {
                        "href": "/c/20070/gear?cm_sp=topnav_sale_gear\u0026facets=sale_attr%3A%22Yes%22",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:repobased": false,
                    "hst:parametervalues": ["disabled"],
                    "hst:externallink": "/c/20061/home?cm_sp=topnav_sale_home\u0026facets=sale_attr%3A%22Yes%22"
                },
                "name": "HOME",
                "childMenuItems": [],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {
                    "site": {
                        "href": "/c/20061/home?cm_sp=topnav_sale_home\u0026facets=sale_attr%3A%22Yes%22",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:repobased": false,
                    "hst:parametervalues": ["disabled"],
                    "hst:externallink": "/content/clearance?cm_sp=topnav_sale_clearance"
                },
                "name": "CLEARANCE",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20094/women?tab=c\u0026cm_sp=topnav_sale_clearance_w"
                    },
                    "name": "Women",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20094/women?tab=c\u0026cm_sp=topnav_sale_clearance_w",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20001/men?tab=c\u0026cm_sp=topnav_sale_clearance_m"
                    },
                    "name": "Men",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20001/men?tab=c\u0026cm_sp=topnav_sale_clearance_m",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20082/kids?tab=c\u0026cm_sp=topnav_sale_clearance_k"
                    },
                    "name": "Kids",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20082/kids?tab=c\u0026cm_sp=topnav_sale_clearance_k",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20061/home?tab=c\u0026cm_sp=topnav_sale_clearance_h"
                    },
                    "name": "Home",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20061/home?tab=c\u0026cm_sp=topnav_sale_clearance_h",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {
                    "site": {
                        "href": "/content/clearance?cm_sp=topnav_sale_clearance",
                        "type": "external"
                    }
                }
            }],
            "parameters": {
                "openInNewTab": "disabled"
            },
            "_links": {
                "site": {
                    "href": "/s/-?keyword=*\u0026cm_sp=topnav_sale\u0026facets=sale_attr%3A%22Yes%22",
                    "type": "external"
                }
            }
        }, {
            "depth": 0,
            "repositoryBased": false,
            "properties": {
                "hst:externallink": "/content/clearance?cm_sp=topnav_c",
                "hst:repobased": false
            },
            "name": "CLEARANCE",
            "childMenuItems": [{
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20094/women?tab=c\u0026cm_sp=topnav_c_w_w",
                    "hst:repobased": false
                },
                "name": "WOMEN",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20117/jackets-vests?tab=c\u0026cm_sp=topnav_c_w_jackets-vests",
                        "hst:repobased": false
                    },
                    "name": "Outerwear",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20117/jackets-vests?tab=c\u0026cm_sp=topnav_c_w_jackets-vests",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/140003/fleece?tab=c\u0026cm_sp=topnav_c_w_fleece",
                        "hst:repobased": false
                    },
                    "name": "Fleece",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/140003/fleece?tab=c\u0026cm_sp=topnav_c_w_fleece",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20150/tops?tab=c\u0026cm_sp=topnav_c_w_tops",
                        "hst:repobased": false
                    },
                    "name": "Tops",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20150/tops?tab=c\u0026cm_sp=topnav_c_w_tops",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20123/bottoms?tab=c\u0026cm_sp=topnav_c_w_bottoms",
                        "hst:repobased": false
                    },
                    "name": "Bottoms",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20123/bottoms?tab=c\u0026cm_sp=topnav_c_w_bottoms",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20130/footwear?tab=c\u0026cm_sp=topnav_c_w_footwear",
                        "hst:repobased": false
                    },
                    "name": "Footwear",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20130/footwear?tab=c\u0026cm_sp=topnav_c_w_footwear",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20095/accessories?tab=c\u0026cm_sp=topnav_c_w_accessories",
                        "hst:repobased": false
                    },
                    "name": "Accessories",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20095/accessories?tab=c\u0026cm_sp=topnav_c_w_accessories",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20094/women?tab=c\u0026cm_sp=topnav_c_w_w",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20001/men?tab=c\u0026cm_sp=topnav_c_m",
                    "hst:repobased": false
                },
                "name": "MEN",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20015/jackets-vests?tab=c\u0026cm_sp=topnav_c_m_jackets-vests",
                        "hst:repobased": false
                    },
                    "name": "Outerwear",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20015/jackets-vests?tab=c\u0026cm_sp=topnav_c_m_jackets-vests",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/140004/fleece?tab=c\u0026cm_sp=topnav_c_m_fleece",
                        "hst:repobased": false
                    },
                    "name": "Fleece",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/140004/fleece?tab=c\u0026cm_sp=topnav_c_m_fleece",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20052/tops?tab=c\u0026cm_sp=topnav_c_m_tops",
                        "hst:repobased": false
                    },
                    "name": "Tops",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20052/tops?tab=c\u0026cm_sp=topnav_c_m_tops",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20021/bottoms?tab=c\u0026cm_sp=topnav_c_m_bottoms",
                        "hst:repobased": false
                    },
                    "name": "Bottoms",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20021/bottoms?tab=c\u0026cm_sp=topnav_c_m_bottoms",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20030/footwear?tab=c\u0026cm_sp=topnav_c_m_footwear",
                        "hst:repobased": false
                    },
                    "name": "Footwear",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20030/footwear?tab=c\u0026cm_sp=topnav_c_m_footwear",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20002/accessories?tab=c\u0026cm_sp=topnav_c_m_accessories",
                        "hst:repobased": false
                    },
                    "name": "Accessories",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20002/accessories?tab=c\u0026cm_sp=topnav_c_m_accessories",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20001/men?tab=c\u0026cm_sp=topnav_c_m",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/c/20082/kids?tab=c\u0026cm_sp=topnav_c_kids",
                    "hst:repobased": false
                },
                "name": "KIDS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20083/boys?tab=c\u0026cm_sp=topnav_c_kids_boys",
                        "hst:repobased": false
                    },
                    "name": "Boys",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20083/boys?tab=c\u0026cm_sp=topnav_c_kids_boys",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/20088/girls?tab=c\u0026cm_sp=topnav_c_kids_girls",
                        "hst:repobased": false
                    },
                    "name": "Girls",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/20088/girls?tab=c\u0026cm_sp=topnav_c_kids_girls",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/c/690001/infant-toddler?tab=c\u0026cm_sp=topnav_c_k_infant-toddler",
                        "hst:repobased": false
                    },
                    "name": "Infant \u0026 Toddler",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/c/690001/infant-toddler?tab=c\u0026cm_sp=topnav_c_k_infant-toddler",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/c/20082/kids?tab=c\u0026cm_sp=topnav_c_kids",
                        "type": "external"
                    }
                }
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:parameternames": ["openInNewTab"],
                    "hst:repobased": false,
                    "hst:parametervalues": ["disabled"],
                    "hst:externallink": "/c/20061/home?tab=c\u0026cm_sp=topnav_c_m"
                },
                "name": "Home",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/c/20062/home-blankets-and-throws?tab=c"
                    },
                    "name": "Blankets \u0026 Throws",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/c/20062/home-blankets-and-throws?tab=c",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/s/cbd-bedding?keyword=cbd%20bedding"
                    },
                    "name": "CBD Bedding",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/s/cbd-bedding?keyword=cbd%20bedding",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {
                    "openInNewTab": "disabled"
                },
                "_links": {
                    "site": {
                        "href": "/c/20061/home?tab=c\u0026cm_sp=topnav_c_m",
                        "type": "external"
                    }
                }
            }],
            "parameters": {},
            "_links": {
                "site": {
                    "href": "/content/clearance?cm_sp=topnav_c",
                    "type": "external"
                }
            }
        }, {
            "depth": 0,
            "repositoryBased": false,
            "properties": {
                "hst:externallink": "/campaign/guidepost?cm_sp=topnav_guide",
                "hst:repobased": false
            },
            "name": "GUIDEPOST",
            "childMenuItems": [{
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "FEATURED",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/guide-built-process?cm_sp=topnav_guide_featured_guidebuilt",
                        "hst:repobased": false
                    },
                    "name": "The Guide Built Process",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/guide-built-process?cm_sp=topnav_guide_featured_guidebuilt",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/awards?cm_sp=topnav_guide_featured_awardwinners",
                        "hst:repobased": false
                    },
                    "name": "Awards \u0026 Press",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/awards?cm_sp=topnav_guide_featured_awardwinners",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/one-outside-film-grant?cm_sp=topnav_guide_featured_filmgrant",
                        "hst:repobased": false
                    },
                    "name": "One Outside Film Grant",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/one-outside-film-grant?cm_sp=topnav_guide_featured_filmgrant",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/find-yourself-outside/sleep-under-the-stars?cm_sp=topnav_guide_findyourselfoutside_sleepunderthestars",
                        "hst:repobased": false
                    },
                    "name": "Sleep Under the Stars",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/find-yourself-outside/sleep-under-the-stars?cm_sp=topnav_guide_findyourselfoutside_sleepunderthestars",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/eb-contributors?cm_sp=topnav_guidepost_featured_ebcontibutors",
                        "hst:repobased": false
                    },
                    "name": "EB Contributors",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/eb-contributors?cm_sp=topnav_guidepost_featured_ebcontibutors",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/campaign/icebox?cm_sp=topnav_guidepost_featured_IceBox"
                    },
                    "name": "Icebox – Innovative Gear",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/campaign/icebox?cm_sp=topnav_guidepost_featured_IceBox",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "ABOUT US",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/theguide?cm_sp=topnav_guide_aboutus_ourfounder",
                        "hst:repobased": false
                    },
                    "name": "Our Founder",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/theguide?cm_sp=topnav_guide_aboutus_ourfounder",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/awards?cm_sp=topnav_guide_aboutus_awardwinners",
                        "hst:repobased": false
                    },
                    "name": "Awards \u0026 Press",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/awards?cm_sp=topnav_guide_aboutus_awardwinners",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "//careers.eddiebauer.com/?cm_sp=topnav_guide_aboutus_careers",
                        "hst:repobased": false
                    },
                    "name": "Careers",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "//careers.eddiebauer.com/?cm_sp=topnav_guide_aboutus_careers",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "https://www.eddiebauer.com/campaign/sustainability"
                    },
                    "name": "Sustainability",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "https://www.eddiebauer.com/campaign/sustainability",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "GUIDE TEAM",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/guide-built-process",
                        "hst:repobased": false
                    },
                    "name": "The Guide Built Process",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/guide-built-process",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/guides?cm_sp=topnav_guide_guidesandathletes_meettheteam",
                        "hst:repobased": false
                    },
                    "name": "Meet the Team",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/guides?cm_sp=topnav_guide_guidesandathletes_meettheteam",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:repobased": false
                },
                "name": "PARTNERS",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/americanforests?cm_sp=topnav_guide_partnerships_americanforests",
                        "hst:repobased": false
                    },
                    "name": "American Forests",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/americanforests?cm_sp=topnav_guide_partnerships_americanforests",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/theheroesproject?cm_sp=topnav_guide_partnerships_theheroesproject",
                        "hst:repobased": false
                    },
                    "name": "The Heroes Project",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/theheroesproject?cm_sp=topnav_guide_partnerships_theheroesproject",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/the-venture-out-project?cm_sp=topnav_guide_partnerships_theventureoutproject",
                        "hst:repobased": false
                    },
                    "name": "The Venture Out Project",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/the-venture-out-project?cm_sp=topnav_guide_partnerships_theventureoutproject",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/high-fives-foundation?cm_sp=topnav_guide_partnerships_highfivesfoundation",
                        "hst:repobased": false
                    },
                    "name": "High Fives Foundation",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/high-fives-foundation?cm_sp=topnav_guide_partnerships_highfivesfoundation",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/campaign/the-juniper-fund?cm_sp=topnav_guide_partnerships_juniperfund",
                        "hst:repobased": false
                    },
                    "name": "The Juniper Fund",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/campaign/the-juniper-fund?cm_sp=topnav_guide_partnerships_juniperfund",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {}
            }, {
                "depth": 0,
                "repositoryBased": false,
                "properties": {
                    "hst:externallink": "/stories?cm_sp=topnav_guide_stories",
                    "hst:repobased": false
                },
                "name": "STORIES",
                "childMenuItems": [{
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/stories?cm_sp=topnav_guide_stories_new",
                        "hst:repobased": false
                    },
                    "name": "New",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/stories?cm_sp=topnav_guide_stories_new",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/stories/category/camp-hike?cm_sp=topnav_guide_stories_camphike",
                        "hst:repobased": false
                    },
                    "name": "Camp \u0026 Hike",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/stories/category/camp-hike?cm_sp=topnav_guide_stories_camphike",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/stories/category/wellness?cm_sp=topnav_guide_stories_wellness",
                        "hst:repobased": false
                    },
                    "name": "Wellness",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/stories/category/wellness?cm_sp=topnav_guide_stories_wellness",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:externallink": "/stories/category/food?cm_sp=topnav_guide_stories_food",
                        "hst:repobased": false
                    },
                    "name": "Food",
                    "childMenuItems": [],
                    "parameters": {},
                    "_links": {
                        "site": {
                            "href": "/stories/category/food?cm_sp=topnav_guide_stories_food",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/stories/all-recent-videos?cm_sp=topnav_guide_stories_videos"
                    },
                    "name": "Recent Videos",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/stories/all-recent-videos?cm_sp=topnav_guide_stories_videos",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/stories/category/community?cm_sp=topnav_guide_stories_community"
                    },
                    "name": "Community",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/stories/category/community?cm_sp=topnav_guide_stories_community",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/stories/category/expedition?cm_sp=topnav_guide_stories_expedition"
                    },
                    "name": "Expedition",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/stories/category/expedition?cm_sp=topnav_guide_stories_expedition",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/stories/category/education?cm_sp=topnav_guide_stories_education"
                    },
                    "name": "Education",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/stories/category/education?cm_sp=topnav_guide_stories_education",
                            "type": "external"
                        }
                    }
                }, {
                    "depth": 0,
                    "repositoryBased": false,
                    "properties": {
                        "hst:parameternames": ["openInNewTab"],
                        "hst:repobased": false,
                        "hst:parametervalues": ["disabled"],
                        "hst:externallink": "/stories/category/gear?cm_sp=topnav_guide_stories_gear"
                    },
                    "name": "Gear",
                    "childMenuItems": [],
                    "parameters": {
                        "openInNewTab": "disabled"
                    },
                    "_links": {
                        "site": {
                            "href": "/stories/category/gear?cm_sp=topnav_guide_stories_gear",
                            "type": "external"
                        }
                    }
                }],
                "parameters": {},
                "_links": {
                    "site": {
                        "href": "/stories?cm_sp=topnav_guide_stories",
                        "type": "external"
                    }
                }
            }],
            "parameters": {},
            "_links": {
                "site": {
                    "href": "/campaign/guidepost?cm_sp=topnav_guide",
                    "type": "external"
                }
            }
        }, {
            "depth": 0,
            "repositoryBased": false,
            "properties": {
                "hst:parameternames": ["openInNewTab"],
                "hst:repobased": false,
                "hst:parametervalues": ["enabled"],
                "hst:externallink": "https://rentals.eddiebauer.com?utm_source=EB\u0026utm_campaign=\u0026utm_medium=Topnav\u0026utm_term=Site"
            },
            "name": "RENTAL",
            "childMenuItems": [],
            "parameters": {
                "openInNewTab": "enabled"
            },
            "_links": {
                "site": {
                    "href": "https://rentals.eddiebauer.com?utm_source=EB\u0026utm_campaign=\u0026utm_medium=Topnav\u0026utm_term=Site",
                    "type": "external"
                }
            }
        }]
