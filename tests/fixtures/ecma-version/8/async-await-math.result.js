module.exports = {
    "type": "Program",
    "start": 0,
    "end": 47,
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 47
        }
    },
    "range": [
        0,
        47
    ],
    "body": [
        {
            "type": "FunctionDeclaration",
            "start": 0,
            "end": 46,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 46
                }
            },
            "range": [
                0,
                46
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
                {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 22
                        },
                        "end": {
                            "line": 1,
                            "column": 23
                        }
                    },
                    "range": [
                        22,
                        23
                    ],
                    "name": "b"
                }
            ],
            "body": {
                "type": "BlockStatement",
                "start": 25,
                "end": 46,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 25
                    },
                    "end": {
                        "line": 1,
                        "column": 46
                    }
                },
                "range": [
                    25,
                    46
                ],
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "start": 27,
                        "end": 44,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 27
                            },
                            "end": {
                                "line": 1,
                                "column": 44
                            }
                        },
                        "range": [
                            27,
                            44
                        ],
                        "expression": {
                            "type": "BinaryExpression",
                            "start": 27,
                            "end": 44,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 27
                                },
                                "end": {
                                    "line": 1,
                                    "column": 44
                                }
                            },
                            "range": [
                                27,
                                44
                            ],
                            "left": {
                                "type": "AwaitExpression",
                                "start": 27,
                                "end": 34,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 27
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 34
                                    }
                                },
                                "range": [
                                    27,
                                    34
                                ],
                                "argument": {
                                    "type": "Identifier",
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
                                    ],
                                    "name": "a"
                                }
                            },
                            "operator": "+",
                            "right": {
                                "type": "AwaitExpression",
                                "start": 37,
                                "end": 44,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 37
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 44
                                    }
                                },
                                "range": [
                                    37,
                                    44
                                ],
                                "argument": {
                                    "type": "Identifier",
                                    "start": 43,
                                    "end": 44,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 43
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 44
                                        }
                                    },
                                    "range": [
                                        43,
                                        44
                                    ],
                                    "name": "b"
                                }
                            }
                        }
                    }
                ]
            }
        },
        {
            "type": "EmptyStatement",
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
            "value": ",",
            "start": 20,
            "end": 21,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 20
                },
                "end": {
                    "line": 1,
                    "column": 21
                }
            },
            "range": [
                20,
                21
            ]
        },
        {
            "type": "Identifier",
            "value": "b",
            "start": 22,
            "end": 23,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 22
                },
                "end": {
                    "line": 1,
                    "column": 23
                }
            },
            "range": [
                22,
                23
            ]
        },
        {
            "type": "Punctuator",
            "value": ")",
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
            "type": "Punctuator",
            "value": "{",
            "start": 25,
            "end": 26,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 25
                },
                "end": {
                    "line": 1,
                    "column": 26
                }
            },
            "range": [
                25,
                26
            ]
        },
        {
            "type": "Identifier",
            "value": "await",
            "start": 27,
            "end": 32,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 27
                },
                "end": {
                    "line": 1,
                    "column": 32
                }
            },
            "range": [
                27,
                32
            ]
        },
        {
            "type": "Identifier",
            "value": "a",
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
            "value": "+",
            "start": 35,
            "end": 36,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 35
                },
                "end": {
                    "line": 1,
                    "column": 36
                }
            },
            "range": [
                35,
                36
            ]
        },
        {
            "type": "Identifier",
            "value": "await",
            "start": 37,
            "end": 42,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 37
                },
                "end": {
                    "line": 1,
                    "column": 42
                }
            },
            "range": [
                37,
                42
            ]
        },
        {
            "type": "Identifier",
            "value": "b",
            "start": 43,
            "end": 44,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 43
                },
                "end": {
                    "line": 1,
                    "column": 44
                }
            },
            "range": [
                43,
                44
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "start": 45,
            "end": 46,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 45
                },
                "end": {
                    "line": 1,
                    "column": 46
                }
            },
            "range": [
                45,
                46
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
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
        }
    ]
}