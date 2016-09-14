module.exports = {
    "type": "Program",
    "start": 0,
    "end": 53,
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 53
        }
    },
    "range": [
        0,
        53
    ],
    "body": [
        {
            "type": "FunctionDeclaration",
            "start": 0,
            "end": 52,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 52
                }
            },
            "range": [
                0,
                52
            ],
            "id": {
                "type": "Identifier",
                "start": 15,
                "end": 18,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 15
                    },
                    "end": {
                        "line": 1,
                        "column": 18
                    }
                },
                "range": [
                    15,
                    18
                ],
                "name": "foo"
            },
            "generator": false,
            "expression": false,
            "async": true,
            "params": [
                {
                    "type": "AssignmentPattern",
                    "start": 19,
                    "end": 48,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 19
                        },
                        "end": {
                            "line": 1,
                            "column": 48
                        }
                    },
                    "range": [
                        19,
                        48
                    ],
                    "left": {
                        "type": "Identifier",
                        "start": 19,
                        "end": 20,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 19
                            },
                            "end": {
                                "line": 1,
                                "column": 20
                            }
                        },
                        "range": [
                            19,
                            20
                        ],
                        "name": "a"
                    },
                    "right": {
                        "type": "ObjectExpression",
                        "start": 23,
                        "end": 48,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 23
                            },
                            "end": {
                                "line": 1,
                                "column": 48
                            }
                        },
                        "range": [
                            23,
                            48
                        ],
                        "properties": [
                            {
                                "type": "Property",
                                "start": 24,
                                "end": 47,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 24
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 47
                                    }
                                },
                                "range": [
                                    24,
                                    47
                                ],
                                "method": true,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                    "type": "Identifier",
                                    "start": 30,
                                    "end": 33,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 30
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 33
                                        }
                                    },
                                    "range": [
                                        30,
                                        33
                                    ],
                                    "name": "bar"
                                },
                                "kind": "init",
                                "value": {
                                    "type": "FunctionExpression",
                                    "start": 33,
                                    "end": 47,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 33
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 47
                                        }
                                    },
                                    "range": [
                                        33,
                                        47
                                    ],
                                    "id": null,
                                    "generator": false,
                                    "expression": false,
                                    "async": true,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "start": 36,
                                        "end": 47,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 36
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 47
                                            }
                                        },
                                        "range": [
                                            36,
                                            47
                                        ],
                                        "body": [
                                            {
                                                "type": "ExpressionStatement",
                                                "start": 38,
                                                "end": 45,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 38
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 45
                                                    }
                                                },
                                                "range": [
                                                    38,
                                                    45
                                                ],
                                                "expression": {
                                                    "type": "AwaitExpression",
                                                    "start": 38,
                                                    "end": 45,
                                                    "loc": {
                                                        "start": {
                                                            "line": 1,
                                                            "column": 38
                                                        },
                                                        "end": {
                                                            "line": 1,
                                                            "column": 45
                                                        }
                                                    },
                                                    "range": [
                                                        38,
                                                        45
                                                    ],
                                                    "argument": {
                                                        "type": "Identifier",
                                                        "start": 44,
                                                        "end": 45,
                                                        "loc": {
                                                            "start": {
                                                                "line": 1,
                                                                "column": 44
                                                            },
                                                            "end": {
                                                                "line": 1,
                                                                "column": 45
                                                            }
                                                        },
                                                        "range": [
                                                            44,
                                                            45
                                                        ],
                                                        "name": "b"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                }
            ],
            "body": {
                "type": "BlockStatement",
                "start": 50,
                "end": 52,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 50
                    },
                    "end": {
                        "line": 1,
                        "column": 52
                    }
                },
                "range": [
                    50,
                    52
                ],
                "body": []
            }
        },
        {
            "type": "EmptyStatement",
            "start": 52,
            "end": 53,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 52
                },
                "end": {
                    "line": 1,
                    "column": 53
                }
            },
            "range": [
                52,
                53
            ]
        }
    ],
    "sourceType": "script",
    "tokens": [
        {
            "type": "Identifier",
            "value": "async",
            "start": 0,
            "end": 5,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 5
                }
            },
            "range": [
                0,
                5
            ]
        },
        {
            "type": "Keyword",
            "value": "function",
            "start": 6,
            "end": 14,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 6
                },
                "end": {
                    "line": 1,
                    "column": 14
                }
            },
            "range": [
                6,
                14
            ]
        },
        {
            "type": "Identifier",
            "value": "foo",
            "start": 15,
            "end": 18,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 15
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            },
            "range": [
                15,
                18
            ]
        },
        {
            "type": "Punctuator",
            "value": "(",
            "start": 18,
            "end": 19,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 18
                },
                "end": {
                    "line": 1,
                    "column": 19
                }
            },
            "range": [
                18,
                19
            ]
        },
        {
            "type": "Identifier",
            "value": "a",
            "start": 19,
            "end": 20,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 19
                },
                "end": {
                    "line": 1,
                    "column": 20
                }
            },
            "range": [
                19,
                20
            ]
        },
        {
            "type": "Punctuator",
            "value": "=",
            "start": 21,
            "end": 22,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 21
                },
                "end": {
                    "line": 1,
                    "column": 22
                }
            },
            "range": [
                21,
                22
            ]
        },
        {
            "type": "Punctuator",
            "value": "{",
            "start": 23,
            "end": 24,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 23
                },
                "end": {
                    "line": 1,
                    "column": 24
                }
            },
            "range": [
                23,
                24
            ]
        },
        {
            "type": "Identifier",
            "value": "async",
            "start": 24,
            "end": 29,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 24
                },
                "end": {
                    "line": 1,
                    "column": 29
                }
            },
            "range": [
                24,
                29
            ]
        },
        {
            "type": "Identifier",
            "value": "bar",
            "start": 30,
            "end": 33,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 30
                },
                "end": {
                    "line": 1,
                    "column": 33
                }
            },
            "range": [
                30,
                33
            ]
        },
        {
            "type": "Punctuator",
            "value": "(",
            "start": 33,
            "end": 34,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 33
                },
                "end": {
                    "line": 1,
                    "column": 34
                }
            },
            "range": [
                33,
                34
            ]
        },
        {
            "type": "Punctuator",
            "value": ")",
            "start": 34,
            "end": 35,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 34
                },
                "end": {
                    "line": 1,
                    "column": 35
                }
            },
            "range": [
                34,
                35
            ]
        },
        {
            "type": "Punctuator",
            "value": "{",
            "start": 36,
            "end": 37,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 36
                },
                "end": {
                    "line": 1,
                    "column": 37
                }
            },
            "range": [
                36,
                37
            ]
        },
        {
            "type": "Identifier",
            "value": "await",
            "start": 38,
            "end": 43,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 38
                },
                "end": {
                    "line": 1,
                    "column": 43
                }
            },
            "range": [
                38,
                43
            ]
        },
        {
            "type": "Identifier",
            "value": "b",
            "start": 44,
            "end": 45,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 44
                },
                "end": {
                    "line": 1,
                    "column": 45
                }
            },
            "range": [
                44,
                45
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "start": 46,
            "end": 47,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 46
                },
                "end": {
                    "line": 1,
                    "column": 47
                }
            },
            "range": [
                46,
                47
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "start": 47,
            "end": 48,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 47
                },
                "end": {
                    "line": 1,
                    "column": 48
                }
            },
            "range": [
                47,
                48
            ]
        },
        {
            "type": "Punctuator",
            "value": ")",
            "start": 48,
            "end": 49,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 48
                },
                "end": {
                    "line": 1,
                    "column": 49
                }
            },
            "range": [
                48,
                49
            ]
        },
        {
            "type": "Punctuator",
            "value": "{",
            "start": 50,
            "end": 51,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 50
                },
                "end": {
                    "line": 1,
                    "column": 51
                }
            },
            "range": [
                50,
                51
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "start": 51,
            "end": 52,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 51
                },
                "end": {
                    "line": 1,
                    "column": 52
                }
            },
            "range": [
                51,
                52
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "start": 52,
            "end": 53,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 52
                },
                "end": {
                    "line": 1,
                    "column": 53
                }
            },
            "range": [
                52,
                53
            ]
        }
    ]
}