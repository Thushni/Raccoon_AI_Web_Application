import { makeStyles } from "@material-ui/core/styles";

export default {

    Posts: [

        {
            id: 1,
            title: "Multiple Regression",
            algo_type: "Regression",
            algo_selected: "mlr",
            img: "/images/articles/posts/img1.jpg",
            des: "Visualize your data on the Sri Lankan map",

            train: [

                {
                    name: "Features",
                    multi: "true",
                    label: "Features",
                    options: [
                        "R&D Spend",
                        "Administration",
                        "Marketing Spend",
                        "State"
                    ]

                },
                {
                    name: "Targets",
                    multi: "true",
                    label: "Targets",
                    options: [
                        "Profit"
                    ]

                }

            ],
            config: [

                {
                    name: "std_scale",
                    label: "std_scale",
                    options: [
                        "True",
                        "False",
                    ]

                },
                {
                    name: "encoder",
                    label: "Encoder",
                    options: [
                        "onehot"

                    ]

                }


            ],
            predict: [

                {
                    config: [
                        {
                            name: "include_inputs",
                            label: "Include Inputs",
                            options: [
                                "True",
                                "False",
                            ]

                        },
                        {
                            name: "round",
                            label: "Round",
                            data_type: "number",
                            html_element: "number"

                        }
                    ]
                }

            ]

        },
        {
            id: 2,
            title: "ANN Regression",
            algo_type: "Regression",
            algo_selected: "ann",
            img: "/images/articles/posts/img2.jpg",
            des: "Predict your sales using simple linear regression",

            train: [

                {
                    name: "Features",
                    multi: "true",
                    label: "Features",
                    options: [
                        "R&D Spend",
                        "Administration",
                        "Marketing Spend",
                        "State"

                    ]
                },
                {
                    name: "Targets",
                    multi: "true",
                    label: "Targets",
                    options: [
                        "Profit"
                    ]

                }

            ],
            config: [

                {
                    name: "encoder",
                    label: "Encoder",
                    options: [
                        "onehot"
                    ]

                },
                {
                    name: "std_scale",
                    label: "std_scale",
                    options: [
                        "True",
                        "False",
                    ]

                },
                {
                    name: "Hidden units",
                    label: "Hidden Units",
                    data_type: "number",
                    html_element: "number"

                },
                {
                    name: "max iter",
                    label: "Max Iter",
                    data_type: "number",
                    html_element: "number"

                },


            ],
            predict: [

                {
                    config: [
                        {
                            name: "include_inputs",
                            label: "Include Inputs",
                            options: [
                                "True",
                                "False",
                            ]

                        }
                    ]
                }

            ]




        }, {
            id: 3,
            title: "Gradiant Bossting Regression",
            algo_type: "Regression",
            algo_selected: "gradboost",
            img: "/images/articles/posts/img3.png",
            des: "Predict your sales using multiple linear regression (supporting multiple features)",

            train: [

                {
                    name: "Features",
                    multi: "true",
                    label: "Features",
                    options: [
                        "R&D Spend",
                        "Administration",
                        "Marketing Spend",
                        "State"
                    ]

                },
                {
                    name: "Targets",
                    multi: "true",
                    label: "Targets",
                    options: [
                        "Profit"
                    ]

                }

            ],
            predict: [

                {
                    config: [
                        {
                            name: "include_inputs",
                            label: "Include Inputs",
                            options: [
                                "True",
                                "False",
                            ]

                        }
                    ]
                }

            ]



        }, {
            id: 4,
            title: "Random Forest Regression",
            algo_type: "Regression",
            algo_selected: "rendomforest",
            img: "/images/articles/posts/img4.jpg",
            des: "Predict customer churn using Artificial Neural Network",
            train: [

                {
                    name: "Features",
                    multi: "true",
                    label: "Features",
                    options: [
                        "R&D Spend",
                        "Administration",
                        "Marketing Spend",
                        "State"
                    ]

                },
                {
                    name: "Targets",
                    multi: "true",
                    label: "Targets",
                    options: [
                        "Profit"
                    ]

                }

            ],
            config: [

                {
                    name: "encoder",
                    label: "Encoder",
                    options: [
                        "label"
                    ]

                },

                {
                    name: "std_scale",
                    label: "std_scale",
                    options: [
                        "True",
                        "False",
                    ]

                }

            ],
            predict: [

                {
                    config: [
                        {
                            name: "include_inputs",
                            label: "Include Inputs",
                            options: [
                                "True",
                                "False",
                            ]

                        }
                    ]
                }

            ]


        }, {
            id: 5,
            title: "Logistic Regression",
            algo_type: "Regression",
            algo_selected: "logr",
            img: "/images/articles/posts/img5.png",
            des: "Analyze the trend of your data using logestic regression",

            train: [

                {
                    name: "Features",
                    label: "Features",
                    data_type: "date",
                    html_element: "date"

                },
                {
                    name: "Targets",
                    label: "Targets",
                    data_type: "number",
                    html_element: "number"

                },

            ],
            config: [

                {
                    name: "encoder",
                    label: "Encoder",
                    options: [
                        "null"
                    ]

                },

                {
                    name: "std_scale",
                    label: "std_scale",
                    options: [
                        "True",
                        "False",
                    ]

                }

            ],
            predict: [

                {
                    config: [
                        {
                            name: "include_inputs",
                            label: "Include Inputs",
                            options: [
                                "True",
                                "False",
                            ]

                        }
                    ]
                }

            ]


        }, {
            id: 6,
            title: "Arima",
            algo_type: "Time Series",
            algo_selected: "arima",
            img: "/images/articles/posts/img6.png",
            des: "Predict your sales using simple linear regression",
            train: [



            ],
            config: [

                {
                    name: "freq",
                    label: "Freq",
                    options: [
                        "W"
                    ]

                },

                {
                    name: "Test Size",
                    label: "Test Size",
                    data_type: "number",
                    html_element: "number"

                }

            ]
            


        }, {
            id: 7,
            title: "Auto Arima",
            algo_type: "Time Series",
            algo_selected: "auto-arima",
            img: "/images/articles/posts/img7.jpg",
            des: "Predict the outcome of a customer buying a product using Random Forest",
            train: [



            ],
            config: [

                {
                    name: "freq",
                    label: "Freq",
                    options: [
                        "W"
                    ]

                },

                {
                    name: "Test Size",
                    label: "Test Size",
                    data_type: "number"

                }
            ]



        }, {
            id: 8,
            title: "Theta",
            algo_type: "Time Series",
            algo_selected: "theta",
            img: "/images/articles/posts/img8.jpg",
            des: "Predict the yeild of a crop using Gradient Boosting",
            train: [



            ]
            , config: [

                {
                    name: "freq",
                    label: "Freq",
                    options: [
                        "W"
                    ]

                },

                {
                    name: "Test Size",
                    label: "Test Size",
                    data_type: "number"

                }

            ]

        }, {
            id: 9,
            title: "ANN classification",
            algo_type: "classification",
            algo_selected: "svm",
            img: "/images/articles/posts/img9.jpg",
            des: "Predict your insurance price through the multiple linear regression",

            train: [

                {
                    name: "Features",
                    multi: "true",
                    label: "Features",
                    options: [
                        "R&D Spend",
                        "Administration",
                        "Marketing Spend",
                        "Profit"
                    ]

                },
                {
                    name: "Targets",
                    multi: "true",
                    label: "Targets",
                    options: [
                        "State"
                    ]

                }

            ]
            ,
            config: [

                {
                    name: "encoder",
                    label: "Encoder",
                    options: [
                        "label"
                    ]

                },
                {
                    name: "std_scale",
                    label: "std_scale",
                    options: [
                        "True",
                        "False",
                    ]

                },
                {
                    name: "Hidden units",
                    label: "Hidden Units",
                    data_type: "number",

                },
                {
                    name: "max iter",
                    label: "Max Iter",
                    data_type: "number",

                },
            ],
            predict: [

                {
                    config: [
                        {
                            name: "include_inputs",
                            label: "Include Inputs",
                            options: [
                                "True",
                                "False",
                            ]

                        }
                    ]
                }

            ]

        },
        {
            id: 10,
            title: "Naive Bayes classification",
            algo_type: "classification",
            algo_selected: "nbc",
            img: "/images/articles/posts/img10.png",
            des: "Visualize your data on the Sri Lankan map",


            train: [

                {
                    name: "Features",
                    multi: "true",
                    label: "Features",
                    options: [
                        "R&D Spend",
                        "Administration",
                        "Marketing Spend",
                        "Profit"
                    ]

                },
                {
                    name: "Targets",
                    multi: "true",
                    label: "Targets",
                    options: [
                        "State"
                    ]

                }

            ],
            config: [

                {
                    name: "encoder",
                    label: "Encoder",
                    options: [
                        "label"
                    ]

                },
                {
                    name: "std_scale",
                    label: "std_scale",
                    options: [
                        "True",
                        "False",
                    ]

                },
                {
                    name: "Hidden units",
                    label: "Hidden Units",
                    data_type: "number",

                },
                {
                    name: "max iter",
                    label: "Max Iter",
                    data_type: "number",

                },
            ],
            predict: [

                {
                    config: [
                        {
                            name: "include_inputs",
                            label: "Include Inputs",
                            options: [
                                "True",
                                "False",
                            ]

                        }
                    ]
                }

            ]


        },
        {
            id: 11,
            title: "Random Forest classification",
            algo_type: "classification",
            algo_selected: "rfc",
            img: "/images/articles/posts/img11.png",
            des: "Predict your sales using simple linear regression",

            train: [

                {
                    name: "Features",
                    multi: "true",
                    label: "Features",
                    options: [
                        "R&D Spend",
                        "Administration",
                        "Marketing Spend",
                        "Profit"

                    ]

                },
                {
                    name: "Targets",
                    multi: "true",
                    label: "Targets",
                    options: [
                        "State"
                    ]

                }

            ],
            config: [

                {
                    name: "encoder",
                    label: "Encoder",
                    options: [
                        "label"
                    ]

                },
                {
                    name: "std_scale",
                    label: "std_scale",
                    options: [
                        "True",
                        "False",
                    ]

                },
                {
                    name: "Hidden units",
                    label: "Hidden Units",
                    data_type: "number",

                },
                {
                    name: "max iter",
                    label: "Max Iter",
                    data_type: "number",

                },

            ],
            predict: [

                {
                    config: [
                        {
                            name: "include_inputs",
                            label: "Include Inputs",
                            options: [
                                "True",
                                "False",
                            ]

                        }
                    ]
                }

            ]



        }, {
            id: 12,
            title: "SVM classification",
            algo_type: "classification",
            algo_selected: "svm",
            img: "/images/articles/posts/img12.png",
            des: "Predict your sales using multiple linear regression (supporting multiple features)",

            train: [

                {
                    name: "Features",
                    multi: "true",
                    label: "Features",
                    options: [
                        "R&D Spend",
                        "Administration",
                        "Marketing Spend",
                        "Profit"
                    ]

                },
                {
                    name: "Targets",
                    multi: "true",
                    label: "Features",
                    options: [

                        "State"
                    ]

                }

            ],
            config: [

                {
                    name: "encoder",
                    label: "Encoder",
                    options: [
                        "label"
                    ]

                },
                {
                    name: "std_scale",
                    label: "std_scale",
                    options: [
                        "True",
                        "False",
                    ]

                },
                {
                    name: "Hidden units",
                    label: "Hidden Units",
                    data_type: "number",

                },
                {
                    name: "max iter",
                    label: "Max Iter",
                    data_type: "number",

                },

            ],
            predict: [

                {
                    config: [
                        {
                            name: "include_inputs",
                            label: "Include Inputs",
                            options: [
                                "True",
                                "False",
                            ]

                        }
                    ]
                }

            ]

        }

    ]
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: 300
    },
    indeterminateColor: {
        color: "#f50057"
    },
    selectAllText: {
        fontWeight: 400
    },
    selectedAll: {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)"
        }
    }
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    },
    getContentAnchorEl: null,
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
    },
    transformOrigin: {
        vertical: "top",
        horizontal: "center"
    },
    variant: "menu"
};

export { useStyles, MenuProps };
