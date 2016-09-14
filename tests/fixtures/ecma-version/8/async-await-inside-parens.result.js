module.exports = {
    "type": "Program",
    "start": 0,
    "end": 44,
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 3,
            "column": 2
        }
    },
    "range": [
        0,
        44
    ],
    "body": [
        {
            "type": "FunctionDeclaration",
            "start": 0,
            "end": 43,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 1
                }
            },
            "range": [
                0,
                43
            ],
            "id": {
                "type": "Identifier",
                "start": 15,
                "end": 19,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 15
                    },
                    "end": {
                        "line": 1,
                        "column": 19
                    }
                },
                "range": [
                    15,
                    19
                ],
                "name": "wrap"
            },
            "generator": false,
            "expression": false,
            "async": true,
            "params": [],
            "body": {
                "type": "BlockStatement",
                "start": 22,
                "end": 43,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 22
                    },
                    "end": {
                        "line": 3,
                        "column": 1
                    }
                },
                "range": [
                    22,
                    43
                ],
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "start": 28,
                        "end": 41,
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 4
                            },
                            "end": {
                                "line": 2,
                                "column": 17
                            }
                        },
                        "range": [
                            28,
                            41
                        ],
                        "expression": {
                            "type": "AssignmentExpression",
                            "start": 29,
                            "end": 40,
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 5
                                },
                                "end": {
                                    "line": 2,
                                    "column": 16
                                }
                            },
                            "range": [
                                29,
                                40
                            ],
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "start": 29,
                                "end": 30,
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 5
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 6
                                    }
                                },
                                "range": [
                                    29,
                                    30
                                ],
                                "name": "a"
                            },
                            "right": {
                                "type": "AwaitExpression",
                                "start": 33,
                                "end": 40,
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 9
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 16
                                    }
                                },
                                "range": [
                                    33,
                                    40
                                ],
                                "argument": {
                                    "type": "Identifier",
                                    "start": 39,
                                    "end": 40,
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 15
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 16
                                        }
                                    },
                                    "range": [
                                        39,
                                        40
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
            "start": 43,
            "end": 44,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 1
                },
                "end": {
                    "line": 3,
                    "column": 2
                }
            },
            "range": [
                43,
                44
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
            "value": "wrap",
            "start": 15,
            "end": 19,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 15
                },
                "end": {
                    "line": 1,
                    "column": 19
                }
            },
            "range": [
                15,
                19
            ]
        },
        {
            "type": "Punctuator",
            "value": "(",
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
            "value": ")",
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
            "type": "Punctuator",
            "value": "{",
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
            "value": "(",
            "start": 28,
            "end": 29,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 5
                }
            },
            "range": [
                28,
                29
            ]
        },
        {
            "type": "Identifier",
            "value": "a",
            "start": 29,
            "end": 30,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 5
                },
                "end": {
                    "line": 2,
                    "column": 6
                }
            },
            "range": [
                29,
                30
            ]
        },
        {
            "type": "Punctuator",
            "value": "=",
            "start": 31,
            "end": 32,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 7
                },
                "end": {
                    "line": 2,
                    "column": 8
                }
            },
            "range": [
                31,
                32
            ]
        },
        {
            "type": "Identifier",
            "value": "await",
            "start": 33,
            "end": 38,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 9
                },
                "end": {
                    "line": 2,
                    "column": 14
                }
            },
            "range": [
                33,
                38
            ]
        },
        {
            "type": "Identifier",
            "value": "b",
            "start": 39,
            "end": 40,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 15
                },
                "end": {
                    "line": 2,
                    "column": 16
                }
            },
            "range": [
                39,
                40
            ]
        },
        {
            "type": "Punctuator",
            "value": ")",
            "start": 40,
            "end": 41,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 16
                },
                "end": {
                    "line": 2,
                    "column": 17
                }
            },
            "range": [
                40,
                41
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "start": 42,
            "end": 43,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 1
                }
            },
            "range": [
                42,
                43
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "start": 43,
            "end": 44,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 1
                },
                "end": {
                    "line": 3,
                    "column": 2
                }
            },
            "range": [
                43,
                44
            ]
        }
    ]
}